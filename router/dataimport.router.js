const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const hotels = require("../data/hotels");
const Hotel = require("../model/hotel.model");

router.route("/")
    .post(async (req, res) => {
        try {
            await Hotel.deleteMany({}); // Use deleteMany() instead of remove()
            const hotelsInDB = await Hotel.insertMany(hotels.data);
            res.json(hotelsInDB);
        } catch (err) {
            console.error("Error while adding data to DB:", err);
            res.status(500).json({ message: "Could not add data to DB" });
        }
    });

    module.exports = router;