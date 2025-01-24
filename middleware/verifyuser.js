const express = require("express");
require('dotenv').config();

const jwt = require("jsonwebtoken");

const verifyUser = (req, res, next) => {
    const token = req.header('Authorization');
    if (token) {
        // Extract the token from "Bearer <token>"
        const bearerToken = token.split(' ')[1];
        jwt.verify(bearerToken, process.env.ACCESS_TOKEN, (err, user) => {
            if (err) {
                return res.status(403).json({ message: "Invalid token" });
            } else {
                req.user = user;
                next();
            }
        });
    } else {
        return res.status(401).json({ message: "Authorization token is required" });
    }
};


module.exports = verifyUser;