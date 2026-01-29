const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    username : {
        type : String,
        required : true
    },
    password : {
        type : String,
        required : true
    },
    city : {
        type : String,
        required : true
    },
    phone : {
        type : Number,
        required : true
    },
    address : {
        type : String,
        required : true
    },
    readonly : {
        type : String,
        required : true
    },
})

const firstSchema = mongoose.model("AdminPanel", schema)

module.exports = firstSchema