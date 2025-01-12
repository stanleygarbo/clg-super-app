const { Student } = require("../models/userModel");
const departmentService = require("../services/departmentService");

const getStudent = async (id) => {
  const res = await Student.findById(id).populate("program");

  return res;
};

const getStudents = async () => {
  const res = await Student.find();

  return res;
};

const addStudent = async (data) => {
  const doesExist = await Student.findOne({ username: data.username });
  if (doesExist) {
    throw new Error("Username already exists.");
  }

  const dept = departmentService.getDepartment(data.department);
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const student = new Student(data);

  await student.save();

  return student;
};

const updateStudent = async ({ id, data }) => {
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

const deleteStudent = async (id) => {
  const res = await Student.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

const studentService = {
  getStudent,
  getStudents,
  addStudent,
  updateStudent,
  deleteStudent,
};

module.exports = studentService;
