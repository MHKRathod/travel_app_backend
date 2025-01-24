const mongoose = require('mongoose');

// Define your hotel schema
const hotelSchema = new mongoose.Schema({
    name: { type: String, required: true },
    imageArr: { type: [String], default: [] },
    amenities: { type: [String], default: [] },
    healthAndSafety: { type: [String], default: [] },
    houseRules: { type: [String], default: [] },
});

const Hotel = mongoose.model('Hotel', hotelSchema);

async function fixMissingFields() {
    try {
        // Connect to your MongoDB
        await mongoose.connect('mongodb://127.0.0.1:27017/DB', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log('Connected to the database.');

        // Find all hotels and fix missing fields
        await Hotel.updateMany(
            { $or: [
                { imageArr: { $exists: false } },
                { amenities: { $exists: false } },
                { healthAndSafety: { $exists: false } },
                { houseRules: { $exists: false } }
            ] },
            {
                $set: {
                    imageArr: [],
                    amenities: [],
                    healthAndSafety: [],
                    houseRules: []
                }
            }
        );

        console.log('Missing fields fixed for all hotels.');
        mongoose.connection.close();
    } catch (error) {
        console.error('Error:', error);
    }
}

fixMissingFields();
