import  mongoose  from "mongoose";
import Product from "../models/Product.js";

export const insight = async (req,res,next) => {
    const id = req.body.id; //642ee0fd18ef0809ab70b975
    const proddetails = await Product.findOne({_id: id});
    
    res.send(proddetails);
}
