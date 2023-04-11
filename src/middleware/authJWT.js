import jwt from "jsonwebtoken";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();

const verifyToken = (req, res, next) => {
  if (
    req.headers &&
    req.headers.authorization &&
    req.headers.authorization.split(" ")[0] === "JWT"
  ) {
    jwt.verify(
      req.headers.authorization.split(" ")[1],
      process.env.API_SECRET,
      async function (err, decode) {
        if (err) {
          req.user = undefined;
          res.status(500).send({
            message: err,
          });
        } else {
          const user = await User.findOne({ _id: decode.id });
          req.user = user;
          console.log('verifying');
          next();
        }
      }
    );
  } else {
    req.user = undefined;
    res.send('NO'); 
  }
};
export default verifyToken;
