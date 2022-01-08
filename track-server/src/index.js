//we have not stored this inside some variable or we have not exported anything inside this file the reason is that Mongoose really expects to only see that line of code right there executed exactly one time.If we import whis file into multiple other files of our project , then mongoose.model('User', userSchema) line will be executed a second or third or fourth time.And this will give error message that you have already defined a model called user and can't define it again, so to overcome that we only require User.js in index.js
require('./models/User');
require('./models/Track');
const express = require('express');
const mongoose = require("mongoose");
const authRoutes = require('./routes/authRoutes');
const trackRoutes = require('./routes/trackRoutes');

//include the middle ware to be used
const requireAuth = require('./middlewares/requireAuth');

//this app object depicts our entire application and we can now attach some route handlers with it
const app = express();

// app.use(bodyParser.json());//deprecated so use express.json//needs to add this line directly above authRoutes otherwise our app will first send the reuest to request handlers in authRoutes file before any data can be parsed. Now this will ensure that all our json information will be parsed first then we run our request handler.

app.use(express.json());

//to use that router for our application
//this will attach to application all the required request handlers associated with routers 
app.use(authRoutes);
app.use(trackRoutes);

//mongodb+srv://<username>:<password>@cluster0.2ort3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority

const mongoUri = "mongodb+srv://root123:rootpassword@cluster0.2ort3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

if (!mongoUri) {
    throw new Error(
        `MongoURI was not supplied.  Make sure you watch the video on setting up Mongo DB!`
    );
}
mongoose.connect(mongoUri);
mongoose.connection.on("connected", () => {
    console.log("Connected to mongo instance");
});
mongoose.connection.on("error", (err) => {
    console.error("Error connecting to mongo", err);
});

//req object represents the incoming HTTP request
// res object represents the outgoing response.
// This function is called automatically on root route as it is callback function
app.get('/', requireAuth, (req, res) => {
    res.send(`Your email: ${req.user.email}`)
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});