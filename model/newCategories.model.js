const mongoose = require('mongoose');

// Define the schema for categories
const newCategoriesSchema = new mongoose.Schema({
  category: {
    type: String,
    required: true,
    unique: true // Ensure categories are unique
  }
});

// Create and export the model for categories
const NewCategory = mongoose.model('NewCategory', newCategoriesSchema);
module.exports = NewCategory;
