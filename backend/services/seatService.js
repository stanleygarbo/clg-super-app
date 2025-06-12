const { Seat } = require("../models/seatModel");
const studentService = require("./studentService");

const getSeats = async () => {
  const seats = await Seat.find().populate([
    { path: "section" },
    { path: "schedule" },
    { path: "grades" },
    { path: "student" },
  ]);

  return seats;
};

const getSeat = async (id) => {
  const seat = await Seat.findById(id).populate([
    { path: "section" },
    { path: "schedule" },
    { path: "grades" },
    { path: "student" },
  ]);

  return seat;
};

const addSeat = async (data) => {
  const student = await studentService.getStudent(data.student);

  if (!student) {
    throw new Error("Student does not exist.");
  }

  const seat = new Seat(data);

  await seat.save();

  return seat;
};

const updateSeat = async ({ id, data }) => {
  const student = await studentService.getStudent(data.student);

  if (!student) {
    throw new Error("Student does not exist.");
  }

  const seat = await Seat.updateOne({ _id: id }, data);

  return seat;
};

const deleteSeat = async (id) => {
  const seat = await Seat.updateOne(
    {
      _id: id,
    },
    { $set: { isDeleted: true } }
  );

  return seat;
};

const seatService = {
  getSeats,
  getSeat,
  addSeat,
  updateSeat,
  deleteSeat,
};

module.exports = seatService;
