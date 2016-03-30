//Load the module dependencies
var mongoose = require('mongoose'), Schema = mongoose.Schema;

// Define a new 'teachersSchema'
var teacherSchema = new Schema({
    first_name: String,
    last_name: String,
    id: Number,
    courses: [Number],
},{collection: 'teachers'});

// Create the model out of the 'teacherSchema'
mongoose.model('Teacher',teacherSchema);