const mongoose=require('mongoose');

const task=new mongoose.Schema({
    task:String,
    descripton:String,
    startTime:String,
    endTime:String,
    complete:{
        type:Number,
        default: 0
    }
















    
})

const Task=mongoose.model("Task",task)

module.exports={Task}