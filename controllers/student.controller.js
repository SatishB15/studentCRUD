const studentSchema = require('../models/student.model');

const getAllStudent = async (req, res) => {
  try {
    const students = await studentSchema.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getSingleStudent = async (req, res) => {
  try {
    const students = await studentSchema.findOne({ RollNo: req.params.RollNo });
    res.status(200).json(students);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const addStudent = async (req, res) => {
  var student = new studentSchema(req.body);
  try {
    const addStudent = await student.save();
    res.status(200).json(addStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateStudent = async (req, res) => {
  const RollNo = await studentSchema.findOne({ RollNo: req.params.RollNo });
  if (!RollNo) return res.status(404).json({ message: 'RollNo Not Found' });
  try {
    const updateStudent = await studentSchema.updateOne(
      { RollNo: req.params.RollNo },
      { $set: req.body }
    );
    res.status(200).json(updateStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteStudent = async (req, res) => {
  const RollNofetched = await studentSchema.find({ RollNo: req.params.RollNo });
  if (!RollNofetched)
    return res.status(404).json({ message: 'RollNo Not Found' });
  try {
    const deleteStudent = await studentSchema.deleteOne({
      RollNo: req.params.RollNo,
    });
    res.status(200).json(deleteStudent);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const studentController = {
  getAllStudent,
  getSingleStudent,
  addStudent,
  updateStudent,
};
module.exports = studentController;
