const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const saleOrderSchema = new Schema({
  name: { type: String }
});

saleOrderSchema.set('toJSON', { virtuals: true });
saleOrderSchema.set('toObject', { virtuals: true });
saleOrderSchema.set('timestamps', true);

module.exports = mongoose.model('sale_order', saleOrderSchema);
