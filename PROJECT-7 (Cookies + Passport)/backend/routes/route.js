const express = require("express")
const ctl = require("../controller/ctl")
const passport = require("../middleware/localSt")
const route = express.Router()

route.get("/", ctl.login)

route.post("/login", passport.authenticate("localSt"), ctl.loginAdmin)

route.get("/logout" ,passport.checkAuth, ctl.logout)


route.get("/dashboard", passport.checkAuth, ctl.dashboard)

route.post("/addData", passport.checkAuth, ctl.addData)

route.get("/getData", passport.checkAuth, ctl.getData)

route.delete("/deleteData", passport.checkAuth, ctl.deleteData)

route.put("/updateData", passport.checkAuth, ctl.updateData)


module.exports = route