Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _reactMomentProptypes = require('react-moment-proptypes');

var _reactMomentProptypes2 = _interopRequireDefault(_reactMomentProptypes);

var _airbnbPropTypes = require('airbnb-prop-types');

var _defaultPhrases = require('../defaultPhrases');

var _getPhrasePropTypes = require('../utils/getPhrasePropTypes');

var _getPhrasePropTypes2 = _interopRequireDefault(_getPhrasePropTypes);

var _OrientationShape = require('../shapes/OrientationShape');

var _OrientationShape2 = _interopRequireDefault(_OrientationShape);

var _AnchorDirectionShape = require('../shapes/AnchorDirectionShape');

var _AnchorDirectionShape2 = _interopRequireDefault(_AnchorDirectionShape);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

exports['default'] = {
  // required props for a functional interactive SingleDatePicker
  date: _reactMomentProptypes2['default'].momentObj,
  onDateChange: _react.PropTypes.func.isRequired,

  focused: _react.PropTypes.bool,
  onFocusChange: _react.PropTypes.func.isRequired,

  // input related props
  id: _react.PropTypes.string.isRequired,
  placeholder: _react.PropTypes.string,
  disabled: _react.PropTypes.bool,
  required: _react.PropTypes.bool,
  screenReaderInputMessage: _react.PropTypes.string,
  showClearDate: _react.PropTypes.bool,
  customCloseIcon: _react.PropTypes.node,

  // calendar presentation and interaction related props
  orientation: _OrientationShape2['default'],
  anchorDirection: _AnchorDirectionShape2['default'],
  horizontalMargin: _react.PropTypes.number,
  withPortal: _react.PropTypes.bool,
  withFullScreenPortal: _react.PropTypes.bool,
  initialVisibleMonth: _react.PropTypes.func,
  numberOfMonths: _react.PropTypes.number,
  keepOpenOnDateSelect: _react.PropTypes.bool,
  reopenPickerOnClearDate: _react.PropTypes.bool,
  renderCalendarInfo: _react.PropTypes.func,
  daySize: _airbnbPropTypes.nonNegativeInteger,

  // navigation related props
  navPrev: _react.PropTypes.node,
  navNext: _react.PropTypes.node,

  onPrevMonthClick: _react.PropTypes.func,
  onNextMonthClick: _react.PropTypes.func,

  // day presentation and interaction related props
  renderDay: _react.PropTypes.func,
  enableOutsideDays: _react.PropTypes.bool,
  isDayBlocked: _react.PropTypes.func,
  isOutsideRange: _react.PropTypes.func,
  isDayHighlighted: _react.PropTypes.func,

  // internationalization props
  displayFormat: _react.PropTypes.oneOfType([_react.PropTypes.string, _react.PropTypes.func]),
  monthFormat: _react.PropTypes.string,
  phrases: _react.PropTypes.shape((0, _getPhrasePropTypes2['default'])(_defaultPhrases.SingleDatePickerPhrases))
};