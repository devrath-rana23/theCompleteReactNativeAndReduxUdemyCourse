# npm init -y
# npm install bcrypt express jsonwebtoken mongoose nodemon
# node src/index.js
# visit https://cloud.mongodb.com/
# if you change your wifi network navigate to => Network Access in MongoDB UI and click on add IP address
# Replace test inside scripts with dev in package.json => "dev": "nodemon src/index.js" => this will automatically restart our server if any changes made in our project
# Now run "npm run dev" to run server

#### Mongo Db

So inside of Mongo DB, we're going to eventually store some information related to all the users who create an account with an app in our user's collection
You can essentially imagine users collection as being like a array with a ton of objects inside of it, where each bject represents one user who has created an account.
Now behind the scenes there is not actually an array of objects.
A very different storage mechanism is used in MongoDB.Nonetheless we can kind of imagine that is what is happening
But to work with that data in our MongoDB we are going to use the "library" called "Mongoose". When we install Mongoose we need to instruct it about different data we've stored inside of Mongo DB So we have to do a little bit of configuration with Mongoose before we ever work with Mongo. Specifically we need to tell Mongoose thate there is a users collection and we will essentially do that by creating a user's model.And use that user's model to manipulate everything inside our user's collection

# YOU have to create a sample database in mongo db from ui before creating new one using code in index.js
####

