Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = getPhrasePropTypes;

var _react = require('react');

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function getPhrasePropTypes(defaultPhrases) {
  return Object.keys(defaultPhrases).reduce(function (phrases, key) {
    return Object.assign({}, phrases, _defineProperty({}, key, _react.PropTypes.node));
  }, {});
}