define("bundles/quiz-common/models/GradingAttempt",["require","exports","module","bundles/phoenix/models/evaluation"],function(require,exports,module){"use strict";function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}var t=require("bundles/phoenix/models/evaluation"),e=function GradingAttempt(e){_classCallCheck(this,GradingAttempt),this.id=e.id,this.attemptId=e.attemptId,this.courseId=e.courseId,this.branchId=e.branchId,this.itemId=e.itemId,this.userId=e.userId,this.attemptState=e.attemptState,this.evaluation=new t(e.evaluation)};module.exports=e});