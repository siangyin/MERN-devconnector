const express = require("express");
const { modelNames } = require("mongoose");
const router = express.Router();

// @route   POST api/users
// @desc    REGISTER route
// @access  Public
router.post("/", (req, res) => {res.send("posts route")});

module.exports = router;
