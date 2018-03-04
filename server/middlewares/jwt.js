const jwt = require('jsonwebtoken');

const config = require('../../config/env');

module.exports = (req, res, next) => {
  let decoded = jwt.verify(req.headers.authorization, config.JWT_SECRET);
  console.log(decoded);
  next();
}
