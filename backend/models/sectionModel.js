const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    sectionName: {
      type: String,
      required: true,
    },
    seats: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Seat",
      },
    ],
    course: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  },
  { timestamps: true }
);

const Section = mongoose.model("Seat", sectionSchema);

module.exports = { Section };
