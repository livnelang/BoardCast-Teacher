/*
 * Load Dependencies
 */
var Teachers = require('mongoose').model('Teacher');


/*
 * /teachersCourses
 * Get  Teacher Courses
 */

exports.getCourses = function (req,res)  {
    console.log('inside /teachersCourses');
    console.log('teacher_id : ' +  req.body.teacher_id);

    res.set("Content-Type", "application/json");



    Teachers.find({id: req.body.teacher_id}).select('courses').exec(function (err, data) {
        console.log('mongo data: ' + data);
        if (err) {
            // If there was an error send the error message
            //return res.status(400).send({
            res.status(200).json( {
                status: "404",
                msg: " database error"
            });
        }
        else {
            // Send a JSON representation of the ingredients
            res.status(200).json(data);
        }
    });
};
