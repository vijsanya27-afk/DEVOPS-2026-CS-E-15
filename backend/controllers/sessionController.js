const Session = require("../models/Session");
const ExchangeRequest = require("../models/ExchangeRequest");
const mongoose = require("mongoose");

const allowedStatuses = ["Confirmed", "Completed", "Cancelled"];

exports.createSession = async (req, res) => {
  try {
    const userId = req.user?.id;
  const {
  exchangeRequest,
  scheduledAt,
  duration: rawDuration
} = req.body || {};

const duration = Number(rawDuration);

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    if (
      !exchangeRequest ||
      !mongoose.isValidObjectId(exchangeRequest) ||
      !scheduledAt ||
     !Number.isInteger(duration) ||
![30, 45, 60, 90].includes(duration)
    ) {
      return res.status(400).json({
        success: false,
        message: "Valid exchange request, date and duration are required"
      });
    }

  const date = new Date(scheduledAt);

if (
  typeof scheduledAt !== "string" ||
  !scheduledAt.trim() ||
  Number.isNaN(date.getTime()) ||
  date <= new Date()
) {
  return res.status(400).json({
    success: false,
    message: "Please provide a valid future session date and time"
  });
}

    const request = await ExchangeRequest.findById(exchangeRequest);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Exchange request not found"
      });
    }

    if (request.status !== "Accepted") {
      return res.status(400).json({
        success: false,
        message: "A session can only be scheduled for an accepted request"
      });
    }

    const requesterId = request.requester.toString();
    const recipientId = request.recipient.toString();
    const currentUserId = userId.toString();

    if (
      currentUserId !== requesterId &&
      currentUserId !== recipientId
    ) {
      return res.status(403).json({
        success: false,
        message: "You are not part of this exchange request"
      });
    }

    const participant =
      currentUserId === requesterId ? recipientId : requesterId;

const sessionEnd = new Date(date.getTime() + duration * 60 * 1000);

const overlappingSession = await Session.findOne({
  status: { $in: ["Pending", "Confirmed"] },
  $or: [
    { organizer: { $in: [requesterId, recipientId] } },
    { participant: { $in: [requesterId, recipientId] } }
  ],
  scheduledAt: { $lt: sessionEnd },
  $expr: {
    $gt: [
      {
        $add: [
          "$scheduledAt",
          { $multiply: ["$duration", 60000] }
        ]
      },
      date
    ]
  }
});

if (overlappingSession) {
  return res.status(409).json({
    success: false,
    message: "You or your partner already has a session scheduled during this time"
  });
}

    const session = await Session.create({
      exchangeRequest: request._id,
      organizer: userId,
      participant,
      scheduledAt: date,
      duration
    });

    return res.status(201).json({
      success: true,
      data: session
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create session"
    });
  }
};

exports.getSessions = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const sessions = await Session.find({
      $or: [
        { organizer: userId },
        { participant: userId }
      ]
    })
      .populate("exchangeRequest", "skillOffered skillWanted status")
      .sort({ scheduledAt: 1 });

    return res.json({
      success: true,
      data: sessions
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch sessions"
    });
  }
};

exports.updateSessionStatus = async (req, res) => {
  try {
    const userId = req.user?.id;
    const { status } = req.body || {};

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    if (!allowedStatuses.includes(status)) {
      return res.status(400).json({
        success: false,
        message: "Invalid session status"
      });
    }

    if (!mongoose.isValidObjectId(req.params.id)) {
      return res.status(400).json({
        success: false,
        message: "Invalid session ID"
      });
    }

    const session = await Session.findById(req.params.id);

    if (!session) {
      return res.status(404).json({
        success: false,
        message: "Session not found"
      });
    }

    if (
      session.organizer.toString() !== userId.toString() &&
      session.participant.toString() !== userId.toString()
    ) {
      return res.status(403).json({
        success: false,
        message: "You are not part of this session"
      });
    }
if (
  session.status === "Pending" &&
  status === "Confirmed" &&
  session.participant.toString() !== userId.toString()
) {
  return res.status(403).json({
    success: false,
    message: "Only the participant can confirm this session"
  });
}

const allowedTransitions = {
  Pending: ["Confirmed", "Cancelled"],
  Confirmed: ["Completed", "Cancelled"],
  Completed: [],
  Cancelled: []
};

if (!allowedTransitions[session.status]?.includes(status)) {
  return res.status(400).json({
    success: false,
    message: `Cannot change session status from ${session.status} to ${status}`
  });
}
    session.status = status;
    await session.save();

    return res.json({
      success: true,
      data: session
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to update session"
    });
  }
};