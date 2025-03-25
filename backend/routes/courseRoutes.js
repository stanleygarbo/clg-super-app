const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const courseController = require("../controllers/courseController");

/**
 * @swagger
 * /api/courses:
 *   post:
 *     summary: Add a new course
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Courses
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - courseName
 *               - courseCode
 *               - units
 *             properties:
 *               courseName:
 *                 type: string
 *                 description: The name of the course.
 *                 example: Software Engineering 1
 *               courseCode:
 *                 type: string
 *                 description: The Course code.
 *                 example: CS-6209
 *               units:
 *                 type: string
 *                 description: The number of units for the course.
 *                 example: 3
 *     responses:
 *       201:
 *         description: course added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Course'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation failed.
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         description: The field that failed validation.
 *                       message:
 *                         type: string
 *                         description: The validation error message.
 */
router.post(
  "/",
  [
    body("courseName").notEmpty().trim(),
    body("courseCode").notEmpty().trim(),
    body("units").notEmpty().trim().isNumeric(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  courseController.addCourse
);

/**
 * @swagger
 * /api/courses/{id}:
 *   patch:
 *     summary: Update a course
 *     tags:
 *       - Courses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the course.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseName:
 *                 type: string
 *                 description: The name of the course.
 *                 example: Software Engineering 1
 *               courseCode:
 *                 type: string
 *                 description: The Course code.
 *                 example: CS-6209
 *               units:
 *                 type: string
 *                 description: The number of units for the course.
 *                 example: 3
 *     responses:
 *       200:
 *         description: Course updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation failed.
 *                 errors:
 *                   type: array
 *                   items:
 *                     type: object
 *                     properties:
 *                       field:
 *                         type: string
 *                         description: The field that failed validation.
 *                       message:
 *                         type: string
 *                         description: The validation error message.
 */
router.patch(
  "/:id",
  [
    body("courseName").optional().trim(),
    body("courseCode").optional().trim(),
    body("units").optional().trim().isNumeric(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  courseController.updateCourse
);

/**
 * @swagger
 * /api/courses/{id}:
 *   get:
 *     summary: Get a course by ID
 *     tags:
 *       - Courses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the course.
 *     responses:
 *       200:
 *         description: course retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       400:
 *         description: Validation error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation failed.
 */
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  courseController.getCourse
);

/**
 * @swagger
 * /api/courses:
 *   get:
 *     summary: Get a list of all courses
 *     tags:
 *       - Courses
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of courses retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Course'
 *       400:
 *         description: Server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error.
 */
router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  courseController.getCourses
);

/**
 * @swagger
 * /api/courses/{id}:
 *   delete:
 *     summary: Delete a course by ID
 *     tags:
 *       - Courses
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the course.
 *     responses:
 *       200:
 *         description: course deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Course'
 *       404:
 *         description: Not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Validation failed.
 */
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  courseController.deleteCourse
);

module.exports = router;
