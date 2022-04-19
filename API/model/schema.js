const mongoose = require("mongoose")

const todoList = mongoose.Schema({
    goal: {
        type : String,
        required : true
    }
},{
    timestamps : true
})

module.exports = mongoose.model('To Do List',todoList)