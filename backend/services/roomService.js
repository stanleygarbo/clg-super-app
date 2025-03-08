const { Room } = require("../models/roomModel");

const getRoom = async (id) => {
  const room = await Room.findById(id);
  return room;
};

const getRooms = async () => {
  const room = await Room.find();
  return room;
};

const addRoom = async (data) => {
  const room = new Room(data);
  await room.save();
  return room;
};

const roomService = {
  getRoom,
  getRooms,
  addRoom,
};

module.exports = roomService;
