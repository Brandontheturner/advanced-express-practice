const contacts = require("../../contacts");

// returning the contacts file as a list
const list = () => {
  return contacts;
};

// function whose purpose is to show the id of an individual contact.
const show = id => {
  return contacts.find(c => c.id === id);
  // what is the c doing, does it stand for contacts? Is it a parameter, in the find function when grabbing the id using find, read find docs or explaination
};

// adding a new contact entry to the contact array.
const add = newContact => {
  contacts.push(newContact);
  return contacts;
};

const remove = contact => {
  //first part finds contact to remove by index id
  const index = contacts.findIndex(c => c.id === contact.id);
  return contacts.slice(index, 1);
  //returning the index with the selected id removed, what is the 1 doing though? look at the slice method and see what parameters it requires it might require a second parameter to function properly
};

module.exports = {
  list,
  show,
  add,
  remove
};
