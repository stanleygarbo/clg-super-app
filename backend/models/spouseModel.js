const mongoose = require("mongoose");

const spouseSchema = mongoose.Schema({
  lastName: {
    type: String,
  },
  middleName: {
    type: String,
  },
  firstName: {
    type: String,
  },
  children: {
    type: Number,
  },
});

module.exports = spouseSchema;
