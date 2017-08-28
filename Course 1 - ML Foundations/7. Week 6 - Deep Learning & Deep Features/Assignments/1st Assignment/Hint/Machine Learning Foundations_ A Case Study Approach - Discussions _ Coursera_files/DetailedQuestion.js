define("bundles/discussions/components/discussionsBody/DetailedQuestion",["require","exports","module","i18n!nls/discussions","classnames","react","bundles/cml/components/CML","bundles/discussions/components/ModerationDropdown","bundles/discussions/components/profiles/ProfileArea","js/lib/coursera.react-intl","bundles/discussions/components/AdminDetails","bundles/discussions/components/Badge","bundles/discussions/components/NextViewLink","bundles/discussions/components/CreatedTimeLink","bundles/discussions/components/EditIndicator","bundles/discussions/components/ProfileName","bundles/discussions/components/Upvote","bundles/discussions/components/Follow","css!bundles/discussions/components/discussionsBody/__styles__/DetailedQuestion"],function(require,exports,module){"use strict";function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),s=0;s<i.length;s++){var n=i[s],t=Object.getOwnPropertyDescriptor(o,n);t&&t.configurable&&void 0===e[n]&&Object.defineProperty(e,n,t)}return e}function _classCallCheck(e,s){if(!(e instanceof s))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(s,e){if(!s)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?s:e}function _inherits(s,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);s.prototype=Object.create(e&&e.prototype,{constructor:{value:s,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(s,e):_defaults(s,e))}var s,n,i=require("i18n!nls/discussions"),t=require("classnames"),e=require("react"),r=require("bundles/cml/components/CML"),c=require("bundles/discussions/components/ModerationDropdown"),o=require("bundles/discussions/components/profiles/ProfileArea"),l=require("js/lib/coursera.react-intl"),a=l.FormattedMessage,u=require("bundles/discussions/components/AdminDetails"),d=require("bundles/discussions/components/Badge"),p=require("bundles/discussions/components/NextViewLink"),m=require("bundles/discussions/components/CreatedTimeLink"),f=require("bundles/discussions/components/EditIndicator"),b=require("bundles/discussions/components/ProfileName"),y=require("bundles/discussions/components/Upvote"),E=require("bundles/discussions/components/Follow");require("css!bundles/discussions/components/discussionsBody/__styles__/DetailedQuestion");var h=(n=s=function(s){function DetailedQuestion(){var t,e,o;_classCallCheck(this,DetailedQuestion);for(var i=arguments.length,r=Array(i),n=0;i>n;n++)r[n]=arguments[n];return t=e=_possibleConstructorReturn(this,s.call.apply(s,[this].concat(r))),e.onDeleteSuccess=function(s){s||e.context.router.replace(e.props.forumLink)},o=t,_possibleConstructorReturn(e,o)}return _inherits(DetailedQuestion,s),DetailedQuestion.prototype.render=function render(){if(!this.props.question)return null;var l=this.props,s=l.question,h=l.forumLink,g=s.flagDetails&&s.flagDetails.isActive||s.isFlagged,x=t("headline-3-text",{flagged:g}),v=t({flagged:g}),n=s.creator;return e.createElement("div",{className:"rc-DetailedQuestion card-rich-interaction horizontal-box"},e.createElement("div",{className:"profile"},e.createElement(o,{externalUserId:n.externalUserId,fullName:n.fullName,profileImageUrl:n.isDefaultPhoto?"":n.photoUrl||""})),e.createElement("div",{className:"flex-1"},e.createElement("div",{className:"horizontal-box"},e.createElement("h5",{className:x},s.content.question),this.props.isPinned&&e.createElement("i",{className:"cif-pin cif-lg pin"})),e.createElement("div",{className:"metadata caption-text color-secondary-text"},e.createElement(b,{fullName:n.fullName,externalId:n.externalUserId}),e.createElement(d,{creator:n}),e.createElement(p,{question:this.props.question}),e.createElement("span",null," · "),e.createElement(m,{post:s,forumLink:h}),e.createElement(f,{post:s})),e.createElement("div",{className:v},e.createElement(r,{cml:s.content.details,className:v})),e.createElement("div",{className:"action-area horizontal-box align-items-vertical-center caption-text color-secondary-text"},e.createElement(y,{post:s}),e.createElement("span",null," · "),e.createElement(E,{question:s}),e.createElement("span",null," · "),e.createElement("button",{href:"#input-container",onClick:this.props.goToInput},e.createElement(a,{message:i("Reply to {username}"),username:s.creator.fullName})))),e.createElement(u,{post:s}),e.createElement(c,{onDeleteSuccess:this.onDeleteSuccess,creator:s.creator,post:s,forumLink:h}))},DetailedQuestion}(e.Component),s.propTypes={goToInput:e.PropTypes.func.isRequired,question:e.PropTypes.object,isPinned:e.PropTypes.bool,forumLink:e.PropTypes.string},s.contextTypes={router:e.PropTypes.object.isRequired},n);module.exports=h});