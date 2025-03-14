const express = require("express");
const router = express.Router();
const passport = require("passport");
const roleMiddleware = require("../middlewares/roleMiddleware");
const roomConreoller = require("../controllers/roomController");

router.post(
  "/",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar"]),
  roomConreoller.addRoom
);

router.get(
  "/",
  passport.authenticate("jwt", { session: false }),
  roomConreoller.getRooms
);

router.patch(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar"]),
  roomConreoller.updateRoom
);

router.delete(
  "/:id",
  passport.authenticate("jwt", { session: false }),
  roleMiddleware(["admin", "super", "registrar"]),
  roomConreoller.deleteRoom
);

const roomRoutes = router;

module.exports = roomRoutes;
