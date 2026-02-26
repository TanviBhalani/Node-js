const express = require("express");
const router = express.Router();
const Recipe = require("../models/Recipe");
const {auth} = require("../middleware/auth");

router.get("/recipes",auth, async (req,res)=>{
  const recipes = await Recipe.find().populate("createdBy");
  res.render("recipeList",{recipes});
});

router.get("/my-recipes",auth, async (req,res)=>{
  const recipes = await Recipe.find({createdBy:req.user.id});
  res.render("myRecipes",{recipes});
});

router.get("/add",auth,(req,res)=>{
  res.render("recipeForm");
});

router.post("/add",auth, async (req,res)=>{
  const {title,ingredients,steps} = req.body;

  await Recipe.create({
    title,
    ingredients,
    steps,
    createdBy:req.user.id
  });

  res.redirect("/recipes");
});

module.exports = router;