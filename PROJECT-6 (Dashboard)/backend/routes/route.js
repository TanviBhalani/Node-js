const express = require("express")
const ctl = require("../controller/ctl")
const auth = require("../middleware/auth")
const route = express.Router()

route.get("/" , ctl.login)
route.post("/login", ctl.loginAdmin)

// Protected routes
route.get("/dashboard", auth, ctl.dashboard)
route.get("/getData", auth, ctl.getData)
route.post("/addData", auth, ctl.addData)
route.delete("/deleteData", auth, ctl.deleteData)
route.put("/updateData", auth, ctl.updateData)


module.exports = route