const mongoose = require("mongoose");
const User = require("../models/User");

exports.register = async (req, res, next) => {
  await User.create({
    username: req.body.user,
    password: req.body.pass
  });
  console.log("has bee saved");
  res.send("success saved");
};

exports.login = async (req, res) => {
  let user = await User.findOne({ username: req.body.user });
  if (user != null) {
    if (user.password == req.body.pass) {
      console.log("logged in successfully");
    } else {
      res.send("wrong password");
    }
  } else {
    res.send("User not found");
  }
};
