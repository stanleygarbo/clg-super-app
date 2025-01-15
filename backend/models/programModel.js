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
    department: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Department",
      required: true,
    },
  },
  { timestamps: true }
);

const Program = mongoose.model("Program", programSchema);

module.exports = Program;
