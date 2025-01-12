const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const roles = require("../constants/roles");
const { ObjectId } = require("mongodb");
const studentController = require("../controllers/studentController");

const addStudentValidationRules = [
  [
    body("firstName").notEmpty().trim(),
    body("surname").notEmpty().trim(),
    body("middleName").notEmpty().trim(),
    body("department").notEmpty().trim().custom(ObjectId.isValid),
    body("roles")
      .isArray() // Check that roles is an array
      .withMessage("Roles must be an array")
      .notEmpty()
      .custom((items) => {
        // Check if all roles are valid
        for (const role of items) {
          if (!roles.includes(role)) {
            throw new Error(`Invalid role: ${role}`);
          }
        }
        return true;
      }),
  ],
];

/**
 * @swagger
 * /api/students:
 *   post:
 *     summary: Add a new student
 *     tags:
 *       - Students
 *     security:
 *       - BearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - surname
 *               - middleName
 *               - department
 *               - roles
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the employee.
 *                 example: Ben
 *               surname:
 *                 type: string
 *                 description: The surname of the employee.
 *                 example: O
 *               middleName:
 *                 type: string
 *                 description: The middle name of the employee.
 *                 example: Ten
 *               department:
 *                 type: string
 *                 description: The department where the employee will work.
 *                 example: departmentId
 *               roles:
 *                 type: array
 *                 description: A list of roles assigned to the employee.
 *                 items:
 *                   type: string
 *                 example: ["student"]
 *     responses:
 *       201:
 *         description: Employee added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Student'
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
  addStudentValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission"]),
  studentController.addStudent
);

const updateEmployeeValidationRules = [
  [
    body("department").trim().custom(ObjectId.isValid),
    body("roles")
      .isArray() // Check that roles is an array
      .withMessage("Roles must be an array")
      .custom((items) => {
        // Check if all roles are valid
        for (const role of items) {
          if (!roles.includes(role)) {
            throw new Error(`Invalid role: ${role}`);
          }
        }
        return true;
      }),
  ],
];

/**
 * @swagger
 * /api/students/{id}:
 *   patch:
 *     summary: Update a student
 *     tags:
 *       - Students
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the student.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - firstName
 *               - surname
 *               - middleName
 *               - department
 *               - roles
 *             properties:
 *               firstName:
 *                 type: string
 *                 description: The first name of the employee.
 *                 example: Ben
 *               surname:
 *                 type: string
 *                 description: The surname of the employee.
 *                 example: O
 *               middleName:
 *                 type: string
 *                 description: The middle name of the employee.
 *                 example: Ten
 *               username:
 *                 type: string
 *                 description: A unique username for the employee.
 *               password:
 *                 type: string
 *                 format: password
 *                 description: A secure password for the employee.
 *                 example: password
 *               department:
 *                 type: string
 *                 description: The department where the employee will work.
 *                 example: departmentId
 *               roles:
 *                 type: array
 *                 description: A list of roles assigned to the student.
 *                 items:
 *                   type: string
 *                 example: ["student"]
 *     responses:
 *       201:
 *         description: Student added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Student'
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
  updateEmployeeValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  studentController.updateStudent
);

/**
 * @swagger
 * /api/students/{id}:
 *   get:
 *     summary: Get a student by user ID
 *     tags:
 *       - Students
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the student.
 *     responses:
 *       200:
 *         description: student retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Student not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Student not found.
 *       500:
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
  "/:id",
  passport.authenticate("jwt", { session: false }),
  studentController.getStudent
);

/**
 * @swagger
 * /api/students:
 *   get:
 *     summary: Get a list of all students
 *     tags:
 *       - Students
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of students retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Student'
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
  studentController.getStudents
);

/**
 * @swagger
 * /api/students/{id}:
 *   delete:
 *     summary: delete a student by ID
 *     tags:
 *       - Students
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the student.
 *     responses:
 *       201:
 *         description: department deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Student'
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
router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  studentController.deleteStudent
);

const studentRoutes = router;

module.exports = studentRoutes;
