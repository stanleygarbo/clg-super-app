const { default: mongoose } = require("mongoose");

// Government IDs Schema
const GovernmentIdSchema = new mongoose.Schema({
  sss: {
    type: String,
  },
  pagibig: {
    type: String,
  },
  philhealth: {
    type: String,
  },
  tin: {
    type: String,
  },
});

module.exports = GovernmentIdSchema;
