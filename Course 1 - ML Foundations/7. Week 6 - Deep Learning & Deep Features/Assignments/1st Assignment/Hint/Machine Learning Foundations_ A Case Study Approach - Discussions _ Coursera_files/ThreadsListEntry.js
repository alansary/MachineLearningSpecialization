define("bundles/discussions/components/discussionsBody/ThreadsListEntry",["require","exports","module","classnames","moment","react","bundles/discussions/components/ProfileName","bundles/discussions/components/SoftDelete","bundles/discussions/components/ThreadBadge","bundles/discussions/lib/propTypes","bundles/discussions/utils/threadUtils","bundles/page/components/TrackedLink2","bundles/cml/components/CMLText","i18n!nls/discussions","css!bundles/discussions/components/discussionsBody/__styles__/ThreadsListEntry"],function(require,exports,module){"use strict";function _defaults(e,r){for(var i=Object.getOwnPropertyNames(r),t=0;t<i.length;t++){var s=i[t],n=Object.getOwnPropertyDescriptor(r,s);n&&n.configurable&&void 0===e[s]&&Object.defineProperty(e,s,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var n,r,s,i,o=require("classnames"),T=require("moment"),e=require("react"),u=require("bundles/discussions/components/ProfileName"),l=require("bundles/discussions/components/SoftDelete"),p=require("bundles/discussions/components/ThreadBadge"),d=require("bundles/discussions/lib/propTypes"),a=d.profilePropType,m=require("bundles/discussions/utils/threadUtils"),c=m.formatCount,y=require("bundles/page/components/TrackedLink2"),f=y.TrackedReactLink,b=require("bundles/cml/components/CMLText"),t=require("i18n!nls/discussions");require("css!bundles/discussions/components/discussionsBody/__styles__/ThreadsListEntry");var g=(r=n=function(s){function Metadata(){return _classCallCheck(this,Metadata),_possibleConstructorReturn(this,s.apply(this,arguments))}return _inherits(Metadata,s),Metadata.prototype.render=function render(){var s=this.props,r=s.badge,n=s.profile,i=s.metadataLabel,o=s.timestamp;return e.createElement("div",{className:"entry-metadata caption-text color-secondary-text"},e.createElement(p,{badge:r}),i||t("Created by")," ",e.createElement(u,{fullName:n.fullName,externalId:n.externalUserId,userId:n.userId}),e.createElement("span",{className:"timestamp-separator"}," · "),e.createElement("span",{className:"timestamp"},T(new Date(o)).fromNow()))},Metadata}(e.Component),n.propTypes={profile:a.isRequired,timestamp:e.PropTypes.number.isRequired,badge:e.PropTypes.string,metadataLabel:e.PropTypes.string},r),h=(i=s=function(s){function ThreadsListEntry(){return _classCallCheck(this,ThreadsListEntry),_possibleConstructorReturn(this,s.apply(this,arguments))}return _inherits(ThreadsListEntry,s),ThreadsListEntry.prototype.render=function render(){var s=this.props,u=s.entry,h=s.isPinned,N=s.isDeleted,P=s.isRead,L=s.threadUrl,n=s.viewCount,r=s.answerCount,y=s.badge,T=s.profile,m=s.metadataLabel,i=s.forumName,E=s.threadName,a=s.snippet,x=s.timestamp,v=s.questionId,q=s.questionUserId,w=o("headline-1-text question-title color-primary-text",{"question-title-bold":!P}),p="undefined"!=typeof n&&!isNaN(n),d="undefined"!=typeof r&&!isNaN(r),R=p||d;return e.createElement("li",{className:"rc-ThreadsListEntry"},e.createElement(f,{href:L,className:"horizontal-box nostyle",trackingName:"thread_list_entry",data:{question_id:v,question_user_id:q}},h&&e.createElement("span",{className:"cif-stack cif-lg pin-container align-self-start"},e.createElement("i",{className:"cif-circle cif-stack-2x pin-background"}),e.createElement("i",{className:"cif-pin cif-stack-lg pin-icon"})),e.createElement("div",{className:"flex-1 align-self-center"},i&&e.createElement("div",{className:"forum-info caption-text color-secondary-text"},i),e.createElement("div",{className:w},E),a&&e.createElement("div",{className:o("body-1-text","entry-snippet")},e.createElement(b,{cml:a})),e.createElement(g,{badge:y,profile:T,metadataLabel:m,timestamp:x})),R&&e.createElement("div",{className:"horizontal-box align-self-center color-secondary-text c-reply-area"},p&&e.createElement("div",{className:"vertical-box align-items-vertical-center view-count"},e.createElement("div",{className:"label-text color-secondary-text"},c(n)),e.createElement("div",{className:"caption-text color-secondary-text"},t("views"))),d&&e.createElement("div",{className:"vertical-box align-items-vertical-center"},e.createElement("div",{className:"label-text color-secondary-text"},c(r)),e.createElement("div",{className:"caption-text color-secondary-text"},t("replies"))))),N&&e.createElement(l,{entry:u,hideUndoDelete:!0}))},ThreadsListEntry}(e.Component),s.propTypes={threadUrl:e.PropTypes.string.isRequired,profile:a.isRequired,timestamp:e.PropTypes.number.isRequired,threadName:e.PropTypes.string.isRequired,questionId:e.PropTypes.string.isRequired,questionUserId:e.PropTypes.number.isRequired,entry:e.PropTypes.object,isPinned:e.PropTypes.bool,isDeleted:e.PropTypes.bool,isRead:e.PropTypes.bool,viewCount:e.PropTypes.number,answerCount:e.PropTypes.number,badge:e.PropTypes.string,metadataLabel:e.PropTypes.string,snippet:e.PropTypes.object,forumName:e.PropTypes.string},s.defaultProps={isPinned:!1,isDeleted:!1,isRead:!0},i);module.exports=h});