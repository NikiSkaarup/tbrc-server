const express = require('express');

const log = require('./api/log');

const router = express.Router();

router.use('/log', log);


