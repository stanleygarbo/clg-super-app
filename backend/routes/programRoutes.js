const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const { ObjectId } = require("mongodb");
const programController = require("../controllers/programController");

/**
 * @swagger
 * /api/programs:
 *   post:
 *     summary: Add a new program
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Programs
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - programName
 *               - programAcronym
 *               - departmentId
 *             properties:
 *               programName:
 *                 type: string
 *                 description: The name of the program.
 *                 example: Bachelor of Science in Information Technology
 *               programAcronym:
 *                 type: string
 *                 description: The acronym of the program.
 *                 example: BSIT
 *               departmentId:
 *                 type: string
 *                 description: The id of the department where this program belongs to.
 *                 example: 677fb8cf94a19054d2207415
 *     responses:
 *       201:
 *         description: department added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Program'
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
    body("programName").notEmpty().trim(),
    body("programAcronym").notEmpty().trim(),
    body("departmentId").notEmpty().trim().custom(ObjectId.isValid),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  programController.addProgram
);

/**
 * @swagger
 * /api/programs/{id}:
 *   patch:
 *     summary: Update a program
 *     tags:
 *       - Programs
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the program.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               programName:
 *                 type: string
 *                 description: The name of the program.
 *                 example: Bachelor of Science in Information Technology
 *               programAcronym:
 *                 type: string
 *                 description: The acronym of the program.
 *                 example: BSIT
 *               departmentId:
 *                 type: string
 *                 description: The id of the department where this program belongs to.
 *                 example: 677fb8cf94a19054d2207415
 *     responses:
 *       201:
 *         description: Program added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Program'
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
    body("programName").optional().trim(),
    body("programAcronym").optional().trim(),
    body("departmentId").optional().trim().custom(ObjectId.isValid),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  programController.updateProgram
);

/**
 * @swagger
 * /api/programs/{id}:
 *   get:
 *     summary: Get a program by ID
 *     tags:
 *       - Programs
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the program.
 *     responses:
 *       200:
 *         description: program retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Program'
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
  roleMiddleware(["admin", "super"]),
  programController.getProgram
);

/**
 * @swagger
 * /api/programs:
 *   get:
 *     summary: Get a list of all programs
 *     tags:
 *       - Programs
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of progrags retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Program'
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
  roleMiddleware(["admin", "super"]),
  programController.getPrograms
);

/**
 * @swagger
 * /api/programs/{id}:
 *   delete:
 *     summary: Delete a program by ID
 *     tags:
 *       - Programs
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the program.
 *     responses:
 *       200:
 *         description: program deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Program'
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
  programController.deleteProgram
);

module.exports = router;
