const mongoose = require("mongoose");

const birthSchema = mongoose.Schema(
  {
    birthDate: {
      type: Date,
      required: true,
    },
    birthPlace: {
      type: String,
      required: true,
    },
    citizenship: {
      type: String,
      required: true,
    },
    sex: {
      type: String,
      enum: ["male", "female"],
      required: true,
    },
    Religion: {
      type: String,
      required: false,
    },
  },
  { timestamps: true }
);

const Birth = mongoose.model("Birth", birthSchema);

module.exports = { Birth };
