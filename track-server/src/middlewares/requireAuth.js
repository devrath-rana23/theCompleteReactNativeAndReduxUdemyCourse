const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const User = mongoose.model('User');

//next is called after response is generated which is basically a signal that the request can move on to the next middleware inside of our chain, and if no middleware is available to run then we will use our '/' request handler to process our request

module.exports = (req, res, next) => {
    console.log(req.headers)
    const { authorization } = req.headers;
    //authorization === "Bearer token"

    if (!authorization) {
        return res.status(401).send({ error: "You must be logged in." });
    }

    const token = authorization.replace('Bearer ', '');
    jwt.verify(token, 'MY_SECRET_KEY', async (err, payload) => {
        if (err) {
            return res.status(401).send({ error: 'You must be logged in.' });
        }

        const { userId } = payload;
        const user = await User.findById(userId);

        //attaching the user details to our request object so that if any page reuire this data it can e made available
        req.user = user;

        //will call the next middleware in chain of middlewares
        next();
    });
};