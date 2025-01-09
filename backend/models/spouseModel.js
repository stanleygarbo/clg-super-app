const mongoose = require("mongoose");

const spouseSchema = mongoose.Schema({
  lastName: {
    type: String,
    required: true,
  },
  middleName: {
    type: String,
    required: false,
  },
  firstName: {
    type: String,
    required: true,
  },
  children: {
    type: Number,
    required: false,
  },
});

module.exports = spouseSchema;
