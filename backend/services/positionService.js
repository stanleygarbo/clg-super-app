const { Position } = require("../models/positionModel");

const getPosition = async (id) => {
  const res = await Position.findById(id);

  return res;
};

const getPositions = async () => {
  const res = await Position.find();

  return res;
};

const addPosition = async (data) => {
  const res = new Position(data);

  res.save();

  return res;
};

const updatePosition = async ({ id, data }) => {
  const res = await Position.updateOne({ _id: id }, data);

  return res;
};

const deletePosition = async (id) => {
  const res = await Position.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

module.exports = {
  getPosition,
  getPositions,
  addPosition,
  updatePosition,
  deletePosition,
};
