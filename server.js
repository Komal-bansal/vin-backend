const express = require("express"),
  cors = require("cors"),
  bodyParser = require("body-parser"),
  { env } = require("./environment/environment"),
  { userRouter } = require("./app/modules/user/routes/user.routes"),
  { carRouter } = require("./app/modules/cars/routes/cars.routes"),
  { ownerRouter } = require("./app/modules/owner/routes/owner.route"),
  { vehicleRouter } = require("./app/modules/vehicle/routes/vehicle.route"),

  db = require("./db/mongoose"),
  port = process.env.PORT,
  app = express();

app.use(bodyParser.json());

app.use(cors());
app.use("/", userRouter);
app.use("/car", carRouter);
app.use("/owner", ownerRouter);
app.use("/owner", ownerRouter);
app.use("/vehicle", vehicleRouter);

app.listen(port, () => {
  console.log(`Server started at  ${port}, ${process.env.NODE_ENV}, ${process.env.MONGODB_URI}`);
});