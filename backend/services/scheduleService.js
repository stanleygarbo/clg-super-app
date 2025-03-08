const { Schedule } = require("../models/scheduleModel");

const getSchedule = async (id) => {
  const schedule = await Schedule.findById(id);
  return schedule;
};

const getSchedules = async () => {
  const schedule = await Schedule.find();
  return schedule;
};

const addSchedule = async (data) => {
  const schedule = new Schedule(data);
  await schedule.save();
  return schedule;
};

const scheduleService = {
  getSchedule,
  getSchedules,
  addSchedule,
};

module.exports = scheduleService;
