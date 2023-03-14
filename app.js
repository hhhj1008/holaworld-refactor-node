const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const router = require('./routes');

const createApp = () => {
    const app = express();

    app.use(logger('dev'));
    app.use(express.json());
    app.use(express.urlencoded({extended: false}));
    app.use(cookieParser());
    app.use(router);
    app.use(express.static(path.join(__dirname, 'public')));

    return app;
}

module.exports = {createApp};
