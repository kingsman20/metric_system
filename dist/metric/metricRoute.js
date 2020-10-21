"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _express = _interopRequireDefault(require("express"));

var _metricController = require("./metricController");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const metricRoutes = _express.default.Router();

metricRoutes.post('/metric/:key', _metricController.createMetric);
metricRoutes.get('/metric/:key/sum', _metricController.getMetric);
var _default = metricRoutes;
exports.default = _default;