const contacts = require("../contacts");

// returning the contacts file as a list
const list = () => contacts;

// function whose purpose is to show the id of an individual contact.
const show = userId => {
  let userIndex = contacts.findIndex(contact => {
    return contact._id == userId;
  });
  return contacts[userIndex];
};

const create = newContact => {
  newContact._id = contacts[contacts.length - 1]._id + 1;
  contacts.push(newContact);
  return newContact;
};

module.exports = {
  list,
  show,
  create
};
