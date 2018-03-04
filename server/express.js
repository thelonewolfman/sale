const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const middlewares = require('./middlewares');

module.exports = () => {
  const app = express();

  app.use(morgan('dev'));
  app.use(bodyParser.json());

  app.use(middlewares);

  return app;
}
