const mongoose = require("mongoose");

const termSchema = mongoose.Schema(
  {
    academicYear: {
      type: String,
      required: true,
    },
    semester: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true }
);

const Term = mongoose.model("Term", termSchema);

module.exports = { Term };
