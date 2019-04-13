const vehicles = require("../vehicles");

const list = () => vehicles;

const show = userId => {
  let userIndex = vehicles.findIndex(vehicles => {
    return vehicles._id == userId;
  });
  return vehicles[userIndex];
};

const create = newVehicle => {
  newVehicle._id = vehicles[vehicles.length - 1]._id + 1;
  vehicles.push(newVehicle);
  return newVehicle;
};

module.exports = {
  list,
  show,
  create
};
