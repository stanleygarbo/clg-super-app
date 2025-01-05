const mongoose = require("mongoose");

const addressSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Address = mongoose.model("Address", addressSchema);

const homeAddressSchema = mongoose.Schema({
  province: {
    type: String,
    required: true,
  },
});

const HomeAddress = Address.discriminator("HomeAddress", homeAddressSchema);

const cityAddressSchema = mongoose.Schema({
  province: {
    type: String,
    required: false,
  },
});

const CityAddress = Address.discriminator("CityAddress", cityAddressSchema);

module.exports = { HomeAddress, CityAddress };
