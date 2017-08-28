define("bundles/quiz-question-types/components/questions/TextReflect",["require","exports","module","react","bundles/quiz-question-types/components/Feedback","bundles/quiz-question-types/components/inputs/TextArea","bundles/quiz-question-types/constants/FeedbackTypes","bundles/quiz-question-types/constants/QuestionDetailLevels","bundles/quiz-question-types/constants/QuestionFeedbackLevels","bundles/quiz-question-types/models/ReflectQuestion","i18n!nls/quiz-question-types"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var s=i[t],n=Object.getOwnPropertyDescriptor(o,s);n&&n.configurable&&void 0===e[s]&&Object.defineProperty(e,s,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,s,n,e=require("react"),u=require("bundles/quiz-question-types/components/Feedback"),r=require("bundles/quiz-question-types/components/inputs/TextArea"),o=require("bundles/quiz-question-types/constants/FeedbackTypes"),a=require("bundles/quiz-question-types/constants/QuestionDetailLevels"),c=require("bundles/quiz-question-types/constants/QuestionFeedbackLevels"),l=require("bundles/quiz-question-types/models/ReflectQuestion"),i=require("i18n!nls/quiz-question-types"),p=(s=t=function(t){function TextReflect(o){_classCallCheck(this,TextReflect);var e=_possibleConstructorReturn(this,t.call(this,o));n.call(e);var i=e.props.question,s=i.response;return e.state={value:s&&s.answer},e}return _inherits(TextReflect,t),TextReflect.prototype.render=function render(){var s=this.props,n=s.question,l=s.isDisabled,p=this.state.value,t=n.feedback;if(n.detailLevel!==a.Full)return null;return e.createElement("div",{className:"rc-TextReflect"},e.createElement("div",{className:"coursera-assess-question-reflective-answer"},e.createElement(r,{className:"coursera-assess-question-reflective-answer-input",value:p,isDisabled:l,placeholder:i("What do you think?"),onChange:this.onInputChange})),t&&t.feedbackLevel===c.Explained&&e.createElement(u,{className:"coursera-assess-question-reflective-feedback",type:t.isCorrect?o.SUCCESS:o.NEUTRAL,title:t.isCorrect&&i("Thank you for your response."),content:t.display}))},TextReflect}(e.Component),t.propTypes={question:e.PropTypes.instanceOf(l).isRequired,onAnswer:e.PropTypes.func.isRequired,isDisabled:e.PropTypes.bool},n=function _initialiseProps(){var e=this;this.onInputChange=function(n){var s=e.props,o=s.question,i=s.onAnswer,t=n.target.value;e.setState({value:t}),i(t&&o.createAnswer(t))}},s);module.exports=p});