
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
// create a schema
var logdataSchema = new Schema({
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

logdataSchema.pre('save', (next) => {
  const currentDate = new Date();

  this.updated_at = currentDate;

  if (!this.created_at)
    this.created_at = currentDate;

  next();
});

const Logdata = mongoose.model('Logdata', logdataSchema);
module.exports = Logdata;
