const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    }
});


//here we use normal function instead of arrow function as callback function as in case of arrow function this keyword will be in context of whole document or file which we don't want and for normal function it will be for this particular user being saved
userSchema.pre('save', function (next) {
    const user = this;

    //below logic says that if user has not modified password no need to salt our password just move on Salt is used along with hashing to make encrypted password stronger as salt is randomly generated and then concatenated with our hashed password.Which makes figuring out original password difficult even if hacker is aware of the hashing technique used.
    if (!user.isModified('password')) {
        return next();
    }

    bcrypt.genSalt(10, (err, salt) => {

        //not successfully generated salt
        if (err) {
            return next(err);
        }

        bcrypt.hash(user.password, salt, (err, hash) => {
            if (err) {
                return next(err);
            }
            user.password = hash;
            next();
        });
    });
});

// Automate password checking process. We can easily call this function anytime user tries to login
userSchema.methods.comparePassword = function (candidatePassword) {

    const user = this;

    // Creating Promise to use the async await whenever we compare passwords. The decrypt library that we are going to use for actual comparision relies upon callbacks entirely.
    return new Promise((resolve, reject) => {
        bcrypt.compare(candidatePassword, user.password, (err, isMatch) => {
            if (err) {
                return reject(err);
            }
            if (!isMatch) {
                reject(false);
            }

            resolve(true);
        });
    });
};

//This following call will associate our schema with our mongoose library

mongoose.model('User', userSchema);