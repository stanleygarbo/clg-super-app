const mongoose = require("mongoose");
const roles = require("../constants/roles");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    firstName: {
      type: String,
      required: true,
      unique: true,
    },
    surname: {
      type: String,
      required: true,
      unique: true,
    },
    middleName: {
      type: String,
      required: true,
      unique: true,
    },
    birthDate: {
      type: Date,
      required: false,
    },
    email: {
      type: String,
      required: false,
    },
    contact: {
      type: String,
      required: false,
    },
    password: {
      type: String,
      required: true,
    },
    roles: {
      type: [String],
      enum: roles,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

module.exports = { User };
