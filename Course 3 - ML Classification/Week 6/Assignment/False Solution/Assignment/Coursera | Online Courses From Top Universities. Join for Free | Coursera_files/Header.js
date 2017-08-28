define("bundles/quiz-summative/components/Header",["require","exports","module","classnames","react","./NotPassedArea","./PageDescription","bundles/ondemand/components/endOfCourse/components/CourseCompleteModal","bundles/phoenix/models/evaluation","bundles/quiz-question-types/models/AbstractQuestion","bundles/quiz-summative/constants/RelativeVerificationWarnings","bundles/quiz-common/components/Score","bundles/quiz-common/utils/FsmUtils","js/lib/coursera.react-intl","i18n!nls/quiz-summative","pages/open-course/common/models/itemMetadata"],function(require,exports,module){"use strict";function _defaults(e,s){for(var i=Object.getOwnPropertyNames(s),t=0;t<i.length;t++){var n=i[t],a=Object.getOwnPropertyDescriptor(s,n);a&&a.configurable&&void 0===e[n]&&Object.defineProperty(e,n,a)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var a,s,i=require("classnames"),e=require("react"),r=require("./NotPassedArea"),c=require("./PageDescription"),l=require("bundles/ondemand/components/endOfCourse/components/CourseCompleteModal"),o=require("bundles/phoenix/models/evaluation"),m=require("bundles/quiz-question-types/models/AbstractQuestion"),u=require("bundles/quiz-summative/constants/RelativeVerificationWarnings"),d=require("bundles/quiz-common/components/Score"),p=require("bundles/quiz-common/utils/FsmUtils"),t=p.isState,b=require("js/lib/coursera.react-intl"),f=b.FormattedMessage,n=require("i18n!nls/quiz-summative"),g=require("pages/open-course/common/models/itemMetadata"),v=(s=a=function(a){function Header(){return _classCallCheck(this,Header),_possibleConstructorReturn(this,a.apply(this,arguments))}return _inherits(Header,a),Header.prototype.render=function render(){var o=this.props,p=o.itemMetadata,E=o.questions,b=o.attemptState,k=o.courseMaterials,m=o.relativeVerificationWarning,s=o.evaluation,a=s&&s.isPassed(),g=k.getNeighboringItemMetadata(p).next,v=p.get("lesson.module.week"),y=p.get("course").getLink()+"/home/week/"+v,h=i("bt3-row c-open-single-page-exam-assessment-headers",{"c-exam-passed":s&&a,"c-exam-not-passed":s&&!a,"c-exam-verification-warning":s&&m!==u.NONE});return e.createElement("div",{className:h},e.createElement("div",{className:"bt3-col-md-9 c-open-single-page-assessment-results"},e.createElement("h1",{className:"display-2-text c-open-single-page-title"},p.getName()),!t(b,"loading","load-error","submitted")&&e.createElement(c,{questions:E}),t(b,"submitted")&&e.createElement("div",null,a&&e.createElement("div",null,t(m,"none","unverified")&&e.createElement("div",null,e.createElement("i",{className:"cif-check-circle c-exam-header-feedback-icon c-exam-header-feedback-icon-passed"},e.createElement("span",{className:"screenreader-only"},n("Passed")))),t(m,"pending")&&e.createElement("div",null,e.createElement("i",{className:i("cif-check-circle","c-exam-header-feedback-icon","c-exam-header-feedback-icon-passed-with-warning")},e.createElement("span",{className:"screenreader-only"},n("Passed, but unverified"))))),!a&&e.createElement("div",null,e.createElement("i",{className:"cif-times c-exam-header-feedback-icon c-exam-header-feedback-icon-failed"},e.createElement("span",{className:"screenreader-only"},n("Failed"))))),t(b,"submitted")&&e.createElement(d,{evaluation:s}),t(b,"submitted")&&e.createElement("div",{className:"c-exam-header-subtext"},t(m,"none")&&e.createElement("div",null,a&&e.createElement("span",null,n("Quiz passed!")),!a&&e.createElement(r,{itemMetadata:p,evaluation:s})),e.createElement("div",{className:"c-exam-header-verification-warning-text"},t(m,"pending")&&e.createElement("span",null,n("Identity-verification is pending: We will manually review your photo within a few days."))))),t(b,"submitted")&&e.createElement("div",{className:"bt3-col-md-3 c-open-single-page-submission-area"},a&&e.createElement("div",{className:"c-open-single-page-button-container"},g&&e.createElement("a",{className:"c-open-single-page-action-button link-button primary bt3-btn-block",href:g.getLink(),"data-js":"open-course-link"},n("Continue Course")),s&&e.createElement(l,null)),e.createElement("div",{className:"c-open-single-page-button-container"},a&&e.createElement("a",{className:"link-button passive c-open-single-page-action-button c-open-single-page-back-link-passed",href:y,"data-js":"open-course-link"},e.createElement("span",null,e.createElement(f,{message:n("Back to Week {weekNumber}"),weekNumber:v}))),!a&&e.createElement("a",{className:"link-button secondary c-open-single-page-action-button c-open-single-page-back-link-failed",href:y,"data-js":"open-course-link"},n("Review Related Lesson")))))},Header}(e.Component),a.propTypes={itemMetadata:e.PropTypes.instanceOf(g).isRequired,questions:e.PropTypes.arrayOf(e.PropTypes.instanceOf(m)).isRequired,attemptState:e.PropTypes.string.isRequired,onSubmit:e.PropTypes.func.isRequired,courseMaterials:e.PropTypes.object.isRequired,verificationDisplay:e.PropTypes.object.isRequired,relativeVerificationWarning:e.PropTypes.string.isRequired,evaluation:e.PropTypes.instanceOf(o)},s);module.exports=v});