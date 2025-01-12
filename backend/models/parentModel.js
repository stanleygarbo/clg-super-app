const mongoose = require("mongoose");

const parentSchema = mongoose.Schema({
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
});

const guardianSchema = mongoose.Schema({
  ...parentSchema.obj,
  relationship: {
    type: String,
    required: true,
  },
});

module.exports = { parentSchema, guardianSchema };
