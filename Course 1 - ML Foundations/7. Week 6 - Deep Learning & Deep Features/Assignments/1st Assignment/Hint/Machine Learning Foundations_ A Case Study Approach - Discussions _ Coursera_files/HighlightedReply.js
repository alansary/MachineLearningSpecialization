define("bundles/discussions/components/repliesList/HighlightedReply",["require","exports","module","react","vendor/cnpm/fluxible.v0-4/addons/connectToStores","bundles/ui/components/CalloutBox","bundles/discussions/components/repliesList/ReplyContainer","bundles/discussions/lib/propTypes","i18n!nls/discussions","css!./__styles__/HighlightedReply"],function(require,exports,module){"use strict";function _defaults(e,o){for(var s=Object.getOwnPropertyNames(o),t=0;t<s.length;t++){var n=s[t],r=Object.getOwnPropertyDescriptor(o,n);r&&r.configurable&&void 0===e[n]&&Object.defineProperty(e,n,r)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var t,n,e=require("react"),r=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),o=require("bundles/ui/components/CalloutBox"),s=require("bundles/discussions/components/repliesList/ReplyContainer"),i=require("bundles/discussions/lib/propTypes"),l=i.replyPropType,p=require("i18n!nls/discussions");require("css!./__styles__/HighlightedReply");var c=(n=t=function(t){function HighlightedReply(){return _classCallCheck(this,HighlightedReply),_possibleConstructorReturn(this,t.apply(this,arguments))}return _inherits(HighlightedReply,t),HighlightedReply.prototype.render=function render(){var t=this.props,n=t.reply,r=t.answerId,i=t.commentId,l=t.forumLink;if(!n||n.hide)return null;return e.createElement("div",{className:"rc-HighlightedReply card-rich-interaction"},e.createElement(o,{label:p("Highlighted Post")},e.createElement("div",{className:"highlighted-reply-content"},e.createElement(s,{showJumpLink:!0,collapseCommentsByDefault:!0,reply:n,answerId:r,commentId:i,forumLink:l}))))},HighlightedReply}(e.Component),t.propTypes={reply:l,forumLink:e.PropTypes.string,answerId:e.PropTypes.string,commentId:e.PropTypes.string},t.contextTypes={router:e.PropTypes.object.isRequired},n);module.exports=r(c,["ThreadDetailsStore"],function(e,t){var n=e.ThreadDetailsStore,r=t.questionId;return{reply:n.getHighlightedPost(r)}})});