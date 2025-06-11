const mongoose = require("mongoose");

const seatSchema = new mongoose.Schema({
  grades: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Grade",
      required: true,
    },
  ],
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student",
    required: true,
  },
});

const Seat = mongoose.model("Seat", seatSchema);
module.exports = { Seat };
