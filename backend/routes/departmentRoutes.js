const express = require("express");
const departmentController = require("../controllers/departmentController");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");

/**
 * @swagger
 * /api/departments:
 *   post:
 *     summary: Add a new department
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Departments
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - jobTitle
 *               - hourlyWage
 *             properties:
 *               departmentName:
 *                 type: string
 *                 description: The name of the department.
 *                 example: Computer Studies
 *     responses:
 *       201:
 *         description: department added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Department'
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
  [body("departmentName").notEmpty().trim()],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  departmentController.addDepartment
);

/**
 * @swagger
 * /api/departments/{id}:
 *   patch:
 *     summary: Update a department
 *     tags:
 *       - Departments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the department.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               departmentName:
 *                 type: string
 *                 description: The name of the department.
 *                 example: Business Administration
 *     responses:
 *       201:
 *         description: department added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Department'
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
  [body("departmentName").trim()],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  departmentController.updateDepartment
);

/**
 * @swagger
 * /api/departments/{id}:
 *   get:
 *     summary: Get a department by ID
 *     tags:
 *       - Departments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the department.
 *     responses:
 *       201:
 *         description: department added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Department'
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
  // roleMiddleware(["admin", "super"]),
  departmentController.getDepartment
);

/**
 * @swagger
 * /api/departments:
 *   get:
 *     summary: Get a list of all departments
 *     tags:
 *       - Departments
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of departments retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Department'
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
  // roleMiddleware(["admin", "super"]),
  departmentController.getDepartments
);

/**
 * @swagger
 * /api/departments/{id}:
 *   delete:
 *     summary: delete a department by ID
 *     tags:
 *       - Departments
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the department.
 *     responses:
 *       201:
 *         description: department added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Department'
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
  departmentController.deleteDepartment
);

module.exports = router;
