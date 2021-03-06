const { msg } = require("../../../config/messages"),
  { Vehicle } = require("../model/vehicle.model");

// registration
const postvehicle = async data => {
  let body = data;
  let vehicle = new Vehicle(body);
  let response = await vehicle.save();
  if (response)
    return {
      result: response,
      status: 200,
      message: msg.success
    };
};

const getvehicle = async data => {
  let vehicle = await Vehicle.find();
  return {
    result: vehicle,
    status: 200,
    message: msg.success
  };
};

module.exports = {
  getvehicle,
  postvehicle
};
