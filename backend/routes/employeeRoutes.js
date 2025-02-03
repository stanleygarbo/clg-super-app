const express = require("express");
const employeeController = require("../controllers/employeeController");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const roles = require("../constants/roles");
const employmentType = require("../constants/employmentType");
const { ObjectId } = require("mongodb");

const addEmployeeValidationRules = [
  [
    body("firstName").notEmpty().trim(),
    body("surname").notEmpty().trim(),
    body("middleName").trim(),
    body("username").notEmpty().trim(),
    body("password").notEmpty().trim(),
    body("department").notEmpty().trim().custom(ObjectId.isValid),
    body("hireDate").notEmpty().isISO8601().toDate(),
    body("position").notEmpty().trim().custom(ObjectId.isValid),
    body("employmentType")
      .notEmpty()
      .custom((type) => {
        // Check if employement type is valid
        if (!employmentType.includes(type)) {
          throw new Error(`Invalid employment type: ${type}`);
        }

        return true;
      }),
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
 * /api/employees:
 *   post:
 *     summary: Add a new employee
 *     tags:
 *       - Employees
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
 *               - username
 *               - password
 *               - department
 *               - position
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
 *               position:
 *                 type: string
 *                 description: The position of the employee within the department.
 *                 example: positionId
 *               hireDate:
 *                 type: string
 *                 description: Date in which the employee was hired.
 *                 example: 2025-01-06T11:01:49.676Z
 *               employmentType:
 *                 type: string
 *                 description: Contractual, Probationary, Regular, OJT
 *                 example: probationary
 *               roles:
 *                 type: array
 *                 description: A list of roles assigned to the employee.
 *                 items:
 *                   type: string
 *                 example: ["admin"]
 *     responses:
 *       201:
 *         description: Employee added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
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
  addEmployeeValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  employeeController.addEmployee
);

const updateEmployeeValidationRules = [
  [
    body("employmentType")
      .optional()
      .custom((type) => {
        // Check if employement type is valid
        if (!employmentType.includes(type)) {
          throw new Error(`Invalid employment type: ${type}`);
        }

        return true;
      }),
    body("hireDate").optional().isISO8601().toDate(),
    body("department").optional().trim().custom(ObjectId.isValid),
    body("position").optional().trim().custom(ObjectId.isValid),
    body("roles")
      .optional()
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
 * /api/employees/{id}:
 *   patch:
 *     summary: Update an employee
 *     tags:
 *       - Employees
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the employee.
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
 *               - username
 *               - password
 *               - department
 *               - position
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
 *               position:
 *                 type: string
 *                 description: The position of the employee within the department.
 *                 example: positionId
 *               hireDate:
 *                 type: string
 *                 description: Date in which the employee was hired.
 *                 example: 2025-01-06T11:01:49.676Z
 *               employmentType:
 *                 type: string
 *                 description: Contractual, Probationary, Regular, OJT
 *                 example: probationary
 *               roles:
 *                 type: array
 *                 description: A list of roles assigned to the employee.
 *                 items:
 *                   type: string
 *                 example: ["admin"]
 *     responses:
 *       201:
 *         description: Employee added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
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
  roleMiddleware(["admin", "super"]),
  employeeController.updateEmployee
);

/**
 * @swagger
 * /api/employees/{id}:
 *   get:
 *     summary: Get an employee by user ID
 *     tags:
 *       - Employees
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the employee.
 *     responses:
 *       200:
 *         description: Employee retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
 *       404:
 *         description: Employee not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Employee not found.
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
  employeeController.getEmployee
);

/**
 * @swagger
 * /api/employees:
 *   get:
 *     summary: Get a list of all employees
 *     tags:
 *       - Employees
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of employees retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
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
  employeeController.getEmployees
);

/**
 * @swagger
 * /api/employees/{id}:
 *   delete:
 *     summary: delete an employee by ID
 *     tags:
 *       - Employees
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the employee.
 *     responses:
 *       201:
 *         description: employee deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Employee'
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
  roleMiddleware(["admin", "super"]),
  employeeController.deleteEmployee
);

module.exports = router;
