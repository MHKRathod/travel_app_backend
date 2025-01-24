const Hotel = require("../model/hotel.model");

const singleHotelHandler = async (req, res) => {
    try {
      const { id } = req.params;
  
      // Log the id being queried
      console.log("Querying for hotel with id:", id);
  
      // Query the database for the document where `id` matches
      const hotel = await Hotel.findOne({ id });
  
      // Log the raw query result
      console.log("Raw query result:", hotel);
  
      // Check if the hotel exists
      if (!hotel) {
        console.log("No hotel found with id:", id);
        return res.status(404).json({ message: "No hotels found" });
      }
  
      // Return the hotel as the response
      res.status(200).json(hotel);
    } catch (err) {
      console.error("Error fetching single hotel:", err);
      res.status(500).json({ message: "Internal Server Error", error: err.message });
    }
  };
  
  module.exports = singleHotelHandler;
  