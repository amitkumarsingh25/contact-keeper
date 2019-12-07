const express = require('express');
const router = express.Router();

// @route  POST api/users
// @desc   Regiter a User
// @access Public

router.post('/', (req, res) => {
  res.send('Register a Users');
});

module.exports = router;
