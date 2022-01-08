const express = require('express');

// To get access to users model start
const mongoose = require('mongoose');
const User = mongoose.model('User');
// To get access to users model end

const router = express.Router();

router.post('/signup', (req, res) => {
    console.log(req.body);
    res.send('You made a post request');
});

//need to export router to make sure it can be used by our application 
module.exports = router;