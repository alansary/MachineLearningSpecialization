define("bundles/quiz-common/utils/ProctorTimer",["require","exports","module","bundles/ondemand/utils/Timer","bundles/quiz-common/utils/QuizTimerUtils"],function(require,exports,module){"use strict";function _interopRequireDefault(t){return t&&t.__esModule?t:{"default":t}}function _classCallCheck(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(exports,"__esModule",{value:!0}),exports["default"]=void 0;var t=require("bundles/ondemand/utils/Timer"),e=_interopRequireDefault(t),i=require("bundles/quiz-common/utils/QuizTimerUtils"),n=_interopRequireDefault(i),r=function(){function ProctorTimer(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};_classCallCheck(this,ProctorTimer),this.proctorSummary=t.proctorSummary||{},this.timer=new e["default"]({deadline:this.getDeadline(),duration:this.getTimeLimit(),onTick:t.onTick||function(){},onDone:t.onDone||function(){}})}return ProctorTimer.prototype.getAttemptsLeft=function getAttemptsLeft(){return this.proctorSummary.remainingAttempts},ProctorTimer.prototype.getDeadline=function getDeadline(){var t=this.proctorSummary.latestAttempt;if(t&&(t.canContinueToWork||t.hasUnsubmittedWork))return t.deadline;return null},ProctorTimer.prototype.getTimeLimit=function getTimeLimit(){if(this.proctorSummary.nextAttemptConfig&&this.proctorSummary.nextAttemptConfig.timeLimit)return this.proctorSummary.nextAttemptConfig.timeLimit.duration;return null},ProctorTimer.prototype.getTimeWarn=function getTimeWarn(){return n["default"].calcTimeWarn(this.getTimeLimit())},ProctorTimer.prototype.getTimeLeft=function getTimeLeft(){return this.timer.timeLeft},ProctorTimer.prototype.canStart=function canStart(){return this.timer.canStart()},ProctorTimer.prototype.start=function start(){this.timer.start()},ProctorTimer.prototype.stop=function stop(){this.timer.stop()},ProctorTimer}();exports["default"]=r});