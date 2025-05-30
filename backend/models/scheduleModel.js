const mongoose = require("mongoose");

const subjectScheduleSchema = new mongoose.Schema({
  courseID: {
    type: String,
    required: true,
  },
  section: {
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
    type: mongoose.Schema.Types.ObjectId,
    ref: "Room",
    required: true,
  },
  instructorID: {
    type: String,
    required: true,
  },
  isDeleted: {
    type: Boolean,
    default: false,
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
    isDeleted: {
      type: Boolean,
      default: false,
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
