module.exports=function(e){var r={};function t(n){if(r[n])return r[n].exports;var o=r[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,t),o.l=!0,o.exports}return t.m=e,t.c=r,t.d=function(e,r,n){t.o(e,r)||Object.defineProperty(e,r,{enumerable:!0,get:n})},t.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},t.t=function(e,r){if(1&r&&(e=t(e)),8&r)return e;if(4&r&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(t.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&r&&"string"!=typeof e)for(var o in e)t.d(n,o,function(r){return e[r]}.bind(null,o));return n},t.n=function(e){var r=e&&e.__esModule?function(){return e.default}:function(){return e};return t.d(r,"a",r),r},t.o=function(e,r){return Object.prototype.hasOwnProperty.call(e,r)},t.p="",t(t.s=1)}([function(e,r){e.exports=require("react")},function(e,r,t){"use strict";t.r(r);var n=t(0),o=t.n(n);function u(){return(u=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n])}return e}).apply(this,arguments)}function i(e,r,t,n,o,u,i){try{var a=e[u](i),c=a.value}catch(e){return void t(e)}a.done?r(c):Promise.resolve(c).then(n,o)}function a(e,r){return function(e){if(Array.isArray(e))return e}(e)||function(e,r){var t=[],n=!0,o=!1,u=void 0;try{for(var i,a=e[Symbol.iterator]();!(n=(i=a.next()).done)&&(t.push(i.value),!r||t.length!==r);n=!0);}catch(e){o=!0,u=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw u}}return t}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},u=Object.keys(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)t=u[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}r.default=Object(n.memo)(Object(n.forwardRef)(function(e,r){var t=e.onChange,l=void 0===t?function(){return null}:t,f=e.onFocus,s=void 0===f?function(){return null}:f,p=e.type,v=void 0===p?"text":p,y=e.errMsg,d=void 0===y?"":y,b=e.errMesgStyle,g=void 0===b?{color:"red"}:b,m=c(e,["onChange","onFocus","type","errMsg","errMesgStyle"]),O=a(Object(n.useState)(""),2),h=O[0],j=O[1];Object(n.useImperativeHandle)(r,function(){return{clearInput:function(){x()},getCurrentValue:function(){w()}}});var x=function(){return j("")},w=function(){return h},S=(P=regeneratorRuntime.mark(function e(r){var t;return regeneratorRuntime.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:t=r.target.value,j(t),l(t);case 3:case"end":return e.stop()}},e)}),M=function(){var e=this,r=arguments;return new Promise(function(t,n){var o=P.apply(e,r);function u(e){i(o,t,n,u,a,"next",e)}function a(e){i(o,t,n,u,a,"throw",e)}u(void 0)})},function(e){return M.apply(this,arguments)});var P,M;return o.a.createElement(o.a.Fragment,null,o.a.createElement("input",u({type:v,value:h,onChange:S,onFocus:s},m)),""!==d&&o.a.createElement("p",{style:g},d))}))}]);