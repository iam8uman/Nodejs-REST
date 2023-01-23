const mongoose = require("mongoose");

const courseSchema=mongoose.Schema({
    title:{type:String,require:true},
    description:{type:String,require:true},
    videos:{type:Number,require:true},
    active:Boolean
})

module.exports=mongoose.model('courseSchema',courseSchema);