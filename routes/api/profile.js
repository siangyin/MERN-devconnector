const express = require("express");
const { modelNames } = require("mongoose");
const router = express.Router();

// @route   GET api/users
// @desc    test route
// @access  Public
router.get("/", (req, res) => res.send("profile route"));

module.exports = router;
