define("pages/open-course/assessment/clients/naptimeAssessmentClient",["require","exports","module","q","underscore","js/lib/path","js/lib/stringKeyTuple"],function(require,exports,module){"use strict";var r=require("q"),_=require("underscore"),i=require("js/lib/path"),t=require("js/lib/stringKeyTuple"),s="actions",n="onDemandExamSessions.v1",a="onDemandExamSummaries.v1",e=function NaptimeAssessmentClient(e,t){this.itemMetadata=e,this.naptimeItemClient=t};e.prototype.callAction=function(e,a,r,o){var u=this.itemMetadata.get("course").get("id"),l=this.itemMetadata.getId(),m=t.tupleToStringKey([u,l,e]),d="?includes=gradingAttempts",g=i.join(n,m,s)+d;return this.naptimeItemClient.create(g,{name:a,argument:r||[],verifiableId:o}).then(function(e){var t=e.body.linked["gradingAttempts.v1"];return{result:e.body.elements[0].result,gradingAttempt:t&&t[0]}})},e.prototype.getOrCreateSession=function(){return this.naptimeItemClient.create(n,{courseId:this.itemMetadata.get("course").get("id"),itemId:this.itemMetadata.getId()}).then(function(e){var i=e.createdId;return t.stringKeyToTuple(i)[2]})},e.prototype.getEvaluations=function(){var e=this.itemMetadata.get("course").get("id"),n=this.itemMetadata.getId(),s=t.tupleToStringKey([e,n]),r="?fields=lockingConfigurationSummary",o=i.join(a,s)+r;return this.naptimeItemClient.get(o).then(function(i){var e=i.elements[0],t=e.lockingConfigurationSummary;return t?Object.assign(e,t):(delete e.nextPossibleSessionCreationTime,delete e.locksIfSubmittedBefore,delete e.allowedSubmissionsInterval,delete e.allowedSubmissionsPerInterval),e})},module.exports=e});