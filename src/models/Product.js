const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const productSchema = new Schema({
    name: {
      type:String,
      required:true
    },
    price:{
        type:Number,
        required:true
    },
    similarprods:[ObjectId],
    categories:[String],
    number_reviews: {
      type:Number,
      required:true
    },
    shipping_days:{
        type:Number
    },
    createdAt: {
      type: Date,
      immutable:true
    }
  });


module.exports = mongoose.model('Product', productSchema);
