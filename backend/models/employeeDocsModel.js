const mongoose = require("mongoose");

const employeeDocsSchema = mongoose.Schema({
  birthCertificate: {
    type: Boolean,
    default: false,
  },
  nbiClearance: {
    type: Boolean,
    default: false,
  },
  sss: {
    type: Boolean,
    default: false,
  },
  philhealth: {
    type: Boolean,
    default: false,
  },
  pagibig: {
    type: Boolean,
    default: false,
  },
  tin: {
    type: Boolean,
    default: false,
  },
  tor: {
    type: Boolean,
    default: false,
  },
});

module.exports = { employeeDocsSchema };
