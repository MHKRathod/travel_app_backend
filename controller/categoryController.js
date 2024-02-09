const Category = require("../model/category.model");

const categoryHandler = async (req,res) => {
    try{
        const categoriesInDB = await Category.find({})
        res.json(categoriesInDB)
    }
    catch(err){
        res.status(404).json({message:"no categories found"})
    }
}

module.exports= categoryHandler;