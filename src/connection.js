const mongoose = require('mongoose');
const mongoURI = process.env.mongodb_uri; // grab uri from enviroment variables.
mongoose.connect(mongoURI, { useMongoClient: true });

mongoose.connection.on('connected', () => {
  console.log('Mongoose connected to ' + mongoURI);
});

mongoose.connection.on('error', (err) => {
  console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', () => {
  console.log('Mongoose disconnected');
});

process.on('SIGINT', () => {
  mongoose.connection.close(() => {
    console.log('Mongoose disconnected through app termination');
    process.exit(0);
  });
});
