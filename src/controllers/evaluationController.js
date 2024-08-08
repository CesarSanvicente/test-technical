const Evaluation = require('../models/Evaluation');

const calculateScores = (evaluation) => {
  const scores = new Map();
  scores.set('teamwork', Math.random() * 5);
  scores.set('communication', Math.random() * 5);
  evaluation.scores = scores;
};

const getAllEvaluations = async (req, res) => {
  try {
    const evaluations = await Evaluation.find();
    res.status(200).json(evaluations);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getEvaluationById = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createEvaluation = async (req, res) => {
  try {
    const newEvaluation = new Evaluation(req.body);
    calculateScores(newEvaluation);
    await newEvaluation.save();
    res.status(201).json(newEvaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateEvaluation = async (req, res) => {
  try {
    const updatedEvaluation = await Evaluation.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedEvaluation) return res.status(404).json({ message: 'Evaluation not found' });
    calculateScores(updatedEvaluation);
    await updatedEvaluation.save();
    res.status(200).json(updatedEvaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const submitEvaluation = async (req, res) => {
  try {
    const evaluation = await Evaluation.findById(req.params.id);
    if (!evaluation) return res.status(404).json({ message: 'Evaluation not found' });

    evaluation.status = 'completed';
    calculateScores(evaluation);
    await evaluation.save();
    res.status(200).json(evaluation);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllEvaluations, getEvaluationById, createEvaluation, updateEvaluation, submitEvaluation };
