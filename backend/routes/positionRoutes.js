const express = require("express");
const positionController = require("../controllers/positionController");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");

const addPositionValidationRules = [
  [
    body("jobTitle").notEmpty().trim(),
    body("hourlyWage").notEmpty().isNumeric().trim(),
  ],
];

/**
 * @swagger
 * /api/positions:
 *   post:
 *     summary: Add a new position
 *     tags:
 *       - Positions
 *     security:
 *       - BearerAuth: []
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
 *               jobTitle:
 *                 type: string
 *                 description: The name of the position.
 *                 example: Ben
 *               hourlyWage:
 *                 type: number
 *                 description: The wage for the position.
 *                 example: 0
 *     responses:
 *       201:
 *         description: Position added successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/Position'
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
  addPositionValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  positionController.addPosition
);

const updatePositionValidationRules = [
  [body("jobTitle").trim(), body("hourlyWage").isNumeric().trim()],
];

/**
 * @swagger
 * /api/positions/{id}:
 *   patch:
 *     summary: Update a position
 *     tags:
 *       - Positions
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the position.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               jobTitle:
 *                 type: string
 *                 description: The name of the position.
 *                 example: Ben
 *               hourlyWage:
 *                 type: number
 *                 description: The wage for the position.
 *                 example: 0
 *     responses:
 *       201:
 *         description: Position added successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Position'
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
  updatePositionValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  positionController.updatePosition
);

/**
 * @swagger
 * /api/positions/{id}:
 *   get:
 *     summary: get a position by ID
 *     tags:
 *       - Positions
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the position.
 *     responses:
 *       201:
 *         description: Position updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Position'
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
router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  // roleMiddleware(["admin", "super"]),
  positionController.getPosition
);

/**
 * @swagger
 * /api/positions:
 *   get:
 *     summary: Get a list of all positions
 *     tags:
 *       - Positions
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of Positions retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Position'
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
  positionController.getPositions
);

/**
 * @swagger
 * /api/positions/{id}:
 *   delete:
 *     summary: delete a position by ID
 *     tags:
 *       - Positions
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the position.
 *     responses:
 *       201:
 *         description: position deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Position'
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
  positionController.deletePosition
);

module.exports = router;
