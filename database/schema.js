const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const mySchema = new Schema({
    "name": {type:String},
},
//{ collection : 'myData' }
);    

module.exports = mongoose.model('myData',mySchema);