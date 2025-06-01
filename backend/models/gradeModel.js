const mongoose = require("mongoose");

const gradeEntrySchema = new mongoose.Schema(
  {
    prelim: { type: Number, default: 0 },
    midterm: { type: Number, default: 0 },
    prefi: { type: Number, default: 0 },
    final: { type: Number, default: 0 },
  },
  { _id: false }
);

const subjectSchema = new mongoose.Schema(
  {
    name: { type: String, required: true },
    grades: { type: gradeEntrySchema, required: true },
  },
  { _id: false }
);

const gradeSchema = new mongoose.Schema(
  {
    studentId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },
    year: {
      type: String,
      enum: ["freshman", "sophomore", "junior", "senior"],
      required: true,
    },
    semester: {
      type: String,
      enum: ["sem1", "sem2"],
      required: true,
    },
    subjects: {
      type: [subjectSchema],
      default: [],
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Grade", gradeSchema);
