const { validationResult } = require("express-validator");
const departmentService = require("../services/departmentService");

const addDepartment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const department = await departmentService.addDepartment(req.body);
    res.status(201).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateDepartment = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const department = await departmentService.updateDepartment({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDepartments = async (req, res) => {
  try {
    const departments = await departmentService.getDepartments();

    res.status(200).json({
      results: departments,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getDepartment = async (req, res) => {
  try {
    const department = await departmentService.getDepartment(req.params.id);
    if (!department) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteDepartment = async (req, res) => {
  try {
    const department = await departmentService.deleteDepartment(req.params.id);
    if (!department) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addDepartment,
  updateDepartment,
  getDepartments,
  getDepartment,
  deleteDepartment,
};
