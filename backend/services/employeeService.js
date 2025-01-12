const { Employee } = require("../models/userModel");
const departmentService = require("../services/departmentService");
const positionService = require("../services/positionService");
const bcrypt = require("bcrypt");

const getEmployee = async (id) => {
  const employee = await Employee.findById(id).populate([
    { path: "position" },
    { path: "department" },
  ]);

  console.log(employee);

  return employee;
};

const getEmployees = async () => {
  const employees = await Employee.find();

  return employees;
};

const addEmployee = async (data) => {
  const doesExist = await Employee.findOne({ username: data.username });
  if (doesExist) {
    throw new Error("Username already exists.");
  }

  const dept = departmentService.getDepartment(data.department);
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const position = positionService.getPosition(data.position);
  if (!position) {
    throw new Error("Position does not exist.");
  }

  const salt = await bcrypt.genSalt(10);
  data.password = await bcrypt.hash(data.password, salt);

  const employee = new Employee(data);

  await employee.save();

  return employee;
};

const updateEmployee = async ({ id, data }) => {
  const dept = departmentService.getDepartment(data.department);
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const position = positionService.getPosition(data.position);
  if (!position) {
    throw new Error("Position does not exist.");
  }

  const res = await Employee.updateOne({ _id: id }, data);

  return res;
};

const deleteEmployee = async (id) => {
  const res = await Employee.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

module.exports = {
  getEmployee,
  getEmployees,
  addEmployee,
  updateEmployee,
  deleteEmployee,
};
