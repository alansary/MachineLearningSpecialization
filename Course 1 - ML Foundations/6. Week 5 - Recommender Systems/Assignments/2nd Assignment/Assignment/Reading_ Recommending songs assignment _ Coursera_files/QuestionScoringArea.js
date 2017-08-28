define("bundles/quiz-question-types/components/QuestionScoringArea",["require","exports","module","react","js/lib/coursera.react-intl","i18n!nls/quiz-question-types"],function(require,exports,module){"use strict";var e=require("react"),t=require("js/lib/coursera.react-intl"),c=t.FormattedMessage,r=require("i18n!nls/quiz-question-types"),n=function FeedbackIcon(t){var c=t.isCorrect,n=t.score;if(c)return e.createElement("i",{className:"c-feedback-icon cif-check"},e.createElement("span",{className:"screenreader-only"},r("Correct")));if(0===n)return e.createElement("i",{className:"c-feedback-icon cif-times"},e.createElement("span",{className:"screenreader-only"},r("Incorrect")));return null},s=function QuestionScoringArea(i){var t=i.question,s=t.weightedScoring,a=s.score,o=s.maxScore,l=t.isCorrect();return e.createElement("div",{className:"rc-QuestionScoringArea feedback-container align-items-vertical-center vertical-box"},e.createElement(n,{isCorrect:l,score:a}),e.createElement("div",{className:"c-points-box caption-text bgcolor-black-g5"},e.createElement(c,{score:a.toString(),maxScore:o.toString(),message:r("{score} / {maxScore} points")})))};module.exports=s});