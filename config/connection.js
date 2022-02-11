const mongoose = require('mongoose');

const db = mongoose
  .connect('mongodb://localhost:27017/students', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Database Connected'))
  .catch((error) => console.error(error));
module.exports = db;
