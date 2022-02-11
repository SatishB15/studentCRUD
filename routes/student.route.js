const express = require('express');
const route = express.Router();
const studentController = require('../controllers/student.controller');

//get all student data
route.get('/show', studentController.getAllStudent);

//get student by rollNo
route.get('/:RollNo', studentController.getSingleStudent);

//add student data
route.post('/add', studentController.addStudent);

//update student data by rollNo
route.patch('/:RollNo', studentController.updateStudent);

//delete student by rollNo
route.delete('/:RollNo', studentController.deleteStudent);

module.exports = route;
