"use strict";

var _app = _interopRequireDefault(require("./app"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const port = parseInt(process.env.PORT, 10) || 3001;

_app.default.listen(port, () => console.log(`Listening on port ${port}`));