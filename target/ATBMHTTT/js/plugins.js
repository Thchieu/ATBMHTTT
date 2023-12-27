/*! jQuery v3.6.0 | (c) OpenJS Foundation and other contributors | jquery.org/license */
!function(e,t){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=e.document?t(e,!0):function(e){if(!e.document)throw new Error("jQuery requires a window with a document");return t(e)}:t(e)}("undefined"!=typeof window?window:this,function(C,e){"use strict";var t=[],r=Object.getPrototypeOf,s=t.slice,g=t.flat?function(e){return t.flat.call(e)}:function(e){return t.concat.apply([],e)},u=t.push,i=t.indexOf,n={},o=n.toString,v=n.hasOwnProperty,a=v.toString,l=a.call(Object),y={},m=function(e){return"function"==typeof e&&"number"!=typeof e.nodeType&&"function"!=typeof e.item},x=function(e){return null!=e&&e===e.window},E=C.document,c={type:!0,src:!0,nonce:!0,noModule:!0};function b(e,t,n){var r,i,o=(n=n||E).createElement("script");if(o.text=e,t)for(r in c)(i=t[r]||t.getAttribute&&t.getAttribute(r))&&o.setAttribute(r,i);n.head.appendChild(o).parentNode.removeChild(o)}function w(e){return null==e?e+"":"object"==typeof e||"function"==typeof e?n[o.call(e)]||"object":typeof e}var f="3.6.0",S=function(e,t){return new S.fn.init(e,t)};function p(e){var t=!!e&&"length"in e&&e.length,n=w(e);return!m(e)&&!x(e)&&("array"===n||0===t||"number"==typeof t&&0<t&&t-1 in e)}S.fn=S.prototype={jquery:f,constructor:S,length:0,toArray:function(){return s.call(this)},get:function(e){return null==e?s.call(this):e<0?this[e+this.length]:this[e]},pushStack:function(e){var t=S.merge(this.constructor(),e);return t.prevObject=this,t},each:function(e){return S.each(this,e)},map:function(n){return this.pushStack(S.map(this,function(e,t){return n.call(e,t,e)}))},slice:function(){return this.pushStack(s.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},even:function(){return this.pushStack(S.grep(this,function(e,t){return(t+1)%2}))},odd:function(){return this.pushStack(S.grep(this,function(e,t){return t%2}))},eq:function(e){var t=this.length,n=+e+(e<0?t:0);return this.pushStack(0<=n&&n<t?[this[n]]:[])},end:function(){return this.prevObject||this.constructor()},push:u,sort:t.sort,splice:t.splice},S.extend=S.fn.extend=function(){var e,t,n,r,i,o,a=arguments[0]||{},s=1,u=arguments.length,l=!1;for("boolean"==typeof a&&(l=a,a=arguments[s]||{},s++),"object"==typeof a||m(a)||(a={}),s===u&&(a=this,s--);s<u;s++)if(null!=(e=arguments[s]))for(t in e)r=e[t],"__proto__"!==t&&a!==r&&(l&&r&&(S.isPlainObject(r)||(i=Array.isArray(r)))?(n=a[t],o=i&&!Array.isArray(n)?[]:i||S.isPlainObject(n)?n:{},i=!1,a[t]=S.extend(l,o,r)):void 0!==r&&(a[t]=r));return a},S.extend({expando:"jQuery"+(f+Math.random()).replace(/\D/g,""),isReady:!0,error:function(e){throw new Error(e)},noop:function(){},isPlainObject:function(e){var t,n;return!(!e||"[object Object]"!==o.call(e))&&(!(t=r(e))||"function"==typeof(n=v.call(t,"constructor")&&t.constructor)&&a.call(n)===l)},isEmptyObject:function(e){var t;for(t in e)return!1;return!0},globalEval:function(e,t,n){b(e,{nonce:t&&t.nonce},n)},each:function(e,t){var n,r=0;if(p(e)){for(n=e.length;r<n;r++)if(!1===t.call(e[r],r,e[r]))break}else for(r in e)if(!1===t.call(e[r],r,e[r]))break;return e},makeArray:function(e,t){var n=t||[];return null!=e&&(p(Object(e))?S.merge(n,"string"==typeof e?[e]:e):u.call(n,e)),n},inArray:function(e,t,n){return null==t?-1:i.call(t,e,n)},merge:function(e,t){for(var n=+t.length,r=0,i=e.length;r<n;r++)e[i++]=t[r];return e.length=i,e},grep:function(e,t,n){for(var r=[],i=0,o=e.length,a=!n;i<o;i++)!t(e[i],i)!==a&&r.push(e[i]);return r},map:function(e,t,n){var r,i,o=0,a=[];if(p(e))for(r=e.length;o<r;o++)null!=(i=t(e[o],o,n))&&a.push(i);else for(o in e)null!=(i=t(e[o],o,n))&&a.push(i);return g(a)},guid:1,support:y}),"function"==typeof Symbol&&(S.fn[Symbol.iterator]=t[Symbol.iterator]),S.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(e,t){n["[object "+t+"]"]=t.toLowerCase()});var d=function(n){var e,d,b,o,i,h,f,g,w,u,l,T,C,a,E,v,s,c,y,S="sizzle"+1*new Date,p=n.document,k=0,r=0,m=ue(),x=ue(),A=ue(),N=ue(),j=function(e,t){return e===t&&(l=!0),0},D={}.hasOwnProperty,t=[],q=t.pop,L=t.push,H=t.push,O=t.slice,P=function(e,t){for(var n=0,r=e.length;n<r;n++)if(e[n]===t)return n;return-1},R="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",M="[\\x20\\t\\r\\n\\f]",I="(?:\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+",W="\\["+M+"*("+I+")(?:"+M+"*([*^$|!~]?=)"+M+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+I+"))|)"+M+"*\\]",F=":("+I+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+W+")*)|.*)\\)|)",B=new RegExp(M+"+","g"),$=new RegExp("^"+M+"+|((?:^|[^\\\\])(?:\\\\.)*)"+M+"+$","g"),_=new RegExp("^"+M+"*,"+M+"*"),z=new RegExp("^"+M+"*([>+~]|"+M+")"+M+"*"),U=new RegExp(M+"|>"),X=new RegExp(F),V=new RegExp("^"+I+"$"),G={ID:new RegExp("^#("+I+")"),CLASS:new RegExp("^\\.("+I+")"),TAG:new RegExp("^("+I+"|[*])"),ATTR:new RegExp("^"+W),PSEUDO:new RegExp("^"+F),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+M+"*(even|odd|(([+-]|)(\\d*)n|)"+M+"*(?:([+-]|)"+M+"*(\\d+)|))"+M+"*\\)|)","i"),bool:new RegExp("^(?:"+R+")$","i"),needsContext:new RegExp("^"+M+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+M+"*((?:-\\d)?\\d*)"+M+"*\\)|)(?=[^-]|$)","i")},Y=/HTML$/i,Q=/^(?:input|select|textarea|button)$/i,J=/^h\d$/i,K=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,ee=/[+~]/,te=new RegExp("\\\\[\\da-fA-F]{1,6}"+M+"?|\\\\([^\\r\\n\\f])","g"),ne=function(e,t){var n="0x"+e.slice(1)-65536;return t||(n<0?String.fromCharCode(n+65536):String.fromCharCode(n>>10|55296,1023&n|56320))},re=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ie=function(e,t){return t?"\0"===e?"\ufffd":e.slice(0,-1)+"\\"+e.charCodeAt(e.length-1).toString(16)+" ":"\\"+e},oe=function(){T()},ae=be(function(e){return!0===e.disabled&&"fieldset"===e.nodeName.toLowerCase()},{dir:"parentNode",next:"legend"});try{H.apply(t=O.call(p.childNodes),p.childNodes),t[p.childNodes.length].nodeType}catch(e){H={apply:t.length?function(e,t){L.apply(e,O.call(t))}:function(e,t){var n=e.length,r=0;while(e[n++]=t[r++]);e.length=n-1}}}function se(t,e,n,r){var i,o,a,s,u,l,c,f=e&&e.ownerDocument,p=e?e.nodeType:9;if(n=n||[],"string"!=typeof t||!t||1!==p&&9!==p&&11!==p)return n;if(!r&&(T(e),e=e||C,E)){if(11!==p&&(u=Z.exec(t)))if(i=u[1]){if(9===p){if(!(a=e.getElementById(i)))return n;if(a.id===i)return n.push(a),n}else if(f&&(a=f.getElementById(i))&&y(e,a)&&a.id===i)return n.push(a),n}else{if(u[2])return H.apply(n,e.getElementsByTagName(t)),n;if((i=u[3])&&d.getElementsByClassName&&e.getElementsByClassName)return H.apply(n,e.getElementsByClassName(i)),n}if(d.qsa&&!N[t+" "]&&(!v||!v.test(t))&&(1!==p||"object"!==e.nodeName.toLowerCase())){if(c=t,f=e,1===p&&(U.test(t)||z.test(t))){(f=ee.test(t)&&ye(e.parentNode)||e)===e&&d.scope||((s=e.getAttribute("id"))?s=s.replace(re,ie):e.setAttribute("id",s=S)),o=(l=h(t)).length;while(o--)l[o]=(s?"#"+s:":scope")+" "+xe(l[o]);c=l.join(",")}try{return H.apply(n,f.querySelectorAll(c)),n}catch(e){N(t,!0)}finally{s===S&&e.removeAttribute("id")}}}return g(t.replace($,"$1"),e,n,r)}function ue(){var r=[];return function e(t,n){return r.push(t+" ")>b.cacheLength&&delete e[r.shift()],e[t+" "]=n}}function le(e){return e[S]=!0,e}function ce(e){var t=C.createElement("fieldset");try{return!!e(t)}catch(e){return!1}finally{t.parentNode&&t.parentNode.removeChild(t),t=null}}function fe(e,t){var n=e.split("|"),r=n.length;while(r--)b.attrHandle[n[r]]=t}function pe(e,t){var n=t&&e,r=n&&1===e.nodeType&&1===t.nodeType&&e.sourceIndex-t.sourceIndex;if(r)return r;if(n)while(n=n.nextSibling)if(n===t)return-1;return e?1:-1}function de(t){return function(e){return"input"===e.nodeName.toLowerCase()&&e.type===t}}function he(n){return function(e){var t=e.nodeName.toLowerCase();return("input"===t||"button"===t)&&e.type===n}}function ge(t){return function(e){return"form"in e?e.parentNode&&!1===e.disabled?"label"in e?"label"in e.parentNode?e.parentNode.disabled===t:e.disabled===t:e.isDisabled===t||e.isDisabled!==!t&&ae(e)===t:e.disabled===t:"label"in e&&e.disabled===t}}function ve(a){return le(function(o){return o=+o,le(function(e,t){var n,r=a([],e.length,o),i=r.length;while(i--)e[n=r[i]]&&(e[n]=!(t[n]=e[n]))})})}function ye(e){return e&&"undefined"!=typeof e.getElementsByTagName&&e}for(e in d=se.support={},i=se.isXML=function(e){var t=e&&e.namespaceURI,n=e&&(e.ownerDocument||e).documentElement;return!Y.test(t||n&&n.nodeName||"HTML")},T=se.setDocument=function(e){var t,n,r=e?e.ownerDocument||e:p;return r!=C&&9===r.nodeType&&r.documentElement&&(a=(C=r).documentElement,E=!i(C),p!=C&&(n=C.defaultView)&&n.top!==n&&(n.addEventListener?n.addEventListener("unload",oe,!1):n.attachEvent&&n.attachEvent("onunload",oe)),d.scope=ce(function(e){return a.appendChild(e).appendChild(C.createElement("div")),"undefined"!=typeof e.querySelectorAll&&!e.querySelectorAll(":scope fieldset div").length}),d.attributes=ce(function(e){return e.className="i",!e.getAttribute("className")}),d.getElementsByTagName=ce(function(e){return e.appendChild(C.createComment("")),!e.getElementsByTagName("*").length}),d.getElementsByClassName=K.test(C.getElementsByClassName),d.getById=ce(function(e){return a.appendChild(e).id=S,!C.getElementsByName||!C.getElementsByName(S).length}),d.getById?(b.filter.ID=function(e){var t=e.replace(te,ne);return function(e){return e.getAttribute("id")===t}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n=t.getElementById(e);return n?[n]:[]}}):(b.filter.ID=function(e){var n=e.replace(te,ne);return function(e){var t="undefined"!=typeof e.getAttributeNode&&e.getAttributeNode("id");return t&&t.value===n}},b.find.ID=function(e,t){if("undefined"!=typeof t.getElementById&&E){var n,r,i,o=t.getElementById(e);if(o){if((n=o.getAttributeNode("id"))&&n.value===e)return[o];i=t.getElementsByName(e),r=0;while(o=i[r++])if((n=o.getAttributeNode("id"))&&n.value===e)return[o]}return[]}}),b.find.TAG=d.getElementsByTagName?function(e,t){return"undefined"!=typeof t.getElementsByTagName?t.getElementsByTagName(e):d.qsa?t.querySelectorAll(e):void 0}:function(e,t){var n,r=[],i=0,o=t.getElementsByTagName(e);if("*"===e){while(n=o[i++])1===n.nodeType&&r.push(n);return r}return o},b.find.CLASS=d.getElementsByClassName&&function(e,t){if("undefined"!=typeof t.getElementsByClassName&&E)return t.getElementsByClassName(e)},s=[],v=[],(d.qsa=K.test(C.querySelectorAll))&&(ce(function(e){var t;a.appendChild(e).innerHTML="<a id='"+S+"'></a><select id='"+S+"-\r\\' msallowcapture=''><option selected=''></option></select>",e.querySelectorAll("[msallowcapture^='']").length&&v.push("[*^$]="+M+"*(?:''|\"\")"),e.querySelectorAll("[selected]").length||v.push("\\["+M+"*(?:value|"+R+")"),e.querySelectorAll("[id~="+S+"-]").length||v.push("~="),(t=C.createElement("input")).setAttribute("name",""),e.appendChild(t),e.querySelectorAll("[name='']").length||v.push("\\["+M+"*name"+M+"*="+M+"*(?:''|\"\")"),e.querySelectorAll(":checked").length||v.push(":checked"),e.querySelectorAll("a#"+S+"+*").length||v.push(".#.+[+~]"),e.querySelectorAll("\\\f"),v.push("[\\r\\n\\f]")}),ce(function(e){e.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var t=C.createElement("input");t.setAttribute("type","hidden"),e.appendChild(t).setAttribute("name","D"),e.querySelectorAll("[name=d]").length&&v.push("name"+M+"*[*^$|!~]?="),2!==e.querySelectorAll(":enabled").length&&v.push(":enabled",":disabled"),a.appendChild(e).disabled=!0,2!==e.querySelectorAll(":disabled").length&&v.push(":enabled",":disabled"),e.querySelectorAll("*,:x"),v.push(",.*:")})),(d.matchesSelector=K.test(c=a.matches||a.webkitMatchesSelector||a.mozMatchesSelector||a.oMatchesSelector||a.msMatchesSelector))&&ce(function(e){d.disconnectedMatch=c.call(e,"*"),c.call(e,"[s!='']:x"),s.push("!=",F)}),v=v.length&&new RegExp(v.join("|")),s=s.length&&new RegExp(s.join("|")),t=K.test(a.compareDocumentPosition),y=t||K.test(a.contains)?function(e,t){var n=9===e.nodeType?e.documentElement:e,r=t&&t.parentNode;return e===r||!(!r||1!==r.nodeType||!(n.contains?n.contains(r):e.compareDocumentPosition&&16&e.compareDocumentPosition(r)))}:function(e,t){if(t)while(t=t.parentNode)if(t===e)return!0;return!1},j=t?function(e,t){if(e===t)return l=!0,0;var n=!e.compareDocumentPosition-!t.compareDocumentPosition;return n||(1&(n=(e.ownerDocument||e)==(t.ownerDocument||t)?e.compareDocumentPosition(t):1)||!d.sortDetached&&t.compareDocumentPosition(e)===n?e==C||e.ownerDocument==p&&y(p,e)?-1:t==C||t.ownerDocument==p&&y(p,t)?1:u?P(u,e)-P(u,t):0:4&n?-1:1)}:function(e,t){if(e===t)return l=!0,0;var n,r=0,i=e.parentNode,o=t.parentNode,a=[e],s=[t];if(!i||!o)return e==C?-1:t==C?1:i?-1:o?1:u?P(u,e)-P(u,t):0;if(i===o)return pe(e,t);n=e;while(n=n.parentNode)a.unshift(n);n=t;while(n=n.parentNode)s.unshift(n);while(a[r]===s[r])r++;return r?pe(a[r],s[r]):a[r]==p?-1:s[r]==p?1:0}),C},se.matches=function(e,t){return se(e,null,null,t)},se.matchesSelector=function(e,t){if(T(e),d.matchesSelector&&E&&!N[t+" "]&&(!s||!s.test(t))&&(!v||!v.test(t)))try{var n=c.call(e,t);if(n||d.disconnectedMatch||e.document&&11!==e.document.nodeType)return n}catch(e){N(t,!0)}return 0<se(t,C,null,[e]).length},se.contains=function(e,t){return(e.ownerDocument||e)!=C&&T(e),y(e,t)},se.attr=function(e,t){(e.ownerDocument||e)!=C&&T(e);var n=b.attrHandle[t.toLowerCase()],r=n&&D.call(b.attrHandle,t.toLowerCase())?n(e,t,!E):void 0;return void 0!==r?r:d.attributes||!E?e.getAttribute(t):(r=e.getAttributeNode(t))&&r.specified?r.value:null},se.escape=function(e){return(e+"").replace(re,ie)},se.error=function(e){throw new Error("Syntax error, unrecognized expression: "+e)},se.uniqueSort=function(e){var t,n=[],r=0,i=0;if(l=!d.detectDuplicates,u=!d.sortStable&&e.slice(0),e.sort(j),l){while(t=e[i++])t===e[i]&&(r=n.push(i));while(r--)e.splice(n[r],1)}return u=null,e},o=se.getText=function(e){var t,n="",r=0,i=e.nodeType;if(i){if(1===i||9===i||11===i){if("string"==typeof e.textContent)return e.textContent;for(e=e.firstChild;e;e=e.nextSibling)n+=o(e)}else if(3===i||4===i)return e.nodeValue}else while(t=e[r++])n+=o(t);return n},(b=se.selectors={cacheLength:50,createPseudo:le,match:G,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(e){return e[1]=e[1].replace(te,ne),e[3]=(e[3]||e[4]||e[5]||"").replace(te,ne),"~="===e[2]&&(e[3]=" "+e[3]+" "),e.slice(0,4)},CHILD:function(e){return e[1]=e[1].toLowerCase(),"nth"===e[1].slice(0,3)?(e[3]||se.error(e[0]),e[4]=+(e[4]?e[5]+(e[6]||1):2*("even"===e[3]||"odd"===e[3])),e[5]=+(e[7]+e[8]||"odd"===e[3])):e[3]&&se.error(e[0]),e},PSEUDO:function(e){var t,n=!e[6]&&e[2];return G.CHILD.test(e[0])?null:(e[3]?e[2]=e[4]||e[5]||"":n&&X.test(n)&&(t=h(n,!0))&&(t=n.indexOf(")",n.length-t)-n.length)&&(e[0]=e[0].slice(0,t),e[2]=n.slice(0,t)),e.slice(0,3))}},filter:{TAG:function(e){var t=e.replace(te,ne).toLowerCase();return"*"===e?function(){return!0}:function(e){return e.nodeName&&e.nodeName.toLowerCase()===t}},CLASS:function(e){var t=m[e+" "];return t||(t=new RegExp("(^|"+M+")"+e+"("+M+"|$)"))&&m(e,function(e){return t.test("string"==typeof e.className&&e.className||"undefined"!=typeof e.getAttribute&&e.getAttribute("class")||"")})},ATTR:function(n,r,i){return function(e){var t=se.attr(e,n);return null==t?"!="===r:!r||(t+="","="===r?t===i:"!="===r?t!==i:"^="===r?i&&0===t.indexOf(i):"*="===r?i&&-1<t.indexOf(i):"$="===r?i&&t.slice(-i.length)===i:"~="===r?-1<(" "+t.replace(B," ")+" ").indexOf(i):"|="===r&&(t===i||t.slice(0,i.length+1)===i+"-"))}},CHILD:function(h,e,t,g,v){var y="nth"!==h.slice(0,3),m="last"!==h.slice(-4),x="of-type"===e;return 1===g&&0===v?function(e){return!!e.parentNode}:function(e,t,n){var r,i,o,a,s,u,l=y!==m?"nextSibling":"previousSibling",c=e.parentNode,f=x&&e.nodeName.toLowerCase(),p=!n&&!x,d=!1;if(c){if(y){while(l){a=e;while(a=a[l])if(x?a.nodeName.toLowerCase()===f:1===a.nodeType)return!1;u=l="only"===h&&!u&&"nextSibling"}return!0}if(u=[m?c.firstChild:c.lastChild],m&&p){d=(s=(r=(i=(o=(a=c)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1])&&r[2],a=s&&c.childNodes[s];while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if(1===a.nodeType&&++d&&a===e){i[h]=[k,s,d];break}}else if(p&&(d=s=(r=(i=(o=(a=e)[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]||[])[0]===k&&r[1]),!1===d)while(a=++s&&a&&a[l]||(d=s=0)||u.pop())if((x?a.nodeName.toLowerCase()===f:1===a.nodeType)&&++d&&(p&&((i=(o=a[S]||(a[S]={}))[a.uniqueID]||(o[a.uniqueID]={}))[h]=[k,d]),a===e))break;return(d-=v)===g||d%g==0&&0<=d/g}}},PSEUDO:function(e,o){var t,a=b.pseudos[e]||b.setFilters[e.toLowerCase()]||se.error("unsupported pseudo: "+e);return a[S]?a(o):1<a.length?(t=[e,e,"",o],b.setFilters.hasOwnProperty(e.toLowerCase())?le(function(e,t){var n,r=a(e,o),i=r.length;while(i--)e[n=P(e,r[i])]=!(t[n]=r[i])}):function(e){return a(e,0,t)}):a}},pseudos:{not:le(function(e){var r=[],i=[],s=f(e.replace($,"$1"));return s[S]?le(function(e,t,n,r){var i,o=s(e,null,r,[]),a=e.length;while(a--)(i=o[a])&&(e[a]=!(t[a]=i))}):function(e,t,n){return r[0]=e,s(r,null,n,i),r[0]=null,!i.pop()}}),has:le(function(t){return function(e){return 0<se(t,e).length}}),contains:le(function(t){return t=t.replace(te,ne),function(e){return-1<(e.textContent||o(e)).indexOf(t)}}),lang:le(function(n){return V.test(n||"")||se.error("unsupported lang: "+n),n=n.replace(te,ne).toLowerCase(),function(e){var t;do{if(t=E?e.lang:e.getAttribute("xml:lang")||e.getAttribute("lang"))return(t=t.toLowerCase())===n||0===t.indexOf(n+"-")}while((e=e.parentNode)&&1===e.nodeType);return!1}}),target:function(e){var t=n.location&&n.location.hash;return t&&t.slice(1)===e.id},root:function(e){return e===a},focus:function(e){return e===C.activeElement&&(!C.hasFocus||C.hasFocus())&&!!(e.type||e.href||~e.tabIndex)},enabled:ge(!1),disabled:ge(!0),checked:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&!!e.checked||"option"===t&&!!e.selected},selected:function(e){return e.parentNode&&e.parentNode.selectedIndex,!0===e.selected},empty:function(e){for(e=e.firstChild;e;e=e.nextSibling)if(e.nodeType<6)return!1;return!0},parent:function(e){return!b.pseudos.empty(e)},header:function(e){return J.test(e.nodeName)},input:function(e){return Q.test(e.nodeName)},button:function(e){var t=e.nodeName.toLowerCase();return"input"===t&&"button"===e.type||"button"===t},text:function(e){var t;return"input"===e.nodeName.toLowerCase()&&"text"===e.type&&(null==(t=e.getAttribute("type"))||"text"===t.toLowerCase())},first:ve(function(){return[0]}),last:ve(function(e,t){return[t-1]}),eq:ve(function(e,t,n){return[n<0?n+t:n]}),even:ve(function(e,t){for(var n=0;n<t;n+=2)e.push(n);return e}),odd:ve(function(e,t){for(var n=1;n<t;n+=2)e.push(n);return e}),lt:ve(function(e,t,n){for(var r=n<0?n+t:t<n?t:n;0<=--r;)e.push(r);return e}),gt:ve(function(e,t,n){for(var r=n<0?n+t:n;++r<t;)e.push(r);return e})}}).pseudos.nth=b.pseudos.eq,{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})b.pseudos[e]=de(e);for(e in{submit:!0,reset:!0})b.pseudos[e]=he(e);function me(){}function xe(e){for(var t=0,n=e.length,r="";t<n;t++)r+=e[t].value;return r}function be(s,e,t){var u=e.dir,l=e.next,c=l||u,f=t&&"parentNode"===c,p=r++;return e.first?function(e,t,n){while(e=e[u])if(1===e.nodeType||f)return s(e,t,n);return!1}:function(e,t,n){var r,i,o,a=[k,p];if(n){while(e=e[u])if((1===e.nodeType||f)&&s(e,t,n))return!0}else while(e=e[u])if(1===e.nodeType||f)if(i=(o=e[S]||(e[S]={}))[e.uniqueID]||(o[e.uniqueID]={}),l&&l===e.nodeName.toLowerCase())e=e[u]||e;else{if((r=i[c])&&r[0]===k&&r[1]===p)return a[2]=r[2];if((i[c]=a)[2]=s(e,t,n))return!0}return!1}}function we(i){return 1<i.length?function(e,t,n){var r=i.length;while(r--)if(!i[r](e,t,n))return!1;return!0}:i[0]}function Te(e,t,n,r,i){for(var o,a=[],s=0,u=e.length,l=null!=t;s<u;s++)(o=e[s])&&(n&&!n(o,r,i)||(a.push(o),l&&t.push(s)));return a}function Ce(d,h,g,v,y,e){return v&&!v[S]&&(v=Ce(v)),y&&!y[S]&&(y=Ce(y,e)),le(function(e,t,n,r){var i,o,a,s=[],u=[],l=t.length,c=e||function(e,t,n){for(var r=0,i=t.length;r<i;r++)se(e,t[r],n);return n}(h||"*",n.nodeType?[n]:n,[]),f=!d||!e&&h?c:Te(c,s,d,n,r),p=g?y||(e?d:l||v)?[]:t:f;if(g&&g(f,p,n,r),v){i=Te(p,u),v(i,[],n,r),o=i.length;while(o--)(a=i[o])&&(p[u[o]]=!(f[u[o]]=a))}if(e){if(y||d){if(y){i=[],o=p.length;while(o--)(a=p[o])&&i.push(f[o]=a);y(null,p=[],i,r)}o=p.length;while(o--)(a=p[o])&&-1<(i=y?P(e,a):s[o])&&(e[i]=!(t[i]=a))}}else p=Te(p===t?p.splice(l,p.length):p),y?y(null,t,p,r):H.apply(t,p)})}function Ee(e){for(var i,t,n,r=e.length,o=b.relative[e[0].type],a=o||b.relative[" "],s=o?1:0,u=be(function(e){return e===i},a,!0),l=be(function(e){return-1<P(i,e)},a,!0),c=[function(e,t,n){var r=!o&&(n||t!==w)||((i=t).nodeType?u(e,t,n):l(e,t,n));return i=null,r}];s<r;s++)if(t=b.relative[e[s].type])c=[be(we(c),t)];else{if((t=b.filter[e[s].type].apply(null,e[s].matches))[S]){for(n=++s;n<r;n++)if(b.relative[e[n].type])break;return Ce(1<s&&we(c),1<s&&xe(e.slice(0,s-1).concat({value:" "===e[s-2].type?"*":""})).replace($,"$1"),t,s<n&&Ee(e.slice(s,n)),n<r&&Ee(e=e.slice(n)),n<r&&xe(e))}c.push(t)}return we(c)}return me.prototype=b.filters=b.pseudos,b.setFilters=new me,h=se.tokenize=function(e,t){var n,r,i,o,a,s,u,l=x[e+" "];if(l)return t?0:l.slice(0);a=e,s=[],u=b.preFilter;while(a){for(o in n&&!(r=_.exec(a))||(r&&(a=a.slice(r[0].length)||a),s.push(i=[])),n=!1,(r=z.exec(a))&&(n=r.shift(),i.push({value:n,type:r[0].replace($," ")}),a=a.slice(n.length)),b.filter)!(r=G[o].exec(a))||u[o]&&!(r=u[o](r))||(n=r.shift(),i.push({value:n,type:o,matches:r}),a=a.slice(n.length));if(!n)break}return t?a.length:a?se.error(e):x(e,s).slice(0)},f=se.compile=function(e,t){var n,v,y,m,x,r,i=[],o=[],a=A[e+" "];if(!a){t||(t=h(e)),n=t.length;while(n--)(a=Ee(t[n]))[S]?i.push(a):o.push(a);(a=A(e,(v=o,m=0<(y=i).length,x=0<v.length,r=function(e,t,n,r,i){var o,a,s,u=0,l="0",c=e&&[],f=[],p=w,d=e||x&&b.find.TAG("*",i),h=k+=null==p?1:Math.random()||.1,g=d.length;for(i&&(w=t==C||t||i);l!==g&&null!=(o=d[l]);l++){if(x&&o){a=0,t||o.ownerDocument==C||(T(o),n=!E);while(s=v[a++])if(s(o,t||C,n)){r.push(o);break}i&&(k=h)}m&&((o=!s&&o)&&u--,e&&c.push(o))}if(u+=l,m&&l!==u){a=0;while(s=y[a++])s(c,f,t,n);if(e){if(0<u)while(l--)c[l]||f[l]||(f[l]=q.call(r));f=Te(f)}H.apply(r,f),i&&!e&&0<f.length&&1<u+y.length&&se.uniqueSort(r)}return i&&(k=h,w=p),c},m?le(r):r))).selector=e}return a},g=se.select=function(e,t,n,r){var i,o,a,s,u,l="function"==typeof e&&e,c=!r&&h(e=l.selector||e);if(n=n||[],1===c.length){if(2<(o=c[0]=c[0].slice(0)).length&&"ID"===(a=o[0]).type&&9===t.nodeType&&E&&b.relative[o[1].type]){if(!(t=(b.find.ID(a.matches[0].replace(te,ne),t)||[])[0]))return n;l&&(t=t.parentNode),e=e.slice(o.shift().value.length)}i=G.needsContext.test(e)?0:o.length;while(i--){if(a=o[i],b.relative[s=a.type])break;if((u=b.find[s])&&(r=u(a.matches[0].replace(te,ne),ee.test(o[0].type)&&ye(t.parentNode)||t))){if(o.splice(i,1),!(e=r.length&&xe(o)))return H.apply(n,r),n;break}}}return(l||f(e,c))(r,t,!E,n,!t||ee.test(e)&&ye(t.parentNode)||t),n},d.sortStable=S.split("").sort(j).join("")===S,d.detectDuplicates=!!l,T(),d.sortDetached=ce(function(e){return 1&e.compareDocumentPosition(C.createElement("fieldset"))}),ce(function(e){return e.innerHTML="<a href='#'></a>","#"===e.firstChild.getAttribute("href")})||fe("type|href|height|width",function(e,t,n){if(!n)return e.getAttribute(t,"type"===t.toLowerCase()?1:2)}),d.attributes&&ce(function(e){return e.innerHTML="<input/>",e.firstChild.setAttribute("value",""),""===e.firstChild.getAttribute("value")})||fe("value",function(e,t,n){if(!n&&"input"===e.nodeName.toLowerCase())return e.defaultValue}),ce(function(e){return null==e.getAttribute("disabled")})||fe(R,function(e,t,n){var r;if(!n)return!0===e[t]?t.toLowerCase():(r=e.getAttributeNode(t))&&r.specified?r.value:null}),se}(C);S.find=d,S.expr=d.selectors,S.expr[":"]=S.expr.pseudos,S.uniqueSort=S.unique=d.uniqueSort,S.text=d.getText,S.isXMLDoc=d.isXML,S.contains=d.contains,S.escapeSelector=d.escape;var h=function(e,t,n){var r=[],i=void 0!==n;while((e=e[t])&&9!==e.nodeType)if(1===e.nodeType){if(i&&S(e).is(n))break;r.push(e)}return r},T=function(e,t){for(var n=[];e;e=e.nextSibling)1===e.nodeType&&e!==t&&n.push(e);return n},k=S.expr.match.needsContext;function A(e,t){return e.nodeName&&e.nodeName.toLowerCase()===t.toLowerCase()}var N=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function j(e,n,r){return m(n)?S.grep(e,function(e,t){return!!n.call(e,t,e)!==r}):n.nodeType?S.grep(e,function(e){return e===n!==r}):"string"!=typeof n?S.grep(e,function(e){return-1<i.call(n,e)!==r}):S.filter(n,e,r)}S.filter=function(e,t,n){var r=t[0];return n&&(e=":not("+e+")"),1===t.length&&1===r.nodeType?S.find.matchesSelector(r,e)?[r]:[]:S.find.matches(e,S.grep(t,function(e){return 1===e.nodeType}))},S.fn.extend({find:function(e){var t,n,r=this.length,i=this;if("string"!=typeof e)return this.pushStack(S(e).filter(function(){for(t=0;t<r;t++)if(S.contains(i[t],this))return!0}));for(n=this.pushStack([]),t=0;t<r;t++)S.find(e,i[t],n);return 1<r?S.uniqueSort(n):n},filter:function(e){return this.pushStack(j(this,e||[],!1))},not:function(e){return this.pushStack(j(this,e||[],!0))},is:function(e){return!!j(this,"string"==typeof e&&k.test(e)?S(e):e||[],!1).length}});var D,q=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/;(S.fn.init=function(e,t,n){var r,i;if(!e)return this;if(n=n||D,"string"==typeof e){if(!(r="<"===e[0]&&">"===e[e.length-1]&&3<=e.length?[null,e,null]:q.exec(e))||!r[1]&&t)return!t||t.jquery?(t||n).find(e):this.constructor(t).find(e);if(r[1]){if(t=t instanceof S?t[0]:t,S.merge(this,S.parseHTML(r[1],t&&t.nodeType?t.ownerDocument||t:E,!0)),N.test(r[1])&&S.isPlainObject(t))for(r in t)m(this[r])?this[r](t[r]):this.attr(r,t[r]);return this}return(i=E.getElementById(r[2]))&&(this[0]=i,this.length=1),this}return e.nodeType?(this[0]=e,this.length=1,this):m(e)?void 0!==n.ready?n.ready(e):e(S):S.makeArray(e,this)}).prototype=S.fn,D=S(E);var L=/^(?:parents|prev(?:Until|All))/,H={children:!0,contents:!0,next:!0,prev:!0};function O(e,t){while((e=e[t])&&1!==e.nodeType);return e}S.fn.extend({has:function(e){var t=S(e,this),n=t.length;return this.filter(function(){for(var e=0;e<n;e++)if(S.contains(this,t[e]))return!0})},closest:function(e,t){var n,r=0,i=this.length,o=[],a="string"!=typeof e&&S(e);if(!k.test(e))for(;r<i;r++)for(n=this[r];n&&n!==t;n=n.parentNode)if(n.nodeType<11&&(a?-1<a.index(n):1===n.nodeType&&S.find.matchesSelector(n,e))){o.push(n);break}return this.pushStack(1<o.length?S.uniqueSort(o):o)},index:function(e){return e?"string"==typeof e?i.call(S(e),this[0]):i.call(this,e.jquery?e[0]:e):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(e,t){return this.pushStack(S.uniqueSort(S.merge(this.get(),S(e,t))))},addBack:function(e){return this.add(null==e?this.prevObject:this.prevObject.filter(e))}}),S.each({parent:function(e){var t=e.parentNode;return t&&11!==t.nodeType?t:null},parents:function(e){return h(e,"parentNode")},parentsUntil:function(e,t,n){return h(e,"parentNode",n)},next:function(e){return O(e,"nextSibling")},prev:function(e){return O(e,"previousSibling")},nextAll:function(e){return h(e,"nextSibling")},prevAll:function(e){return h(e,"previousSibling")},nextUntil:function(e,t,n){return h(e,"nextSibling",n)},prevUntil:function(e,t,n){return h(e,"previousSibling",n)},siblings:function(e){return T((e.parentNode||{}).firstChild,e)},children:function(e){return T(e.firstChild)},contents:function(e){return null!=e.contentDocument&&r(e.contentDocument)?e.contentDocument:(A(e,"template")&&(e=e.content||e),S.merge([],e.childNodes))}},function(r,i){S.fn[r]=function(e,t){var n=S.map(this,i,e);return"Until"!==r.slice(-5)&&(t=e),t&&"string"==typeof t&&(n=S.filter(t,n)),1<this.length&&(H[r]||S.uniqueSort(n),L.test(r)&&n.reverse()),this.pushStack(n)}});var P=/[^\x20\t\r\n\f]+/g;function R(e){return e}function M(e){throw e}function I(e,t,n,r){var i;try{e&&m(i=e.promise)?i.call(e).done(t).fail(n):e&&m(i=e.then)?i.call(e,t,n):t.apply(void 0,[e].slice(r))}catch(e){n.apply(void 0,[e])}}S.Callbacks=function(r){var e,n;r="string"==typeof r?(e=r,n={},S.each(e.match(P)||[],function(e,t){n[t]=!0}),n):S.extend({},r);var i,t,o,a,s=[],u=[],l=-1,c=function(){for(a=a||r.once,o=i=!0;u.length;l=-1){t=u.shift();while(++l<s.length)!1===s[l].apply(t[0],t[1])&&r.stopOnFalse&&(l=s.length,t=!1)}r.memory||(t=!1),i=!1,a&&(s=t?[]:"")},f={add:function(){return s&&(t&&!i&&(l=s.length-1,u.push(t)),function n(e){S.each(e,function(e,t){m(t)?r.unique&&f.has(t)||s.push(t):t&&t.length&&"string"!==w(t)&&n(t)})}(arguments),t&&!i&&c()),this},remove:function(){return S.each(arguments,function(e,t){var n;while(-1<(n=S.inArray(t,s,n)))s.splice(n,1),n<=l&&l--}),this},has:function(e){return e?-1<S.inArray(e,s):0<s.length},empty:function(){return s&&(s=[]),this},disable:function(){return a=u=[],s=t="",this},disabled:function(){return!s},lock:function(){return a=u=[],t||i||(s=t=""),this},locked:function(){return!!a},fireWith:function(e,t){return a||(t=[e,(t=t||[]).slice?t.slice():t],u.push(t),i||c()),this},fire:function(){return f.fireWith(this,arguments),this},fired:function(){return!!o}};return f},S.extend({Deferred:function(e){var o=[["notify","progress",S.Callbacks("memory"),S.Callbacks("memory"),2],["resolve","done",S.Callbacks("once memory"),S.Callbacks("once memory"),0,"resolved"],["reject","fail",S.Callbacks("once memory"),S.Callbacks("once memory"),1,"rejected"]],i="pending",a={state:function(){return i},always:function(){return s.done(arguments).fail(arguments),this},"catch":function(e){return a.then(null,e)},pipe:function(){var i=arguments;return S.Deferred(function(r){S.each(o,function(e,t){var n=m(i[t[4]])&&i[t[4]];s[t[1]](function(){var e=n&&n.apply(this,arguments);e&&m(e.promise)?e.promise().progress(r.notify).done(r.resolve).fail(r.reject):r[t[0]+"With"](this,n?[e]:arguments)})}),i=null}).promise()},then:function(t,n,r){var u=0;function l(i,o,a,s){return function(){var n=this,r=arguments,e=function(){var e,t;if(!(i<u)){if((e=a.apply(n,r))===o.promise())throw new TypeError("Thenable self-resolution");t=e&&("object"==typeof e||"function"==typeof e)&&e.then,m(t)?s?t.call(e,l(u,o,R,s),l(u,o,M,s)):(u++,t.call(e,l(u,o,R,s),l(u,o,M,s),l(u,o,R,o.notifyWith))):(a!==R&&(n=void 0,r=[e]),(s||o.resolveWith)(n,r))}},t=s?e:function(){try{e()}catch(e){S.Deferred.exceptionHook&&S.Deferred.exceptionHook(e,t.stackTrace),u<=i+1&&(a!==M&&(n=void 0,r=[e]),o.rejectWith(n,r))}};i?t():(S.Deferred.getStackHook&&(t.stackTrace=S.Deferred.getStackHook()),C.setTimeout(t))}}return S.Deferred(function(e){o[0][3].add(l(0,e,m(r)?r:R,e.notifyWith)),o[1][3].add(l(0,e,m(t)?t:R)),o[2][3].add(l(0,e,m(n)?n:M))}).promise()},promise:function(e){return null!=e?S.extend(e,a):a}},s={};return S.each(o,function(e,t){var n=t[2],r=t[5];a[t[1]]=n.add,r&&n.add(function(){i=r},o[3-e][2].disable,o[3-e][3].disable,o[0][2].lock,o[0][3].lock),n.add(t[3].fire),s[t[0]]=function(){return s[t[0]+"With"](this===s?void 0:this,arguments),this},s[t[0]+"With"]=n.fireWith}),a.promise(s),e&&e.call(s,s),s},when:function(e){var n=arguments.length,t=n,r=Array(t),i=s.call(arguments),o=S.Deferred(),a=function(t){return function(e){r[t]=this,i[t]=1<arguments.length?s.call(arguments):e,--n||o.resolveWith(r,i)}};if(n<=1&&(I(e,o.done(a(t)).resolve,o.reject,!n),"pending"===o.state()||m(i[t]&&i[t].then)))return o.then();while(t--)I(i[t],a(t),o.reject);return o.promise()}});var W=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;S.Deferred.exceptionHook=function(e,t){C.console&&C.console.warn&&e&&W.test(e.name)&&C.console.warn("jQuery.Deferred exception: "+e.message,e.stack,t)},S.readyException=function(e){C.setTimeout(function(){throw e})};var F=S.Deferred();function B(){E.removeEventListener("DOMContentLoaded",B),C.removeEventListener("load",B),S.ready()}S.fn.ready=function(e){return F.then(e)["catch"](function(e){S.readyException(e)}),this},S.extend({isReady:!1,readyWait:1,ready:function(e){(!0===e?--S.readyWait:S.isReady)||(S.isReady=!0)!==e&&0<--S.readyWait||F.resolveWith(E,[S])}}),S.ready.then=F.then,"complete"===E.readyState||"loading"!==E.readyState&&!E.documentElement.doScroll?C.setTimeout(S.ready):(E.addEventListener("DOMContentLoaded",B),C.addEventListener("load",B));var $=function(e,t,n,r,i,o,a){var s=0,u=e.length,l=null==n;if("object"===w(n))for(s in i=!0,n)$(e,t,s,n[s],!0,o,a);else if(void 0!==r&&(i=!0,m(r)||(a=!0),l&&(a?(t.call(e,r),t=null):(l=t,t=function(e,t,n){return l.call(S(e),n)})),t))for(;s<u;s++)t(e[s],n,a?r:r.call(e[s],s,t(e[s],n)));return i?e:l?t.call(e):u?t(e[0],n):o},_=/^-ms-/,z=/-([a-z])/g;function U(e,t){return t.toUpperCase()}function X(e){return e.replace(_,"ms-").replace(z,U)}var V=function(e){return 1===e.nodeType||9===e.nodeType||!+e.nodeType};function G(){this.expando=S.expando+G.uid++}G.uid=1,G.prototype={cache:function(e){var t=e[this.expando];return t||(t={},V(e)&&(e.nodeType?e[this.expando]=t:Object.defineProperty(e,this.expando,{value:t,configurable:!0}))),t},set:function(e,t,n){var r,i=this.cache(e);if("string"==typeof t)i[X(t)]=n;else for(r in t)i[X(r)]=t[r];return i},get:function(e,t){return void 0===t?this.cache(e):e[this.expando]&&e[this.expando][X(t)]},access:function(e,t,n){return void 0===t||t&&"string"==typeof t&&void 0===n?this.get(e,t):(this.set(e,t,n),void 0!==n?n:t)},remove:function(e,t){var n,r=e[this.expando];if(void 0!==r){if(void 0!==t){n=(t=Array.isArray(t)?t.map(X):(t=X(t))in r?[t]:t.match(P)||[]).length;while(n--)delete r[t[n]]}(void 0===t||S.isEmptyObject(r))&&(e.nodeType?e[this.expando]=void 0:delete e[this.expando])}},hasData:function(e){var t=e[this.expando];return void 0!==t&&!S.isEmptyObject(t)}};var Y=new G,Q=new G,J=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,K=/[A-Z]/g;function Z(e,t,n){var r,i;if(void 0===n&&1===e.nodeType)if(r="data-"+t.replace(K,"-$&").toLowerCase(),"string"==typeof(n=e.getAttribute(r))){try{n="true"===(i=n)||"false"!==i&&("null"===i?null:i===+i+""?+i:J.test(i)?JSON.parse(i):i)}catch(e){}Q.set(e,t,n)}else n=void 0;return n}S.extend({hasData:function(e){return Q.hasData(e)||Y.hasData(e)},data:function(e,t,n){return Q.access(e,t,n)},removeData:function(e,t){Q.remove(e,t)},_data:function(e,t,n){return Y.access(e,t,n)},_removeData:function(e,t){Y.remove(e,t)}}),S.fn.extend({data:function(n,e){var t,r,i,o=this[0],a=o&&o.attributes;if(void 0===n){if(this.length&&(i=Q.get(o),1===o.nodeType&&!Y.get(o,"hasDataAttrs"))){t=a.length;while(t--)a[t]&&0===(r=a[t].name).indexOf("data-")&&(r=X(r.slice(5)),Z(o,r,i[r]));Y.set(o,"hasDataAttrs",!0)}return i}return"object"==typeof n?this.each(function(){Q.set(this,n)}):$(this,function(e){var t;if(o&&void 0===e)return void 0!==(t=Q.get(o,n))?t:void 0!==(t=Z(o,n))?t:void 0;this.each(function(){Q.set(this,n,e)})},null,e,1<arguments.length,null,!0)},removeData:function(e){return this.each(function(){Q.remove(this,e)})}}),S.extend({queue:function(e,t,n){var r;if(e)return t=(t||"fx")+"queue",r=Y.get(e,t),n&&(!r||Array.isArray(n)?r=Y.access(e,t,S.makeArray(n)):r.push(n)),r||[]},dequeue:function(e,t){t=t||"fx";var n=S.queue(e,t),r=n.length,i=n.shift(),o=S._queueHooks(e,t);"inprogress"===i&&(i=n.shift(),r--),i&&("fx"===t&&n.unshift("inprogress"),delete o.stop,i.call(e,function(){S.dequeue(e,t)},o)),!r&&o&&o.empty.fire()},_queueHooks:function(e,t){var n=t+"queueHooks";return Y.get(e,n)||Y.access(e,n,{empty:S.Callbacks("once memory").add(function(){Y.remove(e,[t+"queue",n])})})}}),S.fn.extend({queue:function(t,n){var e=2;return"string"!=typeof t&&(n=t,t="fx",e--),arguments.length<e?S.queue(this[0],t):void 0===n?this:this.each(function(){var e=S.queue(this,t,n);S._queueHooks(this,t),"fx"===t&&"inprogress"!==e[0]&&S.dequeue(this,t)})},dequeue:function(e){return this.each(function(){S.dequeue(this,e)})},clearQueue:function(e){return this.queue(e||"fx",[])},promise:function(e,t){var n,r=1,i=S.Deferred(),o=this,a=this.length,s=function(){--r||i.resolveWith(o,[o])};"string"!=typeof e&&(t=e,e=void 0),e=e||"fx";while(a--)(n=Y.get(o[a],e+"queueHooks"))&&n.empty&&(r++,n.empty.add(s));return s(),i.promise(t)}});var ee=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,te=new RegExp("^(?:([+-])=|)("+ee+")([a-z%]*)$","i"),ne=["Top","Right","Bottom","Left"],re=E.documentElement,ie=function(e){return S.contains(e.ownerDocument,e)},oe={composed:!0};re.getRootNode&&(ie=function(e){return S.contains(e.ownerDocument,e)||e.getRootNode(oe)===e.ownerDocument});var ae=function(e,t){return"none"===(e=t||e).style.display||""===e.style.display&&ie(e)&&"none"===S.css(e,"display")};function se(e,t,n,r){var i,o,a=20,s=r?function(){return r.cur()}:function(){return S.css(e,t,"")},u=s(),l=n&&n[3]||(S.cssNumber[t]?"":"px"),c=e.nodeType&&(S.cssNumber[t]||"px"!==l&&+u)&&te.exec(S.css(e,t));if(c&&c[3]!==l){u/=2,l=l||c[3],c=+u||1;while(a--)S.style(e,t,c+l),(1-o)*(1-(o=s()/u||.5))<=0&&(a=0),c/=o;c*=2,S.style(e,t,c+l),n=n||[]}return n&&(c=+c||+u||0,i=n[1]?c+(n[1]+1)*n[2]:+n[2],r&&(r.unit=l,r.start=c,r.end=i)),i}var ue={};function le(e,t){for(var n,r,i,o,a,s,u,l=[],c=0,f=e.length;c<f;c++)(r=e[c]).style&&(n=r.style.display,t?("none"===n&&(l[c]=Y.get(r,"display")||null,l[c]||(r.style.display="")),""===r.style.display&&ae(r)&&(l[c]=(u=a=o=void 0,a=(i=r).ownerDocument,s=i.nodeName,(u=ue[s])||(o=a.body.appendChild(a.createElement(s)),u=S.css(o,"display"),o.parentNode.removeChild(o),"none"===u&&(u="block"),ue[s]=u)))):"none"!==n&&(l[c]="none",Y.set(r,"display",n)));for(c=0;c<f;c++)null!=l[c]&&(e[c].style.display=l[c]);return e}S.fn.extend({show:function(){return le(this,!0)},hide:function(){return le(this)},toggle:function(e){return"boolean"==typeof e?e?this.show():this.hide():this.each(function(){ae(this)?S(this).show():S(this).hide()})}});var ce,fe,pe=/^(?:checkbox|radio)$/i,de=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i,he=/^$|^module$|\/(?:java|ecma)script/i;ce=E.createDocumentFragment().appendChild(E.createElement("div")),(fe=E.createElement("input")).setAttribute("type","radio"),fe.setAttribute("checked","checked"),fe.setAttribute("name","t"),ce.appendChild(fe),y.checkClone=ce.cloneNode(!0).cloneNode(!0).lastChild.checked,ce.innerHTML="<textarea>x</textarea>",y.noCloneChecked=!!ce.cloneNode(!0).lastChild.defaultValue,ce.innerHTML="<option></option>",y.option=!!ce.lastChild;var ge={thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};function ve(e,t){var n;return n="undefined"!=typeof e.getElementsByTagName?e.getElementsByTagName(t||"*"):"undefined"!=typeof e.querySelectorAll?e.querySelectorAll(t||"*"):[],void 0===t||t&&A(e,t)?S.merge([e],n):n}function ye(e,t){for(var n=0,r=e.length;n<r;n++)Y.set(e[n],"globalEval",!t||Y.get(t[n],"globalEval"))}ge.tbody=ge.tfoot=ge.colgroup=ge.caption=ge.thead,ge.th=ge.td,y.option||(ge.optgroup=ge.option=[1,"<select multiple='multiple'>","</select>"]);var me=/<|&#?\w+;/;function xe(e,t,n,r,i){for(var o,a,s,u,l,c,f=t.createDocumentFragment(),p=[],d=0,h=e.length;d<h;d++)if((o=e[d])||0===o)if("object"===w(o))S.merge(p,o.nodeType?[o]:o);else if(me.test(o)){a=a||f.appendChild(t.createElement("div")),s=(de.exec(o)||["",""])[1].toLowerCase(),u=ge[s]||ge._default,a.innerHTML=u[1]+S.htmlPrefilter(o)+u[2],c=u[0];while(c--)a=a.lastChild;S.merge(p,a.childNodes),(a=f.firstChild).textContent=""}else p.push(t.createTextNode(o));f.textContent="",d=0;while(o=p[d++])if(r&&-1<S.inArray(o,r))i&&i.push(o);else if(l=ie(o),a=ve(f.appendChild(o),"script"),l&&ye(a),n){c=0;while(o=a[c++])he.test(o.type||"")&&n.push(o)}return f}var be=/^([^.]*)(?:\.(.+)|)/;function we(){return!0}function Te(){return!1}function Ce(e,t){return e===function(){try{return E.activeElement}catch(e){}}()==("focus"===t)}function Ee(e,t,n,r,i,o){var a,s;if("object"==typeof t){for(s in"string"!=typeof n&&(r=r||n,n=void 0),t)Ee(e,s,n,r,t[s],o);return e}if(null==r&&null==i?(i=n,r=n=void 0):null==i&&("string"==typeof n?(i=r,r=void 0):(i=r,r=n,n=void 0)),!1===i)i=Te;else if(!i)return e;return 1===o&&(a=i,(i=function(e){return S().off(e),a.apply(this,arguments)}).guid=a.guid||(a.guid=S.guid++)),e.each(function(){S.event.add(this,t,i,r,n)})}function Se(e,i,o){o?(Y.set(e,i,!1),S.event.add(e,i,{namespace:!1,handler:function(e){var t,n,r=Y.get(this,i);if(1&e.isTrigger&&this[i]){if(r.length)(S.event.special[i]||{}).delegateType&&e.stopPropagation();else if(r=s.call(arguments),Y.set(this,i,r),t=o(this,i),this[i](),r!==(n=Y.get(this,i))||t?Y.set(this,i,!1):n={},r!==n)return e.stopImmediatePropagation(),e.preventDefault(),n&&n.value}else r.length&&(Y.set(this,i,{value:S.event.trigger(S.extend(r[0],S.Event.prototype),r.slice(1),this)}),e.stopImmediatePropagation())}})):void 0===Y.get(e,i)&&S.event.add(e,i,we)}S.event={global:{},add:function(t,e,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.get(t);if(V(t)){n.handler&&(n=(o=n).handler,i=o.selector),i&&S.find.matchesSelector(re,i),n.guid||(n.guid=S.guid++),(u=v.events)||(u=v.events=Object.create(null)),(a=v.handle)||(a=v.handle=function(e){return"undefined"!=typeof S&&S.event.triggered!==e.type?S.event.dispatch.apply(t,arguments):void 0}),l=(e=(e||"").match(P)||[""]).length;while(l--)d=g=(s=be.exec(e[l])||[])[1],h=(s[2]||"").split(".").sort(),d&&(f=S.event.special[d]||{},d=(i?f.delegateType:f.bindType)||d,f=S.event.special[d]||{},c=S.extend({type:d,origType:g,data:r,handler:n,guid:n.guid,selector:i,needsContext:i&&S.expr.match.needsContext.test(i),namespace:h.join(".")},o),(p=u[d])||((p=u[d]=[]).delegateCount=0,f.setup&&!1!==f.setup.call(t,r,h,a)||t.addEventListener&&t.addEventListener(d,a)),f.add&&(f.add.call(t,c),c.handler.guid||(c.handler.guid=n.guid)),i?p.splice(p.delegateCount++,0,c):p.push(c),S.event.global[d]=!0)}},remove:function(e,t,n,r,i){var o,a,s,u,l,c,f,p,d,h,g,v=Y.hasData(e)&&Y.get(e);if(v&&(u=v.events)){l=(t=(t||"").match(P)||[""]).length;while(l--)if(d=g=(s=be.exec(t[l])||[])[1],h=(s[2]||"").split(".").sort(),d){f=S.event.special[d]||{},p=u[d=(r?f.delegateType:f.bindType)||d]||[],s=s[2]&&new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"),a=o=p.length;while(o--)c=p[o],!i&&g!==c.origType||n&&n.guid!==c.guid||s&&!s.test(c.namespace)||r&&r!==c.selector&&("**"!==r||!c.selector)||(p.splice(o,1),c.selector&&p.delegateCount--,f.remove&&f.remove.call(e,c));a&&!p.length&&(f.teardown&&!1!==f.teardown.call(e,h,v.handle)||S.removeEvent(e,d,v.handle),delete u[d])}else for(d in u)S.event.remove(e,d+t[l],n,r,!0);S.isEmptyObject(u)&&Y.remove(e,"handle events")}},dispatch:function(e){var t,n,r,i,o,a,s=new Array(arguments.length),u=S.event.fix(e),l=(Y.get(this,"events")||Object.create(null))[u.type]||[],c=S.event.special[u.type]||{};for(s[0]=u,t=1;t<arguments.length;t++)s[t]=arguments[t];if(u.delegateTarget=this,!c.preDispatch||!1!==c.preDispatch.call(this,u)){a=S.event.handlers.call(this,u,l),t=0;while((i=a[t++])&&!u.isPropagationStopped()){u.currentTarget=i.elem,n=0;while((o=i.handlers[n++])&&!u.isImmediatePropagationStopped())u.rnamespace&&!1!==o.namespace&&!u.rnamespace.test(o.namespace)||(u.handleObj=o,u.data=o.data,void 0!==(r=((S.event.special[o.origType]||{}).handle||o.handler).apply(i.elem,s))&&!1===(u.result=r)&&(u.preventDefault(),u.stopPropagation()))}return c.postDispatch&&c.postDispatch.call(this,u),u.result}},handlers:function(e,t){var n,r,i,o,a,s=[],u=t.delegateCount,l=e.target;if(u&&l.nodeType&&!("click"===e.type&&1<=e.button))for(;l!==this;l=l.parentNode||this)if(1===l.nodeType&&("click"!==e.type||!0!==l.disabled)){for(o=[],a={},n=0;n<u;n++)void 0===a[i=(r=t[n]).selector+" "]&&(a[i]=r.needsContext?-1<S(i,this).index(l):S.find(i,this,null,[l]).length),a[i]&&o.push(r);o.length&&s.push({elem:l,handlers:o})}return l=this,u<t.length&&s.push({elem:l,handlers:t.slice(u)}),s},addProp:function(t,e){Object.defineProperty(S.Event.prototype,t,{enumerable:!0,configurable:!0,get:m(e)?function(){if(this.originalEvent)return e(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[t]},set:function(e){Object.defineProperty(this,t,{enumerable:!0,configurable:!0,writable:!0,value:e})}})},fix:function(e){return e[S.expando]?e:new S.Event(e)},special:{load:{noBubble:!0},click:{setup:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click",we),!1},trigger:function(e){var t=this||e;return pe.test(t.type)&&t.click&&A(t,"input")&&Se(t,"click"),!0},_default:function(e){var t=e.target;return pe.test(t.type)&&t.click&&A(t,"input")&&Y.get(t,"click")||A(t,"a")}},beforeunload:{postDispatch:function(e){void 0!==e.result&&e.originalEvent&&(e.originalEvent.returnValue=e.result)}}}},S.removeEvent=function(e,t,n){e.removeEventListener&&e.removeEventListener(t,n)},S.Event=function(e,t){if(!(this instanceof S.Event))return new S.Event(e,t);e&&e.type?(this.originalEvent=e,this.type=e.type,this.isDefaultPrevented=e.defaultPrevented||void 0===e.defaultPrevented&&!1===e.returnValue?we:Te,this.target=e.target&&3===e.target.nodeType?e.target.parentNode:e.target,this.currentTarget=e.currentTarget,this.relatedTarget=e.relatedTarget):this.type=e,t&&S.extend(this,t),this.timeStamp=e&&e.timeStamp||Date.now(),this[S.expando]=!0},S.Event.prototype={constructor:S.Event,isDefaultPrevented:Te,isPropagationStopped:Te,isImmediatePropagationStopped:Te,isSimulated:!1,preventDefault:function(){var e=this.originalEvent;this.isDefaultPrevented=we,e&&!this.isSimulated&&e.preventDefault()},stopPropagation:function(){var e=this.originalEvent;this.isPropagationStopped=we,e&&!this.isSimulated&&e.stopPropagation()},stopImmediatePropagation:function(){var e=this.originalEvent;this.isImmediatePropagationStopped=we,e&&!this.isSimulated&&e.stopImmediatePropagation(),this.stopPropagation()}},S.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,code:!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:!0},S.event.addProp),S.each({focus:"focusin",blur:"focusout"},function(e,t){S.event.special[e]={setup:function(){return Se(this,e,Ce),!1},trigger:function(){return Se(this,e),!0},_default:function(){return!0},delegateType:t}}),S.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(e,i){S.event.special[e]={delegateType:i,bindType:i,handle:function(e){var t,n=e.relatedTarget,r=e.handleObj;return n&&(n===this||S.contains(this,n))||(e.type=r.origType,t=r.handler.apply(this,arguments),e.type=i),t}}}),S.fn.extend({on:function(e,t,n,r){return Ee(this,e,t,n,r)},one:function(e,t,n,r){return Ee(this,e,t,n,r,1)},off:function(e,t,n){var r,i;if(e&&e.preventDefault&&e.handleObj)return r=e.handleObj,S(e.delegateTarget).off(r.namespace?r.origType+"."+r.namespace:r.origType,r.selector,r.handler),this;if("object"==typeof e){for(i in e)this.off(i,t,e[i]);return this}return!1!==t&&"function"!=typeof t||(n=t,t=void 0),!1===n&&(n=Te),this.each(function(){S.event.remove(this,e,n,t)})}});var ke=/<script|<style|<link/i,Ae=/checked\s*(?:[^=]|=\s*.checked.)/i,Ne=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function je(e,t){return A(e,"table")&&A(11!==t.nodeType?t:t.firstChild,"tr")&&S(e).children("tbody")[0]||e}function De(e){return e.type=(null!==e.getAttribute("type"))+"/"+e.type,e}function qe(e){return"true/"===(e.type||"").slice(0,5)?e.type=e.type.slice(5):e.removeAttribute("type"),e}function Le(e,t){var n,r,i,o,a,s;if(1===t.nodeType){if(Y.hasData(e)&&(s=Y.get(e).events))for(i in Y.remove(t,"handle events"),s)for(n=0,r=s[i].length;n<r;n++)S.event.add(t,i,s[i][n]);Q.hasData(e)&&(o=Q.access(e),a=S.extend({},o),Q.set(t,a))}}function He(n,r,i,o){r=g(r);var e,t,a,s,u,l,c=0,f=n.length,p=f-1,d=r[0],h=m(d);if(h||1<f&&"string"==typeof d&&!y.checkClone&&Ae.test(d))return n.each(function(e){var t=n.eq(e);h&&(r[0]=d.call(this,e,t.html())),He(t,r,i,o)});if(f&&(t=(e=xe(r,n[0].ownerDocument,!1,n,o)).firstChild,1===e.childNodes.length&&(e=t),t||o)){for(s=(a=S.map(ve(e,"script"),De)).length;c<f;c++)u=e,c!==p&&(u=S.clone(u,!0,!0),s&&S.merge(a,ve(u,"script"))),i.call(n[c],u,c);if(s)for(l=a[a.length-1].ownerDocument,S.map(a,qe),c=0;c<s;c++)u=a[c],he.test(u.type||"")&&!Y.access(u,"globalEval")&&S.contains(l,u)&&(u.src&&"module"!==(u.type||"").toLowerCase()?S._evalUrl&&!u.noModule&&S._evalUrl(u.src,{nonce:u.nonce||u.getAttribute("nonce")},l):b(u.textContent.replace(Ne,""),u,l))}return n}function Oe(e,t,n){for(var r,i=t?S.filter(t,e):e,o=0;null!=(r=i[o]);o++)n||1!==r.nodeType||S.cleanData(ve(r)),r.parentNode&&(n&&ie(r)&&ye(ve(r,"script")),r.parentNode.removeChild(r));return e}S.extend({htmlPrefilter:function(e){return e},clone:function(e,t,n){var r,i,o,a,s,u,l,c=e.cloneNode(!0),f=ie(e);if(!(y.noCloneChecked||1!==e.nodeType&&11!==e.nodeType||S.isXMLDoc(e)))for(a=ve(c),r=0,i=(o=ve(e)).length;r<i;r++)s=o[r],u=a[r],void 0,"input"===(l=u.nodeName.toLowerCase())&&pe.test(s.type)?u.checked=s.checked:"input"!==l&&"textarea"!==l||(u.defaultValue=s.defaultValue);if(t)if(n)for(o=o||ve(e),a=a||ve(c),r=0,i=o.length;r<i;r++)Le(o[r],a[r]);else Le(e,c);return 0<(a=ve(c,"script")).length&&ye(a,!f&&ve(e,"script")),c},cleanData:function(e){for(var t,n,r,i=S.event.special,o=0;void 0!==(n=e[o]);o++)if(V(n)){if(t=n[Y.expando]){if(t.events)for(r in t.events)i[r]?S.event.remove(n,r):S.removeEvent(n,r,t.handle);n[Y.expando]=void 0}n[Q.expando]&&(n[Q.expando]=void 0)}}}),S.fn.extend({detach:function(e){return Oe(this,e,!0)},remove:function(e){return Oe(this,e)},text:function(e){return $(this,function(e){return void 0===e?S.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=e)})},null,e,arguments.length)},append:function(){return He(this,arguments,function(e){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||je(this,e).appendChild(e)})},prepend:function(){return He(this,arguments,function(e){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var t=je(this,e);t.insertBefore(e,t.firstChild)}})},before:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this)})},after:function(){return He(this,arguments,function(e){this.parentNode&&this.parentNode.insertBefore(e,this.nextSibling)})},empty:function(){for(var e,t=0;null!=(e=this[t]);t++)1===e.nodeType&&(S.cleanData(ve(e,!1)),e.textContent="");return this},clone:function(e,t){return e=null!=e&&e,t=null==t?e:t,this.map(function(){return S.clone(this,e,t)})},html:function(e){return $(this,function(e){var t=this[0]||{},n=0,r=this.length;if(void 0===e&&1===t.nodeType)return t.innerHTML;if("string"==typeof e&&!ke.test(e)&&!ge[(de.exec(e)||["",""])[1].toLowerCase()]){e=S.htmlPrefilter(e);try{for(;n<r;n++)1===(t=this[n]||{}).nodeType&&(S.cleanData(ve(t,!1)),t.innerHTML=e);t=0}catch(e){}}t&&this.empty().append(e)},null,e,arguments.length)},replaceWith:function(){var n=[];return He(this,arguments,function(e){var t=this.parentNode;S.inArray(this,n)<0&&(S.cleanData(ve(this)),t&&t.replaceChild(e,this))},n)}}),S.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(e,a){S.fn[e]=function(e){for(var t,n=[],r=S(e),i=r.length-1,o=0;o<=i;o++)t=o===i?this:this.clone(!0),S(r[o])[a](t),u.apply(n,t.get());return this.pushStack(n)}});var Pe=new RegExp("^("+ee+")(?!px)[a-z%]+$","i"),Re=function(e){var t=e.ownerDocument.defaultView;return t&&t.opener||(t=C),t.getComputedStyle(e)},Me=function(e,t,n){var r,i,o={};for(i in t)o[i]=e.style[i],e.style[i]=t[i];for(i in r=n.call(e),t)e.style[i]=o[i];return r},Ie=new RegExp(ne.join("|"),"i");function We(e,t,n){var r,i,o,a,s=e.style;return(n=n||Re(e))&&(""!==(a=n.getPropertyValue(t)||n[t])||ie(e)||(a=S.style(e,t)),!y.pixelBoxStyles()&&Pe.test(a)&&Ie.test(t)&&(r=s.width,i=s.minWidth,o=s.maxWidth,s.minWidth=s.maxWidth=s.width=a,a=n.width,s.width=r,s.minWidth=i,s.maxWidth=o)),void 0!==a?a+"":a}function Fe(e,t){return{get:function(){if(!e())return(this.get=t).apply(this,arguments);delete this.get}}}!function(){function e(){if(l){u.style.cssText="position:absolute;left:-11111px;width:60px;margin-top:1px;padding:0;border:0",l.style.cssText="position:relative;display:block;box-sizing:border-box;overflow:scroll;margin:auto;border:1px;padding:1px;width:60%;top:1%",re.appendChild(u).appendChild(l);var e=C.getComputedStyle(l);n="1%"!==e.top,s=12===t(e.marginLeft),l.style.right="60%",o=36===t(e.right),r=36===t(e.width),l.style.position="absolute",i=12===t(l.offsetWidth/3),re.removeChild(u),l=null}}function t(e){return Math.round(parseFloat(e))}var n,r,i,o,a,s,u=E.createElement("div"),l=E.createElement("div");l.style&&(l.style.backgroundClip="content-box",l.cloneNode(!0).style.backgroundClip="",y.clearCloneStyle="content-box"===l.style.backgroundClip,S.extend(y,{boxSizingReliable:function(){return e(),r},pixelBoxStyles:function(){return e(),o},pixelPosition:function(){return e(),n},reliableMarginLeft:function(){return e(),s},scrollboxSize:function(){return e(),i},reliableTrDimensions:function(){var e,t,n,r;return null==a&&(e=E.createElement("table"),t=E.createElement("tr"),n=E.createElement("div"),e.style.cssText="position:absolute;left:-11111px;border-collapse:separate",t.style.cssText="border:1px solid",t.style.height="1px",n.style.height="9px",n.style.display="block",re.appendChild(e).appendChild(t).appendChild(n),r=C.getComputedStyle(t),a=parseInt(r.height,10)+parseInt(r.borderTopWidth,10)+parseInt(r.borderBottomWidth,10)===t.offsetHeight,re.removeChild(e)),a}}))}();var Be=["Webkit","Moz","ms"],$e=E.createElement("div").style,_e={};function ze(e){var t=S.cssProps[e]||_e[e];return t||(e in $e?e:_e[e]=function(e){var t=e[0].toUpperCase()+e.slice(1),n=Be.length;while(n--)if((e=Be[n]+t)in $e)return e}(e)||e)}var Ue=/^(none|table(?!-c[ea]).+)/,Xe=/^--/,Ve={position:"absolute",visibility:"hidden",display:"block"},Ge={letterSpacing:"0",fontWeight:"400"};function Ye(e,t,n){var r=te.exec(t);return r?Math.max(0,r[2]-(n||0))+(r[3]||"px"):t}function Qe(e,t,n,r,i,o){var a="width"===t?1:0,s=0,u=0;if(n===(r?"border":"content"))return 0;for(;a<4;a+=2)"margin"===n&&(u+=S.css(e,n+ne[a],!0,i)),r?("content"===n&&(u-=S.css(e,"padding"+ne[a],!0,i)),"margin"!==n&&(u-=S.css(e,"border"+ne[a]+"Width",!0,i))):(u+=S.css(e,"padding"+ne[a],!0,i),"padding"!==n?u+=S.css(e,"border"+ne[a]+"Width",!0,i):s+=S.css(e,"border"+ne[a]+"Width",!0,i));return!r&&0<=o&&(u+=Math.max(0,Math.ceil(e["offset"+t[0].toUpperCase()+t.slice(1)]-o-u-s-.5))||0),u}function Je(e,t,n){var r=Re(e),i=(!y.boxSizingReliable()||n)&&"border-box"===S.css(e,"boxSizing",!1,r),o=i,a=We(e,t,r),s="offset"+t[0].toUpperCase()+t.slice(1);if(Pe.test(a)){if(!n)return a;a="auto"}return(!y.boxSizingReliable()&&i||!y.reliableTrDimensions()&&A(e,"tr")||"auto"===a||!parseFloat(a)&&"inline"===S.css(e,"display",!1,r))&&e.getClientRects().length&&(i="border-box"===S.css(e,"boxSizing",!1,r),(o=s in e)&&(a=e[s])),(a=parseFloat(a)||0)+Qe(e,t,n||(i?"border":"content"),o,r,a)+"px"}function Ke(e,t,n,r,i){return new Ke.prototype.init(e,t,n,r,i)}S.extend({cssHooks:{opacity:{get:function(e,t){if(t){var n=We(e,"opacity");return""===n?"1":n}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,gridArea:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnStart:!0,gridRow:!0,gridRowEnd:!0,gridRowStart:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{},style:function(e,t,n,r){if(e&&3!==e.nodeType&&8!==e.nodeType&&e.style){var i,o,a,s=X(t),u=Xe.test(t),l=e.style;if(u||(t=ze(s)),a=S.cssHooks[t]||S.cssHooks[s],void 0===n)return a&&"get"in a&&void 0!==(i=a.get(e,!1,r))?i:l[t];"string"===(o=typeof n)&&(i=te.exec(n))&&i[1]&&(n=se(e,t,i),o="number"),null!=n&&n==n&&("number"!==o||u||(n+=i&&i[3]||(S.cssNumber[s]?"":"px")),y.clearCloneStyle||""!==n||0!==t.indexOf("background")||(l[t]="inherit"),a&&"set"in a&&void 0===(n=a.set(e,n,r))||(u?l.setProperty(t,n):l[t]=n))}},css:function(e,t,n,r){var i,o,a,s=X(t);return Xe.test(t)||(t=ze(s)),(a=S.cssHooks[t]||S.cssHooks[s])&&"get"in a&&(i=a.get(e,!0,n)),void 0===i&&(i=We(e,t,r)),"normal"===i&&t in Ge&&(i=Ge[t]),""===n||n?(o=parseFloat(i),!0===n||isFinite(o)?o||0:i):i}}),S.each(["height","width"],function(e,u){S.cssHooks[u]={get:function(e,t,n){if(t)return!Ue.test(S.css(e,"display"))||e.getClientRects().length&&e.getBoundingClientRect().width?Je(e,u,n):Me(e,Ve,function(){return Je(e,u,n)})},set:function(e,t,n){var r,i=Re(e),o=!y.scrollboxSize()&&"absolute"===i.position,a=(o||n)&&"border-box"===S.css(e,"boxSizing",!1,i),s=n?Qe(e,u,n,a,i):0;return a&&o&&(s-=Math.ceil(e["offset"+u[0].toUpperCase()+u.slice(1)]-parseFloat(i[u])-Qe(e,u,"border",!1,i)-.5)),s&&(r=te.exec(t))&&"px"!==(r[3]||"px")&&(e.style[u]=t,t=S.css(e,u)),Ye(0,t,s)}}}),S.cssHooks.marginLeft=Fe(y.reliableMarginLeft,function(e,t){if(t)return(parseFloat(We(e,"marginLeft"))||e.getBoundingClientRect().left-Me(e,{marginLeft:0},function(){return e.getBoundingClientRect().left}))+"px"}),S.each({margin:"",padding:"",border:"Width"},function(i,o){S.cssHooks[i+o]={expand:function(e){for(var t=0,n={},r="string"==typeof e?e.split(" "):[e];t<4;t++)n[i+ne[t]+o]=r[t]||r[t-2]||r[0];return n}},"margin"!==i&&(S.cssHooks[i+o].set=Ye)}),S.fn.extend({css:function(e,t){return $(this,function(e,t,n){var r,i,o={},a=0;if(Array.isArray(t)){for(r=Re(e),i=t.length;a<i;a++)o[t[a]]=S.css(e,t[a],!1,r);return o}return void 0!==n?S.style(e,t,n):S.css(e,t)},e,t,1<arguments.length)}}),((S.Tween=Ke).prototype={constructor:Ke,init:function(e,t,n,r,i,o){this.elem=e,this.prop=n,this.easing=i||S.easing._default,this.options=t,this.start=this.now=this.cur(),this.end=r,this.unit=o||(S.cssNumber[n]?"":"px")},cur:function(){var e=Ke.propHooks[this.prop];return e&&e.get?e.get(this):Ke.propHooks._default.get(this)},run:function(e){var t,n=Ke.propHooks[this.prop];return this.options.duration?this.pos=t=S.easing[this.easing](e,this.options.duration*e,0,1,this.options.duration):this.pos=t=e,this.now=(this.end-this.start)*t+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),n&&n.set?n.set(this):Ke.propHooks._default.set(this),this}}).init.prototype=Ke.prototype,(Ke.propHooks={_default:{get:function(e){var t;return 1!==e.elem.nodeType||null!=e.elem[e.prop]&&null==e.elem.style[e.prop]?e.elem[e.prop]:(t=S.css(e.elem,e.prop,""))&&"auto"!==t?t:0},set:function(e){S.fx.step[e.prop]?S.fx.step[e.prop](e):1!==e.elem.nodeType||!S.cssHooks[e.prop]&&null==e.elem.style[ze(e.prop)]?e.elem[e.prop]=e.now:S.style(e.elem,e.prop,e.now+e.unit)}}}).scrollTop=Ke.propHooks.scrollLeft={set:function(e){e.elem.nodeType&&e.elem.parentNode&&(e.elem[e.prop]=e.now)}},S.easing={linear:function(e){return e},swing:function(e){return.5-Math.cos(e*Math.PI)/2},_default:"swing"},S.fx=Ke.prototype.init,S.fx.step={};var Ze,et,tt,nt,rt=/^(?:toggle|show|hide)$/,it=/queueHooks$/;function ot(){et&&(!1===E.hidden&&C.requestAnimationFrame?C.requestAnimationFrame(ot):C.setTimeout(ot,S.fx.interval),S.fx.tick())}function at(){return C.setTimeout(function(){Ze=void 0}),Ze=Date.now()}function st(e,t){var n,r=0,i={height:e};for(t=t?1:0;r<4;r+=2-t)i["margin"+(n=ne[r])]=i["padding"+n]=e;return t&&(i.opacity=i.width=e),i}function ut(e,t,n){for(var r,i=(lt.tweeners[t]||[]).concat(lt.tweeners["*"]),o=0,a=i.length;o<a;o++)if(r=i[o].call(n,t,e))return r}function lt(o,e,t){var n,a,r=0,i=lt.prefilters.length,s=S.Deferred().always(function(){delete u.elem}),u=function(){if(a)return!1;for(var e=Ze||at(),t=Math.max(0,l.startTime+l.duration-e),n=1-(t/l.duration||0),r=0,i=l.tweens.length;r<i;r++)l.tweens[r].run(n);return s.notifyWith(o,[l,n,t]),n<1&&i?t:(i||s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l]),!1)},l=s.promise({elem:o,props:S.extend({},e),opts:S.extend(!0,{specialEasing:{},easing:S.easing._default},t),originalProperties:e,originalOptions:t,startTime:Ze||at(),duration:t.duration,tweens:[],createTween:function(e,t){var n=S.Tween(o,l.opts,e,t,l.opts.specialEasing[e]||l.opts.easing);return l.tweens.push(n),n},stop:function(e){var t=0,n=e?l.tweens.length:0;if(a)return this;for(a=!0;t<n;t++)l.tweens[t].run(1);return e?(s.notifyWith(o,[l,1,0]),s.resolveWith(o,[l,e])):s.rejectWith(o,[l,e]),this}}),c=l.props;for(!function(e,t){var n,r,i,o,a;for(n in e)if(i=t[r=X(n)],o=e[n],Array.isArray(o)&&(i=o[1],o=e[n]=o[0]),n!==r&&(e[r]=o,delete e[n]),(a=S.cssHooks[r])&&"expand"in a)for(n in o=a.expand(o),delete e[r],o)n in e||(e[n]=o[n],t[n]=i);else t[r]=i}(c,l.opts.specialEasing);r<i;r++)if(n=lt.prefilters[r].call(l,o,c,l.opts))return m(n.stop)&&(S._queueHooks(l.elem,l.opts.queue).stop=n.stop.bind(n)),n;return S.map(c,ut,l),m(l.opts.start)&&l.opts.start.call(o,l),l.progress(l.opts.progress).done(l.opts.done,l.opts.complete).fail(l.opts.fail).always(l.opts.always),S.fx.timer(S.extend(u,{elem:o,anim:l,queue:l.opts.queue})),l}S.Animation=S.extend(lt,{tweeners:{"*":[function(e,t){var n=this.createTween(e,t);return se(n.elem,e,te.exec(t),n),n}]},tweener:function(e,t){m(e)?(t=e,e=["*"]):e=e.match(P);for(var n,r=0,i=e.length;r<i;r++)n=e[r],lt.tweeners[n]=lt.tweeners[n]||[],lt.tweeners[n].unshift(t)},prefilters:[function(e,t,n){var r,i,o,a,s,u,l,c,f="width"in t||"height"in t,p=this,d={},h=e.style,g=e.nodeType&&ae(e),v=Y.get(e,"fxshow");for(r in n.queue||(null==(a=S._queueHooks(e,"fx")).unqueued&&(a.unqueued=0,s=a.empty.fire,a.empty.fire=function(){a.unqueued||s()}),a.unqueued++,p.always(function(){p.always(function(){a.unqueued--,S.queue(e,"fx").length||a.empty.fire()})})),t)if(i=t[r],rt.test(i)){if(delete t[r],o=o||"toggle"===i,i===(g?"hide":"show")){if("show"!==i||!v||void 0===v[r])continue;g=!0}d[r]=v&&v[r]||S.style(e,r)}if((u=!S.isEmptyObject(t))||!S.isEmptyObject(d))for(r in f&&1===e.nodeType&&(n.overflow=[h.overflow,h.overflowX,h.overflowY],null==(l=v&&v.display)&&(l=Y.get(e,"display")),"none"===(c=S.css(e,"display"))&&(l?c=l:(le([e],!0),l=e.style.display||l,c=S.css(e,"display"),le([e]))),("inline"===c||"inline-block"===c&&null!=l)&&"none"===S.css(e,"float")&&(u||(p.done(function(){h.display=l}),null==l&&(c=h.display,l="none"===c?"":c)),h.display="inline-block")),n.overflow&&(h.overflow="hidden",p.always(function(){h.overflow=n.overflow[0],h.overflowX=n.overflow[1],h.overflowY=n.overflow[2]})),u=!1,d)u||(v?"hidden"in v&&(g=v.hidden):v=Y.access(e,"fxshow",{display:l}),o&&(v.hidden=!g),g&&le([e],!0),p.done(function(){for(r in g||le([e]),Y.remove(e,"fxshow"),d)S.style(e,r,d[r])})),u=ut(g?v[r]:0,r,p),r in v||(v[r]=u.start,g&&(u.end=u.start,u.start=0))}],prefilter:function(e,t){t?lt.prefilters.unshift(e):lt.prefilters.push(e)}}),S.speed=function(e,t,n){var r=e&&"object"==typeof e?S.extend({},e):{complete:n||!n&&t||m(e)&&e,duration:e,easing:n&&t||t&&!m(t)&&t};return S.fx.off?r.duration=0:"number"!=typeof r.duration&&(r.duration in S.fx.speeds?r.duration=S.fx.speeds[r.duration]:r.duration=S.fx.speeds._default),null!=r.queue&&!0!==r.queue||(r.queue="fx"),r.old=r.complete,r.complete=function(){m(r.old)&&r.old.call(this),r.queue&&S.dequeue(this,r.queue)},r},S.fn.extend({fadeTo:function(e,t,n,r){return this.filter(ae).css("opacity",0).show().end().animate({opacity:t},e,n,r)},animate:function(t,e,n,r){var i=S.isEmptyObject(t),o=S.speed(e,n,r),a=function(){var e=lt(this,S.extend({},t),o);(i||Y.get(this,"finish"))&&e.stop(!0)};return a.finish=a,i||!1===o.queue?this.each(a):this.queue(o.queue,a)},stop:function(i,e,o){var a=function(e){var t=e.stop;delete e.stop,t(o)};return"string"!=typeof i&&(o=e,e=i,i=void 0),e&&this.queue(i||"fx",[]),this.each(function(){var e=!0,t=null!=i&&i+"queueHooks",n=S.timers,r=Y.get(this);if(t)r[t]&&r[t].stop&&a(r[t]);else for(t in r)r[t]&&r[t].stop&&it.test(t)&&a(r[t]);for(t=n.length;t--;)n[t].elem!==this||null!=i&&n[t].queue!==i||(n[t].anim.stop(o),e=!1,n.splice(t,1));!e&&o||S.dequeue(this,i)})},finish:function(a){return!1!==a&&(a=a||"fx"),this.each(function(){var e,t=Y.get(this),n=t[a+"queue"],r=t[a+"queueHooks"],i=S.timers,o=n?n.length:0;for(t.finish=!0,S.queue(this,a,[]),r&&r.stop&&r.stop.call(this,!0),e=i.length;e--;)i[e].elem===this&&i[e].queue===a&&(i[e].anim.stop(!0),i.splice(e,1));for(e=0;e<o;e++)n[e]&&n[e].finish&&n[e].finish.call(this);delete t.finish})}}),S.each(["toggle","show","hide"],function(e,r){var i=S.fn[r];S.fn[r]=function(e,t,n){return null==e||"boolean"==typeof e?i.apply(this,arguments):this.animate(st(r,!0),e,t,n)}}),S.each({slideDown:st("show"),slideUp:st("hide"),slideToggle:st("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(e,r){S.fn[e]=function(e,t,n){return this.animate(r,e,t,n)}}),S.timers=[],S.fx.tick=function(){var e,t=0,n=S.timers;for(Ze=Date.now();t<n.length;t++)(e=n[t])()||n[t]!==e||n.splice(t--,1);n.length||S.fx.stop(),Ze=void 0},S.fx.timer=function(e){S.timers.push(e),S.fx.start()},S.fx.interval=13,S.fx.start=function(){et||(et=!0,ot())},S.fx.stop=function(){et=null},S.fx.speeds={slow:600,fast:200,_default:400},S.fn.delay=function(r,e){return r=S.fx&&S.fx.speeds[r]||r,e=e||"fx",this.queue(e,function(e,t){var n=C.setTimeout(e,r);t.stop=function(){C.clearTimeout(n)}})},tt=E.createElement("input"),nt=E.createElement("select").appendChild(E.createElement("option")),tt.type="checkbox",y.checkOn=""!==tt.value,y.optSelected=nt.selected,(tt=E.createElement("input")).value="t",tt.type="radio",y.radioValue="t"===tt.value;var ct,ft=S.expr.attrHandle;S.fn.extend({attr:function(e,t){return $(this,S.attr,e,t,1<arguments.length)},removeAttr:function(e){return this.each(function(){S.removeAttr(this,e)})}}),S.extend({attr:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return"undefined"==typeof e.getAttribute?S.prop(e,t,n):(1===o&&S.isXMLDoc(e)||(i=S.attrHooks[t.toLowerCase()]||(S.expr.match.bool.test(t)?ct:void 0)),void 0!==n?null===n?void S.removeAttr(e,t):i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:(e.setAttribute(t,n+""),n):i&&"get"in i&&null!==(r=i.get(e,t))?r:null==(r=S.find.attr(e,t))?void 0:r)},attrHooks:{type:{set:function(e,t){if(!y.radioValue&&"radio"===t&&A(e,"input")){var n=e.value;return e.setAttribute("type",t),n&&(e.value=n),t}}}},removeAttr:function(e,t){var n,r=0,i=t&&t.match(P);if(i&&1===e.nodeType)while(n=i[r++])e.removeAttribute(n)}}),ct={set:function(e,t,n){return!1===t?S.removeAttr(e,n):e.setAttribute(n,n),n}},S.each(S.expr.match.bool.source.match(/\w+/g),function(e,t){var a=ft[t]||S.find.attr;ft[t]=function(e,t,n){var r,i,o=t.toLowerCase();return n||(i=ft[o],ft[o]=r,r=null!=a(e,t,n)?o:null,ft[o]=i),r}});var pt=/^(?:input|select|textarea|button)$/i,dt=/^(?:a|area)$/i;function ht(e){return(e.match(P)||[]).join(" ")}function gt(e){return e.getAttribute&&e.getAttribute("class")||""}function vt(e){return Array.isArray(e)?e:"string"==typeof e&&e.match(P)||[]}S.fn.extend({prop:function(e,t){return $(this,S.prop,e,t,1<arguments.length)},removeProp:function(e){return this.each(function(){delete this[S.propFix[e]||e]})}}),S.extend({prop:function(e,t,n){var r,i,o=e.nodeType;if(3!==o&&8!==o&&2!==o)return 1===o&&S.isXMLDoc(e)||(t=S.propFix[t]||t,i=S.propHooks[t]),void 0!==n?i&&"set"in i&&void 0!==(r=i.set(e,n,t))?r:e[t]=n:i&&"get"in i&&null!==(r=i.get(e,t))?r:e[t]},propHooks:{tabIndex:{get:function(e){var t=S.find.attr(e,"tabindex");return t?parseInt(t,10):pt.test(e.nodeName)||dt.test(e.nodeName)&&e.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),y.optSelected||(S.propHooks.selected={get:function(e){var t=e.parentNode;return t&&t.parentNode&&t.parentNode.selectedIndex,null},set:function(e){var t=e.parentNode;t&&(t.selectedIndex,t.parentNode&&t.parentNode.selectedIndex)}}),S.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){S.propFix[this.toLowerCase()]=this}),S.fn.extend({addClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).addClass(t.call(this,e,gt(this)))});if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])r.indexOf(" "+o+" ")<0&&(r+=o+" ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},removeClass:function(t){var e,n,r,i,o,a,s,u=0;if(m(t))return this.each(function(e){S(this).removeClass(t.call(this,e,gt(this)))});if(!arguments.length)return this.attr("class","");if((e=vt(t)).length)while(n=this[u++])if(i=gt(n),r=1===n.nodeType&&" "+ht(i)+" "){a=0;while(o=e[a++])while(-1<r.indexOf(" "+o+" "))r=r.replace(" "+o+" "," ");i!==(s=ht(r))&&n.setAttribute("class",s)}return this},toggleClass:function(i,t){var o=typeof i,a="string"===o||Array.isArray(i);return"boolean"==typeof t&&a?t?this.addClass(i):this.removeClass(i):m(i)?this.each(function(e){S(this).toggleClass(i.call(this,e,gt(this),t),t)}):this.each(function(){var e,t,n,r;if(a){t=0,n=S(this),r=vt(i);while(e=r[t++])n.hasClass(e)?n.removeClass(e):n.addClass(e)}else void 0!==i&&"boolean"!==o||((e=gt(this))&&Y.set(this,"__className__",e),this.setAttribute&&this.setAttribute("class",e||!1===i?"":Y.get(this,"__className__")||""))})},hasClass:function(e){var t,n,r=0;t=" "+e+" ";while(n=this[r++])if(1===n.nodeType&&-1<(" "+ht(gt(n))+" ").indexOf(t))return!0;return!1}});var yt=/\r/g;S.fn.extend({val:function(n){var r,e,i,t=this[0];return arguments.length?(i=m(n),this.each(function(e){var t;1===this.nodeType&&(null==(t=i?n.call(this,e,S(this).val()):n)?t="":"number"==typeof t?t+="":Array.isArray(t)&&(t=S.map(t,function(e){return null==e?"":e+""})),(r=S.valHooks[this.type]||S.valHooks[this.nodeName.toLowerCase()])&&"set"in r&&void 0!==r.set(this,t,"value")||(this.value=t))})):t?(r=S.valHooks[t.type]||S.valHooks[t.nodeName.toLowerCase()])&&"get"in r&&void 0!==(e=r.get(t,"value"))?e:"string"==typeof(e=t.value)?e.replace(yt,""):null==e?"":e:void 0}}),S.extend({valHooks:{option:{get:function(e){var t=S.find.attr(e,"value");return null!=t?t:ht(S.text(e))}},select:{get:function(e){var t,n,r,i=e.options,o=e.selectedIndex,a="select-one"===e.type,s=a?null:[],u=a?o+1:i.length;for(r=o<0?u:a?o:0;r<u;r++)if(((n=i[r]).selected||r===o)&&!n.disabled&&(!n.parentNode.disabled||!A(n.parentNode,"optgroup"))){if(t=S(n).val(),a)return t;s.push(t)}return s},set:function(e,t){var n,r,i=e.options,o=S.makeArray(t),a=i.length;while(a--)((r=i[a]).selected=-1<S.inArray(S.valHooks.option.get(r),o))&&(n=!0);return n||(e.selectedIndex=-1),o}}}}),S.each(["radio","checkbox"],function(){S.valHooks[this]={set:function(e,t){if(Array.isArray(t))return e.checked=-1<S.inArray(S(e).val(),t)}},y.checkOn||(S.valHooks[this].get=function(e){return null===e.getAttribute("value")?"on":e.value})}),y.focusin="onfocusin"in C;var mt=/^(?:focusinfocus|focusoutblur)$/,xt=function(e){e.stopPropagation()};S.extend(S.event,{trigger:function(e,t,n,r){var i,o,a,s,u,l,c,f,p=[n||E],d=v.call(e,"type")?e.type:e,h=v.call(e,"namespace")?e.namespace.split("."):[];if(o=f=a=n=n||E,3!==n.nodeType&&8!==n.nodeType&&!mt.test(d+S.event.triggered)&&(-1<d.indexOf(".")&&(d=(h=d.split(".")).shift(),h.sort()),u=d.indexOf(":")<0&&"on"+d,(e=e[S.expando]?e:new S.Event(d,"object"==typeof e&&e)).isTrigger=r?2:3,e.namespace=h.join("."),e.rnamespace=e.namespace?new RegExp("(^|\\.)"+h.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,e.result=void 0,e.target||(e.target=n),t=null==t?[e]:S.makeArray(t,[e]),c=S.event.special[d]||{},r||!c.trigger||!1!==c.trigger.apply(n,t))){if(!r&&!c.noBubble&&!x(n)){for(s=c.delegateType||d,mt.test(s+d)||(o=o.parentNode);o;o=o.parentNode)p.push(o),a=o;a===(n.ownerDocument||E)&&p.push(a.defaultView||a.parentWindow||C)}i=0;while((o=p[i++])&&!e.isPropagationStopped())f=o,e.type=1<i?s:c.bindType||d,(l=(Y.get(o,"events")||Object.create(null))[e.type]&&Y.get(o,"handle"))&&l.apply(o,t),(l=u&&o[u])&&l.apply&&V(o)&&(e.result=l.apply(o,t),!1===e.result&&e.preventDefault());return e.type=d,r||e.isDefaultPrevented()||c._default&&!1!==c._default.apply(p.pop(),t)||!V(n)||u&&m(n[d])&&!x(n)&&((a=n[u])&&(n[u]=null),S.event.triggered=d,e.isPropagationStopped()&&f.addEventListener(d,xt),n[d](),e.isPropagationStopped()&&f.removeEventListener(d,xt),S.event.triggered=void 0,a&&(n[u]=a)),e.result}},simulate:function(e,t,n){var r=S.extend(new S.Event,n,{type:e,isSimulated:!0});S.event.trigger(r,null,t)}}),S.fn.extend({trigger:function(e,t){return this.each(function(){S.event.trigger(e,t,this)})},triggerHandler:function(e,t){var n=this[0];if(n)return S.event.trigger(e,t,n,!0)}}),y.focusin||S.each({focus:"focusin",blur:"focusout"},function(n,r){var i=function(e){S.event.simulate(r,e.target,S.event.fix(e))};S.event.special[r]={setup:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r);t||e.addEventListener(n,i,!0),Y.access(e,r,(t||0)+1)},teardown:function(){var e=this.ownerDocument||this.document||this,t=Y.access(e,r)-1;t?Y.access(e,r,t):(e.removeEventListener(n,i,!0),Y.remove(e,r))}}});var bt=C.location,wt={guid:Date.now()},Tt=/\?/;S.parseXML=function(e){var t,n;if(!e||"string"!=typeof e)return null;try{t=(new C.DOMParser).parseFromString(e,"text/xml")}catch(e){}return n=t&&t.getElementsByTagName("parsererror")[0],t&&!n||S.error("Invalid XML: "+(n?S.map(n.childNodes,function(e){return e.textContent}).join("\n"):e)),t};var Ct=/\[\]$/,Et=/\r?\n/g,St=/^(?:submit|button|image|reset|file)$/i,kt=/^(?:input|select|textarea|keygen)/i;function At(n,e,r,i){var t;if(Array.isArray(e))S.each(e,function(e,t){r||Ct.test(n)?i(n,t):At(n+"["+("object"==typeof t&&null!=t?e:"")+"]",t,r,i)});else if(r||"object"!==w(e))i(n,e);else for(t in e)At(n+"["+t+"]",e[t],r,i)}S.param=function(e,t){var n,r=[],i=function(e,t){var n=m(t)?t():t;r[r.length]=encodeURIComponent(e)+"="+encodeURIComponent(null==n?"":n)};if(null==e)return"";if(Array.isArray(e)||e.jquery&&!S.isPlainObject(e))S.each(e,function(){i(this.name,this.value)});else for(n in e)At(n,e[n],t,i);return r.join("&")},S.fn.extend({serialize:function(){return S.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var e=S.prop(this,"elements");return e?S.makeArray(e):this}).filter(function(){var e=this.type;return this.name&&!S(this).is(":disabled")&&kt.test(this.nodeName)&&!St.test(e)&&(this.checked||!pe.test(e))}).map(function(e,t){var n=S(this).val();return null==n?null:Array.isArray(n)?S.map(n,function(e){return{name:t.name,value:e.replace(Et,"\r\n")}}):{name:t.name,value:n.replace(Et,"\r\n")}}).get()}});var Nt=/%20/g,jt=/#.*$/,Dt=/([?&])_=[^&]*/,qt=/^(.*?):[ \t]*([^\r\n]*)$/gm,Lt=/^(?:GET|HEAD)$/,Ht=/^\/\//,Ot={},Pt={},Rt="*/".concat("*"),Mt=E.createElement("a");function It(o){return function(e,t){"string"!=typeof e&&(t=e,e="*");var n,r=0,i=e.toLowerCase().match(P)||[];if(m(t))while(n=i[r++])"+"===n[0]?(n=n.slice(1)||"*",(o[n]=o[n]||[]).unshift(t)):(o[n]=o[n]||[]).push(t)}}function Wt(t,i,o,a){var s={},u=t===Pt;function l(e){var r;return s[e]=!0,S.each(t[e]||[],function(e,t){var n=t(i,o,a);return"string"!=typeof n||u||s[n]?u?!(r=n):void 0:(i.dataTypes.unshift(n),l(n),!1)}),r}return l(i.dataTypes[0])||!s["*"]&&l("*")}function Ft(e,t){var n,r,i=S.ajaxSettings.flatOptions||{};for(n in t)void 0!==t[n]&&((i[n]?e:r||(r={}))[n]=t[n]);return r&&S.extend(!0,e,r),e}Mt.href=bt.href,S.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:bt.href,type:"GET",isLocal:/^(?:about|app|app-storage|.+-extension|file|res|widget):$/.test(bt.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Rt,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":S.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(e,t){return t?Ft(Ft(e,S.ajaxSettings),t):Ft(S.ajaxSettings,e)},ajaxPrefilter:It(Ot),ajaxTransport:It(Pt),ajax:function(e,t){"object"==typeof e&&(t=e,e=void 0),t=t||{};var c,f,p,n,d,r,h,g,i,o,v=S.ajaxSetup({},t),y=v.context||v,m=v.context&&(y.nodeType||y.jquery)?S(y):S.event,x=S.Deferred(),b=S.Callbacks("once memory"),w=v.statusCode||{},a={},s={},u="canceled",T={readyState:0,getResponseHeader:function(e){var t;if(h){if(!n){n={};while(t=qt.exec(p))n[t[1].toLowerCase()+" "]=(n[t[1].toLowerCase()+" "]||[]).concat(t[2])}t=n[e.toLowerCase()+" "]}return null==t?null:t.join(", ")},getAllResponseHeaders:function(){return h?p:null},setRequestHeader:function(e,t){return null==h&&(e=s[e.toLowerCase()]=s[e.toLowerCase()]||e,a[e]=t),this},overrideMimeType:function(e){return null==h&&(v.mimeType=e),this},statusCode:function(e){var t;if(e)if(h)T.always(e[T.status]);else for(t in e)w[t]=[w[t],e[t]];return this},abort:function(e){var t=e||u;return c&&c.abort(t),l(0,t),this}};if(x.promise(T),v.url=((e||v.url||bt.href)+"").replace(Ht,bt.protocol+"//"),v.type=t.method||t.type||v.method||v.type,v.dataTypes=(v.dataType||"*").toLowerCase().match(P)||[""],null==v.crossDomain){r=E.createElement("a");try{r.href=v.url,r.href=r.href,v.crossDomain=Mt.protocol+"//"+Mt.host!=r.protocol+"//"+r.host}catch(e){v.crossDomain=!0}}if(v.data&&v.processData&&"string"!=typeof v.data&&(v.data=S.param(v.data,v.traditional)),Wt(Ot,v,t,T),h)return T;for(i in(g=S.event&&v.global)&&0==S.active++&&S.event.trigger("ajaxStart"),v.type=v.type.toUpperCase(),v.hasContent=!Lt.test(v.type),f=v.url.replace(jt,""),v.hasContent?v.data&&v.processData&&0===(v.contentType||"").indexOf("application/x-www-form-urlencoded")&&(v.data=v.data.replace(Nt,"+")):(o=v.url.slice(f.length),v.data&&(v.processData||"string"==typeof v.data)&&(f+=(Tt.test(f)?"&":"?")+v.data,delete v.data),!1===v.cache&&(f=f.replace(Dt,"$1"),o=(Tt.test(f)?"&":"?")+"_="+wt.guid+++o),v.url=f+o),v.ifModified&&(S.lastModified[f]&&T.setRequestHeader("If-Modified-Since",S.lastModified[f]),S.etag[f]&&T.setRequestHeader("If-None-Match",S.etag[f])),(v.data&&v.hasContent&&!1!==v.contentType||t.contentType)&&T.setRequestHeader("Content-Type",v.contentType),T.setRequestHeader("Accept",v.dataTypes[0]&&v.accepts[v.dataTypes[0]]?v.accepts[v.dataTypes[0]]+("*"!==v.dataTypes[0]?", "+Rt+"; q=0.01":""):v.accepts["*"]),v.headers)T.setRequestHeader(i,v.headers[i]);if(v.beforeSend&&(!1===v.beforeSend.call(y,T,v)||h))return T.abort();if(u="abort",b.add(v.complete),T.done(v.success),T.fail(v.error),c=Wt(Pt,v,t,T)){if(T.readyState=1,g&&m.trigger("ajaxSend",[T,v]),h)return T;v.async&&0<v.timeout&&(d=C.setTimeout(function(){T.abort("timeout")},v.timeout));try{h=!1,c.send(a,l)}catch(e){if(h)throw e;l(-1,e)}}else l(-1,"No Transport");function l(e,t,n,r){var i,o,a,s,u,l=t;h||(h=!0,d&&C.clearTimeout(d),c=void 0,p=r||"",T.readyState=0<e?4:0,i=200<=e&&e<300||304===e,n&&(s=function(e,t,n){var r,i,o,a,s=e.contents,u=e.dataTypes;while("*"===u[0])u.shift(),void 0===r&&(r=e.mimeType||t.getResponseHeader("Content-Type"));if(r)for(i in s)if(s[i]&&s[i].test(r)){u.unshift(i);break}if(u[0]in n)o=u[0];else{for(i in n){if(!u[0]||e.converters[i+" "+u[0]]){o=i;break}a||(a=i)}o=o||a}if(o)return o!==u[0]&&u.unshift(o),n[o]}(v,T,n)),!i&&-1<S.inArray("script",v.dataTypes)&&S.inArray("json",v.dataTypes)<0&&(v.converters["text script"]=function(){}),s=function(e,t,n,r){var i,o,a,s,u,l={},c=e.dataTypes.slice();if(c[1])for(a in e.converters)l[a.toLowerCase()]=e.converters[a];o=c.shift();while(o)if(e.responseFields[o]&&(n[e.responseFields[o]]=t),!u&&r&&e.dataFilter&&(t=e.dataFilter(t,e.dataType)),u=o,o=c.shift())if("*"===o)o=u;else if("*"!==u&&u!==o){if(!(a=l[u+" "+o]||l["* "+o]))for(i in l)if((s=i.split(" "))[1]===o&&(a=l[u+" "+s[0]]||l["* "+s[0]])){!0===a?a=l[i]:!0!==l[i]&&(o=s[0],c.unshift(s[1]));break}if(!0!==a)if(a&&e["throws"])t=a(t);else try{t=a(t)}catch(e){return{state:"parsererror",error:a?e:"No conversion from "+u+" to "+o}}}return{state:"success",data:t}}(v,s,T,i),i?(v.ifModified&&((u=T.getResponseHeader("Last-Modified"))&&(S.lastModified[f]=u),(u=T.getResponseHeader("etag"))&&(S.etag[f]=u)),204===e||"HEAD"===v.type?l="nocontent":304===e?l="notmodified":(l=s.state,o=s.data,i=!(a=s.error))):(a=l,!e&&l||(l="error",e<0&&(e=0))),T.status=e,T.statusText=(t||l)+"",i?x.resolveWith(y,[o,l,T]):x.rejectWith(y,[T,l,a]),T.statusCode(w),w=void 0,g&&m.trigger(i?"ajaxSuccess":"ajaxError",[T,v,i?o:a]),b.fireWith(y,[T,l]),g&&(m.trigger("ajaxComplete",[T,v]),--S.active||S.event.trigger("ajaxStop")))}return T},getJSON:function(e,t,n){return S.get(e,t,n,"json")},getScript:function(e,t){return S.get(e,void 0,t,"script")}}),S.each(["get","post"],function(e,i){S[i]=function(e,t,n,r){return m(t)&&(r=r||n,n=t,t=void 0),S.ajax(S.extend({url:e,type:i,dataType:r,data:t,success:n},S.isPlainObject(e)&&e))}}),S.ajaxPrefilter(function(e){var t;for(t in e.headers)"content-type"===t.toLowerCase()&&(e.contentType=e.headers[t]||"")}),S._evalUrl=function(e,t,n){return S.ajax({url:e,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,converters:{"text script":function(){}},dataFilter:function(e){S.globalEval(e,t,n)}})},S.fn.extend({wrapAll:function(e){var t;return this[0]&&(m(e)&&(e=e.call(this[0])),t=S(e,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&t.insertBefore(this[0]),t.map(function(){var e=this;while(e.firstElementChild)e=e.firstElementChild;return e}).append(this)),this},wrapInner:function(n){return m(n)?this.each(function(e){S(this).wrapInner(n.call(this,e))}):this.each(function(){var e=S(this),t=e.contents();t.length?t.wrapAll(n):e.append(n)})},wrap:function(t){var n=m(t);return this.each(function(e){S(this).wrapAll(n?t.call(this,e):t)})},unwrap:function(e){return this.parent(e).not("body").each(function(){S(this).replaceWith(this.childNodes)}),this}}),S.expr.pseudos.hidden=function(e){return!S.expr.pseudos.visible(e)},S.expr.pseudos.visible=function(e){return!!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)},S.ajaxSettings.xhr=function(){try{return new C.XMLHttpRequest}catch(e){}};var Bt={0:200,1223:204},$t=S.ajaxSettings.xhr();y.cors=!!$t&&"withCredentials"in $t,y.ajax=$t=!!$t,S.ajaxTransport(function(i){var o,a;if(y.cors||$t&&!i.crossDomain)return{send:function(e,t){var n,r=i.xhr();if(r.open(i.type,i.url,i.async,i.username,i.password),i.xhrFields)for(n in i.xhrFields)r[n]=i.xhrFields[n];for(n in i.mimeType&&r.overrideMimeType&&r.overrideMimeType(i.mimeType),i.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest"),e)r.setRequestHeader(n,e[n]);o=function(e){return function(){o&&(o=a=r.onload=r.onerror=r.onabort=r.ontimeout=r.onreadystatechange=null,"abort"===e?r.abort():"error"===e?"number"!=typeof r.status?t(0,"error"):t(r.status,r.statusText):t(Bt[r.status]||r.status,r.statusText,"text"!==(r.responseType||"text")||"string"!=typeof r.responseText?{binary:r.response}:{text:r.responseText},r.getAllResponseHeaders()))}},r.onload=o(),a=r.onerror=r.ontimeout=o("error"),void 0!==r.onabort?r.onabort=a:r.onreadystatechange=function(){4===r.readyState&&C.setTimeout(function(){o&&a()})},o=o("abort");try{r.send(i.hasContent&&i.data||null)}catch(e){if(o)throw e}},abort:function(){o&&o()}}}),S.ajaxPrefilter(function(e){e.crossDomain&&(e.contents.script=!1)}),S.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(e){return S.globalEval(e),e}}}),S.ajaxPrefilter("script",function(e){void 0===e.cache&&(e.cache=!1),e.crossDomain&&(e.type="GET")}),S.ajaxTransport("script",function(n){var r,i;if(n.crossDomain||n.scriptAttrs)return{send:function(e,t){r=S("<script>").attr(n.scriptAttrs||{}).prop({charset:n.scriptCharset,src:n.url}).on("load error",i=function(e){r.remove(),i=null,e&&t("error"===e.type?404:200,e.type)}),E.head.appendChild(r[0])},abort:function(){i&&i()}}});var _t,zt=[],Ut=/(=)\?(?=&|$)|\?\?/;S.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var e=zt.pop()||S.expando+"_"+wt.guid++;return this[e]=!0,e}}),S.ajaxPrefilter("json jsonp",function(e,t,n){var r,i,o,a=!1!==e.jsonp&&(Ut.test(e.url)?"url":"string"==typeof e.data&&0===(e.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ut.test(e.data)&&"data");if(a||"jsonp"===e.dataTypes[0])return r=e.jsonpCallback=m(e.jsonpCallback)?e.jsonpCallback():e.jsonpCallback,a?e[a]=e[a].replace(Ut,"$1"+r):!1!==e.jsonp&&(e.url+=(Tt.test(e.url)?"&":"?")+e.jsonp+"="+r),e.converters["script json"]=function(){return o||S.error(r+" was not called"),o[0]},e.dataTypes[0]="json",i=C[r],C[r]=function(){o=arguments},n.always(function(){void 0===i?S(C).removeProp(r):C[r]=i,e[r]&&(e.jsonpCallback=t.jsonpCallback,zt.push(r)),o&&m(i)&&i(o[0]),o=i=void 0}),"script"}),y.createHTMLDocument=((_t=E.implementation.createHTMLDocument("").body).innerHTML="<form></form><form></form>",2===_t.childNodes.length),S.parseHTML=function(e,t,n){return"string"!=typeof e?[]:("boolean"==typeof t&&(n=t,t=!1),t||(y.createHTMLDocument?((r=(t=E.implementation.createHTMLDocument("")).createElement("base")).href=E.location.href,t.head.appendChild(r)):t=E),o=!n&&[],(i=N.exec(e))?[t.createElement(i[1])]:(i=xe([e],t,o),o&&o.length&&S(o).remove(),S.merge([],i.childNodes)));var r,i,o},S.fn.load=function(e,t,n){var r,i,o,a=this,s=e.indexOf(" ");return-1<s&&(r=ht(e.slice(s)),e=e.slice(0,s)),m(t)?(n=t,t=void 0):t&&"object"==typeof t&&(i="POST"),0<a.length&&S.ajax({url:e,type:i||"GET",dataType:"html",data:t}).done(function(e){o=arguments,a.html(r?S("<div>").append(S.parseHTML(e)).find(r):e)}).always(n&&function(e,t){a.each(function(){n.apply(this,o||[e.responseText,t,e])})}),this},S.expr.pseudos.animated=function(t){return S.grep(S.timers,function(e){return t===e.elem}).length},S.offset={setOffset:function(e,t,n){var r,i,o,a,s,u,l=S.css(e,"position"),c=S(e),f={};"static"===l&&(e.style.position="relative"),s=c.offset(),o=S.css(e,"top"),u=S.css(e,"left"),("absolute"===l||"fixed"===l)&&-1<(o+u).indexOf("auto")?(a=(r=c.position()).top,i=r.left):(a=parseFloat(o)||0,i=parseFloat(u)||0),m(t)&&(t=t.call(e,n,S.extend({},s))),null!=t.top&&(f.top=t.top-s.top+a),null!=t.left&&(f.left=t.left-s.left+i),"using"in t?t.using.call(e,f):c.css(f)}},S.fn.extend({offset:function(t){if(arguments.length)return void 0===t?this:this.each(function(e){S.offset.setOffset(this,t,e)});var e,n,r=this[0];return r?r.getClientRects().length?(e=r.getBoundingClientRect(),n=r.ownerDocument.defaultView,{top:e.top+n.pageYOffset,left:e.left+n.pageXOffset}):{top:0,left:0}:void 0},position:function(){if(this[0]){var e,t,n,r=this[0],i={top:0,left:0};if("fixed"===S.css(r,"position"))t=r.getBoundingClientRect();else{t=this.offset(),n=r.ownerDocument,e=r.offsetParent||n.documentElement;while(e&&(e===n.body||e===n.documentElement)&&"static"===S.css(e,"position"))e=e.parentNode;e&&e!==r&&1===e.nodeType&&((i=S(e).offset()).top+=S.css(e,"borderTopWidth",!0),i.left+=S.css(e,"borderLeftWidth",!0))}return{top:t.top-i.top-S.css(r,"marginTop",!0),left:t.left-i.left-S.css(r,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var e=this.offsetParent;while(e&&"static"===S.css(e,"position"))e=e.offsetParent;return e||re})}}),S.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(t,i){var o="pageYOffset"===i;S.fn[t]=function(e){return $(this,function(e,t,n){var r;if(x(e)?r=e:9===e.nodeType&&(r=e.defaultView),void 0===n)return r?r[i]:e[t];r?r.scrollTo(o?r.pageXOffset:n,o?n:r.pageYOffset):e[t]=n},t,e,arguments.length)}}),S.each(["top","left"],function(e,n){S.cssHooks[n]=Fe(y.pixelPosition,function(e,t){if(t)return t=We(e,n),Pe.test(t)?S(e).position()[n]+"px":t})}),S.each({Height:"height",Width:"width"},function(a,s){S.each({padding:"inner"+a,content:s,"":"outer"+a},function(r,o){S.fn[o]=function(e,t){var n=arguments.length&&(r||"boolean"!=typeof e),i=r||(!0===e||!0===t?"margin":"border");return $(this,function(e,t,n){var r;return x(e)?0===o.indexOf("outer")?e["inner"+a]:e.document.documentElement["client"+a]:9===e.nodeType?(r=e.documentElement,Math.max(e.body["scroll"+a],r["scroll"+a],e.body["offset"+a],r["offset"+a],r["client"+a])):void 0===n?S.css(e,t,i):S.style(e,t,n,i)},s,n?e:void 0,n)}})}),S.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(e,t){S.fn[t]=function(e){return this.on(t,e)}}),S.fn.extend({bind:function(e,t,n){return this.on(e,null,t,n)},unbind:function(e,t){return this.off(e,null,t)},delegate:function(e,t,n,r){return this.on(t,e,n,r)},undelegate:function(e,t,n){return 1===arguments.length?this.off(e,"**"):this.off(t,e||"**",n)},hover:function(e,t){return this.mouseenter(e).mouseleave(t||e)}}),S.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(e,n){S.fn[n]=function(e,t){return 0<arguments.length?this.on(n,null,e,t):this.trigger(n)}});var Xt=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;S.proxy=function(e,t){var n,r,i;if("string"==typeof t&&(n=e[t],t=e,e=n),m(e))return r=s.call(arguments,2),(i=function(){return e.apply(t||this,r.concat(s.call(arguments)))}).guid=e.guid=e.guid||S.guid++,i},S.holdReady=function(e){e?S.readyWait++:S.ready(!0)},S.isArray=Array.isArray,S.parseJSON=JSON.parse,S.nodeName=A,S.isFunction=m,S.isWindow=x,S.camelCase=X,S.type=w,S.now=Date.now,S.isNumeric=function(e){var t=S.type(e);return("number"===t||"string"===t)&&!isNaN(e-parseFloat(e))},S.trim=function(e){return null==e?"":(e+"").replace(Xt,"")},"function"==typeof define&&define.amd&&define("jquery",[],function(){return S});var Vt=C.jQuery,Gt=C.$;return S.noConflict=function(e){return C.$===S&&(C.$=Gt),e&&C.jQuery===S&&(C.jQuery=Vt),S},"undefined"==typeof e&&(C.jQuery=C.$=S),S});

/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
/*!
  * Bootstrap v5.0.2 (https://getbootstrap.com/)
  * Copyright 2011-2021 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/main/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):(t="undefined"!=typeof globalThis?globalThis:t||self).bootstrap=e()}(this,(function(){"use strict";const t={find:(t,e=document.documentElement)=>[].concat(...Element.prototype.querySelectorAll.call(e,t)),findOne:(t,e=document.documentElement)=>Element.prototype.querySelector.call(e,t),children:(t,e)=>[].concat(...t.children).filter(t=>t.matches(e)),parents(t,e){const i=[];let n=t.parentNode;for(;n&&n.nodeType===Node.ELEMENT_NODE&&3!==n.nodeType;)n.matches(e)&&i.push(n),n=n.parentNode;return i},prev(t,e){let i=t.previousElementSibling;for(;i;){if(i.matches(e))return[i];i=i.previousElementSibling}return[]},next(t,e){let i=t.nextElementSibling;for(;i;){if(i.matches(e))return[i];i=i.nextElementSibling}return[]}},e=t=>{do{t+=Math.floor(1e6*Math.random())}while(document.getElementById(t));return t},i=t=>{let e=t.getAttribute("data-bs-target");if(!e||"#"===e){let i=t.getAttribute("href");if(!i||!i.includes("#")&&!i.startsWith("."))return null;i.includes("#")&&!i.startsWith("#")&&(i="#"+i.split("#")[1]),e=i&&"#"!==i?i.trim():null}return e},n=t=>{const e=i(t);return e&&document.querySelector(e)?e:null},s=t=>{const e=i(t);return e?document.querySelector(e):null},o=t=>{t.dispatchEvent(new Event("transitionend"))},r=t=>!(!t||"object"!=typeof t)&&(void 0!==t.jquery&&(t=t[0]),void 0!==t.nodeType),a=e=>r(e)?e.jquery?e[0]:e:"string"==typeof e&&e.length>0?t.findOne(e):null,l=(t,e,i)=>{Object.keys(i).forEach(n=>{const s=i[n],o=e[n],a=o&&r(o)?"element":null==(l=o)?""+l:{}.toString.call(l).match(/\s([a-z]+)/i)[1].toLowerCase();var l;if(!new RegExp(s).test(a))throw new TypeError(`${t.toUpperCase()}: Option "${n}" provided type "${a}" but expected type "${s}".`)})},c=t=>!(!r(t)||0===t.getClientRects().length)&&"visible"===getComputedStyle(t).getPropertyValue("visibility"),h=t=>!t||t.nodeType!==Node.ELEMENT_NODE||!!t.classList.contains("disabled")||(void 0!==t.disabled?t.disabled:t.hasAttribute("disabled")&&"false"!==t.getAttribute("disabled")),d=t=>{if(!document.documentElement.attachShadow)return null;if("function"==typeof t.getRootNode){const e=t.getRootNode();return e instanceof ShadowRoot?e:null}return t instanceof ShadowRoot?t:t.parentNode?d(t.parentNode):null},u=()=>{},f=t=>t.offsetHeight,p=()=>{const{jQuery:t}=window;return t&&!document.body.hasAttribute("data-bs-no-jquery")?t:null},m=[],g=()=>"rtl"===document.documentElement.dir,_=t=>{var e;e=()=>{const e=p();if(e){const i=t.NAME,n=e.fn[i];e.fn[i]=t.jQueryInterface,e.fn[i].Constructor=t,e.fn[i].noConflict=()=>(e.fn[i]=n,t.jQueryInterface)}},"loading"===document.readyState?(m.length||document.addEventListener("DOMContentLoaded",()=>{m.forEach(t=>t())}),m.push(e)):e()},b=t=>{"function"==typeof t&&t()},v=(t,e,i=!0)=>{if(!i)return void b(t);const n=(t=>{if(!t)return 0;let{transitionDuration:e,transitionDelay:i}=window.getComputedStyle(t);const n=Number.parseFloat(e),s=Number.parseFloat(i);return n||s?(e=e.split(",")[0],i=i.split(",")[0],1e3*(Number.parseFloat(e)+Number.parseFloat(i))):0})(e)+5;let s=!1;const r=({target:i})=>{i===e&&(s=!0,e.removeEventListener("transitionend",r),b(t))};e.addEventListener("transitionend",r),setTimeout(()=>{s||o(e)},n)},y=(t,e,i,n)=>{let s=t.indexOf(e);if(-1===s)return t[!i&&n?t.length-1:0];const o=t.length;return s+=i?1:-1,n&&(s=(s+o)%o),t[Math.max(0,Math.min(s,o-1))]},w=/[^.]*(?=\..*)\.|.*/,E=/\..*/,A=/::\d+$/,T={};let O=1;const C={mouseenter:"mouseover",mouseleave:"mouseout"},k=/^(mouseenter|mouseleave)/i,L=new Set(["click","dblclick","mouseup","mousedown","contextmenu","mousewheel","DOMMouseScroll","mouseover","mouseout","mousemove","selectstart","selectend","keydown","keypress","keyup","orientationchange","touchstart","touchmove","touchend","touchcancel","pointerdown","pointermove","pointerup","pointerleave","pointercancel","gesturestart","gesturechange","gestureend","focus","blur","change","reset","select","submit","focusin","focusout","load","unload","beforeunload","resize","move","DOMContentLoaded","readystatechange","error","abort","scroll"]);function x(t,e){return e&&`${e}::${O++}`||t.uidEvent||O++}function D(t){const e=x(t);return t.uidEvent=e,T[e]=T[e]||{},T[e]}function S(t,e,i=null){const n=Object.keys(t);for(let s=0,o=n.length;s<o;s++){const o=t[n[s]];if(o.originalHandler===e&&o.delegationSelector===i)return o}return null}function I(t,e,i){const n="string"==typeof e,s=n?i:e;let o=M(t);return L.has(o)||(o=t),[n,s,o]}function N(t,e,i,n,s){if("string"!=typeof e||!t)return;if(i||(i=n,n=null),k.test(e)){const t=t=>function(e){if(!e.relatedTarget||e.relatedTarget!==e.delegateTarget&&!e.delegateTarget.contains(e.relatedTarget))return t.call(this,e)};n?n=t(n):i=t(i)}const[o,r,a]=I(e,i,n),l=D(t),c=l[a]||(l[a]={}),h=S(c,r,o?i:null);if(h)return void(h.oneOff=h.oneOff&&s);const d=x(r,e.replace(w,"")),u=o?function(t,e,i){return function n(s){const o=t.querySelectorAll(e);for(let{target:r}=s;r&&r!==this;r=r.parentNode)for(let a=o.length;a--;)if(o[a]===r)return s.delegateTarget=r,n.oneOff&&P.off(t,s.type,e,i),i.apply(r,[s]);return null}}(t,i,n):function(t,e){return function i(n){return n.delegateTarget=t,i.oneOff&&P.off(t,n.type,e),e.apply(t,[n])}}(t,i);u.delegationSelector=o?i:null,u.originalHandler=r,u.oneOff=s,u.uidEvent=d,c[d]=u,t.addEventListener(a,u,o)}function j(t,e,i,n,s){const o=S(e[i],n,s);o&&(t.removeEventListener(i,o,Boolean(s)),delete e[i][o.uidEvent])}function M(t){return t=t.replace(E,""),C[t]||t}const P={on(t,e,i,n){N(t,e,i,n,!1)},one(t,e,i,n){N(t,e,i,n,!0)},off(t,e,i,n){if("string"!=typeof e||!t)return;const[s,o,r]=I(e,i,n),a=r!==e,l=D(t),c=e.startsWith(".");if(void 0!==o){if(!l||!l[r])return;return void j(t,l,r,o,s?i:null)}c&&Object.keys(l).forEach(i=>{!function(t,e,i,n){const s=e[i]||{};Object.keys(s).forEach(o=>{if(o.includes(n)){const n=s[o];j(t,e,i,n.originalHandler,n.delegationSelector)}})}(t,l,i,e.slice(1))});const h=l[r]||{};Object.keys(h).forEach(i=>{const n=i.replace(A,"");if(!a||e.includes(n)){const e=h[i];j(t,l,r,e.originalHandler,e.delegationSelector)}})},trigger(t,e,i){if("string"!=typeof e||!t)return null;const n=p(),s=M(e),o=e!==s,r=L.has(s);let a,l=!0,c=!0,h=!1,d=null;return o&&n&&(a=n.Event(e,i),n(t).trigger(a),l=!a.isPropagationStopped(),c=!a.isImmediatePropagationStopped(),h=a.isDefaultPrevented()),r?(d=document.createEvent("HTMLEvents"),d.initEvent(s,l,!0)):d=new CustomEvent(e,{bubbles:l,cancelable:!0}),void 0!==i&&Object.keys(i).forEach(t=>{Object.defineProperty(d,t,{get:()=>i[t]})}),h&&d.preventDefault(),c&&t.dispatchEvent(d),d.defaultPrevented&&void 0!==a&&a.preventDefault(),d}},H=new Map;var R={set(t,e,i){H.has(t)||H.set(t,new Map);const n=H.get(t);n.has(e)||0===n.size?n.set(e,i):console.error(`Bootstrap doesn't allow more than one instance per element. Bound instance: ${Array.from(n.keys())[0]}.`)},get:(t,e)=>H.has(t)&&H.get(t).get(e)||null,remove(t,e){if(!H.has(t))return;const i=H.get(t);i.delete(e),0===i.size&&H.delete(t)}};class B{constructor(t){(t=a(t))&&(this._element=t,R.set(this._element,this.constructor.DATA_KEY,this))}dispose(){R.remove(this._element,this.constructor.DATA_KEY),P.off(this._element,this.constructor.EVENT_KEY),Object.getOwnPropertyNames(this).forEach(t=>{this[t]=null})}_queueCallback(t,e,i=!0){v(t,e,i)}static getInstance(t){return R.get(t,this.DATA_KEY)}static getOrCreateInstance(t,e={}){return this.getInstance(t)||new this(t,"object"==typeof e?e:null)}static get VERSION(){return"5.0.2"}static get NAME(){throw new Error('You have to implement the static method "NAME", for each component!')}static get DATA_KEY(){return"bs."+this.NAME}static get EVENT_KEY(){return"."+this.DATA_KEY}}class W extends B{static get NAME(){return"alert"}close(t){const e=t?this._getRootElement(t):this._element,i=this._triggerCloseEvent(e);null===i||i.defaultPrevented||this._removeElement(e)}_getRootElement(t){return s(t)||t.closest(".alert")}_triggerCloseEvent(t){return P.trigger(t,"close.bs.alert")}_removeElement(t){t.classList.remove("show");const e=t.classList.contains("fade");this._queueCallback(()=>this._destroyElement(t),t,e)}_destroyElement(t){t.remove(),P.trigger(t,"closed.bs.alert")}static jQueryInterface(t){return this.each((function(){const e=W.getOrCreateInstance(this);"close"===t&&e[t](this)}))}static handleDismiss(t){return function(e){e&&e.preventDefault(),t.close(this)}}}P.on(document,"click.bs.alert.data-api",'[data-bs-dismiss="alert"]',W.handleDismiss(new W)),_(W);class q extends B{static get NAME(){return"button"}toggle(){this._element.setAttribute("aria-pressed",this._element.classList.toggle("active"))}static jQueryInterface(t){return this.each((function(){const e=q.getOrCreateInstance(this);"toggle"===t&&e[t]()}))}}function z(t){return"true"===t||"false"!==t&&(t===Number(t).toString()?Number(t):""===t||"null"===t?null:t)}function $(t){return t.replace(/[A-Z]/g,t=>"-"+t.toLowerCase())}P.on(document,"click.bs.button.data-api",'[data-bs-toggle="button"]',t=>{t.preventDefault();const e=t.target.closest('[data-bs-toggle="button"]');q.getOrCreateInstance(e).toggle()}),_(q);const U={setDataAttribute(t,e,i){t.setAttribute("data-bs-"+$(e),i)},removeDataAttribute(t,e){t.removeAttribute("data-bs-"+$(e))},getDataAttributes(t){if(!t)return{};const e={};return Object.keys(t.dataset).filter(t=>t.startsWith("bs")).forEach(i=>{let n=i.replace(/^bs/,"");n=n.charAt(0).toLowerCase()+n.slice(1,n.length),e[n]=z(t.dataset[i])}),e},getDataAttribute:(t,e)=>z(t.getAttribute("data-bs-"+$(e))),offset(t){const e=t.getBoundingClientRect();return{top:e.top+document.body.scrollTop,left:e.left+document.body.scrollLeft}},position:t=>({top:t.offsetTop,left:t.offsetLeft})},F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},V={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},K="next",X="prev",Y="left",Q="right",G={ArrowLeft:Q,ArrowRight:Y};class Z extends B{constructor(e,i){super(e),this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(i),this._indicatorsElement=t.findOne(".carousel-indicators",this._element),this._touchSupported="ontouchstart"in document.documentElement||navigator.maxTouchPoints>0,this._pointerEvent=Boolean(window.PointerEvent),this._addEventListeners()}static get Default(){return F}static get NAME(){return"carousel"}next(){this._slide(K)}nextWhenVisible(){!document.hidden&&c(this._element)&&this.next()}prev(){this._slide(X)}pause(e){e||(this._isPaused=!0),t.findOne(".carousel-item-next, .carousel-item-prev",this._element)&&(o(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null}cycle(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config&&this._config.interval&&!this._isPaused&&(this._updateInterval(),this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))}to(e){this._activeElement=t.findOne(".active.carousel-item",this._element);const i=this._getItemIndex(this._activeElement);if(e>this._items.length-1||e<0)return;if(this._isSliding)return void P.one(this._element,"slid.bs.carousel",()=>this.to(e));if(i===e)return this.pause(),void this.cycle();const n=e>i?K:X;this._slide(n,this._items[e])}_getConfig(t){return t={...F,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("carousel",t,V),t}_handleSwipe(){const t=Math.abs(this.touchDeltaX);if(t<=40)return;const e=t/this.touchDeltaX;this.touchDeltaX=0,e&&this._slide(e>0?Q:Y)}_addEventListeners(){this._config.keyboard&&P.on(this._element,"keydown.bs.carousel",t=>this._keydown(t)),"hover"===this._config.pause&&(P.on(this._element,"mouseenter.bs.carousel",t=>this.pause(t)),P.on(this._element,"mouseleave.bs.carousel",t=>this.cycle(t))),this._config.touch&&this._touchSupported&&this._addTouchEventListeners()}_addTouchEventListeners(){const e=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType?this._pointerEvent||(this.touchStartX=t.touches[0].clientX):this.touchStartX=t.clientX},i=t=>{this.touchDeltaX=t.touches&&t.touches.length>1?0:t.touches[0].clientX-this.touchStartX},n=t=>{!this._pointerEvent||"pen"!==t.pointerType&&"touch"!==t.pointerType||(this.touchDeltaX=t.clientX-this.touchStartX),this._handleSwipe(),"hover"===this._config.pause&&(this.pause(),this.touchTimeout&&clearTimeout(this.touchTimeout),this.touchTimeout=setTimeout(t=>this.cycle(t),500+this._config.interval))};t.find(".carousel-item img",this._element).forEach(t=>{P.on(t,"dragstart.bs.carousel",t=>t.preventDefault())}),this._pointerEvent?(P.on(this._element,"pointerdown.bs.carousel",t=>e(t)),P.on(this._element,"pointerup.bs.carousel",t=>n(t)),this._element.classList.add("pointer-event")):(P.on(this._element,"touchstart.bs.carousel",t=>e(t)),P.on(this._element,"touchmove.bs.carousel",t=>i(t)),P.on(this._element,"touchend.bs.carousel",t=>n(t)))}_keydown(t){if(/input|textarea/i.test(t.target.tagName))return;const e=G[t.key];e&&(t.preventDefault(),this._slide(e))}_getItemIndex(e){return this._items=e&&e.parentNode?t.find(".carousel-item",e.parentNode):[],this._items.indexOf(e)}_getItemByOrder(t,e){const i=t===K;return y(this._items,e,i,this._config.wrap)}_triggerSlideEvent(e,i){const n=this._getItemIndex(e),s=this._getItemIndex(t.findOne(".active.carousel-item",this._element));return P.trigger(this._element,"slide.bs.carousel",{relatedTarget:e,direction:i,from:s,to:n})}_setActiveIndicatorElement(e){if(this._indicatorsElement){const i=t.findOne(".active",this._indicatorsElement);i.classList.remove("active"),i.removeAttribute("aria-current");const n=t.find("[data-bs-target]",this._indicatorsElement);for(let t=0;t<n.length;t++)if(Number.parseInt(n[t].getAttribute("data-bs-slide-to"),10)===this._getItemIndex(e)){n[t].classList.add("active"),n[t].setAttribute("aria-current","true");break}}}_updateInterval(){const e=this._activeElement||t.findOne(".active.carousel-item",this._element);if(!e)return;const i=Number.parseInt(e.getAttribute("data-bs-interval"),10);i?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,this._config.interval=i):this._config.interval=this._config.defaultInterval||this._config.interval}_slide(e,i){const n=this._directionToOrder(e),s=t.findOne(".active.carousel-item",this._element),o=this._getItemIndex(s),r=i||this._getItemByOrder(n,s),a=this._getItemIndex(r),l=Boolean(this._interval),c=n===K,h=c?"carousel-item-start":"carousel-item-end",d=c?"carousel-item-next":"carousel-item-prev",u=this._orderToDirection(n);if(r&&r.classList.contains("active"))return void(this._isSliding=!1);if(this._isSliding)return;if(this._triggerSlideEvent(r,u).defaultPrevented)return;if(!s||!r)return;this._isSliding=!0,l&&this.pause(),this._setActiveIndicatorElement(r),this._activeElement=r;const p=()=>{P.trigger(this._element,"slid.bs.carousel",{relatedTarget:r,direction:u,from:o,to:a})};if(this._element.classList.contains("slide")){r.classList.add(d),f(r),s.classList.add(h),r.classList.add(h);const t=()=>{r.classList.remove(h,d),r.classList.add("active"),s.classList.remove("active",d,h),this._isSliding=!1,setTimeout(p,0)};this._queueCallback(t,s,!0)}else s.classList.remove("active"),r.classList.add("active"),this._isSliding=!1,p();l&&this.cycle()}_directionToOrder(t){return[Q,Y].includes(t)?g()?t===Y?X:K:t===Y?K:X:t}_orderToDirection(t){return[K,X].includes(t)?g()?t===X?Y:Q:t===X?Q:Y:t}static carouselInterface(t,e){const i=Z.getOrCreateInstance(t,e);let{_config:n}=i;"object"==typeof e&&(n={...n,...e});const s="string"==typeof e?e:n.slide;if("number"==typeof e)i.to(e);else if("string"==typeof s){if(void 0===i[s])throw new TypeError(`No method named "${s}"`);i[s]()}else n.interval&&n.ride&&(i.pause(),i.cycle())}static jQueryInterface(t){return this.each((function(){Z.carouselInterface(this,t)}))}static dataApiClickHandler(t){const e=s(this);if(!e||!e.classList.contains("carousel"))return;const i={...U.getDataAttributes(e),...U.getDataAttributes(this)},n=this.getAttribute("data-bs-slide-to");n&&(i.interval=!1),Z.carouselInterface(e,i),n&&Z.getInstance(e).to(n),t.preventDefault()}}P.on(document,"click.bs.carousel.data-api","[data-bs-slide], [data-bs-slide-to]",Z.dataApiClickHandler),P.on(window,"load.bs.carousel.data-api",()=>{const e=t.find('[data-bs-ride="carousel"]');for(let t=0,i=e.length;t<i;t++)Z.carouselInterface(e[t],Z.getInstance(e[t]))}),_(Z);const J={toggle:!0,parent:""},tt={toggle:"boolean",parent:"(string|element)"};class et extends B{constructor(e,i){super(e),this._isTransitioning=!1,this._config=this._getConfig(i),this._triggerArray=t.find(`[data-bs-toggle="collapse"][href="#${this._element.id}"],[data-bs-toggle="collapse"][data-bs-target="#${this._element.id}"]`);const s=t.find('[data-bs-toggle="collapse"]');for(let e=0,i=s.length;e<i;e++){const i=s[e],o=n(i),r=t.find(o).filter(t=>t===this._element);null!==o&&r.length&&(this._selector=o,this._triggerArray.push(i))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}static get Default(){return J}static get NAME(){return"collapse"}toggle(){this._element.classList.contains("show")?this.hide():this.show()}show(){if(this._isTransitioning||this._element.classList.contains("show"))return;let e,i;this._parent&&(e=t.find(".show, .collapsing",this._parent).filter(t=>"string"==typeof this._config.parent?t.getAttribute("data-bs-parent")===this._config.parent:t.classList.contains("collapse")),0===e.length&&(e=null));const n=t.findOne(this._selector);if(e){const t=e.find(t=>n!==t);if(i=t?et.getInstance(t):null,i&&i._isTransitioning)return}if(P.trigger(this._element,"show.bs.collapse").defaultPrevented)return;e&&e.forEach(t=>{n!==t&&et.collapseInterface(t,"hide"),i||R.set(t,"bs.collapse",null)});const s=this._getDimension();this._element.classList.remove("collapse"),this._element.classList.add("collapsing"),this._element.style[s]=0,this._triggerArray.length&&this._triggerArray.forEach(t=>{t.classList.remove("collapsed"),t.setAttribute("aria-expanded",!0)}),this.setTransitioning(!0);const o="scroll"+(s[0].toUpperCase()+s.slice(1));this._queueCallback(()=>{this._element.classList.remove("collapsing"),this._element.classList.add("collapse","show"),this._element.style[s]="",this.setTransitioning(!1),P.trigger(this._element,"shown.bs.collapse")},this._element,!0),this._element.style[s]=this._element[o]+"px"}hide(){if(this._isTransitioning||!this._element.classList.contains("show"))return;if(P.trigger(this._element,"hide.bs.collapse").defaultPrevented)return;const t=this._getDimension();this._element.style[t]=this._element.getBoundingClientRect()[t]+"px",f(this._element),this._element.classList.add("collapsing"),this._element.classList.remove("collapse","show");const e=this._triggerArray.length;if(e>0)for(let t=0;t<e;t++){const e=this._triggerArray[t],i=s(e);i&&!i.classList.contains("show")&&(e.classList.add("collapsed"),e.setAttribute("aria-expanded",!1))}this.setTransitioning(!0),this._element.style[t]="",this._queueCallback(()=>{this.setTransitioning(!1),this._element.classList.remove("collapsing"),this._element.classList.add("collapse"),P.trigger(this._element,"hidden.bs.collapse")},this._element,!0)}setTransitioning(t){this._isTransitioning=t}_getConfig(t){return(t={...J,...t}).toggle=Boolean(t.toggle),l("collapse",t,tt),t}_getDimension(){return this._element.classList.contains("width")?"width":"height"}_getParent(){let{parent:e}=this._config;e=a(e);const i=`[data-bs-toggle="collapse"][data-bs-parent="${e}"]`;return t.find(i,e).forEach(t=>{const e=s(t);this._addAriaAndCollapsedClass(e,[t])}),e}_addAriaAndCollapsedClass(t,e){if(!t||!e.length)return;const i=t.classList.contains("show");e.forEach(t=>{i?t.classList.remove("collapsed"):t.classList.add("collapsed"),t.setAttribute("aria-expanded",i)})}static collapseInterface(t,e){let i=et.getInstance(t);const n={...J,...U.getDataAttributes(t),..."object"==typeof e&&e?e:{}};if(!i&&n.toggle&&"string"==typeof e&&/show|hide/.test(e)&&(n.toggle=!1),i||(i=new et(t,n)),"string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){et.collapseInterface(this,t)}))}}P.on(document,"click.bs.collapse.data-api",'[data-bs-toggle="collapse"]',(function(e){("A"===e.target.tagName||e.delegateTarget&&"A"===e.delegateTarget.tagName)&&e.preventDefault();const i=U.getDataAttributes(this),s=n(this);t.find(s).forEach(t=>{const e=et.getInstance(t);let n;e?(null===e._parent&&"string"==typeof i.parent&&(e._config.parent=i.parent,e._parent=e._getParent()),n="toggle"):n=i,et.collapseInterface(t,n)})})),_(et);var it="top",nt="bottom",st="right",ot="left",rt=[it,nt,st,ot],at=rt.reduce((function(t,e){return t.concat([e+"-start",e+"-end"])}),[]),lt=[].concat(rt,["auto"]).reduce((function(t,e){return t.concat([e,e+"-start",e+"-end"])}),[]),ct=["beforeRead","read","afterRead","beforeMain","main","afterMain","beforeWrite","write","afterWrite"];function ht(t){return t?(t.nodeName||"").toLowerCase():null}function dt(t){if(null==t)return window;if("[object Window]"!==t.toString()){var e=t.ownerDocument;return e&&e.defaultView||window}return t}function ut(t){return t instanceof dt(t).Element||t instanceof Element}function ft(t){return t instanceof dt(t).HTMLElement||t instanceof HTMLElement}function pt(t){return"undefined"!=typeof ShadowRoot&&(t instanceof dt(t).ShadowRoot||t instanceof ShadowRoot)}var mt={name:"applyStyles",enabled:!0,phase:"write",fn:function(t){var e=t.state;Object.keys(e.elements).forEach((function(t){var i=e.styles[t]||{},n=e.attributes[t]||{},s=e.elements[t];ft(s)&&ht(s)&&(Object.assign(s.style,i),Object.keys(n).forEach((function(t){var e=n[t];!1===e?s.removeAttribute(t):s.setAttribute(t,!0===e?"":e)})))}))},effect:function(t){var e=t.state,i={popper:{position:e.options.strategy,left:"0",top:"0",margin:"0"},arrow:{position:"absolute"},reference:{}};return Object.assign(e.elements.popper.style,i.popper),e.styles=i,e.elements.arrow&&Object.assign(e.elements.arrow.style,i.arrow),function(){Object.keys(e.elements).forEach((function(t){var n=e.elements[t],s=e.attributes[t]||{},o=Object.keys(e.styles.hasOwnProperty(t)?e.styles[t]:i[t]).reduce((function(t,e){return t[e]="",t}),{});ft(n)&&ht(n)&&(Object.assign(n.style,o),Object.keys(s).forEach((function(t){n.removeAttribute(t)})))}))}},requires:["computeStyles"]};function gt(t){return t.split("-")[0]}function _t(t){var e=t.getBoundingClientRect();return{width:e.width,height:e.height,top:e.top,right:e.right,bottom:e.bottom,left:e.left,x:e.left,y:e.top}}function bt(t){var e=_t(t),i=t.offsetWidth,n=t.offsetHeight;return Math.abs(e.width-i)<=1&&(i=e.width),Math.abs(e.height-n)<=1&&(n=e.height),{x:t.offsetLeft,y:t.offsetTop,width:i,height:n}}function vt(t,e){var i=e.getRootNode&&e.getRootNode();if(t.contains(e))return!0;if(i&&pt(i)){var n=e;do{if(n&&t.isSameNode(n))return!0;n=n.parentNode||n.host}while(n)}return!1}function yt(t){return dt(t).getComputedStyle(t)}function wt(t){return["table","td","th"].indexOf(ht(t))>=0}function Et(t){return((ut(t)?t.ownerDocument:t.document)||window.document).documentElement}function At(t){return"html"===ht(t)?t:t.assignedSlot||t.parentNode||(pt(t)?t.host:null)||Et(t)}function Tt(t){return ft(t)&&"fixed"!==yt(t).position?t.offsetParent:null}function Ot(t){for(var e=dt(t),i=Tt(t);i&&wt(i)&&"static"===yt(i).position;)i=Tt(i);return i&&("html"===ht(i)||"body"===ht(i)&&"static"===yt(i).position)?e:i||function(t){var e=-1!==navigator.userAgent.toLowerCase().indexOf("firefox");if(-1!==navigator.userAgent.indexOf("Trident")&&ft(t)&&"fixed"===yt(t).position)return null;for(var i=At(t);ft(i)&&["html","body"].indexOf(ht(i))<0;){var n=yt(i);if("none"!==n.transform||"none"!==n.perspective||"paint"===n.contain||-1!==["transform","perspective"].indexOf(n.willChange)||e&&"filter"===n.willChange||e&&n.filter&&"none"!==n.filter)return i;i=i.parentNode}return null}(t)||e}function Ct(t){return["top","bottom"].indexOf(t)>=0?"x":"y"}var kt=Math.max,Lt=Math.min,xt=Math.round;function Dt(t,e,i){return kt(t,Lt(e,i))}function St(t){return Object.assign({},{top:0,right:0,bottom:0,left:0},t)}function It(t,e){return e.reduce((function(e,i){return e[i]=t,e}),{})}var Nt={name:"arrow",enabled:!0,phase:"main",fn:function(t){var e,i=t.state,n=t.name,s=t.options,o=i.elements.arrow,r=i.modifiersData.popperOffsets,a=gt(i.placement),l=Ct(a),c=[ot,st].indexOf(a)>=0?"height":"width";if(o&&r){var h=function(t,e){return St("number"!=typeof(t="function"==typeof t?t(Object.assign({},e.rects,{placement:e.placement})):t)?t:It(t,rt))}(s.padding,i),d=bt(o),u="y"===l?it:ot,f="y"===l?nt:st,p=i.rects.reference[c]+i.rects.reference[l]-r[l]-i.rects.popper[c],m=r[l]-i.rects.reference[l],g=Ot(o),_=g?"y"===l?g.clientHeight||0:g.clientWidth||0:0,b=p/2-m/2,v=h[u],y=_-d[c]-h[f],w=_/2-d[c]/2+b,E=Dt(v,w,y),A=l;i.modifiersData[n]=((e={})[A]=E,e.centerOffset=E-w,e)}},effect:function(t){var e=t.state,i=t.options.element,n=void 0===i?"[data-popper-arrow]":i;null!=n&&("string"!=typeof n||(n=e.elements.popper.querySelector(n)))&&vt(e.elements.popper,n)&&(e.elements.arrow=n)},requires:["popperOffsets"],requiresIfExists:["preventOverflow"]},jt={top:"auto",right:"auto",bottom:"auto",left:"auto"};function Mt(t){var e,i=t.popper,n=t.popperRect,s=t.placement,o=t.offsets,r=t.position,a=t.gpuAcceleration,l=t.adaptive,c=t.roundOffsets,h=!0===c?function(t){var e=t.x,i=t.y,n=window.devicePixelRatio||1;return{x:xt(xt(e*n)/n)||0,y:xt(xt(i*n)/n)||0}}(o):"function"==typeof c?c(o):o,d=h.x,u=void 0===d?0:d,f=h.y,p=void 0===f?0:f,m=o.hasOwnProperty("x"),g=o.hasOwnProperty("y"),_=ot,b=it,v=window;if(l){var y=Ot(i),w="clientHeight",E="clientWidth";y===dt(i)&&"static"!==yt(y=Et(i)).position&&(w="scrollHeight",E="scrollWidth"),y=y,s===it&&(b=nt,p-=y[w]-n.height,p*=a?1:-1),s===ot&&(_=st,u-=y[E]-n.width,u*=a?1:-1)}var A,T=Object.assign({position:r},l&&jt);return a?Object.assign({},T,((A={})[b]=g?"0":"",A[_]=m?"0":"",A.transform=(v.devicePixelRatio||1)<2?"translate("+u+"px, "+p+"px)":"translate3d("+u+"px, "+p+"px, 0)",A)):Object.assign({},T,((e={})[b]=g?p+"px":"",e[_]=m?u+"px":"",e.transform="",e))}var Pt={name:"computeStyles",enabled:!0,phase:"beforeWrite",fn:function(t){var e=t.state,i=t.options,n=i.gpuAcceleration,s=void 0===n||n,o=i.adaptive,r=void 0===o||o,a=i.roundOffsets,l=void 0===a||a,c={placement:gt(e.placement),popper:e.elements.popper,popperRect:e.rects.popper,gpuAcceleration:s};null!=e.modifiersData.popperOffsets&&(e.styles.popper=Object.assign({},e.styles.popper,Mt(Object.assign({},c,{offsets:e.modifiersData.popperOffsets,position:e.options.strategy,adaptive:r,roundOffsets:l})))),null!=e.modifiersData.arrow&&(e.styles.arrow=Object.assign({},e.styles.arrow,Mt(Object.assign({},c,{offsets:e.modifiersData.arrow,position:"absolute",adaptive:!1,roundOffsets:l})))),e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-placement":e.placement})},data:{}},Ht={passive:!0},Rt={name:"eventListeners",enabled:!0,phase:"write",fn:function(){},effect:function(t){var e=t.state,i=t.instance,n=t.options,s=n.scroll,o=void 0===s||s,r=n.resize,a=void 0===r||r,l=dt(e.elements.popper),c=[].concat(e.scrollParents.reference,e.scrollParents.popper);return o&&c.forEach((function(t){t.addEventListener("scroll",i.update,Ht)})),a&&l.addEventListener("resize",i.update,Ht),function(){o&&c.forEach((function(t){t.removeEventListener("scroll",i.update,Ht)})),a&&l.removeEventListener("resize",i.update,Ht)}},data:{}},Bt={left:"right",right:"left",bottom:"top",top:"bottom"};function Wt(t){return t.replace(/left|right|bottom|top/g,(function(t){return Bt[t]}))}var qt={start:"end",end:"start"};function zt(t){return t.replace(/start|end/g,(function(t){return qt[t]}))}function $t(t){var e=dt(t);return{scrollLeft:e.pageXOffset,scrollTop:e.pageYOffset}}function Ut(t){return _t(Et(t)).left+$t(t).scrollLeft}function Ft(t){var e=yt(t),i=e.overflow,n=e.overflowX,s=e.overflowY;return/auto|scroll|overlay|hidden/.test(i+s+n)}function Vt(t,e){var i;void 0===e&&(e=[]);var n=function t(e){return["html","body","#document"].indexOf(ht(e))>=0?e.ownerDocument.body:ft(e)&&Ft(e)?e:t(At(e))}(t),s=n===(null==(i=t.ownerDocument)?void 0:i.body),o=dt(n),r=s?[o].concat(o.visualViewport||[],Ft(n)?n:[]):n,a=e.concat(r);return s?a:a.concat(Vt(At(r)))}function Kt(t){return Object.assign({},t,{left:t.x,top:t.y,right:t.x+t.width,bottom:t.y+t.height})}function Xt(t,e){return"viewport"===e?Kt(function(t){var e=dt(t),i=Et(t),n=e.visualViewport,s=i.clientWidth,o=i.clientHeight,r=0,a=0;return n&&(s=n.width,o=n.height,/^((?!chrome|android).)*safari/i.test(navigator.userAgent)||(r=n.offsetLeft,a=n.offsetTop)),{width:s,height:o,x:r+Ut(t),y:a}}(t)):ft(e)?function(t){var e=_t(t);return e.top=e.top+t.clientTop,e.left=e.left+t.clientLeft,e.bottom=e.top+t.clientHeight,e.right=e.left+t.clientWidth,e.width=t.clientWidth,e.height=t.clientHeight,e.x=e.left,e.y=e.top,e}(e):Kt(function(t){var e,i=Et(t),n=$t(t),s=null==(e=t.ownerDocument)?void 0:e.body,o=kt(i.scrollWidth,i.clientWidth,s?s.scrollWidth:0,s?s.clientWidth:0),r=kt(i.scrollHeight,i.clientHeight,s?s.scrollHeight:0,s?s.clientHeight:0),a=-n.scrollLeft+Ut(t),l=-n.scrollTop;return"rtl"===yt(s||i).direction&&(a+=kt(i.clientWidth,s?s.clientWidth:0)-o),{width:o,height:r,x:a,y:l}}(Et(t)))}function Yt(t){return t.split("-")[1]}function Qt(t){var e,i=t.reference,n=t.element,s=t.placement,o=s?gt(s):null,r=s?Yt(s):null,a=i.x+i.width/2-n.width/2,l=i.y+i.height/2-n.height/2;switch(o){case it:e={x:a,y:i.y-n.height};break;case nt:e={x:a,y:i.y+i.height};break;case st:e={x:i.x+i.width,y:l};break;case ot:e={x:i.x-n.width,y:l};break;default:e={x:i.x,y:i.y}}var c=o?Ct(o):null;if(null!=c){var h="y"===c?"height":"width";switch(r){case"start":e[c]=e[c]-(i[h]/2-n[h]/2);break;case"end":e[c]=e[c]+(i[h]/2-n[h]/2)}}return e}function Gt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=void 0===n?t.placement:n,o=i.boundary,r=void 0===o?"clippingParents":o,a=i.rootBoundary,l=void 0===a?"viewport":a,c=i.elementContext,h=void 0===c?"popper":c,d=i.altBoundary,u=void 0!==d&&d,f=i.padding,p=void 0===f?0:f,m=St("number"!=typeof p?p:It(p,rt)),g="popper"===h?"reference":"popper",_=t.elements.reference,b=t.rects.popper,v=t.elements[u?g:h],y=function(t,e,i){var n="clippingParents"===e?function(t){var e=Vt(At(t)),i=["absolute","fixed"].indexOf(yt(t).position)>=0&&ft(t)?Ot(t):t;return ut(i)?e.filter((function(t){return ut(t)&&vt(t,i)&&"body"!==ht(t)})):[]}(t):[].concat(e),s=[].concat(n,[i]),o=s[0],r=s.reduce((function(e,i){var n=Xt(t,i);return e.top=kt(n.top,e.top),e.right=Lt(n.right,e.right),e.bottom=Lt(n.bottom,e.bottom),e.left=kt(n.left,e.left),e}),Xt(t,o));return r.width=r.right-r.left,r.height=r.bottom-r.top,r.x=r.left,r.y=r.top,r}(ut(v)?v:v.contextElement||Et(t.elements.popper),r,l),w=_t(_),E=Qt({reference:w,element:b,strategy:"absolute",placement:s}),A=Kt(Object.assign({},b,E)),T="popper"===h?A:w,O={top:y.top-T.top+m.top,bottom:T.bottom-y.bottom+m.bottom,left:y.left-T.left+m.left,right:T.right-y.right+m.right},C=t.modifiersData.offset;if("popper"===h&&C){var k=C[s];Object.keys(O).forEach((function(t){var e=[st,nt].indexOf(t)>=0?1:-1,i=[it,nt].indexOf(t)>=0?"y":"x";O[t]+=k[i]*e}))}return O}function Zt(t,e){void 0===e&&(e={});var i=e,n=i.placement,s=i.boundary,o=i.rootBoundary,r=i.padding,a=i.flipVariations,l=i.allowedAutoPlacements,c=void 0===l?lt:l,h=Yt(n),d=h?a?at:at.filter((function(t){return Yt(t)===h})):rt,u=d.filter((function(t){return c.indexOf(t)>=0}));0===u.length&&(u=d);var f=u.reduce((function(e,i){return e[i]=Gt(t,{placement:i,boundary:s,rootBoundary:o,padding:r})[gt(i)],e}),{});return Object.keys(f).sort((function(t,e){return f[t]-f[e]}))}var Jt={name:"flip",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name;if(!e.modifiersData[n]._skip){for(var s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0===r||r,l=i.fallbackPlacements,c=i.padding,h=i.boundary,d=i.rootBoundary,u=i.altBoundary,f=i.flipVariations,p=void 0===f||f,m=i.allowedAutoPlacements,g=e.options.placement,_=gt(g),b=l||(_!==g&&p?function(t){if("auto"===gt(t))return[];var e=Wt(t);return[zt(t),e,zt(e)]}(g):[Wt(g)]),v=[g].concat(b).reduce((function(t,i){return t.concat("auto"===gt(i)?Zt(e,{placement:i,boundary:h,rootBoundary:d,padding:c,flipVariations:p,allowedAutoPlacements:m}):i)}),[]),y=e.rects.reference,w=e.rects.popper,E=new Map,A=!0,T=v[0],O=0;O<v.length;O++){var C=v[O],k=gt(C),L="start"===Yt(C),x=[it,nt].indexOf(k)>=0,D=x?"width":"height",S=Gt(e,{placement:C,boundary:h,rootBoundary:d,altBoundary:u,padding:c}),I=x?L?st:ot:L?nt:it;y[D]>w[D]&&(I=Wt(I));var N=Wt(I),j=[];if(o&&j.push(S[k]<=0),a&&j.push(S[I]<=0,S[N]<=0),j.every((function(t){return t}))){T=C,A=!1;break}E.set(C,j)}if(A)for(var M=function(t){var e=v.find((function(e){var i=E.get(e);if(i)return i.slice(0,t).every((function(t){return t}))}));if(e)return T=e,"break"},P=p?3:1;P>0&&"break"!==M(P);P--);e.placement!==T&&(e.modifiersData[n]._skip=!0,e.placement=T,e.reset=!0)}},requiresIfExists:["offset"],data:{_skip:!1}};function te(t,e,i){return void 0===i&&(i={x:0,y:0}),{top:t.top-e.height-i.y,right:t.right-e.width+i.x,bottom:t.bottom-e.height+i.y,left:t.left-e.width-i.x}}function ee(t){return[it,st,nt,ot].some((function(e){return t[e]>=0}))}var ie={name:"hide",enabled:!0,phase:"main",requiresIfExists:["preventOverflow"],fn:function(t){var e=t.state,i=t.name,n=e.rects.reference,s=e.rects.popper,o=e.modifiersData.preventOverflow,r=Gt(e,{elementContext:"reference"}),a=Gt(e,{altBoundary:!0}),l=te(r,n),c=te(a,s,o),h=ee(l),d=ee(c);e.modifiersData[i]={referenceClippingOffsets:l,popperEscapeOffsets:c,isReferenceHidden:h,hasPopperEscaped:d},e.attributes.popper=Object.assign({},e.attributes.popper,{"data-popper-reference-hidden":h,"data-popper-escaped":d})}},ne={name:"offset",enabled:!0,phase:"main",requires:["popperOffsets"],fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.offset,o=void 0===s?[0,0]:s,r=lt.reduce((function(t,i){return t[i]=function(t,e,i){var n=gt(t),s=[ot,it].indexOf(n)>=0?-1:1,o="function"==typeof i?i(Object.assign({},e,{placement:t})):i,r=o[0],a=o[1];return r=r||0,a=(a||0)*s,[ot,st].indexOf(n)>=0?{x:a,y:r}:{x:r,y:a}}(i,e.rects,o),t}),{}),a=r[e.placement],l=a.x,c=a.y;null!=e.modifiersData.popperOffsets&&(e.modifiersData.popperOffsets.x+=l,e.modifiersData.popperOffsets.y+=c),e.modifiersData[n]=r}},se={name:"popperOffsets",enabled:!0,phase:"read",fn:function(t){var e=t.state,i=t.name;e.modifiersData[i]=Qt({reference:e.rects.reference,element:e.rects.popper,strategy:"absolute",placement:e.placement})},data:{}},oe={name:"preventOverflow",enabled:!0,phase:"main",fn:function(t){var e=t.state,i=t.options,n=t.name,s=i.mainAxis,o=void 0===s||s,r=i.altAxis,a=void 0!==r&&r,l=i.boundary,c=i.rootBoundary,h=i.altBoundary,d=i.padding,u=i.tether,f=void 0===u||u,p=i.tetherOffset,m=void 0===p?0:p,g=Gt(e,{boundary:l,rootBoundary:c,padding:d,altBoundary:h}),_=gt(e.placement),b=Yt(e.placement),v=!b,y=Ct(_),w="x"===y?"y":"x",E=e.modifiersData.popperOffsets,A=e.rects.reference,T=e.rects.popper,O="function"==typeof m?m(Object.assign({},e.rects,{placement:e.placement})):m,C={x:0,y:0};if(E){if(o||a){var k="y"===y?it:ot,L="y"===y?nt:st,x="y"===y?"height":"width",D=E[y],S=E[y]+g[k],I=E[y]-g[L],N=f?-T[x]/2:0,j="start"===b?A[x]:T[x],M="start"===b?-T[x]:-A[x],P=e.elements.arrow,H=f&&P?bt(P):{width:0,height:0},R=e.modifiersData["arrow#persistent"]?e.modifiersData["arrow#persistent"].padding:{top:0,right:0,bottom:0,left:0},B=R[k],W=R[L],q=Dt(0,A[x],H[x]),z=v?A[x]/2-N-q-B-O:j-q-B-O,$=v?-A[x]/2+N+q+W+O:M+q+W+O,U=e.elements.arrow&&Ot(e.elements.arrow),F=U?"y"===y?U.clientTop||0:U.clientLeft||0:0,V=e.modifiersData.offset?e.modifiersData.offset[e.placement][y]:0,K=E[y]+z-V-F,X=E[y]+$-V;if(o){var Y=Dt(f?Lt(S,K):S,D,f?kt(I,X):I);E[y]=Y,C[y]=Y-D}if(a){var Q="x"===y?it:ot,G="x"===y?nt:st,Z=E[w],J=Z+g[Q],tt=Z-g[G],et=Dt(f?Lt(J,K):J,Z,f?kt(tt,X):tt);E[w]=et,C[w]=et-Z}}e.modifiersData[n]=C}},requiresIfExists:["offset"]};function re(t,e,i){void 0===i&&(i=!1);var n,s,o=Et(e),r=_t(t),a=ft(e),l={scrollLeft:0,scrollTop:0},c={x:0,y:0};return(a||!a&&!i)&&(("body"!==ht(e)||Ft(o))&&(l=(n=e)!==dt(n)&&ft(n)?{scrollLeft:(s=n).scrollLeft,scrollTop:s.scrollTop}:$t(n)),ft(e)?((c=_t(e)).x+=e.clientLeft,c.y+=e.clientTop):o&&(c.x=Ut(o))),{x:r.left+l.scrollLeft-c.x,y:r.top+l.scrollTop-c.y,width:r.width,height:r.height}}var ae={placement:"bottom",modifiers:[],strategy:"absolute"};function le(){for(var t=arguments.length,e=new Array(t),i=0;i<t;i++)e[i]=arguments[i];return!e.some((function(t){return!(t&&"function"==typeof t.getBoundingClientRect)}))}function ce(t){void 0===t&&(t={});var e=t,i=e.defaultModifiers,n=void 0===i?[]:i,s=e.defaultOptions,o=void 0===s?ae:s;return function(t,e,i){void 0===i&&(i=o);var s,r,a={placement:"bottom",orderedModifiers:[],options:Object.assign({},ae,o),modifiersData:{},elements:{reference:t,popper:e},attributes:{},styles:{}},l=[],c=!1,h={state:a,setOptions:function(i){d(),a.options=Object.assign({},o,a.options,i),a.scrollParents={reference:ut(t)?Vt(t):t.contextElement?Vt(t.contextElement):[],popper:Vt(e)};var s,r,c=function(t){var e=function(t){var e=new Map,i=new Set,n=[];return t.forEach((function(t){e.set(t.name,t)})),t.forEach((function(t){i.has(t.name)||function t(s){i.add(s.name),[].concat(s.requires||[],s.requiresIfExists||[]).forEach((function(n){if(!i.has(n)){var s=e.get(n);s&&t(s)}})),n.push(s)}(t)})),n}(t);return ct.reduce((function(t,i){return t.concat(e.filter((function(t){return t.phase===i})))}),[])}((s=[].concat(n,a.options.modifiers),r=s.reduce((function(t,e){var i=t[e.name];return t[e.name]=i?Object.assign({},i,e,{options:Object.assign({},i.options,e.options),data:Object.assign({},i.data,e.data)}):e,t}),{}),Object.keys(r).map((function(t){return r[t]}))));return a.orderedModifiers=c.filter((function(t){return t.enabled})),a.orderedModifiers.forEach((function(t){var e=t.name,i=t.options,n=void 0===i?{}:i,s=t.effect;if("function"==typeof s){var o=s({state:a,name:e,instance:h,options:n});l.push(o||function(){})}})),h.update()},forceUpdate:function(){if(!c){var t=a.elements,e=t.reference,i=t.popper;if(le(e,i)){a.rects={reference:re(e,Ot(i),"fixed"===a.options.strategy),popper:bt(i)},a.reset=!1,a.placement=a.options.placement,a.orderedModifiers.forEach((function(t){return a.modifiersData[t.name]=Object.assign({},t.data)}));for(var n=0;n<a.orderedModifiers.length;n++)if(!0!==a.reset){var s=a.orderedModifiers[n],o=s.fn,r=s.options,l=void 0===r?{}:r,d=s.name;"function"==typeof o&&(a=o({state:a,options:l,name:d,instance:h})||a)}else a.reset=!1,n=-1}}},update:(s=function(){return new Promise((function(t){h.forceUpdate(),t(a)}))},function(){return r||(r=new Promise((function(t){Promise.resolve().then((function(){r=void 0,t(s())}))}))),r}),destroy:function(){d(),c=!0}};if(!le(t,e))return h;function d(){l.forEach((function(t){return t()})),l=[]}return h.setOptions(i).then((function(t){!c&&i.onFirstUpdate&&i.onFirstUpdate(t)})),h}}var he=ce(),de=ce({defaultModifiers:[Rt,se,Pt,mt]}),ue=ce({defaultModifiers:[Rt,se,Pt,mt,ne,Jt,oe,Nt,ie]}),fe=Object.freeze({__proto__:null,popperGenerator:ce,detectOverflow:Gt,createPopperBase:he,createPopper:ue,createPopperLite:de,top:it,bottom:nt,right:st,left:ot,auto:"auto",basePlacements:rt,start:"start",end:"end",clippingParents:"clippingParents",viewport:"viewport",popper:"popper",reference:"reference",variationPlacements:at,placements:lt,beforeRead:"beforeRead",read:"read",afterRead:"afterRead",beforeMain:"beforeMain",main:"main",afterMain:"afterMain",beforeWrite:"beforeWrite",write:"write",afterWrite:"afterWrite",modifierPhases:ct,applyStyles:mt,arrow:Nt,computeStyles:Pt,eventListeners:Rt,flip:Jt,hide:ie,offset:ne,popperOffsets:se,preventOverflow:oe});const pe=new RegExp("ArrowUp|ArrowDown|Escape"),me=g()?"top-end":"top-start",ge=g()?"top-start":"top-end",_e=g()?"bottom-end":"bottom-start",be=g()?"bottom-start":"bottom-end",ve=g()?"left-start":"right-start",ye=g()?"right-start":"left-start",we={offset:[0,2],boundary:"clippingParents",reference:"toggle",display:"dynamic",popperConfig:null,autoClose:!0},Ee={offset:"(array|string|function)",boundary:"(string|element)",reference:"(string|element|object)",display:"string",popperConfig:"(null|object|function)",autoClose:"(boolean|string)"};class Ae extends B{constructor(t,e){super(t),this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}static get Default(){return we}static get DefaultType(){return Ee}static get NAME(){return"dropdown"}toggle(){h(this._element)||(this._element.classList.contains("show")?this.hide():this.show())}show(){if(h(this._element)||this._menu.classList.contains("show"))return;const t=Ae.getParentFromElement(this._element),e={relatedTarget:this._element};if(!P.trigger(this._element,"show.bs.dropdown",e).defaultPrevented){if(this._inNavbar)U.setDataAttribute(this._menu,"popper","none");else{if(void 0===fe)throw new TypeError("Bootstrap's dropdowns require Popper (https://popper.js.org)");let e=this._element;"parent"===this._config.reference?e=t:r(this._config.reference)?e=a(this._config.reference):"object"==typeof this._config.reference&&(e=this._config.reference);const i=this._getPopperConfig(),n=i.modifiers.find(t=>"applyStyles"===t.name&&!1===t.enabled);this._popper=ue(e,this._menu,i),n&&U.setDataAttribute(this._menu,"popper","static")}"ontouchstart"in document.documentElement&&!t.closest(".navbar-nav")&&[].concat(...document.body.children).forEach(t=>P.on(t,"mouseover",u)),this._element.focus(),this._element.setAttribute("aria-expanded",!0),this._menu.classList.toggle("show"),this._element.classList.toggle("show"),P.trigger(this._element,"shown.bs.dropdown",e)}}hide(){if(h(this._element)||!this._menu.classList.contains("show"))return;const t={relatedTarget:this._element};this._completeHide(t)}dispose(){this._popper&&this._popper.destroy(),super.dispose()}update(){this._inNavbar=this._detectNavbar(),this._popper&&this._popper.update()}_addEventListeners(){P.on(this._element,"click.bs.dropdown",t=>{t.preventDefault(),this.toggle()})}_completeHide(t){P.trigger(this._element,"hide.bs.dropdown",t).defaultPrevented||("ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._popper&&this._popper.destroy(),this._menu.classList.remove("show"),this._element.classList.remove("show"),this._element.setAttribute("aria-expanded","false"),U.removeDataAttribute(this._menu,"popper"),P.trigger(this._element,"hidden.bs.dropdown",t))}_getConfig(t){if(t={...this.constructor.Default,...U.getDataAttributes(this._element),...t},l("dropdown",t,this.constructor.DefaultType),"object"==typeof t.reference&&!r(t.reference)&&"function"!=typeof t.reference.getBoundingClientRect)throw new TypeError("dropdown".toUpperCase()+': Option "reference" provided type "object" without a required "getBoundingClientRect" method.');return t}_getMenuElement(){return t.next(this._element,".dropdown-menu")[0]}_getPlacement(){const t=this._element.parentNode;if(t.classList.contains("dropend"))return ve;if(t.classList.contains("dropstart"))return ye;const e="end"===getComputedStyle(this._menu).getPropertyValue("--bs-position").trim();return t.classList.contains("dropup")?e?ge:me:e?be:_e}_detectNavbar(){return null!==this._element.closest(".navbar")}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(){const t={placement:this._getPlacement(),modifiers:[{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"offset",options:{offset:this._getOffset()}}]};return"static"===this._config.display&&(t.modifiers=[{name:"applyStyles",enabled:!1}]),{...t,..."function"==typeof this._config.popperConfig?this._config.popperConfig(t):this._config.popperConfig}}_selectMenuItem({key:e,target:i}){const n=t.find(".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",this._menu).filter(c);n.length&&y(n,i,"ArrowDown"===e,!n.includes(i)).focus()}static dropdownInterface(t,e){const i=Ae.getOrCreateInstance(t,e);if("string"==typeof e){if(void 0===i[e])throw new TypeError(`No method named "${e}"`);i[e]()}}static jQueryInterface(t){return this.each((function(){Ae.dropdownInterface(this,t)}))}static clearMenus(e){if(e&&(2===e.button||"keyup"===e.type&&"Tab"!==e.key))return;const i=t.find('[data-bs-toggle="dropdown"]');for(let t=0,n=i.length;t<n;t++){const n=Ae.getInstance(i[t]);if(!n||!1===n._config.autoClose)continue;if(!n._element.classList.contains("show"))continue;const s={relatedTarget:n._element};if(e){const t=e.composedPath(),i=t.includes(n._menu);if(t.includes(n._element)||"inside"===n._config.autoClose&&!i||"outside"===n._config.autoClose&&i)continue;if(n._menu.contains(e.target)&&("keyup"===e.type&&"Tab"===e.key||/input|select|option|textarea|form/i.test(e.target.tagName)))continue;"click"===e.type&&(s.clickEvent=e)}n._completeHide(s)}}static getParentFromElement(t){return s(t)||t.parentNode}static dataApiKeydownHandler(e){if(/input|textarea/i.test(e.target.tagName)?"Space"===e.key||"Escape"!==e.key&&("ArrowDown"!==e.key&&"ArrowUp"!==e.key||e.target.closest(".dropdown-menu")):!pe.test(e.key))return;const i=this.classList.contains("show");if(!i&&"Escape"===e.key)return;if(e.preventDefault(),e.stopPropagation(),h(this))return;const n=()=>this.matches('[data-bs-toggle="dropdown"]')?this:t.prev(this,'[data-bs-toggle="dropdown"]')[0];return"Escape"===e.key?(n().focus(),void Ae.clearMenus()):"ArrowUp"===e.key||"ArrowDown"===e.key?(i||n().click(),void Ae.getInstance(n())._selectMenuItem(e)):void(i&&"Space"!==e.key||Ae.clearMenus())}}P.on(document,"keydown.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',Ae.dataApiKeydownHandler),P.on(document,"keydown.bs.dropdown.data-api",".dropdown-menu",Ae.dataApiKeydownHandler),P.on(document,"click.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"keyup.bs.dropdown.data-api",Ae.clearMenus),P.on(document,"click.bs.dropdown.data-api",'[data-bs-toggle="dropdown"]',(function(t){t.preventDefault(),Ae.dropdownInterface(this)})),_(Ae);class Te{constructor(){this._element=document.body}getWidth(){const t=document.documentElement.clientWidth;return Math.abs(window.innerWidth-t)}hide(){const t=this.getWidth();this._disableOverFlow(),this._setElementAttributes(this._element,"paddingRight",e=>e+t),this._setElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight",e=>e+t),this._setElementAttributes(".sticky-top","marginRight",e=>e-t)}_disableOverFlow(){this._saveInitialAttribute(this._element,"overflow"),this._element.style.overflow="hidden"}_setElementAttributes(t,e,i){const n=this.getWidth();this._applyManipulationCallback(t,t=>{if(t!==this._element&&window.innerWidth>t.clientWidth+n)return;this._saveInitialAttribute(t,e);const s=window.getComputedStyle(t)[e];t.style[e]=i(Number.parseFloat(s))+"px"})}reset(){this._resetElementAttributes(this._element,"overflow"),this._resetElementAttributes(this._element,"paddingRight"),this._resetElementAttributes(".fixed-top, .fixed-bottom, .is-fixed, .sticky-top","paddingRight"),this._resetElementAttributes(".sticky-top","marginRight")}_saveInitialAttribute(t,e){const i=t.style[e];i&&U.setDataAttribute(t,e,i)}_resetElementAttributes(t,e){this._applyManipulationCallback(t,t=>{const i=U.getDataAttribute(t,e);void 0===i?t.style.removeProperty(e):(U.removeDataAttribute(t,e),t.style[e]=i)})}_applyManipulationCallback(e,i){r(e)?i(e):t.find(e,this._element).forEach(i)}isOverflowing(){return this.getWidth()>0}}const Oe={isVisible:!0,isAnimated:!1,rootElement:"body",clickCallback:null},Ce={isVisible:"boolean",isAnimated:"boolean",rootElement:"(element|string)",clickCallback:"(function|null)"};class ke{constructor(t){this._config=this._getConfig(t),this._isAppended=!1,this._element=null}show(t){this._config.isVisible?(this._append(),this._config.isAnimated&&f(this._getElement()),this._getElement().classList.add("show"),this._emulateAnimation(()=>{b(t)})):b(t)}hide(t){this._config.isVisible?(this._getElement().classList.remove("show"),this._emulateAnimation(()=>{this.dispose(),b(t)})):b(t)}_getElement(){if(!this._element){const t=document.createElement("div");t.className="modal-backdrop",this._config.isAnimated&&t.classList.add("fade"),this._element=t}return this._element}_getConfig(t){return(t={...Oe,..."object"==typeof t?t:{}}).rootElement=a(t.rootElement),l("backdrop",t,Ce),t}_append(){this._isAppended||(this._config.rootElement.appendChild(this._getElement()),P.on(this._getElement(),"mousedown.bs.backdrop",()=>{b(this._config.clickCallback)}),this._isAppended=!0)}dispose(){this._isAppended&&(P.off(this._element,"mousedown.bs.backdrop"),this._element.remove(),this._isAppended=!1)}_emulateAnimation(t){v(t,this._getElement(),this._config.isAnimated)}}const Le={backdrop:!0,keyboard:!0,focus:!0},xe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean"};class De extends B{constructor(e,i){super(e),this._config=this._getConfig(i),this._dialog=t.findOne(".modal-dialog",this._element),this._backdrop=this._initializeBackDrop(),this._isShown=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollBar=new Te}static get Default(){return Le}static get NAME(){return"modal"}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||this._isTransitioning||P.trigger(this._element,"show.bs.modal",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._isAnimated()&&(this._isTransitioning=!0),this._scrollBar.hide(),document.body.classList.add("modal-open"),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),P.on(this._element,"click.dismiss.bs.modal",'[data-bs-dismiss="modal"]',t=>this.hide(t)),P.on(this._dialog,"mousedown.dismiss.bs.modal",()=>{P.one(this._element,"mouseup.dismiss.bs.modal",t=>{t.target===this._element&&(this._ignoreBackdropClick=!0)})}),this._showBackdrop(()=>this._showElement(t)))}hide(t){if(t&&["A","AREA"].includes(t.target.tagName)&&t.preventDefault(),!this._isShown||this._isTransitioning)return;if(P.trigger(this._element,"hide.bs.modal").defaultPrevented)return;this._isShown=!1;const e=this._isAnimated();e&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),P.off(document,"focusin.bs.modal"),this._element.classList.remove("show"),P.off(this._element,"click.dismiss.bs.modal"),P.off(this._dialog,"mousedown.dismiss.bs.modal"),this._queueCallback(()=>this._hideModal(),this._element,e)}dispose(){[window,this._dialog].forEach(t=>P.off(t,".bs.modal")),this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.modal")}handleUpdate(){this._adjustDialog()}_initializeBackDrop(){return new ke({isVisible:Boolean(this._config.backdrop),isAnimated:this._isAnimated()})}_getConfig(t){return t={...Le,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("modal",t,xe),t}_showElement(e){const i=this._isAnimated(),n=t.findOne(".modal-body",this._dialog);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.scrollTop=0,n&&(n.scrollTop=0),i&&f(this._element),this._element.classList.add("show"),this._config.focus&&this._enforceFocus(),this._queueCallback(()=>{this._config.focus&&this._element.focus(),this._isTransitioning=!1,P.trigger(this._element,"shown.bs.modal",{relatedTarget:e})},this._dialog,i)}_enforceFocus(){P.off(document,"focusin.bs.modal"),P.on(document,"focusin.bs.modal",t=>{document===t.target||this._element===t.target||this._element.contains(t.target)||this._element.focus()})}_setEscapeEvent(){this._isShown?P.on(this._element,"keydown.dismiss.bs.modal",t=>{this._config.keyboard&&"Escape"===t.key?(t.preventDefault(),this.hide()):this._config.keyboard||"Escape"!==t.key||this._triggerBackdropTransition()}):P.off(this._element,"keydown.dismiss.bs.modal")}_setResizeEvent(){this._isShown?P.on(window,"resize.bs.modal",()=>this._adjustDialog()):P.off(window,"resize.bs.modal")}_hideModal(){this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._isTransitioning=!1,this._backdrop.hide(()=>{document.body.classList.remove("modal-open"),this._resetAdjustments(),this._scrollBar.reset(),P.trigger(this._element,"hidden.bs.modal")})}_showBackdrop(t){P.on(this._element,"click.dismiss.bs.modal",t=>{this._ignoreBackdropClick?this._ignoreBackdropClick=!1:t.target===t.currentTarget&&(!0===this._config.backdrop?this.hide():"static"===this._config.backdrop&&this._triggerBackdropTransition())}),this._backdrop.show(t)}_isAnimated(){return this._element.classList.contains("fade")}_triggerBackdropTransition(){if(P.trigger(this._element,"hidePrevented.bs.modal").defaultPrevented)return;const{classList:t,scrollHeight:e,style:i}=this._element,n=e>document.documentElement.clientHeight;!n&&"hidden"===i.overflowY||t.contains("modal-static")||(n||(i.overflowY="hidden"),t.add("modal-static"),this._queueCallback(()=>{t.remove("modal-static"),n||this._queueCallback(()=>{i.overflowY=""},this._dialog)},this._dialog),this._element.focus())}_adjustDialog(){const t=this._element.scrollHeight>document.documentElement.clientHeight,e=this._scrollBar.getWidth(),i=e>0;(!i&&t&&!g()||i&&!t&&g())&&(this._element.style.paddingLeft=e+"px"),(i&&!t&&!g()||!i&&t&&g())&&(this._element.style.paddingRight=e+"px")}_resetAdjustments(){this._element.style.paddingLeft="",this._element.style.paddingRight=""}static jQueryInterface(t,e){return this.each((function(){const i=De.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===i[t])throw new TypeError(`No method named "${t}"`);i[t](e)}}))}}P.on(document,"click.bs.modal.data-api",'[data-bs-toggle="modal"]',(function(t){const e=s(this);["A","AREA"].includes(this.tagName)&&t.preventDefault(),P.one(e,"show.bs.modal",t=>{t.defaultPrevented||P.one(e,"hidden.bs.modal",()=>{c(this)&&this.focus()})}),De.getOrCreateInstance(e).toggle(this)})),_(De);const Se={backdrop:!0,keyboard:!0,scroll:!1},Ie={backdrop:"boolean",keyboard:"boolean",scroll:"boolean"};class Ne extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._isShown=!1,this._backdrop=this._initializeBackDrop(),this._addEventListeners()}static get NAME(){return"offcanvas"}static get Default(){return Se}toggle(t){return this._isShown?this.hide():this.show(t)}show(t){this._isShown||P.trigger(this._element,"show.bs.offcanvas",{relatedTarget:t}).defaultPrevented||(this._isShown=!0,this._element.style.visibility="visible",this._backdrop.show(),this._config.scroll||((new Te).hide(),this._enforceFocusOnElement(this._element)),this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),this._element.setAttribute("role","dialog"),this._element.classList.add("show"),this._queueCallback(()=>{P.trigger(this._element,"shown.bs.offcanvas",{relatedTarget:t})},this._element,!0))}hide(){this._isShown&&(P.trigger(this._element,"hide.bs.offcanvas").defaultPrevented||(P.off(document,"focusin.bs.offcanvas"),this._element.blur(),this._isShown=!1,this._element.classList.remove("show"),this._backdrop.hide(),this._queueCallback(()=>{this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._element.removeAttribute("role"),this._element.style.visibility="hidden",this._config.scroll||(new Te).reset(),P.trigger(this._element,"hidden.bs.offcanvas")},this._element,!0)))}dispose(){this._backdrop.dispose(),super.dispose(),P.off(document,"focusin.bs.offcanvas")}_getConfig(t){return t={...Se,...U.getDataAttributes(this._element),..."object"==typeof t?t:{}},l("offcanvas",t,Ie),t}_initializeBackDrop(){return new ke({isVisible:this._config.backdrop,isAnimated:!0,rootElement:this._element.parentNode,clickCallback:()=>this.hide()})}_enforceFocusOnElement(t){P.off(document,"focusin.bs.offcanvas"),P.on(document,"focusin.bs.offcanvas",e=>{document===e.target||t===e.target||t.contains(e.target)||t.focus()}),t.focus()}_addEventListeners(){P.on(this._element,"click.dismiss.bs.offcanvas",'[data-bs-dismiss="offcanvas"]',()=>this.hide()),P.on(this._element,"keydown.dismiss.bs.offcanvas",t=>{this._config.keyboard&&"Escape"===t.key&&this.hide()})}static jQueryInterface(t){return this.each((function(){const e=Ne.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t]||t.startsWith("_")||"constructor"===t)throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}P.on(document,"click.bs.offcanvas.data-api",'[data-bs-toggle="offcanvas"]',(function(e){const i=s(this);if(["A","AREA"].includes(this.tagName)&&e.preventDefault(),h(this))return;P.one(i,"hidden.bs.offcanvas",()=>{c(this)&&this.focus()});const n=t.findOne(".offcanvas.show");n&&n!==i&&Ne.getInstance(n).hide(),Ne.getOrCreateInstance(i).toggle(this)})),P.on(window,"load.bs.offcanvas.data-api",()=>t.find(".offcanvas.show").forEach(t=>Ne.getOrCreateInstance(t).show())),_(Ne);const je=new Set(["background","cite","href","itemtype","longdesc","poster","src","xlink:href"]),Me=/^(?:(?:https?|mailto|ftp|tel|file):|[^#&/:?]*(?:[#/?]|$))/i,Pe=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[\d+/a-z]+=*$/i,He=(t,e)=>{const i=t.nodeName.toLowerCase();if(e.includes(i))return!je.has(i)||Boolean(Me.test(t.nodeValue)||Pe.test(t.nodeValue));const n=e.filter(t=>t instanceof RegExp);for(let t=0,e=n.length;t<e;t++)if(n[t].test(i))return!0;return!1};function Re(t,e,i){if(!t.length)return t;if(i&&"function"==typeof i)return i(t);const n=(new window.DOMParser).parseFromString(t,"text/html"),s=Object.keys(e),o=[].concat(...n.body.querySelectorAll("*"));for(let t=0,i=o.length;t<i;t++){const i=o[t],n=i.nodeName.toLowerCase();if(!s.includes(n)){i.remove();continue}const r=[].concat(...i.attributes),a=[].concat(e["*"]||[],e[n]||[]);r.forEach(t=>{He(t,a)||i.removeAttribute(t.nodeName)})}return n.body.innerHTML}const Be=new RegExp("(^|\\s)bs-tooltip\\S+","g"),We=new Set(["sanitize","allowList","sanitizeFn"]),qe={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(array|string|function)",container:"(string|element|boolean)",fallbackPlacements:"array",boundary:"(string|element)",customClass:"(string|function)",sanitize:"boolean",sanitizeFn:"(null|function)",allowList:"object",popperConfig:"(null|object|function)"},ze={AUTO:"auto",TOP:"top",RIGHT:g()?"left":"right",BOTTOM:"bottom",LEFT:g()?"right":"left"},$e={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:[0,0],container:!1,fallbackPlacements:["top","right","bottom","left"],boundary:"clippingParents",customClass:"",sanitize:!0,sanitizeFn:null,allowList:{"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","srcset","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},popperConfig:null},Ue={HIDE:"hide.bs.tooltip",HIDDEN:"hidden.bs.tooltip",SHOW:"show.bs.tooltip",SHOWN:"shown.bs.tooltip",INSERTED:"inserted.bs.tooltip",CLICK:"click.bs.tooltip",FOCUSIN:"focusin.bs.tooltip",FOCUSOUT:"focusout.bs.tooltip",MOUSEENTER:"mouseenter.bs.tooltip",MOUSELEAVE:"mouseleave.bs.tooltip"};class Fe extends B{constructor(t,e){if(void 0===fe)throw new TypeError("Bootstrap's tooltips require Popper (https://popper.js.org)");super(t),this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this._config=this._getConfig(e),this.tip=null,this._setListeners()}static get Default(){return $e}static get NAME(){return"tooltip"}static get Event(){return Ue}static get DefaultType(){return qe}enable(){this._isEnabled=!0}disable(){this._isEnabled=!1}toggleEnabled(){this._isEnabled=!this._isEnabled}toggle(t){if(this._isEnabled)if(t){const e=this._initializeOnDelegatedTarget(t);e._activeTrigger.click=!e._activeTrigger.click,e._isWithActiveTrigger()?e._enter(null,e):e._leave(null,e)}else{if(this.getTipElement().classList.contains("show"))return void this._leave(null,this);this._enter(null,this)}}dispose(){clearTimeout(this._timeout),P.off(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this.tip&&this.tip.remove(),this._popper&&this._popper.destroy(),super.dispose()}show(){if("none"===this._element.style.display)throw new Error("Please use show on visible elements");if(!this.isWithContent()||!this._isEnabled)return;const t=P.trigger(this._element,this.constructor.Event.SHOW),i=d(this._element),n=null===i?this._element.ownerDocument.documentElement.contains(this._element):i.contains(this._element);if(t.defaultPrevented||!n)return;const s=this.getTipElement(),o=e(this.constructor.NAME);s.setAttribute("id",o),this._element.setAttribute("aria-describedby",o),this.setContent(),this._config.animation&&s.classList.add("fade");const r="function"==typeof this._config.placement?this._config.placement.call(this,s,this._element):this._config.placement,a=this._getAttachment(r);this._addAttachmentClass(a);const{container:l}=this._config;R.set(s,this.constructor.DATA_KEY,this),this._element.ownerDocument.documentElement.contains(this.tip)||(l.appendChild(s),P.trigger(this._element,this.constructor.Event.INSERTED)),this._popper?this._popper.update():this._popper=ue(this._element,s,this._getPopperConfig(a)),s.classList.add("show");const c="function"==typeof this._config.customClass?this._config.customClass():this._config.customClass;c&&s.classList.add(...c.split(" ")),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>{P.on(t,"mouseover",u)});const h=this.tip.classList.contains("fade");this._queueCallback(()=>{const t=this._hoverState;this._hoverState=null,P.trigger(this._element,this.constructor.Event.SHOWN),"out"===t&&this._leave(null,this)},this.tip,h)}hide(){if(!this._popper)return;const t=this.getTipElement();if(P.trigger(this._element,this.constructor.Event.HIDE).defaultPrevented)return;t.classList.remove("show"),"ontouchstart"in document.documentElement&&[].concat(...document.body.children).forEach(t=>P.off(t,"mouseover",u)),this._activeTrigger.click=!1,this._activeTrigger.focus=!1,this._activeTrigger.hover=!1;const e=this.tip.classList.contains("fade");this._queueCallback(()=>{this._isWithActiveTrigger()||("show"!==this._hoverState&&t.remove(),this._cleanTipClass(),this._element.removeAttribute("aria-describedby"),P.trigger(this._element,this.constructor.Event.HIDDEN),this._popper&&(this._popper.destroy(),this._popper=null))},this.tip,e),this._hoverState=""}update(){null!==this._popper&&this._popper.update()}isWithContent(){return Boolean(this.getTitle())}getTipElement(){if(this.tip)return this.tip;const t=document.createElement("div");return t.innerHTML=this._config.template,this.tip=t.children[0],this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".tooltip-inner",e),this.getTitle()),e.classList.remove("fade","show")}setElementContent(t,e){if(null!==t)return r(e)?(e=a(e),void(this._config.html?e.parentNode!==t&&(t.innerHTML="",t.appendChild(e)):t.textContent=e.textContent)):void(this._config.html?(this._config.sanitize&&(e=Re(e,this._config.allowList,this._config.sanitizeFn)),t.innerHTML=e):t.textContent=e)}getTitle(){let t=this._element.getAttribute("data-bs-original-title");return t||(t="function"==typeof this._config.title?this._config.title.call(this._element):this._config.title),t}updateAttachment(t){return"right"===t?"end":"left"===t?"start":t}_initializeOnDelegatedTarget(t,e){const i=this.constructor.DATA_KEY;return(e=e||R.get(t.delegateTarget,i))||(e=new this.constructor(t.delegateTarget,this._getDelegateConfig()),R.set(t.delegateTarget,i,e)),e}_getOffset(){const{offset:t}=this._config;return"string"==typeof t?t.split(",").map(t=>Number.parseInt(t,10)):"function"==typeof t?e=>t(e,this._element):t}_getPopperConfig(t){const e={placement:t,modifiers:[{name:"flip",options:{fallbackPlacements:this._config.fallbackPlacements}},{name:"offset",options:{offset:this._getOffset()}},{name:"preventOverflow",options:{boundary:this._config.boundary}},{name:"arrow",options:{element:`.${this.constructor.NAME}-arrow`}},{name:"onChange",enabled:!0,phase:"afterWrite",fn:t=>this._handlePopperPlacementChange(t)}],onFirstUpdate:t=>{t.options.placement!==t.placement&&this._handlePopperPlacementChange(t)}};return{...e,..."function"==typeof this._config.popperConfig?this._config.popperConfig(e):this._config.popperConfig}}_addAttachmentClass(t){this.getTipElement().classList.add("bs-tooltip-"+this.updateAttachment(t))}_getAttachment(t){return ze[t.toUpperCase()]}_setListeners(){this._config.trigger.split(" ").forEach(t=>{if("click"===t)P.on(this._element,this.constructor.Event.CLICK,this._config.selector,t=>this.toggle(t));else if("manual"!==t){const e="hover"===t?this.constructor.Event.MOUSEENTER:this.constructor.Event.FOCUSIN,i="hover"===t?this.constructor.Event.MOUSELEAVE:this.constructor.Event.FOCUSOUT;P.on(this._element,e,this._config.selector,t=>this._enter(t)),P.on(this._element,i,this._config.selector,t=>this._leave(t))}}),this._hideModalHandler=()=>{this._element&&this.hide()},P.on(this._element.closest(".modal"),"hide.bs.modal",this._hideModalHandler),this._config.selector?this._config={...this._config,trigger:"manual",selector:""}:this._fixTitle()}_fixTitle(){const t=this._element.getAttribute("title"),e=typeof this._element.getAttribute("data-bs-original-title");(t||"string"!==e)&&(this._element.setAttribute("data-bs-original-title",t||""),!t||this._element.getAttribute("aria-label")||this._element.textContent||this._element.setAttribute("aria-label",t),this._element.setAttribute("title",""))}_enter(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusin"===t.type?"focus":"hover"]=!0),e.getTipElement().classList.contains("show")||"show"===e._hoverState?e._hoverState="show":(clearTimeout(e._timeout),e._hoverState="show",e._config.delay&&e._config.delay.show?e._timeout=setTimeout(()=>{"show"===e._hoverState&&e.show()},e._config.delay.show):e.show())}_leave(t,e){e=this._initializeOnDelegatedTarget(t,e),t&&(e._activeTrigger["focusout"===t.type?"focus":"hover"]=e._element.contains(t.relatedTarget)),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState="out",e._config.delay&&e._config.delay.hide?e._timeout=setTimeout(()=>{"out"===e._hoverState&&e.hide()},e._config.delay.hide):e.hide())}_isWithActiveTrigger(){for(const t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1}_getConfig(t){const e=U.getDataAttributes(this._element);return Object.keys(e).forEach(t=>{We.has(t)&&delete e[t]}),(t={...this.constructor.Default,...e,..."object"==typeof t&&t?t:{}}).container=!1===t.container?document.body:a(t.container),"number"==typeof t.delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),l("tooltip",t,this.constructor.DefaultType),t.sanitize&&(t.template=Re(t.template,t.allowList,t.sanitizeFn)),t}_getDelegateConfig(){const t={};if(this._config)for(const e in this._config)this.constructor.Default[e]!==this._config[e]&&(t[e]=this._config[e]);return t}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Be);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}_handlePopperPlacementChange(t){const{state:e}=t;e&&(this.tip=e.elements.popper,this._cleanTipClass(),this._addAttachmentClass(this._getAttachment(e.placement)))}static jQueryInterface(t){return this.each((function(){const e=Fe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Fe);const Ve=new RegExp("(^|\\s)bs-popover\\S+","g"),Ke={...Fe.Default,placement:"right",offset:[0,8],trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="popover-arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'},Xe={...Fe.DefaultType,content:"(string|element|function)"},Ye={HIDE:"hide.bs.popover",HIDDEN:"hidden.bs.popover",SHOW:"show.bs.popover",SHOWN:"shown.bs.popover",INSERTED:"inserted.bs.popover",CLICK:"click.bs.popover",FOCUSIN:"focusin.bs.popover",FOCUSOUT:"focusout.bs.popover",MOUSEENTER:"mouseenter.bs.popover",MOUSELEAVE:"mouseleave.bs.popover"};class Qe extends Fe{static get Default(){return Ke}static get NAME(){return"popover"}static get Event(){return Ye}static get DefaultType(){return Xe}isWithContent(){return this.getTitle()||this._getContent()}getTipElement(){return this.tip||(this.tip=super.getTipElement(),this.getTitle()||t.findOne(".popover-header",this.tip).remove(),this._getContent()||t.findOne(".popover-body",this.tip).remove()),this.tip}setContent(){const e=this.getTipElement();this.setElementContent(t.findOne(".popover-header",e),this.getTitle());let i=this._getContent();"function"==typeof i&&(i=i.call(this._element)),this.setElementContent(t.findOne(".popover-body",e),i),e.classList.remove("fade","show")}_addAttachmentClass(t){this.getTipElement().classList.add("bs-popover-"+this.updateAttachment(t))}_getContent(){return this._element.getAttribute("data-bs-content")||this._config.content}_cleanTipClass(){const t=this.getTipElement(),e=t.getAttribute("class").match(Ve);null!==e&&e.length>0&&e.map(t=>t.trim()).forEach(e=>t.classList.remove(e))}static jQueryInterface(t){return this.each((function(){const e=Qe.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}_(Qe);const Ge={offset:10,method:"auto",target:""},Ze={offset:"number",method:"string",target:"(string|element)"};class Je extends B{constructor(t,e){super(t),this._scrollElement="BODY"===this._element.tagName?window:this._element,this._config=this._getConfig(e),this._selector=`${this._config.target} .nav-link, ${this._config.target} .list-group-item, ${this._config.target} .dropdown-item`,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,P.on(this._scrollElement,"scroll.bs.scrollspy",()=>this._process()),this.refresh(),this._process()}static get Default(){return Ge}static get NAME(){return"scrollspy"}refresh(){const e=this._scrollElement===this._scrollElement.window?"offset":"position",i="auto"===this._config.method?e:this._config.method,s="position"===i?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),t.find(this._selector).map(e=>{const o=n(e),r=o?t.findOne(o):null;if(r){const t=r.getBoundingClientRect();if(t.width||t.height)return[U[i](r).top+s,o]}return null}).filter(t=>t).sort((t,e)=>t[0]-e[0]).forEach(t=>{this._offsets.push(t[0]),this._targets.push(t[1])})}dispose(){P.off(this._scrollElement,".bs.scrollspy"),super.dispose()}_getConfig(t){if("string"!=typeof(t={...Ge,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}}).target&&r(t.target)){let{id:i}=t.target;i||(i=e("scrollspy"),t.target.id=i),t.target="#"+i}return l("scrollspy",t,Ze),t}_getScrollTop(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop}_getScrollHeight(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)}_getOffsetHeight(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height}_process(){const t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),i=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),t>=i){const t=this._targets[this._targets.length-1];this._activeTarget!==t&&this._activate(t)}else{if(this._activeTarget&&t<this._offsets[0]&&this._offsets[0]>0)return this._activeTarget=null,void this._clear();for(let e=this._offsets.length;e--;)this._activeTarget!==this._targets[e]&&t>=this._offsets[e]&&(void 0===this._offsets[e+1]||t<this._offsets[e+1])&&this._activate(this._targets[e])}}_activate(e){this._activeTarget=e,this._clear();const i=this._selector.split(",").map(t=>`${t}[data-bs-target="${e}"],${t}[href="${e}"]`),n=t.findOne(i.join(","));n.classList.contains("dropdown-item")?(t.findOne(".dropdown-toggle",n.closest(".dropdown")).classList.add("active"),n.classList.add("active")):(n.classList.add("active"),t.parents(n,".nav, .list-group").forEach(e=>{t.prev(e,".nav-link, .list-group-item").forEach(t=>t.classList.add("active")),t.prev(e,".nav-item").forEach(e=>{t.children(e,".nav-link").forEach(t=>t.classList.add("active"))})})),P.trigger(this._scrollElement,"activate.bs.scrollspy",{relatedTarget:e})}_clear(){t.find(this._selector).filter(t=>t.classList.contains("active")).forEach(t=>t.classList.remove("active"))}static jQueryInterface(t){return this.each((function(){const e=Je.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(window,"load.bs.scrollspy.data-api",()=>{t.find('[data-bs-spy="scroll"]').forEach(t=>new Je(t))}),_(Je);class ti extends B{static get NAME(){return"tab"}show(){if(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&this._element.classList.contains("active"))return;let e;const i=s(this._element),n=this._element.closest(".nav, .list-group");if(n){const i="UL"===n.nodeName||"OL"===n.nodeName?":scope > li > .active":".active";e=t.find(i,n),e=e[e.length-1]}const o=e?P.trigger(e,"hide.bs.tab",{relatedTarget:this._element}):null;if(P.trigger(this._element,"show.bs.tab",{relatedTarget:e}).defaultPrevented||null!==o&&o.defaultPrevented)return;this._activate(this._element,n);const r=()=>{P.trigger(e,"hidden.bs.tab",{relatedTarget:this._element}),P.trigger(this._element,"shown.bs.tab",{relatedTarget:e})};i?this._activate(i,i.parentNode,r):r()}_activate(e,i,n){const s=(!i||"UL"!==i.nodeName&&"OL"!==i.nodeName?t.children(i,".active"):t.find(":scope > li > .active",i))[0],o=n&&s&&s.classList.contains("fade"),r=()=>this._transitionComplete(e,s,n);s&&o?(s.classList.remove("show"),this._queueCallback(r,e,!0)):r()}_transitionComplete(e,i,n){if(i){i.classList.remove("active");const e=t.findOne(":scope > .dropdown-menu .active",i.parentNode);e&&e.classList.remove("active"),"tab"===i.getAttribute("role")&&i.setAttribute("aria-selected",!1)}e.classList.add("active"),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!0),f(e),e.classList.contains("fade")&&e.classList.add("show");let s=e.parentNode;if(s&&"LI"===s.nodeName&&(s=s.parentNode),s&&s.classList.contains("dropdown-menu")){const i=e.closest(".dropdown");i&&t.find(".dropdown-toggle",i).forEach(t=>t.classList.add("active")),e.setAttribute("aria-expanded",!0)}n&&n()}static jQueryInterface(t){return this.each((function(){const e=ti.getOrCreateInstance(this);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t]()}}))}}P.on(document,"click.bs.tab.data-api",'[data-bs-toggle="tab"], [data-bs-toggle="pill"], [data-bs-toggle="list"]',(function(t){["A","AREA"].includes(this.tagName)&&t.preventDefault(),h(this)||ti.getOrCreateInstance(this).show()})),_(ti);const ei={animation:"boolean",autohide:"boolean",delay:"number"},ii={animation:!0,autohide:!0,delay:5e3};class ni extends B{constructor(t,e){super(t),this._config=this._getConfig(e),this._timeout=null,this._hasMouseInteraction=!1,this._hasKeyboardInteraction=!1,this._setListeners()}static get DefaultType(){return ei}static get Default(){return ii}static get NAME(){return"toast"}show(){P.trigger(this._element,"show.bs.toast").defaultPrevented||(this._clearTimeout(),this._config.animation&&this._element.classList.add("fade"),this._element.classList.remove("hide"),f(this._element),this._element.classList.add("showing"),this._queueCallback(()=>{this._element.classList.remove("showing"),this._element.classList.add("show"),P.trigger(this._element,"shown.bs.toast"),this._maybeScheduleHide()},this._element,this._config.animation))}hide(){this._element.classList.contains("show")&&(P.trigger(this._element,"hide.bs.toast").defaultPrevented||(this._element.classList.remove("show"),this._queueCallback(()=>{this._element.classList.add("hide"),P.trigger(this._element,"hidden.bs.toast")},this._element,this._config.animation)))}dispose(){this._clearTimeout(),this._element.classList.contains("show")&&this._element.classList.remove("show"),super.dispose()}_getConfig(t){return t={...ii,...U.getDataAttributes(this._element),..."object"==typeof t&&t?t:{}},l("toast",t,this.constructor.DefaultType),t}_maybeScheduleHide(){this._config.autohide&&(this._hasMouseInteraction||this._hasKeyboardInteraction||(this._timeout=setTimeout(()=>{this.hide()},this._config.delay)))}_onInteraction(t,e){switch(t.type){case"mouseover":case"mouseout":this._hasMouseInteraction=e;break;case"focusin":case"focusout":this._hasKeyboardInteraction=e}if(e)return void this._clearTimeout();const i=t.relatedTarget;this._element===i||this._element.contains(i)||this._maybeScheduleHide()}_setListeners(){P.on(this._element,"click.dismiss.bs.toast",'[data-bs-dismiss="toast"]',()=>this.hide()),P.on(this._element,"mouseover.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"mouseout.bs.toast",t=>this._onInteraction(t,!1)),P.on(this._element,"focusin.bs.toast",t=>this._onInteraction(t,!0)),P.on(this._element,"focusout.bs.toast",t=>this._onInteraction(t,!1))}_clearTimeout(){clearTimeout(this._timeout),this._timeout=null}static jQueryInterface(t){return this.each((function(){const e=ni.getOrCreateInstance(this,t);if("string"==typeof t){if(void 0===e[t])throw new TypeError(`No method named "${t}"`);e[t](this)}}))}}return _(ni),{Alert:W,Button:q,Carousel:Z,Collapse:et,Dropdown:Ae,Modal:De,Offcanvas:Ne,Popover:Qe,ScrollSpy:Je,Tab:ti,Toast:ni,Tooltip:Fe}}));


// meanmenu
!function (t) {
    "use strict";
    t.fn.meanmenu = function (e) {
        var i = {
            meanMenuTarget: jQuery(this),
            meanMenuContainer: "body",
            meanMenuClose: "X",
            meanMenuCloseSize: "18px",
            meanMenuOpen: "<span /><span /><span />",
            meanRevealPosition: "right",
            meanRevealPositionDistance: "0",
            meanRevealColour: "",
            meanScreenWidth: "480",
            meanNavPush: "",
            meanShowChildren: !0,
            meanExpandableChildren: !0,
            meanExpand: "+",
            meanContract: "-",
            meanRemoveAttrs: !1,
            onePage: !1,
            meanDisplay: "block",
            removeElements: ""
        };
        e = t.extend(i, e);
        var s = window.innerWidth || document.documentElement.clientWidth;
        return this.each(function () {
            var t = e.meanMenuTarget, i = e.meanMenuContainer, o = e.meanMenuClose, n = e.meanMenuCloseSize,
                a = e.meanMenuOpen, r = e.meanRevealPosition, l = e.meanRevealPositionDistance, h = e.meanRevealColour,
                c = e.meanScreenWidth, d = e.meanNavPush, u = ".meanmenu-reveal", p = e.meanShowChildren,
                f = e.meanExpandableChildren, m = e.meanExpand, g = e.meanContract, v = e.meanRemoveAttrs,
                y = e.onePage, b = e.meanDisplay, w = e.removeElements, _ = !1;
            (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/iPod/i) || navigator.userAgent.match(/iPad/i) || navigator.userAgent.match(/Android/i) || navigator.userAgent.match(/Blackberry/i) || navigator.userAgent.match(/Windows Phone/i)) && (_ = !0), (navigator.userAgent.match(/MSIE 8/i) || navigator.userAgent.match(/MSIE 7/i)) && jQuery("html").css("overflow-y", "scroll");
            var x = "", k = function () {
                if ("center" === r) {
                    var t = (window.innerWidth || document.documentElement.clientWidth) / 2 - 22 + "px";
                    x = "left:" + t + ";right:auto;", _ ? jQuery(".meanmenu-reveal").animate({left: t}) : jQuery(".meanmenu-reveal").css("left", t)
                }
            }, C = !1, T = !1;
            "right" === r && (x = "right:" + l + ";left:auto;"), "left" === r && (x = "left:" + l + ";right:auto;"), k();
            var S = "", z = function () {
                jQuery(".mean-bar,.mean-push").remove(), jQuery(i).removeClass("mean-container"), jQuery(t).css("display", b), C = !1, T = !1, jQuery(w).removeClass("mean-remove")
            }, I = function () {
                var e = "background:" + h + ";color:" + h + ";" + x;
                if (s <= c) {
                    jQuery(w).addClass("mean-remove"), T = !0, jQuery(i).addClass("mean-container"), jQuery(".mean-container").prepend('<div class="mean-bar"><a href="#nav" class="meanmenu-reveal" style="' + e + '">Show Navigation</a><nav class="mean-nav"></nav></div>');
                    var r = jQuery(t).html();
                    jQuery(".mean-nav").html(r), v && jQuery("nav.mean-nav ul, nav.mean-nav ul *").each(function () {
                        jQuery(this).is(".mean-remove") ? jQuery(this).attr("class", "mean-remove") : jQuery(this).removeAttr("class"), jQuery(this).removeAttr("id")
                    }), jQuery(t).before('<div class="mean-push" />'), jQuery(".mean-push").css("margin-top", d), jQuery(t).hide(), jQuery(".meanmenu-reveal").show(), jQuery(u).html(a), S = jQuery(u), jQuery(".mean-nav ul").hide(), p ? f ? (jQuery(".mean-nav ul ul").each(function () {
                        jQuery(this).children().length && jQuery(this, "li:first").parent().append('<a class="mean-expand" href="#" style="font-size: ' + n + '">' + m + "</a>")
                    }), jQuery(".mean-expand").on("click", function (t) {
                        t.preventDefault(), jQuery(this).hasClass("mean-clicked") ? (jQuery(this).text(m), jQuery(this).prev("ul").slideUp(300, function () {
                        })) : (jQuery(this).text(g), jQuery(this).prev("ul").slideDown(300, function () {
                        })), jQuery(this).toggleClass("mean-clicked")
                    })) : jQuery(".mean-nav ul ul").show() : jQuery(".mean-nav ul ul").hide(), jQuery(".mean-nav ul li").last().addClass("mean-last"), S.removeClass("meanclose"), jQuery(S).click(function (t) {
                        t.preventDefault(), !1 === C ? (S.css("text-align", "center"), S.css("text-indent", "0"), S.css("font-size", n), jQuery(".mean-nav ul:first").slideDown(), C = !0) : (jQuery(".mean-nav ul:first").slideUp(), C = !1), S.toggleClass("meanclose"), jQuery(S).is(".meanmenu-reveal.meanclose") ? S.html(o) : S.html(a), jQuery(w).addClass("mean-remove")
                    }), y && jQuery(".mean-nav ul > li > a:first-child").on("click", function () {
                        jQuery(".mean-nav ul:first").slideUp(), C = !1, jQuery(S).toggleClass("meanclose").html(a)
                    })
                } else z()
            };
            _ || jQuery(window).resize(function () {
                s = window.innerWidth || document.documentElement.clientWidth, z(), s <= c ? (I(), k()) : z()
            }), jQuery(window).resize(function () {
                s = window.innerWidth || document.documentElement.clientWidth, _ ? (k(), s <= c ? !1 === T && I() : z()) : (z(), s <= c && (I(), k()))
            }), I()
        })
    }
}(jQuery), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : "undefined" != typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    "use strict";
    var e, i = window.Slick || {};
    (e = 0, i = function (i, s) {
        var o, n = this;
        n.defaults = {
            accessibility: !0,
            adaptiveHeight: !1,
            appendArrows: t(i),
            appendDots: t(i),
            arrows: !0,
            asNavFor: null,
            prevArrow: '<button class="slick-prev" aria-label="Previous" type="button">Previous</button>',
            nextArrow: '<button class="slick-next" aria-label="Next" type="button">Next</button>',
            autoplay: !1,
            autoplaySpeed: 3e3,
            centerMode: !1,
            centerPadding: "50px",
            cssEase: "ease",
            customPaging: function (e, i) {
                return t('<button type="button" />').text(i + 1)
            },
            dots: !1,
            dotsClass: "slick-dots",
            draggable: !0,
            easing: "linear",
            edgeFriction: .35,
            fade: !1,
            focusOnSelect: !1,
            focusOnChange: !1,
            infinite: !0,
            initialSlide: 0,
            lazyLoad: "ondemand",
            mobileFirst: !1,
            pauseOnHover: !0,
            pauseOnFocus: !0,
            pauseOnDotsHover: !1,
            respondTo: "window",
            responsive: null,
            rows: 1,
            rtl: !1,
            slide: "",
            slidesPerRow: 1,
            slidesToShow: 1,
            slidesToScroll: 1,
            speed: 500,
            swipe: !0,
            swipeToSlide: !1,
            touchMove: !0,
            touchThreshold: 5,
            useCSS: !0,
            useTransform: !0,
            variableWidth: !1,
            vertical: !1,
            verticalSwiping: !1,
            waitForAnimate: !0,
            zIndex: 1e3
        }, n.initials = {
            animating: !1,
            dragging: !1,
            autoPlayTimer: null,
            currentDirection: 0,
            currentLeft: null,
            currentSlide: 0,
            direction: 1,
            $dots: null,
            listWidth: null,
            listHeight: null,
            loadIndex: 0,
            $nextArrow: null,
            $prevArrow: null,
            scrolling: !1,
            slideCount: null,
            slideWidth: null,
            $slideTrack: null,
            $slides: null,
            sliding: !1,
            slideOffset: 0,
            swipeLeft: null,
            swiping: !1,
            $list: null,
            touchObject: {},
            transformsEnabled: !1,
            unslicked: !1
        }, t.extend(n, n.initials), n.activeBreakpoint = null, n.animType = null, n.animProp = null, n.breakpoints = [], n.breakpointSettings = [], n.cssTransitions = !1, n.focussed = !1, n.interrupted = !1, n.hidden = "hidden", n.paused = !0, n.positionProp = null, n.respondTo = null, n.rowCount = 1, n.shouldClick = !0, n.$slider = t(i), n.$slidesCache = null, n.transformType = null, n.transitionType = null, n.visibilityChange = "visibilitychange", n.windowWidth = 0, n.windowTimer = null, o = t(i).data("slick") || {}, n.options = t.extend({}, n.defaults, s, o), n.currentSlide = n.options.initialSlide, n.originalSettings = n.options, void 0 !== document.mozHidden ? (n.hidden = "mozHidden", n.visibilityChange = "mozvisibilitychange") : void 0 !== document.webkitHidden && (n.hidden = "webkitHidden", n.visibilityChange = "webkitvisibilitychange"), n.autoPlay = t.proxy(n.autoPlay, n), n.autoPlayClear = t.proxy(n.autoPlayClear, n), n.autoPlayIterator = t.proxy(n.autoPlayIterator, n), n.changeSlide = t.proxy(n.changeSlide, n), n.clickHandler = t.proxy(n.clickHandler, n), n.selectHandler = t.proxy(n.selectHandler, n), n.setPosition = t.proxy(n.setPosition, n), n.swipeHandler = t.proxy(n.swipeHandler, n), n.dragHandler = t.proxy(n.dragHandler, n), n.keyHandler = t.proxy(n.keyHandler, n), n.instanceUid = e++ , n.htmlExpr = /^(?:\s*(<[\w\W]+>)[^>]*)$/, n.registerBreakpoints(), n.init(!0)
    }).prototype.activateADA = function () {
        this.$slideTrack.find(".slick-active").attr({"aria-hidden": "false"}).find("a, input, button, select").attr({tabindex: "0"})
    }, i.prototype.addSlide = i.prototype.slickAdd = function (e, i, s) {
        var o = this;
        if ("boolean" == typeof i) s = i, i = null; else if (i < 0 || i >= o.slideCount) return !1;
        o.unload(), "number" == typeof i ? 0 === i && 0 === o.$slides.length ? t(e).appendTo(o.$slideTrack) : s ? t(e).insertBefore(o.$slides.eq(i)) : t(e).insertAfter(o.$slides.eq(i)) : !0 === s ? t(e).prependTo(o.$slideTrack) : t(e).appendTo(o.$slideTrack), o.$slides = o.$slideTrack.children(this.options.slide), o.$slideTrack.children(this.options.slide).detach(), o.$slideTrack.append(o.$slides), o.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e)
        }), o.$slidesCache = o.$slides, o.reinit()
    }, i.prototype.animateHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.animate({height: e}, t.options.speed)
        }
    }, i.prototype.animateSlide = function (e, i) {
        var s = {}, o = this;
        o.animateHeight(), !0 === o.options.rtl && !1 === o.options.vertical && (e = -e), !1 === o.transformsEnabled ? !1 === o.options.vertical ? o.$slideTrack.animate({left: e}, o.options.speed, o.options.easing, i) : o.$slideTrack.animate({top: e}, o.options.speed, o.options.easing, i) : !1 === o.cssTransitions ? (!0 === o.options.rtl && (o.currentLeft = -o.currentLeft), t({animStart: o.currentLeft}).animate({animStart: e}, {
            duration: o.options.speed,
            easing: o.options.easing,
            step: function (t) {
                t = Math.ceil(t), !1 === o.options.vertical ? (s[o.animType] = "translate(" + t + "px, 0px)", o.$slideTrack.css(s)) : (s[o.animType] = "translate(0px," + t + "px)", o.$slideTrack.css(s))
            },
            complete: function () {
                i && i.call()
            }
        })) : (o.applyTransition(), e = Math.ceil(e), !1 === o.options.vertical ? s[o.animType] = "translate3d(" + e + "px, 0px, 0px)" : s[o.animType] = "translate3d(0px," + e + "px, 0px)", o.$slideTrack.css(s), i && setTimeout(function () {
            o.disableTransition(), i.call()
        }, o.options.speed))
    }, i.prototype.getNavTarget = function () {
        var e = this.options.asNavFor;
        return e && null !== e && (e = t(e).not(this.$slider)), e
    }, i.prototype.asNavFor = function (e) {
        var i = this.getNavTarget();
        null !== i && "object" == typeof i && i.each(function () {
            var i = t(this).slick("getSlick");
            i.unslicked || i.slideHandler(e, !0)
        })
    }, i.prototype.applyTransition = function (t) {
        var e = this, i = {};
        !1 === e.options.fade ? i[e.transitionType] = e.transformType + " " + e.options.speed + "ms " + e.options.cssEase : i[e.transitionType] = "opacity " + e.options.speed + "ms " + e.options.cssEase, !1 === e.options.fade ? e.$slideTrack.css(i) : e.$slides.eq(t).css(i)
    }, i.prototype.autoPlay = function () {
        var t = this;
        t.autoPlayClear(), t.slideCount > t.options.slidesToShow && (t.autoPlayTimer = setInterval(t.autoPlayIterator, t.options.autoplaySpeed))
    }, i.prototype.autoPlayClear = function () {
        this.autoPlayTimer && clearInterval(this.autoPlayTimer)
    }, i.prototype.autoPlayIterator = function () {
        var t = this, e = t.currentSlide + t.options.slidesToScroll;
        t.paused || t.interrupted || t.focussed || (!1 === t.options.infinite && (1 === t.direction && t.currentSlide + 1 === t.slideCount - 1 ? t.direction = 0 : 0 === t.direction && (e = t.currentSlide - t.options.slidesToScroll, t.currentSlide - 1 == 0 && (t.direction = 1))), t.slideHandler(e))
    }, i.prototype.buildArrows = function () {
        var e = this;
        !0 === e.options.arrows && (e.$prevArrow = t(e.options.prevArrow).addClass("slick-arrow"), e.$nextArrow = t(e.options.nextArrow).addClass("slick-arrow"), e.slideCount > e.options.slidesToShow ? (e.$prevArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.$nextArrow.removeClass("slick-hidden").removeAttr("aria-hidden tabindex"), e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.prependTo(e.options.appendArrows), e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.appendTo(e.options.appendArrows), !0 !== e.options.infinite && e.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true")) : e.$prevArrow.add(e.$nextArrow).addClass("slick-hidden").attr({
            "aria-disabled": "true",
            tabindex: "-1"
        }))
    }, i.prototype.buildDots = function () {
        var e, i, s = this;
        if (!0 === s.options.dots) {
            for (s.$slider.addClass("slick-dotted"), i = t("<ul />").addClass(s.options.dotsClass), e = 0; e <= s.getDotCount(); e += 1) i.append(t("<li />").append(s.options.customPaging.call(this, s, e)));
            s.$dots = i.appendTo(s.options.appendDots), s.$dots.find("li").first().addClass("slick-active")
        }
    }, i.prototype.buildOut = function () {
        var e = this;
        e.$slides = e.$slider.children(e.options.slide + ":not(.slick-cloned)").addClass("slick-slide"), e.slideCount = e.$slides.length, e.$slides.each(function (e, i) {
            t(i).attr("data-slick-index", e).data("originalStyling", t(i).attr("style") || "")
        }), e.$slider.addClass("slick-slider"), e.$slideTrack = 0 === e.slideCount ? t('<div class="slick-track"/>').appendTo(e.$slider) : e.$slides.wrapAll('<div class="slick-track"/>').parent(), e.$list = e.$slideTrack.wrap('<div class="slick-list"/>').parent(), e.$slideTrack.css("opacity", 0), !0 !== e.options.centerMode && !0 !== e.options.swipeToSlide || (e.options.slidesToScroll = 1), t("img[data-lazy]", e.$slider).not("[src]").addClass("slick-loading"), e.setupInfinite(), e.buildArrows(), e.buildDots(), e.updateDots(), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), !0 === e.options.draggable && e.$list.addClass("draggable")
    }, i.prototype.buildRows = function () {
        var t, e, i, s, o, n, a, r = this;
        if (s = document.createDocumentFragment(), n = r.$slider.children(), r.options.rows > 1) {
            for (a = r.options.slidesPerRow * r.options.rows, o = Math.ceil(n.length / a), t = 0; t < o; t++) {
                var l = document.createElement("div");
                for (e = 0; e < r.options.rows; e++) {
                    var h = document.createElement("div");
                    for (i = 0; i < r.options.slidesPerRow; i++) {
                        var c = t * a + (e * r.options.slidesPerRow + i);
                        n.get(c) && h.appendChild(n.get(c))
                    }
                    l.appendChild(h)
                }
                s.appendChild(l)
            }
            r.$slider.empty().append(s), r.$slider.children().children().children().css({
                width: 100 / r.options.slidesPerRow + "%",
                display: "inline-block"
            })
        }
    }, i.prototype.checkResponsive = function (e, i) {
        var s, o, n, a = this, r = !1, l = a.$slider.width(), h = window.innerWidth || t(window).width();
        if ("window" === a.respondTo ? n = h : "slider" === a.respondTo ? n = l : "min" === a.respondTo && (n = Math.min(h, l)), a.options.responsive && a.options.responsive.length && null !== a.options.responsive) {
            o = null;
            for (s in a.breakpoints) a.breakpoints.hasOwnProperty(s) && (!1 === a.originalSettings.mobileFirst ? n < a.breakpoints[s] && (o = a.breakpoints[s]) : n > a.breakpoints[s] && (o = a.breakpoints[s]));
            null !== o ? null !== a.activeBreakpoint ? (o !== a.activeBreakpoint || i) && (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = o) : (a.activeBreakpoint = o, "unslick" === a.breakpointSettings[o] ? a.unslick(o) : (a.options = t.extend({}, a.originalSettings, a.breakpointSettings[o]), !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e)), r = o) : null !== a.activeBreakpoint && (a.activeBreakpoint = null, a.options = a.originalSettings, !0 === e && (a.currentSlide = a.options.initialSlide), a.refresh(e), r = o), e || !1 === r || a.$slider.trigger("breakpoint", [a, r])
        }
    }, i.prototype.changeSlide = function (e, i) {
        var s, o, n = this, a = t(e.currentTarget);
        switch (a.is("a") && e.preventDefault(), a.is("li") || (a = a.closest("li")), s = n.slideCount % n.options.slidesToScroll != 0 ? 0 : (n.slideCount - n.currentSlide) % n.options.slidesToScroll, e.data.message) {
            case "previous":
                o = 0 === s ? n.options.slidesToScroll : n.options.slidesToShow - s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide - o, !1, i);
                break;
            case "next":
                o = 0 === s ? n.options.slidesToScroll : s, n.slideCount > n.options.slidesToShow && n.slideHandler(n.currentSlide + o, !1, i);
                break;
            case "index":
                var r = 0 === e.data.index ? 0 : e.data.index || a.index() * n.options.slidesToScroll;
                n.slideHandler(n.checkNavigable(r), !1, i), a.children().trigger("focus");
                break;
            default:
                return
        }
    }, i.prototype.checkNavigable = function (t) {
        var e, i;
        if (i = 0, t > (e = this.getNavigableIndexes())[e.length - 1]) t = e[e.length - 1]; else for (var s in e) {
            if (t < e[s]) {
                t = i;
                break
            }
            i = e[s]
        }
        return t
    }, i.prototype.cleanUpEvents = function () {
        var e = this;
        e.options.dots && null !== e.$dots && (t("li", e.$dots).off("click.slick", e.changeSlide).off("mouseenter.slick", t.proxy(e.interrupt, e, !0)).off("mouseleave.slick", t.proxy(e.interrupt, e, !1)), !0 === e.options.accessibility && e.$dots.off("keydown.slick", e.keyHandler)), e.$slider.off("focus.slick blur.slick"), !0 === e.options.arrows && e.slideCount > e.options.slidesToShow && (e.$prevArrow && e.$prevArrow.off("click.slick", e.changeSlide), e.$nextArrow && e.$nextArrow.off("click.slick", e.changeSlide), !0 === e.options.accessibility && (e.$prevArrow && e.$prevArrow.off("keydown.slick", e.keyHandler), e.$nextArrow && e.$nextArrow.off("keydown.slick", e.keyHandler))), e.$list.off("touchstart.slick mousedown.slick", e.swipeHandler), e.$list.off("touchmove.slick mousemove.slick", e.swipeHandler), e.$list.off("touchend.slick mouseup.slick", e.swipeHandler), e.$list.off("touchcancel.slick mouseleave.slick", e.swipeHandler), e.$list.off("click.slick", e.clickHandler), t(document).off(e.visibilityChange, e.visibility), e.cleanUpSlideEvents(), !0 === e.options.accessibility && e.$list.off("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().off("click.slick", e.selectHandler), t(window).off("orientationchange.slick.slick-" + e.instanceUid, e.orientationChange), t(window).off("resize.slick.slick-" + e.instanceUid, e.resize), t("[draggable!=true]", e.$slideTrack).off("dragstart", e.preventDefault), t(window).off("load.slick.slick-" + e.instanceUid, e.setPosition)
    }, i.prototype.cleanUpSlideEvents = function () {
        var e = this;
        e.$list.off("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.off("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, i.prototype.cleanUpRows = function () {
        var t;
        this.options.rows > 1 && ((t = this.$slides.children().children()).removeAttr("style"), this.$slider.empty().append(t))
    }, i.prototype.clickHandler = function (t) {
        !1 === this.shouldClick && (t.stopImmediatePropagation(), t.stopPropagation(), t.preventDefault())
    }, i.prototype.destroy = function (e) {
        var i = this;
        i.autoPlayClear(), i.touchObject = {}, i.cleanUpEvents(), t(".slick-cloned", i.$slider).detach(), i.$dots && i.$dots.remove(), i.$prevArrow && i.$prevArrow.length && (i.$prevArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.prevArrow) && i.$prevArrow.remove()), i.$nextArrow && i.$nextArrow.length && (i.$nextArrow.removeClass("slick-disabled slick-arrow slick-hidden").removeAttr("aria-hidden aria-disabled tabindex").css("display", ""), i.htmlExpr.test(i.options.nextArrow) && i.$nextArrow.remove()), i.$slides && (i.$slides.removeClass("slick-slide slick-active slick-center slick-visible slick-current").removeAttr("aria-hidden").removeAttr("data-slick-index").each(function () {
            t(this).attr("style", t(this).data("originalStyling"))
        }), i.$slideTrack.children(this.options.slide).detach(), i.$slideTrack.detach(), i.$list.detach(), i.$slider.append(i.$slides)), i.cleanUpRows(), i.$slider.removeClass("slick-slider"), i.$slider.removeClass("slick-initialized"), i.$slider.removeClass("slick-dotted"), i.unslicked = !0, e || i.$slider.trigger("destroy", [i])
    }, i.prototype.disableTransition = function (t) {
        var e = {};
        e[this.transitionType] = "", !1 === this.options.fade ? this.$slideTrack.css(e) : this.$slides.eq(t).css(e)
    }, i.prototype.fadeSlide = function (t, e) {
        var i = this;
        !1 === i.cssTransitions ? (i.$slides.eq(t).css({zIndex: i.options.zIndex}), i.$slides.eq(t).animate({opacity: 1}, i.options.speed, i.options.easing, e)) : (i.applyTransition(t), i.$slides.eq(t).css({
            opacity: 1,
            zIndex: i.options.zIndex
        }), e && setTimeout(function () {
            i.disableTransition(t), e.call()
        }, i.options.speed))
    }, i.prototype.fadeSlideOut = function (t) {
        var e = this;
        !1 === e.cssTransitions ? e.$slides.eq(t).animate({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }, e.options.speed, e.options.easing) : (e.applyTransition(t), e.$slides.eq(t).css({
            opacity: 0,
            zIndex: e.options.zIndex - 2
        }))
    }, i.prototype.filterSlides = i.prototype.slickFilter = function (t) {
        var e = this;
        null !== t && (e.$slidesCache = e.$slides, e.unload(), e.$slideTrack.children(this.options.slide).detach(), e.$slidesCache.filter(t).appendTo(e.$slideTrack), e.reinit())
    }, i.prototype.focusHandler = function () {
        var e = this;
        e.$slider.off("focus.slick blur.slick").on("focus.slick blur.slick", "*", function (i) {
            i.stopImmediatePropagation();
            var s = t(this);
            setTimeout(function () {
                e.options.pauseOnFocus && (e.focussed = s.is(":focus"), e.autoPlay())
            }, 0)
        })
    }, i.prototype.getCurrent = i.prototype.slickCurrentSlide = function () {
        return this.currentSlide
    }, i.prototype.getDotCount = function () {
        var t = this, e = 0, i = 0, s = 0;
        if (!0 === t.options.infinite) if (t.slideCount <= t.options.slidesToShow) ++s; else for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else if (!0 === t.options.centerMode) s = t.slideCount; else if (t.options.asNavFor) for (; e < t.slideCount;) ++s, e = i + t.options.slidesToScroll, i += t.options.slidesToScroll <= t.options.slidesToShow ? t.options.slidesToScroll : t.options.slidesToShow; else s = 1 + Math.ceil((t.slideCount - t.options.slidesToShow) / t.options.slidesToScroll);
        return s - 1
    }, i.prototype.getLeft = function (t) {
        var e, i, s, o, n = this, a = 0;
        return n.slideOffset = 0, i = n.$slides.first().outerHeight(!0), !0 === n.options.infinite ? (n.slideCount > n.options.slidesToShow && (n.slideOffset = n.slideWidth * n.options.slidesToShow * -1, o = -1, !0 === n.options.vertical && !0 === n.options.centerMode && (2 === n.options.slidesToShow ? o = -1.5 : 1 === n.options.slidesToShow && (o = -2)), a = i * n.options.slidesToShow * o), n.slideCount % n.options.slidesToScroll != 0 && t + n.options.slidesToScroll > n.slideCount && n.slideCount > n.options.slidesToShow && (t > n.slideCount ? (n.slideOffset = (n.options.slidesToShow - (t - n.slideCount)) * n.slideWidth * -1, a = (n.options.slidesToShow - (t - n.slideCount)) * i * -1) : (n.slideOffset = n.slideCount % n.options.slidesToScroll * n.slideWidth * -1, a = n.slideCount % n.options.slidesToScroll * i * -1))) : t + n.options.slidesToShow > n.slideCount && (n.slideOffset = (t + n.options.slidesToShow - n.slideCount) * n.slideWidth, a = (t + n.options.slidesToShow - n.slideCount) * i), n.slideCount <= n.options.slidesToShow && (n.slideOffset = 0, a = 0), !0 === n.options.centerMode && n.slideCount <= n.options.slidesToShow ? n.slideOffset = n.slideWidth * Math.floor(n.options.slidesToShow) / 2 - n.slideWidth * n.slideCount / 2 : !0 === n.options.centerMode && !0 === n.options.infinite ? n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2) - n.slideWidth : !0 === n.options.centerMode && (n.slideOffset = 0, n.slideOffset += n.slideWidth * Math.floor(n.options.slidesToShow / 2)), e = !1 === n.options.vertical ? t * n.slideWidth * -1 + n.slideOffset : t * i * -1 + a, !0 === n.options.variableWidth && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, !0 === n.options.centerMode && (s = n.slideCount <= n.options.slidesToShow || !1 === n.options.infinite ? n.$slideTrack.children(".slick-slide").eq(t) : n.$slideTrack.children(".slick-slide").eq(t + n.options.slidesToShow + 1), e = !0 === n.options.rtl ? s[0] ? -1 * (n.$slideTrack.width() - s[0].offsetLeft - s.width()) : 0 : s[0] ? -1 * s[0].offsetLeft : 0, e += (n.$list.width() - s.outerWidth()) / 2)), e
    }, i.prototype.getOption = i.prototype.slickGetOption = function (t) {
        return this.options[t]
    }, i.prototype.getNavigableIndexes = function () {
        var t, e = this, i = 0, s = 0, o = [];
        for (!1 === e.options.infinite ? t = e.slideCount : (i = -1 * e.options.slidesToScroll, s = -1 * e.options.slidesToScroll, t = 2 * e.slideCount); i < t;) o.push(i), i = s + e.options.slidesToScroll, s += e.options.slidesToScroll <= e.options.slidesToShow ? e.options.slidesToScroll : e.options.slidesToShow;
        return o
    }, i.prototype.getSlick = function () {
        return this
    }, i.prototype.getSlideCount = function () {
        var e, i, s = this;
        return i = !0 === s.options.centerMode ? s.slideWidth * Math.floor(s.options.slidesToShow / 2) : 0, !0 === s.options.swipeToSlide ? (s.$slideTrack.find(".slick-slide").each(function (o, n) {
            if (n.offsetLeft - i + t(n).outerWidth() / 2 > -1 * s.swipeLeft) return e = n, !1
        }), Math.abs(t(e).attr("data-slick-index") - s.currentSlide) || 1) : s.options.slidesToScroll
    }, i.prototype.goTo = i.prototype.slickGoTo = function (t, e) {
        this.changeSlide({data: {message: "index", index: parseInt(t)}}, e)
    }, i.prototype.init = function (e) {
        var i = this;
        t(i.$slider).hasClass("slick-initialized") || (t(i.$slider).addClass("slick-initialized"), i.buildRows(), i.buildOut(), i.setProps(), i.startLoad(), i.loadSlider(), i.initializeEvents(), i.updateArrows(), i.updateDots(), i.checkResponsive(!0), i.focusHandler()), e && i.$slider.trigger("init", [i]), !0 === i.options.accessibility && i.initADA(), i.options.autoplay && (i.paused = !1, i.autoPlay())
    }, i.prototype.initADA = function () {
        var e = this, i = Math.ceil(e.slideCount / e.options.slidesToShow),
            s = e.getNavigableIndexes().filter(function (t) {
                return t >= 0 && t < e.slideCount
            });
        e.$slides.add(e.$slideTrack.find(".slick-cloned")).attr({
            "aria-hidden": "true",
            tabindex: "-1"
        }).find("a, input, button, select").attr({tabindex: "-1"}), null !== e.$dots && (e.$slides.not(e.$slideTrack.find(".slick-cloned")).each(function (i) {
            var o = s.indexOf(i);
            t(this).attr({
                role: "tabpanel",
                id: "slick-slide" + e.instanceUid + i,
                tabindex: -1
            }), -1 !== o && t(this).attr({"aria-describedby": "slick-slide-control" + e.instanceUid + o})
        }), e.$dots.attr("role", "tablist").find("li").each(function (o) {
            var n = s[o];
            t(this).attr({role: "presentation"}), t(this).find("button").first().attr({
                role: "tab",
                id: "slick-slide-control" + e.instanceUid + o,
                "aria-controls": "slick-slide" + e.instanceUid + n,
                "aria-label": o + 1 + " of " + i,
                "aria-selected": null,
                tabindex: "-1"
            })
        }).eq(e.currentSlide).find("button").attr({"aria-selected": "true", tabindex: "0"}).end());
        for (var o = e.currentSlide, n = o + e.options.slidesToShow; o < n; o++) e.$slides.eq(o).attr("tabindex", 0);
        e.activateADA()
    }, i.prototype.initArrowEvents = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.off("click.slick").on("click.slick", {message: "previous"}, t.changeSlide), t.$nextArrow.off("click.slick").on("click.slick", {message: "next"}, t.changeSlide), !0 === t.options.accessibility && (t.$prevArrow.on("keydown.slick", t.keyHandler), t.$nextArrow.on("keydown.slick", t.keyHandler)))
    }, i.prototype.initDotEvents = function () {
        var e = this;
        !0 === e.options.dots && (t("li", e.$dots).on("click.slick", {message: "index"}, e.changeSlide), !0 === e.options.accessibility && e.$dots.on("keydown.slick", e.keyHandler)), !0 === e.options.dots && !0 === e.options.pauseOnDotsHover && t("li", e.$dots).on("mouseenter.slick", t.proxy(e.interrupt, e, !0)).on("mouseleave.slick", t.proxy(e.interrupt, e, !1))
    }, i.prototype.initSlideEvents = function () {
        var e = this;
        e.options.pauseOnHover && (e.$list.on("mouseenter.slick", t.proxy(e.interrupt, e, !0)), e.$list.on("mouseleave.slick", t.proxy(e.interrupt, e, !1)))
    }, i.prototype.initializeEvents = function () {
        var e = this;
        e.initArrowEvents(), e.initDotEvents(), e.initSlideEvents(), e.$list.on("touchstart.slick mousedown.slick", {action: "start"}, e.swipeHandler), e.$list.on("touchmove.slick mousemove.slick", {action: "move"}, e.swipeHandler), e.$list.on("touchend.slick mouseup.slick", {action: "end"}, e.swipeHandler), e.$list.on("touchcancel.slick mouseleave.slick", {action: "end"}, e.swipeHandler), e.$list.on("click.slick", e.clickHandler), t(document).on(e.visibilityChange, t.proxy(e.visibility, e)), !0 === e.options.accessibility && e.$list.on("keydown.slick", e.keyHandler), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), t(window).on("orientationchange.slick.slick-" + e.instanceUid, t.proxy(e.orientationChange, e)), t(window).on("resize.slick.slick-" + e.instanceUid, t.proxy(e.resize, e)), t("[draggable!=true]", e.$slideTrack).on("dragstart", e.preventDefault), t(window).on("load.slick.slick-" + e.instanceUid, e.setPosition), t(e.setPosition)
    }, i.prototype.initUI = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.show(), t.$nextArrow.show()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.show()
    }, i.prototype.keyHandler = function (t) {
        var e = this;
        t.target.tagName.match("TEXTAREA|INPUT|SELECT") || (37 === t.keyCode && !0 === e.options.accessibility ? e.changeSlide({data: {message: !0 === e.options.rtl ? "next" : "previous"}}) : 39 === t.keyCode && !0 === e.options.accessibility && e.changeSlide({data: {message: !0 === e.options.rtl ? "previous" : "next"}}))
    }, i.prototype.lazyLoad = function () {
        function e(e) {
            t("img[data-lazy]", e).each(function () {
                var e = t(this), i = t(this).attr("data-lazy"), s = t(this).attr("data-srcset"),
                    o = t(this).attr("data-sizes") || n.$slider.attr("data-sizes"), a = document.createElement("img");
                a.onload = function () {
                    e.animate({opacity: 0}, 100, function () {
                        s && (e.attr("srcset", s), o && e.attr("sizes", o)), e.attr("src", i).animate({opacity: 1}, 200, function () {
                            e.removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading")
                        }), n.$slider.trigger("lazyLoaded", [n, e, i])
                    })
                }, a.onerror = function () {
                    e.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), n.$slider.trigger("lazyLoadError", [n, e, i])
                }, a.src = i
            })
        }

        var i, s, o, n = this;
        if (!0 === n.options.centerMode ? !0 === n.options.infinite ? o = (s = n.currentSlide + (n.options.slidesToShow / 2 + 1)) + n.options.slidesToShow + 2 : (s = Math.max(0, n.currentSlide - (n.options.slidesToShow / 2 + 1)), o = n.options.slidesToShow / 2 + 1 + 2 + n.currentSlide) : (s = n.options.infinite ? n.options.slidesToShow + n.currentSlide : n.currentSlide, o = Math.ceil(s + n.options.slidesToShow), !0 === n.options.fade && (s > 0 && s-- , o <= n.slideCount && o++)), i = n.$slider.find(".slick-slide").slice(s, o), "anticipated" === n.options.lazyLoad) for (var a = s - 1, r = o, l = n.$slider.find(".slick-slide"), h = 0; h < n.options.slidesToScroll; h++) a < 0 && (a = n.slideCount - 1), i = (i = i.add(l.eq(a))).add(l.eq(r)), a-- , r++;
        e(i), n.slideCount <= n.options.slidesToShow ? e(n.$slider.find(".slick-slide")) : n.currentSlide >= n.slideCount - n.options.slidesToShow ? e(n.$slider.find(".slick-cloned").slice(0, n.options.slidesToShow)) : 0 === n.currentSlide && e(n.$slider.find(".slick-cloned").slice(-1 * n.options.slidesToShow))
    }, i.prototype.loadSlider = function () {
        var t = this;
        t.setPosition(), t.$slideTrack.css({opacity: 1}), t.$slider.removeClass("slick-loading"), t.initUI(), "progressive" === t.options.lazyLoad && t.progressiveLazyLoad()
    }, i.prototype.next = i.prototype.slickNext = function () {
        this.changeSlide({data: {message: "next"}})
    }, i.prototype.orientationChange = function () {
        this.checkResponsive(), this.setPosition()
    }, i.prototype.pause = i.prototype.slickPause = function () {
        this.autoPlayClear(), this.paused = !0
    }, i.prototype.play = i.prototype.slickPlay = function () {
        var t = this;
        t.autoPlay(), t.options.autoplay = !0, t.paused = !1, t.focussed = !1, t.interrupted = !1
    }, i.prototype.postSlide = function (e) {
        var i = this;
        i.unslicked || (i.$slider.trigger("afterChange", [i, e]), i.animating = !1, i.slideCount > i.options.slidesToShow && i.setPosition(), i.swipeLeft = null, i.options.autoplay && i.autoPlay(), !0 === i.options.accessibility && (i.initADA(), i.options.focusOnChange && t(i.$slides.get(i.currentSlide)).attr("tabindex", 0).focus()))
    }, i.prototype.prev = i.prototype.slickPrev = function () {
        this.changeSlide({data: {message: "previous"}})
    }, i.prototype.preventDefault = function (t) {
        t.preventDefault()
    }, i.prototype.progressiveLazyLoad = function (e) {
        e = e || 1;
        var i, s, o, n, a, r = this, l = t("img[data-lazy]", r.$slider);
        l.length ? (i = l.first(), s = i.attr("data-lazy"), o = i.attr("data-srcset"), n = i.attr("data-sizes") || r.$slider.attr("data-sizes"), (a = document.createElement("img")).onload = function () {
            o && (i.attr("srcset", o), n && i.attr("sizes", n)), i.attr("src", s).removeAttr("data-lazy data-srcset data-sizes").removeClass("slick-loading"), !0 === r.options.adaptiveHeight && r.setPosition(), r.$slider.trigger("lazyLoaded", [r, i, s]), r.progressiveLazyLoad()
        }, a.onerror = function () {
            e < 3 ? setTimeout(function () {
                r.progressiveLazyLoad(e + 1)
            }, 500) : (i.removeAttr("data-lazy").removeClass("slick-loading").addClass("slick-lazyload-error"), r.$slider.trigger("lazyLoadError", [r, i, s]), r.progressiveLazyLoad())
        }, a.src = s) : r.$slider.trigger("allImagesLoaded", [r])
    }, i.prototype.refresh = function (e) {
        var i, s, o = this;
        s = o.slideCount - o.options.slidesToShow, !o.options.infinite && o.currentSlide > s && (o.currentSlide = s), o.slideCount <= o.options.slidesToShow && (o.currentSlide = 0), i = o.currentSlide, o.destroy(!0), t.extend(o, o.initials, {currentSlide: i}), o.init(), e || o.changeSlide({
            data: {
                message: "index",
                index: i
            }
        }, !1)
    }, i.prototype.registerBreakpoints = function () {
        var e, i, s, o = this, n = o.options.responsive || null;
        if ("array" === t.type(n) && n.length) {
            o.respondTo = o.options.respondTo || "window";
            for (e in n) if (s = o.breakpoints.length - 1, n.hasOwnProperty(e)) {
                for (i = n[e].breakpoint; s >= 0;) o.breakpoints[s] && o.breakpoints[s] === i && o.breakpoints.splice(s, 1), s--;
                o.breakpoints.push(i), o.breakpointSettings[i] = n[e].settings
            }
            o.breakpoints.sort(function (t, e) {
                return o.options.mobileFirst ? t - e : e - t
            })
        }
    }, i.prototype.reinit = function () {
        var e = this;
        e.$slides = e.$slideTrack.children(e.options.slide).addClass("slick-slide"), e.slideCount = e.$slides.length, e.currentSlide >= e.slideCount && 0 !== e.currentSlide && (e.currentSlide = e.currentSlide - e.options.slidesToScroll), e.slideCount <= e.options.slidesToShow && (e.currentSlide = 0), e.registerBreakpoints(), e.setProps(), e.setupInfinite(), e.buildArrows(), e.updateArrows(), e.initArrowEvents(), e.buildDots(), e.updateDots(), e.initDotEvents(), e.cleanUpSlideEvents(), e.initSlideEvents(), e.checkResponsive(!1, !0), !0 === e.options.focusOnSelect && t(e.$slideTrack).children().on("click.slick", e.selectHandler), e.setSlideClasses("number" == typeof e.currentSlide ? e.currentSlide : 0), e.setPosition(), e.focusHandler(), e.paused = !e.options.autoplay, e.autoPlay(), e.$slider.trigger("reInit", [e])
    }, i.prototype.resize = function () {
        var e = this;
        t(window).width() !== e.windowWidth && (clearTimeout(e.windowDelay), e.windowDelay = window.setTimeout(function () {
            e.windowWidth = t(window).width(), e.checkResponsive(), e.unslicked || e.setPosition()
        }, 50))
    }, i.prototype.removeSlide = i.prototype.slickRemove = function (t, e, i) {
        var s = this;
        if (t = "boolean" == typeof t ? !0 === (e = t) ? 0 : s.slideCount - 1 : !0 === e ? --t : t, s.slideCount < 1 || t < 0 || t > s.slideCount - 1) return !1;
        s.unload(), !0 === i ? s.$slideTrack.children().remove() : s.$slideTrack.children(this.options.slide).eq(t).remove(), s.$slides = s.$slideTrack.children(this.options.slide), s.$slideTrack.children(this.options.slide).detach(), s.$slideTrack.append(s.$slides), s.$slidesCache = s.$slides, s.reinit()
    }, i.prototype.setCSS = function (t) {
        var e, i, s = this, o = {};
        !0 === s.options.rtl && (t = -t), e = "left" == s.positionProp ? Math.ceil(t) + "px" : "0px", i = "top" == s.positionProp ? Math.ceil(t) + "px" : "0px", o[s.positionProp] = t, !1 === s.transformsEnabled ? s.$slideTrack.css(o) : (o = {}, !1 === s.cssTransitions ? (o[s.animType] = "translate(" + e + ", " + i + ")", s.$slideTrack.css(o)) : (o[s.animType] = "translate3d(" + e + ", " + i + ", 0px)", s.$slideTrack.css(o)))
    }, i.prototype.setDimensions = function () {
        var t = this;
        !1 === t.options.vertical ? !0 === t.options.centerMode && t.$list.css({padding: "0px " + t.options.centerPadding}) : (t.$list.height(t.$slides.first().outerHeight(!0) * t.options.slidesToShow), !0 === t.options.centerMode && t.$list.css({padding: t.options.centerPadding + " 0px"})), t.listWidth = t.$list.width(), t.listHeight = t.$list.height(), !1 === t.options.vertical && !1 === t.options.variableWidth ? (t.slideWidth = Math.ceil(t.listWidth / t.options.slidesToShow), t.$slideTrack.width(Math.ceil(t.slideWidth * t.$slideTrack.children(".slick-slide").length))) : !0 === t.options.variableWidth ? t.$slideTrack.width(5e3 * t.slideCount) : (t.slideWidth = Math.ceil(t.listWidth), t.$slideTrack.height(Math.ceil(t.$slides.first().outerHeight(!0) * t.$slideTrack.children(".slick-slide").length)));
        var e = t.$slides.first().outerWidth(!0) - t.$slides.first().width();
        !1 === t.options.variableWidth && t.$slideTrack.children(".slick-slide").width(t.slideWidth - e)
    }, i.prototype.setFade = function () {
        var e, i = this;
        i.$slides.each(function (s, o) {
            e = i.slideWidth * s * -1, !0 === i.options.rtl ? t(o).css({
                position: "relative",
                right: e,
                top: 0,
                zIndex: i.options.zIndex - 2,
                opacity: 0
            }) : t(o).css({position: "relative", left: e, top: 0, zIndex: i.options.zIndex - 2, opacity: 0})
        }), i.$slides.eq(i.currentSlide).css({zIndex: i.options.zIndex - 1, opacity: 1})
    }, i.prototype.setHeight = function () {
        var t = this;
        if (1 === t.options.slidesToShow && !0 === t.options.adaptiveHeight && !1 === t.options.vertical) {
            var e = t.$slides.eq(t.currentSlide).outerHeight(!0);
            t.$list.css("height", e)
        }
    }, i.prototype.setOption = i.prototype.slickSetOption = function () {
        var e, i, s, o, n, a = this, r = !1;
        if ("object" === t.type(arguments[0]) ? (s = arguments[0], r = arguments[1], n = "multiple") : "string" === t.type(arguments[0]) && (s = arguments[0], o = arguments[1], r = arguments[2], "responsive" === arguments[0] && "array" === t.type(arguments[1]) ? n = "responsive" : void 0 !== arguments[1] && (n = "single")), "single" === n) a.options[s] = o; else if ("multiple" === n) t.each(s, function (t, e) {
            a.options[t] = e
        }); else if ("responsive" === n) for (i in o) if ("array" !== t.type(a.options.responsive)) a.options.responsive = [o[i]]; else {
            for (e = a.options.responsive.length - 1; e >= 0;) a.options.responsive[e].breakpoint === o[i].breakpoint && a.options.responsive.splice(e, 1), e--;
            a.options.responsive.push(o[i])
        }
        r && (a.unload(), a.reinit())
    }, i.prototype.setPosition = function () {
        var t = this;
        t.setDimensions(), t.setHeight(), !1 === t.options.fade ? t.setCSS(t.getLeft(t.currentSlide)) : t.setFade(), t.$slider.trigger("setPosition", [t])
    }, i.prototype.setProps = function () {
        var t = this, e = document.body.style;
        t.positionProp = !0 === t.options.vertical ? "top" : "left", "top" === t.positionProp ? t.$slider.addClass("slick-vertical") : t.$slider.removeClass("slick-vertical"), void 0 === e.WebkitTransition && void 0 === e.MozTransition && void 0 === e.msTransition || !0 === t.options.useCSS && (t.cssTransitions = !0), t.options.fade && ("number" == typeof t.options.zIndex ? t.options.zIndex < 3 && (t.options.zIndex = 3) : t.options.zIndex = t.defaults.zIndex), void 0 !== e.OTransform && (t.animType = "OTransform", t.transformType = "-o-transform", t.transitionType = "OTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.MozTransform && (t.animType = "MozTransform", t.transformType = "-moz-transform", t.transitionType = "MozTransition", void 0 === e.perspectiveProperty && void 0 === e.MozPerspective && (t.animType = !1)), void 0 !== e.webkitTransform && (t.animType = "webkitTransform", t.transformType = "-webkit-transform", t.transitionType = "webkitTransition", void 0 === e.perspectiveProperty && void 0 === e.webkitPerspective && (t.animType = !1)), void 0 !== e.msTransform && (t.animType = "msTransform", t.transformType = "-ms-transform", t.transitionType = "msTransition", void 0 === e.msTransform && (t.animType = !1)), void 0 !== e.transform && !1 !== t.animType && (t.animType = "transform", t.transformType = "transform", t.transitionType = "transition"), t.transformsEnabled = t.options.useTransform && null !== t.animType && !1 !== t.animType
    }, i.prototype.setSlideClasses = function (t) {
        var e, i, s, o, n = this;
        if (i = n.$slider.find(".slick-slide").removeClass("slick-active slick-center slick-current").attr("aria-hidden", "true"), n.$slides.eq(t).addClass("slick-current"), !0 === n.options.centerMode) {
            var a = n.options.slidesToShow % 2 == 0 ? 1 : 0;
            e = Math.floor(n.options.slidesToShow / 2), !0 === n.options.infinite && (t >= e && t <= n.slideCount - 1 - e ? n.$slides.slice(t - e + a, t + e + 1).addClass("slick-active").attr("aria-hidden", "false") : (s = n.options.slidesToShow + t, i.slice(s - e + 1 + a, s + e + 2).addClass("slick-active").attr("aria-hidden", "false")), 0 === t ? i.eq(i.length - 1 - n.options.slidesToShow).addClass("slick-center") : t === n.slideCount - 1 && i.eq(n.options.slidesToShow).addClass("slick-center")), n.$slides.eq(t).addClass("slick-center")
        } else t >= 0 && t <= n.slideCount - n.options.slidesToShow ? n.$slides.slice(t, t + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false") : i.length <= n.options.slidesToShow ? i.addClass("slick-active").attr("aria-hidden", "false") : (o = n.slideCount % n.options.slidesToShow, s = !0 === n.options.infinite ? n.options.slidesToShow + t : t, n.options.slidesToShow == n.options.slidesToScroll && n.slideCount - t < n.options.slidesToShow ? i.slice(s - (n.options.slidesToShow - o), s + o).addClass("slick-active").attr("aria-hidden", "false") : i.slice(s, s + n.options.slidesToShow).addClass("slick-active").attr("aria-hidden", "false"));
        "ondemand" !== n.options.lazyLoad && "anticipated" !== n.options.lazyLoad || n.lazyLoad()
    }, i.prototype.setupInfinite = function () {
        var e, i, s, o = this;
        if (!0 === o.options.fade && (o.options.centerMode = !1), !0 === o.options.infinite && !1 === o.options.fade && (i = null, o.slideCount > o.options.slidesToShow)) {
            for (s = !0 === o.options.centerMode ? o.options.slidesToShow + 1 : o.options.slidesToShow, e = o.slideCount; e > o.slideCount - s; e -= 1) i = e - 1, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i - o.slideCount).prependTo(o.$slideTrack).addClass("slick-cloned");
            for (e = 0; e < s + o.slideCount; e += 1) i = e, t(o.$slides[i]).clone(!0).attr("id", "").attr("data-slick-index", i + o.slideCount).appendTo(o.$slideTrack).addClass("slick-cloned");
            o.$slideTrack.find(".slick-cloned").find("[id]").each(function () {
                t(this).attr("id", "")
            })
        }
    }, i.prototype.interrupt = function (t) {
        t || this.autoPlay(), this.interrupted = t
    }, i.prototype.selectHandler = function (e) {
        var i = t(e.target).is(".slick-slide") ? t(e.target) : t(e.target).parents(".slick-slide"),
            s = parseInt(i.attr("data-slick-index"));
        s || (s = 0), this.slideCount <= this.options.slidesToShow ? this.slideHandler(s, !1, !0) : this.slideHandler(s)
    }, i.prototype.slideHandler = function (t, e, i) {
        var s, o, n, a, r, l = null, h = this;
        if (e = e || !1, !(!0 === h.animating && !0 === h.options.waitForAnimate || !0 === h.options.fade && h.currentSlide === t)) if (!1 === e && h.asNavFor(t), s = t, l = h.getLeft(s), a = h.getLeft(h.currentSlide), h.currentLeft = null === h.swipeLeft ? a : h.swipeLeft, !1 === h.options.infinite && !1 === h.options.centerMode && (t < 0 || t > h.getDotCount() * h.options.slidesToScroll)) !1 === h.options.fade && (s = h.currentSlide, !0 !== i ? h.animateSlide(a, function () {
            h.postSlide(s)
        }) : h.postSlide(s)); else if (!1 === h.options.infinite && !0 === h.options.centerMode && (t < 0 || t > h.slideCount - h.options.slidesToScroll)) !1 === h.options.fade && (s = h.currentSlide, !0 !== i ? h.animateSlide(a, function () {
            h.postSlide(s)
        }) : h.postSlide(s)); else {
            if (h.options.autoplay && clearInterval(h.autoPlayTimer), o = s < 0 ? h.slideCount % h.options.slidesToScroll != 0 ? h.slideCount - h.slideCount % h.options.slidesToScroll : h.slideCount + s : s >= h.slideCount ? h.slideCount % h.options.slidesToScroll != 0 ? 0 : s - h.slideCount : s, h.animating = !0, h.$slider.trigger("beforeChange", [h, h.currentSlide, o]), n = h.currentSlide, h.currentSlide = o, h.setSlideClasses(h.currentSlide), h.options.asNavFor && (r = (r = h.getNavTarget()).slick("getSlick")).slideCount <= r.options.slidesToShow && r.setSlideClasses(h.currentSlide), h.updateDots(), h.updateArrows(), !0 === h.options.fade) return !0 !== i ? (h.fadeSlideOut(n), h.fadeSlide(o, function () {
                h.postSlide(o)
            })) : h.postSlide(o), void h.animateHeight();
            !0 !== i ? h.animateSlide(l, function () {
                h.postSlide(o)
            }) : h.postSlide(o)
        }
    }, i.prototype.startLoad = function () {
        var t = this;
        !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && (t.$prevArrow.hide(), t.$nextArrow.hide()), !0 === t.options.dots && t.slideCount > t.options.slidesToShow && t.$dots.hide(), t.$slider.addClass("slick-loading")
    }, i.prototype.swipeDirection = function () {
        var t, e, i, s, o = this;
        return t = o.touchObject.startX - o.touchObject.curX, e = o.touchObject.startY - o.touchObject.curY, i = Math.atan2(e, t), (s = Math.round(180 * i / Math.PI)) < 0 && (s = 360 - Math.abs(s)), s <= 45 && s >= 0 ? !1 === o.options.rtl ? "left" : "right" : s <= 360 && s >= 315 ? !1 === o.options.rtl ? "left" : "right" : s >= 135 && s <= 225 ? !1 === o.options.rtl ? "right" : "left" : !0 === o.options.verticalSwiping ? s >= 35 && s <= 135 ? "down" : "up" : "vertical"
    }, i.prototype.swipeEnd = function (t) {
        var e, i, s = this;
        if (s.dragging = !1, s.swiping = !1, s.scrolling) return s.scrolling = !1, !1;
        if (s.interrupted = !1, s.shouldClick = !(s.touchObject.swipeLength > 10), void 0 === s.touchObject.curX) return !1;
        if (!0 === s.touchObject.edgeHit && s.$slider.trigger("edge", [s, s.swipeDirection()]), s.touchObject.swipeLength >= s.touchObject.minSwipe) {
            switch (i = s.swipeDirection()) {
                case "left":
                case "down":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide + s.getSlideCount()) : s.currentSlide + s.getSlideCount(), s.currentDirection = 0;
                    break;
                case "right":
                case "up":
                    e = s.options.swipeToSlide ? s.checkNavigable(s.currentSlide - s.getSlideCount()) : s.currentSlide - s.getSlideCount(), s.currentDirection = 1
            }
            "vertical" != i && (s.slideHandler(e), s.touchObject = {}, s.$slider.trigger("swipe", [s, i]))
        } else s.touchObject.startX !== s.touchObject.curX && (s.slideHandler(s.currentSlide), s.touchObject = {})
    }, i.prototype.swipeHandler = function (t) {
        var e = this;
        if (!(!1 === e.options.swipe || "ontouchend" in document && !1 === e.options.swipe || !1 === e.options.draggable && -1 !== t.type.indexOf("mouse"))) switch (e.touchObject.fingerCount = t.originalEvent && void 0 !== t.originalEvent.touches ? t.originalEvent.touches.length : 1, e.touchObject.minSwipe = e.listWidth / e.options.touchThreshold, !0 === e.options.verticalSwiping && (e.touchObject.minSwipe = e.listHeight / e.options.touchThreshold), t.data.action) {
            case "start":
                e.swipeStart(t);
                break;
            case "move":
                e.swipeMove(t);
                break;
            case "end":
                e.swipeEnd(t)
        }
    }, i.prototype.swipeMove = function (t) {
        var e, i, s, o, n, a, r = this;
        return n = void 0 !== t.originalEvent ? t.originalEvent.touches : null, !(!r.dragging || r.scrolling || n && 1 !== n.length) && (e = r.getLeft(r.currentSlide), r.touchObject.curX = void 0 !== n ? n[0].pageX : t.clientX, r.touchObject.curY = void 0 !== n ? n[0].pageY : t.clientY, r.touchObject.swipeLength = Math.round(Math.sqrt(Math.pow(r.touchObject.curX - r.touchObject.startX, 2))), a = Math.round(Math.sqrt(Math.pow(r.touchObject.curY - r.touchObject.startY, 2))), !r.options.verticalSwiping && !r.swiping && a > 4 ? (r.scrolling = !0, !1) : (!0 === r.options.verticalSwiping && (r.touchObject.swipeLength = a), i = r.swipeDirection(), void 0 !== t.originalEvent && r.touchObject.swipeLength > 4 && (r.swiping = !0, t.preventDefault()), o = (!1 === r.options.rtl ? 1 : -1) * (r.touchObject.curX > r.touchObject.startX ? 1 : -1), !0 === r.options.verticalSwiping && (o = r.touchObject.curY > r.touchObject.startY ? 1 : -1), s = r.touchObject.swipeLength, r.touchObject.edgeHit = !1, !1 === r.options.infinite && (0 === r.currentSlide && "right" === i || r.currentSlide >= r.getDotCount() && "left" === i) && (s = r.touchObject.swipeLength * r.options.edgeFriction, r.touchObject.edgeHit = !0), !1 === r.options.vertical ? r.swipeLeft = e + s * o : r.swipeLeft = e + s * (r.$list.height() / r.listWidth) * o, !0 === r.options.verticalSwiping && (r.swipeLeft = e + s * o), !0 !== r.options.fade && !1 !== r.options.touchMove && (!0 === r.animating ? (r.swipeLeft = null, !1) : void r.setCSS(r.swipeLeft))))
    }, i.prototype.swipeStart = function (t) {
        var e, i = this;
        if (i.interrupted = !0, 1 !== i.touchObject.fingerCount || i.slideCount <= i.options.slidesToShow) return i.touchObject = {}, !1;
        void 0 !== t.originalEvent && void 0 !== t.originalEvent.touches && (e = t.originalEvent.touches[0]), i.touchObject.startX = i.touchObject.curX = void 0 !== e ? e.pageX : t.clientX, i.touchObject.startY = i.touchObject.curY = void 0 !== e ? e.pageY : t.clientY, i.dragging = !0
    }, i.prototype.unfilterSlides = i.prototype.slickUnfilter = function () {
        var t = this;
        null !== t.$slidesCache && (t.unload(), t.$slideTrack.children(this.options.slide).detach(), t.$slidesCache.appendTo(t.$slideTrack), t.reinit())
    }, i.prototype.unload = function () {
        var e = this;
        t(".slick-cloned", e.$slider).remove(), e.$dots && e.$dots.remove(), e.$prevArrow && e.htmlExpr.test(e.options.prevArrow) && e.$prevArrow.remove(), e.$nextArrow && e.htmlExpr.test(e.options.nextArrow) && e.$nextArrow.remove(), e.$slides.removeClass("slick-slide slick-active slick-visible slick-current").attr("aria-hidden", "true").css("width", "")
    }, i.prototype.unslick = function (t) {
        this.$slider.trigger("unslick", [this, t]), this.destroy()
    }, i.prototype.updateArrows = function () {
        var t = this;
        Math.floor(t.options.slidesToShow / 2), !0 === t.options.arrows && t.slideCount > t.options.slidesToShow && !t.options.infinite && (t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false"), 0 === t.currentSlide ? (t.$prevArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$nextArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - t.options.slidesToShow && !1 === t.options.centerMode ? (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")) : t.currentSlide >= t.slideCount - 1 && !0 === t.options.centerMode && (t.$nextArrow.addClass("slick-disabled").attr("aria-disabled", "true"), t.$prevArrow.removeClass("slick-disabled").attr("aria-disabled", "false")))
    }, i.prototype.updateDots = function () {
        var t = this;
        null !== t.$dots && (t.$dots.find("li").removeClass("slick-active").end(), t.$dots.find("li").eq(Math.floor(t.currentSlide / t.options.slidesToScroll)).addClass("slick-active"))
    }, i.prototype.visibility = function () {
        this.options.autoplay && (document[this.hidden] ? this.interrupted = !0 : this.interrupted = !1)
    }, t.fn.slick = function () {
        var t, e, s = this, o = arguments[0], n = Array.prototype.slice.call(arguments, 1), a = s.length;
        for (t = 0; t < a; t++) if ("object" == typeof o || void 0 === o ? s[t].slick = new i(s[t], o) : e = s[t].slick[o].apply(s[t].slick, n), void 0 !== e) return e;
        return s
    }
}), void 0 === jQuery.migrateMute && (jQuery.migrateMute = !0), function (t, e) {
    "use strict";

    function i(i) {
        var s = e.console;
        n[i] || (n[i] = !0, t.migrateWarnings.push(i), s && s.warn && !t.migrateMute && (s.warn("JQMIGRATE: " + i), t.migrateTrace && s.trace && s.trace()))
    }

    function s(t, e, s, o) {
        Object.defineProperty(t, e, {
            configurable: !0, enumerable: !0, get: function () {
                return i(o), s
            }
        })
    }

    var o;
    t.migrateVersion = "3.0.0", (o = e.console && e.console.log && function () {
        e.console.log.apply(e.console, arguments)
    }) && (t && !/^[12]\./.test(t.fn.jquery) || o("JQMIGRATE: jQuery 3.0.0+ REQUIRED"), t.migrateWarnings && o("JQMIGRATE: Migrate plugin loaded multiple times"), o("JQMIGRATE: Migrate is installed" + (t.migrateMute ? "" : " with logging active") + ", version " + t.migrateVersion));
    var n = {};
    t.migrateWarnings = [], void 0 === t.migrateTrace && (t.migrateTrace = !0), t.migrateReset = function () {
        n = {}, t.migrateWarnings.length = 0
    }, "BackCompat" === document.compatMode && i("jQuery is not compatible with Quirks Mode");
    var a, r = t.fn.init, l = t.isNumeric, h = t.find, c = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/,
        d = /\[(\s*[-\w]+\s*)([~|^$*]?=)\s*([-\w#]*?#[-\w#]*)\s*\]/g;
    t.fn.init = function (t) {
        var e = Array.prototype.slice.call(arguments);
        return "string" == typeof t && "#" === t && (i("jQuery( '#' ) is not a valid selector"), e[0] = []), r.apply(this, e)
    }, t.fn.init.prototype = t.fn, t.find = function (t) {
        var e = Array.prototype.slice.call(arguments);
        if ("string" == typeof t && c.test(t)) try {
            document.querySelector(t)
        } catch (s) {
            t = t.replace(d, function (t, e, i, s) {
                return "[" + e + i + '"' + s + '"]'
            });
            try {
                document.querySelector(t), i("Attribute selector with '#' must be quoted: " + e[0]), e[0] = t
            } catch (t) {
                i("Attribute selector with '#' was not fixed: " + e[0])
            }
        }
        return h.apply(this, e)
    };
    for (a in h) Object.prototype.hasOwnProperty.call(h, a) && (t.find[a] = h[a]);
    t.fn.size = function () {
        return i("jQuery.fn.size() is deprecated; use the .length property"), this.length
    }, t.parseJSON = function () {
        return i("jQuery.parseJSON is deprecated; use JSON.parse"), JSON.parse.apply(null, arguments)
    }, t.isNumeric = function (e) {
        var s, o, n = l(e), a = (o = (s = e) && s.toString(), !t.isArray(s) && o - parseFloat(o) + 1 >= 0);
        return n !== a && i("jQuery.isNumeric() should not be called on constructed objects"), a
    }, s(t, "unique", t.uniqueSort, "jQuery.unique is deprecated, use jQuery.uniqueSort"), s(t.expr, "filters", t.expr.pseudos, "jQuery.expr.filters is now jQuery.expr.pseudos"), s(t.expr, ":", t.expr.pseudos, 'jQuery.expr[":"] is now jQuery.expr.pseudos');
    var u = t.ajax;
    t.ajax = function () {
        var t = u.apply(this, arguments);
        return t.promise && (s(t, "success", t.done, "jQXHR.success is deprecated and removed"), s(t, "error", t.fail, "jQXHR.error is deprecated and removed"), s(t, "complete", t.always, "jQXHR.complete is deprecated and removed")), t
    };
    var p = t.fn.removeAttr, f = t.fn.toggleClass, m = /\S+/g;
    t.fn.removeAttr = function (e) {
        var s = this;
        return t.each(e.match(m), function (e, o) {
            t.expr.match.bool.test(o) && (i("jQuery.fn.removeAttr no longer sets boolean properties: " + o), s.prop(o, !1))
        }), p.apply(this, arguments)
    }, t.fn.toggleClass = function (e) {
        return void 0 !== e && "boolean" != typeof e ? f.apply(this, arguments) : (i("jQuery.fn.toggleClass( boolean ) is deprecated"), this.each(function () {
            var i = this.getAttribute && this.getAttribute("class") || "";
            i && t.data(this, "__className__", i), this.setAttribute && this.setAttribute("class", i || !1 === e ? "" : t.data(this, "__className__") || "")
        }))
    };
    var g = !1;
    t.swap && t.each(["height", "width", "reliableMarginRight"], function (e, i) {
        var s = t.cssHooks[i] && t.cssHooks[i].get;
        s && (t.cssHooks[i].get = function () {
            var t;
            return g = !0, t = s.apply(this, arguments), g = !1, t
        })
    }), t.swap = function (t, e, s, o) {
        var n, a, r = {};
        g || i("jQuery.swap() is undocumented and deprecated");
        for (a in e) r[a] = t.style[a], t.style[a] = e[a];
        n = s.apply(t, o || []);
        for (a in e) t.style[a] = r[a];
        return n
    };
    var v = t.data;
    t.data = function (e, s, o) {
        var n;
        return s && s !== t.camelCase(s) && ((n = t.hasData(e) && v.call(this, e)) && s in n) ? (i("jQuery.data() always sets/gets camelCased names: " + s), arguments.length > 2 && (n[s] = o), n[s]) : v.apply(this, arguments)
    };
    var y = t.Tween.prototype.run;
    t.Tween.prototype.run = function (e) {
        t.easing[this.easing].length > 1 && (i('easing function "jQuery.easing.' + this.easing.toString() + '" should use only first argument'), t.easing[this.easing] = t.easing[this.easing].bind(t.easing, e, this.options.duration * e, 0, 1, this.options.duration)), y.apply(this, arguments)
    };
    var b = t.fn.load, w = t.event.fix;
    t.event.props = [], t.event.fixHooks = {}, t.event.fix = function (e) {
        var s, o = e.type, n = this.fixHooks[o], a = t.event.props;
        if (a.length) for (i("jQuery.event.props are deprecated and removed: " + a.join()); a.length;) t.event.addProp(a.pop());
        if (n && !n._migrated_ && (n._migrated_ = !0, i("jQuery.event.fixHooks are deprecated and removed: " + o), (a = n.props) && a.length)) for (; a.length;) t.event.addProp(a.pop());
        return s = w.call(this, e), n && n.filter ? n.filter(s, e) : s
    }, t.each(["load", "unload", "error"], function (e, s) {
        t.fn[s] = function () {
            var t = Array.prototype.slice.call(arguments, 0);
            return "load" === s && "string" == typeof t[0] ? b.apply(this, t) : (i("jQuery.fn." + s + "() is deprecated"), t.splice(0, 0, s), arguments.length ? this.on.apply(this, t) : (this.triggerHandler.apply(this, t), this))
        }
    }), t(function () {
        t(document).triggerHandler("ready")
    }), t.event.special.ready = {
        setup: function () {
            this === document && i("'ready' event is deprecated")
        }
    }, t.fn.extend({
        bind: function (t, e, s) {
            return i("jQuery.fn.bind() is deprecated"), this.on(t, null, e, s)
        }, unbind: function (t, e) {
            return i("jQuery.fn.unbind() is deprecated"), this.off(t, null, e)
        }, delegate: function (t, e, s, o) {
            return i("jQuery.fn.delegate() is deprecated"), this.on(e, t, s, o)
        }, undelegate: function (t, e, s) {
            return i("jQuery.fn.undelegate() is deprecated"), 1 === arguments.length ? this.off(t, "**") : this.off(e, t || "**", s)
        }
    });
    var _ = t.fn.offset;
    t.fn.offset = function () {
        var e, s = this[0], o = {top: 0, left: 0};
        return s && s.nodeType ? (e = (s.ownerDocument || document).documentElement, t.contains(e, s) ? _.apply(this, arguments) : (i("jQuery.fn.offset() requires an element connected to a document"), o)) : (i("jQuery.fn.offset() requires a valid DOM element"), o)
    };
    var x = t.param;
    t.param = function (e, s) {
        var o = t.ajaxSettings && t.ajaxSettings.traditional;
        return void 0 === s && o && (i("jQuery.param() no longer uses jQuery.ajaxSettings.traditional"), s = o), x.call(this, e, s)
    };
    var k = t.fn.andSelf || t.fn.addBack;
    t.fn.andSelf = function () {
        return i("jQuery.fn.andSelf() replaced by jQuery.fn.addBack()"), k.apply(this, arguments)
    };
    var C = t.Deferred,
        T = [["resolve", "done", t.Callbacks("once memory"), t.Callbacks("once memory"), "resolved"], ["reject", "fail", t.Callbacks("once memory"), t.Callbacks("once memory"), "rejected"], ["notify", "progress", t.Callbacks("memory"), t.Callbacks("memory")]];
    t.Deferred = function (e) {
        var s = C(), o = s.promise();
        return s.pipe = o.pipe = function () {
            var e = arguments;
            return i("deferred.pipe() is deprecated"), t.Deferred(function (i) {
                t.each(T, function (n, a) {
                    var r = t.isFunction(e[n]) && e[n];
                    s[a[1]](function () {
                        var e = r && r.apply(this, arguments);
                        e && t.isFunction(e.promise) ? e.promise().done(i.resolve).fail(i.reject).progress(i.notify) : i[a[0] + "With"](this === o ? i.promise() : this, r ? [e] : arguments)
                    })
                }), e = null
            }).promise()
        }, e && e.call(s, s), s
    }
}(jQuery, window), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    function e() {
        this._curInst = null, this._keyEvent = !1, this._disabledInputs = [], this._datepickerShowing = !1, this._inDialog = !1, this._mainDivId = "ui-datepicker-div", this._inlineClass = "ui-datepicker-inline", this._appendClass = "ui-datepicker-append", this._triggerClass = "ui-datepicker-trigger", this._dialogClass = "ui-datepicker-dialog", this._disableClass = "ui-datepicker-disabled", this._unselectableClass = "ui-datepicker-unselectable", this._currentClass = "ui-datepicker-current-day", this._dayOverClass = "ui-datepicker-days-cell-over", this.regional = [], this.regional[""] = {
            closeText: "Done",
            prevText: "Prev",
            nextText: "Next",
            currentText: "Today",
            monthNames: ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
            monthNamesShort: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
            dayNames: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
            dayNamesShort: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
            dayNamesMin: ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"],
            weekHeader: "Wk",
            dateFormat: "mm/dd/yy",
            firstDay: 0,
            isRTL: !1,
            showMonthAfterYear: !1,
            yearSuffix: ""
        }, this._defaults = {
            showOn: "focus",
            showAnim: "fadeIn",
            showOptions: {},
            defaultDate: null,
            appendText: "",
            buttonText: "...",
            buttonImage: "",
            buttonImageOnly: !1,
            hideIfNoPrevNext: !1,
            navigationAsDateFormat: !1,
            gotoCurrent: !1,
            changeMonth: !1,
            changeYear: !1,
            yearRange: "c-10:c+10",
            showOtherMonths: !1,
            selectOtherMonths: !1,
            showWeek: !1,
            calculateWeek: this.iso8601Week,
            shortYearCutoff: "+10",
            minDate: null,
            maxDate: null,
            duration: "fast",
            beforeShowDay: null,
            beforeShow: null,
            onSelect: null,
            onChangeMonthYear: null,
            onClose: null,
            numberOfMonths: 1,
            showCurrentAtPos: 0,
            stepMonths: 1,
            stepBigMonths: 12,
            altField: "",
            altFormat: "",
            constrainInput: !0,
            showButtonPanel: !1,
            autoSize: !1,
            disabled: !1
        }, t.extend(this._defaults, this.regional[""]), this.regional.en = t.extend(!0, {}, this.regional[""]), this.regional["en-US"] = t.extend(!0, {}, this.regional.en), this.dpDiv = i(t("<div id='" + this._mainDivId + "' class='ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>"))
    }

    function i(e) {
        var i = "button, .ui-datepicker-prev, .ui-datepicker-next, .ui-datepicker-calendar td a";
        return e.on("mouseout", i, function () {
            t(this).removeClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).removeClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).removeClass("ui-datepicker-next-hover")
        }).on("mouseover", i, s)
    }

    function s() {
        t.datepicker._isDisabledDatepicker(m.inline ? m.dpDiv.parent()[0] : m.input[0]) || (t(this).parents(".ui-datepicker-calendar").find("a").removeClass("ui-state-hover"), t(this).addClass("ui-state-hover"), -1 !== this.className.indexOf("ui-datepicker-prev") && t(this).addClass("ui-datepicker-prev-hover"), -1 !== this.className.indexOf("ui-datepicker-next") && t(this).addClass("ui-datepicker-next-hover"))
    }

    function o(e, i) {
        t.extend(e, i);
        for (var s in i) null == i[s] && (e[s] = i[s]);
        return e
    }

    function n(t) {
        return function () {
            var e = this.element.val();
            t.apply(this, arguments), this._refresh(), e !== this.element.val() && this._trigger("change")
        }
    }

    t.ui = t.ui || {}, t.ui.version = "1.12.1";
    var a, r, l, h, c = 0, d = Array.prototype.slice;
    t.cleanData = (h = t.cleanData, function (e) {
        var i, s, o;
        for (o = 0; null != (s = e[o]); o++) try {
            (i = t._data(s, "events")) && i.remove && t(s).triggerHandler("remove")
        } catch (t) {
        }
        h(e)
    }), t.widget = function (e, i, s) {
        var o, n, a, r = {}, l = e.split(".")[0], h = l + "-" + (e = e.split(".")[1]);
        return s || (s = i, i = t.Widget), t.isArray(s) && (s = t.extend.apply(null, [{}].concat(s))), t.expr[":"][h.toLowerCase()] = function (e) {
            return !!t.data(e, h)
        }, t[l] = t[l] || {}, o = t[l][e], n = t[l][e] = function (t, e) {
            return this._createWidget ? void (arguments.length && this._createWidget(t, e)) : new n(t, e)
        }, t.extend(n, o, {
            version: s.version,
            _proto: t.extend({}, s),
            _childConstructors: []
        }), (a = new i).options = t.widget.extend({}, a.options), t.each(s, function (e, s) {
            return t.isFunction(s) ? void (r[e] = function () {
                function t() {
                    return i.prototype[e].apply(this, arguments)
                }

                function o(t) {
                    return i.prototype[e].apply(this, t)
                }

                return function () {
                    var e, i = this._super, n = this._superApply;
                    return this._super = t, this._superApply = o, e = s.apply(this, arguments), this._super = i, this._superApply = n, e
                }
            }()) : void (r[e] = s)
        }), n.prototype = t.widget.extend(a, {widgetEventPrefix: o && a.widgetEventPrefix || e}, r, {
            constructor: n,
            namespace: l,
            widgetName: e,
            widgetFullName: h
        }), o ? (t.each(o._childConstructors, function (e, i) {
            var s = i.prototype;
            t.widget(s.namespace + "." + s.widgetName, n, i._proto)
        }), delete o._childConstructors) : i._childConstructors.push(n), t.widget.bridge(e, n), n
    }, t.widget.extend = function (e) {
        for (var i, s, o = d.call(arguments, 1), n = 0, a = o.length; a > n; n++) for (i in o[n]) s = o[n][i], o[n].hasOwnProperty(i) && void 0 !== s && (e[i] = t.isPlainObject(s) ? t.isPlainObject(e[i]) ? t.widget.extend({}, e[i], s) : t.widget.extend({}, s) : s);
        return e
    }, t.widget.bridge = function (e, i) {
        var s = i.prototype.widgetFullName || e;
        t.fn[e] = function (o) {
            var n = "string" == typeof o, a = d.call(arguments, 1), r = this;
            return n ? this.length || "instance" !== o ? this.each(function () {
                var i, n = t.data(this, s);
                return "instance" === o ? (r = n, !1) : n ? t.isFunction(n[o]) && "_" !== o.charAt(0) ? (i = n[o].apply(n, a)) !== n && void 0 !== i ? (r = i && i.jquery ? r.pushStack(i.get()) : i, !1) : void 0 : t.error("no such method '" + o + "' for " + e + " widget instance") : t.error("cannot call methods on " + e + " prior to initialization; attempted to call method '" + o + "'")
            }) : r = void 0 : (a.length && (o = t.widget.extend.apply(null, [o].concat(a))), this.each(function () {
                var e = t.data(this, s);
                e ? (e.option(o || {}), e._init && e._init()) : t.data(this, s, new i(o, this))
            })), r
        }
    }, t.Widget = function () {
    }, t.Widget._childConstructors = [], t.Widget.prototype = {
        widgetName: "widget",
        widgetEventPrefix: "",
        defaultElement: "<div>",
        options: {classes: {}, disabled: !1, create: null},
        _createWidget: function (e, i) {
            i = t(i || this.defaultElement || this)[0], this.element = t(i), this.uuid = c++ , this.eventNamespace = "." + this.widgetName + this.uuid, this.bindings = t(), this.hoverable = t(), this.focusable = t(), this.classesElementLookup = {}, i !== this && (t.data(i, this.widgetFullName, this), this._on(!0, this.element, {
                remove: function (t) {
                    t.target === i && this.destroy()
                }
            }), this.document = t(i.style ? i.ownerDocument : i.document || i), this.window = t(this.document[0].defaultView || this.document[0].parentWindow)), this.options = t.widget.extend({}, this.options, this._getCreateOptions(), e), this._create(), this.options.disabled && this._setOptionDisabled(this.options.disabled), this._trigger("create", null, this._getCreateEventData()), this._init()
        },
        _getCreateOptions: function () {
            return {}
        },
        _getCreateEventData: t.noop,
        _create: t.noop,
        _init: t.noop,
        destroy: function () {
            var e = this;
            this._destroy(), t.each(this.classesElementLookup, function (t, i) {
                e._removeClass(i, t)
            }), this.element.off(this.eventNamespace).removeData(this.widgetFullName), this.widget().off(this.eventNamespace).removeAttr("aria-disabled"), this.bindings.off(this.eventNamespace)
        },
        _destroy: t.noop,
        widget: function () {
            return this.element
        },
        option: function (e, i) {
            var s, o, n, a = e;
            if (0 === arguments.length) return t.widget.extend({}, this.options);
            if ("string" == typeof e) if (a = {}, s = e.split("."), e = s.shift(), s.length) {
                for (o = a[e] = t.widget.extend({}, this.options[e]), n = 0; s.length - 1 > n; n++) o[s[n]] = o[s[n]] || {}, o = o[s[n]];
                if (e = s.pop(), 1 === arguments.length) return void 0 === o[e] ? null : o[e];
                o[e] = i
            } else {
                if (1 === arguments.length) return void 0 === this.options[e] ? null : this.options[e];
                a[e] = i
            }
            return this._setOptions(a), this
        },
        _setOptions: function (t) {
            var e;
            for (e in t) this._setOption(e, t[e]);
            return this
        },
        _setOption: function (t, e) {
            return "classes" === t && this._setOptionClasses(e), this.options[t] = e, "disabled" === t && this._setOptionDisabled(e), this
        },
        _setOptionClasses: function (e) {
            var i, s, o;
            for (i in e) o = this.classesElementLookup[i], e[i] !== this.options.classes[i] && o && o.length && (s = t(o.get()), this._removeClass(o, i), s.addClass(this._classes({
                element: s,
                keys: i,
                classes: e,
                add: !0
            })))
        },
        _setOptionDisabled: function (t) {
            this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !!t), t && (this._removeClass(this.hoverable, null, "ui-state-hover"), this._removeClass(this.focusable, null, "ui-state-focus"))
        },
        enable: function () {
            return this._setOptions({disabled: !1})
        },
        disable: function () {
            return this._setOptions({disabled: !0})
        },
        _classes: function (e) {
            function i(i, n) {
                var a, r;
                for (r = 0; i.length > r; r++) a = o.classesElementLookup[i[r]] || t(), a = e.add ? t(t.unique(a.get().concat(e.element.get()))) : t(a.not(e.element).get()), o.classesElementLookup[i[r]] = a, s.push(i[r]), n && e.classes[i[r]] && s.push(e.classes[i[r]])
            }

            var s = [], o = this;
            return e = t.extend({
                element: this.element,
                classes: this.options.classes || {}
            }, e), this._on(e.element, {remove: "_untrackClassesElement"}), e.keys && i(e.keys.match(/\S+/g) || [], !0), e.extra && i(e.extra.match(/\S+/g) || []), s.join(" ")
        },
        _untrackClassesElement: function (e) {
            var i = this;
            t.each(i.classesElementLookup, function (s, o) {
                -1 !== t.inArray(e.target, o) && (i.classesElementLookup[s] = t(o.not(e.target).get()))
            })
        },
        _removeClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !1)
        },
        _addClass: function (t, e, i) {
            return this._toggleClass(t, e, i, !0)
        },
        _toggleClass: function (t, e, i, s) {
            s = "boolean" == typeof s ? s : i;
            var o = "string" == typeof t || null === t,
                n = {extra: o ? e : i, keys: o ? t : e, element: o ? this.element : t, add: s};
            return n.element.toggleClass(this._classes(n), s), this
        },
        _on: function (e, i, s) {
            var o, n = this;
            "boolean" != typeof e && (s = i, i = e, e = !1), s ? (i = o = t(i), this.bindings = this.bindings.add(i)) : (s = i, i = this.element, o = this.widget()), t.each(s, function (s, a) {
                function r() {
                    return e || !0 !== n.options.disabled && !t(this).hasClass("ui-state-disabled") ? ("string" == typeof a ? n[a] : a).apply(n, arguments) : void 0
                }

                "string" != typeof a && (r.guid = a.guid = a.guid || r.guid || t.guid++);
                var l = s.match(/^([\w:-]*)\s*(.*)$/), h = l[1] + n.eventNamespace, c = l[2];
                c ? o.on(h, c, r) : i.on(h, r)
            })
        },
        _off: function (e, i) {
            i = (i || "").split(" ").join(this.eventNamespace + " ") + this.eventNamespace, e.off(i).off(i), this.bindings = t(this.bindings.not(e).get()), this.focusable = t(this.focusable.not(e).get()), this.hoverable = t(this.hoverable.not(e).get())
        },
        _delay: function (t, e) {
            var i = this;
            return setTimeout(function () {
                return ("string" == typeof t ? i[t] : t).apply(i, arguments)
            }, e || 0)
        },
        _hoverable: function (e) {
            this.hoverable = this.hoverable.add(e), this._on(e, {
                mouseenter: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-hover")
                }, mouseleave: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-hover")
                }
            })
        },
        _focusable: function (e) {
            this.focusable = this.focusable.add(e), this._on(e, {
                focusin: function (e) {
                    this._addClass(t(e.currentTarget), null, "ui-state-focus")
                }, focusout: function (e) {
                    this._removeClass(t(e.currentTarget), null, "ui-state-focus")
                }
            })
        },
        _trigger: function (e, i, s) {
            var o, n, a = this.options[e];
            if (s = s || {}, (i = t.Event(i)).type = (e === this.widgetEventPrefix ? e : this.widgetEventPrefix + e).toLowerCase(), i.target = this.element[0], n = i.originalEvent) for (o in n) o in i || (i[o] = n[o]);
            return this.element.trigger(i, s), !(t.isFunction(a) && !1 === a.apply(this.element[0], [i].concat(s)) || i.isDefaultPrevented())
        }
    }, t.each({show: "fadeIn", hide: "fadeOut"}, function (e, i) {
        t.Widget.prototype["_" + e] = function (s, o, n) {
            "string" == typeof o && (o = {effect: o});
            var a, r = o ? !0 === o || "number" == typeof o ? i : o.effect || i : e;
            "number" == typeof (o = o || {}) && (o = {duration: o}), a = !t.isEmptyObject(o), o.complete = n, o.delay && s.delay(o.delay), a && t.effects && t.effects.effect[r] ? s[e](o) : r !== e && s[r] ? s[r](o.duration, o.easing, n) : s.queue(function (i) {
                t(this)[e](), n && n.call(s[0]), i()
            })
        }
    }), t.widget, function () {
        function e(t, e, i) {
            return [parseFloat(t[0]) * (c.test(t[0]) ? e / 100 : 1), parseFloat(t[1]) * (c.test(t[1]) ? i / 100 : 1)]
        }

        function i(e, i) {
            return parseInt(t.css(e, i), 10) || 0
        }

        var s, o = Math.max, n = Math.abs, a = /left|center|right/, r = /top|center|bottom/,
            l = /[\+\-]\d+(\.[\d]+)?%?/, h = /^\w+/, c = /%$/, d = t.fn.position;
        t.position = {
            scrollbarWidth: function () {
                if (void 0 !== s) return s;
                var e, i,
                    o = t("<div style='display:block;position:absolute;width:50px;height:50px;overflow:hidden;'><div style='height:100px;width:auto;'></div></div>"),
                    n = o.children()[0];
                return t("body").append(o), e = n.offsetWidth, o.css("overflow", "scroll"), e === (i = n.offsetWidth) && (i = o[0].clientWidth), o.remove(), s = e - i
            }, getScrollInfo: function (e) {
                var i = e.isWindow || e.isDocument ? "" : e.element.css("overflow-x"),
                    s = e.isWindow || e.isDocument ? "" : e.element.css("overflow-y"),
                    o = "scroll" === i || "auto" === i && e.width < e.element[0].scrollWidth;
                return {
                    width: "scroll" === s || "auto" === s && e.height < e.element[0].scrollHeight ? t.position.scrollbarWidth() : 0,
                    height: o ? t.position.scrollbarWidth() : 0
                }
            }, getWithinInfo: function (e) {
                var i = t(e || window), s = t.isWindow(i[0]), o = !!i[0] && 9 === i[0].nodeType;
                return {
                    element: i,
                    isWindow: s,
                    isDocument: o,
                    offset: !s && !o ? t(e).offset() : {left: 0, top: 0},
                    scrollLeft: i.scrollLeft(),
                    scrollTop: i.scrollTop(),
                    width: i.outerWidth(),
                    height: i.outerHeight()
                }
            }
        }, t.fn.position = function (s) {
            if (!s || !s.of) return d.apply(this, arguments);
            s = t.extend({}, s);
            var c, u, p, f, m, g, v, y, b = t(s.of), w = t.position.getWithinInfo(s.within),
                _ = t.position.getScrollInfo(w), x = (s.collision || "flip").split(" "), k = {};
            return g = 9 === (y = (v = b)[0]).nodeType ? {
                width: v.width(),
                height: v.height(),
                offset: {top: 0, left: 0}
            } : t.isWindow(y) ? {
                width: v.width(),
                height: v.height(),
                offset: {top: v.scrollTop(), left: v.scrollLeft()}
            } : y.preventDefault ? {
                width: 0,
                height: 0,
                offset: {top: y.pageY, left: y.pageX}
            } : {
                width: v.outerWidth(),
                height: v.outerHeight(),
                offset: v.offset()
            }, b[0].preventDefault && (s.at = "left top"), u = g.width, p = g.height, f = g.offset, m = t.extend({}, f), t.each(["my", "at"], function () {
                var t, e, i = (s[this] || "").split(" ");
                1 === i.length && (i = a.test(i[0]) ? i.concat(["center"]) : r.test(i[0]) ? ["center"].concat(i) : ["center", "center"]), i[0] = a.test(i[0]) ? i[0] : "center", i[1] = r.test(i[1]) ? i[1] : "center", t = l.exec(i[0]), e = l.exec(i[1]), k[this] = [t ? t[0] : 0, e ? e[0] : 0], s[this] = [h.exec(i[0])[0], h.exec(i[1])[0]]
            }), 1 === x.length && (x[1] = x[0]), "right" === s.at[0] ? m.left += u : "center" === s.at[0] && (m.left += u / 2), "bottom" === s.at[1] ? m.top += p : "center" === s.at[1] && (m.top += p / 2), c = e(k.at, u, p), m.left += c[0], m.top += c[1], this.each(function () {
                var a, r, l = t(this), h = l.outerWidth(), d = l.outerHeight(), g = i(this, "marginLeft"),
                    v = i(this, "marginTop"), y = h + g + i(this, "marginRight") + _.width,
                    C = d + v + i(this, "marginBottom") + _.height, T = t.extend({}, m),
                    S = e(k.my, l.outerWidth(), l.outerHeight());
                "right" === s.my[0] ? T.left -= h : "center" === s.my[0] && (T.left -= h / 2), "bottom" === s.my[1] ? T.top -= d : "center" === s.my[1] && (T.top -= d / 2), T.left += S[0], T.top += S[1], a = {
                    marginLeft: g,
                    marginTop: v
                }, t.each(["left", "top"], function (e, i) {
                    t.ui.position[x[e]] && t.ui.position[x[e]][i](T, {
                        targetWidth: u,
                        targetHeight: p,
                        elemWidth: h,
                        elemHeight: d,
                        collisionPosition: a,
                        collisionWidth: y,
                        collisionHeight: C,
                        offset: [c[0] + S[0], c[1] + S[1]],
                        my: s.my,
                        at: s.at,
                        within: w,
                        elem: l
                    })
                }), s.using && (r = function (t) {
                    var e = f.left - T.left, i = e + u - h, a = f.top - T.top, r = a + p - d, c = {
                        target: {element: b, left: f.left, top: f.top, width: u, height: p},
                        element: {element: l, left: T.left, top: T.top, width: h, height: d},
                        horizontal: 0 > i ? "left" : e > 0 ? "right" : "center",
                        vertical: 0 > r ? "top" : a > 0 ? "bottom" : "middle"
                    };
                    h > u && u > n(e + i) && (c.horizontal = "center"), d > p && p > n(a + r) && (c.vertical = "middle"), c.important = o(n(e), n(i)) > o(n(a), n(r)) ? "horizontal" : "vertical", s.using.call(this, t, c)
                }), l.offset(t.extend(T, {using: r}))
            })
        }, t.ui.position = {
            fit: {
                left: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollLeft : s.offset.left, a = s.width,
                        r = t.left - e.collisionPosition.marginLeft, l = n - r, h = r + e.collisionWidth - a - n;
                    e.collisionWidth > a ? l > 0 && 0 >= h ? (i = t.left + l + e.collisionWidth - a - n, t.left += l - i) : t.left = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionWidth : n : l > 0 ? t.left += l : h > 0 ? t.left -= h : t.left = o(t.left - r, t.left)
                }, top: function (t, e) {
                    var i, s = e.within, n = s.isWindow ? s.scrollTop : s.offset.top, a = e.within.height,
                        r = t.top - e.collisionPosition.marginTop, l = n - r, h = r + e.collisionHeight - a - n;
                    e.collisionHeight > a ? l > 0 && 0 >= h ? (i = t.top + l + e.collisionHeight - a - n, t.top += l - i) : t.top = h > 0 && 0 >= l ? n : l > h ? n + a - e.collisionHeight : n : l > 0 ? t.top += l : h > 0 ? t.top -= h : t.top = o(t.top - r, t.top)
                }
            }, flip: {
                left: function (t, e) {
                    var i, s, o = e.within, a = o.offset.left + o.scrollLeft, r = o.width,
                        l = o.isWindow ? o.scrollLeft : o.offset.left, h = t.left - e.collisionPosition.marginLeft,
                        c = h - l, d = h + e.collisionWidth - r - l,
                        u = "left" === e.my[0] ? -e.elemWidth : "right" === e.my[0] ? e.elemWidth : 0,
                        p = "left" === e.at[0] ? e.targetWidth : "right" === e.at[0] ? -e.targetWidth : 0,
                        f = -2 * e.offset[0];
                    0 > c ? (0 > (i = t.left + u + p + f + e.collisionWidth - r - a) || n(c) > i) && (t.left += u + p + f) : d > 0 && (((s = t.left - e.collisionPosition.marginLeft + u + p + f - l) > 0 || d > n(s)) && (t.left += u + p + f))
                }, top: function (t, e) {
                    var i, s, o = e.within, a = o.offset.top + o.scrollTop, r = o.height,
                        l = o.isWindow ? o.scrollTop : o.offset.top, h = t.top - e.collisionPosition.marginTop,
                        c = h - l, d = h + e.collisionHeight - r - l,
                        u = "top" === e.my[1] ? -e.elemHeight : "bottom" === e.my[1] ? e.elemHeight : 0,
                        p = "top" === e.at[1] ? e.targetHeight : "bottom" === e.at[1] ? -e.targetHeight : 0,
                        f = -2 * e.offset[1];
                    0 > c ? (0 > (s = t.top + u + p + f + e.collisionHeight - r - a) || n(c) > s) && (t.top += u + p + f) : d > 0 && (((i = t.top - e.collisionPosition.marginTop + u + p + f - l) > 0 || d > n(i)) && (t.top += u + p + f))
                }
            }, flipfit: {
                left: function () {
                    t.ui.position.flip.left.apply(this, arguments), t.ui.position.fit.left.apply(this, arguments)
                }, top: function () {
                    t.ui.position.flip.top.apply(this, arguments), t.ui.position.fit.top.apply(this, arguments)
                }
            }
        }
    }(), t.ui.position, t.extend(t.expr[":"], {
        data: t.expr.createPseudo ? t.expr.createPseudo(function (e) {
            return function (i) {
                return !!t.data(i, e)
            }
        }) : function (e, i, s) {
            return !!t.data(e, s[3])
        }
    }), t.fn.extend({
        disableSelection: (l = "onselectstart" in document.createElement("div") ? "selectstart" : "mousedown", function () {
            return this.on(l + ".ui-disableSelection", function (t) {
                t.preventDefault()
            })
        }), enableSelection: function () {
            return this.off(".ui-disableSelection")
        }
    }), t.ui.focusable = function (e, i) {
        var s, o, n, a, r, l = e.nodeName.toLowerCase();
        return "area" === l ? (o = (s = e.parentNode).name, !(!e.href || !o || "map" !== s.nodeName.toLowerCase()) && ((n = t("img[usemap='#" + o + "']")).length > 0 && n.is(":visible"))) : (/^(input|select|textarea|button|object)$/.test(l) ? (a = !e.disabled) && ((r = t(e).closest("fieldset")[0]) && (a = !r.disabled)) : a = "a" === l && e.href || i, a && t(e).is(":visible") && function (t) {
            for (var e = t.css("visibility"); "inherit" === e;) t = t.parent(), e = t.css("visibility");
            return "hidden" !== e
        }(t(e)))
    }, t.extend(t.expr[":"], {
        focusable: function (e) {
            return t.ui.focusable(e, null != t.attr(e, "tabindex"))
        }
    }), t.ui.focusable, t.fn.form = function () {
        return "string" == typeof this[0].form ? this.closest("form") : t(this[0].form)
    }, t.ui.formResetMixin = {
        _formResetHandler: function () {
            var e = t(this);
            setTimeout(function () {
                var i = e.data("ui-form-reset-instances");
                t.each(i, function () {
                    this.refresh()
                })
            })
        }, _bindFormResetHandler: function () {
            if (this.form = this.element.form(), this.form.length) {
                var t = this.form.data("ui-form-reset-instances") || [];
                t.length || this.form.on("reset.ui-form-reset", this._formResetHandler), t.push(this), this.form.data("ui-form-reset-instances", t)
            }
        }, _unbindFormResetHandler: function () {
            if (this.form.length) {
                var e = this.form.data("ui-form-reset-instances");
                e.splice(t.inArray(this, e), 1), e.length ? this.form.data("ui-form-reset-instances", e) : this.form.removeData("ui-form-reset-instances").off("reset.ui-form-reset")
            }
        }
    }, "1.7" === t.fn.jquery.substring(0, 3) && (t.each(["Width", "Height"], function (e, i) {
        function s(e, i, s, n) {
            return t.each(o, function () {
                i -= parseFloat(t.css(e, "padding" + this)) || 0, s && (i -= parseFloat(t.css(e, "border" + this + "Width")) || 0), n && (i -= parseFloat(t.css(e, "margin" + this)) || 0)
            }), i
        }

        var o = "Width" === i ? ["Left", "Right"] : ["Top", "Bottom"], n = i.toLowerCase(), a = {
            innerWidth: t.fn.innerWidth,
            innerHeight: t.fn.innerHeight,
            outerWidth: t.fn.outerWidth,
            outerHeight: t.fn.outerHeight
        };
        t.fn["inner" + i] = function (e) {
            return void 0 === e ? a["inner" + i].call(this) : this.each(function () {
                t(this).css(n, s(this, e) + "px")
            })
        }, t.fn["outer" + i] = function (e, o) {
            return "number" != typeof e ? a["outer" + i].call(this, e) : this.each(function () {
                t(this).css(n, s(this, e, !0, o) + "px")
            })
        }
    }), t.fn.addBack = function (t) {
        return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
    }), t.ui.keyCode = {
        BACKSPACE: 8,
        COMMA: 188,
        DELETE: 46,
        DOWN: 40,
        END: 35,
        ENTER: 13,
        ESCAPE: 27,
        HOME: 36,
        LEFT: 37,
        PAGE_DOWN: 34,
        PAGE_UP: 33,
        PERIOD: 190,
        RIGHT: 39,
        SPACE: 32,
        TAB: 9,
        UP: 38
    }, t.ui.escapeSelector = (r = /([!"#$%&'()*+,./:;<=>?@[\]^`{|}~])/g, function (t) {
        return t.replace(r, "\\$1")
    }), t.fn.labels = function () {
        var e, i, s, o, n;
        return this[0].labels && this[0].labels.length ? this.pushStack(this[0].labels) : (o = this.eq(0).parents("label"), (s = this.attr("id")) && (n = (e = this.eq(0).parents().last()).add(e.length ? e.siblings() : this.siblings()), i = "label[for='" + t.ui.escapeSelector(s) + "']", o = o.add(n.find(i).addBack(i))), this.pushStack(o))
    }, t.fn.scrollParent = function (e) {
        var i = this.css("position"), s = "absolute" === i, o = e ? /(auto|scroll|hidden)/ : /(auto|scroll)/,
            n = this.parents().filter(function () {
                var e = t(this);
                return (!s || "static" !== e.css("position")) && o.test(e.css("overflow") + e.css("overflow-y") + e.css("overflow-x"))
            }).eq(0);
        return "fixed" !== i && n.length ? n : t(this[0].ownerDocument || document)
    }, t.extend(t.expr[":"], {
        tabbable: function (e) {
            var i = t.attr(e, "tabindex"), s = null != i;
            return (!s || i >= 0) && t.ui.focusable(e, s)
        }
    }), t.fn.extend({
        uniqueId: (a = 0, function () {
            return this.each(function () {
                this.id || (this.id = "ui-id-" + ++a)
            })
        }), removeUniqueId: function () {
            return this.each(function () {
                /^ui-id-\d+$/.test(this.id) && t(this).removeAttr("id")
            })
        }
    }), t.ui.ie = !!/msie [\w.]+/.exec(navigator.userAgent.toLowerCase());
    var u = !1;
    t(document).on("mouseup", function () {
        u = !1
    }), t.widget("ui.mouse", {
        version: "1.12.1",
        options: {cancel: "input, textarea, button, select, option", distance: 1, delay: 0},
        _mouseInit: function () {
            var e = this;
            this.element.on("mousedown." + this.widgetName, function (t) {
                return e._mouseDown(t)
            }).on("click." + this.widgetName, function (i) {
                return !0 === t.data(i.target, e.widgetName + ".preventClickEvent") ? (t.removeData(i.target, e.widgetName + ".preventClickEvent"), i.stopImmediatePropagation(), !1) : void 0
            }), this.started = !1
        },
        _mouseDestroy: function () {
            this.element.off("." + this.widgetName), this._mouseMoveDelegate && this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate)
        },
        _mouseDown: function (e) {
            if (!u) {
                this._mouseMoved = !1, this._mouseStarted && this._mouseUp(e), this._mouseDownEvent = e;
                var i = this, s = 1 === e.which,
                    o = !("string" != typeof this.options.cancel || !e.target.nodeName) && t(e.target).closest(this.options.cancel).length;
                return !(s && !o && this._mouseCapture(e)) || (this.mouseDelayMet = !this.options.delay, this.mouseDelayMet || (this._mouseDelayTimer = setTimeout(function () {
                    i.mouseDelayMet = !0
                }, this.options.delay)), this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(e), !this._mouseStarted) ? (e.preventDefault(), !0) : (!0 === t.data(e.target, this.widgetName + ".preventClickEvent") && t.removeData(e.target, this.widgetName + ".preventClickEvent"), this._mouseMoveDelegate = function (t) {
                    return i._mouseMove(t)
                }, this._mouseUpDelegate = function (t) {
                    return i._mouseUp(t)
                }, this.document.on("mousemove." + this.widgetName, this._mouseMoveDelegate).on("mouseup." + this.widgetName, this._mouseUpDelegate), e.preventDefault(), u = !0, !0))
            }
        },
        _mouseMove: function (e) {
            if (this._mouseMoved) {
                if (t.ui.ie && (!document.documentMode || 9 > document.documentMode) && !e.button) return this._mouseUp(e);
                if (!e.which) if (e.originalEvent.altKey || e.originalEvent.ctrlKey || e.originalEvent.metaKey || e.originalEvent.shiftKey) this.ignoreMissingWhich = !0; else if (!this.ignoreMissingWhich) return this._mouseUp(e)
            }
            return (e.which || e.button) && (this._mouseMoved = !0), this._mouseStarted ? (this._mouseDrag(e), e.preventDefault()) : (this._mouseDistanceMet(e) && this._mouseDelayMet(e) && (this._mouseStarted = !1 !== this._mouseStart(this._mouseDownEvent, e), this._mouseStarted ? this._mouseDrag(e) : this._mouseUp(e)), !this._mouseStarted)
        },
        _mouseUp: function (e) {
            this.document.off("mousemove." + this.widgetName, this._mouseMoveDelegate).off("mouseup." + this.widgetName, this._mouseUpDelegate), this._mouseStarted && (this._mouseStarted = !1, e.target === this._mouseDownEvent.target && t.data(e.target, this.widgetName + ".preventClickEvent", !0), this._mouseStop(e)), this._mouseDelayTimer && (clearTimeout(this._mouseDelayTimer), delete this._mouseDelayTimer), this.ignoreMissingWhich = !1, u = !1, e.preventDefault()
        },
        _mouseDistanceMet: function (t) {
            return Math.max(Math.abs(this._mouseDownEvent.pageX - t.pageX), Math.abs(this._mouseDownEvent.pageY - t.pageY)) >= this.options.distance
        },
        _mouseDelayMet: function () {
            return this.mouseDelayMet
        },
        _mouseStart: function () {
        },
        _mouseDrag: function () {
        },
        _mouseStop: function () {
        },
        _mouseCapture: function () {
            return !0
        }
    }), t.ui.plugin = {
        add: function (e, i, s) {
            var o, n = t.ui[e].prototype;
            for (o in s) n.plugins[o] = n.plugins[o] || [], n.plugins[o].push([i, s[o]])
        }, call: function (t, e, i, s) {
            var o, n = t.plugins[e];
            if (n && (s || t.element[0].parentNode && 11 !== t.element[0].parentNode.nodeType)) for (o = 0; n.length > o; o++) t.options[n[o][0]] && n[o][1].apply(t.element, i)
        }
    }, t.ui.safeActiveElement = function (t) {
        var e;
        try {
            e = t.activeElement
        } catch (i) {
            e = t.body
        }
        return e || (e = t.body), e.nodeName || (e = t.body), e
    }, t.ui.safeBlur = function (e) {
        e && "body" !== e.nodeName.toLowerCase() && t(e).trigger("blur")
    }, t.widget("ui.draggable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "drag",
        options: {
            addClasses: !0,
            appendTo: "parent",
            axis: !1,
            connectToSortable: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            iframeFix: !1,
            opacity: !1,
            refreshPositions: !1,
            revert: !1,
            revertDuration: 500,
            scope: "default",
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            snap: !1,
            snapMode: "both",
            snapTolerance: 20,
            stack: !1,
            zIndex: !1,
            drag: null,
            start: null,
            stop: null
        },
        _create: function () {
            "original" === this.options.helper && this._setPositionRelative(), this.options.addClasses && this._addClass("ui-draggable"), this._setHandleClassName(), this._mouseInit()
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && (this._removeHandleClassName(), this._setHandleClassName())
        },
        _destroy: function () {
            return (this.helper || this.element).is(".ui-draggable-dragging") ? void (this.destroyOnClear = !0) : (this._removeHandleClassName(), void this._mouseDestroy())
        },
        _mouseCapture: function (e) {
            var i = this.options;
            return !(this.helper || i.disabled || t(e.target).closest(".ui-resizable-handle").length > 0) && (this.handle = this._getHandle(e), !!this.handle && (this._blurActiveElement(e), this._blockFrames(!0 === i.iframeFix ? "iframe" : i.iframeFix), !0))
        },
        _blockFrames: function (e) {
            this.iframeBlocks = this.document.find(e).map(function () {
                var e = t(this);
                return t("<div>").css("position", "absolute").appendTo(e.parent()).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _blurActiveElement: function (e) {
            var i = t.ui.safeActiveElement(this.document[0]);
            t(e.target).closest(i).length || t.ui.safeBlur(i)
        },
        _mouseStart: function (e) {
            var i = this.options;
            return this.helper = this._createHelper(e), this._addClass(this.helper, "ui-draggable-dragging"), this._cacheHelperProportions(), t.ui.ddmanager && (t.ui.ddmanager.current = this), this._cacheMargins(), this.cssPosition = this.helper.css("position"), this.scrollParent = this.helper.scrollParent(!0), this.offsetParent = this.helper.offsetParent(), this.hasFixedAncestor = this.helper.parents().filter(function () {
                return "fixed" === t(this).css("position")
            }).length > 0, this.positionAbs = this.element.offset(), this._refreshOffsets(e), this.originalPosition = this.position = this._generatePosition(e, !1), this.originalPageX = e.pageX, this.originalPageY = e.pageY, i.cursorAt && this._adjustOffsetFromHelper(i.cursorAt), this._setContainment(), !1 === this._trigger("start", e) ? (this._clear(), !1) : (this._cacheHelperProportions(), t.ui.ddmanager && !i.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this._mouseDrag(e, !0), t.ui.ddmanager && t.ui.ddmanager.dragStart(this, e), !0)
        },
        _refreshOffsets: function (t) {
            this.offset = {
                top: this.positionAbs.top - this.margins.top,
                left: this.positionAbs.left - this.margins.left,
                scroll: !1,
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }, this.offset.click = {left: t.pageX - this.offset.left, top: t.pageY - this.offset.top}
        },
        _mouseDrag: function (e, i) {
            if (this.hasFixedAncestor && (this.offset.parent = this._getParentOffset()), this.position = this._generatePosition(e, !0), this.positionAbs = this._convertPositionTo("absolute"), !i) {
                var s = this._uiHash();
                if (!1 === this._trigger("drag", e, s)) return this._mouseUp(new t.Event("mouseup", e)), !1;
                this.position = s.position
            }
            return this.helper[0].style.left = this.position.left + "px", this.helper[0].style.top = this.position.top + "px", t.ui.ddmanager && t.ui.ddmanager.drag(this, e), !1
        },
        _mouseStop: function (e) {
            var i = this, s = !1;
            return t.ui.ddmanager && !this.options.dropBehaviour && (s = t.ui.ddmanager.drop(this, e)), this.dropped && (s = this.dropped, this.dropped = !1), "invalid" === this.options.revert && !s || "valid" === this.options.revert && s || !0 === this.options.revert || t.isFunction(this.options.revert) && this.options.revert.call(this.element, s) ? t(this.helper).animate(this.originalPosition, parseInt(this.options.revertDuration, 10), function () {
                !1 !== i._trigger("stop", e) && i._clear()
            }) : !1 !== this._trigger("stop", e) && this._clear(), !1
        },
        _mouseUp: function (e) {
            return this._unblockFrames(), t.ui.ddmanager && t.ui.ddmanager.dragStop(this, e), this.handleElement.is(e.target) && this.element.trigger("focus"), t.ui.mouse.prototype._mouseUp.call(this, e)
        },
        cancel: function () {
            return this.helper.is(".ui-draggable-dragging") ? this._mouseUp(new t.Event("mouseup", {target: this.element[0]})) : this._clear(), this
        },
        _getHandle: function (e) {
            return !this.options.handle || !!t(e.target).closest(this.element.find(this.options.handle)).length
        },
        _setHandleClassName: function () {
            this.handleElement = this.options.handle ? this.element.find(this.options.handle) : this.element, this._addClass(this.handleElement, "ui-draggable-handle")
        },
        _removeHandleClassName: function () {
            this._removeClass(this.handleElement, "ui-draggable-handle")
        },
        _createHelper: function (e) {
            var i = this.options, s = t.isFunction(i.helper),
                o = s ? t(i.helper.apply(this.element[0], [e])) : "clone" === i.helper ? this.element.clone().removeAttr("id") : this.element;
            return o.parents("body").length || o.appendTo("parent" === i.appendTo ? this.element[0].parentNode : i.appendTo), s && o[0] === this.element[0] && this._setPositionRelative(), o[0] === this.element[0] || /(fixed|absolute)/.test(o.css("position")) || o.css("position", "absolute"), o
        },
        _setPositionRelative: function () {
            /^(?:r|a|f)/.test(this.element.css("position")) || (this.element[0].style.position = "relative")
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _isRootNode: function (t) {
            return /(html|body)/i.test(t.tagName) || t === this.document[0]
        },
        _getParentOffset: function () {
            var e = this.offsetParent.offset(), i = this.document[0];
            return "absolute" === this.cssPosition && this.scrollParent[0] !== i && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), this._isRootNode(this.offsetParent[0]) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" !== this.cssPosition) return {top: 0, left: 0};
            var t = this.element.position(), e = this._isRootNode(this.scrollParent[0]);
            return {
                top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + (e ? 0 : this.scrollParent.scrollTop()),
                left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + (e ? 0 : this.scrollParent.scrollLeft())
            }
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.element.css("marginLeft"), 10) || 0,
                top: parseInt(this.element.css("marginTop"), 10) || 0,
                right: parseInt(this.element.css("marginRight"), 10) || 0,
                bottom: parseInt(this.element.css("marginBottom"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, i, s, o = this.options, n = this.document[0];
            return this.relativeContainer = null, o.containment ? "window" === o.containment ? void (this.containment = [t(window).scrollLeft() - this.offset.relative.left - this.offset.parent.left, t(window).scrollTop() - this.offset.relative.top - this.offset.parent.top, t(window).scrollLeft() + t(window).width() - this.helperProportions.width - this.margins.left, t(window).scrollTop() + (t(window).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : "document" === o.containment ? void (this.containment = [0, 0, t(n).width() - this.helperProportions.width - this.margins.left, (t(n).height() || n.body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]) : o.containment.constructor === Array ? void (this.containment = o.containment) : ("parent" === o.containment && (o.containment = this.helper[0].parentNode), void ((s = (i = t(o.containment))[0]) && (e = /(scroll|auto)/.test(i.css("overflow")), this.containment = [(parseInt(i.css("borderLeftWidth"), 10) || 0) + (parseInt(i.css("paddingLeft"), 10) || 0), (parseInt(i.css("borderTopWidth"), 10) || 0) + (parseInt(i.css("paddingTop"), 10) || 0), (e ? Math.max(s.scrollWidth, s.offsetWidth) : s.offsetWidth) - (parseInt(i.css("borderRightWidth"), 10) || 0) - (parseInt(i.css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left - this.margins.right, (e ? Math.max(s.scrollHeight, s.offsetHeight) : s.offsetHeight) - (parseInt(i.css("borderBottomWidth"), 10) || 0) - (parseInt(i.css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top - this.margins.bottom], this.relativeContainer = i))) : void (this.containment = null)
        },
        _convertPositionTo: function (t, e) {
            e || (e = this.position);
            var i = "absolute" === t ? 1 : -1, s = this._isRootNode(this.scrollParent[0]);
            return {
                top: e.top + this.offset.relative.top * i + this.offset.parent.top * i - ("fixed" === this.cssPosition ? -this.offset.scroll.top : s ? 0 : this.offset.scroll.top) * i,
                left: e.left + this.offset.relative.left * i + this.offset.parent.left * i - ("fixed" === this.cssPosition ? -this.offset.scroll.left : s ? 0 : this.offset.scroll.left) * i
            }
        },
        _generatePosition: function (t, e) {
            var i, s, o, n, a = this.options, r = this._isRootNode(this.scrollParent[0]), l = t.pageX, h = t.pageY;
            return r && this.offset.scroll || (this.offset.scroll = {
                top: this.scrollParent.scrollTop(),
                left: this.scrollParent.scrollLeft()
            }), e && (this.containment && (this.relativeContainer ? (s = this.relativeContainer.offset(), i = [this.containment[0] + s.left, this.containment[1] + s.top, this.containment[2] + s.left, this.containment[3] + s.top]) : i = this.containment, t.pageX - this.offset.click.left < i[0] && (l = i[0] + this.offset.click.left), t.pageY - this.offset.click.top < i[1] && (h = i[1] + this.offset.click.top), t.pageX - this.offset.click.left > i[2] && (l = i[2] + this.offset.click.left), t.pageY - this.offset.click.top > i[3] && (h = i[3] + this.offset.click.top)), a.grid && (o = a.grid[1] ? this.originalPageY + Math.round((h - this.originalPageY) / a.grid[1]) * a.grid[1] : this.originalPageY, h = i ? o - this.offset.click.top >= i[1] || o - this.offset.click.top > i[3] ? o : o - this.offset.click.top >= i[1] ? o - a.grid[1] : o + a.grid[1] : o, n = a.grid[0] ? this.originalPageX + Math.round((l - this.originalPageX) / a.grid[0]) * a.grid[0] : this.originalPageX, l = i ? n - this.offset.click.left >= i[0] || n - this.offset.click.left > i[2] ? n : n - this.offset.click.left >= i[0] ? n - a.grid[0] : n + a.grid[0] : n), "y" === a.axis && (l = this.originalPageX), "x" === a.axis && (h = this.originalPageY)), {
                top: h - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.offset.scroll.top : r ? 0 : this.offset.scroll.top),
                left: l - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.offset.scroll.left : r ? 0 : this.offset.scroll.left)
            }
        },
        _clear: function () {
            this._removeClass(this.helper, "ui-draggable-dragging"), this.helper[0] === this.element[0] || this.cancelHelperRemoval || this.helper.remove(), this.helper = null, this.cancelHelperRemoval = !1, this.destroyOnClear && this.destroy()
        },
        _trigger: function (e, i, s) {
            return s = s || this._uiHash(), t.ui.plugin.call(this, e, [i, s, this], !0), /^(drag|start|stop)/.test(e) && (this.positionAbs = this._convertPositionTo("absolute"), s.offset = this.positionAbs), t.Widget.prototype._trigger.call(this, e, i, s)
        },
        plugins: {},
        _uiHash: function () {
            return {
                helper: this.helper,
                position: this.position,
                originalPosition: this.originalPosition,
                offset: this.positionAbs
            }
        }
    }), t.ui.plugin.add("draggable", "connectToSortable", {
        start: function (e, i, s) {
            var o = t.extend({}, i, {item: s.element});
            s.sortables = [], t(s.options.connectToSortable).each(function () {
                var i = t(this).sortable("instance");
                i && !i.options.disabled && (s.sortables.push(i), i.refreshPositions(), i._trigger("activate", e, o))
            })
        }, stop: function (e, i, s) {
            var o = t.extend({}, i, {item: s.element});
            s.cancelHelperRemoval = !1, t.each(s.sortables, function () {
                var t = this;
                t.isOver ? (t.isOver = 0, s.cancelHelperRemoval = !0, t.cancelHelperRemoval = !1, t._storedCSS = {
                    position: t.placeholder.css("position"),
                    top: t.placeholder.css("top"),
                    left: t.placeholder.css("left")
                }, t._mouseStop(e), t.options.helper = t.options._helper) : (t.cancelHelperRemoval = !0, t._trigger("deactivate", e, o))
            })
        }, drag: function (e, i, s) {
            t.each(s.sortables, function () {
                var o = !1, n = this;
                n.positionAbs = s.positionAbs, n.helperProportions = s.helperProportions, n.offset.click = s.offset.click, n._intersectsWith(n.containerCache) && (o = !0, t.each(s.sortables, function () {
                    return this.positionAbs = s.positionAbs, this.helperProportions = s.helperProportions, this.offset.click = s.offset.click, this !== n && this._intersectsWith(this.containerCache) && t.contains(n.element[0], this.element[0]) && (o = !1), o
                })), o ? (n.isOver || (n.isOver = 1, s._parent = i.helper.parent(), n.currentItem = i.helper.appendTo(n.element).data("ui-sortable-item", !0), n.options._helper = n.options.helper, n.options.helper = function () {
                    return i.helper[0]
                }, e.target = n.currentItem[0], n._mouseCapture(e, !0), n._mouseStart(e, !0, !0), n.offset.click.top = s.offset.click.top, n.offset.click.left = s.offset.click.left, n.offset.parent.left -= s.offset.parent.left - n.offset.parent.left, n.offset.parent.top -= s.offset.parent.top - n.offset.parent.top, s._trigger("toSortable", e), s.dropped = n.element, t.each(s.sortables, function () {
                    this.refreshPositions()
                }), s.currentItem = s.element, n.fromOutside = s), n.currentItem && (n._mouseDrag(e), i.position = n.position)) : n.isOver && (n.isOver = 0, n.cancelHelperRemoval = !0, n.options._revert = n.options.revert, n.options.revert = !1, n._trigger("out", e, n._uiHash(n)), n._mouseStop(e, !0), n.options.revert = n.options._revert, n.options.helper = n.options._helper, n.placeholder && n.placeholder.remove(), i.helper.appendTo(s._parent), s._refreshOffsets(e), i.position = s._generatePosition(e, !0), s._trigger("fromSortable", e), s.dropped = !1, t.each(s.sortables, function () {
                    this.refreshPositions()
                }))
            })
        }
    }), t.ui.plugin.add("draggable", "cursor", {
        start: function (e, i, s) {
            var o = t("body"), n = s.options;
            o.css("cursor") && (n._cursor = o.css("cursor")), o.css("cursor", n.cursor)
        }, stop: function (e, i, s) {
            var o = s.options;
            o._cursor && t("body").css("cursor", o._cursor)
        }
    }), t.ui.plugin.add("draggable", "opacity", {
        start: function (e, i, s) {
            var o = t(i.helper), n = s.options;
            o.css("opacity") && (n._opacity = o.css("opacity")), o.css("opacity", n.opacity)
        }, stop: function (e, i, s) {
            var o = s.options;
            o._opacity && t(i.helper).css("opacity", o._opacity)
        }
    }), t.ui.plugin.add("draggable", "scroll", {
        start: function (t, e, i) {
            i.scrollParentNotHidden || (i.scrollParentNotHidden = i.helper.scrollParent(!1)), i.scrollParentNotHidden[0] !== i.document[0] && "HTML" !== i.scrollParentNotHidden[0].tagName && (i.overflowOffset = i.scrollParentNotHidden.offset())
        }, drag: function (e, i, s) {
            var o = s.options, n = !1, a = s.scrollParentNotHidden[0], r = s.document[0];
            a !== r && "HTML" !== a.tagName ? (o.axis && "x" === o.axis || (s.overflowOffset.top + a.offsetHeight - e.pageY < o.scrollSensitivity ? a.scrollTop = n = a.scrollTop + o.scrollSpeed : e.pageY - s.overflowOffset.top < o.scrollSensitivity && (a.scrollTop = n = a.scrollTop - o.scrollSpeed)), o.axis && "y" === o.axis || (s.overflowOffset.left + a.offsetWidth - e.pageX < o.scrollSensitivity ? a.scrollLeft = n = a.scrollLeft + o.scrollSpeed : e.pageX - s.overflowOffset.left < o.scrollSensitivity && (a.scrollLeft = n = a.scrollLeft - o.scrollSpeed))) : (o.axis && "x" === o.axis || (e.pageY - t(r).scrollTop() < o.scrollSensitivity ? n = t(r).scrollTop(t(r).scrollTop() - o.scrollSpeed) : t(window).height() - (e.pageY - t(r).scrollTop()) < o.scrollSensitivity && (n = t(r).scrollTop(t(r).scrollTop() + o.scrollSpeed))), o.axis && "y" === o.axis || (e.pageX - t(r).scrollLeft() < o.scrollSensitivity ? n = t(r).scrollLeft(t(r).scrollLeft() - o.scrollSpeed) : t(window).width() - (e.pageX - t(r).scrollLeft()) < o.scrollSensitivity && (n = t(r).scrollLeft(t(r).scrollLeft() + o.scrollSpeed)))), !1 !== n && t.ui.ddmanager && !o.dropBehaviour && t.ui.ddmanager.prepareOffsets(s, e)
        }
    }), t.ui.plugin.add("draggable", "snap", {
        start: function (e, i, s) {
            var o = s.options;
            s.snapElements = [], t(o.snap.constructor !== String ? o.snap.items || ":data(ui-draggable)" : o.snap).each(function () {
                var e = t(this), i = e.offset();
                this !== s.element[0] && s.snapElements.push({
                    item: this,
                    width: e.outerWidth(),
                    height: e.outerHeight(),
                    top: i.top,
                    left: i.left
                })
            })
        }, drag: function (e, i, s) {
            var o, n, a, r, l, h, c, d, u, p, f = s.options, m = f.snapTolerance, g = i.offset.left,
                v = g + s.helperProportions.width, y = i.offset.top, b = y + s.helperProportions.height;
            for (u = s.snapElements.length - 1; u >= 0; u--) l = s.snapElements[u].left - s.margins.left, h = l + s.snapElements[u].width, c = s.snapElements[u].top - s.margins.top, d = c + s.snapElements[u].height, l - m > v || g > h + m || c - m > b || y > d + m || !t.contains(s.snapElements[u].item.ownerDocument, s.snapElements[u].item) ? (s.snapElements[u].snapping && s.options.snap.release && s.options.snap.release.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[u].item})), s.snapElements[u].snapping = !1) : ("inner" !== f.snapMode && (o = m >= Math.abs(c - b), n = m >= Math.abs(d - y), a = m >= Math.abs(l - v), r = m >= Math.abs(h - g), o && (i.position.top = s._convertPositionTo("relative", {
                top: c - s.helperProportions.height,
                left: 0
            }).top), n && (i.position.top = s._convertPositionTo("relative", {
                top: d,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l - s.helperProportions.width
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h
            }).left)), p = o || n || a || r, "outer" !== f.snapMode && (o = m >= Math.abs(c - y), n = m >= Math.abs(d - b), a = m >= Math.abs(l - g), r = m >= Math.abs(h - v), o && (i.position.top = s._convertPositionTo("relative", {
                top: c,
                left: 0
            }).top), n && (i.position.top = s._convertPositionTo("relative", {
                top: d - s.helperProportions.height,
                left: 0
            }).top), a && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: l
            }).left), r && (i.position.left = s._convertPositionTo("relative", {
                top: 0,
                left: h - s.helperProportions.width
            }).left)), !s.snapElements[u].snapping && (o || n || a || r || p) && s.options.snap.snap && s.options.snap.snap.call(s.element, e, t.extend(s._uiHash(), {snapItem: s.snapElements[u].item})), s.snapElements[u].snapping = o || n || a || r || p)
        }
    }), t.ui.plugin.add("draggable", "stack", {
        start: function (e, i, s) {
            var o, n = s.options, a = t.makeArray(t(n.stack)).sort(function (e, i) {
                return (parseInt(t(e).css("zIndex"), 10) || 0) - (parseInt(t(i).css("zIndex"), 10) || 0)
            });
            a.length && (o = parseInt(t(a[0]).css("zIndex"), 10) || 0, t(a).each(function (e) {
                t(this).css("zIndex", o + e)
            }), this.css("zIndex", o + a.length))
        }
    }), t.ui.plugin.add("draggable", "zIndex", {
        start: function (e, i, s) {
            var o = t(i.helper), n = s.options;
            o.css("zIndex") && (n._zIndex = o.css("zIndex")), o.css("zIndex", n.zIndex)
        }, stop: function (e, i, s) {
            var o = s.options;
            o._zIndex && t(i.helper).css("zIndex", o._zIndex)
        }
    }), t.ui.draggable, t.widget("ui.droppable", {
        version: "1.12.1",
        widgetEventPrefix: "drop",
        options: {
            accept: "*",
            addClasses: !0,
            greedy: !1,
            scope: "default",
            tolerance: "intersect",
            activate: null,
            deactivate: null,
            drop: null,
            out: null,
            over: null
        },
        _create: function () {
            var e, i = this.options, s = i.accept;
            this.isover = !1, this.isout = !0, this.accept = t.isFunction(s) ? s : function (t) {
                return t.is(s)
            }, this.proportions = function () {
                return arguments.length ? void (e = arguments[0]) : e || (e = {
                    width: this.element[0].offsetWidth,
                    height: this.element[0].offsetHeight
                })
            }, this._addToManager(i.scope), i.addClasses && this._addClass("ui-droppable")
        },
        _addToManager: function (e) {
            t.ui.ddmanager.droppables[e] = t.ui.ddmanager.droppables[e] || [], t.ui.ddmanager.droppables[e].push(this)
        },
        _splice: function (t) {
            for (var e = 0; t.length > e; e++) t[e] === this && t.splice(e, 1)
        },
        _destroy: function () {
            var e = t.ui.ddmanager.droppables[this.options.scope];
            this._splice(e)
        },
        _setOption: function (e, i) {
            if ("accept" === e) this.accept = t.isFunction(i) ? i : function (t) {
                return t.is(i)
            }; else if ("scope" === e) {
                var s = t.ui.ddmanager.droppables[this.options.scope];
                this._splice(s), this._addToManager(i)
            }
            this._super(e, i)
        },
        _activate: function (e) {
            var i = t.ui.ddmanager.current;
            this._addActiveClass(), i && this._trigger("activate", e, this.ui(i))
        },
        _deactivate: function (e) {
            var i = t.ui.ddmanager.current;
            this._removeActiveClass(), i && this._trigger("deactivate", e, this.ui(i))
        },
        _over: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._addHoverClass(), this._trigger("over", e, this.ui(i)))
        },
        _out: function (e) {
            var i = t.ui.ddmanager.current;
            i && (i.currentItem || i.element)[0] !== this.element[0] && this.accept.call(this.element[0], i.currentItem || i.element) && (this._removeHoverClass(), this._trigger("out", e, this.ui(i)))
        },
        _drop: function (e, i) {
            var s = i || t.ui.ddmanager.current, o = !1;
            return !(!s || (s.currentItem || s.element)[0] === this.element[0]) && (this.element.find(":data(ui-droppable)").not(".ui-draggable-dragging").each(function () {
                var i = t(this).droppable("instance");
                return i.options.greedy && !i.options.disabled && i.options.scope === s.options.scope && i.accept.call(i.element[0], s.currentItem || s.element) && p(s, t.extend(i, {offset: i.element.offset()}), i.options.tolerance, e) ? (o = !0, !1) : void 0
            }), !o && (!!this.accept.call(this.element[0], s.currentItem || s.element) && (this._removeActiveClass(), this._removeHoverClass(), this._trigger("drop", e, this.ui(s)), this.element)))
        },
        ui: function (t) {
            return {
                draggable: t.currentItem || t.element,
                helper: t.helper,
                position: t.position,
                offset: t.positionAbs
            }
        },
        _addHoverClass: function () {
            this._addClass("ui-droppable-hover")
        },
        _removeHoverClass: function () {
            this._removeClass("ui-droppable-hover")
        },
        _addActiveClass: function () {
            this._addClass("ui-droppable-active")
        },
        _removeActiveClass: function () {
            this._removeClass("ui-droppable-active")
        }
    });
    var p = t.ui.intersect = function () {
        function t(t, e, i) {
            return t >= e && e + i > t
        }

        return function (e, i, s, o) {
            if (!i.offset) return !1;
            var n = (e.positionAbs || e.position.absolute).left + e.margins.left,
                a = (e.positionAbs || e.position.absolute).top + e.margins.top, r = n + e.helperProportions.width,
                l = a + e.helperProportions.height, h = i.offset.left, c = i.offset.top, d = h + i.proportions().width,
                u = c + i.proportions().height;
            switch (s) {
                case "fit":
                    return n >= h && d >= r && a >= c && u >= l;
                case "intersect":
                    return n + e.helperProportions.width / 2 > h && d > r - e.helperProportions.width / 2 && a + e.helperProportions.height / 2 > c && u > l - e.helperProportions.height / 2;
                case "pointer":
                    return t(o.pageY, c, i.proportions().height) && t(o.pageX, h, i.proportions().width);
                case "touch":
                    return (a >= c && u >= a || l >= c && u >= l || c > a && l > u) && (n >= h && d >= n || r >= h && d >= r || h > n && r > d);
                default:
                    return !1
            }
        }
    }();
    t.ui.ddmanager = {
        current: null, droppables: {default: []}, prepareOffsets: function (e, i) {
            var s, o, n = t.ui.ddmanager.droppables[e.options.scope] || [], a = i ? i.type : null,
                r = (e.currentItem || e.element).find(":data(ui-droppable)").addBack();
            t: for (s = 0; n.length > s; s++) if (!(n[s].options.disabled || e && !n[s].accept.call(n[s].element[0], e.currentItem || e.element))) {
                for (o = 0; r.length > o; o++) if (r[o] === n[s].element[0]) {
                    n[s].proportions().height = 0;
                    continue t
                }
                n[s].visible = "none" !== n[s].element.css("display"), n[s].visible && ("mousedown" === a && n[s]._activate.call(n[s], i), n[s].offset = n[s].element.offset(), n[s].proportions({
                    width: n[s].element[0].offsetWidth,
                    height: n[s].element[0].offsetHeight
                }))
            }
        }, drop: function (e, i) {
            var s = !1;
            return t.each((t.ui.ddmanager.droppables[e.options.scope] || []).slice(), function () {
                this.options && (!this.options.disabled && this.visible && p(e, this, this.options.tolerance, i) && (s = this._drop.call(this, i) || s), !this.options.disabled && this.visible && this.accept.call(this.element[0], e.currentItem || e.element) && (this.isout = !0, this.isover = !1, this._deactivate.call(this, i)))
            }), s
        }, dragStart: function (e, i) {
            e.element.parentsUntil("body").on("scroll.droppable", function () {
                e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
            })
        }, drag: function (e, i) {
            e.options.refreshPositions && t.ui.ddmanager.prepareOffsets(e, i), t.each(t.ui.ddmanager.droppables[e.options.scope] || [], function () {
                if (!this.options.disabled && !this.greedyChild && this.visible) {
                    var s, o, n, a = p(e, this, this.options.tolerance, i),
                        r = !a && this.isover ? "isout" : a && !this.isover ? "isover" : null;
                    r && (this.options.greedy && (o = this.options.scope, (n = this.element.parents(":data(ui-droppable)").filter(function () {
                        return t(this).droppable("instance").options.scope === o
                    })).length && ((s = t(n[0]).droppable("instance")).greedyChild = "isover" === r)), s && "isover" === r && (s.isover = !1, s.isout = !0, s._out.call(s, i)), this[r] = !0, this["isout" === r ? "isover" : "isout"] = !1, this["isover" === r ? "_over" : "_out"].call(this, i), s && "isout" === r && (s.isout = !1, s.isover = !0, s._over.call(s, i)))
                }
            })
        }, dragStop: function (e, i) {
            e.element.parentsUntil("body").off("scroll.droppable"), e.options.refreshPositions || t.ui.ddmanager.prepareOffsets(e, i)
        }
    }, !1 !== t.uiBackCompat && t.widget("ui.droppable", t.ui.droppable, {
        options: {hoverClass: !1, activeClass: !1},
        _addActiveClass: function () {
            this._super(), this.options.activeClass && this.element.addClass(this.options.activeClass)
        },
        _removeActiveClass: function () {
            this._super(), this.options.activeClass && this.element.removeClass(this.options.activeClass)
        },
        _addHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.addClass(this.options.hoverClass)
        },
        _removeHoverClass: function () {
            this._super(), this.options.hoverClass && this.element.removeClass(this.options.hoverClass)
        }
    }), t.ui.droppable, t.widget("ui.resizable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "resize",
        options: {
            alsoResize: !1,
            animate: !1,
            animateDuration: "slow",
            animateEasing: "swing",
            aspectRatio: !1,
            autoHide: !1,
            classes: {"ui-resizable-se": "ui-icon ui-icon-gripsmall-diagonal-se"},
            containment: !1,
            ghost: !1,
            grid: !1,
            handles: "e,s,se",
            helper: !1,
            maxHeight: null,
            maxWidth: null,
            minHeight: 10,
            minWidth: 10,
            zIndex: 90,
            resize: null,
            start: null,
            stop: null
        },
        _num: function (t) {
            return parseFloat(t) || 0
        },
        _isNumber: function (t) {
            return !isNaN(parseFloat(t))
        },
        _hasScroll: function (e, i) {
            if ("hidden" === t(e).css("overflow")) return !1;
            var s = i && "left" === i ? "scrollLeft" : "scrollTop", o = !1;
            return e[s] > 0 || (e[s] = 1, o = e[s] > 0, e[s] = 0, o)
        },
        _create: function () {
            var e, i = this.options, s = this;
            this._addClass("ui-resizable"), t.extend(this, {
                _aspectRatio: !!i.aspectRatio,
                aspectRatio: i.aspectRatio,
                originalElement: this.element,
                _proportionallyResizeElements: [],
                _helper: i.helper || i.ghost || i.animate ? i.helper || "ui-resizable-helper" : null
            }), this.element[0].nodeName.match(/^(canvas|textarea|input|select|button|img)$/i) && (this.element.wrap(t("<div class='ui-wrapper' style='overflow: hidden;'></div>").css({
                position: this.element.css("position"),
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                top: this.element.css("top"),
                left: this.element.css("left")
            })), this.element = this.element.parent().data("ui-resizable", this.element.resizable("instance")), this.elementIsWrapper = !0, e = {
                marginTop: this.originalElement.css("marginTop"),
                marginRight: this.originalElement.css("marginRight"),
                marginBottom: this.originalElement.css("marginBottom"),
                marginLeft: this.originalElement.css("marginLeft")
            }, this.element.css(e), this.originalElement.css("margin", 0), this.originalResizeStyle = this.originalElement.css("resize"), this.originalElement.css("resize", "none"), this._proportionallyResizeElements.push(this.originalElement.css({
                position: "static",
                zoom: 1,
                display: "block"
            })), this.originalElement.css(e), this._proportionallyResize()), this._setupHandles(), i.autoHide && t(this.element).on("mouseenter", function () {
                i.disabled || (s._removeClass("ui-resizable-autohide"), s._handles.show())
            }).on("mouseleave", function () {
                i.disabled || s.resizing || (s._addClass("ui-resizable-autohide"), s._handles.hide())
            }), this._mouseInit()
        },
        _destroy: function () {
            this._mouseDestroy();
            var e, i = function (e) {
                t(e).removeData("resizable").removeData("ui-resizable").off(".resizable").find(".ui-resizable-handle").remove()
            };
            return this.elementIsWrapper && (i(this.element), e = this.element, this.originalElement.css({
                position: e.css("position"),
                width: e.outerWidth(),
                height: e.outerHeight(),
                top: e.css("top"),
                left: e.css("left")
            }).insertAfter(e), e.remove()), this.originalElement.css("resize", this.originalResizeStyle), i(this.originalElement), this
        },
        _setOption: function (t, e) {
            switch (this._super(t, e), t) {
                case "handles":
                    this._removeHandles(), this._setupHandles()
            }
        },
        _setupHandles: function () {
            var e, i, s, o, n, a = this.options, r = this;
            if (this.handles = a.handles || (t(".ui-resizable-handle", this.element).length ? {
                n: ".ui-resizable-n",
                e: ".ui-resizable-e",
                s: ".ui-resizable-s",
                w: ".ui-resizable-w",
                se: ".ui-resizable-se",
                sw: ".ui-resizable-sw",
                ne: ".ui-resizable-ne",
                nw: ".ui-resizable-nw"
            } : "e,s,se"), this._handles = t(), this.handles.constructor === String) for ("all" === this.handles && (this.handles = "n,e,s,w,se,sw,ne,nw"), s = this.handles.split(","), this.handles = {}, i = 0; s.length > i; i++) e = t.trim(s[i]), o = "ui-resizable-" + e, n = t("<div>"), this._addClass(n, "ui-resizable-handle " + o), n.css({zIndex: a.zIndex}), this.handles[e] = ".ui-resizable-" + e, this.element.append(n);
            this._renderAxis = function (e) {
                var i, s, o, n;
                e = e || this.element;
                for (i in this.handles) this.handles[i].constructor === String ? this.handles[i] = this.element.children(this.handles[i]).first().show() : (this.handles[i].jquery || this.handles[i].nodeType) && (this.handles[i] = t(this.handles[i]), this._on(this.handles[i], {mousedown: r._mouseDown})), this.elementIsWrapper && this.originalElement[0].nodeName.match(/^(textarea|input|select|button)$/i) && (s = t(this.handles[i], this.element), n = /sw|ne|nw|se|n|s/.test(i) ? s.outerHeight() : s.outerWidth(), o = ["padding", /ne|nw|n/.test(i) ? "Top" : /se|sw|s/.test(i) ? "Bottom" : /^e$/.test(i) ? "Right" : "Left"].join(""), e.css(o, n), this._proportionallyResize()), this._handles = this._handles.add(this.handles[i])
            }, this._renderAxis(this.element), this._handles = this._handles.add(this.element.find(".ui-resizable-handle")), this._handles.disableSelection(), this._handles.on("mouseover", function () {
                r.resizing || (this.className && (n = this.className.match(/ui-resizable-(se|sw|ne|nw|n|e|s|w)/i)), r.axis = n && n[1] ? n[1] : "se")
            }), a.autoHide && (this._handles.hide(), this._addClass("ui-resizable-autohide"))
        },
        _removeHandles: function () {
            this._handles.remove()
        },
        _mouseCapture: function (e) {
            var i, s, o = !1;
            for (i in this.handles) s = t(this.handles[i])[0], (s === e.target || t.contains(s, e.target)) && (o = !0);
            return !this.options.disabled && o
        },
        _mouseStart: function (e) {
            var i, s, o, n = this.options, a = this.element;
            return this.resizing = !0, this._renderProxy(), i = this._num(this.helper.css("left")), s = this._num(this.helper.css("top")), n.containment && (i += t(n.containment).scrollLeft() || 0, s += t(n.containment).scrollTop() || 0), this.offset = this.helper.offset(), this.position = {
                left: i,
                top: s
            }, this.size = this._helper ? {
                width: this.helper.width(),
                height: this.helper.height()
            } : {width: a.width(), height: a.height()}, this.originalSize = this._helper ? {
                width: a.outerWidth(),
                height: a.outerHeight()
            } : {width: a.width(), height: a.height()}, this.sizeDiff = {
                width: a.outerWidth() - a.width(),
                height: a.outerHeight() - a.height()
            }, this.originalPosition = {left: i, top: s}, this.originalMousePosition = {
                left: e.pageX,
                top: e.pageY
            }, this.aspectRatio = "number" == typeof n.aspectRatio ? n.aspectRatio : this.originalSize.width / this.originalSize.height || 1, o = t(".ui-resizable-" + this.axis).css("cursor"), t("body").css("cursor", "auto" === o ? this.axis + "-resize" : o), this._addClass("ui-resizable-resizing"), this._propagate("start", e), !0
        },
        _mouseDrag: function (e) {
            var i, s, o = this.originalMousePosition, n = this.axis, a = e.pageX - o.left || 0,
                r = e.pageY - o.top || 0, l = this._change[n];
            return this._updatePrevProperties(), !!l && (i = l.apply(this, [e, a, r]), this._updateVirtualBoundaries(e.shiftKey), (this._aspectRatio || e.shiftKey) && (i = this._updateRatio(i, e)), i = this._respectSize(i, e), this._updateCache(i), this._propagate("resize", e), s = this._applyChanges(), !this._helper && this._proportionallyResizeElements.length && this._proportionallyResize(), t.isEmptyObject(s) || (this._updatePrevProperties(), this._trigger("resize", e, this.ui()), this._applyChanges()), !1)
        },
        _mouseStop: function (e) {
            this.resizing = !1;
            var i, s, o, n, a, r, l, h = this.options, c = this;
            return this._helper && (o = (s = (i = this._proportionallyResizeElements).length && /textarea/i.test(i[0].nodeName)) && this._hasScroll(i[0], "left") ? 0 : c.sizeDiff.height, n = s ? 0 : c.sizeDiff.width, a = {
                width: c.helper.width() - n,
                height: c.helper.height() - o
            }, r = parseFloat(c.element.css("left")) + (c.position.left - c.originalPosition.left) || null, l = parseFloat(c.element.css("top")) + (c.position.top - c.originalPosition.top) || null, h.animate || this.element.css(t.extend(a, {
                top: l,
                left: r
            })), c.helper.height(c.size.height), c.helper.width(c.size.width), this._helper && !h.animate && this._proportionallyResize()), t("body").css("cursor", "auto"), this._removeClass("ui-resizable-resizing"), this._propagate("stop", e), this._helper && this.helper.remove(), !1
        },
        _updatePrevProperties: function () {
            this.prevPosition = {
                top: this.position.top,
                left: this.position.left
            }, this.prevSize = {width: this.size.width, height: this.size.height}
        },
        _applyChanges: function () {
            var t = {};
            return this.position.top !== this.prevPosition.top && (t.top = this.position.top + "px"), this.position.left !== this.prevPosition.left && (t.left = this.position.left + "px"), this.size.width !== this.prevSize.width && (t.width = this.size.width + "px"), this.size.height !== this.prevSize.height && (t.height = this.size.height + "px"), this.helper.css(t), t
        },
        _updateVirtualBoundaries: function (t) {
            var e, i, s, o, n, a = this.options;
            n = {
                minWidth: this._isNumber(a.minWidth) ? a.minWidth : 0,
                maxWidth: this._isNumber(a.maxWidth) ? a.maxWidth : 1 / 0,
                minHeight: this._isNumber(a.minHeight) ? a.minHeight : 0,
                maxHeight: this._isNumber(a.maxHeight) ? a.maxHeight : 1 / 0
            }, (this._aspectRatio || t) && (e = n.minHeight * this.aspectRatio, s = n.minWidth / this.aspectRatio, i = n.maxHeight * this.aspectRatio, o = n.maxWidth / this.aspectRatio, e > n.minWidth && (n.minWidth = e), s > n.minHeight && (n.minHeight = s), n.maxWidth > i && (n.maxWidth = i), n.maxHeight > o && (n.maxHeight = o)), this._vBoundaries = n
        },
        _updateCache: function (t) {
            this.offset = this.helper.offset(), this._isNumber(t.left) && (this.position.left = t.left), this._isNumber(t.top) && (this.position.top = t.top), this._isNumber(t.height) && (this.size.height = t.height), this._isNumber(t.width) && (this.size.width = t.width)
        },
        _updateRatio: function (t) {
            var e = this.position, i = this.size, s = this.axis;
            return this._isNumber(t.height) ? t.width = t.height * this.aspectRatio : this._isNumber(t.width) && (t.height = t.width / this.aspectRatio), "sw" === s && (t.left = e.left + (i.width - t.width), t.top = null), "nw" === s && (t.top = e.top + (i.height - t.height), t.left = e.left + (i.width - t.width)), t
        },
        _respectSize: function (t) {
            var e = this._vBoundaries, i = this.axis, s = this._isNumber(t.width) && e.maxWidth && e.maxWidth < t.width,
                o = this._isNumber(t.height) && e.maxHeight && e.maxHeight < t.height,
                n = this._isNumber(t.width) && e.minWidth && e.minWidth > t.width,
                a = this._isNumber(t.height) && e.minHeight && e.minHeight > t.height,
                r = this.originalPosition.left + this.originalSize.width,
                l = this.originalPosition.top + this.originalSize.height, h = /sw|nw|w/.test(i), c = /nw|ne|n/.test(i);
            return n && (t.width = e.minWidth), a && (t.height = e.minHeight), s && (t.width = e.maxWidth), o && (t.height = e.maxHeight), n && h && (t.left = r - e.minWidth), s && h && (t.left = r - e.maxWidth), a && c && (t.top = l - e.minHeight), o && c && (t.top = l - e.maxHeight), t.width || t.height || t.left || !t.top ? t.width || t.height || t.top || !t.left || (t.left = null) : t.top = null, t
        },
        _getPaddingPlusBorderDimensions: function (t) {
            for (var e = 0, i = [], s = [t.css("borderTopWidth"), t.css("borderRightWidth"), t.css("borderBottomWidth"), t.css("borderLeftWidth")], o = [t.css("paddingTop"), t.css("paddingRight"), t.css("paddingBottom"), t.css("paddingLeft")]; 4 > e; e++) i[e] = parseFloat(s[e]) || 0, i[e] += parseFloat(o[e]) || 0;
            return {height: i[0] + i[2], width: i[1] + i[3]}
        },
        _proportionallyResize: function () {
            if (this._proportionallyResizeElements.length) for (var t, e = 0, i = this.helper || this.element; this._proportionallyResizeElements.length > e; e++) t = this._proportionallyResizeElements[e], this.outerDimensions || (this.outerDimensions = this._getPaddingPlusBorderDimensions(t)), t.css({
                height: i.height() - this.outerDimensions.height || 0,
                width: i.width() - this.outerDimensions.width || 0
            })
        },
        _renderProxy: function () {
            var e = this.element, i = this.options;
            this.elementOffset = e.offset(), this._helper ? (this.helper = this.helper || t("<div style='overflow:hidden;'></div>"), this._addClass(this.helper, this._helper), this.helper.css({
                width: this.element.outerWidth(),
                height: this.element.outerHeight(),
                position: "absolute",
                left: this.elementOffset.left + "px",
                top: this.elementOffset.top + "px",
                zIndex: ++i.zIndex
            }), this.helper.appendTo("body").disableSelection()) : this.helper = this.element
        },
        _change: {
            e: function (t, e) {
                return {width: this.originalSize.width + e}
            }, w: function (t, e) {
                var i = this.originalSize;
                return {left: this.originalPosition.left + e, width: i.width - e}
            }, n: function (t, e, i) {
                var s = this.originalSize;
                return {top: this.originalPosition.top + i, height: s.height - i}
            }, s: function (t, e, i) {
                return {height: this.originalSize.height + i}
            }, se: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, sw: function (e, i, s) {
                return t.extend(this._change.s.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }, ne: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.e.apply(this, [e, i, s]))
            }, nw: function (e, i, s) {
                return t.extend(this._change.n.apply(this, arguments), this._change.w.apply(this, [e, i, s]))
            }
        },
        _propagate: function (e, i) {
            t.ui.plugin.call(this, e, [i, this.ui()]), "resize" !== e && this._trigger(e, i, this.ui())
        },
        plugins: {},
        ui: function () {
            return {
                originalElement: this.originalElement,
                element: this.element,
                helper: this.helper,
                position: this.position,
                size: this.size,
                originalSize: this.originalSize,
                originalPosition: this.originalPosition
            }
        }
    }), t.ui.plugin.add("resizable", "animate", {
        stop: function (e) {
            var i = t(this).resizable("instance"), s = i.options, o = i._proportionallyResizeElements,
                n = o.length && /textarea/i.test(o[0].nodeName),
                a = n && i._hasScroll(o[0], "left") ? 0 : i.sizeDiff.height, r = n ? 0 : i.sizeDiff.width,
                l = {width: i.size.width - r, height: i.size.height - a},
                h = parseFloat(i.element.css("left")) + (i.position.left - i.originalPosition.left) || null,
                c = parseFloat(i.element.css("top")) + (i.position.top - i.originalPosition.top) || null;
            i.element.animate(t.extend(l, c && h ? {top: c, left: h} : {}), {
                duration: s.animateDuration,
                easing: s.animateEasing,
                step: function () {
                    var s = {
                        width: parseFloat(i.element.css("width")),
                        height: parseFloat(i.element.css("height")),
                        top: parseFloat(i.element.css("top")),
                        left: parseFloat(i.element.css("left"))
                    };
                    o && o.length && t(o[0]).css({
                        width: s.width,
                        height: s.height
                    }), i._updateCache(s), i._propagate("resize", e)
                }
            })
        }
    }), t.ui.plugin.add("resizable", "containment", {
        start: function () {
            var e, i, s, o, n, a, r, l = t(this).resizable("instance"), h = l.options, c = l.element, d = h.containment,
                u = d instanceof t ? d.get(0) : /parent/.test(d) ? c.parent().get(0) : d;
            u && (l.containerElement = t(u), /document/.test(d) || d === document ? (l.containerOffset = {
                left: 0,
                top: 0
            }, l.containerPosition = {left: 0, top: 0}, l.parentData = {
                element: t(document),
                left: 0,
                top: 0,
                width: t(document).width(),
                height: t(document).height() || document.body.parentNode.scrollHeight
            }) : (e = t(u), i = [], t(["Top", "Right", "Left", "Bottom"]).each(function (t, s) {
                i[t] = l._num(e.css("padding" + s))
            }), l.containerOffset = e.offset(), l.containerPosition = e.position(), l.containerSize = {
                height: e.innerHeight() - i[3],
                width: e.innerWidth() - i[1]
            }, s = l.containerOffset, o = l.containerSize.height, n = l.containerSize.width, a = l._hasScroll(u, "left") ? u.scrollWidth : n, r = l._hasScroll(u) ? u.scrollHeight : o, l.parentData = {
                element: u,
                left: s.left,
                top: s.top,
                width: a,
                height: r
            }))
        }, resize: function (e) {
            var i, s, o, n, a = t(this).resizable("instance"), r = a.options, l = a.containerOffset, h = a.position,
                c = a._aspectRatio || e.shiftKey, d = {top: 0, left: 0}, u = a.containerElement, p = !0;
            u[0] !== document && /static/.test(u.css("position")) && (d = l), h.left < (a._helper ? l.left : 0) && (a.size.width = a.size.width + (a._helper ? a.position.left - l.left : a.position.left - d.left), c && (a.size.height = a.size.width / a.aspectRatio, p = !1), a.position.left = r.helper ? l.left : 0), h.top < (a._helper ? l.top : 0) && (a.size.height = a.size.height + (a._helper ? a.position.top - l.top : a.position.top), c && (a.size.width = a.size.height * a.aspectRatio, p = !1), a.position.top = a._helper ? l.top : 0), o = a.containerElement.get(0) === a.element.parent().get(0), n = /relative|absolute/.test(a.containerElement.css("position")), o && n ? (a.offset.left = a.parentData.left + a.position.left, a.offset.top = a.parentData.top + a.position.top) : (a.offset.left = a.element.offset().left, a.offset.top = a.element.offset().top), i = Math.abs(a.sizeDiff.width + (a._helper ? a.offset.left - d.left : a.offset.left - l.left)), s = Math.abs(a.sizeDiff.height + (a._helper ? a.offset.top - d.top : a.offset.top - l.top)), i + a.size.width >= a.parentData.width && (a.size.width = a.parentData.width - i, c && (a.size.height = a.size.width / a.aspectRatio, p = !1)), s + a.size.height >= a.parentData.height && (a.size.height = a.parentData.height - s, c && (a.size.width = a.size.height * a.aspectRatio, p = !1)), p || (a.position.left = a.prevPosition.left, a.position.top = a.prevPosition.top, a.size.width = a.prevSize.width, a.size.height = a.prevSize.height)
        }, stop: function () {
            var e = t(this).resizable("instance"), i = e.options, s = e.containerOffset, o = e.containerPosition,
                n = e.containerElement, a = t(e.helper), r = a.offset(), l = a.outerWidth() - e.sizeDiff.width,
                h = a.outerHeight() - e.sizeDiff.height;
            e._helper && !i.animate && /relative/.test(n.css("position")) && t(this).css({
                left: r.left - o.left - s.left,
                width: l,
                height: h
            }), e._helper && !i.animate && /static/.test(n.css("position")) && t(this).css({
                left: r.left - o.left - s.left,
                width: l,
                height: h
            })
        }
    }), t.ui.plugin.add("resizable", "alsoResize", {
        start: function () {
            var e = t(this).resizable("instance").options;
            t(e.alsoResize).each(function () {
                var e = t(this);
                e.data("ui-resizable-alsoresize", {
                    width: parseFloat(e.width()),
                    height: parseFloat(e.height()),
                    left: parseFloat(e.css("left")),
                    top: parseFloat(e.css("top"))
                })
            })
        }, resize: function (e, i) {
            var s = t(this).resizable("instance"), o = s.options, n = s.originalSize, a = s.originalPosition, r = {
                height: s.size.height - n.height || 0,
                width: s.size.width - n.width || 0,
                top: s.position.top - a.top || 0,
                left: s.position.left - a.left || 0
            };
            t(o.alsoResize).each(function () {
                var e = t(this), s = t(this).data("ui-resizable-alsoresize"), o = {},
                    n = e.parents(i.originalElement[0]).length ? ["width", "height"] : ["width", "height", "top", "left"];
                t.each(n, function (t, e) {
                    var i = (s[e] || 0) + (r[e] || 0);
                    i && i >= 0 && (o[e] = i || null)
                }), e.css(o)
            })
        }, stop: function () {
            t(this).removeData("ui-resizable-alsoresize")
        }
    }), t.ui.plugin.add("resizable", "ghost", {
        start: function () {
            var e = t(this).resizable("instance"), i = e.size;
            e.ghost = e.originalElement.clone(), e.ghost.css({
                opacity: .25,
                display: "block",
                position: "relative",
                height: i.height,
                width: i.width,
                margin: 0,
                left: 0,
                top: 0
            }), e._addClass(e.ghost, "ui-resizable-ghost"), !1 !== t.uiBackCompat && "string" == typeof e.options.ghost && e.ghost.addClass(this.options.ghost), e.ghost.appendTo(e.helper)
        }, resize: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.ghost.css({position: "relative", height: e.size.height, width: e.size.width})
        }, stop: function () {
            var e = t(this).resizable("instance");
            e.ghost && e.helper && e.helper.get(0).removeChild(e.ghost.get(0))
        }
    }), t.ui.plugin.add("resizable", "grid", {
        resize: function () {
            var e, i = t(this).resizable("instance"), s = i.options, o = i.size, n = i.originalSize,
                a = i.originalPosition, r = i.axis, l = "number" == typeof s.grid ? [s.grid, s.grid] : s.grid,
                h = l[0] || 1, c = l[1] || 1, d = Math.round((o.width - n.width) / h) * h,
                u = Math.round((o.height - n.height) / c) * c, p = n.width + d, f = n.height + u,
                m = s.maxWidth && p > s.maxWidth, g = s.maxHeight && f > s.maxHeight, v = s.minWidth && s.minWidth > p,
                y = s.minHeight && s.minHeight > f;
            s.grid = l, v && (p += h), y && (f += c), m && (p -= h), g && (f -= c), /^(se|s|e)$/.test(r) ? (i.size.width = p, i.size.height = f) : /^(ne)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.top = a.top - u) : /^(sw)$/.test(r) ? (i.size.width = p, i.size.height = f, i.position.left = a.left - d) : ((0 >= f - c || 0 >= p - h) && (e = i._getPaddingPlusBorderDimensions(this)), f - c > 0 ? (i.size.height = f, i.position.top = a.top - u) : (f = c - e.height, i.size.height = f, i.position.top = a.top + n.height - f), p - h > 0 ? (i.size.width = p, i.position.left = a.left - d) : (p = h - e.width, i.size.width = p, i.position.left = a.left + n.width - p))
        }
    }), t.ui.resizable, t.widget("ui.selectable", t.ui.mouse, {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoRefresh: !0,
            distance: 0,
            filter: "*",
            tolerance: "touch",
            selected: null,
            selecting: null,
            start: null,
            stop: null,
            unselected: null,
            unselecting: null
        },
        _create: function () {
            var e = this;
            this._addClass("ui-selectable"), this.dragged = !1, this.refresh = function () {
                e.elementPos = t(e.element[0]).offset(), e.selectees = t(e.options.filter, e.element[0]), e._addClass(e.selectees, "ui-selectee"), e.selectees.each(function () {
                    var i = t(this), s = i.offset(),
                        o = {left: s.left - e.elementPos.left, top: s.top - e.elementPos.top};
                    t.data(this, "selectable-item", {
                        element: this,
                        $element: i,
                        left: o.left,
                        top: o.top,
                        right: o.left + i.outerWidth(),
                        bottom: o.top + i.outerHeight(),
                        startselected: !1,
                        selected: i.hasClass("ui-selected"),
                        selecting: i.hasClass("ui-selecting"),
                        unselecting: i.hasClass("ui-unselecting")
                    })
                })
            }, this.refresh(), this._mouseInit(), this.helper = t("<div>"), this._addClass(this.helper, "ui-selectable-helper")
        },
        _destroy: function () {
            this.selectees.removeData("selectable-item"), this._mouseDestroy()
        },
        _mouseStart: function (e) {
            var i = this, s = this.options;
            this.opos = [e.pageX, e.pageY], this.elementPos = t(this.element[0]).offset(), this.options.disabled || (this.selectees = t(s.filter, this.element[0]), this._trigger("start", e), t(s.appendTo).append(this.helper), this.helper.css({
                left: e.pageX,
                top: e.pageY,
                width: 0,
                height: 0
            }), s.autoRefresh && this.refresh(), this.selectees.filter(".ui-selected").each(function () {
                var s = t.data(this, "selectable-item");
                s.startselected = !0, e.metaKey || e.ctrlKey || (i._removeClass(s.$element, "ui-selected"), s.selected = !1, i._addClass(s.$element, "ui-unselecting"), s.unselecting = !0, i._trigger("unselecting", e, {unselecting: s.element}))
            }), t(e.target).parents().addBack().each(function () {
                var s, o = t.data(this, "selectable-item");
                return o ? (s = !e.metaKey && !e.ctrlKey || !o.$element.hasClass("ui-selected"), i._removeClass(o.$element, s ? "ui-unselecting" : "ui-selected")._addClass(o.$element, s ? "ui-selecting" : "ui-unselecting"), o.unselecting = !s, o.selecting = s, o.selected = s, s ? i._trigger("selecting", e, {selecting: o.element}) : i._trigger("unselecting", e, {unselecting: o.element}), !1) : void 0
            }))
        },
        _mouseDrag: function (e) {
            if (this.dragged = !0, !this.options.disabled) {
                var i, s = this, o = this.options, n = this.opos[0], a = this.opos[1], r = e.pageX, l = e.pageY;
                return n > r && (i = r, r = n, n = i), a > l && (i = l, l = a, a = i), this.helper.css({
                    left: n,
                    top: a,
                    width: r - n,
                    height: l - a
                }), this.selectees.each(function () {
                    var i = t.data(this, "selectable-item"), h = !1, c = {};
                    i && i.element !== s.element[0] && (c.left = i.left + s.elementPos.left, c.right = i.right + s.elementPos.left, c.top = i.top + s.elementPos.top, c.bottom = i.bottom + s.elementPos.top, "touch" === o.tolerance ? h = !(c.left > r || n > c.right || c.top > l || a > c.bottom) : "fit" === o.tolerance && (h = c.left > n && r > c.right && c.top > a && l > c.bottom), h ? (i.selected && (s._removeClass(i.$element, "ui-selected"), i.selected = !1), i.unselecting && (s._removeClass(i.$element, "ui-unselecting"), i.unselecting = !1), i.selecting || (s._addClass(i.$element, "ui-selecting"), i.selecting = !0, s._trigger("selecting", e, {selecting: i.element}))) : (i.selecting && ((e.metaKey || e.ctrlKey) && i.startselected ? (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, s._addClass(i.$element, "ui-selected"), i.selected = !0) : (s._removeClass(i.$element, "ui-selecting"), i.selecting = !1, i.startselected && (s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0), s._trigger("unselecting", e, {unselecting: i.element}))), i.selected && (e.metaKey || e.ctrlKey || i.startselected || (s._removeClass(i.$element, "ui-selected"), i.selected = !1, s._addClass(i.$element, "ui-unselecting"), i.unselecting = !0, s._trigger("unselecting", e, {unselecting: i.element})))))
                }), !1
            }
        },
        _mouseStop: function (e) {
            var i = this;
            return this.dragged = !1, t(".ui-unselecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-unselecting"), s.unselecting = !1, s.startselected = !1, i._trigger("unselected", e, {unselected: s.element})
            }), t(".ui-selecting", this.element[0]).each(function () {
                var s = t.data(this, "selectable-item");
                i._removeClass(s.$element, "ui-selecting")._addClass(s.$element, "ui-selected"), s.selecting = !1, s.selected = !0, s.startselected = !0, i._trigger("selected", e, {selected: s.element})
            }), this._trigger("stop", e), this.helper.remove(), !1
        }
    }), t.widget("ui.sortable", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "sort",
        ready: !1,
        options: {
            appendTo: "parent",
            axis: !1,
            connectWith: !1,
            containment: !1,
            cursor: "auto",
            cursorAt: !1,
            dropOnEmpty: !0,
            forcePlaceholderSize: !1,
            forceHelperSize: !1,
            grid: !1,
            handle: !1,
            helper: "original",
            items: "> *",
            opacity: !1,
            placeholder: !1,
            revert: !1,
            scroll: !0,
            scrollSensitivity: 20,
            scrollSpeed: 20,
            scope: "default",
            tolerance: "intersect",
            zIndex: 1e3,
            activate: null,
            beforeStop: null,
            change: null,
            deactivate: null,
            out: null,
            over: null,
            receive: null,
            remove: null,
            sort: null,
            start: null,
            stop: null,
            update: null
        },
        _isOverAxis: function (t, e, i) {
            return t >= e && e + i > t
        },
        _isFloating: function (t) {
            return /left|right/.test(t.css("float")) || /inline|table-cell/.test(t.css("display"))
        },
        _create: function () {
            this.containerCache = {}, this._addClass("ui-sortable"), this.refresh(), this.offset = this.element.offset(), this._mouseInit(), this._setHandleClassName(), this.ready = !0
        },
        _setOption: function (t, e) {
            this._super(t, e), "handle" === t && this._setHandleClassName()
        },
        _setHandleClassName: function () {
            var e = this;
            this._removeClass(this.element.find(".ui-sortable-handle"), "ui-sortable-handle"), t.each(this.items, function () {
                e._addClass(this.instance.options.handle ? this.item.find(this.instance.options.handle) : this.item, "ui-sortable-handle")
            })
        },
        _destroy: function () {
            this._mouseDestroy();
            for (var t = this.items.length - 1; t >= 0; t--) this.items[t].item.removeData(this.widgetName + "-item");
            return this
        },
        _mouseCapture: function (e, i) {
            var s = null, o = !1, n = this;
            return !this.reverting && (!this.options.disabled && "static" !== this.options.type && (this._refreshItems(e), t(e.target).parents().each(function () {
                return t.data(this, n.widgetName + "-item") === n ? (s = t(this), !1) : void 0
            }), t.data(e.target, n.widgetName + "-item") === n && (s = t(e.target)), !!s && (!(this.options.handle && !i && (t(this.options.handle, s).find("*").addBack().each(function () {
                this === e.target && (o = !0)
            }), !o)) && (this.currentItem = s, this._removeCurrentsFromItems(), !0))))
        },
        _mouseStart: function (e, i, s) {
            var o, n, a = this.options;
            if (this.currentContainer = this, this.refreshPositions(), this.helper = this._createHelper(e), this._cacheHelperProportions(), this._cacheMargins(), this.scrollParent = this.helper.scrollParent(), this.offset = this.currentItem.offset(), this.offset = {
                top: this.offset.top - this.margins.top,
                left: this.offset.left - this.margins.left
            }, t.extend(this.offset, {
                click: {left: e.pageX - this.offset.left, top: e.pageY - this.offset.top},
                parent: this._getParentOffset(),
                relative: this._getRelativeOffset()
            }), this.helper.css("position", "absolute"), this.cssPosition = this.helper.css("position"), this.originalPosition = this._generatePosition(e), this.originalPageX = e.pageX, this.originalPageY = e.pageY, a.cursorAt && this._adjustOffsetFromHelper(a.cursorAt), this.domPosition = {
                prev: this.currentItem.prev()[0],
                parent: this.currentItem.parent()[0]
            }, this.helper[0] !== this.currentItem[0] && this.currentItem.hide(), this._createPlaceholder(), a.containment && this._setContainment(), a.cursor && "auto" !== a.cursor && (n = this.document.find("body"), this.storedCursor = n.css("cursor"), n.css("cursor", a.cursor), this.storedStylesheet = t("<style>*{ cursor: " + a.cursor + " !important; }</style>").appendTo(n)), a.opacity && (this.helper.css("opacity") && (this._storedOpacity = this.helper.css("opacity")), this.helper.css("opacity", a.opacity)), a.zIndex && (this.helper.css("zIndex") && (this._storedZIndex = this.helper.css("zIndex")), this.helper.css("zIndex", a.zIndex)), this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName && (this.overflowOffset = this.scrollParent.offset()), this._trigger("start", e, this._uiHash()), this._preserveHelperProportions || this._cacheHelperProportions(), !s) for (o = this.containers.length - 1; o >= 0; o--) this.containers[o]._trigger("activate", e, this._uiHash(this));
            return t.ui.ddmanager && (t.ui.ddmanager.current = this), t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e), this.dragging = !0, this._addClass(this.helper, "ui-sortable-helper"), this._mouseDrag(e), !0
        },
        _mouseDrag: function (e) {
            var i, s, o, n, a = this.options, r = !1;
            for (this.position = this._generatePosition(e), this.positionAbs = this._convertPositionTo("absolute"), this.lastPositionAbs || (this.lastPositionAbs = this.positionAbs), this.options.scroll && (this.scrollParent[0] !== this.document[0] && "HTML" !== this.scrollParent[0].tagName ? (this.overflowOffset.top + this.scrollParent[0].offsetHeight - e.pageY < a.scrollSensitivity ? this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop + a.scrollSpeed : e.pageY - this.overflowOffset.top < a.scrollSensitivity && (this.scrollParent[0].scrollTop = r = this.scrollParent[0].scrollTop - a.scrollSpeed), this.overflowOffset.left + this.scrollParent[0].offsetWidth - e.pageX < a.scrollSensitivity ? this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft + a.scrollSpeed : e.pageX - this.overflowOffset.left < a.scrollSensitivity && (this.scrollParent[0].scrollLeft = r = this.scrollParent[0].scrollLeft - a.scrollSpeed)) : (e.pageY - this.document.scrollTop() < a.scrollSensitivity ? r = this.document.scrollTop(this.document.scrollTop() - a.scrollSpeed) : this.window.height() - (e.pageY - this.document.scrollTop()) < a.scrollSensitivity && (r = this.document.scrollTop(this.document.scrollTop() + a.scrollSpeed)), e.pageX - this.document.scrollLeft() < a.scrollSensitivity ? r = this.document.scrollLeft(this.document.scrollLeft() - a.scrollSpeed) : this.window.width() - (e.pageX - this.document.scrollLeft()) < a.scrollSensitivity && (r = this.document.scrollLeft(this.document.scrollLeft() + a.scrollSpeed))), !1 !== r && t.ui.ddmanager && !a.dropBehaviour && t.ui.ddmanager.prepareOffsets(this, e)), this.positionAbs = this._convertPositionTo("absolute"), this.options.axis && "y" === this.options.axis || (this.helper[0].style.left = this.position.left + "px"), this.options.axis && "x" === this.options.axis || (this.helper[0].style.top = this.position.top + "px"), i = this.items.length - 1; i >= 0; i--) if (s = this.items[i], o = s.item[0], n = this._intersectsWithPointer(s), n && s.instance === this.currentContainer && o !== this.currentItem[0] && this.placeholder[1 === n ? "next" : "prev"]()[0] !== o && !t.contains(this.placeholder[0], o) && ("semi-dynamic" !== this.options.type || !t.contains(this.element[0], o))) {
                if (this.direction = 1 === n ? "down" : "up", "pointer" !== this.options.tolerance && !this._intersectsWithSides(s)) break;
                this._rearrange(e, s), this._trigger("change", e, this._uiHash());
                break
            }
            return this._contactContainers(e), t.ui.ddmanager && t.ui.ddmanager.drag(this, e), this._trigger("sort", e, this._uiHash()), this.lastPositionAbs = this.positionAbs, !1
        },
        _mouseStop: function (e, i) {
            if (e) {
                if (t.ui.ddmanager && !this.options.dropBehaviour && t.ui.ddmanager.drop(this, e), this.options.revert) {
                    var s = this, o = this.placeholder.offset(), n = this.options.axis, a = {};
                    n && "x" !== n || (a.left = o.left - this.offset.parent.left - this.margins.left + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollLeft)), n && "y" !== n || (a.top = o.top - this.offset.parent.top - this.margins.top + (this.offsetParent[0] === this.document[0].body ? 0 : this.offsetParent[0].scrollTop)), this.reverting = !0, t(this.helper).animate(a, parseInt(this.options.revert, 10) || 500, function () {
                        s._clear(e)
                    })
                } else this._clear(e, i);
                return !1
            }
        },
        cancel: function () {
            if (this.dragging) {
                this._mouseUp(new t.Event("mouseup", {target: null})), "original" === this.options.helper ? (this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")) : this.currentItem.show();
                for (var e = this.containers.length - 1; e >= 0; e--) this.containers[e]._trigger("deactivate", null, this._uiHash(this)), this.containers[e].containerCache.over && (this.containers[e]._trigger("out", null, this._uiHash(this)), this.containers[e].containerCache.over = 0)
            }
            return this.placeholder && (this.placeholder[0].parentNode && this.placeholder[0].parentNode.removeChild(this.placeholder[0]), "original" !== this.options.helper && this.helper && this.helper[0].parentNode && this.helper.remove(), t.extend(this, {
                helper: null,
                dragging: !1,
                reverting: !1,
                _noFinalSort: null
            }), this.domPosition.prev ? t(this.domPosition.prev).after(this.currentItem) : t(this.domPosition.parent).prepend(this.currentItem)), this
        },
        serialize: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, t(i).each(function () {
                var i = (t(e.item || this).attr(e.attribute || "id") || "").match(e.expression || /(.+)[\-=_](.+)/);
                i && s.push((e.key || i[1] + "[]") + "=" + (e.key && e.expression ? i[1] : i[2]))
            }), !s.length && e.key && s.push(e.key + "="), s.join("&")
        },
        toArray: function (e) {
            var i = this._getItemsAsjQuery(e && e.connected), s = [];
            return e = e || {}, i.each(function () {
                s.push(t(e.item || this).attr(e.attribute || "id") || "")
            }), s
        },
        _intersectsWith: function (t) {
            var e = this.positionAbs.left, i = e + this.helperProportions.width, s = this.positionAbs.top,
                o = s + this.helperProportions.height, n = t.left, a = n + t.width, r = t.top, l = r + t.height,
                h = this.offset.click.top, c = this.offset.click.left,
                d = "x" === this.options.axis || s + h > r && l > s + h,
                u = "y" === this.options.axis || e + c > n && a > e + c, p = d && u;
            return "pointer" === this.options.tolerance || this.options.forcePointerForContainers || "pointer" !== this.options.tolerance && this.helperProportions[this.floating ? "width" : "height"] > t[this.floating ? "width" : "height"] ? p : e + this.helperProportions.width / 2 > n && a > i - this.helperProportions.width / 2 && s + this.helperProportions.height / 2 > r && l > o - this.helperProportions.height / 2
        },
        _intersectsWithPointer: function (t) {
            var e, i,
                s = "x" === this.options.axis || this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top, t.height),
                o = "y" === this.options.axis || this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left, t.width);
            return !!(s && o) && (e = this._getDragVerticalDirection(), i = this._getDragHorizontalDirection(), this.floating ? "right" === i || "down" === e ? 2 : 1 : e && ("down" === e ? 2 : 1))
        },
        _intersectsWithSides: function (t) {
            var e = this._isOverAxis(this.positionAbs.top + this.offset.click.top, t.top + t.height / 2, t.height),
                i = this._isOverAxis(this.positionAbs.left + this.offset.click.left, t.left + t.width / 2, t.width),
                s = this._getDragVerticalDirection(), o = this._getDragHorizontalDirection();
            return this.floating && o ? "right" === o && i || "left" === o && !i : s && ("down" === s && e || "up" === s && !e)
        },
        _getDragVerticalDirection: function () {
            var t = this.positionAbs.top - this.lastPositionAbs.top;
            return 0 !== t && (t > 0 ? "down" : "up")
        },
        _getDragHorizontalDirection: function () {
            var t = this.positionAbs.left - this.lastPositionAbs.left;
            return 0 !== t && (t > 0 ? "right" : "left")
        },
        refresh: function (t) {
            return this._refreshItems(t), this._setHandleClassName(), this.refreshPositions(), this
        },
        _connectWith: function () {
            var t = this.options;
            return t.connectWith.constructor === String ? [t.connectWith] : t.connectWith
        },
        _getItemsAsjQuery: function (e) {
            function i() {
                r.push(this)
            }

            var s, o, n, a, r = [], l = [], h = this._connectWith();
            if (h && e) for (s = h.length - 1; s >= 0; s--) for (n = t(h[s], this.document[0]), o = n.length - 1; o >= 0; o--) a = t.data(n[o], this.widgetFullName), a && a !== this && !a.options.disabled && l.push([t.isFunction(a.options.items) ? a.options.items.call(a.element) : t(a.options.items, a.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), a]);
            for (l.push([t.isFunction(this.options.items) ? this.options.items.call(this.element, null, {
                options: this.options,
                item: this.currentItem
            }) : t(this.options.items, this.element).not(".ui-sortable-helper").not(".ui-sortable-placeholder"), this]), s = l.length - 1; s >= 0; s--) l[s][0].each(i);
            return t(r)
        },
        _removeCurrentsFromItems: function () {
            var e = this.currentItem.find(":data(" + this.widgetName + "-item)");
            this.items = t.grep(this.items, function (t) {
                for (var i = 0; e.length > i; i++) if (e[i] === t.item[0]) return !1;
                return !0
            })
        },
        _refreshItems: function (e) {
            this.items = [], this.containers = [this];
            var i, s, o, n, a, r, l, h, c = this.items,
                d = [[t.isFunction(this.options.items) ? this.options.items.call(this.element[0], e, {item: this.currentItem}) : t(this.options.items, this.element), this]],
                u = this._connectWith();
            if (u && this.ready) for (i = u.length - 1; i >= 0; i--) for (o = t(u[i], this.document[0]), s = o.length - 1; s >= 0; s--) n = t.data(o[s], this.widgetFullName), n && n !== this && !n.options.disabled && (d.push([t.isFunction(n.options.items) ? n.options.items.call(n.element[0], e, {item: this.currentItem}) : t(n.options.items, n.element), n]), this.containers.push(n));
            for (i = d.length - 1; i >= 0; i--) for (a = d[i][1], r = d[i][0], s = 0, h = r.length; h > s; s++) l = t(r[s]), l.data(this.widgetName + "-item", a), c.push({
                item: l,
                instance: a,
                width: 0,
                height: 0,
                left: 0,
                top: 0
            })
        },
        refreshPositions: function (e) {
            var i, s, o, n;
            for (this.floating = !!this.items.length && ("x" === this.options.axis || this._isFloating(this.items[0].item)), this.offsetParent && this.helper && (this.offset.parent = this._getParentOffset()), i = this.items.length - 1; i >= 0; i--) s = this.items[i], s.instance !== this.currentContainer && this.currentContainer && s.item[0] !== this.currentItem[0] || (o = this.options.toleranceElement ? t(this.options.toleranceElement, s.item) : s.item, e || (s.width = o.outerWidth(), s.height = o.outerHeight()), n = o.offset(), s.left = n.left, s.top = n.top);
            if (this.options.custom && this.options.custom.refreshContainers) this.options.custom.refreshContainers.call(this); else for (i = this.containers.length - 1; i >= 0; i--) n = this.containers[i].element.offset(), this.containers[i].containerCache.left = n.left, this.containers[i].containerCache.top = n.top, this.containers[i].containerCache.width = this.containers[i].element.outerWidth(), this.containers[i].containerCache.height = this.containers[i].element.outerHeight();
            return this
        },
        _createPlaceholder: function (e) {
            var i, s = (e = e || this).options;
            s.placeholder && s.placeholder.constructor !== String || (i = s.placeholder, s.placeholder = {
                element: function () {
                    var s = e.currentItem[0].nodeName.toLowerCase(), o = t("<" + s + ">", e.document[0]);
                    return e._addClass(o, "ui-sortable-placeholder", i || e.currentItem[0].className)._removeClass(o, "ui-sortable-helper"), "tbody" === s ? e._createTrPlaceholder(e.currentItem.find("tr").eq(0), t("<tr>", e.document[0]).appendTo(o)) : "tr" === s ? e._createTrPlaceholder(e.currentItem, o) : "img" === s && o.attr("src", e.currentItem.attr("src")), i || o.css("visibility", "hidden"), o
                }, update: function (t, o) {
                    (!i || s.forcePlaceholderSize) && (o.height() || o.height(e.currentItem.innerHeight() - parseInt(e.currentItem.css("paddingTop") || 0, 10) - parseInt(e.currentItem.css("paddingBottom") || 0, 10)), o.width() || o.width(e.currentItem.innerWidth() - parseInt(e.currentItem.css("paddingLeft") || 0, 10) - parseInt(e.currentItem.css("paddingRight") || 0, 10)))
                }
            }), e.placeholder = t(s.placeholder.element.call(e.element, e.currentItem)), e.currentItem.after(e.placeholder), s.placeholder.update(e, e.placeholder)
        },
        _createTrPlaceholder: function (e, i) {
            var s = this;
            e.children().each(function () {
                t("<td>&#160;</td>", s.document[0]).attr("colspan", t(this).attr("colspan") || 1).appendTo(i)
            })
        },
        _contactContainers: function (e) {
            var i, s, o, n, a, r, l, h, c, d, u = null, p = null;
            for (i = this.containers.length - 1; i >= 0; i--) if (!t.contains(this.currentItem[0], this.containers[i].element[0])) if (this._intersectsWith(this.containers[i].containerCache)) {
                if (u && t.contains(this.containers[i].element[0], u.element[0])) continue;
                u = this.containers[i], p = i
            } else this.containers[i].containerCache.over && (this.containers[i]._trigger("out", e, this._uiHash(this)), this.containers[i].containerCache.over = 0);
            if (u) if (1 === this.containers.length) this.containers[p].containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1); else {
                for (o = 1e4, n = null, a = (c = u.floating || this._isFloating(this.currentItem)) ? "left" : "top", r = c ? "width" : "height", d = c ? "pageX" : "pageY", s = this.items.length - 1; s >= 0; s--) t.contains(this.containers[p].element[0], this.items[s].item[0]) && this.items[s].item[0] !== this.currentItem[0] && (l = this.items[s].item.offset()[a], h = !1, e[d] - l > this.items[s][r] / 2 && (h = !0), o > Math.abs(e[d] - l) && (o = Math.abs(e[d] - l), n = this.items[s], this.direction = h ? "up" : "down"));
                if (!n && !this.options.dropOnEmpty) return;
                if (this.currentContainer === this.containers[p]) return void (this.currentContainer.containerCache.over || (this.containers[p]._trigger("over", e, this._uiHash()), this.currentContainer.containerCache.over = 1));
                n ? this._rearrange(e, n, null, !0) : this._rearrange(e, null, this.containers[p].element, !0), this._trigger("change", e, this._uiHash()), this.containers[p]._trigger("change", e, this._uiHash(this)), this.currentContainer = this.containers[p], this.options.placeholder.update(this.currentContainer, this.placeholder), this.containers[p]._trigger("over", e, this._uiHash(this)), this.containers[p].containerCache.over = 1
            }
        },
        _createHelper: function (e) {
            var i = this.options,
                s = t.isFunction(i.helper) ? t(i.helper.apply(this.element[0], [e, this.currentItem])) : "clone" === i.helper ? this.currentItem.clone() : this.currentItem;
            return s.parents("body").length || t("parent" !== i.appendTo ? i.appendTo : this.currentItem[0].parentNode)[0].appendChild(s[0]), s[0] === this.currentItem[0] && (this._storedCSS = {
                width: this.currentItem[0].style.width,
                height: this.currentItem[0].style.height,
                position: this.currentItem.css("position"),
                top: this.currentItem.css("top"),
                left: this.currentItem.css("left")
            }), (!s[0].style.width || i.forceHelperSize) && s.width(this.currentItem.width()), (!s[0].style.height || i.forceHelperSize) && s.height(this.currentItem.height()), s
        },
        _adjustOffsetFromHelper: function (e) {
            "string" == typeof e && (e = e.split(" ")), t.isArray(e) && (e = {
                left: +e[0],
                top: +e[1] || 0
            }), "left" in e && (this.offset.click.left = e.left + this.margins.left), "right" in e && (this.offset.click.left = this.helperProportions.width - e.right + this.margins.left), "top" in e && (this.offset.click.top = e.top + this.margins.top), "bottom" in e && (this.offset.click.top = this.helperProportions.height - e.bottom + this.margins.top)
        },
        _getParentOffset: function () {
            this.offsetParent = this.helper.offsetParent();
            var e = this.offsetParent.offset();
            return "absolute" === this.cssPosition && this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) && (e.left += this.scrollParent.scrollLeft(), e.top += this.scrollParent.scrollTop()), (this.offsetParent[0] === this.document[0].body || this.offsetParent[0].tagName && "html" === this.offsetParent[0].tagName.toLowerCase() && t.ui.ie) && (e = {
                top: 0,
                left: 0
            }), {
                top: e.top + (parseInt(this.offsetParent.css("borderTopWidth"), 10) || 0),
                left: e.left + (parseInt(this.offsetParent.css("borderLeftWidth"), 10) || 0)
            }
        },
        _getRelativeOffset: function () {
            if ("relative" === this.cssPosition) {
                var t = this.currentItem.position();
                return {
                    top: t.top - (parseInt(this.helper.css("top"), 10) || 0) + this.scrollParent.scrollTop(),
                    left: t.left - (parseInt(this.helper.css("left"), 10) || 0) + this.scrollParent.scrollLeft()
                }
            }
            return {top: 0, left: 0}
        },
        _cacheMargins: function () {
            this.margins = {
                left: parseInt(this.currentItem.css("marginLeft"), 10) || 0,
                top: parseInt(this.currentItem.css("marginTop"), 10) || 0
            }
        },
        _cacheHelperProportions: function () {
            this.helperProportions = {width: this.helper.outerWidth(), height: this.helper.outerHeight()}
        },
        _setContainment: function () {
            var e, i, s, o = this.options;
            "parent" === o.containment && (o.containment = this.helper[0].parentNode), ("document" === o.containment || "window" === o.containment) && (this.containment = [0 - this.offset.relative.left - this.offset.parent.left, 0 - this.offset.relative.top - this.offset.parent.top, "document" === o.containment ? this.document.width() : this.window.width() - this.helperProportions.width - this.margins.left, ("document" === o.containment ? this.document.height() || document.body.parentNode.scrollHeight : this.window.height() || this.document[0].body.parentNode.scrollHeight) - this.helperProportions.height - this.margins.top]), /^(document|window|parent)$/.test(o.containment) || (e = t(o.containment)[0], i = t(o.containment).offset(), s = "hidden" !== t(e).css("overflow"), this.containment = [i.left + (parseInt(t(e).css("borderLeftWidth"), 10) || 0) + (parseInt(t(e).css("paddingLeft"), 10) || 0) - this.margins.left, i.top + (parseInt(t(e).css("borderTopWidth"), 10) || 0) + (parseInt(t(e).css("paddingTop"), 10) || 0) - this.margins.top, i.left + (s ? Math.max(e.scrollWidth, e.offsetWidth) : e.offsetWidth) - (parseInt(t(e).css("borderLeftWidth"), 10) || 0) - (parseInt(t(e).css("paddingRight"), 10) || 0) - this.helperProportions.width - this.margins.left, i.top + (s ? Math.max(e.scrollHeight, e.offsetHeight) : e.offsetHeight) - (parseInt(t(e).css("borderTopWidth"), 10) || 0) - (parseInt(t(e).css("paddingBottom"), 10) || 0) - this.helperProportions.height - this.margins.top])
        },
        _convertPositionTo: function (e, i) {
            i || (i = this.position);
            var s = "absolute" === e ? 1 : -1,
                o = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                n = /(html|body)/i.test(o[0].tagName);
            return {
                top: i.top + this.offset.relative.top * s + this.offset.parent.top * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : n ? 0 : o.scrollTop()) * s,
                left: i.left + this.offset.relative.left * s + this.offset.parent.left * s - ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : n ? 0 : o.scrollLeft()) * s
            }
        },
        _generatePosition: function (e) {
            var i, s, o = this.options, n = e.pageX, a = e.pageY,
                r = "absolute" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && t.contains(this.scrollParent[0], this.offsetParent[0]) ? this.scrollParent : this.offsetParent,
                l = /(html|body)/i.test(r[0].tagName);
            return "relative" !== this.cssPosition || this.scrollParent[0] !== this.document[0] && this.scrollParent[0] !== this.offsetParent[0] || (this.offset.relative = this._getRelativeOffset()), this.originalPosition && (this.containment && (e.pageX - this.offset.click.left < this.containment[0] && (n = this.containment[0] + this.offset.click.left), e.pageY - this.offset.click.top < this.containment[1] && (a = this.containment[1] + this.offset.click.top), e.pageX - this.offset.click.left > this.containment[2] && (n = this.containment[2] + this.offset.click.left), e.pageY - this.offset.click.top > this.containment[3] && (a = this.containment[3] + this.offset.click.top)), o.grid && (i = this.originalPageY + Math.round((a - this.originalPageY) / o.grid[1]) * o.grid[1], a = this.containment ? i - this.offset.click.top >= this.containment[1] && i - this.offset.click.top <= this.containment[3] ? i : i - this.offset.click.top >= this.containment[1] ? i - o.grid[1] : i + o.grid[1] : i, s = this.originalPageX + Math.round((n - this.originalPageX) / o.grid[0]) * o.grid[0], n = this.containment ? s - this.offset.click.left >= this.containment[0] && s - this.offset.click.left <= this.containment[2] ? s : s - this.offset.click.left >= this.containment[0] ? s - o.grid[0] : s + o.grid[0] : s)), {
                top: a - this.offset.click.top - this.offset.relative.top - this.offset.parent.top + ("fixed" === this.cssPosition ? -this.scrollParent.scrollTop() : l ? 0 : r.scrollTop()),
                left: n - this.offset.click.left - this.offset.relative.left - this.offset.parent.left + ("fixed" === this.cssPosition ? -this.scrollParent.scrollLeft() : l ? 0 : r.scrollLeft())
            }
        },
        _rearrange: function (t, e, i, s) {
            i ? i[0].appendChild(this.placeholder[0]) : e.item[0].parentNode.insertBefore(this.placeholder[0], "down" === this.direction ? e.item[0] : e.item[0].nextSibling), this.counter = this.counter ? ++this.counter : 1;
            var o = this.counter;
            this._delay(function () {
                o === this.counter && this.refreshPositions(!s)
            })
        },
        _clear: function (t, e) {
            function i(t, e, i) {
                return function (s) {
                    i._trigger(t, s, e._uiHash(e))
                }
            }

            this.reverting = !1;
            var s, o = [];
            if (!this._noFinalSort && this.currentItem.parent().length && this.placeholder.before(this.currentItem), this._noFinalSort = null, this.helper[0] === this.currentItem[0]) {
                for (s in this._storedCSS) ("auto" === this._storedCSS[s] || "static" === this._storedCSS[s]) && (this._storedCSS[s] = "");
                this.currentItem.css(this._storedCSS), this._removeClass(this.currentItem, "ui-sortable-helper")
            } else this.currentItem.show();
            for (this.fromOutside && !e && o.push(function (t) {
                this._trigger("receive", t, this._uiHash(this.fromOutside))
            }), !this.fromOutside && this.domPosition.prev === this.currentItem.prev().not(".ui-sortable-helper")[0] && this.domPosition.parent === this.currentItem.parent()[0] || e || o.push(function (t) {
                this._trigger("update", t, this._uiHash())
            }), this !== this.currentContainer && (e || (o.push(function (t) {
                this._trigger("remove", t, this._uiHash())
            }), o.push(function (t) {
                return function (e) {
                    t._trigger("receive", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)), o.push(function (t) {
                return function (e) {
                    t._trigger("update", e, this._uiHash(this))
                }
            }.call(this, this.currentContainer)))), s = this.containers.length - 1; s >= 0; s--) e || o.push(i("deactivate", this, this.containers[s])), this.containers[s].containerCache.over && (o.push(i("out", this, this.containers[s])), this.containers[s].containerCache.over = 0);
            if (this.storedCursor && (this.document.find("body").css("cursor", this.storedCursor), this.storedStylesheet.remove()), this._storedOpacity && this.helper.css("opacity", this._storedOpacity), this._storedZIndex && this.helper.css("zIndex", "auto" === this._storedZIndex ? "" : this._storedZIndex), this.dragging = !1, e || this._trigger("beforeStop", t, this._uiHash()), this.placeholder[0].parentNode.removeChild(this.placeholder[0]), this.cancelHelperRemoval || (this.helper[0] !== this.currentItem[0] && this.helper.remove(), this.helper = null), !e) {
                for (s = 0; o.length > s; s++) o[s].call(this, t);
                this._trigger("stop", t, this._uiHash())
            }
            return this.fromOutside = !1, !this.cancelHelperRemoval
        },
        _trigger: function () {
            !1 === t.Widget.prototype._trigger.apply(this, arguments) && this.cancel()
        },
        _uiHash: function (e) {
            var i = e || this;
            return {
                helper: i.helper,
                placeholder: i.placeholder || t([]),
                position: i.position,
                originalPosition: i.originalPosition,
                offset: i.positionAbs,
                item: i.currentItem,
                sender: e ? e.element : null
            }
        }
    }), t.widget("ui.accordion", {
        version: "1.12.1",
        options: {
            active: 0,
            animate: {},
            classes: {
                "ui-accordion-header": "ui-corner-top",
                "ui-accordion-header-collapsed": "ui-corner-all",
                "ui-accordion-content": "ui-corner-bottom"
            },
            collapsible: !1,
            event: "click",
            header: "> li > :first-child, > :not(li):even",
            heightStyle: "auto",
            icons: {activeHeader: "ui-icon-triangle-1-s", header: "ui-icon-triangle-1-e"},
            activate: null,
            beforeActivate: null
        },
        hideProps: {
            borderTopWidth: "hide",
            borderBottomWidth: "hide",
            paddingTop: "hide",
            paddingBottom: "hide",
            height: "hide"
        },
        showProps: {
            borderTopWidth: "show",
            borderBottomWidth: "show",
            paddingTop: "show",
            paddingBottom: "show",
            height: "show"
        },
        _create: function () {
            var e = this.options;
            this.prevShow = this.prevHide = t(), this._addClass("ui-accordion", "ui-widget ui-helper-reset"), this.element.attr("role", "tablist"), e.collapsible || !1 !== e.active && null != e.active || (e.active = 0), this._processPanels(), 0 > e.active && (e.active += this.headers.length), this._refresh()
        },
        _getCreateEventData: function () {
            return {header: this.active, panel: this.active.length ? this.active.next() : t()}
        },
        _createIcons: function () {
            var e, i, s = this.options.icons;
            s && (e = t("<span>"), this._addClass(e, "ui-accordion-header-icon", "ui-icon " + s.header), e.prependTo(this.headers), i = this.active.children(".ui-accordion-header-icon"), this._removeClass(i, s.header)._addClass(i, null, s.activeHeader)._addClass(this.headers, "ui-accordion-icons"))
        },
        _destroyIcons: function () {
            this._removeClass(this.headers, "ui-accordion-icons"), this.headers.children(".ui-accordion-header-icon").remove()
        },
        _destroy: function () {
            var t;
            this.element.removeAttr("role"), this.headers.removeAttr("role aria-expanded aria-selected aria-controls tabIndex").removeUniqueId(), this._destroyIcons(), t = this.headers.next().css("display", "").removeAttr("role aria-hidden aria-labelledby").removeUniqueId(), "content" !== this.options.heightStyle && t.css("height", "")
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : ("event" === t && (this.options.event && this._off(this.headers, this.options.event), this._setupEvents(e)), this._super(t, e), "collapsible" !== t || e || !1 !== this.options.active || this._activate(0), void ("icons" === t && (this._destroyIcons(), e && this._createIcons())))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t), this._toggleClass(this.headers.add(this.headers.next()), null, "ui-state-disabled", !!t)
        },
        _keydown: function (e) {
            if (!e.altKey && !e.ctrlKey) {
                var i = t.ui.keyCode, s = this.headers.length, o = this.headers.index(e.target), n = !1;
                switch (e.keyCode) {
                    case i.RIGHT:
                    case i.DOWN:
                        n = this.headers[(o + 1) % s];
                        break;
                    case i.LEFT:
                    case i.UP:
                        n = this.headers[(o - 1 + s) % s];
                        break;
                    case i.SPACE:
                    case i.ENTER:
                        this._eventHandler(e);
                        break;
                    case i.HOME:
                        n = this.headers[0];
                        break;
                    case i.END:
                        n = this.headers[s - 1]
                }
                n && (t(e.target).attr("tabIndex", -1), t(n).attr("tabIndex", 0), t(n).trigger("focus"), e.preventDefault())
            }
        },
        _panelKeyDown: function (e) {
            e.keyCode === t.ui.keyCode.UP && e.ctrlKey && t(e.currentTarget).prev().trigger("focus")
        },
        refresh: function () {
            var e = this.options;
            this._processPanels(), !1 === e.active && !0 === e.collapsible || !this.headers.length ? (e.active = !1, this.active = t()) : !1 === e.active ? this._activate(0) : this.active.length && !t.contains(this.element[0], this.active[0]) ? this.headers.length === this.headers.find(".ui-state-disabled").length ? (e.active = !1, this.active = t()) : this._activate(Math.max(0, e.active - 1)) : e.active = this.headers.index(this.active), this._destroyIcons(), this._refresh()
        },
        _processPanels: function () {
            var t = this.headers, e = this.panels;
            this.headers = this.element.find(this.options.header), this._addClass(this.headers, "ui-accordion-header ui-accordion-header-collapsed", "ui-state-default"), this.panels = this.headers.next().filter(":not(.ui-accordion-content-active)").hide(), this._addClass(this.panels, "ui-accordion-content", "ui-helper-reset ui-widget-content"), e && (this._off(t.not(this.headers)), this._off(e.not(this.panels)))
        },
        _refresh: function () {
            var e, i = this.options, s = i.heightStyle, o = this.element.parent();
            this.active = this._findActive(i.active), this._addClass(this.active, "ui-accordion-header-active", "ui-state-active")._removeClass(this.active, "ui-accordion-header-collapsed"), this._addClass(this.active.next(), "ui-accordion-content-active"), this.active.next().show(), this.headers.attr("role", "tab").each(function () {
                var e = t(this), i = e.uniqueId().attr("id"), s = e.next(), o = s.uniqueId().attr("id");
                e.attr("aria-controls", o), s.attr("aria-labelledby", i)
            }).next().attr("role", "tabpanel"), this.headers.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }).next().attr({"aria-hidden": "true"}).hide(), this.active.length ? this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }).next().attr({"aria-hidden": "false"}) : this.headers.eq(0).attr("tabIndex", 0), this._createIcons(), this._setupEvents(i.event), "fill" === s ? (e = o.height(), this.element.siblings(":visible").each(function () {
                var i = t(this), s = i.css("position");
                "absolute" !== s && "fixed" !== s && (e -= i.outerHeight(!0))
            }), this.headers.each(function () {
                e -= t(this).outerHeight(!0)
            }), this.headers.next().each(function () {
                t(this).height(Math.max(0, e - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === s && (e = 0, this.headers.next().each(function () {
                var i = t(this).is(":visible");
                i || t(this).show(), e = Math.max(e, t(this).css("height", "").height()), i || t(this).hide()
            }).height(e))
        },
        _activate: function (e) {
            var i = this._findActive(e)[0];
            i !== this.active[0] && (i = i || this.active[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return "number" == typeof e ? this.headers.eq(e) : t()
        },
        _setupEvents: function (e) {
            var i = {keydown: "_keydown"};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.headers.add(this.headers.next())), this._on(this.headers, i), this._on(this.headers.next(), {keydown: "_panelKeyDown"}), this._hoverable(this.headers), this._focusable(this.headers)
        },
        _eventHandler: function (e) {
            var i, s, o = this.options, n = this.active, a = t(e.currentTarget), r = a[0] === n[0],
                l = r && o.collapsible, h = l ? t() : a.next(),
                c = {oldHeader: n, oldPanel: n.next(), newHeader: l ? t() : a, newPanel: h};
            e.preventDefault(), r && !o.collapsible || !1 === this._trigger("beforeActivate", e, c) || (o.active = !l && this.headers.index(a), this.active = r ? t() : a, this._toggle(c), this._removeClass(n, "ui-accordion-header-active", "ui-state-active"), o.icons && (i = n.children(".ui-accordion-header-icon"), this._removeClass(i, null, o.icons.activeHeader)._addClass(i, null, o.icons.header)), r || (this._removeClass(a, "ui-accordion-header-collapsed")._addClass(a, "ui-accordion-header-active", "ui-state-active"), o.icons && (s = a.children(".ui-accordion-header-icon"), this._removeClass(s, null, o.icons.header)._addClass(s, null, o.icons.activeHeader)), this._addClass(a.next(), "ui-accordion-content-active")))
        },
        _toggle: function (e) {
            var i = e.newPanel, s = this.prevShow.length ? this.prevShow : e.oldPanel;
            this.prevShow.add(this.prevHide).stop(!0, !0), this.prevShow = i, this.prevHide = s, this.options.animate ? this._animate(i, s, e) : (s.hide(), i.show(), this._toggleComplete(e)), s.attr({"aria-hidden": "true"}), s.prev().attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), i.length && s.length ? s.prev().attr({
                tabIndex: -1,
                "aria-expanded": "false"
            }) : i.length && this.headers.filter(function () {
                return 0 === parseInt(t(this).attr("tabIndex"), 10)
            }).attr("tabIndex", -1), i.attr("aria-hidden", "false").prev().attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _animate: function (t, e, i) {
            var s, o, n, a = this, r = 0, l = t.css("box-sizing"), h = t.length && (!e.length || t.index() < e.index()),
                c = this.options.animate || {}, d = h && c.down || c, u = function () {
                    a._toggleComplete(i)
                };
            return "number" == typeof d && (n = d), "string" == typeof d && (o = d), o = o || d.easing || c.easing, n = n || d.duration || c.duration, e.length ? t.length ? (s = t.show().outerHeight(), e.animate(this.hideProps, {
                duration: n,
                easing: o,
                step: function (t, e) {
                    e.now = Math.round(t)
                }
            }), void t.hide().animate(this.showProps, {
                duration: n, easing: o, complete: u, step: function (t, i) {
                    i.now = Math.round(t), "height" !== i.prop ? "content-box" === l && (r += i.now) : "content" !== a.options.heightStyle && (i.now = Math.round(s - e.outerHeight() - r), r = 0)
                }
            })) : e.animate(this.hideProps, n, o, u) : t.animate(this.showProps, n, o, u)
        },
        _toggleComplete: function (t) {
            var e = t.oldPanel, i = e.prev();
            this._removeClass(e, "ui-accordion-content-active"), this._removeClass(i, "ui-accordion-header-active")._addClass(i, "ui-accordion-header-collapsed"), e.length && (e.parent()[0].className = e.parent()[0].className), this._trigger("activate", null, t)
        }
    }), t.widget("ui.menu", {
        version: "1.12.1",
        defaultElement: "<ul>",
        delay: 300,
        options: {
            icons: {submenu: "ui-icon-caret-1-e"},
            items: "> *",
            menus: "ul",
            position: {my: "left top", at: "right top"},
            role: "menu",
            blur: null,
            focus: null,
            select: null
        },
        _create: function () {
            this.activeMenu = this.element, this.mouseHandled = !1, this.element.uniqueId().attr({
                role: this.options.role,
                tabIndex: 0
            }), this._addClass("ui-menu", "ui-widget ui-widget-content"), this._on({
                "mousedown .ui-menu-item": function (t) {
                    t.preventDefault()
                }, "click .ui-menu-item": function (e) {
                    var i = t(e.target), s = t(t.ui.safeActiveElement(this.document[0]));
                    !this.mouseHandled && i.not(".ui-state-disabled").length && (this.select(e), e.isPropagationStopped() || (this.mouseHandled = !0), i.has(".ui-menu").length ? this.expand(e) : !this.element.is(":focus") && s.closest(".ui-menu").length && (this.element.trigger("focus", [!0]), this.active && 1 === this.active.parents(".ui-menu").length && clearTimeout(this.timer)))
                }, "mouseenter .ui-menu-item": function (e) {
                    if (!this.previousFilter) {
                        var i = t(e.target).closest(".ui-menu-item"), s = t(e.currentTarget);
                        i[0] === s[0] && (this._removeClass(s.siblings().children(".ui-state-active"), null, "ui-state-active"), this.focus(e, s))
                    }
                }, mouseleave: "collapseAll", "mouseleave .ui-menu": "collapseAll", focus: function (t, e) {
                    var i = this.active || this.element.find(this.options.items).eq(0);
                    e || this.focus(t, i)
                }, blur: function (e) {
                    this._delay(function () {
                        !t.contains(this.element[0], t.ui.safeActiveElement(this.document[0])) && this.collapseAll(e)
                    })
                }, keydown: "_keydown"
            }), this.refresh(), this._on(this.document, {
                click: function (t) {
                    this._closeOnDocumentClick(t) && this.collapseAll(t), this.mouseHandled = !1
                }
            })
        },
        _destroy: function () {
            var e = this.element.find(".ui-menu-item").removeAttr("role aria-disabled").children(".ui-menu-item-wrapper").removeUniqueId().removeAttr("tabIndex role aria-haspopup");
            this.element.removeAttr("aria-activedescendant").find(".ui-menu").addBack().removeAttr("role aria-labelledby aria-expanded aria-hidden aria-disabled tabIndex").removeUniqueId().show(), e.children().each(function () {
                var e = t(this);
                e.data("ui-menu-submenu-caret") && e.remove()
            })
        },
        _keydown: function (e) {
            var i, s, o, n, a = !0;
            switch (e.keyCode) {
                case t.ui.keyCode.PAGE_UP:
                    this.previousPage(e);
                    break;
                case t.ui.keyCode.PAGE_DOWN:
                    this.nextPage(e);
                    break;
                case t.ui.keyCode.HOME:
                    this._move("first", "first", e);
                    break;
                case t.ui.keyCode.END:
                    this._move("last", "last", e);
                    break;
                case t.ui.keyCode.UP:
                    this.previous(e);
                    break;
                case t.ui.keyCode.DOWN:
                    this.next(e);
                    break;
                case t.ui.keyCode.LEFT:
                    this.collapse(e);
                    break;
                case t.ui.keyCode.RIGHT:
                    this.active && !this.active.is(".ui-state-disabled") && this.expand(e);
                    break;
                case t.ui.keyCode.ENTER:
                case t.ui.keyCode.SPACE:
                    this._activate(e);
                    break;
                case t.ui.keyCode.ESCAPE:
                    this.collapse(e);
                    break;
                default:
                    a = !1, s = this.previousFilter || "", n = !1, o = e.keyCode >= 96 && 105 >= e.keyCode ? "" + (e.keyCode - 96) : String.fromCharCode(e.keyCode), clearTimeout(this.filterTimer), o === s ? n = !0 : o = s + o, i = this._filterMenuItems(o), (i = n && -1 !== i.index(this.active.next()) ? this.active.nextAll(".ui-menu-item") : i).length || (o = String.fromCharCode(e.keyCode), i = this._filterMenuItems(o)), i.length ? (this.focus(e, i), this.previousFilter = o, this.filterTimer = this._delay(function () {
                        delete this.previousFilter
                    }, 1e3)) : delete this.previousFilter
            }
            a && e.preventDefault()
        },
        _activate: function (t) {
            this.active && !this.active.is(".ui-state-disabled") && (this.active.children("[aria-haspopup='true']").length ? this.expand(t) : this.select(t))
        },
        refresh: function () {
            var e, i, s, o, n = this, a = this.options.icons.submenu, r = this.element.find(this.options.menus);
            this._toggleClass("ui-menu-icons", null, !!this.element.find(".ui-icon").length), i = r.filter(":not(.ui-menu)").hide().attr({
                role: this.options.role,
                "aria-hidden": "true",
                "aria-expanded": "false"
            }).each(function () {
                var e = t(this), i = e.prev(), s = t("<span>").data("ui-menu-submenu-caret", !0);
                n._addClass(s, "ui-menu-icon", "ui-icon " + a), i.attr("aria-haspopup", "true").prepend(s), e.attr("aria-labelledby", i.attr("id"))
            }), this._addClass(i, "ui-menu", "ui-widget ui-widget-content ui-front"), (e = r.add(this.element).find(this.options.items)).not(".ui-menu-item").each(function () {
                var e = t(this);
                n._isDivider(e) && n._addClass(e, "ui-menu-divider", "ui-widget-content")
            }), o = (s = e.not(".ui-menu-item, .ui-menu-divider")).children().not(".ui-menu").uniqueId().attr({
                tabIndex: -1,
                role: this._itemRole()
            }), this._addClass(s, "ui-menu-item")._addClass(o, "ui-menu-item-wrapper"), e.filter(".ui-state-disabled").attr("aria-disabled", "true"), this.active && !t.contains(this.element[0], this.active[0]) && this.blur()
        },
        _itemRole: function () {
            return {menu: "menuitem", listbox: "option"}[this.options.role]
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.element.find(".ui-menu-icon");
                this._removeClass(i, null, this.options.icons.submenu)._addClass(i, null, e.submenu)
            }
            this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t + ""), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        focus: function (t, e) {
            var i, s, o;
            this.blur(t, t && "focus" === t.type), this._scrollIntoView(e), this.active = e.first(), s = this.active.children(".ui-menu-item-wrapper"), this._addClass(s, null, "ui-state-active"), this.options.role && this.element.attr("aria-activedescendant", s.attr("id")), o = this.active.parent().closest(".ui-menu-item").children(".ui-menu-item-wrapper"), this._addClass(o, null, "ui-state-active"), t && "keydown" === t.type ? this._close() : this.timer = this._delay(function () {
                this._close()
            }, this.delay), (i = e.children(".ui-menu")).length && t && /^mouse/.test(t.type) && this._startOpening(i), this.activeMenu = e.parent(), this._trigger("focus", t, {item: e})
        },
        _scrollIntoView: function (e) {
            var i, s, o, n, a, r;
            this._hasScroll() && (i = parseFloat(t.css(this.activeMenu[0], "borderTopWidth")) || 0, s = parseFloat(t.css(this.activeMenu[0], "paddingTop")) || 0, o = e.offset().top - this.activeMenu.offset().top - i - s, n = this.activeMenu.scrollTop(), a = this.activeMenu.height(), r = e.outerHeight(), 0 > o ? this.activeMenu.scrollTop(n + o) : o + r > a && this.activeMenu.scrollTop(n + o - a + r))
        },
        blur: function (t, e) {
            e || clearTimeout(this.timer), this.active && (this._removeClass(this.active.children(".ui-menu-item-wrapper"), null, "ui-state-active"), this._trigger("blur", t, {item: this.active}), this.active = null)
        },
        _startOpening: function (t) {
            clearTimeout(this.timer), "true" === t.attr("aria-hidden") && (this.timer = this._delay(function () {
                this._close(), this._open(t)
            }, this.delay))
        },
        _open: function (e) {
            var i = t.extend({of: this.active}, this.options.position);
            clearTimeout(this.timer), this.element.find(".ui-menu").not(e.parents(".ui-menu")).hide().attr("aria-hidden", "true"), e.show().removeAttr("aria-hidden").attr("aria-expanded", "true").position(i)
        },
        collapseAll: function (e, i) {
            clearTimeout(this.timer), this.timer = this._delay(function () {
                var s = i ? this.element : t(e && e.target).closest(this.element.find(".ui-menu"));
                s.length || (s = this.element), this._close(s), this.blur(e), this._removeClass(s.find(".ui-state-active"), null, "ui-state-active"), this.activeMenu = s
            }, this.delay)
        },
        _close: function (t) {
            t || (t = this.active ? this.active.parent() : this.element), t.find(".ui-menu").hide().attr("aria-hidden", "true").attr("aria-expanded", "false")
        },
        _closeOnDocumentClick: function (e) {
            return !t(e.target).closest(".ui-menu").length
        },
        _isDivider: function (t) {
            return !/[^\-\u2014\u2013\s]/.test(t.text())
        },
        collapse: function (t) {
            var e = this.active && this.active.parent().closest(".ui-menu-item", this.element);
            e && e.length && (this._close(), this.focus(t, e))
        },
        expand: function (t) {
            var e = this.active && this.active.children(".ui-menu ").find(this.options.items).first();
            e && e.length && (this._open(e.parent()), this._delay(function () {
                this.focus(t, e)
            }))
        },
        next: function (t) {
            this._move("next", "first", t)
        },
        previous: function (t) {
            this._move("prev", "last", t)
        },
        isFirstItem: function () {
            return this.active && !this.active.prevAll(".ui-menu-item").length
        },
        isLastItem: function () {
            return this.active && !this.active.nextAll(".ui-menu-item").length
        },
        _move: function (t, e, i) {
            var s;
            this.active && (s = "first" === t || "last" === t ? this.active["first" === t ? "prevAll" : "nextAll"](".ui-menu-item").eq(-1) : this.active[t + "All"](".ui-menu-item").eq(0)), s && s.length && this.active || (s = this.activeMenu.find(this.options.items)[e]()), this.focus(i, s)
        },
        nextPage: function (e) {
            var i, s, o;
            return this.active ? void (this.isLastItem() || (this._hasScroll() ? (s = this.active.offset().top, o = this.element.height(), this.active.nextAll(".ui-menu-item").each(function () {
                return 0 > (i = t(this)).offset().top - s - o
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items)[this.active ? "last" : "first"]()))) : void this.next(e)
        },
        previousPage: function (e) {
            var i, s, o;
            return this.active ? void (this.isFirstItem() || (this._hasScroll() ? (s = this.active.offset().top, o = this.element.height(), this.active.prevAll(".ui-menu-item").each(function () {
                return (i = t(this)).offset().top - s + o > 0
            }), this.focus(e, i)) : this.focus(e, this.activeMenu.find(this.options.items).first()))) : void this.next(e)
        },
        _hasScroll: function () {
            return this.element.outerHeight() < this.element.prop("scrollHeight")
        },
        select: function (e) {
            this.active = this.active || t(e.target).closest(".ui-menu-item");
            var i = {item: this.active};
            this.active.has(".ui-menu").length || this.collapseAll(e, !0), this._trigger("select", e, i)
        },
        _filterMenuItems: function (e) {
            var i = e.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&"), s = RegExp("^" + i, "i");
            return this.activeMenu.find(this.options.items).filter(".ui-menu-item").filter(function () {
                return s.test(t.trim(t(this).children(".ui-menu-item-wrapper").text()))
            })
        }
    }), t.widget("ui.autocomplete", {
        version: "1.12.1",
        defaultElement: "<input>",
        options: {
            appendTo: null,
            autoFocus: !1,
            delay: 300,
            minLength: 1,
            position: {my: "left top", at: "left bottom", collision: "none"},
            source: null,
            change: null,
            close: null,
            focus: null,
            open: null,
            response: null,
            search: null,
            select: null
        },
        requestIndex: 0,
        pending: 0,
        _create: function () {
            var e, i, s, o = this.element[0].nodeName.toLowerCase(), n = "textarea" === o, a = "input" === o;
            this.isMultiLine = n || !a && this._isContentEditable(this.element), this.valueMethod = this.element[n || a ? "val" : "text"], this.isNewMenu = !0, this._addClass("ui-autocomplete-input"), this.element.attr("autocomplete", "off"), this._on(this.element, {
                keydown: function (o) {
                    if (this.element.prop("readOnly")) return e = !0, s = !0, void (i = !0);
                    e = !1, s = !1, i = !1;
                    var n = t.ui.keyCode;
                    switch (o.keyCode) {
                        case n.PAGE_UP:
                            e = !0, this._move("previousPage", o);
                            break;
                        case n.PAGE_DOWN:
                            e = !0, this._move("nextPage", o);
                            break;
                        case n.UP:
                            e = !0, this._keyEvent("previous", o);
                            break;
                        case n.DOWN:
                            e = !0, this._keyEvent("next", o);
                            break;
                        case n.ENTER:
                            this.menu.active && (e = !0, o.preventDefault(), this.menu.select(o));
                            break;
                        case n.TAB:
                            this.menu.active && this.menu.select(o);
                            break;
                        case n.ESCAPE:
                            this.menu.element.is(":visible") && (this.isMultiLine || this._value(this.term), this.close(o), o.preventDefault());
                            break;
                        default:
                            i = !0, this._searchTimeout(o)
                    }
                }, keypress: function (s) {
                    if (e) return e = !1, void ((!this.isMultiLine || this.menu.element.is(":visible")) && s.preventDefault());
                    if (!i) {
                        var o = t.ui.keyCode;
                        switch (s.keyCode) {
                            case o.PAGE_UP:
                                this._move("previousPage", s);
                                break;
                            case o.PAGE_DOWN:
                                this._move("nextPage", s);
                                break;
                            case o.UP:
                                this._keyEvent("previous", s);
                                break;
                            case o.DOWN:
                                this._keyEvent("next", s)
                        }
                    }
                }, input: function (t) {
                    return s ? (s = !1, void t.preventDefault()) : void this._searchTimeout(t)
                }, focus: function () {
                    this.selectedItem = null, this.previous = this._value()
                }, blur: function (t) {
                    return this.cancelBlur ? void delete this.cancelBlur : (clearTimeout(this.searching), this.close(t), void this._change(t))
                }
            }), this._initSource(), this.menu = t("<ul>").appendTo(this._appendTo()).menu({role: null}).hide().menu("instance"), this._addClass(this.menu.element, "ui-autocomplete", "ui-front"), this._on(this.menu.element, {
                mousedown: function (e) {
                    e.preventDefault(), this.cancelBlur = !0, this._delay(function () {
                        delete this.cancelBlur, this.element[0] !== t.ui.safeActiveElement(this.document[0]) && this.element.trigger("focus")
                    })
                }, menufocus: function (e, i) {
                    var s, o;
                    return this.isNewMenu && (this.isNewMenu = !1, e.originalEvent && /^mouse/.test(e.originalEvent.type)) ? (this.menu.blur(), void this.document.one("mousemove", function () {
                        t(e.target).trigger(e.originalEvent)
                    })) : (o = i.item.data("ui-autocomplete-item"), !1 !== this._trigger("focus", e, {item: o}) && e.originalEvent && /^key/.test(e.originalEvent.type) && this._value(o.value), void ((s = i.item.attr("aria-label") || o.value) && t.trim(s).length && (this.liveRegion.children().hide(), t("<div>").text(s).appendTo(this.liveRegion))))
                }, menuselect: function (e, i) {
                    var s = i.item.data("ui-autocomplete-item"), o = this.previous;
                    this.element[0] !== t.ui.safeActiveElement(this.document[0]) && (this.element.trigger("focus"), this.previous = o, this._delay(function () {
                        this.previous = o, this.selectedItem = s
                    })), !1 !== this._trigger("select", e, {item: s}) && this._value(s.value), this.term = this._value(), this.close(e), this.selectedItem = s
                }
            }), this.liveRegion = t("<div>", {
                role: "status",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _destroy: function () {
            clearTimeout(this.searching), this.element.removeAttr("autocomplete"), this.menu.element.remove(), this.liveRegion.remove()
        },
        _setOption: function (t, e) {
            this._super(t, e), "source" === t && this._initSource(), "appendTo" === t && this.menu.element.appendTo(this._appendTo()), "disabled" === t && e && this.xhr && this.xhr.abort()
        },
        _isEventTargetInWidget: function (e) {
            var i = this.menu.element[0];
            return e.target === this.element[0] || e.target === i || t.contains(i, e.target)
        },
        _closeOnClickOutside: function (t) {
            this._isEventTargetInWidget(t) || this.close()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _initSource: function () {
            var e, i, s = this;
            t.isArray(this.options.source) ? (e = this.options.source, this.source = function (i, s) {
                s(t.ui.autocomplete.filter(e, i.term))
            }) : "string" == typeof this.options.source ? (i = this.options.source, this.source = function (e, o) {
                s.xhr && s.xhr.abort(), s.xhr = t.ajax({
                    url: i, data: e, dataType: "json", success: function (t) {
                        o(t)
                    }, error: function () {
                        o([])
                    }
                })
            }) : this.source = this.options.source
        },
        _searchTimeout: function (t) {
            clearTimeout(this.searching), this.searching = this._delay(function () {
                var e = this.term === this._value(), i = this.menu.element.is(":visible"),
                    s = t.altKey || t.ctrlKey || t.metaKey || t.shiftKey;
                (!e || e && !i && !s) && (this.selectedItem = null, this.search(null, t))
            }, this.options.delay)
        },
        search: function (t, e) {
            return t = null != t ? t : this._value(), this.term = this._value(), t.length < this.options.minLength ? this.close(e) : !1 !== this._trigger("search", e) ? this._search(t) : void 0
        },
        _search: function (t) {
            this.pending++ , this._addClass("ui-autocomplete-loading"), this.cancelSearch = !1, this.source({term: t}, this._response())
        },
        _response: function () {
            var e = ++this.requestIndex;
            return t.proxy(function (t) {
                e === this.requestIndex && this.__response(t), this.pending-- , this.pending || this._removeClass("ui-autocomplete-loading")
            }, this)
        },
        __response: function (t) {
            t && (t = this._normalize(t)), this._trigger("response", null, {content: t}), !this.options.disabled && t && t.length && !this.cancelSearch ? (this._suggest(t), this._trigger("open")) : this._close()
        },
        close: function (t) {
            this.cancelSearch = !0, this._close(t)
        },
        _close: function (t) {
            this._off(this.document, "mousedown"), this.menu.element.is(":visible") && (this.menu.element.hide(), this.menu.blur(), this.isNewMenu = !0, this._trigger("close", t))
        },
        _change: function (t) {
            this.previous !== this._value() && this._trigger("change", t, {item: this.selectedItem})
        },
        _normalize: function (e) {
            return e.length && e[0].label && e[0].value ? e : t.map(e, function (e) {
                return "string" == typeof e ? {label: e, value: e} : t.extend({}, e, {
                    label: e.label || e.value,
                    value: e.value || e.label
                })
            })
        },
        _suggest: function (e) {
            var i = this.menu.element.empty();
            this._renderMenu(i, e), this.isNewMenu = !0, this.menu.refresh(), i.show(), this._resizeMenu(), i.position(t.extend({of: this.element}, this.options.position)), this.options.autoFocus && this.menu.next(), this._on(this.document, {mousedown: "_closeOnClickOutside"})
        },
        _resizeMenu: function () {
            var t = this.menu.element;
            t.outerWidth(Math.max(t.width("").outerWidth() + 1, this.element.outerWidth()))
        },
        _renderMenu: function (e, i) {
            var s = this;
            t.each(i, function (t, i) {
                s._renderItemData(e, i)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-autocomplete-item", e)
        },
        _renderItem: function (e, i) {
            return t("<li>").append(t("<div>").text(i.label)).appendTo(e)
        },
        _move: function (t, e) {
            return this.menu.element.is(":visible") ? this.menu.isFirstItem() && /^previous/.test(t) || this.menu.isLastItem() && /^next/.test(t) ? (this.isMultiLine || this._value(this.term), void this.menu.blur()) : void this.menu[t](e) : void this.search(null, e)
        },
        widget: function () {
            return this.menu.element
        },
        _value: function () {
            return this.valueMethod.apply(this.element, arguments)
        },
        _keyEvent: function (t, e) {
            (!this.isMultiLine || this.menu.element.is(":visible")) && (this._move(t, e), e.preventDefault())
        },
        _isContentEditable: function (t) {
            if (!t.length) return !1;
            var e = t.prop("contentEditable");
            return "inherit" === e ? this._isContentEditable(t.parent()) : "true" === e
        }
    }), t.extend(t.ui.autocomplete, {
        escapeRegex: function (t) {
            return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
        }, filter: function (e, i) {
            var s = RegExp(t.ui.autocomplete.escapeRegex(i), "i");
            return t.grep(e, function (t) {
                return s.test(t.label || t.value || t)
            })
        }
    }), t.widget("ui.autocomplete", t.ui.autocomplete, {
        options: {
            messages: {
                noResults: "No search results.",
                results: function (t) {
                    return t + (t > 1 ? " results are" : " result is") + " available, use up and down arrow keys to navigate."
                }
            }
        }, __response: function (e) {
            var i;
            this._superApply(arguments), this.options.disabled || this.cancelSearch || (i = e && e.length ? this.options.messages.results(e.length) : this.options.messages.noResults, this.liveRegion.children().hide(), t("<div>").text(i).appendTo(this.liveRegion))
        }
    }), t.ui.autocomplete;
    var f, m, g, v = /ui-corner-([a-z]){2,6}/g;
    t.widget("ui.controlgroup", {
        version: "1.12.1",
        defaultElement: "<div>",
        options: {
            direction: "horizontal",
            disabled: null,
            onlyVisible: !0,
            items: {
                button: "input[type=button], input[type=submit], input[type=reset], button, a",
                controlgroupLabel: ".ui-controlgroup-label",
                checkboxradio: "input[type='checkbox'], input[type='radio']",
                selectmenu: "select",
                spinner: ".ui-spinner-input"
            }
        },
        _create: function () {
            this._enhance()
        },
        _enhance: function () {
            this.element.attr("role", "toolbar"), this.refresh()
        },
        _destroy: function () {
            this._callChildMethod("destroy"), this.childWidgets.removeData("ui-controlgroup-data"), this.element.removeAttr("role"), this.options.items.controlgroupLabel && this.element.find(this.options.items.controlgroupLabel).find(".ui-controlgroup-label-contents").contents().unwrap()
        },
        _initWidgets: function () {
            var e = this, i = [];
            t.each(this.options.items, function (s, o) {
                var n, a = {};
                return o ? "controlgroupLabel" === s ? ((n = e.element.find(o)).each(function () {
                    var e = t(this);
                    e.children(".ui-controlgroup-label-contents").length || e.contents().wrapAll("<span class='ui-controlgroup-label-contents'></span>")
                }), e._addClass(n, null, "ui-widget ui-widget-content ui-state-default"), void (i = i.concat(n.get()))) : void (t.fn[s] && (a = e["_" + s + "Options"] ? e["_" + s + "Options"]("middle") : {classes: {}}, e.element.find(o).each(function () {
                    var o = t(this), n = o[s]("instance"), r = t.widget.extend({}, a);
                    if ("button" !== s || !o.parent(".ui-spinner").length) {
                        n || (n = o[s]()[s]("instance")), n && (r.classes = e._resolveClassesValues(r.classes, n)), o[s](r);
                        var l = o[s]("widget");
                        t.data(l[0], "ui-controlgroup-data", n || o[s]("instance")), i.push(l[0])
                    }
                }))) : void 0
            }), this.childWidgets = t(t.unique(i)), this._addClass(this.childWidgets, "ui-controlgroup-item")
        },
        _callChildMethod: function (e) {
            this.childWidgets.each(function () {
                var i = t(this).data("ui-controlgroup-data");
                i && i[e] && i[e]()
            })
        },
        _updateCornerClass: function (t, e) {
            var i = this._buildSimpleOptions(e, "label").classes.label;
            this._removeClass(t, null, "ui-corner-top ui-corner-bottom ui-corner-left ui-corner-right ui-corner-all"), this._addClass(t, null, i)
        },
        _buildSimpleOptions: function (t, e) {
            var i = "vertical" === this.options.direction, s = {classes: {}};
            return s.classes[e] = {
                middle: "",
                first: "ui-corner-" + (i ? "top" : "left"),
                last: "ui-corner-" + (i ? "bottom" : "right"),
                only: "ui-corner-all"
            }[t], s
        },
        _spinnerOptions: function (t) {
            var e = this._buildSimpleOptions(t, "ui-spinner");
            return e.classes["ui-spinner-up"] = "", e.classes["ui-spinner-down"] = "", e
        },
        _buttonOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-button")
        },
        _checkboxradioOptions: function (t) {
            return this._buildSimpleOptions(t, "ui-checkboxradio-label")
        },
        _selectmenuOptions: function (t) {
            var e = "vertical" === this.options.direction;
            return {
                width: !!e && "auto",
                classes: {
                    middle: {"ui-selectmenu-button-open": "", "ui-selectmenu-button-closed": ""},
                    first: {
                        "ui-selectmenu-button-open": "ui-corner-" + (e ? "top" : "tl"),
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "top" : "left")
                    },
                    last: {
                        "ui-selectmenu-button-open": e ? "" : "ui-corner-tr",
                        "ui-selectmenu-button-closed": "ui-corner-" + (e ? "bottom" : "right")
                    },
                    only: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"}
                }[t]
            }
        },
        _resolveClassesValues: function (e, i) {
            var s = {};
            return t.each(e, function (o) {
                var n = i.options.classes[o] || "";
                n = t.trim(n.replace(v, "")), s[o] = (n + " " + e[o]).replace(/\s+/g, " ")
            }), s
        },
        _setOption: function (t, e) {
            return "direction" === t && this._removeClass("ui-controlgroup-" + this.options.direction), this._super(t, e), "disabled" === t ? void this._callChildMethod(e ? "disable" : "enable") : void this.refresh()
        },
        refresh: function () {
            var e, i = this;
            this._addClass("ui-controlgroup ui-controlgroup-" + this.options.direction), "horizontal" === this.options.direction && this._addClass(null, "ui-helper-clearfix"), this._initWidgets(), e = this.childWidgets, this.options.onlyVisible && (e = e.filter(":visible")), e.length && (t.each(["first", "last"], function (t, s) {
                var o = e[s]().data("ui-controlgroup-data");
                if (o && i["_" + o.widgetName + "Options"]) {
                    var n = i["_" + o.widgetName + "Options"](1 === e.length ? "only" : s);
                    n.classes = i._resolveClassesValues(n.classes, o), o.element[o.widgetName](n)
                } else i._updateCornerClass(e[s](), s)
            }), this._callChildMethod("refresh"))
        }
    }), t.widget("ui.checkboxradio", [t.ui.formResetMixin, {
        version: "1.12.1",
        options: {
            disabled: null,
            label: null,
            icon: !0,
            classes: {"ui-checkboxradio-label": "ui-corner-all", "ui-checkboxradio-icon": "ui-corner-all"}
        },
        _getCreateOptions: function () {
            var e, i, s = this, o = this._super() || {};
            return this._readType(), i = this.element.labels(), this.label = t(i[i.length - 1]), this.label.length || t.error("No label found for checkboxradio widget"), this.originalLabel = "", this.label.contents().not(this.element[0]).each(function () {
                s.originalLabel += 3 === this.nodeType ? t(this).text() : this.outerHTML
            }), this.originalLabel && (o.label = this.originalLabel), null != (e = this.element[0].disabled) && (o.disabled = e), o
        },
        _create: function () {
            var t = this.element[0].checked;
            this._bindFormResetHandler(), null == this.options.disabled && (this.options.disabled = this.element[0].disabled), this._setOption("disabled", this.options.disabled), this._addClass("ui-checkboxradio", "ui-helper-hidden-accessible"), this._addClass(this.label, "ui-checkboxradio-label", "ui-button ui-widget"), "radio" === this.type && this._addClass(this.label, "ui-checkboxradio-radio-label"), this.options.label && this.options.label !== this.originalLabel ? this._updateLabel() : this.originalLabel && (this.options.label = this.originalLabel), this._enhance(), t && (this._addClass(this.label, "ui-checkboxradio-checked", "ui-state-active"), this.icon && this._addClass(this.icon, null, "ui-state-hover")), this._on({
                change: "_toggleClasses",
                focus: function () {
                    this._addClass(this.label, null, "ui-state-focus ui-visual-focus")
                },
                blur: function () {
                    this._removeClass(this.label, null, "ui-state-focus ui-visual-focus")
                }
            })
        },
        _readType: function () {
            var e = this.element[0].nodeName.toLowerCase();
            this.type = this.element[0].type, "input" === e && /radio|checkbox/.test(this.type) || t.error("Can't create checkboxradio on element.nodeName=" + e + " and element.type=" + this.type)
        },
        _enhance: function () {
            this._updateIcon(this.element[0].checked)
        },
        widget: function () {
            return this.label
        },
        _getRadioGroup: function () {
            var e = this.element[0].name, i = "input[name='" + t.ui.escapeSelector(e) + "']";
            return e ? (this.form.length ? t(this.form[0].elements).filter(i) : t(i).filter(function () {
                return 0 === t(this).form().length
            })).not(this.element) : t([])
        },
        _toggleClasses: function () {
            var e = this.element[0].checked;
            this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", e), this.options.icon && "checkbox" === this.type && this._toggleClass(this.icon, null, "ui-icon-check ui-state-checked", e)._toggleClass(this.icon, null, "ui-icon-blank", !e), "radio" === this.type && this._getRadioGroup().each(function () {
                var e = t(this).checkboxradio("instance");
                e && e._removeClass(e.label, "ui-checkboxradio-checked", "ui-state-active")
            })
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.icon && (this.icon.remove(), this.iconSpace.remove())
        },
        _setOption: function (t, e) {
            return "label" !== t || e ? (this._super(t, e), "disabled" === t ? (this._toggleClass(this.label, null, "ui-state-disabled", e), void (this.element[0].disabled = e)) : void this.refresh()) : void 0
        },
        _updateIcon: function (e) {
            var i = "ui-icon ui-icon-background ";
            this.options.icon ? (this.icon || (this.icon = t("<span>"), this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-checkboxradio-icon-space")), "checkbox" === this.type ? (i += e ? "ui-icon-check ui-state-checked" : "ui-icon-blank", this._removeClass(this.icon, null, e ? "ui-icon-blank" : "ui-icon-check")) : i += "ui-icon-blank", this._addClass(this.icon, "ui-checkboxradio-icon", i), e || this._removeClass(this.icon, null, "ui-icon-check ui-state-checked"), this.icon.prependTo(this.label).after(this.iconSpace)) : void 0 !== this.icon && (this.icon.remove(), this.iconSpace.remove(), delete this.icon)
        },
        _updateLabel: function () {
            var t = this.label.contents().not(this.element[0]);
            this.icon && (t = t.not(this.icon[0])), this.iconSpace && (t = t.not(this.iconSpace[0])), t.remove(), this.label.append(this.options.label)
        },
        refresh: function () {
            var t = this.element[0].checked, e = this.element[0].disabled;
            this._updateIcon(t), this._toggleClass(this.label, "ui-checkboxradio-checked", "ui-state-active", t), null !== this.options.label && this._updateLabel(), e !== this.options.disabled && this._setOptions({disabled: e})
        }
    }]), t.ui.checkboxradio, t.widget("ui.button", {
        version: "1.12.1",
        defaultElement: "<button>",
        options: {
            classes: {"ui-button": "ui-corner-all"},
            disabled: null,
            icon: null,
            iconPosition: "beginning",
            label: null,
            showLabel: !0
        },
        _getCreateOptions: function () {
            var t, e = this._super() || {};
            return this.isInput = this.element.is("input"), null != (t = this.element[0].disabled) && (e.disabled = t), this.originalLabel = this.isInput ? this.element.val() : this.element.html(), this.originalLabel && (e.label = this.originalLabel), e
        },
        _create: function () {
            !this.option.showLabel & !this.options.icon && (this.options.showLabel = !0), null == this.options.disabled && (this.options.disabled = this.element[0].disabled || !1), this.hasTitle = !!this.element.attr("title"), this.options.label && this.options.label !== this.originalLabel && (this.isInput ? this.element.val(this.options.label) : this.element.html(this.options.label)), this._addClass("ui-button", "ui-widget"), this._setOption("disabled", this.options.disabled), this._enhance(), this.element.is("a") && this._on({
                keyup: function (e) {
                    e.keyCode === t.ui.keyCode.SPACE && (e.preventDefault(), this.element[0].click ? this.element[0].click() : this.element.trigger("click"))
                }
            })
        },
        _enhance: function () {
            this.element.is("button") || this.element.attr("role", "button"), this.options.icon && (this._updateIcon("icon", this.options.icon), this._updateTooltip())
        },
        _updateTooltip: function () {
            this.title = this.element.attr("title"), this.options.showLabel || this.title || this.element.attr("title", this.options.label)
        },
        _updateIcon: function (e, i) {
            var s = "iconPosition" !== e, o = s ? this.options.iconPosition : i, n = "top" === o || "bottom" === o;
            this.icon ? s && this._removeClass(this.icon, null, this.options.icon) : (this.icon = t("<span>"), this._addClass(this.icon, "ui-button-icon", "ui-icon"), this.options.showLabel || this._addClass("ui-button-icon-only")), s && this._addClass(this.icon, null, i), this._attachIcon(o), n ? (this._addClass(this.icon, null, "ui-widget-icon-block"), this.iconSpace && this.iconSpace.remove()) : (this.iconSpace || (this.iconSpace = t("<span> </span>"), this._addClass(this.iconSpace, "ui-button-icon-space")), this._removeClass(this.icon, null, "ui-wiget-icon-block"), this._attachIconSpace(o))
        },
        _destroy: function () {
            this.element.removeAttr("role"), this.icon && this.icon.remove(), this.iconSpace && this.iconSpace.remove(), this.hasTitle || this.element.removeAttr("title")
        },
        _attachIconSpace: function (t) {
            this.icon[/^(?:end|bottom)/.test(t) ? "before" : "after"](this.iconSpace)
        },
        _attachIcon: function (t) {
            this.element[/^(?:end|bottom)/.test(t) ? "append" : "prepend"](this.icon)
        },
        _setOptions: function (t) {
            var e = void 0 === t.showLabel ? this.options.showLabel : t.showLabel,
                i = void 0 === t.icon ? this.options.icon : t.icon;
            e || i || (t.showLabel = !0), this._super(t)
        },
        _setOption: function (t, e) {
            "icon" === t && (e ? this._updateIcon(t, e) : this.icon && (this.icon.remove(), this.iconSpace && this.iconSpace.remove())), "iconPosition" === t && this._updateIcon(t, e), "showLabel" === t && (this._toggleClass("ui-button-icon-only", null, !e), this._updateTooltip()), "label" === t && (this.isInput ? this.element.val(e) : (this.element.html(e), this.icon && (this._attachIcon(this.options.iconPosition), this._attachIconSpace(this.options.iconPosition)))), this._super(t, e), "disabled" === t && (this._toggleClass(null, "ui-state-disabled", e), this.element[0].disabled = e, e && this.element.blur())
        },
        refresh: function () {
            var t = this.element.is("input, button") ? this.element[0].disabled : this.element.hasClass("ui-button-disabled");
            t !== this.options.disabled && this._setOptions({disabled: t}), this._updateTooltip()
        }
    }), !1 !== t.uiBackCompat && (t.widget("ui.button", t.ui.button, {
        options: {text: !0, icons: {primary: null, secondary: null}}, _create: function () {
            this.options.showLabel && !this.options.text && (this.options.showLabel = this.options.text), !this.options.showLabel && this.options.text && (this.options.text = this.options.showLabel), this.options.icon || !this.options.icons.primary && !this.options.icons.secondary ? this.options.icon && (this.options.icons.primary = this.options.icon) : this.options.icons.primary ? this.options.icon = this.options.icons.primary : (this.options.icon = this.options.icons.secondary, this.options.iconPosition = "end"), this._super()
        }, _setOption: function (t, e) {
            return "text" === t ? void this._super("showLabel", e) : ("showLabel" === t && (this.options.text = e), "icon" === t && (this.options.icons.primary = e), "icons" === t && (e.primary ? (this._super("icon", e.primary), this._super("iconPosition", "beginning")) : e.secondary && (this._super("icon", e.secondary), this._super("iconPosition", "end"))), void this._superApply(arguments))
        }
    }), t.fn.button = (f = t.fn.button, function () {
        return !this.length || this.length && "INPUT" !== this[0].tagName || this.length && "INPUT" === this[0].tagName && "checkbox" !== this.attr("type") && "radio" !== this.attr("type") ? f.apply(this, arguments) : (t.ui.checkboxradio || t.error("Checkboxradio widget missing"), 0 === arguments.length ? this.checkboxradio({icon: !1}) : this.checkboxradio.apply(this, arguments))
    }), t.fn.buttonset = function () {
        return t.ui.controlgroup || t.error("Controlgroup widget missing"), "option" === arguments[0] && "items" === arguments[1] && arguments[2] ? this.controlgroup.apply(this, [arguments[0], "items.button", arguments[2]]) : "option" === arguments[0] && "items" === arguments[1] ? this.controlgroup.apply(this, [arguments[0], "items.button"]) : ("object" == typeof arguments[0] && arguments[0].items && (arguments[0].items = {button: arguments[0].items}), this.controlgroup.apply(this, arguments))
    }), t.ui.button, t.extend(t.ui, {datepicker: {version: "1.12.1"}}), t.extend(e.prototype, {
        markerClassName: "hasDatepicker",
        maxRows: 4,
        _widgetDatepicker: function () {
            return this.dpDiv
        },
        setDefaults: function (t) {
            return o(this._defaults, t || {}), this
        },
        _attachDatepicker: function (e, i) {
            var s, o, n;
            o = "div" === (s = e.nodeName.toLowerCase()) || "span" === s, e.id || (this.uuid += 1, e.id = "dp" + this.uuid), (n = this._newInst(t(e), o)).settings = t.extend({}, i || {}), "input" === s ? this._connectDatepicker(e, n) : o && this._inlineDatepicker(e, n)
        },
        _newInst: function (e, s) {
            return {
                id: e[0].id.replace(/([^A-Za-z0-9_\-])/g, "\\\\$1"),
                input: e,
                selectedDay: 0,
                selectedMonth: 0,
                selectedYear: 0,
                drawMonth: 0,
                drawYear: 0,
                inline: s,
                dpDiv: s ? i(t("<div class='" + this._inlineClass + " ui-datepicker ui-widget ui-widget-content ui-helper-clearfix ui-corner-all'></div>")) : this.dpDiv
            }
        },
        _connectDatepicker: function (e, i) {
            var s = t(e);
            i.append = t([]), i.trigger = t([]), s.hasClass(this.markerClassName) || (this._attachments(s, i), s.addClass(this.markerClassName).on("keydown", this._doKeyDown).on("keypress", this._doKeyPress).on("keyup", this._doKeyUp), this._autoSize(i), t.data(e, "datepicker", i), i.settings.disabled && this._disableDatepicker(e))
        },
        _attachments: function (e, i) {
            var s, o, n, a = this._get(i, "appendText"), r = this._get(i, "isRTL");
            i.append && i.append.remove(), a && (i.append = t("<span class='" + this._appendClass + "'>" + a + "</span>"), e[r ? "before" : "after"](i.append)), e.off("focus", this._showDatepicker), i.trigger && i.trigger.remove(), ("focus" === (s = this._get(i, "showOn")) || "both" === s) && e.on("focus", this._showDatepicker), ("button" === s || "both" === s) && (o = this._get(i, "buttonText"), n = this._get(i, "buttonImage"), i.trigger = t(this._get(i, "buttonImageOnly") ? t("<img/>").addClass(this._triggerClass).attr({
                src: n,
                alt: o,
                title: o
            }) : t("<button type='button'></button>").addClass(this._triggerClass).html(n ? t("<img/>").attr({
                src: n,
                alt: o,
                title: o
            }) : o)), e[r ? "before" : "after"](i.trigger), i.trigger.on("click", function () {
                return t.datepicker._datepickerShowing && t.datepicker._lastInput === e[0] ? t.datepicker._hideDatepicker() : t.datepicker._datepickerShowing && t.datepicker._lastInput !== e[0] ? (t.datepicker._hideDatepicker(), t.datepicker._showDatepicker(e[0])) : t.datepicker._showDatepicker(e[0]), !1
            }))
        },
        _autoSize: function (t) {
            if (this._get(t, "autoSize") && !t.inline) {
                var e, i, s, o, n = new Date(2009, 11, 20), a = this._get(t, "dateFormat");
                a.match(/[DM]/) && (e = function (t) {
                    for (i = 0, s = 0, o = 0; t.length > o; o++) t[o].length > i && (i = t[o].length, s = o);
                    return s
                }, n.setMonth(e(this._get(t, a.match(/MM/) ? "monthNames" : "monthNamesShort"))), n.setDate(e(this._get(t, a.match(/DD/) ? "dayNames" : "dayNamesShort")) + 20 - n.getDay())), t.input.attr("size", this._formatDate(t, n).length)
            }
        },
        _inlineDatepicker: function (e, i) {
            var s = t(e);
            s.hasClass(this.markerClassName) || (s.addClass(this.markerClassName).append(i.dpDiv), t.data(e, "datepicker", i), this._setDate(i, this._getDefaultDate(i), !0), this._updateDatepicker(i), this._updateAlternate(i), i.settings.disabled && this._disableDatepicker(e), i.dpDiv.css("display", "block"))
        },
        _dialogDatepicker: function (e, i, s, n, a) {
            var r, l, h, c, d, u = this._dialogInst;
            return u || (this.uuid += 1, r = "dp" + this.uuid, this._dialogInput = t("<input type='text' id='" + r + "' style='position: absolute; top: -100px; width: 0px;'/>"), this._dialogInput.on("keydown", this._doKeyDown), t("body").append(this._dialogInput), (u = this._dialogInst = this._newInst(this._dialogInput, !1)).settings = {}, t.data(this._dialogInput[0], "datepicker", u)), o(u.settings, n || {}), i = i && i.constructor === Date ? this._formatDate(u, i) : i, this._dialogInput.val(i), this._pos = a ? a.length ? a : [a.pageX, a.pageY] : null, this._pos || (l = document.documentElement.clientWidth, h = document.documentElement.clientHeight, c = document.documentElement.scrollLeft || document.body.scrollLeft, d = document.documentElement.scrollTop || document.body.scrollTop, this._pos = [l / 2 - 100 + c, h / 2 - 150 + d]), this._dialogInput.css("left", this._pos[0] + 20 + "px").css("top", this._pos[1] + "px"), u.settings.onSelect = s, this._inDialog = !0, this.dpDiv.addClass(this._dialogClass), this._showDatepicker(this._dialogInput[0]), t.blockUI && t.blockUI(this.dpDiv), t.data(this._dialogInput[0], "datepicker", u), this
        },
        _destroyDatepicker: function (e) {
            var i, s = t(e), o = t.data(e, "datepicker");
            s.hasClass(this.markerClassName) && (i = e.nodeName.toLowerCase(), t.removeData(e, "datepicker"), "input" === i ? (o.append.remove(), o.trigger.remove(), s.removeClass(this.markerClassName).off("focus", this._showDatepicker).off("keydown", this._doKeyDown).off("keypress", this._doKeyPress).off("keyup", this._doKeyUp)) : ("div" === i || "span" === i) && s.removeClass(this.markerClassName).empty(), m === o && (m = null))
        },
        _enableDatepicker: function (e) {
            var i, s, o = t(e), n = t.data(e, "datepicker");
            o.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !1, n.trigger.filter("button").each(function () {
                this.disabled = !1
            }).end().filter("img").css({
                opacity: "1.0",
                cursor: ""
            })) : ("div" === i || "span" === i) && ((s = o.children("." + this._inlineClass)).children().removeClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !1)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }))
        },
        _disableDatepicker: function (e) {
            var i, s, o = t(e), n = t.data(e, "datepicker");
            o.hasClass(this.markerClassName) && ("input" === (i = e.nodeName.toLowerCase()) ? (e.disabled = !0, n.trigger.filter("button").each(function () {
                this.disabled = !0
            }).end().filter("img").css({
                opacity: "0.5",
                cursor: "default"
            })) : ("div" === i || "span" === i) && ((s = o.children("." + this._inlineClass)).children().addClass("ui-state-disabled"), s.find("select.ui-datepicker-month, select.ui-datepicker-year").prop("disabled", !0)), this._disabledInputs = t.map(this._disabledInputs, function (t) {
                return t === e ? null : t
            }), this._disabledInputs[this._disabledInputs.length] = e)
        },
        _isDisabledDatepicker: function (t) {
            if (!t) return !1;
            for (var e = 0; this._disabledInputs.length > e; e++) if (this._disabledInputs[e] === t) return !0;
            return !1
        },
        _getInst: function (e) {
            try {
                return t.data(e, "datepicker")
            } catch (t) {
                throw "Missing instance data for this datepicker"
            }
        },
        _optionDatepicker: function (e, i, s) {
            var n, a, r, l, h = this._getInst(e);
            return 2 === arguments.length && "string" == typeof i ? "defaults" === i ? t.extend({}, t.datepicker._defaults) : h ? "all" === i ? t.extend({}, h.settings) : this._get(h, i) : null : (n = i || {}, "string" == typeof i && ((n = {})[i] = s), void (h && (this._curInst === h && this._hideDatepicker(), a = this._getDateDatepicker(e, !0), r = this._getMinMaxDate(h, "min"), l = this._getMinMaxDate(h, "max"), o(h.settings, n), null !== r && void 0 !== n.dateFormat && void 0 === n.minDate && (h.settings.minDate = this._formatDate(h, r)), null !== l && void 0 !== n.dateFormat && void 0 === n.maxDate && (h.settings.maxDate = this._formatDate(h, l)), "disabled" in n && (n.disabled ? this._disableDatepicker(e) : this._enableDatepicker(e)), this._attachments(t(e), h), this._autoSize(h), this._setDate(h, a), this._updateAlternate(h), this._updateDatepicker(h))))
        },
        _changeDatepicker: function (t, e, i) {
            this._optionDatepicker(t, e, i)
        },
        _refreshDatepicker: function (t) {
            var e = this._getInst(t);
            e && this._updateDatepicker(e)
        },
        _setDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            i && (this._setDate(i, e), this._updateDatepicker(i), this._updateAlternate(i))
        },
        _getDateDatepicker: function (t, e) {
            var i = this._getInst(t);
            return i && !i.inline && this._setDateFromField(i, e), i ? this._getDate(i) : null
        },
        _doKeyDown: function (e) {
            var i, s, o, n = t.datepicker._getInst(e.target), a = !0, r = n.dpDiv.is(".ui-datepicker-rtl");
            if (n._keyEvent = !0, t.datepicker._datepickerShowing) switch (e.keyCode) {
                case 9:
                    t.datepicker._hideDatepicker(), a = !1;
                    break;
                case 13:
                    return (o = t("td." + t.datepicker._dayOverClass + ":not(." + t.datepicker._currentClass + ")", n.dpDiv))[0] && t.datepicker._selectDay(e.target, n.selectedMonth, n.selectedYear, o[0]), (i = t.datepicker._get(n, "onSelect")) ? (s = t.datepicker._formatDate(n), i.apply(n.input ? n.input[0] : null, [s, n])) : t.datepicker._hideDatepicker(), !1;
                case 27:
                    t.datepicker._hideDatepicker();
                    break;
                case 33:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(n, "stepBigMonths") : -t.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 34:
                    t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(n, "stepBigMonths") : +t.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 35:
                    (e.ctrlKey || e.metaKey) && t.datepicker._clearDate(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 36:
                    (e.ctrlKey || e.metaKey) && t.datepicker._gotoToday(e.target), a = e.ctrlKey || e.metaKey;
                    break;
                case 37:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? 1 : -1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? -t.datepicker._get(n, "stepBigMonths") : -t.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 38:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, -7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                case 39:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, r ? -1 : 1, "D"), a = e.ctrlKey || e.metaKey, e.originalEvent.altKey && t.datepicker._adjustDate(e.target, e.ctrlKey ? +t.datepicker._get(n, "stepBigMonths") : +t.datepicker._get(n, "stepMonths"), "M");
                    break;
                case 40:
                    (e.ctrlKey || e.metaKey) && t.datepicker._adjustDate(e.target, 7, "D"), a = e.ctrlKey || e.metaKey;
                    break;
                default:
                    a = !1
            } else 36 === e.keyCode && e.ctrlKey ? t.datepicker._showDatepicker(this) : a = !1;
            a && (e.preventDefault(), e.stopPropagation())
        },
        _doKeyPress: function (e) {
            var i, s, o = t.datepicker._getInst(e.target);
            return t.datepicker._get(o, "constrainInput") ? (i = t.datepicker._possibleChars(t.datepicker._get(o, "dateFormat")), s = String.fromCharCode(null == e.charCode ? e.keyCode : e.charCode), e.ctrlKey || e.metaKey || " " > s || !i || i.indexOf(s) > -1) : void 0
        },
        _doKeyUp: function (e) {
            var i = t.datepicker._getInst(e.target);
            if (i.input.val() !== i.lastVal) try {
                t.datepicker.parseDate(t.datepicker._get(i, "dateFormat"), i.input ? i.input.val() : null, t.datepicker._getFormatConfig(i)) && (t.datepicker._setDateFromField(i), t.datepicker._updateAlternate(i), t.datepicker._updateDatepicker(i))
            } catch (t) {
            }
            return !0
        },
        _showDatepicker: function (e) {
            var i, s, n, a, r, l, h;
            ("input" !== (e = e.target || e).nodeName.toLowerCase() && (e = t("input", e.parentNode)[0]), t.datepicker._isDisabledDatepicker(e) || t.datepicker._lastInput === e) || (i = t.datepicker._getInst(e), t.datepicker._curInst && t.datepicker._curInst !== i && (t.datepicker._curInst.dpDiv.stop(!0, !0), i && t.datepicker._datepickerShowing && t.datepicker._hideDatepicker(t.datepicker._curInst.input[0])), !1 !== (n = (s = t.datepicker._get(i, "beforeShow")) ? s.apply(e, [e, i]) : {}) && (o(i.settings, n), i.lastVal = null, t.datepicker._lastInput = e, t.datepicker._setDateFromField(i), t.datepicker._inDialog && (e.value = ""), t.datepicker._pos || (t.datepicker._pos = t.datepicker._findPos(e), t.datepicker._pos[1] += e.offsetHeight), a = !1, t(e).parents().each(function () {
                return !(a |= "fixed" === t(this).css("position"))
            }), r = {
                left: t.datepicker._pos[0],
                top: t.datepicker._pos[1]
            }, t.datepicker._pos = null, i.dpDiv.empty(), i.dpDiv.css({
                position: "absolute",
                display: "block",
                top: "-1000px"
            }), t.datepicker._updateDatepicker(i), r = t.datepicker._checkOffset(i, r, a), i.dpDiv.css({
                position: t.datepicker._inDialog && t.blockUI ? "static" : a ? "fixed" : "absolute",
                display: "none",
                left: r.left + "px",
                top: r.top + "px"
            }), i.inline || (l = t.datepicker._get(i, "showAnim"), h = t.datepicker._get(i, "duration"), i.dpDiv.css("z-index", function (t) {
                for (var e, i; t.length && t[0] !== document;) {
                    if (("absolute" === (e = t.css("position")) || "relative" === e || "fixed" === e) && (i = parseInt(t.css("zIndex"), 10), !isNaN(i) && 0 !== i)) return i;
                    t = t.parent()
                }
                return 0
            }(t(e)) + 1), t.datepicker._datepickerShowing = !0, t.effects && t.effects.effect[l] ? i.dpDiv.show(l, t.datepicker._get(i, "showOptions"), h) : i.dpDiv[l || "show"](l ? h : null), t.datepicker._shouldFocusInput(i) && i.input.trigger("focus"), t.datepicker._curInst = i)))
        },
        _updateDatepicker: function (e) {
            this.maxRows = 4, m = e, e.dpDiv.empty().append(this._generateHTML(e)), this._attachHandlers(e);
            var i, o = this._getNumberOfMonths(e), n = o[1], a = e.dpDiv.find("." + this._dayOverClass + " a");
            a.length > 0 && s.apply(a.get(0)), e.dpDiv.removeClass("ui-datepicker-multi-2 ui-datepicker-multi-3 ui-datepicker-multi-4").width(""), n > 1 && e.dpDiv.addClass("ui-datepicker-multi-" + n).css("width", 17 * n + "em"), e.dpDiv[(1 !== o[0] || 1 !== o[1] ? "add" : "remove") + "Class"]("ui-datepicker-multi"), e.dpDiv[(this._get(e, "isRTL") ? "add" : "remove") + "Class"]("ui-datepicker-rtl"), e === t.datepicker._curInst && t.datepicker._datepickerShowing && t.datepicker._shouldFocusInput(e) && e.input.trigger("focus"), e.yearshtml && (i = e.yearshtml, setTimeout(function () {
                i === e.yearshtml && e.yearshtml && e.dpDiv.find("select.ui-datepicker-year:first").replaceWith(e.yearshtml), i = e.yearshtml = null
            }, 0))
        },
        _shouldFocusInput: function (t) {
            return t.input && t.input.is(":visible") && !t.input.is(":disabled") && !t.input.is(":focus")
        },
        _checkOffset: function (e, i, s) {
            var o = e.dpDiv.outerWidth(), n = e.dpDiv.outerHeight(), a = e.input ? e.input.outerWidth() : 0,
                r = e.input ? e.input.outerHeight() : 0,
                l = document.documentElement.clientWidth + (s ? 0 : t(document).scrollLeft()),
                h = document.documentElement.clientHeight + (s ? 0 : t(document).scrollTop());
            return i.left -= this._get(e, "isRTL") ? o - a : 0, i.left -= s && i.left === e.input.offset().left ? t(document).scrollLeft() : 0, i.top -= s && i.top === e.input.offset().top + r ? t(document).scrollTop() : 0, i.left -= Math.min(i.left, i.left + o > l && l > o ? Math.abs(i.left + o - l) : 0), i.top -= Math.min(i.top, i.top + n > h && h > n ? Math.abs(n + r) : 0), i
        },
        _findPos: function (e) {
            for (var i, s = this._getInst(e), o = this._get(s, "isRTL"); e && ("hidden" === e.type || 1 !== e.nodeType || t.expr.filters.hidden(e));) e = e[o ? "previousSibling" : "nextSibling"];
            return [(i = t(e).offset()).left, i.top]
        },
        _hideDatepicker: function (e) {
            var i, s, o, n, a = this._curInst;
            !a || e && a !== t.data(e, "datepicker") || this._datepickerShowing && (i = this._get(a, "showAnim"), s = this._get(a, "duration"), o = function () {
                t.datepicker._tidyDialog(a)
            }, t.effects && (t.effects.effect[i] || t.effects[i]) ? a.dpDiv.hide(i, t.datepicker._get(a, "showOptions"), s, o) : a.dpDiv["slideDown" === i ? "slideUp" : "fadeIn" === i ? "fadeOut" : "hide"](i ? s : null, o), i || o(), this._datepickerShowing = !1, (n = this._get(a, "onClose")) && n.apply(a.input ? a.input[0] : null, [a.input ? a.input.val() : "", a]), this._lastInput = null, this._inDialog && (this._dialogInput.css({
                position: "absolute",
                left: "0",
                top: "-100px"
            }), t.blockUI && (t.unblockUI(), t("body").append(this.dpDiv))), this._inDialog = !1)
        },
        _tidyDialog: function (t) {
            t.dpDiv.removeClass(this._dialogClass).off(".ui-datepicker-calendar")
        },
        _checkExternalClick: function (e) {
            if (t.datepicker._curInst) {
                var i = t(e.target), s = t.datepicker._getInst(i[0]);
                (i[0].id !== t.datepicker._mainDivId && 0 === i.parents("#" + t.datepicker._mainDivId).length && !i.hasClass(t.datepicker.markerClassName) && !i.closest("." + t.datepicker._triggerClass).length && t.datepicker._datepickerShowing && (!t.datepicker._inDialog || !t.blockUI) || i.hasClass(t.datepicker.markerClassName) && t.datepicker._curInst !== s) && t.datepicker._hideDatepicker()
            }
        },
        _adjustDate: function (e, i, s) {
            var o = t(e), n = this._getInst(o[0]);
            this._isDisabledDatepicker(o[0]) || (this._adjustInstDate(n, i + ("M" === s ? this._get(n, "showCurrentAtPos") : 0), s), this._updateDatepicker(n))
        },
        _gotoToday: function (e) {
            var i, s = t(e), o = this._getInst(s[0]);
            this._get(o, "gotoCurrent") && o.currentDay ? (o.selectedDay = o.currentDay, o.drawMonth = o.selectedMonth = o.currentMonth, o.drawYear = o.selectedYear = o.currentYear) : (i = new Date, o.selectedDay = i.getDate(), o.drawMonth = o.selectedMonth = i.getMonth(), o.drawYear = o.selectedYear = i.getFullYear()), this._notifyChange(o), this._adjustDate(s)
        },
        _selectMonthYear: function (e, i, s) {
            var o = t(e), n = this._getInst(o[0]);
            n["selected" + ("M" === s ? "Month" : "Year")] = n["draw" + ("M" === s ? "Month" : "Year")] = parseInt(i.options[i.selectedIndex].value, 10), this._notifyChange(n), this._adjustDate(o)
        },
        _selectDay: function (e, i, s, o) {
            var n, a = t(e);
            t(o).hasClass(this._unselectableClass) || this._isDisabledDatepicker(a[0]) || ((n = this._getInst(a[0])).selectedDay = n.currentDay = t("a", o).html(), n.selectedMonth = n.currentMonth = i, n.selectedYear = n.currentYear = s, this._selectDate(e, this._formatDate(n, n.currentDay, n.currentMonth, n.currentYear)))
        },
        _clearDate: function (e) {
            var i = t(e);
            this._selectDate(i, "")
        },
        _selectDate: function (e, i) {
            var s, o = t(e), n = this._getInst(o[0]);
            i = null != i ? i : this._formatDate(n), n.input && n.input.val(i), this._updateAlternate(n), (s = this._get(n, "onSelect")) ? s.apply(n.input ? n.input[0] : null, [i, n]) : n.input && n.input.trigger("change"), n.inline ? this._updateDatepicker(n) : (this._hideDatepicker(), this._lastInput = n.input[0], "object" != typeof n.input[0] && n.input.trigger("focus"), this._lastInput = null)
        },
        _updateAlternate: function (e) {
            var i, s, o, n = this._get(e, "altField");
            n && (i = this._get(e, "altFormat") || this._get(e, "dateFormat"), s = this._getDate(e), o = this.formatDate(i, s, this._getFormatConfig(e)), t(n).val(o))
        },
        noWeekends: function (t) {
            var e = t.getDay();
            return [e > 0 && 6 > e, ""]
        },
        iso8601Week: function (t) {
            var e, i = new Date(t.getTime());
            return i.setDate(i.getDate() + 4 - (i.getDay() || 7)), e = i.getTime(), i.setMonth(0), i.setDate(1), Math.floor(Math.round((e - i) / 864e5) / 7) + 1
        },
        parseDate: function (e, i, s) {
            if (null == e || null == i) throw "Invalid arguments";
            if ("" === (i = "object" == typeof i ? "" + i : i + "")) return null;
            var o, n, a, r, l = 0, h = (s ? s.shortYearCutoff : null) || this._defaults.shortYearCutoff,
                c = "string" != typeof h ? h : (new Date).getFullYear() % 100 + parseInt(h, 10),
                d = (s ? s.dayNamesShort : null) || this._defaults.dayNamesShort,
                u = (s ? s.dayNames : null) || this._defaults.dayNames,
                p = (s ? s.monthNamesShort : null) || this._defaults.monthNamesShort,
                f = (s ? s.monthNames : null) || this._defaults.monthNames, m = -1, g = -1, v = -1, y = -1, b = !1,
                w = function (t) {
                    var i = e.length > o + 1 && e.charAt(o + 1) === t;
                    return i && o++ , i
                }, _ = function (t) {
                    var e = w(t), s = "@" === t ? 14 : "!" === t ? 20 : "y" === t && e ? 4 : "o" === t ? 3 : 2,
                        o = RegExp("^\\d{" + ("y" === t ? s : 1) + "," + s + "}"), n = i.substring(l).match(o);
                    if (!n) throw "Missing number at position " + l;
                    return l += n[0].length, parseInt(n[0], 10)
                }, x = function (e, s, o) {
                    var n = -1, a = t.map(w(e) ? o : s, function (t, e) {
                        return [[e, t]]
                    }).sort(function (t, e) {
                        return -(t[1].length - e[1].length)
                    });
                    if (t.each(a, function (t, e) {
                        var s = e[1];
                        return i.substr(l, s.length).toLowerCase() === s.toLowerCase() ? (n = e[0], l += s.length, !1) : void 0
                    }), -1 !== n) return n + 1;
                    throw "Unknown name at position " + l
                }, k = function () {
                    if (i.charAt(l) !== e.charAt(o)) throw "Unexpected literal at position " + l;
                    l++
                };
            for (o = 0; e.length > o; o++) if (b) "'" !== e.charAt(o) || w("'") ? k() : b = !1; else switch (e.charAt(o)) {
                case "d":
                    v = _("d");
                    break;
                case "D":
                    x("D", d, u);
                    break;
                case "o":
                    y = _("o");
                    break;
                case "m":
                    g = _("m");
                    break;
                case "M":
                    g = x("M", p, f);
                    break;
                case "y":
                    m = _("y");
                    break;
                case "@":
                    m = (r = new Date(_("@"))).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case "!":
                    m = (r = new Date((_("!") - this._ticksTo1970) / 1e4)).getFullYear(), g = r.getMonth() + 1, v = r.getDate();
                    break;
                case "'":
                    w("'") ? k() : b = !0;
                    break;
                default:
                    k()
            }
            if (i.length > l && (a = i.substr(l), !/^\s+/.test(a))) throw "Extra/unparsed characters found in date: " + a;
            if (-1 === m ? m = (new Date).getFullYear() : 100 > m && (m += (new Date).getFullYear() - (new Date).getFullYear() % 100 + (c >= m ? 0 : -100)), y > -1) for (g = 1, v = y; !((n = this._getDaysInMonth(m, g - 1)) >= v);) g++ , v -= n;
            if ((r = this._daylightSavingAdjust(new Date(m, g - 1, v))).getFullYear() !== m || r.getMonth() + 1 !== g || r.getDate() !== v) throw "Invalid date";
            return r
        },
        ATOM: "yy-mm-dd",
        COOKIE: "D, dd M yy",
        ISO_8601: "yy-mm-dd",
        RFC_822: "D, d M y",
        RFC_850: "DD, dd-M-y",
        RFC_1036: "D, d M y",
        RFC_1123: "D, d M yy",
        RFC_2822: "D, d M yy",
        RSS: "D, d M y",
        TICKS: "!",
        TIMESTAMP: "@",
        W3C: "yy-mm-dd",
        _ticksTo1970: 864e9 * (718685 + Math.floor(492.5) - Math.floor(19.7) + Math.floor(4.925)),
        formatDate: function (t, e, i) {
            if (!e) return "";
            var s, o = (i ? i.dayNamesShort : null) || this._defaults.dayNamesShort,
                n = (i ? i.dayNames : null) || this._defaults.dayNames,
                a = (i ? i.monthNamesShort : null) || this._defaults.monthNamesShort,
                r = (i ? i.monthNames : null) || this._defaults.monthNames, l = function (e) {
                    var i = t.length > s + 1 && t.charAt(s + 1) === e;
                    return i && s++ , i
                }, h = function (t, e, i) {
                    var s = "" + e;
                    if (l(t)) for (; i > s.length;) s = "0" + s;
                    return s
                }, c = function (t, e, i, s) {
                    return l(t) ? s[e] : i[e]
                }, d = "", u = !1;
            if (e) for (s = 0; t.length > s; s++) if (u) "'" !== t.charAt(s) || l("'") ? d += t.charAt(s) : u = !1; else switch (t.charAt(s)) {
                case "d":
                    d += h("d", e.getDate(), 2);
                    break;
                case "D":
                    d += c("D", e.getDay(), o, n);
                    break;
                case "o":
                    d += h("o", Math.round((new Date(e.getFullYear(), e.getMonth(), e.getDate()).getTime() - new Date(e.getFullYear(), 0, 0).getTime()) / 864e5), 3);
                    break;
                case "m":
                    d += h("m", e.getMonth() + 1, 2);
                    break;
                case "M":
                    d += c("M", e.getMonth(), a, r);
                    break;
                case "y":
                    d += l("y") ? e.getFullYear() : (10 > e.getFullYear() % 100 ? "0" : "") + e.getFullYear() % 100;
                    break;
                case "@":
                    d += e.getTime();
                    break;
                case "!":
                    d += 1e4 * e.getTime() + this._ticksTo1970;
                    break;
                case "'":
                    l("'") ? d += "'" : u = !0;
                    break;
                default:
                    d += t.charAt(s)
            }
            return d
        },
        _possibleChars: function (t) {
            var e, i = "", s = !1, o = function (i) {
                var s = t.length > e + 1 && t.charAt(e + 1) === i;
                return s && e++ , s
            };
            for (e = 0; t.length > e; e++) if (s) "'" !== t.charAt(e) || o("'") ? i += t.charAt(e) : s = !1; else switch (t.charAt(e)) {
                case "d":
                case "m":
                case "y":
                case "@":
                    i += "0123456789";
                    break;
                case "D":
                case "M":
                    return null;
                case "'":
                    o("'") ? i += "'" : s = !0;
                    break;
                default:
                    i += t.charAt(e)
            }
            return i
        },
        _get: function (t, e) {
            return void 0 !== t.settings[e] ? t.settings[e] : this._defaults[e]
        },
        _setDateFromField: function (t, e) {
            if (t.input.val() !== t.lastVal) {
                var i = this._get(t, "dateFormat"), s = t.lastVal = t.input ? t.input.val() : null,
                    o = this._getDefaultDate(t), n = o, a = this._getFormatConfig(t);
                try {
                    n = this.parseDate(i, s, a) || o
                } catch (t) {
                    s = e ? "" : s
                }
                t.selectedDay = n.getDate(), t.drawMonth = t.selectedMonth = n.getMonth(), t.drawYear = t.selectedYear = n.getFullYear(), t.currentDay = s ? n.getDate() : 0, t.currentMonth = s ? n.getMonth() : 0, t.currentYear = s ? n.getFullYear() : 0, this._adjustInstDate(t)
            }
        },
        _getDefaultDate: function (t) {
            return this._restrictMinMax(t, this._determineDate(t, this._get(t, "defaultDate"), new Date))
        },
        _determineDate: function (e, i, s) {
            var o, n, a = null == i || "" === i ? s : "string" == typeof i ? function (i) {
                try {
                    return t.datepicker.parseDate(t.datepicker._get(e, "dateFormat"), i, t.datepicker._getFormatConfig(e))
                } catch (t) {
                }
                for (var s = (i.toLowerCase().match(/^c/) ? t.datepicker._getDate(e) : null) || new Date, o = s.getFullYear(), n = s.getMonth(), a = s.getDate(), r = /([+\-]?[0-9]+)\s*(d|D|w|W|m|M|y|Y)?/g, l = r.exec(i); l;) {
                    switch (l[2] || "d") {
                        case "d":
                        case "D":
                            a += parseInt(l[1], 10);
                            break;
                        case "w":
                        case "W":
                            a += 7 * parseInt(l[1], 10);
                            break;
                        case "m":
                        case "M":
                            n += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, n));
                            break;
                        case "y":
                        case "Y":
                            o += parseInt(l[1], 10), a = Math.min(a, t.datepicker._getDaysInMonth(o, n))
                    }
                    l = r.exec(i)
                }
                return new Date(o, n, a)
            }(i) : "number" == typeof i ? isNaN(i) ? s : (o = i, (n = new Date).setDate(n.getDate() + o), n) : new Date(i.getTime());
            return (a = a && "Invalid Date" == "" + a ? s : a) && (a.setHours(0), a.setMinutes(0), a.setSeconds(0), a.setMilliseconds(0)), this._daylightSavingAdjust(a)
        },
        _daylightSavingAdjust: function (t) {
            return t ? (t.setHours(t.getHours() > 12 ? t.getHours() + 2 : 0), t) : null
        },
        _setDate: function (t, e, i) {
            var s = !e, o = t.selectedMonth, n = t.selectedYear,
                a = this._restrictMinMax(t, this._determineDate(t, e, new Date));
            t.selectedDay = t.currentDay = a.getDate(), t.drawMonth = t.selectedMonth = t.currentMonth = a.getMonth(), t.drawYear = t.selectedYear = t.currentYear = a.getFullYear(), o === t.selectedMonth && n === t.selectedYear || i || this._notifyChange(t), this._adjustInstDate(t), t.input && t.input.val(s ? "" : this._formatDate(t))
        },
        _getDate: function (t) {
            return !t.currentYear || t.input && "" === t.input.val() ? null : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay))
        },
        _attachHandlers: function (e) {
            var i = this._get(e, "stepMonths"), s = "#" + e.id.replace(/\\\\/g, "\\");
            e.dpDiv.find("[data-handler]").map(function () {
                var e = {
                    prev: function () {
                        t.datepicker._adjustDate(s, -i, "M")
                    }, next: function () {
                        t.datepicker._adjustDate(s, +i, "M")
                    }, hide: function () {
                        t.datepicker._hideDatepicker()
                    }, today: function () {
                        t.datepicker._gotoToday(s)
                    }, selectDay: function () {
                        return t.datepicker._selectDay(s, +this.getAttribute("data-month"), +this.getAttribute("data-year"), this), !1
                    }, selectMonth: function () {
                        return t.datepicker._selectMonthYear(s, this, "M"), !1
                    }, selectYear: function () {
                        return t.datepicker._selectMonthYear(s, this, "Y"), !1
                    }
                };
                t(this).on(this.getAttribute("data-event"), e[this.getAttribute("data-handler")])
            })
        },
        _generateHTML: function (t) {
            var e, i, s, o, n, a, r, l, h, c, d, u, p, f, m, g, v, y, b, w, _, x, k, C, T, S, z, I, P, D, W, M, E, O, H,
                L, A, $, F, R = new Date,
                j = this._daylightSavingAdjust(new Date(R.getFullYear(), R.getMonth(), R.getDate())),
                N = this._get(t, "isRTL"), B = this._get(t, "showButtonPanel"), Y = this._get(t, "hideIfNoPrevNext"),
                q = this._get(t, "navigationAsDateFormat"), U = this._getNumberOfMonths(t),
                Q = this._get(t, "showCurrentAtPos"), X = this._get(t, "stepMonths"), V = 1 !== U[0] || 1 !== U[1],
                K = this._daylightSavingAdjust(t.currentDay ? new Date(t.currentYear, t.currentMonth, t.currentDay) : new Date(9999, 9, 9)),
                Z = this._getMinMaxDate(t, "min"), G = this._getMinMaxDate(t, "max"), J = t.drawMonth - Q,
                tt = t.drawYear;
            if (0 > J && (J += 12, tt--), G) for (e = this._daylightSavingAdjust(new Date(G.getFullYear(), G.getMonth() - U[0] * U[1] + 1, G.getDate())), e = Z && Z > e ? Z : e; this._daylightSavingAdjust(new Date(tt, J, 1)) > e;) J-- , 0 > J && (J = 11, tt--);
            for (t.drawMonth = J, t.drawYear = tt, i = this._get(t, "prevText"), i = q ? this.formatDate(i, this._daylightSavingAdjust(new Date(tt, J - X, 1)), this._getFormatConfig(t)) : i, s = this._canAdjustMonth(t, -1, tt, J) ? "<a class='ui-datepicker-prev ui-corner-all' data-handler='prev' data-event='click' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w") + "'>" + i + "</span></a>" : Y ? "" : "<a class='ui-datepicker-prev ui-corner-all ui-state-disabled' title='" + i + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "e" : "w") + "'>" + i + "</span></a>", o = this._get(t, "nextText"), o = q ? this.formatDate(o, this._daylightSavingAdjust(new Date(tt, J + X, 1)), this._getFormatConfig(t)) : o, n = this._canAdjustMonth(t, 1, tt, J) ? "<a class='ui-datepicker-next ui-corner-all' data-handler='next' data-event='click' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e") + "'>" + o + "</span></a>" : Y ? "" : "<a class='ui-datepicker-next ui-corner-all ui-state-disabled' title='" + o + "'><span class='ui-icon ui-icon-circle-triangle-" + (N ? "w" : "e") + "'>" + o + "</span></a>", a = this._get(t, "currentText"), r = this._get(t, "gotoCurrent") && t.currentDay ? K : j, a = q ? this.formatDate(a, r, this._getFormatConfig(t)) : a, l = t.inline ? "" : "<button type='button' class='ui-datepicker-close ui-state-default ui-priority-primary ui-corner-all' data-handler='hide' data-event='click'>" + this._get(t, "closeText") + "</button>", h = B ? "<div class='ui-datepicker-buttonpane ui-widget-content'>" + (N ? l : "") + (this._isInRange(t, r) ? "<button type='button' class='ui-datepicker-current ui-state-default ui-priority-secondary ui-corner-all' data-handler='today' data-event='click'>" + a + "</button>" : "") + (N ? "" : l) + "</div>" : "", c = parseInt(this._get(t, "firstDay"), 10), c = isNaN(c) ? 0 : c, d = this._get(t, "showWeek"), u = this._get(t, "dayNames"), p = this._get(t, "dayNamesMin"), f = this._get(t, "monthNames"), m = this._get(t, "monthNamesShort"), g = this._get(t, "beforeShowDay"), v = this._get(t, "showOtherMonths"), y = this._get(t, "selectOtherMonths"), b = this._getDefaultDate(t), w = "", x = 0; U[0] > x; x++) {
                for (k = "", this.maxRows = 4, C = 0; U[1] > C; C++) {
                    if (T = this._daylightSavingAdjust(new Date(tt, J, t.selectedDay)), S = " ui-corner-all", z = "", V) {
                        if (z += "<div class='ui-datepicker-group", U[1] > 1) switch (C) {
                            case 0:
                                z += " ui-datepicker-group-first", S = " ui-corner-" + (N ? "right" : "left");
                                break;
                            case U[1] - 1:
                                z += " ui-datepicker-group-last", S = " ui-corner-" + (N ? "left" : "right");
                                break;
                            default:
                                z += " ui-datepicker-group-middle", S = ""
                        }
                        z += "'>"
                    }
                    for (z += "<div class='ui-datepicker-header ui-widget-header ui-helper-clearfix" + S + "'>" + (/all|left/.test(S) && 0 === x ? N ? n : s : "") + (/all|right/.test(S) && 0 === x ? N ? s : n : "") + this._generateMonthYearHeader(t, J, tt, Z, G, x > 0 || C > 0, f, m) + "</div><table class='ui-datepicker-calendar'><thead><tr>", I = d ? "<th class='ui-datepicker-week-col'>" + this._get(t, "weekHeader") + "</th>" : "", _ = 0; 7 > _; _++) P = (_ + c) % 7, I += "<th scope='col'" + ((_ + c + 6) % 7 >= 5 ? " class='ui-datepicker-week-end'" : "") + "><span title='" + u[P] + "'>" + p[P] + "</span></th>";
                    for (z += I + "</tr></thead><tbody>", D = this._getDaysInMonth(tt, J), tt === t.selectedYear && J === t.selectedMonth && (t.selectedDay = Math.min(t.selectedDay, D)), W = (this._getFirstDayOfMonth(tt, J) - c + 7) % 7, M = Math.ceil((W + D) / 7), E = V && this.maxRows > M ? this.maxRows : M, this.maxRows = E, O = this._daylightSavingAdjust(new Date(tt, J, 1 - W)), H = 0; E > H; H++) {
                        for (z += "<tr>", L = d ? "<td class='ui-datepicker-week-col'>" + this._get(t, "calculateWeek")(O) + "</td>" : "", _ = 0; 7 > _; _++) A = g ? g.apply(t.input ? t.input[0] : null, [O]) : [!0, ""], $ = O.getMonth() !== J, F = $ && !y || !A[0] || Z && Z > O || G && O > G, L += "<td class='" + ((_ + c + 6) % 7 >= 5 ? " ui-datepicker-week-end" : "") + ($ ? " ui-datepicker-other-month" : "") + (O.getTime() === T.getTime() && J === t.selectedMonth && t._keyEvent || b.getTime() === O.getTime() && b.getTime() === T.getTime() ? " " + this._dayOverClass : "") + (F ? " " + this._unselectableClass + " ui-state-disabled" : "") + ($ && !v ? "" : " " + A[1] + (O.getTime() === K.getTime() ? " " + this._currentClass : "") + (O.getTime() === j.getTime() ? " ui-datepicker-today" : "")) + "'" + ($ && !v || !A[2] ? "" : " title='" + A[2].replace(/'/g, "&#39;") + "'") + (F ? "" : " data-handler='selectDay' data-event='click' data-month='" + O.getMonth() + "' data-year='" + O.getFullYear() + "'") + ">" + ($ && !v ? "&#xa0;" : F ? "<span class='ui-state-default'>" + O.getDate() + "</span>" : "<a class='ui-state-default" + (O.getTime() === j.getTime() ? " ui-state-highlight" : "") + (O.getTime() === K.getTime() ? " ui-state-active" : "") + ($ ? " ui-priority-secondary" : "") + "' href='#'>" + O.getDate() + "</a>") + "</td>", O.setDate(O.getDate() + 1), O = this._daylightSavingAdjust(O);
                        z += L + "</tr>"
                    }
                    ++J > 11 && (J = 0, tt++), k += z += "</tbody></table>" + (V ? "</div>" + (U[0] > 0 && C === U[1] - 1 ? "<div class='ui-datepicker-row-break'></div>" : "") : "")
                }
                w += k
            }
            return w += h, t._keyEvent = !1, w
        },
        _generateMonthYearHeader: function (t, e, i, s, o, n, a, r) {
            var l, h, c, d, u, p, f, m, g = this._get(t, "changeMonth"), v = this._get(t, "changeYear"),
                y = this._get(t, "showMonthAfterYear"), b = "<div class='ui-datepicker-title'>", w = "";
            if (n || !g) w += "<span class='ui-datepicker-month'>" + a[e] + "</span>"; else {
                for (l = s && s.getFullYear() === i, h = o && o.getFullYear() === i, w += "<select class='ui-datepicker-month' data-handler='selectMonth' data-event='change'>", c = 0; 12 > c; c++) (!l || c >= s.getMonth()) && (!h || o.getMonth() >= c) && (w += "<option value='" + c + "'" + (c === e ? " selected='selected'" : "") + ">" + r[c] + "</option>");
                w += "</select>"
            }
            if (y || (b += w + (!n && g && v ? "" : "&#xa0;")), !t.yearshtml) if (t.yearshtml = "", n || !v) b += "<span class='ui-datepicker-year'>" + i + "</span>"; else {
                for (d = this._get(t, "yearRange").split(":"), u = (new Date).getFullYear(), f = (p = function (t) {
                    var e = t.match(/c[+\-].*/) ? i + parseInt(t.substring(1), 10) : t.match(/[+\-].*/) ? u + parseInt(t, 10) : parseInt(t, 10);
                    return isNaN(e) ? u : e
                })(d[0]), m = Math.max(f, p(d[1] || "")), f = s ? Math.max(f, s.getFullYear()) : f, m = o ? Math.min(m, o.getFullYear()) : m, t.yearshtml += "<select class='ui-datepicker-year' data-handler='selectYear' data-event='change'>"; m >= f; f++) t.yearshtml += "<option value='" + f + "'" + (f === i ? " selected='selected'" : "") + ">" + f + "</option>";
                t.yearshtml += "</select>", b += t.yearshtml, t.yearshtml = null
            }
            return b += this._get(t, "yearSuffix"), y && (b += (!n && g && v ? "" : "&#xa0;") + w), b + "</div>"
        },
        _adjustInstDate: function (t, e, i) {
            var s = t.selectedYear + ("Y" === i ? e : 0), o = t.selectedMonth + ("M" === i ? e : 0),
                n = Math.min(t.selectedDay, this._getDaysInMonth(s, o)) + ("D" === i ? e : 0),
                a = this._restrictMinMax(t, this._daylightSavingAdjust(new Date(s, o, n)));
            t.selectedDay = a.getDate(), t.drawMonth = t.selectedMonth = a.getMonth(), t.drawYear = t.selectedYear = a.getFullYear(), ("M" === i || "Y" === i) && this._notifyChange(t)
        },
        _restrictMinMax: function (t, e) {
            var i = this._getMinMaxDate(t, "min"), s = this._getMinMaxDate(t, "max"), o = i && i > e ? i : e;
            return s && o > s ? s : o
        },
        _notifyChange: function (t) {
            var e = this._get(t, "onChangeMonthYear");
            e && e.apply(t.input ? t.input[0] : null, [t.selectedYear, t.selectedMonth + 1, t])
        },
        _getNumberOfMonths: function (t) {
            var e = this._get(t, "numberOfMonths");
            return null == e ? [1, 1] : "number" == typeof e ? [1, e] : e
        },
        _getMinMaxDate: function (t, e) {
            return this._determineDate(t, this._get(t, e + "Date"), null)
        },
        _getDaysInMonth: function (t, e) {
            return 32 - this._daylightSavingAdjust(new Date(t, e, 32)).getDate()
        },
        _getFirstDayOfMonth: function (t, e) {
            return new Date(t, e, 1).getDay()
        },
        _canAdjustMonth: function (t, e, i, s) {
            var o = this._getNumberOfMonths(t),
                n = this._daylightSavingAdjust(new Date(i, s + (0 > e ? e : o[0] * o[1]), 1));
            return 0 > e && n.setDate(this._getDaysInMonth(n.getFullYear(), n.getMonth())), this._isInRange(t, n)
        },
        _isInRange: function (t, e) {
            var i, s, o = this._getMinMaxDate(t, "min"), n = this._getMinMaxDate(t, "max"), a = null, r = null,
                l = this._get(t, "yearRange");
            return l && (i = l.split(":"), s = (new Date).getFullYear(), a = parseInt(i[0], 10), r = parseInt(i[1], 10), i[0].match(/[+\-].*/) && (a += s), i[1].match(/[+\-].*/) && (r += s)), (!o || e.getTime() >= o.getTime()) && (!n || e.getTime() <= n.getTime()) && (!a || e.getFullYear() >= a) && (!r || r >= e.getFullYear())
        },
        _getFormatConfig: function (t) {
            var e = this._get(t, "shortYearCutoff");
            return {
                shortYearCutoff: e = "string" != typeof e ? e : (new Date).getFullYear() % 100 + parseInt(e, 10),
                dayNamesShort: this._get(t, "dayNamesShort"),
                dayNames: this._get(t, "dayNames"),
                monthNamesShort: this._get(t, "monthNamesShort"),
                monthNames: this._get(t, "monthNames")
            }
        },
        _formatDate: function (t, e, i, s) {
            e || (t.currentDay = t.selectedDay, t.currentMonth = t.selectedMonth, t.currentYear = t.selectedYear);
            var o = e ? "object" == typeof e ? e : this._daylightSavingAdjust(new Date(s, i, e)) : this._daylightSavingAdjust(new Date(t.currentYear, t.currentMonth, t.currentDay));
            return this.formatDate(this._get(t, "dateFormat"), o, this._getFormatConfig(t))
        }
    }), t.fn.datepicker = function (e) {
        if (!this.length) return this;
        t.datepicker.initialized || (t(document).on("mousedown", t.datepicker._checkExternalClick), t.datepicker.initialized = !0), 0 === t("#" + t.datepicker._mainDivId).length && t("body").append(t.datepicker.dpDiv);
        var i = Array.prototype.slice.call(arguments, 1);
        return "string" != typeof e || "isDisabled" !== e && "getDate" !== e && "widget" !== e ? "option" === e && 2 === arguments.length && "string" == typeof arguments[1] ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i)) : this.each(function () {
            "string" == typeof e ? t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this].concat(i)) : t.datepicker._attachDatepicker(this, e)
        }) : t.datepicker["_" + e + "Datepicker"].apply(t.datepicker, [this[0]].concat(i))
    }, t.datepicker = new e, t.datepicker.initialized = !1, t.datepicker.uuid = (new Date).getTime(), t.datepicker.version = "1.12.1", t.datepicker, t.widget("ui.dialog", {
        version: "1.12.1",
        options: {
            appendTo: "body",
            autoOpen: !0,
            buttons: [],
            classes: {"ui-dialog": "ui-corner-all", "ui-dialog-titlebar": "ui-corner-all"},
            closeOnEscape: !0,
            closeText: "Close",
            draggable: !0,
            hide: null,
            height: "auto",
            maxHeight: null,
            maxWidth: null,
            minHeight: 150,
            minWidth: 150,
            modal: !1,
            position: {
                my: "center", at: "center", of: window, collision: "fit", using: function (e) {
                    var i = t(this).css(e).offset().top;
                    0 > i && t(this).css("top", e.top - i)
                }
            },
            resizable: !0,
            show: null,
            title: null,
            width: 300,
            beforeClose: null,
            close: null,
            drag: null,
            dragStart: null,
            dragStop: null,
            focus: null,
            open: null,
            resize: null,
            resizeStart: null,
            resizeStop: null
        },
        sizeRelatedOptions: {
            buttons: !0,
            height: !0,
            maxHeight: !0,
            maxWidth: !0,
            minHeight: !0,
            minWidth: !0,
            width: !0
        },
        resizableRelatedOptions: {maxHeight: !0, maxWidth: !0, minHeight: !0, minWidth: !0},
        _create: function () {
            this.originalCss = {
                display: this.element[0].style.display,
                width: this.element[0].style.width,
                minHeight: this.element[0].style.minHeight,
                maxHeight: this.element[0].style.maxHeight,
                height: this.element[0].style.height
            }, this.originalPosition = {
                parent: this.element.parent(),
                index: this.element.parent().children().index(this.element)
            }, this.originalTitle = this.element.attr("title"), null == this.options.title && null != this.originalTitle && (this.options.title = this.originalTitle), this.options.disabled && (this.options.disabled = !1), this._createWrapper(), this.element.show().removeAttr("title").appendTo(this.uiDialog), this._addClass("ui-dialog-content", "ui-widget-content"), this._createTitlebar(), this._createButtonPane(), this.options.draggable && t.fn.draggable && this._makeDraggable(), this.options.resizable && t.fn.resizable && this._makeResizable(), this._isOpen = !1, this._trackFocus()
        },
        _init: function () {
            this.options.autoOpen && this.open()
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e.jquery || e.nodeType) ? t(e) : this.document.find(e || "body").eq(0)
        },
        _destroy: function () {
            var t, e = this.originalPosition;
            this._untrackInstance(), this._destroyOverlay(), this.element.removeUniqueId().css(this.originalCss).detach(), this.uiDialog.remove(), this.originalTitle && this.element.attr("title", this.originalTitle), (t = e.parent.children().eq(e.index)).length && t[0] !== this.element[0] ? t.before(this.element) : e.parent.append(this.element)
        },
        widget: function () {
            return this.uiDialog
        },
        disable: t.noop,
        enable: t.noop,
        close: function (e) {
            var i = this;
            this._isOpen && !1 !== this._trigger("beforeClose", e) && (this._isOpen = !1, this._focusedElement = null, this._destroyOverlay(), this._untrackInstance(), this.opener.filter(":focusable").trigger("focus").length || t.ui.safeBlur(t.ui.safeActiveElement(this.document[0])), this._hide(this.uiDialog, this.options.hide, function () {
                i._trigger("close", e)
            }))
        },
        isOpen: function () {
            return this._isOpen
        },
        moveToTop: function () {
            this._moveToTop()
        },
        _moveToTop: function (e, i) {
            var s = !1, o = this.uiDialog.siblings(".ui-front:visible").map(function () {
                return +t(this).css("z-index")
            }).get(), n = Math.max.apply(null, o);
            return n >= +this.uiDialog.css("z-index") && (this.uiDialog.css("z-index", n + 1), s = !0), s && !i && this._trigger("focus", e), s
        },
        open: function () {
            var e = this;
            return this._isOpen ? void (this._moveToTop() && this._focusTabbable()) : (this._isOpen = !0, this.opener = t(t.ui.safeActiveElement(this.document[0])), this._size(), this._position(), this._createOverlay(), this._moveToTop(null, !0), this.overlay && this.overlay.css("z-index", this.uiDialog.css("z-index") - 1), this._show(this.uiDialog, this.options.show, function () {
                e._focusTabbable(), e._trigger("focus")
            }), this._makeFocusTarget(), void this._trigger("open"))
        },
        _focusTabbable: function () {
            var t = this._focusedElement;
            t || (t = this.element.find("[autofocus]")), t.length || (t = this.element.find(":tabbable")), t.length || (t = this.uiDialogButtonPane.find(":tabbable")), t.length || (t = this.uiDialogTitlebarClose.filter(":tabbable")), t.length || (t = this.uiDialog), t.eq(0).trigger("focus")
        },
        _keepFocus: function (e) {
            function i() {
                var e = t.ui.safeActiveElement(this.document[0]);
                this.uiDialog[0] === e || t.contains(this.uiDialog[0], e) || this._focusTabbable()
            }

            e.preventDefault(), i.call(this), this._delay(i)
        },
        _createWrapper: function () {
            this.uiDialog = t("<div>").hide().attr({
                tabIndex: -1,
                role: "dialog"
            }).appendTo(this._appendTo()), this._addClass(this.uiDialog, "ui-dialog", "ui-widget ui-widget-content ui-front"), this._on(this.uiDialog, {
                keydown: function (e) {
                    if (this.options.closeOnEscape && !e.isDefaultPrevented() && e.keyCode && e.keyCode === t.ui.keyCode.ESCAPE) return e.preventDefault(), void this.close(e);
                    if (e.keyCode === t.ui.keyCode.TAB && !e.isDefaultPrevented()) {
                        var i = this.uiDialog.find(":tabbable"), s = i.filter(":first"), o = i.filter(":last");
                        e.target !== o[0] && e.target !== this.uiDialog[0] || e.shiftKey ? e.target !== s[0] && e.target !== this.uiDialog[0] || !e.shiftKey || (this._delay(function () {
                            o.trigger("focus")
                        }), e.preventDefault()) : (this._delay(function () {
                            s.trigger("focus")
                        }), e.preventDefault())
                    }
                }, mousedown: function (t) {
                    this._moveToTop(t) && this._focusTabbable()
                }
            }), this.element.find("[aria-describedby]").length || this.uiDialog.attr({"aria-describedby": this.element.uniqueId().attr("id")})
        },
        _createTitlebar: function () {
            var e;
            this.uiDialogTitlebar = t("<div>"), this._addClass(this.uiDialogTitlebar, "ui-dialog-titlebar", "ui-widget-header ui-helper-clearfix"), this._on(this.uiDialogTitlebar, {
                mousedown: function (e) {
                    t(e.target).closest(".ui-dialog-titlebar-close") || this.uiDialog.trigger("focus")
                }
            }), this.uiDialogTitlebarClose = t("<button type='button'></button>").button({
                label: t("<a>").text(this.options.closeText).html(),
                icon: "ui-icon-closethick",
                showLabel: !1
            }).appendTo(this.uiDialogTitlebar), this._addClass(this.uiDialogTitlebarClose, "ui-dialog-titlebar-close"), this._on(this.uiDialogTitlebarClose, {
                click: function (t) {
                    t.preventDefault(), this.close(t)
                }
            }), e = t("<span>").uniqueId().prependTo(this.uiDialogTitlebar), this._addClass(e, "ui-dialog-title"), this._title(e), this.uiDialogTitlebar.prependTo(this.uiDialog), this.uiDialog.attr({"aria-labelledby": e.attr("id")})
        },
        _title: function (t) {
            this.options.title ? t.text(this.options.title) : t.html("&#160;")
        },
        _createButtonPane: function () {
            this.uiDialogButtonPane = t("<div>"), this._addClass(this.uiDialogButtonPane, "ui-dialog-buttonpane", "ui-widget-content ui-helper-clearfix"), this.uiButtonSet = t("<div>").appendTo(this.uiDialogButtonPane), this._addClass(this.uiButtonSet, "ui-dialog-buttonset"), this._createButtons()
        },
        _createButtons: function () {
            var e = this, i = this.options.buttons;
            return this.uiDialogButtonPane.remove(), this.uiButtonSet.empty(), t.isEmptyObject(i) || t.isArray(i) && !i.length ? void this._removeClass(this.uiDialog, "ui-dialog-buttons") : (t.each(i, function (i, s) {
                var o, n;
                s = t.isFunction(s) ? {
                    click: s,
                    text: i
                } : s, s = t.extend({type: "button"}, s), o = s.click, n = {
                    icon: s.icon,
                    iconPosition: s.iconPosition,
                    showLabel: s.showLabel,
                    icons: s.icons,
                    text: s.text
                }, delete s.click, delete s.icon, delete s.iconPosition, delete s.showLabel, delete s.icons, "boolean" == typeof s.text && delete s.text, t("<button></button>", s).button(n).appendTo(e.uiButtonSet).on("click", function () {
                    o.apply(e.element[0], arguments)
                })
            }), this._addClass(this.uiDialog, "ui-dialog-buttons"), void this.uiDialogButtonPane.appendTo(this.uiDialog))
        },
        _makeDraggable: function () {
            function e(t) {
                return {position: t.position, offset: t.offset}
            }

            var i = this, s = this.options;
            this.uiDialog.draggable({
                cancel: ".ui-dialog-content, .ui-dialog-titlebar-close",
                handle: ".ui-dialog-titlebar",
                containment: "document",
                start: function (s, o) {
                    i._addClass(t(this), "ui-dialog-dragging"), i._blockFrames(), i._trigger("dragStart", s, e(o))
                },
                drag: function (t, s) {
                    i._trigger("drag", t, e(s))
                },
                stop: function (o, n) {
                    var a = n.offset.left - i.document.scrollLeft(), r = n.offset.top - i.document.scrollTop();
                    s.position = {
                        my: "left top",
                        at: "left" + (a >= 0 ? "+" : "") + a + " top" + (r >= 0 ? "+" : "") + r,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-dragging"), i._unblockFrames(), i._trigger("dragStop", o, e(n))
                }
            })
        },
        _makeResizable: function () {
            function e(t) {
                return {
                    originalPosition: t.originalPosition,
                    originalSize: t.originalSize,
                    position: t.position,
                    size: t.size
                }
            }

            var i = this, s = this.options, o = s.resizable, n = this.uiDialog.css("position"),
                a = "string" == typeof o ? o : "n,e,s,w,se,sw,ne,nw";
            this.uiDialog.resizable({
                cancel: ".ui-dialog-content",
                containment: "document",
                alsoResize: this.element,
                maxWidth: s.maxWidth,
                maxHeight: s.maxHeight,
                minWidth: s.minWidth,
                minHeight: this._minHeight(),
                handles: a,
                start: function (s, o) {
                    i._addClass(t(this), "ui-dialog-resizing"), i._blockFrames(), i._trigger("resizeStart", s, e(o))
                },
                resize: function (t, s) {
                    i._trigger("resize", t, e(s))
                },
                stop: function (o, n) {
                    var a = i.uiDialog.offset(), r = a.left - i.document.scrollLeft(),
                        l = a.top - i.document.scrollTop();
                    s.height = i.uiDialog.height(), s.width = i.uiDialog.width(), s.position = {
                        my: "left top",
                        at: "left" + (r >= 0 ? "+" : "") + r + " top" + (l >= 0 ? "+" : "") + l,
                        of: i.window
                    }, i._removeClass(t(this), "ui-dialog-resizing"), i._unblockFrames(), i._trigger("resizeStop", o, e(n))
                }
            }).css("position", n)
        },
        _trackFocus: function () {
            this._on(this.widget(), {
                focusin: function (e) {
                    this._makeFocusTarget(), this._focusedElement = t(e.target)
                }
            })
        },
        _makeFocusTarget: function () {
            this._untrackInstance(), this._trackingInstances().unshift(this)
        },
        _untrackInstance: function () {
            var e = this._trackingInstances(), i = t.inArray(this, e);
            -1 !== i && e.splice(i, 1)
        },
        _trackingInstances: function () {
            var t = this.document.data("ui-dialog-instances");
            return t || (t = [], this.document.data("ui-dialog-instances", t)), t
        },
        _minHeight: function () {
            var t = this.options;
            return "auto" === t.height ? t.minHeight : Math.min(t.minHeight, t.height)
        },
        _position: function () {
            var t = this.uiDialog.is(":visible");
            t || this.uiDialog.show(), this.uiDialog.position(this.options.position), t || this.uiDialog.hide()
        },
        _setOptions: function (e) {
            var i = this, s = !1, o = {};
            t.each(e, function (t, e) {
                i._setOption(t, e), t in i.sizeRelatedOptions && (s = !0), t in i.resizableRelatedOptions && (o[t] = e)
            }), s && (this._size(), this._position()), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", o)
        },
        _setOption: function (e, i) {
            var s, o, n = this.uiDialog;
            "disabled" !== e && (this._super(e, i), "appendTo" === e && this.uiDialog.appendTo(this._appendTo()), "buttons" === e && this._createButtons(), "closeText" === e && this.uiDialogTitlebarClose.button({label: t("<a>").text("" + this.options.closeText).html()}), "draggable" === e && ((s = n.is(":data(ui-draggable)")) && !i && n.draggable("destroy"), !s && i && this._makeDraggable()), "position" === e && this._position(), "resizable" === e && ((o = n.is(":data(ui-resizable)")) && !i && n.resizable("destroy"), o && "string" == typeof i && n.resizable("option", "handles", i), o || !1 === i || this._makeResizable()), "title" === e && this._title(this.uiDialogTitlebar.find(".ui-dialog-title")))
        },
        _size: function () {
            var t, e, i, s = this.options;
            this.element.show().css({
                width: "auto",
                minHeight: 0,
                maxHeight: "none",
                height: 0
            }), s.minWidth > s.width && (s.width = s.minWidth), t = this.uiDialog.css({
                height: "auto",
                width: s.width
            }).outerHeight(), e = Math.max(0, s.minHeight - t), i = "number" == typeof s.maxHeight ? Math.max(0, s.maxHeight - t) : "none", "auto" === s.height ? this.element.css({
                minHeight: e,
                maxHeight: i,
                height: "auto"
            }) : this.element.height(Math.max(0, s.height - t)), this.uiDialog.is(":data(ui-resizable)") && this.uiDialog.resizable("option", "minHeight", this._minHeight())
        },
        _blockFrames: function () {
            this.iframeBlocks = this.document.find("iframe").map(function () {
                var e = t(this);
                return t("<div>").css({
                    position: "absolute",
                    width: e.outerWidth(),
                    height: e.outerHeight()
                }).appendTo(e.parent()).offset(e.offset())[0]
            })
        },
        _unblockFrames: function () {
            this.iframeBlocks && (this.iframeBlocks.remove(), delete this.iframeBlocks)
        },
        _allowInteraction: function (e) {
            return !!t(e.target).closest(".ui-dialog").length || !!t(e.target).closest(".ui-datepicker").length
        },
        _createOverlay: function () {
            if (this.options.modal) {
                var e = !0;
                this._delay(function () {
                    e = !1
                }), this.document.data("ui-dialog-overlays") || this._on(this.document, {
                    focusin: function (t) {
                        e || this._allowInteraction(t) || (t.preventDefault(), this._trackingInstances()[0]._focusTabbable())
                    }
                }), this.overlay = t("<div>").appendTo(this._appendTo()), this._addClass(this.overlay, null, "ui-widget-overlay ui-front"), this._on(this.overlay, {mousedown: "_keepFocus"}), this.document.data("ui-dialog-overlays", (this.document.data("ui-dialog-overlays") || 0) + 1)
            }
        },
        _destroyOverlay: function () {
            if (this.options.modal && this.overlay) {
                var t = this.document.data("ui-dialog-overlays") - 1;
                t ? this.document.data("ui-dialog-overlays", t) : (this._off(this.document, "focusin"), this.document.removeData("ui-dialog-overlays")), this.overlay.remove(), this.overlay = null
            }
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.dialog", t.ui.dialog, {
        options: {dialogClass: ""},
        _createWrapper: function () {
            this._super(), this.uiDialog.addClass(this.options.dialogClass)
        },
        _setOption: function (t, e) {
            "dialogClass" === t && this.uiDialog.removeClass(this.options.dialogClass).addClass(e), this._superApply(arguments)
        }
    }), t.ui.dialog, t.widget("ui.progressbar", {
        version: "1.12.1",
        options: {
            classes: {
                "ui-progressbar": "ui-corner-all",
                "ui-progressbar-value": "ui-corner-left",
                "ui-progressbar-complete": "ui-corner-right"
            }, max: 100, value: 0, change: null, complete: null
        },
        min: 0,
        _create: function () {
            this.oldValue = this.options.value = this._constrainedValue(), this.element.attr({
                role: "progressbar",
                "aria-valuemin": this.min
            }), this._addClass("ui-progressbar", "ui-widget ui-widget-content"), this.valueDiv = t("<div>").appendTo(this.element), this._addClass(this.valueDiv, "ui-progressbar-value", "ui-widget-header"), this._refreshValue()
        },
        _destroy: function () {
            this.element.removeAttr("role aria-valuemin aria-valuemax aria-valuenow"), this.valueDiv.remove()
        },
        value: function (t) {
            return void 0 === t ? this.options.value : (this.options.value = this._constrainedValue(t), void this._refreshValue())
        },
        _constrainedValue: function (t) {
            return void 0 === t && (t = this.options.value), this.indeterminate = !1 === t, "number" != typeof t && (t = 0), !this.indeterminate && Math.min(this.options.max, Math.max(this.min, t))
        },
        _setOptions: function (t) {
            var e = t.value;
            delete t.value, this._super(t), this.options.value = this._constrainedValue(e), this._refreshValue()
        },
        _setOption: function (t, e) {
            "max" === t && (e = Math.max(this.min, e)), this._super(t, e)
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.element.attr("aria-disabled", t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _percentage: function () {
            return this.indeterminate ? 100 : 100 * (this.options.value - this.min) / (this.options.max - this.min)
        },
        _refreshValue: function () {
            var e = this.options.value, i = this._percentage();
            this.valueDiv.toggle(this.indeterminate || e > this.min).width(i.toFixed(0) + "%"), this._toggleClass(this.valueDiv, "ui-progressbar-complete", null, e === this.options.max)._toggleClass("ui-progressbar-indeterminate", null, this.indeterminate), this.indeterminate ? (this.element.removeAttr("aria-valuenow"), this.overlayDiv || (this.overlayDiv = t("<div>").appendTo(this.valueDiv), this._addClass(this.overlayDiv, "ui-progressbar-overlay"))) : (this.element.attr({
                "aria-valuemax": this.options.max,
                "aria-valuenow": e
            }), this.overlayDiv && (this.overlayDiv.remove(), this.overlayDiv = null)), this.oldValue !== e && (this.oldValue = e, this._trigger("change")), e === this.options.max && this._trigger("complete")
        }
    }), t.widget("ui.selectmenu", [t.ui.formResetMixin, {
        version: "1.12.1",
        defaultElement: "<select>",
        options: {
            appendTo: null,
            classes: {"ui-selectmenu-button-open": "ui-corner-top", "ui-selectmenu-button-closed": "ui-corner-all"},
            disabled: null,
            icons: {button: "ui-icon-triangle-1-s"},
            position: {my: "left top", at: "left bottom", collision: "none"},
            width: !1,
            change: null,
            close: null,
            focus: null,
            open: null,
            select: null
        },
        _create: function () {
            var e = this.element.uniqueId().attr("id");
            this.ids = {
                element: e,
                button: e + "-button",
                menu: e + "-menu"
            }, this._drawButton(), this._drawMenu(), this._bindFormResetHandler(), this._rendered = !1, this.menuItems = t()
        },
        _drawButton: function () {
            var e, i = this, s = this._parseOption(this.element.find("option:selected"), this.element[0].selectedIndex);
            this.labels = this.element.labels().attr("for", this.ids.button), this._on(this.labels, {
                click: function (t) {
                    this.button.focus(), t.preventDefault()
                }
            }), this.element.hide(), this.button = t("<span>", {
                tabindex: this.options.disabled ? -1 : 0,
                id: this.ids.button,
                role: "combobox",
                "aria-expanded": "false",
                "aria-autocomplete": "list",
                "aria-owns": this.ids.menu,
                "aria-haspopup": "true",
                title: this.element.attr("title")
            }).insertAfter(this.element), this._addClass(this.button, "ui-selectmenu-button ui-selectmenu-button-closed", "ui-button ui-widget"), e = t("<span>").appendTo(this.button), this._addClass(e, "ui-selectmenu-icon", "ui-icon " + this.options.icons.button), this.buttonItem = this._renderButtonItem(s).appendTo(this.button), !1 !== this.options.width && this._resizeButton(), this._on(this.button, this._buttonEvents), this.button.one("focusin", function () {
                i._rendered || i._refreshMenu()
            })
        },
        _drawMenu: function () {
            var e = this;
            this.menu = t("<ul>", {
                "aria-hidden": "true",
                "aria-labelledby": this.ids.button,
                id: this.ids.menu
            }), this.menuWrap = t("<div>").append(this.menu), this._addClass(this.menuWrap, "ui-selectmenu-menu", "ui-front"), this.menuWrap.appendTo(this._appendTo()), this.menuInstance = this.menu.menu({
                classes: {"ui-menu": "ui-corner-bottom"},
                role: "listbox",
                select: function (t, i) {
                    t.preventDefault(), e._setSelection(), e._select(i.item.data("ui-selectmenu-item"), t)
                },
                focus: function (t, i) {
                    var s = i.item.data("ui-selectmenu-item");
                    null != e.focusIndex && s.index !== e.focusIndex && (e._trigger("focus", t, {item: s}), e.isOpen || e._select(s, t)), e.focusIndex = s.index, e.button.attr("aria-activedescendant", e.menuItems.eq(s.index).attr("id"))
                }
            }).menu("instance"), this.menuInstance._off(this.menu, "mouseleave"), this.menuInstance._closeOnDocumentClick = function () {
                return !1
            }, this.menuInstance._isDivider = function () {
                return !1
            }
        },
        refresh: function () {
            this._refreshMenu(), this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(this._getSelectedItem().data("ui-selectmenu-item") || {})), null === this.options.width && this._resizeButton()
        },
        _refreshMenu: function () {
            var t, e = this.element.find("option");
            this.menu.empty(), this._parseOptions(e), this._renderMenu(this.menu, this.items), this.menuInstance.refresh(), this.menuItems = this.menu.find("li").not(".ui-selectmenu-optgroup").find(".ui-menu-item-wrapper"), this._rendered = !0, e.length && (t = this._getSelectedItem(), this.menuInstance.focus(null, t), this._setAria(t.data("ui-selectmenu-item")), this._setOption("disabled", this.element.prop("disabled")))
        },
        open: function (t) {
            this.options.disabled || (this._rendered ? (this._removeClass(this.menu.find(".ui-state-active"), null, "ui-state-active"), this.menuInstance.focus(null, this._getSelectedItem())) : this._refreshMenu(), this.menuItems.length && (this.isOpen = !0, this._toggleAttr(), this._resizeMenu(), this._position(), this._on(this.document, this._documentClick), this._trigger("open", t)))
        },
        _position: function () {
            this.menuWrap.position(t.extend({of: this.button}, this.options.position))
        },
        close: function (t) {
            this.isOpen && (this.isOpen = !1, this._toggleAttr(), this.range = null, this._off(this.document), this._trigger("close", t))
        },
        widget: function () {
            return this.button
        },
        menuWidget: function () {
            return this.menu
        },
        _renderButtonItem: function (e) {
            var i = t("<span>");
            return this._setText(i, e.label), this._addClass(i, "ui-selectmenu-text"), i
        },
        _renderMenu: function (e, i) {
            var s = this, o = "";
            t.each(i, function (i, n) {
                var a;
                n.optgroup !== o && (a = t("<li>", {text: n.optgroup}), s._addClass(a, "ui-selectmenu-optgroup", "ui-menu-divider" + (n.element.parent("optgroup").prop("disabled") ? " ui-state-disabled" : "")), a.appendTo(e), o = n.optgroup), s._renderItemData(e, n)
            })
        },
        _renderItemData: function (t, e) {
            return this._renderItem(t, e).data("ui-selectmenu-item", e)
        },
        _renderItem: function (e, i) {
            var s = t("<li>"), o = t("<div>", {title: i.element.attr("title")});
            return i.disabled && this._addClass(s, null, "ui-state-disabled"), this._setText(o, i.label), s.append(o).appendTo(e)
        },
        _setText: function (t, e) {
            e ? t.text(e) : t.html("&#160;")
        },
        _move: function (t, e) {
            var i, s, o = ".ui-menu-item";
            this.isOpen ? i = this.menuItems.eq(this.focusIndex).parent("li") : (i = this.menuItems.eq(this.element[0].selectedIndex).parent("li"), o += ":not(.ui-state-disabled)"), (s = "first" === t || "last" === t ? i["first" === t ? "prevAll" : "nextAll"](o).eq(-1) : i[t + "All"](o).eq(0)).length && this.menuInstance.focus(e, s)
        },
        _getSelectedItem: function () {
            return this.menuItems.eq(this.element[0].selectedIndex).parent("li")
        },
        _toggle: function (t) {
            this[this.isOpen ? "close" : "open"](t)
        },
        _setSelection: function () {
            var t;
            this.range && (window.getSelection ? ((t = window.getSelection()).removeAllRanges(), t.addRange(this.range)) : this.range.select(), this.button.focus())
        },
        _documentClick: {
            mousedown: function (e) {
                this.isOpen && (t(e.target).closest(".ui-selectmenu-menu, #" + t.ui.escapeSelector(this.ids.button)).length || this.close(e))
            }
        },
        _buttonEvents: {
            mousedown: function () {
                var t;
                window.getSelection ? (t = window.getSelection()).rangeCount && (this.range = t.getRangeAt(0)) : this.range = document.selection.createRange()
            }, click: function (t) {
                this._setSelection(), this._toggle(t)
            }, keydown: function (e) {
                var i = !0;
                switch (e.keyCode) {
                    case t.ui.keyCode.TAB:
                    case t.ui.keyCode.ESCAPE:
                        this.close(e), i = !1;
                        break;
                    case t.ui.keyCode.ENTER:
                        this.isOpen && this._selectFocusedItem(e);
                        break;
                    case t.ui.keyCode.UP:
                        e.altKey ? this._toggle(e) : this._move("prev", e);
                        break;
                    case t.ui.keyCode.DOWN:
                        e.altKey ? this._toggle(e) : this._move("next", e);
                        break;
                    case t.ui.keyCode.SPACE:
                        this.isOpen ? this._selectFocusedItem(e) : this._toggle(e);
                        break;
                    case t.ui.keyCode.LEFT:
                        this._move("prev", e);
                        break;
                    case t.ui.keyCode.RIGHT:
                        this._move("next", e);
                        break;
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.PAGE_UP:
                        this._move("first", e);
                        break;
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_DOWN:
                        this._move("last", e);
                        break;
                    default:
                        this.menu.trigger(e), i = !1
                }
                i && e.preventDefault()
            }
        },
        _selectFocusedItem: function (t) {
            var e = this.menuItems.eq(this.focusIndex).parent("li");
            e.hasClass("ui-state-disabled") || this._select(e.data("ui-selectmenu-item"), t)
        },
        _select: function (t, e) {
            var i = this.element[0].selectedIndex;
            this.element[0].selectedIndex = t.index, this.buttonItem.replaceWith(this.buttonItem = this._renderButtonItem(t)), this._setAria(t), this._trigger("select", e, {item: t}), t.index !== i && this._trigger("change", e, {item: t}), this.close(e)
        },
        _setAria: function (t) {
            var e = this.menuItems.eq(t.index).attr("id");
            this.button.attr({
                "aria-labelledby": e,
                "aria-activedescendant": e
            }), this.menu.attr("aria-activedescendant", e)
        },
        _setOption: function (t, e) {
            if ("icons" === t) {
                var i = this.button.find("span.ui-icon");
                this._removeClass(i, null, this.options.icons.button)._addClass(i, null, e.button)
            }
            this._super(t, e), "appendTo" === t && this.menuWrap.appendTo(this._appendTo()), "width" === t && this._resizeButton()
        },
        _setOptionDisabled: function (t) {
            this._super(t), this.menuInstance.option("disabled", t), this.button.attr("aria-disabled", t), this._toggleClass(this.button, null, "ui-state-disabled", t), this.element.prop("disabled", t), t ? (this.button.attr("tabindex", -1), this.close()) : this.button.attr("tabindex", 0)
        },
        _appendTo: function () {
            var e = this.options.appendTo;
            return e && (e = e.jquery || e.nodeType ? t(e) : this.document.find(e).eq(0)), e && e[0] || (e = this.element.closest(".ui-front, dialog")), e.length || (e = this.document[0].body), e
        },
        _toggleAttr: function () {
            this.button.attr("aria-expanded", this.isOpen), this._removeClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "closed" : "open"))._addClass(this.button, "ui-selectmenu-button-" + (this.isOpen ? "open" : "closed"))._toggleClass(this.menuWrap, "ui-selectmenu-open", null, this.isOpen), this.menu.attr("aria-hidden", !this.isOpen)
        },
        _resizeButton: function () {
            var t = this.options.width;
            return !1 === t ? void this.button.css("width", "") : (null === t && (t = this.element.show().outerWidth(), this.element.hide()), void this.button.outerWidth(t))
        },
        _resizeMenu: function () {
            this.menu.outerWidth(Math.max(this.button.outerWidth(), this.menu.width("").outerWidth() + 1))
        },
        _getCreateOptions: function () {
            var t = this._super();
            return t.disabled = this.element.prop("disabled"), t
        },
        _parseOptions: function (e) {
            var i = this, s = [];
            e.each(function (e, o) {
                s.push(i._parseOption(t(o), e))
            }), this.items = s
        },
        _parseOption: function (t, e) {
            var i = t.parent("optgroup");
            return {
                element: t,
                index: e,
                value: t.val(),
                label: t.text(),
                optgroup: i.attr("label") || "",
                disabled: i.prop("disabled") || t.prop("disabled")
            }
        },
        _destroy: function () {
            this._unbindFormResetHandler(), this.menuWrap.remove(), this.button.remove(), this.element.show(), this.element.removeUniqueId(), this.labels.attr("for", this.ids.element)
        }
    }]), t.widget("ui.slider", t.ui.mouse, {
        version: "1.12.1",
        widgetEventPrefix: "slide",
        options: {
            animate: !1,
            classes: {
                "ui-slider": "ui-corner-all",
                "ui-slider-handle": "ui-corner-all",
                "ui-slider-range": "ui-corner-all ui-widget-header"
            },
            distance: 0,
            max: 100,
            min: 0,
            orientation: "horizontal",
            range: !1,
            step: 1,
            value: 0,
            values: null,
            change: null,
            slide: null,
            start: null,
            stop: null
        },
        numPages: 5,
        _create: function () {
            this._keySliding = !1, this._mouseSliding = !1, this._animateOff = !0, this._handleIndex = null, this._detectOrientation(), this._mouseInit(), this._calculateNewMax(), this._addClass("ui-slider ui-slider-" + this.orientation, "ui-widget ui-widget-content"), this._refresh(), this._animateOff = !1
        },
        _refresh: function () {
            this._createRange(), this._createHandles(), this._setupEvents(), this._refreshValue()
        },
        _createHandles: function () {
            var e, i, s = this.options, o = this.element.find(".ui-slider-handle"), n = [];
            for (i = s.values && s.values.length || 1, o.length > i && (o.slice(i).remove(), o = o.slice(0, i)), e = o.length; i > e; e++) n.push("<span tabindex='0'></span>");
            this.handles = o.add(t(n.join("")).appendTo(this.element)), this._addClass(this.handles, "ui-slider-handle", "ui-state-default"), this.handle = this.handles.eq(0), this.handles.each(function (e) {
                t(this).data("ui-slider-handle-index", e).attr("tabIndex", 0)
            })
        },
        _createRange: function () {
            var e = this.options;
            e.range ? (!0 === e.range && (e.values ? e.values.length && 2 !== e.values.length ? e.values = [e.values[0], e.values[0]] : t.isArray(e.values) && (e.values = e.values.slice(0)) : e.values = [this._valueMin(), this._valueMin()]), this.range && this.range.length ? (this._removeClass(this.range, "ui-slider-range-min ui-slider-range-max"), this.range.css({
                left: "",
                bottom: ""
            })) : (this.range = t("<div>").appendTo(this.element), this._addClass(this.range, "ui-slider-range")), ("min" === e.range || "max" === e.range) && this._addClass(this.range, "ui-slider-range-" + e.range)) : (this.range && this.range.remove(), this.range = null)
        },
        _setupEvents: function () {
            this._off(this.handles), this._on(this.handles, this._handleEvents), this._hoverable(this.handles), this._focusable(this.handles)
        },
        _destroy: function () {
            this.handles.remove(), this.range && this.range.remove(), this._mouseDestroy()
        },
        _mouseCapture: function (e) {
            var i, s, o, n, a, r, l, h = this, c = this.options;
            return !c.disabled && (this.elementSize = {
                width: this.element.outerWidth(),
                height: this.element.outerHeight()
            }, this.elementOffset = this.element.offset(), i = {
                x: e.pageX,
                y: e.pageY
            }, s = this._normValueFromMouse(i), o = this._valueMax() - this._valueMin() + 1, this.handles.each(function (e) {
                var i = Math.abs(s - h.values(e));
                (o > i || o === i && (e === h._lastChangedValue || h.values(e) === c.min)) && (o = i, n = t(this), a = e)
            }), !1 !== this._start(e, a) && (this._mouseSliding = !0, this._handleIndex = a, this._addClass(n, null, "ui-state-active"), n.trigger("focus"), r = n.offset(), l = !t(e.target).parents().addBack().is(".ui-slider-handle"), this._clickOffset = l ? {
                left: 0,
                top: 0
            } : {
                left: e.pageX - r.left - n.width() / 2,
                top: e.pageY - r.top - n.height() / 2 - (parseInt(n.css("borderTopWidth"), 10) || 0) - (parseInt(n.css("borderBottomWidth"), 10) || 0) + (parseInt(n.css("marginTop"), 10) || 0)
            }, this.handles.hasClass("ui-state-hover") || this._slide(e, a, s), this._animateOff = !0, !0))
        },
        _mouseStart: function () {
            return !0
        },
        _mouseDrag: function (t) {
            var e = {x: t.pageX, y: t.pageY}, i = this._normValueFromMouse(e);
            return this._slide(t, this._handleIndex, i), !1
        },
        _mouseStop: function (t) {
            return this._removeClass(this.handles, null, "ui-state-active"), this._mouseSliding = !1, this._stop(t, this._handleIndex), this._change(t, this._handleIndex), this._handleIndex = null, this._clickOffset = null, this._animateOff = !1, !1
        },
        _detectOrientation: function () {
            this.orientation = "vertical" === this.options.orientation ? "vertical" : "horizontal"
        },
        _normValueFromMouse: function (t) {
            var e, i, s, o, n;
            return "horizontal" === this.orientation ? (e = this.elementSize.width, i = t.x - this.elementOffset.left - (this._clickOffset ? this._clickOffset.left : 0)) : (e = this.elementSize.height, i = t.y - this.elementOffset.top - (this._clickOffset ? this._clickOffset.top : 0)), (s = i / e) > 1 && (s = 1), 0 > s && (s = 0), "vertical" === this.orientation && (s = 1 - s), o = this._valueMax() - this._valueMin(), n = this._valueMin() + s * o, this._trimAlignValue(n)
        },
        _uiHash: function (t, e, i) {
            var s = {handle: this.handles[t], handleIndex: t, value: void 0 !== e ? e : this.value()};
            return this._hasMultipleValues() && (s.value = void 0 !== e ? e : this.values(t), s.values = i || this.values()), s
        },
        _hasMultipleValues: function () {
            return this.options.values && this.options.values.length
        },
        _start: function (t, e) {
            return this._trigger("start", t, this._uiHash(e))
        },
        _slide: function (t, e, i) {
            var s, o = this.value(), n = this.values();
            this._hasMultipleValues() && (s = this.values(e ? 0 : 1), o = this.values(e), 2 === this.options.values.length && !0 === this.options.range && (i = 0 === e ? Math.min(s, i) : Math.max(s, i)), n[e] = i), i !== o && (!1 !== this._trigger("slide", t, this._uiHash(e, i, n)) && (this._hasMultipleValues() ? this.values(e, i) : this.value(i)))
        },
        _stop: function (t, e) {
            this._trigger("stop", t, this._uiHash(e))
        },
        _change: function (t, e) {
            this._keySliding || this._mouseSliding || (this._lastChangedValue = e, this._trigger("change", t, this._uiHash(e)))
        },
        value: function (t) {
            return arguments.length ? (this.options.value = this._trimAlignValue(t), this._refreshValue(), void this._change(null, 0)) : this._value()
        },
        values: function (e, i) {
            var s, o, n;
            if (arguments.length > 1) return this.options.values[e] = this._trimAlignValue(i), this._refreshValue(), void this._change(null, e);
            if (!arguments.length) return this._values();
            if (!t.isArray(arguments[0])) return this._hasMultipleValues() ? this._values(e) : this.value();
            for (s = this.options.values, o = arguments[0], n = 0; s.length > n; n += 1) s[n] = this._trimAlignValue(o[n]), this._change(null, n);
            this._refreshValue()
        },
        _setOption: function (e, i) {
            var s, o = 0;
            switch ("range" === e && !0 === this.options.range && ("min" === i ? (this.options.value = this._values(0), this.options.values = null) : "max" === i && (this.options.value = this._values(this.options.values.length - 1), this.options.values = null)), t.isArray(this.options.values) && (o = this.options.values.length), this._super(e, i), e) {
                case "orientation":
                    this._detectOrientation(), this._removeClass("ui-slider-horizontal ui-slider-vertical")._addClass("ui-slider-" + this.orientation), this._refreshValue(), this.options.range && this._refreshRange(i), this.handles.css("horizontal" === i ? "bottom" : "left", "");
                    break;
                case "value":
                    this._animateOff = !0, this._refreshValue(), this._change(null, 0), this._animateOff = !1;
                    break;
                case "values":
                    for (this._animateOff = !0, this._refreshValue(), s = o - 1; s >= 0; s--) this._change(null, s);
                    this._animateOff = !1;
                    break;
                case "step":
                case "min":
                case "max":
                    this._animateOff = !0, this._calculateNewMax(), this._refreshValue(), this._animateOff = !1;
                    break;
                case "range":
                    this._animateOff = !0, this._refresh(), this._animateOff = !1
            }
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(null, "ui-state-disabled", !!t)
        },
        _value: function () {
            var t = this.options.value;
            return this._trimAlignValue(t)
        },
        _values: function (t) {
            var e, i, s;
            if (arguments.length) return e = this.options.values[t], this._trimAlignValue(e);
            if (this._hasMultipleValues()) {
                for (i = this.options.values.slice(), s = 0; i.length > s; s += 1) i[s] = this._trimAlignValue(i[s]);
                return i
            }
            return []
        },
        _trimAlignValue: function (t) {
            if (this._valueMin() >= t) return this._valueMin();
            if (t >= this._valueMax()) return this._valueMax();
            var e = this.options.step > 0 ? this.options.step : 1, i = (t - this._valueMin()) % e, s = t - i;
            return 2 * Math.abs(i) >= e && (s += i > 0 ? e : -e), parseFloat(s.toFixed(5))
        },
        _calculateNewMax: function () {
            var t = this.options.max, e = this._valueMin(), i = this.options.step;
            (t = Math.round((t - e) / i) * i + e) > this.options.max && (t -= i), this.max = parseFloat(t.toFixed(this._precision()))
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _valueMin: function () {
            return this.options.min
        },
        _valueMax: function () {
            return this.max
        },
        _refreshRange: function (t) {
            "vertical" === t && this.range.css({width: "", left: ""}), "horizontal" === t && this.range.css({
                height: "",
                bottom: ""
            })
        },
        _refreshValue: function () {
            var e, i, s, o, n, a = this.options.range, r = this.options, l = this, h = !this._animateOff && r.animate,
                c = {};
            this._hasMultipleValues() ? this.handles.each(function (s) {
                i = (l.values(s) - l._valueMin()) / (l._valueMax() - l._valueMin()) * 100, c["horizontal" === l.orientation ? "left" : "bottom"] = i + "%", t(this).stop(1, 1)[h ? "animate" : "css"](c, r.animate), !0 === l.options.range && ("horizontal" === l.orientation ? (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({left: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({width: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                })) : (0 === s && l.range.stop(1, 1)[h ? "animate" : "css"]({bottom: i + "%"}, r.animate), 1 === s && l.range[h ? "animate" : "css"]({height: i - e + "%"}, {
                    queue: !1,
                    duration: r.animate
                }))), e = i
            }) : (s = this.value(), o = this._valueMin(), n = this._valueMax(), i = n !== o ? (s - o) / (n - o) * 100 : 0, c["horizontal" === this.orientation ? "left" : "bottom"] = i + "%", this.handle.stop(1, 1)[h ? "animate" : "css"](c, r.animate), "min" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: i + "%"}, r.animate), "max" === a && "horizontal" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({width: 100 - i + "%"}, r.animate), "min" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: i + "%"}, r.animate), "max" === a && "vertical" === this.orientation && this.range.stop(1, 1)[h ? "animate" : "css"]({height: 100 - i + "%"}, r.animate))
        },
        _handleEvents: {
            keydown: function (e) {
                var i, s, o, n = t(e.target).data("ui-slider-handle-index");
                switch (e.keyCode) {
                    case t.ui.keyCode.HOME:
                    case t.ui.keyCode.END:
                    case t.ui.keyCode.PAGE_UP:
                    case t.ui.keyCode.PAGE_DOWN:
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (e.preventDefault(), !this._keySliding && (this._keySliding = !0, this._addClass(t(e.target), null, "ui-state-active"), !1 === this._start(e, n))) return
                }
                switch (o = this.options.step, i = s = this._hasMultipleValues() ? this.values(n) : this.value(), e.keyCode) {
                    case t.ui.keyCode.HOME:
                        s = this._valueMin();
                        break;
                    case t.ui.keyCode.END:
                        s = this._valueMax();
                        break;
                    case t.ui.keyCode.PAGE_UP:
                        s = this._trimAlignValue(i + (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.PAGE_DOWN:
                        s = this._trimAlignValue(i - (this._valueMax() - this._valueMin()) / this.numPages);
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.RIGHT:
                        if (i === this._valueMax()) return;
                        s = this._trimAlignValue(i + o);
                        break;
                    case t.ui.keyCode.DOWN:
                    case t.ui.keyCode.LEFT:
                        if (i === this._valueMin()) return;
                        s = this._trimAlignValue(i - o)
                }
                this._slide(e, n, s)
            }, keyup: function (e) {
                var i = t(e.target).data("ui-slider-handle-index");
                this._keySliding && (this._keySliding = !1, this._stop(e, i), this._change(e, i), this._removeClass(t(e.target), null, "ui-state-active"))
            }
        }
    }), t.widget("ui.spinner", {
        version: "1.12.1",
        defaultElement: "<input>",
        widgetEventPrefix: "spin",
        options: {
            classes: {
                "ui-spinner": "ui-corner-all",
                "ui-spinner-down": "ui-corner-br",
                "ui-spinner-up": "ui-corner-tr"
            },
            culture: null,
            icons: {down: "ui-icon-triangle-1-s", up: "ui-icon-triangle-1-n"},
            incremental: !0,
            max: null,
            min: null,
            numberFormat: null,
            page: 10,
            step: 1,
            change: null,
            spin: null,
            start: null,
            stop: null
        },
        _create: function () {
            this._setOption("max", this.options.max), this._setOption("min", this.options.min), this._setOption("step", this.options.step), "" !== this.value() && this._value(this.element.val(), !0), this._draw(), this._on(this._events), this._refresh(), this._on(this.window, {
                beforeunload: function () {
                    this.element.removeAttr("autocomplete")
                }
            })
        },
        _getCreateOptions: function () {
            var e = this._super(), i = this.element;
            return t.each(["min", "max", "step"], function (t, s) {
                var o = i.attr(s);
                null != o && o.length && (e[s] = o)
            }), e
        },
        _events: {
            keydown: function (t) {
                this._start(t) && this._keydown(t) && t.preventDefault()
            }, keyup: "_stop", focus: function () {
                this.previous = this.element.val()
            }, blur: function (t) {
                return this.cancelBlur ? void delete this.cancelBlur : (this._stop(), this._refresh(), void (this.previous !== this.element.val() && this._trigger("change", t)))
            }, mousewheel: function (t, e) {
                if (e) {
                    if (!this.spinning && !this._start(t)) return !1;
                    this._spin((e > 0 ? 1 : -1) * this.options.step, t), clearTimeout(this.mousewheelTimer), this.mousewheelTimer = this._delay(function () {
                        this.spinning && this._stop(t)
                    }, 100), t.preventDefault()
                }
            }, "mousedown .ui-spinner-button": function (e) {
                function i() {
                    this.element[0] === t.ui.safeActiveElement(this.document[0]) || (this.element.trigger("focus"), this.previous = s, this._delay(function () {
                        this.previous = s
                    }))
                }

                var s;
                s = this.element[0] === t.ui.safeActiveElement(this.document[0]) ? this.previous : this.element.val(), e.preventDefault(), i.call(this), this.cancelBlur = !0, this._delay(function () {
                    delete this.cancelBlur, i.call(this)
                }), !1 !== this._start(e) && this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e)
            }, "mouseup .ui-spinner-button": "_stop", "mouseenter .ui-spinner-button": function (e) {
                return t(e.currentTarget).hasClass("ui-state-active") ? !1 !== this._start(e) && void this._repeat(null, t(e.currentTarget).hasClass("ui-spinner-up") ? 1 : -1, e) : void 0
            }, "mouseleave .ui-spinner-button": "_stop"
        },
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap("<span>").parent().append("<a></a><a></a>")
        },
        _draw: function () {
            this._enhance(), this._addClass(this.uiSpinner, "ui-spinner", "ui-widget ui-widget-content"), this._addClass("ui-spinner-input"), this.element.attr("role", "spinbutton"), this.buttons = this.uiSpinner.children("a").attr("tabIndex", -1).attr("aria-hidden", !0).button({classes: {"ui-button": ""}}), this._removeClass(this.buttons, "ui-corner-all"), this._addClass(this.buttons.first(), "ui-spinner-button ui-spinner-up"), this._addClass(this.buttons.last(), "ui-spinner-button ui-spinner-down"), this.buttons.first().button({
                icon: this.options.icons.up,
                showLabel: !1
            }), this.buttons.last().button({
                icon: this.options.icons.down,
                showLabel: !1
            }), this.buttons.height() > Math.ceil(.5 * this.uiSpinner.height()) && this.uiSpinner.height() > 0 && this.uiSpinner.height(this.uiSpinner.height())
        },
        _keydown: function (e) {
            var i = this.options, s = t.ui.keyCode;
            switch (e.keyCode) {
                case s.UP:
                    return this._repeat(null, 1, e), !0;
                case s.DOWN:
                    return this._repeat(null, -1, e), !0;
                case s.PAGE_UP:
                    return this._repeat(null, i.page, e), !0;
                case s.PAGE_DOWN:
                    return this._repeat(null, -i.page, e), !0
            }
            return !1
        },
        _start: function (t) {
            return !(!this.spinning && !1 === this._trigger("start", t)) && (this.counter || (this.counter = 1), this.spinning = !0, !0)
        },
        _repeat: function (t, e, i) {
            t = t || 500, clearTimeout(this.timer), this.timer = this._delay(function () {
                this._repeat(40, e, i)
            }, t), this._spin(e * this.options.step, i)
        },
        _spin: function (t, e) {
            var i = this.value() || 0;
            this.counter || (this.counter = 1), i = this._adjustValue(i + t * this._increment(this.counter)), this.spinning && !1 === this._trigger("spin", e, {value: i}) || (this._value(i), this.counter++)
        },
        _increment: function (e) {
            var i = this.options.incremental;
            return i ? t.isFunction(i) ? i(e) : Math.floor(e * e * e / 5e4 - e * e / 500 + 17 * e / 200 + 1) : 1
        },
        _precision: function () {
            var t = this._precisionOf(this.options.step);
            return null !== this.options.min && (t = Math.max(t, this._precisionOf(this.options.min))), t
        },
        _precisionOf: function (t) {
            var e = "" + t, i = e.indexOf(".");
            return -1 === i ? 0 : e.length - i - 1
        },
        _adjustValue: function (t) {
            var e, i, s = this.options;
            return i = t - (e = null !== s.min ? s.min : 0), t = e + (i = Math.round(i / s.step) * s.step), t = parseFloat(t.toFixed(this._precision())), null !== s.max && t > s.max ? s.max : null !== s.min && s.min > t ? s.min : t
        },
        _stop: function (t) {
            this.spinning && (clearTimeout(this.timer), clearTimeout(this.mousewheelTimer), this.counter = 0, this.spinning = !1, this._trigger("stop", t))
        },
        _setOption: function (t, e) {
            var i, s, o;
            return "culture" === t || "numberFormat" === t ? (i = this._parse(this.element.val()), this.options[t] = e, void this.element.val(this._format(i))) : (("max" === t || "min" === t || "step" === t) && "string" == typeof e && (e = this._parse(e)), "icons" === t && (s = this.buttons.first().find(".ui-icon"), this._removeClass(s, null, this.options.icons.up), this._addClass(s, null, e.up), o = this.buttons.last().find(".ui-icon"), this._removeClass(o, null, this.options.icons.down), this._addClass(o, null, e.down)), void this._super(t, e))
        },
        _setOptionDisabled: function (t) {
            this._super(t), this._toggleClass(this.uiSpinner, null, "ui-state-disabled", !!t), this.element.prop("disabled", !!t), this.buttons.button(t ? "disable" : "enable")
        },
        _setOptions: n(function (t) {
            this._super(t)
        }),
        _parse: function (t) {
            return "string" == typeof t && "" !== t && (t = window.Globalize && this.options.numberFormat ? Globalize.parseFloat(t, 10, this.options.culture) : +t), "" === t || isNaN(t) ? null : t
        },
        _format: function (t) {
            return "" === t ? "" : window.Globalize && this.options.numberFormat ? Globalize.format(t, this.options.numberFormat, this.options.culture) : t
        },
        _refresh: function () {
            this.element.attr({
                "aria-valuemin": this.options.min,
                "aria-valuemax": this.options.max,
                "aria-valuenow": this._parse(this.element.val())
            })
        },
        isValid: function () {
            var t = this.value();
            return null !== t && t === this._adjustValue(t)
        },
        _value: function (t, e) {
            var i;
            "" !== t && (null !== (i = this._parse(t)) && (e || (i = this._adjustValue(i)), t = this._format(i))), this.element.val(t), this._refresh()
        },
        _destroy: function () {
            this.element.prop("disabled", !1).removeAttr("autocomplete role aria-valuemin aria-valuemax aria-valuenow"), this.uiSpinner.replaceWith(this.element)
        },
        stepUp: n(function (t) {
            this._stepUp(t)
        }),
        _stepUp: function (t) {
            this._start() && (this._spin((t || 1) * this.options.step), this._stop())
        },
        stepDown: n(function (t) {
            this._stepDown(t)
        }),
        _stepDown: function (t) {
            this._start() && (this._spin((t || 1) * -this.options.step), this._stop())
        },
        pageUp: n(function (t) {
            this._stepUp((t || 1) * this.options.page)
        }),
        pageDown: n(function (t) {
            this._stepDown((t || 1) * this.options.page)
        }),
        value: function (t) {
            return arguments.length ? void n(this._value).call(this, t) : this._parse(this.element.val())
        },
        widget: function () {
            return this.uiSpinner
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.spinner", t.ui.spinner, {
        _enhance: function () {
            this.uiSpinner = this.element.attr("autocomplete", "off").wrap(this._uiSpinnerHtml()).parent().append(this._buttonHtml())
        }, _uiSpinnerHtml: function () {
            return "<span>"
        }, _buttonHtml: function () {
            return "<a></a><a></a>"
        }
    }), t.ui.spinner, t.widget("ui.tabs", {
        version: "1.12.1",
        delay: 300,
        options: {
            active: null,
            classes: {
                "ui-tabs": "ui-corner-all",
                "ui-tabs-nav": "ui-corner-all",
                "ui-tabs-panel": "ui-corner-bottom",
                "ui-tabs-tab": "ui-corner-top"
            },
            collapsible: !1,
            event: "click",
            heightStyle: "content",
            hide: null,
            show: null,
            activate: null,
            beforeActivate: null,
            beforeLoad: null,
            load: null
        },
        _isLocal: (g = /#.*$/, function (t) {
            var e, i;
            e = t.href.replace(g, ""), i = location.href.replace(g, "");
            try {
                e = decodeURIComponent(e)
            } catch (t) {
            }
            try {
                i = decodeURIComponent(i)
            } catch (t) {
            }
            return t.hash.length > 1 && e === i
        }),
        _create: function () {
            var e = this, i = this.options;
            this.running = !1, this._addClass("ui-tabs", "ui-widget ui-widget-content"), this._toggleClass("ui-tabs-collapsible", null, i.collapsible), this._processTabs(), i.active = this._initialActive(), t.isArray(i.disabled) && (i.disabled = t.unique(i.disabled.concat(t.map(this.tabs.filter(".ui-state-disabled"), function (t) {
                return e.tabs.index(t)
            }))).sort()), this.active = !1 !== this.options.active && this.anchors.length ? this._findActive(i.active) : t(), this._refresh(), this.active.length && this.load(i.active)
        },
        _initialActive: function () {
            var e = this.options.active, i = this.options.collapsible, s = location.hash.substring(1);
            return null === e && (s && this.tabs.each(function (i, o) {
                return t(o).attr("aria-controls") === s ? (e = i, !1) : void 0
            }), null === e && (e = this.tabs.index(this.tabs.filter(".ui-tabs-active"))), (null === e || -1 === e) && (e = !!this.tabs.length && 0)), !1 !== e && (-1 === (e = this.tabs.index(this.tabs.eq(e))) && (e = !i && 0)), !i && !1 === e && this.anchors.length && (e = 0), e
        },
        _getCreateEventData: function () {
            return {tab: this.active, panel: this.active.length ? this._getPanelForTab(this.active) : t()}
        },
        _tabKeydown: function (e) {
            var i = t(t.ui.safeActiveElement(this.document[0])).closest("li"), s = this.tabs.index(i), o = !0;
            if (!this._handlePageNav(e)) {
                switch (e.keyCode) {
                    case t.ui.keyCode.RIGHT:
                    case t.ui.keyCode.DOWN:
                        s++;
                        break;
                    case t.ui.keyCode.UP:
                    case t.ui.keyCode.LEFT:
                        o = !1, s--;
                        break;
                    case t.ui.keyCode.END:
                        s = this.anchors.length - 1;
                        break;
                    case t.ui.keyCode.HOME:
                        s = 0;
                        break;
                    case t.ui.keyCode.SPACE:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s);
                    case t.ui.keyCode.ENTER:
                        return e.preventDefault(), clearTimeout(this.activating), void this._activate(s !== this.options.active && s);
                    default:
                        return
                }
                e.preventDefault(), clearTimeout(this.activating), s = this._focusNextTab(s, o), e.ctrlKey || e.metaKey || (i.attr("aria-selected", "false"), this.tabs.eq(s).attr("aria-selected", "true"), this.activating = this._delay(function () {
                    this.option("active", s)
                }, this.delay))
            }
        },
        _panelKeydown: function (e) {
            this._handlePageNav(e) || e.ctrlKey && e.keyCode === t.ui.keyCode.UP && (e.preventDefault(), this.active.trigger("focus"))
        },
        _handlePageNav: function (e) {
            return e.altKey && e.keyCode === t.ui.keyCode.PAGE_UP ? (this._activate(this._focusNextTab(this.options.active - 1, !1)), !0) : e.altKey && e.keyCode === t.ui.keyCode.PAGE_DOWN ? (this._activate(this._focusNextTab(this.options.active + 1, !0)), !0) : void 0
        },
        _findNextTab: function (e, i) {
            for (var s = this.tabs.length - 1; -1 !== t.inArray((e > s && (e = 0), 0 > e && (e = s), e), this.options.disabled);) e = i ? e + 1 : e - 1;
            return e
        },
        _focusNextTab: function (t, e) {
            return t = this._findNextTab(t, e), this.tabs.eq(t).trigger("focus"), t
        },
        _setOption: function (t, e) {
            return "active" === t ? void this._activate(e) : (this._super(t, e), "collapsible" === t && (this._toggleClass("ui-tabs-collapsible", null, e), e || !1 !== this.options.active || this._activate(0)), "event" === t && this._setupEvents(e), void ("heightStyle" === t && this._setupHeightStyle(e)))
        },
        _sanitizeSelector: function (t) {
            return t ? t.replace(/[!"$%&'()*+,.\/:;<=>?@\[\]\^`{|}~]/g, "\\$&") : ""
        },
        refresh: function () {
            var e = this.options, i = this.tablist.children(":has(a[href])");
            e.disabled = t.map(i.filter(".ui-state-disabled"), function (t) {
                return i.index(t)
            }), this._processTabs(), !1 !== e.active && this.anchors.length ? this.active.length && !t.contains(this.tablist[0], this.active[0]) ? this.tabs.length === e.disabled.length ? (e.active = !1, this.active = t()) : this._activate(this._findNextTab(Math.max(0, e.active - 1), !1)) : e.active = this.tabs.index(this.active) : (e.active = !1, this.active = t()), this._refresh()
        },
        _refresh: function () {
            this._setOptionDisabled(this.options.disabled), this._setupEvents(this.options.event), this._setupHeightStyle(this.options.heightStyle), this.tabs.not(this.active).attr({
                "aria-selected": "false",
                "aria-expanded": "false",
                tabIndex: -1
            }), this.panels.not(this._getPanelForTab(this.active)).hide().attr({"aria-hidden": "true"}), this.active.length ? (this.active.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            }), this._addClass(this.active, "ui-tabs-active", "ui-state-active"), this._getPanelForTab(this.active).show().attr({"aria-hidden": "false"})) : this.tabs.eq(0).attr("tabIndex", 0)
        },
        _processTabs: function () {
            var e = this, i = this.tabs, s = this.anchors, o = this.panels;
            this.tablist = this._getList().attr("role", "tablist"), this._addClass(this.tablist, "ui-tabs-nav", "ui-helper-reset ui-helper-clearfix ui-widget-header"), this.tablist.on("mousedown" + this.eventNamespace, "> li", function (e) {
                t(this).is(".ui-state-disabled") && e.preventDefault()
            }).on("focus" + this.eventNamespace, ".ui-tabs-anchor", function () {
                t(this).closest("li").is(".ui-state-disabled") && this.blur()
            }), this.tabs = this.tablist.find("> li:has(a[href])").attr({
                role: "tab",
                tabIndex: -1
            }), this._addClass(this.tabs, "ui-tabs-tab", "ui-state-default"), this.anchors = this.tabs.map(function () {
                return t("a", this)[0]
            }).attr({
                role: "presentation",
                tabIndex: -1
            }), this._addClass(this.anchors, "ui-tabs-anchor"), this.panels = t(), this.anchors.each(function (i, s) {
                var o, n, a, r = t(s).uniqueId().attr("id"), l = t(s).closest("li"), h = l.attr("aria-controls");
                e._isLocal(s) ? (a = (o = s.hash).substring(1), n = e.element.find(e._sanitizeSelector(o))) : (o = "#" + (a = l.attr("aria-controls") || t({}).uniqueId()[0].id), (n = e.element.find(o)).length || (n = e._createPanel(a)).insertAfter(e.panels[i - 1] || e.tablist), n.attr("aria-live", "polite")), n.length && (e.panels = e.panels.add(n)), h && l.data("ui-tabs-aria-controls", h), l.attr({
                    "aria-controls": a,
                    "aria-labelledby": r
                }), n.attr("aria-labelledby", r)
            }), this.panels.attr("role", "tabpanel"), this._addClass(this.panels, "ui-tabs-panel", "ui-widget-content"), i && (this._off(i.not(this.tabs)), this._off(s.not(this.anchors)), this._off(o.not(this.panels)))
        },
        _getList: function () {
            return this.tablist || this.element.find("ol, ul").eq(0)
        },
        _createPanel: function (e) {
            return t("<div>").attr("id", e).data("ui-tabs-destroy", !0)
        },
        _setOptionDisabled: function (e) {
            var i, s, o;
            for (t.isArray(e) && (e.length ? e.length === this.anchors.length && (e = !0) : e = !1), o = 0; s = this.tabs[o]; o++) i = t(s), !0 === e || -1 !== t.inArray(o, e) ? (i.attr("aria-disabled", "true"), this._addClass(i, null, "ui-state-disabled")) : (i.removeAttr("aria-disabled"), this._removeClass(i, null, "ui-state-disabled"));
            this.options.disabled = e, this._toggleClass(this.widget(), this.widgetFullName + "-disabled", null, !0 === e)
        },
        _setupEvents: function (e) {
            var i = {};
            e && t.each(e.split(" "), function (t, e) {
                i[e] = "_eventHandler"
            }), this._off(this.anchors.add(this.tabs).add(this.panels)), this._on(!0, this.anchors, {
                click: function (t) {
                    t.preventDefault()
                }
            }), this._on(this.anchors, i), this._on(this.tabs, {keydown: "_tabKeydown"}), this._on(this.panels, {keydown: "_panelKeydown"}), this._focusable(this.tabs), this._hoverable(this.tabs)
        },
        _setupHeightStyle: function (e) {
            var i, s = this.element.parent();
            "fill" === e ? (i = s.height(), i -= this.element.outerHeight() - this.element.height(), this.element.siblings(":visible").each(function () {
                var e = t(this), s = e.css("position");
                "absolute" !== s && "fixed" !== s && (i -= e.outerHeight(!0))
            }), this.element.children().not(this.panels).each(function () {
                i -= t(this).outerHeight(!0)
            }), this.panels.each(function () {
                t(this).height(Math.max(0, i - t(this).innerHeight() + t(this).height()))
            }).css("overflow", "auto")) : "auto" === e && (i = 0, this.panels.each(function () {
                i = Math.max(i, t(this).height("").height())
            }).height(i))
        },
        _eventHandler: function (e) {
            var i = this.options, s = this.active, o = t(e.currentTarget).closest("li"), n = o[0] === s[0],
                a = n && i.collapsible, r = a ? t() : this._getPanelForTab(o),
                l = s.length ? this._getPanelForTab(s) : t(),
                h = {oldTab: s, oldPanel: l, newTab: a ? t() : o, newPanel: r};
            e.preventDefault(), o.hasClass("ui-state-disabled") || o.hasClass("ui-tabs-loading") || this.running || n && !i.collapsible || !1 === this._trigger("beforeActivate", e, h) || (i.active = !a && this.tabs.index(o), this.active = n ? t() : o, this.xhr && this.xhr.abort(), l.length || r.length || t.error("jQuery UI Tabs: Mismatching fragment identifier."), r.length && this.load(this.tabs.index(o), e), this._toggle(e, h))
        },
        _toggle: function (e, i) {
            function s() {
                n.running = !1, n._trigger("activate", e, i)
            }

            function o() {
                n._addClass(i.newTab.closest("li"), "ui-tabs-active", "ui-state-active"), a.length && n.options.show ? n._show(a, n.options.show, s) : (a.show(), s())
            }

            var n = this, a = i.newPanel, r = i.oldPanel;
            this.running = !0, r.length && this.options.hide ? this._hide(r, this.options.hide, function () {
                n._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), o()
            }) : (this._removeClass(i.oldTab.closest("li"), "ui-tabs-active", "ui-state-active"), r.hide(), o()), r.attr("aria-hidden", "true"), i.oldTab.attr({
                "aria-selected": "false",
                "aria-expanded": "false"
            }), a.length && r.length ? i.oldTab.attr("tabIndex", -1) : a.length && this.tabs.filter(function () {
                return 0 === t(this).attr("tabIndex")
            }).attr("tabIndex", -1), a.attr("aria-hidden", "false"), i.newTab.attr({
                "aria-selected": "true",
                "aria-expanded": "true",
                tabIndex: 0
            })
        },
        _activate: function (e) {
            var i, s = this._findActive(e);
            s[0] !== this.active[0] && (s.length || (s = this.active), i = s.find(".ui-tabs-anchor")[0], this._eventHandler({
                target: i,
                currentTarget: i,
                preventDefault: t.noop
            }))
        },
        _findActive: function (e) {
            return !1 === e ? t() : this.tabs.eq(e)
        },
        _getIndex: function (e) {
            return "string" == typeof e && (e = this.anchors.index(this.anchors.filter("[href$='" + t.ui.escapeSelector(e) + "']"))), e
        },
        _destroy: function () {
            this.xhr && this.xhr.abort(), this.tablist.removeAttr("role").off(this.eventNamespace), this.anchors.removeAttr("role tabIndex").removeUniqueId(), this.tabs.add(this.panels).each(function () {
                t.data(this, "ui-tabs-destroy") ? t(this).remove() : t(this).removeAttr("role tabIndex aria-live aria-busy aria-selected aria-labelledby aria-hidden aria-expanded")
            }), this.tabs.each(function () {
                var e = t(this), i = e.data("ui-tabs-aria-controls");
                i ? e.attr("aria-controls", i).removeData("ui-tabs-aria-controls") : e.removeAttr("aria-controls")
            }), this.panels.show(), "content" !== this.options.heightStyle && this.panels.css("height", "")
        },
        enable: function (e) {
            var i = this.options.disabled;
            !1 !== i && (void 0 === e ? i = !1 : (e = this._getIndex(e), i = t.isArray(i) ? t.map(i, function (t) {
                return t !== e ? t : null
            }) : t.map(this.tabs, function (t, i) {
                return i !== e ? i : null
            })), this._setOptionDisabled(i))
        },
        disable: function (e) {
            var i = this.options.disabled;
            if (!0 !== i) {
                if (void 0 === e) i = !0; else {
                    if (e = this._getIndex(e), -1 !== t.inArray(e, i)) return;
                    i = t.isArray(i) ? t.merge([e], i).sort() : [e]
                }
                this._setOptionDisabled(i)
            }
        },
        load: function (e, i) {
            e = this._getIndex(e);
            var s = this, o = this.tabs.eq(e), n = o.find(".ui-tabs-anchor"), a = this._getPanelForTab(o),
                r = {tab: o, panel: a}, l = function (t, e) {
                    "abort" === e && s.panels.stop(!1, !0), s._removeClass(o, "ui-tabs-loading"), a.removeAttr("aria-busy"), t === s.xhr && delete s.xhr
                };
            this._isLocal(n[0]) || (this.xhr = t.ajax(this._ajaxSettings(n, i, r)), this.xhr && "canceled" !== this.xhr.statusText && (this._addClass(o, "ui-tabs-loading"), a.attr("aria-busy", "true"), this.xhr.done(function (t, e, o) {
                setTimeout(function () {
                    a.html(t), s._trigger("load", i, r), l(o, e)
                }, 1)
            }).fail(function (t, e) {
                setTimeout(function () {
                    l(t, e)
                }, 1)
            })))
        },
        _ajaxSettings: function (e, i, s) {
            var o = this;
            return {
                url: e.attr("href").replace(/#.*$/, ""), beforeSend: function (e, n) {
                    return o._trigger("beforeLoad", i, t.extend({jqXHR: e, ajaxSettings: n}, s))
                }
            }
        },
        _getPanelForTab: function (e) {
            var i = t(e).attr("aria-controls");
            return this.element.find(this._sanitizeSelector("#" + i))
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tabs", t.ui.tabs, {
        _processTabs: function () {
            this._superApply(arguments), this._addClass(this.tabs, "ui-tab")
        }
    }), t.ui.tabs, t.widget("ui.tooltip", {
        version: "1.12.1", options: {
            classes: {"ui-tooltip": "ui-corner-all ui-widget-shadow"},
            content: function () {
                var e = t(this).attr("title") || "";
                return t("<a>").text(e).html()
            },
            hide: !0,
            items: "[title]:not([disabled])",
            position: {my: "left top+15", at: "left bottom", collision: "flipfit flip"},
            show: !0,
            track: !1,
            close: null,
            open: null
        }, _addDescribedBy: function (e, i) {
            var s = (e.attr("aria-describedby") || "").split(/\s+/);
            s.push(i), e.data("ui-tooltip-id", i).attr("aria-describedby", t.trim(s.join(" ")))
        }, _removeDescribedBy: function (e) {
            var i = e.data("ui-tooltip-id"), s = (e.attr("aria-describedby") || "").split(/\s+/), o = t.inArray(i, s);
            -1 !== o && s.splice(o, 1), e.removeData("ui-tooltip-id"), (s = t.trim(s.join(" "))) ? e.attr("aria-describedby", s) : e.removeAttr("aria-describedby")
        }, _create: function () {
            this._on({
                mouseover: "open",
                focusin: "open"
            }), this.tooltips = {}, this.parents = {}, this.liveRegion = t("<div>").attr({
                role: "log",
                "aria-live": "assertive",
                "aria-relevant": "additions"
            }).appendTo(this.document[0].body), this._addClass(this.liveRegion, null, "ui-helper-hidden-accessible"), this.disabledTitles = t([])
        }, _setOption: function (e, i) {
            var s = this;
            this._super(e, i), "content" === e && t.each(this.tooltips, function (t, e) {
                s._updateContent(e.element)
            })
        }, _setOptionDisabled: function (t) {
            this[t ? "_disable" : "_enable"]()
        }, _disable: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var o = t.Event("blur");
                o.target = o.currentTarget = s.element[0], e.close(o, !0)
            }), this.disabledTitles = this.disabledTitles.add(this.element.find(this.options.items).addBack().filter(function () {
                var e = t(this);
                return e.is("[title]") ? e.data("ui-tooltip-title", e.attr("title")).removeAttr("title") : void 0
            }))
        }, _enable: function () {
            this.disabledTitles.each(function () {
                var e = t(this);
                e.data("ui-tooltip-title") && e.attr("title", e.data("ui-tooltip-title"))
            }), this.disabledTitles = t([])
        }, open: function (e) {
            var i = this, s = t(e ? e.target : this.element).closest(this.options.items);
            s.length && !s.data("ui-tooltip-id") && (s.attr("title") && s.data("ui-tooltip-title", s.attr("title")), s.data("ui-tooltip-open", !0), e && "mouseover" === e.type && s.parents().each(function () {
                var e, s = t(this);
                s.data("ui-tooltip-open") && ((e = t.Event("blur")).target = e.currentTarget = this, i.close(e, !0)), s.attr("title") && (s.uniqueId(), i.parents[this.id] = {
                    element: this,
                    title: s.attr("title")
                }, s.attr("title", ""))
            }), this._registerCloseHandlers(e, s), this._updateContent(s, e))
        }, _updateContent: function (t, e) {
            var i, s = this.options.content, o = this, n = e ? e.type : null;
            return "string" == typeof s || s.nodeType || s.jquery ? this._open(e, t, s) : void ((i = s.call(t[0], function (i) {
                o._delay(function () {
                    t.data("ui-tooltip-open") && (e && (e.type = n), this._open(e, t, i))
                })
            })) && this._open(e, t, i))
        }, _open: function (e, i, s) {
            function o(t) {
                h.of = t, a.is(":hidden") || a.position(h)
            }

            var n, a, r, l, h = t.extend({}, this.options.position);
            if (s) {
                if (n = this._find(i)) return void n.tooltip.find(".ui-tooltip-content").html(s);
                i.is("[title]") && (e && "mouseover" === e.type ? i.attr("title", "") : i.removeAttr("title")), n = this._tooltip(i), a = n.tooltip, this._addDescribedBy(i, a.attr("id")), a.find(".ui-tooltip-content").html(s), this.liveRegion.children().hide(), (l = t("<div>").html(a.find(".ui-tooltip-content").html())).removeAttr("name").find("[name]").removeAttr("name"), l.removeAttr("id").find("[id]").removeAttr("id"), l.appendTo(this.liveRegion), this.options.track && e && /^mouse/.test(e.type) ? (this._on(this.document, {mousemove: o}), o(e)) : a.position(t.extend({of: i}, this.options.position)), a.hide(), this._show(a, this.options.show), this.options.track && this.options.show && this.options.show.delay && (r = this.delayedShow = setInterval(function () {
                    a.is(":visible") && (o(h.of), clearInterval(r))
                }, t.fx.interval)), this._trigger("open", e, {tooltip: a})
            }
        }, _registerCloseHandlers: function (e, i) {
            var s = {
                keyup: function (e) {
                    if (e.keyCode === t.ui.keyCode.ESCAPE) {
                        var s = t.Event(e);
                        s.currentTarget = i[0], this.close(s, !0)
                    }
                }
            };
            i[0] !== this.element[0] && (s.remove = function () {
                this._removeTooltip(this._find(i).tooltip)
            }), e && "mouseover" !== e.type || (s.mouseleave = "close"), e && "focusin" !== e.type || (s.focusout = "close"), this._on(!0, i, s)
        }, close: function (e) {
            var i, s = this, o = t(e ? e.currentTarget : this.element), n = this._find(o);
            return n ? (i = n.tooltip, void (n.closing || (clearInterval(this.delayedShow), o.data("ui-tooltip-title") && !o.attr("title") && o.attr("title", o.data("ui-tooltip-title")), this._removeDescribedBy(o), n.hiding = !0, i.stop(!0), this._hide(i, this.options.hide, function () {
                s._removeTooltip(t(this))
            }), o.removeData("ui-tooltip-open"), this._off(o, "mouseleave focusout keyup"), o[0] !== this.element[0] && this._off(o, "remove"), this._off(this.document, "mousemove"), e && "mouseleave" === e.type && t.each(this.parents, function (e, i) {
                t(i.element).attr("title", i.title), delete s.parents[e]
            }), n.closing = !0, this._trigger("close", e, {tooltip: i}), n.hiding || (n.closing = !1)))) : void o.removeData("ui-tooltip-open")
        }, _tooltip: function (e) {
            var i = t("<div>").attr("role", "tooltip"), s = t("<div>").appendTo(i), o = i.uniqueId().attr("id");
            return this._addClass(s, "ui-tooltip-content"), this._addClass(i, "ui-tooltip", "ui-widget ui-widget-content"), i.appendTo(this._appendTo(e)), this.tooltips[o] = {
                element: e,
                tooltip: i
            }
        }, _find: function (t) {
            var e = t.data("ui-tooltip-id");
            return e ? this.tooltips[e] : null
        }, _removeTooltip: function (t) {
            t.remove(), delete this.tooltips[t.attr("id")]
        }, _appendTo: function (t) {
            var e = t.closest(".ui-front, dialog");
            return e.length || (e = this.document[0].body), e
        }, _destroy: function () {
            var e = this;
            t.each(this.tooltips, function (i, s) {
                var o = t.Event("blur"), n = s.element;
                o.target = o.currentTarget = n[0], e.close(o, !0), t("#" + i).remove(), n.data("ui-tooltip-title") && (n.attr("title") || n.attr("title", n.data("ui-tooltip-title")), n.removeData("ui-tooltip-title"))
            }), this.liveRegion.remove()
        }
    }), !1 !== t.uiBackCompat && t.widget("ui.tooltip", t.ui.tooltip, {
        options: {tooltipClass: null},
        _tooltip: function () {
            var t = this._superApply(arguments);
            return this.options.tooltipClass && t.tooltip.addClass(this.options.tooltipClass), t
        }
    }), t.ui.tooltip;
    var y, b = "ui-effects-", w = "ui-effects-style", _ = "ui-effects-animated", x = t;
    t.effects = {effect: {}}, function (t, e) {
        function i(t, e, i) {
            var s = c[e.type] || {};
            return null == t ? i || !e.def ? null : e.def : (t = s.floor ? ~~t : parseFloat(t), isNaN(t) ? e.def : s.mod ? (t + s.mod) % s.mod : 0 > t ? 0 : t > s.max ? s.max : t)
        }

        function s(i) {
            var s = l(), o = s._rgba = [];
            return i = i.toLowerCase(), p(r, function (t, n) {
                var a, r = n.re.exec(i), l = r && n.parse(r), c = n.space || "rgba";
                return l ? (a = s[c](l), s[h[c].cache] = a[h[c].cache], o = s._rgba = a._rgba, !1) : e
            }), o.length ? ("0,0,0,0" === o.join() && t.extend(o, n.transparent), s) : n[i]
        }

        function o(t, e, i) {
            return 1 > 6 * (i = (i + 1) % 1) ? t + 6 * (e - t) * i : 1 > 2 * i ? e : 2 > 3 * i ? t + 6 * (e - t) * (2 / 3 - i) : t
        }

        var n, a = /^([\-+])=\s*(\d+\.?\d*)/, r = [{
                re: /rgba?\(\s*(\d{1,3})\s*,\s*(\d{1,3})\s*,\s*(\d{1,3})\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [t[1], t[2], t[3], t[4]]
                }
            }, {
                re: /rgba?\(\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                parse: function (t) {
                    return [2.55 * t[1], 2.55 * t[2], 2.55 * t[3], t[4]]
                }
            }, {
                re: /#([a-f0-9]{2})([a-f0-9]{2})([a-f0-9]{2})/, parse: function (t) {
                    return [parseInt(t[1], 16), parseInt(t[2], 16), parseInt(t[3], 16)]
                }
            }, {
                re: /#([a-f0-9])([a-f0-9])([a-f0-9])/, parse: function (t) {
                    return [parseInt(t[1] + t[1], 16), parseInt(t[2] + t[2], 16), parseInt(t[3] + t[3], 16)]
                }
            }, {
                re: /hsla?\(\s*(\d+(?:\.\d+)?)\s*,\s*(\d+(?:\.\d+)?)\%\s*,\s*(\d+(?:\.\d+)?)\%\s*(?:,\s*(\d?(?:\.\d+)?)\s*)?\)/,
                space: "hsla",
                parse: function (t) {
                    return [t[1], t[2] / 100, t[3] / 100, t[4]]
                }
            }], l = t.Color = function (e, i, s, o) {
                return new t.Color.fn.parse(e, i, s, o)
            }, h = {
                rgba: {
                    props: {
                        red: {idx: 0, type: "byte"},
                        green: {idx: 1, type: "byte"},
                        blue: {idx: 2, type: "byte"}
                    }
                },
                hsla: {
                    props: {
                        hue: {idx: 0, type: "degrees"},
                        saturation: {idx: 1, type: "percent"},
                        lightness: {idx: 2, type: "percent"}
                    }
                }
            }, c = {byte: {floor: !0, max: 255}, percent: {max: 1}, degrees: {mod: 360, floor: !0}}, d = l.support = {},
            u = t("<p>")[0], p = t.each;
        u.style.cssText = "background-color:rgba(1,1,1,.5)", d.rgba = u.style.backgroundColor.indexOf("rgba") > -1, p(h, function (t, e) {
            e.cache = "_" + t, e.props.alpha = {idx: 3, type: "percent", def: 1}
        }), l.fn = t.extend(l.prototype, {
            parse: function (o, a, r, c) {
                if (o === e) return this._rgba = [null, null, null, null], this;
                (o.jquery || o.nodeType) && (o = t(o).css(a), a = e);
                var d = this, u = t.type(o), f = this._rgba = [];
                return a !== e && (o = [o, a, r, c], u = "array"), "string" === u ? this.parse(s(o) || n._default) : "array" === u ? (p(h.rgba.props, function (t, e) {
                    f[e.idx] = i(o[e.idx], e)
                }), this) : "object" === u ? (p(h, o instanceof l ? function (t, e) {
                    o[e.cache] && (d[e.cache] = o[e.cache].slice())
                } : function (e, s) {
                    var n = s.cache;
                    p(s.props, function (t, e) {
                        if (!d[n] && s.to) {
                            if ("alpha" === t || null == o[t]) return;
                            d[n] = s.to(d._rgba)
                        }
                        d[n][e.idx] = i(o[t], e, !0)
                    }), d[n] && 0 > t.inArray(null, d[n].slice(0, 3)) && (d[n][3] = 1, s.from && (d._rgba = s.from(d[n])))
                }), this) : e
            }, is: function (t) {
                var i = l(t), s = !0, o = this;
                return p(h, function (t, n) {
                    var a, r = i[n.cache];
                    return r && (a = o[n.cache] || n.to && n.to(o._rgba) || [], p(n.props, function (t, i) {
                        return null != r[i.idx] ? s = r[i.idx] === a[i.idx] : e
                    })), s
                }), s
            }, _space: function () {
                var t = [], e = this;
                return p(h, function (i, s) {
                    e[s.cache] && t.push(i)
                }), t.pop()
            }, transition: function (t, e) {
                var s = l(t), o = s._space(), n = h[o], a = 0 === this.alpha() ? l("transparent") : this,
                    r = a[n.cache] || n.to(a._rgba), d = r.slice();
                return s = s[n.cache], p(n.props, function (t, o) {
                    var n = o.idx, a = r[n], l = s[n], h = c[o.type] || {};
                    null !== l && (null === a ? d[n] = l : (h.mod && (l - a > h.mod / 2 ? a += h.mod : a - l > h.mod / 2 && (a -= h.mod)), d[n] = i((l - a) * e + a, o)))
                }), this[o](d)
            }, blend: function (e) {
                if (1 === this._rgba[3]) return this;
                var i = this._rgba.slice(), s = i.pop(), o = l(e)._rgba;
                return l(t.map(i, function (t, e) {
                    return (1 - s) * o[e] + s * t
                }))
            }, toRgbaString: function () {
                var e = "rgba(", i = t.map(this._rgba, function (t, e) {
                    return null == t ? e > 2 ? 1 : 0 : t
                });
                return 1 === i[3] && (i.pop(), e = "rgb("), e + i.join() + ")"
            }, toHslaString: function () {
                var e = "hsla(", i = t.map(this.hsla(), function (t, e) {
                    return null == t && (t = e > 2 ? 1 : 0), e && 3 > e && (t = Math.round(100 * t) + "%"), t
                });
                return 1 === i[3] && (i.pop(), e = "hsl("), e + i.join() + ")"
            }, toHexString: function (e) {
                var i = this._rgba.slice(), s = i.pop();
                return e && i.push(~~(255 * s)), "#" + t.map(i, function (t) {
                    return 1 === (t = (t || 0).toString(16)).length ? "0" + t : t
                }).join("")
            }, toString: function () {
                return 0 === this._rgba[3] ? "transparent" : this.toRgbaString()
            }
        }), l.fn.parse.prototype = l.fn, h.hsla.to = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e, i, s = t[0] / 255, o = t[1] / 255, n = t[2] / 255, a = t[3], r = Math.max(s, o, n),
                l = Math.min(s, o, n), h = r - l, c = r + l, d = .5 * c;
            return e = l === r ? 0 : s === r ? 60 * (o - n) / h + 360 : o === r ? 60 * (n - s) / h + 120 : 60 * (s - o) / h + 240, i = 0 === h ? 0 : .5 >= d ? h / c : h / (2 - c), [Math.round(e) % 360, i, d, null == a ? 1 : a]
        }, h.hsla.from = function (t) {
            if (null == t[0] || null == t[1] || null == t[2]) return [null, null, null, t[3]];
            var e = t[0] / 360, i = t[1], s = t[2], n = t[3], a = .5 >= s ? s * (1 + i) : s + i - s * i, r = 2 * s - a;
            return [Math.round(255 * o(r, a, e + 1 / 3)), Math.round(255 * o(r, a, e)), Math.round(255 * o(r, a, e - 1 / 3)), n]
        }, p(h, function (s, o) {
            var n = o.props, r = o.cache, h = o.to, c = o.from;
            l.fn[s] = function (s) {
                if (h && !this[r] && (this[r] = h(this._rgba)), s === e) return this[r].slice();
                var o, a = t.type(s), d = "array" === a || "object" === a ? s : arguments, u = this[r].slice();
                return p(n, function (t, e) {
                    var s = d["object" === a ? t : e.idx];
                    null == s && (s = u[e.idx]), u[e.idx] = i(s, e)
                }), c ? ((o = l(c(u)))[r] = u, o) : l(u)
            }, p(n, function (e, i) {
                l.fn[e] || (l.fn[e] = function (o) {
                    var n, r = t.type(o), l = "alpha" === e ? this._hsla ? "hsla" : "rgba" : s, h = this[l](),
                        c = h[i.idx];
                    return "undefined" === r ? c : ("function" === r && (o = o.call(this, c), r = t.type(o)), null == o && i.empty ? this : ("string" === r && ((n = a.exec(o)) && (o = c + parseFloat(n[2]) * ("+" === n[1] ? 1 : -1))), h[i.idx] = o, this[l](h)))
                })
            })
        }), l.hook = function (e) {
            var i = e.split(" ");
            p(i, function (e, i) {
                t.cssHooks[i] = {
                    set: function (e, o) {
                        var n, a, r = "";
                        if ("transparent" !== o && ("string" !== t.type(o) || (n = s(o)))) {
                            if (o = l(n || o), !d.rgba && 1 !== o._rgba[3]) {
                                for (a = "backgroundColor" === i ? e.parentNode : e; ("" === r || "transparent" === r) && a && a.style;) try {
                                    r = t.css(a, "backgroundColor"), a = a.parentNode
                                } catch (t) {
                                }
                                o = o.blend(r && "transparent" !== r ? r : "_default")
                            }
                            o = o.toRgbaString()
                        }
                        try {
                            e.style[i] = o
                        } catch (t) {
                        }
                    }
                }, t.fx.step[i] = function (e) {
                    e.colorInit || (e.start = l(e.elem, i), e.end = l(e.end), e.colorInit = !0), t.cssHooks[i].set(e.elem, e.start.transition(e.end, e.pos))
                }
            })
        }, l.hook("backgroundColor borderBottomColor borderLeftColor borderRightColor borderTopColor color columnRuleColor outlineColor textDecorationColor textEmphasisColor"), t.cssHooks.borderColor = {
            expand: function (t) {
                var e = {};
                return p(["Top", "Right", "Bottom", "Left"], function (i, s) {
                    e["border" + s + "Color"] = t
                }), e
            }
        }, n = t.Color.names = {
            aqua: "#00ffff",
            black: "#000000",
            blue: "#0000ff",
            fuchsia: "#ff00ff",
            gray: "#808080",
            green: "#008000",
            lime: "#00ff00",
            maroon: "#800000",
            navy: "#000080",
            olive: "#808000",
            purple: "#800080",
            red: "#ff0000",
            silver: "#c0c0c0",
            teal: "#008080",
            white: "#ffffff",
            yellow: "#ffff00",
            transparent: [null, null, null, 0],
            _default: "#ffffff"
        }
    }(x), function () {
        function e(e) {
            var i, s,
                o = e.ownerDocument.defaultView ? e.ownerDocument.defaultView.getComputedStyle(e, null) : e.currentStyle,
                n = {};
            if (o && o.length && o[0] && o[o[0]]) for (s = o.length; s--;) i = o[s], "string" == typeof o[i] && (n[t.camelCase(i)] = o[i]); else for (i in o) "string" == typeof o[i] && (n[i] = o[i]);
            return n
        }

        var i, s, o, n = ["add", "remove", "toggle"], a = {
            border: 1,
            borderBottom: 1,
            borderColor: 1,
            borderLeft: 1,
            borderRight: 1,
            borderTop: 1,
            borderWidth: 1,
            margin: 1,
            padding: 1
        };
        t.each(["borderLeftStyle", "borderRightStyle", "borderBottomStyle", "borderTopStyle"], function (e, i) {
            t.fx.step[i] = function (t) {
                ("none" !== t.end && !t.setAttr || 1 === t.pos && !t.setAttr) && (x.style(t.elem, i, t.end), t.setAttr = !0)
            }
        }), t.fn.addBack || (t.fn.addBack = function (t) {
            return this.add(null == t ? this.prevObject : this.prevObject.filter(t))
        }), t.effects.animateClass = function (i, s, o, r) {
            var l = t.speed(s, o, r);
            return this.queue(function () {
                var s, o = t(this), r = o.attr("class") || "", h = l.children ? o.find("*").addBack() : o;
                h = h.map(function () {
                    return {el: t(this), start: e(this)}
                }), (s = function () {
                    t.each(n, function (t, e) {
                        i[e] && o[e + "Class"](i[e])
                    })
                })(), h = h.map(function () {
                    return this.end = e(this.el[0]), this.diff = function (e, i) {
                        var s, o, n = {};
                        for (s in i) o = i[s], e[s] !== o && (a[s] || (t.fx.step[s] || !isNaN(parseFloat(o))) && (n[s] = o));
                        return n
                    }(this.start, this.end), this
                }), o.attr("class", r), h = h.map(function () {
                    var e = this, i = t.Deferred(), s = t.extend({}, l, {
                        queue: !1, complete: function () {
                            i.resolve(e)
                        }
                    });
                    return this.el.animate(this.diff, s), i.promise()
                }), t.when.apply(t, h.get()).done(function () {
                    s(), t.each(arguments, function () {
                        var e = this.el;
                        t.each(this.diff, function (t) {
                            e.css(t, "")
                        })
                    }), l.complete.call(o[0])
                })
            })
        }, t.fn.extend({
            addClass: (o = t.fn.addClass, function (e, i, s, n) {
                return i ? t.effects.animateClass.call(this, {add: e}, i, s, n) : o.apply(this, arguments)
            }), removeClass: (s = t.fn.removeClass, function (e, i, o, n) {
                return arguments.length > 1 ? t.effects.animateClass.call(this, {remove: e}, i, o, n) : s.apply(this, arguments)
            }), toggleClass: (i = t.fn.toggleClass, function (e, s, o, n, a) {
                return "boolean" == typeof s || void 0 === s ? o ? t.effects.animateClass.call(this, s ? {add: e} : {remove: e}, o, n, a) : i.apply(this, arguments) : t.effects.animateClass.call(this, {toggle: e}, s, o, n)
            }), switchClass: function (e, i, s, o, n) {
                return t.effects.animateClass.call(this, {add: i, remove: e}, s, o, n)
            }
        })
    }(), function () {
        function e(e, i, s, o) {
            return t.isPlainObject(e) && (i = e, e = e.effect), e = {effect: e}, null == i && (i = {}), t.isFunction(i) && (o = i, s = null, i = {}), ("number" == typeof i || t.fx.speeds[i]) && (o = s, s = i, i = {}), t.isFunction(s) && (o = s, s = null), i && t.extend(e, i), s = s || i.duration, e.duration = t.fx.off ? 0 : "number" == typeof s ? s : s in t.fx.speeds ? t.fx.speeds[s] : t.fx.speeds._default, e.complete = o || i.complete, e
        }

        function i(e) {
            return !(e && "number" != typeof e && !t.fx.speeds[e]) || ("string" == typeof e && !t.effects.effect[e] || (!!t.isFunction(e) || "object" == typeof e && !e.effect))
        }

        function s(t, e) {
            var i = e.outerWidth(), s = e.outerHeight(),
                o = /^rect\((-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto),?\s*(-?\d*\.?\d*px|-?\d+%|auto)\)$/.exec(t) || ["", 0, i, s, 0];
            return {
                top: parseFloat(o[1]) || 0,
                right: "auto" === o[2] ? i : parseFloat(o[2]),
                bottom: "auto" === o[3] ? s : parseFloat(o[3]),
                left: parseFloat(o[4]) || 0
            }
        }

        var o, n, a, r;
        t.expr && t.expr.filters && t.expr.filters.animated && (t.expr.filters.animated = (r = t.expr.filters.animated, function (e) {
            return !!t(e).data(_) || r(e)
        })), !1 !== t.uiBackCompat && t.extend(t.effects, {
            save: function (t, e) {
                for (var i = 0, s = e.length; s > i; i++) null !== e[i] && t.data(b + e[i], t[0].style[e[i]])
            }, restore: function (t, e) {
                for (var i, s = 0, o = e.length; o > s; s++) null !== e[s] && (i = t.data(b + e[s]), t.css(e[s], i))
            }, setMode: function (t, e) {
                return "toggle" === e && (e = t.is(":hidden") ? "show" : "hide"), e
            }, createWrapper: function (e) {
                if (e.parent().is(".ui-effects-wrapper")) return e.parent();
                var i = {width: e.outerWidth(!0), height: e.outerHeight(!0), float: e.css("float")},
                    s = t("<div></div>").addClass("ui-effects-wrapper").css({
                        fontSize: "100%",
                        background: "transparent",
                        border: "none",
                        margin: 0,
                        padding: 0
                    }), o = {width: e.width(), height: e.height()}, n = document.activeElement;
                try {
                    n.id
                } catch (t) {
                    n = document.body
                }
                return e.wrap(s), (e[0] === n || t.contains(e[0], n)) && t(n).trigger("focus"), s = e.parent(), "static" === e.css("position") ? (s.css({position: "relative"}), e.css({position: "relative"})) : (t.extend(i, {
                    position: e.css("position"),
                    zIndex: e.css("z-index")
                }), t.each(["top", "left", "bottom", "right"], function (t, s) {
                    i[s] = e.css(s), isNaN(parseInt(i[s], 10)) && (i[s] = "auto")
                }), e.css({
                    position: "relative",
                    top: 0,
                    left: 0,
                    right: "auto",
                    bottom: "auto"
                })), e.css(o), s.css(i).show()
            }, removeWrapper: function (e) {
                var i = document.activeElement;
                return e.parent().is(".ui-effects-wrapper") && (e.parent().replaceWith(e), (e[0] === i || t.contains(e[0], i)) && t(i).trigger("focus")), e
            }
        }), t.extend(t.effects, {
            version: "1.12.1", define: function (e, i, s) {
                return s || (s = i, i = "effect"), t.effects.effect[e] = s, t.effects.effect[e].mode = i, s
            }, scaledDimensions: function (t, e, i) {
                if (0 === e) return {height: 0, width: 0, outerHeight: 0, outerWidth: 0};
                var s = "horizontal" !== i ? (e || 100) / 100 : 1, o = "vertical" !== i ? (e || 100) / 100 : 1;
                return {
                    height: t.height() * o,
                    width: t.width() * s,
                    outerHeight: t.outerHeight() * o,
                    outerWidth: t.outerWidth() * s
                }
            }, clipToBox: function (t) {
                return {
                    width: t.clip.right - t.clip.left,
                    height: t.clip.bottom - t.clip.top,
                    left: t.clip.left,
                    top: t.clip.top
                }
            }, unshift: function (t, e, i) {
                var s = t.queue();
                e > 1 && s.splice.apply(s, [1, 0].concat(s.splice(e, i))), t.dequeue()
            }, saveStyle: function (t) {
                t.data(w, t[0].style.cssText)
            }, restoreStyle: function (t) {
                t[0].style.cssText = t.data(w) || "", t.removeData(w)
            }, mode: function (t, e) {
                var i = t.is(":hidden");
                return "toggle" === e && (e = i ? "show" : "hide"), (i ? "hide" === e : "show" === e) && (e = "none"), e
            }, getBaseline: function (t, e) {
                var i, s;
                switch (t[0]) {
                    case "top":
                        i = 0;
                        break;
                    case "middle":
                        i = .5;
                        break;
                    case "bottom":
                        i = 1;
                        break;
                    default:
                        i = t[0] / e.height
                }
                switch (t[1]) {
                    case "left":
                        s = 0;
                        break;
                    case "center":
                        s = .5;
                        break;
                    case "right":
                        s = 1;
                        break;
                    default:
                        s = t[1] / e.width
                }
                return {x: s, y: i}
            }, createPlaceholder: function (e) {
                var i, s = e.css("position"), o = e.position();
                return e.css({
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()), /^(static|relative)/.test(s) && (s = "absolute", i = t("<" + e[0].nodeName + ">").insertAfter(e).css({
                    display: /^(inline|ruby)/.test(e.css("display")) ? "inline-block" : "block",
                    visibility: "hidden",
                    marginTop: e.css("marginTop"),
                    marginBottom: e.css("marginBottom"),
                    marginLeft: e.css("marginLeft"),
                    marginRight: e.css("marginRight"),
                    float: e.css("float")
                }).outerWidth(e.outerWidth()).outerHeight(e.outerHeight()).addClass("ui-effects-placeholder"), e.data(b + "placeholder", i)), e.css({
                    position: s,
                    left: o.left,
                    top: o.top
                }), i
            }, removePlaceholder: function (t) {
                var e = b + "placeholder", i = t.data(e);
                i && (i.remove(), t.removeData(e))
            }, cleanUp: function (e) {
                t.effects.restoreStyle(e), t.effects.removePlaceholder(e)
            }, setTransition: function (e, i, s, o) {
                return o = o || {}, t.each(i, function (t, i) {
                    var n = e.cssUnit(i);
                    n[0] > 0 && (o[i] = n[0] * s + n[1])
                }), o
            }
        }), t.fn.extend({
            effect: function () {
                function i(e) {
                    function i() {
                        t.isFunction(l) && l.call(a[0]), t.isFunction(e) && e()
                    }

                    var a = t(this);
                    s.mode = c.shift(), !1 === t.uiBackCompat || n ? "none" === s.mode ? (a[h](), i()) : o.call(a[0], s, function () {
                        a.removeData(_), t.effects.cleanUp(a), "hide" === s.mode && a.hide(), i()
                    }) : (a.is(":hidden") ? "hide" === h : "show" === h) ? (a[h](), i()) : o.call(a[0], s, i)
                }

                var s = e.apply(this, arguments), o = t.effects.effect[s.effect], n = o.mode, a = s.queue,
                    r = a || "fx", l = s.complete, h = s.mode, c = [], d = function (e) {
                        var i = t(this), s = t.effects.mode(i, h) || n;
                        i.data(_, !0), c.push(s), n && ("show" === s || s === n && "hide" === s) && i.show(), n && "none" === s || t.effects.saveStyle(i), t.isFunction(e) && e()
                    };
                return t.fx.off || !o ? h ? this[h](s.duration, l) : this.each(function () {
                    l && l.call(this)
                }) : !1 === a ? this.each(d).each(i) : this.queue(r, d).queue(r, i)
            }, show: (a = t.fn.show, function (t) {
                if (i(t)) return a.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "show", this.effect.call(this, s)
            }), hide: (n = t.fn.hide, function (t) {
                if (i(t)) return n.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "hide", this.effect.call(this, s)
            }), toggle: (o = t.fn.toggle, function (t) {
                if (i(t) || "boolean" == typeof t) return o.apply(this, arguments);
                var s = e.apply(this, arguments);
                return s.mode = "toggle", this.effect.call(this, s)
            }), cssUnit: function (e) {
                var i = this.css(e), s = [];
                return t.each(["em", "px", "%", "pt"], function (t, e) {
                    i.indexOf(e) > 0 && (s = [parseFloat(i), e])
                }), s
            }, cssClip: function (t) {
                return t ? this.css("clip", "rect(" + t.top + "px " + t.right + "px " + t.bottom + "px " + t.left + "px)") : s(this.css("clip"), this)
            }, transfer: function (e, i) {
                var s = t(this), o = t(e.to), n = "fixed" === o.css("position"), a = t("body"),
                    r = n ? a.scrollTop() : 0, l = n ? a.scrollLeft() : 0, h = o.offset(),
                    c = {top: h.top - r, left: h.left - l, height: o.innerHeight(), width: o.innerWidth()},
                    d = s.offset(),
                    u = t("<div class='ui-effects-transfer'></div>").appendTo("body").addClass(e.className).css({
                        top: d.top - r,
                        left: d.left - l,
                        height: s.innerHeight(),
                        width: s.innerWidth(),
                        position: n ? "fixed" : "absolute"
                    }).animate(c, e.duration, e.easing, function () {
                        u.remove(), t.isFunction(i) && i()
                    })
            }
        }), t.fx.step.clip = function (e) {
            e.clipInit || (e.start = t(e.elem).cssClip(), "string" == typeof e.end && (e.end = s(e.end, e.elem)), e.clipInit = !0), t(e.elem).cssClip({
                top: e.pos * (e.end.top - e.start.top) + e.start.top,
                right: e.pos * (e.end.right - e.start.right) + e.start.right,
                bottom: e.pos * (e.end.bottom - e.start.bottom) + e.start.bottom,
                left: e.pos * (e.end.left - e.start.left) + e.start.left
            })
        }
    }(), y = {}, t.each(["Quad", "Cubic", "Quart", "Quint", "Expo"], function (t, e) {
        y[e] = function (e) {
            return Math.pow(e, t + 2)
        }
    }), t.extend(y, {
        Sine: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        }, Circ: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        }, Elastic: function (t) {
            return 0 === t || 1 === t ? t : -Math.pow(2, 8 * (t - 1)) * Math.sin((80 * (t - 1) - 7.5) * Math.PI / 15)
        }, Back: function (t) {
            return t * t * (3 * t - 2)
        }, Bounce: function (t) {
            for (var e, i = 4; ((e = Math.pow(2, --i)) - 1) / 11 > t;) ;
            return 1 / Math.pow(4, 3 - i) - 7.5625 * Math.pow((3 * e - 2) / 22 - t, 2)
        }
    }), t.each(y, function (e, i) {
        t.easing["easeIn" + e] = i, t.easing["easeOut" + e] = function (t) {
            return 1 - i(1 - t)
        }, t.easing["easeInOut" + e] = function (t) {
            return .5 > t ? i(2 * t) / 2 : 1 - i(-2 * t + 2) / 2
        }
    });
    t.effects;
    t.effects.define("blind", "hide", function (e, i) {
        var s = {
                up: ["bottom", "top"],
                vertical: ["bottom", "top"],
                down: ["top", "bottom"],
                left: ["right", "left"],
                horizontal: ["right", "left"],
                right: ["left", "right"]
            }, o = t(this), n = e.direction || "up", a = o.cssClip(), r = {clip: t.extend({}, a)},
            l = t.effects.createPlaceholder(o);
        r.clip[s[n][0]] = r.clip[s[n][1]], "show" === e.mode && (o.cssClip(r.clip), l && l.css(t.effects.clipToBox(r)), r.clip = a), l && l.animate(t.effects.clipToBox(r), e.duration, e.easing), o.animate(r, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("bounce", function (e, i) {
        var s, o, n, a = t(this), r = e.mode, l = "hide" === r, h = "show" === r, c = e.direction || "up",
            d = e.distance, u = e.times || 5, p = 2 * u + (h || l ? 1 : 0), f = e.duration / p, m = e.easing,
            g = "up" === c || "down" === c ? "top" : "left", v = "up" === c || "left" === c, y = 0,
            b = a.queue().length;
        for (t.effects.createPlaceholder(a), n = a.css(g), d || (d = a["top" === g ? "outerHeight" : "outerWidth"]() / 3), h && ((o = {opacity: 1})[g] = n, a.css("opacity", 0).css(g, v ? 2 * -d : 2 * d).animate(o, f, m)), l && (d /= Math.pow(2, u - 1)), (o = {})[g] = n; u > y; y++) s = {}, s[g] = (v ? "-=" : "+=") + d, a.animate(s, f, m).animate(o, f, m), d = l ? 2 * d : d / 2;
        l && ((s = {opacity: 0})[g] = (v ? "-=" : "+=") + d, a.animate(s, f, m)), a.queue(i), t.effects.unshift(a, b, p + 1)
    }), t.effects.define("clip", "hide", function (e, i) {
        var s, o = {}, n = t(this), a = e.direction || "vertical", r = "both" === a, l = r || "horizontal" === a,
            h = r || "vertical" === a;
        s = n.cssClip(), o.clip = {
            top: h ? (s.bottom - s.top) / 2 : s.top,
            right: l ? (s.right - s.left) / 2 : s.right,
            bottom: h ? (s.bottom - s.top) / 2 : s.bottom,
            left: l ? (s.right - s.left) / 2 : s.left
        }, t.effects.createPlaceholder(n), "show" === e.mode && (n.cssClip(o.clip), o.clip = s), n.animate(o, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("drop", "hide", function (e, i) {
        var s, o = t(this), n = "show" === e.mode, a = e.direction || "left",
            r = "up" === a || "down" === a ? "top" : "left", l = "up" === a || "left" === a ? "-=" : "+=",
            h = "+=" === l ? "-=" : "+=", c = {opacity: 0};
        t.effects.createPlaceholder(o), s = e.distance || o["top" === r ? "outerHeight" : "outerWidth"](!0) / 2, c[r] = l + s, n && (o.css(c), c[r] = h + s, c.opacity = 1), o.animate(c, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("explode", "hide", function (e, i) {
        function s() {
            v.push(this), v.length === c * d && (u.css({visibility: "visible"}), t(v).remove(), i())
        }

        var o, n, a, r, l, h, c = e.pieces ? Math.round(Math.sqrt(e.pieces)) : 3, d = c, u = t(this),
            p = "show" === e.mode, f = u.show().css("visibility", "hidden").offset(), m = Math.ceil(u.outerWidth() / d),
            g = Math.ceil(u.outerHeight() / c), v = [];
        for (o = 0; c > o; o++) for (r = f.top + o * g, h = o - (c - 1) / 2, n = 0; d > n; n++) a = f.left + n * m, l = n - (d - 1) / 2, u.clone().appendTo("body").wrap("<div></div>").css({
            position: "absolute",
            visibility: "visible",
            left: -n * m,
            top: -o * g
        }).parent().addClass("ui-effects-explode").css({
            position: "absolute",
            overflow: "hidden",
            width: m,
            height: g,
            left: a + (p ? l * m : 0),
            top: r + (p ? h * g : 0),
            opacity: p ? 0 : 1
        }).animate({
            left: a + (p ? 0 : l * m),
            top: r + (p ? 0 : h * g),
            opacity: p ? 1 : 0
        }, e.duration || 500, e.easing, s)
    }), t.effects.define("fade", "toggle", function (e, i) {
        var s = "show" === e.mode;
        t(this).css("opacity", s ? 0 : 1).animate({opacity: s ? 1 : 0}, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), t.effects.define("fold", "hide", function (e, i) {
        var s = t(this), o = e.mode, n = "show" === o, a = "hide" === o, r = e.size || 15, l = /([0-9]+)%/.exec(r),
            h = !!e.horizFirst ? ["right", "bottom"] : ["bottom", "right"], c = e.duration / 2,
            d = t.effects.createPlaceholder(s), u = s.cssClip(), p = {clip: t.extend({}, u)},
            f = {clip: t.extend({}, u)}, m = [u[h[0]], u[h[1]]], g = s.queue().length;
        l && (r = parseInt(l[1], 10) / 100 * m[a ? 0 : 1]), p.clip[h[0]] = r, f.clip[h[0]] = r, f.clip[h[1]] = 0, n && (s.cssClip(f.clip), d && d.css(t.effects.clipToBox(f)), f.clip = u), s.queue(function (i) {
            d && d.animate(t.effects.clipToBox(p), c, e.easing).animate(t.effects.clipToBox(f), c, e.easing), i()
        }).animate(p, c, e.easing).animate(f, c, e.easing).queue(i), t.effects.unshift(s, g, 4)
    }), t.effects.define("highlight", "show", function (e, i) {
        var s = t(this), o = {backgroundColor: s.css("backgroundColor")};
        "hide" === e.mode && (o.opacity = 0), t.effects.saveStyle(s), s.css({
            backgroundImage: "none",
            backgroundColor: e.color || "#ffff99"
        }).animate(o, {queue: !1, duration: e.duration, easing: e.easing, complete: i})
    }), t.effects.define("size", function (e, i) {
        var s, o, n, a = t(this), r = ["fontSize"],
            l = ["borderTopWidth", "borderBottomWidth", "paddingTop", "paddingBottom"],
            h = ["borderLeftWidth", "borderRightWidth", "paddingLeft", "paddingRight"], c = e.mode, d = "effect" !== c,
            u = e.scale || "both", p = e.origin || ["middle", "center"], f = a.css("position"), m = a.position(),
            g = t.effects.scaledDimensions(a), v = e.from || g, y = e.to || t.effects.scaledDimensions(a, 0);
        t.effects.createPlaceholder(a), "show" === c && (n = v, v = y, y = n), o = {
            from: {
                y: v.height / g.height,
                x: v.width / g.width
            }, to: {y: y.height / g.height, x: y.width / g.width}
        }, ("box" === u || "both" === u) && (o.from.y !== o.to.y && (v = t.effects.setTransition(a, l, o.from.y, v), y = t.effects.setTransition(a, l, o.to.y, y)), o.from.x !== o.to.x && (v = t.effects.setTransition(a, h, o.from.x, v), y = t.effects.setTransition(a, h, o.to.x, y))), ("content" === u || "both" === u) && o.from.y !== o.to.y && (v = t.effects.setTransition(a, r, o.from.y, v), y = t.effects.setTransition(a, r, o.to.y, y)), p && (s = t.effects.getBaseline(p, g), v.top = (g.outerHeight - v.outerHeight) * s.y + m.top, v.left = (g.outerWidth - v.outerWidth) * s.x + m.left, y.top = (g.outerHeight - y.outerHeight) * s.y + m.top, y.left = (g.outerWidth - y.outerWidth) * s.x + m.left), a.css(v), ("content" === u || "both" === u) && (l = l.concat(["marginTop", "marginBottom"]).concat(r), h = h.concat(["marginLeft", "marginRight"]), a.find("*[width]").each(function () {
            var i = t(this), s = t.effects.scaledDimensions(i), n = {
                height: s.height * o.from.y,
                width: s.width * o.from.x,
                outerHeight: s.outerHeight * o.from.y,
                outerWidth: s.outerWidth * o.from.x
            }, a = {
                height: s.height * o.to.y,
                width: s.width * o.to.x,
                outerHeight: s.height * o.to.y,
                outerWidth: s.width * o.to.x
            };
            o.from.y !== o.to.y && (n = t.effects.setTransition(i, l, o.from.y, n), a = t.effects.setTransition(i, l, o.to.y, a)), o.from.x !== o.to.x && (n = t.effects.setTransition(i, h, o.from.x, n), a = t.effects.setTransition(i, h, o.to.x, a)), d && t.effects.saveStyle(i), i.css(n), i.animate(a, e.duration, e.easing, function () {
                d && t.effects.restoreStyle(i)
            })
        })), a.animate(y, {
            queue: !1, duration: e.duration, easing: e.easing, complete: function () {
                var e = a.offset();
                0 === y.opacity && a.css("opacity", v.opacity), d || (a.css("position", "static" === f ? "relative" : f).offset(e), t.effects.saveStyle(a)), i()
            }
        })
    }), t.effects.define("scale", function (e, i) {
        var s = t(this), o = e.mode,
            n = parseInt(e.percent, 10) || (0 === parseInt(e.percent, 10) ? 0 : "effect" !== o ? 0 : 100),
            a = t.extend(!0, {
                from: t.effects.scaledDimensions(s),
                to: t.effects.scaledDimensions(s, n, e.direction || "both"),
                origin: e.origin || ["middle", "center"]
            }, e);
        e.fade && (a.from.opacity = 1, a.to.opacity = 0), t.effects.effect.size.call(this, a, i)
    }), t.effects.define("puff", "hide", function (e, i) {
        var s = t.extend(!0, {}, e, {fade: !0, percent: parseInt(e.percent, 10) || 150});
        t.effects.effect.scale.call(this, s, i)
    }), t.effects.define("pulsate", "show", function (e, i) {
        var s = t(this), o = e.mode, n = "show" === o, a = n || "hide" === o, r = 2 * (e.times || 5) + (a ? 1 : 0),
            l = e.duration / r, h = 0, c = 1, d = s.queue().length;
        for ((n || !s.is(":visible")) && (s.css("opacity", 0).show(), h = 1); r > c; c++) s.animate({opacity: h}, l, e.easing), h = 1 - h;
        s.animate({opacity: h}, l, e.easing), s.queue(i), t.effects.unshift(s, d, r + 1)
    }), t.effects.define("shake", function (e, i) {
        var s = 1, o = t(this), n = e.direction || "left", a = e.distance || 20, r = e.times || 3, l = 2 * r + 1,
            h = Math.round(e.duration / l), c = "up" === n || "down" === n ? "top" : "left",
            d = "up" === n || "left" === n, u = {}, p = {}, f = {}, m = o.queue().length;
        for (t.effects.createPlaceholder(o), u[c] = (d ? "-=" : "+=") + a, p[c] = (d ? "+=" : "-=") + 2 * a, f[c] = (d ? "-=" : "+=") + 2 * a, o.animate(u, h, e.easing); r > s; s++) o.animate(p, h, e.easing).animate(f, h, e.easing);
        o.animate(p, h, e.easing).animate(u, h / 2, e.easing).queue(i), t.effects.unshift(o, m, l + 1)
    }), t.effects.define("slide", "show", function (e, i) {
        var s, o, n = t(this),
            a = {up: ["bottom", "top"], down: ["top", "bottom"], left: ["right", "left"], right: ["left", "right"]},
            r = e.mode, l = e.direction || "left", h = "up" === l || "down" === l ? "top" : "left",
            c = "up" === l || "left" === l, d = e.distance || n["top" === h ? "outerHeight" : "outerWidth"](!0), u = {};
        t.effects.createPlaceholder(n), s = n.cssClip(), o = n.position()[h], u[h] = (c ? -1 : 1) * d + o, u.clip = n.cssClip(), u.clip[a[l][1]] = u.clip[a[l][0]], "show" === r && (n.cssClip(u.clip), n.css(h, u[h]), u.clip = s, u[h] = o), n.animate(u, {
            queue: !1,
            duration: e.duration,
            easing: e.easing,
            complete: i
        })
    }), !1 !== t.uiBackCompat && t.effects.define("transfer", function (e, i) {
        t(this).transfer(e, i)
    })
}), function (t, e, i, s) {
    "use strict";

    function o(t, e) {
        var s, o, n, a = [], r = 0;
        t && t.isDefaultPrevented() || (t.preventDefault(), e = e || {}, t && t.data && (e = p(t.data.options, e)), s = e.$target || i(t.currentTarget).trigger("blur"), (n = i.fancybox.getInstance()) && n.$trigger && n.$trigger.is(s) || (e.selector ? a = i(e.selector) : (o = s.attr("data-fancybox") || "") ? a = (a = t.data ? t.data.items : []).length ? a.filter('[data-fancybox="' + o + '"]') : i('[data-fancybox="' + o + '"]') : a = [s], (r = i(a).index(s)) < 0 && (r = 0), (n = i.fancybox.open(a, e, r)).$trigger = s))
    }

    if (t.console = t.console || {
        info: function (t) {
        }
    }, i) {
        if (i.fn.fancybox) return void console.info("fancyBox already initialized");
        var n = {
                closeExisting: !1,
                loop: !1,
                gutter: 50,
                keyboard: !0,
                preventCaptionOverlap: !0,
                arrows: !0,
                infobar: !0,
                smallBtn: "auto",
                toolbar: "auto",
                buttons: ["zoom", "slideShow", "thumbs", "close"],
                idleTime: 3,
                protect: !1,
                modal: !1,
                image: {preload: !1},
                ajax: {settings: {data: {fancybox: !0}}},
                iframe: {
                    tpl: '<iframe id="fancybox-frame{rnd}" name="fancybox-frame{rnd}" class="fancybox-iframe" allowfullscreen allow="autoplay; fullscreen" src=""></iframe>',
                    preload: !0,
                    css: {},
                    attr: {scrolling: "auto"}
                },
                video: {
                    tpl: '<video class="fancybox-video" controls controlsList="nodownload" poster="{{poster}}"><source src="{{src}}" type="{{format}}" />Sorry, your browser doesn\'t support embedded videos, <a href="{{src}}">download</a> and watch with your favorite video player!</video>',
                    format: "",
                    autoStart: !0
                },
                defaultType: "image",
                animationEffect: "zoom",
                animationDuration: 366,
                zoomOpacity: "auto",
                transitionEffect: "fade",
                transitionDuration: 366,
                slideClass: "",
                baseClass: "",
                baseTpl: '<div class="fancybox-container" role="dialog" tabindex="-1"><div class="fancybox-bg"></div><div class="fancybox-inner"><div class="fancybox-infobar"><span data-fancybox-index></span>&nbsp;/&nbsp;<span data-fancybox-count></span></div><div class="fancybox-toolbar">{{buttons}}</div><div class="fancybox-navigation">{{arrows}}</div><div class="fancybox-stage"></div><div class="fancybox-caption"></div></div></div>',
                spinnerTpl: '<div class="fancybox-loading"></div>',
                errorTpl: '<div class="fancybox-error"><p>{{ERROR}}</p></div>',
                btnTpl: {
                    download: '<a download data-fancybox-download class="fancybox-button fancybox-button--download" title="{{DOWNLOAD}}" href="javascript:;"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.62 17.09V19H5.38v-1.91zm-2.97-6.96L17 11.45l-5 4.87-5-4.87 1.36-1.32 2.68 2.64V5h1.92v7.77z"/></svg></a>',
                    zoom: '<button data-fancybox-zoom class="fancybox-button fancybox-button--zoom" title="{{ZOOM}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M18.7 17.3l-3-3a5.9 5.9 0 0 0-.6-7.6 5.9 5.9 0 0 0-8.4 0 5.9 5.9 0 0 0 0 8.4 5.9 5.9 0 0 0 7.7.7l3 3a1 1 0 0 0 1.3 0c.4-.5.4-1 0-1.5zM8.1 13.8a4 4 0 0 1 0-5.7 4 4 0 0 1 5.7 0 4 4 0 0 1 0 5.7 4 4 0 0 1-5.7 0z"/></svg></button>',
                    close: '<button data-fancybox-close class="fancybox-button fancybox-button--close" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 10.6L6.6 5.2 5.2 6.6l5.4 5.4-5.4 5.4 1.4 1.4 5.4-5.4 5.4 5.4 1.4-1.4-5.4-5.4 5.4-5.4-1.4-1.4-5.4 5.4z"/></svg></button>',
                    arrowLeft: '<button data-fancybox-prev class="fancybox-button fancybox-button--arrow_left" title="{{PREV}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M11.28 15.7l-1.34 1.37L5 12l4.94-5.07 1.34 1.38-2.68 2.72H19v1.94H8.6z"/></svg></div></button>',
                    arrowRight: '<button data-fancybox-next class="fancybox-button fancybox-button--arrow_right" title="{{NEXT}}"><div><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M15.4 12.97l-2.68 2.72 1.34 1.38L19 12l-4.94-5.07-1.34 1.38 2.68 2.72H5v1.94z"/></svg></div></button>',
                    smallBtn: '<button type="button" data-fancybox-close class="fancybox-button fancybox-close-small" title="{{CLOSE}}"><svg xmlns="http://www.w3.org/2000/svg" version="1" viewBox="0 0 24 24"><path d="M13 12l5-5-1-1-5 5-5-5-1 1 5 5-5 5 1 1 5-5 5 5 1-1z"/></svg></button>'
                },
                parentEl: "body",
                hideScrollbar: !0,
                autoFocus: !0,
                backFocus: !0,
                trapFocus: !0,
                fullScreen: {autoStart: !1},
                touch: {vertical: !0, momentum: !0},
                hash: null,
                media: {},
                slideShow: {autoStart: !1, speed: 3e3},
                thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"},
                wheel: "auto",
                onInit: i.noop,
                beforeLoad: i.noop,
                afterLoad: i.noop,
                beforeShow: i.noop,
                afterShow: i.noop,
                beforeClose: i.noop,
                afterClose: i.noop,
                onActivate: i.noop,
                onDeactivate: i.noop,
                clickContent: function (t, e) {
                    return "image" === t.type && "zoom"
                },
                clickSlide: "close",
                clickOutside: "close",
                dblclickContent: !1,
                dblclickSlide: !1,
                dblclickOutside: !1,
                mobile: {
                    preventCaptionOverlap: !1, idleTime: !1, clickContent: function (t, e) {
                        return "image" === t.type && "toggleControls"
                    }, clickSlide: function (t, e) {
                        return "image" === t.type ? "toggleControls" : "close"
                    }, dblclickContent: function (t, e) {
                        return "image" === t.type && "zoom"
                    }, dblclickSlide: function (t, e) {
                        return "image" === t.type && "zoom"
                    }
                },
                lang: "en",
                i18n: {
                    en: {
                        CLOSE: "Close",
                        NEXT: "Next",
                        PREV: "Previous",
                        ERROR: "The requested content cannot be loaded. <br/> Please try again later.",
                        PLAY_START: "Start slideshow",
                        PLAY_STOP: "Pause slideshow",
                        FULL_SCREEN: "Full screen",
                        THUMBS: "Thumbnails",
                        DOWNLOAD: "Download",
                        SHARE: "Share",
                        ZOOM: "Zoom"
                    },
                    de: {
                        CLOSE: "Schliessen",
                        NEXT: "Weiter",
                        PREV: "Zurück",
                        ERROR: "Die angeforderten Daten konnten nicht geladen werden. <br/> Bitte versuchen Sie es später nochmal.",
                        PLAY_START: "Diaschau starten",
                        PLAY_STOP: "Diaschau beenden",
                        FULL_SCREEN: "Vollbild",
                        THUMBS: "Vorschaubilder",
                        DOWNLOAD: "Herunterladen",
                        SHARE: "Teilen",
                        ZOOM: "Maßstab"
                    }
                }
            }, a = i(t), r = i(e), l = 0,
            h = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
                return t.setTimeout(e, 1e3 / 60)
            },
            c = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
                t.clearTimeout(e)
            }, d = function () {
                var t, i = e.createElement("fakeelement"), o = {
                    transition: "transitionend",
                    OTransition: "oTransitionEnd",
                    MozTransition: "transitionend",
                    WebkitTransition: "webkitTransitionEnd"
                };
                for (t in o) if (i.style[t] !== s) return o[t];
                return "transitionend"
            }(), u = function (t) {
                return t && t.length && t[0].offsetHeight
            }, p = function (t, e) {
                var s = i.extend(!0, {}, t, e);
                return i.each(e, function (t, e) {
                    i.isArray(e) && (s[t] = e)
                }), s
            }, f = function (t, e, s) {
                var o = this;
                o.opts = p({index: s}, i.fancybox.defaults), i.isPlainObject(e) && (o.opts = p(o.opts, e)), i.fancybox.isMobile && (o.opts = p(o.opts, o.opts.mobile)), o.id = o.opts.id || ++l, o.currIndex = parseInt(o.opts.index, 10) || 0, o.prevIndex = null, o.prevPos = null, o.currPos = 0, o.firstRun = !0, o.group = [], o.slides = {}, o.addContent(t), o.group.length && o.init()
            };
        i.extend(f.prototype, {
            init: function () {
                var s, o, n = this, a = n.group[n.currIndex].opts;
                a.closeExisting && i.fancybox.close(!0), i("body").addClass("fancybox-active"), !i.fancybox.getInstance() && !1 !== a.hideScrollbar && !i.fancybox.isMobile && e.body.scrollHeight > t.innerHeight && (i("head").append('<style id="fancybox-style-noscroll" type="text/css">.compensate-for-scrollbar{margin-right:' + (t.innerWidth - e.documentElement.clientWidth) + "px;}</style>"), i("body").addClass("compensate-for-scrollbar")), o = "", i.each(a.buttons, function (t, e) {
                    o += a.btnTpl[e] || ""
                }), s = i(n.translate(n, a.baseTpl.replace("{{buttons}}", o).replace("{{arrows}}", a.btnTpl.arrowLeft + a.btnTpl.arrowRight))).attr("id", "fancybox-container-" + n.id).addClass(a.baseClass).data("FancyBox", n).appendTo(a.parentEl), n.$refs = {container: s}, ["bg", "inner", "infobar", "toolbar", "stage", "caption", "navigation"].forEach(function (t) {
                    n.$refs[t] = s.find(".fancybox-" + t)
                }), n.trigger("onInit"), n.activate(), n.jumpTo(n.currIndex)
            }, translate: function (t, e) {
                var i = t.opts.i18n[t.opts.lang] || t.opts.i18n.en;
                return e.replace(/\{\{(\w+)\}\}/g, function (t, e) {
                    var o = i[e];
                    return o === s ? t : o
                })
            }, addContent: function (t) {
                var e, o = this, n = i.makeArray(t);
                i.each(n, function (t, e) {
                    var n, a, r, l, h, c = {}, d = {};
                    i.isPlainObject(e) ? (c = e, d = e.opts || e) : "object" === i.type(e) && i(e).length ? (d = (n = i(e)).data() || {}, (d = i.extend(!0, {}, d, d.options)).$orig = n, c.src = o.opts.src || d.src || n.attr("href"), c.type || c.src || (c.type = "inline", c.src = e)) : c = {
                        type: "html",
                        src: e + ""
                    }, c.opts = i.extend(!0, {}, o.opts, d), i.isArray(d.buttons) && (c.opts.buttons = d.buttons), i.fancybox.isMobile && c.opts.mobile && (c.opts = p(c.opts, c.opts.mobile)), a = c.type || c.opts.type, l = c.src || "", !a && l && ((r = l.match(/\.(mp4|mov|ogv|webm)((\?|#).*)?$/i)) ? (a = "video", c.opts.video.format || (c.opts.video.format = "video/" + ("ogv" === r[1] ? "ogg" : r[1]))) : l.match(/(^data:image\/[a-z0-9+\/=]*,)|(\.(jp(e|g|eg)|gif|png|bmp|webp|svg|ico)((\?|#).*)?$)/i) ? a = "image" : l.match(/\.(pdf)((\?|#).*)?$/i) ? (a = "iframe", c = i.extend(!0, c, {
                        contentType: "pdf",
                        opts: {iframe: {preload: !1}}
                    })) : "#" === l.charAt(0) && (a = "inline")), a ? c.type = a : o.trigger("objectNeedsType", c), c.contentType || (c.contentType = i.inArray(c.type, ["html", "inline", "ajax"]) > -1 ? "html" : c.type), c.index = o.group.length, "auto" == c.opts.smallBtn && (c.opts.smallBtn = i.inArray(c.type, ["html", "inline", "ajax"]) > -1), "auto" === c.opts.toolbar && (c.opts.toolbar = !c.opts.smallBtn), c.$thumb = c.opts.$thumb || null, c.opts.$trigger && c.index === o.opts.index && (c.$thumb = c.opts.$trigger.find("img:first"), c.$thumb.length && (c.opts.$orig = c.opts.$trigger)), c.$thumb && c.$thumb.length || !c.opts.$orig || (c.$thumb = c.opts.$orig.find("img:first")), c.$thumb && !c.$thumb.length && (c.$thumb = null), c.thumb = c.opts.thumb || (c.$thumb ? c.$thumb[0].src : null), "function" === i.type(c.opts.caption) && (c.opts.caption = c.opts.caption.apply(e, [o, c])), "function" === i.type(o.opts.caption) && (c.opts.caption = o.opts.caption.apply(e, [o, c])), c.opts.caption instanceof i || (c.opts.caption = c.opts.caption === s ? "" : c.opts.caption + ""), "ajax" === c.type && ((h = l.split(/\s+/, 2)).length > 1 && (c.src = h.shift(), c.opts.filter = h.shift())), c.opts.modal && (c.opts = i.extend(!0, c.opts, {
                        trapFocus: !0,
                        infobar: 0,
                        toolbar: 0,
                        smallBtn: 0,
                        keyboard: 0,
                        slideShow: 0,
                        fullScreen: 0,
                        thumbs: 0,
                        touch: 0,
                        clickContent: !1,
                        clickSlide: !1,
                        clickOutside: !1,
                        dblclickContent: !1,
                        dblclickSlide: !1,
                        dblclickOutside: !1
                    })), o.group.push(c)
                }), Object.keys(o.slides).length && (o.updateControls(), (e = o.Thumbs) && e.isActive && (e.create(), e.focus()))
            }, addEvents: function () {
                var e = this;
                e.removeEvents(), e.$refs.container.on("click.fb-close", "[data-fancybox-close]", function (t) {
                    t.stopPropagation(), t.preventDefault(), e.close(t)
                }).on("touchstart.fb-prev click.fb-prev", "[data-fancybox-prev]", function (t) {
                    t.stopPropagation(), t.preventDefault(), e.previous()
                }).on("touchstart.fb-next click.fb-next", "[data-fancybox-next]", function (t) {
                    t.stopPropagation(), t.preventDefault(), e.next()
                }).on("click.fb", "[data-fancybox-zoom]", function (t) {
                    e[e.isScaledDown() ? "scaleToActual" : "scaleToFit"]()
                }), a.on("orientationchange.fb resize.fb", function (t) {
                    t && t.originalEvent && "resize" === t.originalEvent.type ? (e.requestId && c(e.requestId), e.requestId = h(function () {
                        e.update(t)
                    })) : (e.current && "iframe" === e.current.type && e.$refs.stage.hide(), setTimeout(function () {
                        e.$refs.stage.show(), e.update(t)
                    }, i.fancybox.isMobile ? 600 : 250))
                }), r.on("keydown.fb", function (t) {
                    var s = (i.fancybox ? i.fancybox.getInstance() : null).current, o = t.keyCode || t.which;
                    if (9 != o) return !s.opts.keyboard || t.ctrlKey || t.altKey || t.shiftKey || i(t.target).is("input") || i(t.target).is("textarea") ? void 0 : 8 === o || 27 === o ? (t.preventDefault(), void e.close(t)) : 37 === o || 38 === o ? (t.preventDefault(), void e.previous()) : 39 === o || 40 === o ? (t.preventDefault(), void e.next()) : void e.trigger("afterKeydown", t, o);
                    s.opts.trapFocus && e.focus(t)
                }), e.group[e.currIndex].opts.idleTime && (e.idleSecondsCounter = 0, r.on("mousemove.fb-idle mouseleave.fb-idle mousedown.fb-idle touchstart.fb-idle touchmove.fb-idle scroll.fb-idle keydown.fb-idle", function (t) {
                    e.idleSecondsCounter = 0, e.isIdle && e.showControls(), e.isIdle = !1
                }), e.idleInterval = t.setInterval(function () {
                    e.idleSecondsCounter++ , e.idleSecondsCounter >= e.group[e.currIndex].opts.idleTime && !e.isDragging && (e.isIdle = !0, e.idleSecondsCounter = 0, e.hideControls())
                }, 1e3))
            }, removeEvents: function () {
                a.off("orientationchange.fb resize.fb"), r.off("keydown.fb .fb-idle"), this.$refs.container.off(".fb-close .fb-prev .fb-next"), this.idleInterval && (t.clearInterval(this.idleInterval), this.idleInterval = null)
            }, previous: function (t) {
                return this.jumpTo(this.currPos - 1, t)
            }, next: function (t) {
                return this.jumpTo(this.currPos + 1, t)
            }, jumpTo: function (t, e) {
                var o, n, a, r, l, h, c, d, p, f = this, m = f.group.length;
                if (!(f.isDragging || f.isClosing || f.isAnimating && f.firstRun)) {
                    if (t = parseInt(t, 10), !(a = f.current ? f.current.opts.loop : f.opts.loop) && (t < 0 || t >= m)) return !1;
                    if (o = f.firstRun = !Object.keys(f.slides).length, l = f.current, f.prevIndex = f.currIndex, f.prevPos = f.currPos, r = f.createSlide(t), m > 1 && ((a || r.index < m - 1) && f.createSlide(t + 1), (a || r.index > 0) && f.createSlide(t - 1)), f.current = r, f.currIndex = r.index, f.currPos = r.pos, f.trigger("beforeShow", o), f.updateControls(), r.forcedDuration = s, i.isNumeric(e) ? r.forcedDuration = e : e = r.opts[o ? "animationDuration" : "transitionDuration"], e = parseInt(e, 10), n = f.isMoved(r), r.$slide.addClass("fancybox-slide--current"), o) return r.opts.animationEffect && e && f.$refs.container.css("transition-duration", e + "ms"), f.$refs.container.addClass("fancybox-is-open").trigger("focus"), f.loadSlide(r), void f.preload("image");
                    h = i.fancybox.getTranslate(l.$slide), c = i.fancybox.getTranslate(f.$refs.stage), i.each(f.slides, function (t, e) {
                        i.fancybox.stop(e.$slide, !0)
                    }), l.pos !== r.pos && (l.isComplete = !1), l.$slide.removeClass("fancybox-slide--complete fancybox-slide--current"), n ? (p = h.left - (l.pos * h.width + l.pos * l.opts.gutter), i.each(f.slides, function (t, s) {
                        s.$slide.removeClass("fancybox-animated").removeClass(function (t, e) {
                            return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                        });
                        var o = s.pos * h.width + s.pos * s.opts.gutter;
                        i.fancybox.setTranslate(s.$slide, {
                            top: 0,
                            left: o - c.left + p
                        }), s.pos !== r.pos && s.$slide.addClass("fancybox-slide--" + (s.pos > r.pos ? "next" : "previous")), u(s.$slide), i.fancybox.animate(s.$slide, {
                            top: 0,
                            left: (s.pos - r.pos) * h.width + (s.pos - r.pos) * s.opts.gutter
                        }, e, function () {
                            s.$slide.css({
                                transform: "",
                                opacity: ""
                            }).removeClass("fancybox-slide--next fancybox-slide--previous"), s.pos === f.currPos && f.complete()
                        })
                    })) : e && r.opts.transitionEffect && (d = "fancybox-animated fancybox-fx-" + r.opts.transitionEffect, l.$slide.addClass("fancybox-slide--" + (l.pos > r.pos ? "next" : "previous")), i.fancybox.animate(l.$slide, d, e, function () {
                        l.$slide.removeClass(d).removeClass("fancybox-slide--next fancybox-slide--previous")
                    }, !1)), r.isLoaded ? f.revealContent(r) : f.loadSlide(r), f.preload("image")
                }
            }, createSlide: function (t) {
                var e, s, o = this;
                return s = (s = t % o.group.length) < 0 ? o.group.length + s : s, !o.slides[t] && o.group[s] && (e = i('<div class="fancybox-slide"></div>').appendTo(o.$refs.stage), o.slides[t] = i.extend(!0, {}, o.group[s], {
                    pos: t,
                    $slide: e,
                    isLoaded: !1
                }), o.updateSlide(o.slides[t])), o.slides[t]
            }, scaleToActual: function (t, e, o) {
                var n, a, r, l, h, c = this, d = c.current, u = d.$content, p = i.fancybox.getTranslate(d.$slide).width,
                    f = i.fancybox.getTranslate(d.$slide).height, m = d.width, g = d.height;
                c.isAnimating || c.isMoved() || !u || "image" != d.type || !d.isLoaded || d.hasError || (c.isAnimating = !0, i.fancybox.stop(u), t = t === s ? .5 * p : t, e = e === s ? .5 * f : e, (n = i.fancybox.getTranslate(u)).top -= i.fancybox.getTranslate(d.$slide).top, n.left -= i.fancybox.getTranslate(d.$slide).left, l = m / n.width, h = g / n.height, a = .5 * p - .5 * m, r = .5 * f - .5 * g, m > p && ((a = n.left * l - (t * l - t)) > 0 && (a = 0), a < p - m && (a = p - m)), g > f && ((r = n.top * h - (e * h - e)) > 0 && (r = 0), r < f - g && (r = f - g)), c.updateCursor(m, g), i.fancybox.animate(u, {
                    top: r,
                    left: a,
                    scaleX: l,
                    scaleY: h
                }, o || 330, function () {
                    c.isAnimating = !1
                }), c.SlideShow && c.SlideShow.isActive && c.SlideShow.stop())
            }, scaleToFit: function (t) {
                var e, s = this, o = s.current, n = o.$content;
                s.isAnimating || s.isMoved() || !n || "image" != o.type || !o.isLoaded || o.hasError || (s.isAnimating = !0, i.fancybox.stop(n), e = s.getFitPos(o), s.updateCursor(e.width, e.height), i.fancybox.animate(n, {
                    top: e.top,
                    left: e.left,
                    scaleX: e.width / n.width(),
                    scaleY: e.height / n.height()
                }, t || 330, function () {
                    s.isAnimating = !1
                }))
            }, getFitPos: function (t) {
                var e, s, o, n, a = t.$content, r = t.$slide, l = t.width || t.opts.width,
                    h = t.height || t.opts.height, c = {};
                return !!(t.isLoaded && a && a.length) && (e = i.fancybox.getTranslate(this.$refs.stage).width, s = i.fancybox.getTranslate(this.$refs.stage).height, e -= parseFloat(r.css("paddingLeft")) + parseFloat(r.css("paddingRight")) + parseFloat(a.css("marginLeft")) + parseFloat(a.css("marginRight")), s -= parseFloat(r.css("paddingTop")) + parseFloat(r.css("paddingBottom")) + parseFloat(a.css("marginTop")) + parseFloat(a.css("marginBottom")), l && h || (l = e, h = s), h *= o = Math.min(1, e / l, s / h), (l *= o) > e - .5 && (l = e), h > s - .5 && (h = s), "image" === t.type ? (c.top = Math.floor(.5 * (s - h)) + parseFloat(r.css("paddingTop")), c.left = Math.floor(.5 * (e - l)) + parseFloat(r.css("paddingLeft"))) : "video" === t.contentType && (h > l / (n = t.opts.width && t.opts.height ? l / h : t.opts.ratio || 16 / 9) ? h = l / n : l > h * n && (l = h * n)), c.width = l, c.height = h, c)
            }, update: function (t) {
                var e = this;
                i.each(e.slides, function (i, s) {
                    e.updateSlide(s, t)
                })
            }, updateSlide: function (t, e) {
                var s = this, o = t && t.$content, n = t.width || t.opts.width, a = t.height || t.opts.height,
                    r = t.$slide;
                s.adjustCaption(t), o && (n || a || "video" === t.contentType) && !t.hasError && (i.fancybox.stop(o), i.fancybox.setTranslate(o, s.getFitPos(t)), t.pos === s.currPos && (s.isAnimating = !1, s.updateCursor())), s.adjustLayout(t), r.length && (r.trigger("refresh"), t.pos === s.currPos && s.$refs.toolbar.add(s.$refs.navigation.find(".fancybox-button--arrow_right")).toggleClass("compensate-for-scrollbar", r.get(0).scrollHeight > r.get(0).clientHeight)), s.trigger("onUpdate", t, e)
            }, centerSlide: function (t) {
                var e = this, o = e.current, n = o.$slide;
                !e.isClosing && o && (n.siblings().css({
                    transform: "",
                    opacity: ""
                }), n.parent().children().removeClass("fancybox-slide--previous fancybox-slide--next"), i.fancybox.animate(n, {
                    top: 0,
                    left: 0,
                    opacity: 1
                }, t === s ? 0 : t, function () {
                    n.css({transform: "", opacity: ""}), o.isComplete || e.complete()
                }, !1))
            }, isMoved: function (t) {
                var e, s, o = t || this.current;
                return !!o && (s = i.fancybox.getTranslate(this.$refs.stage), e = i.fancybox.getTranslate(o.$slide), !o.$slide.hasClass("fancybox-animated") && (Math.abs(e.top - s.top) > .5 || Math.abs(e.left - s.left) > .5))
            }, updateCursor: function (t, e) {
                var s, o, n = this, a = n.current, r = n.$refs.container;
                a && !n.isClosing && n.Guestures && (r.removeClass("fancybox-is-zoomable fancybox-can-zoomIn fancybox-can-zoomOut fancybox-can-swipe fancybox-can-pan"), o = !!(s = n.canPan(t, e)) || n.isZoomable(), r.toggleClass("fancybox-is-zoomable", o), i("[data-fancybox-zoom]").prop("disabled", !o), s ? r.addClass("fancybox-can-pan") : o && ("zoom" === a.opts.clickContent || i.isFunction(a.opts.clickContent) && "zoom" == a.opts.clickContent(a)) ? r.addClass("fancybox-can-zoomIn") : a.opts.touch && (a.opts.touch.vertical || n.group.length > 1) && "video" !== a.contentType && r.addClass("fancybox-can-swipe"))
            }, isZoomable: function () {
                var t, e = this.current;
                if (e && !this.isClosing && "image" === e.type && !e.hasError) {
                    if (!e.isLoaded) return !0;
                    if ((t = this.getFitPos(e)) && (e.width > t.width || e.height > t.height)) return !0
                }
                return !1
            }, isScaledDown: function (t, e) {
                var o = !1, n = this.current, a = n.$content;
                return t !== s && e !== s ? o = t < n.width && e < n.height : a && (o = (o = i.fancybox.getTranslate(a)).width < n.width && o.height < n.height), o
            }, canPan: function (t, e) {
                var o = this.current, n = null, a = !1;
                return "image" === o.type && (o.isComplete || t && e) && !o.hasError && (a = this.getFitPos(o), t !== s && e !== s ? n = {
                    width: t,
                    height: e
                } : o.isComplete && (n = i.fancybox.getTranslate(o.$content)), n && a && (a = Math.abs(n.width - a.width) > 1.5 || Math.abs(n.height - a.height) > 1.5)), a
            }, loadSlide: function (t) {
                var e, s, o, n = this;
                if (!t.isLoading && !t.isLoaded) {
                    if (t.isLoading = !0, !1 === n.trigger("beforeLoad", t)) return t.isLoading = !1, !1;
                    switch (e = t.type, (s = t.$slide).off("refresh").trigger("onReset").addClass(t.opts.slideClass), e) {
                        case "image":
                            n.setImage(t);
                            break;
                        case "iframe":
                            n.setIframe(t);
                            break;
                        case "html":
                            n.setContent(t, t.src || t.content);
                            break;
                        case "video":
                            n.setContent(t, t.opts.video.tpl.replace(/\{\{src\}\}/gi, t.src).replace("{{format}}", t.opts.videoFormat || t.opts.video.format || "").replace("{{poster}}", t.thumb || ""));
                            break;
                        case "inline":
                            i(t.src).length ? n.setContent(t, i(t.src)) : n.setError(t);
                            break;
                        case "ajax":
                            n.showLoading(t), o = i.ajax(i.extend({}, t.opts.ajax.settings, {
                                url: t.src,
                                success: function (e, i) {
                                    "success" === i && n.setContent(t, e)
                                },
                                error: function (e, i) {
                                    e && "abort" !== i && n.setError(t)
                                }
                            })), s.one("onReset", function () {
                                o.abort()
                            });
                            break;
                        default:
                            n.setError(t)
                    }
                    return !0
                }
            }, setImage: function (t) {
                var s, o = this;
                setTimeout(function () {
                    var e = t.$image;
                    o.isClosing || !t.isLoading || e && e.length && e[0].complete || t.hasError || o.showLoading(t)
                }, 50), o.checkSrcset(t), t.$content = i('<div class="fancybox-content"></div>').addClass("fancybox-is-hidden").appendTo(t.$slide.addClass("fancybox-slide--image")), !1 !== t.opts.preload && t.opts.width && t.opts.height && t.thumb && (t.width = t.opts.width, t.height = t.opts.height, (s = e.createElement("img")).onerror = function () {
                    i(this).remove(), t.$ghost = null
                }, s.onload = function () {
                    o.afterLoad(t)
                }, t.$ghost = i(s).addClass("fancybox-image").appendTo(t.$content).attr("src", t.thumb)), o.setBigImage(t)
            }, checkSrcset: function (e) {
                var i, s, o, n, a = e.opts.srcset || e.opts.image.srcset;
                if (a) {
                    o = t.devicePixelRatio || 1, n = t.innerWidth * o, (s = a.split(",").map(function (t) {
                        var e = {};
                        return t.trim().split(/\s+/).forEach(function (t, i) {
                            var s = parseInt(t.substring(0, t.length - 1), 10);
                            return 0 === i ? e.url = t : void (s && (e.value = s, e.postfix = t[t.length - 1]))
                        }), e
                    })).sort(function (t, e) {
                        return t.value - e.value
                    });
                    for (var r = 0; r < s.length; r++) {
                        var l = s[r];
                        if ("w" === l.postfix && l.value >= n || "x" === l.postfix && l.value >= o) {
                            i = l;
                            break
                        }
                    }
                    !i && s.length && (i = s[s.length - 1]), i && (e.src = i.url, e.width && e.height && "w" == i.postfix && (e.height = e.width / e.height * i.value, e.width = i.value), e.opts.srcset = a)
                }
            }, setBigImage: function (t) {
                var s = this, o = e.createElement("img"), n = i(o);
                t.$image = n.one("error", function () {
                    s.setError(t)
                }).one("load", function () {
                    var e;
                    t.$ghost || (s.resolveImageSlideSize(t, this.naturalWidth, this.naturalHeight), s.afterLoad(t)), s.isClosing || (t.opts.srcset && ((e = t.opts.sizes) && "auto" !== e || (e = (t.width / t.height > 1 && a.width() / a.height() > 1 ? "100" : Math.round(t.width / t.height * 100)) + "vw"), n.attr("sizes", e).attr("srcset", t.opts.srcset)), t.$ghost && setTimeout(function () {
                        t.$ghost && !s.isClosing && t.$ghost.hide()
                    }, Math.min(300, Math.max(1e3, t.height / 1600))), s.hideLoading(t))
                }).addClass("fancybox-image").attr("src", t.src).appendTo(t.$content), (o.complete || "complete" == o.readyState) && n.naturalWidth && n.naturalHeight ? n.trigger("load") : o.error && n.trigger("error")
            }, resolveImageSlideSize: function (t, e, i) {
                var s = parseInt(t.opts.width, 10), o = parseInt(t.opts.height, 10);
                t.width = e, t.height = i, s > 0 && (t.width = s, t.height = Math.floor(s * i / e)), o > 0 && (t.width = Math.floor(o * e / i), t.height = o)
            }, setIframe: function (t) {
                var e, o = this, n = t.opts.iframe, a = t.$slide;
                i.fancybox.isMobile && (n.css.overflow = "scroll"), t.$content = i('<div class="fancybox-content' + (n.preload ? " fancybox-is-hidden" : "") + '"></div>').css(n.css).appendTo(a), a.addClass("fancybox-slide--" + t.contentType), t.$iframe = e = i(n.tpl.replace(/\{rnd\}/g, (new Date).getTime())).attr(n.attr).appendTo(t.$content), n.preload ? (o.showLoading(t), e.on("load.fb error.fb", function (e) {
                    this.isReady = 1, t.$slide.trigger("refresh"), o.afterLoad(t)
                }), a.on("refresh.fb", function () {
                    var i, o = t.$content, r = n.css.width, l = n.css.height;
                    if (1 === e[0].isReady) {
                        try {
                            i = e.contents().find("body")
                        } catch (t) {
                        }
                        i && i.length && i.children().length && (a.css("overflow", "visible"), o.css({
                            width: "100%",
                            "max-width": "100%",
                            height: "9999px"
                        }), r === s && (r = Math.ceil(Math.max(i[0].clientWidth, i.outerWidth(!0)))), o.css("width", r || "").css("max-width", ""), l === s && (l = Math.ceil(Math.max(i[0].clientHeight, i.outerHeight(!0)))), o.css("height", l || ""), a.css("overflow", "auto")), o.removeClass("fancybox-is-hidden")
                    }
                })) : o.afterLoad(t), e.attr("src", t.src), a.one("onReset", function () {
                    try {
                        i(this).find("iframe").hide().unbind().attr("src", "//about:blank")
                    } catch (t) {
                    }
                    i(this).off("refresh.fb").empty(), t.isLoaded = !1, t.isRevealed = !1
                })
            }, setContent: function (t, e) {
                var s;
                this.isClosing || (this.hideLoading(t), t.$content && i.fancybox.stop(t.$content), t.$slide.empty(), (s = e) && s.hasOwnProperty && s instanceof i && e.parent().length ? ((e.hasClass("fancybox-content") || e.parent().hasClass("fancybox-content")) && e.parents(".fancybox-slide").trigger("onReset"), t.$placeholder = i("<div>").hide().insertAfter(e), e.css("display", "inline-block")) : t.hasError || ("string" === i.type(e) && (e = i("<div>").append(i.trim(e)).contents()), t.opts.filter && (e = i("<div>").html(e).find(t.opts.filter))), t.$slide.one("onReset", function () {
                    i(this).find("video,audio").trigger("pause"), t.$placeholder && (t.$placeholder.after(e.removeClass("fancybox-content").hide()).remove(), t.$placeholder = null), t.$smallBtn && (t.$smallBtn.remove(), t.$smallBtn = null), t.hasError || (i(this).empty(), t.isLoaded = !1, t.isRevealed = !1)
                }), i(e).appendTo(t.$slide), i(e).is("video,audio") && (i(e).addClass("fancybox-video"), i(e).wrap("<div></div>"), t.contentType = "video", t.opts.width = t.opts.width || i(e).attr("width"), t.opts.height = t.opts.height || i(e).attr("height")), t.$content = t.$slide.children().filter("div,form,main,video,audio,article,.fancybox-content").first(), t.$content.siblings().hide(), t.$content.length || (t.$content = t.$slide.wrapInner("<div></div>").children().first()), t.$content.addClass("fancybox-content"), t.$slide.addClass("fancybox-slide--" + t.contentType), this.afterLoad(t))
            }, setError: function (t) {
                t.hasError = !0, t.$slide.trigger("onReset").removeClass("fancybox-slide--" + t.contentType).addClass("fancybox-slide--error"), t.contentType = "html", this.setContent(t, this.translate(t, t.opts.errorTpl)), t.pos === this.currPos && (this.isAnimating = !1)
            }, showLoading: function (t) {
                (t = t || this.current) && !t.$spinner && (t.$spinner = i(this.translate(this, this.opts.spinnerTpl)).appendTo(t.$slide).hide().fadeIn("fast"))
            }, hideLoading: function (t) {
                (t = t || this.current) && t.$spinner && (t.$spinner.stop().remove(), delete t.$spinner)
            }, afterLoad: function (t) {
                var e = this;
                e.isClosing || (t.isLoading = !1, t.isLoaded = !0, e.trigger("afterLoad", t), e.hideLoading(t), !t.opts.smallBtn || t.$smallBtn && t.$smallBtn.length || (t.$smallBtn = i(e.translate(t, t.opts.btnTpl.smallBtn)).appendTo(t.$content)), t.opts.protect && t.$content && !t.hasError && (t.$content.on("contextmenu.fb", function (t) {
                    return 2 == t.button && t.preventDefault(), !0
                }), "image" === t.type && i('<div class="fancybox-spaceball"></div>').appendTo(t.$content)), e.adjustCaption(t), e.adjustLayout(t), t.pos === e.currPos && e.updateCursor(), e.revealContent(t))
            }, adjustCaption: function (t) {
                var e = this, i = t || e.current, s = i.opts.caption, o = e.$refs.caption, n = !1;
                i.opts.preventCaptionOverlap && s && s.length && (i.pos !== e.currPos ? ((o = o.clone().empty().appendTo(o.parent())).html(s), n = o.outerHeight(!0), o.empty().remove()) : e.$caption && (n = e.$caption.outerHeight(!0)), i.$slide.css("padding-bottom", n || ""))
            }, adjustLayout: function (t) {
                var e, i, s, o, n = t || this.current;
                n.isLoaded && !0 !== n.opts.disableLayoutFix && (n.$content.css("margin-bottom", ""), n.$content.outerHeight() > n.$slide.height() + .5 && (s = n.$slide[0].style["padding-bottom"], o = n.$slide.css("padding-bottom"), parseFloat(o) > 0 && (e = n.$slide[0].scrollHeight, n.$slide.css("padding-bottom", 0), Math.abs(e - n.$slide[0].scrollHeight) < 1 && (i = o), n.$slide.css("padding-bottom", s))), n.$content.css("margin-bottom", i))
            }, revealContent: function (t) {
                var e, o, n, a, r = this, l = t.$slide, h = !1, c = !1, d = r.isMoved(t), p = t.isRevealed;
                return t.isRevealed = !0, e = t.opts[r.firstRun ? "animationEffect" : "transitionEffect"], n = t.opts[r.firstRun ? "animationDuration" : "transitionDuration"], n = parseInt(t.forcedDuration === s ? n : t.forcedDuration, 10), !d && t.pos === r.currPos && n || (e = !1), "zoom" === e && (t.pos === r.currPos && n && "image" === t.type && !t.hasError && (c = r.getThumbPos(t)) ? h = r.getFitPos(t) : e = "fade"), "zoom" === e ? (r.isAnimating = !0, h.scaleX = h.width / c.width, h.scaleY = h.height / c.height, "auto" == (a = t.opts.zoomOpacity) && (a = Math.abs(t.width / t.height - c.width / c.height) > .1), a && (c.opacity = .1, h.opacity = 1), i.fancybox.setTranslate(t.$content.removeClass("fancybox-is-hidden"), c), u(t.$content), void i.fancybox.animate(t.$content, h, n, function () {
                    r.isAnimating = !1, r.complete()
                })) : (r.updateSlide(t), e ? (i.fancybox.stop(l), o = "fancybox-slide--" + (t.pos >= r.prevPos ? "next" : "previous") + " fancybox-animated fancybox-fx-" + e, l.addClass(o).removeClass("fancybox-slide--current"), t.$content.removeClass("fancybox-is-hidden"), u(l), "image" !== t.type && t.$content.hide().show(0), void i.fancybox.animate(l, "fancybox-slide--current", n, function () {
                    l.removeClass(o).css({transform: "", opacity: ""}), t.pos === r.currPos && r.complete()
                }, !0)) : (t.$content.removeClass("fancybox-is-hidden"), p || !d || "image" !== t.type || t.hasError || t.$content.hide().fadeIn("fast"), void (t.pos === r.currPos && r.complete())))
            }, getThumbPos: function (t) {
                var s, o, n, a, r, l, h, c, d = !1, u = t.$thumb;
                return !(!u || (l = u[0], !l || l.ownerDocument !== e || (i(".fancybox-container").css("pointer-events", "none"), h = {
                    x: l.getBoundingClientRect().left + l.offsetWidth / 2,
                    y: l.getBoundingClientRect().top + l.offsetHeight / 2
                }, c = e.elementFromPoint(h.x, h.y) === l, i(".fancybox-container").css("pointer-events", ""), !c))) && (s = i.fancybox.getTranslate(u), o = parseFloat(u.css("border-top-width") || 0), n = parseFloat(u.css("border-right-width") || 0), a = parseFloat(u.css("border-bottom-width") || 0), r = parseFloat(u.css("border-left-width") || 0), d = {
                    top: s.top + o,
                    left: s.left + r,
                    width: s.width - n - r,
                    height: s.height - o - a,
                    scaleX: 1,
                    scaleY: 1
                }, s.width > 0 && s.height > 0 && d)
            }, complete: function () {
                var t, e = this, s = e.current, o = {};
                !e.isMoved() && s.isLoaded && (s.isComplete || (s.isComplete = !0, s.$slide.siblings().trigger("onReset"), e.preload("inline"), u(s.$slide), s.$slide.addClass("fancybox-slide--complete"), i.each(e.slides, function (t, s) {
                    s.pos >= e.currPos - 1 && s.pos <= e.currPos + 1 ? o[s.pos] = s : s && (i.fancybox.stop(s.$slide), s.$slide.off().remove())
                }), e.slides = o), e.isAnimating = !1, e.updateCursor(), e.trigger("afterShow"), s.opts.video.autoStart && s.$slide.find("video,audio").filter(":visible:first").trigger("play").one("ended", function () {
                    this.webkitExitFullscreen && this.webkitExitFullscreen(), e.next()
                }), s.opts.autoFocus && "html" === s.contentType && ((t = s.$content.find("input[autofocus]:enabled:visible:first")).length ? t.trigger("focus") : e.focus(null, !0)), s.$slide.scrollTop(0).scrollLeft(0))
            }, preload: function (t) {
                var e, i, s = this;
                s.group.length < 2 || (i = s.slides[s.currPos + 1], (e = s.slides[s.currPos - 1]) && e.type === t && s.loadSlide(e), i && i.type === t && s.loadSlide(i))
            }, focus: function (t, s) {
                var o, n, a = this,
                    r = ["a[href]", "area[href]", 'input:not([disabled]):not([type="hidden"]):not([aria-hidden])', "select:not([disabled]):not([aria-hidden])", "textarea:not([disabled]):not([aria-hidden])", "button:not([disabled]):not([aria-hidden])", "iframe", "object", "embed", "[contenteditable]", '[tabindex]:not([tabindex^="-"])'].join(",");
                a.isClosing || ((o = (o = !t && a.current && a.current.isComplete ? a.current.$slide.find("*:visible" + (s ? ":not(.fancybox-close-small)" : "")) : a.$refs.container.find("*:visible")).filter(r).filter(function () {
                    return "hidden" !== i(this).css("visibility") && !i(this).hasClass("disabled")
                })).length ? (n = o.index(e.activeElement), t && t.shiftKey ? (n < 0 || 0 == n) && (t.preventDefault(), o.eq(o.length - 1).trigger("focus")) : (n < 0 || n == o.length - 1) && (t && t.preventDefault(), o.eq(0).trigger("focus"))) : a.$refs.container.trigger("focus"))
            }, activate: function () {
                var t = this;
                i(".fancybox-container").each(function () {
                    var e = i(this).data("FancyBox");
                    e && e.id !== t.id && !e.isClosing && (e.trigger("onDeactivate"), e.removeEvents(), e.isVisible = !1)
                }), t.isVisible = !0, (t.current || t.isIdle) && (t.update(), t.updateControls()), t.trigger("onActivate"), t.addEvents()
            }, close: function (t, e) {
                var s, o, n, a, r, l, c, d = this, p = d.current, f = function () {
                    d.cleanUp(t)
                };
                return !(d.isClosing || (d.isClosing = !0, !1 === d.trigger("beforeClose", t) ? (d.isClosing = !1, h(function () {
                    d.update()
                }), 1) : (d.removeEvents(), n = p.$content, s = p.opts.animationEffect, o = i.isNumeric(e) ? e : s ? p.opts.animationDuration : 0, p.$slide.removeClass("fancybox-slide--complete fancybox-slide--next fancybox-slide--previous fancybox-animated"), !0 !== t ? i.fancybox.stop(p.$slide) : s = !1, p.$slide.siblings().trigger("onReset").remove(), o && d.$refs.container.removeClass("fancybox-is-open").addClass("fancybox-is-closing").css("transition-duration", o + "ms"), d.hideLoading(p), d.hideControls(!0), d.updateCursor(), "zoom" !== s || n && o && "image" === p.type && !d.isMoved() && !p.hasError && (c = d.getThumbPos(p)) || (s = "fade"), "zoom" === s ? (i.fancybox.stop(n), a = i.fancybox.getTranslate(n), l = {
                    top: a.top,
                    left: a.left,
                    scaleX: a.width / c.width,
                    scaleY: a.height / c.height,
                    width: c.width,
                    height: c.height
                }, r = p.opts.zoomOpacity, "auto" == r && (r = Math.abs(p.width / p.height - c.width / c.height) > .1), r && (c.opacity = 0), i.fancybox.setTranslate(n, l), u(n), i.fancybox.animate(n, c, o, f), 0) : (s && o ? i.fancybox.animate(p.$slide.addClass("fancybox-slide--previous").removeClass("fancybox-slide--current"), "fancybox-animated fancybox-fx-" + s, o, f) : !0 === t ? setTimeout(f, o) : f(), 0))))
            }, cleanUp: function (e) {
                var s, o, n, a = this, r = a.current.opts.$orig;
                a.current.$slide.trigger("onReset"), a.$refs.container.empty().remove(), a.trigger("afterClose", e), a.current.opts.backFocus && (r && r.length && r.is(":visible") || (r = a.$trigger), r && r.length && (o = t.scrollX, n = t.scrollY, r.trigger("focus"), i("html, body").scrollTop(n).scrollLeft(o))), a.current = null, (s = i.fancybox.getInstance()) ? s.activate() : (i("body").removeClass("fancybox-active compensate-for-scrollbar"), i("#fancybox-style-noscroll").remove())
            }, trigger: function (t, e) {
                var s, o = Array.prototype.slice.call(arguments, 1), n = this, a = e && e.opts ? e : n.current;
                return a ? o.unshift(a) : a = n, o.unshift(n), i.isFunction(a.opts[t]) && (s = a.opts[t].apply(a, o)), !1 === s ? s : void ("afterClose" !== t && n.$refs ? n.$refs.container.trigger(t + ".fb", o) : r.trigger(t + ".fb", o))
            }, updateControls: function () {
                var t = this, s = t.current, o = s.index, n = t.$refs.container, a = t.$refs.caption,
                    r = s.opts.caption;
                s.$slide.trigger("refresh"), t.$caption = r && r.length ? a.html(r) : null, t.hasHiddenControls || t.isIdle || t.showControls(), n.find("[data-fancybox-count]").html(t.group.length), n.find("[data-fancybox-index]").html(o + 1), n.find("[data-fancybox-prev]").prop("disabled", !s.opts.loop && o <= 0), n.find("[data-fancybox-next]").prop("disabled", !s.opts.loop && o >= t.group.length - 1), "image" === s.type ? n.find("[data-fancybox-zoom]").show().end().find("[data-fancybox-download]").attr("href", s.opts.image.src || s.src).show() : s.opts.toolbar && n.find("[data-fancybox-download],[data-fancybox-zoom]").hide(), i(e.activeElement).is(":hidden,[disabled]") && t.$refs.container.trigger("focus")
            }, hideControls: function (t) {
                var e = ["infobar", "toolbar", "nav"];
                !t && this.current.opts.preventCaptionOverlap || e.push("caption"), this.$refs.container.removeClass(e.map(function (t) {
                    return "fancybox-show-" + t
                }).join(" ")), this.hasHiddenControls = !0
            }, showControls: function () {
                var t = this, e = t.current ? t.current.opts : t.opts, i = t.$refs.container;
                t.hasHiddenControls = !1, t.idleSecondsCounter = 0, i.toggleClass("fancybox-show-toolbar", !(!e.toolbar || !e.buttons)).toggleClass("fancybox-show-infobar", !!(e.infobar && t.group.length > 1)).toggleClass("fancybox-show-caption", !!t.$caption).toggleClass("fancybox-show-nav", !!(e.arrows && t.group.length > 1)).toggleClass("fancybox-is-modal", !!e.modal)
            }, toggleControls: function () {
                this.hasHiddenControls ? this.showControls() : this.hideControls()
            }
        }), i.fancybox = {
            version: "3.5.2",
            defaults: n,
            getInstance: function (t) {
                var e = i('.fancybox-container:not(".fancybox-is-closing"):last').data("FancyBox"),
                    s = Array.prototype.slice.call(arguments, 1);
                return e instanceof f && ("string" === i.type(t) ? e[t].apply(e, s) : "function" === i.type(t) && t.apply(e, s), e)
            },
            open: function (t, e, i) {
                return new f(t, e, i)
            },
            close: function (t) {
                var e = this.getInstance();
                e && (e.close(), !0 === t && this.close(t))
            },
            destroy: function () {
                this.close(!0), r.add("body").off("click.fb-start", "**")
            },
            isMobile: /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent),
            use3d: (y = e.createElement("div"), t.getComputedStyle && t.getComputedStyle(y) && t.getComputedStyle(y).getPropertyValue("transform") && !(e.documentMode && e.documentMode < 11)),
            getTranslate: function (t) {
                var e;
                return !(!t || !t.length) && {
                    top: (e = t[0].getBoundingClientRect()).top || 0,
                    left: e.left || 0,
                    width: e.width,
                    height: e.height,
                    opacity: parseFloat(t.css("opacity"))
                }
            },
            setTranslate: function (t, e) {
                var i = "", o = {};
                if (t && e) return e.left === s && e.top === s || (i = (e.left === s ? t.position().left : e.left) + "px, " + (e.top === s ? t.position().top : e.top) + "px", i = this.use3d ? "translate3d(" + i + ", 0px)" : "translate(" + i + ")"), e.scaleX !== s && e.scaleY !== s ? i += " scale(" + e.scaleX + ", " + e.scaleY + ")" : e.scaleX !== s && (i += " scaleX(" + e.scaleX + ")"), i.length && (o.transform = i), e.opacity !== s && (o.opacity = e.opacity), e.width !== s && (o.width = e.width), e.height !== s && (o.height = e.height), t.css(o)
            },
            animate: function (t, e, o, n, a) {
                var r, l = this;
                i.isFunction(o) && (n = o, o = null), l.stop(t), r = l.getTranslate(t), t.on(d, function (h) {
                    (!h || !h.originalEvent || t.is(h.originalEvent.target) && "z-index" != h.originalEvent.propertyName) && (l.stop(t), i.isNumeric(o) && t.css("transition-duration", ""), i.isPlainObject(e) ? e.scaleX !== s && e.scaleY !== s && l.setTranslate(t, {
                        top: e.top,
                        left: e.left,
                        width: r.width * e.scaleX,
                        height: r.height * e.scaleY,
                        scaleX: 1,
                        scaleY: 1
                    }) : !0 !== a && t.removeClass(e), i.isFunction(n) && n(h))
                }), i.isNumeric(o) && t.css("transition-duration", o + "ms"), i.isPlainObject(e) ? (e.scaleX !== s && e.scaleY !== s && (delete e.width, delete e.height, t.parent().hasClass("fancybox-slide--image") && t.parent().addClass("fancybox-is-scaling")), i.fancybox.setTranslate(t, e)) : t.addClass(e), t.data("timer", setTimeout(function () {
                    t.trigger(d)
                }, o + 33))
            },
            stop: function (t, e) {
                t && t.length && (clearTimeout(t.data("timer")), e && t.trigger(d), t.off(d).css("transition-duration", ""), t.parent().removeClass("fancybox-is-scaling"))
            }
        }, i.fn.fancybox = function (t) {
            var e;
            return (e = (t = t || {}).selector || !1) ? i("body").off("click.fb-start", e).on("click.fb-start", e, {options: t}, o) : this.off("click.fb-start").on("click.fb-start", {
                items: this,
                options: t
            }, o), this
        }, r.on("click.fb-start", "[data-fancybox]", o), r.on("click.fb-start", "[data-fancybox-trigger]", function (t) {
            i('[data-fancybox="' + i(this).attr("data-fancybox-trigger") + '"]').eq(i(this).attr("data-fancybox-index") || 0).trigger("click.fb-start", {$trigger: i(this)})
        }), m = ".fancybox-button", g = "fancybox-focus", v = null, r.on("mousedown mouseup focus blur", m, function (t) {
            switch (t.type) {
                case "mousedown":
                    v = i(this);
                    break;
                case "mouseup":
                    v = null;
                    break;
                case "focusin":
                    i(m).removeClass(g), i(this).is(v) || i(this).is("[disabled]") || i(this).addClass(g);
                    break;
                case "focusout":
                    i(m).removeClass(g)
            }
        })
    }
    var m, g, v, y
}(window, document, jQuery), function (t) {
    "use strict";
    var e = {
        youtube: {
            matcher: /(youtube\.com|youtu\.be|youtube\-nocookie\.com)\/(watch\?(.*&)?v=|v\/|u\/|embed\/?)?(videoseries\?list=(.*)|[\w-]{11}|\?listType=(.*)&list=(.*))(.*)/i,
            params: {autoplay: 1, autohide: 1, fs: 1, rel: 0, hd: 1, wmode: "transparent", enablejsapi: 1, html5: 1},
            paramPlace: 8,
            type: "iframe",
            url: "//www.youtube-nocookie.com/embed/$4",
            thumb: "//img.youtube.com/vi/$4/hqdefault.jpg"
        },
        vimeo: {
            matcher: /^.+vimeo.com\/(.*\/)?([\d]+)(.*)?/,
            params: {autoplay: 1, hd: 1, show_title: 1, show_byline: 1, show_portrait: 0, fullscreen: 1},
            paramPlace: 3,
            type: "iframe",
            url: "//player.vimeo.com/video/$2"
        },
        instagram: {
            matcher: /(instagr\.am|instagram\.com)\/p\/([a-zA-Z0-9_\-]+)\/?/i,
            type: "image",
            url: "//$1/p/$2/media/?size=l"
        },
        gmap_place: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(((maps\/(place\/(.*)\/)?\@(.*),(\d+.?\d+?)z))|(\?ll=))(.*)?/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/?ll=" + (t[9] ? t[9] + "&z=" + Math.floor(t[10]) + (t[12] ? t[12].replace(/^\//, "&") : "") : t[12] + "").replace(/\?/, "&") + "&output=" + (t[12] && t[12].indexOf("layer=c") > 0 ? "svembed" : "embed")
            }
        },
        gmap_search: {
            matcher: /(maps\.)?google\.([a-z]{2,3}(\.[a-z]{2})?)\/(maps\/search\/)(.*)/i,
            type: "iframe",
            url: function (t) {
                return "//maps.google." + t[2] + "/maps?q=" + t[5].replace("query=", "q=").replace("api=1", "") + "&output=embed"
            }
        }
    }, i = function (e, i, s) {
        if (e) return s = s || "", "object" === t.type(s) && (s = t.param(s, !0)), t.each(i, function (t, i) {
            e = e.replace("$" + t, i || "")
        }), s.length && (e += (e.indexOf("?") > 0 ? "&" : "?") + s), e
    };
    t(document).on("objectNeedsType.fb", function (s, o, n) {
        var a, r, l, h, c, d, u, p = n.src || "", f = !1;
        a = t.extend(!0, {}, e, n.opts.media), t.each(a, function (e, s) {
            if (l = p.match(s.matcher)) {
                if (f = s.type, u = e, d = {}, s.paramPlace && l[s.paramPlace]) {
                    "?" == (c = l[s.paramPlace])[0] && (c = c.substring(1)), c = c.split("&");
                    for (var o = 0; o < c.length; ++o) {
                        var a = c[o].split("=", 2);
                        2 == a.length && (d[a[0]] = decodeURIComponent(a[1].replace(/\+/g, " ")))
                    }
                }
                return h = t.extend(!0, {}, s.params, n.opts[e], d), p = "function" === t.type(s.url) ? s.url.call(this, l, h, n) : i(s.url, l, h), r = "function" === t.type(s.thumb) ? s.thumb.call(this, l, h, n) : i(s.thumb, l), "youtube" === e ? p = p.replace(/&t=((\d+)m)?(\d+)s/, function (t, e, i, s) {
                    return "&start=" + ((i ? 60 * parseInt(i, 10) : 0) + parseInt(s, 10))
                }) : "vimeo" === e && (p = p.replace("&%23", "#")), !1
            }
        }), f ? (n.opts.thumb || n.opts.$thumb && n.opts.$thumb.length || (n.opts.thumb = r), "iframe" === f && (n.opts = t.extend(!0, n.opts, {
            iframe: {
                preload: !1,
                attr: {scrolling: "no"}
            }
        })), t.extend(n, {
            type: f,
            src: p,
            origSrc: n.src,
            contentSource: u,
            contentType: "image" === f ? "image" : "gmap_place" == u || "gmap_search" == u ? "map" : "video"
        })) : p && (n.type = n.opts.defaultType)
    });
    var s = {
        youtube: {src: "https://www.youtube.com/iframe_api", class: "YT", loading: !1, loaded: !1},
        vimeo: {src: "https://player.vimeo.com/api/player.js", class: "Vimeo", loading: !1, loaded: !1},
        load: function (t) {
            var e, i = this;
            return this[t].loaded ? void setTimeout(function () {
                i.done(t)
            }) : void (this[t].loading || (this[t].loading = !0, e = document.createElement("script"), e.type = "text/javascript", e.src = this[t].src, "youtube" === t ? window.onYouTubeIframeAPIReady = function () {
                i[t].loaded = !0, i.done(t)
            } : e.onload = function () {
                i[t].loaded = !0, i.done(t)
            }, document.body.appendChild(e)))
        },
        done: function (e) {
            var i, s;
            "youtube" === e && delete window.onYouTubeIframeAPIReady, (i = t.fancybox.getInstance()) && (s = i.current.$content.find("iframe"), "youtube" === e && void 0 !== YT && YT ? new YT.Player(s.attr("id"), {
                events: {
                    onStateChange: function (t) {
                        0 == t.data && i.next()
                    }
                }
            }) : "vimeo" === e && void 0 !== Vimeo && Vimeo && new Vimeo.Player(s).on("ended", function () {
                i.next()
            }))
        }
    };
    t(document).on({
        "afterShow.fb": function (t, e, i) {
            e.group.length > 1 && ("youtube" === i.contentSource || "vimeo" === i.contentSource) && s.load(i.contentSource)
        }
    })
}(jQuery), function (t, e, i) {
    "use strict";
    var s = t.requestAnimationFrame || t.webkitRequestAnimationFrame || t.mozRequestAnimationFrame || t.oRequestAnimationFrame || function (e) {
            return t.setTimeout(e, 1e3 / 60)
        },
        o = t.cancelAnimationFrame || t.webkitCancelAnimationFrame || t.mozCancelAnimationFrame || t.oCancelAnimationFrame || function (e) {
            t.clearTimeout(e)
        }, n = function (e) {
            var i = [];
            e = (e = e.originalEvent || e || t.e).touches && e.touches.length ? e.touches : e.changedTouches && e.changedTouches.length ? e.changedTouches : [e];
            for (var s in e) e[s].pageX ? i.push({x: e[s].pageX, y: e[s].pageY}) : e[s].clientX && i.push({
                x: e[s].clientX,
                y: e[s].clientY
            });
            return i
        }, a = function (t, e, i) {
            return e && t ? "x" === i ? t.x - e.x : "y" === i ? t.y - e.y : Math.sqrt(Math.pow(t.x - e.x, 2) + Math.pow(t.y - e.y, 2)) : 0
        }, r = function (t) {
            if (t.is('a,area,button,[role="button"],input,label,select,summary,textarea,video,audio,iframe') || i.isFunction(t.get(0).onclick) || t.data("selectable")) return !0;
            for (var e = 0, s = t[0].attributes, o = s.length; e < o; e++) if ("data-fancybox-" === s[e].nodeName.substr(0, 14)) return !0;
            return !1
        }, l = function (e) {
            for (var i = !1; (s = e.get(0), void 0, void 0, void 0, void 0, o = t.getComputedStyle(s)["overflow-y"], n = t.getComputedStyle(s)["overflow-x"], a = ("scroll" === o || "auto" === o) && s.scrollHeight > s.clientHeight, r = ("scroll" === n || "auto" === n) && s.scrollWidth > s.clientWidth, !(i = a || r)) && ((e = e.parent()).length && !e.hasClass("fancybox-stage") && !e.is("body"));) ;
            var s, o, n, a, r;
            return i
        }, h = function (t) {
            this.instance = t, this.$bg = t.$refs.bg, this.$stage = t.$refs.stage, this.$container = t.$refs.container, this.destroy(), this.$container.on("touchstart.fb.touch mousedown.fb.touch", i.proxy(this, "ontouchstart"))
        };
    h.prototype.destroy = function () {
        this.$container.off(".fb.touch"), i(e).off(".fb.touch"), this.requestId && (o(this.requestId), this.requestId = null), this.tapped && (clearTimeout(this.tapped), this.tapped = null)
    }, h.prototype.ontouchstart = function (s) {
        var o = this, h = i(s.target), c = o.instance, d = c.current, u = d.$slide, p = d.$content,
            f = "touchstart" == s.type;
        if (f && o.$container.off("mousedown.fb.touch"), (!s.originalEvent || 2 != s.originalEvent.button) && u.length && h.length && !r(h) && !r(h.parent()) && (h.is("img") || !(s.originalEvent.clientX > h[0].clientWidth + h.offset().left))) {
            if (!d || c.isAnimating || d.$slide.hasClass("fancybox-animated")) return s.stopPropagation(), void s.preventDefault();
            o.realPoints = o.startPoints = n(s), o.startPoints.length && (d.touch && s.stopPropagation(), o.startEvent = s, o.canTap = !0, o.$target = h, o.$content = p, o.opts = d.opts.touch, o.isPanning = !1, o.isSwiping = !1, o.isZooming = !1, o.isScrolling = !1, o.canPan = c.canPan(), o.startTime = (new Date).getTime(), o.distanceX = o.distanceY = o.distance = 0, o.canvasWidth = Math.round(u[0].clientWidth), o.canvasHeight = Math.round(u[0].clientHeight), o.contentLastPos = null, o.contentStartPos = i.fancybox.getTranslate(o.$content) || {
                top: 0,
                left: 0
            }, o.sliderStartPos = i.fancybox.getTranslate(u), o.stagePos = i.fancybox.getTranslate(c.$refs.stage), o.sliderStartPos.top -= o.stagePos.top, o.sliderStartPos.left -= o.stagePos.left, o.contentStartPos.top -= o.stagePos.top, o.contentStartPos.left -= o.stagePos.left, i(e).off(".fb.touch").on(f ? "touchend.fb.touch touchcancel.fb.touch" : "mouseup.fb.touch mouseleave.fb.touch", i.proxy(o, "ontouchend")).on(f ? "touchmove.fb.touch" : "mousemove.fb.touch", i.proxy(o, "ontouchmove")), i.fancybox.isMobile && e.addEventListener("scroll", o.onscroll, !0), ((o.opts || o.canPan) && (h.is(o.$stage) || o.$stage.find(h).length) || (h.is(".fancybox-image") && s.preventDefault(), i.fancybox.isMobile && h.hasClass("fancybox-caption"))) && (o.isScrollable = l(h) || l(h.parent()), i.fancybox.isMobile && o.isScrollable || s.preventDefault(), (1 === o.startPoints.length || d.hasError) && (o.canPan ? (i.fancybox.stop(o.$content), o.isPanning = !0) : o.isSwiping = !0, o.$container.addClass("fancybox-is-grabbing")), 2 === o.startPoints.length && "image" === d.type && (d.isLoaded || d.$ghost) && (o.canTap = !1, o.isSwiping = !1, o.isPanning = !1, o.isZooming = !0, i.fancybox.stop(o.$content), o.centerPointStartX = .5 * (o.startPoints[0].x + o.startPoints[1].x) - i(t).scrollLeft(), o.centerPointStartY = .5 * (o.startPoints[0].y + o.startPoints[1].y) - i(t).scrollTop(), o.percentageOfImageAtPinchPointX = (o.centerPointStartX - o.contentStartPos.left) / o.contentStartPos.width, o.percentageOfImageAtPinchPointY = (o.centerPointStartY - o.contentStartPos.top) / o.contentStartPos.height, o.startDistanceBetweenFingers = a(o.startPoints[0], o.startPoints[1]))))
        }
    }, h.prototype.onscroll = function (t) {
        this.isScrolling = !0, e.removeEventListener("scroll", this.onscroll, !0)
    }, h.prototype.ontouchmove = function (t) {
        var e = this;
        return void 0 !== t.originalEvent.buttons && 0 === t.originalEvent.buttons ? void e.ontouchend(t) : e.isScrolling ? void (e.canTap = !1) : (e.newPoints = n(t), void ((e.opts || e.canPan) && e.newPoints.length && e.newPoints.length && (e.isSwiping && !0 === e.isSwiping || t.preventDefault(), e.distanceX = a(e.newPoints[0], e.startPoints[0], "x"), e.distanceY = a(e.newPoints[0], e.startPoints[0], "y"), e.distance = a(e.newPoints[0], e.startPoints[0]), e.distance > 0 && (e.isSwiping ? e.onSwipe(t) : e.isPanning ? e.onPan() : e.isZooming && e.onZoom()))))
    }, h.prototype.onSwipe = function (e) {
        var n, a = this, r = a.instance, l = a.isSwiping, h = a.sliderStartPos.left || 0;
        if (!0 !== l) "x" == l && (a.distanceX > 0 && (a.instance.group.length < 2 || 0 === a.instance.current.index && !a.instance.current.opts.loop) ? h += Math.pow(a.distanceX, .8) : a.distanceX < 0 && (a.instance.group.length < 2 || a.instance.current.index === a.instance.group.length - 1 && !a.instance.current.opts.loop) ? h -= Math.pow(-a.distanceX, .8) : h += a.distanceX), a.sliderLastPos = {
            top: "x" == l ? 0 : a.sliderStartPos.top + a.distanceY,
            left: h
        }, a.requestId && (o(a.requestId), a.requestId = null), a.requestId = s(function () {
            a.sliderLastPos && (i.each(a.instance.slides, function (t, e) {
                var s = e.pos - a.instance.currPos;
                i.fancybox.setTranslate(e.$slide, {
                    top: a.sliderLastPos.top,
                    left: a.sliderLastPos.left + s * a.canvasWidth + s * e.opts.gutter
                })
            }), a.$container.addClass("fancybox-is-sliding"))
        }); else if (Math.abs(a.distance) > 10) {
            if (a.canTap = !1, r.group.length < 2 && a.opts.vertical ? a.isSwiping = "y" : r.isDragging || !1 === a.opts.vertical || "auto" === a.opts.vertical && i(t).width() > 800 ? a.isSwiping = "x" : (n = Math.abs(180 * Math.atan2(a.distanceY, a.distanceX) / Math.PI), a.isSwiping = n > 45 && n < 135 ? "y" : "x"), "y" === a.isSwiping && i.fancybox.isMobile && a.isScrollable) return void (a.isScrolling = !0);
            r.isDragging = a.isSwiping, a.startPoints = a.newPoints, i.each(r.slides, function (t, e) {
                var s, o;
                i.fancybox.stop(e.$slide), s = i.fancybox.getTranslate(e.$slide), o = i.fancybox.getTranslate(r.$refs.stage), e.$slide.css({
                    transform: "",
                    opacity: "",
                    "transition-duration": ""
                }).removeClass("fancybox-animated").removeClass(function (t, e) {
                    return (e.match(/(^|\s)fancybox-fx-\S+/g) || []).join(" ")
                }), e.pos === r.current.pos && (a.sliderStartPos.top = s.top - o.top, a.sliderStartPos.left = s.left - o.left), i.fancybox.setTranslate(e.$slide, {
                    top: s.top - o.top,
                    left: s.left - o.left
                })
            }), r.SlideShow && r.SlideShow.isActive && r.SlideShow.stop()
        }
    }, h.prototype.onPan = function () {
        var t = this;
        return a(t.newPoints[0], t.realPoints[0]) < (i.fancybox.isMobile ? 10 : 5) ? void (t.startPoints = t.newPoints) : (t.canTap = !1, t.contentLastPos = t.limitMovement(), t.requestId && o(t.requestId), void (t.requestId = s(function () {
            i.fancybox.setTranslate(t.$content, t.contentLastPos)
        })))
    }, h.prototype.limitMovement = function () {
        var t, e, i, s, o, n, a = this.canvasWidth, r = this.canvasHeight, l = this.distanceX, h = this.distanceY,
            c = this.contentStartPos, d = c.left, u = c.top, p = c.width, f = c.height;
        return o = p > a ? d + l : d, n = u + h, t = Math.max(0, .5 * a - .5 * p), e = Math.max(0, .5 * r - .5 * f), i = Math.min(a - p, .5 * a - .5 * p), s = Math.min(r - f, .5 * r - .5 * f), l > 0 && o > t && (o = t - 1 + Math.pow(-t + d + l, .8) || 0), l < 0 && o < i && (o = i + 1 - Math.pow(i - d - l, .8) || 0), h > 0 && n > e && (n = e - 1 + Math.pow(-e + u + h, .8) || 0), h < 0 && n < s && (n = s + 1 - Math.pow(s - u - h, .8) || 0), {
            top: n,
            left: o
        }
    }, h.prototype.limitPosition = function (t, e, i, s) {
        var o = this.canvasWidth, n = this.canvasHeight;
        return i > o ? t = (t = t > 0 ? 0 : t) < o - i ? o - i : t : t = Math.max(0, o / 2 - i / 2), s > n ? e = (e = e > 0 ? 0 : e) < n - s ? n - s : e : e = Math.max(0, n / 2 - s / 2), {
            top: e,
            left: t
        }
    }, h.prototype.onZoom = function () {
        var e = this, n = e.contentStartPos, r = n.width, l = n.height, h = n.left, c = n.top,
            d = a(e.newPoints[0], e.newPoints[1]) / e.startDistanceBetweenFingers, u = Math.floor(r * d),
            p = Math.floor(l * d), f = (r - u) * e.percentageOfImageAtPinchPointX,
            m = (l - p) * e.percentageOfImageAtPinchPointY,
            g = (e.newPoints[0].x + e.newPoints[1].x) / 2 - i(t).scrollLeft(),
            v = (e.newPoints[0].y + e.newPoints[1].y) / 2 - i(t).scrollTop(), y = g - e.centerPointStartX,
            b = {top: c + (m + (v - e.centerPointStartY)), left: h + (f + y), scaleX: d, scaleY: d};
        e.canTap = !1, e.newWidth = u, e.newHeight = p, e.contentLastPos = b, e.requestId && o(e.requestId), e.requestId = s(function () {
            i.fancybox.setTranslate(e.$content, e.contentLastPos)
        })
    }, h.prototype.ontouchend = function (t) {
        var s = this, a = s.isSwiping, r = s.isPanning, l = s.isZooming, h = s.isScrolling;
        return s.endPoints = n(t), s.dMs = Math.max((new Date).getTime() - s.startTime, 1), s.$container.removeClass("fancybox-is-grabbing"), i(e).off(".fb.touch"), e.removeEventListener("scroll", s.onscroll, !0), s.requestId && (o(s.requestId), s.requestId = null), s.isSwiping = !1, s.isPanning = !1, s.isZooming = !1, s.isScrolling = !1, s.instance.isDragging = !1, s.canTap ? s.onTap(t) : (s.speed = 100, s.velocityX = s.distanceX / s.dMs * .5, s.velocityY = s.distanceY / s.dMs * .5, void (r ? s.endPanning() : l ? s.endZooming() : s.endSwiping(a, h)))
    }, h.prototype.endSwiping = function (t, e) {
        var s = this, o = !1, n = s.instance.group.length, a = Math.abs(s.distanceX),
            r = "x" == t && n > 1 && (s.dMs > 130 && a > 10 || a > 50);
        s.sliderLastPos = null, "y" == t && !e && Math.abs(s.distanceY) > 50 ? (i.fancybox.animate(s.instance.current.$slide, {
            top: s.sliderStartPos.top + s.distanceY + 150 * s.velocityY,
            opacity: 0
        }, 200), o = s.instance.close(!0, 250)) : r && s.distanceX > 0 ? o = s.instance.previous(300) : r && s.distanceX < 0 && (o = s.instance.next(300)), !1 !== o || "x" != t && "y" != t || s.instance.centerSlide(200), s.$container.removeClass("fancybox-is-sliding")
    }, h.prototype.endPanning = function () {
        var t, e, s, o = this;
        o.contentLastPos && (!1 === o.opts.momentum || o.dMs > 350 ? (t = o.contentLastPos.left, e = o.contentLastPos.top) : (t = o.contentLastPos.left + 500 * o.velocityX, e = o.contentLastPos.top + 500 * o.velocityY), (s = o.limitPosition(t, e, o.contentStartPos.width, o.contentStartPos.height)).width = o.contentStartPos.width, s.height = o.contentStartPos.height, i.fancybox.animate(o.$content, s, 330))
    }, h.prototype.endZooming = function () {
        var t, e, s, o, n = this, a = n.instance.current, r = n.newWidth, l = n.newHeight;
        n.contentLastPos && (t = n.contentLastPos.left, o = {
            top: e = n.contentLastPos.top,
            left: t,
            width: r,
            height: l,
            scaleX: 1,
            scaleY: 1
        }, i.fancybox.setTranslate(n.$content, o), r < n.canvasWidth && l < n.canvasHeight ? n.instance.scaleToFit(150) : r > a.width || l > a.height ? n.instance.scaleToActual(n.centerPointStartX, n.centerPointStartY, 150) : (s = n.limitPosition(t, e, r, l), i.fancybox.animate(n.$content, s, 150)))
    }, h.prototype.onTap = function (e) {
        var s, o = this, a = i(e.target), r = o.instance, l = r.current, h = e && n(e) || o.startPoints,
            c = h[0] ? h[0].x - i(t).scrollLeft() - o.stagePos.left : 0,
            d = h[0] ? h[0].y - i(t).scrollTop() - o.stagePos.top : 0, u = function (t) {
                var s = l.opts[t];
                if (i.isFunction(s) && (s = s.apply(r, [l, e])), s) switch (s) {
                    case "close":
                        r.close(o.startEvent);
                        break;
                    case "toggleControls":
                        r.toggleControls();
                        break;
                    case "next":
                        r.next();
                        break;
                    case "nextOrClose":
                        r.group.length > 1 ? r.next() : r.close(o.startEvent);
                        break;
                    case "zoom":
                        "image" == l.type && (l.isLoaded || l.$ghost) && (r.canPan() ? r.scaleToFit() : r.isScaledDown() ? r.scaleToActual(c, d) : r.group.length < 2 && r.close(o.startEvent))
                }
            };
        if ((!e.originalEvent || 2 != e.originalEvent.button) && (a.is("img") || !(c > a[0].clientWidth + a.offset().left))) {
            if (a.is(".fancybox-bg,.fancybox-inner,.fancybox-outer,.fancybox-container")) s = "Outside"; else if (a.is(".fancybox-slide")) s = "Slide"; else {
                if (!r.current.$content || !r.current.$content.find(a).addBack().filter(a).length) return;
                s = "Content"
            }
            if (o.tapped) {
                if (clearTimeout(o.tapped), o.tapped = null, Math.abs(c - o.tapX) > 50 || Math.abs(d - o.tapY) > 50) return this;
                u("dblclick" + s)
            } else o.tapX = c, o.tapY = d, l.opts["dblclick" + s] && l.opts["dblclick" + s] !== l.opts["click" + s] ? o.tapped = setTimeout(function () {
                o.tapped = null, r.isAnimating || u("click" + s)
            }, 500) : u("click" + s);
            return this
        }
    }, i(e).on("onActivate.fb", function (t, e) {
        e && !e.Guestures && (e.Guestures = new h(e))
    }).on("beforeClose.fb", function (t, e) {
        e && e.Guestures && e.Guestures.destroy()
    })
}(window, document, jQuery), function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {slideShow: '<button data-fancybox-play class="fancybox-button fancybox-button--play" title="{{PLAY_START}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M6.5 5.4v13.2l11-6.6z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M8.33 5.75h2.2v12.5h-2.2V5.75zm5.15 0h2.2v12.5h-2.2V5.75z"/></svg></button>'},
        slideShow: {autoStart: !1, speed: 3e3, progress: !0}
    });
    var i = function (t) {
        this.instance = t, this.init()
    };
    e.extend(i.prototype, {
        timer: null, isActive: !1, $button: null, init: function () {
            var t = this, i = t.instance, s = i.group[i.currIndex].opts.slideShow;
            t.$button = i.$refs.toolbar.find("[data-fancybox-play]").on("click", function () {
                t.toggle()
            }), i.group.length < 2 || !s ? t.$button.hide() : s.progress && (t.$progress = e('<div class="fancybox-progress"></div>').appendTo(i.$refs.inner))
        }, set: function (t) {
            var i = this.instance, s = i.current;
            s && (!0 === t || s.opts.loop || i.currIndex < i.group.length - 1) ? this.isActive && "video" !== s.contentType && (this.$progress && e.fancybox.animate(this.$progress.show(), {scaleX: 1}, s.opts.slideShow.speed), this.timer = setTimeout(function () {
                i.current.opts.loop || i.current.index != i.group.length - 1 ? i.next() : i.jumpTo(0)
            }, s.opts.slideShow.speed)) : (this.stop(), i.idleSecondsCounter = 0, i.showControls())
        }, clear: function () {
            clearTimeout(this.timer), this.timer = null, this.$progress && this.$progress.removeAttr("style").hide()
        }, start: function () {
            var t = this.instance.current;
            t && (this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_STOP).removeClass("fancybox-button--play").addClass("fancybox-button--pause"), this.isActive = !0, t.isComplete && this.set(!0), this.instance.trigger("onSlideShowChange", !0))
        }, stop: function () {
            var t = this.instance.current;
            this.clear(), this.$button.attr("title", (t.opts.i18n[t.opts.lang] || t.opts.i18n.en).PLAY_START).removeClass("fancybox-button--pause").addClass("fancybox-button--play"), this.isActive = !1, this.instance.trigger("onSlideShowChange", !1), this.$progress && this.$progress.removeAttr("style").hide()
        }, toggle: function () {
            this.isActive ? this.stop() : this.start()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            e && !e.SlideShow && (e.SlideShow = new i(e))
        }, "beforeShow.fb": function (t, e, i, s) {
            var o = e && e.SlideShow;
            s ? o && i.opts.slideShow.autoStart && o.start() : o && o.isActive && o.clear()
        }, "afterShow.fb": function (t, e, i) {
            var s = e && e.SlideShow;
            s && s.isActive && s.set()
        }, "afterKeydown.fb": function (i, s, o, n, a) {
            var r = s && s.SlideShow;
            !r || !o.opts.slideShow || 80 !== a && 32 !== a || e(t.activeElement).is("button,a,input") || (n.preventDefault(), r.toggle())
        }, "beforeClose.fb onDeactivate.fb": function (t, e) {
            var i = e && e.SlideShow;
            i && i.stop()
        }
    }), e(t).on("visibilitychange", function () {
        var i = e.fancybox.getInstance(), s = i && i.SlideShow;
        s && s.isActive && (t.hidden ? s.clear() : s.set())
    })
}(document, jQuery), function (t, e) {
    "use strict";
    var i = function () {
        for (var e = [["requestFullscreen", "exitFullscreen", "fullscreenElement", "fullscreenEnabled", "fullscreenchange", "fullscreenerror"], ["webkitRequestFullscreen", "webkitExitFullscreen", "webkitFullscreenElement", "webkitFullscreenEnabled", "webkitfullscreenchange", "webkitfullscreenerror"], ["webkitRequestFullScreen", "webkitCancelFullScreen", "webkitCurrentFullScreenElement", "webkitCancelFullScreen", "webkitfullscreenchange", "webkitfullscreenerror"], ["mozRequestFullScreen", "mozCancelFullScreen", "mozFullScreenElement", "mozFullScreenEnabled", "mozfullscreenchange", "mozfullscreenerror"], ["msRequestFullscreen", "msExitFullscreen", "msFullscreenElement", "msFullscreenEnabled", "MSFullscreenChange", "MSFullscreenError"]], i = {}, s = 0; s < e.length; s++) {
            var o = e[s];
            if (o && o[1] in t) {
                for (var n = 0; n < o.length; n++) i[e[0][n]] = o[n];
                return i
            }
        }
        return !1
    }();
    if (i) {
        var s = {
            request: function (e) {
                (e = e || t.documentElement)[i.requestFullscreen](e.ALLOW_KEYBOARD_INPUT)
            }, exit: function () {
                t[i.exitFullscreen]()
            }, toggle: function (e) {
                e = e || t.documentElement, this.isFullscreen() ? this.exit() : this.request(e)
            }, isFullscreen: function () {
                return Boolean(t[i.fullscreenElement])
            }, enabled: function () {
                return Boolean(t[i.fullscreenEnabled])
            }
        };
        e.extend(!0, e.fancybox.defaults, {
            btnTpl: {fullScreen: '<button data-fancybox-fullscreen class="fancybox-button fancybox-button--fsenter" title="{{FULL_SCREEN}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M7 14H5v5h5v-2H7v-3zm-2-4h2V7h3V5H5v5zm12 7h-3v2h5v-5h-2v3zM14 5v2h3v3h2V5h-5z"/></svg><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 16h3v3h2v-5H5zm3-8H5v2h5V5H8zm6 11h2v-3h3v-2h-5zm2-11V5h-2v5h5V8z"/></svg></button>'},
            fullScreen: {autoStart: !1}
        }), e(t).on(i.fullscreenchange, function () {
            var t = s.isFullscreen(), i = e.fancybox.getInstance();
            i && (i.current && "image" === i.current.type && i.isAnimating && (i.current.$content.css("transition", "none"), i.isAnimating = !1, i.update(!0, !0, 0)), i.trigger("onFullscreenChange", t), i.$refs.container.toggleClass("fancybox-is-fullscreen", t), i.$refs.toolbar.find("[data-fancybox-fullscreen]").toggleClass("fancybox-button--fsenter", !t).toggleClass("fancybox-button--fsexit", t))
        })
    }
    e(t).on({
        "onInit.fb": function (t, e) {
            var o;
            return i ? void (e && e.group[e.currIndex].opts.fullScreen ? (o = e.$refs.container, o.on("click.fb-fullscreen", "[data-fancybox-fullscreen]", function (t) {
                t.stopPropagation(), t.preventDefault(), s.toggle()
            }), e.opts.fullScreen && !0 === e.opts.fullScreen.autoStart && s.request(), e.FullScreen = s) : e && e.$refs.toolbar.find("[data-fancybox-fullscreen]").hide()) : void e.$refs.toolbar.find("[data-fancybox-fullscreen]").remove()
        }, "afterKeydown.fb": function (t, e, i, s, o) {
            e && e.FullScreen && 70 === o && (s.preventDefault(), e.FullScreen.toggle())
        }, "beforeClose.fb": function (t, e) {
            e && e.FullScreen && e.$refs.container.hasClass("fancybox-is-fullscreen") && s.exit()
        }
    })
}(document, jQuery), function (t, e) {
    "use strict";
    var i = "fancybox-thumbs", s = i + "-active";
    e.fancybox.defaults = e.extend(!0, {
        btnTpl: {thumbs: '<button data-fancybox-thumbs class="fancybox-button fancybox-button--thumbs" title="{{THUMBS}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M14.59 14.59h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76h-3.76v-3.76zm-4.47 0h3.76v3.76H5.65v-3.76zm8.94-4.47h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76h-3.76V5.65zm-4.47 0h3.76v3.76H5.65V5.65z"/></svg></button>'},
        thumbs: {autoStart: !1, hideOnClose: !0, parentEl: ".fancybox-container", axis: "y"}
    }, e.fancybox.defaults);
    var o = function (t) {
        this.init(t)
    };
    e.extend(o.prototype, {
        $button: null, $grid: null, $list: null, isVisible: !1, isActive: !1, init: function (t) {
            var e = this, i = t.group, s = 0;
            e.instance = t, e.opts = i[t.currIndex].opts.thumbs, t.Thumbs = e, e.$button = t.$refs.toolbar.find("[data-fancybox-thumbs]");
            for (var o = 0, n = i.length; o < n && (i[o].thumb && s++ , !(s > 1)); o++) ;
            s > 1 && e.opts ? (e.$button.removeAttr("style").on("click", function () {
                e.toggle()
            }), e.isActive = !0) : e.$button.hide()
        }, create: function () {
            var t, s = this, o = s.instance, n = s.opts.parentEl, a = [];
            s.$grid || (s.$grid = e('<div class="' + i + " " + i + "-" + s.opts.axis + '"></div>').appendTo(o.$refs.container.find(n).addBack().filter(n)), s.$grid.on("click", "a", function () {
                o.jumpTo(e(this).attr("data-index"))
            })), s.$list || (s.$list = e('<div class="' + i + '__list">').appendTo(s.$grid)), e.each(o.group, function (e, i) {
                (t = i.thumb) || "image" !== i.type || (t = i.src), a.push('<a href="javascript:;" tabindex="0" data-index="' + e + '"' + (t && t.length ? ' style="background-image:url(' + t + ')"' : 'class="fancybox-thumbs-missing"') + "></a>")
            }), s.$list[0].innerHTML = a.join(""), "x" === s.opts.axis && s.$list.width(parseInt(s.$grid.css("padding-right"), 10) + o.group.length * s.$list.children().eq(0).outerWidth(!0))
        }, focus: function (t) {
            var e, i, o = this.$list, n = this.$grid;
            this.instance.current && (i = (e = o.children().removeClass(s).filter('[data-index="' + this.instance.current.index + '"]').addClass(s)).position(), "y" === this.opts.axis && (i.top < 0 || i.top > o.height() - e.outerHeight()) ? o.stop().animate({scrollTop: o.scrollTop() + i.top}, t) : "x" === this.opts.axis && (i.left < n.scrollLeft() || i.left > n.scrollLeft() + (n.width() - e.outerWidth())) && o.parent().stop().animate({scrollLeft: i.left}, t))
        }, update: function () {
            this.instance.$refs.container.toggleClass("fancybox-show-thumbs", this.isVisible), this.isVisible ? (this.$grid || this.create(), this.instance.trigger("onThumbsShow"), this.focus(0)) : this.$grid && this.instance.trigger("onThumbsHide"), this.instance.update()
        }, hide: function () {
            this.isVisible = !1, this.update()
        }, show: function () {
            this.isVisible = !0, this.update()
        }, toggle: function () {
            this.isVisible = !this.isVisible, this.update()
        }
    }), e(t).on({
        "onInit.fb": function (t, e) {
            var i;
            e && !e.Thumbs && ((i = new o(e)).isActive && !0 === i.opts.autoStart && i.show())
        }, "beforeShow.fb": function (t, e, i, s) {
            var o = e && e.Thumbs;
            o && o.isVisible && o.focus(s ? 0 : 250)
        }, "afterKeydown.fb": function (t, e, i, s, o) {
            var n = e && e.Thumbs;
            n && n.isActive && 71 === o && (s.preventDefault(), n.toggle())
        }, "beforeClose.fb": function (t, e) {
            var i = e && e.Thumbs;
            i && i.isVisible && !1 !== i.opts.hideOnClose && i.$grid.hide()
        }
    })
}(document, jQuery), function (t, e) {
    "use strict";
    e.extend(!0, e.fancybox.defaults, {
        btnTpl: {share: '<button data-fancybox-share class="fancybox-button fancybox-button--share" title="{{SHARE}}"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M2.55 19c1.4-8.4 9.1-9.8 11.9-9.8V5l7 7-7 6.3v-3.5c-2.8 0-10.5 2.1-11.9 4.2z"/></svg></button>'},
        share: {
            url: function (t, e) {
                return !t.currentHash && "inline" !== e.type && "html" !== e.type && (e.origSrc || e.src) || window.location
            },
            tpl: '<div class="fancybox-share"><h1>{{SHARE}}</h1><p><a class="fancybox-share__button fancybox-share__button--fb" href="https://www.facebook.com/sharer/sharer.php?u={{url}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m287 456v-299c0-21 6-35 35-35h38v-63c-7-1-29-3-55-3-54 0-91 33-91 94v306m143-254h-205v72h196" /></svg><span>Facebook</span></a><a class="fancybox-share__button fancybox-share__button--tw" href="https://twitter.com/intent/tweet?url={{url}}&text={{descr}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m456 133c-14 7-31 11-47 13 17-10 30-27 37-46-15 10-34 16-52 20-61-62-157-7-141 75-68-3-129-35-169-85-22 37-11 86 26 109-13 0-26-4-37-9 0 39 28 72 65 80-12 3-25 4-37 2 10 33 41 57 77 57-42 30-77 38-122 34 170 111 378-32 359-208 16-11 30-25 41-42z" /></svg><span>Twitter</span></a><a class="fancybox-share__button fancybox-share__button--pt" href="https://www.pinterest.com/pin/create/button/?url={{url}}&description={{descr}}&media={{media}}"><svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg"><path d="m265 56c-109 0-164 78-164 144 0 39 15 74 47 87 5 2 10 0 12-5l4-19c2-6 1-8-3-13-9-11-15-25-15-45 0-58 43-110 113-110 62 0 96 38 96 88 0 67-30 122-73 122-24 0-42-19-36-44 6-29 20-60 20-81 0-19-10-35-31-35-25 0-44 26-44 60 0 21 7 36 7 36l-30 125c-8 37-1 83 0 87 0 3 4 4 5 2 2-3 32-39 42-75l16-64c8 16 31 29 56 29 74 0 124-67 124-157 0-69-58-132-146-132z" fill="#fff"/></svg><span>Pinterest</span></a></p><p><input class="fancybox-share__input" type="text" value="{{url_raw}}" onclick="select()" /></p></div>'
        }
    }), e(t).on("click", "[data-fancybox-share]", function () {
        var t, i, s, o, n = e.fancybox.getInstance(), a = n.current || null;
        a && ("function" === e.type(a.opts.share.url) && (t = a.opts.share.url.apply(a, [n, a])), i = a.opts.share.tpl.replace(/\{\{media\}\}/g, "image" === a.type ? encodeURIComponent(a.src) : "").replace(/\{\{url\}\}/g, encodeURIComponent(t)).replace(/\{\{url_raw\}\}/g, (s = t, o = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;",
            "/": "&#x2F;",
            "`": "&#x60;",
            "=": "&#x3D;"
        }, String(s).replace(/[&<>"'`=\/]/g, function (t) {
            return o[t]
        }))).replace(/\{\{descr\}\}/g, n.$caption ? encodeURIComponent(n.$caption.text()) : ""), e.fancybox.open({
            src: n.translate(n, i),
            type: "html",
            opts: {
                touch: !1, animationEffect: !1, afterLoad: function (t, e) {
                    n.$refs.container.one("beforeClose.fb", function () {
                        t.close(null, 0)
                    }), e.$content.find(".fancybox-share__button").click(function () {
                        return window.open(this.href, "Share", "width=550, height=450"), !1
                    })
                }, mobile: {autoFocus: !1}
            }
        }))
    })
}(document, jQuery), function (t, e, i) {
    "use strict";

    function s() {
        var e = t.location.hash.substr(1), i = e.split("-"),
            s = i.length > 1 && /^\+?\d+$/.test(i[i.length - 1]) && parseInt(i.pop(-1), 10) || 1, o = i.join("-");
        return {hash: e, index: s < 1 ? 1 : s, gallery: o}
    }

    function o(t) {
        "" !== t.gallery && i("[data-fancybox='" + i.escapeSelector(t.gallery) + "']").eq(t.index - 1).focus().trigger("click.fb-start")
    }

    function n(t) {
        var e, i;
        return !!t && ("" !== (i = (e = t.current ? t.current.opts : t.opts).hash || (e.$orig ? e.$orig.data("fancybox") || e.$orig.data("fancybox-trigger") : "")) && i)
    }

    i.escapeSelector || (i.escapeSelector = function (t) {
        return (t + "").replace(/([\0-\x1f\x7f]|^-?\d)|^-$|[^\x80-\uFFFF\w-]/g, function (t, e) {
            return e ? "\0" === t ? "�" : t.slice(0, -1) + "\\" + t.charCodeAt(t.length - 1).toString(16) + " " : "\\" + t
        })
    }), i(function () {
        !1 !== i.fancybox.defaults.hash && (i(e).on({
            "onInit.fb": function (t, e) {
                var i, o;
                !1 !== e.group[e.currIndex].opts.hash && (i = s(), (o = n(e)) && i.gallery && o == i.gallery && (e.currIndex = i.index - 1))
            }, "beforeShow.fb": function (i, s, o, a) {
                var r;
                o && !1 !== o.opts.hash && ((r = n(s)) && (s.currentHash = r + (s.group.length > 1 ? "-" + (o.index + 1) : ""), t.location.hash !== "#" + s.currentHash && (a && !s.origHash && (s.origHash = t.location.hash), s.hashTimer && clearTimeout(s.hashTimer), s.hashTimer = setTimeout(function () {
                    "replaceState" in t.history ? (t.history[a ? "pushState" : "replaceState"]({}, e.title, t.location.pathname + t.location.search + "#" + s.currentHash), a && (s.hasCreatedHistory = !0)) : t.location.hash = s.currentHash, s.hashTimer = null
                }, 300))))
            }, "beforeClose.fb": function (i, s, o) {
                !1 !== o.opts.hash && (clearTimeout(s.hashTimer), s.currentHash && s.hasCreatedHistory ? t.history.back() : s.currentHash && ("replaceState" in t.history ? t.history.replaceState({}, e.title, t.location.pathname + t.location.search + (s.origHash || "")) : t.location.hash = s.origHash), s.currentHash = null)
            }
        }), i(t).on("hashchange.fb", function () {
            var t = s(), e = null;
            i.each(i(".fancybox-container").get().reverse(), function (t, s) {
                var o = i(s).data("FancyBox");
                if (o && o.currentHash) return e = o, !1
            }), e ? e.currentHash === t.gallery + "-" + t.index || 1 === t.index && e.currentHash == t.gallery || (e.currentHash = null, e.close()) : "" !== t.gallery && o(t)
        }), setTimeout(function () {
            i.fancybox.getInstance() || o(s())
        }, 50))
    })
}(window, document, jQuery), function (t, e) {
    "use strict";
    var i = (new Date).getTime();
    e(t).on({
        "onInit.fb": function (t, e, s) {
            e.$refs.stage.on("mousewheel DOMMouseScroll wheel MozMousePixelScroll", function (t) {
                var s = e.current, o = (new Date).getTime();
                e.group.length < 2 || !1 === s.opts.wheel || "auto" === s.opts.wheel && "image" !== s.type || (t.preventDefault(), t.stopPropagation(), s.$slide.hasClass("fancybox-animated") || (t = t.originalEvent || t, o - i < 250 || (i = o, e[(-t.deltaY || -t.deltaX || t.wheelDelta || -t.detail) < 0 ? "next" : "previous"]())))
            })
        }
    })
}(document, jQuery), "function" != typeof Object.create && (Object.create = function (t) {
    function e() {
    }

    return e.prototype = t, new e
}), function (t, e, i, s) {
    var o = {
        init: function (e, i) {
            var s = this;
            s.elem = i, s.$elem = t(i), s.imageSrc = s.$elem.data("zoom-image") ? s.$elem.data("zoom-image") : s.$elem.attr("src"), s.options = t.extend({}, t.fn.elevateZoom.options, e), s.options.tint && (s.options.lensColour = "none", s.options.lensOpacity = "1"), "inner" == s.options.zoomType && (s.options.showLens = !1), s.$elem.parent().removeAttr("title").removeAttr("alt"), s.zoomImage = s.imageSrc, s.refresh(1), t("#" + s.options.gallery + " a").click(function (e) {
                return s.options.galleryActiveClass && (t("#" + s.options.gallery + " a").removeClass(s.options.galleryActiveClass), t(this).addClass(s.options.galleryActiveClass)), e.preventDefault(), t(this).data("zoom-image") ? s.zoomImagePre = t(this).data("zoom-image") : s.zoomImagePre = t(this).data("image"), s.swaptheimage(t(this).data("image"), s.zoomImagePre), !1
            })
        }, refresh: function (t) {
            var e = this;
            setTimeout(function () {
                e.fetch(e.imageSrc)
            }, t || e.options.refresh)
        }, fetch: function (t) {
            var e = this, i = new Image;
            i.onload = function () {
                e.largeWidth = i.width, e.largeHeight = i.height, e.startZoom(), e.currentImage = e.imageSrc, e.options.onZoomedImageLoaded(e.$elem)
            }, i.src = t
        }, startZoom: function () {
            var e = this;
            if (e.nzWidth = e.$elem.width(), e.nzHeight = e.$elem.height(), e.isWindowActive = !1, e.isLensActive = !1, e.isTintActive = !1, e.overWindow = !1, e.options.imageCrossfade && (e.zoomWrap = e.$elem.wrap('<div style="height:' + e.nzHeight + "px;width:" + e.nzWidth + 'px;" class="zoomWrapper" />'), e.$elem.css("position", "absolute")), e.zoomLock = 1, e.scrollingLock = !1, e.changeBgSize = !1, e.currentZoomLevel = e.options.zoomLevel, e.nzOffset = e.$elem.offset(), e.widthRatio = e.largeWidth / e.currentZoomLevel / e.nzWidth, e.heightRatio = e.largeHeight / e.currentZoomLevel / e.nzHeight, "window" == e.options.zoomType && (e.zoomWindowStyle = "overflow: hidden;background-position: 0px 0px;text-align:center;background-color: " + String(e.options.zoomWindowBgColour) + ";width: " + String(e.options.zoomWindowWidth) + "px;height: " + String(e.options.zoomWindowHeight) + "px;float: left;background-size: " + e.largeWidth / e.currentZoomLevel + "px " + e.largeHeight / e.currentZoomLevel + "px;display: none;z-index:100;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"), "inner" == e.options.zoomType) {
                var i = e.$elem.css("border-left-width");
                e.zoomWindowStyle = "overflow: hidden;margin-left: " + String(i) + ";margin-top: " + String(i) + ";background-position: 0px 0px;width: " + String(e.nzWidth) + "px;height: " + String(e.nzHeight) + "px;float: left;display: none;cursor:" + e.options.cursor + ";px solid " + e.options.borderColour + ";background-repeat: no-repeat;position: absolute;"
            }
            "window" == e.options.zoomType && (lensHeight = e.nzHeight < e.options.zoomWindowWidth / e.widthRatio ? e.nzHeight : String(e.options.zoomWindowHeight / e.heightRatio), lensWidth = e.largeWidth < e.options.zoomWindowWidth ? e.nzWidth : e.options.zoomWindowWidth / e.widthRatio, e.lensStyle = "background-position: 0px 0px;width: " + String(e.options.zoomWindowWidth / e.widthRatio) + "px;height: " + String(e.options.zoomWindowHeight / e.heightRatio) + "px;float: right;display: none;overflow: hidden;z-index: 999;-webkit-transform: translateZ(0);opacity:" + e.options.lensOpacity + ";filter: alpha(opacity = " + 100 * e.options.lensOpacity + "); zoom:1;width:" + lensWidth + "px;height:" + lensHeight + "px;background-color:" + e.options.lensColour + ";cursor:" + e.options.cursor + ";border: " + e.options.lensBorderSize + "px solid " + e.options.lensBorderColour + ";background-repeat: no-repeat;position: absolute;"), e.tintStyle = "display: block;position: absolute;background-color: " + e.options.tintColour + ";filter:alpha(opacity=0);opacity: 0;width: " + e.nzWidth + "px;height: " + e.nzHeight + "px;", e.lensRound = "", "lens" == e.options.zoomType && (e.lensStyle = "background-position: 0px 0px;float: left;display: none;border: " + String(e.options.borderSize) + "px solid " + e.options.borderColour + ";width:" + String(e.options.lensSize) + "px;height:" + String(e.options.lensSize) + "px;background-repeat: no-repeat;position: absolute;"), "round" == e.options.lensShape && (e.lensRound = "border-top-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-top-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-left-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;border-bottom-right-radius: " + String(e.options.lensSize / 2 + e.options.borderSize) + "px;"), e.zoomContainer = t('<div class="zoomContainer" style="-webkit-transform: translateZ(0);position:absolute;left:' + e.nzOffset.left + "px;top:" + e.nzOffset.top + "px;height:" + e.nzHeight + "px;width:" + e.nzWidth + 'px;"></div>'), t("body").append(e.zoomContainer), e.options.containLensZoom && "lens" == e.options.zoomType && e.zoomContainer.css("overflow", "hidden"), "inner" != e.options.zoomType && (e.zoomLens = t("<div class='zoomLens' style='" + e.lensStyle + e.lensRound + "'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
                e.$elem.trigger("click")
            }), e.options.tint && (e.tintContainer = t("<div/>").addClass("tintContainer"), e.zoomTint = t("<div class='zoomTint' style='" + e.tintStyle + "'></div>"), e.zoomLens.wrap(e.tintContainer), e.zoomTintcss = e.zoomLens.after(e.zoomTint), e.zoomTintImage = t('<img style="position: absolute; left: 0px; top: 0px; max-width: none; width: ' + e.nzWidth + "px; height: " + e.nzHeight + 'px;" src="' + e.imageSrc + '">').appendTo(e.zoomLens).click(function () {
                e.$elem.trigger("click")
            }))), isNaN(e.options.zoomWindowPosition) ? e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo("body").click(function () {
                e.$elem.trigger("click")
            }) : e.zoomWindow = t("<div style='z-index:999;left:" + e.windowOffsetLeft + "px;top:" + e.windowOffsetTop + "px;" + e.zoomWindowStyle + "' class='zoomWindow'>&nbsp;</div>").appendTo(e.zoomContainer).click(function () {
                e.$elem.trigger("click")
            }), e.zoomWindowContainer = t("<div/>").addClass("zoomWindowContainer").css("width", e.options.zoomWindowWidth), e.zoomWindow.wrap(e.zoomWindowContainer), "lens" == e.options.zoomType && e.zoomLens.css({backgroundImage: "url('" + e.imageSrc + "')"}), "window" == e.options.zoomType && e.zoomWindow.css({backgroundImage: "url('" + e.imageSrc + "')"}), "inner" == e.options.zoomType && e.zoomWindow.css({backgroundImage: "url('" + e.imageSrc + "')"}), e.$elem.bind("touchmove", function (t) {
                t.preventDefault(), e.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
            }), e.zoomContainer.bind("touchmove", function (t) {
                "inner" == e.options.zoomType && e.showHideWindow("show"), t.preventDefault(), e.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
            }), e.zoomContainer.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            }), e.$elem.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            }), e.options.showLens && (e.zoomLens.bind("touchmove", function (t) {
                t.preventDefault(), e.setPosition(t.originalEvent.touches[0] || t.originalEvent.changedTouches[0])
            }), e.zoomLens.bind("touchend", function (t) {
                e.showHideWindow("hide"), e.options.showLens && e.showHideLens("hide"), e.options.tint && "inner" != e.options.zoomType && e.showHideTint("hide")
            })), e.$elem.bind("mousemove", function (t) {
                0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.zoomContainer.bind("mousemove", function (t) {
                0 == e.overWindow && e.setElements("show"), e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), "inner" != e.options.zoomType && e.zoomLens.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.options.tint && "inner" != e.options.zoomType && e.zoomTint.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), "inner" == e.options.zoomType && e.zoomWindow.bind("mousemove", function (t) {
                e.lastX === t.clientX && e.lastY === t.clientY || (e.setPosition(t), e.currentLoc = t), e.lastX = t.clientX, e.lastY = t.clientY
            }), e.zoomContainer.add(e.$elem).mouseenter(function () {
                0 == e.overWindow && e.setElements("show")
            }).mouseleave(function () {
                e.scrollLock || e.setElements("hide")
            }), "inner" != e.options.zoomType && e.zoomWindow.mouseenter(function () {
                e.overWindow = !0, e.setElements("hide")
            }).mouseleave(function () {
                e.overWindow = !1
            }), e.minZoomLevel = e.options.minZoomLevel ? e.options.minZoomLevel : 2 * e.options.scrollZoomIncrement, e.options.scrollZoom && e.zoomContainer.add(e.$elem).bind("mousewheel DOMMouseScroll MozMousePixelScroll", function (i) {
                e.scrollLock = !0, clearTimeout(t.data(this, "timer")), t.data(this, "timer", setTimeout(function () {
                    e.scrollLock = !1
                }, 250));
                var s = i.originalEvent.wheelDelta || -1 * i.originalEvent.detail;
                return i.stopImmediatePropagation(), i.stopPropagation(), i.preventDefault(), 0 < s / 120 ? e.currentZoomLevel >= e.minZoomLevel && e.changeZoomLevel(e.currentZoomLevel - e.options.scrollZoomIncrement) : e.options.maxZoomLevel ? e.currentZoomLevel <= e.options.maxZoomLevel && e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement) : e.changeZoomLevel(parseFloat(e.currentZoomLevel) + e.options.scrollZoomIncrement), !1
            })
        }, setElements: function (t) {
            if (!this.options.zoomEnabled) return !1;
            "show" == t && this.isWindowSet && ("inner" == this.options.zoomType && this.showHideWindow("show"), "window" == this.options.zoomType && this.showHideWindow("show"), this.options.showLens && this.showHideLens("show"), this.options.tint && "inner" != this.options.zoomType && this.showHideTint("show")), "hide" == t && ("window" == this.options.zoomType && this.showHideWindow("hide"), this.options.tint || this.showHideWindow("hide"), this.options.showLens && this.showHideLens("hide"), this.options.tint && this.showHideTint("hide"))
        }, setPosition: function (t) {
            if (!this.options.zoomEnabled) return !1;
            this.nzHeight = this.$elem.height(), this.nzWidth = this.$elem.width(), this.nzOffset = this.$elem.offset(), this.options.tint && "inner" != this.options.zoomType && (this.zoomTint.css({top: 0}), this.zoomTint.css({left: 0})), this.options.responsive && !this.options.scrollZoom && this.options.showLens && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.largeWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "lens" != this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight), this.options.tint && (this.zoomTintImage.css("width", this.nzWidth), this.zoomTintImage.css("height", this.nzHeight))), "lens" == this.options.zoomType && this.zoomLens.css({
                width: String(this.options.lensSize) + "px",
                height: String(this.options.lensSize) + "px"
            })), this.zoomContainer.css({top: this.nzOffset.top}), this.zoomContainer.css({left: this.nzOffset.left}), this.mouseLeft = parseInt(t.pageX - this.nzOffset.left), this.mouseTop = parseInt(t.pageY - this.nzOffset.top), "window" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.zoomLens.height() / 2, this.Eboppos = this.mouseTop > this.nzHeight - this.zoomLens.height() / 2 - 2 * this.options.lensBorderSize, this.Eloppos = this.mouseLeft < 0 + this.zoomLens.width() / 2, this.Eroppos = this.mouseLeft > this.nzWidth - this.zoomLens.width() / 2 - 2 * this.options.lensBorderSize), "inner" == this.options.zoomType && (this.Etoppos = this.mouseTop < this.nzHeight / 2 / this.heightRatio, this.Eboppos = this.mouseTop > this.nzHeight - this.nzHeight / 2 / this.heightRatio, this.Eloppos = this.mouseLeft < 0 + this.nzWidth / 2 / this.widthRatio, this.Eroppos = this.mouseLeft > this.nzWidth - this.nzWidth / 2 / this.widthRatio - 2 * this.options.lensBorderSize), 0 >= this.mouseLeft || 0 > this.mouseTop || this.mouseLeft > this.nzWidth || this.mouseTop > this.nzHeight ? this.setElements("hide") : (this.options.showLens && (this.lensLeftPos = String(this.mouseLeft - this.zoomLens.width() / 2), this.lensTopPos = String(this.mouseTop - this.zoomLens.height() / 2)), this.Etoppos && (this.lensTopPos = 0), this.Eloppos && (this.tintpos = this.lensLeftPos = this.windowLeftPos = 0), "window" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), "inner" == this.options.zoomType && (this.Eboppos && (this.lensTopPos = Math.max(this.nzHeight - 2 * this.options.lensBorderSize, 0)), this.Eroppos && (this.lensLeftPos = this.nzWidth - this.nzWidth - 2 * this.options.lensBorderSize)), "lens" == this.options.zoomType && (this.windowLeftPos = String(-1 * ((t.pageX - this.nzOffset.left) * this.widthRatio - this.zoomLens.width() / 2)), this.windowTopPos = String(-1 * ((t.pageY - this.nzOffset.top) * this.heightRatio - this.zoomLens.height() / 2)), this.zoomLens.css({backgroundPosition: this.windowLeftPos + "px " + this.windowTopPos + "px"}), this.changeBgSize && (this.nzHeight > this.nzWidth ? ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvalueheight + "px " + this.largeHeight / this.newvalueheight + "px"})) : ("lens" == this.options.zoomType && this.zoomLens.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"}), this.zoomWindow.css({"background-size": this.largeWidth / this.newvaluewidth + "px " + this.largeHeight / this.newvaluewidth + "px"})), this.changeBgSize = !1), this.setWindowPostition(t)), this.options.tint && "inner" != this.options.zoomType && this.setTintPosition(t), "window" == this.options.zoomType && this.setWindowPostition(t), "inner" == this.options.zoomType && this.setWindowPostition(t), this.options.showLens && (this.fullwidth && "lens" != this.options.zoomType && (this.lensLeftPos = 0), this.zoomLens.css({
                left: this.lensLeftPos + "px",
                top: this.lensTopPos + "px"
            })))
        }, showHideWindow: function (t) {
            "show" != t || this.isWindowActive || (this.options.zoomWindowFadeIn ? this.zoomWindow.stop(!0, !0, !1).fadeIn(this.options.zoomWindowFadeIn) : this.zoomWindow.show(), this.isWindowActive = !0), "hide" == t && this.isWindowActive && (this.options.zoomWindowFadeOut ? this.zoomWindow.stop(!0, !0).fadeOut(this.options.zoomWindowFadeOut) : this.zoomWindow.hide(), this.isWindowActive = !1)
        }, showHideLens: function (t) {
            "show" != t || this.isLensActive || (this.options.lensFadeIn ? this.zoomLens.stop(!0, !0, !1).fadeIn(this.options.lensFadeIn) : this.zoomLens.show(), this.isLensActive = !0), "hide" == t && this.isLensActive && (this.options.lensFadeOut ? this.zoomLens.stop(!0, !0).fadeOut(this.options.lensFadeOut) : this.zoomLens.hide(), this.isLensActive = !1)
        }, showHideTint: function (t) {
            "show" != t || this.isTintActive || (this.options.zoomTintFadeIn ? this.zoomTint.css({opacity: this.options.tintOpacity}).animate().stop(!0, !0).fadeIn("slow") : (this.zoomTint.css({opacity: this.options.tintOpacity}).animate(), this.zoomTint.show()), this.isTintActive = !0), "hide" == t && this.isTintActive && (this.options.zoomTintFadeOut ? this.zoomTint.stop(!0, !0).fadeOut(this.options.zoomTintFadeOut) : this.zoomTint.hide(), this.isTintActive = !1)
        }, setLensPostition: function (t) {
        }, setWindowPostition: function (e) {
            var i = this;
            if (isNaN(i.options.zoomWindowPosition)) i.externalContainer = t("#" + i.options.zoomWindowPosition), i.externalContainerWidth = i.externalContainer.width(), i.externalContainerHeight = i.externalContainer.height(), i.externalContainerOffset = i.externalContainer.offset(), i.windowOffsetTop = i.externalContainerOffset.top, i.windowOffsetLeft = i.externalContainerOffset.left; else switch (i.options.zoomWindowPosition) {
                case 1:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = +i.nzWidth;
                    break;
                case 2:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = i.nzWidth);
                    break;
                case 3:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = i.nzWidth;
                    break;
                case 4:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth;
                    break;
                case 5:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                    break;
                case 6:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                    break;
                case 7:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = 0;
                    break;
                case 8:
                    i.windowOffsetTop = i.nzHeight, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 9:
                    i.windowOffsetTop = i.nzHeight - i.zoomWindow.height() - 2 * i.options.borderSize, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 10:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.options.zoomWindowHeight / 2 - i.nzHeight / 2), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize));
                    break;
                case 11:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 12:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.zoomWindow.width() + 2 * i.options.borderSize);
                    break;
                case 13:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = 0;
                    break;
                case 14:
                    i.options.zoomWindowHeight > i.nzHeight && (i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = -1 * (i.options.zoomWindowWidth / 2 - i.nzWidth / 2 + 2 * i.options.borderSize));
                    break;
                case 15:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth - i.zoomWindow.width() - 2 * i.options.borderSize;
                    break;
                case 16:
                    i.windowOffsetTop = -1 * (i.zoomWindow.height() + 2 * i.options.borderSize), i.windowOffsetLeft = i.nzWidth;
                    break;
                default:
                    i.windowOffsetTop = i.options.zoomWindowOffety, i.windowOffsetLeft = i.nzWidth
            }
            i.isWindowSet = !0, i.windowOffsetTop += i.options.zoomWindowOffety, i.windowOffsetLeft += i.options.zoomWindowOffetx, i.zoomWindow.css({top: i.windowOffsetTop}), i.zoomWindow.css({left: i.windowOffsetLeft}), "inner" == i.options.zoomType && (i.zoomWindow.css({top: 0}), i.zoomWindow.css({left: 0})), i.windowLeftPos = String(-1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2)), i.windowTopPos = String(-1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2)), i.Etoppos && (i.windowTopPos = 0), i.Eloppos && (i.windowLeftPos = 0), i.Eboppos && (i.windowTopPos = -1 * (i.largeHeight / i.currentZoomLevel - i.zoomWindow.height())), i.Eroppos && (i.windowLeftPos = -1 * (i.largeWidth / i.currentZoomLevel - i.zoomWindow.width())), i.fullheight && (i.windowTopPos = 0), i.fullwidth && (i.windowLeftPos = 0), "window" != i.options.zoomType && "inner" != i.options.zoomType || (1 == i.zoomLock && (1 >= i.widthRatio && (i.windowLeftPos = 0), 1 >= i.heightRatio && (i.windowTopPos = 0)), i.largeHeight < i.options.zoomWindowHeight && (i.windowTopPos = 0), i.largeWidth < i.options.zoomWindowWidth && (i.windowLeftPos = 0), i.options.easing ? (i.xp || (i.xp = 0), i.yp || (i.yp = 0), i.loop || (i.loop = setInterval(function () {
                i.xp += (i.windowLeftPos - i.xp) / i.options.easingAmount, i.yp += (i.windowTopPos - i.yp) / i.options.easingAmount, i.scrollingLock ? (clearInterval(i.loop), i.xp = i.windowLeftPos, i.yp = i.windowTopPos, i.xp = -1 * ((e.pageX - i.nzOffset.left) * i.widthRatio - i.zoomWindow.width() / 2), i.yp = -1 * ((e.pageY - i.nzOffset.top) * i.heightRatio - i.zoomWindow.height() / 2), i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" != i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"}), i.scrollingLock = !1, i.loop = !1) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" != i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.xp + "px " + i.yp + "px"}))
            }, 16))) : (i.changeBgSize && (i.nzHeight > i.nzWidth ? ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"}), i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})) : ("lens" == i.options.zoomType && i.zoomLens.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}), i.largeHeight / i.newvaluewidth < i.options.zoomWindowHeight ? i.zoomWindow.css({"background-size": i.largeWidth / i.newvaluewidth + "px " + i.largeHeight / i.newvaluewidth + "px"}) : i.zoomWindow.css({"background-size": i.largeWidth / i.newvalueheight + "px " + i.largeHeight / i.newvalueheight + "px"})), i.changeBgSize = !1), i.zoomWindow.css({backgroundPosition: i.windowLeftPos + "px " + i.windowTopPos + "px"})))
        }, setTintPosition: function (t) {
            this.nzOffset = this.$elem.offset(), this.tintpos = String(-1 * (t.pageX - this.nzOffset.left - this.zoomLens.width() / 2)), this.tintposy = String(-1 * (t.pageY - this.nzOffset.top - this.zoomLens.height() / 2)), this.Etoppos && (this.tintposy = 0), this.Eloppos && (this.tintpos = 0), this.Eboppos && (this.tintposy = -1 * (this.nzHeight - this.zoomLens.height() - 2 * this.options.lensBorderSize)), this.Eroppos && (this.tintpos = -1 * (this.nzWidth - this.zoomLens.width() - 2 * this.options.lensBorderSize)), this.options.tint && (this.fullheight && (this.tintposy = 0), this.fullwidth && (this.tintpos = 0), this.zoomTintImage.css({left: this.tintpos + "px"}), this.zoomTintImage.css({top: this.tintposy + "px"}))
        }, swaptheimage: function (e, i) {
            var s = this, o = new Image;
            s.options.loadingIcon && (s.spinner = t("<div style=\"background: url('" + s.options.loadingIcon + "') no-repeat center;height:" + s.nzHeight + "px;width:" + s.nzWidth + 'px;z-index: 2000;position: absolute; background-position: center center;"></div>'), s.$elem.after(s.spinner)), s.options.onImageSwap(s.$elem), o.onload = function () {
                s.largeWidth = o.width, s.largeHeight = o.height, s.zoomImage = i, s.zoomWindow.css({"background-size": s.largeWidth + "px " + s.largeHeight + "px"}), s.zoomWindow.css({"background-size": s.largeWidth + "px " + s.largeHeight + "px"}), s.swapAction(e, i)
            }, o.src = i
        }, swapAction: function (e, i) {
            var s = this, o = new Image;
            if (o.onload = function () {
                s.nzHeight = o.height, s.nzWidth = o.width, s.options.onImageSwapComplete(s.$elem), s.doneCallback()
            }, o.src = e, s.currentZoomLevel = s.options.zoomLevel, s.options.maxZoomLevel = !1, "lens" == s.options.zoomType && s.zoomLens.css({backgroundImage: "url('" + i + "')"}), "window" == s.options.zoomType && s.zoomWindow.css({backgroundImage: "url('" + i + "')"}), "inner" == s.options.zoomType && s.zoomWindow.css({backgroundImage: "url('" + i + "')"}), s.currentImage = i, s.options.imageCrossfade) {
                var n = s.$elem, a = n.clone();
                s.$elem.attr("src", e), s.$elem.after(a), a.stop(!0).fadeOut(s.options.imageCrossfade, function () {
                    t(this).remove()
                }), s.$elem.width("auto").removeAttr("width"), s.$elem.height("auto").removeAttr("height"), n.fadeIn(s.options.imageCrossfade), s.options.tint && "inner" != s.options.zoomType && (a = (n = s.zoomTintImage).clone(), s.zoomTintImage.attr("src", i), s.zoomTintImage.after(a), a.stop(!0).fadeOut(s.options.imageCrossfade, function () {
                    t(this).remove()
                }), n.fadeIn(s.options.imageCrossfade), s.zoomTint.css({height: s.$elem.height()}), s.zoomTint.css({width: s.$elem.width()})), s.zoomContainer.css("height", s.$elem.height()), s.zoomContainer.css("width", s.$elem.width()), "inner" != s.options.zoomType || s.options.constrainType || (s.zoomWrap.parent().css("height", s.$elem.height()), s.zoomWrap.parent().css("width", s.$elem.width()), s.zoomWindow.css("height", s.$elem.height()), s.zoomWindow.css("width", s.$elem.width()))
            } else s.$elem.attr("src", e), s.options.tint && (s.zoomTintImage.attr("src", i), s.zoomTintImage.attr("height", s.$elem.height()), s.zoomTintImage.css({height: s.$elem.height()}), s.zoomTint.css({height: s.$elem.height()})), s.zoomContainer.css("height", s.$elem.height()), s.zoomContainer.css("width", s.$elem.width());
            s.options.imageCrossfade && (s.zoomWrap.css("height", s.$elem.height()), s.zoomWrap.css("width", s.$elem.width())), s.options.constrainType && ("height" == s.options.constrainType && (s.zoomContainer.css("height", s.options.constrainSize), s.zoomContainer.css("width", "auto"), s.options.imageCrossfade ? (s.zoomWrap.css("height", s.options.constrainSize), s.zoomWrap.css("width", "auto"), s.constwidth = s.zoomWrap.width()) : (s.$elem.css("height", s.options.constrainSize), s.$elem.css("width", "auto"), s.constwidth = s.$elem.width()), "inner" == s.options.zoomType && (s.zoomWrap.parent().css("height", s.options.constrainSize), s.zoomWrap.parent().css("width", s.constwidth), s.zoomWindow.css("height", s.options.constrainSize), s.zoomWindow.css("width", s.constwidth)), s.options.tint && (s.tintContainer.css("height", s.options.constrainSize), s.tintContainer.css("width", s.constwidth), s.zoomTint.css("height", s.options.constrainSize), s.zoomTint.css("width", s.constwidth), s.zoomTintImage.css("height", s.options.constrainSize), s.zoomTintImage.css("width", s.constwidth))), "width" == s.options.constrainType && (s.zoomContainer.css("height", "auto"), s.zoomContainer.css("width", s.options.constrainSize), s.options.imageCrossfade ? (s.zoomWrap.css("height", "auto"), s.zoomWrap.css("width", s.options.constrainSize), s.constheight = s.zoomWrap.height()) : (s.$elem.css("height", "auto"), s.$elem.css("width", s.options.constrainSize), s.constheight = s.$elem.height()), "inner" == s.options.zoomType && (s.zoomWrap.parent().css("height", s.constheight), s.zoomWrap.parent().css("width", s.options.constrainSize), s.zoomWindow.css("height", s.constheight), s.zoomWindow.css("width", s.options.constrainSize)), s.options.tint && (s.tintContainer.css("height", s.constheight), s.tintContainer.css("width", s.options.constrainSize), s.zoomTint.css("height", s.constheight), s.zoomTint.css("width", s.options.constrainSize), s.zoomTintImage.css("height", s.constheight), s.zoomTintImage.css("width", s.options.constrainSize))))
        }, doneCallback: function () {
            this.options.loadingIcon && this.spinner.hide(), this.nzOffset = this.$elem.offset(), this.nzWidth = this.$elem.width(), this.nzHeight = this.$elem.height(), this.currentZoomLevel = this.options.zoomLevel, this.widthRatio = this.largeWidth / this.nzWidth, this.heightRatio = this.largeHeight / this.nzHeight, "window" == this.options.zoomType && (lensHeight = this.nzHeight < this.options.zoomWindowWidth / this.widthRatio ? this.nzHeight : String(this.options.zoomWindowHeight / this.heightRatio), lensWidth = this.options.zoomWindowWidth < this.options.zoomWindowWidth ? this.nzWidth : this.options.zoomWindowWidth / this.widthRatio, this.zoomLens && (this.zoomLens.css("width", lensWidth), this.zoomLens.css("height", lensHeight)))
        }, getCurrentImage: function () {
            return this.zoomImage
        }, getGalleryList: function () {
            var e = this;
            return e.gallerylist = [], e.options.gallery ? t("#" + e.options.gallery + " a").each(function () {
                var i = "";
                t(this).data("zoom-image") ? i = t(this).data("zoom-image") : t(this).data("image") && (i = t(this).data("image")), i == e.zoomImage ? e.gallerylist.unshift({
                    href: "" + i,
                    title: t(this).find("img").attr("title")
                }) : e.gallerylist.push({href: "" + i, title: t(this).find("img").attr("title")})
            }) : e.gallerylist.push({href: "" + e.zoomImage, title: t(this).find("img").attr("title")}), e.gallerylist
        }, changeZoomLevel: function (t) {
            this.scrollingLock = !0, this.newvalue = parseFloat(t).toFixed(2), newvalue = parseFloat(t).toFixed(2), maxheightnewvalue = this.largeHeight / (this.options.zoomWindowHeight / this.nzHeight * this.nzHeight), maxwidthtnewvalue = this.largeWidth / (this.options.zoomWindowWidth / this.nzWidth * this.nzWidth), "inner" != this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / maxheightnewvalue / this.nzHeight, this.newvalueheight = maxheightnewvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / maxwidthtnewvalue / this.nzWidth, this.newvaluewidth = maxwidthtnewvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1), "lens" == this.options.zoomType && (maxheightnewvalue <= newvalue ? (this.fullwidth = !0, this.newvaluewidth = maxheightnewvalue) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1))), "inner" == this.options.zoomType && (maxheightnewvalue = parseFloat(this.largeHeight / this.nzHeight).toFixed(2), maxwidthtnewvalue = parseFloat(this.largeWidth / this.nzWidth).toFixed(2), newvalue > maxheightnewvalue && (newvalue = maxheightnewvalue), newvalue > maxwidthtnewvalue && (newvalue = maxwidthtnewvalue), maxheightnewvalue <= newvalue ? (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !0) : (this.heightRatio = this.largeHeight / newvalue / this.nzHeight, this.newvalueheight = newvalue > maxheightnewvalue ? maxheightnewvalue : newvalue, this.fullheight = !1), maxwidthtnewvalue <= newvalue ? (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue > maxwidthtnewvalue ? maxwidthtnewvalue : newvalue, this.fullwidth = !0) : (this.widthRatio = this.largeWidth / newvalue / this.nzWidth, this.newvaluewidth = newvalue, this.fullwidth = !1)), scrcontinue = !1, "inner" == this.options.zoomType && (this.nzWidth > this.nzHeight && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0)), this.nzHeight > this.nzWidth && (this.newvaluewidth <= maxwidthtnewvalue ? scrcontinue = !0 : (scrcontinue = !1, this.fullwidth = this.fullheight = !0))), "inner" != this.options.zoomType && (scrcontinue = !0), scrcontinue && (this.zoomLock = 0, this.changeZoom = !0, this.options.zoomWindowHeight / this.heightRatio <= this.nzHeight && (this.currentZoomLevel = this.newvalueheight, "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({height: String(this.options.zoomWindowHeight / this.heightRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), this.options.zoomWindowWidth / this.widthRatio <= this.nzWidth && ("inner" != this.options.zoomType && this.newvaluewidth > this.newvalueheight && (this.currentZoomLevel = this.newvaluewidth), "lens" != this.options.zoomType && "inner" != this.options.zoomType && (this.changeBgSize = !0, this.zoomLens.css({width: String(this.options.zoomWindowWidth / this.widthRatio) + "px"})), "lens" == this.options.zoomType || "inner" == this.options.zoomType) && (this.changeBgSize = !0), "inner" == this.options.zoomType && (this.changeBgSize = !0, this.nzWidth > this.nzHeight && (this.currentZoomLevel = this.newvaluewidth), this.nzHeight > this.nzWidth && (this.currentZoomLevel = this.newvaluewidth))), this.setPosition(this.currentLoc)
        }, closeAll: function () {
            self.zoomWindow && self.zoomWindow.hide(), self.zoomLens && self.zoomLens.hide(), self.zoomTint && self.zoomTint.hide()
        }, changeState: function (t) {
            "enable" == t && (this.options.zoomEnabled = !0), "disable" == t && (this.options.zoomEnabled = !1)
        }
    };
    t.fn.elevateZoom = function (e) {
        return this.each(function () {
            var i = Object.create(o);
            i.init(e, this), t.data(this, "elevateZoom", i)
        })
    }, t.fn.elevateZoom.options = {
        zoomActivation: "hover",
        zoomEnabled: !0,
        preloading: 1,
        zoomLevel: 1,
        scrollZoom: !1,
        scrollZoomIncrement: .1,
        minZoomLevel: !1,
        maxZoomLevel: !1,
        easing: !1,
        easingAmount: 12,
        lensSize: 200,
        zoomWindowWidth: 400,
        zoomWindowHeight: 400,
        zoomWindowOffetx: 0,
        zoomWindowOffety: 0,
        zoomWindowPosition: 1,
        zoomWindowBgColour: "#fff",
        lensFadeIn: !1,
        lensFadeOut: !1,
        debug: !1,
        zoomWindowFadeIn: !1,
        zoomWindowFadeOut: !1,
        zoomWindowAlwaysShow: !1,
        zoomTintFadeIn: !1,
        zoomTintFadeOut: !1,
        borderSize: 4,
        showLens: !0,
        borderColour: "#888",
        lensBorderSize: 1,
        lensBorderColour: "#000",
        lensShape: "square",
        zoomType: "window",
        containLensZoom: !1,
        lensColour: "white",
        lensOpacity: .4,
        lenszoom: !1,
        tint: !1,
        tintColour: "#333",
        tintOpacity: .4,
        gallery: !1,
        galleryActiveClass: "zoomGalleryActive",
        imageCrossfade: !1,
        constrainType: !1,
        constrainSize: !1,
        loadingIcon: !1,
        cursor: "default",
        responsive: !0,
        onComplete: t.noop,
        onZoomedImageLoaded: function () {
        },
        onImageSwap: t.noop,
        onImageSwapComplete: t.noop
    }
}(jQuery, window, document), function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = e() : "function" == typeof define && define.amd ? define(e) : t.StickySidebar = e()
}(this, function () {
    "use strict";

    function t(t) {
        return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t
    }

    function e(t, e) {
        return t(e = {exports: {}}, e.exports), e.exports
    }

    "undefined" != typeof window ? window : "undefined" != typeof global ? global : "undefined" != typeof self && self;
    var i = e(function (t, e) {
        !function (t) {
            Object.defineProperty(t, "__esModule", {value: !0});
            var e, i, s = function () {
                function t(t, e) {
                    for (var i = 0; i < e.length; i++) {
                        var s = e[i];
                        s.enumerable = s.enumerable || !1, s.configurable = !0, "value" in s && (s.writable = !0), Object.defineProperty(t, s.key, s)
                    }
                }

                return function (e, i, s) {
                    return i && t(e.prototype, i), s && t(e, s), e
                }
            }(), o = (e = ".stickySidebar", i = {
                topSpacing: 0,
                bottomSpacing: 0,
                containerSelector: !1,
                innerWrapperSelector: ".inner-wrapper-sticky",
                stickyClass: "is-affixed",
                resizeSensor: !0,
                minWidth: !1
            }, function () {
                function t(e) {
                    var s = this, o = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : {};
                    if (function (e, i) {
                        if (!(e instanceof t)) throw new TypeError("Cannot call a class as a function")
                    }(this), this.options = t.extend(i, o), this.sidebar = "string" == typeof e ? document.querySelector(e) : e, void 0 === this.sidebar) throw new Error("There is no specific sidebar element.");
                    this.sidebarInner = !1, this.container = this.sidebar.parentElement, this.affixedType = "STATIC", this.direction = "down", this.support = {
                        transform: !1,
                        transform3d: !1
                    }, this._initialized = !1, this._reStyle = !1, this._breakpoint = !1, this.dimensions = {
                        translateY: 0,
                        maxTranslateY: 0,
                        topSpacing: 0,
                        lastTopSpacing: 0,
                        bottomSpacing: 0,
                        lastBottomSpacing: 0,
                        sidebarHeight: 0,
                        sidebarWidth: 0,
                        containerTop: 0,
                        containerHeight: 0,
                        viewportHeight: 0,
                        viewportTop: 0,
                        lastViewportTop: 0
                    }, ["handleEvent"].forEach(function (t) {
                        s[t] = s[t].bind(s)
                    }), this.initialize()
                }

                return s(t, [{
                    key: "initialize", value: function () {
                        var t = this;
                        if (this._setSupportFeatures(), this.options.innerWrapperSelector && (this.sidebarInner = this.sidebar.querySelector(this.options.innerWrapperSelector), null === this.sidebarInner && (this.sidebarInner = !1)), !this.sidebarInner) {
                            var e = document.createElement("div");
                            for (e.setAttribute("class", "inner-wrapper-sticky"), this.sidebar.appendChild(e); this.sidebar.firstChild != e;) e.appendChild(this.sidebar.firstChild);
                            this.sidebarInner = this.sidebar.querySelector(".inner-wrapper-sticky")
                        }
                        if (this.options.containerSelector) {
                            var i = document.querySelectorAll(this.options.containerSelector);
                            if ((i = Array.prototype.slice.call(i)).forEach(function (e, i) {
                                e.contains(t.sidebar) && (t.container = e)
                            }), !i.length) throw new Error("The container does not contains on the sidebar.")
                        }
                        "function" != typeof this.options.topSpacing && (this.options.topSpacing = parseInt(this.options.topSpacing) || 0), "function" != typeof this.options.bottomSpacing && (this.options.bottomSpacing = parseInt(this.options.bottomSpacing) || 0), this._widthBreakpoint(), this.calcDimensions(), this.stickyPosition(), this.bindEvents(), this._initialized = !0
                    }
                }, {
                    key: "bindEvents", value: function () {
                        window.addEventListener("resize", this, {
                            passive: !0,
                            capture: !1
                        }), window.addEventListener("scroll", this, {
                            passive: !0,
                            capture: !1
                        }), this.sidebar.addEventListener("update" + e, this), this.options.resizeSensor && "undefined" != typeof ResizeSensor && (new ResizeSensor(this.sidebarInner, this.handleEvent), new ResizeSensor(this.container, this.handleEvent))
                    }
                }, {
                    key: "handleEvent", value: function (t) {
                        this.updateSticky(t)
                    }
                }, {
                    key: "calcDimensions", value: function () {
                        if (!this._breakpoint) {
                            var e = this.dimensions;
                            e.containerTop = t.offsetRelative(this.container).top, e.containerHeight = this.container.clientHeight, e.containerBottom = e.containerTop + e.containerHeight, e.sidebarHeight = this.sidebarInner.offsetHeight, e.sidebarWidth = this.sidebarInner.offsetWidth, e.viewportHeight = window.innerHeight, e.maxTranslateY = e.containerHeight - e.sidebarHeight, this._calcDimensionsWithScroll()
                        }
                    }
                }, {
                    key: "_calcDimensionsWithScroll", value: function () {
                        var e = this.dimensions;
                        e.sidebarLeft = t.offsetRelative(this.sidebar).left, e.viewportTop = document.documentElement.scrollTop || document.body.scrollTop, e.viewportBottom = e.viewportTop + e.viewportHeight, e.viewportLeft = document.documentElement.scrollLeft || document.body.scrollLeft, e.topSpacing = this.options.topSpacing, e.bottomSpacing = this.options.bottomSpacing, "function" == typeof e.topSpacing && (e.topSpacing = parseInt(e.topSpacing(this.sidebar)) || 0), "function" == typeof e.bottomSpacing && (e.bottomSpacing = parseInt(e.bottomSpacing(this.sidebar)) || 0), "VIEWPORT-TOP" === this.affixedType ? e.topSpacing < e.lastTopSpacing && (e.translateY += e.lastTopSpacing - e.topSpacing, this._reStyle = !0) : "VIEWPORT-BOTTOM" === this.affixedType && e.bottomSpacing < e.lastBottomSpacing && (e.translateY += e.lastBottomSpacing - e.bottomSpacing, this._reStyle = !0), e.lastTopSpacing = e.topSpacing, e.lastBottomSpacing = e.bottomSpacing
                    }
                }, {
                    key: "isSidebarFitsViewport", value: function () {
                        var t = this.dimensions,
                            e = "down" === this.scrollDirection ? t.lastBottomSpacing : t.lastTopSpacing;
                        return this.dimensions.sidebarHeight + e < this.dimensions.viewportHeight
                    }
                }, {
                    key: "observeScrollDir", value: function () {
                        var t = this.dimensions;
                        if (t.lastViewportTop !== t.viewportTop) {
                            var e = "down" === this.direction ? Math.min : Math.max;
                            t.viewportTop === e(t.viewportTop, t.lastViewportTop) && (this.direction = "down" === this.direction ? "up" : "down")
                        }
                    }
                }, {
                    key: "getAffixType", value: function () {
                        this._calcDimensionsWithScroll();
                        var t = this.dimensions, e = t.viewportTop + t.topSpacing, i = this.affixedType;
                        return e <= t.containerTop || t.containerHeight <= t.sidebarHeight ? (t.translateY = 0, i = "STATIC") : i = "up" === this.direction ? this._getAffixTypeScrollingUp() : this._getAffixTypeScrollingDown(), t.translateY = Math.max(0, t.translateY), t.translateY = Math.min(t.containerHeight, t.translateY), t.translateY = Math.round(t.translateY), t.lastViewportTop = t.viewportTop, i
                    }
                }, {
                    key: "_getAffixTypeScrollingDown", value: function () {
                        var t = this.dimensions, e = t.sidebarHeight + t.containerTop, i = t.viewportTop + t.topSpacing,
                            s = t.viewportBottom - t.bottomSpacing, o = this.affixedType;
                        return this.isSidebarFitsViewport() ? t.sidebarHeight + i >= t.containerBottom ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : i >= t.containerTop && (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : e + t.translateY <= s ? (t.translateY = s - e, o = "VIEWPORT-BOTTOM") : t.containerTop + t.translateY <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                    }
                }, {
                    key: "_getAffixTypeScrollingUp", value: function () {
                        var t = this.dimensions, e = t.sidebarHeight + t.containerTop, i = t.viewportTop + t.topSpacing,
                            s = t.viewportBottom - t.bottomSpacing, o = this.affixedType;
                        return i <= t.translateY + t.containerTop ? (t.translateY = i - t.containerTop, o = "VIEWPORT-TOP") : t.containerBottom <= s ? (t.translateY = t.containerBottom - e, o = "CONTAINER-BOTTOM") : this.isSidebarFitsViewport() || t.containerTop <= i && 0 !== t.translateY && t.maxTranslateY !== t.translateY && (o = "VIEWPORT-UNBOTTOM"), o
                    }
                }, {
                    key: "_getStyle", value: function (e) {
                        if (void 0 !== e) {
                            var i = {inner: {}, outer: {}}, s = this.dimensions;
                            switch (e) {
                                case "VIEWPORT-TOP":
                                    i.inner = {
                                        position: "fixed",
                                        top: s.topSpacing,
                                        left: s.sidebarLeft - s.viewportLeft,
                                        width: s.sidebarWidth
                                    };
                                    break;
                                case "VIEWPORT-BOTTOM":
                                    i.inner = {
                                        position: "fixed",
                                        top: "auto",
                                        left: s.sidebarLeft,
                                        bottom: s.bottomSpacing,
                                        width: s.sidebarWidth
                                    };
                                    break;
                                case "CONTAINER-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                    var o = this._getTranslate(0, s.translateY + "px");
                                    i.inner = o ? {transform: o} : {
                                        position: "absolute",
                                        top: s.translateY,
                                        width: s.sidebarWidth
                                    }
                            }
                            switch (e) {
                                case "VIEWPORT-TOP":
                                case "VIEWPORT-BOTTOM":
                                case "VIEWPORT-UNBOTTOM":
                                case "CONTAINER-BOTTOM":
                                    i.outer = {height: s.sidebarHeight, position: "relative"}
                            }
                            return i.outer = t.extend({
                                height: "",
                                position: ""
                            }, i.outer), i.inner = t.extend({
                                position: "relative",
                                top: "",
                                left: "",
                                bottom: "",
                                width: "",
                                transform: ""
                            }, i.inner), i
                        }
                    }
                }, {
                    key: "stickyPosition", value: function (i) {
                        if (!this._breakpoint) {
                            i = this._reStyle || i || !1, this.options.topSpacing, this.options.bottomSpacing;
                            var s = this.getAffixType(), o = this._getStyle(s);
                            if ((this.affixedType != s || i) && s) {
                                var n = "affix." + s.toLowerCase().replace("viewport-", "") + e;
                                for (var a in t.eventTrigger(this.sidebar, n), "STATIC" === s ? t.removeClass(this.sidebar, this.options.stickyClass) : t.addClass(this.sidebar, this.options.stickyClass), o.outer) {
                                    var r = "number" == typeof o.outer[a] ? "px" : "";
                                    this.sidebar.style[a] = o.outer[a] + r
                                }
                                for (var l in o.inner) {
                                    var h = "number" == typeof o.inner[l] ? "px" : "";
                                    this.sidebarInner.style[l] = o.inner[l] + h
                                }
                                var c = "affixed." + s.toLowerCase().replace("viewport-", "") + e;
                                t.eventTrigger(this.sidebar, c)
                            } else this._initialized && (this.sidebarInner.style.left = o.inner.left);
                            this.affixedType = s
                        }
                    }
                }, {
                    key: "_widthBreakpoint", value: function () {
                        window.innerWidth <= this.options.minWidth ? (this._breakpoint = !0, this.affixedType = "STATIC", this.sidebar.removeAttribute("style"), t.removeClass(this.sidebar, this.options.stickyClass), this.sidebarInner.removeAttribute("style")) : this._breakpoint = !1
                    }
                }, {
                    key: "updateSticky", value: function () {
                        var t, e = this, i = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : {};
                        this._running || (this._running = !0, t = i.type, requestAnimationFrame(function () {
                            switch (t) {
                                case "scroll":
                                    e._calcDimensionsWithScroll(), e.observeScrollDir(), e.stickyPosition();
                                    break;
                                case "resize":
                                default:
                                    e._widthBreakpoint(), e.calcDimensions(), e.stickyPosition(!0)
                            }
                            e._running = !1
                        }))
                    }
                }, {
                    key: "_setSupportFeatures", value: function () {
                        var e = this.support;
                        e.transform = t.supportTransform(), e.transform3d = t.supportTransform(!0)
                    }
                }, {
                    key: "_getTranslate", value: function () {
                        var t = 0 < arguments.length && void 0 !== arguments[0] ? arguments[0] : 0,
                            e = 1 < arguments.length && void 0 !== arguments[1] ? arguments[1] : 0,
                            i = 2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : 0;
                        return this.support.transform3d ? "translate3d(" + t + ", " + e + ", " + i + ")" : !!this.support.translate && "translate(" + t + ", " + e + ")"
                    }
                }, {
                    key: "destroy", value: function () {
                        window.removeEventListener("resize", this, {capture: !1}), window.removeEventListener("scroll", this, {capture: !1}), this.sidebar.classList.remove(this.options.stickyClass), this.sidebar.style.minHeight = "", this.sidebar.removeEventListener("update" + e, this);
                        var t = {inner: {}, outer: {}};
                        for (var i in t.inner = {
                            position: "",
                            top: "",
                            left: "",
                            bottom: "",
                            width: "",
                            transform: ""
                        }, t.outer = {height: "", position: ""}, t.outer) this.sidebar.style[i] = t.outer[i];
                        for (var s in t.inner) this.sidebarInner.style[s] = t.inner[s];
                        this.options.resizeSensor && "undefined" != typeof ResizeSensor && (ResizeSensor.detach(this.sidebarInner, this.handleEvent), ResizeSensor.detach(this.container, this.handleEvent))
                    }
                }], [{
                    key: "supportTransform", value: function (t) {
                        var e = !1, i = t ? "perspective" : "transform", s = i.charAt(0).toUpperCase() + i.slice(1),
                            o = document.createElement("support").style;
                        return (i + " " + ["Webkit", "Moz", "O", "ms"].join(s + " ") + s).split(" ").forEach(function (t, i) {
                            if (void 0 !== o[t]) return e = t, !1
                        }), e
                    }
                }, {
                    key: "eventTrigger", value: function (t, e, i) {
                        try {
                            var s = new CustomEvent(e, {detail: i})
                        } catch (t) {
                            (s = document.createEvent("CustomEvent")).initCustomEvent(e, !0, !0, i)
                        }
                        t.dispatchEvent(s)
                    }
                }, {
                    key: "extend", value: function (t, e) {
                        var i = {};
                        for (var s in t) void 0 !== e[s] ? i[s] = e[s] : i[s] = t[s];
                        return i
                    }
                }, {
                    key: "offsetRelative", value: function (t) {
                        var e = {left: 0, top: 0};
                        do {
                            var i = t.offsetTop, s = t.offsetLeft;
                            isNaN(i) || (e.top += i), isNaN(s) || (e.left += s), t = "BODY" === t.tagName ? t.parentElement : t.offsetParent
                        } while (t);
                        return e
                    }
                }, {
                    key: "addClass", value: function (e, i) {
                        t.hasClass(e, i) || (e.classList ? e.classList.add(i) : e.className += " " + i)
                    }
                }, {
                    key: "removeClass", value: function (e, i) {
                        t.hasClass(e, i) && (e.classList ? e.classList.remove(i) : e.className = e.className.replace(new RegExp("(^|\\b)" + i.split(" ").join("|") + "(\\b|$)", "gi"), " "))
                    }
                }, {
                    key: "hasClass", value: function (t, e) {
                        return t.classList ? t.classList.contains(e) : new RegExp("(^| )" + e + "( |$)", "gi").test(t.className)
                    }
                }, {
                    key: "defaults", get: function () {
                        return i
                    }
                }]), t
            }());
            t.default = o, window.StickySidebar = o
        }(e)
    });
    return t(i), t(e(function (t, e) {
        var s, o;
        o = (s = i) && s.__esModule ? s : {default: s}, function () {
            if ("undefined" != typeof window) {
                var t = window.$ || window.jQuery || window.Zepto, e = "stickySidebar";
                if (t) {
                    t.fn.stickySidebar = function (i) {
                        return this.each(function () {
                            var s = t(this), n = t(this).data(e);
                            if (n || (n = new o.default(this, "object" == typeof i && i), s.data(e, n)), "string" == typeof i) {
                                if (void 0 === n[i] && -1 === ["destroy", "updateSticky"].indexOf(i)) throw new Error('No method named "' + i + '"');
                                n[i]()
                            }
                        })
                    }, t.fn.stickySidebar.Constructor = o.default;
                    var i = t.fn.stickySidebar;
                    t.fn.stickySidebar.noConflict = function () {
                        return t.fn.stickySidebar = i, this
                    }
                }
            }
        }()
    }))
}), function (t) {
    t.fn.niceSelect = function (e) {
        function i(e) {
            e.after(t("<div></div>").addClass("nice-select").addClass(e.attr("class") || "").addClass(e.attr("disabled") ? "disabled" : "").attr("tabindex", e.attr("disabled") ? null : "0").html('<span class="current"></span><ul class="list"></ul>'));
            var i = e.next(), s = e.find("option"), o = e.find("option:selected");
            i.find(".current").html(o.data("display") || o.text()), s.each(function (e) {
                var s = t(this), o = s.data("display");
                i.find("ul").append(t("<li></li>").attr("data-value", s.val()).attr("data-display", o || null).addClass("option" + (s.is(":selected") ? " selected" : "") + (s.is(":disabled") ? " disabled" : "")).html(s.text()))
            })
        }

        if ("string" == typeof e) return "update" == e ? this.each(function () {
            var e = t(this), s = t(this).next(".nice-select"), o = s.hasClass("open");
            s.length && (s.remove(), i(e), o && e.next().trigger("click"))
        }) : "destroy" == e ? (this.each(function () {
            var e = t(this), i = t(this).next(".nice-select");
            i.length && (i.remove(), e.css("display", ""))
        }), 0 == t(".nice-select").length && t(document).off(".nice_select")) : console.log('Method "' + e + '" does not exist.'), this;
        this.hide(), this.each(function () {
            var e = t(this);
            e.next().hasClass("nice-select") || i(e)
        }), t(document).off(".nice_select"), t(document).on("click.nice_select", ".nice-select", function (e) {
            var i = t(this);
            t(".nice-select").not(i).removeClass("open"), i.toggleClass("open"), i.hasClass("open") ? (i.find(".option"), i.find(".focus").removeClass("focus"), i.find(".selected").addClass("focus")) : i.focus()
        }), t(document).on("click.nice_select", function (e) {
            0 === t(e.target).closest(".nice-select").length && t(".nice-select").removeClass("open").find(".option")
        }), t(document).on("click.nice_select", ".nice-select .option:not(.disabled)", function (e) {
            var i = t(this), s = i.closest(".nice-select");
            s.find(".selected").removeClass("selected"), i.addClass("selected");
            var o = i.data("display") || i.text();
            s.find(".current").text(o), s.prev("select").val(i.data("value")).trigger("change")
        }), t(document).on("keydown.nice_select", ".nice-select", function (e) {
            var i = t(this), s = t(i.find(".focus") || i.find(".list .option.selected"));
            if (32 == e.keyCode || 13 == e.keyCode) return i.hasClass("open") ? s.trigger("click") : i.trigger("click"), !1;
            if (40 == e.keyCode) {
                if (i.hasClass("open")) {
                    var o = s.nextAll(".option:not(.disabled)").first();
                    o.length > 0 && (i.find(".focus").removeClass("focus"), o.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (38 == e.keyCode) {
                if (i.hasClass("open")) {
                    var n = s.prevAll(".option:not(.disabled)").first();
                    n.length > 0 && (i.find(".focus").removeClass("focus"), n.addClass("focus"))
                } else i.trigger("click");
                return !1
            }
            if (27 == e.keyCode) i.hasClass("open") && i.trigger("click"); else if (9 == e.keyCode && i.hasClass("open")) return !1
        });
        var s = document.createElement("a").style;
        return s.cssText = "pointer-events:auto", "auto" !== s.pointerEvents && t("html").addClass("no-csspointerevents"), this
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : "object" == typeof exports ? module.exports = t(require("jquery")) : t(jQuery)
}(function (t) {
    var e = /\+/g;

    function i(t) {
        return o.raw ? t : encodeURIComponent(t)
    }

    function s(i, s) {
        var n = o.raw ? i : function (t) {
            0 === t.indexOf('"') && (t = t.slice(1, -1).replace(/\\"/g, '"').replace(/\\\\/g, "\\"));
            try {
                return t = decodeURIComponent(t.replace(e, " ")), o.json ? JSON.parse(t) : t
            } catch (t) {
            }
        }(i);
        return t.isFunction(s) ? s(n) : n
    }

    var o = t.cookie = function (e, n, a) {
        if (arguments.length > 1 && !t.isFunction(n)) {
            if ("number" == typeof (a = t.extend({}, o.defaults, a)).expires) {
                var r = a.expires, l = a.expires = new Date;
                l.setMilliseconds(l.getMilliseconds() + 864e5 * r)
            }
            return document.cookie = [i(e), "=", (h = n, i(o.json ? JSON.stringify(h) : String(h))), a.expires ? "; expires=" + a.expires.toUTCString() : "", a.path ? "; path=" + a.path : "", a.domain ? "; domain=" + a.domain : "", a.secure ? "; secure" : ""].join("")
        }
        for (var h, c, d = e ? void 0 : {}, u = document.cookie ? document.cookie.split("; ") : [], p = 0, f = u.length; p < f; p++) {
            var m = u[p].split("="), g = (c = m.shift(), o.raw ? c : decodeURIComponent(c)), v = m.join("=");
            if (e === g) {
                d = s(v, n);
                break
            }
            e || void 0 === (v = s(v)) || (d[g] = v)
        }
        return d
    };
    o.defaults = {}, t.removeCookie = function (e, i) {
        return t.cookie(e, "", t.extend({}, i, {expires: -1})), !t.cookie(e)
    }
}), function (t) {
    t.fn.bPopup = function (e, i) {
        function s() {
            f.modal && t('<div class="b-modal ' + m + '"></div>').css({
                backgroundColor: f.modalColor,
                position: "fixed",
                top: 0,
                right: 0,
                bottom: 0,
                left: 0,
                opacity: 0,
                zIndex: f.zIndex + M
            }).appendTo(f.appendTo).fadeTo(f.speed, f.opacity), u(), S.data("bPopup", f).data("id", m).css({
                left: "slideIn" == f.transition || "slideBack" == f.transition ? "slideBack" == f.transition ? z.scrollLeft() + D : -1 * (_ + k) : h(!(!f.follow[0] && y || b)),
                position: f.positionStyle || "absolute",
                top: "slideDown" == f.transition || "slideUp" == f.transition ? "slideUp" == f.transition ? z.scrollTop() + P : w + -1 * x : c(!(!f.follow[1] && v || b)),
                "z-index": f.zIndex + M + 1
            }).each(function () {
                f.appending && t(this).appendTo(f.appendTo)
            }), r(!0)
        }

        function o() {
            return f.modal && t(".b-modal." + S.data("id")).fadeTo(f.speed, 0, function () {
                t(this).remove()
            }), f.scrollBar || t("html").css("overflow", "auto"), t(".b-modal." + m).unbind("click"), z.unbind("keydown." + m), I.unbind("." + m).data("bPopup", 0 < I.data("bPopup") - 1 ? I.data("bPopup") - 1 : null), S.undelegate(".bClose, ." + f.closeClass, "click." + m, o).data("bPopup", null), clearTimeout(T), r(), !1
        }

        function n(e) {
            P = I.height(), D = I.width(), ((g = p()).x || g.y) && (clearTimeout(C), C = setTimeout(function () {
                u(), e = e || f.followSpeed;
                var i = {};
                g.x && (i.left = f.follow[0] ? h(!0) : "auto"), g.y && (i.top = f.follow[1] ? c(!0) : "auto"), S.dequeue().each(function () {
                    b ? t(this).css({left: _, top: w}) : t(this).animate(i, e, f.followEasing)
                })
            }, 50))
        }

        function a(t) {
            var e = t.width(), i = t.height(), s = {};
            f.contentContainer.css({
                height: i,
                width: e
            }), i >= S.height() && (s.height = S.height()), e >= S.width() && (s.width = S.width()), x = S.outerHeight(!0), k = S.outerWidth(!0), u(), f.contentContainer.css({
                height: "auto",
                width: "auto"
            }), s.left = h(!(!f.follow[0] && y || b)), s.top = c(!(!f.follow[1] && v || b)), S.animate(s, 250, function () {
                t.show(), g = p()
            })
        }

        function r(t) {
            function e(e) {
                S.css({display: "block", opacity: 1}).animate(e, f.speed, f.easing, function () {
                    l(t)
                })
            }

            switch (t ? f.transition : f.transitionClose || f.transition) {
                case "slideIn":
                    e({left: t ? h(!(!f.follow[0] && y || b)) : z.scrollLeft() - (k || S.outerWidth(!0)) - 200});
                    break;
                case "slideBack":
                    e({left: t ? h(!(!f.follow[0] && y || b)) : z.scrollLeft() + D + 200});
                    break;
                case "slideDown":
                    e({top: t ? c(!(!f.follow[1] && v || b)) : z.scrollTop() - (x || S.outerHeight(!0)) - 200});
                    break;
                case "slideUp":
                    e({top: t ? c(!(!f.follow[1] && v || b)) : z.scrollTop() + P + 200});
                    break;
                default:
                    S.stop().fadeTo(f.speed, t ? 1 : 0, function () {
                        l(t)
                    })
            }
        }

        function l(e) {
            e ? (I.data("bPopup", M), S.delegate(".bClose, ." + f.closeClass, "click." + m, o), f.modalClose && t(".b-modal." + m).css("cursor", "pointer").bind("click", o), W || !f.follow[0] && !f.follow[1] || I.bind("scroll." + m, function () {
                if (g.x || g.y) {
                    var t = {};
                    g.x && (t.left = f.follow[0] ? h(!b) : "auto"), g.y && (t.top = f.follow[1] ? c(!b) : "auto"), S.dequeue().animate(t, f.followSpeed, f.followEasing)
                }
            }).bind("resize." + m, function () {
                n()
            }), f.escClose && z.bind("keydown." + m, function (t) {
                27 == t.which && o()
            }), d(i), f.autoClose && (T = setTimeout(o, f.autoClose))) : (S.hide(), d(f.onClose), f.loadUrl && (f.contentContainer.empty(), S.css({
                height: "auto",
                width: "auto"
            })))
        }

        function h(t) {
            return t ? _ + z.scrollLeft() : _
        }

        function c(t) {
            return t ? w + z.scrollTop() : w
        }

        function d(e, i) {
            t.isFunction(e) && e.call(S, i)
        }

        function u() {
            w = v ? f.position[1] : Math.max(0, (P - S.outerHeight(!0)) / 2 - f.amsl), _ = y ? f.position[0] : (D - S.outerWidth(!0)) / 2, g = p()
        }

        function p() {
            return {x: D > S.outerWidth(!0), y: P > S.outerHeight(!0)}
        }

        t.isFunction(e) && (i = e, e = null);
        var f = t.extend({}, t.fn.bPopup.defaults, e);
        f.scrollBar || t("html").css("overflow", "hidden");
        var m, g, v, y, b, w, _, x, k, C, T, S = this, z = t(document), I = t(window), P = I.height(), D = I.width(),
            W = /OS 6(_\d)+/i.test(navigator.userAgent), M = 0;
        return S.close = function () {
            o()
        }, S.reposition = function (t) {
            n(t)
        }, S.each(function () {
            t(this).data("bPopup") || (d(f.onOpen), M = (I.data("bPopup") || 0) + 1, m = "__b-popup" + M + "__", v = "auto" !== f.position[1], y = "auto" !== f.position[0], b = "fixed" === f.positionStyle, x = S.outerHeight(!0), k = S.outerWidth(!0), f.loadUrl ? function () {
                switch (f.contentContainer = t(f.contentContainer || S), f.content) {
                    case "iframe":
                        var e = t('<iframe class="b-iframe" ' + f.iframeAttr + "></iframe>");
                        e.appendTo(f.contentContainer), x = S.outerHeight(!0), k = S.outerWidth(!0), s(), e.attr("src", f.loadUrl), d(f.loadCallback);
                        break;
                    case "image":
                        s(), t("<img />").load(function () {
                            d(f.loadCallback), a(t(this))
                        }).attr("src", f.loadUrl).hide().appendTo(f.contentContainer);
                        break;
                    default:
                        s(), t('<div class="b-ajax-wrapper"></div>').load(f.loadUrl, f.loadData, function (e, i, s) {
                            d(f.loadCallback, i), a(t(this))
                        }).hide().appendTo(f.contentContainer)
                }
            }() : s())
        })
    }, t.fn.bPopup.defaults = {
        amsl: 50,
        appending: !0,
        appendTo: "body",
        autoClose: !1,
        closeClass: "b-close",
        content: "ajax",
        contentContainer: !1,
        easing: "swing",
        escClose: !0,
        follow: [!0, !0],
        followEasing: "swing",
        followSpeed: 500,
        iframeAttr: 'scrolling="no" frameborder="0"',
        loadCallback: !1,
        loadData: !1,
        loadUrl: !1,
        modal: !0,
        modalClose: !0,
        modalColor: "#000",
        onClose: !1,
        onOpen: !1,
        opacity: .7,
        position: ["auto", "auto"],
        positionStyle: "absolute",
        scrollBar: !0,
        speed: 250,
        transition: "fadeIn",
        transitionClose: !1,
        zIndex: 9997
    }
}(jQuery), function (t, e, i) {
    "use strict";
    t.fn.scrollUp = function (e) {
        t.data(i.body, "scrollUp") || (t.data(i.body, "scrollUp", !0), t.fn.scrollUp.init(e))
    }, t.fn.scrollUp.init = function (s) {
        var o, n, a, r, l, h, c = t.fn.scrollUp.settings = t.extend({}, t.fn.scrollUp.defaults, s), d = !1;
        switch (h = c.scrollTrigger ? t(c.scrollTrigger) : t("<a/>", {
            id: c.scrollName,
            href: "#top"
        }), c.scrollTitle && h.attr("title", c.scrollTitle), h.appendTo("body"), c.scrollImg || c.scrollTrigger || h.html(c.scrollText), h.css({
            display: "none",
            position: "fixed",
            zIndex: c.zIndex
        }), c.activeOverlay && t("<div/>", {id: c.scrollName + "-active"}).css({
            position: "absolute",
            top: c.scrollDistance + "px",
            width: "100%",
            borderTop: "1px dotted" + c.activeOverlay,
            zIndex: c.zIndex
        }).appendTo("body"), c.animation) {
            case "fade":
                o = "fadeIn", n = "fadeOut", a = c.animationSpeed;
                break;
            case "slide":
                o = "slideDown", n = "slideUp", a = c.animationSpeed;
                break;
            default:
                o = "show", n = "hide", a = 0
        }
        r = "top" === c.scrollFrom ? c.scrollDistance : t(i).height() - t(e).height() - c.scrollDistance, t(e).scroll(function () {
            t(e).scrollTop() > r ? d || (h[o](a), d = !0) : d && (h[n](a), d = !1)
        }), c.scrollTarget ? "number" == typeof c.scrollTarget ? l = c.scrollTarget : "string" == typeof c.scrollTarget && (l = Math.floor(t(c.scrollTarget).offset().top)) : l = 0, h.click(function (e) {
            e.preventDefault(), t("html, body").animate({scrollTop: l}, c.scrollSpeed, c.easingType)
        })
    }, t.fn.scrollUp.defaults = {
        scrollName: "scrollUp",
        scrollDistance: 300,
        scrollFrom: "top",
        scrollSpeed: 300,
        easingType: "linear",
        animation: "fade",
        animationSpeed: 200,
        scrollTrigger: !1,
        scrollTarget: !1,
        scrollText: "Scroll to top",
        scrollTitle: !1,
        scrollImg: !1,
        activeOverlay: !1,
        zIndex: 2147483647
    }, t.fn.scrollUp.destroy = function (s) {
        t.removeData(i.body, "scrollUp"), t("#" + t.fn.scrollUp.settings.scrollName).remove(), t("#" + t.fn.scrollUp.settings.scrollName + "-active").remove(), t.fn.jquery.split(".")[1] >= 7 ? t(e).off("scroll", s) : t(e).unbind("scroll", s)
    }, t.scrollUp = t.fn.scrollUp
}(jQuery, window, document), function (t) {
    "use strict";
    "function" == typeof define && define.amd ? define(["jquery"], t) : t(jQuery)
}(function (t) {
    "use strict";
    var e = [], i = [], s = {precision: 100, elapse: !1, defer: !1};
    i.push(/^[0-9]*$/.source), i.push(/([0-9]{1,2}\/){2}[0-9]{4}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), i.push(/[0-9]{4}([\/\-][0-9]{1,2}){2}( [0-9]{1,2}(:[0-9]{2}){2})?/.source), i = new RegExp(i.join("|"));
    var o = {
        Y: "years",
        m: "months",
        n: "daysToMonth",
        d: "daysToWeek",
        w: "weeks",
        W: "weeksToMonth",
        H: "hours",
        M: "minutes",
        S: "seconds",
        D: "totalDays",
        I: "totalHours",
        N: "totalMinutes",
        T: "totalSeconds"
    }, n = function (i, o, n) {
        this.el = i, this.$el = t(i), this.interval = null, this.offset = {}, this.options = t.extend({}, s), this.firstTick = !0, this.instanceNumber = e.length, e.push(this), this.$el.data("countdown-instance", this.instanceNumber), n && ("function" == typeof n ? (this.$el.on("update.countdown", n), this.$el.on("stoped.countdown", n), this.$el.on("finish.countdown", n)) : this.options = t.extend({}, s, n)), this.setFinalDate(o), !1 === this.options.defer && this.start()
    };
    t.extend(n.prototype, {
        start: function () {
            null !== this.interval && clearInterval(this.interval);
            var t = this;
            this.update(), this.interval = setInterval(function () {
                t.update.call(t)
            }, this.options.precision)
        }, stop: function () {
            clearInterval(this.interval), this.interval = null, this.dispatchEvent("stoped")
        }, toggle: function () {
            this.interval ? this.stop() : this.start()
        }, pause: function () {
            this.stop()
        }, resume: function () {
            this.start()
        }, remove: function () {
            this.stop.call(this), e[this.instanceNumber] = null, delete this.$el.data().countdownInstance
        }, setFinalDate: function (t) {
            this.finalDate = function (t) {
                if (t instanceof Date) return t;
                if (String(t).match(i)) return String(t).match(/^[0-9]*$/) && (t = Number(t)), String(t).match(/\-/) && (t = String(t).replace(/\-/g, "/")), new Date(t);
                throw new Error("Couldn't cast `" + t + "` to a date object.")
            }(t)
        }, update: function () {
            if (0 !== this.$el.closest("html").length) {
                var t, e = new Date;
                return t = this.finalDate.getTime() - e.getTime(), t = Math.ceil(t / 1e3), t = !this.options.elapse && t < 0 ? 0 : Math.abs(t), this.totalSecsLeft === t || this.firstTick ? void (this.firstTick = !1) : (this.totalSecsLeft = t, this.elapsed = e >= this.finalDate, this.offset = {
                    seconds: this.totalSecsLeft % 60,
                    minutes: Math.floor(this.totalSecsLeft / 60) % 60,
                    hours: Math.floor(this.totalSecsLeft / 60 / 60) % 24,
                    days: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToWeek: Math.floor(this.totalSecsLeft / 60 / 60 / 24) % 7,
                    daysToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 % 30.4368),
                    weeks: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7),
                    weeksToMonth: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 7) % 4,
                    months: Math.floor(this.totalSecsLeft / 60 / 60 / 24 / 30.4368),
                    years: Math.abs(this.finalDate.getFullYear() - e.getFullYear()),
                    totalDays: Math.floor(this.totalSecsLeft / 60 / 60 / 24),
                    totalHours: Math.floor(this.totalSecsLeft / 60 / 60),
                    totalMinutes: Math.floor(this.totalSecsLeft / 60),
                    totalSeconds: this.totalSecsLeft
                }, void (this.options.elapse || 0 !== this.totalSecsLeft ? this.dispatchEvent("update") : (this.stop(), this.dispatchEvent("finish"))))
            }
            this.remove()
        }, dispatchEvent: function (e) {
            var i, s = t.Event(e + ".countdown");
            s.finalDate = this.finalDate, s.elapsed = this.elapsed, s.offset = t.extend({}, this.offset), s.strftime = (i = this.offset, function (t) {
                var e, s, n, a, r, l, h = t.match(/%(-|!)?[A-Z]{1}(:[^;]+;)?/gi);
                if (h) for (var c = 0, d = h.length; c < d; ++c) {
                    var u = h[c].match(/%(-|!)?([a-zA-Z]{1})(:[^;]+;)?/),
                        p = (r = u[0], l = r.toString().replace(/([.?*+^$[\]\\(){}|-])/g, "\\$1"), new RegExp(l)),
                        f = u[1] || "", m = u[3] || "", g = null;
                    u = u[2], o.hasOwnProperty(u) && (g = o[u], g = Number(i[g])), null !== g && ("!" === f && (s = g, n = void 0, a = void 0, n = "s", a = "", (e = m) && (1 === (e = e.replace(/(:|;|\s)/gi, "").split(/\,/)).length ? n = e[0] : (a = e[0], n = e[1])), g = Math.abs(s) > 1 ? n : a), "" === f && g < 10 && (g = "0" + g.toString()), t = t.replace(p, g.toString()))
                }
                return t.replace(/%%/, "%")
            }), this.$el.trigger(s)
        }
    }), t.fn.countdown = function () {
        var i = Array.prototype.slice.call(arguments, 0);
        return this.each(function () {
            var s = t(this).data("countdown-instance");
            if (void 0 !== s) {
                var o = e[s], a = i[0];
                n.prototype.hasOwnProperty(a) ? o[a].apply(o, i.slice(1)) : null === String(a).match(/^[$A-Z_][0-9A-Z_$]*$/i) ? (o.setFinalDate.call(o, a), o.start()) : t.error("Method %s does not exist on jQuery.countdown".replace(/\%s/gi, a))
            } else new n(this, i[0], i[1])
        })
    }
}), function () {
    "use strict";

    function t(s) {
        if (!s) throw new Error("No options passed to Waypoint constructor");
        if (!s.element) throw new Error("No element option passed to Waypoint constructor");
        if (!s.handler) throw new Error("No handler option passed to Waypoint constructor");
        this.key = "waypoint-" + e, this.options = t.Adapter.extend({}, t.defaults, s), this.element = this.options.element, this.adapter = new t.Adapter(this.element), this.callback = s.handler, this.axis = this.options.horizontal ? "horizontal" : "vertical", this.enabled = this.options.enabled, this.triggerPoint = null, this.group = t.Group.findOrCreate({
            name: this.options.group,
            axis: this.axis
        }), this.context = t.Context.findOrCreateByElement(this.options.context), t.offsetAliases[this.options.offset] && (this.options.offset = t.offsetAliases[this.options.offset]), this.group.add(this), this.context.add(this), i[this.key] = this, e += 1
    }

    var e = 0, i = {};
    t.prototype.queueTrigger = function (t) {
        this.group.queueTrigger(this, t)
    }, t.prototype.trigger = function (t) {
        this.enabled && this.callback && this.callback.apply(this, t)
    }, t.prototype.destroy = function () {
        this.context.remove(this), this.group.remove(this), delete i[this.key]
    }, t.prototype.disable = function () {
        return this.enabled = !1, this
    }, t.prototype.enable = function () {
        return this.context.refresh(), this.enabled = !0, this
    }, t.prototype.next = function () {
        return this.group.next(this)
    }, t.prototype.previous = function () {
        return this.group.previous(this)
    }, t.invokeAll = function (t) {
        var e = [];
        for (var s in i) e.push(i[s]);
        for (var o = 0, n = e.length; n > o; o++) e[o][t]()
    }, t.destroyAll = function () {
        t.invokeAll("destroy")
    }, t.disableAll = function () {
        t.invokeAll("disable")
    }, t.enableAll = function () {
        t.Context.refreshAll();
        for (var e in i) i[e].enabled = !0;
        return this
    }, t.refreshAll = function () {
        t.Context.refreshAll()
    }, t.viewportHeight = function () {
        return window.innerHeight || document.documentElement.clientHeight
    }, t.viewportWidth = function () {
        return document.documentElement.clientWidth
    }, t.adapters = [], t.defaults = {
        context: window,
        continuous: !0,
        enabled: !0,
        group: "default",
        horizontal: !1,
        offset: 0
    }, t.offsetAliases = {
        "bottom-in-view": function () {
            return this.context.innerHeight() - this.adapter.outerHeight()
        }, "right-in-view": function () {
            return this.context.innerWidth() - this.adapter.outerWidth()
        }
    }, window.Waypoint = t
}(), function () {
    "use strict";

    function t(t) {
        window.setTimeout(t, 1e3 / 60)
    }

    function e(t) {
        this.element = t, this.Adapter = o.Adapter, this.adapter = new this.Adapter(t), this.key = "waypoint-context-" + i, this.didScroll = !1, this.didResize = !1, this.oldScroll = {
            x: this.adapter.scrollLeft(),
            y: this.adapter.scrollTop()
        }, this.waypoints = {
            vertical: {},
            horizontal: {}
        }, t.waypointContextKey = this.key, s[t.waypointContextKey] = this, i += 1, o.windowContext || (o.windowContext = !0, o.windowContext = new e(window)), this.createThrottledScrollHandler(), this.createThrottledResizeHandler()
    }

    var i = 0, s = {}, o = window.Waypoint, n = window.onload;
    e.prototype.add = function (t) {
        var e = t.options.horizontal ? "horizontal" : "vertical";
        this.waypoints[e][t.key] = t, this.refresh()
    }, e.prototype.checkEmpty = function () {
        var t = this.Adapter.isEmptyObject(this.waypoints.horizontal),
            e = this.Adapter.isEmptyObject(this.waypoints.vertical), i = this.element == this.element.window;
        t && e && !i && (this.adapter.off(".waypoints"), delete s[this.key])
    }, e.prototype.createThrottledResizeHandler = function () {
        function t() {
            e.handleResize(), e.didResize = !1
        }

        var e = this;
        this.adapter.on("resize.waypoints", function () {
            e.didResize || (e.didResize = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.createThrottledScrollHandler = function () {
        function t() {
            e.handleScroll(), e.didScroll = !1
        }

        var e = this;
        this.adapter.on("scroll.waypoints", function () {
            (!e.didScroll || o.isTouch) && (e.didScroll = !0, o.requestAnimationFrame(t))
        })
    }, e.prototype.handleResize = function () {
        o.Context.refreshAll()
    }, e.prototype.handleScroll = function () {
        var t = {}, e = {
            horizontal: {
                newScroll: this.adapter.scrollLeft(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left"
            },
            vertical: {
                newScroll: this.adapter.scrollTop(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up"
            }
        };
        for (var i in e) {
            var s = e[i], o = s.newScroll > s.oldScroll ? s.forward : s.backward;
            for (var n in this.waypoints[i]) {
                var a = this.waypoints[i][n];
                if (null !== a.triggerPoint) {
                    var r = s.oldScroll < a.triggerPoint, l = s.newScroll >= a.triggerPoint;
                    (r && l || !r && !l) && (a.queueTrigger(o), t[a.group.id] = a.group)
                }
            }
        }
        for (var h in t) t[h].flushTriggers();
        this.oldScroll = {x: e.horizontal.newScroll, y: e.vertical.newScroll}
    }, e.prototype.innerHeight = function () {
        return this.element == this.element.window ? o.viewportHeight() : this.adapter.innerHeight()
    }, e.prototype.remove = function (t) {
        delete this.waypoints[t.axis][t.key], this.checkEmpty()
    }, e.prototype.innerWidth = function () {
        return this.element == this.element.window ? o.viewportWidth() : this.adapter.innerWidth()
    }, e.prototype.destroy = function () {
        var t = [];
        for (var e in this.waypoints) for (var i in this.waypoints[e]) t.push(this.waypoints[e][i]);
        for (var s = 0, o = t.length; o > s; s++) t[s].destroy()
    }, e.prototype.refresh = function () {
        var t, e = this.element == this.element.window, i = e ? void 0 : this.adapter.offset(), s = {};
        this.handleScroll(), t = {
            horizontal: {
                contextOffset: e ? 0 : i.left,
                contextScroll: e ? 0 : this.oldScroll.x,
                contextDimension: this.innerWidth(),
                oldScroll: this.oldScroll.x,
                forward: "right",
                backward: "left",
                offsetProp: "left"
            },
            vertical: {
                contextOffset: e ? 0 : i.top,
                contextScroll: e ? 0 : this.oldScroll.y,
                contextDimension: this.innerHeight(),
                oldScroll: this.oldScroll.y,
                forward: "down",
                backward: "up",
                offsetProp: "top"
            }
        };
        for (var n in t) {
            var a = t[n];
            for (var r in this.waypoints[n]) {
                var l, h, c, d, u = this.waypoints[n][r], p = u.options.offset, f = u.triggerPoint, m = 0,
                    g = null == f;
                u.element !== u.element.window && (m = u.adapter.offset()[a.offsetProp]), "function" == typeof p ? p = p.apply(u) : "string" == typeof p && (p = parseFloat(p), u.options.offset.indexOf("%") > -1 && (p = Math.ceil(a.contextDimension * p / 100))), l = a.contextScroll - a.contextOffset, u.triggerPoint = Math.floor(m + l - p), h = f < a.oldScroll, c = u.triggerPoint >= a.oldScroll, d = !h && !c, !g && (h && c) ? (u.queueTrigger(a.backward), s[u.group.id] = u.group) : !g && d ? (u.queueTrigger(a.forward), s[u.group.id] = u.group) : g && a.oldScroll >= u.triggerPoint && (u.queueTrigger(a.forward), s[u.group.id] = u.group)
            }
        }
        return o.requestAnimationFrame(function () {
            for (var t in s) s[t].flushTriggers()
        }), this
    }, e.findOrCreateByElement = function (t) {
        return e.findByElement(t) || new e(t)
    }, e.refreshAll = function () {
        for (var t in s) s[t].refresh()
    }, e.findByElement = function (t) {
        return s[t.waypointContextKey]
    }, window.onload = function () {
        n && n(), e.refreshAll()
    }, o.requestAnimationFrame = function (e) {
        (window.requestAnimationFrame || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame || t).call(window, e)
    }, o.Context = e
}(), function () {
    "use strict";

    function t(t, e) {
        return t.triggerPoint - e.triggerPoint
    }

    function e(t, e) {
        return e.triggerPoint - t.triggerPoint
    }

    function i(t) {
        this.name = t.name, this.axis = t.axis, this.id = this.name + "-" + this.axis, this.waypoints = [], this.clearTriggerQueues(), s[this.axis][this.name] = this
    }

    var s = {vertical: {}, horizontal: {}}, o = window.Waypoint;
    i.prototype.add = function (t) {
        this.waypoints.push(t)
    }, i.prototype.clearTriggerQueues = function () {
        this.triggerQueues = {up: [], down: [], left: [], right: []}
    }, i.prototype.flushTriggers = function () {
        for (var i in this.triggerQueues) {
            var s = this.triggerQueues[i], o = "up" === i || "left" === i;
            s.sort(o ? e : t);
            for (var n = 0, a = s.length; a > n; n += 1) {
                var r = s[n];
                (r.options.continuous || n === s.length - 1) && r.trigger([i])
            }
        }
        this.clearTriggerQueues()
    }, i.prototype.next = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i === this.waypoints.length - 1 ? null : this.waypoints[i + 1]
    }, i.prototype.previous = function (e) {
        this.waypoints.sort(t);
        var i = o.Adapter.inArray(e, this.waypoints);
        return i ? this.waypoints[i - 1] : null
    }, i.prototype.queueTrigger = function (t, e) {
        this.triggerQueues[e].push(t)
    }, i.prototype.remove = function (t) {
        var e = o.Adapter.inArray(t, this.waypoints);
        e > -1 && this.waypoints.splice(e, 1)
    }, i.prototype.first = function () {
        return this.waypoints[0]
    }, i.prototype.last = function () {
        return this.waypoints[this.waypoints.length - 1]
    }, i.findOrCreate = function (t) {
        return s[t.axis][t.name] || new i(t)
    }, o.Group = i
}(), function () {
    "use strict";

    function t(t) {
        this.$element = e(t)
    }

    var e = window.jQuery, i = window.Waypoint;
    e.each(["innerHeight", "innerWidth", "off", "offset", "on", "outerHeight", "outerWidth", "scrollLeft", "scrollTop"], function (e, i) {
        t.prototype[i] = function () {
            var t = Array.prototype.slice.call(arguments);
            return this.$element[i].apply(this.$element, t)
        }
    }), e.each(["extend", "inArray", "isEmptyObject"], function (i, s) {
        t[s] = e[s]
    }), i.adapters.push({name: "jquery", Adapter: t}), i.Adapter = t
}(), function () {
    "use strict";

    function t(t) {
        return function () {
            var i = [], s = arguments[0];
            return t.isFunction(arguments[0]) && ((s = t.extend({}, arguments[1])).handler = arguments[0]), this.each(function () {
                var o = t.extend({}, s, {element: this});
                "string" == typeof o.context && (o.context = t(this).closest(o.context)[0]), i.push(new e(o))
            }), i
        }
    }

    var e = window.Waypoint;
    window.jQuery && (window.jQuery.fn.waypoint = t(window.jQuery)), window.Zepto && (window.Zepto.fn.waypoint = t(window.Zepto))
}(), function (t) {
    "use strict";
    t.fn.counterUp = function (e) {
        var i = t.extend({time: 400, delay: 10}, e);
        return this.each(function () {
            var e = t(this), s = i;
            e.waypoint(function () {
                var t = [], i = s.time / s.delay, o = e.text(), n = /[0-9]+,[0-9]+/.test(o);
                o = o.replace(/,/g, "");
                /^[0-9]+$/.test(o);
                for (var a = /^[0-9]+\.[0-9]+$/.test(o), r = a ? (o.split(".")[1] || []).length : 0, l = i; l >= 1; l--) {
                    var h = parseInt(o / i * l);
                    if (a && (h = parseFloat(o / i * l).toFixed(r)), n) for (; /(\d+)(\d{3})/.test(h.toString());) h = h.toString().replace(/(\d+)(\d{3})/, "$1,$2");
                    t.unshift(h)
                }
                e.data("counterup-nums", t), e.text("0");
                e.data("counterup-func", function () {
                    e.text(e.data("counterup-nums").shift()), e.data("counterup-nums").length ? setTimeout(e.data("counterup-func"), s.delay) : (e.data("counterup-nums"), e.data("counterup-nums", null), e.data("counterup-func", null))
                }), setTimeout(e.data("counterup-func"), s.delay)
            }, {offset: "100%", triggerOnce: !0})
        })
    }
}(jQuery), function (t) {
    "function" == typeof define && define.amd ? define(["jquery"], t) : t("object" == typeof exports ? require("jquery") : window.jQuery || window.Zepto)
}(function (t) {
    var e, i, s, o, n, a, r = "Close", l = "BeforeClose", h = "MarkupParse", c = ".mfp", d = "mfp-ready",
        u = "mfp-removing", p = "mfp-prevent-close", f = function () {
        }, m = !!window.jQuery, g = t(window), v = function (t, i) {
            e.ev.on("mfp" + t + c, i)
        }, y = function (e, i, s, o) {
            var n = document.createElement("div");
            return n.className = "mfp-" + e, s && (n.innerHTML = s), o ? i && i.appendChild(n) : (n = t(n), i && n.appendTo(i)), n
        }, b = function (i, s) {
            e.ev.triggerHandler("mfp" + i, s), e.st.callbacks && (i = i.charAt(0).toLowerCase() + i.slice(1), e.st.callbacks[i] && e.st.callbacks[i].apply(e, t.isArray(s) ? s : [s]))
        }, w = function (i) {
            return i === a && e.currTemplate.closeBtn || (e.currTemplate.closeBtn = t(e.st.closeMarkup.replace("%title%", e.st.tClose)), a = i), e.currTemplate.closeBtn
        }, _ = function () {
            t.magnificPopup.instance || ((e = new f).init(), t.magnificPopup.instance = e)
        };
    f.prototype = {
        constructor: f, init: function () {
            var i = navigator.appVersion;
            e.isLowIE = e.isIE8 = document.all && !document.addEventListener, e.isAndroid = /android/gi.test(i), e.isIOS = /iphone|ipad|ipod/gi.test(i), e.supportsTransition = function () {
                var t = document.createElement("p").style, e = ["ms", "O", "Moz", "Webkit"];
                if (void 0 !== t.transition) return !0;
                for (; e.length;) if (e.pop() + "Transition" in t) return !0;
                return !1
            }(), e.probablyMobile = e.isAndroid || e.isIOS || /(Opera Mini)|Kindle|webOS|BlackBerry|(Opera Mobi)|(Windows Phone)|IEMobile/i.test(navigator.userAgent), s = t(document), e.popupsCache = {}
        }, open: function (i) {
            var o;
            if (!1 === i.isObj) {
                e.items = i.items.toArray(), e.index = 0;
                var a, r = i.items;
                for (o = 0; o < r.length; o++) if (a = r[o], a.parsed && (a = a.el[0]), a === i.el[0]) {
                    e.index = o;
                    break
                }
            } else e.items = t.isArray(i.items) ? i.items : [i.items], e.index = i.index || 0;
            if (!e.isOpen) {
                e.types = [], n = "", i.mainEl && i.mainEl.length ? e.ev = i.mainEl.eq(0) : e.ev = s, i.key ? (e.popupsCache[i.key] || (e.popupsCache[i.key] = {}), e.currTemplate = e.popupsCache[i.key]) : e.currTemplate = {}, e.st = t.extend(!0, {}, t.magnificPopup.defaults, i), e.fixedContentPos = "auto" === e.st.fixedContentPos ? !e.probablyMobile : e.st.fixedContentPos, e.st.modal && (e.st.closeOnContentClick = !1, e.st.closeOnBgClick = !1, e.st.showCloseBtn = !1, e.st.enableEscapeKey = !1), e.bgOverlay || (e.bgOverlay = y("bg").on("click.mfp", function () {
                    e.close()
                }), e.wrap = y("wrap").attr("tabindex", -1).on("click.mfp", function (t) {
                    e._checkIfClose(t.target) && e.close()
                }), e.container = y("container", e.wrap)), e.contentContainer = y("content"), e.st.preloader && (e.preloader = y("preloader", e.container, e.st.tLoading));
                var l = t.magnificPopup.modules;
                for (o = 0; o < l.length; o++) {
                    var c = l[o];
                    c = c.charAt(0).toUpperCase() + c.slice(1), e["init" + c].call(e)
                }
                b("BeforeOpen"), e.st.showCloseBtn && (e.st.closeBtnInside ? (v(h, function (t, e, i, s) {
                    i.close_replaceWith = w(s.type)
                }), n += " mfp-close-btn-in") : e.wrap.append(w())), e.st.alignTop && (n += " mfp-align-top"), e.fixedContentPos ? e.wrap.css({
                    overflow: e.st.overflowY,
                    overflowX: "hidden",
                    overflowY: e.st.overflowY
                }) : e.wrap.css({
                    top: g.scrollTop(),
                    position: "absolute"
                }), (!1 === e.st.fixedBgPos || "auto" === e.st.fixedBgPos && !e.fixedContentPos) && e.bgOverlay.css({
                    height: s.height(),
                    position: "absolute"
                }), e.st.enableEscapeKey && s.on("keyup.mfp", function (t) {
                    27 === t.keyCode && e.close()
                }), g.on("resize.mfp", function () {
                    e.updateSize()
                }), e.st.closeOnContentClick || (n += " mfp-auto-cursor"), n && e.wrap.addClass(n);
                var u = e.wH = g.height(), p = {};
                if (e.fixedContentPos && e._hasScrollBar(u)) {
                    var f = e._getScrollbarSize();
                    f && (p.marginRight = f)
                }
                e.fixedContentPos && (e.isIE7 ? t("body, html").css("overflow", "hidden") : p.overflow = "hidden");
                var m = e.st.mainClass;
                return e.isIE7 && (m += " mfp-ie7"), m && e._addClassToMFP(m), e.updateItemHTML(), b("BuildControls"), t("html").css(p), e.bgOverlay.add(e.wrap).prependTo(e.st.prependTo || t(document.body)), e._lastFocusedEl = document.activeElement, setTimeout(function () {
                    e.content ? (e._addClassToMFP(d), e._setFocus()) : e.bgOverlay.addClass(d), s.on("focusin.mfp", e._onFocusIn)
                }, 16), e.isOpen = !0, e.updateSize(u), b("Open"), i
            }
            e.updateItemHTML()
        }, close: function () {
            e.isOpen && (b(l), e.isOpen = !1, e.st.removalDelay && !e.isLowIE && e.supportsTransition ? (e._addClassToMFP(u), setTimeout(function () {
                e._close()
            }, e.st.removalDelay)) : e._close())
        }, _close: function () {
            b(r);
            var i = u + " " + d + " ";
            if (e.bgOverlay.detach(), e.wrap.detach(), e.container.empty(), e.st.mainClass && (i += e.st.mainClass + " "), e._removeClassFromMFP(i), e.fixedContentPos) {
                var o = {marginRight: ""};
                e.isIE7 ? t("body, html").css("overflow", "") : o.overflow = "", t("html").css(o)
            }
            s.off("keyup.mfp focusin.mfp"), e.ev.off(c), e.wrap.attr("class", "mfp-wrap").removeAttr("style"), e.bgOverlay.attr("class", "mfp-bg"), e.container.attr("class", "mfp-container"), !e.st.showCloseBtn || e.st.closeBtnInside && !0 !== e.currTemplate[e.currItem.type] || e.currTemplate.closeBtn && e.currTemplate.closeBtn.detach(), e.st.autoFocusLast && e._lastFocusedEl && t(e._lastFocusedEl).focus(), e.currItem = null, e.content = null, e.currTemplate = null, e.prevHeight = 0, b("AfterClose")
        }, updateSize: function (t) {
            if (e.isIOS) {
                var i = document.documentElement.clientWidth / window.innerWidth, s = window.innerHeight * i;
                e.wrap.css("height", s), e.wH = s
            } else e.wH = t || g.height();
            e.fixedContentPos || e.wrap.css("height", e.wH), b("Resize")
        }, updateItemHTML: function () {
            var i = e.items[e.index];
            e.contentContainer.detach(), e.content && e.content.detach(), i.parsed || (i = e.parseEl(e.index));
            var s = i.type;
            if (b("BeforeChange", [e.currItem ? e.currItem.type : "", s]), e.currItem = i, !e.currTemplate[s]) {
                var n = !!e.st[s] && e.st[s].markup;
                b("FirstMarkupParse", n), e.currTemplate[s] = !n || t(n)
            }
            o && o !== i.type && e.container.removeClass("mfp-" + o + "-holder");
            var a = e["get" + s.charAt(0).toUpperCase() + s.slice(1)](i, e.currTemplate[s]);
            e.appendContent(a, s), i.preloaded = !0, b("Change", i), o = i.type, e.container.prepend(e.contentContainer), b("AfterChange")
        }, appendContent: function (t, i) {
            e.content = t, t ? e.st.showCloseBtn && e.st.closeBtnInside && !0 === e.currTemplate[i] ? e.content.find(".mfp-close").length || e.content.append(w()) : e.content = t : e.content = "", b("BeforeAppend"), e.container.addClass("mfp-" + i + "-holder"), e.contentContainer.append(e.content)
        }, parseEl: function (i) {
            var s, o = e.items[i];
            if (o.tagName ? o = {el: t(o)} : (s = o.type, o = {data: o, src: o.src}), o.el) {
                for (var n = e.types, a = 0; a < n.length; a++) if (o.el.hasClass("mfp-" + n[a])) {
                    s = n[a];
                    break
                }
                o.src = o.el.attr("data-mfp-src"), o.src || (o.src = o.el.attr("href"))
            }
            return o.type = s || e.st.type || "inline", o.index = i, o.parsed = !0, e.items[i] = o, b("ElementParse", o), e.items[i]
        }, addGroup: function (t, i) {
            var s = function (s) {
                s.mfpEl = this, e._openClick(s, t, i)
            };
            i || (i = {});
            var o = "click.magnificPopup";
            i.mainEl = t, i.items ? (i.isObj = !0, t.off(o).on(o, s)) : (i.isObj = !1, i.delegate ? t.off(o).on(o, i.delegate, s) : (i.items = t, t.off(o).on(o, s)))
        }, _openClick: function (i, s, o) {
            if ((void 0 !== o.midClick ? o.midClick : t.magnificPopup.defaults.midClick) || !(2 === i.which || i.ctrlKey || i.metaKey || i.altKey || i.shiftKey)) {
                var n = void 0 !== o.disableOn ? o.disableOn : t.magnificPopup.defaults.disableOn;
                if (n) if (t.isFunction(n)) {
                    if (!n.call(e)) return !0
                } else if (g.width() < n) return !0;
                i.type && (i.preventDefault(), e.isOpen && i.stopPropagation()), o.el = t(i.mfpEl), o.delegate && (o.items = s.find(o.delegate)), e.open(o)
            }
        }, updateStatus: function (t, s) {
            if (e.preloader) {
                i !== t && e.container.removeClass("mfp-s-" + i), s || "loading" !== t || (s = e.st.tLoading);
                var o = {status: t, text: s};
                b("UpdateStatus", o), t = o.status, s = o.text, e.preloader.html(s), e.preloader.find("a").on("click", function (t) {
                    t.stopImmediatePropagation()
                }), e.container.addClass("mfp-s-" + t), i = t
            }
        }, _checkIfClose: function (i) {
            if (!t(i).hasClass(p)) {
                var s = e.st.closeOnContentClick, o = e.st.closeOnBgClick;
                if (s && o) return !0;
                if (!e.content || t(i).hasClass("mfp-close") || e.preloader && i === e.preloader[0]) return !0;
                if (i === e.content[0] || t.contains(e.content[0], i)) {
                    if (s) return !0
                } else if (o && t.contains(document, i)) return !0;
                return !1
            }
        }, _addClassToMFP: function (t) {
            e.bgOverlay.addClass(t), e.wrap.addClass(t)
        }, _removeClassFromMFP: function (t) {
            this.bgOverlay.removeClass(t), e.wrap.removeClass(t)
        }, _hasScrollBar: function (t) {
            return (e.isIE7 ? s.height() : document.body.scrollHeight) > (t || g.height())
        }, _setFocus: function () {
            (e.st.focus ? e.content.find(e.st.focus).eq(0) : e.wrap).focus()
        }, _onFocusIn: function (i) {
            return i.target === e.wrap[0] || t.contains(e.wrap[0], i.target) ? void 0 : (e._setFocus(), !1)
        }, _parseMarkup: function (e, i, s) {
            var o;
            s.data && (i = t.extend(s.data, i)), b(h, [e, i, s]), t.each(i, function (i, s) {
                if (void 0 === s || !1 === s) return !0;
                if ((o = i.split("_")).length > 1) {
                    var n = e.find(".mfp-" + o[0]);
                    if (n.length > 0) {
                        var a = o[1];
                        "replaceWith" === a ? n[0] !== s[0] && n.replaceWith(s) : "img" === a ? n.is("img") ? n.attr("src", s) : n.replaceWith(t("<img>").attr("src", s).attr("class", n.attr("class"))) : n.attr(o[1], s)
                    }
                } else e.find(".mfp-" + i).html(s)
            })
        }, _getScrollbarSize: function () {
            if (void 0 === e.scrollbarSize) {
                var t = document.createElement("div");
                t.style.cssText = "width: 99px; height: 99px; overflow: scroll; position: absolute; top: -9999px;", document.body.appendChild(t), e.scrollbarSize = t.offsetWidth - t.clientWidth, document.body.removeChild(t)
            }
            return e.scrollbarSize
        }
    }, t.magnificPopup = {
        instance: null,
        proto: f.prototype,
        modules: [],
        open: function (e, i) {
            return _(), (e = e ? t.extend(!0, {}, e) : {}).isObj = !0, e.index = i || 0, this.instance.open(e)
        },
        close: function () {
            return t.magnificPopup.instance && t.magnificPopup.instance.close()
        },
        registerModule: function (e, i) {
            i.options && (t.magnificPopup.defaults[e] = i.options), t.extend(this.proto, i.proto), this.modules.push(e)
        },
        defaults: {
            disableOn: 0,
            key: null,
            midClick: !1,
            mainClass: "",
            preloader: !0,
            focus: "",
            closeOnContentClick: !1,
            closeOnBgClick: !0,
            closeBtnInside: !0,
            showCloseBtn: !0,
            enableEscapeKey: !0,
            modal: !1,
            alignTop: !1,
            removalDelay: 0,
            prependTo: null,
            fixedContentPos: "auto",
            fixedBgPos: "auto",
            overflowY: "auto",
            closeMarkup: '<button title="%title%" type="button" class="mfp-close">&#215;</button>',
            tClose: "Close (Esc)",
            tLoading: "Loading...",
            autoFocusLast: !0
        }
    }, t.fn.magnificPopup = function (i) {
        _();
        var s = t(this);
        if ("string" == typeof i) if ("open" === i) {
            var o, n = m ? s.data("magnificPopup") : s[0].magnificPopup, a = parseInt(arguments[1], 10) || 0;
            n.items ? o = n.items[a] : (o = s, n.delegate && (o = o.find(n.delegate)), o = o.eq(a)), e._openClick({mfpEl: o}, s, n)
        } else e.isOpen && e[i].apply(e, Array.prototype.slice.call(arguments, 1)); else i = t.extend(!0, {}, i), m ? s.data("magnificPopup", i) : s[0].magnificPopup = i, e.addGroup(s, i);
        return s
    };
    var x, k, C, T = "inline", S = function () {
        C && (k.after(C.addClass(x)).detach(), C = null)
    };
    t.magnificPopup.registerModule(T, {
        options: {hiddenClass: "hide", markup: "", tNotFound: "Content not found"},
        proto: {
            initInline: function () {
                e.types.push(T), v(r + "." + T, function () {
                    S()
                })
            }, getInline: function (i, s) {
                if (S(), i.src) {
                    var o = e.st.inline, n = t(i.src);
                    if (n.length) {
                        var a = n[0].parentNode;
                        a && a.tagName && (k || (x = o.hiddenClass, k = y(x), x = "mfp-" + x), C = n.after(k).detach().removeClass(x)), e.updateStatus("ready")
                    } else e.updateStatus("error", o.tNotFound), n = t("<div>");
                    return i.inlineElement = n, n
                }
                return e.updateStatus("ready"), e._parseMarkup(s, {}, i), s
            }
        }
    });
    var z, I = "ajax", P = function () {
        z && t(document.body).removeClass(z)
    }, D = function () {
        P(), e.req && e.req.abort()
    };
    t.magnificPopup.registerModule(I, {
        options: {
            settings: null,
            cursor: "mfp-ajax-cur",
            tError: '<a href="%url%">The content</a> could not be loaded.'
        }, proto: {
            initAjax: function () {
                e.types.push(I), z = e.st.ajax.cursor, v(r + "." + I, D), v("BeforeChange.ajax", D)
            }, getAjax: function (i) {
                z && t(document.body).addClass(z), e.updateStatus("loading");
                var s = t.extend({
                    url: i.src, success: function (s, o, n) {
                        var a = {data: s, xhr: n};
                        b("ParseAjax", a), e.appendContent(t(a.data), I), i.finished = !0, P(), e._setFocus(), setTimeout(function () {
                            e.wrap.addClass(d)
                        }, 16), e.updateStatus("ready"), b("AjaxContentAdded")
                    }, error: function () {
                        P(), i.finished = i.loadError = !0, e.updateStatus("error", e.st.ajax.tError.replace("%url%", i.src))
                    }
                }, e.st.ajax.settings);
                return e.req = t.ajax(s), ""
            }
        }
    });
    var W;
    t.magnificPopup.registerModule("image", {
        options: {
            markup: '<div class="mfp-figure"><div class="mfp-close"></div><figure><div class="mfp-img"></div><figcaption><div class="mfp-bottom-bar"><div class="mfp-title"></div><div class="mfp-counter"></div></div></figcaption></figure></div>',
            cursor: "mfp-zoom-out-cur",
            titleSrc: "title",
            verticalFit: !0,
            tError: '<a href="%url%">The image</a> could not be loaded.'
        }, proto: {
            initImage: function () {
                var i = e.st.image, s = ".image";
                e.types.push("image"), v("Open" + s, function () {
                    "image" === e.currItem.type && i.cursor && t(document.body).addClass(i.cursor)
                }), v(r + s, function () {
                    i.cursor && t(document.body).removeClass(i.cursor), g.off("resize.mfp")
                }), v("Resize" + s, e.resizeImage), e.isLowIE && v("AfterChange", e.resizeImage)
            }, resizeImage: function () {
                var t = e.currItem;
                if (t && t.img && e.st.image.verticalFit) {
                    var i = 0;
                    e.isLowIE && (i = parseInt(t.img.css("padding-top"), 10) + parseInt(t.img.css("padding-bottom"), 10)), t.img.css("max-height", e.wH - i)
                }
            }, _onImageHasSize: function (t) {
                t.img && (t.hasSize = !0, W && clearInterval(W), t.isCheckingImgSize = !1, b("ImageHasSize", t), t.imgHidden && (e.content && e.content.removeClass("mfp-loading"), t.imgHidden = !1))
            }, findImageSize: function (t) {
                var i = 0, s = t.img[0], o = function (n) {
                    W && clearInterval(W), W = setInterval(function () {
                        return s.naturalWidth > 0 ? void e._onImageHasSize(t) : (i > 200 && clearInterval(W), void (3 === ++i ? o(10) : 40 === i ? o(50) : 100 === i && o(500)))
                    }, n)
                };
                o(1)
            }, getImage: function (i, s) {
                var o = 0, n = function () {
                    i && (i.img[0].complete ? (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("ready")), i.hasSize = !0, i.loaded = !0, b("ImageLoadComplete")) : 200 > ++o ? setTimeout(n, 100) : a())
                }, a = function () {
                    i && (i.img.off(".mfploader"), i === e.currItem && (e._onImageHasSize(i), e.updateStatus("error", r.tError.replace("%url%", i.src))), i.hasSize = !0, i.loaded = !0, i.loadError = !0)
                }, r = e.st.image, l = s.find(".mfp-img");
                if (l.length) {
                    var h = document.createElement("img");
                    h.className = "mfp-img", i.el && i.el.find("img").length && (h.alt = i.el.find("img").attr("alt")), i.img = t(h).on("load.mfploader", n).on("error.mfploader", a), h.src = i.src, l.is("img") && (i.img = i.img.clone()), (h = i.img[0]).naturalWidth > 0 ? i.hasSize = !0 : h.width || (i.hasSize = !1)
                }
                return e._parseMarkup(s, {
                    title: function (i) {
                        if (i.data && void 0 !== i.data.title) return i.data.title;
                        var s = e.st.image.titleSrc;
                        if (s) {
                            if (t.isFunction(s)) return s.call(e, i);
                            if (i.el) return i.el.attr(s) || ""
                        }
                        return ""
                    }(i), img_replaceWith: i.img
                }, i), e.resizeImage(), i.hasSize ? (W && clearInterval(W), i.loadError ? (s.addClass("mfp-loading"), e.updateStatus("error", r.tError.replace("%url%", i.src))) : (s.removeClass("mfp-loading"), e.updateStatus("ready")), s) : (e.updateStatus("loading"), i.loading = !0, i.hasSize || (i.imgHidden = !0, s.addClass("mfp-loading"), e.findImageSize(i)), s)
            }
        }
    });
    var M;
    t.magnificPopup.registerModule("zoom", {
        options: {
            enabled: !1, easing: "ease-in-out", duration: 300, opener: function (t) {
                return t.is("img") ? t : t.find("img")
            }
        }, proto: {
            initZoom: function () {
                var t, i = e.st.zoom;
                if (i.enabled && e.supportsTransition) {
                    var s, o, n = i.duration, a = function (t) {
                        var e = t.clone().removeAttr("style").removeAttr("class").addClass("mfp-animated-image"),
                            s = "all " + i.duration / 1e3 + "s " + i.easing, o = {
                                position: "fixed",
                                zIndex: 9999,
                                left: 0,
                                top: 0,
                                "-webkit-backface-visibility": "hidden"
                            }, n = "transition";
                        return o["-webkit-" + n] = o["-moz-" + n] = o["-o-" + n] = o[n] = s, e.css(o), e
                    }, h = function () {
                        e.content.css("visibility", "visible")
                    };
                    v("BuildControls.zoom", function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.content.css("visibility", "hidden"), !(t = e._getItemToZoom())) return void h();
                            (o = a(t)).css(e._getOffset()), e.wrap.append(o), s = setTimeout(function () {
                                o.css(e._getOffset(!0)), s = setTimeout(function () {
                                    h(), setTimeout(function () {
                                        o.remove(), t = o = null, b("ZoomAnimationEnded")
                                    }, 16)
                                }, n)
                            }, 16)
                        }
                    }), v(l + ".zoom", function () {
                        if (e._allowZoom()) {
                            if (clearTimeout(s), e.st.removalDelay = n, !t) {
                                if (!(t = e._getItemToZoom())) return;
                                o = a(t)
                            }
                            o.css(e._getOffset(!0)), e.wrap.append(o), e.content.css("visibility", "hidden"), setTimeout(function () {
                                o.css(e._getOffset())
                            }, 16)
                        }
                    }), v(r + ".zoom", function () {
                        e._allowZoom() && (h(), o && o.remove(), t = null)
                    })
                }
            }, _allowZoom: function () {
                return "image" === e.currItem.type
            }, _getItemToZoom: function () {
                return !!e.currItem.hasSize && e.currItem.img
            }, _getOffset: function (i) {
                var s, o = (s = i ? e.currItem.img : e.st.zoom.opener(e.currItem.el || e.currItem)).offset(),
                    n = parseInt(s.css("padding-top"), 10), a = parseInt(s.css("padding-bottom"), 10);
                o.top -= t(window).scrollTop() - n;
                var r = {width: s.width(), height: (m ? s.innerHeight() : s[0].offsetHeight) - a - n};
                return void 0 === M && (M = void 0 !== document.createElement("p").style.MozTransform), M ? r["-moz-transform"] = r.transform = "translate(" + o.left + "px," + o.top + "px)" : (r.left = o.left, r.top = o.top), r
            }
        }
    });
    var E = "iframe", O = function (t) {
        if (e.currTemplate[E]) {
            var i = e.currTemplate[E].find("iframe");
            i.length && (t || (i[0].src = "//about:blank"), e.isIE8 && i.css("display", t ? "block" : "none"))
        }
    };
    t.magnificPopup.registerModule(E, {
        options: {
            markup: '<div class="mfp-iframe-scaler"><div class="mfp-close"></div><iframe class="mfp-iframe" src="//about:blank" frameborder="0" allowfullscreen></iframe></div>',
            srcAction: "iframe_src",
            patterns: {
                youtube: {index: "youtube.com", id: "v=", src: "//www.youtube.com/embed/%id%?autoplay=1"},
                vimeo: {index: "vimeo.com/", id: "/", src: "//player.vimeo.com/video/%id%?autoplay=1"},
                gmaps: {index: "//maps.google.", src: "%id%&output=embed"}
            }
        }, proto: {
            initIframe: function () {
                e.types.push(E), v("BeforeChange", function (t, e, i) {
                    e !== i && (e === E ? O() : i === E && O(!0))
                }), v(r + "." + E, function () {
                    O()
                })
            }, getIframe: function (i, s) {
                var o = i.src, n = e.st.iframe;
                t.each(n.patterns, function () {
                    return o.indexOf(this.index) > -1 ? (this.id && (o = "string" == typeof this.id ? o.substr(o.lastIndexOf(this.id) + this.id.length, o.length) : this.id.call(this, o)), o = this.src.replace("%id%", o), !1) : void 0
                });
                var a = {};
                return n.srcAction && (a[n.srcAction] = o), e._parseMarkup(s, a, i), e.updateStatus("ready"), s
            }
        }
    });
    var H = function (t) {
        var i = e.items.length;
        return t > i - 1 ? t - i : 0 > t ? i + t : t
    }, L = function (t, e, i) {
        return t.replace(/%curr%/gi, e + 1).replace(/%total%/gi, i)
    };
    t.magnificPopup.registerModule("gallery", {
        options: {
            enabled: !1,
            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
            preload: [0, 2],
            navigateByImgClick: !0,
            arrows: !0,
            tPrev: "Previous (Left arrow key)",
            tNext: "Next (Right arrow key)",
            tCounter: "%curr% of %total%"
        }, proto: {
            initGallery: function () {
                var i = e.st.gallery, o = ".mfp-gallery";
                return e.direction = !0, !(!i || !i.enabled) && (n += " mfp-gallery", v("Open" + o, function () {
                    i.navigateByImgClick && e.wrap.on("click" + o, ".mfp-img", function () {
                        return e.items.length > 1 ? (e.next(), !1) : void 0
                    }), s.on("keydown" + o, function (t) {
                        37 === t.keyCode ? e.prev() : 39 === t.keyCode && e.next()
                    })
                }), v("UpdateStatus" + o, function (t, i) {
                    i.text && (i.text = L(i.text, e.currItem.index, e.items.length))
                }), v(h + o, function (t, s, o, n) {
                    var a = e.items.length;
                    o.counter = a > 1 ? L(i.tCounter, n.index, a) : ""
                }), v("BuildControls" + o, function () {
                    if (e.items.length > 1 && i.arrows && !e.arrowLeft) {
                        var s = i.arrowMarkup,
                            o = e.arrowLeft = t(s.replace(/%title%/gi, i.tPrev).replace(/%dir%/gi, "left")).addClass(p),
                            n = e.arrowRight = t(s.replace(/%title%/gi, i.tNext).replace(/%dir%/gi, "right")).addClass(p);
                        o.click(function () {
                            e.prev()
                        }), n.click(function () {
                            e.next()
                        }), e.container.append(o.add(n))
                    }
                }), v("Change" + o, function () {
                    e._preloadTimeout && clearTimeout(e._preloadTimeout), e._preloadTimeout = setTimeout(function () {
                        e.preloadNearbyImages(), e._preloadTimeout = null
                    }, 16)
                }), void v(r + o, function () {
                    s.off(o), e.wrap.off("click" + o), e.arrowRight = e.arrowLeft = null
                }))
            }, next: function () {
                e.direction = !0, e.index = H(e.index + 1), e.updateItemHTML()
            }, prev: function () {
                e.direction = !1, e.index = H(e.index - 1), e.updateItemHTML()
            }, goTo: function (t) {
                e.direction = t >= e.index, e.index = t, e.updateItemHTML()
            }, preloadNearbyImages: function () {
                var t, i = e.st.gallery.preload, s = Math.min(i[0], e.items.length), o = Math.min(i[1], e.items.length);
                for (t = 1; t <= (e.direction ? o : s); t++) e._preloadItem(e.index + t);
                for (t = 1; t <= (e.direction ? s : o); t++) e._preloadItem(e.index - t)
            }, _preloadItem: function (i) {
                if (i = H(i), !e.items[i].preloaded) {
                    var s = e.items[i];
                    s.parsed || (s = e.parseEl(i)), b("LazyLoad", s), "image" === s.type && (s.img = t('<img class="mfp-img" />').on("load.mfploader", function () {
                        s.hasSize = !0
                    }).on("error.mfploader", function () {
                        s.hasSize = !0, s.loadError = !0, b("LazyLoadError", s)
                    }).attr("src", s.src)), s.preloaded = !0
                }
            }
        }
    });
    var A = "retina";
    t.magnificPopup.registerModule(A, {
        options: {
            replaceSrc: function (t) {
                return t.src.replace(/\.\w+$/, function (t) {
                    return "@2x" + t
                })
            }, ratio: 1
        }, proto: {
            initRetina: function () {
                if (window.devicePixelRatio > 1) {
                    var t = e.st.retina, i = t.ratio;
                    (i = isNaN(i) ? i() : i) > 1 && (v("ImageHasSize." + A, function (t, e) {
                        e.img.css({"max-width": e.img[0].naturalWidth / i, width: "100%"})
                    }), v("ElementParse." + A, function (e, s) {
                        s.src = t.replaceSrc(s, i)
                    }))
                }
            }
        }
    }), _()
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, s = i[t] = i[t] || [];
            return -1 == s.indexOf(e) && s.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var s = i.indexOf(e);
            return -1 != s && i.splice(s, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var n = i[o];
                s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define(["ev-emitter/ev-emitter"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter")) : t.imagesLoaded = e(t, t.EvEmitter)
}("undefined" != typeof window ? window : this, function (t, e) {
    function i(t, e) {
        for (var i in e) t[i] = e[i];
        return t
    }

    function s(t, e, o) {
        if (!(this instanceof s)) return new s(t, e, o);
        var n, h = t;
        return "string" == typeof t && (h = document.querySelectorAll(t)), h ? (this.elements = (n = h, Array.isArray(n) ? n : "object" == typeof n && "number" == typeof n.length ? l.call(n) : [n]), this.options = i({}, this.options), "function" == typeof e ? o = e : i(this.options, e), o && this.on("always", o), this.getImages(), a && (this.jqDeferred = new a.Deferred), void setTimeout(this.check.bind(this))) : void r.error("Bad element for imagesLoaded " + (h || t))
    }

    function o(t) {
        this.img = t
    }

    function n(t, e) {
        this.url = t, this.element = e, this.img = new Image
    }

    var a = t.jQuery, r = t.console, l = Array.prototype.slice;
    s.prototype = Object.create(e.prototype), s.prototype.options = {}, s.prototype.getImages = function () {
        this.images = [], this.elements.forEach(this.addElementImages, this)
    }, s.prototype.addElementImages = function (t) {
        "IMG" == t.nodeName && this.addImage(t), !0 === this.options.background && this.addElementBackgroundImages(t);
        var e = t.nodeType;
        if (e && h[e]) {
            for (var i = t.querySelectorAll("img"), s = 0; s < i.length; s++) {
                var o = i[s];
                this.addImage(o)
            }
            if ("string" == typeof this.options.background) {
                var n = t.querySelectorAll(this.options.background);
                for (s = 0; s < n.length; s++) {
                    var a = n[s];
                    this.addElementBackgroundImages(a)
                }
            }
        }
    };
    var h = {1: !0, 9: !0, 11: !0};
    return s.prototype.addElementBackgroundImages = function (t) {
        var e = getComputedStyle(t);
        if (e) for (var i = /url\((['"])?(.*?)\1\)/gi, s = i.exec(e.backgroundImage); null !== s;) {
            var o = s && s[2];
            o && this.addBackground(o, t), s = i.exec(e.backgroundImage)
        }
    }, s.prototype.addImage = function (t) {
        var e = new o(t);
        this.images.push(e)
    }, s.prototype.addBackground = function (t, e) {
        var i = new n(t, e);
        this.images.push(i)
    }, s.prototype.check = function () {
        function t(t, i, s) {
            setTimeout(function () {
                e.progress(t, i, s)
            })
        }

        var e = this;
        return this.progressedCount = 0, this.hasAnyBroken = !1, this.images.length ? void this.images.forEach(function (e) {
            e.once("progress", t), e.check()
        }) : void this.complete()
    }, s.prototype.progress = function (t, e, i) {
        this.progressedCount++ , this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, e]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount == this.images.length && this.complete(), this.options.debug && r && r.log("progress: " + i, t, e)
    }, s.prototype.complete = function () {
        var t = this.hasAnyBroken ? "fail" : "done";
        if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            var e = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[e](this)
        }
    }, o.prototype = Object.create(e.prototype), o.prototype.check = function () {
        return this.getIsImageComplete() ? void this.confirm(0 !== this.img.naturalWidth, "naturalWidth") : (this.proxyImage = new Image, this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), void (this.proxyImage.src = this.img.src))
    }, o.prototype.getIsImageComplete = function () {
        return this.img.complete && this.img.naturalWidth
    }, o.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.img, e])
    }, o.prototype.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, o.prototype.onload = function () {
        this.confirm(!0, "onload"), this.unbindEvents()
    }, o.prototype.onerror = function () {
        this.confirm(!1, "onerror"), this.unbindEvents()
    }, o.prototype.unbindEvents = function () {
        this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype = Object.create(o.prototype), n.prototype.check = function () {
        this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(0 !== this.img.naturalWidth, "naturalWidth"), this.unbindEvents())
    }, n.prototype.unbindEvents = function () {
        this.img.removeEventListener("load", this), this.img.removeEventListener("error", this)
    }, n.prototype.confirm = function (t, e) {
        this.isLoaded = t, this.emitEvent("progress", [this, this.element, e])
    }, s.makeJQueryPlugin = function (e) {
        (e = e || t.jQuery) && ((a = e).fn.imagesLoaded = function (t, e) {
            return new s(this, t, e).jqDeferred.promise(a(this))
        })
    }, s.makeJQueryPlugin(), s
}), function (t, e) {
    "function" == typeof define && define.amd ? define("jquery-bridget/jquery-bridget", ["jquery"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("jquery")) : t.jQueryBridget = e(t, t.jQuery)
}(window, function (t, e) {
    "use strict";

    function i(i, n, r) {
        (r = r || e || t.jQuery) && (n.prototype.option || (n.prototype.option = function (t) {
            r.isPlainObject(t) && (this.options = r.extend(!0, this.options, t))
        }), r.fn[i] = function (t) {
            if ("string" == typeof t) {
                var e = o.call(arguments, 1);
                return h = e, d = "$()." + i + '("' + (l = t) + '")', (s = this).each(function (t, e) {
                    var s = r.data(e, i);
                    if (s) {
                        var o = s[l];
                        if (o && "_" != l.charAt(0)) {
                            var n = o.apply(s, h);
                            c = void 0 === c ? n : c
                        } else a(d + " is not a valid method")
                    } else a(i + " not initialized. Cannot call methods, i.e. " + d)
                }), void 0 !== c ? c : s
            }
            var s, l, h, c, d, u;
            return u = t, this.each(function (t, e) {
                var s = r.data(e, i);
                s ? (s.option(u), s._init()) : (s = new n(e, u), r.data(e, i, s))
            }), this
        }, s(r))
    }

    function s(t) {
        !t || t && t.bridget || (t.bridget = i)
    }

    var o = Array.prototype.slice, n = t.console, a = void 0 === n ? function () {
    } : function (t) {
        n.error(t)
    };
    return s(e || t.jQuery), i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("ev-emitter/ev-emitter", e) : "object" == typeof module && module.exports ? module.exports = e() : t.EvEmitter = e()
}("undefined" != typeof window ? window : this, function () {
    function t() {
    }

    var e = t.prototype;
    return e.on = function (t, e) {
        if (t && e) {
            var i = this._events = this._events || {}, s = i[t] = i[t] || [];
            return -1 == s.indexOf(e) && s.push(e), this
        }
    }, e.once = function (t, e) {
        if (t && e) {
            this.on(t, e);
            var i = this._onceEvents = this._onceEvents || {};
            return (i[t] = i[t] || {})[e] = !0, this
        }
    }, e.off = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            var s = i.indexOf(e);
            return -1 != s && i.splice(s, 1), this
        }
    }, e.emitEvent = function (t, e) {
        var i = this._events && this._events[t];
        if (i && i.length) {
            i = i.slice(0), e = e || [];
            for (var s = this._onceEvents && this._onceEvents[t], o = 0; o < i.length; o++) {
                var n = i[o];
                s && s[n] && (this.off(t, n), delete s[n]), n.apply(this, e)
            }
            return this
        }
    }, e.allOff = function () {
        delete this._events, delete this._onceEvents
    }, t
}), function (t, e) {
    "function" == typeof define && define.amd ? define("get-size/get-size", e) : "object" == typeof module && module.exports ? module.exports = e() : t.getSize = e()
}(window, function () {
    "use strict";

    function t(t) {
        var e = parseFloat(t);
        return -1 == t.indexOf("%") && !isNaN(e) && e
    }

    function e(t) {
        var e = getComputedStyle(t);
        return e || o("Style returned " + e + ". Are you running this code in a hidden iframe on Firefox? See https://bit.ly/getsizebug1"), e
    }

    function i(o) {
        if (function () {
            if (!r) {
                r = !0;
                var o = document.createElement("div");
                o.style.width = "200px", o.style.padding = "1px 2px 3px 4px", o.style.borderStyle = "solid", o.style.borderWidth = "1px 2px 3px 4px", o.style.boxSizing = "border-box";
                var n = document.body || document.documentElement;
                n.appendChild(o);
                var a = e(o);
                s = 200 == Math.round(t(a.width)), i.isBoxSizeOuter = s, n.removeChild(o)
            }
        }(), "string" == typeof o && (o = document.querySelector(o)), o && "object" == typeof o && o.nodeType) {
            var l = e(o);
            if ("none" == l.display) return function () {
                for (var t = {
                    width: 0,
                    height: 0,
                    innerWidth: 0,
                    innerHeight: 0,
                    outerWidth: 0,
                    outerHeight: 0
                }, e = 0; e < a; e++) t[n[e]] = 0;
                return t
            }();
            var h = {};
            h.width = o.offsetWidth, h.height = o.offsetHeight;
            for (var c = h.isBorderBox = "border-box" == l.boxSizing, d = 0; d < a; d++) {
                var u = n[d], p = l[u], f = parseFloat(p);
                h[u] = isNaN(f) ? 0 : f
            }
            var m = h.paddingLeft + h.paddingRight, g = h.paddingTop + h.paddingBottom,
                v = h.marginLeft + h.marginRight, y = h.marginTop + h.marginBottom,
                b = h.borderLeftWidth + h.borderRightWidth, w = h.borderTopWidth + h.borderBottomWidth, _ = c && s,
                x = t(l.width);
            !1 !== x && (h.width = x + (_ ? 0 : m + b));
            var k = t(l.height);
            return !1 !== k && (h.height = k + (_ ? 0 : g + w)), h.innerWidth = h.width - (m + b), h.innerHeight = h.height - (g + w), h.outerWidth = h.width + v, h.outerHeight = h.height + y, h
        }
    }

    var s, o = "undefined" == typeof console ? function () {
        } : function (t) {
            console.error(t)
        },
        n = ["paddingLeft", "paddingRight", "paddingTop", "paddingBottom", "marginLeft", "marginRight", "marginTop", "marginBottom", "borderLeftWidth", "borderRightWidth", "borderTopWidth", "borderBottomWidth"],
        a = n.length, r = !1;
    return i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("desandro-matches-selector/matches-selector", e) : "object" == typeof module && module.exports ? module.exports = e() : t.matchesSelector = e()
}(window, function () {
    "use strict";
    var t = function () {
        var t = window.Element.prototype;
        if (t.matches) return "matches";
        if (t.matchesSelector) return "matchesSelector";
        for (var e = ["webkit", "moz", "ms", "o"], i = 0; i < e.length; i++) {
            var s = e[i] + "MatchesSelector";
            if (t[s]) return s
        }
    }();
    return function (e, i) {
        return e[t](i)
    }
}), function (t, e) {
    "function" == typeof define && define.amd ? define("fizzy-ui-utils/utils", ["desandro-matches-selector/matches-selector"], function (i) {
        return e(t, i)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("desandro-matches-selector")) : t.fizzyUIUtils = e(t, t.matchesSelector)
}(window, function (t, e) {
    var i = {
        extend: function (t, e) {
            for (var i in e) t[i] = e[i];
            return t
        }, modulo: function (t, e) {
            return (t % e + e) % e
        }
    }, s = Array.prototype.slice;
    i.makeArray = function (t) {
        return Array.isArray(t) ? t : null === t || void 0 === t ? [] : "object" == typeof t && "number" == typeof t.length ? s.call(t) : [t]
    }, i.removeFrom = function (t, e) {
        var i = t.indexOf(e);
        -1 != i && t.splice(i, 1)
    }, i.getParent = function (t, i) {
        for (; t.parentNode && t != document.body;) if (t = t.parentNode, e(t, i)) return t
    }, i.getQueryElement = function (t) {
        return "string" == typeof t ? document.querySelector(t) : t
    }, i.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, i.filterFindElements = function (t, s) {
        var o = [];
        return (t = i.makeArray(t)).forEach(function (t) {
            if (t instanceof HTMLElement) {
                if (!s) return void o.push(t);
                e(t, s) && o.push(t);
                for (var i = t.querySelectorAll(s), n = 0; n < i.length; n++) o.push(i[n])
            }
        }), o
    }, i.debounceMethod = function (t, e, i) {
        i = i || 100;
        var s = t.prototype[e], o = e + "Timeout";
        t.prototype[e] = function () {
            var t = this[o];
            clearTimeout(t);
            var e = arguments, n = this;
            this[o] = setTimeout(function () {
                s.apply(n, e), delete n[o]
            }, i)
        }
    }, i.docReady = function (t) {
        var e = document.readyState;
        "complete" == e || "interactive" == e ? setTimeout(t) : document.addEventListener("DOMContentLoaded", t)
    }, i.toDashed = function (t) {
        return t.replace(/(.)([A-Z])/g, function (t, e, i) {
            return e + "-" + i
        }).toLowerCase()
    };
    var o = t.console;
    return i.htmlInit = function (e, s) {
        i.docReady(function () {
            var n = i.toDashed(s), a = "data-" + n, r = document.querySelectorAll("[" + a + "]"),
                l = document.querySelectorAll(".js-" + n), h = i.makeArray(r).concat(i.makeArray(l)),
                c = a + "-options", d = t.jQuery;
            h.forEach(function (t) {
                var i, n = t.getAttribute(a) || t.getAttribute(c);
                try {
                    i = n && JSON.parse(n)
                } catch (e) {
                    return void (o && o.error("Error parsing " + a + " on " + t.className + ": " + e))
                }
                var r = new e(t, i);
                d && d.data(t, s, r)
            })
        })
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("outlayer/item", ["ev-emitter/ev-emitter", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("ev-emitter"), require("get-size")) : (t.Outlayer = {}, t.Outlayer.Item = e(t.EvEmitter, t.getSize))
}(window, function (t, e) {
    "use strict";

    function i(t, e) {
        t && (this.element = t, this.layout = e, this.position = {x: 0, y: 0}, this._create())
    }

    var s = document.documentElement.style, o = "string" == typeof s.transition ? "transition" : "WebkitTransition",
        n = "string" == typeof s.transform ? "transform" : "WebkitTransform",
        a = {WebkitTransition: "webkitTransitionEnd", transition: "transitionend"}[o], r = {
            transform: n,
            transition: o,
            transitionDuration: o + "Duration",
            transitionProperty: o + "Property",
            transitionDelay: o + "Delay"
        }, l = i.prototype = Object.create(t.prototype);
    l.constructor = i, l._create = function () {
        this._transn = {ingProperties: {}, clean: {}, onEnd: {}}, this.css({position: "absolute"})
    }, l.handleEvent = function (t) {
        var e = "on" + t.type;
        this[e] && this[e](t)
    }, l.getSize = function () {
        this.size = e(this.element)
    }, l.css = function (t) {
        var e = this.element.style;
        for (var i in t) {
            e[r[i] || i] = t[i]
        }
    }, l.getPosition = function () {
        var t = getComputedStyle(this.element), e = this.layout._getOption("originLeft"),
            i = this.layout._getOption("originTop"), s = t[e ? "left" : "right"], o = t[i ? "top" : "bottom"],
            n = parseFloat(s), a = parseFloat(o), r = this.layout.size;
        -1 != s.indexOf("%") && (n = n / 100 * r.width), -1 != o.indexOf("%") && (a = a / 100 * r.height), n = isNaN(n) ? 0 : n, a = isNaN(a) ? 0 : a, n -= e ? r.paddingLeft : r.paddingRight, a -= i ? r.paddingTop : r.paddingBottom, this.position.x = n, this.position.y = a
    }, l.layoutPosition = function () {
        var t = this.layout.size, e = {}, i = this.layout._getOption("originLeft"),
            s = this.layout._getOption("originTop"), o = i ? "paddingLeft" : "paddingRight", n = i ? "left" : "right",
            a = i ? "right" : "left", r = this.position.x + t[o];
        e[n] = this.getXValue(r), e[a] = "";
        var l = s ? "paddingTop" : "paddingBottom", h = s ? "top" : "bottom", c = s ? "bottom" : "top",
            d = this.position.y + t[l];
        e[h] = this.getYValue(d), e[c] = "", this.css(e), this.emitEvent("layout", [this])
    }, l.getXValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && !e ? t / this.layout.size.width * 100 + "%" : t + "px"
    }, l.getYValue = function (t) {
        var e = this.layout._getOption("horizontal");
        return this.layout.options.percentPosition && e ? t / this.layout.size.height * 100 + "%" : t + "px"
    }, l._transitionTo = function (t, e) {
        this.getPosition();
        var i = this.position.x, s = this.position.y, o = t == this.position.x && e == this.position.y;
        if (this.setPosition(t, e), !o || this.isTransitioning) {
            var n = t - i, a = e - s, r = {};
            r.transform = this.getTranslate(n, a), this.transition({
                to: r,
                onTransitionEnd: {transform: this.layoutPosition},
                isCleaning: !0
            })
        } else this.layoutPosition()
    }, l.getTranslate = function (t, e) {
        var i = this.layout._getOption("originLeft"), s = this.layout._getOption("originTop");
        return "translate3d(" + (t = i ? t : -t) + "px, " + (e = s ? e : -e) + "px, 0)"
    }, l.goTo = function (t, e) {
        this.setPosition(t, e), this.layoutPosition()
    }, l.moveTo = l._transitionTo, l.setPosition = function (t, e) {
        this.position.x = parseFloat(t), this.position.y = parseFloat(e)
    }, l._nonTransition = function (t) {
        this.css(t.to), t.isCleaning && this._removeStyles(t.to);
        for (var e in t.onTransitionEnd) t.onTransitionEnd[e].call(this)
    }, l.transition = function (t) {
        if (parseFloat(this.layout.options.transitionDuration)) {
            var e = this._transn;
            for (var i in t.onTransitionEnd) e.onEnd[i] = t.onTransitionEnd[i];
            for (i in t.to) e.ingProperties[i] = !0, t.isCleaning && (e.clean[i] = !0);
            if (t.from) {
                this.css(t.from);
                this.element.offsetHeight;
                null
            }
            this.enableTransition(t.to), this.css(t.to), this.isTransitioning = !0
        } else this._nonTransition(t)
    };
    var h = "opacity," + n.replace(/([A-Z])/g, function (t) {
        return "-" + t.toLowerCase()
    });
    l.enableTransition = function () {
        if (!this.isTransitioning) {
            var t = this.layout.options.transitionDuration;
            t = "number" == typeof t ? t + "ms" : t, this.css({
                transitionProperty: h,
                transitionDuration: t,
                transitionDelay: this.staggerDelay || 0
            }), this.element.addEventListener(a, this, !1)
        }
    }, l.onwebkitTransitionEnd = function (t) {
        this.ontransitionend(t)
    }, l.onotransitionend = function (t) {
        this.ontransitionend(t)
    };
    var c = {"-webkit-transform": "transform"};
    l.ontransitionend = function (t) {
        if (t.target === this.element) {
            var e = this._transn, i = c[t.propertyName] || t.propertyName;
            if (delete e.ingProperties[i], function (t) {
                for (var e in t) return !1;
                return !0
            }(e.ingProperties) && this.disableTransition(), i in e.clean && (this.element.style[t.propertyName] = "", delete e.clean[i]), i in e.onEnd) e.onEnd[i].call(this), delete e.onEnd[i];
            this.emitEvent("transitionEnd", [this])
        }
    }, l.disableTransition = function () {
        this.removeTransitionStyles(), this.element.removeEventListener(a, this, !1), this.isTransitioning = !1
    }, l._removeStyles = function (t) {
        var e = {};
        for (var i in t) e[i] = "";
        this.css(e)
    };
    var d = {transitionProperty: "", transitionDuration: "", transitionDelay: ""};
    return l.removeTransitionStyles = function () {
        this.css(d)
    }, l.stagger = function (t) {
        t = isNaN(t) ? 0 : t, this.staggerDelay = t + "ms"
    }, l.removeElem = function () {
        this.element.parentNode.removeChild(this.element), this.css({display: ""}), this.emitEvent("remove", [this])
    }, l.remove = function () {
        return o && parseFloat(this.layout.options.transitionDuration) ? (this.once("transitionEnd", function () {
            this.removeElem()
        }), void this.hide()) : void this.removeElem()
    }, l.reveal = function () {
        delete this.isHidden, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("visibleStyle")] = this.onRevealTransitionEnd, this.transition({
            from: t.hiddenStyle,
            to: t.visibleStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onRevealTransitionEnd = function () {
        this.isHidden || this.emitEvent("reveal")
    }, l.getHideRevealTransitionEndProperty = function (t) {
        var e = this.layout.options[t];
        if (e.opacity) return "opacity";
        for (var i in e) return i
    }, l.hide = function () {
        this.isHidden = !0, this.css({display: ""});
        var t = this.layout.options, e = {};
        e[this.getHideRevealTransitionEndProperty("hiddenStyle")] = this.onHideTransitionEnd, this.transition({
            from: t.visibleStyle,
            to: t.hiddenStyle,
            isCleaning: !0,
            onTransitionEnd: e
        })
    }, l.onHideTransitionEnd = function () {
        this.isHidden && (this.css({display: "none"}), this.emitEvent("hide"))
    }, l.destroy = function () {
        this.css({position: "", left: "", right: "", top: "", bottom: "", transition: "", transform: ""})
    }, i
}), function (t, e) {
    "use strict";
    "function" == typeof define && define.amd ? define("outlayer/outlayer", ["ev-emitter/ev-emitter", "get-size/get-size", "fizzy-ui-utils/utils", "./item"], function (i, s, o, n) {
        return e(t, i, s, o, n)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("ev-emitter"), require("get-size"), require("fizzy-ui-utils"), require("./item")) : t.Outlayer = e(t, t.EvEmitter, t.getSize, t.fizzyUIUtils, t.Outlayer.Item)
}(window, function (t, e, i, s, o) {
    "use strict";

    function n(t, e) {
        var i = s.getQueryElement(t);
        if (i) {
            this.element = i, l && (this.$element = l(this.element)), this.options = s.extend({}, this.constructor.defaults), this.option(e);
            var o = ++c;
            this.element.outlayerGUID = o, d[o] = this, this._create(), this._getOption("initLayout") && this.layout()
        } else r && r.error("Bad element for " + this.constructor.namespace + ": " + (i || t))
    }

    function a(t) {
        function e() {
            t.apply(this, arguments)
        }

        return e.prototype = Object.create(t.prototype), e.prototype.constructor = e, e
    }

    var r = t.console, l = t.jQuery, h = function () {
    }, c = 0, d = {};
    n.namespace = "outlayer", n.Item = o, n.defaults = {
        containerStyle: {position: "relative"},
        initLayout: !0,
        originLeft: !0,
        originTop: !0,
        resize: !0,
        resizeContainer: !0,
        transitionDuration: "0.4s",
        hiddenStyle: {opacity: 0, transform: "scale(0.001)"},
        visibleStyle: {opacity: 1, transform: "scale(1)"}
    };
    var u = n.prototype;
    s.extend(u, e.prototype), u.option = function (t) {
        s.extend(this.options, t)
    }, u._getOption = function (t) {
        var e = this.constructor.compatOptions[t];
        return e && void 0 !== this.options[e] ? this.options[e] : this.options[t]
    }, n.compatOptions = {
        initLayout: "isInitLayout",
        horizontal: "isHorizontal",
        layoutInstant: "isLayoutInstant",
        originLeft: "isOriginLeft",
        originTop: "isOriginTop",
        resize: "isResizeBound",
        resizeContainer: "isResizingContainer"
    }, u._create = function () {
        this.reloadItems(), this.stamps = [], this.stamp(this.options.stamp), s.extend(this.element.style, this.options.containerStyle), this._getOption("resize") && this.bindResize()
    }, u.reloadItems = function () {
        this.items = this._itemize(this.element.children)
    }, u._itemize = function (t) {
        for (var e = this._filterFindItemElements(t), i = this.constructor.Item, s = [], o = 0; o < e.length; o++) {
            var n = new i(e[o], this);
            s.push(n)
        }
        return s
    }, u._filterFindItemElements = function (t) {
        return s.filterFindElements(t, this.options.itemSelector)
    }, u.getItemElements = function () {
        return this.items.map(function (t) {
            return t.element
        })
    }, u.layout = function () {
        this._resetLayout(), this._manageStamps();
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        this.layoutItems(this.items, e), this._isLayoutInited = !0
    }, u._init = u.layout, u._resetLayout = function () {
        this.getSize()
    }, u.getSize = function () {
        this.size = i(this.element)
    }, u._getMeasurement = function (t, e) {
        var s, o = this.options[t];
        o ? ("string" == typeof o ? s = this.element.querySelector(o) : o instanceof HTMLElement && (s = o), this[t] = s ? i(s)[e] : o) : this[t] = 0
    }, u.layoutItems = function (t, e) {
        t = this._getItemsForLayout(t), this._layoutItems(t, e), this._postLayout()
    }, u._getItemsForLayout = function (t) {
        return t.filter(function (t) {
            return !t.isIgnored
        })
    }, u._layoutItems = function (t, e) {
        if (this._emitCompleteOnItems("layout", t), t && t.length) {
            var i = [];
            t.forEach(function (t) {
                var s = this._getItemLayoutPosition(t);
                s.item = t, s.isInstant = e || t.isLayoutInstant, i.push(s)
            }, this), this._processLayoutQueue(i)
        }
    }, u._getItemLayoutPosition = function () {
        return {x: 0, y: 0}
    }, u._processLayoutQueue = function (t) {
        this.updateStagger(), t.forEach(function (t, e) {
            this._positionItem(t.item, t.x, t.y, t.isInstant, e)
        }, this)
    }, u.updateStagger = function () {
        var t = this.options.stagger;
        return null === t || void 0 === t ? void (this.stagger = 0) : (this.stagger = function (t) {
            if ("number" == typeof t) return t;
            var e = t.match(/(^\d*\.?\d*)(\w*)/), i = e && e[1], s = e && e[2];
            return i.length ? (i = parseFloat(i)) * (p[s] || 1) : 0
        }(t), this.stagger)
    }, u._positionItem = function (t, e, i, s, o) {
        s ? t.goTo(e, i) : (t.stagger(o * this.stagger), t.moveTo(e, i))
    }, u._postLayout = function () {
        this.resizeContainer()
    }, u.resizeContainer = function () {
        if (this._getOption("resizeContainer")) {
            var t = this._getContainerSize();
            t && (this._setContainerMeasure(t.width, !0), this._setContainerMeasure(t.height, !1))
        }
    }, u._getContainerSize = h, u._setContainerMeasure = function (t, e) {
        if (void 0 !== t) {
            var i = this.size;
            i.isBorderBox && (t += e ? i.paddingLeft + i.paddingRight + i.borderLeftWidth + i.borderRightWidth : i.paddingBottom + i.paddingTop + i.borderTopWidth + i.borderBottomWidth), t = Math.max(t, 0), this.element.style[e ? "width" : "height"] = t + "px"
        }
    }, u._emitCompleteOnItems = function (t, e) {
        function i() {
            o.dispatchEvent(t + "Complete", null, [e])
        }

        function s() {
            ++a == n && i()
        }

        var o = this, n = e.length;
        if (e && n) {
            var a = 0;
            e.forEach(function (e) {
                e.once(t, s)
            })
        } else i()
    }, u.dispatchEvent = function (t, e, i) {
        var s = e ? [e].concat(i) : i;
        if (this.emitEvent(t, s), l) if (this.$element = this.$element || l(this.element), e) {
            var o = l.Event(e);
            o.type = t, this.$element.trigger(o, i)
        } else this.$element.trigger(t, i)
    }, u.ignore = function (t) {
        var e = this.getItem(t);
        e && (e.isIgnored = !0)
    }, u.unignore = function (t) {
        var e = this.getItem(t);
        e && delete e.isIgnored
    }, u.stamp = function (t) {
        (t = this._find(t)) && (this.stamps = this.stamps.concat(t), t.forEach(this.ignore, this))
    }, u.unstamp = function (t) {
        (t = this._find(t)) && t.forEach(function (t) {
            s.removeFrom(this.stamps, t), this.unignore(t)
        }, this)
    }, u._find = function (t) {
        if (t) return "string" == typeof t && (t = this.element.querySelectorAll(t)), s.makeArray(t)
    }, u._manageStamps = function () {
        this.stamps && this.stamps.length && (this._getBoundingRect(), this.stamps.forEach(this._manageStamp, this))
    }, u._getBoundingRect = function () {
        var t = this.element.getBoundingClientRect(), e = this.size;
        this._boundingRect = {
            left: t.left + e.paddingLeft + e.borderLeftWidth,
            top: t.top + e.paddingTop + e.borderTopWidth,
            right: t.right - (e.paddingRight + e.borderRightWidth),
            bottom: t.bottom - (e.paddingBottom + e.borderBottomWidth)
        }
    }, u._manageStamp = h, u._getElementOffset = function (t) {
        var e = t.getBoundingClientRect(), s = this._boundingRect, o = i(t);
        return {
            left: e.left - s.left - o.marginLeft,
            top: e.top - s.top - o.marginTop,
            right: s.right - e.right - o.marginRight,
            bottom: s.bottom - e.bottom - o.marginBottom
        }
    }, u.handleEvent = s.handleEvent, u.bindResize = function () {
        t.addEventListener("resize", this), this.isResizeBound = !0
    }, u.unbindResize = function () {
        t.removeEventListener("resize", this), this.isResizeBound = !1
    }, u.onresize = function () {
        this.resize()
    }, s.debounceMethod(n, "onresize", 100), u.resize = function () {
        this.isResizeBound && this.needsResizeLayout() && this.layout()
    }, u.needsResizeLayout = function () {
        var t = i(this.element);
        return this.size && t && t.innerWidth !== this.size.innerWidth
    }, u.addItems = function (t) {
        var e = this._itemize(t);
        return e.length && (this.items = this.items.concat(e)), e
    }, u.appended = function (t) {
        var e = this.addItems(t);
        e.length && (this.layoutItems(e, !0), this.reveal(e))
    }, u.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            var i = this.items.slice(0);
            this.items = e.concat(i), this._resetLayout(), this._manageStamps(), this.layoutItems(e, !0), this.reveal(e), this.layoutItems(i)
        }
    }, u.reveal = function (t) {
        if (this._emitCompleteOnItems("reveal", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.reveal()
            })
        }
    }, u.hide = function (t) {
        if (this._emitCompleteOnItems("hide", t), t && t.length) {
            var e = this.updateStagger();
            t.forEach(function (t, i) {
                t.stagger(i * e), t.hide()
            })
        }
    }, u.revealItemElements = function (t) {
        var e = this.getItems(t);
        this.reveal(e)
    }, u.hideItemElements = function (t) {
        var e = this.getItems(t);
        this.hide(e)
    }, u.getItem = function (t) {
        for (var e = 0; e < this.items.length; e++) {
            var i = this.items[e];
            if (i.element == t) return i
        }
    }, u.getItems = function (t) {
        var e = [];
        return (t = s.makeArray(t)).forEach(function (t) {
            var i = this.getItem(t);
            i && e.push(i)
        }, this), e
    }, u.remove = function (t) {
        var e = this.getItems(t);
        this._emitCompleteOnItems("remove", e), e && e.length && e.forEach(function (t) {
            t.remove(), s.removeFrom(this.items, t)
        }, this)
    }, u.destroy = function () {
        var t = this.element.style;
        t.height = "", t.position = "", t.width = "", this.items.forEach(function (t) {
            t.destroy()
        }), this.unbindResize();
        var e = this.element.outlayerGUID;
        delete d[e], delete this.element.outlayerGUID, l && l.removeData(this.element, this.constructor.namespace)
    }, n.data = function (t) {
        var e = (t = s.getQueryElement(t)) && t.outlayerGUID;
        return e && d[e]
    }, n.create = function (t, e) {
        var i = a(n);
        return i.defaults = s.extend({}, n.defaults), s.extend(i.defaults, e), i.compatOptions = s.extend({}, n.compatOptions), i.namespace = t, i.data = n.data, i.Item = a(o), s.htmlInit(i, t), l && l.bridget && l.bridget(t, i), i
    };
    var p = {ms: 1, s: 1e3};
    return n.Item = o, n
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/item", ["outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.Item = e(t.Outlayer))
}(window, function (t) {
    "use strict";

    function e() {
        t.Item.apply(this, arguments)
    }

    var i = e.prototype = Object.create(t.Item.prototype), s = i._create;
    i._create = function () {
        this.id = this.layout.itemGUID++ , s.call(this), this.sortData = {}
    }, i.updateSortData = function () {
        if (!this.isIgnored) {
            this.sortData.id = this.id, this.sortData["original-order"] = this.id, this.sortData.random = Math.random();
            var t = this.layout.options.getSortData, e = this.layout._sorters;
            for (var i in t) {
                var s = e[i];
                this.sortData[i] = s(this.element, this)
            }
        }
    };
    var o = i.destroy;
    return i.destroy = function () {
        o.apply(this, arguments), this.css({display: ""})
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-mode", ["get-size/get-size", "outlayer/outlayer"], e) : "object" == typeof module && module.exports ? module.exports = e(require("get-size"), require("outlayer")) : (t.Isotope = t.Isotope || {}, t.Isotope.LayoutMode = e(t.getSize, t.Outlayer))
}(window, function (t, e) {
    "use strict";

    function i(t) {
        this.isotope = t, t && (this.options = t.options[this.namespace], this.element = t.element, this.items = t.filteredItems, this.size = t.size)
    }

    var s = i.prototype;
    return ["_resetLayout", "_getItemLayoutPosition", "_manageStamp", "_getContainerSize", "_getElementOffset", "needsResizeLayout", "_getOption"].forEach(function (t) {
        s[t] = function () {
            return e.prototype[t].apply(this.isotope, arguments)
        }
    }), s.needsVerticalResizeLayout = function () {
        var e = t(this.isotope.element);
        return this.isotope.size && e && e.innerHeight != this.isotope.size.innerHeight
    }, s._getMeasurement = function () {
        this.isotope._getMeasurement.apply(this, arguments)
    }, s.getColumnWidth = function () {
        this.getSegmentSize("column", "Width")
    }, s.getRowHeight = function () {
        this.getSegmentSize("row", "Height")
    }, s.getSegmentSize = function (t, e) {
        var i = t + e, s = "outer" + e;
        if (this._getMeasurement(i, s), !this[i]) {
            var o = this.getFirstItemSize();
            this[i] = o && o[s] || this.isotope.size["inner" + e]
        }
    }, s.getFirstItemSize = function () {
        var e = this.isotope.filteredItems[0];
        return e && e.element && t(e.element)
    }, s.layout = function () {
        this.isotope.layout.apply(this.isotope, arguments)
    }, s.getSize = function () {
        this.isotope.getSize(), this.size = this.isotope.size
    }, i.modes = {}, i.create = function (t, e) {
        function o() {
            i.apply(this, arguments)
        }

        return o.prototype = Object.create(s), o.prototype.constructor = o, e && (o.options = e), o.prototype.namespace = t, i.modes[t] = o, o
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("masonry-layout/masonry", ["outlayer/outlayer", "get-size/get-size"], e) : "object" == typeof module && module.exports ? module.exports = e(require("outlayer"), require("get-size")) : t.Masonry = e(t.Outlayer, t.getSize)
}(window, function (t, e) {
    var i = t.create("masonry");
    i.compatOptions.fitWidth = "isFitWidth";
    var s = i.prototype;
    return s._resetLayout = function () {
        this.getSize(), this._getMeasurement("columnWidth", "outerWidth"), this._getMeasurement("gutter", "outerWidth"), this.measureColumns(), this.colYs = [];
        for (var t = 0; t < this.cols; t++) this.colYs.push(0);
        this.maxY = 0, this.horizontalColIndex = 0
    }, s.measureColumns = function () {
        if (this.getContainerWidth(), !this.columnWidth) {
            var t = this.items[0], i = t && t.element;
            this.columnWidth = i && e(i).outerWidth || this.containerWidth
        }
        var s = this.columnWidth += this.gutter, o = this.containerWidth + this.gutter, n = o / s, a = s - o % s;
        n = Math[a && a < 1 ? "round" : "floor"](n), this.cols = Math.max(n, 1)
    }, s.getContainerWidth = function () {
        var t = this._getOption("fitWidth") ? this.element.parentNode : this.element, i = e(t);
        this.containerWidth = i && i.innerWidth
    }, s._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth % this.columnWidth,
            i = Math[e && e < 1 ? "round" : "ceil"](t.size.outerWidth / this.columnWidth);
        i = Math.min(i, this.cols);
        for (var s = this[this.options.horizontalOrder ? "_getHorizontalColPosition" : "_getTopColPosition"](i, t), o = {
            x: this.columnWidth * s.col,
            y: s.y
        }, n = s.y + t.size.outerHeight, a = i + s.col, r = s.col; r < a; r++) this.colYs[r] = n;
        return o
    }, s._getTopColPosition = function (t) {
        var e = this._getTopColGroup(t), i = Math.min.apply(Math, e);
        return {col: e.indexOf(i), y: i}
    }, s._getTopColGroup = function (t) {
        if (t < 2) return this.colYs;
        for (var e = [], i = this.cols + 1 - t, s = 0; s < i; s++) e[s] = this._getColGroupY(s, t);
        return e
    }, s._getColGroupY = function (t, e) {
        if (e < 2) return this.colYs[t];
        var i = this.colYs.slice(t, t + e);
        return Math.max.apply(Math, i)
    }, s._getHorizontalColPosition = function (t, e) {
        var i = this.horizontalColIndex % this.cols;
        i = t > 1 && i + t > this.cols ? 0 : i;
        var s = e.size.outerWidth && e.size.outerHeight;
        return this.horizontalColIndex = s ? i + t : this.horizontalColIndex, {col: i, y: this._getColGroupY(i, t)}
    }, s._manageStamp = function (t) {
        var i = e(t), s = this._getElementOffset(t), o = this._getOption("originLeft") ? s.left : s.right,
            n = o + i.outerWidth, a = Math.floor(o / this.columnWidth);
        a = Math.max(0, a);
        var r = Math.floor(n / this.columnWidth);
        r -= n % this.columnWidth ? 0 : 1, r = Math.min(this.cols - 1, r);
        for (var l = (this._getOption("originTop") ? s.top : s.bottom) + i.outerHeight, h = a; h <= r; h++) this.colYs[h] = Math.max(l, this.colYs[h])
    }, s._getContainerSize = function () {
        this.maxY = Math.max.apply(Math, this.colYs);
        var t = {height: this.maxY};
        return this._getOption("fitWidth") && (t.width = this._getContainerFitWidth()), t
    }, s._getContainerFitWidth = function () {
        for (var t = 0, e = this.cols; --e && 0 === this.colYs[e];) t++;
        return (this.cols - t) * this.columnWidth - this.gutter
    }, s.needsResizeLayout = function () {
        var t = this.containerWidth;
        return this.getContainerWidth(), t != this.containerWidth
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/masonry", ["../layout-mode", "masonry-layout/masonry"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode"), require("masonry-layout")) : e(t.Isotope.LayoutMode, t.Masonry)
}(window, function (t, e) {
    "use strict";
    var i = t.create("masonry"), s = i.prototype, o = {_getElementOffset: !0, layout: !0, _getMeasurement: !0};
    for (var n in e.prototype) o[n] || (s[n] = e.prototype[n]);
    var a = s.measureColumns;
    s.measureColumns = function () {
        this.items = this.isotope.filteredItems, a.call(this)
    };
    var r = s._getOption;
    return s._getOption = function (t) {
        return "fitWidth" == t ? void 0 !== this.options.isFitWidth ? this.options.isFitWidth : this.options.fitWidth : r.apply(this.isotope, arguments)
    }, i
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/fit-rows", ["../layout-mode"], e) : "object" == typeof exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("fitRows"), i = e.prototype;
    return i._resetLayout = function () {
        this.x = 0, this.y = 0, this.maxY = 0, this._getMeasurement("gutter", "outerWidth")
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = t.size.outerWidth + this.gutter, i = this.isotope.size.innerWidth + this.gutter;
        0 !== this.x && e + this.x > i && (this.x = 0, this.y = this.maxY);
        var s = {x: this.x, y: this.y};
        return this.maxY = Math.max(this.maxY, this.y + t.size.outerHeight), this.x += e, s
    }, i._getContainerSize = function () {
        return {height: this.maxY}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define("isotope-layout/js/layout-modes/vertical", ["../layout-mode"], e) : "object" == typeof module && module.exports ? module.exports = e(require("../layout-mode")) : e(t.Isotope.LayoutMode)
}(window, function (t) {
    "use strict";
    var e = t.create("vertical", {horizontalAlignment: 0}), i = e.prototype;
    return i._resetLayout = function () {
        this.y = 0
    }, i._getItemLayoutPosition = function (t) {
        t.getSize();
        var e = (this.isotope.size.innerWidth - t.size.outerWidth) * this.options.horizontalAlignment, i = this.y;
        return this.y += t.size.outerHeight, {x: e, y: i}
    }, i._getContainerSize = function () {
        return {height: this.y}
    }, e
}), function (t, e) {
    "function" == typeof define && define.amd ? define(["outlayer/outlayer", "get-size/get-size", "desandro-matches-selector/matches-selector", "fizzy-ui-utils/utils", "isotope-layout/js/item", "isotope-layout/js/layout-mode", "isotope-layout/js/layout-modes/masonry", "isotope-layout/js/layout-modes/fit-rows", "isotope-layout/js/layout-modes/vertical"], function (i, s, o, n, a, r) {
        return e(t, i, s, o, n, a, r)
    }) : "object" == typeof module && module.exports ? module.exports = e(t, require("outlayer"), require("get-size"), require("desandro-matches-selector"), require("fizzy-ui-utils"), require("isotope-layout/js/item"), require("isotope-layout/js/layout-mode"), require("isotope-layout/js/layout-modes/masonry"), require("isotope-layout/js/layout-modes/fit-rows"), require("isotope-layout/js/layout-modes/vertical")) : t.Isotope = e(t, t.Outlayer, t.getSize, t.matchesSelector, t.fizzyUIUtils, t.Isotope.Item, t.Isotope.LayoutMode)
}(window, function (t, e, i, s, o, n, a) {
    var r = t.jQuery, l = String.prototype.trim ? function (t) {
        return t.trim()
    } : function (t) {
        return t.replace(/^\s+|\s+$/g, "")
    }, h = e.create("isotope", {layoutMode: "masonry", isJQueryFiltering: !0, sortAscending: !0});
    h.Item = n, h.LayoutMode = a;
    var c = h.prototype;
    c._create = function () {
        this.itemGUID = 0, this._sorters = {}, this._getSorters(), e.prototype._create.call(this), this.modes = {}, this.filteredItems = this.items, this.sortHistory = ["original-order"];
        for (var t in a.modes) this._initLayoutMode(t)
    }, c.reloadItems = function () {
        this.itemGUID = 0, e.prototype.reloadItems.call(this)
    }, c._itemize = function () {
        for (var t = e.prototype._itemize.apply(this, arguments), i = 0; i < t.length; i++) {
            t[i].id = this.itemGUID++
        }
        return this._updateItemsSortData(t), t
    }, c._initLayoutMode = function (t) {
        var e = a.modes[t], i = this.options[t] || {};
        this.options[t] = e.options ? o.extend(e.options, i) : i, this.modes[t] = new e(this)
    }, c.layout = function () {
        return !this._isLayoutInited && this._getOption("initLayout") ? void this.arrange() : void this._layout()
    }, c._layout = function () {
        var t = this._getIsInstant();
        this._resetLayout(), this._manageStamps(), this.layoutItems(this.filteredItems, t), this._isLayoutInited = !0
    }, c.arrange = function (t) {
        this.option(t), this._getIsInstant();
        var e = this._filter(this.items);
        this.filteredItems = e.matches, this._bindArrangeComplete(), this._isInstant ? this._noTransition(this._hideReveal, [e]) : this._hideReveal(e), this._sort(), this._layout()
    }, c._init = c.arrange, c._hideReveal = function (t) {
        this.reveal(t.needReveal), this.hide(t.needHide)
    }, c._getIsInstant = function () {
        var t = this._getOption("layoutInstant"), e = void 0 !== t ? t : !this._isLayoutInited;
        return this._isInstant = e, e
    }, c._bindArrangeComplete = function () {
        function t() {
            e && i && s && o.dispatchEvent("arrangeComplete", null, [o.filteredItems])
        }

        var e, i, s, o = this;
        this.once("layoutComplete", function () {
            e = !0, t()
        }), this.once("hideComplete", function () {
            i = !0, t()
        }), this.once("revealComplete", function () {
            s = !0, t()
        })
    }, c._filter = function (t) {
        var e = this.options.filter;
        e = e || "*";
        for (var i = [], s = [], o = [], n = this._getFilterTest(e), a = 0; a < t.length; a++) {
            var r = t[a];
            if (!r.isIgnored) {
                var l = n(r);
                l && i.push(r), l && r.isHidden ? s.push(r) : l || r.isHidden || o.push(r)
            }
        }
        return {matches: i, needReveal: s, needHide: o}
    }, c._getFilterTest = function (t) {
        return r && this.options.isJQueryFiltering ? function (e) {
            return r(e.element).is(t)
        } : "function" == typeof t ? function (e) {
            return t(e.element)
        } : function (e) {
            return s(e.element, t)
        }
    }, c.updateSortData = function (t) {
        var e;
        t ? (t = o.makeArray(t), e = this.getItems(t)) : e = this.items, this._getSorters(), this._updateItemsSortData(e)
    }, c._getSorters = function () {
        var t = this.options.getSortData;
        for (var e in t) {
            var i = t[e];
            this._sorters[e] = d(i)
        }
    }, c._updateItemsSortData = function (t) {
        for (var e = t && t.length, i = 0; e && i < e; i++) {
            t[i].updateSortData()
        }
    };
    var d = function () {
        return function (t) {
            if ("string" != typeof t) return t;
            var e, i, s = l(t).split(" "), o = s[0], n = o.match(/^\[(.+)\]$/), a = n && n[1],
                r = (i = o, (e = a) ? function (t) {
                    return t.getAttribute(e)
                } : function (t) {
                    var e = t.querySelector(i);
                    return e && e.textContent
                }), c = h.sortDataParsers[s[1]];
            return c ? function (t) {
                return t && c(r(t))
            } : function (t) {
                return t && r(t)
            }
        }
    }();
    h.sortDataParsers = {
        parseInt: function (t) {
            return parseInt(t, 10)
        }, parseFloat: function (t) {
            return parseFloat(t)
        }
    }, c._sort = function () {
        if (this.options.sortBy) {
            var t = o.makeArray(this.options.sortBy);
            this._getIsSameSortBy(t) || (this.sortHistory = t.concat(this.sortHistory));
            var e = (i = this.sortHistory, s = this.options.sortAscending, function (t, e) {
                for (var o = 0; o < i.length; o++) {
                    var n = i[o], a = t.sortData[n], r = e.sortData[n];
                    if (a > r || a < r) {
                        var l = void 0 !== s[n] ? s[n] : s;
                        return (a > r ? 1 : -1) * (l ? 1 : -1)
                    }
                }
                return 0
            });
            this.filteredItems.sort(e)
        }
        var i, s
    }, c._getIsSameSortBy = function (t) {
        for (var e = 0; e < t.length; e++) if (t[e] != this.sortHistory[e]) return !1;
        return !0
    }, c._mode = function () {
        var t = this.options.layoutMode, e = this.modes[t];
        if (!e) throw new Error("No layout mode: " + t);
        return e.options = this.options[t], e
    }, c._resetLayout = function () {
        e.prototype._resetLayout.call(this), this._mode()._resetLayout()
    }, c._getItemLayoutPosition = function (t) {
        return this._mode()._getItemLayoutPosition(t)
    }, c._manageStamp = function (t) {
        this._mode()._manageStamp(t)
    }, c._getContainerSize = function () {
        return this._mode()._getContainerSize()
    }, c.needsResizeLayout = function () {
        return this._mode().needsResizeLayout()
    }, c.appended = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i = this._filterRevealAdded(e);
            this.filteredItems = this.filteredItems.concat(i)
        }
    }, c.prepended = function (t) {
        var e = this._itemize(t);
        if (e.length) {
            this._resetLayout(), this._manageStamps();
            var i = this._filterRevealAdded(e);
            this.layoutItems(this.filteredItems), this.filteredItems = i.concat(this.filteredItems), this.items = e.concat(this.items)
        }
    }, c._filterRevealAdded = function (t) {
        var e = this._filter(t);
        return this.hide(e.needHide), this.reveal(e.matches), this.layoutItems(e.matches, !0), e.matches
    }, c.insert = function (t) {
        var e = this.addItems(t);
        if (e.length) {
            var i, s, o = e.length;
            for (i = 0; i < o; i++) s = e[i], this.element.appendChild(s.element);
            var n = this._filter(e).matches;
            for (i = 0; i < o; i++) e[i].isLayoutInstant = !0;
            for (this.arrange(), i = 0; i < o; i++) delete e[i].isLayoutInstant;
            this.reveal(n)
        }
    };
    var u = c.remove;
    return c.remove = function (t) {
        t = o.makeArray(t);
        var e = this.getItems(t);
        u.call(this, t);
        for (var i = e && e.length, s = 0; i && s < i; s++) {
            var n = e[s];
            o.removeFrom(this.filteredItems, n)
        }
    }, c.shuffle = function () {
        for (var t = 0; t < this.items.length; t++) {
            this.items[t].sortData.random = Math.random()
        }
        this.options.sortBy = "random", this._sort(), this._layout()
    }, c._noTransition = function (t, e) {
        var i = this.options.transitionDuration;
        this.options.transitionDuration = 0;
        var s = t.apply(this, e);
        return this.options.transitionDuration = i, s
    }, c.getFilteredItemElements = function () {
        return this.filteredItems.map(function (t) {
            return t.element
        })
    }, h
});