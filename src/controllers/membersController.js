const members = require("../models/Members");



exports.index = (req, res) => res.json(members);

exports.post_new_member = (req, res) => {
  const newMember = {
    name: req.body.name,
    email: req.body.email,
    status: "active",
  };
  members.push(newMember);

  res.send("ok");
};

exports.update_member = (req, res,next) => {
  try {
    const found = members.some((member) => member.email === req.params.email);
    if (!found) {
      throw new Error("Member not found!");
    }
      const updMember = req.body;
      members.forEach((member) => {
        if (member.email === req.params.email) {
          member.name = updMember.name ? updMember.name : member.name;
          member.email = updMember.email ? updMember.email : member.email;
          res.send("member updated");
        }
      });
    
  } catch (error) {
    console.log(error);
    return next(error)
  }
};

exports.delete_member = (req, res,next) => {
  try {
    const found = members.some((member) => member.email === req.params.email);
    if (!found) {
      throw new Error("Member not found!");
    }
    res.send(members.filter((member) => member.email !== req.params.email));
  } catch(error) {
    console.log(error);
    return next(error)
  }
};

