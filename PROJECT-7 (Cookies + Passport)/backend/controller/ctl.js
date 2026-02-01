const schema = require("../model/firstSchema")

module.exports.login = (req,res) => {
    res.json({ msg: "API Running" })
}

module.exports.logout = (req, res) => {
  res.clearCookie("admin")
  return res.json({ msg: "Logged out" })
}

module.exports.loginAdmin = async (req,res) => {
    const { name , password} = req.body

    const admin = await schema.findOne({name})
    
    if(!admin){
        return res.json({msg: "User not found"})
    }
    if(admin.password !== password){
        return res.json({msg : "Wrong Password"})
    }

    res.cookie("admin", admin._id , {
        httpOnly : true,
        maxAge : 1000 * 60 *60 * 24
    })
    
    return res.json({msg : "Login Successfully"})

}

module.exports.dashboard = (req,res) => {
   if (req.cookies.admin) {
    res.json({ auth: true })
  } else {
    res.json({ auth: false })
  } 
}


module.exports.addData = async (req,res) => {
   await schema.create(req.body).then((data) => {
    console.log(req.body)
    res.json({"msg" : "Data added successfully", "data" : data})
   })
}

module.exports.getData = async (req, res) => {
  if (!req.cookies.admin) {
    return res.json({ auth: false, data: [] })
  }

  const data = await schema.find({})
  res.json({ auth: true, data })
}


module.exports.deleteData = async (req,res) => {
    await schema.findByIdAndDelete(req.query.id).then((data) => {
        res.json({"msg" : "Data deleted Successfully" , "data" : data})
    })
}


module.exports.editData = async(req,res) => {
    let singleData = await schema.findById(req.query.id)
    res.json(singleData)
}

module.exports.updateData = async(req,res) => {
    await schema.findByIdAndUpdate(req.body._id , req.body).then((data) => {
        console.log(req.body)
        res.json({"msg": "Data updated Successfully" , "data":data })
    })
}