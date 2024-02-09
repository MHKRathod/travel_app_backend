const express = require('express');
const router = express.Router();


const hotelHandler = require("../controller/hotelController")
const Hotel = require("../model/hotel.model");

router.route("/")
.get(hotelHandler)

module.exports = router;