define("bundles/discussions/components/sessionFilter/SessionFilterDropdown",["require","exports","module","underscore","react","moment","classnames","react-bootstrap","js/lib/coursera.react-intl","vendor/cnpm/fluxible.v0-4/addons/connectToStores","js/lib/waitFor","i18n!nls/discussions","css!bundles/discussions/components/sessionFilter/__styles__/SessionFilterDropdown"],function(require,exports,module){"use strict";function _defaults(e,s){for(var i=Object.getOwnPropertyNames(s),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(s,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _toConsumableArray(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var i,o,_=require("underscore"),e=require("react"),t=require("moment"),a=require("classnames"),s=require("react-bootstrap"),d=s.DropdownButton,r=s.MenuItem,c=require("js/lib/coursera.react-intl"),u=c.FormattedMessage,p=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),f=require("js/lib/waitFor"),l="MMM DD, YYYY",n=require("i18n!nls/discussions");require("css!bundles/discussions/components/sessionFilter/__styles__/SessionFilterDropdown");var b=(o=i=function(s){function SessionFilterDropdown(o,l){_classCallCheck(this,SessionFilterDropdown);var i=_possibleConstructorReturn(this,s.call(this,o,l));if(i.handleDropdownChange=function(e){var t=void 0,r=void 0,n=void 0;e.startsWith("all~")?(t=i.props.branches.find(function(t){return t.id===e.substring(4,e.length)}),r=t.filters.find(function(e){return"all"===e.id}),n="all"):(t=i.props.branches.find(function(t){return!!t.filters.find(function(t){return t.id===e})}),r=t.filters.find(function(t){return t.id===e}),n=e),i.setState({selectedFilter:r}),i.props.handleDropdownChange(n,t.id)},i.buildBranchMenuItemDisplay=function(t){return e.createElement(r,{key:t.id,eventKey:t.id,disabled:!0,className:"disabled"},e.createElement("div",{className:"horizontal-box"},t.label))},i.buildAllBranchFilterMenuItemDisplay=function(t){return t.filters.map(function(t){if(i.props.hideAllSessionsOption&&"all"===t.id)return null;var n="all"!==t.id?t.id:"all~"+t.branchId,s=a({"body-2-text":t.id===i.state.selectedFilter.id&&t.branchId===i.state.selectedFilter.branchId});return e.createElement(r,{key:n,eventKey:n},e.createElement("div",{className:s},i.buildFilterMenuItemDisplay(t,!0)))})},i.buildFilterMenuItemDisplay=function(r,s){if("ondemand"===r.id||"all"===r.id)return e.createElement("div",{className:"horizontal-box menu-item-box"},s&&e.createElement("span",null," - "),i.buildFilterDisplayString(r,s),"ondemand"===r.id&&s&&e.createElement("div",{className:"menu-item-label caption-text color-secondary-text"},n("Active")));var o=i.props.allSessions.find(function(e){return e.id===r.id}),l=_(o.moduleDeadlines).chain().sortBy(function(e){return e.startedAt}).find(function(e){return t(e.deadline).isAfter(t())}).value(),a=l&&t(l).diff(t(o.startedAt),"weeks")+1;return e.createElement("div",{className:"horizontal-box menu-item-box"},s&&e.createElement("span",null," - "),i.buildFilterDisplayString(r,s),s&&a>0&&t(o.endedAt).isAfter(t())&&e.createElement("div",{className:"menu-item-label caption-text color-secondary-text"},e.createElement(u,{message:n("Week {weekNumber} assignment due"),weekNumber:a})))},o.hideAllSessionsOption&&"all"===o.selectedFilter.id){var d=o.branches.find(function(e){return e.id===o.currentBranchId})||o.branches[0];i.state={selectedFilter:d.filters.find(function(e){return"all"!==e.id})},o.handleDropdownChange(i.state.selectedFilter.id)}else i.state={selectedFilter:o.selectedFilter};return i}return _inherits(SessionFilterDropdown,s),SessionFilterDropdown.prototype.buildFilterDisplayString=function buildFilterDisplayString(e,n){var r=this.props.branches.find(function(t){return t.id===e.branchId});if("ondemand"===e.id)return n?"Self Paced":"Self Paced ("+r.label+")";if("all"===e.id)return"All sessions for "+r.label;var i=t(e.startedAt).format(l),o=t(e.endedAt).format(l),s=i+" - "+o;return n?s:s+(" ("+r.label+")")},SessionFilterDropdown.prototype.render=function render(){var t=this;if(!this.props.branches||0===this.props.branches.length)return null;var n=this.props.limitSwitchingToCurrentBranch?this.props.branches.filter(function(e){return e.id===t.props.currentBranchId}):this.props.branches;return e.createElement("div",{className:"rc-SessionFilterDropdown body-1-text"},e.createElement("div",{className:"dropdown-section"},e.createElement(d,{id:this.props.id,title:this.buildFilterMenuItemDisplay(this.state.selectedFilter,!1),onSelect:this.handleDropdownChange},n.map(function(s,i){return[n.length>1?t.buildBranchMenuItemDisplay(s):null].concat(_toConsumableArray(t.buildAllBranchFilterMenuItemDisplay(s)),[i===n.length-1?null:e.createElement(r,{className:"disabled",disabled:!0,key:s.id+"spacer"}," ")])}))))},SessionFilterDropdown}(e.Component),i.propTypes={handleDropdownChange:e.PropTypes.func.isRequired,id:e.PropTypes.string,branches:e.PropTypes.arrayOf(e.PropTypes.shape({id:e.PropTypes.string,label:e.PropTypes.string,filters:e.PropTypes.arrayOf(e.PropTypes.shape({branchId:e.PropTypes.string.isRequired,startedAt:e.PropTypes.number,endedAt:e.PropTypes.number}))})),allSessions:e.PropTypes.array,selectedFilter:e.PropTypes.shape({id:e.PropTypes.string.isRequired,startedAt:e.PropTypes.number,endedAt:e.PropTypes.number}),hideAllSessionsOption:e.PropTypes.bool,limitSwitchingToCurrentBranch:e.PropTypes.bool,currentBranchId:e.PropTypes.string},o);module.exports=_.compose(p(["SessionFilterStore"],function(t,r){var e=t.SessionFilterStore;return{branches:e.branches,sessionsLoaded:e.filtersLoaded,selectedFilter:e.activeFilter,allSessions:e.allSessions,currentBranchId:e.currentBranchId}}),f(function(e){return e.sessionsLoaded},e.createElement("div",{className:"padded-label"},n("Loading sessions..."))))(b)});