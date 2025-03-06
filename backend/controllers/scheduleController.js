const { validationResult } = require("express-validator");
const scheduleService = require("../services/scheduleService");

const addSchedule = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const schedule = await scheduleService.addSchedule(req.body);
    res.status(201).json({
      message: "Schedule added successfully",
      schedule: { schedule: schedule },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSchedules = async (req, res) => {
  try {
    const schedules = await scheduleService.getSchedules();
    res.status(200).json(schedules);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addSchedule, getSchedules };
