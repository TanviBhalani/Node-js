const express = require("express")
const port = 2000

const app = express()
let data = []

app.set("view engine", "ejs")
app.use(express.urlencoded({extended:true}))

app.get("/", (req, res) => {
    res.render("index",{data})
})

app.post("/addData", (req, res) => {
    let obj = {
        id : Date.now(),
        ...req.body
    }
    data.push(obj)
    res.redirect("/")
})

app.get("/deleteData/:id", (req, res) => {
    let newData = data.filter((item) => item.id != req.params.id)
    data=newData
    res.redirect("/")
})

app.get("/editData", (req, res) => {
    let singleData = data.find((item) => item.id == req.query.id)
    res.render("edit", {singleData})
}) 

app.post("/updateData", (req, res) => {
    let singleData = data.find((item) => item.id == req.body.id)
    singleData.task = req.body.task
    singleData.priority = req.body.priority
    singleData.status = req.body.status
    res.redirect("/")
})

app.listen(port, (err) => {
    err ? console.log(err) : console.log(`Server started on port ${port}`)
})