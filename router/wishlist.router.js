const express = require('express');
const Wishlist = require("../model/wishlist.model");

const verifyUser = require("../middleware/verifyuser");

const wishlistController = require("../controller/wishlistController");

const { createWishlistHandler, deleteWishlistHandler, getWishlistHandler } = wishlistController;

const router = express.Router();

router.route("/")
    .post(async (req, res) => {
        const newWishlist = new Wishlist(req.body);
        try {
            const savedWishlist = await newWishlist.save();
            res.status(201).json(savedWishlist);
        }catch(err){
            res.status(500).json({ message: "failed to create wishlist" })
        }
    }
    )

router.route("/:id")
    .delete(verifyUser, deleteWishlistHandler)

router.route("/")
    .get(verifyUser, getWishlistHandler)

module.exports = router;