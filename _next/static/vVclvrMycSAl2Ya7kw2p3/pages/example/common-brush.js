(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"9tMu":function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=n("tY8R"),a=Math.PI,o=a+a,i=.5*a,u=a/180,s=Math.min,l=Math.max,c=Math.abs,f=Math.sin,p=Math.cos,d=Math.sqrt,g=Math.atan2,b=function(){},y={restore:b,rotate:b,save:b,translate:b,globalAlpha:1};function h(t,e){return t*e}function v(t){return t}function m(t,e,n){if(!(n.scale<=0)){var r=t.size*n.scale,a=h(r,t.aspectRatio),o=r,u=t.angleSpread&&t.angleSpread*(t.angleRandom()-.5),d=n.angle+(t.rotateToTangent?t.angle+e.tangent:t.angle)+u,g=t.normalSpread&&t.normalSpread*r*(t.normalRandom()-.5),b=t.tangentSpread&&t.tangentSpread*r*(t.tangentRandom()-.5),y=g||b,v=e.tangent+i,m=y&&p(v)*g+p(e.tangent)*b,S=y&&f(v)*g+f(e.tangent)*b,w=n.x+m,x=n.y+S,O=t.ctx;O.save(),O.translate(w,x),O.rotate(d),O.translate(-.5*a,-.5*o),O.globalAlpha=n.alpha,t.draw(a,o),O.restore();var j=e.boundingRect,P=d?c(o*f(d))+c(a*p(d)):a,R=d?c(a*f(d))+c(o*p(d)):o,C=w-.5*P,M=x-.5*R,_=s(j.x,C),k=s(j.y,M),T=l(j.x+j.w,C+P),E=l(j.y+j.h,M+R);e.boundingRect.x=_,e.boundingRect.y=k,e.boundingRect.w=T-_,e.boundingRect.h=E-k}}function S(t,e,n){return{getConfig:function(n){if(!n||n===t)return e;throw void 0},getState:function(e){if(!e||e===t)return n;throw void 0},move:function(t){try{var a=t.x-n.prev.x,o=t.y-n.prev.y;n.delta+=d(a*a+o*o);var i=n.prev.pressure,s=t.pressure,c=n.lastStamp,b=l(e.size*e.spacing*(.5*(i+s)),.5),y=t.x-c.x,h=t.y-c.y;if(n.tangent=g(h,y),n.reserved&&0!==y&&0!==h&&(m(e,n,n.lastStamp),n.reserved=!1),n.delta<b)return;if(c.angle=t.twist*u,c.scale=t.pressure,d(y*y+h*h)<b)return n.delta-=b,c.x=t.x,c.y=t.y,void m(e,n,c);for(var v=(s-i)*(b/n.delta),S=p(n.tangent),w=f(n.tangent);n.delta>=b;)c.x+=S*b,c.y+=w*b,c.scale+=v,n.delta-=b,m(e,n,c)}finally{r.copyStylusState(n.prev,t)}},up:function(t){var r=n.lastStamp;return n.tangent=g(t.y-r.y,t.x-r.x),n.reserved&&(m(e,n,n.lastStamp),n.reserved=!1),{boundingRect:n.boundingRect}}}}e.defaultBrushConfig=Object.freeze({ctx:y,draw:b,flow:1,size:10,aspectRatio:1,spacing:.1,angle:0,rotateToTangent:!1,angleRandom:Math.random,angleSpread:0,normalRandom:Math.random,normalSpread:0,tangentRandom:Math.random,tangentSpread:0}),e.getDrawCircleFn=function(t,e){return function(n,r){var a=.5*n,i=.5*r;t.save(),t.fillStyle=e,t.beginPath(),t.arc(a,i,a,0,o),t.closePath(),t.fill(),t.restore()}},e.getBrushWidth=h,e.getBrushHeight=v,e.stamp=m,e.stroke={resume:function(t,n){return S(e.stroke,t,n)},down:function(t,n){var a={tangent:0,delta:0,lastStamp:{x:n.x,y:n.y,scale:n.pressure,angle:n.twist*u,alpha:t.flow},reserved:!1,boundingRect:{x:0,y:0,w:0,h:0},prev:r.cloneStylusState(n)},o=S(e.stroke,t,a);return n.pressure<=0?o:(t.rotateToTangent||t.normalSpread>0||t.tangentSpread>0?a.reserved=!0:m(t,a,a.lastStamp),o)}}},EeqC:function(t,e,n){"use strict";var r=this&&this.__generator||function(t,e){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:u(0),throw:u(1),return:u(2)},"function"===typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function u(o){return function(u){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue}o=e.call(t,i)}catch(u){o=[6,u],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,u])}}};function a(t){void 0===t&&(t=0);var e,n,r,a,o=16807,i=2147483647,u=127773,s=0|t;return s<=0&&(s=1),(s=(o*(s-((a=s/u|0)*u|0))|0)-(2836*a|0)|0)<0&&(s=s+i|0),e=s<2?s+2|0:s,(s=(o*(s-((a=s/u|0)*u|0))|0)-(2836*a|0)|0)<0&&(s=s+i|0),n=s<8?s+8|0:s,(s=(o*(s-((a=s/u|0)*u|0))|0)-(2836*a|0)|0)<0&&(s=s+i|0),r=s<16?s+16|0:s,(s=(o*(s-((a=s/u|0)*u|0))|0)-(2836*a|0)|0)<0&&(s=s+i|0),{a:e,b:n,c:r,d:s<128?s+128|0:s}}function o(t){var e=t,n=(e.a<<6^e.a)>>13;return e.a=(4294967294&e.a)<<18^n,n=(e.b<<2^e.b)>>27,e.b=(4294967288&e.b)<<2^n,n=(e.c<<13^e.c)>>21,e.c=(4294967280&e.c)<<7^n,n=(e.d<<3^e.d)>>12,e.d=(4294967168&e.d)<<13^n,2.3283064365386963e-10*(e.a^e.b^e.c^e.d)+.5}function i(t){return void 0===t&&(t=a()),function(){return o(t)}}function u(t){return void 0===t&&(t=a()),r(this,(function(e){switch(e.label){case 0:return[4,o(t)];case 1:return e.sent(),[3,0];case 2:return[2]}}))}Object.defineProperty(e,"__esModule",{value:!0}),e.getInitialState=a,e.default=o,e.getRandomFn=function(t){return void 0===t&&(t=0),i(a(t))},e.getRandomFnFromState=i,e.getIterator=function(t){return void 0===t&&(t=0),u(a(t))},e.getIteratorFromState=u},HbGN:function(t,e,n){"use strict";function r(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},o=Object.keys(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)n=o[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}n.d(e,"a",(function(){return r}))},Km8e:function(t,e,n){"use strict";var r=Object.assign.bind(Object);t.exports=r,t.exports.default=t.exports},LTq3:function(t,e,n){"use strict";n.r(e);var r=n("cxan"),a=n("zjfJ");function o(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if(Symbol.iterator in Object(t)||"[object Arguments]"===Object.prototype.toString.call(t)){var n=[],r=!0,a=!1,o=void 0;try{for(var i,u=t[Symbol.iterator]();!(r=(i=u.next()).done)&&(n.push(i.value),!e||n.length!==e);r=!0);}catch(s){a=!0,o=s}finally{try{r||null==u.return||u.return()}finally{if(a)throw o}}return n}}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}var i=n("HbGN"),u=n("ERkP"),s=n.n(u),l=n("9tMu"),c=n("EeqC"),f=n("tY8R"),p=s.a.createElement;function d(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?d(Object(n),!0).forEach((function(e){Object(a.a)(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):d(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}e.default=function(){var t=Object(u.useState)(l.defaultBrushConfig);return Object(u.useEffect)((function(){document.body.style.backgroundColor="#535353"}),[]),p("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"}},p(y,{brushConfigState:t,style:{marginTop:"20px",marginBottom:"6px"}}),p(b,{brushConfigState:t,min:0,max:50,field:"size"},"Size"),p(b,{brushConfigState:t,min:0,max:1,field:"flow"},"Flow"),p(b,{brushConfigState:t,min:0,max:3,field:"spacing"},"Spacing"),p(b,{brushConfigState:t,min:0,max:50,field:"normalSpread"},"Normal Spread"),p(b,{brushConfigState:t,min:0,max:50,field:"tangentSpread"},"Tangent Spread"))};var b=function(t){var e=t.children,n=t.brushConfigState,u=t.field,s=Object(i.a)(t,["children","brushConfigState","field"]),l=o(n,2),c=l[0],f=l[1];return p("label",{style:{marginBottom:"6px"}},p("p",{style:{margin:0,color:"#fff",fontSize:"12px",fontFamily:"sans-serif"}},e),p("input",Object(r.a)({type:"range",step:.01,style:{width:"280px"}},s,{value:c[u],onChange:function(t){return f(g({},c,Object(a.a)({},u,+t.target.value)))}})))},y=function(t){var e=t.brushConfigState,n=t.style,r=o(e,2),a=r[0],i=r[1],s=Object(u.useRef)(null);return Object(u.useEffect)((function(){var t=s.current.getContext("2d");i(g({},a,{ctx:t,draw:Object(l.getDrawCircleFn)(t,"#fff")}))}),[]),Object(u.useEffect)((function(){!function(t,e,n,r){var a=t.ctx;if(!a.clearRect)return;a.clearRect(0,0,e,n);var o=n>>1,i=e-2*r,u=o-r;a.clearRect(0,0,e,n);var s=Object(f.createStylusState)();s.x=r,s.y=o,s.pressure=0,t.angleRandom=Object(c.getRandomFn)(0),t.normalRandom=Object(c.getRandomFn)(1),t.tangentRandom=Object(c.getRandomFn)(2);for(var p=l.stroke.down(t,s),d=0;d<1;d+=.01)s.x=d*i+r,s.y=-Math.sin(2*Math.PI*d)*u+o,s.pressure=1-Math.abs(2*d-1),p.move(s);s.x=e-r,s.y=o,s.pressure=0,p.up(s)}(a,300,80,30)}),[a]),p("canvas",{ref:s,width:300,height:80,style:g({backgroundColor:"#4e4e4e",border:"solid 1px #383838",borderBottom:"solid 1px #707070"},n)})}},cxan:function(t,e,n){"use strict";function r(){return(r=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t}).apply(this,arguments)}n.d(e,"a",(function(){return r}))},dlHq:function(t,e,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/example/common-brush",function(){return n("LTq3")}])},tY8R:function(t,e,n){"use strict";var r=this&&this.__assign||function(){return(r=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)};Object.defineProperty(e,"__esModule",{value:!0});var a=function(t){return t};function o(){return{x:0,y:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0}}e.getStylusState=function(t,e){return void 0===e&&(e=a),r(r({},e({x:t.x,y:t.y})),{pressure:"mouse"===t.pointerType?1:t.pressure,tangentialPressure:t.tangentialPressure,tiltX:t.tiltX,tiltY:t.tiltY,twist:t.twist})},e.createStylusState=o;var i={x:0,y:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0};function u(t){return{x:t.x,y:t.y,pressure:t.pressure,tangentialPressure:t.tangentialPressure,tiltX:t.tiltX,tiltY:t.tiltY,twist:t.twist}}function s(t,e,n){return t+(e-t)*n}e.createStylusStates=function(t,e){return void 0===e&&(e=i),Array.from({length:t},(function(){return u(e)}))},e.cloneStylusState=u,e.copyStylusState=function(t,e){t.x=e.x,t.y=e.y,t.pressure=e.pressure,t.tangentialPressure=e.tangentialPressure,t.tiltX=e.tiltX,t.tiltY=e.tiltY,t.twist=e.twist},e.interpolateStylusState=function(t,e,n){t.x=s(t.x,e.x,n),t.y=s(t.y,e.y,n),t.pressure=s(t.pressure,e.pressure,n),t.tangentialPressure=s(t.tangentialPressure,e.tangentialPressure,n),t.tiltX=s(t.tiltX,e.tiltX,n),t.tiltY=s(t.tiltY,e.tiltY,n),t.twist=function(t,e,n){return t+(((e-t)%360+540)%360-180)*n%360}(t.twist,e.twist,n)}},zjfJ:function(t,e,n){"use strict";function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}n.d(e,"a",(function(){return r}))}},[["dlHq",0,1]]]);