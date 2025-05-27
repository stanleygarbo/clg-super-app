const mongoose = require("mongoose");
const roles = require("../constants/roles");
const { employmentType } = require("../constants/employmentType");
const spouseSchema = require("./spouseModel");
const { parentSchema, guardianSchema } = require("./parentModel");
const GovernmentIdSchema = require("./governmentIDsModel");
const { birthSchema } = require("./birthModel");
const { cityAddressSchema, homeAddressSchema } = require("./addressModel");
const { siblingSchema } = require("./siblingModel");
const standing = require("../constants/studentStanding");
const { scheduleSchema } = require("./scheduleModel");
const { employeeDocsSchema } = require("./employeeDocsModel");
const { studentDocsSchema } = require("./studentDocsModel");

const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: false,
      unique: true,
    },
    password: {
      type: String,
      required: false,
      select: false,
    },
    firstName: {
      type: String,
      required: true,
    },
    surname: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    maritalStatus: {
      type: String,
    },
    email: {
      type: String,
      required: false,
    },
    telephone: {
      type: String,
      required: false,
    },
    phone: {
      type: String,
      required: false,
    },
    roles: {
      type: [String],
      enum: roles,
      required: true,
    },
    isDeleted: {
      type: Boolean,
      default: false,
      select: false,
    },
    spouse: spouseSchema,
  },
  { timestamps: true }
);

const User = mongoose.model("User", userSchema);

const studentSchema = new mongoose.Schema(
  {
    program: { type: mongoose.Schema.Types.ObjectId, ref: "Program" },
    section: {
      type: String,
    },
    standing: {
      type: String,
      enum: standing,
      default: "freshman",
    },
    schoolYear: {
      type: String,
      required: true,
    },
    birth: birthSchema,
    homeAddress: homeAddressSchema,
    cityAddress: cityAddressSchema,
    father: parentSchema,
    mother: parentSchema,
    guardian: guardianSchema,
    guardianSpouse: spouseSchema,
    siblings: [siblingSchema],
    schedules: employeeDocsSchema,
    documents: studentDocsSchema,
  },
  { timestamps: true }
);

const employeeSchema = new mongoose.Schema(
  {
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
    governmentId: GovernmentIdSchema,
    birth: birthSchema,
    homeAddress: homeAddressSchema,
    cityAddress: cityAddressSchema,
    documents: employeeDocsSchema,
  },
  { timestamps: true }
);

const Employee = User.discriminator("Employee", employeeSchema);
const Student = User.discriminator("Student", studentSchema);

module.exports = { User, Student, Employee };
