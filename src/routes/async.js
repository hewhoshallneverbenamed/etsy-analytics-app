const express = require('express');
const router = express.Router();
const asyncController = require('../controllers/asyncController')

router.get("/", asyncController.testing);

router.get("/callback/:exp", (req,res)=>{
    function callback(num1, myCallback) {
        let square = num1**2 ;
        return myCallback(square);
      }
    res.send(callback(req.params.exp,(squared)=>{
        let squaredx2 = squared * 2;
        return `your number squared and multiplied by 2 is ${squaredx2}`;
    }))
})

module.exports = router;