const comments = require("../comments");

// returning the comments file as a list
const list = () => comments;

// function whose purpose is to show the id of an individual contact.
const show = userId => {
  let userIndex = comments.findIndex(comment => {
    return comment._id == userId;
  });
  return comments[userIndex];
  // what is the c doing, does it stand for comments? Is it a parameter, in the find function when grabbing the id using find, read find docs or explaination
};

const create = newComment => {
  newComment._id = comments[comments.length - 1]._id + 1;
  comments.push(newComment);
  return newComment;
};

module.exports = {
  list,
  show,
  create
};
