const mongoose = require("mongoose");

const studentDocsSchema = mongoose.Schema({
  birthCertificate: {
    type: Boolean,
    default: false,
  },
  form138: {
    type: Boolean,
    default: false,
  },
  goodMoral: {
    type: Boolean,
    default: false,
  },
  form137: {
    type: Boolean,
    default: false,
  },
});

module.exports = { studentDocsSchema };
