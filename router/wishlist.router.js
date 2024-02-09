const express = require('express');
const mongoose = require('mongoose');
const Wishlist = require('../model/wishlist.model');

const verifyUser = require('../middleware/verifyuser');
const { verify } = require('jsonwebtoken');
const {createWishlistHandler,deleteWishlistHandler,getWishlistHandler} = require("../controller/wishlistController");
const router = express.Router();



router.route("/")
     .post(verifyUser,createWishlistHandler)
     .get(verifyUser, getWishlistHandler)


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
    .delete(verifyUser,deleteWishlistHandler)



    // router.route("/")
    //    .post(verifyUser,getWishlistHandler)

     module.exports = router;
    
