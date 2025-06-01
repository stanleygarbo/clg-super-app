const { validationResult } = require("express-validator");
const gradeService = require("../services/gradeService");

// Create new grade document
const createGrade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { studentId, year, semester, subjects } = req.body;

    const newGrade = await gradeService.createGrade({
      studentId,
      year,
      semester,
      subjects,
    });

    res.status(201).json(newGrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get grades by studentId
const getGradesByStudent = async (req, res) => {
  try {
    const { studentId } = req.params;
    if (!studentId)
      return res.status(400).json({ message: "Missing studentId parameter" });

    const grades = await gradeService.getGradesByStudentId(studentId);
    res.status(200).json(grades);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Update or add subject grades in a grade document
const updateGrade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty())
      return res.status(400).json({ errors: errors.array() });

    const { id } = req.params;
    const { year, semester, subjectName, grades } = req.body;

    if (!subjectName || !grades) {
      return res
        .status(400)
        .json({ message: "subjectName and grades are required" });
    }

    const updatedGrade = await gradeService.updateGrade(id, {
      year,
      semester,
      subjectName,
      grades,
    });

    res.status(200).json(updatedGrade);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a grade document by ID
const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    await gradeService.deleteGrade(id);
    res.status(200).json({ message: "Grade deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createGrade,
  getGradesByStudent,
  updateGrade,
  deleteGrade,
};
