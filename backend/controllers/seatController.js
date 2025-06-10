const { validationResult } = require("express-validator");
const seatService = require("../services/seatService");

const addSeat = async (req, res) => {
  try {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const seat = await seatService.addSeat(req.body);
    res.status(200).json({
      message: "Seat added successfully",
      seat: { seat },
    });
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getSeats = async (req, res) => {
  try {
    const seats = await seatService.getSeats();
    res.status(200).json(seats);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const getSeat = async (req, res) => {
  try {
    const seat = await seatService.getSeat(req.params.id);
    if (!seat) {
      return res.status(404).json({
        message: "Not Found",
      });
    }

    res.status(200).json(seat);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const updateSeat = async (req, res) => {
  try {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const seat = await seatService.updateSeat({
      id: req.params.id,
      data: req.body,
    });

    res.status(201).json(seat);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

const deleteSeat = async (req, res) => {
  try {
    const seat = await seatService.deleteSeat(req.params.id);

    if (!seat) {
      return res.status(404).json({ message: "Not Found" });
    }

    res.status(200).json(seat);
  } catch (error) {
    res.status(400).json({
      message: error.message,
    });
  }
};

module.exports = {
  addSeat,
  getSeats,
  getSeat,
  updateSeat,
  deleteSeat,
};
