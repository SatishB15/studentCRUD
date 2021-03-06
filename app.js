const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cors = require('cors');
const studentRoute = require('./routes/student.route');
const app = express();
const db = require('./config/connection');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(cors());

//database connection
mongoose
  .connect(db.url, db.options)
  .then(() => console.log('Database Connected'))
  .catch((error) => console.error(error));

//body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use('/', studentRoute);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
