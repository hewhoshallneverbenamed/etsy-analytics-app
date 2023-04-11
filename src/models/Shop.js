import {ObjectId} from "mongodb";
import mongoose from "mongoose";
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

export default mongoose.model('Shop', shopSchema);
