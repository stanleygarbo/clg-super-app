const { validationResult } = require("express-validator");
const roomService = require("../services/roomService");

const addRoom = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const room = await roomService.addRoom(req.body);
    res.status(201).json({
      message: "Room added successfully",
      room: { room },
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getRooms = async (req, res) => {
  try {
    const rooms = await roomService.getRooms();
    res.status(200).json(rooms);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = { addRoom, getRooms };
