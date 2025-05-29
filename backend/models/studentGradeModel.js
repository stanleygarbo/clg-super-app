const mongoose = require("mongoose");

const studentGradeSchema = mongoose.Schema({
  prelim: {
    type: Number,
    default: 0,
  },
  midterm: {
    type: Number,
    default: 0,
  },
  prefi: {
    type: Number,
    default: 0,
  },
  final: {
    type: Number,
    default: 0,
  },
});

module.exports = { studentGradeSchema };
