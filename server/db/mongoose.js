const mongoose = require('mongoose');

const config = require('../../config/env');

mongoose.connect(`${config.DB_HOST}:${config.DB_PORT}/${config.DB_NAME}`)
  .catch(err => console.log(err));

require('../../app/models');

console.log(Object.keys(mongoose.models));
