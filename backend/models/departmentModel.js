const mongoose = require("mongoose");

const departmentSchema = mongoose.Schema(
  {
    departmentName: {
      type: String,
      required: true,
    },
    programs: [{ type: mongoose.Schema.Types.ObjectId, ref: "Program" }],
  },
  { timestamps: true }
);

const Department = mongoose.model("Department", departmentSchema);

module.exports = { Department };
