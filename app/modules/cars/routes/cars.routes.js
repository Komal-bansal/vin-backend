const { Router } = require("express"),
  carRouter = Router(),
  { post_car, get_car } = require("../../cars/contoller/cars.controller"),
  { jwt_middleware } = require("./../../../jwt.middleware");
carRouter.use(jwt_middleware);

carRouter.post("/", post_car);
carRouter.get("/:no", get_car);

module.exports = {
  carRouter
};
