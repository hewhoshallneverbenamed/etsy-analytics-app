import {ObjectId} from "mongodb";
import mongoose from "mongoose";
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


export default mongoose.model('Tx', txSchema);
