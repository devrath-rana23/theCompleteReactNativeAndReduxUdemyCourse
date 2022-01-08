require('./models/User');//we have not stored this inside some variable or we have not exported anything inside this file the reason is that Mongoose really expects to only see that line of code right there executed exactly one time.If we import whis file into multiple other files of our project , then mongoose.model('User', userSchema) line will be executed a second or third or fourth time.And this will give error message that you have already defined a model called user and can't define it again, so to overcome that we only require User.js in index.js
const express = require('express');
const { MongoClient } = require('mongodb');
const bodyParser = require('body-parser');//it is a helper library that will automatically pass information associated with the body property of incoming requests.
const authRoutes = require('./routes/authRoutes');

//this app object depicts our entire application and we can now attach some route handlers with it
const app = express();

// app.use(bodyParser.json());//deprecated so use express.json//needs to add this line directly above authRoutes otherwise our app will first send the reuest to request handlers in authRoutes file before any data can be parsed. Now this will ensure that all our json information will be parsed first then we run our request handler.

app.use(express.json());

//to use that router for our application
app.use(authRoutes);//this will attach to application all the required request handlers associated with routers 

//mongodb+srv://<username>:<password>@cluster0.2ort3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority
const mongoUri = "mongodb+srv://root:root%40123@cluster0.2ort3.mongodb.net/myFirstDatabase?retryWrites=true&w=majority";

const client = new MongoClient(mongoUri, { useNewUrlParser: true, useUnifiedTopology: true });

client.connect(err => {
    console.log(err)
    const collection = client.db("test").collection("devices");
    // perform actions on the collection object
    client.close();
});

//req object represents the incoming HTTP request
// res object represents the outgoing response.
// This function is called automatically on root route as it is callback function
app.get('/', (req, res) => {
    res.send('Hi there!')
});

app.listen(3000, () => {
    console.log('Listening on port 3000');
});