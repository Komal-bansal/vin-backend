const { Router } = require("express"),
  vehicleRouter = Router(),
  { get_vehicle, post_vehicle } = require("../../vehicle/controller/vehicle.controller");

vehicleRouter.post("/", post_vehicle);
vehicleRouter.get("/", get_vehicle);

module.exports = {
  vehicleRouter
};
