const ExchangeRequest = require("../models/ExchangeRequest");
const mongoose = require("mongoose");
const allowedStatuses = ["Accepted", "Rejected", "Cancelled"];

exports.createRequest = async (req, res) => {
  try {
    const { recipient, skillOffered, skillWanted } = req.body || {};
    const requester = req.user?.id;

    if (!requester) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

     if (
  !recipient ||
  typeof skillOffered !== "string" ||
  !skillOffered.trim() ||
  typeof skillWanted !== "string" ||
  !skillWanted.trim()
) {
      return res.status(400).json({
        success: false,
        message: "Recipient, offered skill and wanted skill are required"
      });
    }
if (!mongoose.isValidObjectId(recipient)) {
  return res.status(400).json({
    success: false,
    message: "Invalid recipient ID"
  });
}

    if (requester.toString() === recipient.toString()) {
      return res.status(400).json({
        success: false,
        message: "You cannot send a request to yourself"
      });
    }

    const request = await ExchangeRequest.create({
      requester,
      recipient,
      skillOffered: skillOffered.trim(),
      skillWanted: skillWanted.trim()
    });

    return res.status(201).json({
      success: true,
      data: request
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to create exchange request"
    });
  }
};

exports.getRequests = async (req, res) => {
  try {
    const userId = req.user?.id;

    if (!userId) {
      return res.status(401).json({
        success: false,
        message: "Authentication required"
      });
    }

    const requests = await ExchangeRequest.find({
      $or: [{ requester: userId }, { recipient: userId }]
    }).sort({ createdAt: -1 });

    return res.json({
      success: true,
      data: requests
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: "Failed to fetch exchange requests"
    });
  }
};

exports.updateRequestStatus = async (req, res) => {
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
        message: "Invalid request status"
      });
    }
if (!mongoose.isValidObjectId(req.params.id)) {
  return res.status(400).json({
    success: false,
    message: "Invalid request ID"
  });
}
    const request = await ExchangeRequest.findById(req.params.id);

    if (!request) {
      return res.status(404).json({
        success: false,
        message: "Exchange request not found"
      });
    }

    if (status === "Cancelled") {
    if (request.requester.toString() !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Only the requester can cancel this request"
        });
      }

      if (request.status !== "Pending") {
        return res.status(400).json({
          success: false,
          message: "Only pending requests can be cancelled"
        });
      }
    } else {
     if (request.recipient.toString() !== userId.toString()) {
        return res.status(403).json({
          success: false,
          message: "Only the recipient can accept or reject this request"
        });
      }

      if (request.status !== "Pending") {
        return res.status(400).json({
          success: false,
          message: "Only pending requests can be updated"
        });
      }
    }

    request.status = status;
    await request.save();

    return res.json({
      success: true,
      data: request
    });
  } catch (error) {
    if (error.name === "CastError") {
      return res.status(400).json({
        success: false,
        message: "Invalid request ID"
      });
    }

    return res.status(500).json({
      success: false,
      message: "Failed to update exchange request"
    });
  }
};
