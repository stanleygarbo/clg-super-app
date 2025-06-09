const Section = require("../models/sectionModel");
const courseService = require("./courseService");

const getSection = async (id) => {
  const section = await Section.findById(id).populate([{ path: "program" }]);

  return section;
};

const getSections = async () => {
  const section = await Section.find().populate([{ path: "program" }]);

  return section;
};

const addSection = async (data) => {
  const course = courseService.getCourse(data.course);
  if (!course) {
    throw new Error("Course does not exist.");
  }

  const section = new Section(data);

  await section.save();

  return section;
};

const updateSection = async ({ id, data }) => {
  const course = courseService.getCourse(data.course);
  if (!course) {
    throw new Error("Course does not exist.");
  }

  const section = await Section.updateOne({ _id: id }, data);

  return section;
};

const deleteSection = async (id) => {
  const res = await Section.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

const sectionService = {
  getSection,
  getSections,
  addSection,
  updateSection,
  deleteSection,
};

module.exports = sectionService;
