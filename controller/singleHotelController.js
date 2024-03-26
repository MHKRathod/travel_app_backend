const Hotel = require("../model/hotel.model");

const singleHotelHandler = async(req,res) => {
    try{
        const {id} =req.params;
        const singleHotel = await Hotel.findById(id);
        res.json(singleHotel); 
    }
    catch(err){
        res.status(404).json({message: "No hotels found"});
    }
}

module.exports = singleHotelHandler;