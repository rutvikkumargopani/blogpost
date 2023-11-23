const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const DriveTestSchema = new Schema({
    firstname: String,
    lastname: String,
    license_no: String,
    age: Number,
    dob: String,
    car_details: {
        make: String,
        model: String,
        year: Number,
        platno: String,
    }
});

const DriveTest = mongoose.model('DriveTest', DriveTestSchema);

// Exports schema as module to be used in other files
module.exports = DriveTest