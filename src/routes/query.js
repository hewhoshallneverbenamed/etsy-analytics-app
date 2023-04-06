const express = require('express');
const router = express.Router();

//url parameters
router.get("/", (req, res) => {
    console.log("full query:" + JSON.stringify(req.query));
    console.log("the name:" + req.query.name);
    res.send("query");
  });

module.exports = router;