define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/naptimejs",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/identity",["require","exports","module"],function(require,exports,module){module.exports=function(){for(var r=arguments.length,t=Array(r),e=0;r>e;e++)t[e]=arguments[e];return t}});
define("bundles/epic/sanityCheck",["require","exports","module","js/lib/cookie","js/lib/allocate","js/app/multitrackerSingleton","bundles/epic/client"],function(require,exports,module){var t=require("js/lib/cookie"),s=require("js/lib/allocate"),e=require("js/app/multitrackerSingleton"),i=require("bundles/epic/client"),c={bySessionAllocationTest:function bySessionAllocationTest(){var c=s(t.get("__204u")),a=i.get("epicSanityTest","bySessionAllocationTest");a>c?e.pushV2(["epic.sanity_check.by_session_allocation.success"]):e.pushV2(["epic.sanity_check.by_session_allocation.failure"])},byUserAllocationTest:function byUserAllocationTest(t){var c=s(t),a=i.get("epicSanityTest","byUserAllocationTest");a>c?e.pushV2(["epic.sanity_check.by_user_allocation.success"]):e.pushV2(["epic.sanity_check.by_user_allocation.failure"])},byUserTagTargetingTest:function byUserTagTargetingTest(t,c){var a=s(c),n=i.get("epicSanityTest","byUserTagTargetingTest",{course_id:t});n>a?e.pushV2(["epic.sanity_check.by_user_tag_targeting.success",{course_id:t}]):e.pushV2(["epic.sanity_check.by_user_tag_targeting.failure",{course_id:t}])}};module.exports=c});
define("nls/account-settings",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/collapse/collapse',[],function(){})

define('css!bundles/socialPlugins/wechat/__styles__/wechat-button',[],function(){})
define("nls/socialPlugins",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/require.memoize",["module"],function(module){function argsToJsonHasher(){var r=Array.prototype.slice.call(arguments);return JSON.stringify(r)}function memoize(e,t){var n={};t=t||argsToJsonHasher;var r=function memoized(){var r=t.apply(this,arguments);return r in n||(n[r]=e.apply(this,arguments)),n[r]};return r.force=function(){return r.clear.apply(this,arguments),r.apply(this,arguments)},r.clear=function(){var r=t.apply(this,arguments);delete n[r]},r.reset=function(){n={}},r}var r={version:"0.0.1",load:function load(r,n,t,e){n([r],function(r){t(memoize(r))})}};return r});

define("bundles/confirmNavigation/nls/confirmNavigation",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/page/lib/nls/metatagsAddressBook",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/nls/moment.lang",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/plugins/lazy",["require","exports","module"],function(require,exports,module){var e={version:"0.0.1",load:function load(e,r,u,i){var n=function getModule(n){r([e],function(e){return n(e)})};return n.lazy={moduleId:e},u(n)}};module.exports=e});

define("nls/user-account",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/phoenix",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/mobile",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/program-home",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/__styles__/CoursePageHeader',[],function(){})
define("nls/ondemand",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/ondemand/renderOrigamiIf",["require","exports","module","react","origami","jsuri","i18n!nls/ondemand"],function(require,exports,module){function _defaults(e,o){for(var i=Object.getOwnPropertyNames(o),t=0;t<i.length;t++){var r=i[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e=require("react"),t=require("origami"),r=require("jsuri"),n=require("i18n!nls/ondemand");module.exports=function renderOrigamiIf(o){return function(a){var i,u,s=(u=i=function(i){function RenderOrigamiIf(){var o,r,a;_classCallCheck(this,RenderOrigamiIf);for(var u=arguments.length,s=Array(u),e=0;u>e;e++)s[e]=arguments[e];return o=r=_possibleConstructorReturn(this,i.call.apply(i,[this].concat(s))),r.routerWillLeave=function(r){var e=t.renderedRegions.filter(function(e){return e.view.hasUnsavedModel}).map(function(e){return e.view.hasUnsavedModel()}).reduce(function(e,t){return e||t},!1);if(!e)return!0;return e&&window.confirm(n("There are unsaved changes that will be lost if you reload or leave this page."))?!0:!1},a=o,_possibleConstructorReturn(r,a)}return _inherits(RenderOrigamiIf,i),RenderOrigamiIf.prototype.componentDidMount=function componentDidMount(){var e=this,n=this.context.router,o=this.props.route;t.router.navigate=t.router.navigateTo=function(i){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=new r(i),u=new r(window.location.toString());if(u.path()===a.path()&&u.query()===a.query())return;t===!0||t&&t.trigger===!0?t&&t.replace?n.replace(i):n.push(i):t&&t.replace?window.history.replaceState(null,null,i):window.history.pushState(null,null,i),e.context.router.setRouteLeaveHook(o,e.routerWillLeave)}},RenderOrigamiIf.prototype.componentWillReceiveProps=function componentWillReceiveProps(e,r){o(this.props)&&!o(e)&&t.trigger("close")},RenderOrigamiIf.prototype.render=function render(){return o(this.props)?e.createElement("div",null,e.createElement("div",{"data-js":"origami"}),e.createElement(a,this.props)):e.createElement(a,this.props)},RenderOrigamiIf}(e.Component),i.propTypes={children:e.PropTypes.node,route:e.PropTypes.object},i.contextTypes={router:e.PropTypes.object},u);return s}}});



define("js/json/nls/universities",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/specializations",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/topics",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/languages",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/categories",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/catalogP/data/memberships",["require","exports","module","memoize!bundles/catalogP/api/api.promise","bundles/catalogP/models/membership","bundles/catalogP/lib/catalogUrl"],function(require,exports,module){var e=require("memoize!bundles/catalogP/api/api.promise"),a=require("bundles/catalogP/models/membership"),l=require("bundles/catalogP/lib/catalogUrl");module.exports=function(o){return e(l.build(a.prototype.resourceName,o))}});

define("bundles/catalogP/promises/memberships",["require","exports","module","underscore","memoize!bundles/catalogP/data/memberships","bundles/catalogP/lib/createLinkedModels","bundles/catalogP/models/memberships","bundles/ondemand/sessions/models/Sessions"],function(require,exports,module){var _=require("underscore"),n=require("memoize!bundles/catalogP/data/memberships"),s=require("bundles/catalogP/lib/createLinkedModels"),e=require("bundles/catalogP/models/memberships"),i=require("bundles/ondemand/sessions/models/Sessions"),r=i.Sessions;module.exports=function(){var i=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return n(i).then(function(n){if(n.linked&&n.linked["onDemandSessions.v1"]&&n.linked["onDemandSessionMemberships.v1"]&&!function(){var s=_(n.linked["onDemandSessions.v1"]).groupBy("courseId"),e=_(n.linked["onDemandSessionMemberships.v1"]).groupBy("sessionId"),i=Object.keys(e);n.elements.forEach(function(n){var d=s[n.courseId]||[];if(d.length){var o=d.filter(function(e){return i.indexOf(e.id)>=0});if(o.length){var t=new r(o).getLastSession();n.onDemandSessionId=t.id,n.onDemandSessionMemberships=o.map(function(n){return e[n.id]})}}})}(),n.linked&&n.linked["v1Details.v1"]&&(n.linked["courses.v1"]=_(n.linked["courses.v1"]).map(function(e){if("v1.session"===e.courseType||"v1.capstone"===e.courseType){e.v1Details=e.id;var s=_(n.linked["v1Sessions.v1"]).reduce(function(n,s){return s.courseId===e.id&&n.push(s.id.toString()),n},[]);e.v1Sessions=s}return e})),n.linked&&n.linked["v2Details.v1"]&&(n.linked["courses.v1"]=_(n.linked["courses.v1"]).map(function(e){return"v2.ondemand"===e.courseType&&(e.v2Details=_(n.linked["v2Details.v1"]).findWhere({id:e.id})),e})),n.linked&&n.linked["vcMemberships.v1"]&&!function(){var e=_(n.linked["vcMemberships.v1"]).pluck("id");n.elements=_(n.elements).map(function(n){return _(e).contains(n.id)&&(n.vcMembershipId=n.id),n})}(),n.linked&&n.linked["courses.v1"]&&!function(){var e=_(n.linked["courses.v1"]).pluck("id");n.elements=_(n.elements).chain().filter(function(n){return _(e).contains(n.courseId)}).compact().value()}(),n.linked&&n.linked["signatureTrackProfiles.v1"]&&_(n.elements).each(function(e){e.signatureTrackProfile=e.userId}),i.rawData)return n;return s(e.prototype.resourceName,n)}).fail(function(n){if(i.rawData)return null;return new e})}});
define("bundles/ondemand/actions/CertificateActions",["require","exports","module","q","bundles/catalogP/promises/memberships"],function(require,exports,module){var t=Object.assign||function(i){for(var e=1;e<arguments.length;e++){var t=arguments[e];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(i[r]=t[r])}return i},e=require("q"),r=require("bundles/catalogP/promises/memberships"),i={showHidden:!0,fields:["courseId","grade"],includes:{vcMembership:{fields:["certificateCode","certificateCodeWithGrade","grade","grantedAt"]},course:{fields:[]}}};exports.loadCertificateData=function(a,s){var d=s.courseId,o=s.userId;if(a.getStore("CertificateStore").hasLoaded())return e();var n=void 0;return n=o?r(t({id:o+"~"+d},i,{rawData:!0})).then(function(e){a.dispatch("LOAD_MEMBERSHIPS",e)}):e().then(function(){a.dispatch("LOAD_MEMBERSHIPS",null)}),n.done(),n}});
define("bundles/ondemand/actions/CourseActions",["require","exports","module","underscore","js/lib/api","q","pages/open-course/common/promises/courseMaterials"],function(require,exports,module){var _=require("underscore"),r=require("js/lib/api"),e=require("q"),o=require("pages/open-course/common/promises/courseMaterials"),s=r("/api/domains.v1",{type:"rest"});exports.loadCourseMaterials=function(r,s){var t=s.courseSlug,i=s.forceReload;if(r.getStore("CourseStore").hasLoaded()&&!i)return e();return o(t).then(function(e){var o=e.rawCourseMaterials,s=r.getStore("CourseStore").rawCourseMaterials;r.getStore("CourseStore").loaded&&_.isEqual(s,o)||r.dispatch("LOAD_COURSE_MATERIALS",e)})},exports.loadDomains=function(r){if(void 0!==r.getStore("CourseStore").domains)return e();return e(s.get("?fields=id,name")).then(function(e){r.dispatch("LOAD_DOMAINS",e.elements)})},exports.setCourseIdentifiers=function(s,e){var r=e.courseId,o=e.courseSlug;if(!r)throw new Error("Missing courseId");if(!o)throw new Error("Missing courseSlug");s.dispatch("SET_COURSE_IDENTIFIERS",{courseId:r,courseSlug:o})}});
define("bundles/ondemand/utils/areDeadlinesBlacklisted",["require","exports","module","bundles/epic/client"],function(require,exports,module){var e=require("bundles/epic/client");module.exports=function(n){return-1!==e.get("featureBlacklist","defaultDeadlines").indexOf(n)}});
define("bundles/ondemand/utils/deadlinesApi",["require","exports","module","q","bundles/phoenix/lib/apiWrapper","jsuri","js/lib/user"],function(require,exports,module){var e=require("q"),d=require("bundles/phoenix/lib/apiWrapper"),n=require("jsuri"),r=require("js/lib/user"),t=d("/api/onDemandDeadlineSettings.v1",{type:"rest"}),a={getStartTime:function getStartTime(a){var d=(new n).addQueryParam("q","byUserAndCourse").addQueryParam("userId",r.get().id).addQueryParam("courseId",a).toString();return e(t.get(d)).fail(function(e){console.error(e)})},sendStartTime:function sendStartTime(n,a){var d={data:{userId:r.get().id,courseId:a,start:Date.now(),isEnabled:n}};return e(t.post("",d))},disableDeadlines:function disableDeadlines(e){return a.sendStartTime(!1,e)},getResetPreview:function getResetPreview(a,d){var i=(new n).addQueryParam("q","extendPreview").addQueryParam("userId",r.get().id).addQueryParam("courseId",a).addQueryParam("extendedAt",Date.now()).toString();e(t.get(i)).then(d).fail(function(e){console.error(e)}).done()},resetDeadlines:function resetDeadlines(a){var d={data:{userId:r.get().id,courseId:a,extendedAt:Date.now()}},i=(new n).addQueryParam("action","extend").toString();return e(t.post(i,d))}};module.exports=a});
define("bundles/ondemand/actions/CourseDeadlineActions",["require","exports","module","q","bundles/ondemand/utils/areDeadlinesBlacklisted","bundles/ondemand/utils/deadlinesApi","bundles/naptime/handleResponse","js/app/multitrackerSingleton","bundles/ondemand/actions/ErrorActions","bundles/ondemand/stores/StoreComputationHelpers"],function(require,exports,module){var n=require("q"),s=require("bundles/ondemand/utils/areDeadlinesBlacklisted"),e=require("bundles/ondemand/utils/deadlinesApi"),r=require("bundles/naptime/handleResponse"),o=require("js/app/multitrackerSingleton"),i=require("bundles/ondemand/actions/ErrorActions"),t=i.displayError,d=require("bundles/ondemand/stores/StoreComputationHelpers"),u=d.getCurrentWeek;exports.receiveDeadlines=function(e,t){var n=t.deadlines,s=n.isEnabled,r=n.moduleDeadlines;s?e.dispatch("LOAD_COURSE_DEADLINES",{moduleDeadlines:r}):e.dispatch("DISABLE_DEADLINES")},exports.setDeadlinesIfEligible=function(e){var t=e.getStore("CourseStore"),r=e.getStore("CourseScheduleStore"),o=e.getStore("ProgressStore"),i=u(t,r,o),d=t.hasLaunched(),a=t.getCourseId(),l=e.getStore("CourseMembershipStore").isEnrolled(),c=e.getStore("SessionStore");return!s(a)&&d&&!c.isSessionsCourse()&&1===i&&l?e.executeAction(exports.enableDeadlines,{}):n()},exports.loadCourseDeadlines=function(t,a){var l=a.userId,c=t.getStore("CourseStore").hasLaunched(),i=t.getStore("CourseStore").getCourseId(),S=t.getStore("CourseMembershipStore").isEnrolled(),o=t.getStore("SessionStore");if(!S||!l||s(i)||!c)return n();if(o.isSessionsEnabled()){if(o.isEnrolled()){var d=o.getSession(),u={moduleDeadlines:d.moduleDeadlines};u.itemDeadlines=d.itemDeadlines,t.dispatch("LOAD_COURSE_DEADLINES",u)}return n()}return e.getStartTime(i).then(r).then(function(n){var s=n.elements,e=s[0];return e?t.executeAction(exports.receiveDeadlines,{deadlines:e}):t.executeAction(exports.setDeadlinesIfEligible,{})})},exports.enableDeadlines=function(n){var s=n.getStore("CourseStore").getCourseId();return e.sendStartTime(!0,s).fail(function(e){throw n.executeAction(t,e),e}).then(r).then(function(t){var e=t.elements,s=e[0].start;return o.pushV2(["open_course_home.welcome.emit.course_deadline_set",{first_week_due_time:s}]),n.executeAction(exports.receiveDeadlines,{deadlines:e[0]})})},exports.disableDeadlines=function(n){var s=n.getStore("CourseStore").getCourseId();return e.disableDeadlines(s).then(function(){return n.dispatch("DISABLE_DEADLINES")}).fail(function(e){throw n.executeAction(t,e),e})},exports.resetDeadlines=function(n,s){var r=s.userId,o=n.getStore("CourseStore").getCourseId();return e.resetDeadlines(o).then(function(){return n.executeAction(exports.loadCourseDeadlines,{userId:r})}).fail(function(e){throw n.executeAction(t,e),e})}});
define("bundles/ondemand/utils/courseScheduleApi",["require","exports","module","q","jsuri","bundles/phoenix/lib/apiWrapper"],function(require,exports,module){var e=require("q"),u=require("jsuri"),r=require("bundles/phoenix/lib/apiWrapper"),i=new r("/api/onDemandCourseSchedules.v1");exports.getCourseSchedule=function(r){var n=new u(r).addQueryParam("fields","defaultSchedule");return e(i.get(n.toString()))}});
define("pages/open-course/common/promises/courseSchedule",["require","exports","module","bundles/ondemand/utils/courseScheduleApi","bundles/naptime/handleResponse"],function(require,exports,module){var e=require("bundles/ondemand/utils/courseScheduleApi"),n=e.getCourseSchedule,u=require("bundles/naptime/handleResponse");module.exports=function(e){if(!e)throw new Error("`courseId` is required to get course schedule.");return n(e).then(u).then(function(e){var n=e.elements;return n[0].defaultSchedule.periods})}});
define("bundles/ondemand/actions/CourseScheduleActions",["require","exports","module","q","pages/open-course/common/promises/courseSchedule"],function(require,exports,module){var e=require("q"),o=require("pages/open-course/common/promises/courseSchedule");exports.loadCourseSchedule=function(r,s){var u=s.courseId;if(r.getStore("CourseScheduleStore").hasLoaded())return e();if(!u)return e.reject(new Error("courseId must be provided."));return o(u).then(function(e){r.dispatch("LOAD_COURSE_SCHEDULE",e)})}});

define("bundles/groups/models/GroupSettingData",["require","exports","module","underscore"],function(require,exports,module){function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}var e=function(){function defineProperties(r,t){for(var n=0;n<t.length;n++){var e=t[n];e.enumerable=e.enumerable||!1,e.configurable=!0,"value"in e&&(e.writable=!0),Object.defineProperty(r,e.key,e)}}return function(e,n,t){return n&&defineProperties(e.prototype,n),t&&defineProperties(e,t),e}}(),_=require("underscore"),n=function(){function GroupSettingData(e){_classCallCheck(this,GroupSettingData),Object.assign(this,_(e).pick("definition","typeName"))}return GroupSettingData.prototype.toJSON=function toJSON(){return _(this).pick("definition","typeName")},e(GroupSettingData,[{key:"value",get:function get(){return this.definition.value}}]),GroupSettingData}();module.exports=n});
define("bundles/groups/models/GroupSetting",["require","exports","module","underscore","./GroupSettingData"],function(require,exports,module){function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t=Object.assign||function(r){for(var t=1;t<arguments.length;t++){var e=arguments[t];for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(r[n]=e[n])}return r},e=function(){function defineProperties(r,n){for(var e=0;e<n.length;e++){var t=n[e];t.enumerable=t.enumerable||!1,t.configurable=!0,"value"in t&&(t.writable=!0),Object.defineProperty(r,t.key,t)}}return function(t,e,n){return e&&defineProperties(t.prototype,e),n&&defineProperties(t,n),t}}(),_=require("underscore"),n=require("./GroupSettingData"),r=function(){function GroupSetting(t){_classCallCheck(this,GroupSetting),Object.assign(this,_(t).pick("groupId","id","key")),this.setting=new n(t.setting)}return GroupSetting.prototype.toJSON=function toJSON(){return t({},_(this).pick("groupId","id","key"),{setting:this.setting.toJSON()})},e(GroupSetting,[{key:"value",get:function get(){return this.setting.value}}]),GroupSetting}();module.exports=r});
define("bundles/group-enroll/actions/GroupSettingActions",["require","exports","module","q","underscore","bundles/groups/utils/GroupMembershipAPIUtils","bundles/groups/models/Group","bundles/groups/models/GroupSetting"],function(require,exports,module){var e=require("q"),_=require("underscore"),r=require("bundles/groups/utils/GroupMembershipAPIUtils"),u=require("bundles/groups/models/Group"),s=require("bundles/groups/models/GroupSetting");exports.loadUserGroupsForCourse=function(o,n){var t=n.courseId,i=n.userId;if(o.getStore("GroupSettingStore").hasLoaded())return e();return r.myCourseGroupsWithSettings(i,t).then(function(e){var r=_(e.linked["groupSettings.v1"]).map(function(e){return new s(e)}),n=e.linked["groups.v1"].map(function(e){return new u(e)}),t=e.elements;o.dispatch("LOADED_COURSE_GROUPS",{groups:n,groupSettings:r,groupMemberships:t})}).fail(function(e){o.dispatch("LOADED_COURSE_GROUPS",{})})}});
define("bundles/course-references/stores/CourseReferencesStore",["require","exports","module","underscore","vendor/cnpm/fluxible.v0-4/addons/BaseStore"],function(require,exports,module){function _defaults(e,o){for(var c=Object.getOwnPropertyNames(o),t=0;t<c.length;t++){var r=c[t],n=Object.getOwnPropertyDescriptor(o,r);n&&n.configurable&&void 0===e[r]&&Object.defineProperty(e,r,n)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e,t,_=require("underscore"),n=require("vendor/cnpm/fluxible.v0-4/addons/BaseStore"),r=["loaded","referencesList","currentReference","cachedReferences"],o=(t=e=function(e){function CourseReferencesStore(){var n,t,o;_classCallCheck(this,CourseReferencesStore);for(var c=arguments.length,s=Array(c),r=0;c>r;r++)s[r]=arguments[r];return n=t=_possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),t.cachedReferences={},t.loaded=!1,o=n,_possibleConstructorReturn(t,o)}return _inherits(CourseReferencesStore,e),CourseReferencesStore.prototype.dehydrate=function dehydrate(){var e;return(e=_(this)).pick.apply(e,r)},CourseReferencesStore.prototype.rehydrate=function rehydrate(t){var e;Object.assign(this,(e=_(t)).pick.apply(e,r))},CourseReferencesStore.prototype.getReferencesList=function getReferencesList(){return this.referencesList},CourseReferencesStore.prototype.getCurrentReference=function getCurrentReference(){return this.currentReference},CourseReferencesStore.prototype.getCurrentReferenceShortId=function getCurrentReferenceShortId(){return this.currentReference?this.currentReference.shortId:null},CourseReferencesStore.prototype.getCachedReference=function getCachedReference(e){return this.cachedReferences&&this.cachedReferences[e]},CourseReferencesStore.prototype.hasLoaded=function hasLoaded(){return this.loaded},CourseReferencesStore}(n),e.storeName="CourseReferencesStore",e.handlers={LOAD_REFERENCES_LIST:function LOAD_REFERENCES_LIST(e){this.referencesList=e,this.loaded=!0,this.emitChange()},LOAD_REFERENCE:function LOAD_REFERENCE(e){this.currentReference=e,this.cachedReferences[e.shortId]=e,this.emitChange()}},t);module.exports=o});
define("bundles/course-references/actions/CourseReferencesActions",["require","exports","module","q","underscore","bundles/phoenix/lib/apiWrapper","jsuri","bundles/course-references/stores/CourseReferencesStore"],function(require,exports,module){var e=require("q"),_=require("underscore"),s=require("bundles/phoenix/lib/apiWrapper"),r=require("jsuri"),t=require("bundles/course-references/stores/CourseReferencesStore"),n=s("/api/onDemandReferences.v1",{type:"rest"}),d=function hydrateResponse(e){return _(e.elements).each(function(r){var s=r.content["org.coursera.ondemand.reference.AssetReferenceContent"].assetId,n=_(e.linked["openCourseAssets.v1"]).where({id:s});n.length&&(r.content=n[0])})};exports.getReferencesList=function(t,d){var a=d.courseId,o=(new r).addQueryParam("courseId",a).addQueryParam("q","courseListed").addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets"),s=e(n.get(o.toString())).then(function(e){t.dispatch("LOAD_REFERENCES_LIST",e.elements)});return s.done(),s},exports.getReference=function(s,a){var o=a.referenceShortId,i=a.courseId,u=s.getStore(t).getCachedReference(o);if(!u){var f=(new r).addQueryParam("courseId",i).addQueryParam("q","shortId").addQueryParam("shortId",o).addQueryParam("fields","name,shortId,slug,content").addQueryParam("includes","assets"),c=e(n.get(f.toString())).then(function(e){var r=d(e);s.dispatch("LOAD_REFERENCE",r[0])});return c.done(),c}s.dispatch("LOAD_REFERENCE",u)}});
define("nls/seo",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/__styles__/OndemandApp',[],function(){})
define("bundles/ondemand/components/OndemandApp",["require","exports","module","react","underscore","naptime","js/lib/retracked","pages/open-course/common/utils/rtl","bundles/epic/client","bundles/epic/sanityCheck","bundles/ondemand/components/CoursePageHeader","bundles/ondemand/renderOrigamiIf","bundles/ondemand/actions/CertificateActions","bundles/ondemand/actions/CourseActions","bundles/ondemand/actions/CourseDeadlineActions","bundles/ondemand/actions/CourseMembershipActions","bundles/ondemand/actions/CourseScheduleActions","bundles/ondemand/actions/CourseViewGradeActions","bundles/group-enroll/actions/GroupSettingActions","bundles/ondemand/actions/HonorsUserPreferencesActions","bundles/ondemand/actions/ProgressActions","bundles/ondemand/actions/SessionActions","bundles/ondemand/actions/S12nActions","bundles/ondemand/actions/VerificationActions","bundles/course-references/actions/CourseReferencesActions","js/lib/waitFor","vendor/cnpm/fluxible.v0-4/addons/connectToStores","js/lib/connectToFluxibleContext","bundles/seo/components/CourseraMetatags","i18n!nls/ondemand","css!./__styles__/OndemandApp"],function(require,exports,module){function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),n=0;n<s.length;n++){var o=s[n],t=Object.getOwnPropertyDescriptor(r,o);t&&t.configurable&&void 0===e[o]&&Object.defineProperty(e,o,t)}return e}function _classCallCheck(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(n,e){if(!n)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?n:e}function _inherits(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(n,e):_defaults(n,e))}var M=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},u,l,n,i,c,a,e=require("react"),_=require("underscore"),s=require("naptime"),S=require("js/lib/retracked"),C=require("pages/open-course/common/utils/rtl"),o=require("bundles/epic/client"),L=require("bundles/epic/sanityCheck"),d=require("bundles/ondemand/components/CoursePageHeader"),z=require("bundles/ondemand/renderOrigamiIf"),B=require("bundles/ondemand/actions/CertificateActions"),J=B.loadCertificateData,t=require("bundles/ondemand/actions/CourseActions"),p=t.loadCourseMaterials,A=t.loadDomains,y=t.setCourseIdentifiers,x=require("bundles/ondemand/actions/CourseDeadlineActions"),I=x.loadCourseDeadlines,v=require("bundles/ondemand/actions/CourseMembershipActions"),g=v.loadMembership,P=require("bundles/ondemand/actions/CourseScheduleActions"),T=P.loadCourseSchedule,E=require("bundles/ondemand/actions/CourseViewGradeActions"),O=E.loadCourseViewGrade,w=require("bundles/group-enroll/actions/GroupSettingActions"),j=w.loadUserGroupsForCourse,D=require("bundles/ondemand/actions/HonorsUserPreferencesActions"),R=D.loadHonorsUserPreferences,m=require("bundles/ondemand/actions/ProgressActions"),f=m.getProgress,N=m.getHomeProgress,V=require("bundles/ondemand/actions/SessionActions"),k=V.getCurrentSession,G=require("bundles/ondemand/actions/S12nActions"),q=G.loadS12n,H=require("bundles/ondemand/actions/VerificationActions"),U=H.loadVerificationDisplay,F=require("bundles/course-references/actions/CourseReferencesActions"),W=F.getReferencesList,b=require("js/lib/waitFor"),r=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),h=require("js/lib/connectToFluxibleContext"),K=require("bundles/seo/components/CourseraMetatags"),Q=require("i18n!nls/ondemand");require("css!./__styles__/OndemandApp");var X=(u=s.createContainer(function(){return{}}),u((i=n=function(n){function OndemandApp(){return _classCallCheck(this,OndemandApp),_possibleConstructorReturn(this,n.apply(this,arguments))}return _inherits(OndemandApp,n),OndemandApp.prototype.getChildContext=function getChildContext(){return{getEpicParam:o.get.bind(o),epic:o,csrfToken:this.context.getStore("ApplicationStore").csrfToken}},OndemandApp.prototype.componentDidMount=function componentDidMount(){var n=this,e=this.props,s=e.course,o=e.courseId,i=e.courseSlug,t=e.authenticated,r=e.userId;this.unlistenRefreshCourseData=this.context.router.listen(_.throttle(function(e){e.pathname.indexOf("learn/"+n.props.courseSlug+"/discussions")<0&&(n.context.executeAction(p,{courseSlug:i}),n.context.executeAction(f,{authenticated:t,userId:r,courseId:o}),n.props.naptime.refreshData({resources:["onDemandCoursesProgress.v1","onDemandGuidedModuleEstimateTimeProgress.v1","onDemandGuidedWeekEstimateTimeProgress.v1","onDemandGuidedNextSteps.v1"]}))},100)),t&&L.byUserTagTargetingTest(o,r),C(s.get("primaryLanguageCodes"))},OndemandApp.prototype.componentWillUnmount=function componentWillUnmount(){"undefined"!=typeof this.unlistenRefreshCourseData&&this.unlistenRefreshCourseData()},OndemandApp.prototype.render=function render(){var n=this.props.hasError;return e.createElement("div",null,n&&e.createElement("div",null,e.createElement(d,null),e.createElement("div",{className:"c-error horizontal-box"},e.createElement("div",{className:"flex"},e.createElement("i",{className:"cif-warning cif-4x"})),e.createElement("div",{className:"align-self-center"},e.createElement("h3",{className:"c-error-message"},Q("Oops, something went wrong. Please refresh and try again."))))),!n&&this.props.children&&e.cloneElement(this.props.children,M({},_(this.props).omit("children","route"))),e.createElement(K,{disableCrawlerIndexing:!0}))},OndemandApp}(e.Component),n.propTypes={naptime:e.PropTypes.instanceOf(s.NaptimeProp).isRequired,courseSlug:e.PropTypes.string,courseId:e.PropTypes.string,userId:e.PropTypes.number,children:e.PropTypes.node,hasError:e.PropTypes.bool,authenticated:e.PropTypes.bool,course:e.PropTypes.object},n.contextTypes={router:e.PropTypes.object.isRequired,executeAction:e.PropTypes.func.isRequired,getStore:e.PropTypes.func.isRequired},n.childContextTypes={getEpicParam:e.PropTypes.func.isRequired,epic:e.PropTypes.object.isRequired,csrfToken:e.PropTypes.string},l=i))||l),Y=_.compose(r(["ApplicationStore"],function(n){var o=n.ApplicationStore,e=o.getUserData();return{userId:e.id,externalId:e.external_id,authenticated:!!e.authenticated}}),z(function(){return!1}),r(["SessionStore","CourseStore","CourseMembershipStore","ErrorStore","S12nStore","VerificationStore"],function(e){var n=e.SessionStore,o=e.CourseStore,i=e.CourseMembershipStore,t=e.ErrorStore,r=e.S12nStore,s=e.VerificationStore;return{sessionId:n.getSessionId(),isEnrolledInSession:n.isEnrolled(),hasError:t.hasError(),course:o.getMetadata(),s12n:r.getS12n(),verificationStoreHasLoaded:s.hasLoaded()}}),h(function(e,o){var r=o.authenticated,t=o.userId,i=o.externalId,n=o.courseId,s=o.courseSlug;e.executeAction(y,{courseId:n,courseSlug:s}),e.executeAction(q,{authenticated:r,courseId:n,userId:t}),e.executeAction(p,{courseSlug:s}),e.executeAction(g),e.executeAction(k,{courseSlug:s}),e.executeAction(T,{courseId:n}),e.executeAction(O,{userId:t,courseId:n}),e.executeAction(A),e.executeAction(j,{courseId:n,userId:t}),e.executeAction(W,{courseId:n}),e.executeAction(R,{authenticated:r}),e.executeAction(J,{courseId:n,userId:t}),e.executeAction(N,{authenticated:r,courseId:n}),e.executeAction(f,{authenticated:r,courseId:n,userId:t})}),S.createTrackedContainer(function(e){var n=e.courseId,o=e.courseSlug;return{namespace:{app:"open_course_home"},open_course_id:n,open_course_slug:o}}),b(function(e){var n=e.hasLoaded;return n}),h(function(n,e){var r=e.authenticated,o=e.userId,s=e.courseId,i=e.course,t=e.s12n,c=t&&t.getId(),a=i.isVerificationEnabled();n.executeAction(I,{userId:o}),n.executeAction(U,{authenticated:r,userId:o,courseId:s,isCourseVerificationEnabled:a,s12nId:c})}),b(function(e){var n=e.verificationStoreHasLoaded;return n}))(X),Z=(a=c=function(n){function OndemandAppContainer(){return _classCallCheck(this,OndemandAppContainer),_possibleConstructorReturn(this,n.apply(this,arguments))}return _inherits(OndemandAppContainer,n),OndemandAppContainer.prototype.render=function render(){var n=this.props.hasLoaded;return e.createElement("div",{className:"rc-OndemandApp"},!n&&e.createElement(d,null),!n&&e.createElement("div",{className:"c-spinner"},e.createElement("i",{className:"cif-spinner cif-spin cif-4x"})),e.createElement(Y,this.props))},OndemandAppContainer}(e.Component),c.propTypes={hasLoaded:e.PropTypes.bool.isRequired},a);module.exports=r(["CourseStore","SessionStore","CourseMembershipStore","S12nStore"],function(e){var n=e.CourseStore,o=e.SessionStore,t=e.CourseMembershipStore,r=e.S12nStore;return{hasLoaded:n.hasLoaded()&&o.hasLoaded()&&t.hasLoaded()&&r.hasLoaded()}})(Z)});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.collapse{display:none;}.collapse.open{display:block}.collapsing{position:relative;height:0;overflow:hidden}.wechat-image{cursor:pointer}.wechat-qrcode-container{background:#fff;border:1px solid #ccc;position:absolute;z-index:100;width:260px;height:130px;font-size:13px;right:10px;top:-120px;margin-top:20px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3)}#wechat-qrcode{display:inline-block;margin:20px 10px;float:left}.wechat-qrcode-message{display:inline-block;width:120px;height:90px;margin:20px 10px;line-height:20px;text-align:left}.wechat-qrcode-close{position:absolute;top:0;right:8px;cursor:pointer}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-CoursePageHeader{width:100%;z-index:1;}.rc-CoursePageHeader .rc-MobileHeader{position:relative;}.rc-CoursePageHeader .rc-MobileHeader .c-nav{position:relative;}.rc-CoursePageHeader .rc-MobileHeader .c-nav .horizontal-box{height:100%}.rc-CoursePageHeader .rc-MobileHeader .rc-MenuToggleButton{position:absolute;top:4px;left:15px;border-color:rgba(0,0,0,0.12);}.rc-CoursePageHeader .rc-MobileHeader .rc-MenuToggleButton .bt3-icon-bar{background-color:rgba(0,0,0,0.54)}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.success-back{background-color:#f4fbec}.error-back{background-color:#f9f0f0}.interactive-block:hover{background-color:#f1f7fd}.interactive-block.selected{background-color:#eef7ff}.table{border-collapse:collapse;width:100%;}.table thead tr:last-child th{border-bottom:1px solid #ddd}.table tbody td{border-bottom:1px solid #ddd}.table tr{vertical-align:top}.table th,.table td{color:#333;padding:10px 15px}.table th{font-weight:bold}h3.tab-headline{margin-bottom:18px}.od-section{margin-top:30px;}.od-section .item{margin-bottom:18px;}.od-section .item:last-child{margin-bottom:0}.od-container.cozy{padding:16px 24px;}@media (max-width:767px){.od-container.cozy{padding:12px 18px}}.od-profile-image{-webkit-border-radius:100%;border-radius:100%;width:$profileImageDim;height:$profileImageDim;}.od-profile-image img{max-width:$profileImageDim;}.od-profile-initials{background-color:$initialsBackColor;color:#fff;text-transform:uppercase;width:100%;height:100%;}.od-profile-initials p{margin-bottom:0}button.secondary em,button.secondary i{margin-left:4px}button.secondary *{display:inline-block}.od-text-bold{font-family:\'OpenSans\',Arial,sans-serif;font-weight:bold}.rc-OndemandApp [class*=\'card-\']{background-color:#fafafa}.rc-OndemandApp .od-dark .text-primary{color:#fff}.rc-OndemandApp .od-dark .text-light{color:#969899}.rc-OndemandApp .od-text-truncate{-o-text-overflow:ellipsis;text-overflow:ellipsis;white-space:nowrap}.rc-OndemandApp .od-uppercase{text-transform:uppercase}.rc-OndemandApp .od-top-heading{margin:0 0 20px 8px}.rc-OndemandApp .od-nofocus:focus{outline:none}.rc-OndemandApp .od-big-number{font-size:24px;padding-right:8px}.rc-OndemandApp .right-rail{margin-left:30px;width:300px;}@media (max-width:991px){.rc-OndemandApp .right-rail{margin:0 1px !important;width:100% !important}}.rc-OndemandApp .c-error{position:absolute;left:20%;right:20%;top:20%;}.rc-OndemandApp .c-error .c-error-message{margin:0;padding-left:40px}.rc-OndemandApp .c-spinner{position:absolute;left:50%;top:50%}');