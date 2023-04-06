const express = require('express');
const router = express.Router();

const prodController = require('../controllers/prodController')

router.post('/', prodController.insight)



module.exports = router;