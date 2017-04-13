module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};

/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {

/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;

/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};

/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;

/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}


/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;

/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;

/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";

/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _createClass = function () {
	  function defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];descriptor.enumerable = descriptor.enumerable || false;descriptor.configurable = true;if ("value" in descriptor) descriptor.writable = true;Object.defineProperty(target, descriptor.key, descriptor);
	    }
	  }return function (Constructor, protoProps, staticProps) {
	    if (protoProps) defineProperties(Constructor.prototype, protoProps);if (staticProps) defineProperties(Constructor, staticProps);return Constructor;
	  };
	}();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	var _moment = __webpack_require__(5);

	var _moment2 = _interopRequireDefault(_moment);

	var _classnames = __webpack_require__(6);

	var _classnames2 = _interopRequireDefault(_classnames);

	var _reactPortal = __webpack_require__(18);

	var _reactPortal2 = _interopRequireDefault(_reactPortal);

	var _airbnbPropTypes = __webpack_require__(4);

	var _consolidatedEvents = __webpack_require__(11);

	var _defaultPhrases = __webpack_require__(19);

	var _OutsideClickHandler = __webpack_require__(20);

	var _OutsideClickHandler2 = _interopRequireDefault(_OutsideClickHandler);

	var _toMomentObject = __webpack_require__(32);

	var _toMomentObject2 = _interopRequireDefault(_toMomentObject);

	var _toLocalizedDateString = __webpack_require__(33);

	var _toLocalizedDateString2 = _interopRequireDefault(_toLocalizedDateString);

	var _toISODateString = __webpack_require__(34);

	var _toISODateString2 = _interopRequireDefault(_toISODateString);

	var _getResponsiveContainerStyles = __webpack_require__(21);

	var _getResponsiveContainerStyles2 = _interopRequireDefault(_getResponsiveContainerStyles);

	var _isTouchDevice = __webpack_require__(16);

	var _isTouchDevice2 = _interopRequireDefault(_isTouchDevice);

	var _SingleDatePickerInput = __webpack_require__(45);

	var _SingleDatePickerInput2 = _interopRequireDefault(_SingleDatePickerInput);

	var _DayPicker = __webpack_require__(44);

	var _DayPicker2 = _interopRequireDefault(_DayPicker);

	var _close = __webpack_require__(25);

	var _close2 = _interopRequireDefault(_close);

	var _isInclusivelyAfterDay = __webpack_require__(22);

	var _isInclusivelyAfterDay2 = _interopRequireDefault(_isInclusivelyAfterDay);

	var _isSameDay = __webpack_require__(42);

	var _isSameDay2 = _interopRequireDefault(_isSameDay);

	var _SingleDatePickerShape = __webpack_require__(46);

	var _SingleDatePickerShape2 = _interopRequireDefault(_SingleDatePickerShape);

	var _constants = __webpack_require__(7);

	function _interopRequireDefault(obj) {
	  return obj && obj.__esModule ? obj : { 'default': obj };
	}

	function _classCallCheck(instance, Constructor) {
	  if (!(instance instanceof Constructor)) {
	    throw new TypeError("Cannot call a class as a function");
	  }
	}

	function _possibleConstructorReturn(self, call) {
	  if (!self) {
	    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	  }return call && ((typeof call === "undefined" ? "undefined" : _typeof(call)) === "object" || typeof call === "function") ? call : self;
	}

	function _inherits(subClass, superClass) {
	  if (typeof superClass !== "function" && superClass !== null) {
	    throw new TypeError("Super expression must either be null or a function, not " + (typeof superClass === "undefined" ? "undefined" : _typeof(superClass)));
	  }subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } });if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
	}

	var propTypes = (0, _airbnbPropTypes.forbidExtraProps)(_SingleDatePickerShape2['default']);

	var defaultProps = {
	  // required props for a functional interactive SingleDatePicker
	  date: null,
	  focused: false,

	  // input related props
	  id: 'date',
	  placeholder: 'Date',
	  disabled: false,
	  required: false,
	  screenReaderInputMessage: '',
	  showClearDate: false,
	  customCloseIcon: null,

	  // calendar presentation and interaction related props
	  orientation: _constants.HORIZONTAL_ORIENTATION,
	  anchorDirection: _constants.ANCHOR_LEFT,
	  horizontalMargin: 0,
	  withPortal: false,
	  withFullScreenPortal: false,
	  initialVisibleMonth: null,
	  numberOfMonths: 2,
	  keepOpenOnDateSelect: false,
	  reopenPickerOnClearDate: false,
	  renderCalendarInfo: null,
	  daySize: _constants.DAY_SIZE,

	  // navigation related props
	  navPrev: null,
	  navNext: null,

	  onPrevMonthClick: function () {
	    function onPrevMonthClick() {}

	    return onPrevMonthClick;
	  }(),
	  onNextMonthClick: function () {
	    function onNextMonthClick() {}

	    return onNextMonthClick;
	  }(),

	  // day presentation and interaction related props
	  renderDay: null,
	  enableOutsideDays: false,
	  isDayBlocked: function () {
	    function isDayBlocked() {
	      return false;
	    }

	    return isDayBlocked;
	  }(),
	  isOutsideRange: function () {
	    function isOutsideRange(day) {
	      return !(0, _isInclusivelyAfterDay2['default'])(day, (0, _moment2['default'])());
	    }

	    return isOutsideRange;
	  }(),
	  isDayHighlighted: function () {
	    function isDayHighlighted() {}

	    return isDayHighlighted;
	  }(),

	  // internationalization props
	  displayFormat: function () {
	    function displayFormat() {
	      return _moment2['default'].localeData().longDateFormat('L');
	    }

	    return displayFormat;
	  }(),
	  monthFormat: 'MMMM YYYY',
	  phrases: _defaultPhrases.SingleDatePickerPhrases
	};

	var SingleDatePicker = function (_React$Component) {
	  _inherits(SingleDatePicker, _React$Component);

	  function SingleDatePicker(props) {
	    _classCallCheck(this, SingleDatePicker);

	    var _this = _possibleConstructorReturn(this, (SingleDatePicker.__proto__ || Object.getPrototypeOf(SingleDatePicker)).call(this, props));

	    _this.state = {
	      dayPickerContainerStyles: {},
	      hoverDate: null,
	      isDayPickerFocused: false,
	      isInputFocused: false
	    };

	    _this.today = (0, _moment2['default'])();
	    _this.isTouchDevice = false;

	    _this.onDayMouseEnter = _this.onDayMouseEnter.bind(_this);
	    _this.onDayMouseLeave = _this.onDayMouseLeave.bind(_this);
	    _this.onDayClick = _this.onDayClick.bind(_this);

	    _this.onDayPickerFocus = _this.onDayPickerFocus.bind(_this);
	    _this.onDayPickerBlur = _this.onDayPickerBlur.bind(_this);

	    _this.onChange = _this.onChange.bind(_this);
	    _this.onFocus = _this.onFocus.bind(_this);
	    _this.onClearFocus = _this.onClearFocus.bind(_this);
	    _this.clearDate = _this.clearDate.bind(_this);

	    _this.responsivizePickerPosition = _this.responsivizePickerPosition.bind(_this);
	    return _this;
	  }

	  /* istanbul ignore next */

	  _createClass(SingleDatePicker, [{
	    key: 'componentDidMount',
	    value: function () {
	      function componentDidMount() {
	        this.resizeHandle = (0, _consolidatedEvents.addEventListener)(window, 'resize', this.responsivizePickerPosition, { passive: true });
	        this.responsivizePickerPosition();

	        if (this.props.focused) {
	          this.setState({
	            isInputFocused: true
	          });
	        }

	        this.isTouchDevice = (0, _isTouchDevice2['default'])();
	      }

	      return componentDidMount;
	    }()
	  }, {
	    key: 'componentWillUpdate',
	    value: function () {
	      function componentWillUpdate() {
	        this.today = (0, _moment2['default'])();
	      }

	      return componentWillUpdate;
	    }()
	  }, {
	    key: 'componentDidUpdate',
	    value: function () {
	      function componentDidUpdate(prevProps) {
	        if (!prevProps.focused && this.props.focused) {
	          this.responsivizePickerPosition();
	        }
	      }

	      return componentDidUpdate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'componentWillUnmount',
	    value: function () {
	      function componentWillUnmount() {
	        (0, _consolidatedEvents.removeEventListener)(this.resizeHandle);
	      }

	      return componentWillUnmount;
	    }()
	  }, {
	    key: 'onChange',
	    value: function () {
	      function onChange(dateString) {
	        var _props = this.props;
	        var isOutsideRange = _props.isOutsideRange;
	        var keepOpenOnDateSelect = _props.keepOpenOnDateSelect;
	        var onDateChange = _props.onDateChange;
	        var onFocusChange = _props.onFocusChange;

	        var date = (0, _toMomentObject2['default'])(dateString, this.getDisplayFormat());

	        var isValid = date && !isOutsideRange(date);
	        if (isValid) {
	          onDateChange(date);
	          if (!keepOpenOnDateSelect) onFocusChange({ focused: false });
	        } else {
	          onDateChange(null);
	        }
	      }

	      return onChange;
	    }()
	  }, {
	    key: 'onDayClick',
	    value: function () {
	      function onDayClick(day, e) {
	        if (e) e.preventDefault();
	        if (this.isBlocked(day)) return;

	        this.props.onDateChange(day);
	        if (!this.props.keepOpenOnDateSelect) this.props.onFocusChange({ focused: null });
	      }

	      return onDayClick;
	    }()
	  }, {
	    key: 'onDayMouseEnter',
	    value: function () {
	      function onDayMouseEnter(day) {
	        this.setState({
	          hoverDate: day
	        });
	      }

	      return onDayMouseEnter;
	    }()
	  }, {
	    key: 'onDayMouseLeave',
	    value: function () {
	      function onDayMouseLeave() {
	        this.setState({
	          hoverDate: null
	        });
	      }

	      return onDayMouseLeave;
	    }()
	  }, {
	    key: 'onFocus',
	    value: function () {
	      function onFocus() {
	        var _props2 = this.props;
	        var disabled = _props2.disabled;
	        var onFocusChange = _props2.onFocusChange;
	        var withPortal = _props2.withPortal;
	        var withFullScreenPortal = _props2.withFullScreenPortal;

	        var moveFocusToDayPicker = withPortal || withFullScreenPortal || this.isTouchDevice;
	        if (moveFocusToDayPicker) {
	          this.onDayPickerFocus();
	        } else {
	          this.onDayPickerBlur();
	        }

	        if (!disabled) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return onFocus;
	    }()
	  }, {
	    key: 'onClearFocus',
	    value: function () {
	      function onClearFocus() {
	        var _props3 = this.props;
	        var focused = _props3.focused;
	        var onFocusChange = _props3.onFocusChange;

	        if (!focused) return;

	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: false
	        });

	        onFocusChange({ focused: false });
	      }

	      return onClearFocus;
	    }()
	  }, {
	    key: 'onDayPickerFocus',
	    value: function () {
	      function onDayPickerFocus() {
	        this.setState({
	          isInputFocused: false,
	          isDayPickerFocused: true
	        });
	      }

	      return onDayPickerFocus;
	    }()
	  }, {
	    key: 'onDayPickerBlur',
	    value: function () {
	      function onDayPickerBlur() {
	        this.setState({
	          isInputFocused: true,
	          isDayPickerFocused: false
	        });
	      }

	      return onDayPickerBlur;
	    }()
	  }, {
	    key: 'getDateString',
	    value: function () {
	      function getDateString(date) {
	        var displayFormat = this.getDisplayFormat();
	        if (date && displayFormat) {
	          return date && date.format(displayFormat);
	        }
	        return (0, _toLocalizedDateString2['default'])(date);
	      }

	      return getDateString;
	    }()
	  }, {
	    key: 'getDayPickerContainerClasses',
	    value: function () {
	      function getDayPickerContainerClasses() {
	        var _props4 = this.props;
	        var orientation = _props4.orientation;
	        var withPortal = _props4.withPortal;
	        var withFullScreenPortal = _props4.withFullScreenPortal;
	        var anchorDirection = _props4.anchorDirection;
	        var hoverDate = this.state.hoverDate;

	        var dayPickerClassName = (0, _classnames2['default'])('SingleDatePicker__picker', {
	          'SingleDatePicker__picker--direction-left': anchorDirection === _constants.ANCHOR_LEFT,
	          'SingleDatePicker__picker--direction-right': anchorDirection === _constants.ANCHOR_RIGHT,
	          'SingleDatePicker__picker--horizontal': orientation === _constants.HORIZONTAL_ORIENTATION,
	          'SingleDatePicker__picker--vertical': orientation === _constants.VERTICAL_ORIENTATION,
	          'SingleDatePicker__picker--portal': withPortal || withFullScreenPortal,
	          'SingleDatePicker__picker--full-screen-portal': withFullScreenPortal,
	          'SingleDatePicker__picker--valid-date-hovered': hoverDate && !this.isBlocked(hoverDate)
	        });

	        return dayPickerClassName;
	      }

	      return getDayPickerContainerClasses;
	    }()
	  }, {
	    key: 'getDisplayFormat',
	    value: function () {
	      function getDisplayFormat() {
	        var displayFormat = this.props.displayFormat;

	        return typeof displayFormat === 'string' ? displayFormat : displayFormat();
	      }

	      return getDisplayFormat;
	    }()
	  }, {
	    key: 'clearDate',
	    value: function () {
	      function clearDate() {
	        var _props5 = this.props;
	        var onDateChange = _props5.onDateChange;
	        var reopenPickerOnClearDate = _props5.reopenPickerOnClearDate;
	        var onFocusChange = _props5.onFocusChange;

	        onDateChange(null);
	        if (reopenPickerOnClearDate) {
	          onFocusChange({ focused: true });
	        }
	      }

	      return clearDate;
	    }()

	    /* istanbul ignore next */

	  }, {
	    key: 'responsivizePickerPosition',
	    value: function () {
	      function responsivizePickerPosition() {
	        var _props6 = this.props;
	        var anchorDirection = _props6.anchorDirection;
	        var horizontalMargin = _props6.horizontalMargin;
	        var withPortal = _props6.withPortal;
	        var withFullScreenPortal = _props6.withFullScreenPortal;
	        var focused = _props6.focused;
	        var dayPickerContainerStyles = this.state.dayPickerContainerStyles;

	        if (!focused) {
	          return;
	        }

	        var isAnchoredLeft = anchorDirection === _constants.ANCHOR_LEFT;

	        if (!withPortal && !withFullScreenPortal) {
	          var containerRect = this.dayPickerContainer.getBoundingClientRect();
	          var currentOffset = dayPickerContainerStyles[anchorDirection] || 0;
	          var containerEdge = isAnchoredLeft ? containerRect[_constants.ANCHOR_RIGHT] : containerRect[_constants.ANCHOR_LEFT];

	          this.setState({
	            dayPickerContainerStyles: (0, _getResponsiveContainerStyles2['default'])(anchorDirection, currentOffset, containerEdge, horizontalMargin)
	          });
	        }
	      }

	      return responsivizePickerPosition;
	    }()
	  }, {
	    key: 'isBlocked',
	    value: function () {
	      function isBlocked(day) {
	        var _props7 = this.props;
	        var isDayBlocked = _props7.isDayBlocked;
	        var isOutsideRange = _props7.isOutsideRange;

	        return isDayBlocked(day) || isOutsideRange(day);
	      }

	      return isBlocked;
	    }()
	  }, {
	    key: 'isHovered',
	    value: function () {
	      function isHovered(day) {
	        return (0, _isSameDay2['default'])(day, this.state.hoverDate);
	      }

	      return isHovered;
	    }()
	  }, {
	    key: 'isSelected',
	    value: function () {
	      function isSelected(day) {
	        return (0, _isSameDay2['default'])(day, this.props.date);
	      }

	      return isSelected;
	    }()
	  }, {
	    key: 'isToday',
	    value: function () {
	      function isToday(day) {
	        return (0, _isSameDay2['default'])(day, this.today);
	      }

	      return isToday;
	    }()
	  }, {
	    key: 'maybeRenderDayPickerWithPortal',
	    value: function () {
	      function maybeRenderDayPickerWithPortal() {
	        var _props8 = this.props;
	        var focused = _props8.focused;
	        var withPortal = _props8.withPortal;
	        var withFullScreenPortal = _props8.withFullScreenPortal;

	        if (!focused) {
	          return null;
	        }

	        if (withPortal || withFullScreenPortal) {
	          return _react2['default'].createElement(_reactPortal2['default'], { isOpened: true }, this.renderDayPicker());
	        }

	        return this.renderDayPicker();
	      }

	      return maybeRenderDayPickerWithPortal;
	    }()
	  }, {
	    key: 'renderDayPicker',
	    value: function () {
	      function renderDayPicker() {
	        var _this2 = this;

	        var _props9 = this.props;
	        var isDayBlocked = _props9.isDayBlocked;
	        var isDayHighlighted = _props9.isDayHighlighted;
	        var isOutsideRange = _props9.isOutsideRange;
	        var enableOutsideDays = _props9.enableOutsideDays;
	        var numberOfMonths = _props9.numberOfMonths;
	        var orientation = _props9.orientation;
	        var monthFormat = _props9.monthFormat;
	        var navPrev = _props9.navPrev;
	        var navNext = _props9.navNext;
	        var onPrevMonthClick = _props9.onPrevMonthClick;
	        var onNextMonthClick = _props9.onNextMonthClick;
	        var withPortal = _props9.withPortal;
	        var withFullScreenPortal = _props9.withFullScreenPortal;
	        var focused = _props9.focused;
	        var renderDay = _props9.renderDay;
	        var renderCalendarInfo = _props9.renderCalendarInfo;
	        var date = _props9.date;
	        var initialVisibleMonth = _props9.initialVisibleMonth;
	        var customCloseIcon = _props9.customCloseIcon;
	        var phrases = _props9.phrases;
	        var daySize = _props9.daySize;
	        var _state = this.state;
	        var dayPickerContainerStyles = _state.dayPickerContainerStyles;
	        var isDayPickerFocused = _state.isDayPickerFocused;

	        var modifiers = {
	          today: function () {
	            function today(day) {
	              return _this2.isToday(day);
	            }

	            return today;
	          }(),
	          blocked: function () {
	            function blocked(day) {
	              return _this2.isBlocked(day);
	            }

	            return blocked;
	          }(),
	          'blocked-calendar': function () {
	            function blockedCalendar(day) {
	              return isDayBlocked(day);
	            }

	            return blockedCalendar;
	          }(),
	          'blocked-out-of-range': function () {
	            function blockedOutOfRange(day) {
	              return isOutsideRange(day);
	            }

	            return blockedOutOfRange;
	          }(),
	          'highlighted-calendar': function () {
	            function highlightedCalendar(day) {
	              return isDayHighlighted(day);
	            }

	            return highlightedCalendar;
	          }(),
	          valid: function () {
	            function valid(day) {
	              return !_this2.isBlocked(day);
	            }

	            return valid;
	          }(),
	          hovered: function () {
	            function hovered(day) {
	              return _this2.isHovered(day);
	            }

	            return hovered;
	          }(),
	          selected: function () {
	            function selected(day) {
	              return _this2.isSelected(day);
	            }

	            return selected;
	          }()
	        };

	        var onOutsideClick = !withFullScreenPortal && withPortal ? this.onClearFocus : undefined;
	        var initialVisibleMonthThunk = initialVisibleMonth || function () {
	          return date || (0, _moment2['default'])();
	        };
	        var closeIcon = customCloseIcon || _react2['default'].createElement(_close2['default'], null);

	        return _react2['default'].createElement('div', {
	          ref: function () {
	            function ref(_ref) {
	              _this2.dayPickerContainer = _ref;
	            }

	            return ref;
	          }(),
	          className: this.getDayPickerContainerClasses(),
	          style: dayPickerContainerStyles
	        }, _react2['default'].createElement(_DayPicker2['default'], {
	          orientation: orientation,
	          enableOutsideDays: enableOutsideDays,
	          modifiers: modifiers,
	          numberOfMonths: numberOfMonths,
	          onDayClick: this.onDayClick,
	          onDayMouseEnter: this.onDayMouseEnter,
	          onDayMouseLeave: this.onDayMouseLeave,
	          onPrevMonthClick: onPrevMonthClick,
	          onNextMonthClick: onNextMonthClick,
	          monthFormat: monthFormat,
	          withPortal: withPortal || withFullScreenPortal,
	          hidden: !focused,
	          initialVisibleMonth: initialVisibleMonthThunk,
	          onOutsideClick: onOutsideClick,
	          navPrev: navPrev,
	          navNext: navNext,
	          renderDay: renderDay,
	          renderCalendarInfo: renderCalendarInfo,
	          isFocused: isDayPickerFocused,
	          onBlur: this.onDayPickerBlur,
	          phrases: phrases,
	          daySize: daySize
	        }), withFullScreenPortal && _react2['default'].createElement('button', {
	          className: 'SingleDatePicker__close',
	          type: 'button',
	          onClick: this.onClearFocus
	        }, _react2['default'].createElement('span', { className: 'screen-reader-only' }, this.props.phrases.closeDatePicker), _react2['default'].createElement('div', { className: 'SingleDatePicker__close-icon' }, closeIcon)));
	      }

	      return renderDayPicker;
	    }()
	  }, {
	    key: 'render',
	    value: function () {
	      function render() {
	        var _props10 = this.props;
	        var id = _props10.id;
	        var placeholder = _props10.placeholder;
	        var focused = _props10.focused;
	        var disabled = _props10.disabled;
	        var required = _props10.required;
	        var showClearDate = _props10.showClearDate;
	        var date = _props10.date;
	        var phrases = _props10.phrases;
	        var withPortal = _props10.withPortal;
	        var withFullScreenPortal = _props10.withFullScreenPortal;
	        var screenReaderInputMessage = _props10.screenReaderInputMessage;
	        var isInputFocused = this.state.isInputFocused;

	        var displayValue = this.getDateString(date);
	        var inputValue = (0, _toISODateString2['default'])(date);

	        var onOutsideClick = !withPortal && !withFullScreenPortal ? this.onClearFocus : undefined;

	        return _react2['default'].createElement('div', { className: 'SingleDatePicker' }, _react2['default'].createElement(_OutsideClickHandler2['default'], { onOutsideClick: onOutsideClick }, _react2['default'].createElement(_SingleDatePickerInput2['default'], {
	          id: id,
	          placeholder: placeholder,
	          focused: focused,
	          isFocused: isInputFocused,
	          disabled: disabled,
	          required: required,
	          showCaret: !withPortal && !withFullScreenPortal,
	          phrases: phrases,
	          onClearDate: this.clearDate,
	          showClearDate: showClearDate,
	          displayValue: displayValue,
	          inputValue: inputValue,
	          onChange: this.onChange,
	          onFocus: this.onFocus,
	          onKeyDownShiftTab: this.onClearFocus,
	          onKeyDownTab: this.onClearFocus,
	          screenReaderMessage: screenReaderInputMessage
	        }), this.maybeRenderDayPickerWithPortal()));
	      }

	      return render;
	    }()
	  }]);

	  return SingleDatePicker;
	}(_react2['default'].Component);

	exports['default'] = SingleDatePicker;

	SingleDatePicker.propTypes = propTypes;
	SingleDatePicker.defaultProps = defaultProps;

