/*! Selectionjs 1.3.0 MIT | https://github.com/Simonwep/selection */
!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.Selection=t():e.Selection=t()}(window,(function(){return function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"u",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.u)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.u?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="dist/",o(o.s=1)}([function(e){e.exports=JSON.parse('{"a":"1.3.0"}')},function(e,t,o){"use strict";function n(e,t){var o=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),o.push.apply(o,n)}return o}function r(e){for(var t=1;t<arguments.length;t++){var o=null!=arguments[t]?arguments[t]:{};t%2?n(o,!0).forEach((function(t){c(e,t,o[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(o)):n(o).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(o,t))}))}return e}function c(e,t,o){return t in e?Object.defineProperty(e,t,{value:o,enumerable:!0,configurable:!0,writable:!0}):e[t]=o,e}function l(e,t,o,n,c={}){t instanceof HTMLCollection||t instanceof NodeList?t=Array.from(t):Array.isArray(t)||(t=[t]),Array.isArray(o)||(o=[o]);for(const l of t)for(const t of o)l[e](t,n,r({capture:!1},c));return Array.prototype.slice.call(arguments,1)}o.r(t);const s=l.bind(null,"addEventListener"),i=l.bind(null,"removeEventListener"),u=(e,t="px")=>"number"==typeof e?e+t:e;function a(e,t,o){const n=e&&e.style;if(n)if("object"==typeof t)for(const[e,o]of Object.entries(t))n[e]=u(o);else o&&"string"==typeof t&&(n[t]=u(o))}function f(e,t,o){switch(o||"touch"){case"center":{const o=t.left+t.width/2,n=t.top+t.height/2;return o>=e.left&&o<=e.right&&n>=e.top&&n<=e.bottom}case"cover":return t.left>=e.left&&t.top>=e.top&&t.right<=e.right&&t.bottom<=e.bottom;case"touch":return e.right>=t.left&&e.left<=t.right&&e.bottom>=t.top&&e.top<=t.bottom;default:throw"Unkown intersection mode: ".concat(o)}}function d(e){Array.isArray(e)||(e=[e]);const t=[];for(let o=0,n=e.length;o<n;o++){const n=e[o];"string"==typeof n?t.push(...document.querySelectorAll(n)):n instanceof HTMLElement&&t.push(n)}return t}function p(e){let t=e.path||e.composedPath&&e.composedPath();if(t)return t;let o=e.target;for(t=[o];o=o.parentElement;)t.push(o);return t.push(document,window),t}function m(e,t){const o=e.indexOf(t);~o&&e.splice(o,1)}function v(e){const t=e.touches&&e.touches[0]||e;return{tap:t,x:t.clientX,y:t.clientY,target:t.target}}var b=o(0);const{abs:h,max:y,min:_,round:g,ceil:j}=Math,w=document,x=e=>e.preventDefault();function O(e={}){const t={options:Object.assign({class:"selection-area",mode:"touch",tapMode:"native",startThreshold:10,singleClick:!0,disableTouch:!1,selectables:[],scrollSpeedDivider:10,startareas:["html"],boundaries:["html"],selectionAreaContainer:"body"},e),v:[],h:[],_:[],g:{added:[],removed:[]},j:{beforestart:[],start:[],move:[],stop:[]},O:w.createElement("div"),S:w.createElement("div"),T:!0,A:{x:null,y:null},L(){t.S.appendChild(t.O),t.O.classList.add(t.options.class),a(t.O,{willChange:"top, left, bottom, right, width, height",top:0,left:0,position:"fixed"}),a(t.S,{overflow:"hidden",position:"fixed",transform:"translate3d(0, 0, 0)",pointerEvents:"none",zIndex:1}),t.enable()},M(e){const o="on"===e?s:i;o(w,"mousedown",t.k),t.options.disableTouch||o(w,"touchstart",t.k,{passive:!1})},k(e){const{x:o,y:n,target:r}=v(e),c=r.getBoundingClientRect(),l=d(t.options.startareas);t.C=d(t.options.boundaries),t.H=t.C.find(e=>f(e.getBoundingClientRect(),c));const i=p(e);t.H&&l.find(e=>i.includes(e))&&t.C.find(e=>i.includes(e))&&!1!==t.F("beforestart",e)&&(t.q=o,t.D=n,t.N=0,t.U=0,t.W=!0,t._=[],t.clearSelection(!1),s(w,"selectstart",x),s(w,["touchmove","mousemove"],t.I,{passive:!1}),s(w,["mouseup","touchcancel","touchend"],t.J))},P(e){const{tapMode:o}=t.options,n=v(e);let r=null;if("native"===o)r=n.target;else{if("touch"!==o)throw"Unkown tapMode option: ".concat(o);{t.resolveSelectables();const{x:e,y:o}=n;r=t.h.find(t=>{const{right:n,left:r,top:c,bottom:l}=t.getBoundingClientRect();return e<n&&e>r&&o<l&&o>c})}}if(!r)return!1;for(t.resolveSelectables();!t.h.includes(r);){if(!r.parentElement)return;r=r.parentElement}t.F("start",e);const c=t.v;if(e.shiftKey&&c.length){const o=c[c.length-1],[n,l]=4&o.compareDocumentPosition(r)?[r,o]:[o,r],s=[...t.h.filter(e=>4&e.compareDocumentPosition(n)&&2&e.compareDocumentPosition(l)),r];t.select(s),t.F("move",e),t.F("stop",e)}else t.v.includes(r)?t.removeFromSelection(r):t.select(r),t.F("move",e),t.F("stop",e)},I(e){const{x:o,y:n}=v(e),{startThreshold:r}=t.options,{q:c,D:l}=t,u=typeof r;if("number"===u&&h(o+n-(c+l))>=r||"object"===u&&h(o-c)>=r.x||h(n-l)>=r.y){i(w,["mousemove","touchmove"],t.I,{passive:!1}),s(w,["mousemove","touchmove"],t.B,{passive:!1}),a(t.O,"display","block"),d(t.options.selectionAreaContainer)[0].appendChild(t.S),t.resolveSelectables(),t.W=!1;const o=t.G=t.H.getBoundingClientRect();g(t.H.scrollHeight)!==g(o.height)||g(t.H.scrollWidth)!==g(o.width)?(t.T=!0,s(window,"wheel",t.K,{passive:!1}),t.h=t.h.filter(e=>t.H.contains(e)),a(t.S,{top:o.top,left:o.left,width:o.width,height:o.height}),a(t.O,{marginTop:-o.top,marginLeft:-o.left})):(t.T=!1,a(t.S,{top:0,left:0,width:"100%",height:"100%"}),a(t.O,{marginTop:0,marginLeft:0})),t.B(e),t.F("start",e)}e.preventDefault()},B(e){const{x:o,y:n}=v(e),r=t.H;let c=t.A;t.N=o,t.U=n,!t.T||null===c.y&&null===c.x?(t.R(),t.V(),t.F("move",e)):requestAnimationFrame((function o(){if(null===(c=t.A).y&&null===c.x)return;const{scrollTop:n,scrollLeft:l}=r;null!==c.y&&(r.scrollTop+=j(c.y/t.options.scrollSpeedDivider),t.D-=r.scrollTop-n),null!==c.x&&(r.scrollLeft+=j(c.x/t.options.scrollSpeedDivider),t.q-=r.scrollLeft-l),t.R(),t.V(),t.F("move",e),requestAnimationFrame(o)})),e.preventDefault()},K(e){const{scrollSpeedDivider:o}=t.options;t.A.y+=o*(-1*e.wheelDeltaY),t.A.x+=o*(-1*e.wheelDeltaX),t.B(e),e.preventDefault()},R(){const{scrollTop:e,scrollHeight:o,clientHeight:n,scrollLeft:r,scrollWidth:c,clientWidth:l}=t.H,s=t.G,i=t.A;let u=t.N,a=t.U;u<s.left?(i.x=r?-h(s.left-u):null,u=s.left):u>s.left+s.width?(i.x=c-r-l?h(s.left+s.width-u):null,u=s.left+s.width):i.x=null,a<s.top?(i.y=e?-h(s.top-a):null,a=s.top):a>s.top+s.height?(i.y=o-e-n?h(s.top+s.height-a):null,a=s.top+s.height):i.y=null;const f=_(t.q,u),d=_(t.D,a),p=y(t.q,u),m=y(t.D,a);Object.assign(t.O.style,{top:"".concat(d,"px"),left:"".concat(f,"px"),width:"".concat(p-f,"px"),height:"".concat(m-d,"px")})},J(e,o){i(w,["mousemove","touchmove"],t.I),i(w,["touchmove","mousemove"],t.B),i(w,["mouseup","touchcancel","touchend"],t.J),e&&t.W&&t.options.singleClick?t.P(e):t.W||o||(t.V(),t.F("stop",e)),t.A={x:null,y:null},i(window,"wheel",t.K),t.S.remove(),i(w,"selectstart",x),a(t.O,"display","none")},V(){const{_:e,h:o,O:n,options:r}=t,{mode:c}=r,l=n.getBoundingClientRect(),s=[],i=[],u=[];for(let t,n=0,r=o.length;t=o[n],n<r;n++)f(l,t.getBoundingClientRect(),c)&&(e.includes(t)||i.push(t),s.push(t));for(let t,o=0,n=e.length;t=e[o],o<n;o++)s.includes(t)||u.push(t);t._=s,t.g={added:i,removed:u}},F(e,o){let n=!0;for(const r of t.j[e])n=r.call(t,{inst:t,area:t.O,selected:t._.concat(t.v),changed:t.g,oe:o})&&n;return n},on:(e,o)=>(t.j[e].push(o),t),off(e,o){const n=t.j[e];if(n){const e=n.indexOf(o);~e&&n.splice(e,1)}return t},resolveSelectables(){t.h=d(t.options.selectables)},keepSelection(){const{_:e,v:o}=t;for(let t,n=0,r=e.length;t=e[n],n<r;n++)o.includes(t)||o.push(t)},clearSelection(e=!0){e&&(t.v=[]),t._=[],t.g.added=[],t.g.removed=[]},removeFromSelection(e){t.g.removed.push(e),m(t.v,e),m(t._,e)},getSelection:()=>t.v,cancel(e=!1){t.J(null,!e)},option(e,o){const{options:n}=t;return void 0===o?n[e]:n[e]=o},disable(){t.M("off")},destroy(){t.disable(),t.S.remove()},enable(){t.M("on")},select(e){const{_:o,v:n}=t,r=d(e).filter(e=>!o.includes(e)&&!n.includes(e));return t._.push(...r),t.g.added.push(...r),r}};return t.L(),t}O.utils={on:s,off:i,css:a,intersects:f,selectAll:d,eventPath:p,removeElement:m},O.create=e=>O(e),O.version=b.a;t.default=O}]).default}));
//# sourceMappingURL=selection.min.js.map