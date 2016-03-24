//Load the module dependencies
var express = require('express');
var bodyParser = require('body-parser');
var app = express();

//Define the express configuration
module.exports = function() {

    //Create a new express instance
    var app = express();

    //Here we are configuring express to use body-parser as middle-ware.
    app.set('json spaces',4);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());


    // Load the routing files
    //require('../app/routes/tests.routes.js')(app);
    //require('../app/routes/base64.routes.js')(app);
    //require('../app/routes/images.routes.js')(app);

    //Return the Express application instance
    return app;
};
