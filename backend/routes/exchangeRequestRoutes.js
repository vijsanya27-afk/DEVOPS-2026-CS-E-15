const express = require("express");
const router = express.Router();

const {
  createRequest,
  getRequests,
  updateRequestStatus
} = require("../controllers/exchangeRequestController");

router.post("/", createRequest);
router.get("/", getRequests);

router.patch("/:id/accept", (req, res, next) => {
req.body = { ...req.body, status: "Accepted" };
  next();
}, updateRequestStatus);

router.patch("/:id/reject", (req, res, next) => {
  req.body = { ...req.body, status: "Rejected" };
  next();
}, updateRequestStatus);

router.patch("/:id/cancel", (req, res, next) => {
req.body = { ...req.body, status: "Cancelled" };
  next();
}, updateRequestStatus);

module.exports = router;