const mongoose = require("mongoose");

const courseSchema=mongoose.Schema({
    title:String,
    sub:String,
    videos:Number  
})

module.exports=mongoose.model('courseSchema',courseSchema);