const express = require("express");
const { body, param } = require("express-validator");
const gradeController = require("../controllers/gradeController");

const router = express.Router();

// ✅ Create a new grade document
router.post(
  "/",
  [
    body("studentId").notEmpty().withMessage("studentId is required"),
    body("year").notEmpty().withMessage("year is required"),
    body("semester").notEmpty().withMessage("semester is required"),
    body("subjects").isArray().withMessage("subjects must be an array"),
  ],
  gradeController.createGrade
);

// ✅ Get grades by student ID
router.get(
  "/:studentId",
  [param("studentId").notEmpty().withMessage("studentId is required")],
  gradeController.getGradesByStudent
);

// ✅ Update (or add) a subject grade
router.patch(
  "/:id",
  [
    param("id").isMongoId().withMessage("Invalid grade document ID"),
    body("year").notEmpty().withMessage("year is required"),
    body("semester").notEmpty().withMessage("semester is required"),
    body("subjectName").notEmpty().withMessage("subjectName is required"),
    body("grades").notEmpty().withMessage("grades are required"),
  ],
  gradeController.updateGrade
);

// ✅ Delete a grade document
router.delete(
  "/:id",
  [param("id").isMongoId().withMessage("Invalid grade document ID")],
  gradeController.deleteGrade
);

const gradeRoutes = router;

module.exports = gradeRoutes;
