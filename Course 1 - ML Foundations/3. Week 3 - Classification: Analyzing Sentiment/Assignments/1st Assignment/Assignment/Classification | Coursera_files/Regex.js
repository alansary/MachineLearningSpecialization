define("bundles/quiz-question-types/components/questions/Regex",["require","exports","module","react","bundles/quiz-question-types/components/Feedback","bundles/quiz-question-types/components/inputs/TextInput","bundles/quiz-question-types/constants/FeedbackTypes","bundles/quiz-question-types/constants/strings","bundles/quiz-question-types/models/RegexQuestion","i18n!nls/quiz-question-types"],function(require,exports,module){"use strict";function _defaults(e,o){for(var r=Object.getOwnPropertyNames(o),t=0;t<r.length;t++){var n=r[t],s=Object.getOwnPropertyDescriptor(o,n);s&&s.configurable&&void 0===e[n]&&Object.defineProperty(e,n,s)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,s,e=require("react"),i=require("bundles/quiz-question-types/components/Feedback"),u=require("bundles/quiz-question-types/components/inputs/TextInput"),o=require("bundles/quiz-question-types/constants/FeedbackTypes"),r=require("bundles/quiz-question-types/constants/strings"),a=require("bundles/quiz-question-types/models/RegexQuestion"),p=require("i18n!nls/quiz-question-types"),c=(n=t=function(t){function Regex(o){_classCallCheck(this,Regex);var e=_possibleConstructorReturn(this,t.call(this,o));s.call(e);var r=e.props.question,n=r.response;return e.state={value:n&&n.answer},e}return _inherits(Regex,t),Regex.prototype.render=function render(){var n=this.props,s=n.question,a=n.isDisabled,c=this.state.value,t=s.feedback;return e.createElement("div",{className:"rc-Regex"},e.createElement("div",{className:"c-regex-input-container"},e.createElement(u,{className:"c-assess-question-regex-answer-input",value:c,isDisabled:a,onChange:this.onInputChange,placeholder:p("Enter answer here")})),t&&e.createElement(i,{type:t.isCorrect?o.SUCCESS:o.ERROR,content:t.display,title:t.isCorrect?r.successTitle:r.freeInput.errorTitle}))},Regex}(e.Component),t.propTypes={question:e.PropTypes.instanceOf(a).isRequired,onAnswer:e.PropTypes.func.isRequired,isDisabled:e.PropTypes.bool},s=function _initialiseProps(){var e=this;this.onInputChange=function(s){var n=e.props,o=n.question,r=n.onAnswer,t=s.target.value;e.setState({value:t}),r(t&&o.createAnswer(t))}},n);module.exports=c});