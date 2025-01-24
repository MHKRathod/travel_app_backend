const { v4: uuidv4 } = require('uuid'); // Import the uuid package

const categoriesData = [
    "National Parks", "Tiny Homes", "Farms", "Golfing", "Island", 
    "Campervans", "Cabins", "Design", "Amazing Pools", "Lakefront",
    "Surfing", "A-frames", "Treehouses", "Tropical", "Bed & Breakfast", 
    "Caves", "Shared Homes", "Earth Homes", "Countryside", "Luxe", 
    "Amazing Views", "Castle", "Iconic Sites", "Historical Homes"
];

// Generate categories with UUIDs
const categoriesWithUUID = categoriesData.map(category => ({
    id: uuidv4(), // Generate a unique ID for each category
    category: category // The category name
}));

// Assuming you have a Category model to save data to MongoDB
const Category = require('../model/category.model'); // Adjust the path to where your model is located

// Save the categories to the database
Category.insertMany(categoriesWithUUID)
    .then(() => console.log('Categories successfully inserted into the database'))
    .catch((error) => console.error('Error inserting categories:', error));
