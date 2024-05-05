const mongoose = require('mongoose');
const ashlistSchema = new mongoose.Schema({
    hotelId:{type:String,required:true}
})

const Ashlist = mongoose.model("Asshlist",ashlistSchema);
module.exports = Ashlist;

