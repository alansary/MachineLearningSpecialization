define("js/app/origamiSingleton",["require","exports","module","backbone","js/lib/backbone.origami","js/lib/ReactRouterAdapter","bundles/page/lib/eventing"],function(require,exports,module){"use strict";var Backbone=require("backbone"),o=require("js/lib/backbone.origami"),a=require("js/lib/ReactRouterAdapter"),r=require("bundles/page/lib/eventing"),n=r.recordPageView,i=r.recordDeprecatedUsage,e=new o("[data-js=origami]");e.router.on("route",function(){n()}),e.enableRR=function(){var r=e.router;e.router=a,e.router.on("routerWillLeave",function(e){r.unsavedWarningModal(e)}),Backbone.history={}},e.on("deprecatedUsage",i),module.exports=e});