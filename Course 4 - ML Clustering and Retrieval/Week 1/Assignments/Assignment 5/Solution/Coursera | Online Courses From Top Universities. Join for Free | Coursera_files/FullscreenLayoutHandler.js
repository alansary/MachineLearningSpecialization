define("bundles/item/components/FullscreenLayoutHandler",["require","exports","module","underscore","react","js/lib/timing","bundles/phoenix/lib/waitForStores"],function(require,exports,module){var t=Object.assign||function(s){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var t in r)Object.prototype.hasOwnProperty.call(r,t)&&(s[t]=r[t])}return s},_=require("underscore"),e=require("react"),s=require("js/lib/timing"),o=require("bundles/phoenix/lib/waitForStores"),r=e.createClass({displayName:"FullscreenLayoutHandler",propTypes:{courseMaterials:e.PropTypes.object.isRequired,course:e.PropTypes.object.isRequired,courseProgress:e.PropTypes.object.isRequired,children:e.PropTypes.node},contextTypes:{router:e.PropTypes.object.isRequired},componentDidMount:function componentDidMount(){s.setMarkOnce("FullscreenLayoutHandlerMounted",!0)},render:function render(){var s=this.props.courseMaterials,r=s.getItemMetadata(this.context.router.params.item_id);return e.createElement("div",{className:"rc-FullscreenLayoutHandler"},this.props.children&&e.cloneElement(this.props.children,t({},_(this.props).omit("children"),{itemMetadata:r,key:r.getId()})))}});module.exports=o(r,["CourseStore","ProgressStore"],function(e){var r=e.CourseStore,t=e.ProgressStore;return{courseMaterials:r.getMaterials(),course:r.getMetadata(),courseProgress:t.courseProgress}}),module.exports.BaseComp=r});
