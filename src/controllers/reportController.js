const Employee = require('../models/Employee');
const Evaluation = require('../models/Evaluation');

const getEmployeeReport = async (req, res) => {
  try {
    const employee = await Employee.findById(req.params.id);
    if (!employee) return res.status(404).json({ message: 'Employee not found' });

    const evaluations = await Evaluation.find({ employeeId: req.params.id });
    res.status(200).json({ employee, evaluations });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

const getDepartmentReport = async (req, res) => {
  try {
    const employees = await Employee.find({ 'professionalInfo.department': req.params.id });
    if (!employees.length) return res.status(404).json({ message: 'No employees found in this department' });

    const evaluations = await Evaluation.find({ employeeId: { $in: employees.map(e => e._id) } });
    res.status(200).json({ department: req.params.id, evaluations });
  } catch (error) {
    res.status(500).json({ message: 'Server error' });
  }
};

module.exports = { getEmployeeReport, getDepartmentReport };
