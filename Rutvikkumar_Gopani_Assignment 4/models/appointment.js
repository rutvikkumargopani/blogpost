//define schema for each collection
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

//Structure for the collection
const appointmentSchema = new Schema({
  date: Date,
  time: String,
  isTimeSlotAvailable: Boolean,
});

//Link the schema to collection
const appointment = mongoose.model("appointment", appointmentSchema);
//('Collection Name', 'SchemaName')

//TO export schema file
//export schema as module to be used in other files
module.exports = appointment;