/***/ },
/* 1 */
/***/ function(module, exports) {

	module.exports = require("react");

/***/ },
/* 2 */,
/* 3 */,
/* 4 */
/***/ function(module, exports) {

	module.exports = require("airbnb-prop-types");

/***/ },
/* 5 */
/***/ function(module, exports) {

	module.exports = require("moment");

/***/ },
/* 6 */
/***/ function(module, exports) {

	module.exports = require("classnames");

/***/ },
/* 7 */
/***/ function(module, exports) {

	module.exports = require("../../constants");

/***/ },
/* 8 */,
/* 9 */,
/* 10 */,
/* 11 */
/***/ function(module, exports) {

	module.exports = require("consolidated-events");

/***/ },
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */
/***/ function(module, exports) {

	module.exports = require("../utils/isTouchDevice");

/***/ },
/* 17 */,
/* 18 */
/***/ function(module, exports) {

	module.exports = require("react-portal");

/***/ },
/* 19 */
/***/ function(module, exports) {

	module.exports = require("../defaultPhrases");

/***/ },
/* 20 */
/***/ function(module, exports) {

	module.exports = require("./OutsideClickHandler");

/***/ },
/* 21 */
/***/ function(module, exports) {

	module.exports = require("../utils/getResponsiveContainerStyles");

/***/ },
/* 22 */
/***/ function(module, exports) {

	module.exports = require("../utils/isInclusivelyAfterDay");

/***/ },
/* 23 */,
/* 24 */,
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	Object.defineProperty(exports, "__esModule", {
	  value: true
	});

	var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

	var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

	var _react = __webpack_require__(1);

	var _react2 = _interopRequireDefault(_react);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

	function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

	function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

	function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

	var SVG = function (_React$Component) {
	  _inherits(SVG, _React$Component);

	  function SVG() {
	    _classCallCheck(this, SVG);

	    return _possibleConstructorReturn(this, (SVG.__proto__ || Object.getPrototypeOf(SVG)).apply(this, arguments));
	  }

	  _createClass(SVG, [{
	    key: "render",
	    value: function () {
	      function render() {
	        return _react2["default"].createElement(
	          "svg",
	          _extends({ viewBox: "0 0 12 12" }, this.props),
	          _react2["default"].createElement("path", { fillRule: "evenodd", d: "M11.53.47a.75.75 0 0 0-1.061 0l-4.47 4.47L1.529.47A.75.75 0 1 0 .468 1.531l4.47 4.47-4.47 4.47a.75.75 0 1 0 1.061 1.061l4.47-4.47 4.47 4.47a.75.75 0 1 0 1.061-1.061l-4.47-4.47 4.47-4.47a.75.75 0 0 0 0-1.061z" })
	        );
	      }

	      return render;
	    }()
	  }]);

	  return SVG;
	}(_react2["default"].Component);

	exports["default"] = SVG;

/***/ },
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ function(module, exports) {

	module.exports = require("../utils/toMomentObject");

/***/ },
/* 33 */
/***/ function(module, exports) {

	module.exports = require("../utils/toLocalizedDateString");

/***/ },
/* 34 */
/***/ function(module, exports) {

	module.exports = require("../utils/toISODateString");

/***/ },
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ function(module, exports) {

	module.exports = require("../utils/isSameDay");

/***/ },
/* 43 */,
/* 44 */
/***/ function(module, exports) {

	module.exports = require("./DayPicker");

/***/ },
/* 45 */
/***/ function(module, exports) {

	module.exports = require("./SingleDatePickerInput");

/***/ },
/* 46 */
/***/ function(module, exports) {

	module.exports = require("../shapes/SingleDatePickerShape");

/***/ }
/******/ ]);