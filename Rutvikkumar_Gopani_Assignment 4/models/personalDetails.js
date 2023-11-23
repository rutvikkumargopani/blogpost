//define schema for each collection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const bcrypt = require("bcrypt");

//Structure for the collection
const personalDetailsSchema = new Schema({
  firstName: String,
  lastName: String,
  licenceNo: String,
  age: Number,
  dob: String,
  username: String,
  password: String,
  usertype: String,
  appointmentId: String,
  car_details: {
    make: String,
    model: String,
    year: Number,
    plat_number: String,
  },
});

personalDetailsSchema.pre("save", function (next) {
  const user = this;
  bcrypt.hash(user.password, 10, (error, hash) => {
    user.password = hash;
    next();
  });
});

personalDetailsSchema.pre("update", function (next) {
  const user = this;
  bcrypt.hash(user.licenceNo, 10, (error, hash) => {
    user.licenceNo = hash;
    next();
  });
});

//Link the schema to collection
const personalDetails = mongoose.model(
  "personalDetails",
  personalDetailsSchema
);
//('Collection Name', 'SchemaName')

//TO export schema file
//export schema as module to be used in other files
module.exports = personalDetails;
