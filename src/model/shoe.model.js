const mongoose = require('mongoose');

const shoeSchema = new mongoose.Schema({
    name:{type:String,required:true},
    price:{type:String,required:true},
    img:{type:String},
    id:{type:Number,required:true},
    quantity:{type:Number,required:true},
},{
    versionKey:false,
    timestamps:true
})

const shoemodal =  mongoose.model('shoe', shoeSchema);
module.exports = shoemodal;