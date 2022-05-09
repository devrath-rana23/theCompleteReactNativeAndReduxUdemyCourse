const mongoose = require('mongoose');

const pointSchema = new mongoose.Schema({
    timestamp: Number,
    coords: {
        latitude: Number,
        longitude: Number,
        altitude: Number,
        accuracy: Number,
        heading: Number,
        speed: Number
    }
});

const trackSchema = new mongoose.Schema({

    //This is how we indicate that user ID is a reference to some other object stored inside of Mongo DB
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    name: {
        type: String,
        default: ''
    },
    // pointSchema is separate schemObject which refers to various objects stored inside this array. pointSchema iss file mein bnare to make sense
    locations: [pointSchema]
});

// Only loading Track inside mongoose as pointSchema is already used inside trackSchema

mongoose.model('Track', trackSchema);