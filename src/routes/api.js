const express = require('express');

const log = require('./api/log');
const setup = require('./api/setup');

const router = express.Router();

router.use('/log', log);
router.use('/setup', setup);

module.exports = router;
