const mongoose = require("mongoose");
const roles = require("../constants/roles");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  roles: {
    type: [String],
    enum: roles,
    required: true,
  },
});

module.exports = mongoose.model("User", userSchema);
