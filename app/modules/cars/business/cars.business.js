const { msg } = require("../../../config/messages"),
  { Car } = require("../model/cars.model"),
  { pickCarResponse } = require("../../../helpers/pickResponse.helper");

// registration
const postCar = async data => {
  let body = pickCarResponse(data);
  // let userExist = await Car.findOne({ email: body.email })
  let car = new Car(body);
  let response = await car.save();
  if (response)
    return {
      result: pickCarResponse(response),
      status: 200,
      message: msg.postCarMsg
    };
};

const getCar = async data => {
  // var body = pickCarResponse(data);
  let car = await Car.findOne({ Number: data.params.no });
  return {
    result: pickCarResponse(car),
    status: 200,
    message: msg.success
  };
};

module.exports = {
  getCar,
  postCar
};
