const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    model: String,
    brand: String,
  },
  {
    timestamps: false,
    versionKey: false
  }
);

var Vehicle = mongoose.model("vehicle", vehicleSchema);

module.exports = {
  Vehicle
};
