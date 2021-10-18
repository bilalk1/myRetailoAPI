
mongoose = require('mongoose'),
Task = require('../api/models/productsModel'), //created model loading here

//Task = require('../api/models/userModel'),


// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/myRetailodb'); //connection string

//service layer for authentication.