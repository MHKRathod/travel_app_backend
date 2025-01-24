// In your router (e.g., multihotel.router.js)
const express = require('express');
const MultiHotel = require('../model/MultiHotel.model'); // Path to your model
const router = express.Router();

// POST route to add data to the collection
router.post('/add-hotel', async (req, res) => {
    try {
        const hotelData = req.body; // Get the hotel data from the request body
        const newHotel = new MultiHotel(hotelData); // Create a new instance of the model with the data
        
        await newHotel.save(); // Save the data to the database
        res.status(201).json({ message: 'Hotel data added successfully', hotel: newHotel });
    } catch (error) {
        console.error('Error adding hotel:', error);
        res.status(500).json({ message: 'Error adding hotel data', error: error.message });
    }
});

router.post('/add-multiple', async (req, res) => {
    try {
        const hotelsData = req.body; // Get array of hotel data from the request
        const hotels = await MultiHotel.insertMany(hotelsData); // Insert multiple hotels

        res.status(201).json({
            message: 'Multiple hotel data added successfully',
            hotels: hotels,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: 'Failed to add hotel data', error });
    }
});


router.get('/find/:id', async (req, res) => {
    try {
        const hotelId = req.params.id; // Extract ID from request parameters
        const hotel = await MultiHotel.findOne({ id: hotelId }); // Find the hotel by its ID

        if (!hotel) {
            return res.status(404).json({ message: 'Hotel not found' });
        }

        res.status(200).json({ message: 'Hotel found', hotel });
    } catch (error) {
        console.error('Error fetching hotel:', error);
        res.status(500).json({ message: 'Error fetching hotel data', error: error.message });
    }
});


router.get('/', async (req, res) => {
    try {
        const hotels = await MultiHotel.find(); // Fetch all hotels from the database

        if (!hotels || hotels.length === 0) {
            return res.status(404).json({ message: 'No hotels found' });
        }

        res.status(200).json({ message: 'Hotels retrieved successfully', hotels });
    } catch (error) {
        console.error('Error fetching hotels:', error);
        res.status(500).json({ message: 'Error fetching hotels data', error: error.message });
    }
});

module.exports = router;
