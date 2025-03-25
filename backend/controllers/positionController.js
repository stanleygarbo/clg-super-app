const { validationResult } = require("express-validator");
const positionService = require("../services/positionService");

const addPosition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const position = await positionService.addPosition(req.body);
    res.status(201).json(position);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updatePosition = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const position = await positionService.updatePosition({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).json(position);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPositions = async (req, res) => {
  try {
    const position = await positionService.getPositions();

    return res.status(200).json({
      results: position,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getPosition = async (req, res) => {
  try {
    const position = await positionService.getPosition(req.params.id);
    if (!position) {
      return res.status(404).json({
        message: "Not Found",
      });
    }
    res.status(200).json(position);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deletePosition = async (req, res) => {
  try {
    const position = await positionService.deletePosition(req.params.id);
    if (!position) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(position);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addPosition,
  updatePosition,
  getPositions,
  getPosition,
  deletePosition,
};
