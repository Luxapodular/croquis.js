(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{"+Ri0":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("tY8R");function o(t,e,r){return{getConfig:function(n){return n&&n!==t?r.targetDrawingContext.getConfig(n):e},getState:function(e){return e&&e!==t?r.targetDrawingContext.getState(e):r},move:function(t){var o=e.stringLength,i=r.follower.x,a=r.follower.y,s=t.x-i,u=t.y-a,c=Math.sqrt(s*s+u*u);if(n.copyStylusState(r.follower,t),c>o){var l=Math.min((c-o)/o,1);r.follower.x=i+s*l,r.follower.y=a+u*l}else r.follower.x=i,r.follower.y=a;r.targetDrawingContext.move(r.follower)},up:r.targetDrawingContext.up}}e.defaultPulledStringConfig={stringLength:50},e.getStroke=function(t){var e={resume:function(t,r){return o(e,t,r)},down:function(r,i){var a={targetDrawingContext:t.down(r.targetConfig,i),follower:n.cloneStylusState(i)};return o(e,r,a)}};return e},e.getGuidePathData=function(t,e,r,n,o){var i=t-r,a=e-n,s=Math.sqrt(i*i+a*a);return s>=o?"M"+r+","+n+"L"+t+","+e:"M"+r+","+n+"Q"+(r+.5*(t-r))+","+(n+.5*(e-n)+(o-s))+" "+t+","+e}},"1P4O":function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("tY8R"),o=r("tY8R");function i(t,e,r){return{getConfig:function(n){return n&&n!==t?r.targetDrawingContext.getConfig(n):e},getState:function(e){return e&&e!==t?r.targetDrawingContext.getState(e):r},move:function(t){var e=r.stylusStates[0];o.copyStylusState(e,t)},up:function(t){var n=r.stylusStates[0],i=r.stylusStates[r.stylusStates.length-1];if(o.copyStylusState(n,t),e.catchUp){var a=void 0,s=void 0;do{r.update(),a=i.x-n.x|0,s=i.y-n.y|0}while(a||s)}return r.targetDrawingContext.up(i)}}}e.defaultSnakeConfig={tailCount:3,weight:.5,catchUp:!0},e.getStroke=function(t){var e={resume:function(t,r){var o=t.tailCount+1-r.stylusStates.length;if(o>0){var a=r.stylusStates[r.stylusStates.length-1];r.stylusStates=r.stylusStates.concat(n.createStylusStates(o,a))}else o<0&&(r.stylusStates.length-=o);return i(e,t,r)},down:function(r,a){var s=n.createStylusStates(r.tailCount+1,a),u=s[s.length-1],c={targetDrawingContext:t.down(r.targetConfig,a),stylusStates:s,update:function(){for(var t=1-Math.min(.95,Math.max(0,r.weight)),e=1;e<s.length;++e){var n=s[e],i=s[e-1];o.interpolateStylusState(n,i,t)}c.targetDrawingContext.move(u)}};return i(e,r,c)}};return e}},Ek2b:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=r("tY8R"),o=r("qduK");function i(t,e,r){return{getConfig:function(r){if(!r||r===t)return e;throw void 0},getState:function(e){if(!e||e===t)return r;throw void 0},move:function(t){var o=a(r.prev,e.size),i=a(t,e.size);s(e.ctx,o,i),n.copyStylusState(r.prev,t)},up:function(t){var o=a(r.prev,e.size),i=a(t,e.size);return s(e.ctx,o,i),n.copyStylusState(r.prev,t),{}}}}function a(t,e){return{x:t.x,y:t.y,r:t.pressure*e*.5}}function s(t,e,r){var n=e.r>r.r,o=n?e:r,i=n?r:e,a=Math.sqrt(Math.pow(r.x-e.x,2)+Math.pow(r.y-e.y,2));if(o.r>i.r+a)return u(t,o);o.r===i.r?function(t,e,r){u(t,e),u(t,r);var n=Math.atan2(r.y-e.y,r.x-e.x),o=n-c,i=n+c,a=Math.cos(o)*r.r,s=Math.sin(o)*r.r,l=Math.cos(i)*r.r,f=Math.sin(i)*r.r;t.beginPath(),t.moveTo(r.x+a,r.y+s),t.lineTo(e.x+a,e.y+s),t.lineTo(e.x+l,e.y+f),t.lineTo(r.x+l,r.y+f),t.closePath(),t.fill()}(t,o,i):function(t,e,r){u(t,e),u(t,r);var n=r.x-e.x||1e-9,o=r.y-e.y,i=e.r-r.r,a=i*i,s=n*n,c=n*n*n,l=o*o,f=(0===n?e.r:(o*Math.sqrt(a*s*(-a+s+l))+a*s)/(c+n*l))+e.x,g=(a*o-Math.sqrt(a*s*(-a+s+l)))/(s+l)+e.y,p=(0===n?-e.r:(-o*Math.sqrt(a*s*(-a+s+l))+a*s)/(c+n*l))+e.x,y=(a*o+Math.sqrt(a*s*(-a+s+l)))/(s+l)+e.y,h=Math.atan2(g-e.y,f-e.x),d=Math.atan2(y-e.y,p-e.x),v=Math.cos(h)*r.r,w=Math.sin(h)*r.r,b=Math.cos(d)*r.r,O=Math.sin(d)*r.r;t.beginPath(),t.moveTo(r.x+v,r.y+w),t.lineTo(f+v,g+w),t.lineTo(p+b,y+O),t.lineTo(r.x+b,r.y+O),t.closePath(),t.fill()}(t,o,i)}function u(t,e){t.beginPath(),t.moveTo(e.x+e.r,e.y),t.arc(e.x,e.y,e.r,0,2*Math.PI),t.closePath(),t.fill()}e.defaultBrushConfig=Object.freeze({ctx:o.dummyCanvasContext,color:"#000",size:10}),e.stroke={resume:function(t,r){return i(e.stroke,t,r)},down:function(t,r){var o={prev:n.cloneStylusState(r)},s=i(e.stroke,t,o);return r.pressure<=0?s:(u(t.ctx,a(r,t.size)),s)}};var c=Math.PI/2},HbGN:function(t,e,r){"use strict";function n(t,e){if(null==t)return{};var r,n,o=function(t,e){if(null==t)return{};var r,n,o={},i=Object.keys(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||(o[r]=t[r]);return o}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(n=0;n<i.length;n++)r=i[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(o[r]=t[r])}return o}r.d(e,"a",(function(){return n}))},Km8e:function(t,e,r){"use strict";var n=Object.assign.bind(Object);t.exports=n,t.exports.default=t.exports},Mp5o:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("ERkP");function o(){var t=Object(n.useState)(0)[1],e={cnt:0,fn:function(){return t(++e.cnt)}};return Object(n.useRef)(e).current.fn}},QeBL:function(t,e,r){"use strict";r.r(e);var n=r("zjfJ"),o=r("ERkP"),i=r.n(o),a=r("Ek2b"),s=r("1P4O"),u=r("+Ri0"),c=r("tY8R"),l=r("hO0T"),f=r("oamW"),g=r("l9U3"),p=r("RZvK"),y=r("Mp5o"),h=i.a.createElement;function d(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function v(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?d(Object(r),!0).forEach((function(e){Object(n.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var w=Object(s.getStroke)(a.stroke),b=Object(u.getStroke)(a.stroke);e.default=function(){var t=Object(o.useRef)(null);Object(g.a)(t);var e=Object(p.a)(),r=Object(o.useState)(),n=r[0],l=r[1],f=Object(o.useState)("pulled string"),y=f[0];f[1];Object(o.useEffect)((function(){return l(void 0)}),[y]),Object(o.useEffect)((function(){if(null===n||void 0===n?void 0:n.getState().update){var t=setInterval(n.getState().update,10);return function(){return clearInterval(t)}}}),[n]);return Object(o.useEffect)((function(){if(n){var t=function(t){var e=Object(c.getStylusState)(t);n.move(e)},e=function(t){var e=Object(c.getStylusState)(t);n.up(e),l(void 0)};return window.addEventListener("pointermove",t),window.addEventListener("pointerup",e),function(){window.removeEventListener("pointermove",t),window.removeEventListener("pointerup",e)}}}),[n]),h(i.a.Fragment,null,h("canvas",{ref:t,onPointerDown:function(e){var r=t.current.getContext("2d"),n=Object(c.getStylusState)(e.nativeEvent),o=v({},a.defaultBrushConfig,{ctx:r,size:20}),i="snake"===y?w.down(v({},s.defaultSnakeConfig,{targetConfig:o}),n):b.down(v({},u.defaultPulledStringConfig,{targetConfig:o}),n);l(i)},width:e.width,height:e.height,style:{position:"absolute",top:0,left:0,touchAction:"none"}}),h(S,{type:y,drawingPhase:n}))};var O=Object(c.createStylusState)(),S=function(t){var e=Object(o.useState)(O),r=e[0],n=e[1],i=Object(y.a)();if(Object(o.useEffect)((function(){var t=function(t){return n(Object(c.getStylusState)(t))},e=setInterval(i,10);return window.addEventListener("pointermove",t),function(){clearInterval(e),window.removeEventListener("pointermove",t)}}),[]),!t.drawingPhase)return null;switch(t.type){case"snake":return h(l.a,{brushSize:t.drawingPhase.getConfig(a.stroke).size,stylusStates:t.drawingPhase.getState().stylusStates,style:{position:"absolute",top:0,left:0}});case"pulled string":return h(f.a,{brushSize:t.drawingPhase.getConfig(a.stroke).size,stylusState:r,follower:t.drawingPhase.getState().follower,stringLength:t.drawingPhase.getConfig().stringLength,style:{position:"absolute",top:0,left:0}})}}},RZvK:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("ERkP");function o(){var t=Object(n.useState)({width:0,height:0}),e=t[0],r=t[1];return Object(n.useEffect)((function(){var t=function(){return r({width:window.innerWidth,height:window.innerHeight})};t(),window.addEventListener("resize",t)}),[]),e}},cxan:function(t,e,r){"use strict";function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t}).apply(this,arguments)}r.d(e,"a",(function(){return n}))},hO0T:function(t,e,r){"use strict";var n=r("cxan"),o=r("zjfJ"),i=r("HbGN"),a=r("ERkP"),s=r.n(a).a.createElement;function u(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?u(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.brushSize,r=t.stylusStates,o=t.style,a=Object(i.a)(t,["brushSize","stylusStates","style"]),u=r.map((function(t){return t.x+","+t.y})).join(" ");return s("svg",Object(n.a)({},a,{style:c({},o,{overflow:"visible",pointerEvents:"none",userSelect:"none"})}),s("polyline",{points:u,fill:"none",stroke:"white",strokeWidth:8,strokeLinecap:"round"}),r.map((function(t,r){var n=t.x,o=t.y,i=t.pressure;return s("circle",{key:r,r:e*i*.5,cx:n,cy:o,fill:"none",stroke:"white",strokeWidth:8})})),s("polyline",{points:u,fill:"none",stroke:"red",strokeWidth:4,strokeLinecap:"round"}),r.map((function(t,r){var n=t.x,o=t.y,i=t.pressure;return s("circle",{key:r,r:e*i*.5,cx:n,cy:o,fill:"none",stroke:"red",strokeWidth:4})})))}},l9U3:function(t,e,r){"use strict";r.d(e,"a",(function(){return o}));var n=r("ERkP");function o(t){Object(n.useEffect)((function(){var e=setInterval((function(){var e=t.current;if(e){var r=e.getContext("2d");r.save(),r.globalCompositeOperation="destination-out",r.fillStyle="rgba(0, 0, 0, 0.05)",r.fillRect(0,0,e.width,e.height),r.restore()}}),50);return function(){return clearInterval(e)}}),[])}},oamW:function(t,e,r){"use strict";var n=r("cxan"),o=r("zjfJ"),i=r("HbGN"),a=r("ERkP"),s=r.n(a),u=r("+Ri0"),c=s.a.createElement;function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function f(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){Object(o.a)(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}e.a=function(t){var e=t.brushSize,r=t.stylusState,o=t.follower,a=t.stringLength,s=t.style,l=Object(i.a)(t,["brushSize","stylusState","follower","stringLength","style"]),g=Object(u.getGuidePathData)(r.x,r.y,o.x,o.y,a);return c("svg",Object(n.a)({},l,{style:f({},s,{overflow:"visible",pointerEvents:"none",userSelect:"none"})}),c("path",{d:g,fill:"none",stroke:"white",strokeWidth:8,strokeLinecap:"round"}),c("circle",{r:e*r.pressure*.5,cx:r.x,cy:r.y,fill:"none",stroke:"white",strokeWidth:8}),c("path",{d:g,fill:"none",stroke:"red",strokeWidth:4,strokeLinecap:"round"}),c("circle",{r:e*r.pressure*.5,cx:r.x,cy:r.y,fill:"none",stroke:"red",strokeWidth:4}),c("circle",{r:a,cx:o.x,cy:o.y,fill:"none",stroke:"red",strokeWidth:1}))}},qduK:function(t,e,r){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(){};e.dummyCanvasContext={canvas:{},direction:"ltr",fillStyle:"#000000",filter:"none",font:"10px sans-serif",globalAlpha:1,globalCompositeOperation:"source-over",imageSmoothingEnabled:!0,imageSmoothingQuality:"low",lineCap:"butt",lineDashOffset:0,lineJoin:"miter",lineWidth:1,miterLimit:10,shadowBlur:0,shadowColor:"rgba(0, 0, 0, 0)",shadowOffsetX:0,shadowOffsetY:0,strokeStyle:"#000000",textAlign:"start",textBaseline:"alphabetic",save:n,restore:n,scale:n,rotate:n,translate:n,transform:n,setTransform:n,getTransform:function(){return new DOMMatrix},resetTransform:n,createLinearGradient:function(){return{addColorStop:n}},createRadialGradient:function(){return{addColorStop:n}},createPattern:function(){return null},clearRect:n,fillRect:n,strokeRect:n,beginPath:n,fill:n,stroke:n,drawFocusIfNeeded:n,scrollPathIntoView:n,clip:n,isPointInPath:function(){return!1},isPointInStroke:function(){return!1},fillText:n,strokeText:n,measureText:function(){return{actualBoundingBoxAscent:0,actualBoundingBoxDescent:0,actualBoundingBoxLeft:0,actualBoundingBoxRight:0,alphabeticBaseline:0,emHeightAscent:0,emHeightDescent:0,fontBoundingBoxAscent:0,fontBoundingBoxDescent:0,hangingBaseline:0,ideographicBaseline:0,width:0}},drawImage:n,getImageData:function(){return new ImageData(1,1)},putImageData:n,createImageData:function(){return new ImageData(1,1)},setLineDash:n,getLineDash:function(){return[]},closePath:n,moveTo:n,lineTo:n,quadraticCurveTo:n,bezierCurveTo:n,arcTo:n,rect:n,arc:n,ellipse:n}},tY8R:function(t,e,r){"use strict";var n=this&&this.__assign||function(){return(n=Object.assign||function(t){for(var e,r=1,n=arguments.length;r<n;r++)for(var o in e=arguments[r])Object.prototype.hasOwnProperty.call(e,o)&&(t[o]=e[o]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var o=function(t){return t};function i(){return{x:0,y:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0}}e.getStylusState=function(t,e){return void 0===e&&(e=o),n(n({},e({x:t.x,y:t.y})),{pressure:"mouse"===t.pointerType?1:t.pressure,tangentialPressure:t.tangentialPressure,tiltX:t.tiltX,tiltY:t.tiltY,twist:t.twist})},e.createStylusState=i;var a={x:0,y:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0};function s(t){return{x:t.x,y:t.y,pressure:t.pressure,tangentialPressure:t.tangentialPressure,tiltX:t.tiltX,tiltY:t.tiltY,twist:t.twist}}function u(t,e,r){return t+(e-t)*r}e.createStylusStates=function(t,e){return void 0===e&&(e=a),Array.from({length:t},(function(){return s(e)}))},e.cloneStylusState=s,e.copyStylusState=function(t,e){t.x=e.x,t.y=e.y,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist},e.interpolateStylusState=function(t,e,r){t.x=u(t.x,e.x,r),t.y=u(t.y,e.y,r),t.pressure=u(t.pressure,e.pressure,r),t.tangentialPressure=u(t.tangentialPressure,e.tangentialPressure,r),t.tiltX=u(t.tiltX,e.tiltX,r),t.tiltY=u(t.tiltY,e.tiltY,r),t.twist=function(t,e,r){return t+(((e-t)%360+540)%360-180)*r%360}(t.twist,e.twist,r)}},yaYD:function(t,e,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return r("QeBL")}])},zjfJ:function(t,e,r){"use strict";function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}r.d(e,"a",(function(){return n}))}},[["yaYD",0,1]]]);