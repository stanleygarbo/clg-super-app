// Government IDs Schema
const GovernmentIdSchema = new mongoose.Schema({
  sss: {
    type: String,
    required: true, // Set as required if every employee must have this
    validate: {
      validator: function (value) {
        return /^\d{10}$/.test(value); // Example: Validate 10-digit SSS number
      },
      message: (props) => `${props.value} is not a valid SSS number!`,
    },
  },
  pagibig: {
    type: String,
    required: true, // Set as required if necessary
    validate: {
      validator: function (value) {
        return /^\d{12}$/.test(value); // Example: Validate 12-digit Pag-IBIG number
      },
      message: (props) => `${props.value} is not a valid Pag-IBIG number!`,
    },
  },
  philhealth: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{12}$/.test(value); // Example: Validate 12-digit PhilHealth number
      },
      message: (props) => `${props.value} is not a valid PhilHealth number!`,
    },
  },
  tin: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return /^\d{9}$/.test(value); // Example: Validate 9-digit TIN number
      },
      message: (props) => `${props.value} is not a valid TIN number!`,
    },
  },
});

const GovernmentId = mongoose.model("GovernmentId", GovernmentIdSchema);

module.exports = { GovernmentId };
