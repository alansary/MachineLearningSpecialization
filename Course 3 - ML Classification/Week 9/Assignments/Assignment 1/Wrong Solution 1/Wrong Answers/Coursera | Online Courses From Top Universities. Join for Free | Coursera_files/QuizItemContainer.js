define("bundles/item-quiz/components/QuizItemContainer",["require","exports","module","react","vendor/cnpm/fluxible.v0-4/addons/connectToStores","bundles/epic/client","bundles/item-quiz/components/QuizItem","bundles/item-quiz/components/NewQuizItem"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var n=i[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),r=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),o=require("bundles/epic/client"),i=require("bundles/item-quiz/components/QuizItem"),u=require("bundles/item-quiz/components/NewQuizItem"),s=(n=t=function(t){function QuizItemContainer(){return _classCallCheck(this,QuizItemContainer),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(QuizItemContainer,t),QuizItemContainer.prototype.render=function render(){var t=this.props.isSuperuser,n=o.get("QuizRefactor","showQuizRefactor");if(n&&t)return e.createElement(u,this.props);return e.createElement(i,this.props)},QuizItemContainer}(e.Component),t.propTypes={isSuperuser:e.PropTypes.bool.isRequired},n);module.exports=r(["ApplicationStore"],function(e){var t=e.ApplicationStore,n=t.isSuperuser();return{isSuperuser:n}})(s)});