var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');


const indexRouter = require('./api/index');
const usersRouter = require('./api/users');
const productsRouter = require('./api/products');
const ordersRouter = require('./api/orders');

var app = express();

const MongoClient = require("mongodb").MongoClient;

MongoClient.connect("mongodb://127.0.0.1:27017/ridwaan-mohamed", {
    useUnifiedTopology: true
})
.then(client => {
    console.log("Connected to the database");

    const db = client.db("ridwaan-mohamed");
    app.locals.db = db;
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/index', indexRouter);
app.use('/api/users', usersRouter);
app.use('/api/products', productsRouter);
app.use('/api/orders', ordersRouter);

module.exports = app;