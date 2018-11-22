const { Router } = require("express"),
  carRouter = Router(),
  { post_car, get_car } = require("../../cars/contoller/cars.controller");

carRouter.post("/", post_car);
carRouter.get("/:no", get_car);

module.exports = {
  carRouter
};
