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

const updateRoom = async ({ id, data }) => {
  const room = roomService.getRoom(id);

  if (!room) {
    throw new Error("Department does not exist.");
  }

  const res = await Room.updateOne({ _id: id }, data);
  return res;
};

const deleteRoom = async (id) => {
  const res = await Room.updateOne({ _id: id }, { $set: { isDeleted: true } });
  return res;
};

const roomService = {
  getRoom,
  getRooms,
  addRoom,
  updateRoom,
  deleteRoom,
};

module.exports = roomService;
