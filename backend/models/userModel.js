const mongoose = require("mongoose");
const roles = require("../constants/roles");
const { employmentType } = require("../constants/employmentType");

const userSchema = new mongoose.Schema(
  {
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
    roles: {
      type: [String],
      enum: roles,
      required: true,
    },
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const studentSchema = new mongoose.Schema(
  {
    program: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    username: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    standing: {
      type: String,
      enum: ["Freshman", "Sophomore", "Junior", "Senior", "Graduate"],
    },
  },
  { timestamps: true }
);

const Employee = User.discriminator("Employee", studentSchema);

const employeeSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    sickLeave: { type: Number, default: 0 }, // Total leave days allotted
    vacationLeave: { type: Number, default: 0 }, // Total vacation days allotted
    hireDate: { type: Date, required: true },
    employmentType: {
      type: String,
      required: true,
      enum: employmentType,
    },
    department: { type: mongoose.Schema.Types.ObjectId, ref: "Department" },
    position: { type: mongoose.Schema.Types.ObjectId, ref: "Position" },
  },
  { timestamps: true }
);

const Student = User.discriminator("Student", studentSchema);

module.exports = { User, Student };
