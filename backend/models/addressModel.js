const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  houseNum: {
    type: Number,
  },
  streetBrgy: {
    type: String,
  },
  city: {
    type: String,
  },
  district: {
    type: String,
  },
});

const homeAddressSchema = mongoose.Schema({
  ...addressSchema.obj,
  province: {
    type: String,
  },
});

const cityAddressSchema = mongoose.Schema({
  ...addressSchema.obj,
  province: {
    type: String,
  },
});

module.exports = { homeAddressSchema, cityAddressSchema };
