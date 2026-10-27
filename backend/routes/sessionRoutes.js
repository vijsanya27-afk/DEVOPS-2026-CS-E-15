const express = require("express");
const router = express.Router();

const {
createSession,
getSessions,
updateSessionStatus
} = require("../controllers/sessionController");

router.post("/", createSession);
router.get("/", getSessions);
router.patch("/:id/status", updateSessionStatus);

module.exports = router;
