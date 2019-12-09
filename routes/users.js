const express = require('express');
const router = express.Router();
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator');

const User = require('../models/Users');
// @route  POST api/users
// @desc   Regiter a User
// @access Public

router.post(
  '/',
  [
    check('name', 'Please add Name')
      .not()
      .isEmpty(),
    check('email', 'Please add a valid email Id').isEmail(),
    check(
      'password',
      'Password must be at least 6 characters in length'
    ).isLength({
      min: 6
    })
  ],
  async (req, res) => {
    // res.send('Register a Users');
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res.status(400).json({ msg: 'Email id already taken!' });
      }

      user = new User({
        name,
        email,
        password
      });

      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);
      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };

      jwt.sign(
        payload,
        config.get('jwtSecret'),
        {
          expiresIn: 360000
        },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
      // return res.send('User Saved!');
    } catch (err) {
      console.log(err.message);
      res.status(500).json({ msg: 'Server Error!' });
    }

    // res.send('Passed');
  }
);

module.exports = router;
