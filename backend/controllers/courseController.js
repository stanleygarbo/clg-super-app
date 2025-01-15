const { validationResult } = require("express-validator");
const courseService = require("../services/courseService");

const addCourse = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const course = await courseService.addCourse(req.body);
    res.status(201).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateCourse = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const course = await courseService.updateCourse({
      id: req.params.id,
      data: req.body,
    });
    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCourses = async (req, res) => {
  try {
    const courses = await courseService.getCourses();

    res.status(200).json({
      results: courses,
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getCourse = async (req, res) => {
  try {
    const course = await courseService.getCourse(req.params.id);
    if (!course) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteCourse = async (req, res) => {
  try {
    const course = await courseService.deleteCourse(req.params.id);
    if (!course) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(course);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const courseController = {
  addCourse,
  updateCourse,
  getCourse,
  getCourses,
  deleteCourse,
};

module.exports = courseController;
