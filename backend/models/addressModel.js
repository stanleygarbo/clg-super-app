const mongoose = require("mongoose");

const addressSchema = mongoose.Schema({
  houseNum: {
    type: Number,
    required: false,
  },
  streetBrgy: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  district: {
    type: String,
    required: true,
  },
});

const homeAddressSchema = mongoose.Schema({
  ...addressSchema.obj,
  province: {
    type: String,
    required: true,
  },
});

const cityAddressSchema = mongoose.Schema({
  ...addressSchema.obj,
  province: {
    type: String,
    required: false,
  },
});

module.exports = { homeAddressSchema, cityAddressSchema };
