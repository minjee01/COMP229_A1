// var createError = require('http-errors');
// var express = require('express');
// var path = require('path');
// var cookieParser = require('cookie-parser');
// var logger = require('morgan');

// // database setup
// var mongoose = require('mongoose');
// var DB = require('./db');

// //point mongoose to the DB URI
// mongoose.connect(DB.URI, {useNewUrlParser: true, useUnifiedTopology: true});

// var mongoDB = mongoose.connection;
// mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
// mongoDB.once('open', ()=>{
//   console.log('Connected to MongoDB...');
// });

// var indexRouter = require('../routes/index');
// var usersRouter = require('../routes/users');
// var contactRouter = require('../routes/contact');

// var app = express();

// // view engine setup
// app.set('views', path.join(__dirname, '../views'));
// app.set('view engine', 'ejs'); //express -e 

// app.use(logger('dev'));
// app.use(express.json());
// app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '../public')));
// app.use(express.static(path.join(__dirname, '../node_modules')));

// app.use('/', indexRouter);
// app.use('/users', usersRouter);
// app.use('/contact-list', contactRouter);

// // catch 404 and forward to error handler
// app.use(function(req, res, next) {
//   next(createError(404));
// });

// // error handler
// app.use(function(err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   res.render('error', { title: 'Error' });
// });

// module.exports = app;
