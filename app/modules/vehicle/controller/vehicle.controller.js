const { getvehicle, postvehicle } = require("../business/vehicle.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");

// register a new user
let post_vehicle = async function (req, res) {
  try {
    const result = await postvehicle(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

// login an existing user and generate refresh jwt token
let get_vehicle = async function (req, res) {
  try {
    const result = await getvehicle(req);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

module.exports = {
  get_vehicle,
  post_vehicle
};
