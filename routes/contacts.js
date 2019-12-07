const express = require('express');
const router = express.Router();

// @route  GET api/contact
// @desc   Get Contacts
// @access Private

router.get('/', (req, res) => {
  res.send('Get Contacts');
});

// @route  POST api/contact
// @desc   Create a Contact
// @access Private

router.post('/', (req, res) => {
  res.send('Create a Contact');
});

// @route  PUT api/contact:id
// @desc   Update a Contact
// @access Private

router.put('/:id', (req, res) => {
  res.send('Update a Contact');
});

// @route  DELETE api/contact:id
// @desc   Delete a Contact
// @access Private

router.delete('/:id', (req, res) => {
  res.send('Delete a Contact');
});

module.exports = router;
