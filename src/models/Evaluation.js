const mongoose = require('mongoose');

const evaluationSchema = new mongoose.Schema({
  period: { type: String, required: true },
  status: { type: String, enum: ['pending', 'completed'], required: true },
  type: { type: String, required: true },
  scores: { type: Map, of: Number }
});

module.exports = mongoose.model('Evaluation', evaluationSchema);
