const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    Name: String,
    Num: String,
    phone: Number,
    Address: String,
    PurchaseDate: Number
  },
  {
    timestamps: false,
    versionKey: false
  }
);

var Owner = mongoose.model("owner", ownerSchema);

module.exports = {
  Owner
};
