const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const gradeController = require("../controllers/gradeController");

router.post(
  "/",
  [
    body("seat").notEmpty().trim(),
    body("course").notEmpty().trim(),
    body("finalGrade").notEmpty().trim(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar", "addmission"]),
  gradeController.addGrade
);

router.patch(
  "/:id",
  [
    body("seat").optional().trim(),
    body("course").optional().trim(),
    body("finalGrade").optional().trim(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar", "addmission"]),
  gradeController.updateGrade
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  gradeController.getGrade
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  gradeController.getGrades
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  gradeController.deleteGrade
);

module.exports = router;
