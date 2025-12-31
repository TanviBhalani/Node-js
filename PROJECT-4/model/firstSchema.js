const { request } = require("express")
const mongoose = require("mongoose")

const schema = new mongoose.Schema({
   bookname : {
      type: String,
      required : true
   },
    authorname : {
      type: String,
      required : true
   },
   price : {
      type: Number,
      required : true
   },
   quantity : {
      type: Number,
      required : true
   },
   year : {
      type: Number,
      required : true
   },
})

const firstSchema = mongoose.model("person", schema)

module.exports = firstSchema