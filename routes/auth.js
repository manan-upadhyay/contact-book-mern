const express = require("express");
const router = express.Router();

// @route   GET api/auth
// @desc    Get loggedin user
// @access  Private

router.get("/", (req, res) => {
  res.send("Get loggedin User");
});

// @route   POST api/auth
// @desc    Auth user and get token
// @access  Public

router.post("/", (req, res) => {
  res.send("Login User");
});

module.exports = router;
