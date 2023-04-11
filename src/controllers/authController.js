import jwt from "jsonwebtoken";
import bcrypt from "bcrypt";
import User from "../models/User.js";
import dotenv from "dotenv";
dotenv.config();
export const signup = async (req, res) => {
  const newuser = await User.create({
    fullName: req.body.fullName,
    email: req.body.email,
    role: req.body.role,
    password: bcrypt.hashSync(req.body.password, 8),
  });
  res.send(newuser);
};

export const signin = async (req, res) => {
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(404).send({
        message: "User Not found.",
      });
    }
    
    //comparing passwords
    var passwordIsValid = bcrypt.compareSync(req.body.password, user.password);
    // checking if password was valid and send response accordingly
    if (!passwordIsValid) {
      return res.status(401).send({
        accessToken: null,
        message: "Invalid Password!",
      });
    }

    //signing token with user id
    var token = jwt.sign(
      {
        id: user.id,
      },
      process.env.API_SECRET,
      {
        expiresIn: 86400,
      }
    );
    //responding to client request with user profile success message and  access token .
    res.status(200).send({
      user: {
        id: user._id,
        email: user.email,
        fullName: user.fullName,
      },
      message: "Login successfull",
      accessToken: token,
    });
    
};
