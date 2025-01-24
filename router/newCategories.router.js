const express = require('express');
const Category = require('../model/newCategories.model'); // Adjust the path to the Category model
const router = express.Router();

// GET route to list all categories
router.get('/list', async (req, res) => {
  try {
    const categories = await Category.find(); // Fetch all categories from the database
    res.status(200).json({
      message: 'Categories retrieved successfully',
      categories: categories
    });
  } catch (error) {
    console.error('Error fetching categories:', error);
    res.status(500).json({ message: 'Error fetching categories', error: error.message });
  }
});

router.post('/add-multiple', async (req, res) => {
  try {
    const categoriesData = req.body; // Array of category objects
    const categories = await Category.insertMany(categoriesData);

    res.status(201).json({
      message: 'Categories added successfully',
      categories: categories
    });
  } catch (error) {
    console.error('Error adding categories:', error);
    res.status(500).json({ message: 'Error adding categories', error: error.message });
  }
});


module.exports = router;
