const hotels = require("../data/hotels");
const Hotel = require("../model/hotel.model");

const hotelHandler = async(req,res) => {
    const hotelCategory = req.query.hotelCategory
    try{
        if(hotelCategory){
          const hotelsInDB = await Hotel.find({category: hotelCategory}) 
        }
        else{
            const hotelsInDB = await Hotel.find({})
        }
        hotelsInDB ? res.json(hotelsInDB) : res.status(404).json({message: "No hotels found"});
    }
    catch(err){
       console.log(err)
    }
    
} 

module.exports = hotelHandler;