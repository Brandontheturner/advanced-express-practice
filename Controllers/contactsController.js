const contacts = require("../contacts");

// returning the contacts file as a list
const list = (req, res) => res.json(contacts);

// function whose purpose is to show the id of an individual contact.
const show = (req, res) => {
  let userId = contacts.findIndex(contacts => {
    return contacts._id == req.params.id;
  });
  res.json(contacts[userId]);
  // what is the c doing, does it stand for contacts? Is it a parameter, in the find function when grabbing the id using find, read find docs or explaination
};

const create = (req, res) => {
  contacts.push(req.body);
  res.json(contacts);
};

module.exports = {
  list,
  show,
  create
};
