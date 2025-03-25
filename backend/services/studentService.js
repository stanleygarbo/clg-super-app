const { Student } = require("../models/userModel");
const departmentService = require("../services/departmentService");
const bcrypt = require("bcrypt");

const getStudent = async (id) => {
  const res = await Student.findById(id).populate("program");

  return res;
};

const getStudents = async () => {
  const res = await Student.find().populate("program");

  return res;
};

const addStudent = async (data) => {
  if (!data.username) {
    data.username = data.firstName + data.surname;
  }

  const doesExist = await Student.findOne({ username: data.username });
  if (doesExist) {
    throw new Error("Username already exists.");
  }

  if (!data.password) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(crypto.randomUUID(), salt);
  }

  if (!data.roles || data.roles?.length === 0) {
    data.roles = ["student"];
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

  if (data.password) {
    const salt = await bcrypt.genSalt(10);
    data.password = await bcrypt.hash(data.password, salt);
  }

  const res = await Student.updateOne({ _id: id }, data);

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
