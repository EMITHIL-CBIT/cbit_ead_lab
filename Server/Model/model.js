const mongoose = require('mongoose')

const modelSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    branch:{
        type:String,
        required:true
    },
    section:{
        type:Number,
        required:true
    },
    roll_no:{
        type:Number,
        required:true
    },
    exam_status:{
        type:Boolean,
        required:true,
        default:false
    }
    
})


module.exports=mongoose.model('test',modelSchema)