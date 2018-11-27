const mongoose = require("mongoose");

const carSchema = new mongoose.Schema(
  {
    Number: String,
    EngineNo: String,
    chasisNo: String,
    color: String,
    ManufactureDate: String,
    CarMake: String,
    CarModel: String
  },
  {
    timestamps: false,
    versionKey: false
  }
);

var Car = mongoose.model("car", carSchema);

module.exports = {
  Car
};
