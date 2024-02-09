const express = require('express');
const mongoose = require('mongoose');
const Wishlist = require('../model/wishlist.model');

const verifyUser = require('../middleware/verifyuser');
const router = express.Router();


// router.route("/")
//     .post(verifyUser, async (req, res) => {
//         try {
//             // Check if the request body contains data to add a wishlist item
//             if (req.body && req.body.item) {
//                 const newWishlistItem = new Wishlist({ item: req.body.item });
//                 const wishlistInDB = await newWishlistItem.save();
//                 return res.status(201).json(wishlistInDB);
//             }
//             // If no request body data, retrieve all wishlist items
//             const wishlist = await Wishlist.find({});
//             return res.json(wishlist);
//         } catch (err) {
//             return res.status(500).json({ message: "Could not process request", error: err });
//         }
//     });

router.route("/")
     .post(async (req,res) => {
        verifyUser(req, res, async () => {
        const newWishlist = new Wishlist(req.body);
        try{
             const wishlistInDB = await newWishlist.save();
             res.status(201).json(wishlistInDB);
        }
        catch(err){
        res.status(500).json({message: "Could not add wishlist to DB"})
        }
    })
     })


    //  router.route("/:id")
    //     .delete(async (req,res) => {
    //         try{
    //             await Wishlist.findByIdAndDelete(req.params.id);
    //             console.log(req.params.id)
    //             res.json({message: "Wishlist deleted successfully"});
    //         }
    //         catch(err){
    //             res.status(500).json({message: "Could not delete wishlist"})
    //         }
    //     })
  
    router.route("/:id")
    .delete(async (req, res) => {
        verifyUser(req, res, async () => {
        try {
            const wishlistItem = await Wishlist.findById(req.params.id);
            if (!wishlistItem) {
                return res.status(404).json({ message: "Wishlist item not found" });
            }
            await Wishlist.findByIdAndDelete(req.params.id);
            res.json({ message: "Wishlist deleted successfully" });
        } catch (err) {
            res.status(500).json({ message: "Could not delete wishlist" });

        }
    })
    
    })


    router.route("/")
       .post(async (req,res) => {
        verifyUser(req, res, async () => {
        try{
              const wishlist = await wishlist.find({});
              wishlist ? res.json(wishlist) : res.json({message:"no items in wishlist"});
        } 
        catch(err){
              res.status(500).json(err)   
        }   
    })
            })

     module.exports = router;
    
