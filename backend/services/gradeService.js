const Grade = require("../models/gradeModel");
const courseService = require("../services/courseService");

const getGrades = async () => {
  const grades = await Grade.find().populate([
    { path: "seat" },
    { path: "course" },
  ]);

  return grades;
};

const getGrade = async (id) => {
  const grade = await Grade.findById(id).populate([
    { path: "seat" },
    { path: "course" },
  ]);

  return grade;
};

const addGrade = async (data) => {
  const course = await courseService.getCourse(data.course);

  if (!course) {
    throw new Error("Course does not exist.");
  }

  const grade = new Grade(data);

  await grade.save();

  return grade;
};

const updateGrade = async ({ id, data }) => {
  const course = await courseService.getCourse(data.course);

  if (!course) {
    throw new Error("Course does not exist.");
  }

  const grade = await Grade.update({ _id: id }, data);

  return grade;
};

const deleteGrade = async (id) => {
  const grade = await Grade.updateOne(
    {
      _id: id,
    },
    { $set: { isDeleted: true } }
  );

  return grade;
};

const gradeService = {
  getGrades,
  getGrade,
  addGrade,
  updateGrade,
  deleteGrade,
};

module.exports = gradeService;
