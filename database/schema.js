const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    "key":{type: Number, required:true},
    "name": {type:String},
    "age":{type:Number},
    "address":{type: String},
    "date":{type:Date,default:Date.now},
    "active": {type: Boolean, default: true}
},
//{ collection : 'myData' }
);    

module.exports = mongoose.model('myData',mySchema);