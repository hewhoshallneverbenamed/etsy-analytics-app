import express from "express";
import { signup, signin } from "../controllers/authController.js";
import verifyToken from "../middleware/authJWT.js";
const app = express();
const router = express.Router();

// app.use(verifyToken);

router.post("/register", signup);

router.post("/login", signin);

router.get("/hiddencontent", verifyToken, function (req, res) {
    if (!req.user) {
      res.status(403)
        .send({
          message: "Invalid JWT token"
        });
    }
    if (req.user.role == "admin") {
      res.status(200)
        .send({
          message: "Congratulations! but there is no hidden content"
        });
    } else {
      res.status(403)
        .send({
          message: "Unauthorised access"
        });
    }
  });


export default router;