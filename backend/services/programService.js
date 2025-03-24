const Program = require("../models/programModel");
const departmentService = require("./departmentService");

const getProgram = async (id) => {
  const program = await Program.findById(id);

  return program;
};

const getPrograms = async () => {
  const program = await Program.find().populate({ path: "department" });

  return program;
};

const addProgram = async (data) => {
  const dept = departmentService.getDepartment(data.departmentId);
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const program = new Program({ ...data, department: data.departmentId });

  await program.save();

  return program;
};

const updateProgram = async ({ id, data }) => {
  const dept = departmentService.getDepartment(data.departmentId);
  if (!dept) {
    throw new Error("Department does not exist.");
  }

  const program = await Program.updateOne(
    { _id: id },
    { ...data, department: data.departmentId }
  );

  return program;
};

const deleteProgram = async (id) => {
  const res = await Program.updateOne(
    { _id: id },
    { $set: { isDeleted: true } }
  );

  return res;
};

const programService = {
  getProgram,
  getPrograms,
  addProgram,
  updateProgram,
  deleteProgram,
};

module.exports = programService;
