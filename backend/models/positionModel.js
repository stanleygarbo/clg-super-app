const mongoose = require("mongoose");

const positionSchema = mongoose.Schema(
  {
    jobTitle: {
      type: String,
      required: true,
    },
    hourlyWage: { type: Number, required: true },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
  },
  { timestamps: true }
);

const Position = mongoose.model("Position", positionSchema);

module.exports = { Position };
