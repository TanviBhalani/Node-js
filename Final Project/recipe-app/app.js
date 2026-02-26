const express = require("express");
const app = express();

require("./config/db");

app.set("view engine","ejs");

app.use(express.urlencoded({extended:true}));
app.use(require("cookie-parser")());
app.use(express.static("public"));

// ✅ Home route added
app.get("/", (req,res)=>{
  res.redirect("/login");
});

app.use("/", require("./routes/authRoutes"));
app.use("/", require("./routes/recipeRoutes"));

app.listen(3005,()=>{
  console.log("Server running on 3005");
});