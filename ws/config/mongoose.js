// Load the module dependencies
var mongoose = require('mongoose');

// Define the Mongoose configuration schemas
module.exports = function() {
    //Connect to MongoDB with Mongoose
    var db = mongoose.connect('mongodb://boardcast:123456@ds023448.mlab.com:23448/boardcast');

    db = mongoose.connection;
    db.on('error', console.error.bind(console, 'connection error:'));
    db.once('open', function callback () {
        // yay connected!
    });

    //Load the application models
    require('../app/models/teachers.model');

    //Return the Mongoose connection instance
    return db;
};