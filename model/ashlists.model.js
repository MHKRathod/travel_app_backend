const mongoose = require('mongoose');

const ashlistSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }
});

const Ashlist = mongoose.model('Ashlist', ashlistSchema);
module.exports = Ashlist;
