var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var logger = require('morgan');
var session = require('express-session');
var passport = require('passport');
var flash = require('connect-flash');
var keys = require('./config/keys')

// Connect MongoDB
var mongoose = require('mongoose');
mongoose.connect(keys.mongoURI, { useNewUrlParser: true });
mongoose.set('useFindAndModify', false);
mongoose.Promise = global.Promise;

var app = express();

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET, PUT, POST, DELETE");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static('build'));

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// session setup
app.use(session ({
  secret: 'GrowElectronics',
  resave: true,
  saveUninitialized: true
  })
);

// passport setup
require('./Passport/passport')(passport);
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

//WEB
require('./routes/web/indexRoutes')(app, passport);

//API
var productsApi = require('./routes/api/productRoutes');
var ordersApi = require('./routes/api/orderRoutes');
var contactApi = require('./routes/api/contactRoutes');
app.use('/api/products', productsApi);
app.use('/api/orders', ordersApi);
app.use('/api/contact', contactApi);


app.get("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
