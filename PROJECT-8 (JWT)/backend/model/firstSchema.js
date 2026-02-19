const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
    email : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    createdAt : {
        type : String,
        required : true
    }
})

const firstSchema = mongoose.model("User", schema)

module.exports = firstSchema