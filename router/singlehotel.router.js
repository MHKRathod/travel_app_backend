const express = require("express");
const router = express.Router();

const Hotel = require("../model/hotel.model");

router.route("/:id")
    .get(async (req,res) => {
        try{
            const {id} = req.params;
            const singleHotel = await Hotel.findById(id);
            res.json(singleHotel);
        }
        catch(error){
            res.status(404).json({message: "No hotels found"});
        }
    })

    module.exports = router;