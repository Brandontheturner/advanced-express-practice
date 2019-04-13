const products = require("../products");

const list = () => products;

const show = userId => {
  let userIndex = products.findIndex(products => {
    return products._id == userId;
  });
  return products[userIndex];
};

const create = newProduct => {
  newProduct._id = products[products.length - 1]._id + 1;
  products.push(newProduct);
  return newProduct;
};

module.exports = {
  list,
  show,
  create
};
