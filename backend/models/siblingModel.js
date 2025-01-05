const mongoose = require("mongoose");

const siblingSchema = mongoose.Schema(
  {
    fullName: {
      type: String,
      required: true,
    },
    age: {
      type: Number,
      required: true,
    },
    occupationSchool: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Sibling = mongoose.model("Sibling", siblingSchema);

module.exports = { Sibling };
