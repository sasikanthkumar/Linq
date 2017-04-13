Object.defineProperty(exports, "__esModule", {
  value: true
});

var _wrapValidator = require('./helpers/wrapValidator');

var _wrapValidator2 = _interopRequireDefault(_wrapValidator);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function restrictedProp(props, propName, componentName) {
  if (props[propName] != null) {
    return new TypeError('The ' + String(propName) + ' prop on ' + String(componentName) + ' is not allowed.');
  }

  return null;
}
restrictedProp.isRequired = restrictedProp;

exports['default'] = function () {
  return (0, _wrapValidator2['default'])(restrictedProp, 'restrictedProp');
};
//# sourceMappingURL=restrictedProp.js.map