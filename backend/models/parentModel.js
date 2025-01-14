const mongoose = require("mongoose");

const parentSchema = mongoose.Schema({
  firstName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  lastName: {
    type: String,
  },
  occupation: {
    type: String,
  },
  companyName: {
    type: String,
  },
  companyAddress: {
    type: String,
  },
  telephone: {
    type: String,
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
  },
});

module.exports = { parentSchema, guardianSchema };
