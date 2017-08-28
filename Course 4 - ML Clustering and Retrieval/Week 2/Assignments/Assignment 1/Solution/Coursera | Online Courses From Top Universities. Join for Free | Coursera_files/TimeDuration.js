define("bundles/phoenix/components/TimeDuration",["require","exports","module","react","js/lib/coursera.react-intl","bundles/ondemand/constants/TimeInterval","i18n!nls/phoenix"],function(require,exports,module){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function _defaults(e,o){for(var a=Object.getOwnPropertyNames(o),r=0;r<a.length;r++){var t=a[r],n=Object.getOwnPropertyDescriptor(o,t);n&&n.configurable&&void 0===e[t]&&Object.defineProperty(e,t,n)}return e}function _classCallCheck(e,r){if(!(e instanceof r))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(r,e){if(!r)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?r:e}function _inherits(r,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);r.prototype=Object.create(e&&e.prototype,{constructor:{value:r,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(r,e):_defaults(r,e))}function durationToParts(n){var t=n,e=[r.DAY,r.HOUR,r.MINUTE,r.SECOND].reduce(function(r,e){var n=Math.floor(t/e.millis);return t%=e.millis,n>0&&r.push({value:n,interval:e}),r},[]);return 0===e.length&&e.push({value:0,interval:r.SECOND}),e}function itemsToI18nList(r){var o=null;switch(r.length){case 4:o=e["default"].createElement(t.FormattedMessage,{message:n["default"]("{first}, {second}, {third}, and {fourth}"),first:r[0],second:r[1],third:r[2],fourth:r[3]});break;case 3:o=e["default"].createElement(t.FormattedMessage,{message:n["default"]("{first}, {second}, and {third}"),first:r[0],second:r[1],third:r[2]});break;case 2:o=e["default"].createElement(t.FormattedMessage,{message:n["default"]("{first} and {second}"),first:r[0],second:r[1]});break;case 1:default:o=e["default"].createElement("span",null,r[0])}return o}var o,a,s=require("react"),e=_interopRequireDefault(s),t=require("js/lib/coursera.react-intl"),r=require("bundles/ondemand/constants/TimeInterval"),i=require("i18n!nls/phoenix"),n=_interopRequireDefault(i),u=(a=o=function(n){function TimeDuration(){return _classCallCheck(this,TimeDuration),_possibleConstructorReturn(this,n.apply(this,arguments))}return _inherits(TimeDuration,n),TimeDuration.prototype.renderDurationPart=function renderDurationPart(n,r){var o=this.props.showNumberIfSingular;return 1!==n||o?e["default"].createElement(t.FormattedMessage,{message:"{val} {val, plural, =1 {{singular}} other {{plural}}}",val:n.toString(),singular:r.singular,plural:r.plural}):r.singular},TimeDuration.prototype.renderPreciseDuration=function renderPreciseDuration(){var t=this,e=this.props,n=e.duration,o=e.showSeconds,a=durationToParts(n),s=a.filter(function(e){return e.interval!==r.SECOND||o}),i=s.map(function(e){return t.renderDurationPart(e.value,e.interval)});return itemsToI18nList(i)},TimeDuration.prototype.renderDuration=function renderDuration(){var r=this.props.duration,e=durationToParts(r);return this.renderDurationPart(e[0].value,e[0].interval)},TimeDuration.prototype.render=function render(){var r=this.props.showPrecise;return e["default"].createElement("span",{className:"rc-TimeDuration"},r&&this.renderPreciseDuration(),!r&&this.renderDuration())},TimeDuration}(e["default"].Component),o.propTypes={duration:e["default"].PropTypes.number.isRequired,showNumberIfSingular:e["default"].PropTypes.bool,showPrecise:e["default"].PropTypes.bool,showSeconds:e["default"].PropTypes.bool},o.defaultProps={showNumberIfSingular:!0,showPrecise:!1,showSeconds:!1},a);module.exports=u});