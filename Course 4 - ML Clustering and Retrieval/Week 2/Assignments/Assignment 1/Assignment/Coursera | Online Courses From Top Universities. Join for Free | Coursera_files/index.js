define("vendor/cnpm/object-assign.v3/index",["require","exports","module"],function(require,exports,module){"use strict";function ToObject(e){if(null==e)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(e)}function ownEnumerableKeys(t){var r=Object.getOwnPropertyNames(t);return Object.getOwnPropertySymbols&&(r=r.concat(Object.getOwnPropertySymbols(t))),r.filter(function(r){return e.call(t,r)})}var e=Object.prototype.propertyIsEnumerable;module.exports=Object.assign||function(c,u){for(var r,e,o=ToObject(c),n=1;n<arguments.length;n++){r=arguments[n],e=ownEnumerableKeys(Object(r));for(var t=0;t<e.length;t++)o[e[t]]=r[e[t]]}return o}});