var teachers = require('../controllers/teachers.controller');


// Define base64 routes module
module.exports = function(app) {

    app.post('/teachersCourses', teachers.getCourses);


};