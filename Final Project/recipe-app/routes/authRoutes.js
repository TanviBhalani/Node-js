const express = require("express");
const router = express.Router();
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");

router.get("/register",(req,res)=>{
  res.render("register");
});

router.post("/register", async (req,res)=>{
  const {username,password} = req.body;
  const hash = await bcrypt.hash(password,10);
  await User.create({username,password:hash});
  res.redirect("/login");
});

router.get("/login",(req,res)=>{
  res.render("login");
});

router.post("/login", async (req,res)=>{
  const {username,password} = req.body;
  const user = await User.findOne({username});
  if(!user) return res.send("User not found");

  const match = await bcrypt.compare(password,user.password);
  if(!match) return res.send("Wrong password");

  const token = jwt.sign({id:user._id, role:user.role},"secret123");
  res.cookie("token",token);
  res.redirect("/recipes");
});

router.get("/logout",(req,res)=>{
  res.clearCookie("token");
  res.redirect("/login");
});

module.exports = router;