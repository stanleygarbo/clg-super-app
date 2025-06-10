const mongoose = require("mongoose");

const seatSchema = mongoose.Schema(
  {
    section: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "section",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    grades: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Grade",
        required: true,
      },
    ],
  },
  { timestamps: true }
);

const Seat = mongoose.models.Seat || mongoose.model("Seat", seatSchema);

module.exports = { Seat };
