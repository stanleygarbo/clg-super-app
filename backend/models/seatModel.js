const mongoose = require("mongoose");

const seatSchema = mongoose.Schema(
  {
    term: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Term",
      required: true,
    },
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    section: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true,
      },
    ],
    status: {
      type: String,
      enum: ["DROPPED", "ENROLLED"],
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

const Seat = mongoose.model("Seat", seatSchema);

module.exports = { Seat };
