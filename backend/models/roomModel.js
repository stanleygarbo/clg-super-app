const mongoose = require("mongoose");

const roomSchema = mongoose.Schema(
  {
    roomName: {
      type: String,
      required: true,
    },
    capacity: {
      type: Number,
      required: true,
    },
    building: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room };
