require('../../connection');
const express = require('express');

const Datalog = require('../../models/datalog');
const router = express.Router();

const verify = (body) => {
  return (body.device_identifier !== undefined
    && body.data !== undefined
    && body.data.light_level !== undefined
    && body.data.temperature !== undefined
    && body.data.relay_state !== undefined
    && body.data.milis !== undefined);
};

router.post('/', (req, res, next) => {
  if (verify(req.body)) {
    let log = Datalog({
      device_identifier: req.body.device_identifier,
      data: req.body.data
    });

    log.save((err) => {
      if (err) {
        res.status(400).send(JSON.stringify({
          "type": "error",
          "message": "ERROR"
        }));
        throw err;
      }

      res.status(200).send(JSON.stringify({
        "type": "success",
        "message": "OK"
      }));
    });
  }
});

module.exports = router;
