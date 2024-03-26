const express = require('express');
const mongoose = require('mongoose');
const connectDB = require('./config/dbconfig');
const cors = require('cors');

const hotelsRouter = require("./router/hotel.router");
const singleHotelRouter = require("./router/singlehotel.router");
const authRouter = require("./router/auth.router");
const categoryRouter = require("./router/category.router")
const hotelDataAddedToDBRouter = require("./router/dataimport.router");
const categoryDataAddedToDBRouter = require("./router/categoryimport.router");
const wishlistDataAddedToDBRouter = require("./router/wishlist.router");

const app = express();
app.use(cors());

app.use('/favicon.ico', (req, res) => {
    res.status(404).end();
  });


app.use(express.json());
connectDB();

const PORT = 3500;

app.get("/",(req,res) => {
    res.send("Hello World");
})

app.use("/api/hoteldata",hotelDataAddedToDBRouter);
app.use("/api/categorydata",categoryRouter);
app.use("/api/hotels",singleHotelRouter);
app.use("/api/categories",categoryDataAddedToDBRouter);
app.use("/api/wishlist",wishlistDataAddedToDBRouter);
app.use("/api/hotels",hotelsRouter);
app.use("/api/auth",authRouter);



mongoose.connection.once("open", () => {
    console.log("databse connected")
    app.listen(process.env.PORT|| PORT, () => {
        console.log("Server is running on port")
    })
})


