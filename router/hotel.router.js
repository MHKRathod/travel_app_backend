const express = require('express');
const router = express.Router();

const Hotel = require("../model/hotel.model");

router.route("/")
.get( async (req,res) => {
    const hotelCategory = req.query.category
    try {
        let hotelsInDB
        if(hotelCategory){
            hotelsInDB = await Hotel.find({category : hotelCategory});
        }
        else{
            hotelsInDB = await Hotel.find({});
        }
         hotelsInDB ? res.json(hotelsInDB) : res.status(404).json({message: "No hotels found"});
     }catch(err){
        console.log(err)
    }
})

module.exports = router;