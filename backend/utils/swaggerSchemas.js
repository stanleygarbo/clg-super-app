const m2s = require("mongoose-to-swagger");
const { Position } = require("../models/positionModel");
const { Department } = require("../models/departmentModel");
const { Employee } = require("../models/userModel");

const m2sWrapper = (model) => m2s(model, { omitFields: ["isDeleted"] });

const swaggerSchemas = {
  Position: m2sWrapper(Position),
  Department: m2sWrapper(Department),
  Employee: m2sWrapper(Employee),
};

module.exports = swaggerSchemas;
