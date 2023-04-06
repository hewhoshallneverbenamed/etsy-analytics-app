const mongoose = require("mongoose");
const Product = require("../models/Product");

exports.insight = async (req,res,next) => {
    const id = req.body.id; //642ee0fd18ef0809ab70b975
    const proddetails = await Product.findOne({_id: id});
    console.log(proddetails);
    res.send("ok");
}
