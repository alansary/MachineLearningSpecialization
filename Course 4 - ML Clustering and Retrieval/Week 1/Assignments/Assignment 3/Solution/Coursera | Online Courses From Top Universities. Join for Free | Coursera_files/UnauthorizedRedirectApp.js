define("nls/page",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/identity",["require","exports","module"],function(require,exports,module){module.exports=function(){for(var r=arguments.length,t=Array(r),e=0;r>e;e++)t[e]=arguments[e];return t}});
define("nls/account-settings",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/require.memoize",["module"],function(module){function argsToJsonHasher(){var r=Array.prototype.slice.call(arguments);return JSON.stringify(r)}function memoize(e,t){var n={};t=t||argsToJsonHasher;var r=function memoized(){var r=t.apply(this,arguments);return r in n||(n[r]=e.apply(this,arguments)),n[r]};return r.force=function(){return r.clear.apply(this,arguments),r.apply(this,arguments)},r.clear=function(){var r=t.apply(this,arguments);delete n[r]},r.reset=function(){n={}},r}var r={version:"0.0.1",load:function load(r,n,t,e){n([r],function(r){t(memoize(r))})}};return r});

define("js/json/nls/universities",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/languages",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/json/nls/topics",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/collapse/collapse',[],function(){})

define('css!bundles/phoenix/components/__styles__/ProfileImage',[],function(){})
define("bundles/confirmNavigation/nls/confirmNavigation",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/page/lib/nls/metatagsAddressBook",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("js/lib/nls/moment.lang",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("bundles/requirejs/plugins/lazy",["require","exports","module"],function(require,exports,module){var e={version:"0.0.1",load:function load(e,r,u,i){var n=function getModule(n){r([e],function(e){return n(e)})};return n.lazy={moduleId:e},u(n)}};module.exports=e});


define('css!bundles/socialPlugins/wechat/__styles__/wechat-button',[],function(){})
define("nls/socialPlugins",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/user-account",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/phoenix",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/mobile",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/program-home",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("js/json/nls/specializations",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/payments",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define("js/json/nls/categories",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});




define("nls/enroll-course",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/enroll",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/naptimejs",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/payments-common",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/phoenix-cdp",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});
define("nls/s12n-enroll",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/__styles__/CoursePageHeader',[],function(){})
define("nls/ondemand",["require","exports","module"],function(require,exports,module){module.exports={es:!0,fr:!0,pseudo:!0,pt:!0,ru:!0,tr:!0,zh:!0,"zh-hk":"zh-tw","zh-mo":"zh-tw","zh-tw":!0}});

define('css!bundles/ondemand/components/__styles__/CourseNotFound',[],function(){})
define("bundles/ondemand/components/CourseNotFound",["require","exports","module","react","bundles/ondemand/components/CoursePageHeader","i18n!nls/ondemand","css!./__styles__/CourseNotFound"],function(require,exports,module){function _defaults(e,r){for(var s=Object.getOwnPropertyNames(r),t=0;t<s.length;t++){var n=s[t],o=Object.getOwnPropertyDescriptor(r,n);o&&o.configurable&&void 0===e[n]&&Object.defineProperty(e,n,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e=require("react"),n=require("bundles/ondemand/components/CoursePageHeader"),t=require("i18n!nls/ondemand");require("css!./__styles__/CourseNotFound");var o=function(o){function CourseNotFound(){return _classCallCheck(this,CourseNotFound),_possibleConstructorReturn(this,o.apply(this,arguments))}return _inherits(CourseNotFound,o),CourseNotFound.prototype.render=function render(){return e.createElement("div",{className:"rc-CourseNotFound"},e.createElement(n,null),e.createElement("div",{className:"bt3-container"},e.createElement("h1",{className:"headline-5-text"},t("ooops... HTTP 404")),e.createElement("p",{className:"headline-2-text"},t("Sorry, we couldn't find the Course that you're looking for."),e.createElement("span",null," "),e.createElement("a",{href:"/browse"},t("Browse catalog")))))},CourseNotFound}(e.Component);module.exports=o});
define("bundles/ondemand/stores/BootstrapStore",["require","exports","module","underscore","vendor/cnpm/fluxible.v0-4/addons/BaseStore"],function(require,exports,module){function _defaults(e,n){for(var i=Object.getOwnPropertyNames(n),t=0;t<i.length;t++){var r=i[t],o=Object.getOwnPropertyDescriptor(n,r);o&&o.configurable&&void 0===e[r]&&Object.defineProperty(e,r,o)}return e}function _classCallCheck(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}function _inherits(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):_defaults(t,e))}var e,t,_=require("underscore"),o=require("vendor/cnpm/fluxible.v0-4/addons/BaseStore"),r=["loaded","courseId","courseCertificates","isEnrolled"],n=(t=e=function(e){function BootstrapStore(){var o,t,n;_classCallCheck(this,BootstrapStore);for(var i=arguments.length,s=Array(i),r=0;i>r;r++)s[r]=arguments[r];return o=t=_possibleConstructorReturn(this,e.call.apply(e,[this].concat(s))),t.loaded=!1,t.isEnrolled=!1,n=o,_possibleConstructorReturn(t,n)}return _inherits(BootstrapStore,e),BootstrapStore.prototype.dehydrate=function dehydrate(){var e;return(e=_(this)).pick.apply(e,r)},BootstrapStore.prototype.rehydrate=function rehydrate(t){var e;Object.assign(this,(e=_(t)).pick.apply(e,r))},BootstrapStore.prototype.hasLoaded=function hasLoaded(){return this.loaded},BootstrapStore.prototype.getCourseId=function getCourseId(){return this.courseId},BootstrapStore.prototype.getCourseCertificates=function getCourseCertificates(){return this.courseCertificates},BootstrapStore.prototype.isEnrolledMembership=function isEnrolledMembership(){return this.isEnrolled},BootstrapStore}(o),e.storeName="BootstrapStore",e.handlers={LOAD_BOOTSTRAP_DATA:function LOAD_BOOTSTRAP_DATA(e){var t=e.courseId,r=e.courseCertificates,o=e.isEnrolled;this.loaded=!0,this.courseId=t,this.isEnrolled=o,this.courseCertificates=r,this.emitChange()}},t);module.exports=n});
define("bundles/ondemand/bootstrapPromise",["require","exports","module","q","jsuri","js/lib/api","pages/open-course/common/constants"],function(require,exports,module){var r=require("q"),s=require("jsuri"),o=require("js/lib/api"),e=require("pages/open-course/common/constants");module.exports=function(n){var t=new o("/api/courses.v1",{type:"rest"}),u=(new s).addQueryParam("q","slug").addQueryParam("slug",n).addQueryParam("fields","certificates").addQueryParam("showHidden",!0);return r(t.get(u.toString())).then(function(r){if("notFound"===r.errorCode)return null;var s=r.elements[0],o=s.id,t=s.certificates;return e.courseId=o,e.courseSlug=n,{courseId:o,courseCertificates:t}})}});
define("bundles/ondemand/actions/BootstrapActions",["require","exports","module","q","bundles/ondemand/stores/BootstrapStore","bundles/ondemand/bootstrapPromise","pages/open-course/common/promises/membership"],function(require,exports,module){var e=require("q"),o=require("bundles/ondemand/stores/BootstrapStore"),r=require("bundles/ondemand/bootstrapPromise"),s=require("pages/open-course/common/promises/membership");exports.loadBootstrapData=function(t,n){var d=n.userId,u=n.courseSlug;if(t.getStore(o).hasLoaded())return e();return r(u).then(function(o){var e=o.courseId,r=o.courseCertificates;return s(d,e).then(function(s){var o=s.hasEnrolledRole();return t.dispatch("LOAD_BOOTSTRAP_DATA",{courseId:e,courseCertificates:r,isEnrolled:o}),{courseId:e,courseCertificates:r,isEnrolled:o}})})["catch"](function(s){var e=null,r=[],o=!1;return t.dispatch("LOAD_BOOTSTRAP_DATA",{courseId:e,courseCertificates:r,isEnrolled:o}),{courseId:e,isEnrolled:o}})}});
define("bundles/ondemand/components/UnauthorizedRedirectApp",["require","exports","module","react","js/lib/user","underscore","bundles/ondemand/components/CourseNotFound","vendor/cnpm/fluxible.v0-4/addons/connectToStores","js/lib/connectToFluxibleContext","js/lib/waitFor","js/lib/connectToRouter","js/lib/coursera.redirect","bundles/ondemand/actions/BootstrapActions"],function(require,exports,module){function _defaults(e,n){for(var s=Object.getOwnPropertyNames(n),o=0;o<s.length;o++){var t=s[o],r=Object.getOwnPropertyDescriptor(n,t);r&&r.configurable&&void 0===e[t]&&Object.defineProperty(e,t,r)}return e}function _classCallCheck(e,o){if(!(e instanceof o))throw new TypeError("Cannot call a class as a function")}function _possibleConstructorReturn(o,e){if(!o)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?o:e}function _inherits(o,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);o.prototype=Object.create(e&&e.prototype,{constructor:{value:o,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(o,e):_defaults(o,e))}var o,t,e=require("react"),r=require("js/lib/user"),s=require("underscore"),n=s.compose,i=require("bundles/ondemand/components/CourseNotFound"),u=require("vendor/cnpm/fluxible.v0-4/addons/connectToStores"),c=require("js/lib/connectToFluxibleContext"),a=require("js/lib/waitFor"),l=require("js/lib/connectToRouter"),p=require("js/lib/coursera.redirect"),d=require("bundles/ondemand/actions/BootstrapActions"),f=d.loadBootstrapData,b=(t=o=function(o){function UnauthorizedRedirectApp(e,n){_classCallCheck(this,UnauthorizedRedirectApp);var t=_possibleConstructorReturn(this,o.call(this,e,n));return t.state={isAuthorized:e.isEnrolled||r.isSuperuser()},t}return _inherits(UnauthorizedRedirectApp,o),UnauthorizedRedirectApp.prototype.componentDidMount=function componentDidMount(){this.state.isAuthorized||p.setLocation("/learn/"+this.props.courseSlug)},UnauthorizedRedirectApp.prototype.render=function render(){var r=this.state.isAuthorized,o=this.props,t=o.courseId,n=o.courseSlug,s=o.courseCertificates,u=o.children;if(!t)return e.createElement(i,null);if(!r)return null;return e.createElement("div",null,e.cloneElement(u,{courseId:t,courseSlug:n,courseCertificates:s}))},UnauthorizedRedirectApp}(e.Component),o.propTypes={children:e.PropTypes.node,courseId:e.PropTypes.string,courseSlug:e.PropTypes.string,courseCertificates:e.PropTypes.arrayOf(e.PropTypes.string),isEnrolled:e.PropTypes.bool},t);module.exports=n(l(function(e,o){return{courseSlug:e.params.courseSlug}}),u(["BootstrapStore"],function(o){var e=o.BootstrapStore;return{courseId:e.getCourseId(),isEnrolled:e.isEnrolledMembership(),bootstrapDataHasLoaded:e.hasLoaded(),courseCertificates:e.getCourseCertificates()}}),c(function(e,o){var t=o.courseSlug,n=r.get().id;e.executeAction(f,{userId:n,courseSlug:t})}),a(function(e){var o=e.bootstrapDataHasLoaded;return o}))(b)});

(function(c){var d=document,a='appendChild',i='styleSheet',s=d.createElement('style');s.type='text/css';d.getElementsByTagName('head')[0][a](s);s[i]?s[i].cssText=c:s[a](d.createTextNode(c));})
('.collapse{display:none;}.collapse.open{display:block}.collapsing{position:relative;height:0;overflow:hidden}.bt3-clearfix:before,.bt3-clearfix:after{content:\" \";display:table}.bt3-clearfix:after{clear:both}.rc-ProfileImage .c-profile-image{border-radius:100%;}.rc-ProfileImage .c-profile-image img{border-radius:100%}.rc-ProfileImage .c-profile-initials{background-color:#3277b2;color:#fff;text-transform:uppercase;}.rc-ProfileImage .c-profile-initials div{width:100%;height:100%;}.rc-ProfileImage .c-profile-initials div p{margin-bottom:0}.wechat-image{cursor:pointer}.wechat-qrcode-container{background:#fff;border:1px solid #ccc;position:absolute;z-index:100;width:260px;height:130px;font-size:13px;right:10px;top:-120px;margin-top:20px;-webkit-box-shadow:0 3px 7px rgba(0,0,0,0.3);box-shadow:0 3px 7px rgba(0,0,0,0.3)}#wechat-qrcode{display:inline-block;margin:20px 10px;float:left}.wechat-qrcode-message{display:inline-block;width:120px;height:90px;margin:20px 10px;line-height:20px;text-align:left}.wechat-qrcode-close{position:absolute;top:0;right:8px;cursor:pointer}.rc-CoursePageHeader{width:100%;z-index:1}.rc-CourseNotFound .bt3-container{margin-top:20px;margin-bottom:100px}');
