const mongoose = require('mongoose');

const employeeSchema = new mongoose.Schema({
  personalInfo: {
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
  },
  professionalInfo: {
    position: { type: String, required: true },
    department: { type: String, required: true },
  }
});

module.exports = mongoose.model('Employee', employeeSchema);
