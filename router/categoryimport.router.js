const express = require('express');
const mongoose = require('mongoose');
const router = express.Router();

const categories = require("../data/categories");
const Category = require("../model/category.model");

router.route("/")
     .post(async (req,res) => {
        try {
              await Category.deleteMany({});
              const categoriesInDB = await Category.insertMany(categories.data);
              res.json(categoriesInDB);
        }catch(err){
            console.error("Error while adding data to DB:", err);
            res.json({message:"Error while adding data to DB"})
        }
     })

     module.exports = router;