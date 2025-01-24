const mongoose = require('mongoose');

const wishlistSchema = new mongoose.Schema({
    hotelId: { type: mongoose.Schema.Types.ObjectId, ref: 'Hotel', required: true }
});

const Wishlist = mongoose.model('Wishlist', wishlistSchema);
module.exports = Wishlist;
