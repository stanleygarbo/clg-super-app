const { validationResult } = require("express-validator");
const programService = require("../services/programService");

const addProgram = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const program = await programService.addProgram(req.body);
    res.status(201).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateProgram = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const program = await programService.updateProgram({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPrograms = async (req, res) => {
  try {
    const programs = await programService.getPrograms();

    res.status(200).json({
      results: programs,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getProgram = async (req, res) => {
  try {
    const program = await programService.getProgram(req.params.id);
    if (!program) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteProgram = async (req, res) => {
  try {
    const program = await programService.deleteProgram(req.params.id);
    if (!program) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(program);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const programController = {
  addProgram,
  updateProgram,
  getProgram,
  getPrograms,
  deleteProgram,
};

module.exports = programController;
