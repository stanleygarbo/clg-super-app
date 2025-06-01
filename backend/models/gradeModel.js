const mongoose = require("mongoose");

const gradeSchema = mongoose.Schema(
  {
    Seat: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Seat",
      required: true,
    },
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
      required: true,
    },
    finalGrade: {
      type: Number,
    },
  },
  { timestamps: true }
);

const Grade = mongoose.model("Grade", gradeSchema);

module.exports = { Grade };
