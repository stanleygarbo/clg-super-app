const mongoose = require("mongoose");

const courseSchema = mongoose.Schema(
  {
    courseName: {
      type: String,
      required: true,
    },
    couseCode: {
      type: String,
      required: true,
    },
    credits: {
      type: Number,
      required: true,
    },
    program: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);

module.exports = { Course };
