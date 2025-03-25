const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    courseCode: {
      type: String,
      required: true,
    },
    units: {
      type: Number,
      required: true,
    },
    program: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = Course;
