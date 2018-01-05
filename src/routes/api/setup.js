require('../../connection');
const express = require('express');

const DeviceSetup = require('../../models/devicesetup');
const router = express.Router();

const verify = (body) => {
  return (body.device_identifier !== undefined);
};

router.get('/:device_identifier', (req, res, next) => {
  let deviceId = req.params['device_identifier'];

  DeviceSetup.find({ device_identifier: deviceId }, function (err, devicesetup) {

    if (err) {
      devicesetup = saveSetup(deviceId);
      if (!devicesetup) {
        res.status(400).send(JSON.stringify({
          "type": "error",
          "message": "ERROR"
        }));
        throw err;
      }
    }

    res.status(200).send(JSON.stringify(devicesetup));
  });
});

function saveSetup(deviceId) {
  let ds = new DeviceSetup({
    device_identifier: deviceId,
    data: {
      target_temp: 25,
      target_temp_tolerance: 0.5,
    }
  });

  let saved = false;
  ds.save((err) => {
    if (!err) saved = true;
  });
  return saved ? ds : undefined;
}

module.exports = router;