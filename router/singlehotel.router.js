const express = require("express");
const router = express.Router();

const singleHotelHandler = require("../controller/singleHotelController");

// Route to fetch a single hotel by ID
router.route("/:id").get(singleHotelHandler);

module.exports = router;
