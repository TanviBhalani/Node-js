const schema = require("../model/firstSchema")
const bcrypt = require("bcryptjs")
const moment = require("moment")
const jwt = require("jsonwebtoken")


module.exports.register = async (req,res) => {

    let user = await schema.findOne({email : req.body.email})

    if(user){
        return res.json({msg : "User already registered!!"})
    }

    req.body.password = await bcrypt.hash(req.body.password,10)
    req.body.createdAt = moment().format('MMMM Do YYYY, h:mm:ss a');

   console.log(req.body)
   await schema.create(req.body).then((Data) => {
    res.json({msg : "User Register Successfully!!" , user : Data})
   })
}

module.exports.login = async(req,res) => {
    console.log(req.body)
    let user = await schema.findOne({email : req.body.email})

    if(!user){
        return res.json({msg : "User not registered!!"})
    }

    if(await bcrypt.compare(req.body.password , user.password)){
        let token = jwt.sign({user : user}, "rnw", {expiresIn : '1h'})
        res.json({msg : "User Logged in Successfully!!", user : user, token : token})
    }
    else{
        res.json({msg : "User Password is wrong!"})
    }
}


// JWT => JSON  WEB TOKEN
// It is divided into three parts 
// 1. header  2.payload  3.Signature/security


module.exports.profile = async (req,res) => {
    res.json({profile : req.user})
}



