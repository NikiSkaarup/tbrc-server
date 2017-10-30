
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
var datalogSchema = new Schema({
  device_identifier: String,
  data: { 
    relay_state: Boolean,
    light_level: Number,
    temperature: Number,
    milis: Number
  },
  created_at: Date,
  updated_at: Date
});

datalogSchema.pre('save', function(next) {
  const currentDate = new Date().toISOString();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const Datalog = mongoose.model('Datalog', datalogSchema);
module.exports = Datalog;
