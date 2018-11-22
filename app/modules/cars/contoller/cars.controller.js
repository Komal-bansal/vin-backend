const { getCar, postCar } = require("../business/cars.business");
const { errorHandler } = require("../../../helpers/errorHandling.helper");

// register a new user
let post_car = async function(req, res) {
  try {
    const result = await postCar(req.body);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

// login an existing user and generate refresh jwt token
let get_car = async function(req, res) {
  try {
    const result = await getCar(req);
    res.status(200).send(result);
  } catch (e) {
    res.status(400).send(errorHandler(e));
  }
};

module.exports = {
  get_car,
  post_car
};
