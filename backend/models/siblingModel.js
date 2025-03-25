const mongoose = require("mongoose");

const siblingSchema = mongoose.Schema({
  fullName: {
    type: String,
  },
  age: {
    type: Number,
  },
  occupationSchool: {
    type: String,
  },
});

module.exports = { siblingSchema };
