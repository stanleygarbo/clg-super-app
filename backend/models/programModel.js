const mongoose = require("mongoose");

const programSchema = mongoose.Schema(
  {
    programName: {
      type: String,
      required: true,
    },
    programAcronym: {
      type: String,
      required: true,
    },
    courses: [{ type: mongoose.Schema.Types.ObjectId, ref: "Course" }],
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);

module.exports = { Program };
