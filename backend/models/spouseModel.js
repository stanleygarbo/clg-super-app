const mongoose = require("mongoose");

const spouseSchema = mongoose.Schema(
  {
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
  },
  { timestamps: true }
);

const Spouse = mongoose.model("Spouse", spouseSchema);

module.exports = { Spouse };
