const { validationResult } = require("express-validator");
const gradeService = require("../services/gradeService");

const addGrade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const grade = await gradeService.addGrade(req.body);
    res.status(200).json({
      message: "Grade added successfully",
      grade: { grade },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

// const getGradesByStudent = async (req, res) => {
//   try {
//     const grades = await gradeService.getGradesByStud({ id: req.params.id });
//     res.status(200).json(grades);
//   } catch (error) {
//     res.status(400).json({
//       message: error.message,
//     });
//   }
// };

const getGrades = async (req, res) => {
  try {
    const grades = await gradeService.getGrades();
    res.status(200).json(grades);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getGrade = async (req, res) => {
  try {
    const grade = await gradeService.getGrade(req.params.id);
    res.status(200).json(grade);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateGrade = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({
        errors: errors.array(),
      });
    }

    const grade = await gradeService.updateGrade({
      id: req.params.id,
      data: req.body,
    });

    res.status(201).json(grade);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteGrade = async (req, res) => {
  try {
    const { id } = req.params;
    const grade = await gradeService.deleteGrade(id);

    if (!grade) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(grade);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addGrade,
  getGrade,
  getGrades,
  updateGrade,
  deleteGrade,
};
