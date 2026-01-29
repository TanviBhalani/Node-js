const schema = require("../model/firstSchema")

module.exports.login = (req,res) => {
    res.render("login")
}

module.exports.loginAdmin = async (req, res) => {
  const { username, password } = req.body

  const admin = await schema.findOne({ username })

  if (!admin) return res.json({ msg: "User not found" })
  if (admin.password !== password) return res.json({ msg: "Wrong password" })

  // SET COOKIE
  res.cookie("admin", admin._id, {
    httpOnly: true,
    sameSite: "lax",   // IMPORTANT
    secure: false,
    maxAge: 1000 * 60 * 60 * 24
  })

  res.json({ msg: "Login success" })
}


module.exports.dashboard = (req, res) => {
  if (req.cookies.admin) {
    return res.json({ auth: true })
  }
  return res.json({ auth: false })
}



module.exports.addData = async (req, res) => {
    await schema.create(req.body).then((data) => {
        console.log(req.body)
        res.json({"msg":"Data Added successfully" , "data" : data})
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

module.exports.editData = async (req,res) => {
   let singleData = await schema.findById(req.query.id)
   res.json(singleData)
}


module.exports.updateData = async(req,res) => {
   await schema.findByIdAndUpdate(req.body._id, req.body).then((data) => {
      res.json({ msg: "Data updated Successfully" , "data" : data});
   })
   
}

module.exports.logout = (req, res) => {
  res.clearCookie("admin")
  res.json({ msg: "Logged out" })
}