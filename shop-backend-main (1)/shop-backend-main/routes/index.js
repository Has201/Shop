var express = require('express');
var router = express.Router();
const productSchema = require('../models/product.js');

/* GET home page. */
router.get('/product', async (req, res, next) => {
  const params = {};
  const category = req.query.category;
  const sort = req.query._sort;
  const order = req.query._order;
  if (category) {
    params.type = category;
  }
  const products = await productSchema.find(params).sort({ [sort]: order });
  res.send(products);
});

module.exports = router;
