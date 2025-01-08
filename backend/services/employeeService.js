const { Employee } = require("../models/userModel");
const departmentService = require("../services/departmentService");
const positionService = require("../services/positionService");

const getEmployee = async ({ id }) => {
  const employee = await Employee.findById(id)
    .populate("position")
    .populate("department")
    .populate("governmentId")
    .populate("birth")
    .populate("spouse")
    .populate("homeAddress")
    .populate("cityAddress");

  return employee;
};

const getEmployees = async () => {
  const employees = await Employee.find();

  return employees;
};

const addEmployee = async (data) => {
  const dept = departmentService.getDepartment({ id: data.department });
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const position = positionService.getPosition(data.position);
  if (!position) {
    throw new Error("Position does not exist.");
  }

  const employee = new Employee(data);

  employee.save();

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
