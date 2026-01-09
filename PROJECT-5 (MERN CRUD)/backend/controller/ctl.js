const schema = require("../model/firstSchema")

module.exports.addData = async (req,res) => {
   await schema.create(req.body).then((data) => {
      console.log(req.body)
      res.json({"msg" : "Data added successfully", "data" : data})
   })
}


module.exports.getData = async (req,res) => {
   await schema.find({}).then((data) => {
      res.json({"data":data})
   })
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