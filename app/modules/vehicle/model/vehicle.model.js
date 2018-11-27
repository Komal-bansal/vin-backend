const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    model: {
      type: String,
      unique: true
    },
    brand: {
      type: String,
      // unique: true
    },
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
