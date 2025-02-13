const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const scheduleController = require("../controllers/scheduleController");

const addScheduleValidationRules = [
    [
        body("schoolYear")
            .isISO8601()
            .withMessage("Invalid date format for school year"),
        body("semester")
            .isIn(["1st", "2nd", "summer"])
            .withMessage("Invalid semester"),
        body("subjectSchedules")
            .isArray()
            .withMessage("Subject schedules must be an array"),
    ],
];

router.post(
    "/",
    addScheduleValidationRules,
    passport.authenticate("jwt", { session: false }),
    roleMiddleware(["admin", "super", "registrar"]),
    scheduleController.addSchedule
);

router.get(
    "/",
    passport.authenticate("jwt", { session: false }),
    scheduleController.getSchedules
);

const scheduleRoutes = router;

module.exports = scheduleRoutes;
