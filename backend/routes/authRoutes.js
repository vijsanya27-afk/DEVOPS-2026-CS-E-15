
const express = require("express");
const {
  registerUser,
  loginUser,
  forgotPassword,
  resetPassword
} = require("../controllers/authController");
const router = express.Router();

// POST /api/auth/register
router.post("/register", registerUser);
router.post("/login", loginUser);
// POST /api/auth/forgot-password
router.post("/forgot-password", forgotPassword);

// POST /api/auth/reset-password
router.post("/reset-password", resetPassword);
module.exports = router;
