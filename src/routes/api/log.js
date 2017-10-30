require('../../connection');
const express = require('express');

const Logdata = require('../../models/logdata');
const router = express.Router();

const verify = (body) => {
  if (body.deviceIdentifier && body.data) {
    if (body.data.lightLevel
      && body.data.temperature
      && body.data.relayState
      && body.data.milis) {
      return true;
    }
  }
  return false;
};

router.post('/', (req, res, next) => {
  if (verify(req.body)) {
    let log = Logdata({
      device_identifier: req.body.device_identifier,
      data: req.body.data
    });

    log.save((err) => {
      if (err) {
        res.send(400, JSON.stringify({
          "error": "Failed"
        }));
        throw err;
      };

      res.send(200, JSON.stringify({
        "success": "OK"
      }));
    });
  }
});


