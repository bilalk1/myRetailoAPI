'use strict';
module.exports = function(app) {
  let product = require('../controllers/productsController');

  // product Routes
  app.route('/products')
    .get(product.list_all_products)
    .post(product.create_a_product);


  app.route('/products/:productId')
    .get(product.read_a_product)
    .delete(product.delete_a_product);
};
