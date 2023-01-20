const mongoose = require('mongoose')

const todoSchema = new mongoose.Schema({
  task:{
    type:String,
    required:[true,'Task name in required']
  },
  description:{
    type:String,
  },
  progress:{
    type:String,
    default:"pending"
  }
})

const todo = new mongoose.model('Todo',todoSchema)
module.exports = todo