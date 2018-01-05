const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
var schema = new Schema({
  device_identifier: String,
  data: {
    target_temp: Number,
    target_temp_tolerance: Number
  },
  created_at: Date,
  updated_at: Date
});

schema.pre('save', function (next) {
  const currentDate = new Date().toISOString();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const DeviceSetup = mongoose.model('DeviceSetup', schema);
module.exports = DeviceSetup;
