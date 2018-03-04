// const decoded = require('./jwt');
const router = require('./router');

// const middlewares = [decoded, router];
const middlewares = [router];

module.exports = middlewares;
