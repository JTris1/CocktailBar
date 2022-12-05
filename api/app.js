require('dotenv').config()
require('app-module-path').addPath(__dirname);

const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');

connectToMongo();

const indexRouter = require('./routes/index');

const app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

app.use('/', indexRouter);



async function connectToMongo() {
    await mongoose.connect(process.env.MONGO_URI_STRING, {
        useUnifiedTopology: true,
        useNewUrlParser: true
    })
    .then(() => {
        console.info("========= MongoDB Connected with Mongoose =========");
    })
    .catch((e) => {
        console.error(e);
    });
}

module.exports = app;
