"use strict";(self.webpackChunkprompt_react=self.webpackChunkprompt_react||[]).push([[5353],{22021:function(e,t,n){n.d(t,{gP:function(){return s}});var r=n(72791),o={prefix:String(Math.round(1e10*Math.random())),current:0},i=r.createContext(o);var a=Boolean("undefined"!==typeof window&&window.document&&window.document.createElement);function s(e){var t=(0,r.useContext)(i);return t!==o||a||console.warn("When server rendering, you must wrap your application in an <SSRProvider> to ensure consistent ids are generated between the client and server."),(0,r.useMemo)((function(){return e||"react-aria"+t.prefix+"-"+ ++t.current}),[e])}},81551:function(e,t,n){var r=n(72791).createContext(null);t.Z=r},43068:function(e,t,n){n.d(t,{d:function(){return p}});var r=n(70885),o=n(72791),i=n(28633),a=n(81551),s=n(64403),c=n(76050),u=n(81012),f=n(80184),l=["children"];var d=function(){};function p(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=(0,o.useContext)(a.Z),n=(0,i.Z)(),f=(0,r.Z)(n,2),l=f[0],p=f[1],v=(0,o.useRef)(!1),m=e.flip,h=e.offset,g=e.rootCloseEvent,b=e.fixed,y=void 0!==b&&b,w=e.placement,x=e.popperConfig,O=void 0===x?{}:x,Z=e.enableEventListeners,C=void 0===Z||Z,E=e.usePopper,j=void 0===E?!!t:E,k=null==(null==t?void 0:t.show)?!!e.show:t.show;k&&!v.current&&(v.current=!0);var P=function(e){null==t||t.toggle(!1,e)},D=t||{},A=D.placement,M=D.setMenu,T=D.menuElement,N=D.toggleElement,S=(0,s.Z)(N,T,(0,u.ZP)({placement:w||A||"bottom-start",enabled:j,enableEvents:null==C?k:C,offset:h,flip:m,fixed:y,arrowElement:l,popperConfig:O})),R=Object.assign({ref:M||d,"aria-labelledby":null==N?void 0:N.id},S.attributes.popper,{style:S.styles.popper}),L={show:k,placement:A,hasShown:v.current,toggle:null==t?void 0:t.toggle,popper:j?S:null,arrowProps:j?Object.assign({ref:p},S.attributes.arrow,{style:S.styles.arrow}):{}};return(0,c.Z)(T,P,{clickTrigger:g,disabled:!k}),[R,L]}function v(e){var t=e.children,n=p(function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,l)),o=(0,r.Z)(n,2),i=o[0],a=o[1];return(0,f.jsx)(f.Fragment,{children:t(i,a)})}v.displayName="DropdownMenu",v.defaultProps={usePopper:!0},t.Z=v},60202:function(e,t,n){n.d(t,{bt:function(){return c},Jr:function(){return f}});var r=n(70885),o=n(72791),i=n(22021),a=n(81551),s=n(80184),c=function(e){var t;return"menu"===(null==(t=e.getAttribute("role"))?void 0:t.toLowerCase())},u=function(){};function f(){var e=(0,i.gP)(),t=(0,o.useContext)(a.Z)||{},n=t.show,r=void 0!==n&&n,s=t.toggle,f=void 0===s?u:s,l=t.setToggle,d=t.menuElement,p=(0,o.useCallback)((function(e){f(!r,e)}),[r,f]),v={id:e,ref:l||u,onClick:p,"aria-expanded":!!r};return d&&c(d)&&(v["aria-haspopup"]=!0),[v,{show:r,toggle:f}]}function l(e){var t=e.children,n=f(),o=(0,r.Z)(n,2),i=o[0],a=o[1];return(0,s.jsx)(s.Fragment,{children:t(i,a)})}l.displayName="DropdownToggle",t.ZP=l},81012:function(e,t,n){function r(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Array.isArray(e)?e:Object.keys(e).map((function(t){return e[t].name=t,e[t]}))}function o(e){var t,n,o,i,a=e.enabled,s=e.enableEvents,c=e.placement,u=e.flip,f=e.offset,l=e.fixed,d=e.containerPadding,p=e.arrowElement,v=e.popperConfig,m=void 0===v?{}:v,h=function(e){var t={};return Array.isArray(e)?(null==e||e.forEach((function(e){t[e.name]=e})),t):e||t}(m.modifiers);return Object.assign({},m,{placement:c,enabled:a,strategy:l?"fixed":m.strategy,modifiers:r(Object.assign({},h,{eventListeners:{enabled:s},preventOverflow:Object.assign({},h.preventOverflow,{options:d?Object.assign({padding:d},null==(t=h.preventOverflow)?void 0:t.options):null==(n=h.preventOverflow)?void 0:n.options}),offset:{options:Object.assign({offset:f},null==(o=h.offset)?void 0:o.options)},arrow:Object.assign({},h.arrow,{enabled:!!p,options:Object.assign({},null==(i=h.arrow)?void 0:i.options,{element:p})}),flip:Object.assign({enabled:!!u},h.flip)}))})}n.d(t,{ZP:function(){return o}})},76050:function(e,t,n){n.d(t,{f:function(){return p}});var r=n(53189),o=n(92899),i=n(78376),a=n(72791),s=n(39007),c=n(42391),u=n.n(c),f=function(){};function l(e){return 0===e.button}function d(e){return!!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)}var p=function(e){return e&&("current"in e?e.current:e)},v={click:"mousedown",mouseup:"mousedown",pointerup:"pointerdown"};t.Z=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:f,n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},c=n.disabled,m=n.clickTrigger,h=void 0===m?"click":m,g=(0,a.useRef)(!1),b=(0,a.useRef)(!1),y=(0,a.useCallback)((function(t){var n=p(e);u()(!!n,"ClickOutside captured a close event but does not have a ref to compare it to. useClickOutside(), should be passed a ref that resolves to a DOM node"),g.current=!n||d(t)||!l(t)||!!(0,r.Z)(n,t.target)||b.current,b.current=!1}),[e]),w=(0,s.Z)((function(t){var n=p(e);n&&(0,r.Z)(n,t.target)&&(b.current=!0)})),x=(0,s.Z)((function(e){g.current||t(e)}));(0,a.useEffect)((function(){if(!c&&null!=e){var t=(0,i.Z)(p(e)),n=(t.defaultView||window).event,r=null;v[h]&&(r=(0,o.Z)(t,v[h],w,!0));var a=(0,o.Z)(t,h,y,!0),s=(0,o.Z)(t,h,(function(e){e!==n?x(e):n=void 0})),u=[];return"ontouchstart"in t.documentElement&&(u=[].slice.call(t.body.children).map((function(e){return(0,o.Z)(e,"mousemove",f)}))),function(){null==r||r(),a(),s(),u.forEach((function(e){return e()}))}}}),[e,c,h,y,w,x])}},64403:function(e,t,n){n.d(t,{Z:function(){return Pe}});var r=n(42982),o=n(70885),i=n(72791),a=n(37762),s=Object.prototype.hasOwnProperty;function c(e,t,n){var r,o=(0,a.Z)(e.keys());try{for(o.s();!(r=o.n()).done;)if(u(n=r.value,t))return n}catch(i){o.e(i)}finally{o.f()}}function u(e,t){var n,r,o;if(e===t)return!0;if(e&&t&&(n=e.constructor)===t.constructor){if(n===Date)return e.getTime()===t.getTime();if(n===RegExp)return e.toString()===t.toString();if(n===Array){if((r=e.length)===t.length)for(;r--&&u(e[r],t[r]););return-1===r}if(n===Set){if(e.size!==t.size)return!1;var i,f=(0,a.Z)(e);try{for(f.s();!(i=f.n()).done;){if((o=r=i.value)&&"object"===typeof o&&!(o=c(t,o)))return!1;if(!t.has(o))return!1}}catch(p){f.e(p)}finally{f.f()}return!0}if(n===Map){if(e.size!==t.size)return!1;var l,d=(0,a.Z)(e);try{for(d.s();!(l=d.n()).done;){if((o=(r=l.value)[0])&&"object"===typeof o&&!(o=c(t,o)))return!1;if(!u(r[1],t.get(o)))return!1}}catch(p){d.e(p)}finally{d.f()}return!0}if(n===ArrayBuffer)e=new Uint8Array(e),t=new Uint8Array(t);else if(n===DataView){if((r=e.byteLength)===t.byteLength)for(;r--&&e.getInt8(r)===t.getInt8(r););return-1===r}if(ArrayBuffer.isView(e)){if((r=e.byteLength)===t.byteLength)for(;r--&&e[r]===t[r];);return-1===r}if(!n||"object"===typeof e){for(n in r=0,e){if(s.call(e,n)&&++r&&!s.call(t,n))return!1;if(!(n in t)||!u(e[n],t[n]))return!1}return Object.keys(t).length===r}}return e!==e&&t!==t}var f=n(55746);var l=function(e){var t=(0,f.Z)();return[e[0],(0,i.useCallback)((function(n){if(t())return e[1](n)}),[t,e[1]])]};function d(e){return e.split("-")[0]}function p(e){if(null==e)return window;if("[object Window]"!==e.toString()){var t=e.ownerDocument;return t&&t.defaultView||window}return e}function v(e){return e instanceof p(e).Element||e instanceof Element}function m(e){return e instanceof p(e).HTMLElement||e instanceof HTMLElement}function h(e){return"undefined"!==typeof ShadowRoot&&(e instanceof p(e).ShadowRoot||e instanceof ShadowRoot)}var g=Math.max,b=Math.min,y=Math.round;function w(e,t){void 0===t&&(t=!1);var n=e.getBoundingClientRect(),r=1,o=1;if(m(e)&&t){var i=e.offsetHeight,a=e.offsetWidth;a>0&&(r=y(n.width)/a||1),i>0&&(o=y(n.height)/i||1)}return{width:n.width/r,height:n.height/o,top:n.top/o,right:n.right/r,bottom:n.bottom/o,left:n.left/r,x:n.left/r,y:n.top/o}}function x(e){var t=w(e),n=e.offsetWidth,r=e.offsetHeight;return Math.abs(t.width-n)<=1&&(n=t.width),Math.abs(t.height-r)<=1&&(r=t.height),{x:e.offsetLeft,y:e.offsetTop,width:n,height:r}}function O(e,t){var n=t.getRootNode&&t.getRootNode();if(e.contains(t))return!0;if(n&&h(n)){var r=t;do{if(r&&e.isSameNode(r))return!0;r=r.parentNode||r.host}while(r)}return!1}function Z(e){return e?(e.nodeName||"").toLowerCase():null}function C(e){return p(e).getComputedStyle(e)}function E(e){return["table","td","th"].indexOf(Z(e))>=0}function j(e){return((v(e)?e.ownerDocument:e.document)||window.document).documentElement}function k(e){return"html"===Z(e)?e:e.assignedSlot||e.parentNode||(h(e)?e.host:null)||j(e)}function P(e){return m(e)&&"fixed"!==C(e).position?e.offsetParent:null}function D(e){for(var t=p(e),n=P(e);n&&E(n)&&"static"===C(n).position;)n=P(n);return n&&("html"===Z(n)||"body"===Z(n)&&"static"===C(n).position)?t:n||function(e){var t=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&m(e)&&"fixed"===C(e).position)return null;for(var n=k(e);m(n)&&["html","body"].indexOf(Z(n))<0;){var r=C(n);if("none"!==r.transform||"none"!==r.perspective||"paint"===r.contain||-1!==["transform","perspective"].indexOf(r.willChange)||t&&"filter"===r.willChange||t&&r.filter&&"none"!==r.filter)return n;n=n.parentNode}return null}(e)||t}function A(e){return["top","bottom"].indexOf(e)>=0?"x":"y"}function M(e,t,n){return g(e,b(t,n))}function T(e){return Object.assign({},{top:0,right:0,bottom:0,left:0},e)}function N(e,t){return t.reduce((function(t,n){return t[n]=e,t}),{})}var S="top",R="bottom",L="right",B="left",W="auto",H=[S,R,L,B],I="start",V="end",F="viewport",q="popper",U=H.reduce((function(e,t){return e.concat([t+"-"+I,t+"-"+V])}),[]),z=[].concat(H,[W]).reduce((function(e,t){return e.concat([t,t+"-"+I,t+"-"+V])}),[]),K=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];var _={name:"arrow",enabled:!0,phase:"main",fn:function(e){var t,n=e.state,r=e.name,o=e.options,i=n.elements.arrow,a=n.modifiersData.popperOffsets,s=d(n.placement),c=A(s),u=[B,L].indexOf(s)>=0?"height":"width";if(i&&a){var f=function(e,t){return T("number"!==typeof(e="function"===typeof e?e(Object.assign({},t.rects,{placement:t.placement})):e)?e:N(e,H))}(o.padding,n),l=x(i),p="y"===c?S:B,v="y"===c?R:L,m=n.rects.reference[u]+n.rects.reference[c]-a[c]-n.rects.popper[u],h=a[c]-n.rects.reference[c],g=D(i),b=g?"y"===c?g.clientHeight||0:g.clientWidth||0:0,y=m/2-h/2,w=f[p],O=b-l[u]-f[v],Z=b/2-l[u]/2+y,C=M(w,Z,O),E=c;n.modifiersData[r]=((t={})[E]=C,t.centerOffset=C-Z,t)}},effect:function(e){var t=e.state,n=e.options.element,r=void 0===n?"[data-popper-arrow]":n;null!=r&&("string"!==typeof r||(r=t.elements.popper.querySelector(r)))&&O(t.elements.popper,r)&&(t.elements.arrow=r)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]};function J(e){return e.split("-")[1]}var X={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Y(e){var t,n=e.popper,r=e.popperRect,o=e.placement,i=e.variation,a=e.offsets,s=e.position,c=e.gpuAcceleration,u=e.adaptive,f=e.roundOffsets,l=e.isFixed,d=a.x,v=void 0===d?0:d,m=a.y,h=void 0===m?0:m,g="function"===typeof f?f({x:v,y:h}):{x:v,y:h};v=g.x,h=g.y;var b=a.hasOwnProperty("x"),w=a.hasOwnProperty("y"),x=B,O=S,Z=window;if(u){var E=D(n),k="clientHeight",P="clientWidth";if(E===p(n)&&"static"!==C(E=j(n)).position&&"absolute"===s&&(k="scrollHeight",P="scrollWidth"),E=E,o===S||(o===B||o===L)&&i===V)O=R,h-=(l&&Z.visualViewport?Z.visualViewport.height:E[k])-r.height,h*=c?1:-1;if(o===B||(o===S||o===R)&&i===V)x=L,v-=(l&&Z.visualViewport?Z.visualViewport.width:E[P])-r.width,v*=c?1:-1}var A,M=Object.assign({position:s},u&&X),T=!0===f?function(e){var t=e.x,n=e.y,r=window.devicePixelRatio||1;return{x:y(t*r)/r||0,y:y(n*r)/r||0}}({x:v,y:h}):{x:v,y:h};return v=T.x,h=T.y,c?Object.assign({},M,((A={})[O]=w?"0":"",A[x]=b?"0":"",A.transform=(Z.devicePixelRatio||1)<=1?"translate("+v+"px, "+h+"px)":"translate3d("+v+"px, "+h+"px, 0)",A)):Object.assign({},M,((t={})[O]=w?h+"px":"",t[x]=b?v+"px":"",t.transform="",t))}var $={passive:!0};var G={left:"right",right:"left",bottom:"top",top:"bottom"};function Q(e){return e.replace(/left|right|bottom|top/g,(function(e){return G[e]}))}var ee={start:"end",end:"start"};function te(e){return e.replace(/start|end/g,(function(e){return ee[e]}))}function ne(e){var t=p(e);return{scrollLeft:t.pageXOffset,scrollTop:t.pageYOffset}}function re(e){return w(j(e)).left+ne(e).scrollLeft}function oe(e){var t=C(e),n=t.overflow,r=t.overflowX,o=t.overflowY;return/auto|scroll|overlay|hidden/.test(n+o+r)}function ie(e){return["html","body","#document"].indexOf(Z(e))>=0?e.ownerDocument.body:m(e)&&oe(e)?e:ie(k(e))}function ae(e,t){var n;void 0===t&&(t=[]);var r=ie(e),o=r===(null==(n=e.ownerDocument)?void 0:n.body),i=p(r),a=o?[i].concat(i.visualViewport||[],oe(r)?r:[]):r,s=t.concat(a);return o?s:s.concat(ae(k(a)))}function se(e){return Object.assign({},e,{left:e.x,top:e.y,right:e.x+e.width,bottom:e.y+e.height})}function ce(e,t){return t===F?se(function(e){var t=p(e),n=j(e),r=t.visualViewport,o=n.clientWidth,i=n.clientHeight,a=0,s=0;return r&&(o=r.width,i=r.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(a=r.offsetLeft,s=r.offsetTop)),{width:o,height:i,x:a+re(e),y:s}}(e)):v(t)?function(e){var t=w(e);return t.top=t.top+e.clientTop,t.left=t.left+e.clientLeft,t.bottom=t.top+e.clientHeight,t.right=t.left+e.clientWidth,t.width=e.clientWidth,t.height=e.clientHeight,t.x=t.left,t.y=t.top,t}(t):se(function(e){var t,n=j(e),r=ne(e),o=null==(t=e.ownerDocument)?void 0:t.body,i=g(n.scrollWidth,n.clientWidth,o?o.scrollWidth:0,o?o.clientWidth:0),a=g(n.scrollHeight,n.clientHeight,o?o.scrollHeight:0,o?o.clientHeight:0),s=-r.scrollLeft+re(e),c=-r.scrollTop;return"rtl"===C(o||n).direction&&(s+=g(n.clientWidth,o?o.clientWidth:0)-i),{width:i,height:a,x:s,y:c}}(j(e)))}function ue(e,t,n){var r="clippingParents"===t?function(e){var t=ae(k(e)),n=["absolute","fixed"].indexOf(C(e).position)>=0&&m(e)?D(e):e;return v(n)?t.filter((function(e){return v(e)&&O(e,n)&&"body"!==Z(e)})):[]}(e):[].concat(t),o=[].concat(r,[n]),i=o[0],a=o.reduce((function(t,n){var r=ce(e,n);return t.top=g(r.top,t.top),t.right=b(r.right,t.right),t.bottom=b(r.bottom,t.bottom),t.left=g(r.left,t.left),t}),ce(e,i));return a.width=a.right-a.left,a.height=a.bottom-a.top,a.x=a.left,a.y=a.top,a}function fe(e){var t,n=e.reference,r=e.element,o=e.placement,i=o?d(o):null,a=o?J(o):null,s=n.x+n.width/2-r.width/2,c=n.y+n.height/2-r.height/2;switch(i){case S:t={x:s,y:n.y-r.height};break;case R:t={x:s,y:n.y+n.height};break;case L:t={x:n.x+n.width,y:c};break;case B:t={x:n.x-r.width,y:c};break;default:t={x:n.x,y:n.y}}var u=i?A(i):null;if(null!=u){var f="y"===u?"height":"width";switch(a){case I:t[u]=t[u]-(n[f]/2-r[f]/2);break;case V:t[u]=t[u]+(n[f]/2-r[f]/2)}}return t}function le(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=void 0===r?e.placement:r,i=n.boundary,a=void 0===i?"clippingParents":i,s=n.rootBoundary,c=void 0===s?F:s,u=n.elementContext,f=void 0===u?q:u,l=n.altBoundary,d=void 0!==l&&l,p=n.padding,m=void 0===p?0:p,h=T("number"!==typeof m?m:N(m,H)),g=f===q?"reference":q,b=e.rects.popper,y=e.elements[d?g:f],x=ue(v(y)?y:y.contextElement||j(e.elements.popper),a,c),O=w(e.elements.reference),Z=fe({reference:O,element:b,strategy:"absolute",placement:o}),C=se(Object.assign({},b,Z)),E=f===q?C:O,k={top:x.top-E.top+h.top,bottom:E.bottom-x.bottom+h.bottom,left:x.left-E.left+h.left,right:E.right-x.right+h.right},P=e.modifiersData.offset;if(f===q&&P){var D=P[o];Object.keys(k).forEach((function(e){var t=[L,R].indexOf(e)>=0?1:-1,n=[S,R].indexOf(e)>=0?"y":"x";k[e]+=D[n]*t}))}return k}function de(e,t,n){return void 0===n&&(n={x:0,y:0}),{top:e.top-t.height-n.y,right:e.right-t.width+n.x,bottom:e.bottom-t.height+n.y,left:e.left-t.width-n.x}}function pe(e){return[S,L,R,B].some((function(t){return e[t]>=0}))}var ve={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.offset,i=void 0===o?[0,0]:o,a=z.reduce((function(e,n){return e[n]=function(e,t,n){var r=d(e),o=[B,S].indexOf(r)>=0?-1:1,i="function"===typeof n?n(Object.assign({},t,{placement:e})):n,a=i[0],s=i[1];return a=a||0,s=(s||0)*o,[B,L].indexOf(r)>=0?{x:s,y:a}:{x:a,y:s}}(n,t.rects,i),e}),{}),s=a[t.placement],c=s.x,u=s.y;null!=t.modifiersData.popperOffsets&&(t.modifiersData.popperOffsets.x+=c,t.modifiersData.popperOffsets.y+=u),t.modifiersData[r]=a}};var me={name:"preventOverflow",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name,o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0!==a&&a,c=n.boundary,u=n.rootBoundary,f=n.altBoundary,l=n.padding,p=n.tether,v=void 0===p||p,m=n.tetherOffset,h=void 0===m?0:m,y=le(t,{boundary:c,rootBoundary:u,padding:l,altBoundary:f}),w=d(t.placement),O=J(t.placement),Z=!O,C=A(w),E="x"===C?"y":"x",j=t.modifiersData.popperOffsets,k=t.rects.reference,P=t.rects.popper,T="function"===typeof h?h(Object.assign({},t.rects,{placement:t.placement})):h,N="number"===typeof T?{mainAxis:T,altAxis:T}:Object.assign({mainAxis:0,altAxis:0},T),W=t.modifiersData.offset?t.modifiersData.offset[t.placement]:null,H={x:0,y:0};if(j){if(i){var V,F="y"===C?S:B,q="y"===C?R:L,U="y"===C?"height":"width",z=j[C],K=z+y[F],_=z-y[q],X=v?-P[U]/2:0,Y=O===I?k[U]:P[U],$=O===I?-P[U]:-k[U],G=t.elements.arrow,Q=v&&G?x(G):{width:0,height:0},ee=t.modifiersData["arrow#persistent"]?t.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},te=ee[F],ne=ee[q],re=M(0,k[U],Q[U]),oe=Z?k[U]/2-X-re-te-N.mainAxis:Y-re-te-N.mainAxis,ie=Z?-k[U]/2+X+re+ne+N.mainAxis:$+re+ne+N.mainAxis,ae=t.elements.arrow&&D(t.elements.arrow),se=ae?"y"===C?ae.clientTop||0:ae.clientLeft||0:0,ce=null!=(V=null==W?void 0:W[C])?V:0,ue=z+ie-ce,fe=M(v?b(K,z+oe-ce-se):K,z,v?g(_,ue):_);j[C]=fe,H[C]=fe-z}if(s){var de,pe="x"===C?S:B,ve="x"===C?R:L,me=j[E],he="y"===E?"height":"width",ge=me+y[pe],be=me-y[ve],ye=-1!==[S,B].indexOf(w),we=null!=(de=null==W?void 0:W[E])?de:0,xe=ye?ge:me-k[he]-P[he]-we+N.altAxis,Oe=ye?me+k[he]+P[he]-we-N.altAxis:be,Ze=v&&ye?function(e,t,n){var r=M(e,t,n);return r>n?n:r}(xe,me,Oe):M(v?xe:ge,me,v?Oe:be);j[E]=Ze,H[E]=Ze-me}t.modifiersData[r]=H}},requiresIfExists:["offset"]};function he(e,t,n){void 0===n&&(n=!1);var r=m(t),o=m(t)&&function(e){var t=e.getBoundingClientRect(),n=y(t.width)/e.offsetWidth||1,r=y(t.height)/e.offsetHeight||1;return 1!==n||1!==r}(t),i=j(t),a=w(e,o),s={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(r||!r&&!n)&&(("body"!==Z(t)||oe(i))&&(s=function(e){return e!==p(e)&&m(e)?{scrollLeft:(t=e).scrollLeft,scrollTop:t.scrollTop}:ne(e);var t}(t)),m(t)?((c=w(t,!0)).x+=t.clientLeft,c.y+=t.clientTop):i&&(c.x=re(i))),{x:a.left+s.scrollLeft-c.x,y:a.top+s.scrollTop-c.y,width:a.width,height:a.height}}function ge(e){var t=new Map,n=new Set,r=[];function o(e){n.add(e.name),[].concat(e.requires||[],e.requiresIfExists||[]).forEach((function(e){if(!n.has(e)){var r=t.get(e);r&&o(r)}})),r.push(e)}return e.forEach((function(e){t.set(e.name,e)})),e.forEach((function(e){n.has(e.name)||o(e)})),r}function be(e){var t;return function(){return t||(t=new Promise((function(n){Promise.resolve().then((function(){t=void 0,n(e())}))}))),t}}var ye={placement:"bottom",modifiers:[],strategy:"absolute"};function we(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return!t.some((function(e){return!(e&&"function"===typeof e.getBoundingClientRect)}))}function xe(e){void 0===e&&(e={});var t=e,n=t.defaultModifiers,r=void 0===n?[]:n,o=t.defaultOptions,i=void 0===o?ye:o;return function(e,t,n){void 0===n&&(n=i);var o={placement:"bottom",orderedModifiers:[],options:Object.assign({},ye,i),modifiersData:{},elements:{reference:e,popper:t},attributes:{},styles:{}},a=[],s=!1,c={state:o,setOptions:function(n){var s="function"===typeof n?n(o.options):n;u(),o.options=Object.assign({},i,o.options,s),o.scrollParents={reference:v(e)?ae(e):e.contextElement?ae(e.contextElement):[],popper:ae(t)};var f=function(e){var t=ge(e);return K.reduce((function(e,n){return e.concat(t.filter((function(e){return e.phase===n})))}),[])}(function(e){var t=e.reduce((function(e,t){var n=e[t.name];return e[t.name]=n?Object.assign({},n,t,{options:Object.assign({},n.options,t.options),data:Object.assign({},n.data,t.data)}):t,e}),{});return Object.keys(t).map((function(e){return t[e]}))}([].concat(r,o.options.modifiers)));return o.orderedModifiers=f.filter((function(e){return e.enabled})),o.orderedModifiers.forEach((function(e){var t=e.name,n=e.options,r=void 0===n?{}:n,i=e.effect;if("function"===typeof i){var s=i({state:o,name:t,instance:c,options:r}),u=function(){};a.push(s||u)}})),c.update()},forceUpdate:function(){if(!s){var e=o.elements,t=e.reference,n=e.popper;if(we(t,n)){o.rects={reference:he(t,D(n),"fixed"===o.options.strategy),popper:x(n)},o.reset=!1,o.placement=o.options.placement,o.orderedModifiers.forEach((function(e){return o.modifiersData[e.name]=Object.assign({},e.data)}));for(var r=0;r<o.orderedModifiers.length;r++)if(!0!==o.reset){var i=o.orderedModifiers[r],a=i.fn,u=i.options,f=void 0===u?{}:u,l=i.name;"function"===typeof a&&(o=a({state:o,options:f,name:l,instance:c})||o)}else o.reset=!1,r=-1}}},update:be((function(){return new Promise((function(e){c.forceUpdate(),e(o)}))})),destroy:function(){u(),s=!0}};if(!we(e,t))return c;function u(){a.forEach((function(e){return e()})),a=[]}return c.setOptions(n).then((function(e){!s&&n.onFirstUpdate&&n.onFirstUpdate(e)})),c}}var Oe=xe({defaultModifiers:[{name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(e){var t=e.state,n=e.name,r=t.rects.reference,o=t.rects.popper,i=t.modifiersData.preventOverflow,a=le(t,{elementContext:"reference"}),s=le(t,{altBoundary:!0}),c=de(a,r),u=de(s,o,i),f=pe(c),l=pe(u);t.modifiersData[n]={referenceClippingOffsets:c,popperEscapeOffsets:u,isReferenceHidden:f,hasPopperEscaped:l},t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-reference-hidden":f,"data-popper-escaped":l})}},{name:"popperOffsets",enabled:!0,phase:"read",fn:function(e){var t=e.state,n=e.name;t.modifiersData[n]=fe({reference:t.rects.reference,element:t.rects.popper,strategy:"absolute",placement:t.placement})},data:{}},{name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(e){var t=e.state,n=e.options,r=n.gpuAcceleration,o=void 0===r||r,i=n.adaptive,a=void 0===i||i,s=n.roundOffsets,c=void 0===s||s,u={placement:d(t.placement),variation:J(t.placement),popper:t.elements.popper,popperRect:t.rects.popper,gpuAcceleration:o,isFixed:"fixed"===t.options.strategy};null!=t.modifiersData.popperOffsets&&(t.styles.popper=Object.assign({},t.styles.popper,Y(Object.assign({},u,{offsets:t.modifiersData.popperOffsets,position:t.options.strategy,adaptive:a,roundOffsets:c})))),null!=t.modifiersData.arrow&&(t.styles.arrow=Object.assign({},t.styles.arrow,Y(Object.assign({},u,{offsets:t.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:c})))),t.attributes.popper=Object.assign({},t.attributes.popper,{"data-popper-placement":t.placement})},data:{}},{name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(e){var t=e.state,n=e.instance,r=e.options,o=r.scroll,i=void 0===o||o,a=r.resize,s=void 0===a||a,c=p(t.elements.popper),u=[].concat(t.scrollParents.reference,t.scrollParents.popper);return i&&u.forEach((function(e){e.addEventListener("scroll",n.update,$)})),s&&c.addEventListener("resize",n.update,$),function(){i&&u.forEach((function(e){e.removeEventListener("scroll",n.update,$)})),s&&c.removeEventListener("resize",n.update,$)}},data:{}},ve,{name:"flip",enabled:!0,phase:"main",fn:function(e){var t=e.state,n=e.options,r=e.name;if(!t.modifiersData[r]._skip){for(var o=n.mainAxis,i=void 0===o||o,a=n.altAxis,s=void 0===a||a,c=n.fallbackPlacements,u=n.padding,f=n.boundary,l=n.rootBoundary,p=n.altBoundary,v=n.flipVariations,m=void 0===v||v,h=n.allowedAutoPlacements,g=t.options.placement,b=d(g),y=c||(b===g||!m?[Q(g)]:function(e){if(d(e)===W)return[];var t=Q(e);return[te(e),t,te(t)]}(g)),w=[g].concat(y).reduce((function(e,n){return e.concat(d(n)===W?function(e,t){void 0===t&&(t={});var n=t,r=n.placement,o=n.boundary,i=n.rootBoundary,a=n.padding,s=n.flipVariations,c=n.allowedAutoPlacements,u=void 0===c?z:c,f=J(r),l=f?s?U:U.filter((function(e){return J(e)===f})):H,p=l.filter((function(e){return u.indexOf(e)>=0}));0===p.length&&(p=l);var v=p.reduce((function(t,n){return t[n]=le(e,{placement:n,boundary:o,rootBoundary:i,padding:a})[d(n)],t}),{});return Object.keys(v).sort((function(e,t){return v[e]-v[t]}))}(t,{placement:n,boundary:f,rootBoundary:l,padding:u,flipVariations:m,allowedAutoPlacements:h}):n)}),[]),x=t.rects.reference,O=t.rects.popper,Z=new Map,C=!0,E=w[0],j=0;j<w.length;j++){var k=w[j],P=d(k),D=J(k)===I,A=[S,R].indexOf(P)>=0,M=A?"width":"height",T=le(t,{placement:k,boundary:f,rootBoundary:l,altBoundary:p,padding:u}),N=A?D?L:B:D?R:S;x[M]>O[M]&&(N=Q(N));var V=Q(N),F=[];if(i&&F.push(T[P]<=0),s&&F.push(T[N]<=0,T[V]<=0),F.every((function(e){return e}))){E=k,C=!1;break}Z.set(k,F)}if(C)for(var q=function(e){var t=w.find((function(t){var n=Z.get(t);if(n)return n.slice(0,e).every((function(e){return e}))}));if(t)return E=t,"break"},K=m?3:1;K>0;K--){if("break"===q(K))break}t.placement!==E&&(t.modifiersData[r]._skip=!0,t.placement=E,t.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}},me,_]}),Ze=["enabled","placement","strategy","modifiers"];function Ce(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}var Ee={name:"applyStyles",enabled:!1,phase:"afterWrite",fn:function(){}},je={name:"ariaDescribedBy",enabled:!0,phase:"afterWrite",effect:function(e){var t=e.state;return function(){var e=t.elements,n=e.reference,r=e.popper;if("removeAttribute"in n){var o=(n.getAttribute("aria-describedby")||"").split(",").filter((function(e){return e.trim()!==r.id}));o.length?n.setAttribute("aria-describedby",o.join(",")):n.removeAttribute("aria-describedby")}}},fn:function(e){var t,n=e.state.elements,r=n.popper,o=n.reference,i=null==(t=r.getAttribute("role"))?void 0:t.toLowerCase();if(r.id&&"tooltip"===i&&"setAttribute"in o){var a=o.getAttribute("aria-describedby");if(a&&-1!==a.split(",").indexOf(r.id))return;o.setAttribute("aria-describedby",a?"".concat(a,",").concat(r.id):r.id)}}},ke=[];var Pe=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},a=n.enabled,s=void 0===a||a,c=n.placement,f=void 0===c?"bottom":c,d=n.strategy,p=void 0===d?"absolute":d,v=n.modifiers,m=void 0===v?ke:v,h=Ce(n,Ze),g=(0,i.useRef)(m),b=(0,i.useRef)(),y=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.update()}),[]),w=(0,i.useCallback)((function(){var e;null==(e=b.current)||e.forceUpdate()}),[]),x=l((0,i.useState)({placement:f,update:y,forceUpdate:w,attributes:{},styles:{popper:{},arrow:{}}})),O=(0,o.Z)(x,2),Z=O[0],C=O[1],E=(0,i.useMemo)((function(){return{name:"updateStateModifier",enabled:!0,phase:"write",requires:["computeStyles"],fn:function(e){var t=e.state,n={},r={};Object.keys(t.elements).forEach((function(e){n[e]=t.styles[e],r[e]=t.attributes[e]})),C({state:t,styles:n,attributes:r,update:y,forceUpdate:w,placement:t.placement})}}}),[y,w,C]),j=(0,i.useMemo)((function(){return u(g.current,m)||(g.current=m),g.current}),[m]);return(0,i.useEffect)((function(){b.current&&s&&b.current.setOptions({placement:f,strategy:p,modifiers:[].concat((0,r.Z)(j),[E,Ee])})}),[p,f,E,s,j]),(0,i.useEffect)((function(){if(s&&null!=e&&null!=t)return b.current=Oe(e,t,Object.assign({},h,{placement:f,strategy:p,modifiers:[].concat((0,r.Z)(j),[je,E])})),function(){null!=b.current&&(b.current.destroy(),b.current=void 0,C((function(e){return Object.assign({},e,{attributes:{},styles:{popper:{}}})})))}}),[s,e,t]),Z}},43360:function(e,t,n){var r=n(1413),o=n(70885),i=n(45987),a=n(81694),s=n.n(a),c=n(72791),u=n(15341),f=n(10162),l=n(80184),d=["as","bsPrefix","variant","size","active","className"],p=c.forwardRef((function(e,t){var n=e.as,a=e.bsPrefix,c=e.variant,p=e.size,v=e.active,m=e.className,h=(0,i.Z)(e,d),g=(0,f.vE)(a,"btn"),b=(0,u.FT)((0,r.Z)({tagName:n},h)),y=(0,o.Z)(b,2),w=y[0],x=y[1].tagName;return(0,l.jsx)(x,(0,r.Z)((0,r.Z)((0,r.Z)({},w),h),{},{ref:t,className:s()(m,g,v&&"active",c&&"".concat(g,"-").concat(c),p&&"".concat(g,"-").concat(p),h.href&&h.disabled&&"disabled")}))}));p.displayName="Button",p.defaultProps={variant:"primary",active:!1,disabled:!1},t.Z=p},55353:function(e,t,n){n.d(t,{Z:function(){return J}});var r=n(1413),o=n(45987),i=n(81694),a=n.n(i),s=n(72791),c=n(70885),u=n(13808),f=n(3070),l=n(32592),d=n(52803),p=n(53649),v=n(79392),m=n(39007),h=n(81551),g=n(43068),b=n(60202),y=n(4942),w=n(78633),x=n(74784),O=n(15341),Z=n(71306),C=n(80184),E=["eventKey","disabled","onClick","active","as"];function j(e){var t=e.key,n=e.href,r=e.active,o=e.disabled,i=e.onClick,a=(0,s.useContext)(w.Z),c=((0,s.useContext)(x.Z)||{}).activeKey,u=(0,w.h)(t,n),f=null==r&&null!=t?(0,w.h)(c)===u:r,l=(0,m.Z)((function(e){o||(null==i||i(e),a&&!e.isPropagationStopped()&&a(u,e))}));return[(0,y.Z)({onClick:l,"aria-disabled":o||void 0,"aria-selected":f},(0,Z.PB)("dropdown-item"),""),{isActive:f}]}var k=s.forwardRef((function(e,t){var n=e.eventKey,r=e.disabled,o=e.onClick,i=e.active,a=e.as,s=void 0===a?O.ZP:a,u=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,E),f=j({key:n,href:u.href,disabled:r,onClick:o,active:i}),l=(0,c.Z)(f,1)[0];return(0,C.jsx)(s,Object.assign({},u,{ref:t},l))}));k.displayName="DropdownItem";var P=k,D=n(58865);function A(){var e=(0,p.Z)(),t=(0,s.useRef)(null),n=(0,s.useCallback)((function(n){t.current=n,e()}),[e]);return[t,n]}function M(e){var t=e.defaultShow,n=e.show,r=e.onSelect,o=e.onToggle,i=e.itemSelector,a=void 0===i?"* [".concat((0,Z.PB)("dropdown-item"),"]"):i,p=e.focusFirstItemOnShow,g=e.placement,y=void 0===g?"bottom-start":g,x=e.children,O=(0,D.Z)(),E=(0,l.$c)(n,t,o),j=(0,c.Z)(E,2),k=j[0],P=j[1],M=A(),T=(0,c.Z)(M,2),N=T[0],S=T[1],R=N.current,L=A(),B=(0,c.Z)(L,2),W=B[0],H=B[1],I=W.current,V=(0,d.Z)(k),F=(0,s.useRef)(null),q=(0,s.useRef)(!1),U=(0,s.useContext)(w.Z),z=(0,s.useCallback)((function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:null==t?void 0:t.type;P(e,{originalEvent:t,source:n})}),[P]),K=(0,m.Z)((function(e,t){null==r||r(e,t),z(!1,t,"select"),t.isPropagationStopped()||null==U||U(e,t)})),_=(0,s.useMemo)((function(){return{toggle:z,placement:y,show:k,menuElement:R,toggleElement:I,setMenu:S,setToggle:H}}),[z,y,k,R,I,S,H]);R&&V&&!k&&(q.current=R.contains(R.ownerDocument.activeElement));var J=(0,m.Z)((function(){I&&I.focus&&I.focus()})),X=(0,m.Z)((function(){var e=F.current,t=p;if(null==t&&(t=!(!N.current||!(0,b.bt)(N.current))&&"keyboard"),!1!==t&&("keyboard"!==t||/^key.+$/.test(e))){var n=(0,u.Z)(N.current,a)[0];n&&n.focus&&n.focus()}}));(0,s.useEffect)((function(){k?X():q.current&&(q.current=!1,J())}),[k,q,J,X]),(0,s.useEffect)((function(){F.current=null}));var Y=function(e,t){if(!N.current)return null;var n=(0,u.Z)(N.current,a),r=n.indexOf(e)+t;return n[r=Math.max(0,Math.min(r,n.length))]};return(0,v.Z)((0,s.useCallback)((function(){return O.document}),[O]),"keydown",(function(e){var t,n,r=e.key,o=e.target,i=null==(t=N.current)?void 0:t.contains(o),a=null==(n=W.current)?void 0:n.contains(o);if((!/input|textarea/i.test(o.tagName)||!(" "===r||"Escape"!==r&&i||"Escape"===r&&"search"===o.type))&&(i||a)&&("Tab"!==r||N.current&&k)){F.current=e.type;var s={originalEvent:e,source:e.type};switch(r){case"ArrowUp":var c=Y(o,-1);return c&&c.focus&&c.focus(),void e.preventDefault();case"ArrowDown":if(e.preventDefault(),k){var u=Y(o,1);u&&u.focus&&u.focus()}else P(!0,s);return;case"Tab":(0,f.ZP)(o.ownerDocument,"keyup",(function(e){var t;("Tab"!==e.key||e.target)&&null!=(t=N.current)&&t.contains(e.target)||P(!1,s)}),{once:!0});break;case"Escape":"Escape"===r&&(e.preventDefault(),e.stopPropagation()),P(!1,s)}}})),(0,C.jsx)(w.Z.Provider,{value:K,children:(0,C.jsx)(h.Z.Provider,{value:_,children:x})})}M.displayName="Dropdown",M.Menu=g.Z,M.Toggle=b.ZP,M.Item=P;var T=M,N=n(49401),S=n(16445),R=n(10162),L=["bsPrefix","className","eventKey","disabled","onClick","active","as"],B=s.forwardRef((function(e,t){var n=e.bsPrefix,i=e.className,s=e.eventKey,u=e.disabled,f=void 0!==u&&u,l=e.onClick,d=e.active,p=e.as,v=void 0===p?S.Z:p,m=(0,o.Z)(e,L),h=(0,R.vE)(n,"dropdown-item"),g=j({key:s,href:m.href,disabled:f,onClick:l,active:d}),b=(0,c.Z)(g,2),y=b[0],w=b[1];return(0,C.jsx)(v,(0,r.Z)((0,r.Z)((0,r.Z)({},m),y),{},{ref:t,className:a()(i,h,w.isActive&&"active",f&&"disabled")}))}));B.displayName="DropdownItem";var W=B,H=n(20070),I=n(5107),V=n(91991),F=n(66543),q=["bsPrefix","drop","show","className","align","onSelect","onToggle","focusFirstItemOnShow","as","navbar","autoClose"],U=(0,F.Z)("dropdown-header",{defaultProps:{role:"heading"}}),z=(0,F.Z)("dropdown-divider",{Component:"hr",defaultProps:{role:"separator"}}),K=(0,F.Z)("dropdown-item-text",{Component:"span"}),_=s.forwardRef((function(e,t){var n=(0,l.Ch)(e,{show:"onToggle"}),i=n.bsPrefix,c=n.drop,u=n.show,f=n.className,d=n.align,p=n.onSelect,v=n.onToggle,h=n.focusFirstItemOnShow,g=n.as,b=void 0===g?"div":g,y=(n.navbar,n.autoClose),w=(0,o.Z)(n,q),x=(0,s.useContext)(V.Z),O=(0,R.vE)(i,"dropdown"),Z=(0,R.SC)(),E=(0,m.Z)((function(e,t){var n;t.originalEvent.currentTarget!==document||"keydown"===t.source&&"Escape"!==t.originalEvent.key||(t.source="rootClose"),n=t.source,(!1===y?"click"===n:"inside"===y?"rootClose"!==n:"outside"!==y||"select"!==n)&&(null==v||v(e,t))})),j="end"===d,k=(0,H.J)(j,c,Z),P=(0,s.useMemo)((function(){return{align:d,drop:c,isRTL:Z}}),[d,c,Z]);return(0,C.jsx)(N.Z.Provider,{value:P,children:(0,C.jsx)(T,{placement:k,show:u,onSelect:p,onToggle:E,focusFirstItemOnShow:h,itemSelector:".".concat(O,"-item:not(.disabled):not(:disabled)"),children:x?w.children:(0,C.jsx)(b,(0,r.Z)((0,r.Z)({},w),{},{ref:t,className:a()(f,u&&"show",(!c||"down"===c)&&O,"up"===c&&"dropup","end"===c&&"dropend","start"===c&&"dropstart")}))})})}));_.displayName="Dropdown",_.defaultProps={navbar:!1,align:"start",autoClose:!0};var J=Object.assign(_,{Toggle:I.Z,Menu:H.Z,Item:W,ItemText:K,Divider:z,Header:U})},49401:function(e,t,n){var r=n(72791).createContext({});r.displayName="DropdownContext",t.Z=r},20070:function(e,t,n){n.d(t,{J:function(){return y}});var r=n(1413),o=n(70885),i=n(45987),a=n(81694),s=n.n(a),c=n(72791),u=n(43068),f=n(49815),l=n(73201),d=(n(42391),n(49401)),p=n(91991),v=n(5715),m=n(10162),h=n(80032),g=n(80184),b=["bsPrefix","className","align","rootCloseEvent","flip","show","renderOnMount","as","popperConfig","variant"];function y(e,t,n){var r=e?n?"bottom-start":"bottom-end":n?"bottom-end":"bottom-start";return"up"===t?r=e?n?"top-start":"top-end":n?"top-end":"top-start":"end"===t?r=e?n?"left-end":"right-end":n?"left-start":"right-start":"start"===t&&(r=e?n?"right-end":"left-end":n?"right-start":"left-start"),r}var w=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.className,w=e.align,x=e.rootCloseEvent,O=e.flip,Z=e.show,C=e.renderOnMount,E=e.as,j=void 0===E?"div":E,k=e.popperConfig,P=e.variant,D=(0,i.Z)(e,b),A=!1,M=(0,c.useContext)(v.Z),T=(0,m.vE)(n,"dropdown-menu"),N=(0,c.useContext)(d.Z),S=N.align,R=N.drop,L=N.isRTL;w=w||S;var B=(0,c.useContext)(p.Z),W=[];if(w)if("object"===typeof w){var H=Object.keys(w);if(H.length){var I=H[0],V=w[I];A="start"===V,W.push("".concat(T,"-").concat(I,"-").concat(V))}}else"end"===w&&(A=!0);var F=y(A,R,L),q=(0,u.d)({flip:O,rootCloseEvent:x,show:Z,usePopper:!M&&0===W.length,offset:[0,2],popperConfig:k,placement:F}),U=(0,o.Z)(q,2),z=U[0],K=U[1],_=K.hasShown,J=K.popper,X=K.show,Y=K.toggle;if(z.ref=(0,l.Z)((0,h.Z)(t,"DropdownMenu"),z.ref),(0,f.Z)((function(){X&&(null==J||J.update())}),[X]),!_&&!C&&!B)return null;"string"!==typeof j&&(z.show=X,z.close=function(){return null==Y?void 0:Y(!1)},z.align=w);var $=D.style;return null!=J&&J.placement&&($=(0,r.Z)((0,r.Z)({},D.style),z.style),D["x-placement"]=J.placement),(0,g.jsx)(j,(0,r.Z)((0,r.Z)((0,r.Z)((0,r.Z)({},D),z),{},{style:$},(W.length||M)&&{"data-bs-popper":"static"}),{},{className:s().apply(void 0,[a,T,X&&"show",A&&"".concat(T,"-end"),P&&"".concat(T,"-").concat(P)].concat(W))}))}));w.displayName="DropdownMenu",w.defaultProps={flip:!0},t.Z=w},5107:function(e,t,n){var r=n(1413),o=n(70885),i=n(45987),a=n(81694),s=n.n(a),c=n(72791),u=n(60202),f=n(81551),l=n(73201),d=n(43360),p=n(91991),v=n(10162),m=n(80032),h=n(80184),g=["bsPrefix","split","className","childBsPrefix","as"],b=c.forwardRef((function(e,t){var n=e.bsPrefix,a=e.split,b=e.className,y=e.childBsPrefix,w=e.as,x=void 0===w?d.Z:w,O=(0,i.Z)(e,g),Z=(0,v.vE)(n,"dropdown-toggle"),C=(0,c.useContext)(f.Z),E=(0,c.useContext)(p.Z);void 0!==y&&(O.bsPrefix=y);var j=(0,u.Jr)(),k=(0,o.Z)(j,1)[0];return k.ref=(0,l.Z)(k.ref,(0,m.Z)(t,"DropdownToggle")),(0,h.jsx)(x,(0,r.Z)((0,r.Z)({className:s()(b,Z,a&&"".concat(Z,"-split"),!!E&&(null==C?void 0:C.show)&&"show")},k),O))}));b.displayName="DropdownToggle",t.Z=b},91991:function(e,t,n){var r=n(72791).createContext(null);r.displayName="InputGroupContext",t.Z=r},80032:function(e,t,n){n.d(t,{Z:function(){return r}});n(92176),n(72791),n(73201);function r(e,t){return e}},42391:function(e){var t=function(){};e.exports=t}}]);
//# sourceMappingURL=5353.7afa7c59.chunk.js.map