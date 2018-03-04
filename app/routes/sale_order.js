const express = require('express');

const saleOrder = require('../handlers/sale_order');

const router = express.Router();

router.route('/sale_orders')
  .all((req, res, next) => {
    next();
  })
  .get(saleOrder.read)
  .post(saleOrder.create);

router.route('/sale_orders/:id')
  .all((req, res, next) => next())
  .get((req, res, next) => { res.json(req.body) })
  .put((req, res, next) => { res.json(req.body) })
  .delete((req, res, next) => { res.json(req.body) });

module.exports = router;
