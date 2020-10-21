"use strict";

var _express = _interopRequireDefault(require("express"));

var _bodyParser = _interopRequireDefault(require("body-parser"));

var _cors = _interopRequireDefault(require("cors"));

var _metricRoute = _interopRequireDefault(require("./metric/metricRoute"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = (0, _express.default)();
app.use((0, _cors.default)());
app.use(_bodyParser.default.json());
app.use(_bodyParser.default.urlencoded({
  extended: true
})); // Metric Roues

app.use(_metricRoute.default); // Handle Invalid route

app.get('/*', (req, res) => {
  res.status(404).send({
    success: false,
    message: 'Invalid Route'
  });
});
module.exports = app;