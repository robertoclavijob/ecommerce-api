require('dotenv').config();
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const { db, testConnection, sync } = require('./database.js');

var indexRouter = require('./routes/index');
var productsRouter = require('./routes/products.route.js');
var ordersRouter = require('./routes/orders.route.js');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/products', productsRouter);
app.use('/orders', ordersRouter);

//Uncomment this line to test your db connection
//testConnection();

//Sync models with DB, only valid for _test dbs
sync();

// const Product = require('./models/product.js')(db);

module.exports = app;
