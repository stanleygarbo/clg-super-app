const mongoose = require("mongoose");
const Program = require("./programModel");

const subjectScheduleSchema = new mongoose.Schema({
  courseID: {
    type: String,
    required: true,
  },
  timeStart: {
    type: String,
    required: true,
  },
  timeEnd: {
    type: String,
    required: true,
  },
  day: {
    type: [String],
    enum: ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
    required: true,
  },
  room: {
    type: String,
    required: true,
  },
  instructorID: {
    type: String,
    required: true,
  },
});

const scheduleSchema = new mongoose.Schema(
  {
    program: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Program",
      required: true,
    },
    schoolYear: {
      type: String,
      required: true,
    },
    semester: {
      type: String,
      enum: ["1st", "2nd", "summer"],
      required: true,
    },
    subjectSchedules: {
      type: [subjectScheduleSchema],
      required: true,
    },
  },
  { timestamps: true }
);

const Schedule = mongoose.model("Schedule", scheduleSchema);
const SubjectSchedule = mongoose.model(
  "SubjectSchedule",
  subjectScheduleSchema
);

module.exports = { Schedule, SubjectSchedule, scheduleSchema };
