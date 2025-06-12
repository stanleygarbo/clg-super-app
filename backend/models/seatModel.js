const mongoose = require("mongoose");
const { Schedule } = require("./scheduleModel");

const seatSchema = new mongoose.Schema({
  grades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
    },
  ],
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
  section: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Section",
    // required: true,
  },
  schedule: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Schedule",
  },
});

const Seat = mongoose.model("Seat", seatSchema);
module.exports = { Seat };
