const express = require('express');
//  For creating jwt
const jwt = require('jsonwebtoken');
// To get access to users model start
const mongoose = require('mongoose');
const User = mongoose.model('User');
// To get access to users model end

const router = express.Router();

router.post('/signup', async (req, res) => {
    const { email, password } = req.body;

    try {
        console.log("HI")
        const user = new User({ email, password });
        await user.save();

        const token = jwt.sign({ userId: user._id }, 'MY_SECRET_KEY');
        res.send({ token });
    } catch (err) {
        return res.status(422).send(err.message);
    }

});

router.post('/signin', async (req, res) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(422).send({ error: 'User must provide email and password' });
    }

    const user = await User.findOne({ email });

    if (!user) {
        return res.status(422).send({ error: 'Invalid password or email' });
    }

    try {
        await user.comparePassword(password);
        const token = jwt.sign({
            userId: user._id
        }, 'MY_SECRET_KEY');
        res.send({token});
    } catch (err) {
        console.log(err)
        return res.status(422).send({ error: 'Invalid password or email' });
    }
});

//need to export router to make sure it can be used by our application 
module.exports = router;