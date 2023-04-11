import { ObjectId } from "mongodb";
import mongoose from "mongoose";
const Schema = mongoose.Schema;
// const Shop = require('Shop')

const productSchema = new Schema({
    title:String,
    price:{
        type:Number,
        required:true
    },
  //   belongstoshop:{
  //     type:String,
  //     required:true,
  //     rel: Shop
  // },
    similarprods:[ObjectId],
    categories:[String],
    number_reviews: {
      type:Number
    },
    shipping_days:{
        type:Number
    },
    createdAt: {
      type: Date,
      immutable:true
    }
  });


export default mongoose.model('Product', productSchema);
