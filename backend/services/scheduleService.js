const { Schedule } = require("../models/scheduleModel");

const getSchedule = async (id) => {
  const schedule = await Schedule.findById(id).populate([
    {
      path: "program",
    },
  ]);
  return schedule;
};

const getSchedules = async () => {
  const schedule = await Schedule.find().populate([
    {
      path: "program",
    },
  ]);
  return schedule;
};

const addSchedule = async (data) => {
  const schedule = new Schedule(data);
  await schedule.save();
  return schedule;
};

const updateSchedule = async ({ id, data }) => {
  const schedule = scheduleService.getSchedule(id);

  if (!schedule) {
    throw new Error("Schedule does not exist.");
  }

  const res = await Schedule.updateOne({ _id: id }, data);
  return res;
};

const deleteSchedule = async ({ id }) => {
  const res = await Schedule.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );
  return res;
};

const scheduleService = {
  getSchedule,
  getSchedules,
  addSchedule,
  updateSchedule,
  deleteSchedule,
};

module.exports = scheduleService;
