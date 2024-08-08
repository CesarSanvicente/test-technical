const Answer = require('../models/Answer');

const getAllAnswers = async (req, res) => {
  try {
    const answers = await Answer.find();
    res.status(200).json(answers);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const createAnswer = async (req, res) => {
  try {
    const newAnswer = new Answer(req.body);
    await newAnswer.save();
    res.status(201).json(newAnswer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const updateAnswer = async (req, res) => {
  try {
    const updatedAnswer = await Answer.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAnswer) return res.status(404).json({ message: 'Answer not found' });
    res.status(200).json(updatedAnswer);
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getAllAnswers, createAnswer, updateAnswer };
