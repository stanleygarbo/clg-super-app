const mongoose = require("mongoose");

const sectionSchema = mongoose.Schema(
  {
    sectionName: {
      type: String,
      required: true,
    },
    academicYear: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      enum: ["1st", "2nd", "summer"],
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

const Section = mongoose.model("Section", sectionSchema);

module.exports = { Section };
