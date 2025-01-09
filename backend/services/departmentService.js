const { Department } = require("../models/departmentModel");

const getDepartment = async (id) => {
  const department = await Department.findById(id);

  return department;
};

const getDepartments = async () => {
  const department = await Department.find();

  return department;
};

const addDepartment = async (data) => {
  const department = new Department(data);

  department.save();

  return department;
};

const updateDepartment = async ({ id, data }) => {
  const res = await Department.updateOne({ _id: id }, data);

  return res;
};

const deleteDepartment = async (id) => {
  const res = await Department.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

module.exports = {
  getDepartment,
  getDepartments,
  addDepartment,
  updateDepartment,
  deleteDepartment,
};
