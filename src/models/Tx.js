const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const txSchema = new Schema({
    productid:{
        type:ObjectId,
        required:true
    },
    date:{
        type:Date,
        default: () => Date.now(),
        required:true
    },
    numberofreviews:Number,

  });


module.exports = mongoose.model('Tx', txSchema);
