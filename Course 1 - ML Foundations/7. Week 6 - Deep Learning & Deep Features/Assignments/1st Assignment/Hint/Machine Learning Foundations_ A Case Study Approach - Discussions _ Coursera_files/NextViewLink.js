define("bundles/discussions/components/NextViewLink",["require","exports","module","underscore","react","react-router","js/lib/path","bundles/discussions/components/discussionsForumsHOC","bundles/naptimejs/resources/onDemandCourseForums.v1","bundles/naptimejs/resources/onDemandMentorForums.v1","js/lib/connectToRouter","bundles/discussions/utils/routerConnectToCurrentForum","bundles/naptimejs/resources/groupForums.v1","js/lib/mapProps"],function(require,exports,module){"use strict";function _defaults(e,s){for(var t=Object.getOwnPropertyNames(s),o=0;o<t.length;o++){var r=t[o],n=Object.getOwnPropertyDescriptor(s,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?o:e}function _inherits(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):_defaults(o,e))}var o,r,s=require("underscore"),t=s.compose,e=require("react"),u=require("react-router"),n=u.Link,i=require("js/lib/path"),c=require("bundles/discussions/components/discussionsForumsHOC"),p=require("bundles/naptimejs/resources/onDemandCourseForums.v1"),a=require("bundles/naptimejs/resources/onDemandMentorForums.v1"),l=require("js/lib/connectToRouter"),m=require("bundles/discussions/utils/routerConnectToCurrentForum"),f=require("bundles/naptimejs/resources/groupForums.v1"),d=require("js/lib/mapProps"),b=(r=o=function(o){function NextViewLink(){return _classCallCheck(this,NextViewLink),_possibleConstructorReturn(this,o.apply(this,arguments))}return _inherits(NextViewLink,o),NextViewLink.prototype.render=function render(){if(!this.props.questionForum)return null;var o=i.join(this.props.rootPath,this.props.questionForum.link),r=this.props.questionForum.title;if(!o||!r)return null;return e.createElement("span",{className:"rc-NextViewName"},e.createElement(n,{to:o,className:"caption-text"},r))},NextViewLink}(e.Component),o.propTypes={question:e.PropTypes.object.isRequired,questionForum:e.PropTypes.oneOfType([e.PropTypes.instanceOf(p),e.PropTypes.instanceOf(a),e.PropTypes.instanceOf(f)]),rootPath:e.PropTypes.string},o.contextTypes={executeAction:e.PropTypes.func.isRequired},r);module.exports=t(c({fields:["link","title"]}),l(m),d(function(e){var o=e.question.forumId;return{questionForum:e.courseForums.concat(e.mentorForums)&&e.courseForums.find(function(e){return e.forumId===o})}}))(b)});