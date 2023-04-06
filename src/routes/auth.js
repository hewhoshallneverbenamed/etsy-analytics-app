const express = require('express');
const router = express.Router();

const authController = require('../controllers/authController')

router.get('/index', (req,res)=>{
    res.send('here is the dashboard');
})
router.post("/login", authController.login);
router.post("/register", authController.register);


module.exports = router;