const { Schedule } = require("../models/scheduleModel");

const getSchedule = async (id) => {
  const course = await Schedule.findById(id);
  return course;
};

const getSchedules = async () => {
  const course = await Schedule.find();
  return course;
};

const addSchedule = async (data) => {
  const course = new Schedule(data);
  await course.save();
  return course;
};

const scheduleService = {
  getSchedule,
  getSchedules,
  addSchedule,
};

module.exports = scheduleService;
