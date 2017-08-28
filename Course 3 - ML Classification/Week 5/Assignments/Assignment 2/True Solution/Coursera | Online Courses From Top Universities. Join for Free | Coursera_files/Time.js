define("bundles/phoenix/components/Time",["require","exports","module","moment","react","underscore","i18n!nls/phoenix"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,r,n=require("moment"),e=require("react"),_=require("underscore"),o=require("i18n!nls/phoenix"),i=(r=t=function(t){function Time(){return _classCallCheck(this,Time),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(Time,t),Time.prototype.render=function render(){return e.createElement("span",null,n(this.props.time).format(this.props.format))},Time}(e.Component),t.propTypes={time:e.PropTypes.oneOfType([e.PropTypes.number,e.PropTypes.instanceOf(Date)]).isRequired,format:e.PropTypes.string},t.defaultProps={format:"D MMMM YYYY ["+o("at")+"] h:mm A"},r);module.exports=i});