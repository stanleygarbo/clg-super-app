const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema(
  {
    building: {
      type: String,
      required: true,
    },
    room: {
      type: String,
      required: true,
    },
    floor: {
      type: Number,
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

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room };
