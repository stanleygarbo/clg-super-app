const { validationResult } = require("express-validator");
const studentService = require("../services/studentService");

const addStudent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    console.log(req.body.username);

    const student = await studentService.addStudent(req.body);
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const student = await studentService.updateStudent({
      id: req.params.id,
      data: req.body,
    });
    res.status(201).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudents = async (req, res) => {
  try {
    const student = await studentService.getStudents();

    res.status(200).json({
      results: student,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getStudent = async (req, res) => {
  try {
    const student = await studentService.getStudent(req.params.id);
    if (!student) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  try {
    const student = await studentService.deleteStudent(req.params.id);
    if (!student) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(student);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const studentController = {
  addStudent,
  updateStudent,
  getStudent,
  getStudents,
  deleteStudent,
};

module.exports = studentController;
