const express = require("express")
const ctl = require("../controller/ctl")
const route = express.Router()
const auth = require("../middleware/auth")

route.post("/register" , ctl.register)
route.post("/login" , ctl.login)

route.get("/profile" ,auth, ctl.profile)

route.post("/changePass" ,auth, ctl.changePass)



module.exports = route