const express = require('express');
const logger = require('morgan');
const bodyParser = require('body-parser');

const app = express();
// log requests to console
app.use(logger('dev'));
// parse incoming requests
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

require('./server/routes')(app);
// catch-all route
app.get('*', (req, res) => res.status(200).send({
  message: 'Welcome to the beginning of nothingness.',
}));

module.exports = app;
