const mongoose = require('mongoose');

const SaleOrder = mongoose.model('sale_order');

exports.create = (req, res, next) => {
  new SaleOrder(req.body).save()
    .then((doc) => { res.status(200).json(doc) })
    .catch(err => next(err));
}

exports.read = (req, res, next) => {
  SaleOrder.find({})
    .limit()
    .sort()
    .then(docs => { res.status(200).json(docs) })
    .catch(err => next(err));
}
