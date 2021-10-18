'use strict';
module.exports = function(app) {
  let user = require('../controllers/userController');

  // user Routes
  app.route('/consumers')
    .get(user.list_all_consumers)
    .get(user.list_all_saleagents);

};
