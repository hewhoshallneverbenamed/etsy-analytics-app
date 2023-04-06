const mongoose = require("mongoose");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  await User.create({
    username: req.body.user,
    password: req.body.pass,
  });
  console.log("has bee saved");
  res.send("success saved");
};

exports.login = async (req, res) => {
  let un = req.body.user;
  let user = await User.findOne({ username: un });
  if (user != null) {
    if (user.password == req.body.pass) {
      res.send("logged in successfully");
    } else {
      res.send("wrong password");
    }
  } else {
    res.send("User not found");
  }
};
