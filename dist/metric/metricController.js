"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getMetric = exports.createMetric = void 0;

var _data = require("./data");

const createMetric = (req, res) => {
  if (!req.params.key) {
    return res.status(400).send({
      message: 'Key not provided'
    });
  }

  if (!req.body.value) {
    return res.status(400).send({
      message: 'Value not provided'
    });
  }

  const content = {
    key: req.params.key,
    value: req.body.value,
    timestamp: new Date()
  };

  _data.data.push(content);

  res.status(200).send({});
};

exports.createMetric = createMetric;

const getMetric = (req, res) => {
  let value = 0;

  if (!req.params.key) {
    return res.status(400).send({
      message: 'Key not provided'
    });
  } // Filter results using the key and checks that timestamp is within the recent hour


  _data.data.filter(elem => {
    if (elem.key === req.params.key && new Date(elem.timestamp.setHours(elem.timestamp.getHours() + 1)) >= new Date()) {
      value += elem.value;
    }
  });

  res.status(200).send({
    value: Math.round(value)
  });
};

exports.getMetric = getMetric;