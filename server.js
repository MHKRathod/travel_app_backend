const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig');
const cors = require('cors');

// Import routers
const hotelsRouter = require("./router/hotel.router");
const singleHotelRouter = require("./router/singlehotel.router");
const authRouter = require("./router/auth.router");
const categoryRouter = require("./router/category.router");
const hotelDataAddedToDBRouter = require("./router/dataimport.router");
const categoryDataAddedToDBRouter = require("./router/categoryimport.router");
const wishlistDataAddedToDBRouter = require("./router/wishlist.router");
const multihotelRouter = require('./router/multihotel.router');
const newCategoriesRouter = require('./router/newCategories.router');

// Import MultiHotel schema
// const MultiHotel = require('./model/MultiHotel.model'); // Assuming your schema is in 'models/Multihotel.js'

const app = express();
app.use(cors());

app.use('/favicon.ico', (req, res) => {
    res.status(404).end();
});

app.use(express.json());
connectDB();

const PORT = 3500;

// // Sample hotel data to insert into the collection
// const sampleHotelData = {
//   id: 'uuid1',
//   name: 'Sooty\'s Hideout',
//   category: 'National Parks',
//   image: 'https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/7e7f4c4a-c496-4844-bd02-44e276b41718.jpeg?im_w=720',
//   imageArr: [
//     'https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/1479b1a0-ee19-49a6-94e4-3c43049776c0.jpeg?im_w=720',
//     'https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/cd0c1eba-74bd-4d6b-9ec3-20c6dd8b5226.jpeg?im_w=720',
//     'https://a0.muscache.com/im/pictures/miso/Hosting-614375154474735110/original/3ac04d3f-b4f5-4d01-8258-8083979c792e.jpeg?im_w=720',
//   ],
//   address: 'Shangarh',
//   city: 'HP',
//   state: 'Himachal Pradesh',
//   country: 'India',
//   price: 2750,
//   rating: 4.5,
//   numberOfBathrooms: 3,
//   numberOfBeds: 4,
//   numberOfGuest: 10,
//   numberOfBedrooms: 3,
//   numberOfStudies: 3,
//   hostName: 'Sankalp Avirjaan',
//   hostJoinedOn: 'May 2018',
//   amenities: ['Kitchen', 'Wifi', 'Pets Allowed'],
//   healthAndSafety: ['No Smoke alarm', 'No Carbon monoxide alarm', 'Nearby lake, river, other body of water'],
//   houseRules: [
//     'Check-in: After 2:00 pm',
//     'Check out: 11:00 am',
//     'Pets are allowed',
//     'No smoking',
//     'No parties or events',
//   ],
//   propertyType: 'House',
//   isCancelable: false,
// };

// Route to insert sample hotel data into multiHotels collection
// app.post("/api/insert-hotel", async (req, res) => {
//   try {
//     const hotel = new MultiHotel(sampleHotelData);
//     await hotel.save(); // Save to MongoDB
//     res.status(201).json({ message: "Hotel added to multiHotels collection", hotel });
//   } catch (err) {
//     res.status(500).json({ message: "Error adding hotel", error: err.message });
//   }
// });

// app.get("/", (req, res) => {
//   res.send("Hello World");
// });

app.use("/api/hoteldata", hotelDataAddedToDBRouter);
app.use("/api/categorydata", categoryRouter);
app.use("/api/hotels", singleHotelRouter);
app.use("/api/categories", categoryDataAddedToDBRouter);
app.use("/api/wishlist", wishlistDataAddedToDBRouter);
app.use("/api/hotels", hotelsRouter);
app.use("/api/auth", authRouter);
app.use('/api/multihotels', multihotelRouter);
app.use('/api/newCategories',newCategoriesRouter)

mongoose.connection.once("open", () => {
  console.log("Database connected");
  app.listen(process.env.PORT || PORT, () => {
    console.log("Server is running on port", process.env.PORT || PORT);
  });
});
