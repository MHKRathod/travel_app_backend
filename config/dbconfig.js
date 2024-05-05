const mongoose = require('mongoose');
// const dotenv = require('dotenv');

// dotenv.config();

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb://Localhost:27017/DB');
        console.log('MongoDB connected success');
    } catch (error) {
        console.error('Error connecting to MongoDB:', error);
    }
};
module.exports = connectDB;