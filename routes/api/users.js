const express = require("express");
const { modelNames } = require("mongoose");
const router = express.Router();

// @route   GET api/users
// @desc    test route
// @access  Public
router.get("/", (req, res) => res.send("user route"));

module.exports = router;
