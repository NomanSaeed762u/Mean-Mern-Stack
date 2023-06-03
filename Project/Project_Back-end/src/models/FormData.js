const mongoose = require("mongoose")
const dataSchema= new mongoose.Schema({
    date: {
        type: Date,
        required: true,
      },
      unit: {
        type: String,
        required: true,
      },
      teamLeader: {
        type: String,
        required: true,
      },
      machine: {
        type: String,
        required: true,
      },
      production: {
        type: Number,
        required: true,
      },
      rejection: {
        type: Number,
        required: true,
      },


      
})
const Data= mongoose.model("Data",dataSchema)
module.exports =Data