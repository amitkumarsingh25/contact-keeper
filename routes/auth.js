const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');

// @route  GET api/auth
// @desc   Get logged in user
// @access Private
router.get('/', (req, res) => {
  res.send('Get logged in user');
});

// @route  POST api/auth
// @desc   Get User & get Token
// @access Public
router.post('/', (req, res) => {
  res.send('Get User & get Token');
});

module.exports = router;
