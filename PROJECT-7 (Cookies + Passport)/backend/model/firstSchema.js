const mongoose = require("mongoose")

const schema = new mongoose.Schema({
    name : {
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

})


const firstSchema = mongoose.model("Customers" , schema)

module.exports = firstSchema