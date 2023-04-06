const { ObjectId } = require('mongodb');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const shopSchema = new Schema({
    name: {
      type:String,
      required:true
    },
    owner:String,
    description:String,
    totalsales:Number,
    starating:Number,
    number_reviews: {
      type:Number,
      required:true
    },
    categories:[{
        name:String,
        products:[ObjectId],
    }],  
    createdAt: {
      type: Date,
      immutable:true,
      required:true
    }
  });


module.exports = mongoose.model('Shop', shopSchema);
