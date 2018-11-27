const mongoose = require("mongoose");

const ownerSchema = new mongoose.Schema(
  {
    Name: String,
    Num: String,
    phone: Number,
    Address: String,
    PurchaseDate: String
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
