// routes/userRoutes.js
const express = require("express");
const userController = require("../controllers/userController");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const { body } = require("express-validator");
const roles = require("../constants/roles");
const registerValidationRules = [
  [
    body("username")
      .if(
        body("roles").custom(
          (roles) => Array.isArray(roles) && !roles.includes("student")
        )
      )
      .notEmpty()
      .withMessage("username is required when role is an employee")
      .trim(),
    body("password")
      .if(
        body("roles").custom(
          (roles) => Array.isArray(roles) && !roles.includes("student")
        )
      )
      .notEmpty()
      .withMessage("password is required when role is an employee")
      .notEmpty()
      .trim(),
    body("firstName").notEmpty().trim(),
    body("surname").notEmpty().trim(),
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

router.post(
  "/register",
  registerValidationRules,
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super"]),
  userController.register
);
router.post("/login", userController.login);
router.get("/:userId", userController.getUser);
router.get("/", userController.getUsers);

module.exports = router;
