const express = require("express");
const router = express.Router();

const Category = require("../model/category.model");

router.route("/")
    .get(async (req,res) => {
        try {
             const categoriesInDB = await Category.find({});
             res.json(categoriesInDB)  
        }catch(err){
             res.status(404).json({message:"no categories found"})
        }
    })

    module.exports =router;