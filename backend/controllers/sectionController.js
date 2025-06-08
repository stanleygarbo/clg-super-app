const { validationResult } = require("express-validator");
const sectionService = require("../services/sectionService");

const addSection = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const section = await sectionService.addSection(req.body);
    res.status(201).json({
      message: "Room added successfully",
      section: { section },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSections = async (req, res) => {
  try {
    const sections = await sectionService.getSections();
    res.status(200).json(sections);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getSection = async (req, res) => {
  try {
    const section = await sectionService.getSection(req.params.id);
    if (!section) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(section);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateSection = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const section = await sectionService.updateSection({
      id: req.params.id,
      data: req.body,
    });
    res.status(201).json(section);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteSection = async (req, res) => {
  try {
    const section = await sectionService.deleteSection(req.params.id);
    if (!section) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(section);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = {
  addSection,
  getSections,
  getSection,
  updateSection,
  deleteSection,
};
