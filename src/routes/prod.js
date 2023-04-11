import express from "express";
import { insight } from "../controllers/prodController.js";
import verifyToken from "../middleware/authJWT.js";

const router = express.Router();
const app = express();


router.post('/', verifyToken , insight)



export default router;