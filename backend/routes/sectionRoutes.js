const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const sectionController = require("../controllers/sectionController");

/**
 * @swagger
 * /api/sections:
 *   post:
 *     summary: Add a new section
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Sections
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - sectionName
 *               - academicYear
 *               - semester
 *               - course
 *             properties:
 *               courseName:
 *                 type: string
 *                 description: The name of the section.
 *                 example: BSCS-1
 *               academicYear:
 *                 type: string
 *                 description: The school year.
 *                 example: 2025-2026
 *               semester
 *                 type: string
 *                 description: The semester.
 *                 example: 1st | 2nd | summer
 *               course:
 *                 type: string
 *                 description: The course id.
 *                 example: _id
 *     responses:
 *       201:
 *         description: section added successfully.
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
    body("sectionName").notEmpty().trim(),
    body("academicYear").notEmpty().trim(),
    body("course").notEmpty().trim(),
    body("semester")
      .isArray() // Check that roles is an array
      .withMessage("Semester must 1st, 2nd or summer")
      .notEmpty()
      .matches(/\b(?:1st|2nd|summer)\b/),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  sectionController.addSection
);

/**
 * @swagger
 * /api/sections/{id}:
 *   patch:
 *     summary: Update a section
 *     tags:
 *       - Sections
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the Section.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               courseName:
 *                 type: string
 *                 description: The name of the section.
 *                 example: BSCS-1
 *               academicYear:
 *                 type: string
 *                 description: The school year.
 *                 example: 2025-2026
 *               semester
 *                 type: string
 *                 description: The semester.
 *                 example: 1st | 2nd | summer
 *               course:
 *                 type: string
 *                 description: The course id.
 *                 example: _id
 *     responses:
 *       200:
 *         description: Section updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section'
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
    body("sectionName").optional().trim(),
    body("academicYear").optional().trim(),
    body("course").optional().trim(),
    body("semester")
      .isArray() // Check that roles is an array
      .withMessage("Semester must 1st, 2nd or summer")
      .optional()
      .matches(/\b(?:1st|2nd|summer)\b/),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  sectionController.updateSection
);

/**
 * @swagger
 * /api/sections/{id}:
 *   get:
 *     summary: Get a section by ID
 *     tags:
 *       - Sections
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the Section.
 *     responses:
 *       200:
 *         description: Section retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section'
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
  sectionController.getSection
);

/**
 * @swagger
 * /api/sections:
 *   get:
 *     summary: Get a list of all sections
 *     tags:
 *       - Sections
 *     security:
 *       - BearerAuth: []
 *     responses:
 *       200:
 *         description: List of sections retrieved successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Section'
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
  sectionController.getSections
);

/**
 * @swagger
 * /api/section/{id}:
 *   delete:
 *     summary: Delete a section by ID
 *     tags:
 *       - Sections
 *     security:
 *       - BearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: The unique ID of the section.
 *     responses:
 *       200:
 *         description: section deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *                $ref: '#/components/schemas/Section'
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
  sectionController.deleteSection
);

module.exports = router;
