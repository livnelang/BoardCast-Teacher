//Load Dependencies
var expressJwt = require('express-jwt');
var jwt = require('jsonwebtoken');
var express = require('./config/express');

// Create a new Express application instance
var app = express();

// We are going to protect /api routes with JWT
app.use('/api', expressJwt({secret: "thisisasecretketdontreveal"}));

app.all('/*', function(req, res, next) {
    // CORS headers
    res.header("Access-Control-Allow-Origin", "*"); // restrict it to the required domain
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    // Set custom headers for CORS
    res.header('Access-Control-Allow-Headers', 'Content-type,Accept,X-Access-Token,X-Key');
    if (req.method == 'OPTIONS') {
        res.status(200).end();
    } else {
        next();
    }
});

app.post('/authenticate', function (req, res) {
    console.log('incomig /authenticate');
    //TODO validate req.body.username and req.body.password
    //if is invalid, return 401
    if (!(req.body.username === 'john.doe' && req.body.password === 'foobar')) {
        res.send(401, 'Wrong user or password');
        return;
    }

    var profile = {
        first_name: 'John',
        last_name: 'Doe',
        email: 'john@doe.com',
        id: 123
    };

    // We are sending the profile inside the token
    var token = jwt.sign(profile, "thisisasecretketdontreveal", { expiresInMinutes: 60*5 });

    res.json({ token: token });
});


app.get('/api/restricted', function (req, res) {
    console.log('user ' + req.user.email + ' is calling /api/restricted');
    res.json({
        name: 'foo'
    });
});



// Set The Port
app.set('port', process.env.PORT || 3000);
// Start the server
var server = app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + server.address().port + ' ..');
});