const express = require('express');
require('dotenv').config();

const mongoose = require("mongoose");
const CryptoJS = require("crypto-js");
const jwt = require('jsonwebtoken');
const router = express.Router();

const User = require("../model/user.model");

router.route("/register")
  .post(async (req, res) => {
    try {
      // Log the incoming request
      console.log("Request Body:", req.body);

      // Create a new user instance
      const newUser = new User({
        username: req.body.username,
        number: req.body.number,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.PASSWORD_SECRET_KEY).toString(),
      });

      // Save the user to the database
      const savedUser = await newUser.save();
console.log('User successfully saved to DB:', savedUser);


      // Respond with the saved user data
      res.status(201).json(savedUser);
    } catch (err) {
      console.error("Registration Error:", err);

      // Handle errors
      res.status(500).json({ message: "Could not register user" });
    }
  });

     router.route("/login")
          .post(async (req,res) => {
            try{
                const user = await User.findOne({number: req.body.number})
                !user && res.status(401).json({message: "incoreect mobile number"})
                
                const decodedPassword = CryptoJS.AES.decrypt(user.password,process.env.PASSWORD_SECRET_KEY).toString(CryptoJS.enc.Utf8)
                decodedPassword !== req.body.password && res.status(401).json({message: "incoreect password"});   
                

                const {password,...rest} = user._doc;
                const accessToken = jwt.sign({username: user.username},process.env.ACCESS_TOKEN)


                res.json({...rest,accessToken})

            }
            catch(err){
                console.log(err)
            }
          })

     module.exports = router;