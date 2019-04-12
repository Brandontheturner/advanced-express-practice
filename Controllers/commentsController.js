const comments = require("../comments");

// returning the comments file as a list
const list = (req, res) => res.json(comments);

// function whose purpose is to show the id of an individual contact.
const show = (req, res) => {
  let userId = comments.findIndex(comments => {
    return comments._id == req.params.id;
  });
  res.json(comments[userId]);
  // what is the c doing, does it stand for comments? Is it a parameter, in the find function when grabbing the id using find, read find docs or explaination
};

const create = (req, res) => {
  comments.push(comments);
  res.json(comments);
};

module.exports = {
  list,
  show,
  create
};
