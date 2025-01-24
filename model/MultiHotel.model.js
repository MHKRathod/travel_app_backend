const mongoose = require('mongoose');

// Define the schema for multi-hotels
const multiHotelSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true, // Ensures that each hotel has a unique id
  },
  name: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  image: {
    type: String, // URL of the main image of the hotel
    required: true,
  },
  imageArr: {
    type: [String], // Array of URLs for additional images
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  numberOfBathrooms: {
    type: Number,
    required: true,
  },
  numberOfBeds: {
    type: Number,
    required: true,
  },
  numberOfGuest: {
    type: Number,
    required: true,
  },
  numberOfBedrooms: {
    type: Number,
    required: true,
  },
  numberOfStudies: {
    type: Number,
    required: true,
  },
  hostName: {
    type: String,
    required: true,
  },
  hostJoinedOn: {
    type: String,
    required: true,
  },
  amenities: {
    type: [String], // List of amenities available in the hotel
    required: true,
  },
  healthAndSafety: {
    type: [String], // Health and safety features
    required: true,
  },
  houseRules: {
    type: [String], // List of house rules for guests
    required: true,
  },
  propertyType: {
    type: String,
    required: true,
  },
  isCancelable: {
    type: Boolean,
    required: true,
  }
});

// Create and export the model for multihotels collection
const MultiHotel = mongoose.model('Multihotel', multiHotelSchema);
module.exports = MultiHotel;
