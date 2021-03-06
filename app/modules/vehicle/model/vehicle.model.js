const mongoose = require("mongoose");

const vehicleSchema = new mongoose.Schema(
  {
    model: {
      type: Array,
    },
    brand: {
      type: String,
      // unique: true
    },
    type: String
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
