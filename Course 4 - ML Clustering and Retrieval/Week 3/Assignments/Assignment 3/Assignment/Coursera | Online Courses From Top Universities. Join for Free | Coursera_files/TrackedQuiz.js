define("bundles/quiz/components/TrackedQuiz",["require","exports","module","js/app/retracked","bundles/quiz/components/Quiz"],function(require,exports,module){"use strict";var e=require("js/app/retracked"),t=require("bundles/quiz/components/Quiz");module.exports=e.createTrackedContainer(function(t,n){var e=t.itemMetadata;return{namespace:"open_course.item_page.quiz",include:{open_course_slug:e.get("course.slug"),module_id:e.get("lesson.module.id"),module_name:e.get("lesson.module.name"),lesson_id:e.get("lesson.id"),lesson_name:e.get("lesson.name"),item_id:e.get("id"),item_name:e.get("name"),item_type:e.getTypeName()},events:{stay:'click [data-js~="stay-button"]',next:{delegate:'click [data-js~="next-button"]'},get_certified_upsell:'click [data-js~="get-certified-upsell"]'}}})(t)});