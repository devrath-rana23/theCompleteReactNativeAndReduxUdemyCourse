const express = require('express');
const mongoose = require('mongoose');
const requireAuth = require('../middlewares/requireAuth');

//we use this instead of importing like above to prevent error of multiple calls of track model so we need to reuire it in index.js like we did for Users model
const Track = mongoose.model('Track');

const router = express.Router();

//By writing below code this middleware will be applied to all routes in this file no need to assign them separately as parameter like we did for root '/' route in index.js file
router.use(requireAuth);

router.get('/tracks', async (req, res) => {

    const tracks = await Track.find({ userId: req.user._id });

    res.send({ tracks });
});

/*
SAMPLE INPUT FOR BELOW ENDPOINT

{
	"name": "My new track",
	"locations": [
		{
			"timestamp":10000000000,
			"coords": {
				"latitude":100,
				"longitude":100,
				"altitude":100,
				"accuracy":100,
				"heading":100,
				"speed":100
			}
		}
		]
}

*/
router.post('/tracks', async (req, res) => {
    const { name, locations } = req.body;
    if (!name || !locations) {
        return res.status(422).send({ error: 'You must provide a name and locations.' });
    }

    try {
        const track = new Track({ name, locations, userId: req.user._id });
        await track.save();
        res.send(track);
    } catch (err) {
        res.status(422).send({ error: err.message })
    }
});

module.exports = router;