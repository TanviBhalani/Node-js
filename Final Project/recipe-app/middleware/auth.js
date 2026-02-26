const jwt = require("jsonwebtoken");

exports.auth = (req,res,next)=>{
  const token = req.cookies.token;
  if(!token) return res.redirect("/login");

  try{
    const decoded = jwt.verify(token,"secret123");
    req.user = decoded;
    next();
  }catch{
    res.redirect("/login");
  }
};