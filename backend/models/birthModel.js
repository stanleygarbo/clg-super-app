const mongoose = require("mongoose");

const birthSchema = mongoose.Schema({
  birthDate: {
    type: Date,
  },
  birthPlace: {
    type: String,
  },
  citizenship: {
    type: String,
  },
  sex: {
    type: String,
    enum: ["male", "female"],
  },
  religion: {
    type: String,
  },
});

module.exports = { birthSchema };
