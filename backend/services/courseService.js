const Course = require("../models/courseModel");
const programService = require("./programService");

const getCourse = async (id) => {
  const course = await Course.findById(id).populate([{ path: "program" }]);

  return course;
};

const getCourses = async () => {
  const course = await Course.find().populate([{ path: "program" }]);

  return course;
};

const addCourse = async (data) => {
  // const program = programService.getProgram(data.program);
  // if (!program) {
  //   throw new Error("Department does not exist.");
  // }

  const course = new Course(data);

  await course.save();

  return course;
};

const updateCourse = async ({ id, data }) => {
  const program = programService.getProgram(data.program);
  if (!program) {
    throw new Error("Department does not exist.");
  }

  const course = await Course.updateOne({ _id: id }, data);

  return course;
};

const deleteCourse = async (id) => {
  const res = await Course.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

const courseService = {
  getCourse,
  getCourses,
  addCourse,
  updateCourse,
  deleteCourse,
};

module.exports = courseService;
