const mongoose = require('mongoose');
const intakeSchema = new mongoose.Schema({
    driverName:{type:String,required:true},
    email:{type:String, required:true},
    carModel:{type:String, required:true},
    serviceBay:{type:String, required:true},
    symptoms:{type:String},
    status:{type:String, default:'pending'}
}, {timestamps:true});
module.exports=mongoose.model('Intake', intakeSchema); 