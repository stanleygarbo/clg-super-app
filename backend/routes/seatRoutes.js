const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const seatController = require("../controllers/seatController");

router.post(
  "/",
  [
    // body("section").notEmpty().trim(),
    body("student").notEmpty().trim(),
    body("grades").isArray().notEmpty().trim(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar", "addmission"]),
  seatController.addSeat
);

router.patch(
  "/:id",
  [
    // body("section").optional().trim(),
    body("student").optional().trim(),
    body("grades").isArray().optional().trim(),
  ],
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar", "addmission"]),
  seatController.updateSeat
);

router.get(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  seatController.getSeat
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar", "faculty"]),
  seatController.getSeats
);

router.delete(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "admission", "registrar"]),
  seatController.deleteSeat
);

module.exports = router;
