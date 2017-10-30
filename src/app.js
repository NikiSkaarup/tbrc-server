// Module imports
const express = require('express');
const bodyParser = require('body-parser');

// Routes imports
const api = require('./routes/api');


// App setup
const app = express();
// App.use
app.use(bodyParser.json()); 

// Routes
app.use('/api', api);



// Code!


