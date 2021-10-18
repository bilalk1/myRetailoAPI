
'use strict';
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var UserSchema = new Schema({
  id: {
    
  },

  value: {
    
  }

});

module.exports = mongoose.model('Users', UserSchema);