const express = require('express');

const router = express.Router();

const apiRouter = require('../../app/routes');

router.use('/api', apiRouter);

module.exports = router;
