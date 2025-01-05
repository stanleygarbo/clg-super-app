const mongoose = require("mongoose");

const parentSchema = mongoose.Schema(
  {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
      required: false,
    },
    lastName: {
      type: String,
      required: true,
    },

    occupation: {
      type: String,
      required: false,
    },
    companyName: {
      type: String,
      required: false,
    },
    companyAddress: {
      type: String,
      required: false,
    },

    telephone: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Parent = mongoose.model("Parent", parentSchema);

const guardianSchema = mongoose.Schema({
  relationship: {
    type: String,
    required: true,
  },
});

const Guardian = Parent.discriminator("Guardian", guardianSchema);

module.exports = { Parent, Guardian };
