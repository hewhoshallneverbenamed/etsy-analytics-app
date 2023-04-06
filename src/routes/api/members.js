const express = require("express");
const router = express.Router();

//import controllers
const memberController = require('../../controllers/membersController')

//http methods
//get (display)
router.get("/", memberController.index);
//post (add)
router.post("/", memberController.post_new_member);

// put (update)
router.put("/:email", memberController.update_member);

//delete
router.delete("/:email", memberController.delete_member);


module.exports = router;
