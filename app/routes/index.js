const express = require('express');

const router = express.Router();

const saleOrderRoute = require('./sale_order');

router.use('/sale', saleOrderRoute);

module.exports = router;
