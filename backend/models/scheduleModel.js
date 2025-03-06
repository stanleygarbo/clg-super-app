const mongoose = require("mongoose");
// import days from "../utils/days";

const subjectScheduleSchema = new mongoose.Schema(
  {
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
    // day: {
    //     type: [days],
    //     enum: days,
    //     required: true,
    // },
    room: {
      type: String,
      required: true,
    },
    instructorID: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const scheduleSchema = new mongoose.Schema(
  {
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
