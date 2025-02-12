const m2s = require("mongoose-to-swagger");
const { Position } = require("../models/positionModel");
const { Department } = require("../models/departmentModel");
const { Employee, Student } = require("../models/userModel");
const Program = require("../models/programModel");
const Course = require("../models/courseModel");

const m2sWrapper = (model) =>
  m2s(model, { omitFields: ["isDeleted", "password"] });

const swaggerSchemas = {
  Position: m2sWrapper(Position),
  Department: m2sWrapper(Department),
  Employee: m2sWrapper(Employee),
  Student: m2sWrapper(Student),
  Course: m2sWrapper(Course),
  Program: m2sWrapper(Program),
};

module.exports = swaggerSchemas;
