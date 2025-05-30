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

const getSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.getSchedule(req.params.id);

    if (!schedule) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(schedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSchedule = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const schedule = await scheduleService.updateSchedule({
      id: req.params.id,
      data: req.body,
    });
    res.status(201).json(schedule);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSchedule = async (req, res) => {
  try {
    const schedule = await scheduleService.deleteSchedule({
      id: req.params.id,
    });

    if (!schedule) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json({
      message: "Schedule deleted successfully",
      result: schedule,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// const deleteSchedule = async (req, res) => {
//   try {
//     const schedule = await scheduleService.deleteSchedule(req.params.id);
//     if (!schedule) {
//       return res.status(404).json({
//         message: "Not Found",
//       });
//     }

//     res.status(200).json(schedule);
//   } catch (error) {
//     res.status(400).json({ message: error.message });
//   }
// };

module.exports = {
  addSchedule,
  getSchedules,
  getSchedule,
  updateSchedule,
  deleteSchedule,
};
