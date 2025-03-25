const { validationResult } = require("express-validator");
const employeeService = require("../services/employeeService");

const addEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const employee = await employeeService.addEmployee(req.body);
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateEmployee = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const employee = await employeeService.updateEmployee({
      id: req.params.id,
      data: req.body,
    });
    res.status(201).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEmployees = async (req, res) => {
  try {
    const employees = await employeeService.getEmployees();

    res.status(200).json({
      results: employees,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getEmployee = async (req, res) => {
  try {
    const employee = await employeeService.getEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteEmployee = async (req, res) => {
  try {
    const employee = await employeeService.deleteEmployee(req.params.id);
    if (!employee) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(employee);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addEmployee,
  updateEmployee,
  getEmployee,
  getEmployees,
  deleteEmployee,
};
