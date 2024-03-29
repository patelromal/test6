/*! jQuery v3.2.1 | (c) JS Foundation and other contributors | jquery.org/license */
!function(a,b){"use strict";"object"==typeof module&&"object"==typeof module.exports?module.exports=a.document?b(a,!0):function(a){if(!a.document)throw new Error("jQuery requires a window with a document");return b(a)}:b(a)}("undefined"!=typeof window?window:this,function(a,b){"use strict";var c=[],d=a.document,e=Object.getPrototypeOf,f=c.slice,g=c.concat,h=c.push,i=c.indexOf,j={},k=j.toString,l=j.hasOwnProperty,m=l.toString,n=m.call(Object),o={};function p(a,b){b=b||d;var c=b.createElement("script");c.text=a,b.head.appendChild(c).parentNode.removeChild(c)}var q="3.2.1",r=function(a,b){return new r.fn.init(a,b)},s=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g,t=/^-ms-/,u=/-([a-z])/g,v=function(a,b){return b.toUpperCase()};r.fn=r.prototype={jquery:q,constructor:r,length:0,toArray:function(){return f.call(this)},get:function(a){return null==a?f.call(this):a<0?this[a+this.length]:this[a]},pushStack:function(a){var b=r.merge(this.constructor(),a);return b.prevObject=this,b},each:function(a){return r.each(this,a)},map:function(a){return this.pushStack(r.map(this,function(b,c){return a.call(b,c,b)}))},slice:function(){return this.pushStack(f.apply(this,arguments))},first:function(){return this.eq(0)},last:function(){return this.eq(-1)},eq:function(a){var b=this.length,c=+a+(a<0?b:0);return this.pushStack(c>=0&&c<b?[this[c]]:[])},end:function(){return this.prevObject||this.constructor()},push:h,sort:c.sort,splice:c.splice},r.extend=r.fn.extend=function(){var a,b,c,d,e,f,g=arguments[0]||{},h=1,i=arguments.length,j=!1;for("boolean"==typeof g&&(j=g,g=arguments[h]||{},h++),"object"==typeof g||r.isFunction(g)||(g={}),h===i&&(g=this,h--);h<i;h++)if(null!=(a=arguments[h]))for(b in a)c=g[b],d=a[b],g!==d&&(j&&d&&(r.isPlainObject(d)||(e=Array.isArray(d)))?(e?(e=!1,f=c&&Array.isArray(c)?c:[]):f=c&&r.isPlainObject(c)?c:{},g[b]=r.extend(j,f,d)):void 0!==d&&(g[b]=d));return g},r.extend({expando:"jQuery"+(q+Math.random()).replace(/\D/g,""),isReady:!0,error:function(a){throw new Error(a)},noop:function(){},isFunction:function(a){return"function"===r.type(a)},isWindow:function(a){return null!=a&&a===a.window},isNumeric:function(a){var b=r.type(a);return("number"===b||"string"===b)&&!isNaN(a-parseFloat(a))},isPlainObject:function(a){var b,c;return!(!a||"[object Object]"!==k.call(a))&&(!(b=e(a))||(c=l.call(b,"constructor")&&b.constructor,"function"==typeof c&&m.call(c)===n))},isEmptyObject:function(a){var b;for(b in a)return!1;return!0},type:function(a){return null==a?a+"":"object"==typeof a||"function"==typeof a?j[k.call(a)]||"object":typeof a},globalEval:function(a){p(a)},camelCase:function(a){return a.replace(t,"ms-").replace(u,v)},each:function(a,b){var c,d=0;if(w(a)){for(c=a.length;d<c;d++)if(b.call(a[d],d,a[d])===!1)break}else for(d in a)if(b.call(a[d],d,a[d])===!1)break;return a},trim:function(a){return null==a?"":(a+"").replace(s,"")},makeArray:function(a,b){var c=b||[];return null!=a&&(w(Object(a))?r.merge(c,"string"==typeof a?[a]:a):h.call(c,a)),c},inArray:function(a,b,c){return null==b?-1:i.call(b,a,c)},merge:function(a,b){for(var c=+b.length,d=0,e=a.length;d<c;d++)a[e++]=b[d];return a.length=e,a},grep:function(a,b,c){for(var d,e=[],f=0,g=a.length,h=!c;f<g;f++)d=!b(a[f],f),d!==h&&e.push(a[f]);return e},map:function(a,b,c){var d,e,f=0,h=[];if(w(a))for(d=a.length;f<d;f++)e=b(a[f],f,c),null!=e&&h.push(e);else for(f in a)e=b(a[f],f,c),null!=e&&h.push(e);return g.apply([],h)},guid:1,proxy:function(a,b){var c,d,e;if("string"==typeof b&&(c=a[b],b=a,a=c),r.isFunction(a))return d=f.call(arguments,2),e=function(){return a.apply(b||this,d.concat(f.call(arguments)))},e.guid=a.guid=a.guid||r.guid++,e},now:Date.now,support:o}),"function"==typeof Symbol&&(r.fn[Symbol.iterator]=c[Symbol.iterator]),r.each("Boolean Number String Function Array Date RegExp Object Error Symbol".split(" "),function(a,b){j["[object "+b+"]"]=b.toLowerCase()});function w(a){var b=!!a&&"length"in a&&a.length,c=r.type(a);return"function"!==c&&!r.isWindow(a)&&("array"===c||0===b||"number"==typeof b&&b>0&&b-1 in a)}var x=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u="sizzle"+1*new Date,v=a.document,w=0,x=0,y=ha(),z=ha(),A=ha(),B=function(a,b){return a===b&&(l=!0),0},C={}.hasOwnProperty,D=[],E=D.pop,F=D.push,G=D.push,H=D.slice,I=function(a,b){for(var c=0,d=a.length;c<d;c++)if(a[c]===b)return c;return-1},J="checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|ismap|loop|multiple|open|readonly|required|scoped",K="[\\x20\\t\\r\\n\\f]",L="(?:\\\\.|[\\w-]|[^\0-\\xa0])+",M="\\["+K+"*("+L+")(?:"+K+"*([*^$|!~]?=)"+K+"*(?:'((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\"|("+L+"))|)"+K+"*\\]",N=":("+L+")(?:\\((('((?:\\\\.|[^\\\\'])*)'|\"((?:\\\\.|[^\\\\\"])*)\")|((?:\\\\.|[^\\\\()[\\]]|"+M+")*)|.*)\\)|)",O=new RegExp(K+"+","g"),P=new RegExp("^"+K+"+|((?:^|[^\\\\])(?:\\\\.)*)"+K+"+$","g"),Q=new RegExp("^"+K+"*,"+K+"*"),R=new RegExp("^"+K+"*([>+~]|"+K+")"+K+"*"),S=new RegExp("="+K+"*([^\\]'\"]*?)"+K+"*\\]","g"),T=new RegExp(N),U=new RegExp("^"+L+"$"),V={ID:new RegExp("^#("+L+")"),CLASS:new RegExp("^\\.("+L+")"),TAG:new RegExp("^("+L+"|[*])"),ATTR:new RegExp("^"+M),PSEUDO:new RegExp("^"+N),CHILD:new RegExp("^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\("+K+"*(even|odd|(([+-]|)(\\d*)n|)"+K+"*(?:([+-]|)"+K+"*(\\d+)|))"+K+"*\\)|)","i"),bool:new RegExp("^(?:"+J+")$","i"),needsContext:new RegExp("^"+K+"*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\("+K+"*((?:-\\d)?\\d*)"+K+"*\\)|)(?=[^-]|$)","i")},W=/^(?:input|select|textarea|button)$/i,X=/^h\d$/i,Y=/^[^{]+\{\s*\[native \w/,Z=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,$=/[+~]/,_=new RegExp("\\\\([\\da-f]{1,6}"+K+"?|("+K+")|.)","ig"),aa=function(a,b,c){var d="0x"+b-65536;return d!==d||c?b:d<0?String.fromCharCode(d+65536):String.fromCharCode(d>>10|55296,1023&d|56320)},ba=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,ca=function(a,b){return b?"\0"===a?"\ufffd":a.slice(0,-1)+"\\"+a.charCodeAt(a.length-1).toString(16)+" ":"\\"+a},da=function(){m()},ea=ta(function(a){return a.disabled===!0&&("form"in a||"label"in a)},{dir:"parentNode",next:"legend"});try{G.apply(D=H.call(v.childNodes),v.childNodes),D[v.childNodes.length].nodeType}catch(fa){G={apply:D.length?function(a,b){F.apply(a,H.call(b))}:function(a,b){var c=a.length,d=0;while(a[c++]=b[d++]);a.length=c-1}}}function ga(a,b,d,e){var f,h,j,k,l,o,r,s=b&&b.ownerDocument,w=b?b.nodeType:9;if(d=d||[],"string"!=typeof a||!a||1!==w&&9!==w&&11!==w)return d;if(!e&&((b?b.ownerDocument||b:v)!==n&&m(b),b=b||n,p)){if(11!==w&&(l=Z.exec(a)))if(f=l[1]){if(9===w){if(!(j=b.getElementById(f)))return d;if(j.id===f)return d.push(j),d}else if(s&&(j=s.getElementById(f))&&t(b,j)&&j.id===f)return d.push(j),d}else{if(l[2])return G.apply(d,b.getElementsByTagName(a)),d;if((f=l[3])&&c.getElementsByClassName&&b.getElementsByClassName)return G.apply(d,b.getElementsByClassName(f)),d}if(c.qsa&&!A[a+" "]&&(!q||!q.test(a))){if(1!==w)s=b,r=a;else if("object"!==b.nodeName.toLowerCase()){(k=b.getAttribute("id"))?k=k.replace(ba,ca):b.setAttribute("id",k=u),o=g(a),h=o.length;while(h--)o[h]="#"+k+" "+sa(o[h]);r=o.join(","),s=$.test(a)&&qa(b.parentNode)||b}if(r)try{return G.apply(d,s.querySelectorAll(r)),d}catch(x){}finally{k===u&&b.removeAttribute("id")}}}return i(a.replace(P,"$1"),b,d,e)}function ha(){var a=[];function b(c,e){return a.push(c+" ")>d.cacheLength&&delete b[a.shift()],b[c+" "]=e}return b}function ia(a){return a[u]=!0,a}function ja(a){var b=n.createElement("fieldset");try{return!!a(b)}catch(c){return!1}finally{b.parentNode&&b.parentNode.removeChild(b),b=null}}function ka(a,b){var c=a.split("|"),e=c.length;while(e--)d.attrHandle[c[e]]=b}function la(a,b){var c=b&&a,d=c&&1===a.nodeType&&1===b.nodeType&&a.sourceIndex-b.sourceIndex;if(d)return d;if(c)while(c=c.nextSibling)if(c===b)return-1;return a?1:-1}function ma(a){return function(b){var c=b.nodeName.toLowerCase();return"input"===c&&b.type===a}}function na(a){return function(b){var c=b.nodeName.toLowerCase();return("input"===c||"button"===c)&&b.type===a}}function oa(a){return function(b){return"form"in b?b.parentNode&&b.disabled===!1?"label"in b?"label"in b.parentNode?b.parentNode.disabled===a:b.disabled===a:b.isDisabled===a||b.isDisabled!==!a&&ea(b)===a:b.disabled===a:"label"in b&&b.disabled===a}}function pa(a){return ia(function(b){return b=+b,ia(function(c,d){var e,f=a([],c.length,b),g=f.length;while(g--)c[e=f[g]]&&(c[e]=!(d[e]=c[e]))})})}function qa(a){return a&&"undefined"!=typeof a.getElementsByTagName&&a}c=ga.support={},f=ga.isXML=function(a){var b=a&&(a.ownerDocument||a).documentElement;return!!b&&"HTML"!==b.nodeName},m=ga.setDocument=function(a){var b,e,g=a?a.ownerDocument||a:v;return g!==n&&9===g.nodeType&&g.documentElement?(n=g,o=n.documentElement,p=!f(n),v!==n&&(e=n.defaultView)&&e.top!==e&&(e.addEventListener?e.addEventListener("unload",da,!1):e.attachEvent&&e.attachEvent("onunload",da)),c.attributes=ja(function(a){return a.className="i",!a.getAttribute("className")}),c.getElementsByTagName=ja(function(a){return a.appendChild(n.createComment("")),!a.getElementsByTagName("*").length}),c.getElementsByClassName=Y.test(n.getElementsByClassName),c.getById=ja(function(a){return o.appendChild(a).id=u,!n.getElementsByName||!n.getElementsByName(u).length}),c.getById?(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){return a.getAttribute("id")===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c=b.getElementById(a);return c?[c]:[]}}):(d.filter.ID=function(a){var b=a.replace(_,aa);return function(a){var c="undefined"!=typeof a.getAttributeNode&&a.getAttributeNode("id");return c&&c.value===b}},d.find.ID=function(a,b){if("undefined"!=typeof b.getElementById&&p){var c,d,e,f=b.getElementById(a);if(f){if(c=f.getAttributeNode("id"),c&&c.value===a)return[f];e=b.getElementsByName(a),d=0;while(f=e[d++])if(c=f.getAttributeNode("id"),c&&c.value===a)return[f]}return[]}}),d.find.TAG=c.getElementsByTagName?function(a,b){return"undefined"!=typeof b.getElementsByTagName?b.getElementsByTagName(a):c.qsa?b.querySelectorAll(a):void 0}:function(a,b){var c,d=[],e=0,f=b.getElementsByTagName(a);if("*"===a){while(c=f[e++])1===c.nodeType&&d.push(c);return d}return f},d.find.CLASS=c.getElementsByClassName&&function(a,b){if("undefined"!=typeof b.getElementsByClassName&&p)return b.getElementsByClassName(a)},r=[],q=[],(c.qsa=Y.test(n.querySelectorAll))&&(ja(function(a){o.appendChild(a).innerHTML="<a id='"+u+"'></a><select id='"+u+"-\r\\' msallowcapture=''><option selected=''></option></select>",a.querySelectorAll("[msallowcapture^='']").length&&q.push("[*^$]="+K+"*(?:''|\"\")"),a.querySelectorAll("[selected]").length||q.push("\\["+K+"*(?:value|"+J+")"),a.querySelectorAll("[id~="+u+"-]").length||q.push("~="),a.querySelectorAll(":checked").length||q.push(":checked"),a.querySelectorAll("a#"+u+"+*").length||q.push(".#.+[+~]")}),ja(function(a){a.innerHTML="<a href='' disabled='disabled'></a><select disabled='disabled'><option/></select>";var b=n.createElement("input");b.setAttribute("type","hidden"),a.appendChild(b).setAttribute("name","D"),a.querySelectorAll("[name=d]").length&&q.push("name"+K+"*[*^$|!~]?="),2!==a.querySelectorAll(":enabled").length&&q.push(":enabled",":disabled"),o.appendChild(a).disabled=!0,2!==a.querySelectorAll(":disabled").length&&q.push(":enabled",":disabled"),a.querySelectorAll("*,:x"),q.push(",.*:")})),(c.matchesSelector=Y.test(s=o.matches||o.webkitMatchesSelector||o.mozMatchesSelector||o.oMatchesSelector||o.msMatchesSelector))&&ja(function(a){c.disconnectedMatch=s.call(a,"*"),s.call(a,"[s!='']:x"),r.push("!=",N)}),q=q.length&&new RegExp(q.join("|")),r=r.length&&new RegExp(r.join("|")),b=Y.test(o.compareDocumentPosition),t=b||Y.test(o.contains)?function(a,b){var c=9===a.nodeType?a.documentElement:a,d=b&&b.parentNode;return a===d||!(!d||1!==d.nodeType||!(c.contains?c.contains(d):a.compareDocumentPosition&&16&a.compareDocumentPosition(d)))}:function(a,b){if(b)while(b=b.parentNode)if(b===a)return!0;return!1},B=b?function(a,b){if(a===b)return l=!0,0;var d=!a.compareDocumentPosition-!b.compareDocumentPosition;return d?d:(d=(a.ownerDocument||a)===(b.ownerDocument||b)?a.compareDocumentPosition(b):1,1&d||!c.sortDetached&&b.compareDocumentPosition(a)===d?a===n||a.ownerDocument===v&&t(v,a)?-1:b===n||b.ownerDocument===v&&t(v,b)?1:k?I(k,a)-I(k,b):0:4&d?-1:1)}:function(a,b){if(a===b)return l=!0,0;var c,d=0,e=a.parentNode,f=b.parentNode,g=[a],h=[b];if(!e||!f)return a===n?-1:b===n?1:e?-1:f?1:k?I(k,a)-I(k,b):0;if(e===f)return la(a,b);c=a;while(c=c.parentNode)g.unshift(c);c=b;while(c=c.parentNode)h.unshift(c);while(g[d]===h[d])d++;return d?la(g[d],h[d]):g[d]===v?-1:h[d]===v?1:0},n):n},ga.matches=function(a,b){return ga(a,null,null,b)},ga.matchesSelector=function(a,b){if((a.ownerDocument||a)!==n&&m(a),b=b.replace(S,"='$1']"),c.matchesSelector&&p&&!A[b+" "]&&(!r||!r.test(b))&&(!q||!q.test(b)))try{var d=s.call(a,b);if(d||c.disconnectedMatch||a.document&&11!==a.document.nodeType)return d}catch(e){}return ga(b,n,null,[a]).length>0},ga.contains=function(a,b){return(a.ownerDocument||a)!==n&&m(a),t(a,b)},ga.attr=function(a,b){(a.ownerDocument||a)!==n&&m(a);var e=d.attrHandle[b.toLowerCase()],f=e&&C.call(d.attrHandle,b.toLowerCase())?e(a,b,!p):void 0;return void 0!==f?f:c.attributes||!p?a.getAttribute(b):(f=a.getAttributeNode(b))&&f.specified?f.value:null},ga.escape=function(a){return(a+"").replace(ba,ca)},ga.error=function(a){throw new Error("Syntax error, unrecognized expression: "+a)},ga.uniqueSort=function(a){var b,d=[],e=0,f=0;if(l=!c.detectDuplicates,k=!c.sortStable&&a.slice(0),a.sort(B),l){while(b=a[f++])b===a[f]&&(e=d.push(f));while(e--)a.splice(d[e],1)}return k=null,a},e=ga.getText=function(a){var b,c="",d=0,f=a.nodeType;if(f){if(1===f||9===f||11===f){if("string"==typeof a.textContent)return a.textContent;for(a=a.firstChild;a;a=a.nextSibling)c+=e(a)}else if(3===f||4===f)return a.nodeValue}else while(b=a[d++])c+=e(b);return c},d=ga.selectors={cacheLength:50,createPseudo:ia,match:V,attrHandle:{},find:{},relative:{">":{dir:"parentNode",first:!0}," ":{dir:"parentNode"},"+":{dir:"previousSibling",first:!0},"~":{dir:"previousSibling"}},preFilter:{ATTR:function(a){return a[1]=a[1].replace(_,aa),a[3]=(a[3]||a[4]||a[5]||"").replace(_,aa),"~="===a[2]&&(a[3]=" "+a[3]+" "),a.slice(0,4)},CHILD:function(a){return a[1]=a[1].toLowerCase(),"nth"===a[1].slice(0,3)?(a[3]||ga.error(a[0]),a[4]=+(a[4]?a[5]+(a[6]||1):2*("even"===a[3]||"odd"===a[3])),a[5]=+(a[7]+a[8]||"odd"===a[3])):a[3]&&ga.error(a[0]),a},PSEUDO:function(a){var b,c=!a[6]&&a[2];return V.CHILD.test(a[0])?null:(a[3]?a[2]=a[4]||a[5]||"":c&&T.test(c)&&(b=g(c,!0))&&(b=c.indexOf(")",c.length-b)-c.length)&&(a[0]=a[0].slice(0,b),a[2]=c.slice(0,b)),a.slice(0,3))}},filter:{TAG:function(a){var b=a.replace(_,aa).toLowerCase();return"*"===a?function(){return!0}:function(a){return a.nodeName&&a.nodeName.toLowerCase()===b}},CLASS:function(a){var b=y[a+" "];return b||(b=new RegExp("(^|"+K+")"+a+"("+K+"|$)"))&&y(a,function(a){return b.test("string"==typeof a.className&&a.className||"undefined"!=typeof a.getAttribute&&a.getAttribute("class")||"")})},ATTR:function(a,b,c){return function(d){var e=ga.attr(d,a);return null==e?"!="===b:!b||(e+="","="===b?e===c:"!="===b?e!==c:"^="===b?c&&0===e.indexOf(c):"*="===b?c&&e.indexOf(c)>-1:"$="===b?c&&e.slice(-c.length)===c:"~="===b?(" "+e.replace(O," ")+" ").indexOf(c)>-1:"|="===b&&(e===c||e.slice(0,c.length+1)===c+"-"))}},CHILD:function(a,b,c,d,e){var f="nth"!==a.slice(0,3),g="last"!==a.slice(-4),h="of-type"===b;return 1===d&&0===e?function(a){return!!a.parentNode}:function(b,c,i){var j,k,l,m,n,o,p=f!==g?"nextSibling":"previousSibling",q=b.parentNode,r=h&&b.nodeName.toLowerCase(),s=!i&&!h,t=!1;if(q){if(f){while(p){m=b;while(m=m[p])if(h?m.nodeName.toLowerCase()===r:1===m.nodeType)return!1;o=p="only"===a&&!o&&"nextSibling"}return!0}if(o=[g?q.firstChild:q.lastChild],g&&s){m=q,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n&&j[2],m=n&&q.childNodes[n];while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if(1===m.nodeType&&++t&&m===b){k[a]=[w,n,t];break}}else if(s&&(m=b,l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),j=k[a]||[],n=j[0]===w&&j[1],t=n),t===!1)while(m=++n&&m&&m[p]||(t=n=0)||o.pop())if((h?m.nodeName.toLowerCase()===r:1===m.nodeType)&&++t&&(s&&(l=m[u]||(m[u]={}),k=l[m.uniqueID]||(l[m.uniqueID]={}),k[a]=[w,t]),m===b))break;return t-=e,t===d||t%d===0&&t/d>=0}}},PSEUDO:function(a,b){var c,e=d.pseudos[a]||d.setFilters[a.toLowerCase()]||ga.error("unsupported pseudo: "+a);return e[u]?e(b):e.length>1?(c=[a,a,"",b],d.setFilters.hasOwnProperty(a.toLowerCase())?ia(function(a,c){var d,f=e(a,b),g=f.length;while(g--)d=I(a,f[g]),a[d]=!(c[d]=f[g])}):function(a){return e(a,0,c)}):e}},pseudos:{not:ia(function(a){var b=[],c=[],d=h(a.replace(P,"$1"));return d[u]?ia(function(a,b,c,e){var f,g=d(a,null,e,[]),h=a.length;while(h--)(f=g[h])&&(a[h]=!(b[h]=f))}):function(a,e,f){return b[0]=a,d(b,null,f,c),b[0]=null,!c.pop()}}),has:ia(function(a){return function(b){return ga(a,b).length>0}}),contains:ia(function(a){return a=a.replace(_,aa),function(b){return(b.textContent||b.innerText||e(b)).indexOf(a)>-1}}),lang:ia(function(a){return U.test(a||"")||ga.error("unsupported lang: "+a),a=a.replace(_,aa).toLowerCase(),function(b){var c;do if(c=p?b.lang:b.getAttribute("xml:lang")||b.getAttribute("lang"))return c=c.toLowerCase(),c===a||0===c.indexOf(a+"-");while((b=b.parentNode)&&1===b.nodeType);return!1}}),target:function(b){var c=a.location&&a.location.hash;return c&&c.slice(1)===b.id},root:function(a){return a===o},focus:function(a){return a===n.activeElement&&(!n.hasFocus||n.hasFocus())&&!!(a.type||a.href||~a.tabIndex)},enabled:oa(!1),disabled:oa(!0),checked:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&!!a.checked||"option"===b&&!!a.selected},selected:function(a){return a.parentNode&&a.parentNode.selectedIndex,a.selected===!0},empty:function(a){for(a=a.firstChild;a;a=a.nextSibling)if(a.nodeType<6)return!1;return!0},parent:function(a){return!d.pseudos.empty(a)},header:function(a){return X.test(a.nodeName)},input:function(a){return W.test(a.nodeName)},button:function(a){var b=a.nodeName.toLowerCase();return"input"===b&&"button"===a.type||"button"===b},text:function(a){var b;return"input"===a.nodeName.toLowerCase()&&"text"===a.type&&(null==(b=a.getAttribute("type"))||"text"===b.toLowerCase())},first:pa(function(){return[0]}),last:pa(function(a,b){return[b-1]}),eq:pa(function(a,b,c){return[c<0?c+b:c]}),even:pa(function(a,b){for(var c=0;c<b;c+=2)a.push(c);return a}),odd:pa(function(a,b){for(var c=1;c<b;c+=2)a.push(c);return a}),lt:pa(function(a,b,c){for(var d=c<0?c+b:c;--d>=0;)a.push(d);return a}),gt:pa(function(a,b,c){for(var d=c<0?c+b:c;++d<b;)a.push(d);return a})}},d.pseudos.nth=d.pseudos.eq;for(b in{radio:!0,checkbox:!0,file:!0,password:!0,image:!0})d.pseudos[b]=ma(b);for(b in{submit:!0,reset:!0})d.pseudos[b]=na(b);function ra(){}ra.prototype=d.filters=d.pseudos,d.setFilters=new ra,g=ga.tokenize=function(a,b){var c,e,f,g,h,i,j,k=z[a+" "];if(k)return b?0:k.slice(0);h=a,i=[],j=d.preFilter;while(h){c&&!(e=Q.exec(h))||(e&&(h=h.slice(e[0].length)||h),i.push(f=[])),c=!1,(e=R.exec(h))&&(c=e.shift(),f.push({value:c,type:e[0].replace(P," ")}),h=h.slice(c.length));for(g in d.filter)!(e=V[g].exec(h))||j[g]&&!(e=j[g](e))||(c=e.shift(),f.push({value:c,type:g,matches:e}),h=h.slice(c.length));if(!c)break}return b?h.length:h?ga.error(a):z(a,i).slice(0)};function sa(a){for(var b=0,c=a.length,d="";b<c;b++)d+=a[b].value;return d}function ta(a,b,c){var d=b.dir,e=b.next,f=e||d,g=c&&"parentNode"===f,h=x++;return b.first?function(b,c,e){while(b=b[d])if(1===b.nodeType||g)return a(b,c,e);return!1}:function(b,c,i){var j,k,l,m=[w,h];if(i){while(b=b[d])if((1===b.nodeType||g)&&a(b,c,i))return!0}else while(b=b[d])if(1===b.nodeType||g)if(l=b[u]||(b[u]={}),k=l[b.uniqueID]||(l[b.uniqueID]={}),e&&e===b.nodeName.toLowerCase())b=b[d]||b;else{if((j=k[f])&&j[0]===w&&j[1]===h)return m[2]=j[2];if(k[f]=m,m[2]=a(b,c,i))return!0}return!1}}function ua(a){return a.length>1?function(b,c,d){var e=a.length;while(e--)if(!a[e](b,c,d))return!1;return!0}:a[0]}function va(a,b,c){for(var d=0,e=b.length;d<e;d++)ga(a,b[d],c);return c}function wa(a,b,c,d,e){for(var f,g=[],h=0,i=a.length,j=null!=b;h<i;h++)(f=a[h])&&(c&&!c(f,d,e)||(g.push(f),j&&b.push(h)));return g}function xa(a,b,c,d,e,f){return d&&!d[u]&&(d=xa(d)),e&&!e[u]&&(e=xa(e,f)),ia(function(f,g,h,i){var j,k,l,m=[],n=[],o=g.length,p=f||va(b||"*",h.nodeType?[h]:h,[]),q=!a||!f&&b?p:wa(p,m,a,h,i),r=c?e||(f?a:o||d)?[]:g:q;if(c&&c(q,r,h,i),d){j=wa(r,n),d(j,[],h,i),k=j.length;while(k--)(l=j[k])&&(r[n[k]]=!(q[n[k]]=l))}if(f){if(e||a){if(e){j=[],k=r.length;while(k--)(l=r[k])&&j.push(q[k]=l);e(null,r=[],j,i)}k=r.length;while(k--)(l=r[k])&&(j=e?I(f,l):m[k])>-1&&(f[j]=!(g[j]=l))}}else r=wa(r===g?r.splice(o,r.length):r),e?e(null,g,r,i):G.apply(g,r)})}function ya(a){for(var b,c,e,f=a.length,g=d.relative[a[0].type],h=g||d.relative[" "],i=g?1:0,k=ta(function(a){return a===b},h,!0),l=ta(function(a){return I(b,a)>-1},h,!0),m=[function(a,c,d){var e=!g&&(d||c!==j)||((b=c).nodeType?k(a,c,d):l(a,c,d));return b=null,e}];i<f;i++)if(c=d.relative[a[i].type])m=[ta(ua(m),c)];else{if(c=d.filter[a[i].type].apply(null,a[i].matches),c[u]){for(e=++i;e<f;e++)if(d.relative[a[e].type])break;return xa(i>1&&ua(m),i>1&&sa(a.slice(0,i-1).concat({value:" "===a[i-2].type?"*":""})).replace(P,"$1"),c,i<e&&ya(a.slice(i,e)),e<f&&ya(a=a.slice(e)),e<f&&sa(a))}m.push(c)}return ua(m)}function za(a,b){var c=b.length>0,e=a.length>0,f=function(f,g,h,i,k){var l,o,q,r=0,s="0",t=f&&[],u=[],v=j,x=f||e&&d.find.TAG("*",k),y=w+=null==v?1:Math.random()||.1,z=x.length;for(k&&(j=g===n||g||k);s!==z&&null!=(l=x[s]);s++){if(e&&l){o=0,g||l.ownerDocument===n||(m(l),h=!p);while(q=a[o++])if(q(l,g||n,h)){i.push(l);break}k&&(w=y)}c&&((l=!q&&l)&&r--,f&&t.push(l))}if(r+=s,c&&s!==r){o=0;while(q=b[o++])q(t,u,g,h);if(f){if(r>0)while(s--)t[s]||u[s]||(u[s]=E.call(i));u=wa(u)}G.apply(i,u),k&&!f&&u.length>0&&r+b.length>1&&ga.uniqueSort(i)}return k&&(w=y,j=v),t};return c?ia(f):f}return h=ga.compile=function(a,b){var c,d=[],e=[],f=A[a+" "];if(!f){b||(b=g(a)),c=b.length;while(c--)f=ya(b[c]),f[u]?d.push(f):e.push(f);f=A(a,za(e,d)),f.selector=a}return f},i=ga.select=function(a,b,c,e){var f,i,j,k,l,m="function"==typeof a&&a,n=!e&&g(a=m.selector||a);if(c=c||[],1===n.length){if(i=n[0]=n[0].slice(0),i.length>2&&"ID"===(j=i[0]).type&&9===b.nodeType&&p&&d.relative[i[1].type]){if(b=(d.find.ID(j.matches[0].replace(_,aa),b)||[])[0],!b)return c;m&&(b=b.parentNode),a=a.slice(i.shift().value.length)}f=V.needsContext.test(a)?0:i.length;while(f--){if(j=i[f],d.relative[k=j.type])break;if((l=d.find[k])&&(e=l(j.matches[0].replace(_,aa),$.test(i[0].type)&&qa(b.parentNode)||b))){if(i.splice(f,1),a=e.length&&sa(i),!a)return G.apply(c,e),c;break}}}return(m||h(a,n))(e,b,!p,c,!b||$.test(a)&&qa(b.parentNode)||b),c},c.sortStable=u.split("").sort(B).join("")===u,c.detectDuplicates=!!l,m(),c.sortDetached=ja(function(a){return 1&a.compareDocumentPosition(n.createElement("fieldset"))}),ja(function(a){return a.innerHTML="<a href='#'></a>","#"===a.firstChild.getAttribute("href")})||ka("type|href|height|width",function(a,b,c){if(!c)return a.getAttribute(b,"type"===b.toLowerCase()?1:2)}),c.attributes&&ja(function(a){return a.innerHTML="<input/>",a.firstChild.setAttribute("value",""),""===a.firstChild.getAttribute("value")})||ka("value",function(a,b,c){if(!c&&"input"===a.nodeName.toLowerCase())return a.defaultValue}),ja(function(a){return null==a.getAttribute("disabled")})||ka(J,function(a,b,c){var d;if(!c)return a[b]===!0?b.toLowerCase():(d=a.getAttributeNode(b))&&d.specified?d.value:null}),ga}(a);r.find=x,r.expr=x.selectors,r.expr[":"]=r.expr.pseudos,r.uniqueSort=r.unique=x.uniqueSort,r.text=x.getText,r.isXMLDoc=x.isXML,r.contains=x.contains,r.escapeSelector=x.escape;var y=function(a,b,c){var d=[],e=void 0!==c;while((a=a[b])&&9!==a.nodeType)if(1===a.nodeType){if(e&&r(a).is(c))break;d.push(a)}return d},z=function(a,b){for(var c=[];a;a=a.nextSibling)1===a.nodeType&&a!==b&&c.push(a);return c},A=r.expr.match.needsContext;function B(a,b){return a.nodeName&&a.nodeName.toLowerCase()===b.toLowerCase()}var C=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i,D=/^.[^:#\[\.,]*$/;function E(a,b,c){return r.isFunction(b)?r.grep(a,function(a,d){return!!b.call(a,d,a)!==c}):b.nodeType?r.grep(a,function(a){return a===b!==c}):"string"!=typeof b?r.grep(a,function(a){return i.call(b,a)>-1!==c}):D.test(b)?r.filter(b,a,c):(b=r.filter(b,a),r.grep(a,function(a){return i.call(b,a)>-1!==c&&1===a.nodeType}))}r.filter=function(a,b,c){var d=b[0];return c&&(a=":not("+a+")"),1===b.length&&1===d.nodeType?r.find.matchesSelector(d,a)?[d]:[]:r.find.matches(a,r.grep(b,function(a){return 1===a.nodeType}))},r.fn.extend({find:function(a){var b,c,d=this.length,e=this;if("string"!=typeof a)return this.pushStack(r(a).filter(function(){for(b=0;b<d;b++)if(r.contains(e[b],this))return!0}));for(c=this.pushStack([]),b=0;b<d;b++)r.find(a,e[b],c);return d>1?r.uniqueSort(c):c},filter:function(a){return this.pushStack(E(this,a||[],!1))},not:function(a){return this.pushStack(E(this,a||[],!0))},is:function(a){return!!E(this,"string"==typeof a&&A.test(a)?r(a):a||[],!1).length}});var F,G=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,H=r.fn.init=function(a,b,c){var e,f;if(!a)return this;if(c=c||F,"string"==typeof a){if(e="<"===a[0]&&">"===a[a.length-1]&&a.length>=3?[null,a,null]:G.exec(a),!e||!e[1]&&b)return!b||b.jquery?(b||c).find(a):this.constructor(b).find(a);if(e[1]){if(b=b instanceof r?b[0]:b,r.merge(this,r.parseHTML(e[1],b&&b.nodeType?b.ownerDocument||b:d,!0)),C.test(e[1])&&r.isPlainObject(b))for(e in b)r.isFunction(this[e])?this[e](b[e]):this.attr(e,b[e]);return this}return f=d.getElementById(e[2]),f&&(this[0]=f,this.length=1),this}return a.nodeType?(this[0]=a,this.length=1,this):r.isFunction(a)?void 0!==c.ready?c.ready(a):a(r):r.makeArray(a,this)};H.prototype=r.fn,F=r(d);var I=/^(?:parents|prev(?:Until|All))/,J={children:!0,contents:!0,next:!0,prev:!0};r.fn.extend({has:function(a){var b=r(a,this),c=b.length;return this.filter(function(){for(var a=0;a<c;a++)if(r.contains(this,b[a]))return!0})},closest:function(a,b){var c,d=0,e=this.length,f=[],g="string"!=typeof a&&r(a);if(!A.test(a))for(;d<e;d++)for(c=this[d];c&&c!==b;c=c.parentNode)if(c.nodeType<11&&(g?g.index(c)>-1:1===c.nodeType&&r.find.matchesSelector(c,a))){f.push(c);break}return this.pushStack(f.length>1?r.uniqueSort(f):f)},index:function(a){return a?"string"==typeof a?i.call(r(a),this[0]):i.call(this,a.jquery?a[0]:a):this[0]&&this[0].parentNode?this.first().prevAll().length:-1},add:function(a,b){return this.pushStack(r.uniqueSort(r.merge(this.get(),r(a,b))))},addBack:function(a){return this.add(null==a?this.prevObject:this.prevObject.filter(a))}});function K(a,b){while((a=a[b])&&1!==a.nodeType);return a}r.each({parent:function(a){var b=a.parentNode;return b&&11!==b.nodeType?b:null},parents:function(a){return y(a,"parentNode")},parentsUntil:function(a,b,c){return y(a,"parentNode",c)},next:function(a){return K(a,"nextSibling")},prev:function(a){return K(a,"previousSibling")},nextAll:function(a){return y(a,"nextSibling")},prevAll:function(a){return y(a,"previousSibling")},nextUntil:function(a,b,c){return y(a,"nextSibling",c)},prevUntil:function(a,b,c){return y(a,"previousSibling",c)},siblings:function(a){return z((a.parentNode||{}).firstChild,a)},children:function(a){return z(a.firstChild)},contents:function(a){return B(a,"iframe")?a.contentDocument:(B(a,"template")&&(a=a.content||a),r.merge([],a.childNodes))}},function(a,b){r.fn[a]=function(c,d){var e=r.map(this,b,c);return"Until"!==a.slice(-5)&&(d=c),d&&"string"==typeof d&&(e=r.filter(d,e)),this.length>1&&(J[a]||r.uniqueSort(e),I.test(a)&&e.reverse()),this.pushStack(e)}});var L=/[^\x20\t\r\n\f]+/g;function M(a){var b={};return r.each(a.match(L)||[],function(a,c){b[c]=!0}),b}r.Callbacks=function(a){a="string"==typeof a?M(a):r.extend({},a);var b,c,d,e,f=[],g=[],h=-1,i=function(){for(e=e||a.once,d=b=!0;g.length;h=-1){c=g.shift();while(++h<f.length)f[h].apply(c[0],c[1])===!1&&a.stopOnFalse&&(h=f.length,c=!1)}a.memory||(c=!1),b=!1,e&&(f=c?[]:"")},j={add:function(){return f&&(c&&!b&&(h=f.length-1,g.push(c)),function d(b){r.each(b,function(b,c){r.isFunction(c)?a.unique&&j.has(c)||f.push(c):c&&c.length&&"string"!==r.type(c)&&d(c)})}(arguments),c&&!b&&i()),this},remove:function(){return r.each(arguments,function(a,b){var c;while((c=r.inArray(b,f,c))>-1)f.splice(c,1),c<=h&&h--}),this},has:function(a){return a?r.inArray(a,f)>-1:f.length>0},empty:function(){return f&&(f=[]),this},disable:function(){return e=g=[],f=c="",this},disabled:function(){return!f},lock:function(){return e=g=[],c||b||(f=c=""),this},locked:function(){return!!e},fireWith:function(a,c){return e||(c=c||[],c=[a,c.slice?c.slice():c],g.push(c),b||i()),this},fire:function(){return j.fireWith(this,arguments),this},fired:function(){return!!d}};return j};function N(a){return a}function O(a){throw a}function P(a,b,c,d){var e;try{a&&r.isFunction(e=a.promise)?e.call(a).done(b).fail(c):a&&r.isFunction(e=a.then)?e.call(a,b,c):b.apply(void 0,[a].slice(d))}catch(a){c.apply(void 0,[a])}}r.extend({Deferred:function(b){var c=[["notify","progress",r.Callbacks("memory"),r.Callbacks("memory"),2],["resolve","done",r.Callbacks("once memory"),r.Callbacks("once memory"),0,"resolved"],["reject","fail",r.Callbacks("once memory"),r.Callbacks("once memory"),1,"rejected"]],d="pending",e={state:function(){return d},always:function(){return f.done(arguments).fail(arguments),this},"catch":function(a){return e.then(null,a)},pipe:function(){var a=arguments;return r.Deferred(function(b){r.each(c,function(c,d){var e=r.isFunction(a[d[4]])&&a[d[4]];f[d[1]](function(){var a=e&&e.apply(this,arguments);a&&r.isFunction(a.promise)?a.promise().progress(b.notify).done(b.resolve).fail(b.reject):b[d[0]+"With"](this,e?[a]:arguments)})}),a=null}).promise()},then:function(b,d,e){var f=0;function g(b,c,d,e){return function(){var h=this,i=arguments,j=function(){var a,j;if(!(b<f)){if(a=d.apply(h,i),a===c.promise())throw new TypeError("Thenable self-resolution");j=a&&("object"==typeof a||"function"==typeof a)&&a.then,r.isFunction(j)?e?j.call(a,g(f,c,N,e),g(f,c,O,e)):(f++,j.call(a,g(f,c,N,e),g(f,c,O,e),g(f,c,N,c.notifyWith))):(d!==N&&(h=void 0,i=[a]),(e||c.resolveWith)(h,i))}},k=e?j:function(){try{j()}catch(a){r.Deferred.exceptionHook&&r.Deferred.exceptionHook(a,k.stackTrace),b+1>=f&&(d!==O&&(h=void 0,i=[a]),c.rejectWith(h,i))}};b?k():(r.Deferred.getStackHook&&(k.stackTrace=r.Deferred.getStackHook()),a.setTimeout(k))}}return r.Deferred(function(a){c[0][3].add(g(0,a,r.isFunction(e)?e:N,a.notifyWith)),c[1][3].add(g(0,a,r.isFunction(b)?b:N)),c[2][3].add(g(0,a,r.isFunction(d)?d:O))}).promise()},promise:function(a){return null!=a?r.extend(a,e):e}},f={};return r.each(c,function(a,b){var g=b[2],h=b[5];e[b[1]]=g.add,h&&g.add(function(){d=h},c[3-a][2].disable,c[0][2].lock),g.add(b[3].fire),f[b[0]]=function(){return f[b[0]+"With"](this===f?void 0:this,arguments),this},f[b[0]+"With"]=g.fireWith}),e.promise(f),b&&b.call(f,f),f},when:function(a){var b=arguments.length,c=b,d=Array(c),e=f.call(arguments),g=r.Deferred(),h=function(a){return function(c){d[a]=this,e[a]=arguments.length>1?f.call(arguments):c,--b||g.resolveWith(d,e)}};if(b<=1&&(P(a,g.done(h(c)).resolve,g.reject,!b),"pending"===g.state()||r.isFunction(e[c]&&e[c].then)))return g.then();while(c--)P(e[c],h(c),g.reject);return g.promise()}});var Q=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;r.Deferred.exceptionHook=function(b,c){a.console&&a.console.warn&&b&&Q.test(b.name)&&a.console.warn("jQuery.Deferred exception: "+b.message,b.stack,c)},r.readyException=function(b){a.setTimeout(function(){throw b})};var R=r.Deferred();r.fn.ready=function(a){return R.then(a)["catch"](function(a){r.readyException(a)}),this},r.extend({isReady:!1,readyWait:1,ready:function(a){(a===!0?--r.readyWait:r.isReady)||(r.isReady=!0,a!==!0&&--r.readyWait>0||R.resolveWith(d,[r]))}}),r.ready.then=R.then;function S(){d.removeEventListener("DOMContentLoaded",S),
a.removeEventListener("load",S),r.ready()}"complete"===d.readyState||"loading"!==d.readyState&&!d.documentElement.doScroll?a.setTimeout(r.ready):(d.addEventListener("DOMContentLoaded",S),a.addEventListener("load",S));var T=function(a,b,c,d,e,f,g){var h=0,i=a.length,j=null==c;if("object"===r.type(c)){e=!0;for(h in c)T(a,b,h,c[h],!0,f,g)}else if(void 0!==d&&(e=!0,r.isFunction(d)||(g=!0),j&&(g?(b.call(a,d),b=null):(j=b,b=function(a,b,c){return j.call(r(a),c)})),b))for(;h<i;h++)b(a[h],c,g?d:d.call(a[h],h,b(a[h],c)));return e?a:j?b.call(a):i?b(a[0],c):f},U=function(a){return 1===a.nodeType||9===a.nodeType||!+a.nodeType};function V(){this.expando=r.expando+V.uid++}V.uid=1,V.prototype={cache:function(a){var b=a[this.expando];return b||(b={},U(a)&&(a.nodeType?a[this.expando]=b:Object.defineProperty(a,this.expando,{value:b,configurable:!0}))),b},set:function(a,b,c){var d,e=this.cache(a);if("string"==typeof b)e[r.camelCase(b)]=c;else for(d in b)e[r.camelCase(d)]=b[d];return e},get:function(a,b){return void 0===b?this.cache(a):a[this.expando]&&a[this.expando][r.camelCase(b)]},access:function(a,b,c){return void 0===b||b&&"string"==typeof b&&void 0===c?this.get(a,b):(this.set(a,b,c),void 0!==c?c:b)},remove:function(a,b){var c,d=a[this.expando];if(void 0!==d){if(void 0!==b){Array.isArray(b)?b=b.map(r.camelCase):(b=r.camelCase(b),b=b in d?[b]:b.match(L)||[]),c=b.length;while(c--)delete d[b[c]]}(void 0===b||r.isEmptyObject(d))&&(a.nodeType?a[this.expando]=void 0:delete a[this.expando])}},hasData:function(a){var b=a[this.expando];return void 0!==b&&!r.isEmptyObject(b)}};var W=new V,X=new V,Y=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,Z=/[A-Z]/g;function $(a){return"true"===a||"false"!==a&&("null"===a?null:a===+a+""?+a:Y.test(a)?JSON.parse(a):a)}function _(a,b,c){var d;if(void 0===c&&1===a.nodeType)if(d="data-"+b.replace(Z,"-$&").toLowerCase(),c=a.getAttribute(d),"string"==typeof c){try{c=$(c)}catch(e){}X.set(a,b,c)}else c=void 0;return c}r.extend({hasData:function(a){return X.hasData(a)||W.hasData(a)},data:function(a,b,c){return X.access(a,b,c)},removeData:function(a,b){X.remove(a,b)},_data:function(a,b,c){return W.access(a,b,c)},_removeData:function(a,b){W.remove(a,b)}}),r.fn.extend({data:function(a,b){var c,d,e,f=this[0],g=f&&f.attributes;if(void 0===a){if(this.length&&(e=X.get(f),1===f.nodeType&&!W.get(f,"hasDataAttrs"))){c=g.length;while(c--)g[c]&&(d=g[c].name,0===d.indexOf("data-")&&(d=r.camelCase(d.slice(5)),_(f,d,e[d])));W.set(f,"hasDataAttrs",!0)}return e}return"object"==typeof a?this.each(function(){X.set(this,a)}):T(this,function(b){var c;if(f&&void 0===b){if(c=X.get(f,a),void 0!==c)return c;if(c=_(f,a),void 0!==c)return c}else this.each(function(){X.set(this,a,b)})},null,b,arguments.length>1,null,!0)},removeData:function(a){return this.each(function(){X.remove(this,a)})}}),r.extend({queue:function(a,b,c){var d;if(a)return b=(b||"fx")+"queue",d=W.get(a,b),c&&(!d||Array.isArray(c)?d=W.access(a,b,r.makeArray(c)):d.push(c)),d||[]},dequeue:function(a,b){b=b||"fx";var c=r.queue(a,b),d=c.length,e=c.shift(),f=r._queueHooks(a,b),g=function(){r.dequeue(a,b)};"inprogress"===e&&(e=c.shift(),d--),e&&("fx"===b&&c.unshift("inprogress"),delete f.stop,e.call(a,g,f)),!d&&f&&f.empty.fire()},_queueHooks:function(a,b){var c=b+"queueHooks";return W.get(a,c)||W.access(a,c,{empty:r.Callbacks("once memory").add(function(){W.remove(a,[b+"queue",c])})})}}),r.fn.extend({queue:function(a,b){var c=2;return"string"!=typeof a&&(b=a,a="fx",c--),arguments.length<c?r.queue(this[0],a):void 0===b?this:this.each(function(){var c=r.queue(this,a,b);r._queueHooks(this,a),"fx"===a&&"inprogress"!==c[0]&&r.dequeue(this,a)})},dequeue:function(a){return this.each(function(){r.dequeue(this,a)})},clearQueue:function(a){return this.queue(a||"fx",[])},promise:function(a,b){var c,d=1,e=r.Deferred(),f=this,g=this.length,h=function(){--d||e.resolveWith(f,[f])};"string"!=typeof a&&(b=a,a=void 0),a=a||"fx";while(g--)c=W.get(f[g],a+"queueHooks"),c&&c.empty&&(d++,c.empty.add(h));return h(),e.promise(b)}});var aa=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source,ba=new RegExp("^(?:([+-])=|)("+aa+")([a-z%]*)$","i"),ca=["Top","Right","Bottom","Left"],da=function(a,b){return a=b||a,"none"===a.style.display||""===a.style.display&&r.contains(a.ownerDocument,a)&&"none"===r.css(a,"display")},ea=function(a,b,c,d){var e,f,g={};for(f in b)g[f]=a.style[f],a.style[f]=b[f];e=c.apply(a,d||[]);for(f in b)a.style[f]=g[f];return e};function fa(a,b,c,d){var e,f=1,g=20,h=d?function(){return d.cur()}:function(){return r.css(a,b,"")},i=h(),j=c&&c[3]||(r.cssNumber[b]?"":"px"),k=(r.cssNumber[b]||"px"!==j&&+i)&&ba.exec(r.css(a,b));if(k&&k[3]!==j){j=j||k[3],c=c||[],k=+i||1;do f=f||".5",k/=f,r.style(a,b,k+j);while(f!==(f=h()/i)&&1!==f&&--g)}return c&&(k=+k||+i||0,e=c[1]?k+(c[1]+1)*c[2]:+c[2],d&&(d.unit=j,d.start=k,d.end=e)),e}var ga={};function ha(a){var b,c=a.ownerDocument,d=a.nodeName,e=ga[d];return e?e:(b=c.body.appendChild(c.createElement(d)),e=r.css(b,"display"),b.parentNode.removeChild(b),"none"===e&&(e="block"),ga[d]=e,e)}function ia(a,b){for(var c,d,e=[],f=0,g=a.length;f<g;f++)d=a[f],d.style&&(c=d.style.display,b?("none"===c&&(e[f]=W.get(d,"display")||null,e[f]||(d.style.display="")),""===d.style.display&&da(d)&&(e[f]=ha(d))):"none"!==c&&(e[f]="none",W.set(d,"display",c)));for(f=0;f<g;f++)null!=e[f]&&(a[f].style.display=e[f]);return a}r.fn.extend({show:function(){return ia(this,!0)},hide:function(){return ia(this)},toggle:function(a){return"boolean"==typeof a?a?this.show():this.hide():this.each(function(){da(this)?r(this).show():r(this).hide()})}});var ja=/^(?:checkbox|radio)$/i,ka=/<([a-z][^\/\0>\x20\t\r\n\f]+)/i,la=/^$|\/(?:java|ecma)script/i,ma={option:[1,"<select multiple='multiple'>","</select>"],thead:[1,"<table>","</table>"],col:[2,"<table><colgroup>","</colgroup></table>"],tr:[2,"<table><tbody>","</tbody></table>"],td:[3,"<table><tbody><tr>","</tr></tbody></table>"],_default:[0,"",""]};ma.optgroup=ma.option,ma.tbody=ma.tfoot=ma.colgroup=ma.caption=ma.thead,ma.th=ma.td;function na(a,b){var c;return c="undefined"!=typeof a.getElementsByTagName?a.getElementsByTagName(b||"*"):"undefined"!=typeof a.querySelectorAll?a.querySelectorAll(b||"*"):[],void 0===b||b&&B(a,b)?r.merge([a],c):c}function oa(a,b){for(var c=0,d=a.length;c<d;c++)W.set(a[c],"globalEval",!b||W.get(b[c],"globalEval"))}var pa=/<|&#?\w+;/;function qa(a,b,c,d,e){for(var f,g,h,i,j,k,l=b.createDocumentFragment(),m=[],n=0,o=a.length;n<o;n++)if(f=a[n],f||0===f)if("object"===r.type(f))r.merge(m,f.nodeType?[f]:f);else if(pa.test(f)){g=g||l.appendChild(b.createElement("div")),h=(ka.exec(f)||["",""])[1].toLowerCase(),i=ma[h]||ma._default,g.innerHTML=i[1]+r.htmlPrefilter(f)+i[2],k=i[0];while(k--)g=g.lastChild;r.merge(m,g.childNodes),g=l.firstChild,g.textContent=""}else m.push(b.createTextNode(f));l.textContent="",n=0;while(f=m[n++])if(d&&r.inArray(f,d)>-1)e&&e.push(f);else if(j=r.contains(f.ownerDocument,f),g=na(l.appendChild(f),"script"),j&&oa(g),c){k=0;while(f=g[k++])la.test(f.type||"")&&c.push(f)}return l}!function(){var a=d.createDocumentFragment(),b=a.appendChild(d.createElement("div")),c=d.createElement("input");c.setAttribute("type","radio"),c.setAttribute("checked","checked"),c.setAttribute("name","t"),b.appendChild(c),o.checkClone=b.cloneNode(!0).cloneNode(!0).lastChild.checked,b.innerHTML="<textarea>x</textarea>",o.noCloneChecked=!!b.cloneNode(!0).lastChild.defaultValue}();var ra=d.documentElement,sa=/^key/,ta=/^(?:mouse|pointer|contextmenu|drag|drop)|click/,ua=/^([^.]*)(?:\.(.+)|)/;function va(){return!0}function wa(){return!1}function xa(){try{return d.activeElement}catch(a){}}function ya(a,b,c,d,e,f){var g,h;if("object"==typeof b){"string"!=typeof c&&(d=d||c,c=void 0);for(h in b)ya(a,h,c,d,b[h],f);return a}if(null==d&&null==e?(e=c,d=c=void 0):null==e&&("string"==typeof c?(e=d,d=void 0):(e=d,d=c,c=void 0)),e===!1)e=wa;else if(!e)return a;return 1===f&&(g=e,e=function(a){return r().off(a),g.apply(this,arguments)},e.guid=g.guid||(g.guid=r.guid++)),a.each(function(){r.event.add(this,b,e,d,c)})}r.event={global:{},add:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.get(a);if(q){c.handler&&(f=c,c=f.handler,e=f.selector),e&&r.find.matchesSelector(ra,e),c.guid||(c.guid=r.guid++),(i=q.events)||(i=q.events={}),(g=q.handle)||(g=q.handle=function(b){return"undefined"!=typeof r&&r.event.triggered!==b.type?r.event.dispatch.apply(a,arguments):void 0}),b=(b||"").match(L)||[""],j=b.length;while(j--)h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n&&(l=r.event.special[n]||{},n=(e?l.delegateType:l.bindType)||n,l=r.event.special[n]||{},k=r.extend({type:n,origType:p,data:d,handler:c,guid:c.guid,selector:e,needsContext:e&&r.expr.match.needsContext.test(e),namespace:o.join(".")},f),(m=i[n])||(m=i[n]=[],m.delegateCount=0,l.setup&&l.setup.call(a,d,o,g)!==!1||a.addEventListener&&a.addEventListener(n,g)),l.add&&(l.add.call(a,k),k.handler.guid||(k.handler.guid=c.guid)),e?m.splice(m.delegateCount++,0,k):m.push(k),r.event.global[n]=!0)}},remove:function(a,b,c,d,e){var f,g,h,i,j,k,l,m,n,o,p,q=W.hasData(a)&&W.get(a);if(q&&(i=q.events)){b=(b||"").match(L)||[""],j=b.length;while(j--)if(h=ua.exec(b[j])||[],n=p=h[1],o=(h[2]||"").split(".").sort(),n){l=r.event.special[n]||{},n=(d?l.delegateType:l.bindType)||n,m=i[n]||[],h=h[2]&&new RegExp("(^|\\.)"+o.join("\\.(?:.*\\.|)")+"(\\.|$)"),g=f=m.length;while(f--)k=m[f],!e&&p!==k.origType||c&&c.guid!==k.guid||h&&!h.test(k.namespace)||d&&d!==k.selector&&("**"!==d||!k.selector)||(m.splice(f,1),k.selector&&m.delegateCount--,l.remove&&l.remove.call(a,k));g&&!m.length&&(l.teardown&&l.teardown.call(a,o,q.handle)!==!1||r.removeEvent(a,n,q.handle),delete i[n])}else for(n in i)r.event.remove(a,n+b[j],c,d,!0);r.isEmptyObject(i)&&W.remove(a,"handle events")}},dispatch:function(a){var b=r.event.fix(a),c,d,e,f,g,h,i=new Array(arguments.length),j=(W.get(this,"events")||{})[b.type]||[],k=r.event.special[b.type]||{};for(i[0]=b,c=1;c<arguments.length;c++)i[c]=arguments[c];if(b.delegateTarget=this,!k.preDispatch||k.preDispatch.call(this,b)!==!1){h=r.event.handlers.call(this,b,j),c=0;while((f=h[c++])&&!b.isPropagationStopped()){b.currentTarget=f.elem,d=0;while((g=f.handlers[d++])&&!b.isImmediatePropagationStopped())b.rnamespace&&!b.rnamespace.test(g.namespace)||(b.handleObj=g,b.data=g.data,e=((r.event.special[g.origType]||{}).handle||g.handler).apply(f.elem,i),void 0!==e&&(b.result=e)===!1&&(b.preventDefault(),b.stopPropagation()))}return k.postDispatch&&k.postDispatch.call(this,b),b.result}},handlers:function(a,b){var c,d,e,f,g,h=[],i=b.delegateCount,j=a.target;if(i&&j.nodeType&&!("click"===a.type&&a.button>=1))for(;j!==this;j=j.parentNode||this)if(1===j.nodeType&&("click"!==a.type||j.disabled!==!0)){for(f=[],g={},c=0;c<i;c++)d=b[c],e=d.selector+" ",void 0===g[e]&&(g[e]=d.needsContext?r(e,this).index(j)>-1:r.find(e,this,null,[j]).length),g[e]&&f.push(d);f.length&&h.push({elem:j,handlers:f})}return j=this,i<b.length&&h.push({elem:j,handlers:b.slice(i)}),h},addProp:function(a,b){Object.defineProperty(r.Event.prototype,a,{enumerable:!0,configurable:!0,get:r.isFunction(b)?function(){if(this.originalEvent)return b(this.originalEvent)}:function(){if(this.originalEvent)return this.originalEvent[a]},set:function(b){Object.defineProperty(this,a,{enumerable:!0,configurable:!0,writable:!0,value:b})}})},fix:function(a){return a[r.expando]?a:new r.Event(a)},special:{load:{noBubble:!0},focus:{trigger:function(){if(this!==xa()&&this.focus)return this.focus(),!1},delegateType:"focusin"},blur:{trigger:function(){if(this===xa()&&this.blur)return this.blur(),!1},delegateType:"focusout"},click:{trigger:function(){if("checkbox"===this.type&&this.click&&B(this,"input"))return this.click(),!1},_default:function(a){return B(a.target,"a")}},beforeunload:{postDispatch:function(a){void 0!==a.result&&a.originalEvent&&(a.originalEvent.returnValue=a.result)}}}},r.removeEvent=function(a,b,c){a.removeEventListener&&a.removeEventListener(b,c)},r.Event=function(a,b){return this instanceof r.Event?(a&&a.type?(this.originalEvent=a,this.type=a.type,this.isDefaultPrevented=a.defaultPrevented||void 0===a.defaultPrevented&&a.returnValue===!1?va:wa,this.target=a.target&&3===a.target.nodeType?a.target.parentNode:a.target,this.currentTarget=a.currentTarget,this.relatedTarget=a.relatedTarget):this.type=a,b&&r.extend(this,b),this.timeStamp=a&&a.timeStamp||r.now(),void(this[r.expando]=!0)):new r.Event(a,b)},r.Event.prototype={constructor:r.Event,isDefaultPrevented:wa,isPropagationStopped:wa,isImmediatePropagationStopped:wa,isSimulated:!1,preventDefault:function(){var a=this.originalEvent;this.isDefaultPrevented=va,a&&!this.isSimulated&&a.preventDefault()},stopPropagation:function(){var a=this.originalEvent;this.isPropagationStopped=va,a&&!this.isSimulated&&a.stopPropagation()},stopImmediatePropagation:function(){var a=this.originalEvent;this.isImmediatePropagationStopped=va,a&&!this.isSimulated&&a.stopImmediatePropagation(),this.stopPropagation()}},r.each({altKey:!0,bubbles:!0,cancelable:!0,changedTouches:!0,ctrlKey:!0,detail:!0,eventPhase:!0,metaKey:!0,pageX:!0,pageY:!0,shiftKey:!0,view:!0,"char":!0,charCode:!0,key:!0,keyCode:!0,button:!0,buttons:!0,clientX:!0,clientY:!0,offsetX:!0,offsetY:!0,pointerId:!0,pointerType:!0,screenX:!0,screenY:!0,targetTouches:!0,toElement:!0,touches:!0,which:function(a){var b=a.button;return null==a.which&&sa.test(a.type)?null!=a.charCode?a.charCode:a.keyCode:!a.which&&void 0!==b&&ta.test(a.type)?1&b?1:2&b?3:4&b?2:0:a.which}},r.event.addProp),r.each({mouseenter:"mouseover",mouseleave:"mouseout",pointerenter:"pointerover",pointerleave:"pointerout"},function(a,b){r.event.special[a]={delegateType:b,bindType:b,handle:function(a){var c,d=this,e=a.relatedTarget,f=a.handleObj;return e&&(e===d||r.contains(d,e))||(a.type=f.origType,c=f.handler.apply(this,arguments),a.type=b),c}}}),r.fn.extend({on:function(a,b,c,d){return ya(this,a,b,c,d)},one:function(a,b,c,d){return ya(this,a,b,c,d,1)},off:function(a,b,c){var d,e;if(a&&a.preventDefault&&a.handleObj)return d=a.handleObj,r(a.delegateTarget).off(d.namespace?d.origType+"."+d.namespace:d.origType,d.selector,d.handler),this;if("object"==typeof a){for(e in a)this.off(e,b,a[e]);return this}return b!==!1&&"function"!=typeof b||(c=b,b=void 0),c===!1&&(c=wa),this.each(function(){r.event.remove(this,a,c,b)})}});var za=/<(?!area|br|col|embed|hr|img|input|link|meta|param)(([a-z][^\/\0>\x20\t\r\n\f]*)[^>]*)\/>/gi,Aa=/<script|<style|<link/i,Ba=/checked\s*(?:[^=]|=\s*.checked.)/i,Ca=/^true\/(.*)/,Da=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function Ea(a,b){return B(a,"table")&&B(11!==b.nodeType?b:b.firstChild,"tr")?r(">tbody",a)[0]||a:a}function Fa(a){return a.type=(null!==a.getAttribute("type"))+"/"+a.type,a}function Ga(a){var b=Ca.exec(a.type);return b?a.type=b[1]:a.removeAttribute("type"),a}function Ha(a,b){var c,d,e,f,g,h,i,j;if(1===b.nodeType){if(W.hasData(a)&&(f=W.access(a),g=W.set(b,f),j=f.events)){delete g.handle,g.events={};for(e in j)for(c=0,d=j[e].length;c<d;c++)r.event.add(b,e,j[e][c])}X.hasData(a)&&(h=X.access(a),i=r.extend({},h),X.set(b,i))}}function Ia(a,b){var c=b.nodeName.toLowerCase();"input"===c&&ja.test(a.type)?b.checked=a.checked:"input"!==c&&"textarea"!==c||(b.defaultValue=a.defaultValue)}function Ja(a,b,c,d){b=g.apply([],b);var e,f,h,i,j,k,l=0,m=a.length,n=m-1,q=b[0],s=r.isFunction(q);if(s||m>1&&"string"==typeof q&&!o.checkClone&&Ba.test(q))return a.each(function(e){var f=a.eq(e);s&&(b[0]=q.call(this,e,f.html())),Ja(f,b,c,d)});if(m&&(e=qa(b,a[0].ownerDocument,!1,a,d),f=e.firstChild,1===e.childNodes.length&&(e=f),f||d)){for(h=r.map(na(e,"script"),Fa),i=h.length;l<m;l++)j=e,l!==n&&(j=r.clone(j,!0,!0),i&&r.merge(h,na(j,"script"))),c.call(a[l],j,l);if(i)for(k=h[h.length-1].ownerDocument,r.map(h,Ga),l=0;l<i;l++)j=h[l],la.test(j.type||"")&&!W.access(j,"globalEval")&&r.contains(k,j)&&(j.src?r._evalUrl&&r._evalUrl(j.src):p(j.textContent.replace(Da,""),k))}return a}function Ka(a,b,c){for(var d,e=b?r.filter(b,a):a,f=0;null!=(d=e[f]);f++)c||1!==d.nodeType||r.cleanData(na(d)),d.parentNode&&(c&&r.contains(d.ownerDocument,d)&&oa(na(d,"script")),d.parentNode.removeChild(d));return a}r.extend({htmlPrefilter:function(a){return a.replace(za,"<$1></$2>")},clone:function(a,b,c){var d,e,f,g,h=a.cloneNode(!0),i=r.contains(a.ownerDocument,a);if(!(o.noCloneChecked||1!==a.nodeType&&11!==a.nodeType||r.isXMLDoc(a)))for(g=na(h),f=na(a),d=0,e=f.length;d<e;d++)Ia(f[d],g[d]);if(b)if(c)for(f=f||na(a),g=g||na(h),d=0,e=f.length;d<e;d++)Ha(f[d],g[d]);else Ha(a,h);return g=na(h,"script"),g.length>0&&oa(g,!i&&na(a,"script")),h},cleanData:function(a){for(var b,c,d,e=r.event.special,f=0;void 0!==(c=a[f]);f++)if(U(c)){if(b=c[W.expando]){if(b.events)for(d in b.events)e[d]?r.event.remove(c,d):r.removeEvent(c,d,b.handle);c[W.expando]=void 0}c[X.expando]&&(c[X.expando]=void 0)}}}),r.fn.extend({detach:function(a){return Ka(this,a,!0)},remove:function(a){return Ka(this,a)},text:function(a){return T(this,function(a){return void 0===a?r.text(this):this.empty().each(function(){1!==this.nodeType&&11!==this.nodeType&&9!==this.nodeType||(this.textContent=a)})},null,a,arguments.length)},append:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.appendChild(a)}})},prepend:function(){return Ja(this,arguments,function(a){if(1===this.nodeType||11===this.nodeType||9===this.nodeType){var b=Ea(this,a);b.insertBefore(a,b.firstChild)}})},before:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this)})},after:function(){return Ja(this,arguments,function(a){this.parentNode&&this.parentNode.insertBefore(a,this.nextSibling)})},empty:function(){for(var a,b=0;null!=(a=this[b]);b++)1===a.nodeType&&(r.cleanData(na(a,!1)),a.textContent="");return this},clone:function(a,b){return a=null!=a&&a,b=null==b?a:b,this.map(function(){return r.clone(this,a,b)})},html:function(a){return T(this,function(a){var b=this[0]||{},c=0,d=this.length;if(void 0===a&&1===b.nodeType)return b.innerHTML;if("string"==typeof a&&!Aa.test(a)&&!ma[(ka.exec(a)||["",""])[1].toLowerCase()]){a=r.htmlPrefilter(a);try{for(;c<d;c++)b=this[c]||{},1===b.nodeType&&(r.cleanData(na(b,!1)),b.innerHTML=a);b=0}catch(e){}}b&&this.empty().append(a)},null,a,arguments.length)},replaceWith:function(){var a=[];return Ja(this,arguments,function(b){var c=this.parentNode;r.inArray(this,a)<0&&(r.cleanData(na(this)),c&&c.replaceChild(b,this))},a)}}),r.each({appendTo:"append",prependTo:"prepend",insertBefore:"before",insertAfter:"after",replaceAll:"replaceWith"},function(a,b){r.fn[a]=function(a){for(var c,d=[],e=r(a),f=e.length-1,g=0;g<=f;g++)c=g===f?this:this.clone(!0),r(e[g])[b](c),h.apply(d,c.get());return this.pushStack(d)}});var La=/^margin/,Ma=new RegExp("^("+aa+")(?!px)[a-z%]+$","i"),Na=function(b){var c=b.ownerDocument.defaultView;return c&&c.opener||(c=a),c.getComputedStyle(b)};!function(){function b(){if(i){i.style.cssText="box-sizing:border-box;position:relative;display:block;margin:auto;border:1px;padding:1px;top:1%;width:50%",i.innerHTML="",ra.appendChild(h);var b=a.getComputedStyle(i);c="1%"!==b.top,g="2px"===b.marginLeft,e="4px"===b.width,i.style.marginRight="50%",f="4px"===b.marginRight,ra.removeChild(h),i=null}}var c,e,f,g,h=d.createElement("div"),i=d.createElement("div");i.style&&(i.style.backgroundClip="content-box",i.cloneNode(!0).style.backgroundClip="",o.clearCloneStyle="content-box"===i.style.backgroundClip,h.style.cssText="border:0;width:8px;height:0;top:0;left:-9999px;padding:0;margin-top:1px;position:absolute",h.appendChild(i),r.extend(o,{pixelPosition:function(){return b(),c},boxSizingReliable:function(){return b(),e},pixelMarginRight:function(){return b(),f},reliableMarginLeft:function(){return b(),g}}))}();function Oa(a,b,c){var d,e,f,g,h=a.style;return c=c||Na(a),c&&(g=c.getPropertyValue(b)||c[b],""!==g||r.contains(a.ownerDocument,a)||(g=r.style(a,b)),!o.pixelMarginRight()&&Ma.test(g)&&La.test(b)&&(d=h.width,e=h.minWidth,f=h.maxWidth,h.minWidth=h.maxWidth=h.width=g,g=c.width,h.width=d,h.minWidth=e,h.maxWidth=f)),void 0!==g?g+"":g}function Pa(a,b){return{get:function(){return a()?void delete this.get:(this.get=b).apply(this,arguments)}}}var Qa=/^(none|table(?!-c[ea]).+)/,Ra=/^--/,Sa={position:"absolute",visibility:"hidden",display:"block"},Ta={letterSpacing:"0",fontWeight:"400"},Ua=["Webkit","Moz","ms"],Va=d.createElement("div").style;function Wa(a){if(a in Va)return a;var b=a[0].toUpperCase()+a.slice(1),c=Ua.length;while(c--)if(a=Ua[c]+b,a in Va)return a}function Xa(a){var b=r.cssProps[a];return b||(b=r.cssProps[a]=Wa(a)||a),b}function Ya(a,b,c){var d=ba.exec(b);return d?Math.max(0,d[2]-(c||0))+(d[3]||"px"):b}function Za(a,b,c,d,e){var f,g=0;for(f=c===(d?"border":"content")?4:"width"===b?1:0;f<4;f+=2)"margin"===c&&(g+=r.css(a,c+ca[f],!0,e)),d?("content"===c&&(g-=r.css(a,"padding"+ca[f],!0,e)),"margin"!==c&&(g-=r.css(a,"border"+ca[f]+"Width",!0,e))):(g+=r.css(a,"padding"+ca[f],!0,e),"padding"!==c&&(g+=r.css(a,"border"+ca[f]+"Width",!0,e)));return g}function $a(a,b,c){var d,e=Na(a),f=Oa(a,b,e),g="border-box"===r.css(a,"boxSizing",!1,e);return Ma.test(f)?f:(d=g&&(o.boxSizingReliable()||f===a.style[b]),"auto"===f&&(f=a["offset"+b[0].toUpperCase()+b.slice(1)]),f=parseFloat(f)||0,f+Za(a,b,c||(g?"border":"content"),d,e)+"px")}r.extend({cssHooks:{opacity:{get:function(a,b){if(b){var c=Oa(a,"opacity");return""===c?"1":c}}}},cssNumber:{animationIterationCount:!0,columnCount:!0,fillOpacity:!0,flexGrow:!0,flexShrink:!0,fontWeight:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,widows:!0,zIndex:!0,zoom:!0},cssProps:{"float":"cssFloat"},style:function(a,b,c,d){if(a&&3!==a.nodeType&&8!==a.nodeType&&a.style){var e,f,g,h=r.camelCase(b),i=Ra.test(b),j=a.style;return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],void 0===c?g&&"get"in g&&void 0!==(e=g.get(a,!1,d))?e:j[b]:(f=typeof c,"string"===f&&(e=ba.exec(c))&&e[1]&&(c=fa(a,b,e),f="number"),null!=c&&c===c&&("number"===f&&(c+=e&&e[3]||(r.cssNumber[h]?"":"px")),o.clearCloneStyle||""!==c||0!==b.indexOf("background")||(j[b]="inherit"),g&&"set"in g&&void 0===(c=g.set(a,c,d))||(i?j.setProperty(b,c):j[b]=c)),void 0)}},css:function(a,b,c,d){var e,f,g,h=r.camelCase(b),i=Ra.test(b);return i||(b=Xa(h)),g=r.cssHooks[b]||r.cssHooks[h],g&&"get"in g&&(e=g.get(a,!0,c)),void 0===e&&(e=Oa(a,b,d)),"normal"===e&&b in Ta&&(e=Ta[b]),""===c||c?(f=parseFloat(e),c===!0||isFinite(f)?f||0:e):e}}),r.each(["height","width"],function(a,b){r.cssHooks[b]={get:function(a,c,d){if(c)return!Qa.test(r.css(a,"display"))||a.getClientRects().length&&a.getBoundingClientRect().width?$a(a,b,d):ea(a,Sa,function(){return $a(a,b,d)})},set:function(a,c,d){var e,f=d&&Na(a),g=d&&Za(a,b,d,"border-box"===r.css(a,"boxSizing",!1,f),f);return g&&(e=ba.exec(c))&&"px"!==(e[3]||"px")&&(a.style[b]=c,c=r.css(a,b)),Ya(a,c,g)}}}),r.cssHooks.marginLeft=Pa(o.reliableMarginLeft,function(a,b){if(b)return(parseFloat(Oa(a,"marginLeft"))||a.getBoundingClientRect().left-ea(a,{marginLeft:0},function(){return a.getBoundingClientRect().left}))+"px"}),r.each({margin:"",padding:"",border:"Width"},function(a,b){r.cssHooks[a+b]={expand:function(c){for(var d=0,e={},f="string"==typeof c?c.split(" "):[c];d<4;d++)e[a+ca[d]+b]=f[d]||f[d-2]||f[0];return e}},La.test(a)||(r.cssHooks[a+b].set=Ya)}),r.fn.extend({css:function(a,b){return T(this,function(a,b,c){var d,e,f={},g=0;if(Array.isArray(b)){for(d=Na(a),e=b.length;g<e;g++)f[b[g]]=r.css(a,b[g],!1,d);return f}return void 0!==c?r.style(a,b,c):r.css(a,b)},a,b,arguments.length>1)}});function _a(a,b,c,d,e){return new _a.prototype.init(a,b,c,d,e)}r.Tween=_a,_a.prototype={constructor:_a,init:function(a,b,c,d,e,f){this.elem=a,this.prop=c,this.easing=e||r.easing._default,this.options=b,this.start=this.now=this.cur(),this.end=d,this.unit=f||(r.cssNumber[c]?"":"px")},cur:function(){var a=_a.propHooks[this.prop];return a&&a.get?a.get(this):_a.propHooks._default.get(this)},run:function(a){var b,c=_a.propHooks[this.prop];return this.options.duration?this.pos=b=r.easing[this.easing](a,this.options.duration*a,0,1,this.options.duration):this.pos=b=a,this.now=(this.end-this.start)*b+this.start,this.options.step&&this.options.step.call(this.elem,this.now,this),c&&c.set?c.set(this):_a.propHooks._default.set(this),this}},_a.prototype.init.prototype=_a.prototype,_a.propHooks={_default:{get:function(a){var b;return 1!==a.elem.nodeType||null!=a.elem[a.prop]&&null==a.elem.style[a.prop]?a.elem[a.prop]:(b=r.css(a.elem,a.prop,""),b&&"auto"!==b?b:0)},set:function(a){r.fx.step[a.prop]?r.fx.step[a.prop](a):1!==a.elem.nodeType||null==a.elem.style[r.cssProps[a.prop]]&&!r.cssHooks[a.prop]?a.elem[a.prop]=a.now:r.style(a.elem,a.prop,a.now+a.unit)}}},_a.propHooks.scrollTop=_a.propHooks.scrollLeft={set:function(a){a.elem.nodeType&&a.elem.parentNode&&(a.elem[a.prop]=a.now)}},r.easing={linear:function(a){return a},swing:function(a){return.5-Math.cos(a*Math.PI)/2},_default:"swing"},r.fx=_a.prototype.init,r.fx.step={};var ab,bb,cb=/^(?:toggle|show|hide)$/,db=/queueHooks$/;function eb(){bb&&(d.hidden===!1&&a.requestAnimationFrame?a.requestAnimationFrame(eb):a.setTimeout(eb,r.fx.interval),r.fx.tick())}function fb(){return a.setTimeout(function(){ab=void 0}),ab=r.now()}function gb(a,b){var c,d=0,e={height:a};for(b=b?1:0;d<4;d+=2-b)c=ca[d],e["margin"+c]=e["padding"+c]=a;return b&&(e.opacity=e.width=a),e}function hb(a,b,c){for(var d,e=(kb.tweeners[b]||[]).concat(kb.tweeners["*"]),f=0,g=e.length;f<g;f++)if(d=e[f].call(c,b,a))return d}function ib(a,b,c){var d,e,f,g,h,i,j,k,l="width"in b||"height"in b,m=this,n={},o=a.style,p=a.nodeType&&da(a),q=W.get(a,"fxshow");c.queue||(g=r._queueHooks(a,"fx"),null==g.unqueued&&(g.unqueued=0,h=g.empty.fire,g.empty.fire=function(){g.unqueued||h()}),g.unqueued++,m.always(function(){m.always(function(){g.unqueued--,r.queue(a,"fx").length||g.empty.fire()})}));for(d in b)if(e=b[d],cb.test(e)){if(delete b[d],f=f||"toggle"===e,e===(p?"hide":"show")){if("show"!==e||!q||void 0===q[d])continue;p=!0}n[d]=q&&q[d]||r.style(a,d)}if(i=!r.isEmptyObject(b),i||!r.isEmptyObject(n)){l&&1===a.nodeType&&(c.overflow=[o.overflow,o.overflowX,o.overflowY],j=q&&q.display,null==j&&(j=W.get(a,"display")),k=r.css(a,"display"),"none"===k&&(j?k=j:(ia([a],!0),j=a.style.display||j,k=r.css(a,"display"),ia([a]))),("inline"===k||"inline-block"===k&&null!=j)&&"none"===r.css(a,"float")&&(i||(m.done(function(){o.display=j}),null==j&&(k=o.display,j="none"===k?"":k)),o.display="inline-block")),c.overflow&&(o.overflow="hidden",m.always(function(){o.overflow=c.overflow[0],o.overflowX=c.overflow[1],o.overflowY=c.overflow[2]})),i=!1;for(d in n)i||(q?"hidden"in q&&(p=q.hidden):q=W.access(a,"fxshow",{display:j}),f&&(q.hidden=!p),p&&ia([a],!0),m.done(function(){p||ia([a]),W.remove(a,"fxshow");for(d in n)r.style(a,d,n[d])})),i=hb(p?q[d]:0,d,m),d in q||(q[d]=i.start,p&&(i.end=i.start,i.start=0))}}function jb(a,b){var c,d,e,f,g;for(c in a)if(d=r.camelCase(c),e=b[d],f=a[c],Array.isArray(f)&&(e=f[1],f=a[c]=f[0]),c!==d&&(a[d]=f,delete a[c]),g=r.cssHooks[d],g&&"expand"in g){f=g.expand(f),delete a[d];for(c in f)c in a||(a[c]=f[c],b[c]=e)}else b[d]=e}function kb(a,b,c){var d,e,f=0,g=kb.prefilters.length,h=r.Deferred().always(function(){delete i.elem}),i=function(){if(e)return!1;for(var b=ab||fb(),c=Math.max(0,j.startTime+j.duration-b),d=c/j.duration||0,f=1-d,g=0,i=j.tweens.length;g<i;g++)j.tweens[g].run(f);return h.notifyWith(a,[j,f,c]),f<1&&i?c:(i||h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j]),!1)},j=h.promise({elem:a,props:r.extend({},b),opts:r.extend(!0,{specialEasing:{},easing:r.easing._default},c),originalProperties:b,originalOptions:c,startTime:ab||fb(),duration:c.duration,tweens:[],createTween:function(b,c){var d=r.Tween(a,j.opts,b,c,j.opts.specialEasing[b]||j.opts.easing);return j.tweens.push(d),d},stop:function(b){var c=0,d=b?j.tweens.length:0;if(e)return this;for(e=!0;c<d;c++)j.tweens[c].run(1);return b?(h.notifyWith(a,[j,1,0]),h.resolveWith(a,[j,b])):h.rejectWith(a,[j,b]),this}}),k=j.props;for(jb(k,j.opts.specialEasing);f<g;f++)if(d=kb.prefilters[f].call(j,a,k,j.opts))return r.isFunction(d.stop)&&(r._queueHooks(j.elem,j.opts.queue).stop=r.proxy(d.stop,d)),d;return r.map(k,hb,j),r.isFunction(j.opts.start)&&j.opts.start.call(a,j),j.progress(j.opts.progress).done(j.opts.done,j.opts.complete).fail(j.opts.fail).always(j.opts.always),r.fx.timer(r.extend(i,{elem:a,anim:j,queue:j.opts.queue})),j}r.Animation=r.extend(kb,{tweeners:{"*":[function(a,b){var c=this.createTween(a,b);return fa(c.elem,a,ba.exec(b),c),c}]},tweener:function(a,b){r.isFunction(a)?(b=a,a=["*"]):a=a.match(L);for(var c,d=0,e=a.length;d<e;d++)c=a[d],kb.tweeners[c]=kb.tweeners[c]||[],kb.tweeners[c].unshift(b)},prefilters:[ib],prefilter:function(a,b){b?kb.prefilters.unshift(a):kb.prefilters.push(a)}}),r.speed=function(a,b,c){var d=a&&"object"==typeof a?r.extend({},a):{complete:c||!c&&b||r.isFunction(a)&&a,duration:a,easing:c&&b||b&&!r.isFunction(b)&&b};return r.fx.off?d.duration=0:"number"!=typeof d.duration&&(d.duration in r.fx.speeds?d.duration=r.fx.speeds[d.duration]:d.duration=r.fx.speeds._default),null!=d.queue&&d.queue!==!0||(d.queue="fx"),d.old=d.complete,d.complete=function(){r.isFunction(d.old)&&d.old.call(this),d.queue&&r.dequeue(this,d.queue)},d},r.fn.extend({fadeTo:function(a,b,c,d){return this.filter(da).css("opacity",0).show().end().animate({opacity:b},a,c,d)},animate:function(a,b,c,d){var e=r.isEmptyObject(a),f=r.speed(b,c,d),g=function(){var b=kb(this,r.extend({},a),f);(e||W.get(this,"finish"))&&b.stop(!0)};return g.finish=g,e||f.queue===!1?this.each(g):this.queue(f.queue,g)},stop:function(a,b,c){var d=function(a){var b=a.stop;delete a.stop,b(c)};return"string"!=typeof a&&(c=b,b=a,a=void 0),b&&a!==!1&&this.queue(a||"fx",[]),this.each(function(){var b=!0,e=null!=a&&a+"queueHooks",f=r.timers,g=W.get(this);if(e)g[e]&&g[e].stop&&d(g[e]);else for(e in g)g[e]&&g[e].stop&&db.test(e)&&d(g[e]);for(e=f.length;e--;)f[e].elem!==this||null!=a&&f[e].queue!==a||(f[e].anim.stop(c),b=!1,f.splice(e,1));!b&&c||r.dequeue(this,a)})},finish:function(a){return a!==!1&&(a=a||"fx"),this.each(function(){var b,c=W.get(this),d=c[a+"queue"],e=c[a+"queueHooks"],f=r.timers,g=d?d.length:0;for(c.finish=!0,r.queue(this,a,[]),e&&e.stop&&e.stop.call(this,!0),b=f.length;b--;)f[b].elem===this&&f[b].queue===a&&(f[b].anim.stop(!0),f.splice(b,1));for(b=0;b<g;b++)d[b]&&d[b].finish&&d[b].finish.call(this);delete c.finish})}}),r.each(["toggle","show","hide"],function(a,b){var c=r.fn[b];r.fn[b]=function(a,d,e){return null==a||"boolean"==typeof a?c.apply(this,arguments):this.animate(gb(b,!0),a,d,e)}}),r.each({slideDown:gb("show"),slideUp:gb("hide"),slideToggle:gb("toggle"),fadeIn:{opacity:"show"},fadeOut:{opacity:"hide"},fadeToggle:{opacity:"toggle"}},function(a,b){r.fn[a]=function(a,c,d){return this.animate(b,a,c,d)}}),r.timers=[],r.fx.tick=function(){var a,b=0,c=r.timers;for(ab=r.now();b<c.length;b++)a=c[b],a()||c[b]!==a||c.splice(b--,1);c.length||r.fx.stop(),ab=void 0},r.fx.timer=function(a){r.timers.push(a),r.fx.start()},r.fx.interval=13,r.fx.start=function(){bb||(bb=!0,eb())},r.fx.stop=function(){bb=null},r.fx.speeds={slow:600,fast:200,_default:400},r.fn.delay=function(b,c){return b=r.fx?r.fx.speeds[b]||b:b,c=c||"fx",this.queue(c,function(c,d){var e=a.setTimeout(c,b);d.stop=function(){a.clearTimeout(e)}})},function(){var a=d.createElement("input"),b=d.createElement("select"),c=b.appendChild(d.createElement("option"));a.type="checkbox",o.checkOn=""!==a.value,o.optSelected=c.selected,a=d.createElement("input"),a.value="t",a.type="radio",o.radioValue="t"===a.value}();var lb,mb=r.expr.attrHandle;r.fn.extend({attr:function(a,b){return T(this,r.attr,a,b,arguments.length>1)},removeAttr:function(a){return this.each(function(){r.removeAttr(this,a)})}}),r.extend({attr:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return"undefined"==typeof a.getAttribute?r.prop(a,b,c):(1===f&&r.isXMLDoc(a)||(e=r.attrHooks[b.toLowerCase()]||(r.expr.match.bool.test(b)?lb:void 0)),void 0!==c?null===c?void r.removeAttr(a,b):e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:(a.setAttribute(b,c+""),c):e&&"get"in e&&null!==(d=e.get(a,b))?d:(d=r.find.attr(a,b),
null==d?void 0:d))},attrHooks:{type:{set:function(a,b){if(!o.radioValue&&"radio"===b&&B(a,"input")){var c=a.value;return a.setAttribute("type",b),c&&(a.value=c),b}}}},removeAttr:function(a,b){var c,d=0,e=b&&b.match(L);if(e&&1===a.nodeType)while(c=e[d++])a.removeAttribute(c)}}),lb={set:function(a,b,c){return b===!1?r.removeAttr(a,c):a.setAttribute(c,c),c}},r.each(r.expr.match.bool.source.match(/\w+/g),function(a,b){var c=mb[b]||r.find.attr;mb[b]=function(a,b,d){var e,f,g=b.toLowerCase();return d||(f=mb[g],mb[g]=e,e=null!=c(a,b,d)?g:null,mb[g]=f),e}});var nb=/^(?:input|select|textarea|button)$/i,ob=/^(?:a|area)$/i;r.fn.extend({prop:function(a,b){return T(this,r.prop,a,b,arguments.length>1)},removeProp:function(a){return this.each(function(){delete this[r.propFix[a]||a]})}}),r.extend({prop:function(a,b,c){var d,e,f=a.nodeType;if(3!==f&&8!==f&&2!==f)return 1===f&&r.isXMLDoc(a)||(b=r.propFix[b]||b,e=r.propHooks[b]),void 0!==c?e&&"set"in e&&void 0!==(d=e.set(a,c,b))?d:a[b]=c:e&&"get"in e&&null!==(d=e.get(a,b))?d:a[b]},propHooks:{tabIndex:{get:function(a){var b=r.find.attr(a,"tabindex");return b?parseInt(b,10):nb.test(a.nodeName)||ob.test(a.nodeName)&&a.href?0:-1}}},propFix:{"for":"htmlFor","class":"className"}}),o.optSelected||(r.propHooks.selected={get:function(a){var b=a.parentNode;return b&&b.parentNode&&b.parentNode.selectedIndex,null},set:function(a){var b=a.parentNode;b&&(b.selectedIndex,b.parentNode&&b.parentNode.selectedIndex)}}),r.each(["tabIndex","readOnly","maxLength","cellSpacing","cellPadding","rowSpan","colSpan","useMap","frameBorder","contentEditable"],function(){r.propFix[this.toLowerCase()]=this});function pb(a){var b=a.match(L)||[];return b.join(" ")}function qb(a){return a.getAttribute&&a.getAttribute("class")||""}r.fn.extend({addClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).addClass(a.call(this,b,qb(this)))});if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])d.indexOf(" "+f+" ")<0&&(d+=f+" ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},removeClass:function(a){var b,c,d,e,f,g,h,i=0;if(r.isFunction(a))return this.each(function(b){r(this).removeClass(a.call(this,b,qb(this)))});if(!arguments.length)return this.attr("class","");if("string"==typeof a&&a){b=a.match(L)||[];while(c=this[i++])if(e=qb(c),d=1===c.nodeType&&" "+pb(e)+" "){g=0;while(f=b[g++])while(d.indexOf(" "+f+" ")>-1)d=d.replace(" "+f+" "," ");h=pb(d),e!==h&&c.setAttribute("class",h)}}return this},toggleClass:function(a,b){var c=typeof a;return"boolean"==typeof b&&"string"===c?b?this.addClass(a):this.removeClass(a):r.isFunction(a)?this.each(function(c){r(this).toggleClass(a.call(this,c,qb(this),b),b)}):this.each(function(){var b,d,e,f;if("string"===c){d=0,e=r(this),f=a.match(L)||[];while(b=f[d++])e.hasClass(b)?e.removeClass(b):e.addClass(b)}else void 0!==a&&"boolean"!==c||(b=qb(this),b&&W.set(this,"__className__",b),this.setAttribute&&this.setAttribute("class",b||a===!1?"":W.get(this,"__className__")||""))})},hasClass:function(a){var b,c,d=0;b=" "+a+" ";while(c=this[d++])if(1===c.nodeType&&(" "+pb(qb(c))+" ").indexOf(b)>-1)return!0;return!1}});var rb=/\r/g;r.fn.extend({val:function(a){var b,c,d,e=this[0];{if(arguments.length)return d=r.isFunction(a),this.each(function(c){var e;1===this.nodeType&&(e=d?a.call(this,c,r(this).val()):a,null==e?e="":"number"==typeof e?e+="":Array.isArray(e)&&(e=r.map(e,function(a){return null==a?"":a+""})),b=r.valHooks[this.type]||r.valHooks[this.nodeName.toLowerCase()],b&&"set"in b&&void 0!==b.set(this,e,"value")||(this.value=e))});if(e)return b=r.valHooks[e.type]||r.valHooks[e.nodeName.toLowerCase()],b&&"get"in b&&void 0!==(c=b.get(e,"value"))?c:(c=e.value,"string"==typeof c?c.replace(rb,""):null==c?"":c)}}}),r.extend({valHooks:{option:{get:function(a){var b=r.find.attr(a,"value");return null!=b?b:pb(r.text(a))}},select:{get:function(a){var b,c,d,e=a.options,f=a.selectedIndex,g="select-one"===a.type,h=g?null:[],i=g?f+1:e.length;for(d=f<0?i:g?f:0;d<i;d++)if(c=e[d],(c.selected||d===f)&&!c.disabled&&(!c.parentNode.disabled||!B(c.parentNode,"optgroup"))){if(b=r(c).val(),g)return b;h.push(b)}return h},set:function(a,b){var c,d,e=a.options,f=r.makeArray(b),g=e.length;while(g--)d=e[g],(d.selected=r.inArray(r.valHooks.option.get(d),f)>-1)&&(c=!0);return c||(a.selectedIndex=-1),f}}}}),r.each(["radio","checkbox"],function(){r.valHooks[this]={set:function(a,b){if(Array.isArray(b))return a.checked=r.inArray(r(a).val(),b)>-1}},o.checkOn||(r.valHooks[this].get=function(a){return null===a.getAttribute("value")?"on":a.value})});var sb=/^(?:focusinfocus|focusoutblur)$/;r.extend(r.event,{trigger:function(b,c,e,f){var g,h,i,j,k,m,n,o=[e||d],p=l.call(b,"type")?b.type:b,q=l.call(b,"namespace")?b.namespace.split("."):[];if(h=i=e=e||d,3!==e.nodeType&&8!==e.nodeType&&!sb.test(p+r.event.triggered)&&(p.indexOf(".")>-1&&(q=p.split("."),p=q.shift(),q.sort()),k=p.indexOf(":")<0&&"on"+p,b=b[r.expando]?b:new r.Event(p,"object"==typeof b&&b),b.isTrigger=f?2:3,b.namespace=q.join("."),b.rnamespace=b.namespace?new RegExp("(^|\\.)"+q.join("\\.(?:.*\\.|)")+"(\\.|$)"):null,b.result=void 0,b.target||(b.target=e),c=null==c?[b]:r.makeArray(c,[b]),n=r.event.special[p]||{},f||!n.trigger||n.trigger.apply(e,c)!==!1)){if(!f&&!n.noBubble&&!r.isWindow(e)){for(j=n.delegateType||p,sb.test(j+p)||(h=h.parentNode);h;h=h.parentNode)o.push(h),i=h;i===(e.ownerDocument||d)&&o.push(i.defaultView||i.parentWindow||a)}g=0;while((h=o[g++])&&!b.isPropagationStopped())b.type=g>1?j:n.bindType||p,m=(W.get(h,"events")||{})[b.type]&&W.get(h,"handle"),m&&m.apply(h,c),m=k&&h[k],m&&m.apply&&U(h)&&(b.result=m.apply(h,c),b.result===!1&&b.preventDefault());return b.type=p,f||b.isDefaultPrevented()||n._default&&n._default.apply(o.pop(),c)!==!1||!U(e)||k&&r.isFunction(e[p])&&!r.isWindow(e)&&(i=e[k],i&&(e[k]=null),r.event.triggered=p,e[p](),r.event.triggered=void 0,i&&(e[k]=i)),b.result}},simulate:function(a,b,c){var d=r.extend(new r.Event,c,{type:a,isSimulated:!0});r.event.trigger(d,null,b)}}),r.fn.extend({trigger:function(a,b){return this.each(function(){r.event.trigger(a,b,this)})},triggerHandler:function(a,b){var c=this[0];if(c)return r.event.trigger(a,b,c,!0)}}),r.each("blur focus focusin focusout resize scroll click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select submit keydown keypress keyup contextmenu".split(" "),function(a,b){r.fn[b]=function(a,c){return arguments.length>0?this.on(b,null,a,c):this.trigger(b)}}),r.fn.extend({hover:function(a,b){return this.mouseenter(a).mouseleave(b||a)}}),o.focusin="onfocusin"in a,o.focusin||r.each({focus:"focusin",blur:"focusout"},function(a,b){var c=function(a){r.event.simulate(b,a.target,r.event.fix(a))};r.event.special[b]={setup:function(){var d=this.ownerDocument||this,e=W.access(d,b);e||d.addEventListener(a,c,!0),W.access(d,b,(e||0)+1)},teardown:function(){var d=this.ownerDocument||this,e=W.access(d,b)-1;e?W.access(d,b,e):(d.removeEventListener(a,c,!0),W.remove(d,b))}}});var tb=a.location,ub=r.now(),vb=/\?/;r.parseXML=function(b){var c;if(!b||"string"!=typeof b)return null;try{c=(new a.DOMParser).parseFromString(b,"text/xml")}catch(d){c=void 0}return c&&!c.getElementsByTagName("parsererror").length||r.error("Invalid XML: "+b),c};var wb=/\[\]$/,xb=/\r?\n/g,yb=/^(?:submit|button|image|reset|file)$/i,zb=/^(?:input|select|textarea|keygen)/i;function Ab(a,b,c,d){var e;if(Array.isArray(b))r.each(b,function(b,e){c||wb.test(a)?d(a,e):Ab(a+"["+("object"==typeof e&&null!=e?b:"")+"]",e,c,d)});else if(c||"object"!==r.type(b))d(a,b);else for(e in b)Ab(a+"["+e+"]",b[e],c,d)}r.param=function(a,b){var c,d=[],e=function(a,b){var c=r.isFunction(b)?b():b;d[d.length]=encodeURIComponent(a)+"="+encodeURIComponent(null==c?"":c)};if(Array.isArray(a)||a.jquery&&!r.isPlainObject(a))r.each(a,function(){e(this.name,this.value)});else for(c in a)Ab(c,a[c],b,e);return d.join("&")},r.fn.extend({serialize:function(){return r.param(this.serializeArray())},serializeArray:function(){return this.map(function(){var a=r.prop(this,"elements");return a?r.makeArray(a):this}).filter(function(){var a=this.type;return this.name&&!r(this).is(":disabled")&&zb.test(this.nodeName)&&!yb.test(a)&&(this.checked||!ja.test(a))}).map(function(a,b){var c=r(this).val();return null==c?null:Array.isArray(c)?r.map(c,function(a){return{name:b.name,value:a.replace(xb,"\r\n")}}):{name:b.name,value:c.replace(xb,"\r\n")}}).get()}});var Bb=/%20/g,Cb=/#.*$/,Db=/([?&])_=[^&]*/,Eb=/^(.*?):[ \t]*([^\r\n]*)$/gm,Fb=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,Gb=/^(?:GET|HEAD)$/,Hb=/^\/\//,Ib={},Jb={},Kb="*/".concat("*"),Lb=d.createElement("a");Lb.href=tb.href;function Mb(a){return function(b,c){"string"!=typeof b&&(c=b,b="*");var d,e=0,f=b.toLowerCase().match(L)||[];if(r.isFunction(c))while(d=f[e++])"+"===d[0]?(d=d.slice(1)||"*",(a[d]=a[d]||[]).unshift(c)):(a[d]=a[d]||[]).push(c)}}function Nb(a,b,c,d){var e={},f=a===Jb;function g(h){var i;return e[h]=!0,r.each(a[h]||[],function(a,h){var j=h(b,c,d);return"string"!=typeof j||f||e[j]?f?!(i=j):void 0:(b.dataTypes.unshift(j),g(j),!1)}),i}return g(b.dataTypes[0])||!e["*"]&&g("*")}function Ob(a,b){var c,d,e=r.ajaxSettings.flatOptions||{};for(c in b)void 0!==b[c]&&((e[c]?a:d||(d={}))[c]=b[c]);return d&&r.extend(!0,a,d),a}function Pb(a,b,c){var d,e,f,g,h=a.contents,i=a.dataTypes;while("*"===i[0])i.shift(),void 0===d&&(d=a.mimeType||b.getResponseHeader("Content-Type"));if(d)for(e in h)if(h[e]&&h[e].test(d)){i.unshift(e);break}if(i[0]in c)f=i[0];else{for(e in c){if(!i[0]||a.converters[e+" "+i[0]]){f=e;break}g||(g=e)}f=f||g}if(f)return f!==i[0]&&i.unshift(f),c[f]}function Qb(a,b,c,d){var e,f,g,h,i,j={},k=a.dataTypes.slice();if(k[1])for(g in a.converters)j[g.toLowerCase()]=a.converters[g];f=k.shift();while(f)if(a.responseFields[f]&&(c[a.responseFields[f]]=b),!i&&d&&a.dataFilter&&(b=a.dataFilter(b,a.dataType)),i=f,f=k.shift())if("*"===f)f=i;else if("*"!==i&&i!==f){if(g=j[i+" "+f]||j["* "+f],!g)for(e in j)if(h=e.split(" "),h[1]===f&&(g=j[i+" "+h[0]]||j["* "+h[0]])){g===!0?g=j[e]:j[e]!==!0&&(f=h[0],k.unshift(h[1]));break}if(g!==!0)if(g&&a["throws"])b=g(b);else try{b=g(b)}catch(l){return{state:"parsererror",error:g?l:"No conversion from "+i+" to "+f}}}return{state:"success",data:b}}r.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:tb.href,type:"GET",isLocal:Fb.test(tb.protocol),global:!0,processData:!0,async:!0,contentType:"application/x-www-form-urlencoded; charset=UTF-8",accepts:{"*":Kb,text:"text/plain",html:"text/html",xml:"application/xml, text/xml",json:"application/json, text/javascript"},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:"responseXML",text:"responseText",json:"responseJSON"},converters:{"* text":String,"text html":!0,"text json":JSON.parse,"text xml":r.parseXML},flatOptions:{url:!0,context:!0}},ajaxSetup:function(a,b){return b?Ob(Ob(a,r.ajaxSettings),b):Ob(r.ajaxSettings,a)},ajaxPrefilter:Mb(Ib),ajaxTransport:Mb(Jb),ajax:function(b,c){"object"==typeof b&&(c=b,b=void 0),c=c||{};var e,f,g,h,i,j,k,l,m,n,o=r.ajaxSetup({},c),p=o.context||o,q=o.context&&(p.nodeType||p.jquery)?r(p):r.event,s=r.Deferred(),t=r.Callbacks("once memory"),u=o.statusCode||{},v={},w={},x="canceled",y={readyState:0,getResponseHeader:function(a){var b;if(k){if(!h){h={};while(b=Eb.exec(g))h[b[1].toLowerCase()]=b[2]}b=h[a.toLowerCase()]}return null==b?null:b},getAllResponseHeaders:function(){return k?g:null},setRequestHeader:function(a,b){return null==k&&(a=w[a.toLowerCase()]=w[a.toLowerCase()]||a,v[a]=b),this},overrideMimeType:function(a){return null==k&&(o.mimeType=a),this},statusCode:function(a){var b;if(a)if(k)y.always(a[y.status]);else for(b in a)u[b]=[u[b],a[b]];return this},abort:function(a){var b=a||x;return e&&e.abort(b),A(0,b),this}};if(s.promise(y),o.url=((b||o.url||tb.href)+"").replace(Hb,tb.protocol+"//"),o.type=c.method||c.type||o.method||o.type,o.dataTypes=(o.dataType||"*").toLowerCase().match(L)||[""],null==o.crossDomain){j=d.createElement("a");try{j.href=o.url,j.href=j.href,o.crossDomain=Lb.protocol+"//"+Lb.host!=j.protocol+"//"+j.host}catch(z){o.crossDomain=!0}}if(o.data&&o.processData&&"string"!=typeof o.data&&(o.data=r.param(o.data,o.traditional)),Nb(Ib,o,c,y),k)return y;l=r.event&&o.global,l&&0===r.active++&&r.event.trigger("ajaxStart"),o.type=o.type.toUpperCase(),o.hasContent=!Gb.test(o.type),f=o.url.replace(Cb,""),o.hasContent?o.data&&o.processData&&0===(o.contentType||"").indexOf("application/x-www-form-urlencoded")&&(o.data=o.data.replace(Bb,"+")):(n=o.url.slice(f.length),o.data&&(f+=(vb.test(f)?"&":"?")+o.data,delete o.data),o.cache===!1&&(f=f.replace(Db,"$1"),n=(vb.test(f)?"&":"?")+"_="+ub++ +n),o.url=f+n),o.ifModified&&(r.lastModified[f]&&y.setRequestHeader("If-Modified-Since",r.lastModified[f]),r.etag[f]&&y.setRequestHeader("If-None-Match",r.etag[f])),(o.data&&o.hasContent&&o.contentType!==!1||c.contentType)&&y.setRequestHeader("Content-Type",o.contentType),y.setRequestHeader("Accept",o.dataTypes[0]&&o.accepts[o.dataTypes[0]]?o.accepts[o.dataTypes[0]]+("*"!==o.dataTypes[0]?", "+Kb+"; q=0.01":""):o.accepts["*"]);for(m in o.headers)y.setRequestHeader(m,o.headers[m]);if(o.beforeSend&&(o.beforeSend.call(p,y,o)===!1||k))return y.abort();if(x="abort",t.add(o.complete),y.done(o.success),y.fail(o.error),e=Nb(Jb,o,c,y)){if(y.readyState=1,l&&q.trigger("ajaxSend",[y,o]),k)return y;o.async&&o.timeout>0&&(i=a.setTimeout(function(){y.abort("timeout")},o.timeout));try{k=!1,e.send(v,A)}catch(z){if(k)throw z;A(-1,z)}}else A(-1,"No Transport");function A(b,c,d,h){var j,m,n,v,w,x=c;k||(k=!0,i&&a.clearTimeout(i),e=void 0,g=h||"",y.readyState=b>0?4:0,j=b>=200&&b<300||304===b,d&&(v=Pb(o,y,d)),v=Qb(o,v,y,j),j?(o.ifModified&&(w=y.getResponseHeader("Last-Modified"),w&&(r.lastModified[f]=w),w=y.getResponseHeader("etag"),w&&(r.etag[f]=w)),204===b||"HEAD"===o.type?x="nocontent":304===b?x="notmodified":(x=v.state,m=v.data,n=v.error,j=!n)):(n=x,!b&&x||(x="error",b<0&&(b=0))),y.status=b,y.statusText=(c||x)+"",j?s.resolveWith(p,[m,x,y]):s.rejectWith(p,[y,x,n]),y.statusCode(u),u=void 0,l&&q.trigger(j?"ajaxSuccess":"ajaxError",[y,o,j?m:n]),t.fireWith(p,[y,x]),l&&(q.trigger("ajaxComplete",[y,o]),--r.active||r.event.trigger("ajaxStop")))}return y},getJSON:function(a,b,c){return r.get(a,b,c,"json")},getScript:function(a,b){return r.get(a,void 0,b,"script")}}),r.each(["get","post"],function(a,b){r[b]=function(a,c,d,e){return r.isFunction(c)&&(e=e||d,d=c,c=void 0),r.ajax(r.extend({url:a,type:b,dataType:e,data:c,success:d},r.isPlainObject(a)&&a))}}),r._evalUrl=function(a){return r.ajax({url:a,type:"GET",dataType:"script",cache:!0,async:!1,global:!1,"throws":!0})},r.fn.extend({wrapAll:function(a){var b;return this[0]&&(r.isFunction(a)&&(a=a.call(this[0])),b=r(a,this[0].ownerDocument).eq(0).clone(!0),this[0].parentNode&&b.insertBefore(this[0]),b.map(function(){var a=this;while(a.firstElementChild)a=a.firstElementChild;return a}).append(this)),this},wrapInner:function(a){return r.isFunction(a)?this.each(function(b){r(this).wrapInner(a.call(this,b))}):this.each(function(){var b=r(this),c=b.contents();c.length?c.wrapAll(a):b.append(a)})},wrap:function(a){var b=r.isFunction(a);return this.each(function(c){r(this).wrapAll(b?a.call(this,c):a)})},unwrap:function(a){return this.parent(a).not("body").each(function(){r(this).replaceWith(this.childNodes)}),this}}),r.expr.pseudos.hidden=function(a){return!r.expr.pseudos.visible(a)},r.expr.pseudos.visible=function(a){return!!(a.offsetWidth||a.offsetHeight||a.getClientRects().length)},r.ajaxSettings.xhr=function(){try{return new a.XMLHttpRequest}catch(b){}};var Rb={0:200,1223:204},Sb=r.ajaxSettings.xhr();o.cors=!!Sb&&"withCredentials"in Sb,o.ajax=Sb=!!Sb,r.ajaxTransport(function(b){var c,d;if(o.cors||Sb&&!b.crossDomain)return{send:function(e,f){var g,h=b.xhr();if(h.open(b.type,b.url,b.async,b.username,b.password),b.xhrFields)for(g in b.xhrFields)h[g]=b.xhrFields[g];b.mimeType&&h.overrideMimeType&&h.overrideMimeType(b.mimeType),b.crossDomain||e["X-Requested-With"]||(e["X-Requested-With"]="XMLHttpRequest");for(g in e)h.setRequestHeader(g,e[g]);c=function(a){return function(){c&&(c=d=h.onload=h.onerror=h.onabort=h.onreadystatechange=null,"abort"===a?h.abort():"error"===a?"number"!=typeof h.status?f(0,"error"):f(h.status,h.statusText):f(Rb[h.status]||h.status,h.statusText,"text"!==(h.responseType||"text")||"string"!=typeof h.responseText?{binary:h.response}:{text:h.responseText},h.getAllResponseHeaders()))}},h.onload=c(),d=h.onerror=c("error"),void 0!==h.onabort?h.onabort=d:h.onreadystatechange=function(){4===h.readyState&&a.setTimeout(function(){c&&d()})},c=c("abort");try{h.send(b.hasContent&&b.data||null)}catch(i){if(c)throw i}},abort:function(){c&&c()}}}),r.ajaxPrefilter(function(a){a.crossDomain&&(a.contents.script=!1)}),r.ajaxSetup({accepts:{script:"text/javascript, application/javascript, application/ecmascript, application/x-ecmascript"},contents:{script:/\b(?:java|ecma)script\b/},converters:{"text script":function(a){return r.globalEval(a),a}}}),r.ajaxPrefilter("script",function(a){void 0===a.cache&&(a.cache=!1),a.crossDomain&&(a.type="GET")}),r.ajaxTransport("script",function(a){if(a.crossDomain){var b,c;return{send:function(e,f){b=r("<script>").prop({charset:a.scriptCharset,src:a.url}).on("load error",c=function(a){b.remove(),c=null,a&&f("error"===a.type?404:200,a.type)}),d.head.appendChild(b[0])},abort:function(){c&&c()}}}});var Tb=[],Ub=/(=)\?(?=&|$)|\?\?/;r.ajaxSetup({jsonp:"callback",jsonpCallback:function(){var a=Tb.pop()||r.expando+"_"+ub++;return this[a]=!0,a}}),r.ajaxPrefilter("json jsonp",function(b,c,d){var e,f,g,h=b.jsonp!==!1&&(Ub.test(b.url)?"url":"string"==typeof b.data&&0===(b.contentType||"").indexOf("application/x-www-form-urlencoded")&&Ub.test(b.data)&&"data");if(h||"jsonp"===b.dataTypes[0])return e=b.jsonpCallback=r.isFunction(b.jsonpCallback)?b.jsonpCallback():b.jsonpCallback,h?b[h]=b[h].replace(Ub,"$1"+e):b.jsonp!==!1&&(b.url+=(vb.test(b.url)?"&":"?")+b.jsonp+"="+e),b.converters["script json"]=function(){return g||r.error(e+" was not called"),g[0]},b.dataTypes[0]="json",f=a[e],a[e]=function(){g=arguments},d.always(function(){void 0===f?r(a).removeProp(e):a[e]=f,b[e]&&(b.jsonpCallback=c.jsonpCallback,Tb.push(e)),g&&r.isFunction(f)&&f(g[0]),g=f=void 0}),"script"}),o.createHTMLDocument=function(){var a=d.implementation.createHTMLDocument("").body;return a.innerHTML="<form></form><form></form>",2===a.childNodes.length}(),r.parseHTML=function(a,b,c){if("string"!=typeof a)return[];"boolean"==typeof b&&(c=b,b=!1);var e,f,g;return b||(o.createHTMLDocument?(b=d.implementation.createHTMLDocument(""),e=b.createElement("base"),e.href=d.location.href,b.head.appendChild(e)):b=d),f=C.exec(a),g=!c&&[],f?[b.createElement(f[1])]:(f=qa([a],b,g),g&&g.length&&r(g).remove(),r.merge([],f.childNodes))},r.fn.load=function(a,b,c){var d,e,f,g=this,h=a.indexOf(" ");return h>-1&&(d=pb(a.slice(h)),a=a.slice(0,h)),r.isFunction(b)?(c=b,b=void 0):b&&"object"==typeof b&&(e="POST"),g.length>0&&r.ajax({url:a,type:e||"GET",dataType:"html",data:b}).done(function(a){f=arguments,g.html(d?r("<div>").append(r.parseHTML(a)).find(d):a)}).always(c&&function(a,b){g.each(function(){c.apply(this,f||[a.responseText,b,a])})}),this},r.each(["ajaxStart","ajaxStop","ajaxComplete","ajaxError","ajaxSuccess","ajaxSend"],function(a,b){r.fn[b]=function(a){return this.on(b,a)}}),r.expr.pseudos.animated=function(a){return r.grep(r.timers,function(b){return a===b.elem}).length},r.offset={setOffset:function(a,b,c){var d,e,f,g,h,i,j,k=r.css(a,"position"),l=r(a),m={};"static"===k&&(a.style.position="relative"),h=l.offset(),f=r.css(a,"top"),i=r.css(a,"left"),j=("absolute"===k||"fixed"===k)&&(f+i).indexOf("auto")>-1,j?(d=l.position(),g=d.top,e=d.left):(g=parseFloat(f)||0,e=parseFloat(i)||0),r.isFunction(b)&&(b=b.call(a,c,r.extend({},h))),null!=b.top&&(m.top=b.top-h.top+g),null!=b.left&&(m.left=b.left-h.left+e),"using"in b?b.using.call(a,m):l.css(m)}},r.fn.extend({offset:function(a){if(arguments.length)return void 0===a?this:this.each(function(b){r.offset.setOffset(this,a,b)});var b,c,d,e,f=this[0];if(f)return f.getClientRects().length?(d=f.getBoundingClientRect(),b=f.ownerDocument,c=b.documentElement,e=b.defaultView,{top:d.top+e.pageYOffset-c.clientTop,left:d.left+e.pageXOffset-c.clientLeft}):{top:0,left:0}},position:function(){if(this[0]){var a,b,c=this[0],d={top:0,left:0};return"fixed"===r.css(c,"position")?b=c.getBoundingClientRect():(a=this.offsetParent(),b=this.offset(),B(a[0],"html")||(d=a.offset()),d={top:d.top+r.css(a[0],"borderTopWidth",!0),left:d.left+r.css(a[0],"borderLeftWidth",!0)}),{top:b.top-d.top-r.css(c,"marginTop",!0),left:b.left-d.left-r.css(c,"marginLeft",!0)}}},offsetParent:function(){return this.map(function(){var a=this.offsetParent;while(a&&"static"===r.css(a,"position"))a=a.offsetParent;return a||ra})}}),r.each({scrollLeft:"pageXOffset",scrollTop:"pageYOffset"},function(a,b){var c="pageYOffset"===b;r.fn[a]=function(d){return T(this,function(a,d,e){var f;return r.isWindow(a)?f=a:9===a.nodeType&&(f=a.defaultView),void 0===e?f?f[b]:a[d]:void(f?f.scrollTo(c?f.pageXOffset:e,c?e:f.pageYOffset):a[d]=e)},a,d,arguments.length)}}),r.each(["top","left"],function(a,b){r.cssHooks[b]=Pa(o.pixelPosition,function(a,c){if(c)return c=Oa(a,b),Ma.test(c)?r(a).position()[b]+"px":c})}),r.each({Height:"height",Width:"width"},function(a,b){r.each({padding:"inner"+a,content:b,"":"outer"+a},function(c,d){r.fn[d]=function(e,f){var g=arguments.length&&(c||"boolean"!=typeof e),h=c||(e===!0||f===!0?"margin":"border");return T(this,function(b,c,e){var f;return r.isWindow(b)?0===d.indexOf("outer")?b["inner"+a]:b.document.documentElement["client"+a]:9===b.nodeType?(f=b.documentElement,Math.max(b.body["scroll"+a],f["scroll"+a],b.body["offset"+a],f["offset"+a],f["client"+a])):void 0===e?r.css(b,c,h):r.style(b,c,e,h)},b,g?e:void 0,g)}})}),r.fn.extend({bind:function(a,b,c){return this.on(a,null,b,c)},unbind:function(a,b){return this.off(a,null,b)},delegate:function(a,b,c,d){return this.on(b,a,c,d)},undelegate:function(a,b,c){return 1===arguments.length?this.off(a,"**"):this.off(b,a||"**",c)}}),r.holdReady=function(a){a?r.readyWait++:r.ready(!0)},r.isArray=Array.isArray,r.parseJSON=JSON.parse,r.nodeName=B,"function"==typeof define&&define.amd&&define("jquery",[],function(){return r});var Vb=a.jQuery,Wb=a.$;return r.noConflict=function(b){return a.$===r&&(a.$=Wb),b&&a.jQuery===r&&(a.jQuery=Vb),r},b||(a.jQuery=a.$=r),r});

;/**!
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.12.5
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
	typeof define === 'function' && define.amd ? define(factory) :
	(global.Popper = factory());
}(this, (function () { 'use strict';

var nativeHints = ['native code', '[object MutationObserverConstructor]'];

/**
 * Determine if a function is implemented natively (as opposed to a polyfill).
 * @method
 * @memberof Popper.Utils
 * @argument {Function | undefined} fn the function to check
 * @returns {Boolean}
 */
var isNative = (function (fn) {
  return nativeHints.some(function (hint) {
    return (fn || '').toString().indexOf(hint) > -1;
  });
});

var isBrowser = typeof window !== 'undefined';
var longerTimeoutBrowsers = ['Edge', 'Trident', 'Firefox'];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}

function microtaskDebounce(fn) {
  var scheduled = false;
  var i = 0;
  var elem = document.createElement('span');

  // MutationObserver provides a mechanism for scheduling microtasks, which
  // are scheduled *before* the next task. This gives us a way to debounce
  // a function but ensure it's called *before* the next paint.
  var observer = new MutationObserver(function () {
    fn();
    scheduled = false;
  });

  observer.observe(elem, { attributes: true });

  return function () {
    if (!scheduled) {
      scheduled = true;
      elem.setAttribute('x-index', i);
      i = i + 1; // don't use compund (+=) because it doesn't get optimized in V8
    }
  };
}

function taskDebounce(fn) {
  var scheduled = false;
  return function () {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function () {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}

// It's common for MutationObserver polyfills to be seen in the wild, however
// these rely on Mutation Events which only occur when an element is connected
// to the DOM. The algorithm used in this module does not use a connected element,
// and so we must ensure that a *native* MutationObserver is available.
var supportsNativeMutationObserver = isBrowser && isNative(window.MutationObserver);

/**
* Create a debounced version of a method, that's asynchronously deferred
* but called in the minimum time possible.
*
* @method
* @memberof Popper.Utils
* @argument {Function} fn
* @returns {Function}
*/
var debounce = supportsNativeMutationObserver ? microtaskDebounce : taskDebounce;

/**
 * Check if the given variable is a function
 * @method
 * @memberof Popper.Utils
 * @argument {Any} functionToCheck - variable to check
 * @returns {Boolean} answer to: is a function?
 */
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === '[object Function]';
}

/**
 * Get CSS computed property of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Eement} element
 * @argument {String} property
 */
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  // NOTE: 1 DOM access here
  var css = window.getComputedStyle(element, null);
  return property ? css[property] : css;
}

/**
 * Returns the parentNode or the host of the element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} parent
 */
function getParentNode(element) {
  if (element.nodeName === 'HTML') {
    return element;
  }
  return element.parentNode || element.host;
}

/**
 * Returns the scrolling parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} scroll parent
 */
function getScrollParent(element) {
  // Return body, `getScroll` will take care to get the correct `scrollTop` from it
  if (!element || ['HTML', 'BODY', '#document'].indexOf(element.nodeName) !== -1) {
    return window.document.body;
  }

  // Firefox want us to check `-x` and `-y` variations as well

  var _getStyleComputedProp = getStyleComputedProperty(element),
      overflow = _getStyleComputedProp.overflow,
      overflowX = _getStyleComputedProp.overflowX,
      overflowY = _getStyleComputedProp.overflowY;

  if (/(auto|scroll)/.test(overflow + overflowY + overflowX)) {
    return element;
  }

  return getScrollParent(getParentNode(element));
}

/**
 * Returns the offset parent of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Element} offset parent
 */
function getOffsetParent(element) {
  // NOTE: 1 DOM access here
  var offsetParent = element && element.offsetParent;
  var nodeName = offsetParent && offsetParent.nodeName;

  if (!nodeName || nodeName === 'BODY' || nodeName === 'HTML') {
    return window.document.documentElement;
  }

  // .offsetParent will return the closest TD or TABLE in case
  // no offsetParent is present, I hate this job...
  if (['TD', 'TABLE'].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, 'position') === 'static') {
    return getOffsetParent(offsetParent);
  }

  return offsetParent;
}

function isOffsetContainer(element) {
  var nodeName = element.nodeName;

  if (nodeName === 'BODY') {
    return false;
  }
  return nodeName === 'HTML' || getOffsetParent(element.firstElementChild) === element;
}

/**
 * Finds the root node (document, shadowDOM root) of the given element
 * @method
 * @memberof Popper.Utils
 * @argument {Element} node
 * @returns {Element} root node
 */
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }

  return node;
}

/**
 * Finds the offset parent common to the two provided nodes
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element1
 * @argument {Element} element2
 * @returns {Element} common offset parent
 */
function findCommonOffsetParent(element1, element2) {
  // This check is needed to avoid errors in case one of the elements isn't defined for any reason
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return window.document.documentElement;
  }

  // Here we make sure to give as "start" the element that comes first in the DOM
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;

  // Get common ancestor container
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;

  // Both nodes are inside #document

  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }

    return getOffsetParent(commonAncestorContainer);
  }

  // one of the nodes is inside shadowDOM, find which one
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}

/**
 * Gets the scroll value of the given element in the given side (top and left)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {String} side `top` or `left`
 * @returns {number} amount of scrolled pixels
 */
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'top';

  var upperSide = side === 'top' ? 'scrollTop' : 'scrollLeft';
  var nodeName = element.nodeName;

  if (nodeName === 'BODY' || nodeName === 'HTML') {
    var html = window.document.documentElement;
    var scrollingElement = window.document.scrollingElement || html;
    return scrollingElement[upperSide];
  }

  return element[upperSide];
}

/*
 * Sum or subtract the element scroll values (left and top) from a given rect object
 * @method
 * @memberof Popper.Utils
 * @param {Object} rect - Rect object you want to change
 * @param {HTMLElement} element - The element from the function reads the scroll values
 * @param {Boolean} subtract - set to true if you want to subtract the scroll values
 * @return {Object} rect - The modifier rect object
 */
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  var scrollTop = getScroll(element, 'top');
  var scrollLeft = getScroll(element, 'left');
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}

/*
 * Helper to detect borders of a given element
 * @method
 * @memberof Popper.Utils
 * @param {CSSStyleDeclaration} styles
 * Result of `getStyleComputedProperty` on the given element
 * @param {String} axis - `x` or `y`
 * @return {number} borders - The borders size of the given axis
 */

function getBordersSize(styles, axis) {
  var sideA = axis === 'x' ? 'Left' : 'Top';
  var sideB = sideA === 'Left' ? 'Right' : 'Bottom';

  return +styles['border' + sideA + 'Width'].split('px')[0] + +styles['border' + sideB + 'Width'].split('px')[0];
}

/**
 * Tells if you are running Internet Explorer 10
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean} isIE10
 */
var isIE10 = undefined;

var isIE10$1 = function () {
  if (isIE10 === undefined) {
    isIE10 = navigator.appVersion.indexOf('MSIE 10') !== -1;
  }
  return isIE10;
};

function getSize(axis, body, html, computedStyle) {
  return Math.max(body['offset' + axis], body['scroll' + axis], html['client' + axis], html['offset' + axis], html['scroll' + axis], isIE10$1() ? html['offset' + axis] + computedStyle['margin' + (axis === 'Height' ? 'Top' : 'Left')] + computedStyle['margin' + (axis === 'Height' ? 'Bottom' : 'Right')] : 0);
}

function getWindowSizes() {
  var body = window.document.body;
  var html = window.document.documentElement;
  var computedStyle = isIE10$1() && window.getComputedStyle(html);

  return {
    height: getSize('Height', body, html, computedStyle),
    width: getSize('Width', body, html, computedStyle)
  };
}

var classCallCheck = function (instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};

var createClass = function () {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor) descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }

  return function (Constructor, protoProps, staticProps) {
    if (protoProps) defineProperties(Constructor.prototype, protoProps);
    if (staticProps) defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();





var defineProperty = function (obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
};

var _extends = Object.assign || function (target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];

    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }

  return target;
};

/**
 * Given element offsets, generate an output similar to getBoundingClientRect
 * @method
 * @memberof Popper.Utils
 * @argument {Object} offsets
 * @returns {Object} ClientRect like output
 */
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}

/**
 * Get bounding client rect of given element
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} element
 * @return {Object} client rect
 */
function getBoundingClientRect(element) {
  var rect = {};

  // IE10 10 FIX: Please, don't ask, the element isn't
  // considered in DOM in some circumstances...
  // This isn't reproducible in IE10 compatibility mode of IE11
  if (isIE10$1()) {
    try {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, 'top');
      var scrollLeft = getScroll(element, 'left');
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } catch (err) {}
  } else {
    rect = element.getBoundingClientRect();
  }

  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };

  // subtract scrollbar size from sizes
  var sizes = element.nodeName === 'HTML' ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;

  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;

  // if an hypothetical scrollbar is detected, we must be sure it's not a `border`
  // we make this check conditional for performance reasons
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, 'x');
    vertScrollbar -= getBordersSize(styles, 'y');

    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }

  return getClientRect(result);
}

function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var isIE10 = isIE10$1();
  var isHTML = parent.nodeName === 'HTML';
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);

  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = +styles.borderTopWidth.split('px')[0];
  var borderLeftWidth = +styles.borderLeftWidth.split('px')[0];

  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;

  // Subtract margins of documentElement in case it's being used as parent
  // we do this only on HTML because it's the only element that behaves
  // differently when margins are applied to it. The margins are included in
  // the box of the documentElement, in the other cases not.
  if (!isIE10 && isHTML) {
    var marginTop = +styles.marginTop.split('px')[0];
    var marginLeft = +styles.marginLeft.split('px')[0];

    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;

    // Attach marginTop and marginLeft because in some circumstances we may need them
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }

  if (isIE10 ? parent.contains(scrollParent) : parent === scrollParent && scrollParent.nodeName !== 'BODY') {
    offsets = includeScroll(offsets, parent);
  }

  return offsets;
}

function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var html = window.document.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);

  var scrollTop = getScroll(html);
  var scrollLeft = getScroll(html, 'left');

  var offset = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width: width,
    height: height
  };

  return getClientRect(offset);
}

/**
 * Check if the given element is fixed or is inside a fixed parent
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @argument {Element} customContainer
 * @returns {Boolean} answer to "isFixed?"
 */
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === 'BODY' || nodeName === 'HTML') {
    return false;
  }
  if (getStyleComputedProperty(element, 'position') === 'fixed') {
    return true;
  }
  return isFixed(getParentNode(element));
}

/**
 * Computed the boundaries limits and return them
 * @method
 * @memberof Popper.Utils
 * @param {HTMLElement} popper
 * @param {HTMLElement} reference
 * @param {number} padding
 * @param {HTMLElement} boundariesElement - Element used to define the boundaries
 * @returns {Object} Coordinates of the boundaries
 */
function getBoundaries(popper, reference, padding, boundariesElement) {
  // NOTE: 1 DOM access here
  var boundaries = { top: 0, left: 0 };
  var offsetParent = findCommonOffsetParent(popper, reference);

  // Handle viewport case
  if (boundariesElement === 'viewport') {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent);
  } else {
    // Handle other cases based on DOM element used as boundaries
    var boundariesNode = void 0;
    if (boundariesElement === 'scrollParent') {
      boundariesNode = getScrollParent(getParentNode(popper));
      if (boundariesNode.nodeName === 'BODY') {
        boundariesNode = window.document.documentElement;
      }
    } else if (boundariesElement === 'window') {
      boundariesNode = window.document.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }

    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent);

    // In case of HTML, we need a different computation
    if (boundariesNode.nodeName === 'HTML' && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes(),
          height = _getWindowSizes.height,
          width = _getWindowSizes.width;

      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      // for all the other DOM elements, this one is good
      boundaries = offsets;
    }
  }

  // Add paddings
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;

  return boundaries;
}

function getArea(_ref) {
  var width = _ref.width,
      height = _ref.height;

  return width * height;
}

/**
 * Utility used to transform the `auto` placement to the placement with more
 * available space.
 * @method
 * @memberof Popper.Utils
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;

  if (placement.indexOf('auto') === -1) {
    return placement;
  }

  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);

  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };

  var sortedAreas = Object.keys(rects).map(function (key) {
    return _extends({
      key: key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function (a, b) {
    return b.area - a.area;
  });

  var filteredAreas = sortedAreas.filter(function (_ref2) {
    var width = _ref2.width,
        height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });

  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;

  var variation = placement.split('-')[1];

  return computedPlacement + (variation ? '-' + variation : '');
}

/**
 * Get offsets to the reference element
 * @method
 * @memberof Popper.Utils
 * @param {Object} state
 * @param {Element} popper - the popper element
 * @param {Element} reference - the reference element (the popper will be relative to this)
 * @returns {Object} An object containing the offsets which will be applied to the popper
 */
function getReferenceOffsets(state, popper, reference) {
  var commonOffsetParent = findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent);
}

/**
 * Get the outer sizes of the given element (offset size + margins)
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element
 * @returns {Object} object containing width and height properties
 */
function getOuterSizes(element) {
  var styles = window.getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}

/**
 * Get the opposite placement of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement
 * @returns {String} flipped placement
 */
function getOppositePlacement(placement) {
  var hash = { left: 'right', right: 'left', bottom: 'top', top: 'bottom' };
  return placement.replace(/left|right|bottom|top/g, function (matched) {
    return hash[matched];
  });
}

/**
 * Get offsets to the popper
 * @method
 * @memberof Popper.Utils
 * @param {Object} position - CSS position the Popper will get applied
 * @param {HTMLElement} popper - the popper element
 * @param {Object} referenceOffsets - the reference offsets (the popper will be relative to this)
 * @param {String} placement - one of the valid placement options
 * @returns {Object} popperOffsets - An object containing the offsets which will be applied to the popper
 */
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split('-')[0];

  // Get popper node sizes
  var popperRect = getOuterSizes(popper);

  // Add position, width and height to our offsets object
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };

  // depending by the popper placement we have to compute its offsets slightly differently
  var isHoriz = ['right', 'left'].indexOf(placement) !== -1;
  var mainSide = isHoriz ? 'top' : 'left';
  var secondarySide = isHoriz ? 'left' : 'top';
  var measurement = isHoriz ? 'height' : 'width';
  var secondaryMeasurement = !isHoriz ? 'height' : 'width';

  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }

  return popperOffsets;
}

/**
 * Mimics the `find` method of Array
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function find(arr, check) {
  // use native find if supported
  if (Array.prototype.find) {
    return arr.find(check);
  }

  // use `filter` to obtain the same behavior of `find`
  return arr.filter(check)[0];
}

/**
 * Return the index of the matching object
 * @method
 * @memberof Popper.Utils
 * @argument {Array} arr
 * @argument prop
 * @argument value
 * @returns index or -1
 */
function findIndex(arr, prop, value) {
  // use native findIndex if supported
  if (Array.prototype.findIndex) {
    return arr.findIndex(function (cur) {
      return cur[prop] === value;
    });
  }

  // use `find` + `indexOf` if `findIndex` isn't supported
  var match = find(arr, function (obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}

/**
 * Loop trough the list of modifiers and run them in order,
 * each of them will then edit the data object.
 * @method
 * @memberof Popper.Utils
 * @param {dataObject} data
 * @param {Array} modifiers
 * @param {String} ends - Optional modifier name used as stopper
 * @returns {dataObject}
 */
function runModifiers(modifiers, data, ends) {
  var modifiersToRun = ends === undefined ? modifiers : modifiers.slice(0, findIndex(modifiers, 'name', ends));

  modifiersToRun.forEach(function (modifier) {
    if (modifier.function) {
      console.warn('`modifier.function` is deprecated, use `modifier.fn`!');
    }
    var fn = modifier.function || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      // Add properties to offsets to make them a complete clientRect object
      // we do this before each modifier to make sure the previous one doesn't
      // mess with these values
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);

      data = fn(data, modifier);
    }
  });

  return data;
}

/**
 * Updates the position of the popper, computing the new offsets and applying
 * the new style.<br />
 * Prefer `scheduleUpdate` over `update` because of performance reasons.
 * @method
 * @memberof Popper
 */
function update() {
  // if popper is destroyed, don't perform any further update
  if (this.state.isDestroyed) {
    return;
  }

  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };

  // compute reference element offsets
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);

  // store the computed placement inside `originalPlacement`
  data.originalPlacement = data.placement;

  // compute the popper offsets
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = 'absolute';

  // run the modifiers
  data = runModifiers(this.modifiers, data);

  // the first `update` will call `onCreate` callback
  // the other ones will call `onUpdate` callback
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}

/**
 * Helper used to know if the given modifier is enabled.
 * @method
 * @memberof Popper.Utils
 * @returns {Boolean}
 */
function isModifierEnabled(modifiers, modifierName) {
  return modifiers.some(function (_ref) {
    var name = _ref.name,
        enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}

/**
 * Get the prefixed supported property name
 * @method
 * @memberof Popper.Utils
 * @argument {String} property (camelCase)
 * @returns {String} prefixed property (camelCase or PascalCase, depending on the vendor prefix)
 */
function getSupportedPropertyName(property) {
  var prefixes = [false, 'ms', 'Webkit', 'Moz', 'O'];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);

  for (var i = 0; i < prefixes.length - 1; i++) {
    var prefix = prefixes[i];
    var toCheck = prefix ? '' + prefix + upperProp : property;
    if (typeof window.document.body.style[toCheck] !== 'undefined') {
      return toCheck;
    }
  }
  return null;
}

/**
 * Destroy the popper
 * @method
 * @memberof Popper
 */
function destroy() {
  this.state.isDestroyed = true;

  // touch DOM only if `applyStyle` modifier is enabled
  if (isModifierEnabled(this.modifiers, 'applyStyle')) {
    this.popper.removeAttribute('x-placement');
    this.popper.style.left = '';
    this.popper.style.position = '';
    this.popper.style.top = '';
    this.popper.style[getSupportedPropertyName('transform')] = '';
  }

  this.disableEventListeners();

  // remove the popper if user explicity asked for the deletion on destroy
  // do not use `remove` because IE11 doesn't support it
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}

function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === 'BODY';
  var target = isBody ? window : scrollParent;
  target.addEventListener(event, callback, { passive: true });

  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}

/**
 * Setup needed event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function setupEventListeners(reference, options, state, updateBound) {
  // Resize event listener on window
  state.updateBound = updateBound;
  window.addEventListener('resize', state.updateBound, { passive: true });

  // Scroll event listener on scroll parents
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, 'scroll', state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;

  return state;
}

/**
 * It will add resize/scroll events and start recalculating
 * position of the popper element when they are triggered.
 * @method
 * @memberof Popper
 */
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}

/**
 * Remove event listeners used to update the popper position
 * @method
 * @memberof Popper.Utils
 * @private
 */
function removeEventListeners(reference, state) {
  // Remove resize event listener on window
  window.removeEventListener('resize', state.updateBound);

  // Remove scroll event listener on scroll parents
  state.scrollParents.forEach(function (target) {
    target.removeEventListener('scroll', state.updateBound);
  });

  // Reset state
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}

/**
 * It will remove resize/scroll events and won't recalculate popper position
 * when they are triggered. It also won't trigger onUpdate callback anymore,
 * unless you call `update` method manually.
 * @method
 * @memberof Popper
 */
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    window.cancelAnimationFrame(this.scheduleUpdate);
    this.state = removeEventListeners(this.reference, this.state);
  }
}

/**
 * Tells if a given input is a number
 * @method
 * @memberof Popper.Utils
 * @param {*} input to check
 * @return {Boolean}
 */
function isNumeric(n) {
  return n !== '' && !isNaN(parseFloat(n)) && isFinite(n);
}

/**
 * Set the style to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the style to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setStyles(element, styles) {
  Object.keys(styles).forEach(function (prop) {
    var unit = '';
    // add unit if the value is numeric and is one of the following
    if (['width', 'height', 'top', 'right', 'bottom', 'left'].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = 'px';
    }
    element.style[prop] = styles[prop] + unit;
  });
}

/**
 * Set the attributes to the given popper
 * @method
 * @memberof Popper.Utils
 * @argument {Element} element - Element to apply the attributes to
 * @argument {Object} styles
 * Object with a list of properties and values which will be applied to the element
 */
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function (prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} data.styles - List of style properties - values to apply to popper element
 * @argument {Object} data.attributes - List of attribute properties - values to apply to popper element
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The same data object
 */
function applyStyle(data) {
  // any property present in `data.styles` will be applied to the popper,
  // in this way we can make the 3rd party modifiers add custom styles to it
  // Be aware, modifiers could override the properties defined in the previous
  // lines of this modifier!
  setStyles(data.instance.popper, data.styles);

  // any property present in `data.attributes` will be applied to the popper,
  // they will be set as HTML attributes of the element
  setAttributes(data.instance.popper, data.attributes);

  // if arrowElement is defined and arrowStyles has some properties
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }

  return data;
}

/**
 * Set the x-placement attribute before everything else because it could be used
 * to add margins to the popper margins needs to be calculated to get the
 * correct popper offsets.
 * @method
 * @memberof Popper.modifiers
 * @param {HTMLElement} reference - The reference element used to position the popper
 * @param {HTMLElement} popper - The HTML element used as popper.
 * @param {Object} options - Popper.js options
 */
function applyStyleOnLoad(reference, popper, options, modifierOptions, state) {
  // compute reference element offsets
  var referenceOffsets = getReferenceOffsets(state, popper, reference);

  // compute auto placement, store placement inside the data object,
  // modifiers will be able to edit `placement` if needed
  // and refer to originalPlacement to know the original value
  var placement = computeAutoPlacement(options.placement, referenceOffsets, popper, reference, options.modifiers.flip.boundariesElement, options.modifiers.flip.padding);

  popper.setAttribute('x-placement', placement);

  // Apply `position` to popper before anything else because
  // without the position applied we can't guarantee correct computations
  setStyles(popper, { position: 'absolute' });

  return options;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function computeStyle(data, options) {
  var x = options.x,
      y = options.y;
  var popper = data.offsets.popper;

  // Remove this legacy support in Popper.js v2

  var legacyGpuAccelerationOption = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'applyStyle';
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== undefined) {
    console.warn('WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!');
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== undefined ? legacyGpuAccelerationOption : options.gpuAcceleration;

  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);

  // Styles
  var styles = {
    position: popper.position
  };

  // floor sides to avoid blurry text
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };

  var sideA = x === 'bottom' ? 'top' : 'bottom';
  var sideB = y === 'right' ? 'left' : 'right';

  // if gpuAcceleration is set to `true` and transform is supported,
  //  we use `translate3d` to apply the position to the popper we
  // automatically use the supported prefixed version if needed
  var prefixedProperty = getSupportedPropertyName('transform');

  // now, let's make a step back and look at this code closely (wtf?)
  // If the content of the popper grows once it's been positioned, it
  // may happen that the popper gets misplaced because of the new content
  // overflowing its reference element
  // To avoid this problem, we provide two options (x and y), which allow
  // the consumer to define the offset origin.
  // If we position a popper on top of a reference element, we can set
  // `x` to `top` to make the popper grow towards its top instead of
  // its bottom.
  var left = void 0,
      top = void 0;
  if (sideA === 'bottom') {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === 'right') {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = 'translate3d(' + left + 'px, ' + top + 'px, 0)';
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = 'transform';
  } else {
    // othwerise, we use the standard `top`, `left`, `bottom` and `right` properties
    var invertTop = sideA === 'bottom' ? -1 : 1;
    var invertLeft = sideB === 'right' ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ', ' + sideB;
  }

  // Attributes
  var attributes = {
    'x-placement': data.placement
  };

  // Update `data` attributes, styles and arrowStyles
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);

  return data;
}

/**
 * Helper used to know if the given modifier depends from another one.<br />
 * It checks if the needed modifier is listed and enabled.
 * @method
 * @memberof Popper.Utils
 * @param {Array} modifiers - list of modifiers
 * @param {String} requestingName - name of requesting modifier
 * @param {String} requestedName - name of requested modifier
 * @returns {Boolean}
 */
function isModifierRequired(modifiers, requestingName, requestedName) {
  var requesting = find(modifiers, function (_ref) {
    var name = _ref.name;
    return name === requestingName;
  });

  var isRequired = !!requesting && modifiers.some(function (modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });

  if (!isRequired) {
    var _requesting = '`' + requestingName + '`';
    var requested = '`' + requestedName + '`';
    console.warn(requested + ' modifier is required by ' + _requesting + ' modifier in order to work, be sure to include it before ' + _requesting + '!');
  }
  return isRequired;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function arrow(data, options) {
  // arrow depends on keepTogether in order to work
  if (!isModifierRequired(data.instance.modifiers, 'arrow', 'keepTogether')) {
    return data;
  }

  var arrowElement = options.element;

  // if arrowElement is a string, suppose it's a CSS selector
  if (typeof arrowElement === 'string') {
    arrowElement = data.instance.popper.querySelector(arrowElement);

    // if arrowElement is not found, don't run the modifier
    if (!arrowElement) {
      return data;
    }
  } else {
    // if the arrowElement isn't a query selector we must check that the
    // provided DOM node is child of its popper node
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn('WARNING: `arrow.element` must be child of its popper element!');
      return data;
    }
  }

  var placement = data.placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isVertical = ['left', 'right'].indexOf(placement) !== -1;

  var len = isVertical ? 'height' : 'width';
  var sideCapitalized = isVertical ? 'Top' : 'Left';
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? 'left' : 'top';
  var opSide = isVertical ? 'bottom' : 'right';
  var arrowElementSize = getOuterSizes(arrowElement)[len];

  //
  // extends keepTogether behavior making sure the popper and its
  // reference have enough pixels in conjuction
  //

  // top/left side
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  // bottom/right side
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }

  // compute center of the popper
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;

  // Compute the sideValue using the updated popper offsets
  // take popper margin in account because we don't have this info available
  var popperMarginSide = getStyleComputedProperty(data.instance.popper, 'margin' + sideCapitalized).replace('px', '');
  var sideValue = center - getClientRect(data.offsets.popper)[side] - popperMarginSide;

  // prevent arrowElement from being placed not contiguously to its popper
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);

  data.arrowElement = arrowElement;
  data.offsets.arrow = {};
  data.offsets.arrow[side] = Math.round(sideValue);
  data.offsets.arrow[altSide] = ''; // make sure to unset any eventual altSide value from the DOM node

  return data;
}

/**
 * Get the opposite placement variation of the given one
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement variation
 * @returns {String} flipped placement variation
 */
function getOppositeVariation(variation) {
  if (variation === 'end') {
    return 'start';
  } else if (variation === 'start') {
    return 'end';
  }
  return variation;
}

/**
 * List of accepted placements to use as values of the `placement` option.<br />
 * Valid placements are:
 * - `auto`
 * - `top`
 * - `right`
 * - `bottom`
 * - `left`
 *
 * Each placement can have a variation from this list:
 * - `-start`
 * - `-end`
 *
 * Variations are interpreted easily if you think of them as the left to right
 * written languages. Horizontally (`top` and `bottom`), `start` is left and `end`
 * is right.<br />
 * Vertically (`left` and `right`), `start` is top and `end` is bottom.
 *
 * Some valid examples are:
 * - `top-end` (on top of reference, right aligned)
 * - `right-start` (on right of reference, top aligned)
 * - `bottom` (on bottom, centered)
 * - `auto-right` (on the side with more space available, alignment depends by placement)
 *
 * @static
 * @type {Array}
 * @enum {String}
 * @readonly
 * @method placements
 * @memberof Popper
 */
var placements = ['auto-start', 'auto', 'auto-end', 'top-start', 'top', 'top-end', 'right-start', 'right', 'right-end', 'bottom-end', 'bottom', 'bottom-start', 'left-end', 'left', 'left-start'];

// Get rid of `auto` `auto-start` and `auto-end`
var validPlacements = placements.slice(3);

/**
 * Given an initial placement, returns all the subsequent placements
 * clockwise (or counter-clockwise).
 *
 * @method
 * @memberof Popper.Utils
 * @argument {String} placement - A valid placement (it accepts variations)
 * @argument {Boolean} counter - Set to true to walk the placements counterclockwise
 * @returns {Array} placements including their variations
 */
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;

  var index = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index + 1).concat(validPlacements.slice(0, index));
  return counter ? arr.reverse() : arr;
}

var BEHAVIORS = {
  FLIP: 'flip',
  CLOCKWISE: 'clockwise',
  COUNTERCLOCKWISE: 'counterclockwise'
};

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function flip(data, options) {
  // if `inner` modifier is enabled, we can't use the `flip` modifier
  if (isModifierEnabled(data.instance.modifiers, 'inner')) {
    return data;
  }

  if (data.flipped && data.placement === data.originalPlacement) {
    // seems like flip is trying to loop, probably there's not enough space on any of the flippable sides
    return data;
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, options.boundariesElement);

  var placement = data.placement.split('-')[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split('-')[1] || '';

  var flipOrder = [];

  switch (options.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options.behavior;
  }

  flipOrder.forEach(function (step, index) {
    if (placement !== step || flipOrder.length === index + 1) {
      return data;
    }

    placement = data.placement.split('-')[0];
    placementOpposite = getOppositePlacement(placement);

    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;

    // using floor because the reference offsets may contain decimals we are not going to consider here
    var floor = Math.floor;
    var overlapsRef = placement === 'left' && floor(popperOffsets.right) > floor(refOffsets.left) || placement === 'right' && floor(popperOffsets.left) < floor(refOffsets.right) || placement === 'top' && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === 'bottom' && floor(popperOffsets.top) < floor(refOffsets.bottom);

    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);

    var overflowsBoundaries = placement === 'left' && overflowsLeft || placement === 'right' && overflowsRight || placement === 'top' && overflowsTop || placement === 'bottom' && overflowsBottom;

    // flip the variation if required
    var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
    var flippedVariation = !!options.flipVariations && (isVertical && variation === 'start' && overflowsLeft || isVertical && variation === 'end' && overflowsRight || !isVertical && variation === 'start' && overflowsTop || !isVertical && variation === 'end' && overflowsBottom);

    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      // this boolean to detect any flip loop
      data.flipped = true;

      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index + 1];
      }

      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }

      data.placement = placement + (variation ? '-' + variation : '');

      // this object contains `position`, we want to preserve it along with
      // any additional property we may add in the future
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));

      data = runModifiers(data.instance.modifiers, data, 'flip');
    }
  });
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function keepTogether(data) {
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var placement = data.placement.split('-')[0];
  var floor = Math.floor;
  var isVertical = ['top', 'bottom'].indexOf(placement) !== -1;
  var side = isVertical ? 'right' : 'bottom';
  var opSide = isVertical ? 'left' : 'top';
  var measurement = isVertical ? 'width' : 'height';

  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }

  return data;
}

/**
 * Converts a string containing value + unit into a px value number
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} str - Value + unit string
 * @argument {String} measurement - `height` or `width`
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @returns {Number|String}
 * Value in pixels, or original string if no values were extracted
 */
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  // separate value from unit
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];

  // If it's not a number it's an operator, I guess
  if (!value) {
    return str;
  }

  if (unit.indexOf('%') === 0) {
    var element = void 0;
    switch (unit) {
      case '%p':
        element = popperOffsets;
        break;
      case '%':
      case '%r':
      default:
        element = referenceOffsets;
    }

    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === 'vh' || unit === 'vw') {
    // if is a vh or vw, we calculate the size based on the viewport
    var size = void 0;
    if (unit === 'vh') {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    // if is an explicit pixel unit, we get rid of the unit and keep the value
    // if is an implicit unit, it's px, and we return just the value
    return value;
  }
}

/**
 * Parse an `offset` string to extrapolate `x` and `y` numeric offsets.
 * @function
 * @memberof {modifiers~offset}
 * @private
 * @argument {String} offset
 * @argument {Object} popperOffsets
 * @argument {Object} referenceOffsets
 * @argument {String} basePlacement
 * @returns {Array} a two cells array with x and y offsets in numbers
 */
function parseOffset(offset, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];

  // Use height if placement is left or right and index is 0 otherwise use width
  // in this way the first offset will use an axis and the second one
  // will use the other one
  var useHeight = ['right', 'left'].indexOf(basePlacement) !== -1;

  // Split the offset string to obtain a list of values and operands
  // The regex addresses values with the plus or minus sign in front (+10, -20, etc)
  var fragments = offset.split(/(\+|\-)/).map(function (frag) {
    return frag.trim();
  });

  // Detect if the offset string contains a pair of values or a single one
  // they could be separated by comma or space
  var divider = fragments.indexOf(find(fragments, function (frag) {
    return frag.search(/,|\s/) !== -1;
  }));

  if (fragments[divider] && fragments[divider].indexOf(',') === -1) {
    console.warn('Offsets separated by white space(s) are deprecated, use a comma (,) instead.');
  }

  // If divider is found, we divide the list of values and operands to divide
  // them by ofset X and Y.
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]), [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))] : [fragments];

  // Convert the values with units to absolute pixels to allow our computations
  ops = ops.map(function (op, index) {
    // Most of the units rely on the orientation of the popper
    var measurement = (index === 1 ? !useHeight : useHeight) ? 'height' : 'width';
    var mergeWithPrevious = false;
    return op
    // This aggregates any `+` or `-` sign that aren't considered operators
    // e.g.: 10 + +5 => [10, +, +5]
    .reduce(function (a, b) {
      if (a[a.length - 1] === '' && ['+', '-'].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, [])
    // Here we convert the string values into number values (in px)
    .map(function (str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });

  // Loop trough the offsets arrays and execute the operations
  ops.forEach(function (op, index) {
    op.forEach(function (frag, index2) {
      if (isNumeric(frag)) {
        offsets[index] += frag * (op[index2 - 1] === '-' ? -1 : 1);
      }
    });
  });
  return offsets;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @argument {Number|String} options.offset=0
 * The offset value as described in the modifier description
 * @returns {Object} The data object, properly modified
 */
function offset(data, _ref) {
  var offset = _ref.offset;
  var placement = data.placement,
      _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var basePlacement = placement.split('-')[0];

  var offsets = void 0;
  if (isNumeric(+offset)) {
    offsets = [+offset, 0];
  } else {
    offsets = parseOffset(offset, popper, reference, basePlacement);
  }

  if (basePlacement === 'left') {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === 'right') {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === 'top') {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === 'bottom') {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }

  data.popper = popper;
  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function preventOverflow(data, options) {
  var boundariesElement = options.boundariesElement || getOffsetParent(data.instance.popper);

  // If offsetParent is the reference element, we really want to
  // go one step up and use the next offsetParent as reference to
  // avoid to make this modifier completely useless and look like broken
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }

  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options.padding, boundariesElement);
  options.boundaries = boundaries;

  var order = options.priority;
  var popper = data.offsets.popper;

  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === 'right' ? 'left' : 'top';
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === 'right' ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };

  order.forEach(function (placement) {
    var side = ['left', 'top'].indexOf(placement) !== -1 ? 'primary' : 'secondary';
    popper = _extends({}, popper, check[side](placement));
  });

  data.offsets.popper = popper;

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var shiftvariation = placement.split('-')[1];

  // if shift shiftvariation is specified, run the modifier
  if (shiftvariation) {
    var _data$offsets = data.offsets,
        reference = _data$offsets.reference,
        popper = _data$offsets.popper;

    var isVertical = ['bottom', 'top'].indexOf(basePlacement) !== -1;
    var side = isVertical ? 'left' : 'top';
    var measurement = isVertical ? 'width' : 'height';

    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };

    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by update method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, 'hide', 'preventOverflow')) {
    return data;
  }

  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function (modifier) {
    return modifier.name === 'preventOverflow';
  }).boundaries;

  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === true) {
      return data;
    }

    data.hide = true;
    data.attributes['x-out-of-boundaries'] = '';
  } else {
    // Avoid unnecessary DOM access if visibility hasn't changed
    if (data.hide === false) {
      return data;
    }

    data.hide = false;
    data.attributes['x-out-of-boundaries'] = false;
  }

  return data;
}

/**
 * @function
 * @memberof Modifiers
 * @argument {Object} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {Object} The data object, properly modified
 */
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split('-')[0];
  var _data$offsets = data.offsets,
      popper = _data$offsets.popper,
      reference = _data$offsets.reference;

  var isHoriz = ['left', 'right'].indexOf(basePlacement) !== -1;

  var subtractLength = ['top', 'left'].indexOf(basePlacement) === -1;

  popper[isHoriz ? 'left' : 'top'] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? 'width' : 'height'] : 0);

  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);

  return data;
}

/**
 * Modifier function, each modifier can have a function of this type assigned
 * to its `fn` property.<br />
 * These functions will be called on each update, this means that you must
 * make sure they are performant enough to avoid performance bottlenecks.
 *
 * @function ModifierFn
 * @argument {dataObject} data - The data object generated by `update` method
 * @argument {Object} options - Modifiers configuration and options
 * @returns {dataObject} The data object, properly modified
 */

/**
 * Modifiers are plugins used to alter the behavior of your poppers.<br />
 * Popper.js uses a set of 9 modifiers to provide all the basic functionalities
 * needed by the library.
 *
 * Usually you don't want to override the `order`, `fn` and `onLoad` props.
 * All the other properties are configurations that could be tweaked.
 * @namespace modifiers
 */
var modifiers = {
  /**
   * Modifier used to shift the popper on the start or end of its reference
   * element.<br />
   * It will read the variation of the `placement` property.<br />
   * It can be one either `-end` or `-start`.
   * @memberof modifiers
   * @inner
   */
  shift: {
    /** @prop {number} order=100 - Index used to define the order of execution */
    order: 100,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: shift
  },

  /**
   * The `offset` modifier can shift your popper on both its axis.
   *
   * It accepts the following units:
   * - `px` or unitless, interpreted as pixels
   * - `%` or `%r`, percentage relative to the length of the reference element
   * - `%p`, percentage relative to the length of the popper element
   * - `vw`, CSS viewport width unit
   * - `vh`, CSS viewport height unit
   *
   * For length is intended the main axis relative to the placement of the popper.<br />
   * This means that if the placement is `top` or `bottom`, the length will be the
   * `width`. In case of `left` or `right`, it will be the height.
   *
   * You can provide a single value (as `Number` or `String`), or a pair of values
   * as `String` divided by a comma or one (or more) white spaces.<br />
   * The latter is a deprecated method because it leads to confusion and will be
   * removed in v2.<br />
   * Additionally, it accepts additions and subtractions between different units.
   * Note that multiplications and divisions aren't supported.
   *
   * Valid examples are:
   * ```
   * 10
   * '10%'
   * '10, 10'
   * '10%, 10'
   * '10 + 10%'
   * '10 - 5vh + 3%'
   * '-10px + 5vh, 5px - 6%'
   * ```
   * > **NB**: If you desire to apply offsets to your poppers in a way that may make them overlap
   * > with their reference element, unfortunately, you will have to disable the `flip` modifier.
   * > More on this [reading this issue](https://github.com/FezVrasta/popper.js/issues/373)
   *
   * @memberof modifiers
   * @inner
   */
  offset: {
    /** @prop {number} order=200 - Index used to define the order of execution */
    order: 200,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: offset,
    /** @prop {Number|String} offset=0
     * The offset value as described in the modifier description
     */
    offset: 0
  },

  /**
   * Modifier used to prevent the popper from being positioned outside the boundary.
   *
   * An scenario exists where the reference itself is not within the boundaries.<br />
   * We can say it has "escaped the boundaries" — or just "escaped".<br />
   * In this case we need to decide whether the popper should either:
   *
   * - detach from the reference and remain "trapped" in the boundaries, or
   * - if it should ignore the boundary and "escape with its reference"
   *
   * When `escapeWithReference` is set to`true` and reference is completely
   * outside its boundaries, the popper will overflow (or completely leave)
   * the boundaries in order to remain attached to the edge of the reference.
   *
   * @memberof modifiers
   * @inner
   */
  preventOverflow: {
    /** @prop {number} order=300 - Index used to define the order of execution */
    order: 300,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: preventOverflow,
    /**
     * @prop {Array} [priority=['left','right','top','bottom']]
     * Popper will try to prevent overflow following these priorities by default,
     * then, it could overflow on the left and on top of the `boundariesElement`
     */
    priority: ['left', 'right', 'top', 'bottom'],
    /**
     * @prop {number} padding=5
     * Amount of pixel used to define a minimum distance between the boundaries
     * and the popper this makes sure the popper has always a little padding
     * between the edges of its container
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='scrollParent'
     * Boundaries used by the modifier, can be `scrollParent`, `window`,
     * `viewport` or any DOM element.
     */
    boundariesElement: 'scrollParent'
  },

  /**
   * Modifier used to make sure the reference and its popper stay near eachothers
   * without leaving any gap between the two. Expecially useful when the arrow is
   * enabled and you want to assure it to point to its reference element.
   * It cares only about the first axis, you can still have poppers with margin
   * between the popper and its reference element.
   * @memberof modifiers
   * @inner
   */
  keepTogether: {
    /** @prop {number} order=400 - Index used to define the order of execution */
    order: 400,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: keepTogether
  },

  /**
   * This modifier is used to move the `arrowElement` of the popper to make
   * sure it is positioned between the reference element and its popper element.
   * It will read the outer size of the `arrowElement` node to detect how many
   * pixels of conjuction are needed.
   *
   * It has no effect if no `arrowElement` is provided.
   * @memberof modifiers
   * @inner
   */
  arrow: {
    /** @prop {number} order=500 - Index used to define the order of execution */
    order: 500,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: arrow,
    /** @prop {String|HTMLElement} element='[x-arrow]' - Selector or node used as arrow */
    element: '[x-arrow]'
  },

  /**
   * Modifier used to flip the popper's placement when it starts to overlap its
   * reference element.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   *
   * **NOTE:** this modifier will interrupt the current update cycle and will
   * restart it if it detects the need to flip the placement.
   * @memberof modifiers
   * @inner
   */
  flip: {
    /** @prop {number} order=600 - Index used to define the order of execution */
    order: 600,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: flip,
    /**
     * @prop {String|Array} behavior='flip'
     * The behavior used to change the popper's placement. It can be one of
     * `flip`, `clockwise`, `counterclockwise` or an array with a list of valid
     * placements (with optional variations).
     */
    behavior: 'flip',
    /**
     * @prop {number} padding=5
     * The popper will flip if it hits the edges of the `boundariesElement`
     */
    padding: 5,
    /**
     * @prop {String|HTMLElement} boundariesElement='viewport'
     * The element which will define the boundaries of the popper position,
     * the popper will never be placed outside of the defined boundaries
     * (except if keepTogether is enabled)
     */
    boundariesElement: 'viewport'
  },

  /**
   * Modifier used to make the popper flow toward the inner of the reference element.
   * By default, when this modifier is disabled, the popper will be placed outside
   * the reference element.
   * @memberof modifiers
   * @inner
   */
  inner: {
    /** @prop {number} order=700 - Index used to define the order of execution */
    order: 700,
    /** @prop {Boolean} enabled=false - Whether the modifier is enabled or not */
    enabled: false,
    /** @prop {ModifierFn} */
    fn: inner
  },

  /**
   * Modifier used to hide the popper when its reference element is outside of the
   * popper boundaries. It will set a `x-out-of-boundaries` attribute which can
   * be used to hide with a CSS selector the popper when its reference is
   * out of boundaries.
   *
   * Requires the `preventOverflow` modifier before it in order to work.
   * @memberof modifiers
   * @inner
   */
  hide: {
    /** @prop {number} order=800 - Index used to define the order of execution */
    order: 800,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: hide
  },

  /**
   * Computes the style that will be applied to the popper element to gets
   * properly positioned.
   *
   * Note that this modifier will not touch the DOM, it just prepares the styles
   * so that `applyStyle` modifier can apply it. This separation is useful
   * in case you need to replace `applyStyle` with a custom implementation.
   *
   * This modifier has `850` as `order` value to maintain backward compatibility
   * with previous versions of Popper.js. Expect the modifiers ordering method
   * to change in future major versions of the library.
   *
   * @memberof modifiers
   * @inner
   */
  computeStyle: {
    /** @prop {number} order=850 - Index used to define the order of execution */
    order: 850,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: computeStyle,
    /**
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: true,
    /**
     * @prop {string} [x='bottom']
     * Where to anchor the X axis (`bottom` or `top`). AKA X offset origin.
     * Change this if your popper should grow in a direction different from `bottom`
     */
    x: 'bottom',
    /**
     * @prop {string} [x='left']
     * Where to anchor the Y axis (`left` or `right`). AKA Y offset origin.
     * Change this if your popper should grow in a direction different from `right`
     */
    y: 'right'
  },

  /**
   * Applies the computed styles to the popper element.
   *
   * All the DOM manipulations are limited to this modifier. This is useful in case
   * you want to integrate Popper.js inside a framework or view library and you
   * want to delegate all the DOM manipulations to it.
   *
   * Note that if you disable this modifier, you must make sure the popper element
   * has its position set to `absolute` before Popper.js can do its work!
   *
   * Just disable this modifier and define you own to achieve the desired effect.
   *
   * @memberof modifiers
   * @inner
   */
  applyStyle: {
    /** @prop {number} order=900 - Index used to define the order of execution */
    order: 900,
    /** @prop {Boolean} enabled=true - Whether the modifier is enabled or not */
    enabled: true,
    /** @prop {ModifierFn} */
    fn: applyStyle,
    /** @prop {Function} */
    onLoad: applyStyleOnLoad,
    /**
     * @deprecated since version 1.10.0, the property moved to `computeStyle` modifier
     * @prop {Boolean} gpuAcceleration=true
     * If true, it uses the CSS 3d transformation to position the popper.
     * Otherwise, it will use the `top` and `left` properties.
     */
    gpuAcceleration: undefined
  }
};

/**
 * The `dataObject` is an object containing all the informations used by Popper.js
 * this object get passed to modifiers and to the `onCreate` and `onUpdate` callbacks.
 * @name dataObject
 * @property {Object} data.instance The Popper.js instance
 * @property {String} data.placement Placement applied to popper
 * @property {String} data.originalPlacement Placement originally defined on init
 * @property {Boolean} data.flipped True if popper has been flipped by flip modifier
 * @property {Boolean} data.hide True if the reference element is out of boundaries, useful to know when to hide the popper.
 * @property {HTMLElement} data.arrowElement Node used as arrow by arrow modifier
 * @property {Object} data.styles Any CSS property defined here will be applied to the popper, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.arrowStyles Any CSS property defined here will be applied to the popper arrow, it expects the JavaScript nomenclature (eg. `marginBottom`)
 * @property {Object} data.boundaries Offsets of the popper boundaries
 * @property {Object} data.offsets The measurements of popper, reference and arrow elements.
 * @property {Object} data.offsets.popper `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.reference `top`, `left`, `width`, `height` values
 * @property {Object} data.offsets.arrow] `top` and `left` offsets, only one of them will be different from 0
 */

/**
 * Default options provided to Popper.js constructor.<br />
 * These can be overriden using the `options` argument of Popper.js.<br />
 * To override an option, simply pass as 3rd argument an object with the same
 * structure of this object, example:
 * ```
 * new Popper(ref, pop, {
 *   modifiers: {
 *     preventOverflow: { enabled: false }
 *   }
 * })
 * ```
 * @type {Object}
 * @static
 * @memberof Popper
 */
var Defaults = {
  /**
   * Popper's placement
   * @prop {Popper.placements} placement='bottom'
   */
  placement: 'bottom',

  /**
   * Whether events (resize, scroll) are initially enabled
   * @prop {Boolean} eventsEnabled=true
   */
  eventsEnabled: true,

  /**
   * Set to true if you want to automatically remove the popper when
   * you call the `destroy` method.
   * @prop {Boolean} removeOnDestroy=false
   */
  removeOnDestroy: false,

  /**
   * Callback called when the popper is created.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onCreate}
   */
  onCreate: function onCreate() {},

  /**
   * Callback called when the popper is updated, this callback is not called
   * on the initialization/creation of the popper, but only on subsequent
   * updates.<br />
   * By default, is set to no-op.<br />
   * Access Popper.js instance with `data.instance`.
   * @prop {onUpdate}
   */
  onUpdate: function onUpdate() {},

  /**
   * List of modifiers used to modify the offsets before they are applied to the popper.
   * They provide most of the functionalities of Popper.js
   * @prop {modifiers}
   */
  modifiers: modifiers
};

/**
 * @callback onCreate
 * @param {dataObject} data
 */

/**
 * @callback onUpdate
 * @param {dataObject} data
 */

// Utils
// Methods
var Popper = function () {
  /**
   * Create a new Popper.js instance
   * @class Popper
   * @param {HTMLElement|referenceObject} reference - The reference element used to position the popper
   * @param {HTMLElement} popper - The HTML element used as popper.
   * @param {Object} options - Your custom options to override the ones defined in [Defaults](#defaults)
   * @return {Object} instance - The generated Popper.js instance
   */
  function Popper(reference, popper) {
    var _this = this;

    var options = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : {};
    classCallCheck(this, Popper);

    this.scheduleUpdate = function () {
      return requestAnimationFrame(_this.update);
    };

    // make update() debounced, so that it only runs at most once-per-tick
    this.update = debounce(this.update.bind(this));

    // with {} we create a new object with the options inside it
    this.options = _extends({}, Popper.Defaults, options);

    // init state
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };

    // get reference and popper elements (allow jQuery wrappers)
    this.reference = reference.jquery ? reference[0] : reference;
    this.popper = popper.jquery ? popper[0] : popper;

    // Deep merge modifiers options
    this.options.modifiers = {};
    Object.keys(_extends({}, Popper.Defaults.modifiers, options.modifiers)).forEach(function (name) {
      _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options.modifiers ? options.modifiers[name] : {});
    });

    // Refactoring modifiers' list (Object => Array)
    this.modifiers = Object.keys(this.options.modifiers).map(function (name) {
      return _extends({
        name: name
      }, _this.options.modifiers[name]);
    })
    // sort the modifiers by order
    .sort(function (a, b) {
      return a.order - b.order;
    });

    // modifiers have the ability to execute arbitrary code when Popper.js get inited
    // such code is executed in the same order of its modifier
    // they could add new properties to their options configuration
    // BE AWARE: don't add options to `options.modifiers.name` but to `modifierOptions`!
    this.modifiers.forEach(function (modifierOptions) {
      if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
        modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
      }
    });

    // fire the first update to position the popper in the right place
    this.update();

    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      // setup event listeners, they will take care of update the position in specific situations
      this.enableEventListeners();
    }

    this.state.eventsEnabled = eventsEnabled;
  }

  // We can't use class properties because they don't get listed in the
  // class prototype and break stuff like Sinon stubs


  createClass(Popper, [{
    key: 'update',
    value: function update$$1() {
      return update.call(this);
    }
  }, {
    key: 'destroy',
    value: function destroy$$1() {
      return destroy.call(this);
    }
  }, {
    key: 'enableEventListeners',
    value: function enableEventListeners$$1() {
      return enableEventListeners.call(this);
    }
  }, {
    key: 'disableEventListeners',
    value: function disableEventListeners$$1() {
      return disableEventListeners.call(this);
    }

    /**
     * Schedule an update, it will run on the next UI update available
     * @method scheduleUpdate
     * @memberof Popper
     */


    /**
     * Collection of utilities useful when writing custom modifiers.
     * Starting from version 1.7, this method is available only if you
     * include `popper-utils.js` before `popper.js`.
     *
     * **DEPRECATION**: This way to access PopperUtils is deprecated
     * and will be removed in v2! Use the PopperUtils module directly instead.
     * Due to the high instability of the methods contained in Utils, we can't
     * guarantee them to follow semver. Use them at your own risk!
     * @static
     * @private
     * @type {Object}
     * @deprecated since version 1.8
     * @member Utils
     * @memberof Popper
     */

  }]);
  return Popper;
}();

/**
 * The `referenceObject` is an object that provides an interface compatible with Popper.js
 * and lets you use it as replacement of a real DOM node.<br />
 * You can use this method to position a popper relatively to a set of coordinates
 * in case you don't have a DOM node to use as reference.
 *
 * ```
 * new Popper(referenceObject, popperNode);
 * ```
 *
 * NB: This feature isn't supported in Internet Explorer 10
 * @name referenceObject
 * @property {Function} data.getBoundingClientRect
 * A function that returns a set of coordinates compatible with the native `getBoundingClientRect` method.
 * @property {number} data.clientWidth
 * An ES6 getter that will return the width of the virtual reference element.
 * @property {number} data.clientHeight
 * An ES6 getter that will return the height of the virtual reference element.
 */


Popper.Utils = (typeof window !== 'undefined' ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;

return Popper;

})));
//# sourceMappingURL=popper.js.map

;/*!
  * Bootstrap v4.3.1 (https://getbootstrap.com/)
  * Copyright 2011-2019 The Bootstrap Authors (https://github.com/twbs/bootstrap/graphs/contributors)
  * Licensed under MIT (https://github.com/twbs/bootstrap/blob/master/LICENSE)
  */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?e(exports,require("jquery"),require("popper.js")):"function"==typeof define&&define.amd?define(["exports","jquery","popper.js"],e):e((t=t||self).bootstrap={},t.jQuery,t.Popper)}(this,function(t,g,u){"use strict";function i(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,i.key,i)}}function s(t,e,n){return e&&i(t.prototype,e),n&&i(t,n),t}function l(o){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},e=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(e=e.concat(Object.getOwnPropertySymbols(r).filter(function(t){return Object.getOwnPropertyDescriptor(r,t).enumerable}))),e.forEach(function(t){var e,n,i;e=o,i=r[n=t],n in e?Object.defineProperty(e,n,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[n]=i})}return o}g=g&&g.hasOwnProperty("default")?g.default:g,u=u&&u.hasOwnProperty("default")?u.default:u;var e="transitionend";function n(t){var e=this,n=!1;return g(this).one(_.TRANSITION_END,function(){n=!0}),setTimeout(function(){n||_.triggerTransitionEnd(e)},t),this}var _={TRANSITION_END:"bsTransitionEnd",getUID:function(t){for(;t+=~~(1e6*Math.random()),document.getElementById(t););return t},getSelectorFromElement:function(t){var e=t.getAttribute("data-target");if(!e||"#"===e){var n=t.getAttribute("href");e=n&&"#"!==n?n.trim():""}try{return document.querySelector(e)?e:null}catch(t){return null}},getTransitionDurationFromElement:function(t){if(!t)return 0;var e=g(t).css("transition-duration"),n=g(t).css("transition-delay"),i=parseFloat(e),o=parseFloat(n);return i||o?(e=e.split(",")[0],n=n.split(",")[0],1e3*(parseFloat(e)+parseFloat(n))):0},reflow:function(t){return t.offsetHeight},triggerTransitionEnd:function(t){g(t).trigger(e)},supportsTransitionEnd:function(){return Boolean(e)},isElement:function(t){return(t[0]||t).nodeType},typeCheckConfig:function(t,e,n){for(var i in n)if(Object.prototype.hasOwnProperty.call(n,i)){var o=n[i],r=e[i],s=r&&_.isElement(r)?"element":(a=r,{}.toString.call(a).match(/\s([a-z]+)/i)[1].toLowerCase());if(!new RegExp(o).test(s))throw new Error(t.toUpperCase()+': Option "'+i+'" provided type "'+s+'" but expected type "'+o+'".')}var a},findShadowRoot:function(t){if(!document.documentElement.attachShadow)return null;if("function"!=typeof t.getRootNode)return t instanceof ShadowRoot?t:t.parentNode?_.findShadowRoot(t.parentNode):null;var e=t.getRootNode();return e instanceof ShadowRoot?e:null}};g.fn.emulateTransitionEnd=n,g.event.special[_.TRANSITION_END]={bindType:e,delegateType:e,handle:function(t){if(g(t.target).is(this))return t.handleObj.handler.apply(this,arguments)}};var o="alert",r="bs.alert",a="."+r,c=g.fn[o],h={CLOSE:"close"+a,CLOSED:"closed"+a,CLICK_DATA_API:"click"+a+".data-api"},f="alert",d="fade",m="show",p=function(){function i(t){this._element=t}var t=i.prototype;return t.close=function(t){var e=this._element;t&&(e=this._getRootElement(t)),this._triggerCloseEvent(e).isDefaultPrevented()||this._removeElement(e)},t.dispose=function(){g.removeData(this._element,r),this._element=null},t._getRootElement=function(t){var e=_.getSelectorFromElement(t),n=!1;return e&&(n=document.querySelector(e)),n||(n=g(t).closest("."+f)[0]),n},t._triggerCloseEvent=function(t){var e=g.Event(h.CLOSE);return g(t).trigger(e),e},t._removeElement=function(e){var n=this;if(g(e).removeClass(m),g(e).hasClass(d)){var t=_.getTransitionDurationFromElement(e);g(e).one(_.TRANSITION_END,function(t){return n._destroyElement(e,t)}).emulateTransitionEnd(t)}else this._destroyElement(e)},t._destroyElement=function(t){g(t).detach().trigger(h.CLOSED).remove()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(r);e||(e=new i(this),t.data(r,e)),"close"===n&&e[n](this)})},i._handleDismiss=function(e){return function(t){t&&t.preventDefault(),e.close(this)}},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(h.CLICK_DATA_API,'[data-dismiss="alert"]',p._handleDismiss(new p)),g.fn[o]=p._jQueryInterface,g.fn[o].Constructor=p,g.fn[o].noConflict=function(){return g.fn[o]=c,p._jQueryInterface};var v="button",y="bs.button",E="."+y,C=".data-api",T=g.fn[v],S="active",b="btn",I="focus",D='[data-toggle^="button"]',w='[data-toggle="buttons"]',A='input:not([type="hidden"])',N=".active",O=".btn",k={CLICK_DATA_API:"click"+E+C,FOCUS_BLUR_DATA_API:"focus"+E+C+" blur"+E+C},P=function(){function n(t){this._element=t}var t=n.prototype;return t.toggle=function(){var t=!0,e=!0,n=g(this._element).closest(w)[0];if(n){var i=this._element.querySelector(A);if(i){if("radio"===i.type)if(i.checked&&this._element.classList.contains(S))t=!1;else{var o=n.querySelector(N);o&&g(o).removeClass(S)}if(t){if(i.hasAttribute("disabled")||n.hasAttribute("disabled")||i.classList.contains("disabled")||n.classList.contains("disabled"))return;i.checked=!this._element.classList.contains(S),g(i).trigger("change")}i.focus(),e=!1}}e&&this._element.setAttribute("aria-pressed",!this._element.classList.contains(S)),t&&g(this._element).toggleClass(S)},t.dispose=function(){g.removeData(this._element,y),this._element=null},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(y);t||(t=new n(this),g(this).data(y,t)),"toggle"===e&&t[e]()})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),n}();g(document).on(k.CLICK_DATA_API,D,function(t){t.preventDefault();var e=t.target;g(e).hasClass(b)||(e=g(e).closest(O)),P._jQueryInterface.call(g(e),"toggle")}).on(k.FOCUS_BLUR_DATA_API,D,function(t){var e=g(t.target).closest(O)[0];g(e).toggleClass(I,/^focus(in)?$/.test(t.type))}),g.fn[v]=P._jQueryInterface,g.fn[v].Constructor=P,g.fn[v].noConflict=function(){return g.fn[v]=T,P._jQueryInterface};var L="carousel",j="bs.carousel",H="."+j,R=".data-api",x=g.fn[L],F={interval:5e3,keyboard:!0,slide:!1,pause:"hover",wrap:!0,touch:!0},U={interval:"(number|boolean)",keyboard:"boolean",slide:"(boolean|string)",pause:"(string|boolean)",wrap:"boolean",touch:"boolean"},W="next",q="prev",M="left",K="right",Q={SLIDE:"slide"+H,SLID:"slid"+H,KEYDOWN:"keydown"+H,MOUSEENTER:"mouseenter"+H,MOUSELEAVE:"mouseleave"+H,TOUCHSTART:"touchstart"+H,TOUCHMOVE:"touchmove"+H,TOUCHEND:"touchend"+H,POINTERDOWN:"pointerdown"+H,POINTERUP:"pointerup"+H,DRAG_START:"dragstart"+H,LOAD_DATA_API:"load"+H+R,CLICK_DATA_API:"click"+H+R},B="carousel",V="active",Y="slide",z="carousel-item-right",X="carousel-item-left",$="carousel-item-next",G="carousel-item-prev",J="pointer-event",Z=".active",tt=".active.carousel-item",et=".carousel-item",nt=".carousel-item img",it=".carousel-item-next, .carousel-item-prev",ot=".carousel-indicators",rt="[data-slide], [data-slide-to]",st='[data-ride="carousel"]',at={TOUCH:"touch",PEN:"pen"},lt=function(){function r(t,e){this._items=null,this._interval=null,this._activeElement=null,this._isPaused=!1,this._isSliding=!1,this.touchTimeout=null,this.touchStartX=0,this.touchDeltaX=0,this._config=this._getConfig(e),this._element=t,this._indicatorsElement=this._element.querySelector(ot),this._touchSupported="ontouchstart"in document.documentElement||0<navigator.maxTouchPoints,this._pointerEvent=Boolean(window.PointerEvent||window.MSPointerEvent),this._addEventListeners()}var t=r.prototype;return t.next=function(){this._isSliding||this._slide(W)},t.nextWhenVisible=function(){!document.hidden&&g(this._element).is(":visible")&&"hidden"!==g(this._element).css("visibility")&&this.next()},t.prev=function(){this._isSliding||this._slide(q)},t.pause=function(t){t||(this._isPaused=!0),this._element.querySelector(it)&&(_.triggerTransitionEnd(this._element),this.cycle(!0)),clearInterval(this._interval),this._interval=null},t.cycle=function(t){t||(this._isPaused=!1),this._interval&&(clearInterval(this._interval),this._interval=null),this._config.interval&&!this._isPaused&&(this._interval=setInterval((document.visibilityState?this.nextWhenVisible:this.next).bind(this),this._config.interval))},t.to=function(t){var e=this;this._activeElement=this._element.querySelector(tt);var n=this._getItemIndex(this._activeElement);if(!(t>this._items.length-1||t<0))if(this._isSliding)g(this._element).one(Q.SLID,function(){return e.to(t)});else{if(n===t)return this.pause(),void this.cycle();var i=n<t?W:q;this._slide(i,this._items[t])}},t.dispose=function(){g(this._element).off(H),g.removeData(this._element,j),this._items=null,this._config=null,this._element=null,this._interval=null,this._isPaused=null,this._isSliding=null,this._activeElement=null,this._indicatorsElement=null},t._getConfig=function(t){return t=l({},F,t),_.typeCheckConfig(L,t,U),t},t._handleSwipe=function(){var t=Math.abs(this.touchDeltaX);if(!(t<=40)){var e=t/this.touchDeltaX;0<e&&this.prev(),e<0&&this.next()}},t._addEventListeners=function(){var e=this;this._config.keyboard&&g(this._element).on(Q.KEYDOWN,function(t){return e._keydown(t)}),"hover"===this._config.pause&&g(this._element).on(Q.MOUSEENTER,function(t){return e.pause(t)}).on(Q.MOUSELEAVE,function(t){return e.cycle(t)}),this._config.touch&&this._addTouchEventListeners()},t._addTouchEventListeners=function(){var n=this;if(this._touchSupported){var e=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]?n.touchStartX=t.originalEvent.clientX:n._pointerEvent||(n.touchStartX=t.originalEvent.touches[0].clientX)},i=function(t){n._pointerEvent&&at[t.originalEvent.pointerType.toUpperCase()]&&(n.touchDeltaX=t.originalEvent.clientX-n.touchStartX),n._handleSwipe(),"hover"===n._config.pause&&(n.pause(),n.touchTimeout&&clearTimeout(n.touchTimeout),n.touchTimeout=setTimeout(function(t){return n.cycle(t)},500+n._config.interval))};g(this._element.querySelectorAll(nt)).on(Q.DRAG_START,function(t){return t.preventDefault()}),this._pointerEvent?(g(this._element).on(Q.POINTERDOWN,function(t){return e(t)}),g(this._element).on(Q.POINTERUP,function(t){return i(t)}),this._element.classList.add(J)):(g(this._element).on(Q.TOUCHSTART,function(t){return e(t)}),g(this._element).on(Q.TOUCHMOVE,function(t){var e;(e=t).originalEvent.touches&&1<e.originalEvent.touches.length?n.touchDeltaX=0:n.touchDeltaX=e.originalEvent.touches[0].clientX-n.touchStartX}),g(this._element).on(Q.TOUCHEND,function(t){return i(t)}))}},t._keydown=function(t){if(!/input|textarea/i.test(t.target.tagName))switch(t.which){case 37:t.preventDefault(),this.prev();break;case 39:t.preventDefault(),this.next()}},t._getItemIndex=function(t){return this._items=t&&t.parentNode?[].slice.call(t.parentNode.querySelectorAll(et)):[],this._items.indexOf(t)},t._getItemByDirection=function(t,e){var n=t===W,i=t===q,o=this._getItemIndex(e),r=this._items.length-1;if((i&&0===o||n&&o===r)&&!this._config.wrap)return e;var s=(o+(t===q?-1:1))%this._items.length;return-1===s?this._items[this._items.length-1]:this._items[s]},t._triggerSlideEvent=function(t,e){var n=this._getItemIndex(t),i=this._getItemIndex(this._element.querySelector(tt)),o=g.Event(Q.SLIDE,{relatedTarget:t,direction:e,from:i,to:n});return g(this._element).trigger(o),o},t._setActiveIndicatorElement=function(t){if(this._indicatorsElement){var e=[].slice.call(this._indicatorsElement.querySelectorAll(Z));g(e).removeClass(V);var n=this._indicatorsElement.children[this._getItemIndex(t)];n&&g(n).addClass(V)}},t._slide=function(t,e){var n,i,o,r=this,s=this._element.querySelector(tt),a=this._getItemIndex(s),l=e||s&&this._getItemByDirection(t,s),c=this._getItemIndex(l),h=Boolean(this._interval);if(o=t===W?(n=X,i=$,M):(n=z,i=G,K),l&&g(l).hasClass(V))this._isSliding=!1;else if(!this._triggerSlideEvent(l,o).isDefaultPrevented()&&s&&l){this._isSliding=!0,h&&this.pause(),this._setActiveIndicatorElement(l);var u=g.Event(Q.SLID,{relatedTarget:l,direction:o,from:a,to:c});if(g(this._element).hasClass(Y)){g(l).addClass(i),_.reflow(l),g(s).addClass(n),g(l).addClass(n);var f=parseInt(l.getAttribute("data-interval"),10);this._config.interval=f?(this._config.defaultInterval=this._config.defaultInterval||this._config.interval,f):this._config.defaultInterval||this._config.interval;var d=_.getTransitionDurationFromElement(s);g(s).one(_.TRANSITION_END,function(){g(l).removeClass(n+" "+i).addClass(V),g(s).removeClass(V+" "+i+" "+n),r._isSliding=!1,setTimeout(function(){return g(r._element).trigger(u)},0)}).emulateTransitionEnd(d)}else g(s).removeClass(V),g(l).addClass(V),this._isSliding=!1,g(this._element).trigger(u);h&&this.cycle()}},r._jQueryInterface=function(i){return this.each(function(){var t=g(this).data(j),e=l({},F,g(this).data());"object"==typeof i&&(e=l({},e,i));var n="string"==typeof i?i:e.slide;if(t||(t=new r(this,e),g(this).data(j,t)),"number"==typeof i)t.to(i);else if("string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}else e.interval&&e.ride&&(t.pause(),t.cycle())})},r._dataApiClickHandler=function(t){var e=_.getSelectorFromElement(this);if(e){var n=g(e)[0];if(n&&g(n).hasClass(B)){var i=l({},g(n).data(),g(this).data()),o=this.getAttribute("data-slide-to");o&&(i.interval=!1),r._jQueryInterface.call(g(n),i),o&&g(n).data(j).to(o),t.preventDefault()}}},s(r,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return F}}]),r}();g(document).on(Q.CLICK_DATA_API,rt,lt._dataApiClickHandler),g(window).on(Q.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(st)),e=0,n=t.length;e<n;e++){var i=g(t[e]);lt._jQueryInterface.call(i,i.data())}}),g.fn[L]=lt._jQueryInterface,g.fn[L].Constructor=lt,g.fn[L].noConflict=function(){return g.fn[L]=x,lt._jQueryInterface};var ct="collapse",ht="bs.collapse",ut="."+ht,ft=g.fn[ct],dt={toggle:!0,parent:""},gt={toggle:"boolean",parent:"(string|element)"},_t={SHOW:"show"+ut,SHOWN:"shown"+ut,HIDE:"hide"+ut,HIDDEN:"hidden"+ut,CLICK_DATA_API:"click"+ut+".data-api"},mt="show",pt="collapse",vt="collapsing",yt="collapsed",Et="width",Ct="height",Tt=".show, .collapsing",St='[data-toggle="collapse"]',bt=function(){function a(e,t){this._isTransitioning=!1,this._element=e,this._config=this._getConfig(t),this._triggerArray=[].slice.call(document.querySelectorAll('[data-toggle="collapse"][href="#'+e.id+'"],[data-toggle="collapse"][data-target="#'+e.id+'"]'));for(var n=[].slice.call(document.querySelectorAll(St)),i=0,o=n.length;i<o;i++){var r=n[i],s=_.getSelectorFromElement(r),a=[].slice.call(document.querySelectorAll(s)).filter(function(t){return t===e});null!==s&&0<a.length&&(this._selector=s,this._triggerArray.push(r))}this._parent=this._config.parent?this._getParent():null,this._config.parent||this._addAriaAndCollapsedClass(this._element,this._triggerArray),this._config.toggle&&this.toggle()}var t=a.prototype;return t.toggle=function(){g(this._element).hasClass(mt)?this.hide():this.show()},t.show=function(){var t,e,n=this;if(!this._isTransitioning&&!g(this._element).hasClass(mt)&&(this._parent&&0===(t=[].slice.call(this._parent.querySelectorAll(Tt)).filter(function(t){return"string"==typeof n._config.parent?t.getAttribute("data-parent")===n._config.parent:t.classList.contains(pt)})).length&&(t=null),!(t&&(e=g(t).not(this._selector).data(ht))&&e._isTransitioning))){var i=g.Event(_t.SHOW);if(g(this._element).trigger(i),!i.isDefaultPrevented()){t&&(a._jQueryInterface.call(g(t).not(this._selector),"hide"),e||g(t).data(ht,null));var o=this._getDimension();g(this._element).removeClass(pt).addClass(vt),this._element.style[o]=0,this._triggerArray.length&&g(this._triggerArray).removeClass(yt).attr("aria-expanded",!0),this.setTransitioning(!0);var r="scroll"+(o[0].toUpperCase()+o.slice(1)),s=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){g(n._element).removeClass(vt).addClass(pt).addClass(mt),n._element.style[o]="",n.setTransitioning(!1),g(n._element).trigger(_t.SHOWN)}).emulateTransitionEnd(s),this._element.style[o]=this._element[r]+"px"}}},t.hide=function(){var t=this;if(!this._isTransitioning&&g(this._element).hasClass(mt)){var e=g.Event(_t.HIDE);if(g(this._element).trigger(e),!e.isDefaultPrevented()){var n=this._getDimension();this._element.style[n]=this._element.getBoundingClientRect()[n]+"px",_.reflow(this._element),g(this._element).addClass(vt).removeClass(pt).removeClass(mt);var i=this._triggerArray.length;if(0<i)for(var o=0;o<i;o++){var r=this._triggerArray[o],s=_.getSelectorFromElement(r);if(null!==s)g([].slice.call(document.querySelectorAll(s))).hasClass(mt)||g(r).addClass(yt).attr("aria-expanded",!1)}this.setTransitioning(!0);this._element.style[n]="";var a=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(){t.setTransitioning(!1),g(t._element).removeClass(vt).addClass(pt).trigger(_t.HIDDEN)}).emulateTransitionEnd(a)}}},t.setTransitioning=function(t){this._isTransitioning=t},t.dispose=function(){g.removeData(this._element,ht),this._config=null,this._parent=null,this._element=null,this._triggerArray=null,this._isTransitioning=null},t._getConfig=function(t){return(t=l({},dt,t)).toggle=Boolean(t.toggle),_.typeCheckConfig(ct,t,gt),t},t._getDimension=function(){return g(this._element).hasClass(Et)?Et:Ct},t._getParent=function(){var t,n=this;_.isElement(this._config.parent)?(t=this._config.parent,"undefined"!=typeof this._config.parent.jquery&&(t=this._config.parent[0])):t=document.querySelector(this._config.parent);var e='[data-toggle="collapse"][data-parent="'+this._config.parent+'"]',i=[].slice.call(t.querySelectorAll(e));return g(i).each(function(t,e){n._addAriaAndCollapsedClass(a._getTargetFromElement(e),[e])}),t},t._addAriaAndCollapsedClass=function(t,e){var n=g(t).hasClass(mt);e.length&&g(e).toggleClass(yt,!n).attr("aria-expanded",n)},a._getTargetFromElement=function(t){var e=_.getSelectorFromElement(t);return e?document.querySelector(e):null},a._jQueryInterface=function(i){return this.each(function(){var t=g(this),e=t.data(ht),n=l({},dt,t.data(),"object"==typeof i&&i?i:{});if(!e&&n.toggle&&/show|hide/.test(i)&&(n.toggle=!1),e||(e=new a(this,n),t.data(ht,e)),"string"==typeof i){if("undefined"==typeof e[i])throw new TypeError('No method named "'+i+'"');e[i]()}})},s(a,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return dt}}]),a}();g(document).on(_t.CLICK_DATA_API,St,function(t){"A"===t.currentTarget.tagName&&t.preventDefault();var n=g(this),e=_.getSelectorFromElement(this),i=[].slice.call(document.querySelectorAll(e));g(i).each(function(){var t=g(this),e=t.data(ht)?"toggle":n.data();bt._jQueryInterface.call(t,e)})}),g.fn[ct]=bt._jQueryInterface,g.fn[ct].Constructor=bt,g.fn[ct].noConflict=function(){return g.fn[ct]=ft,bt._jQueryInterface};var It="dropdown",Dt="bs.dropdown",wt="."+Dt,At=".data-api",Nt=g.fn[It],Ot=new RegExp("38|40|27"),kt={HIDE:"hide"+wt,HIDDEN:"hidden"+wt,SHOW:"show"+wt,SHOWN:"shown"+wt,CLICK:"click"+wt,CLICK_DATA_API:"click"+wt+At,KEYDOWN_DATA_API:"keydown"+wt+At,KEYUP_DATA_API:"keyup"+wt+At},Pt="disabled",Lt="show",jt="dropup",Ht="dropright",Rt="dropleft",xt="dropdown-menu-right",Ft="position-static",Ut='[data-toggle="dropdown"]',Wt=".dropdown form",qt=".dropdown-menu",Mt=".navbar-nav",Kt=".dropdown-menu .dropdown-item:not(.disabled):not(:disabled)",Qt="top-start",Bt="top-end",Vt="bottom-start",Yt="bottom-end",zt="right-start",Xt="left-start",$t={offset:0,flip:!0,boundary:"scrollParent",reference:"toggle",display:"dynamic"},Gt={offset:"(number|string|function)",flip:"boolean",boundary:"(string|element)",reference:"(string|element)",display:"string"},Jt=function(){function c(t,e){this._element=t,this._popper=null,this._config=this._getConfig(e),this._menu=this._getMenuElement(),this._inNavbar=this._detectNavbar(),this._addEventListeners()}var t=c.prototype;return t.toggle=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)){var t=c._getParentFromElement(this._element),e=g(this._menu).hasClass(Lt);if(c._clearMenus(),!e){var n={relatedTarget:this._element},i=g.Event(kt.SHOW,n);if(g(t).trigger(i),!i.isDefaultPrevented()){if(!this._inNavbar){if("undefined"==typeof u)throw new TypeError("Bootstrap's dropdowns require Popper.js (https://popper.js.org/)");var o=this._element;"parent"===this._config.reference?o=t:_.isElement(this._config.reference)&&(o=this._config.reference,"undefined"!=typeof this._config.reference.jquery&&(o=this._config.reference[0])),"scrollParent"!==this._config.boundary&&g(t).addClass(Ft),this._popper=new u(o,this._menu,this._getPopperConfig())}"ontouchstart"in document.documentElement&&0===g(t).closest(Mt).length&&g(document.body).children().on("mouseover",null,g.noop),this._element.focus(),this._element.setAttribute("aria-expanded",!0),g(this._menu).toggleClass(Lt),g(t).toggleClass(Lt).trigger(g.Event(kt.SHOWN,n))}}}},t.show=function(){if(!(this._element.disabled||g(this._element).hasClass(Pt)||g(this._menu).hasClass(Lt))){var t={relatedTarget:this._element},e=g.Event(kt.SHOW,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.SHOWN,t)))}},t.hide=function(){if(!this._element.disabled&&!g(this._element).hasClass(Pt)&&g(this._menu).hasClass(Lt)){var t={relatedTarget:this._element},e=g.Event(kt.HIDE,t),n=c._getParentFromElement(this._element);g(n).trigger(e),e.isDefaultPrevented()||(g(this._menu).toggleClass(Lt),g(n).toggleClass(Lt).trigger(g.Event(kt.HIDDEN,t)))}},t.dispose=function(){g.removeData(this._element,Dt),g(this._element).off(wt),this._element=null,(this._menu=null)!==this._popper&&(this._popper.destroy(),this._popper=null)},t.update=function(){this._inNavbar=this._detectNavbar(),null!==this._popper&&this._popper.scheduleUpdate()},t._addEventListeners=function(){var e=this;g(this._element).on(kt.CLICK,function(t){t.preventDefault(),t.stopPropagation(),e.toggle()})},t._getConfig=function(t){return t=l({},this.constructor.Default,g(this._element).data(),t),_.typeCheckConfig(It,t,this.constructor.DefaultType),t},t._getMenuElement=function(){if(!this._menu){var t=c._getParentFromElement(this._element);t&&(this._menu=t.querySelector(qt))}return this._menu},t._getPlacement=function(){var t=g(this._element.parentNode),e=Vt;return t.hasClass(jt)?(e=Qt,g(this._menu).hasClass(xt)&&(e=Bt)):t.hasClass(Ht)?e=zt:t.hasClass(Rt)?e=Xt:g(this._menu).hasClass(xt)&&(e=Yt),e},t._detectNavbar=function(){return 0<g(this._element).closest(".navbar").length},t._getOffset=function(){var e=this,t={};return"function"==typeof this._config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e._config.offset(t.offsets,e._element)||{}),t}:t.offset=this._config.offset,t},t._getPopperConfig=function(){var t={placement:this._getPlacement(),modifiers:{offset:this._getOffset(),flip:{enabled:this._config.flip},preventOverflow:{boundariesElement:this._config.boundary}}};return"static"===this._config.display&&(t.modifiers.applyStyle={enabled:!1}),t},c._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(Dt);if(t||(t=new c(this,"object"==typeof e?e:null),g(this).data(Dt,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},c._clearMenus=function(t){if(!t||3!==t.which&&("keyup"!==t.type||9===t.which))for(var e=[].slice.call(document.querySelectorAll(Ut)),n=0,i=e.length;n<i;n++){var o=c._getParentFromElement(e[n]),r=g(e[n]).data(Dt),s={relatedTarget:e[n]};if(t&&"click"===t.type&&(s.clickEvent=t),r){var a=r._menu;if(g(o).hasClass(Lt)&&!(t&&("click"===t.type&&/input|textarea/i.test(t.target.tagName)||"keyup"===t.type&&9===t.which)&&g.contains(o,t.target))){var l=g.Event(kt.HIDE,s);g(o).trigger(l),l.isDefaultPrevented()||("ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),e[n].setAttribute("aria-expanded","false"),g(a).removeClass(Lt),g(o).removeClass(Lt).trigger(g.Event(kt.HIDDEN,s)))}}}},c._getParentFromElement=function(t){var e,n=_.getSelectorFromElement(t);return n&&(e=document.querySelector(n)),e||t.parentNode},c._dataApiKeydownHandler=function(t){if((/input|textarea/i.test(t.target.tagName)?!(32===t.which||27!==t.which&&(40!==t.which&&38!==t.which||g(t.target).closest(qt).length)):Ot.test(t.which))&&(t.preventDefault(),t.stopPropagation(),!this.disabled&&!g(this).hasClass(Pt))){var e=c._getParentFromElement(this),n=g(e).hasClass(Lt);if(n&&(!n||27!==t.which&&32!==t.which)){var i=[].slice.call(e.querySelectorAll(Kt));if(0!==i.length){var o=i.indexOf(t.target);38===t.which&&0<o&&o--,40===t.which&&o<i.length-1&&o++,o<0&&(o=0),i[o].focus()}}else{if(27===t.which){var r=e.querySelector(Ut);g(r).trigger("focus")}g(this).trigger("click")}}},s(c,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return $t}},{key:"DefaultType",get:function(){return Gt}}]),c}();g(document).on(kt.KEYDOWN_DATA_API,Ut,Jt._dataApiKeydownHandler).on(kt.KEYDOWN_DATA_API,qt,Jt._dataApiKeydownHandler).on(kt.CLICK_DATA_API+" "+kt.KEYUP_DATA_API,Jt._clearMenus).on(kt.CLICK_DATA_API,Ut,function(t){t.preventDefault(),t.stopPropagation(),Jt._jQueryInterface.call(g(this),"toggle")}).on(kt.CLICK_DATA_API,Wt,function(t){t.stopPropagation()}),g.fn[It]=Jt._jQueryInterface,g.fn[It].Constructor=Jt,g.fn[It].noConflict=function(){return g.fn[It]=Nt,Jt._jQueryInterface};var Zt="modal",te="bs.modal",ee="."+te,ne=g.fn[Zt],ie={backdrop:!0,keyboard:!0,focus:!0,show:!0},oe={backdrop:"(boolean|string)",keyboard:"boolean",focus:"boolean",show:"boolean"},re={HIDE:"hide"+ee,HIDDEN:"hidden"+ee,SHOW:"show"+ee,SHOWN:"shown"+ee,FOCUSIN:"focusin"+ee,RESIZE:"resize"+ee,CLICK_DISMISS:"click.dismiss"+ee,KEYDOWN_DISMISS:"keydown.dismiss"+ee,MOUSEUP_DISMISS:"mouseup.dismiss"+ee,MOUSEDOWN_DISMISS:"mousedown.dismiss"+ee,CLICK_DATA_API:"click"+ee+".data-api"},se="modal-dialog-scrollable",ae="modal-scrollbar-measure",le="modal-backdrop",ce="modal-open",he="fade",ue="show",fe=".modal-dialog",de=".modal-body",ge='[data-toggle="modal"]',_e='[data-dismiss="modal"]',me=".fixed-top, .fixed-bottom, .is-fixed, .sticky-top",pe=".sticky-top",ve=function(){function o(t,e){this._config=this._getConfig(e),this._element=t,this._dialog=t.querySelector(fe),this._backdrop=null,this._isShown=!1,this._isBodyOverflowing=!1,this._ignoreBackdropClick=!1,this._isTransitioning=!1,this._scrollbarWidth=0}var t=o.prototype;return t.toggle=function(t){return this._isShown?this.hide():this.show(t)},t.show=function(t){var e=this;if(!this._isShown&&!this._isTransitioning){g(this._element).hasClass(he)&&(this._isTransitioning=!0);var n=g.Event(re.SHOW,{relatedTarget:t});g(this._element).trigger(n),this._isShown||n.isDefaultPrevented()||(this._isShown=!0,this._checkScrollbar(),this._setScrollbar(),this._adjustDialog(),this._setEscapeEvent(),this._setResizeEvent(),g(this._element).on(re.CLICK_DISMISS,_e,function(t){return e.hide(t)}),g(this._dialog).on(re.MOUSEDOWN_DISMISS,function(){g(e._element).one(re.MOUSEUP_DISMISS,function(t){g(t.target).is(e._element)&&(e._ignoreBackdropClick=!0)})}),this._showBackdrop(function(){return e._showElement(t)}))}},t.hide=function(t){var e=this;if(t&&t.preventDefault(),this._isShown&&!this._isTransitioning){var n=g.Event(re.HIDE);if(g(this._element).trigger(n),this._isShown&&!n.isDefaultPrevented()){this._isShown=!1;var i=g(this._element).hasClass(he);if(i&&(this._isTransitioning=!0),this._setEscapeEvent(),this._setResizeEvent(),g(document).off(re.FOCUSIN),g(this._element).removeClass(ue),g(this._element).off(re.CLICK_DISMISS),g(this._dialog).off(re.MOUSEDOWN_DISMISS),i){var o=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,function(t){return e._hideModal(t)}).emulateTransitionEnd(o)}else this._hideModal()}}},t.dispose=function(){[window,this._element,this._dialog].forEach(function(t){return g(t).off(ee)}),g(document).off(re.FOCUSIN),g.removeData(this._element,te),this._config=null,this._element=null,this._dialog=null,this._backdrop=null,this._isShown=null,this._isBodyOverflowing=null,this._ignoreBackdropClick=null,this._isTransitioning=null,this._scrollbarWidth=null},t.handleUpdate=function(){this._adjustDialog()},t._getConfig=function(t){return t=l({},ie,t),_.typeCheckConfig(Zt,t,oe),t},t._showElement=function(t){var e=this,n=g(this._element).hasClass(he);this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE||document.body.appendChild(this._element),this._element.style.display="block",this._element.removeAttribute("aria-hidden"),this._element.setAttribute("aria-modal",!0),g(this._dialog).hasClass(se)?this._dialog.querySelector(de).scrollTop=0:this._element.scrollTop=0,n&&_.reflow(this._element),g(this._element).addClass(ue),this._config.focus&&this._enforceFocus();var i=g.Event(re.SHOWN,{relatedTarget:t}),o=function(){e._config.focus&&e._element.focus(),e._isTransitioning=!1,g(e._element).trigger(i)};if(n){var r=_.getTransitionDurationFromElement(this._dialog);g(this._dialog).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()},t._enforceFocus=function(){var e=this;g(document).off(re.FOCUSIN).on(re.FOCUSIN,function(t){document!==t.target&&e._element!==t.target&&0===g(e._element).has(t.target).length&&e._element.focus()})},t._setEscapeEvent=function(){var e=this;this._isShown&&this._config.keyboard?g(this._element).on(re.KEYDOWN_DISMISS,function(t){27===t.which&&(t.preventDefault(),e.hide())}):this._isShown||g(this._element).off(re.KEYDOWN_DISMISS)},t._setResizeEvent=function(){var e=this;this._isShown?g(window).on(re.RESIZE,function(t){return e.handleUpdate(t)}):g(window).off(re.RESIZE)},t._hideModal=function(){var t=this;this._element.style.display="none",this._element.setAttribute("aria-hidden",!0),this._element.removeAttribute("aria-modal"),this._isTransitioning=!1,this._showBackdrop(function(){g(document.body).removeClass(ce),t._resetAdjustments(),t._resetScrollbar(),g(t._element).trigger(re.HIDDEN)})},t._removeBackdrop=function(){this._backdrop&&(g(this._backdrop).remove(),this._backdrop=null)},t._showBackdrop=function(t){var e=this,n=g(this._element).hasClass(he)?he:"";if(this._isShown&&this._config.backdrop){if(this._backdrop=document.createElement("div"),this._backdrop.className=le,n&&this._backdrop.classList.add(n),g(this._backdrop).appendTo(document.body),g(this._element).on(re.CLICK_DISMISS,function(t){e._ignoreBackdropClick?e._ignoreBackdropClick=!1:t.target===t.currentTarget&&("static"===e._config.backdrop?e._element.focus():e.hide())}),n&&_.reflow(this._backdrop),g(this._backdrop).addClass(ue),!t)return;if(!n)return void t();var i=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,t).emulateTransitionEnd(i)}else if(!this._isShown&&this._backdrop){g(this._backdrop).removeClass(ue);var o=function(){e._removeBackdrop(),t&&t()};if(g(this._element).hasClass(he)){var r=_.getTransitionDurationFromElement(this._backdrop);g(this._backdrop).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o()}else t&&t()},t._adjustDialog=function(){var t=this._element.scrollHeight>document.documentElement.clientHeight;!this._isBodyOverflowing&&t&&(this._element.style.paddingLeft=this._scrollbarWidth+"px"),this._isBodyOverflowing&&!t&&(this._element.style.paddingRight=this._scrollbarWidth+"px")},t._resetAdjustments=function(){this._element.style.paddingLeft="",this._element.style.paddingRight=""},t._checkScrollbar=function(){var t=document.body.getBoundingClientRect();this._isBodyOverflowing=t.left+t.right<window.innerWidth,this._scrollbarWidth=this._getScrollbarWidth()},t._setScrollbar=function(){var o=this;if(this._isBodyOverflowing){var t=[].slice.call(document.querySelectorAll(me)),e=[].slice.call(document.querySelectorAll(pe));g(t).each(function(t,e){var n=e.style.paddingRight,i=g(e).css("padding-right");g(e).data("padding-right",n).css("padding-right",parseFloat(i)+o._scrollbarWidth+"px")}),g(e).each(function(t,e){var n=e.style.marginRight,i=g(e).css("margin-right");g(e).data("margin-right",n).css("margin-right",parseFloat(i)-o._scrollbarWidth+"px")});var n=document.body.style.paddingRight,i=g(document.body).css("padding-right");g(document.body).data("padding-right",n).css("padding-right",parseFloat(i)+this._scrollbarWidth+"px")}g(document.body).addClass(ce)},t._resetScrollbar=function(){var t=[].slice.call(document.querySelectorAll(me));g(t).each(function(t,e){var n=g(e).data("padding-right");g(e).removeData("padding-right"),e.style.paddingRight=n||""});var e=[].slice.call(document.querySelectorAll(""+pe));g(e).each(function(t,e){var n=g(e).data("margin-right");"undefined"!=typeof n&&g(e).css("margin-right",n).removeData("margin-right")});var n=g(document.body).data("padding-right");g(document.body).removeData("padding-right"),document.body.style.paddingRight=n||""},t._getScrollbarWidth=function(){var t=document.createElement("div");t.className=ae,document.body.appendChild(t);var e=t.getBoundingClientRect().width-t.clientWidth;return document.body.removeChild(t),e},o._jQueryInterface=function(n,i){return this.each(function(){var t=g(this).data(te),e=l({},ie,g(this).data(),"object"==typeof n&&n?n:{});if(t||(t=new o(this,e),g(this).data(te,t)),"string"==typeof n){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n](i)}else e.show&&t.show(i)})},s(o,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return ie}}]),o}();g(document).on(re.CLICK_DATA_API,ge,function(t){var e,n=this,i=_.getSelectorFromElement(this);i&&(e=document.querySelector(i));var o=g(e).data(te)?"toggle":l({},g(e).data(),g(this).data());"A"!==this.tagName&&"AREA"!==this.tagName||t.preventDefault();var r=g(e).one(re.SHOW,function(t){t.isDefaultPrevented()||r.one(re.HIDDEN,function(){g(n).is(":visible")&&n.focus()})});ve._jQueryInterface.call(g(e),o,this)}),g.fn[Zt]=ve._jQueryInterface,g.fn[Zt].Constructor=ve,g.fn[Zt].noConflict=function(){return g.fn[Zt]=ne,ve._jQueryInterface};var ye=["background","cite","href","itemtype","longdesc","poster","src","xlink:href"],Ee={"*":["class","dir","id","lang","role",/^aria-[\w-]*$/i],a:["target","href","title","rel"],area:[],b:[],br:[],col:[],code:[],div:[],em:[],hr:[],h1:[],h2:[],h3:[],h4:[],h5:[],h6:[],i:[],img:["src","alt","title","width","height"],li:[],ol:[],p:[],pre:[],s:[],small:[],span:[],sub:[],sup:[],strong:[],u:[],ul:[]},Ce=/^(?:(?:https?|mailto|ftp|tel|file):|[^&:/?#]*(?:[/?#]|$))/gi,Te=/^data:(?:image\/(?:bmp|gif|jpeg|jpg|png|tiff|webp)|video\/(?:mpeg|mp4|ogg|webm)|audio\/(?:mp3|oga|ogg|opus));base64,[a-z0-9+/]+=*$/i;function Se(t,s,e){if(0===t.length)return t;if(e&&"function"==typeof e)return e(t);for(var n=(new window.DOMParser).parseFromString(t,"text/html"),a=Object.keys(s),l=[].slice.call(n.body.querySelectorAll("*")),i=function(t,e){var n=l[t],i=n.nodeName.toLowerCase();if(-1===a.indexOf(n.nodeName.toLowerCase()))return n.parentNode.removeChild(n),"continue";var o=[].slice.call(n.attributes),r=[].concat(s["*"]||[],s[i]||[]);o.forEach(function(t){(function(t,e){var n=t.nodeName.toLowerCase();if(-1!==e.indexOf(n))return-1===ye.indexOf(n)||Boolean(t.nodeValue.match(Ce)||t.nodeValue.match(Te));for(var i=e.filter(function(t){return t instanceof RegExp}),o=0,r=i.length;o<r;o++)if(n.match(i[o]))return!0;return!1})(t,r)||n.removeAttribute(t.nodeName)})},o=0,r=l.length;o<r;o++)i(o);return n.body.innerHTML}var be="tooltip",Ie="bs.tooltip",De="."+Ie,we=g.fn[be],Ae="bs-tooltip",Ne=new RegExp("(^|\\s)"+Ae+"\\S+","g"),Oe=["sanitize","whiteList","sanitizeFn"],ke={animation:"boolean",template:"string",title:"(string|element|function)",trigger:"string",delay:"(number|object)",html:"boolean",selector:"(string|boolean)",placement:"(string|function)",offset:"(number|string|function)",container:"(string|element|boolean)",fallbackPlacement:"(string|array)",boundary:"(string|element)",sanitize:"boolean",sanitizeFn:"(null|function)",whiteList:"object"},Pe={AUTO:"auto",TOP:"top",RIGHT:"right",BOTTOM:"bottom",LEFT:"left"},Le={animation:!0,template:'<div class="tooltip" role="tooltip"><div class="arrow"></div><div class="tooltip-inner"></div></div>',trigger:"hover focus",title:"",delay:0,html:!1,selector:!1,placement:"top",offset:0,container:!1,fallbackPlacement:"flip",boundary:"scrollParent",sanitize:!0,sanitizeFn:null,whiteList:Ee},je="show",He="out",Re={HIDE:"hide"+De,HIDDEN:"hidden"+De,SHOW:"show"+De,SHOWN:"shown"+De,INSERTED:"inserted"+De,CLICK:"click"+De,FOCUSIN:"focusin"+De,FOCUSOUT:"focusout"+De,MOUSEENTER:"mouseenter"+De,MOUSELEAVE:"mouseleave"+De},xe="fade",Fe="show",Ue=".tooltip-inner",We=".arrow",qe="hover",Me="focus",Ke="click",Qe="manual",Be=function(){function i(t,e){if("undefined"==typeof u)throw new TypeError("Bootstrap's tooltips require Popper.js (https://popper.js.org/)");this._isEnabled=!0,this._timeout=0,this._hoverState="",this._activeTrigger={},this._popper=null,this.element=t,this.config=this._getConfig(e),this.tip=null,this._setListeners()}var t=i.prototype;return t.enable=function(){this._isEnabled=!0},t.disable=function(){this._isEnabled=!1},t.toggleEnabled=function(){this._isEnabled=!this._isEnabled},t.toggle=function(t){if(this._isEnabled)if(t){var e=this.constructor.DATA_KEY,n=g(t.currentTarget).data(e);n||(n=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(e,n)),n._activeTrigger.click=!n._activeTrigger.click,n._isWithActiveTrigger()?n._enter(null,n):n._leave(null,n)}else{if(g(this.getTipElement()).hasClass(Fe))return void this._leave(null,this);this._enter(null,this)}},t.dispose=function(){clearTimeout(this._timeout),g.removeData(this.element,this.constructor.DATA_KEY),g(this.element).off(this.constructor.EVENT_KEY),g(this.element).closest(".modal").off("hide.bs.modal"),this.tip&&g(this.tip).remove(),this._isEnabled=null,this._timeout=null,this._hoverState=null,(this._activeTrigger=null)!==this._popper&&this._popper.destroy(),this._popper=null,this.element=null,this.config=null,this.tip=null},t.show=function(){var e=this;if("none"===g(this.element).css("display"))throw new Error("Please use show on visible elements");var t=g.Event(this.constructor.Event.SHOW);if(this.isWithContent()&&this._isEnabled){g(this.element).trigger(t);var n=_.findShadowRoot(this.element),i=g.contains(null!==n?n:this.element.ownerDocument.documentElement,this.element);if(t.isDefaultPrevented()||!i)return;var o=this.getTipElement(),r=_.getUID(this.constructor.NAME);o.setAttribute("id",r),this.element.setAttribute("aria-describedby",r),this.setContent(),this.config.animation&&g(o).addClass(xe);var s="function"==typeof this.config.placement?this.config.placement.call(this,o,this.element):this.config.placement,a=this._getAttachment(s);this.addAttachmentClass(a);var l=this._getContainer();g(o).data(this.constructor.DATA_KEY,this),g.contains(this.element.ownerDocument.documentElement,this.tip)||g(o).appendTo(l),g(this.element).trigger(this.constructor.Event.INSERTED),this._popper=new u(this.element,o,{placement:a,modifiers:{offset:this._getOffset(),flip:{behavior:this.config.fallbackPlacement},arrow:{element:We},preventOverflow:{boundariesElement:this.config.boundary}},onCreate:function(t){t.originalPlacement!==t.placement&&e._handlePopperPlacementChange(t)},onUpdate:function(t){return e._handlePopperPlacementChange(t)}}),g(o).addClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().on("mouseover",null,g.noop);var c=function(){e.config.animation&&e._fixTransition();var t=e._hoverState;e._hoverState=null,g(e.element).trigger(e.constructor.Event.SHOWN),t===He&&e._leave(null,e)};if(g(this.tip).hasClass(xe)){var h=_.getTransitionDurationFromElement(this.tip);g(this.tip).one(_.TRANSITION_END,c).emulateTransitionEnd(h)}else c()}},t.hide=function(t){var e=this,n=this.getTipElement(),i=g.Event(this.constructor.Event.HIDE),o=function(){e._hoverState!==je&&n.parentNode&&n.parentNode.removeChild(n),e._cleanTipClass(),e.element.removeAttribute("aria-describedby"),g(e.element).trigger(e.constructor.Event.HIDDEN),null!==e._popper&&e._popper.destroy(),t&&t()};if(g(this.element).trigger(i),!i.isDefaultPrevented()){if(g(n).removeClass(Fe),"ontouchstart"in document.documentElement&&g(document.body).children().off("mouseover",null,g.noop),this._activeTrigger[Ke]=!1,this._activeTrigger[Me]=!1,this._activeTrigger[qe]=!1,g(this.tip).hasClass(xe)){var r=_.getTransitionDurationFromElement(n);g(n).one(_.TRANSITION_END,o).emulateTransitionEnd(r)}else o();this._hoverState=""}},t.update=function(){null!==this._popper&&this._popper.scheduleUpdate()},t.isWithContent=function(){return Boolean(this.getTitle())},t.addAttachmentClass=function(t){g(this.getTipElement()).addClass(Ae+"-"+t)},t.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},t.setContent=function(){var t=this.getTipElement();this.setElementContent(g(t.querySelectorAll(Ue)),this.getTitle()),g(t).removeClass(xe+" "+Fe)},t.setElementContent=function(t,e){"object"!=typeof e||!e.nodeType&&!e.jquery?this.config.html?(this.config.sanitize&&(e=Se(e,this.config.whiteList,this.config.sanitizeFn)),t.html(e)):t.text(e):this.config.html?g(e).parent().is(t)||t.empty().append(e):t.text(g(e).text())},t.getTitle=function(){var t=this.element.getAttribute("data-original-title");return t||(t="function"==typeof this.config.title?this.config.title.call(this.element):this.config.title),t},t._getOffset=function(){var e=this,t={};return"function"==typeof this.config.offset?t.fn=function(t){return t.offsets=l({},t.offsets,e.config.offset(t.offsets,e.element)||{}),t}:t.offset=this.config.offset,t},t._getContainer=function(){return!1===this.config.container?document.body:_.isElement(this.config.container)?g(this.config.container):g(document).find(this.config.container)},t._getAttachment=function(t){return Pe[t.toUpperCase()]},t._setListeners=function(){var i=this;this.config.trigger.split(" ").forEach(function(t){if("click"===t)g(i.element).on(i.constructor.Event.CLICK,i.config.selector,function(t){return i.toggle(t)});else if(t!==Qe){var e=t===qe?i.constructor.Event.MOUSEENTER:i.constructor.Event.FOCUSIN,n=t===qe?i.constructor.Event.MOUSELEAVE:i.constructor.Event.FOCUSOUT;g(i.element).on(e,i.config.selector,function(t){return i._enter(t)}).on(n,i.config.selector,function(t){return i._leave(t)})}}),g(this.element).closest(".modal").on("hide.bs.modal",function(){i.element&&i.hide()}),this.config.selector?this.config=l({},this.config,{trigger:"manual",selector:""}):this._fixTitle()},t._fixTitle=function(){var t=typeof this.element.getAttribute("data-original-title");(this.element.getAttribute("title")||"string"!==t)&&(this.element.setAttribute("data-original-title",this.element.getAttribute("title")||""),this.element.setAttribute("title",""))},t._enter=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusin"===t.type?Me:qe]=!0),g(e.getTipElement()).hasClass(Fe)||e._hoverState===je?e._hoverState=je:(clearTimeout(e._timeout),e._hoverState=je,e.config.delay&&e.config.delay.show?e._timeout=setTimeout(function(){e._hoverState===je&&e.show()},e.config.delay.show):e.show())},t._leave=function(t,e){var n=this.constructor.DATA_KEY;(e=e||g(t.currentTarget).data(n))||(e=new this.constructor(t.currentTarget,this._getDelegateConfig()),g(t.currentTarget).data(n,e)),t&&(e._activeTrigger["focusout"===t.type?Me:qe]=!1),e._isWithActiveTrigger()||(clearTimeout(e._timeout),e._hoverState=He,e.config.delay&&e.config.delay.hide?e._timeout=setTimeout(function(){e._hoverState===He&&e.hide()},e.config.delay.hide):e.hide())},t._isWithActiveTrigger=function(){for(var t in this._activeTrigger)if(this._activeTrigger[t])return!0;return!1},t._getConfig=function(t){var e=g(this.element).data();return Object.keys(e).forEach(function(t){-1!==Oe.indexOf(t)&&delete e[t]}),"number"==typeof(t=l({},this.constructor.Default,e,"object"==typeof t&&t?t:{})).delay&&(t.delay={show:t.delay,hide:t.delay}),"number"==typeof t.title&&(t.title=t.title.toString()),"number"==typeof t.content&&(t.content=t.content.toString()),_.typeCheckConfig(be,t,this.constructor.DefaultType),t.sanitize&&(t.template=Se(t.template,t.whiteList,t.sanitizeFn)),t},t._getDelegateConfig=function(){var t={};if(this.config)for(var e in this.config)this.constructor.Default[e]!==this.config[e]&&(t[e]=this.config[e]);return t},t._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ne);null!==e&&e.length&&t.removeClass(e.join(""))},t._handlePopperPlacementChange=function(t){var e=t.instance;this.tip=e.popper,this._cleanTipClass(),this.addAttachmentClass(this._getAttachment(t.placement))},t._fixTransition=function(){var t=this.getTipElement(),e=this.config.animation;null===t.getAttribute("x-placement")&&(g(t).removeClass(xe),this.config.animation=!1,this.hide(),this.show(),this.config.animation=e)},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ie),e="object"==typeof n&&n;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ie,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Le}},{key:"NAME",get:function(){return be}},{key:"DATA_KEY",get:function(){return Ie}},{key:"Event",get:function(){return Re}},{key:"EVENT_KEY",get:function(){return De}},{key:"DefaultType",get:function(){return ke}}]),i}();g.fn[be]=Be._jQueryInterface,g.fn[be].Constructor=Be,g.fn[be].noConflict=function(){return g.fn[be]=we,Be._jQueryInterface};var Ve="popover",Ye="bs.popover",ze="."+Ye,Xe=g.fn[Ve],$e="bs-popover",Ge=new RegExp("(^|\\s)"+$e+"\\S+","g"),Je=l({},Be.Default,{placement:"right",trigger:"click",content:"",template:'<div class="popover" role="tooltip"><div class="arrow"></div><h3 class="popover-header"></h3><div class="popover-body"></div></div>'}),Ze=l({},Be.DefaultType,{content:"(string|element|function)"}),tn="fade",en="show",nn=".popover-header",on=".popover-body",rn={HIDE:"hide"+ze,HIDDEN:"hidden"+ze,SHOW:"show"+ze,SHOWN:"shown"+ze,INSERTED:"inserted"+ze,CLICK:"click"+ze,FOCUSIN:"focusin"+ze,FOCUSOUT:"focusout"+ze,MOUSEENTER:"mouseenter"+ze,MOUSELEAVE:"mouseleave"+ze},sn=function(t){var e,n;function i(){return t.apply(this,arguments)||this}n=t,(e=i).prototype=Object.create(n.prototype),(e.prototype.constructor=e).__proto__=n;var o=i.prototype;return o.isWithContent=function(){return this.getTitle()||this._getContent()},o.addAttachmentClass=function(t){g(this.getTipElement()).addClass($e+"-"+t)},o.getTipElement=function(){return this.tip=this.tip||g(this.config.template)[0],this.tip},o.setContent=function(){var t=g(this.getTipElement());this.setElementContent(t.find(nn),this.getTitle());var e=this._getContent();"function"==typeof e&&(e=e.call(this.element)),this.setElementContent(t.find(on),e),t.removeClass(tn+" "+en)},o._getContent=function(){return this.element.getAttribute("data-content")||this.config.content},o._cleanTipClass=function(){var t=g(this.getTipElement()),e=t.attr("class").match(Ge);null!==e&&0<e.length&&t.removeClass(e.join(""))},i._jQueryInterface=function(n){return this.each(function(){var t=g(this).data(Ye),e="object"==typeof n?n:null;if((t||!/dispose|hide/.test(n))&&(t||(t=new i(this,e),g(this).data(Ye,t)),"string"==typeof n)){if("undefined"==typeof t[n])throw new TypeError('No method named "'+n+'"');t[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return Je}},{key:"NAME",get:function(){return Ve}},{key:"DATA_KEY",get:function(){return Ye}},{key:"Event",get:function(){return rn}},{key:"EVENT_KEY",get:function(){return ze}},{key:"DefaultType",get:function(){return Ze}}]),i}(Be);g.fn[Ve]=sn._jQueryInterface,g.fn[Ve].Constructor=sn,g.fn[Ve].noConflict=function(){return g.fn[Ve]=Xe,sn._jQueryInterface};var an="scrollspy",ln="bs.scrollspy",cn="."+ln,hn=g.fn[an],un={offset:10,method:"auto",target:""},fn={offset:"number",method:"string",target:"(string|element)"},dn={ACTIVATE:"activate"+cn,SCROLL:"scroll"+cn,LOAD_DATA_API:"load"+cn+".data-api"},gn="dropdown-item",_n="active",mn='[data-spy="scroll"]',pn=".nav, .list-group",vn=".nav-link",yn=".nav-item",En=".list-group-item",Cn=".dropdown",Tn=".dropdown-item",Sn=".dropdown-toggle",bn="offset",In="position",Dn=function(){function n(t,e){var n=this;this._element=t,this._scrollElement="BODY"===t.tagName?window:t,this._config=this._getConfig(e),this._selector=this._config.target+" "+vn+","+this._config.target+" "+En+","+this._config.target+" "+Tn,this._offsets=[],this._targets=[],this._activeTarget=null,this._scrollHeight=0,g(this._scrollElement).on(dn.SCROLL,function(t){return n._process(t)}),this.refresh(),this._process()}var t=n.prototype;return t.refresh=function(){var e=this,t=this._scrollElement===this._scrollElement.window?bn:In,o="auto"===this._config.method?t:this._config.method,r=o===In?this._getScrollTop():0;this._offsets=[],this._targets=[],this._scrollHeight=this._getScrollHeight(),[].slice.call(document.querySelectorAll(this._selector)).map(function(t){var e,n=_.getSelectorFromElement(t);if(n&&(e=document.querySelector(n)),e){var i=e.getBoundingClientRect();if(i.width||i.height)return[g(e)[o]().top+r,n]}return null}).filter(function(t){return t}).sort(function(t,e){return t[0]-e[0]}).forEach(function(t){e._offsets.push(t[0]),e._targets.push(t[1])})},t.dispose=function(){g.removeData(this._element,ln),g(this._scrollElement).off(cn),this._element=null,this._scrollElement=null,this._config=null,this._selector=null,this._offsets=null,this._targets=null,this._activeTarget=null,this._scrollHeight=null},t._getConfig=function(t){if("string"!=typeof(t=l({},un,"object"==typeof t&&t?t:{})).target){var e=g(t.target).attr("id");e||(e=_.getUID(an),g(t.target).attr("id",e)),t.target="#"+e}return _.typeCheckConfig(an,t,fn),t},t._getScrollTop=function(){return this._scrollElement===window?this._scrollElement.pageYOffset:this._scrollElement.scrollTop},t._getScrollHeight=function(){return this._scrollElement.scrollHeight||Math.max(document.body.scrollHeight,document.documentElement.scrollHeight)},t._getOffsetHeight=function(){return this._scrollElement===window?window.innerHeight:this._scrollElement.getBoundingClientRect().height},t._process=function(){var t=this._getScrollTop()+this._config.offset,e=this._getScrollHeight(),n=this._config.offset+e-this._getOffsetHeight();if(this._scrollHeight!==e&&this.refresh(),n<=t){var i=this._targets[this._targets.length-1];this._activeTarget!==i&&this._activate(i)}else{if(this._activeTarget&&t<this._offsets[0]&&0<this._offsets[0])return this._activeTarget=null,void this._clear();for(var o=this._offsets.length;o--;){this._activeTarget!==this._targets[o]&&t>=this._offsets[o]&&("undefined"==typeof this._offsets[o+1]||t<this._offsets[o+1])&&this._activate(this._targets[o])}}},t._activate=function(e){this._activeTarget=e,this._clear();var t=this._selector.split(",").map(function(t){return t+'[data-target="'+e+'"],'+t+'[href="'+e+'"]'}),n=g([].slice.call(document.querySelectorAll(t.join(","))));n.hasClass(gn)?(n.closest(Cn).find(Sn).addClass(_n),n.addClass(_n)):(n.addClass(_n),n.parents(pn).prev(vn+", "+En).addClass(_n),n.parents(pn).prev(yn).children(vn).addClass(_n)),g(this._scrollElement).trigger(dn.ACTIVATE,{relatedTarget:e})},t._clear=function(){[].slice.call(document.querySelectorAll(this._selector)).filter(function(t){return t.classList.contains(_n)}).forEach(function(t){return t.classList.remove(_n)})},n._jQueryInterface=function(e){return this.each(function(){var t=g(this).data(ln);if(t||(t=new n(this,"object"==typeof e&&e),g(this).data(ln,t)),"string"==typeof e){if("undefined"==typeof t[e])throw new TypeError('No method named "'+e+'"');t[e]()}})},s(n,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"Default",get:function(){return un}}]),n}();g(window).on(dn.LOAD_DATA_API,function(){for(var t=[].slice.call(document.querySelectorAll(mn)),e=t.length;e--;){var n=g(t[e]);Dn._jQueryInterface.call(n,n.data())}}),g.fn[an]=Dn._jQueryInterface,g.fn[an].Constructor=Dn,g.fn[an].noConflict=function(){return g.fn[an]=hn,Dn._jQueryInterface};var wn="bs.tab",An="."+wn,Nn=g.fn.tab,On={HIDE:"hide"+An,HIDDEN:"hidden"+An,SHOW:"show"+An,SHOWN:"shown"+An,CLICK_DATA_API:"click"+An+".data-api"},kn="dropdown-menu",Pn="active",Ln="disabled",jn="fade",Hn="show",Rn=".dropdown",xn=".nav, .list-group",Fn=".active",Un="> li > .active",Wn='[data-toggle="tab"], [data-toggle="pill"], [data-toggle="list"]',qn=".dropdown-toggle",Mn="> .dropdown-menu .active",Kn=function(){function i(t){this._element=t}var t=i.prototype;return t.show=function(){var n=this;if(!(this._element.parentNode&&this._element.parentNode.nodeType===Node.ELEMENT_NODE&&g(this._element).hasClass(Pn)||g(this._element).hasClass(Ln))){var t,i,e=g(this._element).closest(xn)[0],o=_.getSelectorFromElement(this._element);if(e){var r="UL"===e.nodeName||"OL"===e.nodeName?Un:Fn;i=(i=g.makeArray(g(e).find(r)))[i.length-1]}var s=g.Event(On.HIDE,{relatedTarget:this._element}),a=g.Event(On.SHOW,{relatedTarget:i});if(i&&g(i).trigger(s),g(this._element).trigger(a),!a.isDefaultPrevented()&&!s.isDefaultPrevented()){o&&(t=document.querySelector(o)),this._activate(this._element,e);var l=function(){var t=g.Event(On.HIDDEN,{relatedTarget:n._element}),e=g.Event(On.SHOWN,{relatedTarget:i});g(i).trigger(t),g(n._element).trigger(e)};t?this._activate(t,t.parentNode,l):l()}}},t.dispose=function(){g.removeData(this._element,wn),this._element=null},t._activate=function(t,e,n){var i=this,o=(!e||"UL"!==e.nodeName&&"OL"!==e.nodeName?g(e).children(Fn):g(e).find(Un))[0],r=n&&o&&g(o).hasClass(jn),s=function(){return i._transitionComplete(t,o,n)};if(o&&r){var a=_.getTransitionDurationFromElement(o);g(o).removeClass(Hn).one(_.TRANSITION_END,s).emulateTransitionEnd(a)}else s()},t._transitionComplete=function(t,e,n){if(e){g(e).removeClass(Pn);var i=g(e.parentNode).find(Mn)[0];i&&g(i).removeClass(Pn),"tab"===e.getAttribute("role")&&e.setAttribute("aria-selected",!1)}if(g(t).addClass(Pn),"tab"===t.getAttribute("role")&&t.setAttribute("aria-selected",!0),_.reflow(t),t.classList.contains(jn)&&t.classList.add(Hn),t.parentNode&&g(t.parentNode).hasClass(kn)){var o=g(t).closest(Rn)[0];if(o){var r=[].slice.call(o.querySelectorAll(qn));g(r).addClass(Pn)}t.setAttribute("aria-expanded",!0)}n&&n()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(wn);if(e||(e=new i(this),t.data(wn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n]()}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}}]),i}();g(document).on(On.CLICK_DATA_API,Wn,function(t){t.preventDefault(),Kn._jQueryInterface.call(g(this),"show")}),g.fn.tab=Kn._jQueryInterface,g.fn.tab.Constructor=Kn,g.fn.tab.noConflict=function(){return g.fn.tab=Nn,Kn._jQueryInterface};var Qn="toast",Bn="bs.toast",Vn="."+Bn,Yn=g.fn[Qn],zn={CLICK_DISMISS:"click.dismiss"+Vn,HIDE:"hide"+Vn,HIDDEN:"hidden"+Vn,SHOW:"show"+Vn,SHOWN:"shown"+Vn},Xn="fade",$n="hide",Gn="show",Jn="showing",Zn={animation:"boolean",autohide:"boolean",delay:"number"},ti={animation:!0,autohide:!0,delay:500},ei='[data-dismiss="toast"]',ni=function(){function i(t,e){this._element=t,this._config=this._getConfig(e),this._timeout=null,this._setListeners()}var t=i.prototype;return t.show=function(){var t=this;g(this._element).trigger(zn.SHOW),this._config.animation&&this._element.classList.add(Xn);var e=function(){t._element.classList.remove(Jn),t._element.classList.add(Gn),g(t._element).trigger(zn.SHOWN),t._config.autohide&&t.hide()};if(this._element.classList.remove($n),this._element.classList.add(Jn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},t.hide=function(t){var e=this;this._element.classList.contains(Gn)&&(g(this._element).trigger(zn.HIDE),t?this._close():this._timeout=setTimeout(function(){e._close()},this._config.delay))},t.dispose=function(){clearTimeout(this._timeout),this._timeout=null,this._element.classList.contains(Gn)&&this._element.classList.remove(Gn),g(this._element).off(zn.CLICK_DISMISS),g.removeData(this._element,Bn),this._element=null,this._config=null},t._getConfig=function(t){return t=l({},ti,g(this._element).data(),"object"==typeof t&&t?t:{}),_.typeCheckConfig(Qn,t,this.constructor.DefaultType),t},t._setListeners=function(){var t=this;g(this._element).on(zn.CLICK_DISMISS,ei,function(){return t.hide(!0)})},t._close=function(){var t=this,e=function(){t._element.classList.add($n),g(t._element).trigger(zn.HIDDEN)};if(this._element.classList.remove(Gn),this._config.animation){var n=_.getTransitionDurationFromElement(this._element);g(this._element).one(_.TRANSITION_END,e).emulateTransitionEnd(n)}else e()},i._jQueryInterface=function(n){return this.each(function(){var t=g(this),e=t.data(Bn);if(e||(e=new i(this,"object"==typeof n&&n),t.data(Bn,e)),"string"==typeof n){if("undefined"==typeof e[n])throw new TypeError('No method named "'+n+'"');e[n](this)}})},s(i,null,[{key:"VERSION",get:function(){return"4.3.1"}},{key:"DefaultType",get:function(){return Zn}},{key:"Default",get:function(){return ti}}]),i}();g.fn[Qn]=ni._jQueryInterface,g.fn[Qn].Constructor=ni,g.fn[Qn].noConflict=function(){return g.fn[Qn]=Yn,ni._jQueryInterface},function(){if("undefined"==typeof g)throw new TypeError("Bootstrap's JavaScript requires jQuery. jQuery must be included before Bootstrap's JavaScript.");var t=g.fn.jquery.split(" ")[0].split(".");if(t[0]<2&&t[1]<9||1===t[0]&&9===t[1]&&t[2]<1||4<=t[0])throw new Error("Bootstrap's JavaScript requires at least jQuery v1.9.1 but less than v4.0.0")}(),t.Util=_,t.Alert=p,t.Button=P,t.Carousel=lt,t.Collapse=bt,t.Dropdown=Jt,t.Modal=ve,t.Popover=sn,t.Scrollspy=Dn,t.Tab=Kn,t.Toast=ni,t.Tooltip=Be,Object.defineProperty(t,"__esModule",{value:!0})});
//# sourceMappingURL=bootstrap.min.js.map
;/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 * 
 * Includes all of the following: TweenLite, TweenMax, TimelineLite, TimelineMax, EasePack, CSSPlugin, RoundPropsPlugin, BezierPlugin, AttrPlugin, DirectionalRotationPlugin
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TweenMax",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},e=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},f=function(a,b,d){c.call(this,a,b,d),this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._dirty=!0,this.render=f.prototype.render},g=1e-10,h=c._internals,i=h.isSelector,j=h.isArray,k=f.prototype=c.to({},.1,{}),l=[];f.version="1.19.1",k.constructor=f,k.kill()._gc=!1,f.killTweensOf=f.killDelayedCallsTo=c.killTweensOf,f.getTweensOf=c.getTweensOf,f.lagSmoothing=c.lagSmoothing,f.ticker=c.ticker,f.render=c.render,k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),c.prototype.invalidate.call(this)},k.updateTo=function(a,b){var d,e=this.ratio,f=this.vars.immediateRender||a.immediateRender;b&&this._startTime<this._timeline._time&&(this._startTime=this._timeline._time,this._uncache(!1),this._gc?this._enabled(!0,!1):this._timeline.insert(this,this._startTime-this._delay));for(d in a)this.vars[d]=a[d];if(this._initted||f)if(b)this._initted=!1,f&&this.render(0,!0,!0);else if(this._gc&&this._enabled(!0,!1),this._notifyPluginsOfEnabled&&this._firstPT&&c._onPluginEvent("_onDisable",this),this._time/this._duration>.998){var g=this._totalTime;this.render(0,!0,!1),this._initted=!1,this.render(g,!0,!1)}else if(this._initted=!1,this._init(),this._time>0||f)for(var h,i=1/(1-e),j=this._firstPT;j;)h=j.s+j.c,j.c*=i,j.s=h-j.c,j=j._next;return this},k.render=function(a,b,c){this._initted||0===this._duration&&this.vars.repeat&&this.invalidate();var d,e,f,i,j,k,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._totalTime,q=this._cycle,r=this._duration,s=this._rawPrevTime;if(a>=n-1e-7&&a>=0?(this._totalTime=n,this._cycle=this._repeat,this._yoyo&&0!==(1&this._cycle)?(this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0):(this._time=r,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1),this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===r&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>s||0>=a&&a>=-1e-7||s===g&&"isPause"!==this.data)&&s!==a&&(c=!0,s>g&&(e="onReverseComplete")),this._rawPrevTime=m=!b||a||s===a?a:g)):1e-7>a?(this._totalTime=this._time=this._cycle=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==p||0===r&&s>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===r&&(this._initted||!this.vars.lazy||c)&&(s>=0&&(c=!0),this._rawPrevTime=m=!b||a||s===a?a:g)),this._initted||(c=!0)):(this._totalTime=this._time=a,0!==this._repeat&&(i=r+this._repeatDelay,this._cycle=this._totalTime/i>>0,0!==this._cycle&&this._cycle===this._totalTime/i&&a>=p&&this._cycle--,this._time=this._totalTime-this._cycle*i,this._yoyo&&0!==(1&this._cycle)&&(this._time=r-this._time),this._time>r?this._time=r:this._time<0&&(this._time=0)),this._easeType?(j=this._time/r,k=this._easeType,l=this._easePower,(1===k||3===k&&j>=.5)&&(j=1-j),3===k&&(j*=2),1===l?j*=j:2===l?j*=j*j:3===l?j*=j*j*j:4===l&&(j*=j*j*j*j),1===k?this.ratio=1-j:2===k?this.ratio=j:this._time/r<.5?this.ratio=j/2:this.ratio=1-j/2):this.ratio=this._ease.getRatio(this._time/r)),o===this._time&&!c&&q===this._cycle)return void(p!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=o,this._totalTime=p,this._rawPrevTime=s,this._cycle=q,h.lazyTweens.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/r):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==o&&a>=0&&(this._active=!0),0===p&&(2===this._initted&&a>0&&this._init(),this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._totalTime||0===r)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&this._startTime&&this._startAt.render(a,b,c),b||(this._totalTime!==p||e)&&this._callback("onUpdate")),this._cycle!==q&&(b||this._gc||this.vars.onRepeat&&this._callback("onRepeat")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&this._startTime&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===r&&this._rawPrevTime===g&&m!==g&&(this._rawPrevTime=0))},f.to=function(a,b,c){return new f(a,b,c)},f.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new f(a,b,c)},f.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new f(a,b,d)},f.staggerTo=f.allTo=function(a,b,g,h,k,m,n){h=h||0;var o,p,q,r,s=0,t=[],u=function(){g.onComplete&&g.onComplete.apply(g.onCompleteScope||this,arguments),k.apply(n||g.callbackScope||this,m||l)},v=g.cycle,w=g.startAt&&g.startAt.cycle;for(j(a)||("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a))),a=a||[],0>h&&(a=d(a),a.reverse(),h*=-1),o=a.length-1,q=0;o>=q;q++){p={};for(r in g)p[r]=g[r];if(v&&(e(p,a,q),null!=p.duration&&(b=p.duration,delete p.duration)),w){w=p.startAt={};for(r in g.startAt)w[r]=g.startAt[r];e(p.startAt,a,q)}p.delay=s+(p.delay||0),q===o&&k&&(p.onComplete=u),t[q]=new f(a[q],b,p),s+=h}return t},f.staggerFrom=f.allFrom=function(a,b,c,d,e,g,h){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,f.staggerTo(a,b,c,d,e,g,h)},f.staggerFromTo=f.allFromTo=function(a,b,c,d,e,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,f.staggerTo(a,b,d,e,g,h,i)},f.delayedCall=function(a,b,c,d,e){return new f(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,useFrames:e,overwrite:0})},f.set=function(a,b){return new f(a,0,b)},f.isTweening=function(a){return c.getTweensOf(a,!0).length>0};var m=function(a,b){for(var d=[],e=0,f=a._first;f;)f instanceof c?d[e++]=f:(b&&(d[e++]=f),d=d.concat(m(f,b)),e=d.length),f=f._next;return d},n=f.getAllTweens=function(b){return m(a._rootTimeline,b).concat(m(a._rootFramesTimeline,b))};f.killAll=function(a,c,d,e){null==c&&(c=!0),null==d&&(d=!0);var f,g,h,i=n(0!=e),j=i.length,k=c&&d&&e;for(h=0;j>h;h++)g=i[h],(k||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&(a?g.totalTime(g._reversed?0:g.totalDuration()):g._enabled(!1,!1))},f.killChildTweensOf=function(a,b){if(null!=a){var e,g,k,l,m,n=h.tweenLookup;if("string"==typeof a&&(a=c.selector(a)||a),i(a)&&(a=d(a)),j(a))for(l=a.length;--l>-1;)f.killChildTweensOf(a[l],b);else{e=[];for(k in n)for(g=n[k].target.parentNode;g;)g===a&&(e=e.concat(n[k].tweens)),g=g.parentNode;for(m=e.length,l=0;m>l;l++)b&&e[l].totalTime(e[l].totalDuration()),e[l]._enabled(!1,!1)}}};var o=function(a,c,d,e){c=c!==!1,d=d!==!1,e=e!==!1;for(var f,g,h=n(e),i=c&&d&&e,j=h.length;--j>-1;)g=h[j],(i||g instanceof b||(f=g.target===g.vars.onComplete)&&d||c&&!f)&&g.paused(a)};return f.pauseAll=function(a,b,c){o(!0,a,b,c)},f.resumeAll=function(a,b,c){o(!1,a,b,c)},f.globalTimeScale=function(b){var d=a._rootTimeline,e=c.ticker.time;return arguments.length?(b=b||g,d._startTime=e-(e-d._startTime)*d._timeScale/b,d=a._rootFramesTimeline,e=c.ticker.frame,d._startTime=e-(e-d._startTime)*d._timeScale/b,d._timeScale=a._rootTimeline._timeScale=b,b):d._timeScale},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.duration=function(b){return arguments.length?a.prototype.duration.call(this,b):this._duration},k.totalDuration=function(a){return arguments.length?-1===this._repeat?this:this.duration((a-this._repeat*this._repeatDelay)/(this._repeat+1)):(this._dirty&&(this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat,this._dirty=!1),this._totalDuration)},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},f},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.1",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0),_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.1",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7&&a>=0)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b&&p>a){if(a=this._time,a>=q||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),q!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),function(){var a=180/Math.PI,b=[],c=[],d=[],e={},f=_gsScope._gsDefine.globals,g=function(a,b,c,d){c===d&&(c=d-(d-b)/1e6),a===b&&(b=a+(c-a)/1e6),this.a=a,this.b=b,this.c=c,this.d=d,this.da=d-a,this.ca=c-a,this.ba=b-a},h=",x,y,z,left,top,right,bottom,marginTop,marginLeft,marginRight,marginBottom,paddingLeft,paddingTop,paddingRight,paddingBottom,backgroundPosition,backgroundPosition_y,",i=function(a,b,c,d){var e={a:a},f={},g={},h={c:d},i=(a+b)/2,j=(b+c)/2,k=(c+d)/2,l=(i+j)/2,m=(j+k)/2,n=(m-l)/8;return e.b=i+(a-i)/4,f.b=l+n,e.c=f.a=(e.b+f.b)/2,f.c=g.a=(l+m)/2,g.b=m-n,h.b=k+(d-k)/4,g.c=h.a=(g.b+h.b)/2,[e,f,g,h]},j=function(a,e,f,g,h){var j,k,l,m,n,o,p,q,r,s,t,u,v,w=a.length-1,x=0,y=a[0].a;for(j=0;w>j;j++)n=a[x],k=n.a,l=n.d,m=a[x+1].d,h?(t=b[j],u=c[j],v=(u+t)*e*.25/(g?.5:d[j]||.5),o=l-(l-k)*(g?.5*e:0!==t?v/t:0),p=l+(m-l)*(g?.5*e:0!==u?v/u:0),q=l-(o+((p-o)*(3*t/(t+u)+.5)/4||0))):(o=l-(l-k)*e*.5,p=l+(m-l)*e*.5,q=l-(o+p)/2),o+=q,p+=q,n.c=r=o,0!==j?n.b=y:n.b=y=n.a+.6*(n.c-n.a),n.da=l-k,n.ca=r-k,n.ba=y-k,f?(s=i(k,y,r,l),a.splice(x,1,s[0],s[1],s[2],s[3]),x+=4):x++,y=p;n=a[x],n.b=y,n.c=y+.4*(n.d-y),n.da=n.d-n.a,n.ca=n.c-n.a,n.ba=y-n.a,f&&(s=i(n.a,y,n.c,n.d),a.splice(x,1,s[0],s[1],s[2],s[3]))},k=function(a,d,e,f){var h,i,j,k,l,m,n=[];if(f)for(a=[f].concat(a),i=a.length;--i>-1;)"string"==typeof(m=a[i][d])&&"="===m.charAt(1)&&(a[i][d]=f[d]+Number(m.charAt(0)+m.substr(2)));if(h=a.length-2,0>h)return n[0]=new g(a[0][d],0,0,a[-1>h?0:1][d]),n;for(i=0;h>i;i++)j=a[i][d],k=a[i+1][d],n[i]=new g(j,0,0,k),e&&(l=a[i+2][d],b[i]=(b[i]||0)+(k-j)*(k-j),c[i]=(c[i]||0)+(l-k)*(l-k));return n[i]=new g(a[i][d],0,0,a[i+1][d]),n},l=function(a,f,g,i,l,m){var n,o,p,q,r,s,t,u,v={},w=[],x=m||a[0];l="string"==typeof l?","+l+",":h,null==f&&(f=1);for(o in a[0])w.push(o);if(a.length>1){for(u=a[a.length-1],t=!0,n=w.length;--n>-1;)if(o=w[n],Math.abs(x[o]-u[o])>.05){t=!1;break}t&&(a=a.concat(),m&&a.unshift(m),a.push(a[1]),m=a[a.length-3])}for(b.length=c.length=d.length=0,n=w.length;--n>-1;)o=w[n],e[o]=-1!==l.indexOf(","+o+","),v[o]=k(a,o,e[o],m);for(n=b.length;--n>-1;)b[n]=Math.sqrt(b[n]),c[n]=Math.sqrt(c[n]);if(!i){for(n=w.length;--n>-1;)if(e[o])for(p=v[w[n]],s=p.length-1,q=0;s>q;q++)r=p[q+1].da/c[q]+p[q].da/b[q]||0,d[q]=(d[q]||0)+r*r;for(n=d.length;--n>-1;)d[n]=Math.sqrt(d[n])}for(n=w.length,q=g?4:1;--n>-1;)o=w[n],p=v[o],j(p,f,g,i,e[o]),t&&(p.splice(0,q),p.splice(p.length-q,q));return v},m=function(a,b,c){b=b||"soft";var d,e,f,h,i,j,k,l,m,n,o,p={},q="cubic"===b?3:2,r="soft"===b,s=[];if(r&&c&&(a=[c].concat(a)),null==a||a.length<q+1)throw"invalid Bezier data";for(m in a[0])s.push(m);for(j=s.length;--j>-1;){for(m=s[j],p[m]=i=[],n=0,l=a.length,k=0;l>k;k++)d=null==c?a[k][m]:"string"==typeof(o=a[k][m])&&"="===o.charAt(1)?c[m]+Number(o.charAt(0)+o.substr(2)):Number(o),r&&k>1&&l-1>k&&(i[n++]=(d+i[n-2])/2),i[n++]=d;for(l=n-q+1,n=0,k=0;l>k;k+=q)d=i[k],e=i[k+1],f=i[k+2],h=2===q?0:i[k+3],i[n++]=o=3===q?new g(d,e,f,h):new g(d,(2*e+d)/3,(2*e+f)/3,f);i.length=n}return p},n=function(a,b,c){for(var d,e,f,g,h,i,j,k,l,m,n,o=1/c,p=a.length;--p>-1;)for(m=a[p],f=m.a,g=m.d-f,
h=m.c-f,i=m.b-f,d=e=0,k=1;c>=k;k++)j=o*k,l=1-j,d=e-(e=(j*j*g+3*l*(j*h+l*i))*j),n=p*c+k-1,b[n]=(b[n]||0)+d*d},o=function(a,b){b=b>>0||6;var c,d,e,f,g=[],h=[],i=0,j=0,k=b-1,l=[],m=[];for(c in a)n(a[c],g,b);for(e=g.length,d=0;e>d;d++)i+=Math.sqrt(g[d]),f=d%b,m[f]=i,f===k&&(j+=i,f=d/b>>0,l[f]=m,h[f]=j,i=0,m=[]);return{length:j,lengths:h,segments:l}},p=_gsScope._gsDefine.plugin({propName:"bezier",priority:-1,version:"1.3.7",API:2,global:!0,init:function(a,b,c){this._target=a,b instanceof Array&&(b={values:b}),this._func={},this._mod={},this._props=[],this._timeRes=null==b.timeResolution?6:parseInt(b.timeResolution,10);var d,e,f,g,h,i=b.values||[],j={},k=i[0],n=b.autoRotate||c.vars.orientToBezier;this._autoRotate=n?n instanceof Array?n:[["x","y","rotation",n===!0?0:Number(n)||0]]:null;for(d in k)this._props.push(d);for(f=this._props.length;--f>-1;)d=this._props[f],this._overwriteProps.push(d),e=this._func[d]="function"==typeof a[d],j[d]=e?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]():parseFloat(a[d]),h||j[d]!==i[0][d]&&(h=j);if(this._beziers="cubic"!==b.type&&"quadratic"!==b.type&&"soft"!==b.type?l(i,isNaN(b.curviness)?1:b.curviness,!1,"thruBasic"===b.type,b.correlate,h):m(i,b.type,j),this._segCount=this._beziers[d].length,this._timeRes){var p=o(this._beziers,this._timeRes);this._length=p.length,this._lengths=p.lengths,this._segments=p.segments,this._l1=this._li=this._s1=this._si=0,this._l2=this._lengths[0],this._curSeg=this._segments[0],this._s2=this._curSeg[0],this._prec=1/this._curSeg.length}if(n=this._autoRotate)for(this._initialRotations=[],n[0]instanceof Array||(this._autoRotate=n=[n]),f=n.length;--f>-1;){for(g=0;3>g;g++)d=n[f][g],this._func[d]="function"==typeof a[d]?a[d.indexOf("set")||"function"!=typeof a["get"+d.substr(3)]?d:"get"+d.substr(3)]:!1;d=n[f][2],this._initialRotations[f]=(this._func[d]?this._func[d].call(this._target):this._target[d])||0,this._overwriteProps.push(d)}return this._startRatio=c.vars.runBackwards?1:0,!0},set:function(b){var c,d,e,f,g,h,i,j,k,l,m=this._segCount,n=this._func,o=this._target,p=b!==this._startRatio;if(this._timeRes){if(k=this._lengths,l=this._curSeg,b*=this._length,e=this._li,b>this._l2&&m-1>e){for(j=m-1;j>e&&(this._l2=k[++e])<=b;);this._l1=k[e-1],this._li=e,this._curSeg=l=this._segments[e],this._s2=l[this._s1=this._si=0]}else if(b<this._l1&&e>0){for(;e>0&&(this._l1=k[--e])>=b;);0===e&&b<this._l1?this._l1=0:e++,this._l2=k[e],this._li=e,this._curSeg=l=this._segments[e],this._s1=l[(this._si=l.length-1)-1]||0,this._s2=l[this._si]}if(c=e,b-=this._l1,e=this._si,b>this._s2&&e<l.length-1){for(j=l.length-1;j>e&&(this._s2=l[++e])<=b;);this._s1=l[e-1],this._si=e}else if(b<this._s1&&e>0){for(;e>0&&(this._s1=l[--e])>=b;);0===e&&b<this._s1?this._s1=0:e++,this._s2=l[e],this._si=e}h=(e+(b-this._s1)/(this._s2-this._s1))*this._prec||0}else c=0>b?0:b>=1?m-1:m*b>>0,h=(b-c*(1/m))*m;for(d=1-h,e=this._props.length;--e>-1;)f=this._props[e],g=this._beziers[f][c],i=(h*h*g.da+3*d*(h*g.ca+d*g.ba))*h+g.a,this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i;if(this._autoRotate){var q,r,s,t,u,v,w,x=this._autoRotate;for(e=x.length;--e>-1;)f=x[e][2],v=x[e][3]||0,w=x[e][4]===!0?1:a,g=this._beziers[x[e][0]],q=this._beziers[x[e][1]],g&&q&&(g=g[c],q=q[c],r=g.a+(g.b-g.a)*h,t=g.b+(g.c-g.b)*h,r+=(t-r)*h,t+=(g.c+(g.d-g.c)*h-t)*h,s=q.a+(q.b-q.a)*h,u=q.b+(q.c-q.b)*h,s+=(u-s)*h,u+=(q.c+(q.d-q.c)*h-u)*h,i=p?Math.atan2(u-s,t-r)*w+v:this._initialRotations[e],this._mod[f]&&(i=this._mod[f](i,o)),n[f]?o[f](i):o[f]=i)}}}),q=p.prototype;p.bezierThrough=l,p.cubicToQuadratic=i,p._autoCSS=!0,p.quadraticToCubic=function(a,b,c){return new g(a,(2*b+a)/3,(2*b+c)/3,c)},p._cssRegister=function(){var a=f.CSSPlugin;if(a){var b=a._internals,c=b._parseToProxy,d=b._setPluginRatio,e=b.CSSPropTween;b._registerComplexSpecialProp("bezier",{parser:function(a,b,f,g,h,i){b instanceof Array&&(b={values:b}),i=new p;var j,k,l,m=b.values,n=m.length-1,o=[],q={};if(0>n)return h;for(j=0;n>=j;j++)l=c(a,m[j],g,h,i,n!==j),o[j]=l.end;for(k in b)q[k]=b[k];return q.values=o,h=new e(a,"bezier",0,0,l.pt,2),h.data=l,h.plugin=i,h.setRatio=d,0===q.autoRotate&&(q.autoRotate=!0),!q.autoRotate||q.autoRotate instanceof Array||(j=q.autoRotate===!0?0:Number(q.autoRotate),q.autoRotate=null!=l.end.left?[["left","top","rotation",j,!1]]:null!=l.end.x?[["x","y","rotation",j,!1]]:!1),q.autoRotate&&(g._transform||g._enableTransforms(!1),l.autoRotate=g._target._gsTransform,l.proxy.rotation=l.autoRotate.rotation||0,g._overwriteProps.push("rotation")),i._onInitTween(l.proxy,q,g._tween),h}})}},q._mod=function(a){for(var b,c=this._overwriteProps,d=c.length;--d>-1;)b=a[c[d]],b&&"function"==typeof b&&(this._mod[c[d]]=b)},q._kill=function(a){var b,c,d=this._props;for(b in this._beziers)if(b in a)for(delete this._beziers[b],delete this._func[b],c=d.length;--c>-1;)d[c]===b&&d.splice(c,1);if(d=this._autoRotate)for(c=d.length;--c>-1;)a[d[c][2]]&&d.splice(c,1);return this._super._kill.call(this,a)}}(),_gsScope._gsDefine("plugins.CSSPlugin",["plugins.TweenPlugin","TweenLite"],function(a,b){var c,d,e,f,g=function(){a.call(this,"css"),this._overwriteProps.length=0,this.setRatio=g.prototype.setRatio},h=_gsScope._gsDefine.globals,i={},j=g.prototype=new a("css");j.constructor=g,g.version="1.19.1",g.API=2,g.defaultTransformPerspective=0,g.defaultSkewType="compensated",g.defaultSmoothOrigin=!0,j="px",g.suffixMap={top:j,right:j,bottom:j,left:j,width:j,height:j,fontSize:j,padding:j,margin:j,perspective:j,lineHeight:""};var k,l,m,n,o,p,q,r,s=/(?:\-|\.|\b)(\d|\.|e\-)+/g,t=/(?:\d|\-\d|\.\d|\-\.\d|\+=\d|\-=\d|\+=.\d|\-=\.\d)+/g,u=/(?:\+=|\-=|\-|\b)[\d\-\.]+[a-zA-Z0-9]*(?:%|\b)/gi,v=/(?![+-]?\d*\.?\d+|[+-]|e[+-]\d+)[^0-9]/g,w=/(?:\d|\-|\+|=|#|\.)*/g,x=/opacity *= *([^)]*)/i,y=/opacity:([^;]*)/i,z=/alpha\(opacity *=.+?\)/i,A=/^(rgb|hsl)/,B=/([A-Z])/g,C=/-([a-z])/gi,D=/(^(?:url\(\"|url\())|(?:(\"\))$|\)$)/gi,E=function(a,b){return b.toUpperCase()},F=/(?:Left|Right|Width)/i,G=/(M11|M12|M21|M22)=[\d\-\.e]+/gi,H=/progid\:DXImageTransform\.Microsoft\.Matrix\(.+?\)/i,I=/,(?=[^\)]*(?:\(|$))/gi,J=/[\s,\(]/i,K=Math.PI/180,L=180/Math.PI,M={},N={style:{}},O=_gsScope.document||{createElement:function(){return N}},P=function(a,b){return O.createElementNS?O.createElementNS(b||"http://www.w3.org/1999/xhtml",a):O.createElement(a)},Q=P("div"),R=P("img"),S=g._internals={_specialProps:i},T=(_gsScope.navigator||{}).userAgent||"",U=function(){var a=T.indexOf("Android"),b=P("a");return m=-1!==T.indexOf("Safari")&&-1===T.indexOf("Chrome")&&(-1===a||parseFloat(T.substr(a+8,2))>3),o=m&&parseFloat(T.substr(T.indexOf("Version/")+8,2))<6,n=-1!==T.indexOf("Firefox"),(/MSIE ([0-9]{1,}[\.0-9]{0,})/.exec(T)||/Trident\/.*rv:([0-9]{1,}[\.0-9]{0,})/.exec(T))&&(p=parseFloat(RegExp.$1)),b?(b.style.cssText="top:1px;opacity:.55;",/^0.55/.test(b.style.opacity)):!1}(),V=function(a){return x.test("string"==typeof a?a:(a.currentStyle?a.currentStyle.filter:a.style.filter)||"")?parseFloat(RegExp.$1)/100:1},W=function(a){_gsScope.console&&console.log(a)},X="",Y="",Z=function(a,b){b=b||Q;var c,d,e=b.style;if(void 0!==e[a])return a;for(a=a.charAt(0).toUpperCase()+a.substr(1),c=["O","Moz","ms","Ms","Webkit"],d=5;--d>-1&&void 0===e[c[d]+a];);return d>=0?(Y=3===d?"ms":c[d],X="-"+Y.toLowerCase()+"-",Y+a):null},$=O.defaultView?O.defaultView.getComputedStyle:function(){},_=g.getStyle=function(a,b,c,d,e){var f;return U||"opacity"!==b?(!d&&a.style[b]?f=a.style[b]:(c=c||$(a))?f=c[b]||c.getPropertyValue(b)||c.getPropertyValue(b.replace(B,"-$1").toLowerCase()):a.currentStyle&&(f=a.currentStyle[b]),null==e||f&&"none"!==f&&"auto"!==f&&"auto auto"!==f?f:e):V(a)},aa=S.convertToPixels=function(a,c,d,e,f){if("px"===e||!e)return d;if("auto"===e||!d)return 0;var h,i,j,k=F.test(c),l=a,m=Q.style,n=0>d,o=1===d;if(n&&(d=-d),o&&(d*=100),"%"===e&&-1!==c.indexOf("border"))h=d/100*(k?a.clientWidth:a.clientHeight);else{if(m.cssText="border:0 solid red;position:"+_(a,"position")+";line-height:0;","%"!==e&&l.appendChild&&"v"!==e.charAt(0)&&"rem"!==e)m[k?"borderLeftWidth":"borderTopWidth"]=d+e;else{if(l=a.parentNode||O.body,i=l._gsCache,j=b.ticker.frame,i&&k&&i.time===j)return i.width*d/100;m[k?"width":"height"]=d+e}l.appendChild(Q),h=parseFloat(Q[k?"offsetWidth":"offsetHeight"]),l.removeChild(Q),k&&"%"===e&&g.cacheWidths!==!1&&(i=l._gsCache=l._gsCache||{},i.time=j,i.width=h/d*100),0!==h||f||(h=aa(a,c,d,e,!0))}return o&&(h/=100),n?-h:h},ba=S.calculateOffset=function(a,b,c){if("absolute"!==_(a,"position",c))return 0;var d="left"===b?"Left":"Top",e=_(a,"margin"+d,c);return a["offset"+d]-(aa(a,b,parseFloat(e),e.replace(w,""))||0)},ca=function(a,b){var c,d,e,f={};if(b=b||$(a,null))if(c=b.length)for(;--c>-1;)e=b[c],(-1===e.indexOf("-transform")||Da===e)&&(f[e.replace(C,E)]=b.getPropertyValue(e));else for(c in b)(-1===c.indexOf("Transform")||Ca===c)&&(f[c]=b[c]);else if(b=a.currentStyle||a.style)for(c in b)"string"==typeof c&&void 0===f[c]&&(f[c.replace(C,E)]=b[c]);return U||(f.opacity=V(a)),d=Ra(a,b,!1),f.rotation=d.rotation,f.skewX=d.skewX,f.scaleX=d.scaleX,f.scaleY=d.scaleY,f.x=d.x,f.y=d.y,Fa&&(f.z=d.z,f.rotationX=d.rotationX,f.rotationY=d.rotationY,f.scaleZ=d.scaleZ),f.filters&&delete f.filters,f},da=function(a,b,c,d,e){var f,g,h,i={},j=a.style;for(g in c)"cssText"!==g&&"length"!==g&&isNaN(g)&&(b[g]!==(f=c[g])||e&&e[g])&&-1===g.indexOf("Origin")&&("number"==typeof f||"string"==typeof f)&&(i[g]="auto"!==f||"left"!==g&&"top"!==g?""!==f&&"auto"!==f&&"none"!==f||"string"!=typeof b[g]||""===b[g].replace(v,"")?f:0:ba(a,g),void 0!==j[g]&&(h=new sa(j,g,j[g],h)));if(d)for(g in d)"className"!==g&&(i[g]=d[g]);return{difs:i,firstMPT:h}},ea={width:["Left","Right"],height:["Top","Bottom"]},fa=["marginLeft","marginRight","marginTop","marginBottom"],ga=function(a,b,c){if("svg"===(a.nodeName+"").toLowerCase())return(c||$(a))[b]||0;if(a.getCTM&&Oa(a))return a.getBBox()[b]||0;var d=parseFloat("width"===b?a.offsetWidth:a.offsetHeight),e=ea[b],f=e.length;for(c=c||$(a,null);--f>-1;)d-=parseFloat(_(a,"padding"+e[f],c,!0))||0,d-=parseFloat(_(a,"border"+e[f]+"Width",c,!0))||0;return d},ha=function(a,b){if("contain"===a||"auto"===a||"auto auto"===a)return a+" ";(null==a||""===a)&&(a="0 0");var c,d=a.split(" "),e=-1!==a.indexOf("left")?"0%":-1!==a.indexOf("right")?"100%":d[0],f=-1!==a.indexOf("top")?"0%":-1!==a.indexOf("bottom")?"100%":d[1];if(d.length>3&&!b){for(d=a.split(", ").join(",").split(","),a=[],c=0;c<d.length;c++)a.push(ha(d[c]));return a.join(",")}return null==f?f="center"===e?"50%":"0":"center"===f&&(f="50%"),("center"===e||isNaN(parseFloat(e))&&-1===(e+"").indexOf("="))&&(e="50%"),a=e+" "+f+(d.length>2?" "+d[2]:""),b&&(b.oxp=-1!==e.indexOf("%"),b.oyp=-1!==f.indexOf("%"),b.oxr="="===e.charAt(1),b.oyr="="===f.charAt(1),b.ox=parseFloat(e.replace(v,"")),b.oy=parseFloat(f.replace(v,"")),b.v=a),b||a},ia=function(a,b){return"function"==typeof a&&(a=a(r,q)),"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2)):parseFloat(a)-parseFloat(b)||0},ja=function(a,b){return"function"==typeof a&&(a=a(r,q)),null==a?b:"string"==typeof a&&"="===a.charAt(1)?parseInt(a.charAt(0)+"1",10)*parseFloat(a.substr(2))+b:parseFloat(a)||0},ka=function(a,b,c,d){var e,f,g,h,i,j=1e-6;return"function"==typeof a&&(a=a(r,q)),null==a?h=b:"number"==typeof a?h=a:(e=360,f=a.split("_"),i="="===a.charAt(1),g=(i?parseInt(a.charAt(0)+"1",10)*parseFloat(f[0].substr(2)):parseFloat(f[0]))*(-1===a.indexOf("rad")?1:L)-(i?0:b),f.length&&(d&&(d[c]=b+g),-1!==a.indexOf("short")&&(g%=e,g!==g%(e/2)&&(g=0>g?g+e:g-e)),-1!==a.indexOf("_cw")&&0>g?g=(g+9999999999*e)%e-(g/e|0)*e:-1!==a.indexOf("ccw")&&g>0&&(g=(g-9999999999*e)%e-(g/e|0)*e)),h=b+g),j>h&&h>-j&&(h=0),h},la={aqua:[0,255,255],lime:[0,255,0],silver:[192,192,192],black:[0,0,0],maroon:[128,0,0],teal:[0,128,128],blue:[0,0,255],navy:[0,0,128],white:[255,255,255],fuchsia:[255,0,255],olive:[128,128,0],yellow:[255,255,0],orange:[255,165,0],gray:[128,128,128],purple:[128,0,128],green:[0,128,0],red:[255,0,0],pink:[255,192,203],cyan:[0,255,255],transparent:[255,255,255,0]},ma=function(a,b,c){return a=0>a?a+1:a>1?a-1:a,255*(1>6*a?b+(c-b)*a*6:.5>a?c:2>3*a?b+(c-b)*(2/3-a)*6:b)+.5|0},na=g.parseColor=function(a,b){var c,d,e,f,g,h,i,j,k,l,m;if(a)if("number"==typeof a)c=[a>>16,a>>8&255,255&a];else{if(","===a.charAt(a.length-1)&&(a=a.substr(0,a.length-1)),la[a])c=la[a];else if("#"===a.charAt(0))4===a.length&&(d=a.charAt(1),e=a.charAt(2),f=a.charAt(3),a="#"+d+d+e+e+f+f),a=parseInt(a.substr(1),16),c=[a>>16,a>>8&255,255&a];else if("hsl"===a.substr(0,3))if(c=m=a.match(s),b){if(-1!==a.indexOf("="))return a.match(t)}else g=Number(c[0])%360/360,h=Number(c[1])/100,i=Number(c[2])/100,e=.5>=i?i*(h+1):i+h-i*h,d=2*i-e,c.length>3&&(c[3]=Number(a[3])),c[0]=ma(g+1/3,d,e),c[1]=ma(g,d,e),c[2]=ma(g-1/3,d,e);else c=a.match(s)||la.transparent;c[0]=Number(c[0]),c[1]=Number(c[1]),c[2]=Number(c[2]),c.length>3&&(c[3]=Number(c[3]))}else c=la.black;return b&&!m&&(d=c[0]/255,e=c[1]/255,f=c[2]/255,j=Math.max(d,e,f),k=Math.min(d,e,f),i=(j+k)/2,j===k?g=h=0:(l=j-k,h=i>.5?l/(2-j-k):l/(j+k),g=j===d?(e-f)/l+(f>e?6:0):j===e?(f-d)/l+2:(d-e)/l+4,g*=60),c[0]=g+.5|0,c[1]=100*h+.5|0,c[2]=100*i+.5|0),c},oa=function(a,b){var c,d,e,f=a.match(pa)||[],g=0,h=f.length?"":a;for(c=0;c<f.length;c++)d=f[c],e=a.substr(g,a.indexOf(d,g)-g),g+=e.length+d.length,d=na(d,b),3===d.length&&d.push(1),h+=e+(b?"hsla("+d[0]+","+d[1]+"%,"+d[2]+"%,"+d[3]:"rgba("+d.join(","))+")";return h+a.substr(g)},pa="(?:\\b(?:(?:rgb|rgba|hsl|hsla)\\(.+?\\))|\\B#(?:[0-9a-f]{3}){1,2}\\b";for(j in la)pa+="|"+j+"\\b";pa=new RegExp(pa+")","gi"),g.colorStringFilter=function(a){var b,c=a[0]+a[1];pa.test(c)&&(b=-1!==c.indexOf("hsl(")||-1!==c.indexOf("hsla("),a[0]=oa(a[0],b),a[1]=oa(a[1],b)),pa.lastIndex=0},b.defaultStringFilter||(b.defaultStringFilter=g.colorStringFilter);var qa=function(a,b,c,d){if(null==a)return function(a){return a};var e,f=b?(a.match(pa)||[""])[0]:"",g=a.split(f).join("").match(u)||[],h=a.substr(0,a.indexOf(g[0])),i=")"===a.charAt(a.length-1)?")":"",j=-1!==a.indexOf(" ")?" ":",",k=g.length,l=k>0?g[0].replace(s,""):"";return k?e=b?function(a){var b,m,n,o;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(o=a.replace(I,"|").split("|"),n=0;n<o.length;n++)o[n]=e(o[n]);return o.join(",")}if(b=(a.match(pa)||[f])[0],m=a.split(b).join("").match(u)||[],n=m.length,k>n--)for(;++n<k;)m[n]=c?m[(n-1)/2|0]:g[n];return h+m.join(j)+j+b+i+(-1!==a.indexOf("inset")?" inset":"")}:function(a){var b,f,m;if("number"==typeof a)a+=l;else if(d&&I.test(a)){for(f=a.replace(I,"|").split("|"),m=0;m<f.length;m++)f[m]=e(f[m]);return f.join(",")}if(b=a.match(u)||[],m=b.length,k>m--)for(;++m<k;)b[m]=c?b[(m-1)/2|0]:g[m];return h+b.join(j)+i}:function(a){return a}},ra=function(a){return a=a.split(","),function(b,c,d,e,f,g,h){var i,j=(c+"").split(" ");for(h={},i=0;4>i;i++)h[a[i]]=j[i]=j[i]||j[(i-1)/2>>0];return e.parse(b,h,f,g)}},sa=(S._setPluginRatio=function(a){this.plugin.setRatio(a);for(var b,c,d,e,f,g=this.data,h=g.proxy,i=g.firstMPT,j=1e-6;i;)b=h[i.v],i.r?b=Math.round(b):j>b&&b>-j&&(b=0),i.t[i.p]=b,i=i._next;if(g.autoRotate&&(g.autoRotate.rotation=g.mod?g.mod(h.rotation,this.t):h.rotation),1===a||0===a)for(i=g.firstMPT,f=1===a?"e":"b";i;){if(c=i.t,c.type){if(1===c.type){for(e=c.xs0+c.s+c.xs1,d=1;d<c.l;d++)e+=c["xn"+d]+c["xs"+(d+1)];c[f]=e}}else c[f]=c.s+c.xs0;i=i._next}},function(a,b,c,d,e){this.t=a,this.p=b,this.v=c,this.r=e,d&&(d._prev=this,this._next=d)}),ta=(S._parseToProxy=function(a,b,c,d,e,f){var g,h,i,j,k,l=d,m={},n={},o=c._transform,p=M;for(c._transform=null,M=b,d=k=c.parse(a,b,d,e),M=p,f&&(c._transform=o,l&&(l._prev=null,l._prev&&(l._prev._next=null)));d&&d!==l;){if(d.type<=1&&(h=d.p,n[h]=d.s+d.c,m[h]=d.s,f||(j=new sa(d,"s",h,j,d.r),d.c=0),1===d.type))for(g=d.l;--g>0;)i="xn"+g,h=d.p+"_"+i,n[h]=d.data[i],m[h]=d[i],f||(j=new sa(d,i,h,j,d.rxp[i]));d=d._next}return{proxy:m,end:n,firstMPT:j,pt:k}},S.CSSPropTween=function(a,b,d,e,g,h,i,j,k,l,m){this.t=a,this.p=b,this.s=d,this.c=e,this.n=i||b,a instanceof ta||f.push(this.n),this.r=j,this.type=h||0,k&&(this.pr=k,c=!0),this.b=void 0===l?d:l,this.e=void 0===m?d+e:m,g&&(this._next=g,g._prev=this)}),ua=function(a,b,c,d,e,f){var g=new ta(a,b,c,d-c,e,-1,f);return g.b=c,g.e=g.xs0=d,g},va=g.parseComplex=function(a,b,c,d,e,f,h,i,j,l){c=c||f||"","function"==typeof d&&(d=d(r,q)),h=new ta(a,b,0,0,h,l?2:1,null,!1,i,c,d),d+="",e&&pa.test(d+c)&&(d=[c,d],g.colorStringFilter(d),c=d[0],d=d[1]);var m,n,o,p,u,v,w,x,y,z,A,B,C,D=c.split(", ").join(",").split(" "),E=d.split(", ").join(",").split(" "),F=D.length,G=k!==!1;for((-1!==d.indexOf(",")||-1!==c.indexOf(","))&&(D=D.join(" ").replace(I,", ").split(" "),E=E.join(" ").replace(I,", ").split(" "),F=D.length),F!==E.length&&(D=(f||"").split(" "),F=D.length),h.plugin=j,h.setRatio=l,pa.lastIndex=0,m=0;F>m;m++)if(p=D[m],u=E[m],x=parseFloat(p),x||0===x)h.appendXtra("",x,ia(u,x),u.replace(t,""),G&&-1!==u.indexOf("px"),!0);else if(e&&pa.test(p))B=u.indexOf(")")+1,B=")"+(B?u.substr(B):""),C=-1!==u.indexOf("hsl")&&U,p=na(p,C),u=na(u,C),y=p.length+u.length>6,y&&!U&&0===u[3]?(h["xs"+h.l]+=h.l?" transparent":"transparent",h.e=h.e.split(E[m]).join("transparent")):(U||(y=!1),C?h.appendXtra(y?"hsla(":"hsl(",p[0],ia(u[0],p[0]),",",!1,!0).appendXtra("",p[1],ia(u[1],p[1]),"%,",!1).appendXtra("",p[2],ia(u[2],p[2]),y?"%,":"%"+B,!1):h.appendXtra(y?"rgba(":"rgb(",p[0],u[0]-p[0],",",!0,!0).appendXtra("",p[1],u[1]-p[1],",",!0).appendXtra("",p[2],u[2]-p[2],y?",":B,!0),y&&(p=p.length<4?1:p[3],h.appendXtra("",p,(u.length<4?1:u[3])-p,B,!1))),pa.lastIndex=0;else if(v=p.match(s)){if(w=u.match(t),!w||w.length!==v.length)return h;for(o=0,n=0;n<v.length;n++)A=v[n],z=p.indexOf(A,o),h.appendXtra(p.substr(o,z-o),Number(A),ia(w[n],A),"",G&&"px"===p.substr(z+A.length,2),0===n),o=z+A.length;h["xs"+h.l]+=p.substr(o)}else h["xs"+h.l]+=h.l||h["xs"+h.l]?" "+u:u;if(-1!==d.indexOf("=")&&h.data){for(B=h.xs0+h.data.s,m=1;m<h.l;m++)B+=h["xs"+m]+h.data["xn"+m];h.e=B+h["xs"+m]}return h.l||(h.type=-1,h.xs0=h.e),h.xfirst||h},wa=9;for(j=ta.prototype,j.l=j.pr=0;--wa>0;)j["xn"+wa]=0,j["xs"+wa]="";j.xs0="",j._next=j._prev=j.xfirst=j.data=j.plugin=j.setRatio=j.rxp=null,j.appendXtra=function(a,b,c,d,e,f){var g=this,h=g.l;return g["xs"+h]+=f&&(h||g["xs"+h])?" "+a:a||"",c||0===h||g.plugin?(g.l++,g.type=g.setRatio?2:1,g["xs"+g.l]=d||"",h>0?(g.data["xn"+h]=b+c,g.rxp["xn"+h]=e,g["xn"+h]=b,g.plugin||(g.xfirst=new ta(g,"xn"+h,b,c,g.xfirst||g,0,g.n,e,g.pr),g.xfirst.xs0=0),g):(g.data={s:b+c},g.rxp={},g.s=b,g.c=c,g.r=e,g)):(g["xs"+h]+=b+(d||""),g)};var xa=function(a,b){b=b||{},this.p=b.prefix?Z(a)||a:a,i[a]=i[this.p]=this,this.format=b.formatter||qa(b.defaultValue,b.color,b.collapsible,b.multi),b.parser&&(this.parse=b.parser),this.clrs=b.color,this.multi=b.multi,this.keyword=b.keyword,this.dflt=b.defaultValue,this.pr=b.priority||0},ya=S._registerComplexSpecialProp=function(a,b,c){"object"!=typeof b&&(b={parser:c});var d,e,f=a.split(","),g=b.defaultValue;for(c=c||[g],d=0;d<f.length;d++)b.prefix=0===d&&b.prefix,b.defaultValue=c[d]||g,e=new xa(f[d],b)},za=S._registerPluginProp=function(a){if(!i[a]){var b=a.charAt(0).toUpperCase()+a.substr(1)+"Plugin";ya(a,{parser:function(a,c,d,e,f,g,j){var k=h.com.greensock.plugins[b];return k?(k._cssRegister(),i[d].parse(a,c,d,e,f,g,j)):(W("Error: "+b+" js file not loaded."),f)}})}};j=xa.prototype,j.parseComplex=function(a,b,c,d,e,f){var g,h,i,j,k,l,m=this.keyword;if(this.multi&&(I.test(c)||I.test(b)?(h=b.replace(I,"|").split("|"),i=c.replace(I,"|").split("|")):m&&(h=[b],i=[c])),i){for(j=i.length>h.length?i.length:h.length,g=0;j>g;g++)b=h[g]=h[g]||this.dflt,c=i[g]=i[g]||this.dflt,m&&(k=b.indexOf(m),l=c.indexOf(m),k!==l&&(-1===l?h[g]=h[g].split(m).join(""):-1===k&&(h[g]+=" "+m)));b=h.join(", "),c=i.join(", ")}return va(a,this.p,b,c,this.clrs,this.dflt,d,this.pr,e,f)},j.parse=function(a,b,c,d,f,g,h){return this.parseComplex(a.style,this.format(_(a,this.p,e,!1,this.dflt)),this.format(b),f,g)},g.registerSpecialProp=function(a,b,c){ya(a,{parser:function(a,d,e,f,g,h,i){var j=new ta(a,e,0,0,g,2,e,!1,c);return j.plugin=h,j.setRatio=b(a,d,f._tween,e),j},priority:c})},g.useSVGTransformAttr=!0;var Aa,Ba="scaleX,scaleY,scaleZ,x,y,z,skewX,skewY,rotation,rotationX,rotationY,perspective,xPercent,yPercent".split(","),Ca=Z("transform"),Da=X+"transform",Ea=Z("transformOrigin"),Fa=null!==Z("perspective"),Ga=S.Transform=function(){this.perspective=parseFloat(g.defaultTransformPerspective)||0,this.force3D=g.defaultForce3D!==!1&&Fa?g.defaultForce3D||"auto":!1},Ha=_gsScope.SVGElement,Ia=function(a,b,c){var d,e=O.createElementNS("http://www.w3.org/2000/svg",a),f=/([a-z])([A-Z])/g;for(d in c)e.setAttributeNS(null,d.replace(f,"$1-$2").toLowerCase(),c[d]);return b.appendChild(e),e},Ja=O.documentElement||{},Ka=function(){var a,b,c,d=p||/Android/i.test(T)&&!_gsScope.chrome;return O.createElementNS&&!d&&(a=Ia("svg",Ja),b=Ia("rect",a,{width:100,height:50,x:100}),c=b.getBoundingClientRect().width,b.style[Ea]="50% 50%",b.style[Ca]="scaleX(0.5)",d=c===b.getBoundingClientRect().width&&!(n&&Fa),Ja.removeChild(a)),d}(),La=function(a,b,c,d,e,f){var h,i,j,k,l,m,n,o,p,q,r,s,t,u,v=a._gsTransform,w=Qa(a,!0);v&&(t=v.xOrigin,u=v.yOrigin),(!d||(h=d.split(" ")).length<2)&&(n=a.getBBox(),0===n.x&&0===n.y&&n.width+n.height===0&&(n={x:parseFloat(a.hasAttribute("x")?a.getAttribute("x"):a.hasAttribute("cx")?a.getAttribute("cx"):0)||0,y:parseFloat(a.hasAttribute("y")?a.getAttribute("y"):a.hasAttribute("cy")?a.getAttribute("cy"):0)||0,width:0,height:0}),b=ha(b).split(" "),h=[(-1!==b[0].indexOf("%")?parseFloat(b[0])/100*n.width:parseFloat(b[0]))+n.x,(-1!==b[1].indexOf("%")?parseFloat(b[1])/100*n.height:parseFloat(b[1]))+n.y]),c.xOrigin=k=parseFloat(h[0]),c.yOrigin=l=parseFloat(h[1]),d&&w!==Pa&&(m=w[0],n=w[1],o=w[2],p=w[3],q=w[4],r=w[5],s=m*p-n*o,s&&(i=k*(p/s)+l*(-o/s)+(o*r-p*q)/s,j=k*(-n/s)+l*(m/s)-(m*r-n*q)/s,k=c.xOrigin=h[0]=i,l=c.yOrigin=h[1]=j)),v&&(f&&(c.xOffset=v.xOffset,c.yOffset=v.yOffset,v=c),e||e!==!1&&g.defaultSmoothOrigin!==!1?(i=k-t,j=l-u,v.xOffset+=i*w[0]+j*w[2]-i,v.yOffset+=i*w[1]+j*w[3]-j):v.xOffset=v.yOffset=0),f||a.setAttribute("data-svg-origin",h.join(" "))},Ma=function(a){var b,c=P("svg",this.ownerSVGElement.getAttribute("xmlns")||"http://www.w3.org/2000/svg"),d=this.parentNode,e=this.nextSibling,f=this.style.cssText;if(Ja.appendChild(c),c.appendChild(this),this.style.display="block",a)try{b=this.getBBox(),this._originalGetBBox=this.getBBox,this.getBBox=Ma}catch(g){}else this._originalGetBBox&&(b=this._originalGetBBox());return e?d.insertBefore(this,e):d.appendChild(this),Ja.removeChild(c),this.style.cssText=f,b},Na=function(a){try{return a.getBBox()}catch(b){return Ma.call(a,!0)}},Oa=function(a){return!(!(Ha&&a.getCTM&&Na(a))||a.parentNode&&!a.ownerSVGElement)},Pa=[1,0,0,1,0,0],Qa=function(a,b){var c,d,e,f,g,h,i=a._gsTransform||new Ga,j=1e5,k=a.style;if(Ca?d=_(a,Da,null,!0):a.currentStyle&&(d=a.currentStyle.filter.match(G),d=d&&4===d.length?[d[0].substr(4),Number(d[2].substr(4)),Number(d[1].substr(4)),d[3].substr(4),i.x||0,i.y||0].join(","):""),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,c&&Ca&&((h="none"===$(a).display)||!a.parentNode)&&(h&&(f=k.display,k.display="block"),a.parentNode||(g=1,Ja.appendChild(a)),d=_(a,Da,null,!0),c=!d||"none"===d||"matrix(1, 0, 0, 1, 0, 0)"===d,f?k.display=f:h&&Va(k,"display"),g&&Ja.removeChild(a)),(i.svg||a.getCTM&&Oa(a))&&(c&&-1!==(k[Ca]+"").indexOf("matrix")&&(d=k[Ca],c=0),e=a.getAttribute("transform"),c&&e&&(-1!==e.indexOf("matrix")?(d=e,c=0):-1!==e.indexOf("translate")&&(d="matrix(1,0,0,1,"+e.match(/(?:\-|\b)[\d\-\.e]+\b/gi).join(",")+")",c=0))),c)return Pa;for(e=(d||"").match(s)||[],wa=e.length;--wa>-1;)f=Number(e[wa]),e[wa]=(g=f-(f|=0))?(g*j+(0>g?-.5:.5)|0)/j+f:f;return b&&e.length>6?[e[0],e[1],e[4],e[5],e[12],e[13]]:e},Ra=S.getTransform=function(a,c,d,e){if(a._gsTransform&&d&&!e)return a._gsTransform;var f,h,i,j,k,l,m=d?a._gsTransform||new Ga:new Ga,n=m.scaleX<0,o=2e-5,p=1e5,q=Fa?parseFloat(_(a,Ea,c,!1,"0 0 0").split(" ")[2])||m.zOrigin||0:0,r=parseFloat(g.defaultTransformPerspective)||0;if(m.svg=!(!a.getCTM||!Oa(a)),m.svg&&(La(a,_(a,Ea,c,!1,"50% 50%")+"",m,a.getAttribute("data-svg-origin")),Aa=g.useSVGTransformAttr||Ka),f=Qa(a),f!==Pa){if(16===f.length){var s,t,u,v,w,x=f[0],y=f[1],z=f[2],A=f[3],B=f[4],C=f[5],D=f[6],E=f[7],F=f[8],G=f[9],H=f[10],I=f[12],J=f[13],K=f[14],M=f[11],N=Math.atan2(D,H);m.zOrigin&&(K=-m.zOrigin,I=F*K-f[12],J=G*K-f[13],K=H*K+m.zOrigin-f[14]),m.rotationX=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=B*v+F*w,t=C*v+G*w,u=D*v+H*w,F=B*-w+F*v,G=C*-w+G*v,H=D*-w+H*v,M=E*-w+M*v,B=s,C=t,D=u),N=Math.atan2(-z,H),m.rotationY=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),s=x*v-F*w,t=y*v-G*w,u=z*v-H*w,G=y*w+G*v,H=z*w+H*v,M=A*w+M*v,x=s,y=t,z=u),N=Math.atan2(y,x),m.rotation=N*L,N&&(v=Math.cos(-N),w=Math.sin(-N),x=x*v+B*w,t=y*v+C*w,C=y*-w+C*v,D=z*-w+D*v,y=t),m.rotationX&&Math.abs(m.rotationX)+Math.abs(m.rotation)>359.9&&(m.rotationX=m.rotation=0,m.rotationY=180-m.rotationY),m.scaleX=(Math.sqrt(x*x+y*y)*p+.5|0)/p,m.scaleY=(Math.sqrt(C*C+G*G)*p+.5|0)/p,m.scaleZ=(Math.sqrt(D*D+H*H)*p+.5|0)/p,m.rotationX||m.rotationY?m.skewX=0:(m.skewX=B||C?Math.atan2(B,C)*L+m.rotation:m.skewX||0,Math.abs(m.skewX)>90&&Math.abs(m.skewX)<270&&(n?(m.scaleX*=-1,m.skewX+=m.rotation<=0?180:-180,m.rotation+=m.rotation<=0?180:-180):(m.scaleY*=-1,m.skewX+=m.skewX<=0?180:-180))),m.perspective=M?1/(0>M?-M:M):0,m.x=I,m.y=J,m.z=K,m.svg&&(m.x-=m.xOrigin-(m.xOrigin*x-m.yOrigin*B),m.y-=m.yOrigin-(m.yOrigin*y-m.xOrigin*C))}else if(!Fa||e||!f.length||m.x!==f[4]||m.y!==f[5]||!m.rotationX&&!m.rotationY){var O=f.length>=6,P=O?f[0]:1,Q=f[1]||0,R=f[2]||0,S=O?f[3]:1;m.x=f[4]||0,m.y=f[5]||0,i=Math.sqrt(P*P+Q*Q),j=Math.sqrt(S*S+R*R),k=P||Q?Math.atan2(Q,P)*L:m.rotation||0,l=R||S?Math.atan2(R,S)*L+k:m.skewX||0,Math.abs(l)>90&&Math.abs(l)<270&&(n?(i*=-1,l+=0>=k?180:-180,k+=0>=k?180:-180):(j*=-1,l+=0>=l?180:-180)),m.scaleX=i,m.scaleY=j,m.rotation=k,m.skewX=l,Fa&&(m.rotationX=m.rotationY=m.z=0,m.perspective=r,m.scaleZ=1),m.svg&&(m.x-=m.xOrigin-(m.xOrigin*P+m.yOrigin*R),m.y-=m.yOrigin-(m.xOrigin*Q+m.yOrigin*S))}m.zOrigin=q;for(h in m)m[h]<o&&m[h]>-o&&(m[h]=0)}return d&&(a._gsTransform=m,m.svg&&(Aa&&a.style[Ca]?b.delayedCall(.001,function(){Va(a.style,Ca)}):!Aa&&a.getAttribute("transform")&&b.delayedCall(.001,function(){a.removeAttribute("transform")}))),m},Sa=function(a){var b,c,d=this.data,e=-d.rotation*K,f=e+d.skewX*K,g=1e5,h=(Math.cos(e)*d.scaleX*g|0)/g,i=(Math.sin(e)*d.scaleX*g|0)/g,j=(Math.sin(f)*-d.scaleY*g|0)/g,k=(Math.cos(f)*d.scaleY*g|0)/g,l=this.t.style,m=this.t.currentStyle;if(m){c=i,i=-j,j=-c,b=m.filter,l.filter="";var n,o,q=this.t.offsetWidth,r=this.t.offsetHeight,s="absolute"!==m.position,t="progid:DXImageTransform.Microsoft.Matrix(M11="+h+", M12="+i+", M21="+j+", M22="+k,u=d.x+q*d.xPercent/100,v=d.y+r*d.yPercent/100;if(null!=d.ox&&(n=(d.oxp?q*d.ox*.01:d.ox)-q/2,o=(d.oyp?r*d.oy*.01:d.oy)-r/2,u+=n-(n*h+o*i),v+=o-(n*j+o*k)),s?(n=q/2,o=r/2,t+=", Dx="+(n-(n*h+o*i)+u)+", Dy="+(o-(n*j+o*k)+v)+")"):t+=", sizingMethod='auto expand')",-1!==b.indexOf("DXImageTransform.Microsoft.Matrix(")?l.filter=b.replace(H,t):l.filter=t+" "+b,(0===a||1===a)&&1===h&&0===i&&0===j&&1===k&&(s&&-1===t.indexOf("Dx=0, Dy=0")||x.test(b)&&100!==parseFloat(RegExp.$1)||-1===b.indexOf(b.indexOf("Alpha"))&&l.removeAttribute("filter")),!s){var y,z,A,B=8>p?1:-1;for(n=d.ieOffsetX||0,o=d.ieOffsetY||0,d.ieOffsetX=Math.round((q-((0>h?-h:h)*q+(0>i?-i:i)*r))/2+u),d.ieOffsetY=Math.round((r-((0>k?-k:k)*r+(0>j?-j:j)*q))/2+v),wa=0;4>wa;wa++)z=fa[wa],y=m[z],c=-1!==y.indexOf("px")?parseFloat(y):aa(this.t,z,parseFloat(y),y.replace(w,""))||0,A=c!==d[z]?2>wa?-d.ieOffsetX:-d.ieOffsetY:2>wa?n-d.ieOffsetX:o-d.ieOffsetY,l[z]=(d[z]=Math.round(c-A*(0===wa||2===wa?1:B)))+"px"}}},Ta=S.set3DTransformRatio=S.setTransformRatio=function(a){var b,c,d,e,f,g,h,i,j,k,l,m,o,p,q,r,s,t,u,v,w,x,y,z=this.data,A=this.t.style,B=z.rotation,C=z.rotationX,D=z.rotationY,E=z.scaleX,F=z.scaleY,G=z.scaleZ,H=z.x,I=z.y,J=z.z,L=z.svg,M=z.perspective,N=z.force3D,O=z.skewY,P=z.skewX;if(O&&(P+=O,B+=O),((1===a||0===a)&&"auto"===N&&(this.tween._totalTime===this.tween._totalDuration||!this.tween._totalTime)||!N)&&!J&&!M&&!D&&!C&&1===G||Aa&&L||!Fa)return void(B||P||L?(B*=K,x=P*K,y=1e5,c=Math.cos(B)*E,f=Math.sin(B)*E,d=Math.sin(B-x)*-F,g=Math.cos(B-x)*F,x&&"simple"===z.skewType&&(b=Math.tan(x-O*K),b=Math.sqrt(1+b*b),d*=b,g*=b,O&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b)),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset,Aa&&(z.xPercent||z.yPercent)&&(q=this.t.getBBox(),H+=.01*z.xPercent*q.width,I+=.01*z.yPercent*q.height),q=1e-6,q>H&&H>-q&&(H=0),q>I&&I>-q&&(I=0)),u=(c*y|0)/y+","+(f*y|0)/y+","+(d*y|0)/y+","+(g*y|0)/y+","+H+","+I+")",L&&Aa?this.t.setAttribute("transform","matrix("+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+u):A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix(":"matrix(")+E+",0,0,"+F+","+H+","+I+")");if(n&&(q=1e-4,q>E&&E>-q&&(E=G=2e-5),q>F&&F>-q&&(F=G=2e-5),!M||z.z||z.rotationX||z.rotationY||(M=0)),B||P)B*=K,r=c=Math.cos(B),s=f=Math.sin(B),P&&(B-=P*K,r=Math.cos(B),s=Math.sin(B),"simple"===z.skewType&&(b=Math.tan((P-O)*K),b=Math.sqrt(1+b*b),r*=b,s*=b,z.skewY&&(b=Math.tan(O*K),b=Math.sqrt(1+b*b),c*=b,f*=b))),d=-s,g=r;else{if(!(D||C||1!==G||M||L))return void(A[Ca]=(z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) translate3d(":"translate3d(")+H+"px,"+I+"px,"+J+"px)"+(1!==E||1!==F?" scale("+E+","+F+")":""));c=g=1,d=f=0}k=1,e=h=i=j=l=m=0,o=M?-1/M:0,p=z.zOrigin,q=1e-6,v=",",w="0",B=D*K,B&&(r=Math.cos(B),s=Math.sin(B),i=-s,l=o*-s,e=c*s,h=f*s,k=r,o*=r,c*=r,f*=r),B=C*K,B&&(r=Math.cos(B),s=Math.sin(B),b=d*r+e*s,t=g*r+h*s,j=k*s,m=o*s,e=d*-s+e*r,h=g*-s+h*r,k*=r,o*=r,d=b,g=t),1!==G&&(e*=G,h*=G,k*=G,o*=G),1!==F&&(d*=F,g*=F,j*=F,m*=F),1!==E&&(c*=E,f*=E,i*=E,l*=E),(p||L)&&(p&&(H+=e*-p,I+=h*-p,J+=k*-p+p),L&&(H+=z.xOrigin-(z.xOrigin*c+z.yOrigin*d)+z.xOffset,I+=z.yOrigin-(z.xOrigin*f+z.yOrigin*g)+z.yOffset),q>H&&H>-q&&(H=w),q>I&&I>-q&&(I=w),q>J&&J>-q&&(J=0)),u=z.xPercent||z.yPercent?"translate("+z.xPercent+"%,"+z.yPercent+"%) matrix3d(":"matrix3d(",u+=(q>c&&c>-q?w:c)+v+(q>f&&f>-q?w:f)+v+(q>i&&i>-q?w:i),u+=v+(q>l&&l>-q?w:l)+v+(q>d&&d>-q?w:d)+v+(q>g&&g>-q?w:g),C||D||1!==G?(u+=v+(q>j&&j>-q?w:j)+v+(q>m&&m>-q?w:m)+v+(q>e&&e>-q?w:e),u+=v+(q>h&&h>-q?w:h)+v+(q>k&&k>-q?w:k)+v+(q>o&&o>-q?w:o)+v):u+=",0,0,0,0,1,0,",u+=H+v+I+v+J+v+(M?1+-J/M:1)+")",A[Ca]=u};j=Ga.prototype,j.x=j.y=j.z=j.skewX=j.skewY=j.rotation=j.rotationX=j.rotationY=j.zOrigin=j.xPercent=j.yPercent=j.xOffset=j.yOffset=0,j.scaleX=j.scaleY=j.scaleZ=1,ya("transform,scale,scaleX,scaleY,scaleZ,x,y,z,rotation,rotationX,rotationY,rotationZ,skewX,skewY,shortRotation,shortRotationX,shortRotationY,shortRotationZ,transformOrigin,svgOrigin,transformPerspective,directionalRotation,parseTransform,force3D,skewType,xPercent,yPercent,smoothOrigin",{parser:function(a,b,c,d,f,h,i){if(d._lastParsedTransform===i)return f;d._lastParsedTransform=i;var j,k=i.scale&&"function"==typeof i.scale?i.scale:0;"function"==typeof i[c]&&(j=i[c],i[c]=b),k&&(i.scale=k(r,a));var l,m,n,o,p,s,t,u,v,w=a._gsTransform,x=a.style,y=1e-6,z=Ba.length,A=i,B={},C="transformOrigin",D=Ra(a,e,!0,A.parseTransform),E=A.transform&&("function"==typeof A.transform?A.transform(r,q):A.transform);if(d._transform=D,E&&"string"==typeof E&&Ca)m=Q.style,m[Ca]=E,m.display="block",m.position="absolute",O.body.appendChild(Q),l=Ra(Q,null,!1),D.svg&&(s=D.xOrigin,t=D.yOrigin,l.x-=D.xOffset,l.y-=D.yOffset,(A.transformOrigin||A.svgOrigin)&&(E={},La(a,ha(A.transformOrigin),E,A.svgOrigin,A.smoothOrigin,!0),s=E.xOrigin,t=E.yOrigin,l.x-=E.xOffset-D.xOffset,l.y-=E.yOffset-D.yOffset),(s||t)&&(u=Qa(Q,!0),l.x-=s-(s*u[0]+t*u[2]),l.y-=t-(s*u[1]+t*u[3]))),O.body.removeChild(Q),l.perspective||(l.perspective=D.perspective),null!=A.xPercent&&(l.xPercent=ja(A.xPercent,D.xPercent)),null!=A.yPercent&&(l.yPercent=ja(A.yPercent,D.yPercent));else if("object"==typeof A){if(l={scaleX:ja(null!=A.scaleX?A.scaleX:A.scale,D.scaleX),scaleY:ja(null!=A.scaleY?A.scaleY:A.scale,D.scaleY),scaleZ:ja(A.scaleZ,D.scaleZ),x:ja(A.x,D.x),y:ja(A.y,D.y),z:ja(A.z,D.z),xPercent:ja(A.xPercent,D.xPercent),
yPercent:ja(A.yPercent,D.yPercent),perspective:ja(A.transformPerspective,D.perspective)},p=A.directionalRotation,null!=p)if("object"==typeof p)for(m in p)A[m]=p[m];else A.rotation=p;"string"==typeof A.x&&-1!==A.x.indexOf("%")&&(l.x=0,l.xPercent=ja(A.x,D.xPercent)),"string"==typeof A.y&&-1!==A.y.indexOf("%")&&(l.y=0,l.yPercent=ja(A.y,D.yPercent)),l.rotation=ka("rotation"in A?A.rotation:"shortRotation"in A?A.shortRotation+"_short":"rotationZ"in A?A.rotationZ:D.rotation,D.rotation,"rotation",B),Fa&&(l.rotationX=ka("rotationX"in A?A.rotationX:"shortRotationX"in A?A.shortRotationX+"_short":D.rotationX||0,D.rotationX,"rotationX",B),l.rotationY=ka("rotationY"in A?A.rotationY:"shortRotationY"in A?A.shortRotationY+"_short":D.rotationY||0,D.rotationY,"rotationY",B)),l.skewX=ka(A.skewX,D.skewX),l.skewY=ka(A.skewY,D.skewY)}for(Fa&&null!=A.force3D&&(D.force3D=A.force3D,o=!0),D.skewType=A.skewType||D.skewType||g.defaultSkewType,n=D.force3D||D.z||D.rotationX||D.rotationY||l.z||l.rotationX||l.rotationY||l.perspective,n||null==A.scale||(l.scaleZ=1);--z>-1;)v=Ba[z],E=l[v]-D[v],(E>y||-y>E||null!=A[v]||null!=M[v])&&(o=!0,f=new ta(D,v,D[v],E,f),v in B&&(f.e=B[v]),f.xs0=0,f.plugin=h,d._overwriteProps.push(f.n));return E=A.transformOrigin,D.svg&&(E||A.svgOrigin)&&(s=D.xOffset,t=D.yOffset,La(a,ha(E),l,A.svgOrigin,A.smoothOrigin),f=ua(D,"xOrigin",(w?D:l).xOrigin,l.xOrigin,f,C),f=ua(D,"yOrigin",(w?D:l).yOrigin,l.yOrigin,f,C),(s!==D.xOffset||t!==D.yOffset)&&(f=ua(D,"xOffset",w?s:D.xOffset,D.xOffset,f,C),f=ua(D,"yOffset",w?t:D.yOffset,D.yOffset,f,C)),E="0px 0px"),(E||Fa&&n&&D.zOrigin)&&(Ca?(o=!0,v=Ea,E=(E||_(a,v,e,!1,"50% 50%"))+"",f=new ta(x,v,0,0,f,-1,C),f.b=x[v],f.plugin=h,Fa?(m=D.zOrigin,E=E.split(" "),D.zOrigin=(E.length>2&&(0===m||"0px"!==E[2])?parseFloat(E[2]):m)||0,f.xs0=f.e=E[0]+" "+(E[1]||"50%")+" 0px",f=new ta(D,"zOrigin",0,0,f,-1,f.n),f.b=m,f.xs0=f.e=D.zOrigin):f.xs0=f.e=E):ha(E+"",D)),o&&(d._transformType=D.svg&&Aa||!n&&3!==this._transformType?2:3),j&&(i[c]=j),k&&(i.scale=k),f},prefix:!0}),ya("boxShadow",{defaultValue:"0px 0px 0px 0px #999",prefix:!0,color:!0,multi:!0,keyword:"inset"}),ya("borderRadius",{defaultValue:"0px",parser:function(a,b,c,f,g,h){b=this.format(b);var i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y=["borderTopLeftRadius","borderTopRightRadius","borderBottomRightRadius","borderBottomLeftRadius"],z=a.style;for(q=parseFloat(a.offsetWidth),r=parseFloat(a.offsetHeight),i=b.split(" "),j=0;j<y.length;j++)this.p.indexOf("border")&&(y[j]=Z(y[j])),m=l=_(a,y[j],e,!1,"0px"),-1!==m.indexOf(" ")&&(l=m.split(" "),m=l[0],l=l[1]),n=k=i[j],o=parseFloat(m),t=m.substr((o+"").length),u="="===n.charAt(1),u?(p=parseInt(n.charAt(0)+"1",10),n=n.substr(2),p*=parseFloat(n),s=n.substr((p+"").length-(0>p?1:0))||""):(p=parseFloat(n),s=n.substr((p+"").length)),""===s&&(s=d[c]||t),s!==t&&(v=aa(a,"borderLeft",o,t),w=aa(a,"borderTop",o,t),"%"===s?(m=v/q*100+"%",l=w/r*100+"%"):"em"===s?(x=aa(a,"borderLeft",1,"em"),m=v/x+"em",l=w/x+"em"):(m=v+"px",l=w+"px"),u&&(n=parseFloat(m)+p+s,k=parseFloat(l)+p+s)),g=va(z,y[j],m+" "+l,n+" "+k,!1,"0px",g);return g},prefix:!0,formatter:qa("0px 0px 0px 0px",!1,!0)}),ya("borderBottomLeftRadius,borderBottomRightRadius,borderTopLeftRadius,borderTopRightRadius",{defaultValue:"0px",parser:function(a,b,c,d,f,g){return va(a.style,c,this.format(_(a,c,e,!1,"0px 0px")),this.format(b),!1,"0px",f)},prefix:!0,formatter:qa("0px 0px",!1,!0)}),ya("backgroundPosition",{defaultValue:"0 0",parser:function(a,b,c,d,f,g){var h,i,j,k,l,m,n="background-position",o=e||$(a,null),q=this.format((o?p?o.getPropertyValue(n+"-x")+" "+o.getPropertyValue(n+"-y"):o.getPropertyValue(n):a.currentStyle.backgroundPositionX+" "+a.currentStyle.backgroundPositionY)||"0 0"),r=this.format(b);if(-1!==q.indexOf("%")!=(-1!==r.indexOf("%"))&&r.split(",").length<2&&(m=_(a,"backgroundImage").replace(D,""),m&&"none"!==m)){for(h=q.split(" "),i=r.split(" "),R.setAttribute("src",m),j=2;--j>-1;)q=h[j],k=-1!==q.indexOf("%"),k!==(-1!==i[j].indexOf("%"))&&(l=0===j?a.offsetWidth-R.width:a.offsetHeight-R.height,h[j]=k?parseFloat(q)/100*l+"px":parseFloat(q)/l*100+"%");q=h.join(" ")}return this.parseComplex(a.style,q,r,f,g)},formatter:ha}),ya("backgroundSize",{defaultValue:"0 0",formatter:function(a){return a+="",ha(-1===a.indexOf(" ")?a+" "+a:a)}}),ya("perspective",{defaultValue:"0px",prefix:!0}),ya("perspectiveOrigin",{defaultValue:"50% 50%",prefix:!0}),ya("transformStyle",{prefix:!0}),ya("backfaceVisibility",{prefix:!0}),ya("userSelect",{prefix:!0}),ya("margin",{parser:ra("marginTop,marginRight,marginBottom,marginLeft")}),ya("padding",{parser:ra("paddingTop,paddingRight,paddingBottom,paddingLeft")}),ya("clip",{defaultValue:"rect(0px,0px,0px,0px)",parser:function(a,b,c,d,f,g){var h,i,j;return 9>p?(i=a.currentStyle,j=8>p?" ":",",h="rect("+i.clipTop+j+i.clipRight+j+i.clipBottom+j+i.clipLeft+")",b=this.format(b).split(",").join(j)):(h=this.format(_(a,this.p,e,!1,this.dflt)),b=this.format(b)),this.parseComplex(a.style,h,b,f,g)}}),ya("textShadow",{defaultValue:"0px 0px 0px #999",color:!0,multi:!0}),ya("autoRound,strictUnits",{parser:function(a,b,c,d,e){return e}}),ya("border",{defaultValue:"0px solid #000",parser:function(a,b,c,d,f,g){var h=_(a,"borderTopWidth",e,!1,"0px"),i=this.format(b).split(" "),j=i[0].replace(w,"");return"px"!==j&&(h=parseFloat(h)/aa(a,"borderTopWidth",1,j)+j),this.parseComplex(a.style,this.format(h+" "+_(a,"borderTopStyle",e,!1,"solid")+" "+_(a,"borderTopColor",e,!1,"#000")),i.join(" "),f,g)},color:!0,formatter:function(a){var b=a.split(" ");return b[0]+" "+(b[1]||"solid")+" "+(a.match(pa)||["#000"])[0]}}),ya("borderWidth",{parser:ra("borderTopWidth,borderRightWidth,borderBottomWidth,borderLeftWidth")}),ya("float,cssFloat,styleFloat",{parser:function(a,b,c,d,e,f){var g=a.style,h="cssFloat"in g?"cssFloat":"styleFloat";return new ta(g,h,0,0,e,-1,c,!1,0,g[h],b)}});var Ua=function(a){var b,c=this.t,d=c.filter||_(this.data,"filter")||"",e=this.s+this.c*a|0;100===e&&(-1===d.indexOf("atrix(")&&-1===d.indexOf("radient(")&&-1===d.indexOf("oader(")?(c.removeAttribute("filter"),b=!_(this.data,"filter")):(c.filter=d.replace(z,""),b=!0)),b||(this.xn1&&(c.filter=d=d||"alpha(opacity="+e+")"),-1===d.indexOf("pacity")?0===e&&this.xn1||(c.filter=d+" alpha(opacity="+e+")"):c.filter=d.replace(x,"opacity="+e))};ya("opacity,alpha,autoAlpha",{defaultValue:"1",parser:function(a,b,c,d,f,g){var h=parseFloat(_(a,"opacity",e,!1,"1")),i=a.style,j="autoAlpha"===c;return"string"==typeof b&&"="===b.charAt(1)&&(b=("-"===b.charAt(0)?-1:1)*parseFloat(b.substr(2))+h),j&&1===h&&"hidden"===_(a,"visibility",e)&&0!==b&&(h=0),U?f=new ta(i,"opacity",h,b-h,f):(f=new ta(i,"opacity",100*h,100*(b-h),f),f.xn1=j?1:0,i.zoom=1,f.type=2,f.b="alpha(opacity="+f.s+")",f.e="alpha(opacity="+(f.s+f.c)+")",f.data=a,f.plugin=g,f.setRatio=Ua),j&&(f=new ta(i,"visibility",0,0,f,-1,null,!1,0,0!==h?"inherit":"hidden",0===b?"hidden":"inherit"),f.xs0="inherit",d._overwriteProps.push(f.n),d._overwriteProps.push(c)),f}});var Va=function(a,b){b&&(a.removeProperty?(("ms"===b.substr(0,2)||"webkit"===b.substr(0,6))&&(b="-"+b),a.removeProperty(b.replace(B,"-$1").toLowerCase())):a.removeAttribute(b))},Wa=function(a){if(this.t._gsClassPT=this,1===a||0===a){this.t.setAttribute("class",0===a?this.b:this.e);for(var b=this.data,c=this.t.style;b;)b.v?c[b.p]=b.v:Va(c,b.p),b=b._next;1===a&&this.t._gsClassPT===this&&(this.t._gsClassPT=null)}else this.t.getAttribute("class")!==this.e&&this.t.setAttribute("class",this.e)};ya("className",{parser:function(a,b,d,f,g,h,i){var j,k,l,m,n,o=a.getAttribute("class")||"",p=a.style.cssText;if(g=f._classNamePT=new ta(a,d,0,0,g,2),g.setRatio=Wa,g.pr=-11,c=!0,g.b=o,k=ca(a,e),l=a._gsClassPT){for(m={},n=l.data;n;)m[n.p]=1,n=n._next;l.setRatio(1)}return a._gsClassPT=g,g.e="="!==b.charAt(1)?b:o.replace(new RegExp("(?:\\s|^)"+b.substr(2)+"(?![\\w-])"),"")+("+"===b.charAt(0)?" "+b.substr(2):""),a.setAttribute("class",g.e),j=da(a,k,ca(a),i,m),a.setAttribute("class",o),g.data=j.firstMPT,a.style.cssText=p,g=g.xfirst=f.parse(a,j.difs,g,h)}});var Xa=function(a){if((1===a||0===a)&&this.data._totalTime===this.data._totalDuration&&"isFromStart"!==this.data.data){var b,c,d,e,f,g=this.t.style,h=i.transform.parse;if("all"===this.e)g.cssText="",e=!0;else for(b=this.e.split(" ").join("").split(","),d=b.length;--d>-1;)c=b[d],i[c]&&(i[c].parse===h?e=!0:c="transformOrigin"===c?Ea:i[c].p),Va(g,c);e&&(Va(g,Ca),f=this.t._gsTransform,f&&(f.svg&&(this.t.removeAttribute("data-svg-origin"),this.t.removeAttribute("transform")),delete this.t._gsTransform))}};for(ya("clearProps",{parser:function(a,b,d,e,f){return f=new ta(a,d,0,0,f,2),f.setRatio=Xa,f.e=b,f.pr=-10,f.data=e._tween,c=!0,f}}),j="bezier,throwProps,physicsProps,physics2D".split(","),wa=j.length;wa--;)za(j[wa]);j=g.prototype,j._firstPT=j._lastParsedTransform=j._transform=null,j._onInitTween=function(a,b,h,j){if(!a.nodeType)return!1;this._target=q=a,this._tween=h,this._vars=b,r=j,k=b.autoRound,c=!1,d=b.suffixMap||g.suffixMap,e=$(a,""),f=this._overwriteProps;var n,p,s,t,u,v,w,x,z,A=a.style;if(l&&""===A.zIndex&&(n=_(a,"zIndex",e),("auto"===n||""===n)&&this._addLazySet(A,"zIndex",0)),"string"==typeof b&&(t=A.cssText,n=ca(a,e),A.cssText=t+";"+b,n=da(a,n,ca(a)).difs,!U&&y.test(b)&&(n.opacity=parseFloat(RegExp.$1)),b=n,A.cssText=t),b.className?this._firstPT=p=i.className.parse(a,b.className,"className",this,null,null,b):this._firstPT=p=this.parse(a,b,null),this._transformType){for(z=3===this._transformType,Ca?m&&(l=!0,""===A.zIndex&&(w=_(a,"zIndex",e),("auto"===w||""===w)&&this._addLazySet(A,"zIndex",0)),o&&this._addLazySet(A,"WebkitBackfaceVisibility",this._vars.WebkitBackfaceVisibility||(z?"visible":"hidden"))):A.zoom=1,s=p;s&&s._next;)s=s._next;x=new ta(a,"transform",0,0,null,2),this._linkCSSP(x,null,s),x.setRatio=Ca?Ta:Sa,x.data=this._transform||Ra(a,e,!0),x.tween=h,x.pr=-1,f.pop()}if(c){for(;p;){for(v=p._next,s=t;s&&s.pr>p.pr;)s=s._next;(p._prev=s?s._prev:u)?p._prev._next=p:t=p,(p._next=s)?s._prev=p:u=p,p=v}this._firstPT=t}return!0},j.parse=function(a,b,c,f){var g,h,j,l,m,n,o,p,s,t,u=a.style;for(g in b)n=b[g],"function"==typeof n&&(n=n(r,q)),h=i[g],h?c=h.parse(a,n,g,this,c,f,b):(m=_(a,g,e)+"",s="string"==typeof n,"color"===g||"fill"===g||"stroke"===g||-1!==g.indexOf("Color")||s&&A.test(n)?(s||(n=na(n),n=(n.length>3?"rgba(":"rgb(")+n.join(",")+")"),c=va(u,g,m,n,!0,"transparent",c,0,f)):s&&J.test(n)?c=va(u,g,m,n,!0,null,c,0,f):(j=parseFloat(m),o=j||0===j?m.substr((j+"").length):"",(""===m||"auto"===m)&&("width"===g||"height"===g?(j=ga(a,g,e),o="px"):"left"===g||"top"===g?(j=ba(a,g,e),o="px"):(j="opacity"!==g?0:1,o="")),t=s&&"="===n.charAt(1),t?(l=parseInt(n.charAt(0)+"1",10),n=n.substr(2),l*=parseFloat(n),p=n.replace(w,"")):(l=parseFloat(n),p=s?n.replace(w,""):""),""===p&&(p=g in d?d[g]:o),n=l||0===l?(t?l+j:l)+p:b[g],o!==p&&""!==p&&(l||0===l)&&j&&(j=aa(a,g,j,o),"%"===p?(j/=aa(a,g,100,"%")/100,b.strictUnits!==!0&&(m=j+"%")):"em"===p||"rem"===p||"vw"===p||"vh"===p?j/=aa(a,g,1,p):"px"!==p&&(l=aa(a,g,l,p),p="px"),t&&(l||0===l)&&(n=l+j+p)),t&&(l+=j),!j&&0!==j||!l&&0!==l?void 0!==u[g]&&(n||n+""!="NaN"&&null!=n)?(c=new ta(u,g,l||j||0,0,c,-1,g,!1,0,m,n),c.xs0="none"!==n||"display"!==g&&-1===g.indexOf("Style")?n:m):W("invalid "+g+" tween value: "+b[g]):(c=new ta(u,g,j,l-j,c,0,g,k!==!1&&("px"===p||"zIndex"===g),0,m,n),c.xs0=p))),f&&c&&!c.plugin&&(c.plugin=f);return c},j.setRatio=function(a){var b,c,d,e=this._firstPT,f=1e-6;if(1!==a||this._tween._time!==this._tween._duration&&0!==this._tween._time)if(a||this._tween._time!==this._tween._duration&&0!==this._tween._time||this._tween._rawPrevTime===-1e-6)for(;e;){if(b=e.c*a+e.s,e.r?b=Math.round(b):f>b&&b>-f&&(b=0),e.type)if(1===e.type)if(d=e.l,2===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2;else if(3===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3;else if(4===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4;else if(5===d)e.t[e.p]=e.xs0+b+e.xs1+e.xn1+e.xs2+e.xn2+e.xs3+e.xn3+e.xs4+e.xn4+e.xs5;else{for(c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}else-1===e.type?e.t[e.p]=e.xs0:e.setRatio&&e.setRatio(a);else e.t[e.p]=b+e.xs0;e=e._next}else for(;e;)2!==e.type?e.t[e.p]=e.b:e.setRatio(a),e=e._next;else for(;e;){if(2!==e.type)if(e.r&&-1!==e.type)if(b=Math.round(e.s+e.c),e.type){if(1===e.type){for(d=e.l,c=e.xs0+b+e.xs1,d=1;d<e.l;d++)c+=e["xn"+d]+e["xs"+(d+1)];e.t[e.p]=c}}else e.t[e.p]=b+e.xs0;else e.t[e.p]=e.e;else e.setRatio(a);e=e._next}},j._enableTransforms=function(a){this._transform=this._transform||Ra(this._target,e,!0),this._transformType=this._transform.svg&&Aa||!a&&3!==this._transformType?2:3};var Ya=function(a){this.t[this.p]=this.e,this.data._linkCSSP(this,this._next,null,!0)};j._addLazySet=function(a,b,c){var d=this._firstPT=new ta(a,b,0,0,this._firstPT,2);d.e=c,d.setRatio=Ya,d.data=this},j._linkCSSP=function(a,b,c,d){return a&&(b&&(b._prev=a),a._next&&(a._next._prev=a._prev),a._prev?a._prev._next=a._next:this._firstPT===a&&(this._firstPT=a._next,d=!0),c?c._next=a:d||null!==this._firstPT||(this._firstPT=a),a._next=b,a._prev=c),a},j._mod=function(a){for(var b=this._firstPT;b;)"function"==typeof a[b.p]&&a[b.p]===Math.round&&(b.r=1),b=b._next},j._kill=function(b){var c,d,e,f=b;if(b.autoAlpha||b.alpha){f={};for(d in b)f[d]=b[d];f.opacity=1,f.autoAlpha&&(f.visibility=1)}for(b.className&&(c=this._classNamePT)&&(e=c.xfirst,e&&e._prev?this._linkCSSP(e._prev,c._next,e._prev._prev):e===this._firstPT&&(this._firstPT=c._next),c._next&&this._linkCSSP(c._next,c._next._next,e._prev),this._classNamePT=null),c=this._firstPT;c;)c.plugin&&c.plugin!==d&&c.plugin._kill&&(c.plugin._kill(b),d=c.plugin),c=c._next;return a.prototype._kill.call(this,f)};var Za=function(a,b,c){var d,e,f,g;if(a.slice)for(e=a.length;--e>-1;)Za(a[e],b,c);else for(d=a.childNodes,e=d.length;--e>-1;)f=d[e],g=f.type,f.style&&(b.push(ca(f)),c&&c.push(f)),1!==g&&9!==g&&11!==g||!f.childNodes.length||Za(f,b,c)};return g.cascadeTo=function(a,c,d){var e,f,g,h,i=b.to(a,c,d),j=[i],k=[],l=[],m=[],n=b._internals.reservedProps;for(a=i._targets||i.target,Za(a,k,m),i.render(c,!0,!0),Za(a,l),i.render(0,!0,!0),i._enabled(!0),e=m.length;--e>-1;)if(f=da(m[e],k[e],l[e]),f.firstMPT){f=f.difs;for(g in d)n[g]&&(f[g]=d[g]);h={};for(g in f)h[g]=k[e][g];j.push(b.fromTo(m[e],c,h,f))}return j},a.activate([g]),g},!0),function(){var a=_gsScope._gsDefine.plugin({propName:"roundProps",version:"1.6.0",priority:-1,API:2,init:function(a,b,c){return this._tween=c,!0}}),b=function(a){for(;a;)a.f||a.blob||(a.m=Math.round),a=a._next},c=a.prototype;c._onInitAllProps=function(){for(var a,c,d,e=this._tween,f=e.vars.roundProps.join?e.vars.roundProps:e.vars.roundProps.split(","),g=f.length,h={},i=e._propLookup.roundProps;--g>-1;)h[f[g]]=Math.round;for(g=f.length;--g>-1;)for(a=f[g],c=e._firstPT;c;)d=c._next,c.pg?c.t._mod(h):c.n===a&&(2===c.f&&c.t?b(c.t._firstPT):(this._add(c.t,a,c.s,c.c),d&&(d._prev=c._prev),c._prev?c._prev._next=d:e._firstPT===c&&(e._firstPT=d),c._next=c._prev=null,e._propLookup[a]=i)),c=d;return!1},c._add=function(a,b,c,d){this._addTween(a,b,c,c+d,b,Math.round),this._overwriteProps.push(b)}}(),function(){_gsScope._gsDefine.plugin({propName:"attr",API:2,version:"0.6.0",init:function(a,b,c,d){var e,f;if("function"!=typeof a.setAttribute)return!1;for(e in b)f=b[e],"function"==typeof f&&(f=f(d,a)),this._addTween(a,"setAttribute",a.getAttribute(e)+"",f+"",e,!1,e),this._overwriteProps.push(e);return!0}})}(),_gsScope._gsDefine.plugin({propName:"directionalRotation",version:"0.3.0",API:2,init:function(a,b,c,d){"object"!=typeof b&&(b={rotation:b}),this.finals={};var e,f,g,h,i,j,k=b.useRadians===!0?2*Math.PI:360,l=1e-6;for(e in b)"useRadians"!==e&&(h=b[e],"function"==typeof h&&(h=h(d,a)),j=(h+"").split("_"),f=j[0],g=parseFloat("function"!=typeof a[e]?a[e]:a[e.indexOf("set")||"function"!=typeof a["get"+e.substr(3)]?e:"get"+e.substr(3)]()),h=this.finals[e]="string"==typeof f&&"="===f.charAt(1)?g+parseInt(f.charAt(0)+"1",10)*Number(f.substr(2)):Number(f)||0,i=h-g,j.length&&(f=j.join("_"),-1!==f.indexOf("short")&&(i%=k,i!==i%(k/2)&&(i=0>i?i+k:i-k)),-1!==f.indexOf("_cw")&&0>i?i=(i+9999999999*k)%k-(i/k|0)*k:-1!==f.indexOf("ccw")&&i>0&&(i=(i-9999999999*k)%k-(i/k|0)*k)),(i>l||-l>i)&&(this._addTween(a,e,g,g+i,e),this._overwriteProps.push(e)));return!0},set:function(a){var b;if(1!==a)this._super.setRatio.call(this,a);else for(b=this._firstPT;b;)b.f?b.t[b.p](this.finals[b.p]):b.t[b.p]=this.finals[b.p],b=b._next}})._autoCSS=!0,_gsScope._gsDefine("easing.Back",["easing.Ease"],function(a){var b,c,d,e=_gsScope.GreenSockGlobals||_gsScope,f=e.com.greensock,g=2*Math.PI,h=Math.PI/2,i=f._class,j=function(b,c){var d=i("easing."+b,function(){},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,d},k=a.register||function(){},l=function(a,b,c,d,e){var f=i("easing."+a,{easeOut:new b,easeIn:new c,easeInOut:new d},!0);return k(f,a),f},m=function(a,b,c){this.t=a,this.v=b,c&&(this.next=c,c.prev=this,this.c=c.v-b,this.gap=c.t-a)},n=function(b,c){var d=i("easing."+b,function(a){this._p1=a||0===a?a:1.70158,this._p2=1.525*this._p1},!0),e=d.prototype=new a;return e.constructor=d,e.getRatio=c,e.config=function(a){return new d(a)},d},o=l("Back",n("BackOut",function(a){return(a-=1)*a*((this._p1+1)*a+this._p1)+1}),n("BackIn",function(a){return a*a*((this._p1+1)*a-this._p1)}),n("BackInOut",function(a){return(a*=2)<1?.5*a*a*((this._p2+1)*a-this._p2):.5*((a-=2)*a*((this._p2+1)*a+this._p2)+2)})),p=i("easing.SlowMo",function(a,b,c){b=b||0===b?b:.7,null==a?a=.7:a>1&&(a=1),this._p=1!==a?b:0,this._p1=(1-a)/2,this._p2=a,this._p3=this._p1+this._p2,this._calcEnd=c===!0},!0),q=p.prototype=new a;return q.constructor=p,q.getRatio=function(a){var b=a+(.5-a)*this._p;return a<this._p1?this._calcEnd?1-(a=1-a/this._p1)*a:b-(a=1-a/this._p1)*a*a*a*b:a>this._p3?this._calcEnd?1-(a=(a-this._p3)/this._p1)*a:b+(a-b)*(a=(a-this._p3)/this._p1)*a*a*a:this._calcEnd?1:b},p.ease=new p(.7,.7),q.config=p.config=function(a,b,c){return new p(a,b,c)},b=i("easing.SteppedEase",function(a){a=a||1,this._p1=1/a,this._p2=a+1},!0),q=b.prototype=new a,q.constructor=b,q.getRatio=function(a){return 0>a?a=0:a>=1&&(a=.999999999),(this._p2*a>>0)*this._p1},q.config=b.config=function(a){return new b(a)},c=i("easing.RoughEase",function(b){b=b||{};for(var c,d,e,f,g,h,i=b.taper||"none",j=[],k=0,l=0|(b.points||20),n=l,o=b.randomize!==!1,p=b.clamp===!0,q=b.template instanceof a?b.template:null,r="number"==typeof b.strength?.4*b.strength:.4;--n>-1;)c=o?Math.random():1/l*n,d=q?q.getRatio(c):c,"none"===i?e=r:"out"===i?(f=1-c,e=f*f*r):"in"===i?e=c*c*r:.5>c?(f=2*c,e=f*f*.5*r):(f=2*(1-c),e=f*f*.5*r),o?d+=Math.random()*e-.5*e:n%2?d+=.5*e:d-=.5*e,p&&(d>1?d=1:0>d&&(d=0)),j[k++]={x:c,y:d};for(j.sort(function(a,b){return a.x-b.x}),h=new m(1,1,null),n=l;--n>-1;)g=j[n],h=new m(g.x,g.y,h);this._prev=new m(0,0,0!==h.t?h:h.next)},!0),q=c.prototype=new a,q.constructor=c,q.getRatio=function(a){var b=this._prev;if(a>b.t){for(;b.next&&a>=b.t;)b=b.next;b=b.prev}else for(;b.prev&&a<=b.t;)b=b.prev;return this._prev=b,b.v+(a-b.t)/b.gap*b.c},q.config=function(a){return new c(a)},c.ease=new c,l("Bounce",j("BounceOut",function(a){return 1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375}),j("BounceIn",function(a){return(a=1-a)<1/2.75?1-7.5625*a*a:2/2.75>a?1-(7.5625*(a-=1.5/2.75)*a+.75):2.5/2.75>a?1-(7.5625*(a-=2.25/2.75)*a+.9375):1-(7.5625*(a-=2.625/2.75)*a+.984375)}),j("BounceInOut",function(a){var b=.5>a;return a=b?1-2*a:2*a-1,a=1/2.75>a?7.5625*a*a:2/2.75>a?7.5625*(a-=1.5/2.75)*a+.75:2.5/2.75>a?7.5625*(a-=2.25/2.75)*a+.9375:7.5625*(a-=2.625/2.75)*a+.984375,b?.5*(1-a):.5*a+.5})),l("Circ",j("CircOut",function(a){return Math.sqrt(1-(a-=1)*a)}),j("CircIn",function(a){return-(Math.sqrt(1-a*a)-1)}),j("CircInOut",function(a){return(a*=2)<1?-.5*(Math.sqrt(1-a*a)-1):.5*(Math.sqrt(1-(a-=2)*a)+1)})),d=function(b,c,d){var e=i("easing."+b,function(a,b){this._p1=a>=1?a:1,this._p2=(b||d)/(1>a?a:1),this._p3=this._p2/g*(Math.asin(1/this._p1)||0),this._p2=g/this._p2},!0),f=e.prototype=new a;return f.constructor=e,f.getRatio=c,f.config=function(a,b){return new e(a,b)},e},l("Elastic",d("ElasticOut",function(a){return this._p1*Math.pow(2,-10*a)*Math.sin((a-this._p3)*this._p2)+1},.3),d("ElasticIn",function(a){return-(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2))},.3),d("ElasticInOut",function(a){return(a*=2)<1?-.5*(this._p1*Math.pow(2,10*(a-=1))*Math.sin((a-this._p3)*this._p2)):this._p1*Math.pow(2,-10*(a-=1))*Math.sin((a-this._p3)*this._p2)*.5+1},.45)),l("Expo",j("ExpoOut",function(a){return 1-Math.pow(2,-10*a)}),j("ExpoIn",function(a){return Math.pow(2,10*(a-1))-.001}),j("ExpoInOut",function(a){return(a*=2)<1?.5*Math.pow(2,10*(a-1)):.5*(2-Math.pow(2,-10*(a-1)))})),l("Sine",j("SineOut",function(a){return Math.sin(a*h)}),j("SineIn",function(a){return-Math.cos(a*h)+1}),j("SineInOut",function(a){return-.5*(Math.cos(Math.PI*a)-1)})),i("easing.EaseLookup",{find:function(b){return a.map[b]}},!0),k(e.SlowMo,"SlowMo","ease,"),k(c,"RoughEase","ease,"),k(b,"SteppedEase","ease,"),o},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a,b){"use strict";var c={},d=a.document,e=a.GreenSockGlobals=a.GreenSockGlobals||a;if(!e.TweenLite){var f,g,h,i,j,k=function(a){var b,c=a.split("."),d=e;for(b=0;b<c.length;b++)d[c[b]]=d=d[c[b]]||{};return d},l=k("com.greensock"),m=1e-10,n=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},o=function(){},p=function(){var a=Object.prototype.toString,b=a.call([]);return function(c){return null!=c&&(c instanceof Array||"object"==typeof c&&!!c.push&&a.call(c)===b)}}(),q={},r=function(d,f,g,h){this.sc=q[d]?q[d].sc:[],q[d]=this,this.gsClass=null,this.func=g;var i=[];this.check=function(j){for(var l,m,n,o,p,s=f.length,t=s;--s>-1;)(l=q[f[s]]||new r(f[s],[])).gsClass?(i[s]=l.gsClass,t--):j&&l.sc.push(this);if(0===t&&g){if(m=("com.greensock."+d).split("."),n=m.pop(),o=k(m.join("."))[n]=this.gsClass=g.apply(g,i),h)if(e[n]=c[n]=o,p="undefined"!=typeof module&&module.exports,!p&&"function"==typeof define&&define.amd)define((a.GreenSockAMDPath?a.GreenSockAMDPath+"/":"")+d.split(".").pop(),[],function(){return o});else if(p)if(d===b){module.exports=c[b]=o;for(s in c)o[s]=c[s]}else c[b]&&(c[b][n]=o);for(s=0;s<this.sc.length;s++)this.sc[s].check()}},this.check(!0)},s=a._gsDefine=function(a,b,c,d){return new r(a,b,c,d)},t=l._class=function(a,b,c){return b=b||function(){},s(a,[],function(){return b},c),b};s.globals=e;var u=[0,0,1,1],v=t("easing.Ease",function(a,b,c,d){this._func=a,this._type=c||0,this._power=d||0,this._params=b?u.concat(b):u},!0),w=v.map={},x=v.register=function(a,b,c,d){for(var e,f,g,h,i=b.split(","),j=i.length,k=(c||"easeIn,easeOut,easeInOut").split(",");--j>-1;)for(f=i[j],e=d?t("easing."+f,null,!0):l.easing[f]||{},g=k.length;--g>-1;)h=k[g],w[f+"."+h]=w[h+f]=e[h]=a.getRatio?a:a[h]||new a};for(h=v.prototype,h._calcEnd=!1,h.getRatio=function(a){if(this._func)return this._params[0]=a,this._func.apply(null,this._params);var b=this._type,c=this._power,d=1===b?1-a:2===b?a:.5>a?2*a:2*(1-a);return 1===c?d*=d:2===c?d*=d*d:3===c?d*=d*d*d:4===c&&(d*=d*d*d*d),1===b?1-d:2===b?d:.5>a?d/2:1-d/2},f=["Linear","Quad","Cubic","Quart","Quint,Strong"],g=f.length;--g>-1;)h=f[g]+",Power"+g,x(new v(null,null,1,g),h,"easeOut",!0),x(new v(null,null,2,g),h,"easeIn"+(0===g?",easeNone":"")),x(new v(null,null,3,g),h,"easeInOut");w.linear=l.easing.Linear.easeIn,w.swing=l.easing.Quad.easeInOut;var y=t("events.EventDispatcher",function(a){this._listeners={},this._eventTarget=a||this});h=y.prototype,h.addEventListener=function(a,b,c,d,e){e=e||0;var f,g,h=this._listeners[a],k=0;for(this!==i||j||i.wake(),null==h&&(this._listeners[a]=h=[]),g=h.length;--g>-1;)f=h[g],f.c===b&&f.s===c?h.splice(g,1):0===k&&f.pr<e&&(k=g+1);h.splice(k,0,{c:b,s:c,up:d,pr:e})},h.removeEventListener=function(a,b){var c,d=this._listeners[a];if(d)for(c=d.length;--c>-1;)if(d[c].c===b)return void d.splice(c,1)},h.dispatchEvent=function(a){var b,c,d,e=this._listeners[a];if(e)for(b=e.length,b>1&&(e=e.slice(0)),c=this._eventTarget;--b>-1;)d=e[b],d&&(d.up?d.c.call(d.s||c,{type:a,target:c}):d.c.call(d.s||c))};var z=a.requestAnimationFrame,A=a.cancelAnimationFrame,B=Date.now||function(){return(new Date).getTime()},C=B();for(f=["ms","moz","webkit","o"],g=f.length;--g>-1&&!z;)z=a[f[g]+"RequestAnimationFrame"],A=a[f[g]+"CancelAnimationFrame"]||a[f[g]+"CancelRequestAnimationFrame"];t("Ticker",function(a,b){var c,e,f,g,h,k=this,l=B(),n=b!==!1&&z?"auto":!1,p=500,q=33,r="tick",s=function(a){var b,d,i=B()-C;i>p&&(l+=i-q),C+=i,k.time=(C-l)/1e3,b=k.time-h,(!c||b>0||a===!0)&&(k.frame++,h+=b+(b>=g?.004:g-b),d=!0),a!==!0&&(f=e(s)),d&&k.dispatchEvent(r)};y.call(k),k.time=k.frame=0,k.tick=function(){s(!0)},k.lagSmoothing=function(a,b){p=a||1/m,q=Math.min(b,p,0)},k.sleep=function(){null!=f&&(n&&A?A(f):clearTimeout(f),e=o,f=null,k===i&&(j=!1))},k.wake=function(a){null!==f?k.sleep():a?l+=-C+(C=B()):k.frame>10&&(C=B()-p+5),e=0===c?o:n&&z?z:function(a){return setTimeout(a,1e3*(h-k.time)+1|0)},k===i&&(j=!0),s(2)},k.fps=function(a){return arguments.length?(c=a,g=1/(c||60),h=this.time+g,void k.wake()):c},k.useRAF=function(a){return arguments.length?(k.sleep(),n=a,void k.fps(c)):n},k.fps(a),setTimeout(function(){"auto"===n&&k.frame<5&&"hidden"!==d.visibilityState&&k.useRAF(!1)},1500)}),h=l.Ticker.prototype=new l.events.EventDispatcher,h.constructor=l.Ticker;var D=t("core.Animation",function(a,b){if(this.vars=b=b||{},this._duration=this._totalDuration=a||0,this._delay=Number(b.delay)||0,this._timeScale=1,this._active=b.immediateRender===!0,this.data=b.data,this._reversed=b.reversed===!0,W){j||i.wake();var c=this.vars.useFrames?V:W;c.add(this,c._time),this.vars.paused&&this.paused(!0)}});i=D.ticker=new l.Ticker,h=D.prototype,h._dirty=h._gc=h._initted=h._paused=!1,h._totalTime=h._time=0,h._rawPrevTime=-1,h._next=h._last=h._onUpdate=h._timeline=h.timeline=null,h._paused=!1;var E=function(){j&&B()-C>2e3&&i.wake(),setTimeout(E,2e3)};E(),h.play=function(a,b){return null!=a&&this.seek(a,b),this.reversed(!1).paused(!1)},h.pause=function(a,b){return null!=a&&this.seek(a,b),this.paused(!0)},h.resume=function(a,b){return null!=a&&this.seek(a,b),this.paused(!1)},h.seek=function(a,b){return this.totalTime(Number(a),b!==!1)},h.restart=function(a,b){return this.reversed(!1).paused(!1).totalTime(a?-this._delay:0,b!==!1,!0)},h.reverse=function(a,b){return null!=a&&this.seek(a||this.totalDuration(),b),this.reversed(!0).paused(!1)},h.render=function(a,b,c){},h.invalidate=function(){return this._time=this._totalTime=0,this._initted=this._gc=!1,this._rawPrevTime=-1,(this._gc||!this.timeline)&&this._enabled(!0),this},h.isActive=function(){var a,b=this._timeline,c=this._startTime;return!b||!this._gc&&!this._paused&&b.isActive()&&(a=b.rawTime(!0))>=c&&a<c+this.totalDuration()/this._timeScale},h._enabled=function(a,b){return j||i.wake(),this._gc=!a,this._active=this.isActive(),b!==!0&&(a&&!this.timeline?this._timeline.add(this,this._startTime-this._delay):!a&&this.timeline&&this._timeline._remove(this,!0)),!1},h._kill=function(a,b){return this._enabled(!1,!1)},h.kill=function(a,b){return this._kill(a,b),this},h._uncache=function(a){for(var b=a?this:this.timeline;b;)b._dirty=!0,b=b.timeline;return this},h._swapSelfInParams=function(a){for(var b=a.length,c=a.concat();--b>-1;)"{self}"===a[b]&&(c[b]=this);return c},h._callback=function(a){var b=this.vars,c=b[a],d=b[a+"Params"],e=b[a+"Scope"]||b.callbackScope||this,f=d?d.length:0;switch(f){case 0:c.call(e);break;case 1:c.call(e,d[0]);break;case 2:c.call(e,d[0],d[1]);break;default:c.apply(e,d)}},h.eventCallback=function(a,b,c,d){if("on"===(a||"").substr(0,2)){var e=this.vars;if(1===arguments.length)return e[a];null==b?delete e[a]:(e[a]=b,e[a+"Params"]=p(c)&&-1!==c.join("").indexOf("{self}")?this._swapSelfInParams(c):c,e[a+"Scope"]=d),"onUpdate"===a&&(this._onUpdate=b)}return this},h.delay=function(a){return arguments.length?(this._timeline.smoothChildTiming&&this.startTime(this._startTime+a-this._delay),this._delay=a,this):this._delay},h.duration=function(a){return arguments.length?(this._duration=this._totalDuration=a,this._uncache(!0),this._timeline.smoothChildTiming&&this._time>0&&this._time<this._duration&&0!==a&&this.totalTime(this._totalTime*(a/this._duration),!0),this):(this._dirty=!1,this._duration)},h.totalDuration=function(a){return this._dirty=!1,arguments.length?this.duration(a):this._totalDuration},h.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),this.totalTime(a>this._duration?this._duration:a,b)):this._time},h.totalTime=function(a,b,c){if(j||i.wake(),!arguments.length)return this._totalTime;if(this._timeline){if(0>a&&!c&&(a+=this.totalDuration()),this._timeline.smoothChildTiming){this._dirty&&this.totalDuration();var d=this._totalDuration,e=this._timeline;if(a>d&&!c&&(a=d),this._startTime=(this._paused?this._pauseTime:e._time)-(this._reversed?d-a:a)/this._timeScale,e._dirty||this._uncache(!1),e._timeline)for(;e._timeline;)e._timeline._time!==(e._startTime+e._totalTime)/e._timeScale&&e.totalTime(e._totalTime,!0),e=e._timeline}this._gc&&this._enabled(!0,!1),(this._totalTime!==a||0===this._duration)&&(J.length&&Y(),this.render(a,b,!1),J.length&&Y())}return this},h.progress=h.totalProgress=function(a,b){var c=this.duration();return arguments.length?this.totalTime(c*a,b):c?this._time/c:this.ratio},h.startTime=function(a){return arguments.length?(a!==this._startTime&&(this._startTime=a,this.timeline&&this.timeline._sortChildren&&this.timeline.add(this,a-this._delay)),this):this._startTime},h.endTime=function(a){return this._startTime+(0!=a?this.totalDuration():this.duration())/this._timeScale},h.timeScale=function(a){if(!arguments.length)return this._timeScale;if(a=a||m,this._timeline&&this._timeline.smoothChildTiming){var b=this._pauseTime,c=b||0===b?b:this._timeline.totalTime();this._startTime=c-(c-this._startTime)*this._timeScale/a}return this._timeScale=a,this._uncache(!1)},h.reversed=function(a){return arguments.length?(a!=this._reversed&&(this._reversed=a,this.totalTime(this._timeline&&!this._timeline.smoothChildTiming?this.totalDuration()-this._totalTime:this._totalTime,!0)),this):this._reversed},h.paused=function(a){if(!arguments.length)return this._paused;var b,c,d=this._timeline;return a!=this._paused&&d&&(j||a||i.wake(),b=d.rawTime(),c=b-this._pauseTime,!a&&d.smoothChildTiming&&(this._startTime+=c,this._uncache(!1)),this._pauseTime=a?b:null,this._paused=a,this._active=this.isActive(),!a&&0!==c&&this._initted&&this.duration()&&(b=d.smoothChildTiming?this._totalTime:(b-this._startTime)/this._timeScale,this.render(b,b===this._totalTime,!0))),this._gc&&!a&&this._enabled(!0,!1),this};var F=t("core.SimpleTimeline",function(a){D.call(this,0,a),this.autoRemoveChildren=this.smoothChildTiming=!0});h=F.prototype=new D,h.constructor=F,h.kill()._gc=!1,h._first=h._last=h._recent=null,h._sortChildren=!1,h.add=h.insert=function(a,b,c,d){var e,f;if(a._startTime=Number(b||0)+a._delay,a._paused&&this!==a._timeline&&(a._pauseTime=a._startTime+(this.rawTime()-a._startTime)/a._timeScale),a.timeline&&a.timeline._remove(a,!0),a.timeline=a._timeline=this,a._gc&&a._enabled(!0,!0),e=this._last,this._sortChildren)for(f=a._startTime;e&&e._startTime>f;)e=e._prev;return e?(a._next=e._next,e._next=a):(a._next=this._first,this._first=a),a._next?a._next._prev=a:this._last=a,a._prev=e,this._recent=a,this._timeline&&this._uncache(!0),this},h._remove=function(a,b){return a.timeline===this&&(b||a._enabled(!1,!0),a._prev?a._prev._next=a._next:this._first===a&&(this._first=a._next),a._next?a._next._prev=a._prev:this._last===a&&(this._last=a._prev),a._next=a._prev=a.timeline=null,a===this._recent&&(this._recent=this._last),this._timeline&&this._uncache(!0)),this},h.render=function(a,b,c){var d,e=this._first;for(this._totalTime=this._time=this._rawPrevTime=a;e;)d=e._next,(e._active||a>=e._startTime&&!e._paused)&&(e._reversed?e.render((e._dirty?e.totalDuration():e._totalDuration)-(a-e._startTime)*e._timeScale,b,c):e.render((a-e._startTime)*e._timeScale,b,c)),e=d},h.rawTime=function(){return j||i.wake(),this._totalTime};var G=t("TweenLite",function(b,c,d){
if(D.call(this,c,d),this.render=G.prototype.render,null==b)throw"Cannot tween a null target.";this.target=b="string"!=typeof b?b:G.selector(b)||b;var e,f,g,h=b.jquery||b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType),i=this.vars.overwrite;if(this._overwrite=i=null==i?U[G.defaultOverwrite]:"number"==typeof i?i>>0:U[i],(h||b instanceof Array||b.push&&p(b))&&"number"!=typeof b[0])for(this._targets=g=n(b),this._propLookup=[],this._siblings=[],e=0;e<g.length;e++)f=g[e],f?"string"!=typeof f?f.length&&f!==a&&f[0]&&(f[0]===a||f[0].nodeType&&f[0].style&&!f.nodeType)?(g.splice(e--,1),this._targets=g=g.concat(n(f))):(this._siblings[e]=Z(f,this,!1),1===i&&this._siblings[e].length>1&&_(f,this,null,1,this._siblings[e])):(f=g[e--]=G.selector(f),"string"==typeof f&&g.splice(e+1,1)):g.splice(e--,1);else this._propLookup={},this._siblings=Z(b,this,!1),1===i&&this._siblings.length>1&&_(b,this,null,1,this._siblings);(this.vars.immediateRender||0===c&&0===this._delay&&this.vars.immediateRender!==!1)&&(this._time=-m,this.render(Math.min(0,-this._delay)))},!0),H=function(b){return b&&b.length&&b!==a&&b[0]&&(b[0]===a||b[0].nodeType&&b[0].style&&!b.nodeType)},I=function(a,b){var c,d={};for(c in a)T[c]||c in b&&"transform"!==c&&"x"!==c&&"y"!==c&&"width"!==c&&"height"!==c&&"className"!==c&&"border"!==c||!(!Q[c]||Q[c]&&Q[c]._autoCSS)||(d[c]=a[c],delete a[c]);a.css=d};h=G.prototype=new D,h.constructor=G,h.kill()._gc=!1,h.ratio=0,h._firstPT=h._targets=h._overwrittenProps=h._startAt=null,h._notifyPluginsOfEnabled=h._lazy=!1,G.version="1.19.1",G.defaultEase=h._ease=new v(null,null,1,1),G.defaultOverwrite="auto",G.ticker=i,G.autoSleep=120,G.lagSmoothing=function(a,b){i.lagSmoothing(a,b)},G.selector=a.$||a.jQuery||function(b){var c=a.$||a.jQuery;return c?(G.selector=c,c(b)):"undefined"==typeof d?b:d.querySelectorAll?d.querySelectorAll(b):d.getElementById("#"===b.charAt(0)?b.substr(1):b)};var J=[],K={},L=/(?:(-|-=|\+=)?\d*\.?\d*(?:e[\-+]?\d+)?)[0-9]/gi,M=function(a){for(var b,c=this._firstPT,d=1e-6;c;)b=c.blob?1===a?this.end:a?this.join(""):this.start:c.c*a+c.s,c.m?b=c.m(b,this._target||c.t):d>b&&b>-d&&!c.blob&&(b=0),c.f?c.fp?c.t[c.p](c.fp,b):c.t[c.p](b):c.t[c.p]=b,c=c._next},N=function(a,b,c,d){var e,f,g,h,i,j,k,l=[],m=0,n="",o=0;for(l.start=a,l.end=b,a=l[0]=a+"",b=l[1]=b+"",c&&(c(l),a=l[0],b=l[1]),l.length=0,e=a.match(L)||[],f=b.match(L)||[],d&&(d._next=null,d.blob=1,l._firstPT=l._applyPT=d),i=f.length,h=0;i>h;h++)k=f[h],j=b.substr(m,b.indexOf(k,m)-m),n+=j||!h?j:",",m+=j.length,o?o=(o+1)%5:"rgba("===j.substr(-5)&&(o=1),k===e[h]||e.length<=h?n+=k:(n&&(l.push(n),n=""),g=parseFloat(e[h]),l.push(g),l._firstPT={_next:l._firstPT,t:l,p:l.length-1,s:g,c:("="===k.charAt(1)?parseInt(k.charAt(0)+"1",10)*parseFloat(k.substr(2)):parseFloat(k)-g)||0,f:0,m:o&&4>o?Math.round:0}),m+=k.length;return n+=b.substr(m),n&&l.push(n),l.setRatio=M,l},O=function(a,b,c,d,e,f,g,h,i){"function"==typeof d&&(d=d(i||0,a));var j,k=typeof a[b],l="function"!==k?"":b.indexOf("set")||"function"!=typeof a["get"+b.substr(3)]?b:"get"+b.substr(3),m="get"!==c?c:l?g?a[l](g):a[l]():a[b],n="string"==typeof d&&"="===d.charAt(1),o={t:a,p:b,s:m,f:"function"===k,pg:0,n:e||b,m:f?"function"==typeof f?f:Math.round:0,pr:0,c:n?parseInt(d.charAt(0)+"1",10)*parseFloat(d.substr(2)):parseFloat(d)-m||0};return("number"!=typeof m||"number"!=typeof d&&!n)&&(g||isNaN(m)||!n&&isNaN(d)||"boolean"==typeof m||"boolean"==typeof d?(o.fp=g,j=N(m,n?o.s+o.c:d,h||G.defaultStringFilter,o),o={t:j,p:"setRatio",s:0,c:1,f:2,pg:0,n:e||b,pr:0,m:0}):(o.s=parseFloat(m),n||(o.c=parseFloat(d)-o.s||0))),o.c?((o._next=this._firstPT)&&(o._next._prev=o),this._firstPT=o,o):void 0},P=G._internals={isArray:p,isSelector:H,lazyTweens:J,blobDif:N},Q=G._plugins={},R=P.tweenLookup={},S=0,T=P.reservedProps={ease:1,delay:1,overwrite:1,onComplete:1,onCompleteParams:1,onCompleteScope:1,useFrames:1,runBackwards:1,startAt:1,onUpdate:1,onUpdateParams:1,onUpdateScope:1,onStart:1,onStartParams:1,onStartScope:1,onReverseComplete:1,onReverseCompleteParams:1,onReverseCompleteScope:1,onRepeat:1,onRepeatParams:1,onRepeatScope:1,easeParams:1,yoyo:1,immediateRender:1,repeat:1,repeatDelay:1,data:1,paused:1,reversed:1,autoCSS:1,lazy:1,onOverwrite:1,callbackScope:1,stringFilter:1,id:1},U={none:0,all:1,auto:2,concurrent:3,allOnStart:4,preexisting:5,"true":1,"false":0},V=D._rootFramesTimeline=new F,W=D._rootTimeline=new F,X=30,Y=P.lazyRender=function(){var a,b=J.length;for(K={};--b>-1;)a=J[b],a&&a._lazy!==!1&&(a.render(a._lazy[0],a._lazy[1],!0),a._lazy=!1);J.length=0};W._startTime=i.time,V._startTime=i.frame,W._active=V._active=!0,setTimeout(Y,1),D._updateRoot=G.render=function(){var a,b,c;if(J.length&&Y(),W.render((i.time-W._startTime)*W._timeScale,!1,!1),V.render((i.frame-V._startTime)*V._timeScale,!1,!1),J.length&&Y(),i.frame>=X){X=i.frame+(parseInt(G.autoSleep,10)||120);for(c in R){for(b=R[c].tweens,a=b.length;--a>-1;)b[a]._gc&&b.splice(a,1);0===b.length&&delete R[c]}if(c=W._first,(!c||c._paused)&&G.autoSleep&&!V._first&&1===i._listeners.tick.length){for(;c&&c._paused;)c=c._next;c||i.sleep()}}},i.addEventListener("tick",D._updateRoot);var Z=function(a,b,c){var d,e,f=a._gsTweenID;if(R[f||(a._gsTweenID=f="t"+S++)]||(R[f]={target:a,tweens:[]}),b&&(d=R[f].tweens,d[e=d.length]=b,c))for(;--e>-1;)d[e]===b&&d.splice(e,1);return R[f].tweens},$=function(a,b,c,d){var e,f,g=a.vars.onOverwrite;return g&&(e=g(a,b,c,d)),g=G.onOverwrite,g&&(f=g(a,b,c,d)),e!==!1&&f!==!1},_=function(a,b,c,d,e){var f,g,h,i;if(1===d||d>=4){for(i=e.length,f=0;i>f;f++)if((h=e[f])!==b)h._gc||h._kill(null,a,b)&&(g=!0);else if(5===d)break;return g}var j,k=b._startTime+m,l=[],n=0,o=0===b._duration;for(f=e.length;--f>-1;)(h=e[f])===b||h._gc||h._paused||(h._timeline!==b._timeline?(j=j||aa(b,0,o),0===aa(h,j,o)&&(l[n++]=h)):h._startTime<=k&&h._startTime+h.totalDuration()/h._timeScale>k&&((o||!h._initted)&&k-h._startTime<=2e-10||(l[n++]=h)));for(f=n;--f>-1;)if(h=l[f],2===d&&h._kill(c,a,b)&&(g=!0),2!==d||!h._firstPT&&h._initted){if(2!==d&&!$(h,b))continue;h._enabled(!1,!1)&&(g=!0)}return g},aa=function(a,b,c){for(var d=a._timeline,e=d._timeScale,f=a._startTime;d._timeline;){if(f+=d._startTime,e*=d._timeScale,d._paused)return-100;d=d._timeline}return f/=e,f>b?f-b:c&&f===b||!a._initted&&2*m>f-b?m:(f+=a.totalDuration()/a._timeScale/e)>b+m?0:f-b-m};h._init=function(){var a,b,c,d,e,f,g=this.vars,h=this._overwrittenProps,i=this._duration,j=!!g.immediateRender,k=g.ease;if(g.startAt){this._startAt&&(this._startAt.render(-1,!0),this._startAt.kill()),e={};for(d in g.startAt)e[d]=g.startAt[d];if(e.overwrite=!1,e.immediateRender=!0,e.lazy=j&&g.lazy!==!1,e.startAt=e.delay=null,this._startAt=G.to(this.target,0,e),j)if(this._time>0)this._startAt=null;else if(0!==i)return}else if(g.runBackwards&&0!==i)if(this._startAt)this._startAt.render(-1,!0),this._startAt.kill(),this._startAt=null;else{0!==this._time&&(j=!1),c={};for(d in g)T[d]&&"autoCSS"!==d||(c[d]=g[d]);if(c.overwrite=0,c.data="isFromStart",c.lazy=j&&g.lazy!==!1,c.immediateRender=j,this._startAt=G.to(this.target,0,c),j){if(0===this._time)return}else this._startAt._init(),this._startAt._enabled(!1),this.vars.immediateRender&&(this._startAt=null)}if(this._ease=k=k?k instanceof v?k:"function"==typeof k?new v(k,g.easeParams):w[k]||G.defaultEase:G.defaultEase,g.easeParams instanceof Array&&k.config&&(this._ease=k.config.apply(k,g.easeParams)),this._easeType=this._ease._type,this._easePower=this._ease._power,this._firstPT=null,this._targets)for(f=this._targets.length,a=0;f>a;a++)this._initProps(this._targets[a],this._propLookup[a]={},this._siblings[a],h?h[a]:null,a)&&(b=!0);else b=this._initProps(this.target,this._propLookup,this._siblings,h,0);if(b&&G._onPluginEvent("_onInitAllProps",this),h&&(this._firstPT||"function"!=typeof this.target&&this._enabled(!1,!1)),g.runBackwards)for(c=this._firstPT;c;)c.s+=c.c,c.c=-c.c,c=c._next;this._onUpdate=g.onUpdate,this._initted=!0},h._initProps=function(b,c,d,e,f){var g,h,i,j,k,l;if(null==b)return!1;K[b._gsTweenID]&&Y(),this.vars.css||b.style&&b!==a&&b.nodeType&&Q.css&&this.vars.autoCSS!==!1&&I(this.vars,b);for(g in this.vars)if(l=this.vars[g],T[g])l&&(l instanceof Array||l.push&&p(l))&&-1!==l.join("").indexOf("{self}")&&(this.vars[g]=l=this._swapSelfInParams(l,this));else if(Q[g]&&(j=new Q[g])._onInitTween(b,this.vars[g],this,f)){for(this._firstPT=k={_next:this._firstPT,t:j,p:"setRatio",s:0,c:1,f:1,n:g,pg:1,pr:j._priority,m:0},h=j._overwriteProps.length;--h>-1;)c[j._overwriteProps[h]]=this._firstPT;(j._priority||j._onInitAllProps)&&(i=!0),(j._onDisable||j._onEnable)&&(this._notifyPluginsOfEnabled=!0),k._next&&(k._next._prev=k)}else c[g]=O.call(this,b,g,"get",l,g,0,null,this.vars.stringFilter,f);return e&&this._kill(e,b)?this._initProps(b,c,d,e,f):this._overwrite>1&&this._firstPT&&d.length>1&&_(b,this,c,this._overwrite,d)?(this._kill(c,b),this._initProps(b,c,d,e,f)):(this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration)&&(K[b._gsTweenID]=!0),i)},h.render=function(a,b,c){var d,e,f,g,h=this._time,i=this._duration,j=this._rawPrevTime;if(a>=i-1e-7&&a>=0)this._totalTime=this._time=i,this.ratio=this._ease._calcEnd?this._ease.getRatio(1):1,this._reversed||(d=!0,e="onComplete",c=c||this._timeline.autoRemoveChildren),0===i&&(this._initted||!this.vars.lazy||c)&&(this._startTime===this._timeline._duration&&(a=0),(0>j||0>=a&&a>=-1e-7||j===m&&"isPause"!==this.data)&&j!==a&&(c=!0,j>m&&(e="onReverseComplete")),this._rawPrevTime=g=!b||a||j===a?a:m);else if(1e-7>a)this._totalTime=this._time=0,this.ratio=this._ease._calcEnd?this._ease.getRatio(0):0,(0!==h||0===i&&j>0)&&(e="onReverseComplete",d=this._reversed),0>a&&(this._active=!1,0===i&&(this._initted||!this.vars.lazy||c)&&(j>=0&&(j!==m||"isPause"!==this.data)&&(c=!0),this._rawPrevTime=g=!b||a||j===a?a:m)),this._initted||(c=!0);else if(this._totalTime=this._time=a,this._easeType){var k=a/i,l=this._easeType,n=this._easePower;(1===l||3===l&&k>=.5)&&(k=1-k),3===l&&(k*=2),1===n?k*=k:2===n?k*=k*k:3===n?k*=k*k*k:4===n&&(k*=k*k*k*k),1===l?this.ratio=1-k:2===l?this.ratio=k:.5>a/i?this.ratio=k/2:this.ratio=1-k/2}else this.ratio=this._ease.getRatio(a/i);if(this._time!==h||c){if(!this._initted){if(this._init(),!this._initted||this._gc)return;if(!c&&this._firstPT&&(this.vars.lazy!==!1&&this._duration||this.vars.lazy&&!this._duration))return this._time=this._totalTime=h,this._rawPrevTime=j,J.push(this),void(this._lazy=[a,b]);this._time&&!d?this.ratio=this._ease.getRatio(this._time/i):d&&this._ease._calcEnd&&(this.ratio=this._ease.getRatio(0===this._time?0:1))}for(this._lazy!==!1&&(this._lazy=!1),this._active||!this._paused&&this._time!==h&&a>=0&&(this._active=!0),0===h&&(this._startAt&&(a>=0?this._startAt.render(a,b,c):e||(e="_dummyGS")),this.vars.onStart&&(0!==this._time||0===i)&&(b||this._callback("onStart"))),f=this._firstPT;f;)f.f?f.t[f.p](f.c*this.ratio+f.s):f.t[f.p]=f.c*this.ratio+f.s,f=f._next;this._onUpdate&&(0>a&&this._startAt&&a!==-1e-4&&this._startAt.render(a,b,c),b||(this._time!==h||d||c)&&this._callback("onUpdate")),e&&(!this._gc||c)&&(0>a&&this._startAt&&!this._onUpdate&&a!==-1e-4&&this._startAt.render(a,b,c),d&&(this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[e]&&this._callback(e),0===i&&this._rawPrevTime===m&&g!==m&&(this._rawPrevTime=0))}},h._kill=function(a,b,c){if("all"===a&&(a=null),null==a&&(null==b||b===this.target))return this._lazy=!1,this._enabled(!1,!1);b="string"!=typeof b?b||this._targets||this.target:G.selector(b)||b;var d,e,f,g,h,i,j,k,l,m=c&&this._time&&c._startTime===this._startTime&&this._timeline===c._timeline;if((p(b)||H(b))&&"number"!=typeof b[0])for(d=b.length;--d>-1;)this._kill(a,b[d],c)&&(i=!0);else{if(this._targets){for(d=this._targets.length;--d>-1;)if(b===this._targets[d]){h=this._propLookup[d]||{},this._overwrittenProps=this._overwrittenProps||[],e=this._overwrittenProps[d]=a?this._overwrittenProps[d]||{}:"all";break}}else{if(b!==this.target)return!1;h=this._propLookup,e=this._overwrittenProps=a?this._overwrittenProps||{}:"all"}if(h){if(j=a||h,k=a!==e&&"all"!==e&&a!==h&&("object"!=typeof a||!a._tempKill),c&&(G.onOverwrite||this.vars.onOverwrite)){for(f in j)h[f]&&(l||(l=[]),l.push(f));if((l||!a)&&!$(this,c,b,l))return!1}for(f in j)(g=h[f])&&(m&&(g.f?g.t[g.p](g.s):g.t[g.p]=g.s,i=!0),g.pg&&g.t._kill(j)&&(i=!0),g.pg&&0!==g.t._overwriteProps.length||(g._prev?g._prev._next=g._next:g===this._firstPT&&(this._firstPT=g._next),g._next&&(g._next._prev=g._prev),g._next=g._prev=null),delete h[f]),k&&(e[f]=1);!this._firstPT&&this._initted&&this._enabled(!1,!1)}}return i},h.invalidate=function(){return this._notifyPluginsOfEnabled&&G._onPluginEvent("_onDisable",this),this._firstPT=this._overwrittenProps=this._startAt=this._onUpdate=null,this._notifyPluginsOfEnabled=this._active=this._lazy=!1,this._propLookup=this._targets?{}:[],D.prototype.invalidate.call(this),this.vars.immediateRender&&(this._time=-m,this.render(Math.min(0,-this._delay))),this},h._enabled=function(a,b){if(j||i.wake(),a&&this._gc){var c,d=this._targets;if(d)for(c=d.length;--c>-1;)this._siblings[c]=Z(d[c],this,!0);else this._siblings=Z(this.target,this,!0)}return D.prototype._enabled.call(this,a,b),this._notifyPluginsOfEnabled&&this._firstPT?G._onPluginEvent(a?"_onEnable":"_onDisable",this):!1},G.to=function(a,b,c){return new G(a,b,c)},G.from=function(a,b,c){return c.runBackwards=!0,c.immediateRender=0!=c.immediateRender,new G(a,b,c)},G.fromTo=function(a,b,c,d){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,new G(a,b,d)},G.delayedCall=function(a,b,c,d,e){return new G(b,0,{delay:a,onComplete:b,onCompleteParams:c,callbackScope:d,onReverseComplete:b,onReverseCompleteParams:c,immediateRender:!1,lazy:!1,useFrames:e,overwrite:0})},G.set=function(a,b){return new G(a,0,b)},G.getTweensOf=function(a,b){if(null==a)return[];a="string"!=typeof a?a:G.selector(a)||a;var c,d,e,f;if((p(a)||H(a))&&"number"!=typeof a[0]){for(c=a.length,d=[];--c>-1;)d=d.concat(G.getTweensOf(a[c],b));for(c=d.length;--c>-1;)for(f=d[c],e=c;--e>-1;)f===d[e]&&d.splice(c,1)}else for(d=Z(a).concat(),c=d.length;--c>-1;)(d[c]._gc||b&&!d[c].isActive())&&d.splice(c,1);return d},G.killTweensOf=G.killDelayedCallsTo=function(a,b,c){"object"==typeof b&&(c=b,b=!1);for(var d=G.getTweensOf(a,b),e=d.length;--e>-1;)d[e]._kill(c,a)};var ba=t("plugins.TweenPlugin",function(a,b){this._overwriteProps=(a||"").split(","),this._propName=this._overwriteProps[0],this._priority=b||0,this._super=ba.prototype},!0);if(h=ba.prototype,ba.version="1.19.0",ba.API=2,h._firstPT=null,h._addTween=O,h.setRatio=M,h._kill=function(a){var b,c=this._overwriteProps,d=this._firstPT;if(null!=a[this._propName])this._overwriteProps=[];else for(b=c.length;--b>-1;)null!=a[c[b]]&&c.splice(b,1);for(;d;)null!=a[d.n]&&(d._next&&(d._next._prev=d._prev),d._prev?(d._prev._next=d._next,d._prev=null):this._firstPT===d&&(this._firstPT=d._next)),d=d._next;return!1},h._mod=h._roundProps=function(a){for(var b,c=this._firstPT;c;)b=a[this._propName]||null!=c.n&&a[c.n.split(this._propName+"_").join("")],b&&"function"==typeof b&&(2===c.f?c.t._applyPT.m=b:c.m=b),c=c._next},G._onPluginEvent=function(a,b){var c,d,e,f,g,h=b._firstPT;if("_onInitAllProps"===a){for(;h;){for(g=h._next,d=e;d&&d.pr>h.pr;)d=d._next;(h._prev=d?d._prev:f)?h._prev._next=h:e=h,(h._next=d)?d._prev=h:f=h,h=g}h=b._firstPT=e}for(;h;)h.pg&&"function"==typeof h.t[a]&&h.t[a]()&&(c=!0),h=h._next;return c},ba.activate=function(a){for(var b=a.length;--b>-1;)a[b].API===ba.API&&(Q[(new a[b])._propName]=a[b]);return!0},s.plugin=function(a){if(!(a&&a.propName&&a.init&&a.API))throw"illegal plugin definition.";var b,c=a.propName,d=a.priority||0,e=a.overwriteProps,f={init:"_onInitTween",set:"setRatio",kill:"_kill",round:"_mod",mod:"_mod",initAll:"_onInitAllProps"},g=t("plugins."+c.charAt(0).toUpperCase()+c.substr(1)+"Plugin",function(){ba.call(this,c,d),this._overwriteProps=e||[]},a.global===!0),h=g.prototype=new ba(c);h.constructor=g,g.API=a.API;for(b in f)"function"==typeof a[b]&&(h[f[b]]=a[b]);return g.version=a.version,ba.activate([g]),g},f=a._gsQueue){for(g=0;g<f.length;g++)f[g]();for(h in q)q[h].func||a.console.log("GSAP encountered missing dependency: "+h)}j=!1}}("undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window,"TweenMax");
;/*!
 * VERSION: 1.19.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 */
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";_gsScope._gsDefine("TimelineMax",["TimelineLite","TweenLite","easing.Ease"],function(a,b,c){var d=function(b){a.call(this,b),this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._cycle=0,this._yoyo=this.vars.yoyo===!0,this._dirty=!0},e=1e-10,f=b._internals,g=f.lazyTweens,h=f.lazyRender,i=_gsScope._gsDefine.globals,j=new c(null,null,1,0),k=d.prototype=new a;return k.constructor=d,k.kill()._gc=!1,d.version="1.19.1",k.invalidate=function(){return this._yoyo=this.vars.yoyo===!0,this._repeat=this.vars.repeat||0,this._repeatDelay=this.vars.repeatDelay||0,this._uncache(!0),a.prototype.invalidate.call(this)},k.addCallback=function(a,c,d,e){return this.add(b.delayedCall(0,a,d,e),c)},k.removeCallback=function(a,b){if(a)if(null==b)this._kill(null,a);else for(var c=this.getTweensOf(a,!1),d=c.length,e=this._parseTimeOrLabel(b);--d>-1;)c[d]._startTime===e&&c[d]._enabled(!1,!1);return this},k.removePause=function(b){return this.removeCallback(a._internals.pauseCallback,b)},k.tweenTo=function(a,c){c=c||{};var d,e,f,g={ease:j,useFrames:this.usesFrames(),immediateRender:!1},h=c.repeat&&i.TweenMax||b;for(e in c)g[e]=c[e];return g.time=this._parseTimeOrLabel(a),d=Math.abs(Number(g.time)-this._time)/this._timeScale||.001,f=new h(this,d,g),g.onStart=function(){f.target.paused(!0),f.vars.time!==f.target.time()&&d===f.duration()&&f.duration(Math.abs(f.vars.time-f.target.time())/f.target._timeScale),c.onStart&&c.onStart.apply(c.onStartScope||c.callbackScope||f,c.onStartParams||[])},f},k.tweenFromTo=function(a,b,c){c=c||{},a=this._parseTimeOrLabel(a),c.startAt={onComplete:this.seek,onCompleteParams:[a],callbackScope:this},c.immediateRender=c.immediateRender!==!1;var d=this.tweenTo(b,c);return d.duration(Math.abs(d.vars.time-a)/this._timeScale||.001)},k.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,i,j,k,l,m,n,o=this._dirty?this.totalDuration():this._totalDuration,p=this._duration,q=this._time,r=this._totalTime,s=this._startTime,t=this._timeScale,u=this._rawPrevTime,v=this._paused,w=this._cycle;if(a>=o-1e-7&&a>=0)this._locked||(this._totalTime=o,this._cycle=this._repeat),this._reversed||this._hasPausedChild()||(f=!0,j="onComplete",k=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||0>u||u===e)&&u!==a&&this._first&&(k=!0,u>e&&(j="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,this._yoyo&&0!==(1&this._cycle)?this._time=a=0:(this._time=p,a=p+1e-4);else if(1e-7>a)if(this._locked||(this._totalTime=this._cycle=0),this._time=0,(0!==q||0===p&&u!==e&&(u>0||0>a&&u>=0)&&!this._locked)&&(j="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(k=f=!0,j="onReverseComplete"):u>=0&&this._first&&(k=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=p||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(k=!0)}else if(0===p&&0>u&&(k=!0),this._time=this._rawPrevTime=a,this._locked||(this._totalTime=a,0!==this._repeat&&(l=p+this._repeatDelay,this._cycle=this._totalTime/l>>0,0!==this._cycle&&this._cycle===this._totalTime/l&&a>=r&&this._cycle--,this._time=this._totalTime-this._cycle*l,this._yoyo&&0!==(1&this._cycle)&&(this._time=p-this._time),this._time>p?(this._time=p,a=p+1e-4):this._time<0?this._time=a=0:a=this._time)),this._hasPause&&!this._forcingPlayhead&&!b&&p>a){if(a=this._time,a>=q||this._repeat&&w!==this._cycle)for(d=this._first;d&&d._startTime<=a&&!m;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(m=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!m;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(m=d),d=d._prev;m&&(this._time=a=m._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}if(this._cycle!==w&&!this._locked){var x=this._yoyo&&0!==(1&w),y=x===(this._yoyo&&0!==(1&this._cycle)),z=this._totalTime,A=this._cycle,B=this._rawPrevTime,C=this._time;if(this._totalTime=w*p,this._cycle<w?x=!x:this._totalTime+=p,this._time=q,this._rawPrevTime=0===p?u-1e-4:u,this._cycle=w,this._locked=!0,q=x?0:p,this.render(q,b,0===p),b||this._gc||this.vars.onRepeat&&(this._cycle=A,this._locked=!1,this._callback("onRepeat")),q!==this._time)return;if(y&&(this._cycle=w,this._locked=!0,q=x?p+1e-4:-1e-4,this.render(q,!0,!1)),this._locked=!1,this._paused&&!v)return;this._time=C,this._totalTime=z,this._cycle=A,this._rawPrevTime=B}if(!(this._time!==q&&this._first||c||k||m))return void(r!==this._totalTime&&this._onUpdate&&(b||this._callback("onUpdate")));if(this._initted||(this._initted=!0),this._active||!this._paused&&this._totalTime!==r&&a>0&&(this._active=!0),0===r&&this.vars.onStart&&(0===this._totalTime&&this._totalDuration||b||this._callback("onStart")),n=this._time,n>=q)for(d=this._first;d&&(i=d._next,n===this._time&&(!this._paused||v));)(d._active||d._startTime<=this._time&&!d._paused&&!d._gc)&&(m===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=i;else for(d=this._last;d&&(i=d._prev,n===this._time&&(!this._paused||v));){if(d._active||d._startTime<=q&&!d._paused&&!d._gc){if(m===d){for(m=d._prev;m&&m.endTime()>this._time;)m.render(m._reversed?m.totalDuration()-(a-m._startTime)*m._timeScale:(a-m._startTime)*m._timeScale,b,c),m=m._prev;m=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=i}this._onUpdate&&(b||(g.length&&h(),this._callback("onUpdate"))),j&&(this._locked||this._gc||(s===this._startTime||t!==this._timeScale)&&(0===this._time||o>=this.totalDuration())&&(f&&(g.length&&h(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[j]&&this._callback(j)))},k.getActive=function(a,b,c){null==a&&(a=!0),null==b&&(b=!0),null==c&&(c=!1);var d,e,f=[],g=this.getChildren(a,b,c),h=0,i=g.length;for(d=0;i>d;d++)e=g[d],e.isActive()&&(f[h++]=e);return f},k.getLabelAfter=function(a){a||0!==a&&(a=this._time);var b,c=this.getLabelsArray(),d=c.length;for(b=0;d>b;b++)if(c[b].time>a)return c[b].name;return null},k.getLabelBefore=function(a){null==a&&(a=this._time);for(var b=this.getLabelsArray(),c=b.length;--c>-1;)if(b[c].time<a)return b[c].name;return null},k.getLabelsArray=function(){var a,b=[],c=0;for(a in this._labels)b[c++]={time:this._labels[a],name:a};return b.sort(function(a,b){return a.time-b.time}),b},k.invalidate=function(){return this._locked=!1,a.prototype.invalidate.call(this)},k.progress=function(a,b){return arguments.length?this.totalTime(this.duration()*(this._yoyo&&0!==(1&this._cycle)?1-a:a)+this._cycle*(this._duration+this._repeatDelay),b):this._time/this.duration()},k.totalProgress=function(a,b){return arguments.length?this.totalTime(this.totalDuration()*a,b):this._totalTime/this.totalDuration()},k.totalDuration=function(b){return arguments.length?-1!==this._repeat&&b?this.timeScale(this.totalDuration()/b):this:(this._dirty&&(a.prototype.totalDuration.call(this),this._totalDuration=-1===this._repeat?999999999999:this._duration*(this._repeat+1)+this._repeatDelay*this._repeat),this._totalDuration)},k.time=function(a,b){return arguments.length?(this._dirty&&this.totalDuration(),a>this._duration&&(a=this._duration),this._yoyo&&0!==(1&this._cycle)?a=this._duration-a+this._cycle*(this._duration+this._repeatDelay):0!==this._repeat&&(a+=this._cycle*(this._duration+this._repeatDelay)),this.totalTime(a,b)):this._time},k.repeat=function(a){return arguments.length?(this._repeat=a,this._uncache(!0)):this._repeat},k.repeatDelay=function(a){return arguments.length?(this._repeatDelay=a,this._uncache(!0)):this._repeatDelay},k.yoyo=function(a){return arguments.length?(this._yoyo=a,this):this._yoyo},k.currentLabel=function(a){return arguments.length?this.seek(a,!0):this.getLabelBefore(this._time+1e-8)},d},!0),_gsScope._gsDefine("TimelineLite",["core.Animation","core.SimpleTimeline","TweenLite"],function(a,b,c){var d=function(a){b.call(this,a),this._labels={},this.autoRemoveChildren=this.vars.autoRemoveChildren===!0,this.smoothChildTiming=this.vars.smoothChildTiming===!0,this._sortChildren=!0,this._onUpdate=this.vars.onUpdate;var c,d,e=this.vars;for(d in e)c=e[d],i(c)&&-1!==c.join("").indexOf("{self}")&&(e[d]=this._swapSelfInParams(c));i(e.tweens)&&this.add(e.tweens,0,e.align,e.stagger)},e=1e-10,f=c._internals,g=d._internals={},h=f.isSelector,i=f.isArray,j=f.lazyTweens,k=f.lazyRender,l=_gsScope._gsDefine.globals,m=function(a){var b,c={};for(b in a)c[b]=a[b];return c},n=function(a,b,c){var d,e,f=a.cycle;for(d in f)e=f[d],a[d]="function"==typeof e?e(c,b[c]):e[c%e.length];delete a.cycle},o=g.pauseCallback=function(){},p=function(a){var b,c=[],d=a.length;for(b=0;b!==d;c.push(a[b++]));return c},q=d.prototype=new b;return d.version="1.19.1",q.constructor=d,q.kill()._gc=q._forcingPlayhead=q._hasPause=!1,q.to=function(a,b,d,e){var f=d.repeat&&l.TweenMax||c;return b?this.add(new f(a,b,d),e):this.set(a,d,e)},q.from=function(a,b,d,e){return this.add((d.repeat&&l.TweenMax||c).from(a,b,d),e)},q.fromTo=function(a,b,d,e,f){var g=e.repeat&&l.TweenMax||c;return b?this.add(g.fromTo(a,b,d,e),f):this.set(a,e,f)},q.staggerTo=function(a,b,e,f,g,i,j,k){var l,o,q=new d({onComplete:i,onCompleteParams:j,callbackScope:k,smoothChildTiming:this.smoothChildTiming}),r=e.cycle;for("string"==typeof a&&(a=c.selector(a)||a),a=a||[],h(a)&&(a=p(a)),f=f||0,0>f&&(a=p(a),a.reverse(),f*=-1),o=0;o<a.length;o++)l=m(e),l.startAt&&(l.startAt=m(l.startAt),l.startAt.cycle&&n(l.startAt,a,o)),r&&(n(l,a,o),null!=l.duration&&(b=l.duration,delete l.duration)),q.to(a[o],b,l,o*f);return this.add(q,g)},q.staggerFrom=function(a,b,c,d,e,f,g,h){return c.immediateRender=0!=c.immediateRender,c.runBackwards=!0,this.staggerTo(a,b,c,d,e,f,g,h)},q.staggerFromTo=function(a,b,c,d,e,f,g,h,i){return d.startAt=c,d.immediateRender=0!=d.immediateRender&&0!=c.immediateRender,this.staggerTo(a,b,d,e,f,g,h,i)},q.call=function(a,b,d,e){return this.add(c.delayedCall(0,a,b,d),e)},q.set=function(a,b,d){return d=this._parseTimeOrLabel(d,0,!0),null==b.immediateRender&&(b.immediateRender=d===this._time&&!this._paused),this.add(new c(a,0,b),d)},d.exportRoot=function(a,b){a=a||{},null==a.smoothChildTiming&&(a.smoothChildTiming=!0);var e,f,g=new d(a),h=g._timeline;for(null==b&&(b=!0),h._remove(g,!0),g._startTime=0,g._rawPrevTime=g._time=g._totalTime=h._time,e=h._first;e;)f=e._next,b&&e instanceof c&&e.target===e.vars.onComplete||g.add(e,e._startTime-e._delay),e=f;return h.add(g,0),g},q.add=function(e,f,g,h){var j,k,l,m,n,o;if("number"!=typeof f&&(f=this._parseTimeOrLabel(f,0,!0,e)),!(e instanceof a)){if(e instanceof Array||e&&e.push&&i(e)){for(g=g||"normal",h=h||0,j=f,k=e.length,l=0;k>l;l++)i(m=e[l])&&(m=new d({tweens:m})),this.add(m,j),"string"!=typeof m&&"function"!=typeof m&&("sequence"===g?j=m._startTime+m.totalDuration()/m._timeScale:"start"===g&&(m._startTime-=m.delay())),j+=h;return this._uncache(!0)}if("string"==typeof e)return this.addLabel(e,f);if("function"!=typeof e)throw"Cannot add "+e+" into the timeline; it is not a tween, timeline, function, or string.";e=c.delayedCall(0,e)}if(b.prototype.add.call(this,e,f),(this._gc||this._time===this._duration)&&!this._paused&&this._duration<this.duration())for(n=this,o=n.rawTime()>e._startTime;n._timeline;)o&&n._timeline.smoothChildTiming?n.totalTime(n._totalTime,!0):n._gc&&n._enabled(!0,!1),n=n._timeline;return this},q.remove=function(b){if(b instanceof a){this._remove(b,!1);var c=b._timeline=b.vars.useFrames?a._rootFramesTimeline:a._rootTimeline;return b._startTime=(b._paused?b._pauseTime:c._time)-(b._reversed?b.totalDuration()-b._totalTime:b._totalTime)/b._timeScale,this}if(b instanceof Array||b&&b.push&&i(b)){for(var d=b.length;--d>-1;)this.remove(b[d]);return this}return"string"==typeof b?this.removeLabel(b):this.kill(null,b)},q._remove=function(a,c){b.prototype._remove.call(this,a,c);var d=this._last;return d?this._time>this.duration()&&(this._time=this._duration,this._totalTime=this._totalDuration):this._time=this._totalTime=this._duration=this._totalDuration=0,this},q.append=function(a,b){return this.add(a,this._parseTimeOrLabel(null,b,!0,a))},q.insert=q.insertMultiple=function(a,b,c,d){return this.add(a,b||0,c,d)},q.appendMultiple=function(a,b,c,d){return this.add(a,this._parseTimeOrLabel(null,b,!0,a),c,d)},q.addLabel=function(a,b){return this._labels[a]=this._parseTimeOrLabel(b),this},q.addPause=function(a,b,d,e){var f=c.delayedCall(0,o,d,e||this);return f.vars.onComplete=f.vars.onReverseComplete=b,f.data="isPause",this._hasPause=!0,this.add(f,a)},q.removeLabel=function(a){return delete this._labels[a],this},q.getLabelTime=function(a){return null!=this._labels[a]?this._labels[a]:-1},q._parseTimeOrLabel=function(b,c,d,e){var f;if(e instanceof a&&e.timeline===this)this.remove(e);else if(e&&(e instanceof Array||e.push&&i(e)))for(f=e.length;--f>-1;)e[f]instanceof a&&e[f].timeline===this&&this.remove(e[f]);if("string"==typeof c)return this._parseTimeOrLabel(c,d&&"number"==typeof b&&null==this._labels[c]?b-this.duration():0,d);if(c=c||0,"string"!=typeof b||!isNaN(b)&&null==this._labels[b])null==b&&(b=this.duration());else{if(f=b.indexOf("="),-1===f)return null==this._labels[b]?d?this._labels[b]=this.duration()+c:c:this._labels[b]+c;c=parseInt(b.charAt(f-1)+"1",10)*Number(b.substr(f+1)),b=f>1?this._parseTimeOrLabel(b.substr(0,f-1),0,d):this.duration()}return Number(b)+c},q.seek=function(a,b){return this.totalTime("number"==typeof a?a:this._parseTimeOrLabel(a),b!==!1)},q.stop=function(){return this.paused(!0)},q.gotoAndPlay=function(a,b){return this.play(a,b)},q.gotoAndStop=function(a,b){return this.pause(a,b)},q.render=function(a,b,c){this._gc&&this._enabled(!0,!1);var d,f,g,h,i,l,m,n=this._dirty?this.totalDuration():this._totalDuration,o=this._time,p=this._startTime,q=this._timeScale,r=this._paused;if(a>=n-1e-7&&a>=0)this._totalTime=this._time=n,this._reversed||this._hasPausedChild()||(f=!0,h="onComplete",i=!!this._timeline.autoRemoveChildren,0===this._duration&&(0>=a&&a>=-1e-7||this._rawPrevTime<0||this._rawPrevTime===e)&&this._rawPrevTime!==a&&this._first&&(i=!0,this._rawPrevTime>e&&(h="onReverseComplete"))),this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,a=n+1e-4;else if(1e-7>a)if(this._totalTime=this._time=0,(0!==o||0===this._duration&&this._rawPrevTime!==e&&(this._rawPrevTime>0||0>a&&this._rawPrevTime>=0))&&(h="onReverseComplete",f=this._reversed),0>a)this._active=!1,this._timeline.autoRemoveChildren&&this._reversed?(i=f=!0,h="onReverseComplete"):this._rawPrevTime>=0&&this._first&&(i=!0),this._rawPrevTime=a;else{if(this._rawPrevTime=this._duration||!b||a||this._rawPrevTime===a?a:e,0===a&&f)for(d=this._first;d&&0===d._startTime;)d._duration||(f=!1),d=d._next;a=0,this._initted||(i=!0)}else{if(this._hasPause&&!this._forcingPlayhead&&!b){if(a>=o)for(d=this._first;d&&d._startTime<=a&&!l;)d._duration||"isPause"!==d.data||d.ratio||0===d._startTime&&0===this._rawPrevTime||(l=d),d=d._next;else for(d=this._last;d&&d._startTime>=a&&!l;)d._duration||"isPause"===d.data&&d._rawPrevTime>0&&(l=d),d=d._prev;l&&(this._time=a=l._startTime,this._totalTime=a+this._cycle*(this._totalDuration+this._repeatDelay))}this._totalTime=this._time=this._rawPrevTime=a}if(this._time!==o&&this._first||c||i||l){if(this._initted||(this._initted=!0),this._active||!this._paused&&this._time!==o&&a>0&&(this._active=!0),0===o&&this.vars.onStart&&(0===this._time&&this._duration||b||this._callback("onStart")),m=this._time,m>=o)for(d=this._first;d&&(g=d._next,m===this._time&&(!this._paused||r));)(d._active||d._startTime<=m&&!d._paused&&!d._gc)&&(l===d&&this.pause(),d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)),d=g;else for(d=this._last;d&&(g=d._prev,m===this._time&&(!this._paused||r));){if(d._active||d._startTime<=o&&!d._paused&&!d._gc){if(l===d){for(l=d._prev;l&&l.endTime()>this._time;)l.render(l._reversed?l.totalDuration()-(a-l._startTime)*l._timeScale:(a-l._startTime)*l._timeScale,b,c),l=l._prev;l=null,this.pause()}d._reversed?d.render((d._dirty?d.totalDuration():d._totalDuration)-(a-d._startTime)*d._timeScale,b,c):d.render((a-d._startTime)*d._timeScale,b,c)}d=g}this._onUpdate&&(b||(j.length&&k(),this._callback("onUpdate"))),h&&(this._gc||(p===this._startTime||q!==this._timeScale)&&(0===this._time||n>=this.totalDuration())&&(f&&(j.length&&k(),this._timeline.autoRemoveChildren&&this._enabled(!1,!1),this._active=!1),!b&&this.vars[h]&&this._callback(h)))}},q._hasPausedChild=function(){for(var a=this._first;a;){if(a._paused||a instanceof d&&a._hasPausedChild())return!0;a=a._next}return!1},q.getChildren=function(a,b,d,e){e=e||-9999999999;for(var f=[],g=this._first,h=0;g;)g._startTime<e||(g instanceof c?b!==!1&&(f[h++]=g):(d!==!1&&(f[h++]=g),a!==!1&&(f=f.concat(g.getChildren(!0,b,d)),h=f.length))),g=g._next;return f},q.getTweensOf=function(a,b){var d,e,f=this._gc,g=[],h=0;for(f&&this._enabled(!0,!0),d=c.getTweensOf(a),e=d.length;--e>-1;)(d[e].timeline===this||b&&this._contains(d[e]))&&(g[h++]=d[e]);return f&&this._enabled(!1,!0),g},q.recent=function(){return this._recent},q._contains=function(a){for(var b=a.timeline;b;){if(b===this)return!0;b=b.timeline}return!1},q.shiftChildren=function(a,b,c){c=c||0;for(var d,e=this._first,f=this._labels;e;)e._startTime>=c&&(e._startTime+=a),e=e._next;if(b)for(d in f)f[d]>=c&&(f[d]+=a);return this._uncache(!0)},q._kill=function(a,b){if(!a&&!b)return this._enabled(!1,!1);for(var c=b?this.getTweensOf(b):this.getChildren(!0,!0,!1),d=c.length,e=!1;--d>-1;)c[d]._kill(a,b)&&(e=!0);return e},q.clear=function(a){var b=this.getChildren(!1,!0,!0),c=b.length;for(this._time=this._totalTime=0;--c>-1;)b[c]._enabled(!1,!1);return a!==!1&&(this._labels={}),this._uncache(!0)},q.invalidate=function(){for(var b=this._first;b;)b.invalidate(),b=b._next;return a.prototype.invalidate.call(this)},q._enabled=function(a,c){if(a===this._gc)for(var d=this._first;d;)d._enabled(a,!0),d=d._next;return b.prototype._enabled.call(this,a,c)},q.totalTime=function(b,c,d){this._forcingPlayhead=!0;var e=a.prototype.totalTime.apply(this,arguments);return this._forcingPlayhead=!1,e},q.duration=function(a){return arguments.length?(0!==this.duration()&&0!==a&&this.timeScale(this._duration/a),this):(this._dirty&&this.totalDuration(),this._duration)},q.totalDuration=function(a){if(!arguments.length){if(this._dirty){for(var b,c,d=0,e=this._last,f=999999999999;e;)b=e._prev,e._dirty&&e.totalDuration(),e._startTime>f&&this._sortChildren&&!e._paused?this.add(e,e._startTime-e._delay):f=e._startTime,e._startTime<0&&!e._paused&&(d-=e._startTime,this._timeline.smoothChildTiming&&(this._startTime+=e._startTime/this._timeScale),this.shiftChildren(-e._startTime,!1,-9999999999),f=0),c=e._startTime+e._totalDuration/e._timeScale,c>d&&(d=c),e=b;this._duration=this._totalDuration=d,this._dirty=!1}return this._totalDuration}return a&&this.totalDuration()?this.timeScale(this._totalDuration/a):this},q.paused=function(b){if(!b)for(var c=this._first,d=this._time;c;)c._startTime===d&&"isPause"===c.data&&(c._rawPrevTime=0),c=c._next;return a.prototype.paused.apply(this,arguments)},q.usesFrames=function(){for(var b=this._timeline;b._timeline;)b=b._timeline;return b===a._rootFramesTimeline},q.rawTime=function(a){return a&&(this._paused||this._repeat&&this.time()>0&&this.totalProgress()<1)?this._totalTime%(this._duration+this._repeatDelay):this._paused?this._totalTime:(this._timeline.rawTime(a)-this._startTime)*this._timeScale},d},!0)}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("./TweenLite.js"),module.exports=b())}("TimelineMax");
;/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,t){"function"==typeof define&&define.amd?define(t):"object"==typeof exports?module.exports=t():e.ScrollMagic=t()}(this,function(){"use strict";var e=function(){};e.version="2.0.5",window.addEventListener("mousewheel",function(){});var t="data-scrollmagic-pin-spacer";e.Controller=function(r){var o,s,a="ScrollMagic.Controller",l="FORWARD",c="REVERSE",u="PAUSED",f=n.defaults,d=this,h=i.extend({},f,r),g=[],p=!1,v=0,m=u,w=!0,y=0,S=!0,b=function(){for(var e in h)f.hasOwnProperty(e)||delete h[e];if(h.container=i.get.elements(h.container)[0],!h.container)throw a+" init failed.";w=h.container===window||h.container===document.body||!document.body.contains(h.container),w&&(h.container=window),y=z(),h.container.addEventListener("resize",T),h.container.addEventListener("scroll",T),h.refreshInterval=parseInt(h.refreshInterval)||f.refreshInterval,E()},E=function(){h.refreshInterval>0&&(s=window.setTimeout(A,h.refreshInterval))},x=function(){return h.vertical?i.get.scrollTop(h.container):i.get.scrollLeft(h.container)},z=function(){return h.vertical?i.get.height(h.container):i.get.width(h.container)},C=this._setScrollPos=function(e){h.vertical?w?window.scrollTo(i.get.scrollLeft(),e):h.container.scrollTop=e:w?window.scrollTo(e,i.get.scrollTop()):h.container.scrollLeft=e},F=function(){if(S&&p){var e=i.type.Array(p)?p:g.slice(0);p=!1;var t=v;v=d.scrollPos();var n=v-t;0!==n&&(m=n>0?l:c),m===c&&e.reverse(),e.forEach(function(e){e.update(!0)})}},L=function(){o=i.rAF(F)},T=function(e){"resize"==e.type&&(y=z(),m=u),p!==!0&&(p=!0,L())},A=function(){if(!w&&y!=z()){var e;try{e=new Event("resize",{bubbles:!1,cancelable:!1})}catch(t){e=document.createEvent("Event"),e.initEvent("resize",!1,!1)}h.container.dispatchEvent(e)}g.forEach(function(e){e.refresh()}),E()};this._options=h;var O=function(e){if(e.length<=1)return e;var t=e.slice(0);return t.sort(function(e,t){return e.scrollOffset()>t.scrollOffset()?1:-1}),t};return this.addScene=function(t){if(i.type.Array(t))t.forEach(function(e){d.addScene(e)});else if(t instanceof e.Scene)if(t.controller()!==d)t.addTo(d);else if(g.indexOf(t)<0){g.push(t),g=O(g),t.on("shift.controller_sort",function(){g=O(g)});for(var n in h.globalSceneOptions)t[n]&&t[n].call(t,h.globalSceneOptions[n])}return d},this.removeScene=function(e){if(i.type.Array(e))e.forEach(function(e){d.removeScene(e)});else{var t=g.indexOf(e);t>-1&&(e.off("shift.controller_sort"),g.splice(t,1),e.remove())}return d},this.updateScene=function(t,n){return i.type.Array(t)?t.forEach(function(e){d.updateScene(e,n)}):n?t.update(!0):p!==!0&&t instanceof e.Scene&&(p=p||[],-1==p.indexOf(t)&&p.push(t),p=O(p),L()),d},this.update=function(e){return T({type:"resize"}),e&&F(),d},this.scrollTo=function(n,r){if(i.type.Number(n))C.call(h.container,n,r);else if(n instanceof e.Scene)n.controller()===d&&d.scrollTo(n.scrollOffset(),r);else if(i.type.Function(n))C=n;else{var o=i.get.elements(n)[0];if(o){for(;o.parentNode.hasAttribute(t);)o=o.parentNode;var s=h.vertical?"top":"left",a=i.get.offset(h.container),l=i.get.offset(o);w||(a[s]-=d.scrollPos()),d.scrollTo(l[s]-a[s],r)}}return d},this.scrollPos=function(e){return arguments.length?(i.type.Function(e)&&(x=e),d):x.call(d)},this.info=function(e){var t={size:y,vertical:h.vertical,scrollPos:v,scrollDirection:m,container:h.container,isDocument:w};return arguments.length?void 0!==t[e]?t[e]:void 0:t},this.loglevel=function(){return d},this.enabled=function(e){return arguments.length?(S!=e&&(S=!!e,d.updateScene(g,!0)),d):S},this.destroy=function(e){window.clearTimeout(s);for(var t=g.length;t--;)g[t].destroy(e);return h.container.removeEventListener("resize",T),h.container.removeEventListener("scroll",T),i.cAF(o),null},b(),d};var n={defaults:{container:window,vertical:!0,globalSceneOptions:{},loglevel:2,refreshInterval:100}};e.Controller.addOption=function(e,t){n.defaults[e]=t},e.Controller.extend=function(t){var n=this;e.Controller=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Controller,n),e.Controller.prototype=n.prototype,e.Controller.prototype.constructor=e.Controller},e.Scene=function(n){var o,s,a="BEFORE",l="DURING",c="AFTER",u=r.defaults,f=this,d=i.extend({},u,n),h=a,g=0,p={start:0,end:0},v=0,m=!0,w=function(){for(var e in d)u.hasOwnProperty(e)||delete d[e];for(var t in u)L(t);C()},y={};this.on=function(e,t){return i.type.Function(t)&&(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1];"*"!=r&&(y[r]||(y[r]=[]),y[r].push({namespace:i||"",callback:t}))})),f},this.off=function(e,t){return e?(e=e.trim().split(" "),e.forEach(function(e){var n=e.split("."),r=n[0],i=n[1]||"",o="*"===r?Object.keys(y):[r];o.forEach(function(e){for(var n=y[e]||[],r=n.length;r--;){var o=n[r];!o||i!==o.namespace&&"*"!==i||t&&t!=o.callback||n.splice(r,1)}n.length||delete y[e]})}),f):f},this.trigger=function(t,n){if(t){var r=t.trim().split("."),i=r[0],o=r[1],s=y[i];s&&s.forEach(function(t){o&&o!==t.namespace||t.callback.call(f,new e.Event(i,t.namespace,f,n))})}return f},f.on("change.internal",function(e){"loglevel"!==e.what&&"tweenChanges"!==e.what&&("triggerElement"===e.what?E():"reverse"===e.what&&f.update())}).on("shift.internal",function(){S(),f.update()}),this.addTo=function(t){return t instanceof e.Controller&&s!=t&&(s&&s.removeScene(f),s=t,C(),b(!0),E(!0),S(),s.info("container").addEventListener("resize",x),t.addScene(f),f.trigger("add",{controller:s}),f.update()),f},this.enabled=function(e){return arguments.length?(m!=e&&(m=!!e,f.update(!0)),f):m},this.remove=function(){if(s){s.info("container").removeEventListener("resize",x);var e=s;s=void 0,e.removeScene(f),f.trigger("remove")}return f},this.destroy=function(e){return f.trigger("destroy",{reset:e}),f.remove(),f.off("*.*"),null},this.update=function(e){if(s)if(e)if(s.enabled()&&m){var t,n=s.info("scrollPos");t=d.duration>0?(n-p.start)/(p.end-p.start):n>=p.start?1:0,f.trigger("update",{startPos:p.start,endPos:p.end,scrollPos:n}),f.progress(t)}else T&&h===l&&O(!0);else s.updateScene(f,!1);return f},this.refresh=function(){return b(),E(),f},this.progress=function(e){if(arguments.length){var t=!1,n=h,r=s?s.info("scrollDirection"):"PAUSED",i=d.reverse||e>=g;if(0===d.duration?(t=g!=e,g=1>e&&i?0:1,h=0===g?a:l):0>e&&h!==a&&i?(g=0,h=a,t=!0):e>=0&&1>e&&i?(g=e,h=l,t=!0):e>=1&&h!==c?(g=1,h=c,t=!0):h!==l||i||O(),t){var o={progress:g,state:h,scrollDirection:r},u=h!=n,p=function(e){f.trigger(e,o)};u&&n!==l&&(p("enter"),p(n===a?"start":"end")),p("progress"),u&&h!==l&&(p(h===a?"start":"end"),p("leave"))}return f}return g};var S=function(){p={start:v+d.offset},s&&d.triggerElement&&(p.start-=s.info("size")*d.triggerHook),p.end=p.start+d.duration},b=function(e){if(o){var t="duration";F(t,o.call(f))&&!e&&(f.trigger("change",{what:t,newval:d[t]}),f.trigger("shift",{reason:t}))}},E=function(e){var n=0,r=d.triggerElement;if(s&&r){for(var o=s.info(),a=i.get.offset(o.container),l=o.vertical?"top":"left";r.parentNode.hasAttribute(t);)r=r.parentNode;var c=i.get.offset(r);o.isDocument||(a[l]-=s.scrollPos()),n=c[l]-a[l]}var u=n!=v;v=n,u&&!e&&f.trigger("shift",{reason:"triggerElementPosition"})},x=function(){d.triggerHook>0&&f.trigger("shift",{reason:"containerResize"})},z=i.extend(r.validate,{duration:function(e){if(i.type.String(e)&&e.match(/^(\.|\d)*\d+%$/)){var t=parseFloat(e)/100;e=function(){return s?s.info("size")*t:0}}if(i.type.Function(e)){o=e;try{e=parseFloat(o())}catch(n){e=-1}}if(e=parseFloat(e),!i.type.Number(e)||0>e)throw o?(o=void 0,0):0;return e}}),C=function(e){e=arguments.length?[e]:Object.keys(z),e.forEach(function(e){var t;if(z[e])try{t=z[e](d[e])}catch(n){t=u[e]}finally{d[e]=t}})},F=function(e,t){var n=!1,r=d[e];return d[e]!=t&&(d[e]=t,C(e),n=r!=d[e]),n},L=function(e){f[e]||(f[e]=function(t){return arguments.length?("duration"===e&&(o=void 0),F(e,t)&&(f.trigger("change",{what:e,newval:d[e]}),r.shifts.indexOf(e)>-1&&f.trigger("shift",{reason:e})),f):d[e]})};this.controller=function(){return s},this.state=function(){return h},this.scrollOffset=function(){return p.start},this.triggerPosition=function(){var e=d.offset;return s&&(e+=d.triggerElement?v:s.info("size")*f.triggerHook()),e};var T,A;f.on("shift.internal",function(e){var t="duration"===e.reason;(h===c&&t||h===l&&0===d.duration)&&O(),t&&_()}).on("progress.internal",function(){O()}).on("add.internal",function(){_()}).on("destroy.internal",function(e){f.removePin(e.reset)});var O=function(e){if(T&&s){var t=s.info(),n=A.spacer.firstChild;if(e||h!==l){var r={position:A.inFlow?"relative":"absolute",top:0,left:0},o=i.css(n,"position")!=r.position;A.pushFollowers?d.duration>0&&(h===c&&0===parseFloat(i.css(A.spacer,"padding-top"))?o=!0:h===a&&0===parseFloat(i.css(A.spacer,"padding-bottom"))&&(o=!0)):r[t.vertical?"top":"left"]=d.duration*g,i.css(n,r),o&&_()}else{"fixed"!=i.css(n,"position")&&(i.css(n,{position:"fixed"}),_());var u=i.get.offset(A.spacer,!0),f=d.reverse||0===d.duration?t.scrollPos-p.start:Math.round(g*d.duration*10)/10;u[t.vertical?"top":"left"]+=f,i.css(A.spacer.firstChild,{top:u.top,left:u.left})}}},_=function(){if(T&&s&&A.inFlow){var e=h===l,t=s.info("vertical"),n=A.spacer.firstChild,r=i.isMarginCollapseType(i.css(A.spacer,"display")),o={};A.relSize.width||A.relSize.autoFullWidth?e?i.css(T,{width:i.get.width(A.spacer)}):i.css(T,{width:"100%"}):(o["min-width"]=i.get.width(t?T:n,!0,!0),o.width=e?o["min-width"]:"auto"),A.relSize.height?e?i.css(T,{height:i.get.height(A.spacer)-(A.pushFollowers?d.duration:0)}):i.css(T,{height:"100%"}):(o["min-height"]=i.get.height(t?n:T,!0,!r),o.height=e?o["min-height"]:"auto"),A.pushFollowers&&(o["padding"+(t?"Top":"Left")]=d.duration*g,o["padding"+(t?"Bottom":"Right")]=d.duration*(1-g)),i.css(A.spacer,o)}},N=function(){s&&T&&h===l&&!s.info("isDocument")&&O()},P=function(){s&&T&&h===l&&((A.relSize.width||A.relSize.autoFullWidth)&&i.get.width(window)!=i.get.width(A.spacer.parentNode)||A.relSize.height&&i.get.height(window)!=i.get.height(A.spacer.parentNode))&&_()},D=function(e){s&&T&&h===l&&!s.info("isDocument")&&(e.preventDefault(),s._setScrollPos(s.info("scrollPos")-((e.wheelDelta||e[s.info("vertical")?"wheelDeltaY":"wheelDeltaX"])/3||30*-e.detail)))};this.setPin=function(e,n){var r={pushFollowers:!0,spacerClass:"scrollmagic-pin-spacer"};if(n=i.extend({},r,n),e=i.get.elements(e)[0],!e)return f;if("fixed"===i.css(e,"position"))return f;if(T){if(T===e)return f;f.removePin()}T=e;var o=T.parentNode.style.display,s=["top","left","bottom","right","margin","marginLeft","marginRight","marginTop","marginBottom"];T.parentNode.style.display="none";var a="absolute"!=i.css(T,"position"),l=i.css(T,s.concat(["display"])),c=i.css(T,["width","height"]);T.parentNode.style.display=o,!a&&n.pushFollowers&&(n.pushFollowers=!1);var u=T.parentNode.insertBefore(document.createElement("div"),T),d=i.extend(l,{position:a?"relative":"absolute",boxSizing:"content-box",mozBoxSizing:"content-box",webkitBoxSizing:"content-box"});if(a||i.extend(d,i.css(T,["width","height"])),i.css(u,d),u.setAttribute(t,""),i.addClass(u,n.spacerClass),A={spacer:u,relSize:{width:"%"===c.width.slice(-1),height:"%"===c.height.slice(-1),autoFullWidth:"auto"===c.width&&a&&i.isMarginCollapseType(l.display)},pushFollowers:n.pushFollowers,inFlow:a},!T.___origStyle){T.___origStyle={};var h=T.style,g=s.concat(["width","height","position","boxSizing","mozBoxSizing","webkitBoxSizing"]);g.forEach(function(e){T.___origStyle[e]=h[e]||""})}return A.relSize.width&&i.css(u,{width:c.width}),A.relSize.height&&i.css(u,{height:c.height}),u.appendChild(T),i.css(T,{position:a?"relative":"absolute",margin:"auto",top:"auto",left:"auto",bottom:"auto",right:"auto"}),(A.relSize.width||A.relSize.autoFullWidth)&&i.css(T,{boxSizing:"border-box",mozBoxSizing:"border-box",webkitBoxSizing:"border-box"}),window.addEventListener("scroll",N),window.addEventListener("resize",N),window.addEventListener("resize",P),T.addEventListener("mousewheel",D),T.addEventListener("DOMMouseScroll",D),O(),f},this.removePin=function(e){if(T){if(h===l&&O(!0),e||!s){var n=A.spacer.firstChild;if(n.hasAttribute(t)){var r=A.spacer.style,o=["margin","marginLeft","marginRight","marginTop","marginBottom"];margins={},o.forEach(function(e){margins[e]=r[e]||""}),i.css(n,margins)}A.spacer.parentNode.insertBefore(n,A.spacer),A.spacer.parentNode.removeChild(A.spacer),T.parentNode.hasAttribute(t)||(i.css(T,T.___origStyle),delete T.___origStyle)}window.removeEventListener("scroll",N),window.removeEventListener("resize",N),window.removeEventListener("resize",P),T.removeEventListener("mousewheel",D),T.removeEventListener("DOMMouseScroll",D),T=void 0}return f};var R,k=[];return f.on("destroy.internal",function(e){f.removeClassToggle(e.reset)}),this.setClassToggle=function(e,t){var n=i.get.elements(e);return 0!==n.length&&i.type.String(t)?(k.length>0&&f.removeClassToggle(),R=t,k=n,f.on("enter.internal_class leave.internal_class",function(e){var t="enter"===e.type?i.addClass:i.removeClass;k.forEach(function(e){t(e,R)})}),f):f},this.removeClassToggle=function(e){return e&&k.forEach(function(e){i.removeClass(e,R)}),f.off("start.internal_class end.internal_class"),R=void 0,k=[],f},w(),f};var r={defaults:{duration:0,offset:0,triggerElement:void 0,triggerHook:.5,reverse:!0,loglevel:2},validate:{offset:function(e){if(e=parseFloat(e),!i.type.Number(e))throw 0;return e},triggerElement:function(e){if(e=e||void 0){var t=i.get.elements(e)[0];if(!t)throw 0;e=t}return e},triggerHook:function(e){var t={onCenter:.5,onEnter:1,onLeave:0};if(i.type.Number(e))e=Math.max(0,Math.min(parseFloat(e),1));else{if(!(e in t))throw 0;e=t[e]}return e},reverse:function(e){return!!e}},shifts:["duration","offset","triggerHook"]};e.Scene.addOption=function(e,t,n,i){e in r.defaults||(r.defaults[e]=t,r.validate[e]=n,i&&r.shifts.push(e))},e.Scene.extend=function(t){var n=this;e.Scene=function(){return n.apply(this,arguments),this.$super=i.extend({},this),t.apply(this,arguments)||this},i.extend(e.Scene,n),e.Scene.prototype=n.prototype,e.Scene.prototype.constructor=e.Scene},e.Event=function(e,t,n,r){r=r||{};for(var i in r)this[i]=r[i];return this.type=e,this.target=this.currentTarget=n,this.namespace=t||"",this.timeStamp=this.timestamp=Date.now(),this};var i=e._util=function(e){var t,n={},r=function(e){return parseFloat(e)||0},i=function(t){return t.currentStyle?t.currentStyle:e.getComputedStyle(t)},o=function(t,n,o,s){if(n=n===document?e:n,n===e)s=!1;else if(!f.DomElement(n))return 0;t=t.charAt(0).toUpperCase()+t.substr(1).toLowerCase();var a=(o?n["offset"+t]||n["outer"+t]:n["client"+t]||n["inner"+t])||0;if(o&&s){var l=i(n);a+="Height"===t?r(l.marginTop)+r(l.marginBottom):r(l.marginLeft)+r(l.marginRight)}return a},s=function(e){return e.replace(/^[^a-z]+([a-z])/g,"$1").replace(/-([a-z])/g,function(e){return e[1].toUpperCase()})};n.extend=function(e){for(e=e||{},t=1;t<arguments.length;t++)if(arguments[t])for(var n in arguments[t])arguments[t].hasOwnProperty(n)&&(e[n]=arguments[t][n]);return e},n.isMarginCollapseType=function(e){return["block","flex","list-item","table","-webkit-box"].indexOf(e)>-1};var a=0,l=["ms","moz","webkit","o"],c=e.requestAnimationFrame,u=e.cancelAnimationFrame;for(t=0;!c&&t<l.length;++t)c=e[l[t]+"RequestAnimationFrame"],u=e[l[t]+"CancelAnimationFrame"]||e[l[t]+"CancelRequestAnimationFrame"];c||(c=function(t){var n=(new Date).getTime(),r=Math.max(0,16-(n-a)),i=e.setTimeout(function(){t(n+r)},r);return a=n+r,i}),u||(u=function(t){e.clearTimeout(t)}),n.rAF=c.bind(e),n.cAF=u.bind(e);var f=n.type=function(e){return Object.prototype.toString.call(e).replace(/^\[object (.+)\]$/,"$1").toLowerCase()};f.String=function(e){return"string"===f(e)},f.Function=function(e){return"function"===f(e)},f.Array=function(e){return Array.isArray(e)},f.Number=function(e){return!f.Array(e)&&e-parseFloat(e)+1>=0},f.DomElement=function(e){return"object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&null!==e&&1===e.nodeType&&"string"==typeof e.nodeName};var d=n.get={};return d.elements=function(t){var n=[];if(f.String(t))try{t=document.querySelectorAll(t)}catch(r){return n}if("nodelist"===f(t)||f.Array(t))for(var i=0,o=n.length=t.length;o>i;i++){var s=t[i];n[i]=f.DomElement(s)?s:d.elements(s)}else(f.DomElement(t)||t===document||t===e)&&(n=[t]);return n},d.scrollTop=function(t){return t&&"number"==typeof t.scrollTop?t.scrollTop:e.pageYOffset||0},d.scrollLeft=function(t){return t&&"number"==typeof t.scrollLeft?t.scrollLeft:e.pageXOffset||0},d.width=function(e,t,n){return o("width",e,t,n)},d.height=function(e,t,n){return o("height",e,t,n)},d.offset=function(e,t){var n={top:0,left:0};if(e&&e.getBoundingClientRect){var r=e.getBoundingClientRect();n.top=r.top,n.left=r.left,t||(n.top+=d.scrollTop(),n.left+=d.scrollLeft())}return n},n.addClass=function(e,t){t&&(e.classList?e.classList.add(t):e.className+=" "+t)},n.removeClass=function(e,t){t&&(e.classList?e.classList.remove(t):e.className=e.className.replace(RegExp("(^|\\b)"+t.split(" ").join("|")+"(\\b|$)","gi")," "))},n.css=function(e,t){if(f.String(t))return i(e)[s(t)];if(f.Array(t)){var n={},r=i(e);return t.forEach(function(e){n[e]=r[s(e)]}),n}for(var o in t){var a=t[o];a==parseFloat(a)&&(a+="px"),e.style[s(o)]=a}},n}(window||{});return e});
;/*! ScrollMagic v2.0.5 | (c) 2015 Jan Paepke (@janpaepke) | license & info: http://scrollmagic.io */
!function(e,n){"function"==typeof define&&define.amd?define(["ScrollMagic","TweenMax","TimelineMax"],n):"object"==typeof exports?(require("gsap"),n(require("scrollmagic"),TweenMax,TimelineMax)):n(e.ScrollMagic||e.jQuery&&e.jQuery.ScrollMagic,e.TweenMax||e.TweenLite,e.TimelineMax||e.TimelineLite)}(this,function(e,n,r){"use strict";e.Scene.addOption("tweenChanges",!1,function(e){return!!e}),e.Scene.extend(function(){var e,t=this;t.on("progress.plugin_gsap",function(){i()}),t.on("destroy.plugin_gsap",function(e){t.removeTween(e.reset)});var i=function(){if(e){var n=t.progress(),r=t.state();e.repeat&&-1===e.repeat()?"DURING"===r&&e.paused()?e.play():"DURING"===r||e.paused()||e.pause():n!=e.progress()&&(0===t.duration()?n>0?e.play():e.reverse():t.tweenChanges()&&e.tweenTo?e.tweenTo(n*e.duration()):e.progress(n).pause())}};t.setTween=function(o,a,s){var u;arguments.length>1&&(arguments.length<3&&(s=a,a=1),o=n.to(o,a,s));try{u=r?new r({smoothChildTiming:!0}).add(o):o,u.pause()}catch(p){return t}return e&&t.removeTween(),e=u,o.repeat&&-1===o.repeat()&&(e.repeat(-1),e.yoyo(o.yoyo())),i(),t},t.removeTween=function(n){return e&&(n&&e.progress(0).pause(),e.kill(),e=void 0),t}})});
;/*!
 * VERSION: 1.8.1
 * DATE: 2017-01-17
 * UPDATES AND DOCS AT: http://greensock.com
 *
 * @license Copyright (c) 2008-2017, GreenSock. All rights reserved.
 * This work is subject to the terms at http://greensock.com/standard-license or for
 * Club GreenSock members, the software agreement that was issued with your membership.
 * 
 * @author: Jack Doyle, jack@greensock.com
 **/
var _gsScope="undefined"!=typeof module&&module.exports&&"undefined"!=typeof global?global:this||window;(_gsScope._gsQueue||(_gsScope._gsQueue=[])).push(function(){"use strict";var a=document.documentElement,b=_gsScope,c=function(c,d){var e="x"===d?"Width":"Height",f="scroll"+e,g="client"+e,h=document.body;return c===b||c===a||c===h?Math.max(a[f],h[f])-(b["inner"+e]||a[g]||h[g]):c[f]-c["offset"+e]},d=function(a){return"string"==typeof a&&(a=TweenLite.selector(a)),a.length&&a!==b&&a[0]&&a[0].style&&!a.nodeType&&(a=a[0]),a===b||a.nodeType&&a.style?a:null},e=function(c,d){var e="scroll"+("x"===d?"Left":"Top");return c===b&&(null!=c.pageXOffset?e="page"+d.toUpperCase()+"Offset":c=null!=a[e]?a:document.body),function(){return c[e]}},f=function(c,f){var g=d(c).getBoundingClientRect(),h=!f||f===b||f===document.body,i=(h?a:f).getBoundingClientRect(),j={x:g.left-i.left,y:g.top-i.top};return!h&&f&&(j.x+=e(f,"x")(),j.y+=e(f,"y")()),j},g=function(a,b,d){var e=typeof a;return"number"===e||"string"===e&&"="===a.charAt(1)?a:"max"===a?c(b,d):Math.min(c(b,d),f(a,b)[d])},h=_gsScope._gsDefine.plugin({propName:"scrollTo",API:2,global:!0,version:"1.8.1",init:function(a,c,d){return this._wdw=a===b,this._target=a,this._tween=d,"object"!=typeof c?(c={y:c},"string"==typeof c.y&&"max"!==c.y&&"="!==c.y.charAt(1)&&(c.x=c.y)):c.nodeType&&(c={y:c,x:c}),this.vars=c,this._autoKill=c.autoKill!==!1,this.getX=e(a,"x"),this.getY=e(a,"y"),this.x=this.xPrev=this.getX(),this.y=this.yPrev=this.getY(),null!=c.x?(this._addTween(this,"x",this.x,g(c.x,a,"x")-(c.offsetX||0),"scrollTo_x",!0),this._overwriteProps.push("scrollTo_x")):this.skipX=!0,null!=c.y?(this._addTween(this,"y",this.y,g(c.y,a,"y")-(c.offsetY||0),"scrollTo_y",!0),this._overwriteProps.push("scrollTo_y")):this.skipY=!0,!0},set:function(a){this._super.setRatio.call(this,a);var d=this._wdw||!this.skipX?this.getX():this.xPrev,e=this._wdw||!this.skipY?this.getY():this.yPrev,f=e-this.yPrev,g=d-this.xPrev,i=h.autoKillThreshold;this.x<0&&(this.x=0),this.y<0&&(this.y=0),this._autoKill&&(!this.skipX&&(g>i||-i>g)&&d<c(this._target,"x")&&(this.skipX=!0),!this.skipY&&(f>i||-i>f)&&e<c(this._target,"y")&&(this.skipY=!0),this.skipX&&this.skipY&&(this._tween.kill(),this.vars.onAutoKill&&this.vars.onAutoKill.apply(this.vars.onAutoKillScope||this._tween,this.vars.onAutoKillParams||[]))),this._wdw?b.scrollTo(this.skipX?d:this.x,this.skipY?e:this.y):(this.skipY||(this._target.scrollTop=this.y),this.skipX||(this._target.scrollLeft=this.x)),this.xPrev=this.x,this.yPrev=this.y}}),i=h.prototype;h.max=c,h.getOffset=f,h.autoKillThreshold=7,i._kill=function(a){return a.scrollTo_x&&(this.skipX=!0),a.scrollTo_y&&(this.skipY=!0),this._super._kill.call(this,a)}}),_gsScope._gsDefine&&_gsScope._gsQueue.pop()(),function(a){"use strict";var b=function(){return(_gsScope.GreenSockGlobals||_gsScope)[a]};"function"==typeof define&&define.amd?define(["TweenLite"],b):"undefined"!=typeof module&&module.exports&&(require("../TweenLite.js"),module.exports=b())}("ScrollToPlugin");
;/**
 * Owl Carousel v2.2.1
 * Copyright 2013-2017 David Deutsch
 * Licensed under  ()
 */
/**
 * Owl carousel
 * @version 2.1.6
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 * @todo Lazy Load Icon
 * @todo prevent animationend bubling
 * @todo itemsScaleUp
 * @todo Test Zepto
 * @todo stagePadding calculate wrong active classes
 */
;(function($, window, document, undefined) {

	/**
	 * Creates a carousel.
	 * @class The Owl Carousel.
	 * @public
	 * @param {HTMLElement|jQuery} element - The element to create the carousel for.
	 * @param {Object} [options] - The options
	 */
	function Owl(element, options) {

		/**
		 * Current settings for the carousel.
		 * @public
		 */
		this.settings = null;

		/**
		 * Current options set by the caller including defaults.
		 * @public
		 */
		this.options = $.extend({}, Owl.Defaults, options);

		/**
		 * Plugin element.
		 * @public
		 */
		this.$element = $(element);

		/**
		 * Proxied event handlers.
		 * @protected
		 */
		this._handlers = {};

		/**
		 * References to the running plugins of this carousel.
		 * @protected
		 */
		this._plugins = {};

		/**
		 * Currently suppressed events to prevent them from beeing retriggered.
		 * @protected
		 */
		this._supress = {};

		/**
		 * Absolute current position.
		 * @protected
		 */
		this._current = null;

		/**
		 * Animation speed in milliseconds.
		 * @protected
		 */
		this._speed = null;

		/**
		 * Coordinates of all items in pixel.
		 * @todo The name of this member is missleading.
		 * @protected
		 */
		this._coordinates = [];

		/**
		 * Current breakpoint.
		 * @todo Real media queries would be nice.
		 * @protected
		 */
		this._breakpoint = null;

		/**
		 * Current width of the plugin element.
		 */
		this._width = null;

		/**
		 * All real items.
		 * @protected
		 */
		this._items = [];

		/**
		 * All cloned items.
		 * @protected
		 */
		this._clones = [];

		/**
		 * Merge values of all items.
		 * @todo Maybe this could be part of a plugin.
		 * @protected
		 */
		this._mergers = [];

		/**
		 * Widths of all items.
		 */
		this._widths = [];

		/**
		 * Invalidated parts within the update process.
		 * @protected
		 */
		this._invalidated = {};

		/**
		 * Ordered list of workers for the update process.
		 * @protected
		 */
		this._pipe = [];

		/**
		 * Current state information for the drag operation.
		 * @todo #261
		 * @protected
		 */
		this._drag = {
			time: null,
			target: null,
			pointer: null,
			stage: {
				start: null,
				current: null
			},
			direction: null
		};

		/**
		 * Current state information and their tags.
		 * @type {Object}
		 * @protected
		 */
		this._states = {
			current: {},
			tags: {
				'initializing': [ 'busy' ],
				'animating': [ 'busy' ],
				'dragging': [ 'interacting' ]
			}
		};

		$.each([ 'onResize', 'onThrottledResize' ], $.proxy(function(i, handler) {
			this._handlers[handler] = $.proxy(this[handler], this);
		}, this));

		$.each(Owl.Plugins, $.proxy(function(key, plugin) {
			this._plugins[key.charAt(0).toLowerCase() + key.slice(1)]
				= new plugin(this);
		}, this));

		$.each(Owl.Workers, $.proxy(function(priority, worker) {
			this._pipe.push({
				'filter': worker.filter,
				'run': $.proxy(worker.run, this)
			});
		}, this));

		this.setup();
		this.initialize();
	}

	/**
	 * Default options for the carousel.
	 * @public
	 */
	Owl.Defaults = {
		items: 3,
		loop: false,
		center: false,
		rewind: false,

		mouseDrag: true,
		touchDrag: true,
		pullDrag: true,
		freeDrag: false,

		margin: 0,
		stagePadding: 0,

		merge: false,
		mergeFit: true,
		autoWidth: false,

		startPosition: 0,
		rtl: false,

		smartSpeed: 250,
		fluidSpeed: false,
		dragEndSpeed: false,

		responsive: {},
		responsiveRefreshRate: 200,
		responsiveBaseElement: window,

		fallbackEasing: 'swing',

		info: false,

		nestedItemSelector: false,
		itemElement: 'div',
		stageElement: 'div',

		refreshClass: 'owl-refresh',
		loadedClass: 'owl-loaded',
		loadingClass: 'owl-loading',
		rtlClass: 'owl-rtl',
		responsiveClass: 'owl-responsive',
		dragClass: 'owl-drag',
		itemClass: 'owl-item',
		stageClass: 'owl-stage',
		stageOuterClass: 'owl-stage-outer',
		grabClass: 'owl-grab'
	};

	/**
	 * Enumeration for width.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Width = {
		Default: 'default',
		Inner: 'inner',
		Outer: 'outer'
	};

	/**
	 * Enumeration for types.
	 * @public
	 * @readonly
	 * @enum {String}
	 */
	Owl.Type = {
		Event: 'event',
		State: 'state'
	};

	/**
	 * Contains all registered plugins.
	 * @public
	 */
	Owl.Plugins = {};

	/**
	 * List of workers involved in the update process.
	 */
	Owl.Workers = [ {
		filter: [ 'width', 'settings' ],
		run: function() {
			this._width = this.$element.width();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = this._items && this._items[this.relative(this._current)];
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			this.$stage.children('.cloned').remove();
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var margin = this.settings.margin || '',
				grid = !this.settings.autoWidth,
				rtl = this.settings.rtl,
				css = {
					'width': 'auto',
					'margin-left': rtl ? margin : '',
					'margin-right': rtl ? '' : margin
				};

			!grid && this.$stage.children().css(css);

			cache.css = css;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var width = (this.width() / this.settings.items).toFixed(3) - this.settings.margin,
				merge = null,
				iterator = this._items.length,
				grid = !this.settings.autoWidth,
				widths = [];

			cache.items = {
				merge: false,
				width: width
			};

			while (iterator--) {
				merge = this._mergers[iterator];
				merge = this.settings.mergeFit && Math.min(merge, this.settings.items) || merge;

				cache.items.merge = merge > 1 || cache.items.merge;

				widths[iterator] = !grid ? this._items[iterator].width() : width * merge;
			}

			this._widths = widths;
		}
	}, {
		filter: [ 'items', 'settings' ],
		run: function() {
			var clones = [],
				items = this._items,
				settings = this.settings,
				// TODO: Should be computed from number of min width items in stage
				view = Math.max(settings.items * 2, 4),
				size = Math.ceil(items.length / 2) * 2,
				repeat = settings.loop && items.length ? settings.rewind ? view : Math.max(view, size) : 0,
				append = '',
				prepend = '';

			repeat /= 2;

			while (repeat--) {
				// Switch to only using appended clones
				clones.push(this.normalize(clones.length / 2, true));
				append = append + items[clones[clones.length - 1]][0].outerHTML;
				clones.push(this.normalize(items.length - 1 - (clones.length - 1) / 2, true));
				prepend = items[clones[clones.length - 1]][0].outerHTML + prepend;
			}

			this._clones = clones;

			$(append).addClass('cloned').appendTo(this.$stage);
			$(prepend).addClass('cloned').prependTo(this.$stage);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				size = this._clones.length + this._items.length,
				iterator = -1,
				previous = 0,
				current = 0,
				coordinates = [];

			while (++iterator < size) {
				previous = coordinates[iterator - 1] || 0;
				current = this._widths[this.relative(iterator)] + this.settings.margin;
				coordinates.push(previous + current * rtl);
			}

			this._coordinates = coordinates;
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function() {
			var padding = this.settings.stagePadding,
				coordinates = this._coordinates,
				css = {
					'width': Math.ceil(Math.abs(coordinates[coordinates.length - 1])) + padding * 2,
					'padding-left': padding || '',
					'padding-right': padding || ''
				};

			this.$stage.css(css);
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			var iterator = this._coordinates.length,
				grid = !this.settings.autoWidth,
				items = this.$stage.children();

			if (grid && cache.items.merge) {
				while (iterator--) {
					cache.css.width = this._widths[this.relative(iterator)];
					items.eq(iterator).css(cache.css);
				}
			} else if (grid) {
				cache.css.width = cache.items.width;
				items.css(cache.css);
			}
		}
	}, {
		filter: [ 'items' ],
		run: function() {
			this._coordinates.length < 1 && this.$stage.removeAttr('style');
		}
	}, {
		filter: [ 'width', 'items', 'settings' ],
		run: function(cache) {
			cache.current = cache.current ? this.$stage.children().index(cache.current) : 0;
			cache.current = Math.max(this.minimum(), Math.min(this.maximum(), cache.current));
			this.reset(cache.current);
		}
	}, {
		filter: [ 'position' ],
		run: function() {
			this.animate(this.coordinates(this._current));
		}
	}, {
		filter: [ 'width', 'position', 'items', 'settings' ],
		run: function() {
			var rtl = this.settings.rtl ? 1 : -1,
				padding = this.settings.stagePadding * 2,
				begin = this.coordinates(this.current()) + padding,
				end = begin + this.width() * rtl,
				inner, outer, matches = [], i, n;

			for (i = 0, n = this._coordinates.length; i < n; i++) {
				inner = this._coordinates[i - 1] || 0;
				outer = Math.abs(this._coordinates[i]) + padding * rtl;

				if ((this.op(inner, '<=', begin) && (this.op(inner, '>', end)))
					|| (this.op(outer, '<', begin) && this.op(outer, '>', end))) {
					matches.push(i);
				}
			}

			this.$stage.children('.active').removeClass('active');
			this.$stage.children(':eq(' + matches.join('), :eq(') + ')').addClass('active');

			if (this.settings.center) {
				this.$stage.children('.center').removeClass('center');
				this.$stage.children().eq(this.current()).addClass('center');
			}
		}
	} ];

	/**
	 * Initializes the carousel.
	 * @protected
	 */
	Owl.prototype.initialize = function() {
		this.enter('initializing');
		this.trigger('initialize');

		this.$element.toggleClass(this.settings.rtlClass, this.settings.rtl);

		if (this.settings.autoWidth && !this.is('pre-loading')) {
			var imgs, nestedSelector, width;
			imgs = this.$element.find('img');
			nestedSelector = this.settings.nestedItemSelector ? '.' + this.settings.nestedItemSelector : undefined;
			width = this.$element.children(nestedSelector).width();

			if (imgs.length && width <= 0) {
				this.preloadAutoWidthImages(imgs);
			}
		}

		this.$element.addClass(this.options.loadingClass);

		// create stage
		this.$stage = $('<' + this.settings.stageElement + ' class="' + this.settings.stageClass + '"/>')
			.wrap('<div class="' + this.settings.stageOuterClass + '"/>');

		// append stage
		this.$element.append(this.$stage.parent());

		// append content
		this.replace(this.$element.children().not(this.$stage.parent()));

		// check visibility
		if (this.$element.is(':visible')) {
			// update view
			this.refresh();
		} else {
			// invalidate width
			this.invalidate('width');
		}

		this.$element
			.removeClass(this.options.loadingClass)
			.addClass(this.options.loadedClass);

		// register event handlers
		this.registerEventHandlers();

		this.leave('initializing');
		this.trigger('initialized');
	};

	/**
	 * Setups the current settings.
	 * @todo Remove responsive classes. Why should adaptive designs be brought into IE8?
	 * @todo Support for media queries by using `matchMedia` would be nice.
	 * @public
	 */
	Owl.prototype.setup = function() {
		var viewport = this.viewport(),
			overwrites = this.options.responsive,
			match = -1,
			settings = null;

		if (!overwrites) {
			settings = $.extend({}, this.options);
		} else {
			$.each(overwrites, function(breakpoint) {
				if (breakpoint <= viewport && breakpoint > match) {
					match = Number(breakpoint);
				}
			});

			settings = $.extend({}, this.options, overwrites[match]);
			if (typeof settings.stagePadding === 'function') {
				settings.stagePadding = settings.stagePadding();
			}
			delete settings.responsive;

			// responsive class
			if (settings.responsiveClass) {
				this.$element.attr('class',
					this.$element.attr('class').replace(new RegExp('(' + this.options.responsiveClass + '-)\\S+\\s', 'g'), '$1' + match)
				);
			}
		}

		this.trigger('change', { property: { name: 'settings', value: settings } });
		this._breakpoint = match;
		this.settings = settings;
		this.invalidate('settings');
		this.trigger('changed', { property: { name: 'settings', value: this.settings } });
	};

	/**
	 * Updates option logic if necessery.
	 * @protected
	 */
	Owl.prototype.optionsLogic = function() {
		if (this.settings.autoWidth) {
			this.settings.stagePadding = false;
			this.settings.merge = false;
		}
	};

	/**
	 * Prepares an item before add.
	 * @todo Rename event parameter `content` to `item`.
	 * @protected
	 * @returns {jQuery|HTMLElement} - The item container.
	 */
	Owl.prototype.prepare = function(item) {
		var event = this.trigger('prepare', { content: item });

		if (!event.data) {
			event.data = $('<' + this.settings.itemElement + '/>')
				.addClass(this.options.itemClass).append(item)
		}

		this.trigger('prepared', { content: event.data });

		return event.data;
	};

	/**
	 * Updates the view.
	 * @public
	 */
	Owl.prototype.update = function() {
		var i = 0,
			n = this._pipe.length,
			filter = $.proxy(function(p) { return this[p] }, this._invalidated),
			cache = {};

		while (i < n) {
			if (this._invalidated.all || $.grep(this._pipe[i].filter, filter).length > 0) {
				this._pipe[i].run(cache);
			}
			i++;
		}

		this._invalidated = {};

		!this.is('valid') && this.enter('valid');
	};

	/**
	 * Gets the width of the view.
	 * @public
	 * @param {Owl.Width} [dimension=Owl.Width.Default] - The dimension to return.
	 * @returns {Number} - The width of the view in pixel.
	 */
	Owl.prototype.width = function(dimension) {
		dimension = dimension || Owl.Width.Default;
		switch (dimension) {
			case Owl.Width.Inner:
			case Owl.Width.Outer:
				return this._width;
			default:
				return this._width - this.settings.stagePadding * 2 + this.settings.margin;
		}
	};

	/**
	 * Refreshes the carousel primarily for adaptive purposes.
	 * @public
	 */
	Owl.prototype.refresh = function() {
		this.enter('refreshing');
		this.trigger('refresh');

		this.setup();

		this.optionsLogic();

		this.$element.addClass(this.options.refreshClass);

		this.update();

		this.$element.removeClass(this.options.refreshClass);

		this.leave('refreshing');
		this.trigger('refreshed');
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onThrottledResize = function() {
		window.clearTimeout(this.resizeTimer);
		this.resizeTimer = window.setTimeout(this._handlers.onResize, this.settings.responsiveRefreshRate);
	};

	/**
	 * Checks window `resize` event.
	 * @protected
	 */
	Owl.prototype.onResize = function() {
		if (!this._items.length) {
			return false;
		}

		if (this._width === this.$element.width()) {
			return false;
		}

		if (!this.$element.is(':visible')) {
			return false;
		}

		this.enter('resizing');

		if (this.trigger('resize').isDefaultPrevented()) {
			this.leave('resizing');
			return false;
		}

		this.invalidate('width');

		this.refresh();

		this.leave('resizing');
		this.trigger('resized');
	};

	/**
	 * Registers event handlers.
	 * @todo Check `msPointerEnabled`
	 * @todo #261
	 * @protected
	 */
	Owl.prototype.registerEventHandlers = function() {
		if ($.support.transition) {
			this.$stage.on($.support.transition.end + '.owl.core', $.proxy(this.onTransitionEnd, this));
		}

		if (this.settings.responsive !== false) {
			this.on(window, 'resize', this._handlers.onThrottledResize);
		}

		if (this.settings.mouseDrag) {
			this.$element.addClass(this.options.dragClass);
			this.$stage.on('mousedown.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('dragstart.owl.core selectstart.owl.core', function() { return false });
		}

		if (this.settings.touchDrag){
			this.$stage.on('touchstart.owl.core', $.proxy(this.onDragStart, this));
			this.$stage.on('touchcancel.owl.core', $.proxy(this.onDragEnd, this));
		}
	};

	/**
	 * Handles `touchstart` and `mousedown` events.
	 * @todo Horizontal swipe threshold as option
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragStart = function(event) {
		var stage = null;

		if (event.which === 3) {
			return;
		}

		if ($.support.transform) {
			stage = this.$stage.css('transform').replace(/.*\(|\)| /g, '').split(',');
			stage = {
				x: stage[stage.length === 16 ? 12 : 4],
				y: stage[stage.length === 16 ? 13 : 5]
			};
		} else {
			stage = this.$stage.position();
			stage = {
				x: this.settings.rtl ?
					stage.left + this.$stage.width() - this.width() + this.settings.margin :
					stage.left,
				y: stage.top
			};
		}

		if (this.is('animating')) {
			$.support.transform ? this.animate(stage.x) : this.$stage.stop()
			this.invalidate('position');
		}

		this.$element.toggleClass(this.options.grabClass, event.type === 'mousedown');

		this.speed(0);

		this._drag.time = new Date().getTime();
		this._drag.target = $(event.target);
		this._drag.stage.start = stage;
		this._drag.stage.current = stage;
		this._drag.pointer = this.pointer(event);

		$(document).on('mouseup.owl.core touchend.owl.core', $.proxy(this.onDragEnd, this));

		$(document).one('mousemove.owl.core touchmove.owl.core', $.proxy(function(event) {
			var delta = this.difference(this._drag.pointer, this.pointer(event));

			$(document).on('mousemove.owl.core touchmove.owl.core', $.proxy(this.onDragMove, this));

			if (Math.abs(delta.x) < Math.abs(delta.y) && this.is('valid')) {
				return;
			}

			event.preventDefault();

			this.enter('dragging');
			this.trigger('drag');
		}, this));
	};

	/**
	 * Handles the `touchmove` and `mousemove` events.
	 * @todo #261
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragMove = function(event) {
		var minimum = null,
			maximum = null,
			pull = null,
			delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this.difference(this._drag.stage.start, delta);

		if (!this.is('dragging')) {
			return;
		}

		event.preventDefault();

		if (this.settings.loop) {
			minimum = this.coordinates(this.minimum());
			maximum = this.coordinates(this.maximum() + 1) - minimum;
			stage.x = (((stage.x - minimum) % maximum + maximum) % maximum) + minimum;
		} else {
			minimum = this.settings.rtl ? this.coordinates(this.maximum()) : this.coordinates(this.minimum());
			maximum = this.settings.rtl ? this.coordinates(this.minimum()) : this.coordinates(this.maximum());
			pull = this.settings.pullDrag ? -1 * delta.x / 5 : 0;
			stage.x = Math.max(Math.min(stage.x, minimum + pull), maximum + pull);
		}

		this._drag.stage.current = stage;

		this.animate(stage.x);
	};

	/**
	 * Handles the `touchend` and `mouseup` events.
	 * @todo #261
	 * @todo Threshold for click event
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onDragEnd = function(event) {
		var delta = this.difference(this._drag.pointer, this.pointer(event)),
			stage = this._drag.stage.current,
			direction = delta.x > 0 ^ this.settings.rtl ? 'left' : 'right';

		$(document).off('.owl.core');

		this.$element.removeClass(this.options.grabClass);

		if (delta.x !== 0 && this.is('dragging') || !this.is('valid')) {
			this.speed(this.settings.dragEndSpeed || this.settings.smartSpeed);
			this.current(this.closest(stage.x, delta.x !== 0 ? direction : this._drag.direction));
			this.invalidate('position');
			this.update();

			this._drag.direction = direction;

			if (Math.abs(delta.x) > 3 || new Date().getTime() - this._drag.time > 300) {
				this._drag.target.one('click.owl.core', function() { return false; });
			}
		}

		if (!this.is('dragging')) {
			return;
		}

		this.leave('dragging');
		this.trigger('dragged');
	};

	/**
	 * Gets absolute position of the closest item for a coordinate.
	 * @todo Setting `freeDrag` makes `closest` not reusable. See #165.
	 * @protected
	 * @param {Number} coordinate - The coordinate in pixel.
	 * @param {String} direction - The direction to check for the closest item. Ether `left` or `right`.
	 * @return {Number} - The absolute position of the closest item.
	 */
	Owl.prototype.closest = function(coordinate, direction) {
		var position = -1,
			pull = 30,
			width = this.width(),
			coordinates = this.coordinates();

		if (!this.settings.freeDrag) {
			// check closest item
			$.each(coordinates, $.proxy(function(index, value) {
				// on a left pull, check on current index
				if (direction === 'left' && coordinate > value - pull && coordinate < value + pull) {
					position = index;
				// on a right pull, check on previous index
				// to do so, subtract width from value and set position = index + 1
				} else if (direction === 'right' && coordinate > value - width - pull && coordinate < value - width + pull) {
					position = index + 1;
				} else if (this.op(coordinate, '<', value)
					&& this.op(coordinate, '>', coordinates[index + 1] || value - width)) {
					position = direction === 'left' ? index + 1 : index;
				}
				return position === -1;
			}, this));
		}

		if (!this.settings.loop) {
			// non loop boundries
			if (this.op(coordinate, '>', coordinates[this.minimum()])) {
				position = coordinate = this.minimum();
			} else if (this.op(coordinate, '<', coordinates[this.maximum()])) {
				position = coordinate = this.maximum();
			}
		}

		return position;
	};

	/**
	 * Animates the stage.
	 * @todo #270
	 * @public
	 * @param {Number} coordinate - The coordinate in pixels.
	 */
	Owl.prototype.animate = function(coordinate) {
		var animate = this.speed() > 0;

		this.is('animating') && this.onTransitionEnd();

		if (animate) {
			this.enter('animating');
			this.trigger('translate');
		}

		if ($.support.transform3d && $.support.transition) {
			this.$stage.css({
				transform: 'translate3d(' + coordinate + 'px,0px,0px)',
				transition: (this.speed() / 1000) + 's'
			});
		} else if (animate) {
			this.$stage.animate({
				left: coordinate + 'px'
			}, this.speed(), this.settings.fallbackEasing, $.proxy(this.onTransitionEnd, this));
		} else {
			this.$stage.css({
				left: coordinate + 'px'
			});
		}
	};

	/**
	 * Checks whether the carousel is in a specific state or not.
	 * @param {String} state - The state to check.
	 * @returns {Boolean} - The flag which indicates if the carousel is busy.
	 */
	Owl.prototype.is = function(state) {
		return this._states.current[state] && this._states.current[state] > 0;
	};

	/**
	 * Sets the absolute position of the current item.
	 * @public
	 * @param {Number} [position] - The new absolute position or nothing to leave it unchanged.
	 * @returns {Number} - The absolute position of the current item.
	 */
	Owl.prototype.current = function(position) {
		if (position === undefined) {
			return this._current;
		}

		if (this._items.length === 0) {
			return undefined;
		}

		position = this.normalize(position);

		if (this._current !== position) {
			var event = this.trigger('change', { property: { name: 'position', value: position } });

			if (event.data !== undefined) {
				position = this.normalize(event.data);
			}

			this._current = position;

			this.invalidate('position');

			this.trigger('changed', { property: { name: 'position', value: this._current } });
		}

		return this._current;
	};

	/**
	 * Invalidates the given part of the update routine.
	 * @param {String} [part] - The part to invalidate.
	 * @returns {Array.<String>} - The invalidated parts.
	 */
	Owl.prototype.invalidate = function(part) {
		if ($.type(part) === 'string') {
			this._invalidated[part] = true;
			this.is('valid') && this.leave('valid');
		}
		return $.map(this._invalidated, function(v, i) { return i });
	};

	/**
	 * Resets the absolute position of the current item.
	 * @public
	 * @param {Number} position - The absolute position of the new item.
	 */
	Owl.prototype.reset = function(position) {
		position = this.normalize(position);

		if (position === undefined) {
			return;
		}

		this._speed = 0;
		this._current = position;

		this.suppress([ 'translate', 'translated' ]);

		this.animate(this.coordinates(position));

		this.release([ 'translate', 'translated' ]);
	};

	/**
	 * Normalizes an absolute or a relative position of an item.
	 * @public
	 * @param {Number} position - The absolute or relative position to normalize.
	 * @param {Boolean} [relative=false] - Whether the given position is relative or not.
	 * @returns {Number} - The normalized position.
	 */
	Owl.prototype.normalize = function(position, relative) {
		var n = this._items.length,
			m = relative ? 0 : this._clones.length;

		if (!this.isNumeric(position) || n < 1) {
			position = undefined;
		} else if (position < 0 || position >= n + m) {
			position = ((position - m / 2) % n + n) % n + m / 2;
		}

		return position;
	};

	/**
	 * Converts an absolute position of an item into a relative one.
	 * @public
	 * @param {Number} position - The absolute position to convert.
	 * @returns {Number} - The converted position.
	 */
	Owl.prototype.relative = function(position) {
		position -= this._clones.length / 2;
		return this.normalize(position, true);
	};

	/**
	 * Gets the maximum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.maximum = function(relative) {
		var settings = this.settings,
			maximum = this._coordinates.length,
			iterator,
			reciprocalItemsWidth,
			elementWidth;

		if (settings.loop) {
			maximum = this._clones.length / 2 + this._items.length - 1;
		} else if (settings.autoWidth || settings.merge) {
			iterator = this._items.length;
			reciprocalItemsWidth = this._items[--iterator].width();
			elementWidth = this.$element.width();
			while (iterator--) {
				reciprocalItemsWidth += this._items[iterator].width() + this.settings.margin;
				if (reciprocalItemsWidth > elementWidth) {
					break;
				}
			}
			maximum = iterator + 1;
		} else if (settings.center) {
			maximum = this._items.length - 1;
		} else {
			maximum = this._items.length - settings.items;
		}

		if (relative) {
			maximum -= this._clones.length / 2;
		}

		return Math.max(maximum, 0);
	};

	/**
	 * Gets the minimum position for the current item.
	 * @public
	 * @param {Boolean} [relative=false] - Whether to return an absolute position or a relative position.
	 * @returns {Number}
	 */
	Owl.prototype.minimum = function(relative) {
		return relative ? 0 : this._clones.length / 2;
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.items = function(position) {
		if (position === undefined) {
			return this._items.slice();
		}

		position = this.normalize(position, true);
		return this._items[position];
	};

	/**
	 * Gets an item at the specified relative position.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @return {jQuery|Array.<jQuery>} - The item at the given position or all items if no position was given.
	 */
	Owl.prototype.mergers = function(position) {
		if (position === undefined) {
			return this._mergers.slice();
		}

		position = this.normalize(position, true);
		return this._mergers[position];
	};

	/**
	 * Gets the absolute positions of clones for an item.
	 * @public
	 * @param {Number} [position] - The relative position of the item.
	 * @returns {Array.<Number>} - The absolute positions of clones for the item or all if no position was given.
	 */
	Owl.prototype.clones = function(position) {
		var odd = this._clones.length / 2,
			even = odd + this._items.length,
			map = function(index) { return index % 2 === 0 ? even + index / 2 : odd - (index + 1) / 2 };

		if (position === undefined) {
			return $.map(this._clones, function(v, i) { return map(i) });
		}

		return $.map(this._clones, function(v, i) { return v === position ? map(i) : null });
	};

	/**
	 * Sets the current animation speed.
	 * @public
	 * @param {Number} [speed] - The animation speed in milliseconds or nothing to leave it unchanged.
	 * @returns {Number} - The current animation speed in milliseconds.
	 */
	Owl.prototype.speed = function(speed) {
		if (speed !== undefined) {
			this._speed = speed;
		}

		return this._speed;
	};

	/**
	 * Gets the coordinate of an item.
	 * @todo The name of this method is missleanding.
	 * @public
	 * @param {Number} position - The absolute position of the item within `minimum()` and `maximum()`.
	 * @returns {Number|Array.<Number>} - The coordinate of the item in pixel or all coordinates.
	 */
	Owl.prototype.coordinates = function(position) {
		var multiplier = 1,
			newPosition = position - 1,
			coordinate;

		if (position === undefined) {
			return $.map(this._coordinates, $.proxy(function(coordinate, index) {
				return this.coordinates(index);
			}, this));
		}

		if (this.settings.center) {
			if (this.settings.rtl) {
				multiplier = -1;
				newPosition = position + 1;
			}

			coordinate = this._coordinates[position];
			coordinate += (this.width() - coordinate + (this._coordinates[newPosition] || 0)) / 2 * multiplier;
		} else {
			coordinate = this._coordinates[newPosition] || 0;
		}

		coordinate = Math.ceil(coordinate);

		return coordinate;
	};

	/**
	 * Calculates the speed for a translation.
	 * @protected
	 * @param {Number} from - The absolute position of the start item.
	 * @param {Number} to - The absolute position of the target item.
	 * @param {Number} [factor=undefined] - The time factor in milliseconds.
	 * @returns {Number} - The time in milliseconds for the translation.
	 */
	Owl.prototype.duration = function(from, to, factor) {
		if (factor === 0) {
			return 0;
		}

		return Math.min(Math.max(Math.abs(to - from), 1), 6) * Math.abs((factor || this.settings.smartSpeed));
	};

	/**
	 * Slides to the specified item.
	 * @public
	 * @param {Number} position - The position of the item.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.to = function(position, speed) {
		var current = this.current(),
			revert = null,
			distance = position - this.relative(current),
			direction = (distance > 0) - (distance < 0),
			items = this._items.length,
			minimum = this.minimum(),
			maximum = this.maximum();

		if (this.settings.loop) {
			if (!this.settings.rewind && Math.abs(distance) > items / 2) {
				distance += direction * -1 * items;
			}

			position = current + distance;
			revert = ((position - minimum) % items + items) % items + minimum;

			if (revert !== position && revert - distance <= maximum && revert - distance > 0) {
				current = revert - distance;
				position = revert;
				this.reset(current);
			}
		} else if (this.settings.rewind) {
			maximum += 1;
			position = (position % maximum + maximum) % maximum;
		} else {
			position = Math.max(minimum, Math.min(maximum, position));
		}

		this.speed(this.duration(current, position, speed));
		this.current(position);

		if (this.$element.is(':visible')) {
			this.update();
		}
	};

	/**
	 * Slides to the next item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.next = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) + 1, speed);
	};

	/**
	 * Slides to the previous item.
	 * @public
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 */
	Owl.prototype.prev = function(speed) {
		speed = speed || false;
		this.to(this.relative(this.current()) - 1, speed);
	};

	/**
	 * Handles the end of an animation.
	 * @protected
	 * @param {Event} event - The event arguments.
	 */
	Owl.prototype.onTransitionEnd = function(event) {

		// if css2 animation then event object is undefined
		if (event !== undefined) {
			event.stopPropagation();

			// Catch only owl-stage transitionEnd event
			if ((event.target || event.srcElement || event.originalTarget) !== this.$stage.get(0)) {
				return false;
			}
		}

		this.leave('animating');
		this.trigger('translated');
	};

	/**
	 * Gets viewport width.
	 * @protected
	 * @return {Number} - The width in pixel.
	 */
	Owl.prototype.viewport = function() {
		var width;
		if (this.options.responsiveBaseElement !== window) {
			width = $(this.options.responsiveBaseElement).width();
		} else if (window.innerWidth) {
			width = window.innerWidth;
		} else if (document.documentElement && document.documentElement.clientWidth) {
			width = document.documentElement.clientWidth;
		} else {
			console.warn('Can not detect viewport width.');
		}
		return width;
	};

	/**
	 * Replaces the current content.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The new content.
	 */
	Owl.prototype.replace = function(content) {
		this.$stage.empty();
		this._items = [];

		if (content) {
			content = (content instanceof jQuery) ? content : $(content);
		}

		if (this.settings.nestedItemSelector) {
			content = content.find('.' + this.settings.nestedItemSelector);
		}

		content.filter(function() {
			return this.nodeType === 1;
		}).each($.proxy(function(index, item) {
			item = this.prepare(item);
			this.$stage.append(item);
			this._items.push(item);
			this._mergers.push(item.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}, this));

		this.reset(this.isNumeric(this.settings.startPosition) ? this.settings.startPosition : 0);

		this.invalidate('items');
	};

	/**
	 * Adds an item.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {HTMLElement|jQuery|String} content - The item content to add.
	 * @param {Number} [position] - The relative position at which to insert the item otherwise the item will be added to the end.
	 */
	Owl.prototype.add = function(content, position) {
		var current = this.relative(this._current);

		position = position === undefined ? this._items.length : this.normalize(position, true);
		content = content instanceof jQuery ? content : $(content);

		this.trigger('add', { content: content, position: position });

		content = this.prepare(content);

		if (this._items.length === 0 || position === this._items.length) {
			this._items.length === 0 && this.$stage.append(content);
			this._items.length !== 0 && this._items[position - 1].after(content);
			this._items.push(content);
			this._mergers.push(content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		} else {
			this._items[position].before(content);
			this._items.splice(position, 0, content);
			this._mergers.splice(position, 0, content.find('[data-merge]').addBack('[data-merge]').attr('data-merge') * 1 || 1);
		}

		this._items[current] && this.reset(this._items[current].index());

		this.invalidate('items');

		this.trigger('added', { content: content, position: position });
	};

	/**
	 * Removes an item by its position.
	 * @todo Use `item` instead of `content` for the event arguments.
	 * @public
	 * @param {Number} position - The relative position of the item to remove.
	 */
	Owl.prototype.remove = function(position) {
		position = this.normalize(position, true);

		if (position === undefined) {
			return;
		}

		this.trigger('remove', { content: this._items[position], position: position });

		this._items[position].remove();
		this._items.splice(position, 1);
		this._mergers.splice(position, 1);

		this.invalidate('items');

		this.trigger('removed', { content: null, position: position });
	};

	/**
	 * Preloads images with auto width.
	 * @todo Replace by a more generic approach
	 * @protected
	 */
	Owl.prototype.preloadAutoWidthImages = function(images) {
		images.each($.proxy(function(i, element) {
			this.enter('pre-loading');
			element = $(element);
			$(new Image()).one('load', $.proxy(function(e) {
				element.attr('src', e.target.src);
				element.css('opacity', 1);
				this.leave('pre-loading');
				!this.is('pre-loading') && !this.is('initializing') && this.refresh();
			}, this)).attr('src', element.attr('src') || element.attr('data-src') || element.attr('data-src-retina'));
		}, this));
	};

	/**
	 * Destroys the carousel.
	 * @public
	 */
	Owl.prototype.destroy = function() {

		this.$element.off('.owl.core');
		this.$stage.off('.owl.core');
		$(document).off('.owl.core');

		if (this.settings.responsive !== false) {
			window.clearTimeout(this.resizeTimer);
			this.off(window, 'resize', this._handlers.onThrottledResize);
		}

		for (var i in this._plugins) {
			this._plugins[i].destroy();
		}

		this.$stage.children('.cloned').remove();

		this.$stage.unwrap();
		this.$stage.children().contents().unwrap();
		this.$stage.children().unwrap();

		this.$element
			.removeClass(this.options.refreshClass)
			.removeClass(this.options.loadingClass)
			.removeClass(this.options.loadedClass)
			.removeClass(this.options.rtlClass)
			.removeClass(this.options.dragClass)
			.removeClass(this.options.grabClass)
			.attr('class', this.$element.attr('class').replace(new RegExp(this.options.responsiveClass + '-\\S+\\s', 'g'), ''))
			.removeData('owl.carousel');
	};

	/**
	 * Operators to calculate right-to-left and left-to-right.
	 * @protected
	 * @param {Number} [a] - The left side operand.
	 * @param {String} [o] - The operator.
	 * @param {Number} [b] - The right side operand.
	 */
	Owl.prototype.op = function(a, o, b) {
		var rtl = this.settings.rtl;
		switch (o) {
			case '<':
				return rtl ? a > b : a < b;
			case '>':
				return rtl ? a < b : a > b;
			case '>=':
				return rtl ? a <= b : a >= b;
			case '<=':
				return rtl ? a >= b : a <= b;
			default:
				break;
		}
	};

	/**
	 * Attaches to an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The event handler to attach.
	 * @param {Boolean} capture - Wether the event should be handled at the capturing phase or not.
	 */
	Owl.prototype.on = function(element, event, listener, capture) {
		if (element.addEventListener) {
			element.addEventListener(event, listener, capture);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, listener);
		}
	};

	/**
	 * Detaches from an internal event.
	 * @protected
	 * @param {HTMLElement} element - The event source.
	 * @param {String} event - The event name.
	 * @param {Function} listener - The attached event handler to detach.
	 * @param {Boolean} capture - Wether the attached event handler was registered as a capturing listener or not.
	 */
	Owl.prototype.off = function(element, event, listener, capture) {
		if (element.removeEventListener) {
			element.removeEventListener(event, listener, capture);
		} else if (element.detachEvent) {
			element.detachEvent('on' + event, listener);
		}
	};

	/**
	 * Triggers a public event.
	 * @todo Remove `status`, `relatedTarget` should be used instead.
	 * @protected
	 * @param {String} name - The event name.
	 * @param {*} [data=null] - The event data.
	 * @param {String} [namespace=carousel] - The event namespace.
	 * @param {String} [state] - The state which is associated with the event.
	 * @param {Boolean} [enter=false] - Indicates if the call enters the specified state or not.
	 * @returns {Event} - The event arguments.
	 */
	Owl.prototype.trigger = function(name, data, namespace, state, enter) {
		var status = {
			item: { count: this._items.length, index: this.current() }
		}, handler = $.camelCase(
			$.grep([ 'on', name, namespace ], function(v) { return v })
				.join('-').toLowerCase()
		), event = $.Event(
			[ name, 'owl', namespace || 'carousel' ].join('.').toLowerCase(),
			$.extend({ relatedTarget: this }, status, data)
		);

		if (!this._supress[name]) {
			$.each(this._plugins, function(name, plugin) {
				if (plugin.onTrigger) {
					plugin.onTrigger(event);
				}
			});

			this.register({ type: Owl.Type.Event, name: name });
			this.$element.trigger(event);

			if (this.settings && typeof this.settings[handler] === 'function') {
				this.settings[handler].call(this, event);
			}
		}

		return event;
	};

	/**
	 * Enters a state.
	 * @param name - The state name.
	 */
	Owl.prototype.enter = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			if (this._states.current[name] === undefined) {
				this._states.current[name] = 0;
			}

			this._states.current[name]++;
		}, this));
	};

	/**
	 * Leaves a state.
	 * @param name - The state name.
	 */
	Owl.prototype.leave = function(name) {
		$.each([ name ].concat(this._states.tags[name] || []), $.proxy(function(i, name) {
			this._states.current[name]--;
		}, this));
	};

	/**
	 * Registers an event or state.
	 * @public
	 * @param {Object} object - The event or state to register.
	 */
	Owl.prototype.register = function(object) {
		if (object.type === Owl.Type.Event) {
			if (!$.event.special[object.name]) {
				$.event.special[object.name] = {};
			}

			if (!$.event.special[object.name].owl) {
				var _default = $.event.special[object.name]._default;
				$.event.special[object.name]._default = function(e) {
					if (_default && _default.apply && (!e.namespace || e.namespace.indexOf('owl') === -1)) {
						return _default.apply(this, arguments);
					}
					return e.namespace && e.namespace.indexOf('owl') > -1;
				};
				$.event.special[object.name].owl = true;
			}
		} else if (object.type === Owl.Type.State) {
			if (!this._states.tags[object.name]) {
				this._states.tags[object.name] = object.tags;
			} else {
				this._states.tags[object.name] = this._states.tags[object.name].concat(object.tags);
			}

			this._states.tags[object.name] = $.grep(this._states.tags[object.name], $.proxy(function(tag, i) {
				return $.inArray(tag, this._states.tags[object.name]) === i;
			}, this));
		}
	};

	/**
	 * Suppresses events.
	 * @protected
	 * @param {Array.<String>} events - The events to suppress.
	 */
	Owl.prototype.suppress = function(events) {
		$.each(events, $.proxy(function(index, event) {
			this._supress[event] = true;
		}, this));
	};

	/**
	 * Releases suppressed events.
	 * @protected
	 * @param {Array.<String>} events - The events to release.
	 */
	Owl.prototype.release = function(events) {
		$.each(events, $.proxy(function(index, event) {
			delete this._supress[event];
		}, this));
	};

	/**
	 * Gets unified pointer coordinates from event.
	 * @todo #261
	 * @protected
	 * @param {Event} - The `mousedown` or `touchstart` event.
	 * @returns {Object} - Contains `x` and `y` coordinates of current pointer position.
	 */
	Owl.prototype.pointer = function(event) {
		var result = { x: null, y: null };

		event = event.originalEvent || event || window.event;

		event = event.touches && event.touches.length ?
			event.touches[0] : event.changedTouches && event.changedTouches.length ?
				event.changedTouches[0] : event;

		if (event.pageX) {
			result.x = event.pageX;
			result.y = event.pageY;
		} else {
			result.x = event.clientX;
			result.y = event.clientY;
		}

		return result;
	};

	/**
	 * Determines if the input is a Number or something that can be coerced to a Number
	 * @protected
	 * @param {Number|String|Object|Array|Boolean|RegExp|Function|Symbol} - The input to be tested
	 * @returns {Boolean} - An indication if the input is a Number or can be coerced to a Number
	 */
	Owl.prototype.isNumeric = function(number) {
		return !isNaN(parseFloat(number));
	};

	/**
	 * Gets the difference of two vectors.
	 * @todo #261
	 * @protected
	 * @param {Object} - The first vector.
	 * @param {Object} - The second vector.
	 * @returns {Object} - The difference.
	 */
	Owl.prototype.difference = function(first, second) {
		return {
			x: first.x - second.x,
			y: first.y - second.y
		};
	};

	/**
	 * The jQuery Plugin for the Owl Carousel
	 * @todo Navigation plugin `next` and `prev`
	 * @public
	 */
	$.fn.owlCarousel = function(option) {
		var args = Array.prototype.slice.call(arguments, 1);

		return this.each(function() {
			var $this = $(this),
				data = $this.data('owl.carousel');

			if (!data) {
				data = new Owl(this, typeof option == 'object' && option);
				$this.data('owl.carousel', data);

				$.each([
					'next', 'prev', 'to', 'destroy', 'refresh', 'replace', 'add', 'remove'
				], function(i, event) {
					data.register({ type: Owl.Type.Event, name: event });
					data.$element.on(event + '.owl.carousel.core', $.proxy(function(e) {
						if (e.namespace && e.relatedTarget !== this) {
							this.suppress([ event ]);
							data[event].apply(this, [].slice.call(arguments, 1));
							this.release([ event ]);
						}
					}, data));
				});
			}

			if (typeof option == 'string' && option.charAt(0) !== '_') {
				data[option].apply(data, args);
			}
		});
	};

	/**
	 * The constructor for the jQuery Plugin
	 * @public
	 */
	$.fn.owlCarousel.Constructor = Owl;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoRefresh Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto refresh plugin.
	 * @class The Auto Refresh Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoRefresh = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Refresh interval.
		 * @protected
		 * @type {number}
		 */
		this._interval = null;

		/**
		 * Whether the element is currently visible or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._visible = null;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoRefresh) {
					this.watch();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoRefresh.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoRefresh.Defaults = {
		autoRefresh: true,
		autoRefreshInterval: 500
	};

	/**
	 * Watches the element.
	 */
	AutoRefresh.prototype.watch = function() {
		if (this._interval) {
			return;
		}

		this._visible = this._core.$element.is(':visible');
		this._interval = window.setInterval($.proxy(this.refresh, this), this._core.settings.autoRefreshInterval);
	};

	/**
	 * Refreshes the element.
	 */
	AutoRefresh.prototype.refresh = function() {
		if (this._core.$element.is(':visible') === this._visible) {
			return;
		}

		this._visible = !this._visible;

		this._core.$element.toggleClass('owl-hidden', !this._visible);

		this._visible && (this._core.invalidate('width') && this._core.refresh());
	};

	/**
	 * Destroys the plugin.
	 */
	AutoRefresh.prototype.destroy = function() {
		var handler, property;

		window.clearInterval(this._interval);

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoRefresh = AutoRefresh;

})(window.Zepto || window.jQuery, window, document);

/**
 * Lazy Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the lazy plugin.
	 * @class The Lazy Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Lazy = function(carousel) {

		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Already loaded items.
		 * @protected
		 * @type {Array.<jQuery>}
		 */
		this._loaded = [];

		/**
		 * Event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel change.owl.carousel resized.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				if (!this._core.settings || !this._core.settings.lazyLoad) {
					return;
				}

				if ((e.property && e.property.name == 'position') || e.type == 'initialized') {
					var settings = this._core.settings,
						n = (settings.center && Math.ceil(settings.items / 2) || settings.items),
						i = ((settings.center && n * -1) || 0),
						position = (e.property && e.property.value !== undefined ? e.property.value : this._core.current()) + i,
						clones = this._core.clones().length,
						load = $.proxy(function(i, v) { this.load(v) }, this);

					while (i++ < n) {
						this.load(clones / 2 + this._core.relative(position));
						clones && $.each(this._core.clones(this._core.relative(position)), load);
						position++;
					}
				}
			}, this)
		};

		// set the default options
		this._core.options = $.extend({}, Lazy.Defaults, this._core.options);

		// register event handler
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Lazy.Defaults = {
		lazyLoad: false
	};

	/**
	 * Loads all resources of an item at the specified position.
	 * @param {Number} position - The absolute position of the item.
	 * @protected
	 */
	Lazy.prototype.load = function(position) {
		var $item = this._core.$stage.children().eq(position),
			$elements = $item && $item.find('.owl-lazy');

		if (!$elements || $.inArray($item.get(0), this._loaded) > -1) {
			return;
		}

		$elements.each($.proxy(function(index, element) {
			var $element = $(element), image,
				url = (window.devicePixelRatio > 1 && $element.attr('data-src-retina')) || $element.attr('data-src');

			this._core.trigger('load', { element: $element, url: url }, 'lazy');

			if ($element.is('img')) {
				$element.one('load.owl.lazy', $.proxy(function() {
					$element.css('opacity', 1);
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this)).attr('src', url);
			} else {
				image = new Image();
				image.onload = $.proxy(function() {
					$element.css({
						'background-image': 'url("' + url + '")',
						'opacity': '1'
					});
					this._core.trigger('loaded', { element: $element, url: url }, 'lazy');
				}, this);
				image.src = url;
			}
		}, this));

		this._loaded.push($item.get(0));
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Lazy.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this._core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Lazy = Lazy;

})(window.Zepto || window.jQuery, window, document);

/**
 * AutoHeight Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the auto height plugin.
	 * @class The Auto Height Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var AutoHeight = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight) {
					this.update();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight && e.property.name == 'position'){
					this.update();
				}
			}, this),
			'loaded.owl.lazy': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoHeight
					&& e.element.closest('.' + this._core.settings.itemClass).index() === this._core.current()) {
					this.update();
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, AutoHeight.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	AutoHeight.Defaults = {
		autoHeight: false,
		autoHeightClass: 'owl-height'
	};

	/**
	 * Updates the view.
	 */
	AutoHeight.prototype.update = function() {
		var start = this._core._current,
			end = start + this._core.settings.items,
			visible = this._core.$stage.children().toArray().slice(start, end),
			heights = [],
			maxheight = 0;

		$.each(visible, function(index, item) {
			heights.push($(item).height());
		});

		maxheight = Math.max.apply(null, heights);

		this._core.$stage.parent()
			.height(maxheight)
			.addClass(this._core.settings.autoHeightClass);
	};

	AutoHeight.prototype.destroy = function() {
		var handler, property;

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.AutoHeight = AutoHeight;

})(window.Zepto || window.jQuery, window, document);

/**
 * Video Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the video plugin.
	 * @class The Video Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Video = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Cache all video URLs.
		 * @protected
		 * @type {Object}
		 */
		this._videos = {};

		/**
		 * Current playing item.
		 * @protected
		 * @type {jQuery}
		 */
		this._playing = null;

		/**
		 * All event handlers.
		 * @todo The cloned content removale is too late
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this._core.register({ type: 'state', name: 'playing', tags: [ 'interacting' ] });
				}
			}, this),
			'resize.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.video && this.isInFullScreen()) {
					e.preventDefault();
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.is('resizing')) {
					this._core.$stage.find('.cloned .owl-video-frame').remove();
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position' && this._playing) {
					this.stop();
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (!e.namespace) {
					return;
				}

				var $element = $(e.content).find('.owl-video');

				if ($element.length) {
					$element.css('display', 'none');
					this.fetch($element, $(e.content));
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Video.Defaults, this._core.options);

		// register event handlers
		this._core.$element.on(this._handlers);

		this._core.$element.on('click.owl.video', '.owl-video-play-icon', $.proxy(function(e) {
			this.play(e);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Video.Defaults = {
		video: false,
		videoHeight: false,
		videoWidth: false
	};

	/**
	 * Gets the video ID and the type (YouTube/Vimeo/vzaar only).
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {jQuery} item - The item containing the video.
	 */
	Video.prototype.fetch = function(target, item) {
			var type = (function() {
					if (target.attr('data-vimeo-id')) {
						return 'vimeo';
					} else if (target.attr('data-vzaar-id')) {
						return 'vzaar'
					} else {
						return 'youtube';
					}
				})(),
				id = target.attr('data-vimeo-id') || target.attr('data-youtube-id') || target.attr('data-vzaar-id'),
				width = target.attr('data-width') || this._core.settings.videoWidth,
				height = target.attr('data-height') || this._core.settings.videoHeight,
				url = target.attr('href');

		if (url) {

			/*
					Parses the id's out of the following urls (and probably more):
					https://www.youtube.com/watch?v=:id
					https://youtu.be/:id
					https://vimeo.com/:id
					https://vimeo.com/channels/:channel/:id
					https://vimeo.com/groups/:group/videos/:id
					https://app.vzaar.com/videos/:id

					Visual example: https://regexper.com/#(http%3A%7Chttps%3A%7C)%5C%2F%5C%2F(player.%7Cwww.%7Capp.)%3F(vimeo%5C.com%7Cyoutu(be%5C.com%7C%5C.be%7Cbe%5C.googleapis%5C.com)%7Cvzaar%5C.com)%5C%2F(video%5C%2F%7Cvideos%5C%2F%7Cembed%5C%2F%7Cchannels%5C%2F.%2B%5C%2F%7Cgroups%5C%2F.%2B%5C%2F%7Cwatch%5C%3Fv%3D%7Cv%5C%2F)%3F(%5BA-Za-z0-9._%25-%5D*)(%5C%26%5CS%2B)%3F
			*/

			id = url.match(/(http:|https:|)\/\/(player.|www.|app.)?(vimeo\.com|youtu(be\.com|\.be|be\.googleapis\.com)|vzaar\.com)\/(video\/|videos\/|embed\/|channels\/.+\/|groups\/.+\/|watch\?v=|v\/)?([A-Za-z0-9._%-]*)(\&\S+)?/);

			if (id[3].indexOf('youtu') > -1) {
				type = 'youtube';
			} else if (id[3].indexOf('vimeo') > -1) {
				type = 'vimeo';
			} else if (id[3].indexOf('vzaar') > -1) {
				type = 'vzaar';
			} else {
				throw new Error('Video URL not supported.');
			}
			id = id[6];
		} else {
			throw new Error('Missing video URL.');
		}

		this._videos[url] = {
			type: type,
			id: id,
			width: width,
			height: height
		};

		item.attr('data-video', url);

		this.thumbnail(target, this._videos[url]);
	};

	/**
	 * Creates video thumbnail.
	 * @protected
	 * @param {jQuery} target - The target containing the video data.
	 * @param {Object} info - The video info object.
	 * @see `fetch`
	 */
	Video.prototype.thumbnail = function(target, video) {
		var tnLink,
			icon,
			path,
			dimensions = video.width && video.height ? 'style="width:' + video.width + 'px;height:' + video.height + 'px;"' : '',
			customTn = target.find('img'),
			srcType = 'src',
			lazyClass = '',
			settings = this._core.settings,
			create = function(path) {
				icon = '<div class="owl-video-play-icon"></div>';

				if (settings.lazyLoad) {
					tnLink = '<div class="owl-video-tn ' + lazyClass + '" ' + srcType + '="' + path + '"></div>';
				} else {
					tnLink = '<div class="owl-video-tn" style="opacity:1;background-image:url(' + path + ')"></div>';
				}
				target.after(tnLink);
				target.after(icon);
			};

		// wrap video content into owl-video-wrapper div
		target.wrap('<div class="owl-video-wrapper"' + dimensions + '></div>');

		if (this._core.settings.lazyLoad) {
			srcType = 'data-src';
			lazyClass = 'owl-lazy';
		}

		// custom thumbnail
		if (customTn.length) {
			create(customTn.attr(srcType));
			customTn.remove();
			return false;
		}

		if (video.type === 'youtube') {
			path = "//img.youtube.com/vi/" + video.id + "/hqdefault.jpg";
			create(path);
		} else if (video.type === 'vimeo') {
			$.ajax({
				type: 'GET',
				url: '//vimeo.com/api/v2/video/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data[0].thumbnail_large;
					create(path);
				}
			});
		} else if (video.type === 'vzaar') {
			$.ajax({
				type: 'GET',
				url: '//vzaar.com/api/videos/' + video.id + '.json',
				jsonp: 'callback',
				dataType: 'jsonp',
				success: function(data) {
					path = data.framegrab_url;
					create(path);
				}
			});
		}
	};

	/**
	 * Stops the current video.
	 * @public
	 */
	Video.prototype.stop = function() {
		this._core.trigger('stop', null, 'video');
		this._playing.find('.owl-video-frame').remove();
		this._playing.removeClass('owl-video-playing');
		this._playing = null;
		this._core.leave('playing');
		this._core.trigger('stopped', null, 'video');
	};

	/**
	 * Starts the current video.
	 * @public
	 * @param {Event} event - The event arguments.
	 */
	Video.prototype.play = function(event) {
		var target = $(event.target),
			item = target.closest('.' + this._core.settings.itemClass),
			video = this._videos[item.attr('data-video')],
			width = video.width || '100%',
			height = video.height || this._core.$stage.height(),
			html;

		if (this._playing) {
			return;
		}

		this._core.enter('playing');
		this._core.trigger('play', null, 'video');

		item = this._core.items(this._core.relative(item.index()));

		this._core.reset(item.index());

		if (video.type === 'youtube') {
			html = '<iframe width="' + width + '" height="' + height + '" src="//www.youtube.com/embed/' +
				video.id + '?autoplay=1&rel=0&v=' + video.id + '" frameborder="0" allowfullscreen></iframe>';
		} else if (video.type === 'vimeo') {
			html = '<iframe src="//player.vimeo.com/video/' + video.id +
				'?autoplay=1" width="' + width + '" height="' + height +
				'" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>';
		} else if (video.type === 'vzaar') {
			html = '<iframe frameborder="0"' + 'height="' + height + '"' + 'width="' + width +
				'" allowfullscreen mozallowfullscreen webkitAllowFullScreen ' +
				'src="//view.vzaar.com/' + video.id + '/player?autoplay=true"></iframe>';
		}

		$('<div class="owl-video-frame">' + html + '</div>').insertAfter(item.find('.owl-video'));

		this._playing = item.addClass('owl-video-playing');
	};

	/**
	 * Checks whether an video is currently in full screen mode or not.
	 * @todo Bad style because looks like a readonly method but changes members.
	 * @protected
	 * @returns {Boolean}
	 */
	Video.prototype.isInFullScreen = function() {
		var element = document.fullscreenElement || document.mozFullScreenElement ||
				document.webkitFullscreenElement;

		return element && $(element).parent().hasClass('owl-video-frame');
	};

	/**
	 * Destroys the plugin.
	 */
	Video.prototype.destroy = function() {
		var handler, property;

		this._core.$element.off('click.owl.video');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Video = Video;

})(window.Zepto || window.jQuery, window, document);

/**
 * Animate Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the animate plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Animate = function(scope) {
		this.core = scope;
		this.core.options = $.extend({}, Animate.Defaults, this.core.options);
		this.swapping = true;
		this.previous = undefined;
		this.next = undefined;

		this.handlers = {
			'change.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.previous = this.core.current();
					this.next = e.property.value;
				}
			}, this),
			'drag.owl.carousel dragged.owl.carousel translated.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					this.swapping = e.type == 'translated';
				}
			}, this),
			'translate.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this.swapping && (this.core.options.animateOut || this.core.options.animateIn)) {
					this.swap();
				}
			}, this)
		};

		this.core.$element.on(this.handlers);
	};

	/**
	 * Default options.
	 * @public
	 */
	Animate.Defaults = {
		animateOut: false,
		animateIn: false
	};

	/**
	 * Toggles the animation classes whenever an translations starts.
	 * @protected
	 * @returns {Boolean|undefined}
	 */
	Animate.prototype.swap = function() {

		if (this.core.settings.items !== 1) {
			return;
		}

		if (!$.support.animation || !$.support.transition) {
			return;
		}

		this.core.speed(0);

		var left,
			clear = $.proxy(this.clear, this),
			previous = this.core.$stage.children().eq(this.previous),
			next = this.core.$stage.children().eq(this.next),
			incoming = this.core.settings.animateIn,
			outgoing = this.core.settings.animateOut;

		if (this.core.current() === this.previous) {
			return;
		}

		if (outgoing) {
			left = this.core.coordinates(this.previous) - this.core.coordinates(this.next);
			previous.one($.support.animation.end, clear)
				.css( { 'left': left + 'px' } )
				.addClass('animated owl-animated-out')
				.addClass(outgoing);
		}

		if (incoming) {
			next.one($.support.animation.end, clear)
				.addClass('animated owl-animated-in')
				.addClass(incoming);
		}
	};

	Animate.prototype.clear = function(e) {
		$(e.target).css( { 'left': '' } )
			.removeClass('animated owl-animated-out owl-animated-in')
			.removeClass(this.core.settings.animateIn)
			.removeClass(this.core.settings.animateOut);
		this.core.onTransitionEnd();
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Animate.prototype.destroy = function() {
		var handler, property;

		for (handler in this.handlers) {
			this.core.$element.off(handler, this.handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Animate = Animate;

})(window.Zepto || window.jQuery, window, document);

/**
 * Autoplay Plugin
 * @version 2.1.0
 * @author Bartosz Wojciechowski
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	/**
	 * Creates the autoplay plugin.
	 * @class The Autoplay Plugin
	 * @param {Owl} scope - The Owl Carousel
	 */
	var Autoplay = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * The autoplay timeout.
		 * @type {Timeout}
		 */
		this._timeout = null;

		/**
		 * Indicates whenever the autoplay is paused.
		 * @type {Boolean}
		 */
		this._paused = false;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'settings') {
					if (this._core.settings.autoplay) {
						this.play();
					} else {
						this.stop();
					}
				} else if (e.namespace && e.property.name === 'position') {
					//console.log('play?', e);
					if (this._core.settings.autoplay) {
						this._setAutoPlayInterval();
					}
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.autoplay) {
					this.play();
				}
			}, this),
			'play.owl.autoplay': $.proxy(function(e, t, s) {
				if (e.namespace) {
					this.play(t, s);
				}
			}, this),
			'stop.owl.autoplay': $.proxy(function(e) {
				if (e.namespace) {
					this.stop();
				}
			}, this),
			'mouseover.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'mouseleave.owl.autoplay': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.play();
				}
			}, this),
			'touchstart.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause && this._core.is('rotating')) {
					this.pause();
				}
			}, this),
			'touchend.owl.core': $.proxy(function() {
				if (this._core.settings.autoplayHoverPause) {
					this.play();
				}
			}, this)
		};

		// register event handlers
		this._core.$element.on(this._handlers);

		// set default options
		this._core.options = $.extend({}, Autoplay.Defaults, this._core.options);
	};

	/**
	 * Default options.
	 * @public
	 */
	Autoplay.Defaults = {
		autoplay: false,
		autoplayTimeout: 5000,
		autoplayHoverPause: false,
		autoplaySpeed: false
	};

	/**
	 * Starts the autoplay.
	 * @public
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 */
	Autoplay.prototype.play = function(timeout, speed) {
		this._paused = false;

		if (this._core.is('rotating')) {
			return;
		}

		this._core.enter('rotating');

		this._setAutoPlayInterval();
	};

	/**
	 * Gets a new timeout
	 * @private
	 * @param {Number} [timeout] - The interval before the next animation starts.
	 * @param {Number} [speed] - The animation speed for the animations.
	 * @return {Timeout}
	 */
	Autoplay.prototype._getNextTimeout = function(timeout, speed) {
		if ( this._timeout ) {
			window.clearTimeout(this._timeout);
		}
		return window.setTimeout($.proxy(function() {
			if (this._paused || this._core.is('busy') || this._core.is('interacting') || document.hidden) {
				return;
			}
			this._core.next(speed || this._core.settings.autoplaySpeed);
		}, this), timeout || this._core.settings.autoplayTimeout);
	};

	/**
	 * Sets autoplay in motion.
	 * @private
	 */
	Autoplay.prototype._setAutoPlayInterval = function() {
		this._timeout = this._getNextTimeout();
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.stop = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		window.clearTimeout(this._timeout);
		this._core.leave('rotating');
	};

	/**
	 * Stops the autoplay.
	 * @public
	 */
	Autoplay.prototype.pause = function() {
		if (!this._core.is('rotating')) {
			return;
		}

		this._paused = true;
	};

	/**
	 * Destroys the plugin.
	 */
	Autoplay.prototype.destroy = function() {
		var handler, property;

		this.stop();

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.autoplay = Autoplay;

})(window.Zepto || window.jQuery, window, document);

/**
 * Navigation Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the navigation plugin.
	 * @class The Navigation Plugin
	 * @param {Owl} carousel - The Owl Carousel.
	 */
	var Navigation = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Indicates whether the plugin is initialized or not.
		 * @protected
		 * @type {Boolean}
		 */
		this._initialized = false;

		/**
		 * The current paging indexes.
		 * @protected
		 * @type {Array}
		 */
		this._pages = [];

		/**
		 * All DOM elements of the user interface.
		 * @protected
		 * @type {Object}
		 */
		this._controls = {};

		/**
		 * Markup for an indicator.
		 * @protected
		 * @type {Array.<String>}
		 */
		this._templates = [];

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * Overridden methods of the carousel.
		 * @protected
		 * @type {Object}
		 */
		this._overrides = {
			next: this._core.next,
			prev: this._core.prev,
			to: this._core.to
		};

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.push('<div class="' + this._core.settings.dotClass + '">' +
						$(e.content).find('[data-dot]').addBack('[data-dot]').attr('data-dot') + '</div>');
				}
			}, this),
			'added.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 0, this._templates.pop());
				}
			}, this),
			'remove.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.dotsData) {
					this._templates.splice(e.position, 1);
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name == 'position') {
					this.draw();
				}
			}, this),
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && !this._initialized) {
					this._core.trigger('initialize', null, 'navigation');
					this.initialize();
					this.update();
					this.draw();
					this._initialized = true;
					this._core.trigger('initialized', null, 'navigation');
				}
			}, this),
			'refreshed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._initialized) {
					this._core.trigger('refresh', null, 'navigation');
					this.update();
					this.draw();
					this._core.trigger('refreshed', null, 'navigation');
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Navigation.Defaults, this._core.options);

		// register event handlers
		this.$element.on(this._handlers);
	};

	/**
	 * Default options.
	 * @public
	 * @todo Rename `slideBy` to `navBy`
	 */
	Navigation.Defaults = {
		nav: false,
		navText: [ 'prev', 'next' ],
		navSpeed: false,
		navElement: 'div',
		navContainer: false,
		navContainerClass: 'owl-nav',
		navClass: [ 'owl-prev', 'owl-next' ],
		slideBy: 1,
		dotClass: 'owl-dot',
		dotsClass: 'owl-dots',
		dots: true,
		dotsEach: false,
		dotsData: false,
		dotsSpeed: false,
		dotsContainer: false
	};

	/**
	 * Initializes the layout of the plugin and extends the carousel.
	 * @protected
	 */
	Navigation.prototype.initialize = function() {
		var override,
			settings = this._core.settings;

		// create DOM structure for relative navigation
		this._controls.$relative = (settings.navContainer ? $(settings.navContainer)
			: $('<div>').addClass(settings.navContainerClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$previous = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[0])
			.html(settings.navText[0])
			.prependTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.prev(settings.navSpeed);
			}, this));
		this._controls.$next = $('<' + settings.navElement + '>')
			.addClass(settings.navClass[1])
			.html(settings.navText[1])
			.appendTo(this._controls.$relative)
			.on('click', $.proxy(function(e) {
				this.next(settings.navSpeed);
			}, this));

		// create DOM structure for absolute navigation
		if (!settings.dotsData) {
			this._templates = [ $('<div>')
				.addClass(settings.dotClass)
				.append($('<span>'))
				.prop('outerHTML') ];
		}

		this._controls.$absolute = (settings.dotsContainer ? $(settings.dotsContainer)
			: $('<div>').addClass(settings.dotsClass).appendTo(this.$element)).addClass('disabled');

		this._controls.$absolute.on('click', 'div', $.proxy(function(e) {
			var index = $(e.target).parent().is(this._controls.$absolute)
				? $(e.target).index() : $(e.target).parent().index();

			e.preventDefault();

			this.to(index, settings.dotsSpeed);
		}, this));

		// override public methods of the carousel
		for (override in this._overrides) {
			this._core[override] = $.proxy(this[override], this);
		}
	};

	/**
	 * Destroys the plugin.
	 * @protected
	 */
	Navigation.prototype.destroy = function() {
		var handler, control, property, override;

		for (handler in this._handlers) {
			this.$element.off(handler, this._handlers[handler]);
		}
		for (control in this._controls) {
			this._controls[control].remove();
		}
		for (override in this.overides) {
			this._core[override] = this._overrides[override];
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	/**
	 * Updates the internal state.
	 * @protected
	 */
	Navigation.prototype.update = function() {
		var i, j, k,
			lower = this._core.clones().length / 2,
			upper = lower + this._core.items().length,
			maximum = this._core.maximum(true),
			settings = this._core.settings,
			size = settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items;

		if (settings.slideBy !== 'page') {
			settings.slideBy = Math.min(settings.slideBy, settings.items);
		}

		if (settings.dots || settings.slideBy == 'page') {
			this._pages = [];

			for (i = lower, j = 0, k = 0; i < upper; i++) {
				if (j >= size || j === 0) {
					this._pages.push({
						start: Math.min(maximum, i - lower),
						end: i - lower + size - 1
					});
					if (Math.min(maximum, i - lower) === maximum) {
						break;
					}
					j = 0, ++k;
				}
				j += this._core.mergers(this._core.relative(i));
			}
		}
	};

	/**
	 * Draws the user interface.
	 * @todo The option `dotsData` wont work.
	 * @protected
	 */
	Navigation.prototype.draw = function() {
		var difference,
			settings = this._core.settings,
			disabled = this._core.items().length <= settings.items,
			index = this._core.relative(this._core.current()),
			loop = settings.loop || settings.rewind;

		this._controls.$relative.toggleClass('disabled', !settings.nav || disabled);

		if (settings.nav) {
			this._controls.$previous.toggleClass('disabled', !loop && index <= this._core.minimum(true));
			this._controls.$next.toggleClass('disabled', !loop && index >= this._core.maximum(true));
		}

		this._controls.$absolute.toggleClass('disabled', !settings.dots || disabled);

		if (settings.dots) {
			difference = this._pages.length - this._controls.$absolute.children().length;

			if (settings.dotsData && difference !== 0) {
				this._controls.$absolute.html(this._templates.join(''));
			} else if (difference > 0) {
				this._controls.$absolute.append(new Array(difference + 1).join(this._templates[0]));
			} else if (difference < 0) {
				this._controls.$absolute.children().slice(difference).remove();
			}

			this._controls.$absolute.find('.active').removeClass('active');
			this._controls.$absolute.children().eq($.inArray(this.current(), this._pages)).addClass('active');
		}
	};

	/**
	 * Extends event data.
	 * @protected
	 * @param {Event} event - The event object which gets thrown.
	 */
	Navigation.prototype.onTrigger = function(event) {
		var settings = this._core.settings;

		event.page = {
			index: $.inArray(this.current(), this._pages),
			count: this._pages.length,
			size: settings && (settings.center || settings.autoWidth || settings.dotsData
				? 1 : settings.dotsEach || settings.items)
		};
	};

	/**
	 * Gets the current page position of the carousel.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.current = function() {
		var current = this._core.relative(this._core.current());
		return $.grep(this._pages, $.proxy(function(page, index) {
			return page.start <= current && page.end >= current;
		}, this)).pop();
	};

	/**
	 * Gets the current succesor/predecessor position.
	 * @protected
	 * @returns {Number}
	 */
	Navigation.prototype.getPosition = function(successor) {
		var position, length,
			settings = this._core.settings;

		if (settings.slideBy == 'page') {
			position = $.inArray(this.current(), this._pages);
			length = this._pages.length;
			successor ? ++position : --position;
			position = this._pages[((position % length) + length) % length].start;
		} else {
			position = this._core.relative(this._core.current());
			length = this._core.items().length;
			successor ? position += settings.slideBy : position -= settings.slideBy;
		}

		return position;
	};

	/**
	 * Slides to the next item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.next = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(true), speed);
	};

	/**
	 * Slides to the previous item or page.
	 * @public
	 * @param {Number} [speed=false] - The time in milliseconds for the transition.
	 */
	Navigation.prototype.prev = function(speed) {
		$.proxy(this._overrides.to, this._core)(this.getPosition(false), speed);
	};

	/**
	 * Slides to the specified item or page.
	 * @public
	 * @param {Number} position - The position of the item or page.
	 * @param {Number} [speed] - The time in milliseconds for the transition.
	 * @param {Boolean} [standard=false] - Whether to use the standard behaviour or not.
	 */
	Navigation.prototype.to = function(position, speed, standard) {
		var length;

		if (!standard && this._pages.length) {
			length = this._pages.length;
			$.proxy(this._overrides.to, this._core)(this._pages[((position % length) + length) % length].start, speed);
		} else {
			$.proxy(this._overrides.to, this._core)(position, speed);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Navigation = Navigation;

})(window.Zepto || window.jQuery, window, document);

/**
 * Hash Plugin
 * @version 2.1.0
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {
	'use strict';

	/**
	 * Creates the hash plugin.
	 * @class The Hash Plugin
	 * @param {Owl} carousel - The Owl Carousel
	 */
	var Hash = function(carousel) {
		/**
		 * Reference to the core.
		 * @protected
		 * @type {Owl}
		 */
		this._core = carousel;

		/**
		 * Hash index for the items.
		 * @protected
		 * @type {Object}
		 */
		this._hashes = {};

		/**
		 * The carousel element.
		 * @type {jQuery}
		 */
		this.$element = this._core.$element;

		/**
		 * All event handlers.
		 * @protected
		 * @type {Object}
		 */
		this._handlers = {
			'initialized.owl.carousel': $.proxy(function(e) {
				if (e.namespace && this._core.settings.startPosition === 'URLHash') {
					$(window).trigger('hashchange.owl.navigation');
				}
			}, this),
			'prepared.owl.carousel': $.proxy(function(e) {
				if (e.namespace) {
					var hash = $(e.content).find('[data-hash]').addBack('[data-hash]').attr('data-hash');

					if (!hash) {
						return;
					}

					this._hashes[hash] = e.content;
				}
			}, this),
			'changed.owl.carousel': $.proxy(function(e) {
				if (e.namespace && e.property.name === 'position') {
					var current = this._core.items(this._core.relative(this._core.current())),
						hash = $.map(this._hashes, function(item, hash) {
							return item === current ? hash : null;
						}).join();

					if (!hash || window.location.hash.slice(1) === hash) {
						return;
					}

					window.location.hash = hash;
				}
			}, this)
		};

		// set default options
		this._core.options = $.extend({}, Hash.Defaults, this._core.options);

		// register the event handlers
		this.$element.on(this._handlers);

		// register event listener for hash navigation
		$(window).on('hashchange.owl.navigation', $.proxy(function(e) {
			var hash = window.location.hash.substring(1),
				items = this._core.$stage.children(),
				position = this._hashes[hash] && items.index(this._hashes[hash]);

			if (position === undefined || position === this._core.current()) {
				return;
			}

			this._core.to(this._core.relative(position), false, true);
		}, this));
	};

	/**
	 * Default options.
	 * @public
	 */
	Hash.Defaults = {
		URLhashListener: false
	};

	/**
	 * Destroys the plugin.
	 * @public
	 */
	Hash.prototype.destroy = function() {
		var handler, property;

		$(window).off('hashchange.owl.navigation');

		for (handler in this._handlers) {
			this._core.$element.off(handler, this._handlers[handler]);
		}
		for (property in Object.getOwnPropertyNames(this)) {
			typeof this[property] != 'function' && (this[property] = null);
		}
	};

	$.fn.owlCarousel.Constructor.Plugins.Hash = Hash;

})(window.Zepto || window.jQuery, window, document);

/**
 * Support Plugin
 *
 * @version 2.1.0
 * @author Vivid Planet Software GmbH
 * @author Artus Kolanowski
 * @author David Deutsch
 * @license The MIT License (MIT)
 */
;(function($, window, document, undefined) {

	var style = $('<support>').get(0).style,
		prefixes = 'Webkit Moz O ms'.split(' '),
		events = {
			transition: {
				end: {
					WebkitTransition: 'webkitTransitionEnd',
					MozTransition: 'transitionend',
					OTransition: 'oTransitionEnd',
					transition: 'transitionend'
				}
			},
			animation: {
				end: {
					WebkitAnimation: 'webkitAnimationEnd',
					MozAnimation: 'animationend',
					OAnimation: 'oAnimationEnd',
					animation: 'animationend'
				}
			}
		},
		tests = {
			csstransforms: function() {
				return !!test('transform');
			},
			csstransforms3d: function() {
				return !!test('perspective');
			},
			csstransitions: function() {
				return !!test('transition');
			},
			cssanimations: function() {
				return !!test('animation');
			}
		};

	function test(property, prefixed) {
		var result = false,
			upper = property.charAt(0).toUpperCase() + property.slice(1);

		$.each((property + ' ' + prefixes.join(upper + ' ') + upper).split(' '), function(i, property) {
			if (style[property] !== undefined) {
				result = prefixed ? property : true;
				return false;
			}
		});

		return result;
	}

	function prefixed(property) {
		return test(property, true);
	}

	if (tests.csstransitions()) {
		/* jshint -W053 */
		$.support.transition = new String(prefixed('transition'))
		$.support.transition.end = events.transition.end[ $.support.transition ];
	}

	if (tests.cssanimations()) {
		/* jshint -W053 */
		$.support.animation = new String(prefixed('animation'))
		$.support.animation.end = events.animation.end[ $.support.animation ];
	}

	if (tests.csstransforms()) {
		/* jshint -W053 */
		$.support.transform = new String(prefixed('transform'));
		$.support.transform3d = tests.csstransforms3d();
	}

})(window.Zepto || window.jQuery, window, document);

;/*
 * jQuery Easing v1.3 - http://gsgd.co.uk/sandbox/jquery/easing/
 *
 * Uses the built in easing capabilities added In jQuery 1.1
 * to offer multiple easing options
 *
 * TERMS OF USE - jQuery Easing
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2008 George McGinley Smith
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
*/

// t: current time, b: begInnIng value, c: change In value, d: duration
jQuery.easing['jswing'] = jQuery.easing['swing'];

jQuery.extend( jQuery.easing,
{
	def: 'easeOutQuad',
	swing: function (x, t, b, c, d) {
		//alert(jQuery.easing.default);
		return jQuery.easing[jQuery.easing.def](x, t, b, c, d);
	},
	easeInQuad: function (x, t, b, c, d) {
		return c*(t/=d)*t + b;
	},
	easeOutQuad: function (x, t, b, c, d) {
		return -c *(t/=d)*(t-2) + b;
	},
	easeInOutQuad: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t + b;
		return -c/2 * ((--t)*(t-2) - 1) + b;
	},
	easeInCubic: function (x, t, b, c, d) {
		return c*(t/=d)*t*t + b;
	},
	easeOutCubic: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t + 1) + b;
	},
	easeInOutCubic: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t + b;
		return c/2*((t-=2)*t*t + 2) + b;
	},
	easeInQuart: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t + b;
	},
	easeOutQuart: function (x, t, b, c, d) {
		return -c * ((t=t/d-1)*t*t*t - 1) + b;
	},
	easeInOutQuart: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t + b;
		return -c/2 * ((t-=2)*t*t*t - 2) + b;
	},
	easeInQuint: function (x, t, b, c, d) {
		return c*(t/=d)*t*t*t*t + b;
	},
	easeOutQuint: function (x, t, b, c, d) {
		return c*((t=t/d-1)*t*t*t*t + 1) + b;
	},
	easeInOutQuint: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return c/2*t*t*t*t*t + b;
		return c/2*((t-=2)*t*t*t*t + 2) + b;
	},
	easeInSine: function (x, t, b, c, d) {
		return -c * Math.cos(t/d * (Math.PI/2)) + c + b;
	},
	easeOutSine: function (x, t, b, c, d) {
		return c * Math.sin(t/d * (Math.PI/2)) + b;
	},
	easeInOutSine: function (x, t, b, c, d) {
		return -c/2 * (Math.cos(Math.PI*t/d) - 1) + b;
	},
	easeInExpo: function (x, t, b, c, d) {
		return (t==0) ? b : c * Math.pow(2, 10 * (t/d - 1)) + b;
	},
	easeOutExpo: function (x, t, b, c, d) {
		return (t==d) ? b+c : c * (-Math.pow(2, -10 * t/d) + 1) + b;
	},
	easeInOutExpo: function (x, t, b, c, d) {
		if (t==0) return b;
		if (t==d) return b+c;
		if ((t/=d/2) < 1) return c/2 * Math.pow(2, 10 * (t - 1)) + b;
		return c/2 * (-Math.pow(2, -10 * --t) + 2) + b;
	},
	easeInCirc: function (x, t, b, c, d) {
		return -c * (Math.sqrt(1 - (t/=d)*t) - 1) + b;
	},
	easeOutCirc: function (x, t, b, c, d) {
		return c * Math.sqrt(1 - (t=t/d-1)*t) + b;
	},
	easeInOutCirc: function (x, t, b, c, d) {
		if ((t/=d/2) < 1) return -c/2 * (Math.sqrt(1 - t*t) - 1) + b;
		return c/2 * (Math.sqrt(1 - (t-=2)*t) + 1) + b;
	},
	easeInElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return -(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
	},
	easeOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d)==1) return b+c;  if (!p) p=d*.3;
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		return a*Math.pow(2,-10*t) * Math.sin( (t*d-s)*(2*Math.PI)/p ) + c + b;
	},
	easeInOutElastic: function (x, t, b, c, d) {
		var s=1.70158;var p=0;var a=c;
		if (t==0) return b;  if ((t/=d/2)==2) return b+c;  if (!p) p=d*(.3*1.5);
		if (a < Math.abs(c)) { a=c; var s=p/4; }
		else var s = p/(2*Math.PI) * Math.asin (c/a);
		if (t < 1) return -.5*(a*Math.pow(2,10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )) + b;
		return a*Math.pow(2,-10*(t-=1)) * Math.sin( (t*d-s)*(2*Math.PI)/p )*.5 + c + b;
	},
	easeInBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*(t/=d)*t*((s+1)*t - s) + b;
	},
	easeOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158;
		return c*((t=t/d-1)*t*((s+1)*t + s) + 1) + b;
	},
	easeInOutBack: function (x, t, b, c, d, s) {
		if (s == undefined) s = 1.70158; 
		if ((t/=d/2) < 1) return c/2*(t*t*(((s*=(1.525))+1)*t - s)) + b;
		return c/2*((t-=2)*t*(((s*=(1.525))+1)*t + s) + 2) + b;
	},
	easeInBounce: function (x, t, b, c, d) {
		return c - jQuery.easing.easeOutBounce (x, d-t, 0, c, d) + b;
	},
	easeOutBounce: function (x, t, b, c, d) {
		if ((t/=d) < (1/2.75)) {
			return c*(7.5625*t*t) + b;
		} else if (t < (2/2.75)) {
			return c*(7.5625*(t-=(1.5/2.75))*t + .75) + b;
		} else if (t < (2.5/2.75)) {
			return c*(7.5625*(t-=(2.25/2.75))*t + .9375) + b;
		} else {
			return c*(7.5625*(t-=(2.625/2.75))*t + .984375) + b;
		}
	},
	easeInOutBounce: function (x, t, b, c, d) {
		if (t < d/2) return jQuery.easing.easeInBounce (x, t*2, 0, c, d) * .5 + b;
		return jQuery.easing.easeOutBounce (x, t*2-d, 0, c, d) * .5 + c*.5 + b;
	}
});

/*
 *
 * TERMS OF USE - EASING EQUATIONS
 * 
 * Open source under the BSD License. 
 * 
 * Copyright Â© 2001 Robert Penner
 * All rights reserved.
 * 
 * Redistribution and use in source and binary forms, with or without modification, 
 * are permitted provided that the following conditions are met:
 * 
 * Redistributions of source code must retain the above copyright notice, this list of 
 * conditions and the following disclaimer.
 * Redistributions in binary form must reproduce the above copyright notice, this list 
 * of conditions and the following disclaimer in the documentation and/or other materials 
 * provided with the distribution.
 * 
 * Neither the name of the author nor the names of contributors may be used to endorse 
 * or promote products derived from this software without specific prior written permission.
 * 
 * THIS SOFTWARE IS PROVIDED BY THE COPYRIGHT HOLDERS AND CONTRIBUTORS "AS IS" AND ANY 
 * EXPRESS OR IMPLIED WARRANTIES, INCLUDING, BUT NOT LIMITED TO, THE IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS FOR A PARTICULAR PURPOSE ARE DISCLAIMED. IN NO EVENT SHALL THE
 *  COPYRIGHT OWNER OR CONTRIBUTORS BE LIABLE FOR ANY DIRECT, INDIRECT, INCIDENTAL, SPECIAL,
 *  EXEMPLARY, OR CONSEQUENTIAL DAMAGES (INCLUDING, BUT NOT LIMITED TO, PROCUREMENT OF SUBSTITUTE
 *  GOODS OR SERVICES; LOSS OF USE, DATA, OR PROFITS; OR BUSINESS INTERRUPTION) HOWEVER CAUSED 
 * AND ON ANY THEORY OF LIABILITY, WHETHER IN CONTRACT, STRICT LIABILITY, OR TORT (INCLUDING
 *  NEGLIGENCE OR OTHERWISE) ARISING IN ANY WAY OUT OF THE USE OF THIS SOFTWARE, EVEN IF ADVISED 
 * OF THE POSSIBILITY OF SUCH DAMAGE. 
 *
 */
;/*!
 * parallax.js v1.5.0 (http://pixelcog.github.io/parallax.js/)
 * @copyright 2016 PixelCog, Inc.
 * @license MIT (https://github.com/pixelcog/parallax.js/blob/master/LICENSE)
 */
!function(t,i,e,s){function o(i,e){var h=this;"object"==typeof e&&(delete e.refresh,delete e.render,t.extend(this,e)),this.$element=t(i),!this.imageSrc&&this.$element.is("img")&&(this.imageSrc=this.$element.attr("src"));var r=(this.position+"").toLowerCase().match(/\S+/g)||[];if(r.length<1&&r.push("center"),1==r.length&&r.push(r[0]),"top"!=r[0]&&"bottom"!=r[0]&&"left"!=r[1]&&"right"!=r[1]||(r=[r[1],r[0]]),this.positionX!==s&&(r[0]=this.positionX.toLowerCase()),this.positionY!==s&&(r[1]=this.positionY.toLowerCase()),h.positionX=r[0],h.positionY=r[1],"left"!=this.positionX&&"right"!=this.positionX&&(isNaN(parseInt(this.positionX))?this.positionX="center":this.positionX=parseInt(this.positionX)),"top"!=this.positionY&&"bottom"!=this.positionY&&(isNaN(parseInt(this.positionY))?this.positionY="center":this.positionY=parseInt(this.positionY)),this.position=this.positionX+(isNaN(this.positionX)?"":"px")+" "+this.positionY+(isNaN(this.positionY)?"":"px"),navigator.userAgent.match(/(iPod|iPhone|iPad)/))return this.imageSrc&&this.iosFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;if(navigator.userAgent.match(/(Android)/))return this.imageSrc&&this.androidFix&&!this.$element.is("img")&&this.$element.css({backgroundImage:'url("'+this.imageSrc+'")',backgroundSize:"cover",backgroundPosition:this.position}),this;this.$mirror=t("<div />").prependTo(this.mirrorContainer);var a=this.$element.find(">.parallax-slider"),n=!1;0==a.length?this.$slider=t("<img />").prependTo(this.$mirror):(this.$slider=a.prependTo(this.$mirror),n=!0),this.$mirror.addClass("parallax-mirror").css({visibility:"hidden",zIndex:this.zIndex,position:"fixed",top:0,left:0,overflow:"hidden"}),this.$slider.addClass("parallax-slider").one("load",function(){h.naturalHeight&&h.naturalWidth||(h.naturalHeight=this.naturalHeight||this.height||1,h.naturalWidth=this.naturalWidth||this.width||1),h.aspectRatio=h.naturalWidth/h.naturalHeight,o.isSetup||o.setup(),o.sliders.push(h),o.isFresh=!1,o.requestRender()}),n||(this.$slider[0].src=this.imageSrc),(this.naturalHeight&&this.naturalWidth||this.$slider[0].complete||a.length>0)&&this.$slider.trigger("load")}!function(){for(var t=0,e=["ms","moz","webkit","o"],s=0;s<e.length&&!i.requestAnimationFrame;++s)i.requestAnimationFrame=i[e[s]+"RequestAnimationFrame"],i.cancelAnimationFrame=i[e[s]+"CancelAnimationFrame"]||i[e[s]+"CancelRequestAnimationFrame"];i.requestAnimationFrame||(i.requestAnimationFrame=function(e){var s=(new Date).getTime(),o=Math.max(0,16-(s-t)),h=i.setTimeout(function(){e(s+o)},o);return t=s+o,h}),i.cancelAnimationFrame||(i.cancelAnimationFrame=function(t){clearTimeout(t)})}(),t.extend(o.prototype,{speed:.2,bleed:0,zIndex:-100,iosFix:!0,androidFix:!0,position:"center",overScrollFix:!1,mirrorContainer:"body",refresh:function(){this.boxWidth=this.$element.outerWidth(),this.boxHeight=this.$element.outerHeight()+2*this.bleed,this.boxOffsetTop=this.$element.offset().top-this.bleed,this.boxOffsetLeft=this.$element.offset().left,this.boxOffsetBottom=this.boxOffsetTop+this.boxHeight;var t,i=o.winHeight,e=o.docHeight,s=Math.min(this.boxOffsetTop,e-i),h=Math.max(this.boxOffsetTop+this.boxHeight-i,0),r=this.boxHeight+(s-h)*(1-this.speed)|0,a=(this.boxOffsetTop-s)*(1-this.speed)|0;r*this.aspectRatio>=this.boxWidth?(this.imageWidth=r*this.aspectRatio|0,this.imageHeight=r,this.offsetBaseTop=a,t=this.imageWidth-this.boxWidth,"left"==this.positionX?this.offsetLeft=0:"right"==this.positionX?this.offsetLeft=-t:isNaN(this.positionX)?this.offsetLeft=-t/2|0:this.offsetLeft=Math.max(this.positionX,-t)):(this.imageWidth=this.boxWidth,this.imageHeight=this.boxWidth/this.aspectRatio|0,this.offsetLeft=0,t=this.imageHeight-r,"top"==this.positionY?this.offsetBaseTop=a:"bottom"==this.positionY?this.offsetBaseTop=a-t:isNaN(this.positionY)?this.offsetBaseTop=a-t/2|0:this.offsetBaseTop=a+Math.max(this.positionY,-t))},render:function(){var t=o.scrollTop,i=o.scrollLeft,e=this.overScrollFix?o.overScroll:0,s=t+o.winHeight;this.boxOffsetBottom>t&&this.boxOffsetTop<=s?(this.visibility="visible",this.mirrorTop=this.boxOffsetTop-t,this.mirrorLeft=this.boxOffsetLeft-i,this.offsetTop=this.offsetBaseTop-this.mirrorTop*(1-this.speed)):this.visibility="hidden",this.$mirror.css({transform:"translate3d("+this.mirrorLeft+"px, "+(this.mirrorTop-e)+"px, 0px)",visibility:this.visibility,height:this.boxHeight,width:this.boxWidth}),this.$slider.css({transform:"translate3d("+this.offsetLeft+"px, "+this.offsetTop+"px, 0px)",position:"absolute",height:this.imageHeight,width:this.imageWidth,maxWidth:"none"})}}),t.extend(o,{scrollTop:0,scrollLeft:0,winHeight:0,winWidth:0,docHeight:1<<30,docWidth:1<<30,sliders:[],isReady:!1,isFresh:!1,isBusy:!1,setup:function(){function s(){if(p==i.pageYOffset)return i.requestAnimationFrame(s),!1;p=i.pageYOffset,h.render(),i.requestAnimationFrame(s)}if(!this.isReady){var h=this,r=t(e),a=t(i),n=function(){o.winHeight=a.height(),o.winWidth=a.width(),o.docHeight=r.height(),o.docWidth=r.width()},l=function(){var t=a.scrollTop(),i=o.docHeight-o.winHeight,e=o.docWidth-o.winWidth;o.scrollTop=Math.max(0,Math.min(i,t)),o.scrollLeft=Math.max(0,Math.min(e,a.scrollLeft())),o.overScroll=Math.max(t-i,Math.min(t,0))};a.on("resize.px.parallax load.px.parallax",function(){n(),h.refresh(),o.isFresh=!1,o.requestRender()}).on("scroll.px.parallax load.px.parallax",function(){l(),o.requestRender()}),n(),l(),this.isReady=!0;var p=-1;s()}},configure:function(i){"object"==typeof i&&(delete i.refresh,delete i.render,t.extend(this.prototype,i))},refresh:function(){t.each(this.sliders,function(){this.refresh()}),this.isFresh=!0},render:function(){this.isFresh||this.refresh(),t.each(this.sliders,function(){this.render()})},requestRender:function(){var t=this;t.render(),t.isBusy=!1},destroy:function(e){var s,h=t(e).data("px.parallax");for(h.$mirror.remove(),s=0;s<this.sliders.length;s+=1)this.sliders[s]==h&&this.sliders.splice(s,1);t(e).data("px.parallax",!1),0===this.sliders.length&&(t(i).off("scroll.px.parallax resize.px.parallax load.px.parallax"),this.isReady=!1,o.isSetup=!1)}});var h=t.fn.parallax;t.fn.parallax=function(s){return this.each(function(){var h=t(this),r="object"==typeof s&&s;this==i||this==e||h.is("body")?o.configure(r):h.data("px.parallax")?"object"==typeof s&&t.extend(h.data("px.parallax"),r):(r=t.extend({},h.data(),r),h.data("px.parallax",new o(this,r))),"string"==typeof s&&("destroy"==s?o.destroy(this):o[s]())})},t.fn.parallax.Constructor=o,t.fn.parallax.noConflict=function(){return t.fn.parallax=h,this},t(function(){t('[data-parallax="scroll"]').parallax()})}(jQuery,window,document);
;/* JS Document */

/******************************

[Table of Contents]

1. Vars and Inits
2. Set Header
3. Init Header Search
4. Init Menu
5. Init Home Slider
6. Init Courses Slider
7. Init Milestones
8. Init Accordions


******************************/

$(document).ready(function()
{
	"use strict";

	/* 

	1. Vars and Inits

	*/

	var menu = $('.menu');
	var menuActive = false;
	var header = $('.header');
	var burger = $('.hamburger');
	var ctrl = new ScrollMagic.Controller();

	setHeader();

	$(window).on('resize', function()
	{
		setHeader();
	});

	$(document).on('scroll', function()
	{
		setHeader();
	});

	initHeaderSearch();
	initMenu();
	initHomeSlider();
	initCoursesSlider();
	initMilestones();
	initAccordions();

	/* 

	2. Set Header

	*/

	function setHeader()
	{
		if($(window).scrollTop() > 100)
		{
			header.addClass('scrolled');
		}
		else
		{
			header.removeClass('scrolled');
		}
	}

	/* 

	3. Init Header Search

	*/

	function initHeaderSearch()
	{
		if($('.search_button').length)
		{
			$('.search_button').on('click', function()
			{
				if($('.header_search_container').length)
				{
					$('.header_search_container').toggleClass('active');
				}
			});
		}
	}

	/* 

	4. Init Menu

	*/

	function initMenu()
	{
		if($('.menu').length)
		{
			var menu = $('.menu');
			if($('.hamburger').length)
			{
				burger.on('click', function()
				{
					if(menuActive)
					{
						closeMenu();
					}
					else
					{
						openMenu();

						$(document).one('click', function cls(e)
						{
							if($(e.target).hasClass('menu_mm'))
							{
								$(document).one('click', cls);
							}
							else
							{
								closeMenu();
							}
						});
					}
				});
			}
		}
	}

	function openMenu()
	{
		menu.addClass('active');
		menuActive = true;
	}

	function closeMenu()
	{
		menu.removeClass('active');
		menuActive = false;
	}

	/* 

	5. Init Home Slider

	*/

	function initHomeSlider()
	{
		if($('.home_slider').length)
		{
			var homeSlider = $('.home_slider');
			homeSlider.owlCarousel(
			{
				items:1,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				dots:false,
				nav:false,
				smartSpeed:1200
			});

			if($('.home_slider_prev').length)
			{
				var prev = $('.home_slider_prev');
				prev.on('click', function()
				{
					homeSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.home_slider_next').length)
			{
				var next = $('.home_slider_next');
				next.on('click', function()
				{
					homeSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	6. Init Courses Slider

	*/

	function initCoursesSlider()
	{
		if($('.courses_slider').length)
		{
			var coursesSlider = $('.courses_slider');
			coursesSlider.owlCarousel(
			{
				items:3,
				loop:true,
				autoplay:true,
				autoplayTimeout:8000,
				nav:false,
				dots:false,
				smartSpeed:1200,
				margin:30,
				responsive:
				{
					0:
					{
						items:1
					},
					768:
					{
						items:2
					},
					992:
					{
						items:3
					}
				}
			});

			if($('.courses_slider_prev').length)
			{
				var prev = $('.courses_slider_prev');
				prev.on('click', function()
				{
					coursesSlider.trigger('prev.owl.carousel');
				});
			}

			if($('.courses_slider_next').length)
			{
				var next = $('.courses_slider_next');
				next.on('click', function()
				{
					coursesSlider.trigger('next.owl.carousel');
				});
			}
		}
	}

	/* 

	7. Initialize Milestones

	*/

	function initMilestones()
	{
		if($('.milestone_counter').length)
		{
			var milestoneItems = $('.milestone_counter');

	    	milestoneItems.each(function(i)
	    	{
	    		var ele = $(this);
	    		var endValue = ele.data('end-value');
	    		var eleValue = ele.text();

	    		/* Use data-sign-before and data-sign-after to add signs
	    		infront or behind the counter number (+, k, etc) */
	    		var signBefore = "";
	    		var signAfter = "";

	    		if(ele.attr('data-sign-before'))
	    		{
	    			signBefore = ele.attr('data-sign-before');
	    		}

	    		if(ele.attr('data-sign-after'))
	    		{
	    			signAfter = ele.attr('data-sign-after');
	    		}

	    		var milestoneScene = new ScrollMagic.Scene({
		    		triggerElement: this,
		    		triggerHook: 'onEnter',
		    		reverse:false
		    	})
		    	.on('start', function()
		    	{
		    		// var counter = {value:eleValue};
		    		// var counterTween = TweenMax.to(counter, 4,
		    		// {
		    		// 	value: endValue,
		    		// 	roundProps:"value", 
					// 	ease: Circ.easeOut, 
					// 	onUpdate:function()
					// 	{
					// 		//document.getElementsByClassName('milestone_counter')[i].innerHTML = signBefore + counter.value + signAfter;
					// 	}
		    		// });
		    	})
			    .addTo(ctrl);
	    	});
		}
	}

	/* 

	8. Init Accordions

	*/

	function initAccordions()
	{
		if($('.accordion').length)
		{
			var accs = $('.accordion');

			accs.each(function()
			{
				var acc = $(this);

				if(acc.hasClass('active'))
				{
					var panel = $(acc.next());
					var panelH = panel.prop('scrollHeight') + "px";
					
					if(panel.css('max-height') == "0px")
					{
						panel.css('max-height', panel.prop('scrollHeight') + "px");
					}
					else
					{
						panel.css('max-height', "0px");
					} 
				}

				acc.on('click', function()
				{
					if(acc.hasClass('active'))
					{
						acc.removeClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
					else
					{
						acc.addClass('active');
						var panel = $(acc.next());
						var panelH = panel.prop('scrollHeight') + "px";
						
						if(panel.css('max-height') == "0px")
						{
							panel.css('max-height', panel.prop('scrollHeight') + "px");
						}
						else
						{
							panel.css('max-height', "0px");
						} 
					}
				});
			});
		}
	}

});
;/*! Select2 4.0.8 | https://github.com/select2/select2/blob/master/LICENSE.md */
!function(n){"function"==typeof define&&define.amd?define(["jquery"],n):"object"==typeof module&&module.exports?module.exports=function(e,t){return void 0===t&&(t="undefined"!=typeof window?require("jquery"):require("jquery")(e)),n(t),t}:n(jQuery)}(function(d){var e=function(){if(d&&d.fn&&d.fn.select2&&d.fn.select2.amd)var e=d.fn.select2.amd;var t,n,i,h,o,s,f,g,m,v,y,_,r,a,w,l;function b(e,t){return r.call(e,t)}function c(e,t){var n,i,r,o,s,a,l,c,u,d,p,h=t&&t.split("/"),f=y.map,g=f&&f["*"]||{};if(e){for(s=(e=e.split("/")).length-1,y.nodeIdCompat&&w.test(e[s])&&(e[s]=e[s].replace(w,"")),"."===e[0].charAt(0)&&h&&(e=h.slice(0,h.length-1).concat(e)),u=0;u<e.length;u++)if("."===(p=e[u]))e.splice(u,1),u-=1;else if(".."===p){if(0===u||1===u&&".."===e[2]||".."===e[u-1])continue;0<u&&(e.splice(u-1,2),u-=2)}e=e.join("/")}if((h||g)&&f){for(u=(n=e.split("/")).length;0<u;u-=1){if(i=n.slice(0,u).join("/"),h)for(d=h.length;0<d;d-=1)if(r=(r=f[h.slice(0,d).join("/")])&&r[i]){o=r,a=u;break}if(o)break;!l&&g&&g[i]&&(l=g[i],c=u)}!o&&l&&(o=l,a=c),o&&(n.splice(0,a,o),e=n.join("/"))}return e}function A(t,n){return function(){var e=a.call(arguments,0);return"string"!=typeof e[0]&&1===e.length&&e.push(null),s.apply(h,e.concat([t,n]))}}function x(t){return function(e){m[t]=e}}function S(e){if(b(v,e)){var t=v[e];delete v[e],_[e]=!0,o.apply(h,t)}if(!b(m,e)&&!b(_,e))throw new Error("No "+e);return m[e]}function u(e){var t,n=e?e.indexOf("!"):-1;return-1<n&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function D(e){return e?u(e):[]}return e&&e.requirejs||(e?n=e:e={},m={},v={},y={},_={},r=Object.prototype.hasOwnProperty,a=[].slice,w=/\.js$/,f=function(e,t){var n,i=u(e),r=i[0],o=t[1];return e=i[1],r&&(n=S(r=c(r,o))),r?e=n&&n.normalize?n.normalize(e,function(t){return function(e){return c(e,t)}}(o)):c(e,o):(r=(i=u(e=c(e,o)))[0],e=i[1],r&&(n=S(r))),{f:r?r+"!"+e:e,n:e,pr:r,p:n}},g={require:function(e){return A(e)},exports:function(e){var t=m[e];return void 0!==t?t:m[e]={}},module:function(e){return{id:e,uri:"",exports:m[e],config:function(e){return function(){return y&&y.config&&y.config[e]||{}}}(e)}}},o=function(e,t,n,i){var r,o,s,a,l,c,u,d=[],p=typeof n;if(c=D(i=i||e),"undefined"==p||"function"==p){for(t=!t.length&&n.length?["require","exports","module"]:t,l=0;l<t.length;l+=1)if("require"===(o=(a=f(t[l],c)).f))d[l]=g.require(e);else if("exports"===o)d[l]=g.exports(e),u=!0;else if("module"===o)r=d[l]=g.module(e);else if(b(m,o)||b(v,o)||b(_,o))d[l]=S(o);else{if(!a.p)throw new Error(e+" missing "+o);a.p.load(a.n,A(i,!0),x(o),{}),d[l]=m[o]}s=n?n.apply(m[e],d):void 0,e&&(r&&r.exports!==h&&r.exports!==m[e]?m[e]=r.exports:s===h&&u||(m[e]=s))}else e&&(m[e]=n)},t=n=s=function(e,t,n,i,r){if("string"==typeof e)return g[e]?g[e](t):S(f(e,D(t)).f);if(!e.splice){if((y=e).deps&&s(y.deps,y.callback),!t)return;t.splice?(e=t,t=n,n=null):e=h}return t=t||function(){},"function"==typeof n&&(n=i,i=r),i?o(h,e,t,n):setTimeout(function(){o(h,e,t,n)},4),s},s.config=function(e){return s(e)},t._defined=m,(i=function(e,t,n){if("string"!=typeof e)throw new Error("See almond README: incorrect module build, no module name");t.splice||(n=t,t=[]),b(m,e)||b(v,e)||(v[e]=[e,t,n])}).amd={jQuery:!0},e.requirejs=t,e.require=n,e.define=i),e.define("almond",function(){}),e.define("jquery",[],function(){var e=d||$;return null==e&&console&&console.error&&console.error("Select2: An instance of jQuery or a jQuery-compatible library was not found. Make sure that you are including jQuery before Select2 on your web page."),e}),e.define("select2/utils",["jquery"],function(o){var r={};function u(e){var t=e.prototype,n=[];for(var i in t){"function"==typeof t[i]&&"constructor"!==i&&n.push(i)}return n}r.Extend=function(e,t){var n={}.hasOwnProperty;function i(){this.constructor=e}for(var r in t)n.call(t,r)&&(e[r]=t[r]);return i.prototype=t.prototype,e.prototype=new i,e.__super__=t.prototype,e},r.Decorate=function(i,r){var e=u(r),t=u(i);function o(){var e=Array.prototype.unshift,t=r.prototype.constructor.length,n=i.prototype.constructor;0<t&&(e.call(arguments,i.prototype.constructor),n=r.prototype.constructor),n.apply(this,arguments)}r.displayName=i.displayName,o.prototype=new function(){this.constructor=o};for(var n=0;n<t.length;n++){var s=t[n];o.prototype[s]=i.prototype[s]}function a(e){var t=function(){};e in o.prototype&&(t=o.prototype[e]);var n=r.prototype[e];return function(){return Array.prototype.unshift.call(arguments,t),n.apply(this,arguments)}}for(var l=0;l<e.length;l++){var c=e[l];o.prototype[c]=a(c)}return o};function e(){this.listeners={}}e.prototype.on=function(e,t){this.listeners=this.listeners||{},e in this.listeners?this.listeners[e].push(t):this.listeners[e]=[t]},e.prototype.trigger=function(e){var t=Array.prototype.slice,n=t.call(arguments,1);this.listeners=this.listeners||{},null==n&&(n=[]),0===n.length&&n.push({}),(n[0]._type=e)in this.listeners&&this.invoke(this.listeners[e],t.call(arguments,1)),"*"in this.listeners&&this.invoke(this.listeners["*"],arguments)},e.prototype.invoke=function(e,t){for(var n=0,i=e.length;n<i;n++)e[n].apply(this,t)},r.Observable=e,r.generateChars=function(e){for(var t="",n=0;n<e;n++){t+=Math.floor(36*Math.random()).toString(36)}return t},r.bind=function(e,t){return function(){e.apply(t,arguments)}},r._convertData=function(e){for(var t in e){var n=t.split("-"),i=e;if(1!==n.length){for(var r=0;r<n.length;r++){var o=n[r];(o=o.substring(0,1).toLowerCase()+o.substring(1))in i||(i[o]={}),r==n.length-1&&(i[o]=e[t]),i=i[o]}delete e[t]}}return e},r.hasScroll=function(e,t){var n=o(t),i=t.style.overflowX,r=t.style.overflowY;return(i!==r||"hidden"!==r&&"visible"!==r)&&("scroll"===i||"scroll"===r||(n.innerHeight()<t.scrollHeight||n.innerWidth()<t.scrollWidth))},r.escapeMarkup=function(e){var t={"\\":"&#92;","&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#39;","/":"&#47;"};return"string"!=typeof e?e:String(e).replace(/[&<>"'\/\\]/g,function(e){return t[e]})},r.appendMany=function(e,t){if("1.7"===o.fn.jquery.substr(0,3)){var n=o();o.map(t,function(e){n=n.add(e)}),t=n}e.append(t)},r.__cache={};var n=0;return r.GetUniqueElementId=function(e){var t=e.getAttribute("data-select2-id");return null==t&&(e.id?(t=e.id,e.setAttribute("data-select2-id",t)):(e.setAttribute("data-select2-id",++n),t=n.toString())),t},r.StoreData=function(e,t,n){var i=r.GetUniqueElementId(e);r.__cache[i]||(r.__cache[i]={}),r.__cache[i][t]=n},r.GetData=function(e,t){var n=r.GetUniqueElementId(e);return t?r.__cache[n]&&null!=r.__cache[n][t]?r.__cache[n][t]:o(e).data(t):r.__cache[n]},r.RemoveData=function(e){var t=r.GetUniqueElementId(e);null!=r.__cache[t]&&delete r.__cache[t]},r}),e.define("select2/results",["jquery","./utils"],function(h,f){function i(e,t,n){this.$element=e,this.data=n,this.options=t,i.__super__.constructor.call(this)}return f.Extend(i,f.Observable),i.prototype.render=function(){var e=h('<ul class="select2-results__options" role="tree"></ul>');return this.options.get("multiple")&&e.attr("aria-multiselectable","true"),this.$results=e},i.prototype.clear=function(){this.$results.empty()},i.prototype.displayMessage=function(e){var t=this.options.get("escapeMarkup");this.clear(),this.hideLoading();var n=h('<li role="treeitem" aria-live="assertive" class="select2-results__option"></li>'),i=this.options.get("translations").get(e.message);n.append(t(i(e.args))),n[0].className+=" select2-results__message",this.$results.append(n)},i.prototype.hideMessages=function(){this.$results.find(".select2-results__message").remove()},i.prototype.append=function(e){this.hideLoading();var t=[];if(null!=e.results&&0!==e.results.length){e.results=this.sort(e.results);for(var n=0;n<e.results.length;n++){var i=e.results[n],r=this.option(i);t.push(r)}this.$results.append(t)}else 0===this.$results.children().length&&this.trigger("results:message",{message:"noResults"})},i.prototype.position=function(e,t){t.find(".select2-results").append(e)},i.prototype.sort=function(e){return this.options.get("sorter")(e)},i.prototype.highlightFirstItem=function(){var e=this.$results.find(".select2-results__option[aria-selected]"),t=e.filter("[aria-selected=true]");0<t.length?t.first().trigger("mouseenter"):e.first().trigger("mouseenter"),this.ensureHighlightVisible()},i.prototype.setClasses=function(){var t=this;this.data.current(function(e){var i=h.map(e,function(e){return e.id.toString()});t.$results.find(".select2-results__option[aria-selected]").each(function(){var e=h(this),t=f.GetData(this,"data"),n=""+t.id;null!=t.element&&t.element.selected||null==t.element&&-1<h.inArray(n,i)?e.attr("aria-selected","true"):e.attr("aria-selected","false")})})},i.prototype.showLoading=function(e){this.hideLoading();var t={disabled:!0,loading:!0,text:this.options.get("translations").get("searching")(e)},n=this.option(t);n.className+=" loading-results",this.$results.prepend(n)},i.prototype.hideLoading=function(){this.$results.find(".loading-results").remove()},i.prototype.option=function(e){var t=document.createElement("li");t.className="select2-results__option";var n={role:"treeitem","aria-selected":"false"},i=window.Element.prototype.matches||window.Element.prototype.msMatchesSelector||window.Element.prototype.webkitMatchesSelector;for(var r in(null!=e.element&&i.call(e.element,":disabled")||null==e.element&&e.disabled)&&(delete n["aria-selected"],n["aria-disabled"]="true"),null==e.id&&delete n["aria-selected"],null!=e._resultId&&(t.id=e._resultId),e.title&&(t.title=e.title),e.children&&(n.role="group",n["aria-label"]=e.text,delete n["aria-selected"]),n){var o=n[r];t.setAttribute(r,o)}if(e.children){var s=h(t),a=document.createElement("strong");a.className="select2-results__group";h(a);this.template(e,a);for(var l=[],c=0;c<e.children.length;c++){var u=e.children[c],d=this.option(u);l.push(d)}var p=h("<ul></ul>",{class:"select2-results__options select2-results__options--nested"});p.append(l),s.append(a),s.append(p)}else this.template(e,t);return f.StoreData(t,"data",e),t},i.prototype.bind=function(t,e){var l=this,n=t.id+"-results";this.$results.attr("id",n),t.on("results:all",function(e){l.clear(),l.append(e.data),t.isOpen()&&(l.setClasses(),l.highlightFirstItem())}),t.on("results:append",function(e){l.append(e.data),t.isOpen()&&l.setClasses()}),t.on("query",function(e){l.hideMessages(),l.showLoading(e)}),t.on("select",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("unselect",function(){t.isOpen()&&(l.setClasses(),l.options.get("scrollAfterSelect")&&l.highlightFirstItem())}),t.on("open",function(){l.$results.attr("aria-expanded","true"),l.$results.attr("aria-hidden","false"),l.setClasses(),l.ensureHighlightVisible()}),t.on("close",function(){l.$results.attr("aria-expanded","false"),l.$results.attr("aria-hidden","true"),l.$results.removeAttr("aria-activedescendant")}),t.on("results:toggle",function(){var e=l.getHighlightedResults();0!==e.length&&e.trigger("mouseup")}),t.on("results:select",function(){var e=l.getHighlightedResults();if(0!==e.length){var t=f.GetData(e[0],"data");"true"==e.attr("aria-selected")?l.trigger("close",{}):l.trigger("select",{data:t})}}),t.on("results:previous",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e);if(!(n<=0)){var i=n-1;0===e.length&&(i=0);var r=t.eq(i);r.trigger("mouseenter");var o=l.$results.offset().top,s=r.offset().top,a=l.$results.scrollTop()+(s-o);0===i?l.$results.scrollTop(0):s-o<0&&l.$results.scrollTop(a)}}),t.on("results:next",function(){var e=l.getHighlightedResults(),t=l.$results.find("[aria-selected]"),n=t.index(e)+1;if(!(n>=t.length)){var i=t.eq(n);i.trigger("mouseenter");var r=l.$results.offset().top+l.$results.outerHeight(!1),o=i.offset().top+i.outerHeight(!1),s=l.$results.scrollTop()+o-r;0===n?l.$results.scrollTop(0):r<o&&l.$results.scrollTop(s)}}),t.on("results:focus",function(e){e.element.addClass("select2-results__option--highlighted")}),t.on("results:message",function(e){l.displayMessage(e)}),h.fn.mousewheel&&this.$results.on("mousewheel",function(e){var t=l.$results.scrollTop(),n=l.$results.get(0).scrollHeight-t+e.deltaY,i=0<e.deltaY&&t-e.deltaY<=0,r=e.deltaY<0&&n<=l.$results.height();i?(l.$results.scrollTop(0),e.preventDefault(),e.stopPropagation()):r&&(l.$results.scrollTop(l.$results.get(0).scrollHeight-l.$results.height()),e.preventDefault(),e.stopPropagation())}),this.$results.on("mouseup",".select2-results__option[aria-selected]",function(e){var t=h(this),n=f.GetData(this,"data");"true"!==t.attr("aria-selected")?l.trigger("select",{originalEvent:e,data:n}):l.options.get("multiple")?l.trigger("unselect",{originalEvent:e,data:n}):l.trigger("close",{})}),this.$results.on("mouseenter",".select2-results__option[aria-selected]",function(e){var t=f.GetData(this,"data");l.getHighlightedResults().removeClass("select2-results__option--highlighted"),l.trigger("results:focus",{data:t,element:h(this)})})},i.prototype.getHighlightedResults=function(){return this.$results.find(".select2-results__option--highlighted")},i.prototype.destroy=function(){this.$results.remove()},i.prototype.ensureHighlightVisible=function(){var e=this.getHighlightedResults();if(0!==e.length){var t=this.$results.find("[aria-selected]").index(e),n=this.$results.offset().top,i=e.offset().top,r=this.$results.scrollTop()+(i-n),o=i-n;r-=2*e.outerHeight(!1),t<=2?this.$results.scrollTop(0):(o>this.$results.outerHeight()||o<0)&&this.$results.scrollTop(r)}},i.prototype.template=function(e,t){var n=this.options.get("templateResult"),i=this.options.get("escapeMarkup"),r=n(e,t);null==r?t.style.display="none":"string"==typeof r?t.innerHTML=i(r):h(t).append(r)},i}),e.define("select2/keys",[],function(){return{BACKSPACE:8,TAB:9,ENTER:13,SHIFT:16,CTRL:17,ALT:18,ESC:27,SPACE:32,PAGE_UP:33,PAGE_DOWN:34,END:35,HOME:36,LEFT:37,UP:38,RIGHT:39,DOWN:40,DELETE:46}}),e.define("select2/selection/base",["jquery","../utils","../keys"],function(n,i,r){function o(e,t){this.$element=e,this.options=t,o.__super__.constructor.call(this)}return i.Extend(o,i.Observable),o.prototype.render=function(){var e=n('<span class="select2-selection" role="combobox"  aria-haspopup="true" aria-expanded="false"></span>');return this._tabindex=0,null!=i.GetData(this.$element[0],"old-tabindex")?this._tabindex=i.GetData(this.$element[0],"old-tabindex"):null!=this.$element.attr("tabindex")&&(this._tabindex=this.$element.attr("tabindex")),e.attr("title",this.$element.attr("title")),e.attr("tabindex",this._tabindex),this.$selection=e},o.prototype.bind=function(e,t){var n=this,i=(e.id,e.id+"-results");this.container=e,this.$selection.on("focus",function(e){n.trigger("focus",e)}),this.$selection.on("blur",function(e){n._handleBlur(e)}),this.$selection.on("keydown",function(e){n.trigger("keypress",e),e.which===r.SPACE&&e.preventDefault()}),e.on("results:focus",function(e){n.$selection.attr("aria-activedescendant",e.data._resultId)}),e.on("selection:update",function(e){n.update(e.data)}),e.on("open",function(){n.$selection.attr("aria-expanded","true"),n.$selection.attr("aria-owns",i),n._attachCloseHandler(e)}),e.on("close",function(){n.$selection.attr("aria-expanded","false"),n.$selection.removeAttr("aria-activedescendant"),n.$selection.removeAttr("aria-owns"),n.$selection.trigger("focus"),n._detachCloseHandler(e)}),e.on("enable",function(){n.$selection.attr("tabindex",n._tabindex)}),e.on("disable",function(){n.$selection.attr("tabindex","-1")})},o.prototype._handleBlur=function(e){var t=this;window.setTimeout(function(){document.activeElement==t.$selection[0]||n.contains(t.$selection[0],document.activeElement)||t.trigger("blur",e)},1)},o.prototype._attachCloseHandler=function(e){n(document.body).on("mousedown.select2."+e.id,function(e){var t=n(e.target).closest(".select2");n(".select2.select2-container--open").each(function(){n(this);this!=t[0]&&i.GetData(this,"element").select2("close")})})},o.prototype._detachCloseHandler=function(e){n(document.body).off("mousedown.select2."+e.id)},o.prototype.position=function(e,t){t.find(".selection").append(e)},o.prototype.destroy=function(){this._detachCloseHandler(this.container)},o.prototype.update=function(e){throw new Error("The `update` method must be defined in child classes.")},o}),e.define("select2/selection/single",["jquery","./base","../utils","../keys"],function(e,t,n,i){function r(){r.__super__.constructor.apply(this,arguments)}return n.Extend(r,t),r.prototype.render=function(){var e=r.__super__.render.call(this);return e.addClass("select2-selection--single"),e.html('<span class="select2-selection__rendered"></span><span class="select2-selection__arrow" role="presentation"><b role="presentation"></b></span>'),e},r.prototype.bind=function(t,e){var n=this;r.__super__.bind.apply(this,arguments);var i=t.id+"-container";this.$selection.find(".select2-selection__rendered").attr("id",i).attr("role","textbox").attr("aria-readonly","true"),this.$selection.attr("aria-labelledby",i),this.$selection.on("mousedown",function(e){1===e.which&&n.trigger("toggle",{originalEvent:e})}),this.$selection.on("focus",function(e){}),this.$selection.on("blur",function(e){}),t.on("focus",function(e){t.isOpen()||n.$selection.trigger("focus")})},r.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},r.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},r.prototype.selectionContainer=function(){return e("<span></span>")},r.prototype.update=function(e){if(0!==e.length){var t=e[0],n=this.$selection.find(".select2-selection__rendered"),i=this.display(t,n);n.empty().append(i),n.attr("title",t.title||t.text)}else this.clear()},r}),e.define("select2/selection/multiple",["jquery","./base","../utils"],function(r,e,a){function n(e,t){n.__super__.constructor.apply(this,arguments)}return a.Extend(n,e),n.prototype.render=function(){var e=n.__super__.render.call(this);return e.addClass("select2-selection--multiple"),e.html('<ul class="select2-selection__rendered"></ul>'),e},n.prototype.bind=function(e,t){var i=this;n.__super__.bind.apply(this,arguments),this.$selection.on("click",function(e){i.trigger("toggle",{originalEvent:e})}),this.$selection.on("click",".select2-selection__choice__remove",function(e){if(!i.options.get("disabled")){var t=r(this).parent(),n=a.GetData(t[0],"data");i.trigger("unselect",{originalEvent:e,data:n})}})},n.prototype.clear=function(){var e=this.$selection.find(".select2-selection__rendered");e.empty(),e.removeAttr("title")},n.prototype.display=function(e,t){var n=this.options.get("templateSelection");return this.options.get("escapeMarkup")(n(e,t))},n.prototype.selectionContainer=function(){return r('<li class="select2-selection__choice"><span class="select2-selection__choice__remove" role="presentation">&times;</span></li>')},n.prototype.update=function(e){if(this.clear(),0!==e.length){for(var t=[],n=0;n<e.length;n++){var i=e[n],r=this.selectionContainer(),o=this.display(i,r);r.append(o),r.attr("title",i.title||i.text),a.StoreData(r[0],"data",i),t.push(r)}var s=this.$selection.find(".select2-selection__rendered");a.appendMany(s,t)}},n}),e.define("select2/selection/placeholder",["../utils"],function(e){function t(e,t,n){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n)}return t.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},t.prototype.createPlaceholder=function(e,t){var n=this.selectionContainer();return n.html(this.display(t)),n.addClass("select2-selection__placeholder").removeClass("select2-selection__choice"),n},t.prototype.update=function(e,t){var n=1==t.length&&t[0].id!=this.placeholder.id;if(1<t.length||n)return e.call(this,t);this.clear();var i=this.createPlaceholder(this.placeholder);this.$selection.find(".select2-selection__rendered").append(i)},t}),e.define("select2/selection/allowClear",["jquery","../keys","../utils"],function(r,i,a){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),null==this.placeholder&&this.options.get("debug")&&window.console&&console.error&&console.error("Select2: The `allowClear` option should be used in combination with the `placeholder` option."),this.$selection.on("mousedown",".select2-selection__clear",function(e){i._handleClear(e)}),t.on("keypress",function(e){i._handleKeyboardClear(e,t)})},e.prototype._handleClear=function(e,t){if(!this.options.get("disabled")){var n=this.$selection.find(".select2-selection__clear");if(0!==n.length){t.stopPropagation();var i=a.GetData(n[0],"data"),r=this.$element.val();this.$element.val(this.placeholder.id);var o={data:i};if(this.trigger("clear",o),o.prevented)this.$element.val(r);else{for(var s=0;s<i.length;s++)if(o={data:i[s]},this.trigger("unselect",o),o.prevented)return void this.$element.val(r);this.$element.trigger("change"),this.trigger("toggle",{})}}}},e.prototype._handleKeyboardClear=function(e,t,n){n.isOpen()||t.which!=i.DELETE&&t.which!=i.BACKSPACE||this._handleClear(t)},e.prototype.update=function(e,t){if(e.call(this,t),!(0<this.$selection.find(".select2-selection__placeholder").length||0===t.length)){var n=this.options.get("translations").get("removeAllItems"),i=r('<span class="select2-selection__clear" title="'+n()+'">&times;</span>');a.StoreData(i[0],"data",t),this.$selection.find(".select2-selection__rendered").prepend(i)}},e}),e.define("select2/selection/search",["jquery","../utils","../keys"],function(i,s,a){function e(e,t,n){e.call(this,t,n)}return e.prototype.render=function(e){var t=i('<li class="select2-search select2-search--inline"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" aria-autocomplete="list" /></li>');this.$searchContainer=t,this.$search=t.find("input");var n=e.call(this);return this._transferTabIndex(),n},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("open",function(){i.$search.trigger("focus")}),t.on("close",function(){i.$search.val(""),i.$search.removeAttr("aria-activedescendant"),i.$search.trigger("focus")}),t.on("enable",function(){i.$search.prop("disabled",!1),i._transferTabIndex()}),t.on("disable",function(){i.$search.prop("disabled",!0)}),t.on("focus",function(e){i.$search.trigger("focus")}),t.on("results:focus",function(e){i.$search.attr("aria-activedescendant",e.id)}),this.$selection.on("focusin",".select2-search--inline",function(e){i.trigger("focus",e)}),this.$selection.on("focusout",".select2-search--inline",function(e){i._handleBlur(e)}),this.$selection.on("keydown",".select2-search--inline",function(e){if(e.stopPropagation(),i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented(),e.which===a.BACKSPACE&&""===i.$search.val()){var t=i.$searchContainer.prev(".select2-selection__choice");if(0<t.length){var n=s.GetData(t[0],"data");i.searchRemoveChoice(n),e.preventDefault()}}});var r=document.documentMode,o=r&&r<=11;this.$selection.on("input.searchcheck",".select2-search--inline",function(e){o?i.$selection.off("input.search input.searchcheck"):i.$selection.off("keyup.search")}),this.$selection.on("keyup.search input.search",".select2-search--inline",function(e){if(o&&"input"===e.type)i.$selection.off("input.search input.searchcheck");else{var t=e.which;t!=a.SHIFT&&t!=a.CTRL&&t!=a.ALT&&t!=a.TAB&&i.handleSearch(e)}})},e.prototype._transferTabIndex=function(e){this.$search.attr("tabindex",this.$selection.attr("tabindex")),this.$selection.attr("tabindex","-1")},e.prototype.createPlaceholder=function(e,t){this.$search.attr("placeholder",t.text)},e.prototype.update=function(e,t){var n=this.$search[0]==document.activeElement;this.$search.attr("placeholder",""),e.call(this,t),this.$selection.find(".select2-selection__rendered").append(this.$searchContainer),this.resizeSearch(),n&&this.$search.trigger("focus")},e.prototype.handleSearch=function(){if(this.resizeSearch(),!this._keyUpPrevented){var e=this.$search.val();this.trigger("query",{term:e})}this._keyUpPrevented=!1},e.prototype.searchRemoveChoice=function(e,t){this.trigger("unselect",{data:t}),this.$search.val(t.text),this.handleSearch()},e.prototype.resizeSearch=function(){this.$search.css("width","25px");var e="";""!==this.$search.attr("placeholder")?e=this.$selection.find(".select2-selection__rendered").innerWidth():e=.75*(this.$search.val().length+1)+"em";this.$search.css("width",e)},e}),e.define("select2/selection/eventRelay",["jquery"],function(s){function e(){}return e.prototype.bind=function(e,t,n){var i=this,r=["open","opening","close","closing","select","selecting","unselect","unselecting","clear","clearing"],o=["opening","closing","selecting","unselecting","clearing"];e.call(this,t,n),t.on("*",function(e,t){if(-1!==s.inArray(e,r)){t=t||{};var n=s.Event("select2:"+e,{params:t});i.$element.trigger(n),-1!==s.inArray(e,o)&&(t.prevented=n.isDefaultPrevented())}})},e}),e.define("select2/translation",["jquery","require"],function(t,n){function i(e){this.dict=e||{}}return i.prototype.all=function(){return this.dict},i.prototype.get=function(e){return this.dict[e]},i.prototype.extend=function(e){this.dict=t.extend({},e.all(),this.dict)},i._cache={},i.loadPath=function(e){if(!(e in i._cache)){var t=n(e);i._cache[e]=t}return new i(i._cache[e])},i}),e.define("select2/diacritics",[],function(){return{"Ⓐ":"A","Ａ":"A","À":"A","Á":"A","Â":"A","Ầ":"A","Ấ":"A","Ẫ":"A","Ẩ":"A","Ã":"A","Ā":"A","Ă":"A","Ằ":"A","Ắ":"A","Ẵ":"A","Ẳ":"A","Ȧ":"A","Ǡ":"A","Ä":"A","Ǟ":"A","Ả":"A","Å":"A","Ǻ":"A","Ǎ":"A","Ȁ":"A","Ȃ":"A","Ạ":"A","Ậ":"A","Ặ":"A","Ḁ":"A","Ą":"A","Ⱥ":"A","Ɐ":"A","Ꜳ":"AA","Æ":"AE","Ǽ":"AE","Ǣ":"AE","Ꜵ":"AO","Ꜷ":"AU","Ꜹ":"AV","Ꜻ":"AV","Ꜽ":"AY","Ⓑ":"B","Ｂ":"B","Ḃ":"B","Ḅ":"B","Ḇ":"B","Ƀ":"B","Ƃ":"B","Ɓ":"B","Ⓒ":"C","Ｃ":"C","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","Ç":"C","Ḉ":"C","Ƈ":"C","Ȼ":"C","Ꜿ":"C","Ⓓ":"D","Ｄ":"D","Ḋ":"D","Ď":"D","Ḍ":"D","Ḑ":"D","Ḓ":"D","Ḏ":"D","Đ":"D","Ƌ":"D","Ɗ":"D","Ɖ":"D","Ꝺ":"D","Ǳ":"DZ","Ǆ":"DZ","ǲ":"Dz","ǅ":"Dz","Ⓔ":"E","Ｅ":"E","È":"E","É":"E","Ê":"E","Ề":"E","Ế":"E","Ễ":"E","Ể":"E","Ẽ":"E","Ē":"E","Ḕ":"E","Ḗ":"E","Ĕ":"E","Ė":"E","Ë":"E","Ẻ":"E","Ě":"E","Ȅ":"E","Ȇ":"E","Ẹ":"E","Ệ":"E","Ȩ":"E","Ḝ":"E","Ę":"E","Ḙ":"E","Ḛ":"E","Ɛ":"E","Ǝ":"E","Ⓕ":"F","Ｆ":"F","Ḟ":"F","Ƒ":"F","Ꝼ":"F","Ⓖ":"G","Ｇ":"G","Ǵ":"G","Ĝ":"G","Ḡ":"G","Ğ":"G","Ġ":"G","Ǧ":"G","Ģ":"G","Ǥ":"G","Ɠ":"G","Ꞡ":"G","Ᵹ":"G","Ꝿ":"G","Ⓗ":"H","Ｈ":"H","Ĥ":"H","Ḣ":"H","Ḧ":"H","Ȟ":"H","Ḥ":"H","Ḩ":"H","Ḫ":"H","Ħ":"H","Ⱨ":"H","Ⱶ":"H","Ɥ":"H","Ⓘ":"I","Ｉ":"I","Ì":"I","Í":"I","Î":"I","Ĩ":"I","Ī":"I","Ĭ":"I","İ":"I","Ï":"I","Ḯ":"I","Ỉ":"I","Ǐ":"I","Ȉ":"I","Ȋ":"I","Ị":"I","Į":"I","Ḭ":"I","Ɨ":"I","Ⓙ":"J","Ｊ":"J","Ĵ":"J","Ɉ":"J","Ⓚ":"K","Ｋ":"K","Ḱ":"K","Ǩ":"K","Ḳ":"K","Ķ":"K","Ḵ":"K","Ƙ":"K","Ⱪ":"K","Ꝁ":"K","Ꝃ":"K","Ꝅ":"K","Ꞣ":"K","Ⓛ":"L","Ｌ":"L","Ŀ":"L","Ĺ":"L","Ľ":"L","Ḷ":"L","Ḹ":"L","Ļ":"L","Ḽ":"L","Ḻ":"L","Ł":"L","Ƚ":"L","Ɫ":"L","Ⱡ":"L","Ꝉ":"L","Ꝇ":"L","Ꞁ":"L","Ǉ":"LJ","ǈ":"Lj","Ⓜ":"M","Ｍ":"M","Ḿ":"M","Ṁ":"M","Ṃ":"M","Ɱ":"M","Ɯ":"M","Ⓝ":"N","Ｎ":"N","Ǹ":"N","Ń":"N","Ñ":"N","Ṅ":"N","Ň":"N","Ṇ":"N","Ņ":"N","Ṋ":"N","Ṉ":"N","Ƞ":"N","Ɲ":"N","Ꞑ":"N","Ꞥ":"N","Ǌ":"NJ","ǋ":"Nj","Ⓞ":"O","Ｏ":"O","Ò":"O","Ó":"O","Ô":"O","Ồ":"O","Ố":"O","Ỗ":"O","Ổ":"O","Õ":"O","Ṍ":"O","Ȭ":"O","Ṏ":"O","Ō":"O","Ṑ":"O","Ṓ":"O","Ŏ":"O","Ȯ":"O","Ȱ":"O","Ö":"O","Ȫ":"O","Ỏ":"O","Ő":"O","Ǒ":"O","Ȍ":"O","Ȏ":"O","Ơ":"O","Ờ":"O","Ớ":"O","Ỡ":"O","Ở":"O","Ợ":"O","Ọ":"O","Ộ":"O","Ǫ":"O","Ǭ":"O","Ø":"O","Ǿ":"O","Ɔ":"O","Ɵ":"O","Ꝋ":"O","Ꝍ":"O","Œ":"OE","Ƣ":"OI","Ꝏ":"OO","Ȣ":"OU","Ⓟ":"P","Ｐ":"P","Ṕ":"P","Ṗ":"P","Ƥ":"P","Ᵽ":"P","Ꝑ":"P","Ꝓ":"P","Ꝕ":"P","Ⓠ":"Q","Ｑ":"Q","Ꝗ":"Q","Ꝙ":"Q","Ɋ":"Q","Ⓡ":"R","Ｒ":"R","Ŕ":"R","Ṙ":"R","Ř":"R","Ȑ":"R","Ȓ":"R","Ṛ":"R","Ṝ":"R","Ŗ":"R","Ṟ":"R","Ɍ":"R","Ɽ":"R","Ꝛ":"R","Ꞧ":"R","Ꞃ":"R","Ⓢ":"S","Ｓ":"S","ẞ":"S","Ś":"S","Ṥ":"S","Ŝ":"S","Ṡ":"S","Š":"S","Ṧ":"S","Ṣ":"S","Ṩ":"S","Ș":"S","Ş":"S","Ȿ":"S","Ꞩ":"S","Ꞅ":"S","Ⓣ":"T","Ｔ":"T","Ṫ":"T","Ť":"T","Ṭ":"T","Ț":"T","Ţ":"T","Ṱ":"T","Ṯ":"T","Ŧ":"T","Ƭ":"T","Ʈ":"T","Ⱦ":"T","Ꞇ":"T","Ꜩ":"TZ","Ⓤ":"U","Ｕ":"U","Ù":"U","Ú":"U","Û":"U","Ũ":"U","Ṹ":"U","Ū":"U","Ṻ":"U","Ŭ":"U","Ü":"U","Ǜ":"U","Ǘ":"U","Ǖ":"U","Ǚ":"U","Ủ":"U","Ů":"U","Ű":"U","Ǔ":"U","Ȕ":"U","Ȗ":"U","Ư":"U","Ừ":"U","Ứ":"U","Ữ":"U","Ử":"U","Ự":"U","Ụ":"U","Ṳ":"U","Ų":"U","Ṷ":"U","Ṵ":"U","Ʉ":"U","Ⓥ":"V","Ｖ":"V","Ṽ":"V","Ṿ":"V","Ʋ":"V","Ꝟ":"V","Ʌ":"V","Ꝡ":"VY","Ⓦ":"W","Ｗ":"W","Ẁ":"W","Ẃ":"W","Ŵ":"W","Ẇ":"W","Ẅ":"W","Ẉ":"W","Ⱳ":"W","Ⓧ":"X","Ｘ":"X","Ẋ":"X","Ẍ":"X","Ⓨ":"Y","Ｙ":"Y","Ỳ":"Y","Ý":"Y","Ŷ":"Y","Ỹ":"Y","Ȳ":"Y","Ẏ":"Y","Ÿ":"Y","Ỷ":"Y","Ỵ":"Y","Ƴ":"Y","Ɏ":"Y","Ỿ":"Y","Ⓩ":"Z","Ｚ":"Z","Ź":"Z","Ẑ":"Z","Ż":"Z","Ž":"Z","Ẓ":"Z","Ẕ":"Z","Ƶ":"Z","Ȥ":"Z","Ɀ":"Z","Ⱬ":"Z","Ꝣ":"Z","ⓐ":"a","ａ":"a","ẚ":"a","à":"a","á":"a","â":"a","ầ":"a","ấ":"a","ẫ":"a","ẩ":"a","ã":"a","ā":"a","ă":"a","ằ":"a","ắ":"a","ẵ":"a","ẳ":"a","ȧ":"a","ǡ":"a","ä":"a","ǟ":"a","ả":"a","å":"a","ǻ":"a","ǎ":"a","ȁ":"a","ȃ":"a","ạ":"a","ậ":"a","ặ":"a","ḁ":"a","ą":"a","ⱥ":"a","ɐ":"a","ꜳ":"aa","æ":"ae","ǽ":"ae","ǣ":"ae","ꜵ":"ao","ꜷ":"au","ꜹ":"av","ꜻ":"av","ꜽ":"ay","ⓑ":"b","ｂ":"b","ḃ":"b","ḅ":"b","ḇ":"b","ƀ":"b","ƃ":"b","ɓ":"b","ⓒ":"c","ｃ":"c","ć":"c","ĉ":"c","ċ":"c","č":"c","ç":"c","ḉ":"c","ƈ":"c","ȼ":"c","ꜿ":"c","ↄ":"c","ⓓ":"d","ｄ":"d","ḋ":"d","ď":"d","ḍ":"d","ḑ":"d","ḓ":"d","ḏ":"d","đ":"d","ƌ":"d","ɖ":"d","ɗ":"d","ꝺ":"d","ǳ":"dz","ǆ":"dz","ⓔ":"e","ｅ":"e","è":"e","é":"e","ê":"e","ề":"e","ế":"e","ễ":"e","ể":"e","ẽ":"e","ē":"e","ḕ":"e","ḗ":"e","ĕ":"e","ė":"e","ë":"e","ẻ":"e","ě":"e","ȅ":"e","ȇ":"e","ẹ":"e","ệ":"e","ȩ":"e","ḝ":"e","ę":"e","ḙ":"e","ḛ":"e","ɇ":"e","ɛ":"e","ǝ":"e","ⓕ":"f","ｆ":"f","ḟ":"f","ƒ":"f","ꝼ":"f","ⓖ":"g","ｇ":"g","ǵ":"g","ĝ":"g","ḡ":"g","ğ":"g","ġ":"g","ǧ":"g","ģ":"g","ǥ":"g","ɠ":"g","ꞡ":"g","ᵹ":"g","ꝿ":"g","ⓗ":"h","ｈ":"h","ĥ":"h","ḣ":"h","ḧ":"h","ȟ":"h","ḥ":"h","ḩ":"h","ḫ":"h","ẖ":"h","ħ":"h","ⱨ":"h","ⱶ":"h","ɥ":"h","ƕ":"hv","ⓘ":"i","ｉ":"i","ì":"i","í":"i","î":"i","ĩ":"i","ī":"i","ĭ":"i","ï":"i","ḯ":"i","ỉ":"i","ǐ":"i","ȉ":"i","ȋ":"i","ị":"i","į":"i","ḭ":"i","ɨ":"i","ı":"i","ⓙ":"j","ｊ":"j","ĵ":"j","ǰ":"j","ɉ":"j","ⓚ":"k","ｋ":"k","ḱ":"k","ǩ":"k","ḳ":"k","ķ":"k","ḵ":"k","ƙ":"k","ⱪ":"k","ꝁ":"k","ꝃ":"k","ꝅ":"k","ꞣ":"k","ⓛ":"l","ｌ":"l","ŀ":"l","ĺ":"l","ľ":"l","ḷ":"l","ḹ":"l","ļ":"l","ḽ":"l","ḻ":"l","ſ":"l","ł":"l","ƚ":"l","ɫ":"l","ⱡ":"l","ꝉ":"l","ꞁ":"l","ꝇ":"l","ǉ":"lj","ⓜ":"m","ｍ":"m","ḿ":"m","ṁ":"m","ṃ":"m","ɱ":"m","ɯ":"m","ⓝ":"n","ｎ":"n","ǹ":"n","ń":"n","ñ":"n","ṅ":"n","ň":"n","ṇ":"n","ņ":"n","ṋ":"n","ṉ":"n","ƞ":"n","ɲ":"n","ŉ":"n","ꞑ":"n","ꞥ":"n","ǌ":"nj","ⓞ":"o","ｏ":"o","ò":"o","ó":"o","ô":"o","ồ":"o","ố":"o","ỗ":"o","ổ":"o","õ":"o","ṍ":"o","ȭ":"o","ṏ":"o","ō":"o","ṑ":"o","ṓ":"o","ŏ":"o","ȯ":"o","ȱ":"o","ö":"o","ȫ":"o","ỏ":"o","ő":"o","ǒ":"o","ȍ":"o","ȏ":"o","ơ":"o","ờ":"o","ớ":"o","ỡ":"o","ở":"o","ợ":"o","ọ":"o","ộ":"o","ǫ":"o","ǭ":"o","ø":"o","ǿ":"o","ɔ":"o","ꝋ":"o","ꝍ":"o","ɵ":"o","œ":"oe","ƣ":"oi","ȣ":"ou","ꝏ":"oo","ⓟ":"p","ｐ":"p","ṕ":"p","ṗ":"p","ƥ":"p","ᵽ":"p","ꝑ":"p","ꝓ":"p","ꝕ":"p","ⓠ":"q","ｑ":"q","ɋ":"q","ꝗ":"q","ꝙ":"q","ⓡ":"r","ｒ":"r","ŕ":"r","ṙ":"r","ř":"r","ȑ":"r","ȓ":"r","ṛ":"r","ṝ":"r","ŗ":"r","ṟ":"r","ɍ":"r","ɽ":"r","ꝛ":"r","ꞧ":"r","ꞃ":"r","ⓢ":"s","ｓ":"s","ß":"s","ś":"s","ṥ":"s","ŝ":"s","ṡ":"s","š":"s","ṧ":"s","ṣ":"s","ṩ":"s","ș":"s","ş":"s","ȿ":"s","ꞩ":"s","ꞅ":"s","ẛ":"s","ⓣ":"t","ｔ":"t","ṫ":"t","ẗ":"t","ť":"t","ṭ":"t","ț":"t","ţ":"t","ṱ":"t","ṯ":"t","ŧ":"t","ƭ":"t","ʈ":"t","ⱦ":"t","ꞇ":"t","ꜩ":"tz","ⓤ":"u","ｕ":"u","ù":"u","ú":"u","û":"u","ũ":"u","ṹ":"u","ū":"u","ṻ":"u","ŭ":"u","ü":"u","ǜ":"u","ǘ":"u","ǖ":"u","ǚ":"u","ủ":"u","ů":"u","ű":"u","ǔ":"u","ȕ":"u","ȗ":"u","ư":"u","ừ":"u","ứ":"u","ữ":"u","ử":"u","ự":"u","ụ":"u","ṳ":"u","ų":"u","ṷ":"u","ṵ":"u","ʉ":"u","ⓥ":"v","ｖ":"v","ṽ":"v","ṿ":"v","ʋ":"v","ꝟ":"v","ʌ":"v","ꝡ":"vy","ⓦ":"w","ｗ":"w","ẁ":"w","ẃ":"w","ŵ":"w","ẇ":"w","ẅ":"w","ẘ":"w","ẉ":"w","ⱳ":"w","ⓧ":"x","ｘ":"x","ẋ":"x","ẍ":"x","ⓨ":"y","ｙ":"y","ỳ":"y","ý":"y","ŷ":"y","ỹ":"y","ȳ":"y","ẏ":"y","ÿ":"y","ỷ":"y","ẙ":"y","ỵ":"y","ƴ":"y","ɏ":"y","ỿ":"y","ⓩ":"z","ｚ":"z","ź":"z","ẑ":"z","ż":"z","ž":"z","ẓ":"z","ẕ":"z","ƶ":"z","ȥ":"z","ɀ":"z","ⱬ":"z","ꝣ":"z","Ά":"Α","Έ":"Ε","Ή":"Η","Ί":"Ι","Ϊ":"Ι","Ό":"Ο","Ύ":"Υ","Ϋ":"Υ","Ώ":"Ω","ά":"α","έ":"ε","ή":"η","ί":"ι","ϊ":"ι","ΐ":"ι","ό":"ο","ύ":"υ","ϋ":"υ","ΰ":"υ","ώ":"ω","ς":"σ","’":"'"}}),e.define("select2/data/base",["../utils"],function(i){function n(e,t){n.__super__.constructor.call(this)}return i.Extend(n,i.Observable),n.prototype.current=function(e){throw new Error("The `current` method must be defined in child classes.")},n.prototype.query=function(e,t){throw new Error("The `query` method must be defined in child classes.")},n.prototype.bind=function(e,t){},n.prototype.destroy=function(){},n.prototype.generateResultId=function(e,t){var n=e.id+"-result-";return n+=i.generateChars(4),null!=t.id?n+="-"+t.id.toString():n+="-"+i.generateChars(4),n},n}),e.define("select2/data/select",["./base","../utils","jquery"],function(e,a,l){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return a.Extend(n,e),n.prototype.current=function(e){var n=[],i=this;this.$element.find(":selected").each(function(){var e=l(this),t=i.item(e);n.push(t)}),e(n)},n.prototype.select=function(r){var o=this;if(r.selected=!0,l(r.element).is("option"))return r.element.selected=!0,void this.$element.trigger("change");if(this.$element.prop("multiple"))this.current(function(e){var t=[];(r=[r]).push.apply(r,e);for(var n=0;n<r.length;n++){var i=r[n].id;-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")});else{var e=r.id;this.$element.val(e),this.$element.trigger("change")}},n.prototype.unselect=function(r){var o=this;if(this.$element.prop("multiple")){if(r.selected=!1,l(r.element).is("option"))return r.element.selected=!1,void this.$element.trigger("change");this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n].id;i!==r.id&&-1===l.inArray(i,t)&&t.push(i)}o.$element.val(t),o.$element.trigger("change")})}},n.prototype.bind=function(e,t){var n=this;(this.container=e).on("select",function(e){n.select(e.data)}),e.on("unselect",function(e){n.unselect(e.data)})},n.prototype.destroy=function(){this.$element.find("*").each(function(){a.RemoveData(this)})},n.prototype.query=function(i,e){var r=[],o=this;this.$element.children().each(function(){var e=l(this);if(e.is("option")||e.is("optgroup")){var t=o.item(e),n=o.matches(i,t);null!==n&&r.push(n)}}),e({results:r})},n.prototype.addOptions=function(e){a.appendMany(this.$element,e)},n.prototype.option=function(e){var t;e.children?(t=document.createElement("optgroup")).label=e.text:void 0!==(t=document.createElement("option")).textContent?t.textContent=e.text:t.innerText=e.text,void 0!==e.id&&(t.value=e.id),e.disabled&&(t.disabled=!0),e.selected&&(t.selected=!0),e.title&&(t.title=e.title);var n=l(t),i=this._normalizeItem(e);return i.element=t,a.StoreData(t,"data",i),n},n.prototype.item=function(e){var t={};if(null!=(t=a.GetData(e[0],"data")))return t;if(e.is("option"))t={id:e.val(),text:e.text(),disabled:e.prop("disabled"),selected:e.prop("selected"),title:e.prop("title")};else if(e.is("optgroup")){t={text:e.prop("label"),children:[],title:e.prop("title")};for(var n=e.children("option"),i=[],r=0;r<n.length;r++){var o=l(n[r]),s=this.item(o);i.push(s)}t.children=i}return(t=this._normalizeItem(t)).element=e[0],a.StoreData(e[0],"data",t),t},n.prototype._normalizeItem=function(e){e!==Object(e)&&(e={id:e,text:e});return null!=(e=l.extend({},{text:""},e)).id&&(e.id=e.id.toString()),null!=e.text&&(e.text=e.text.toString()),null==e._resultId&&e.id&&null!=this.container&&(e._resultId=this.generateResultId(this.container,e)),l.extend({},{selected:!1,disabled:!1},e)},n.prototype.matches=function(e,t){return this.options.get("matcher")(e,t)},n}),e.define("select2/data/array",["./select","../utils","jquery"],function(e,f,g){function i(e,t){var n=t.get("data")||[];i.__super__.constructor.call(this,e,t),this.addOptions(this.convertToOptions(n))}return f.Extend(i,e),i.prototype.select=function(n){var e=this.$element.find("option").filter(function(e,t){return t.value==n.id.toString()});0===e.length&&(e=this.option(n),this.addOptions(e)),i.__super__.select.call(this,n)},i.prototype.convertToOptions=function(e){var t=this,n=this.$element.find("option"),i=n.map(function(){return t.item(g(this)).id}).get(),r=[];function o(e){return function(){return g(this).val()==e.id}}for(var s=0;s<e.length;s++){var a=this._normalizeItem(e[s]);if(0<=g.inArray(a.id,i)){var l=n.filter(o(a)),c=this.item(l),u=g.extend(!0,{},a,c),d=this.option(u);l.replaceWith(d)}else{var p=this.option(a);if(a.children){var h=this.convertToOptions(a.children);f.appendMany(p,h)}r.push(p)}}return r},i}),e.define("select2/data/ajax",["./array","../utils","jquery"],function(e,t,o){function n(e,t){this.ajaxOptions=this._applyDefaults(t.get("ajax")),null!=this.ajaxOptions.processResults&&(this.processResults=this.ajaxOptions.processResults),n.__super__.constructor.call(this,e,t)}return t.Extend(n,e),n.prototype._applyDefaults=function(e){var t={data:function(e){return o.extend({},e,{q:e.term})},transport:function(e,t,n){var i=o.ajax(e);return i.then(t),i.fail(n),i}};return o.extend({},t,e,!0)},n.prototype.processResults=function(e){return e},n.prototype.query=function(n,i){var r=this;null!=this._request&&(o.isFunction(this._request.abort)&&this._request.abort(),this._request=null);var t=o.extend({type:"GET"},this.ajaxOptions);function e(){var e=t.transport(t,function(e){var t=r.processResults(e,n);r.options.get("debug")&&window.console&&console.error&&(t&&t.results&&o.isArray(t.results)||console.error("Select2: The AJAX results did not return an array in the `results` key of the response.")),i(t)},function(){"status"in e&&(0===e.status||"0"===e.status)||r.trigger("results:message",{message:"errorLoading"})});r._request=e}"function"==typeof t.url&&(t.url=t.url.call(this.$element,n)),"function"==typeof t.data&&(t.data=t.data.call(this.$element,n)),this.ajaxOptions.delay&&null!=n.term?(this._queryTimeout&&window.clearTimeout(this._queryTimeout),this._queryTimeout=window.setTimeout(e,this.ajaxOptions.delay)):e()},n}),e.define("select2/data/tags",["jquery"],function(u){function e(e,t,n){var i=n.get("tags"),r=n.get("createTag");void 0!==r&&(this.createTag=r);var o=n.get("insertTag");if(void 0!==o&&(this.insertTag=o),e.call(this,t,n),u.isArray(i))for(var s=0;s<i.length;s++){var a=i[s],l=this._normalizeItem(a),c=this.option(l);this.$element.append(c)}}return e.prototype.query=function(e,c,u){var d=this;this._removeOldTags(),null!=c.term&&null==c.page?e.call(this,c,function e(t,n){for(var i=t.results,r=0;r<i.length;r++){var o=i[r],s=null!=o.children&&!e({results:o.children},!0);if((o.text||"").toUpperCase()===(c.term||"").toUpperCase()||s)return!n&&(t.data=i,void u(t))}if(n)return!0;var a=d.createTag(c);if(null!=a){var l=d.option(a);l.attr("data-select2-tag",!0),d.addOptions([l]),d.insertTag(i,a)}t.results=i,u(t)}):e.call(this,c,u)},e.prototype.createTag=function(e,t){var n=u.trim(t.term);return""===n?null:{id:n,text:n}},e.prototype.insertTag=function(e,t,n){t.unshift(n)},e.prototype._removeOldTags=function(e){this._lastTag;this.$element.find("option[data-select2-tag]").each(function(){this.selected||u(this).remove()})},e}),e.define("select2/data/tokenizer",["jquery"],function(d){function e(e,t,n){var i=n.get("tokenizer");void 0!==i&&(this.tokenizer=i),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){e.call(this,t,n),this.$search=t.dropdown.$search||t.selection.$search||n.find(".select2-search__field")},e.prototype.query=function(e,t,n){var i=this;t.term=t.term||"";var r=this.tokenizer(t,this.options,function(e){var t=i._normalizeItem(e);if(!i.$element.find("option").filter(function(){return d(this).val()===t.id}).length){var n=i.option(t);n.attr("data-select2-tag",!0),i._removeOldTags(),i.addOptions([n])}!function(e){i.trigger("select",{data:e})}(t)});r.term!==t.term&&(this.$search.length&&(this.$search.val(r.term),this.$search.trigger("focus")),t.term=r.term),e.call(this,t,n)},e.prototype.tokenizer=function(e,t,n,i){for(var r=n.get("tokenSeparators")||[],o=t.term,s=0,a=this.createTag||function(e){return{id:e.term,text:e.term}};s<o.length;){var l=o[s];if(-1!==d.inArray(l,r)){var c=o.substr(0,s),u=a(d.extend({},t,{term:c}));null!=u?(i(u),o=o.substr(s+1)||"",s=0):s++}else s++}return{term:o}},e}),e.define("select2/data/minimumInputLength",[],function(){function e(e,t,n){this.minimumInputLength=n.get("minimumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",t.term.length<this.minimumInputLength?this.trigger("results:message",{message:"inputTooShort",args:{minimum:this.minimumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumInputLength",[],function(){function e(e,t,n){this.maximumInputLength=n.get("maximumInputLength"),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.term=t.term||"",0<this.maximumInputLength&&t.term.length>this.maximumInputLength?this.trigger("results:message",{message:"inputTooLong",args:{maximum:this.maximumInputLength,input:t.term,params:t}}):e.call(this,t,n)},e}),e.define("select2/data/maximumSelectionLength",[],function(){function e(e,t,n){this.maximumSelectionLength=n.get("maximumSelectionLength"),e.call(this,t,n)}return e.prototype.query=function(n,i,r){var o=this;this.current(function(e){var t=null!=e?e.length:0;0<o.maximumSelectionLength&&t>=o.maximumSelectionLength?o.trigger("results:message",{message:"maximumSelected",args:{maximum:o.maximumSelectionLength}}):n.call(o,i,r)})},e}),e.define("select2/dropdown",["jquery","./utils"],function(t,e){function n(e,t){this.$element=e,this.options=t,n.__super__.constructor.call(this)}return e.Extend(n,e.Observable),n.prototype.render=function(){var e=t('<span class="select2-dropdown"><span class="select2-results"></span></span>');return e.attr("dir",this.options.get("dir")),this.$dropdown=e},n.prototype.bind=function(){},n.prototype.position=function(e,t){},n.prototype.destroy=function(){this.$dropdown.remove()},n}),e.define("select2/dropdown/search",["jquery","../utils"],function(r,e){function t(){}return t.prototype.render=function(e){var t=e.call(this),n=r('<span class="select2-search select2-search--dropdown"><input class="select2-search__field" type="search" tabindex="-1" autocomplete="off" autocorrect="off" autocapitalize="none" spellcheck="false" role="textbox" /></span>');return this.$searchContainer=n,this.$search=n.find("input"),t.prepend(n),t},t.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),this.$search.on("keydown",function(e){i.trigger("keypress",e),i._keyUpPrevented=e.isDefaultPrevented()}),this.$search.on("input",function(e){r(this).off("keyup")}),this.$search.on("keyup input",function(e){i.handleSearch(e)}),t.on("open",function(){i.$search.attr("tabindex",0),i.$search.trigger("focus"),window.setTimeout(function(){i.$search.trigger("focus")},0)}),t.on("close",function(){i.$search.attr("tabindex",-1),i.$search.val(""),i.$search.trigger("blur")}),t.on("focus",function(){t.isOpen()||i.$search.trigger("focus")}),t.on("results:all",function(e){null!=e.query.term&&""!==e.query.term||(i.showSearch(e)?i.$searchContainer.removeClass("select2-search--hide"):i.$searchContainer.addClass("select2-search--hide"))})},t.prototype.handleSearch=function(e){if(!this._keyUpPrevented){var t=this.$search.val();this.trigger("query",{term:t})}this._keyUpPrevented=!1},t.prototype.showSearch=function(e,t){return!0},t}),e.define("select2/dropdown/hidePlaceholder",[],function(){function e(e,t,n,i){this.placeholder=this.normalizePlaceholder(n.get("placeholder")),e.call(this,t,n,i)}return e.prototype.append=function(e,t){t.results=this.removePlaceholder(t.results),e.call(this,t)},e.prototype.normalizePlaceholder=function(e,t){return"string"==typeof t&&(t={id:"",text:t}),t},e.prototype.removePlaceholder=function(e,t){for(var n=t.slice(0),i=t.length-1;0<=i;i--){var r=t[i];this.placeholder.id===r.id&&n.splice(i,1)}return n},e}),e.define("select2/dropdown/infiniteScroll",["jquery"],function(n){function e(e,t,n,i){this.lastParams={},e.call(this,t,n,i),this.$loadingMore=this.createLoadingMore(),this.loading=!1}return e.prototype.append=function(e,t){this.$loadingMore.remove(),this.loading=!1,e.call(this,t),this.showLoadingMore(t)&&(this.$results.append(this.$loadingMore),this.loadMoreIfNeeded())},e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("query",function(e){i.lastParams=e,i.loading=!0}),t.on("query:append",function(e){i.lastParams=e,i.loading=!0}),this.$results.on("scroll",this.loadMoreIfNeeded.bind(this))},e.prototype.loadMoreIfNeeded=function(){var e=n.contains(document.documentElement,this.$loadingMore[0]);if(!this.loading&&e){var t=this.$results.offset().top+this.$results.outerHeight(!1);this.$loadingMore.offset().top+this.$loadingMore.outerHeight(!1)<=t+50&&this.loadMore()}},e.prototype.loadMore=function(){this.loading=!0;var e=n.extend({},{page:1},this.lastParams);e.page++,this.trigger("query:append",e)},e.prototype.showLoadingMore=function(e,t){return t.pagination&&t.pagination.more},e.prototype.createLoadingMore=function(){var e=n('<li class="select2-results__option select2-results__option--load-more"role="treeitem" aria-disabled="true"></li>'),t=this.options.get("translations").get("loadingMore");return e.html(t(this.lastParams)),e},e}),e.define("select2/dropdown/attachBody",["jquery","../utils"],function(f,a){function e(e,t,n){this.$dropdownParent=n.get("dropdownParent")||f(document.body),e.call(this,t,n)}return e.prototype.bind=function(e,t,n){var i=this,r=!1;e.call(this,t,n),t.on("open",function(){i._showDropdown(),i._attachPositioningHandler(t),r||(r=!0,t.on("results:all",function(){i._positionDropdown(),i._resizeDropdown()}),t.on("results:append",function(){i._positionDropdown(),i._resizeDropdown()}))}),t.on("close",function(){i._hideDropdown(),i._detachPositioningHandler(t)}),this.$dropdownContainer.on("mousedown",function(e){e.stopPropagation()})},e.prototype.destroy=function(e){e.call(this),this.$dropdownContainer.remove()},e.prototype.position=function(e,t,n){t.attr("class",n.attr("class")),t.removeClass("select2"),t.addClass("select2-container--open"),t.css({position:"absolute",top:-999999}),this.$container=n},e.prototype.render=function(e){var t=f("<span></span>"),n=e.call(this);return t.append(n),this.$dropdownContainer=t},e.prototype._hideDropdown=function(e){this.$dropdownContainer.detach()},e.prototype._attachPositioningHandler=function(e,t){var n=this,i="scroll.select2."+t.id,r="resize.select2."+t.id,o="orientationchange.select2."+t.id,s=this.$container.parents().filter(a.hasScroll);s.each(function(){a.StoreData(this,"select2-scroll-position",{x:f(this).scrollLeft(),y:f(this).scrollTop()})}),s.on(i,function(e){var t=a.GetData(this,"select2-scroll-position");f(this).scrollTop(t.y)}),f(window).on(i+" "+r+" "+o,function(e){n._positionDropdown(),n._resizeDropdown()})},e.prototype._detachPositioningHandler=function(e,t){var n="scroll.select2."+t.id,i="resize.select2."+t.id,r="orientationchange.select2."+t.id;this.$container.parents().filter(a.hasScroll).off(n),f(window).off(n+" "+i+" "+r)},e.prototype._positionDropdown=function(){var e=f(window),t=this.$dropdown.hasClass("select2-dropdown--above"),n=this.$dropdown.hasClass("select2-dropdown--below"),i=null,r=this.$container.offset();r.bottom=r.top+this.$container.outerHeight(!1);var o={height:this.$container.outerHeight(!1)};o.top=r.top,o.bottom=r.top+o.height;var s=this.$dropdown.outerHeight(!1),a=e.scrollTop(),l=e.scrollTop()+e.height(),c=a<r.top-s,u=l>r.bottom+s,d={left:r.left,top:o.bottom},p=this.$dropdownParent;"static"===p.css("position")&&(p=p.offsetParent());var h=p.offset();d.top-=h.top,d.left-=h.left,t||n||(i="below"),u||!c||t?!c&&u&&t&&(i="below"):i="above",("above"==i||t&&"below"!==i)&&(d.top=o.top-h.top-s),null!=i&&(this.$dropdown.removeClass("select2-dropdown--below select2-dropdown--above").addClass("select2-dropdown--"+i),this.$container.removeClass("select2-container--below select2-container--above").addClass("select2-container--"+i)),this.$dropdownContainer.css(d)},e.prototype._resizeDropdown=function(){var e={width:this.$container.outerWidth(!1)+"px"};this.options.get("dropdownAutoWidth")&&(e.minWidth=e.width,e.position="relative",e.width="auto"),this.$dropdown.css(e)},e.prototype._showDropdown=function(e){this.$dropdownContainer.appendTo(this.$dropdownParent),this._positionDropdown(),this._resizeDropdown()},e}),e.define("select2/dropdown/minimumResultsForSearch",[],function(){function e(e,t,n,i){this.minimumResultsForSearch=n.get("minimumResultsForSearch"),this.minimumResultsForSearch<0&&(this.minimumResultsForSearch=1/0),e.call(this,t,n,i)}return e.prototype.showSearch=function(e,t){return!(function e(t){for(var n=0,i=0;i<t.length;i++){var r=t[i];r.children?n+=e(r.children):n++}return n}(t.data.results)<this.minimumResultsForSearch)&&e.call(this,t)},e}),e.define("select2/dropdown/selectOnClose",["../utils"],function(o){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("close",function(e){i._handleSelectOnClose(e)})},e.prototype._handleSelectOnClose=function(e,t){if(t&&null!=t.originalSelect2Event){var n=t.originalSelect2Event;if("select"===n._type||"unselect"===n._type)return}var i=this.getHighlightedResults();if(!(i.length<1)){var r=o.GetData(i[0],"data");null!=r.element&&r.element.selected||null==r.element&&r.selected||this.trigger("select",{data:r})}},e}),e.define("select2/dropdown/closeOnSelect",[],function(){function e(){}return e.prototype.bind=function(e,t,n){var i=this;e.call(this,t,n),t.on("select",function(e){i._selectTriggered(e)}),t.on("unselect",function(e){i._selectTriggered(e)})},e.prototype._selectTriggered=function(e,t){var n=t.originalEvent;n&&(n.ctrlKey||n.metaKey)||this.trigger("close",{originalEvent:n,originalSelect2Event:t})},e}),e.define("select2/i18n/en",[],function(){return{errorLoading:function(){return"The results could not be loaded."},inputTooLong:function(e){var t=e.input.length-e.maximum,n="Please delete "+t+" character";return 1!=t&&(n+="s"),n},inputTooShort:function(e){return"Please enter "+(e.minimum-e.input.length)+" or more characters"},loadingMore:function(){return"Loading more results…"},maximumSelected:function(e){var t="You can only select "+e.maximum+" item";return 1!=e.maximum&&(t+="s"),t},noResults:function(){return"No results found"},searching:function(){return"Searching…"},removeAllItems:function(){return"Remove all items"}}}),e.define("select2/defaults",["jquery","require","./results","./selection/single","./selection/multiple","./selection/placeholder","./selection/allowClear","./selection/search","./selection/eventRelay","./utils","./translation","./diacritics","./data/select","./data/array","./data/ajax","./data/tags","./data/tokenizer","./data/minimumInputLength","./data/maximumInputLength","./data/maximumSelectionLength","./dropdown","./dropdown/search","./dropdown/hidePlaceholder","./dropdown/infiniteScroll","./dropdown/attachBody","./dropdown/minimumResultsForSearch","./dropdown/selectOnClose","./dropdown/closeOnSelect","./i18n/en"],function(f,g,m,v,y,_,w,$,b,A,x,t,S,D,C,E,O,q,T,j,L,k,I,P,M,R,U,z,e){function n(){this.reset()}return n.prototype.apply=function(t){if(null==(t=f.extend(!0,{},this.defaults,t)).dataAdapter){if(null!=t.ajax?t.dataAdapter=C:null!=t.data?t.dataAdapter=D:t.dataAdapter=S,0<t.minimumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,q)),0<t.maximumInputLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,T)),0<t.maximumSelectionLength&&(t.dataAdapter=A.Decorate(t.dataAdapter,j)),t.tags&&(t.dataAdapter=A.Decorate(t.dataAdapter,E)),null==t.tokenSeparators&&null==t.tokenizer||(t.dataAdapter=A.Decorate(t.dataAdapter,O)),null!=t.query){var e=g(t.amdBase+"compat/query");t.dataAdapter=A.Decorate(t.dataAdapter,e)}if(null!=t.initSelection){var n=g(t.amdBase+"compat/initSelection");t.dataAdapter=A.Decorate(t.dataAdapter,n)}}if(null==t.resultsAdapter&&(t.resultsAdapter=m,null!=t.ajax&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,P)),null!=t.placeholder&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,I)),t.selectOnClose&&(t.resultsAdapter=A.Decorate(t.resultsAdapter,U))),null==t.dropdownAdapter){if(t.multiple)t.dropdownAdapter=L;else{var i=A.Decorate(L,k);t.dropdownAdapter=i}if(0!==t.minimumResultsForSearch&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,R)),t.closeOnSelect&&(t.dropdownAdapter=A.Decorate(t.dropdownAdapter,z)),null!=t.dropdownCssClass||null!=t.dropdownCss||null!=t.adaptDropdownCssClass){var r=g(t.amdBase+"compat/dropdownCss");t.dropdownAdapter=A.Decorate(t.dropdownAdapter,r)}t.dropdownAdapter=A.Decorate(t.dropdownAdapter,M)}if(null==t.selectionAdapter){if(t.multiple?t.selectionAdapter=y:t.selectionAdapter=v,null!=t.placeholder&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,_)),t.allowClear&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,w)),t.multiple&&(t.selectionAdapter=A.Decorate(t.selectionAdapter,$)),null!=t.containerCssClass||null!=t.containerCss||null!=t.adaptContainerCssClass){var o=g(t.amdBase+"compat/containerCss");t.selectionAdapter=A.Decorate(t.selectionAdapter,o)}t.selectionAdapter=A.Decorate(t.selectionAdapter,b)}if("string"==typeof t.language)if(0<t.language.indexOf("-")){var s=t.language.split("-")[0];t.language=[t.language,s]}else t.language=[t.language];if(f.isArray(t.language)){var a=new x;t.language.push("en");for(var l=t.language,c=0;c<l.length;c++){var u=l[c],d={};try{d=x.loadPath(u)}catch(e){try{u=this.defaults.amdLanguageBase+u,d=x.loadPath(u)}catch(e){t.debug&&window.console&&console.warn&&console.warn('Select2: The language file for "'+u+'" could not be automatically loaded. A fallback will be used instead.');continue}}a.extend(d)}t.translations=a}else{var p=x.loadPath(this.defaults.amdLanguageBase+"en"),h=new x(t.language);h.extend(p),t.translations=h}return t},n.prototype.reset=function(){function a(e){return e.replace(/[^\u0000-\u007E]/g,function(e){return t[e]||e})}this.defaults={amdBase:"./",amdLanguageBase:"./i18n/",closeOnSelect:!0,debug:!1,dropdownAutoWidth:!1,escapeMarkup:A.escapeMarkup,language:e,matcher:function e(t,n){if(""===f.trim(t.term))return n;if(n.children&&0<n.children.length){for(var i=f.extend(!0,{},n),r=n.children.length-1;0<=r;r--)null==e(t,n.children[r])&&i.children.splice(r,1);return 0<i.children.length?i:e(t,i)}var o=a(n.text).toUpperCase(),s=a(t.term).toUpperCase();return-1<o.indexOf(s)?n:null},minimumInputLength:0,maximumInputLength:0,maximumSelectionLength:0,minimumResultsForSearch:0,selectOnClose:!1,scrollAfterSelect:!1,sorter:function(e){return e},templateResult:function(e){return e.text},templateSelection:function(e){return e.text},theme:"default",width:"resolve"}},n.prototype.set=function(e,t){var n={};n[f.camelCase(e)]=t;var i=A._convertData(n);f.extend(!0,this.defaults,i)},new n}),e.define("select2/options",["require","jquery","./defaults","./utils"],function(i,d,r,p){function e(e,t){if(this.options=e,null!=t&&this.fromElement(t),this.options=r.apply(this.options),t&&t.is("input")){var n=i(this.get("amdBase")+"compat/inputData");this.options.dataAdapter=p.Decorate(this.options.dataAdapter,n)}}return e.prototype.fromElement=function(e){var t=["select2"];null==this.options.multiple&&(this.options.multiple=e.prop("multiple")),null==this.options.disabled&&(this.options.disabled=e.prop("disabled")),null==this.options.language&&(e.prop("lang")?this.options.language=e.prop("lang").toLowerCase():e.closest("[lang]").prop("lang")&&(this.options.language=e.closest("[lang]").prop("lang"))),null==this.options.dir&&(e.prop("dir")?this.options.dir=e.prop("dir"):e.closest("[dir]").prop("dir")?this.options.dir=e.closest("[dir]").prop("dir"):this.options.dir="ltr"),e.prop("disabled",this.options.disabled),e.prop("multiple",this.options.multiple),p.GetData(e[0],"select2Tags")&&(this.options.debug&&window.console&&console.warn&&console.warn('Select2: The `data-select2-tags` attribute has been changed to use the `data-data` and `data-tags="true"` attributes and will be removed in future versions of Select2.'),p.StoreData(e[0],"data",p.GetData(e[0],"select2Tags")),p.StoreData(e[0],"tags",!0)),p.GetData(e[0],"ajaxUrl")&&(this.options.debug&&window.console&&console.warn&&console.warn("Select2: The `data-ajax-url` attribute has been changed to `data-ajax--url` and support for the old attribute will be removed in future versions of Select2."),e.attr("ajax--url",p.GetData(e[0],"ajaxUrl")),p.StoreData(e[0],"ajax-Url",p.GetData(e[0],"ajaxUrl")));var n={};function i(e,t){return t.toUpperCase()}for(var r=0;r<e[0].attributes.length;r++){var o=e[0].attributes[r].name,s="data-";if(o.substr(0,s.length)==s){var a=o.substring(s.length),l=p.GetData(e[0],a);n[a.replace(/-([a-z])/g,i)]=l}}d.fn.jquery&&"1."==d.fn.jquery.substr(0,2)&&e[0].dataset&&(n=d.extend(!0,{},e[0].dataset,n));var c=d.extend(!0,{},p.GetData(e[0]),n);for(var u in c=p._convertData(c))-1<d.inArray(u,t)||(d.isPlainObject(this.options[u])?d.extend(this.options[u],c[u]):this.options[u]=c[u]);return this},e.prototype.get=function(e){return this.options[e]},e.prototype.set=function(e,t){this.options[e]=t},e}),e.define("select2/core",["jquery","./options","./utils","./keys"],function(r,c,u,i){var d=function(e,t){null!=u.GetData(e[0],"select2")&&u.GetData(e[0],"select2").destroy(),this.$element=e,this.id=this._generateId(e),t=t||{},this.options=new c(t,e),d.__super__.constructor.call(this);var n=e.attr("tabindex")||0;u.StoreData(e[0],"old-tabindex",n),e.attr("tabindex","-1");var i=this.options.get("dataAdapter");this.dataAdapter=new i(e,this.options);var r=this.render();this._placeContainer(r);var o=this.options.get("selectionAdapter");this.selection=new o(e,this.options),this.$selection=this.selection.render(),this.selection.position(this.$selection,r);var s=this.options.get("dropdownAdapter");this.dropdown=new s(e,this.options),this.$dropdown=this.dropdown.render(),this.dropdown.position(this.$dropdown,r);var a=this.options.get("resultsAdapter");this.results=new a(e,this.options,this.dataAdapter),this.$results=this.results.render(),this.results.position(this.$results,this.$dropdown);var l=this;this._bindAdapters(),this._registerDomEvents(),this._registerDataEvents(),this._registerSelectionEvents(),this._registerDropdownEvents(),this._registerResultsEvents(),this._registerEvents(),this.dataAdapter.current(function(e){l.trigger("selection:update",{data:e})}),e.addClass("select2-hidden-accessible"),e.attr("aria-hidden","true"),this._syncAttributes(),u.StoreData(e[0],"select2",this),e.data("select2",this)};return u.Extend(d,u.Observable),d.prototype._generateId=function(e){return"select2-"+(null!=e.attr("id")?e.attr("id"):null!=e.attr("name")?e.attr("name")+"-"+u.generateChars(2):u.generateChars(4)).replace(/(:|\.|\[|\]|,)/g,"")},d.prototype._placeContainer=function(e){e.insertAfter(this.$element);var t=this._resolveWidth(this.$element,this.options.get("width"));null!=t&&e.css("width",t)},d.prototype._resolveWidth=function(e,t){var n=/^width:(([-+]?([0-9]*\.)?[0-9]+)(px|em|ex|%|in|cm|mm|pt|pc))/i;if("resolve"==t){var i=this._resolveWidth(e,"style");return null!=i?i:this._resolveWidth(e,"element")}if("element"==t){var r=e.outerWidth(!1);return r<=0?"auto":r+"px"}if("style"!=t)return"computedstyle"!=t?t:window.getComputedStyle(e[0]).width;var o=e.attr("style");if("string"!=typeof o)return null;for(var s=o.split(";"),a=0,l=s.length;a<l;a+=1){var c=s[a].replace(/\s/g,"").match(n);if(null!==c&&1<=c.length)return c[1]}return null},d.prototype._bindAdapters=function(){this.dataAdapter.bind(this,this.$container),this.selection.bind(this,this.$container),this.dropdown.bind(this,this.$container),this.results.bind(this,this.$container)},d.prototype._registerDomEvents=function(){var t=this;this.$element.on("change.select2",function(){t.dataAdapter.current(function(e){t.trigger("selection:update",{data:e})})}),this.$element.on("focus.select2",function(e){t.trigger("focus",e)}),this._syncA=u.bind(this._syncAttributes,this),this._syncS=u.bind(this._syncSubtree,this),this.$element[0].attachEvent&&this.$element[0].attachEvent("onpropertychange",this._syncA);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;null!=e?(this._observer=new e(function(e){r.each(e,t._syncA),r.each(e,t._syncS)}),this._observer.observe(this.$element[0],{attributes:!0,childList:!0,subtree:!1})):this.$element[0].addEventListener&&(this.$element[0].addEventListener("DOMAttrModified",t._syncA,!1),this.$element[0].addEventListener("DOMNodeInserted",t._syncS,!1),this.$element[0].addEventListener("DOMNodeRemoved",t._syncS,!1))},d.prototype._registerDataEvents=function(){var n=this;this.dataAdapter.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerSelectionEvents=function(){var n=this,i=["toggle","focus"];this.selection.on("toggle",function(){n.toggleDropdown()}),this.selection.on("focus",function(e){n.focus(e)}),this.selection.on("*",function(e,t){-1===r.inArray(e,i)&&n.trigger(e,t)})},d.prototype._registerDropdownEvents=function(){var n=this;this.dropdown.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerResultsEvents=function(){var n=this;this.results.on("*",function(e,t){n.trigger(e,t)})},d.prototype._registerEvents=function(){var n=this;this.on("open",function(){n.$container.addClass("select2-container--open")}),this.on("close",function(){n.$container.removeClass("select2-container--open")}),this.on("enable",function(){n.$container.removeClass("select2-container--disabled")}),this.on("disable",function(){n.$container.addClass("select2-container--disabled")}),this.on("blur",function(){n.$container.removeClass("select2-container--focus")}),this.on("query",function(t){n.isOpen()||n.trigger("open",{}),this.dataAdapter.query(t,function(e){n.trigger("results:all",{data:e,query:t})})}),this.on("query:append",function(t){this.dataAdapter.query(t,function(e){n.trigger("results:append",{data:e,query:t})})}),this.on("keypress",function(e){var t=e.which;n.isOpen()?t===i.ESC||t===i.TAB||t===i.UP&&e.altKey?(n.close(),e.preventDefault()):t===i.ENTER?(n.trigger("results:select",{}),e.preventDefault()):t===i.SPACE&&e.ctrlKey?(n.trigger("results:toggle",{}),e.preventDefault()):t===i.UP?(n.trigger("results:previous",{}),e.preventDefault()):t===i.DOWN&&(n.trigger("results:next",{}),e.preventDefault()):(t===i.ENTER||t===i.SPACE||t===i.DOWN&&e.altKey)&&(n.open(),e.preventDefault())})},d.prototype._syncAttributes=function(){this.options.set("disabled",this.$element.prop("disabled")),this.options.get("disabled")?(this.isOpen()&&this.close(),this.trigger("disable",{})):this.trigger("enable",{})},d.prototype._syncSubtree=function(e,t){var n=!1,i=this;if(!e||!e.target||"OPTION"===e.target.nodeName||"OPTGROUP"===e.target.nodeName){if(t)if(t.addedNodes&&0<t.addedNodes.length)for(var r=0;r<t.addedNodes.length;r++){t.addedNodes[r].selected&&(n=!0)}else t.removedNodes&&0<t.removedNodes.length&&(n=!0);else n=!0;n&&this.dataAdapter.current(function(e){i.trigger("selection:update",{data:e})})}},d.prototype.trigger=function(e,t){var n=d.__super__.trigger,i={open:"opening",close:"closing",select:"selecting",unselect:"unselecting",clear:"clearing"};if(void 0===t&&(t={}),e in i){var r=i[e],o={prevented:!1,name:e,args:t};if(n.call(this,r,o),o.prevented)return void(t.prevented=!0)}n.call(this,e,t)},d.prototype.toggleDropdown=function(){this.options.get("disabled")||(this.isOpen()?this.close():this.open())},d.prototype.open=function(){this.isOpen()||this.trigger("query",{})},d.prototype.close=function(){this.isOpen()&&this.trigger("close",{})},d.prototype.isOpen=function(){return this.$container.hasClass("select2-container--open")},d.prototype.hasFocus=function(){return this.$container.hasClass("select2-container--focus")},d.prototype.focus=function(e){this.hasFocus()||(this.$container.addClass("select2-container--focus"),this.trigger("focus",{}))},d.prototype.enable=function(e){this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("enable")` method has been deprecated and will be removed in later Select2 versions. Use $element.prop("disabled") instead.'),null!=e&&0!==e.length||(e=[!0]);var t=!e[0];this.$element.prop("disabled",t)},d.prototype.data=function(){this.options.get("debug")&&0<arguments.length&&window.console&&console.warn&&console.warn('Select2: Data can no longer be set using `select2("data")`. You should consider setting the value instead using `$element.val()`.');var t=[];return this.dataAdapter.current(function(e){t=e}),t},d.prototype.val=function(e){if(this.options.get("debug")&&window.console&&console.warn&&console.warn('Select2: The `select2("val")` method has been deprecated and will be removed in later Select2 versions. Use $element.val() instead.'),null==e||0===e.length)return this.$element.val();var t=e[0];r.isArray(t)&&(t=r.map(t,function(e){return e.toString()})),this.$element.val(t).trigger("change")},d.prototype.destroy=function(){this.$container.remove(),this.$element[0].detachEvent&&this.$element[0].detachEvent("onpropertychange",this._syncA),null!=this._observer?(this._observer.disconnect(),this._observer=null):this.$element[0].removeEventListener&&(this.$element[0].removeEventListener("DOMAttrModified",this._syncA,!1),this.$element[0].removeEventListener("DOMNodeInserted",this._syncS,!1),this.$element[0].removeEventListener("DOMNodeRemoved",this._syncS,!1)),this._syncA=null,this._syncS=null,this.$element.off(".select2"),this.$element.attr("tabindex",u.GetData(this.$element[0],"old-tabindex")),this.$element.removeClass("select2-hidden-accessible"),this.$element.attr("aria-hidden","false"),u.RemoveData(this.$element[0]),this.$element.removeData("select2"),this.dataAdapter.destroy(),this.selection.destroy(),this.dropdown.destroy(),this.results.destroy(),this.dataAdapter=null,this.selection=null,this.dropdown=null,this.results=null},d.prototype.render=function(){var e=r('<span class="select2 select2-container"><span class="selection"></span><span class="dropdown-wrapper" aria-hidden="true"></span></span>');return e.attr("dir",this.options.get("dir")),this.$container=e,this.$container.addClass("select2-container--"+this.options.get("theme")),u.StoreData(e[0],"element",this.$element),e},d}),e.define("select2/compat/utils",["jquery"],function(s){return{syncCssClasses:function(e,t,n){var i,r,o=[];(i=s.trim(e.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0===this.indexOf("select2-")&&o.push(this)}),(i=s.trim(t.attr("class")))&&s((i=""+i).split(/\s+/)).each(function(){0!==this.indexOf("select2-")&&null!=(r=n(this))&&o.push(r)}),e.attr("class",o.join(" "))}}}),e.define("select2/compat/containerCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("containerCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptContainerCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("containerCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/dropdownCss",["jquery","./utils"],function(s,a){function l(e){return null}function e(){}return e.prototype.render=function(e){var t=e.call(this),n=this.options.get("dropdownCssClass")||"";s.isFunction(n)&&(n=n(this.$element));var i=this.options.get("adaptDropdownCssClass");if(i=i||l,-1!==n.indexOf(":all:")){n=n.replace(":all:","");var r=i;i=function(e){var t=r(e);return null!=t?t+" "+e:e}}var o=this.options.get("dropdownCss")||{};return s.isFunction(o)&&(o=o(this.$element)),a.syncCssClasses(t,this.$element,i),t.css(o),t.addClass(n),t},e}),e.define("select2/compat/initSelection",["jquery"],function(i){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `initSelection` option has been deprecated in favor of a custom data adapter that overrides the `current` method. This method is now called multiple times instead of a single time when the instance is initialized. Support will be removed for the `initSelection` option in future versions of Select2"),this.initSelection=n.get("initSelection"),this._isInitialized=!1,e.call(this,t,n)}return e.prototype.current=function(e,t){var n=this;this._isInitialized?e.call(this,t):this.initSelection.call(null,this.$element,function(e){n._isInitialized=!0,i.isArray(e)||(e=[e]),t(e)})},e}),e.define("select2/compat/inputData",["jquery","../utils"],function(s,i){function e(e,t,n){this._currentData=[],this._valueSeparator=n.get("valueSeparator")||",","hidden"===t.prop("type")&&n.get("debug")&&console&&console.warn&&console.warn("Select2: Using a hidden input with Select2 is no longer supported and may stop working in the future. It is recommended to use a `<select>` element instead."),e.call(this,t,n)}return e.prototype.current=function(e,t){function i(e,t){var n=[];return e.selected||-1!==s.inArray(e.id,t)?(e.selected=!0,n.push(e)):e.selected=!1,e.children&&n.push.apply(n,i(e.children,t)),n}for(var n=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r];n.push.apply(n,i(o,this.$element.val().split(this._valueSeparator)))}t(n)},e.prototype.select=function(e,t){if(this.options.get("multiple")){var n=this.$element.val();n+=this._valueSeparator+t.id,this.$element.val(n),this.$element.trigger("change")}else this.current(function(e){s.map(e,function(e){e.selected=!1})}),this.$element.val(t.id),this.$element.trigger("change")},e.prototype.unselect=function(e,r){var o=this;r.selected=!1,this.current(function(e){for(var t=[],n=0;n<e.length;n++){var i=e[n];r.id!=i.id&&t.push(i.id)}o.$element.val(t.join(o._valueSeparator)),o.$element.trigger("change")})},e.prototype.query=function(e,t,n){for(var i=[],r=0;r<this._currentData.length;r++){var o=this._currentData[r],s=this.matches(t,o);null!==s&&i.push(s)}n({results:i})},e.prototype.addOptions=function(e,t){var n=s.map(t,function(e){return i.GetData(e[0],"data")});this._currentData.push.apply(this._currentData,n)},e}),e.define("select2/compat/matcher",["jquery"],function(s){return function(o){return function(e,t){var n=s.extend(!0,{},t);if(null==e.term||""===s.trim(e.term))return n;if(t.children){for(var i=t.children.length-1;0<=i;i--){var r=t.children[i];o(e.term,r.text,r)||n.children.splice(i,1)}if(0<n.children.length)return n}return o(e.term,t.text,t)?n:null}}}),e.define("select2/compat/query",[],function(){function e(e,t,n){n.get("debug")&&window.console&&console.warn&&console.warn("Select2: The `query` option has been deprecated in favor of a custom data adapter that overrides the `query` method. Support will be removed for the `query` option in future versions of Select2."),e.call(this,t,n)}return e.prototype.query=function(e,t,n){t.callback=n,this.options.get("query").call(null,t)},e}),e.define("select2/dropdown/attachContainer",[],function(){function e(e,t,n){e.call(this,t,n)}return e.prototype.position=function(e,t,n){n.find(".dropdown-wrapper").append(t),t.addClass("select2-dropdown--below"),n.addClass("select2-container--below")},e}),e.define("select2/dropdown/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$dropdown.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),e.define("select2/selection/stopPropagation",[],function(){function e(){}return e.prototype.bind=function(e,t,n){e.call(this,t,n);this.$selection.on(["blur","change","click","dblclick","focus","focusin","focusout","input","keydown","keyup","keypress","mousedown","mouseenter","mouseleave","mousemove","mouseover","mouseup","search","touchend","touchstart"].join(" "),function(e){e.stopPropagation()})},e}),l=function(p){var h,f,e=["wheel","mousewheel","DOMMouseScroll","MozMousePixelScroll"],t="onwheel"in document||9<=document.documentMode?["wheel"]:["mousewheel","DomMouseScroll","MozMousePixelScroll"],g=Array.prototype.slice;if(p.event.fixHooks)for(var n=e.length;n;)p.event.fixHooks[e[--n]]=p.event.mouseHooks;var m=p.event.special.mousewheel={version:"3.1.12",setup:function(){if(this.addEventListener)for(var e=t.length;e;)this.addEventListener(t[--e],i,!1);else this.onmousewheel=i;p.data(this,"mousewheel-line-height",m.getLineHeight(this)),p.data(this,"mousewheel-page-height",m.getPageHeight(this))},teardown:function(){if(this.removeEventListener)for(var e=t.length;e;)this.removeEventListener(t[--e],i,!1);else this.onmousewheel=null;p.removeData(this,"mousewheel-line-height"),p.removeData(this,"mousewheel-page-height")},getLineHeight:function(e){var t=p(e),n=t["offsetParent"in p.fn?"offsetParent":"parent"]();return n.length||(n=p("body")),parseInt(n.css("fontSize"),10)||parseInt(t.css("fontSize"),10)||16},getPageHeight:function(e){return p(e).height()},settings:{adjustOldDeltas:!0,normalizeOffset:!0}};function i(e){var t,n=e||window.event,i=g.call(arguments,1),r=0,o=0,s=0,a=0,l=0;if((e=p.event.fix(n)).type="mousewheel","detail"in n&&(s=-1*n.detail),"wheelDelta"in n&&(s=n.wheelDelta),"wheelDeltaY"in n&&(s=n.wheelDeltaY),"wheelDeltaX"in n&&(o=-1*n.wheelDeltaX),"axis"in n&&n.axis===n.HORIZONTAL_AXIS&&(o=-1*s,s=0),r=0===s?o:s,"deltaY"in n&&(r=s=-1*n.deltaY),"deltaX"in n&&(o=n.deltaX,0===s&&(r=-1*o)),0!==s||0!==o){if(1===n.deltaMode){var c=p.data(this,"mousewheel-line-height");r*=c,s*=c,o*=c}else if(2===n.deltaMode){var u=p.data(this,"mousewheel-page-height");r*=u,s*=u,o*=u}if(t=Math.max(Math.abs(s),Math.abs(o)),(!f||t<f)&&y(n,f=t)&&(f/=40),y(n,t)&&(r/=40,o/=40,s/=40),r=Math[1<=r?"floor":"ceil"](r/f),o=Math[1<=o?"floor":"ceil"](o/f),s=Math[1<=s?"floor":"ceil"](s/f),m.settings.normalizeOffset&&this.getBoundingClientRect){var d=this.getBoundingClientRect();a=e.clientX-d.left,l=e.clientY-d.top}return e.deltaX=o,e.deltaY=s,e.deltaFactor=f,e.offsetX=a,e.offsetY=l,e.deltaMode=0,i.unshift(e,r,o,s),h&&clearTimeout(h),h=setTimeout(v,200),(p.event.dispatch||p.event.handle).apply(this,i)}}function v(){f=null}function y(e,t){return m.settings.adjustOldDeltas&&"mousewheel"===e.type&&t%120==0}p.fn.extend({mousewheel:function(e){return e?this.bind("mousewheel",e):this.trigger("mousewheel")},unmousewheel:function(e){return this.unbind("mousewheel",e)}})},"function"==typeof e.define&&e.define.amd?e.define("jquery-mousewheel",["jquery"],l):"object"==typeof exports?module.exports=l:l(d),e.define("jquery.select2",["jquery","jquery-mousewheel","./select2/core","./select2/defaults","./select2/utils"],function(r,e,o,t,s){if(null==r.fn.select2){var a=["open","close","destroy"];r.fn.select2=function(t){if("object"==typeof(t=t||{}))return this.each(function(){var e=r.extend(!0,{},t);new o(r(this),e)}),this;if("string"!=typeof t)throw new Error("Invalid arguments for Select2: "+t);var n,i=Array.prototype.slice.call(arguments,1);return this.each(function(){var e=s.GetData(this,"select2");null==e&&window.console&&console.error&&console.error("The select2('"+t+"') method was called on an element that is not using Select2."),n=e[t].apply(e,i)}),-1<r.inArray(t,a)?this:n}}return null==r.fn.select2.defaults&&(r.fn.select2.defaults=t),o}),{define:e.define,require:e.require}}(),t=e.require("jquery.select2");return d.fn.select2.amd=e,t});
;/**
 * @license
 * Video.js 7.0.0-rc.1 <http://videojs.com/>
 * Copyright Brightcove, Inc. <https://www.brightcove.com/>
 * Available under Apache License Version 2.0
 * <https://github.com/videojs/video.js/blob/master/LICENSE>
 *
 * Includes vtt.js <https://github.com/mozilla/vtt.js>
 * Available under Apache License Version 2.0
 * <https://github.com/mozilla/vtt.js/blob/master/LICENSE>
 */
!function(t,e){"object"==typeof exports&&"undefined"!=typeof module?module.exports=e():"function"==typeof define&&define.amd?define(e):t.videojs=e()}(this,function(){var d="7.0.0-rc.1",t="undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function e(t,e){return t(e={exports:{}},e.exports),e.exports}var i,g="undefined"!=typeof window?window:"undefined"!=typeof t?t:"undefined"!=typeof self?self:{},r={},n=Object.freeze({default:r}),s=n&&r||n,a="undefined"!=typeof t?t:"undefined"!=typeof window?window:{};"undefined"!=typeof document?i=document:(i=a["__GLOBAL_DOCUMENT_CACHE@4"])||(i=a["__GLOBAL_DOCUMENT_CACHE@4"]=s);var p=i,o=void 0,u="info",l=[],c=function(t,e){var i=o.levels[u],r=new RegExp("^("+i+")$");if("log"!==t&&e.unshift(t.toUpperCase()+":"),l&&l.push([].concat(e)),e.unshift("VIDEOJS:"),g.console){var n=g.console[t];n||"debug"!==t||(n=g.console.info||g.console.log),n&&i&&r.test(t)&&n[Array.isArray(e)?"apply":"call"](g.console,e)}};(o=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];c("log",e)}).levels={all:"debug|log|warn|error",off:"",debug:"debug|log|warn|error",info:"log|warn|error",warn:"warn|error",error:"error",DEFAULT:u},o.level=function(t){if("string"==typeof t){if(!o.levels.hasOwnProperty(t))throw new Error('"'+t+'" in not a valid log level');u=t}return u},o.history=function(){return l?[].concat(l):[]},o.history.clear=function(){l&&(l.length=0)},o.history.disable=function(){null!==l&&(l.length=0,l=null)},o.history.enable=function(){null===l&&(l=[])},o.error=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("error",e)},o.warn=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("warn",e)},o.debug=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return c("debug",e)};var f=o;var m=function(t){for(var e="",i=0;i<arguments.length;i++)e+=t[i].replace(/\n\r?\s*/g,"")+(arguments[i+1]||"");return e},v="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},y=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},b=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e},h=function(t,e){return t.raw=e,t},T=Object.prototype.toString,S=function(t){return E(t)?Object.keys(t):[]};function k(e,i){S(e).forEach(function(t){return i(e[t],t)})}function C(i){for(var t=arguments.length,e=Array(1<t?t-1:0),r=1;r<t;r++)e[r-1]=arguments[r];return Object.assign?Object.assign.apply(Object,[i].concat(e)):(e.forEach(function(t){t&&k(t,function(t,e){i[e]=t})}),i)}function E(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))}function w(t){return E(t)&&"[object Object]"===T.call(t)&&t.constructor===Object}function A(t,e){if(!t||!e)return"";if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(t);return i?i[e]:""}return""}var L=h(["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."],["Setting attributes in the second argument of createEl()\n                has been deprecated. Use the third argument instead.\n                createEl(type, properties, attributes). Attempting to set "," to ","."]);function P(t){return"string"==typeof t&&/\S/.test(t)}function O(t){if(/\s/.test(t))throw new Error("class has illegal whitespace characters")}function I(){return p===g.document}function x(t){return E(t)&&1===t.nodeType}function D(){try{return g.parent!==g.self}catch(t){return!0}}function R(r){return function(t,e){if(!P(t))return p[r](null);P(e)&&(e=p.querySelector(e));var i=x(e)?e:p;return i[r]&&i[r](t)}}function M(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",i=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=arguments[3],n=p.createElement(t);return Object.getOwnPropertyNames(i).forEach(function(t){var e=i[t];-1!==t.indexOf("aria-")||"role"===t||"type"===t?(f.warn(m(L,t,e)),n.setAttribute(t,e)):"textContent"===t?U(n,e):n[t]=e}),Object.getOwnPropertyNames(e).forEach(function(t){n.setAttribute(t,e[t])}),r&&et(n,r),n}function U(t,e){return"undefined"==typeof t.textContent?t.innerText=e:t.textContent=e,t}function N(t,e){e.firstChild?e.insertBefore(t,e.firstChild):e.appendChild(t)}function B(t,e){return O(e),t.classList?t.classList.contains(e):(i=e,new RegExp("(^|\\s)"+i+"($|\\s)")).test(t.className);var i}function j(t,e){return t.classList?t.classList.add(e):B(t,e)||(t.className=(t.className+" "+e).trim()),t}function F(t,e){return t.classList?t.classList.remove(e):(O(e),t.className=t.className.split(/\s+/).filter(function(t){return t!==e}).join(" ")),t}function H(t,e,i){var r=B(t,e);if("function"==typeof i&&(i=i(t,e)),"boolean"!=typeof i&&(i=!r),i!==r)return i?j(t,e):F(t,e),t}function V(i,r){Object.getOwnPropertyNames(r).forEach(function(t){var e=r[t];null===e||"undefined"==typeof e||!1===e?i.removeAttribute(t):i.setAttribute(t,!0===e?"":e)})}function q(t){var e={},i=",autoplay,controls,playsinline,loop,muted,default,defaultMuted,";if(t&&t.attributes&&0<t.attributes.length)for(var r=t.attributes,n=r.length-1;0<=n;n--){var s=r[n].name,a=r[n].value;"boolean"!=typeof t[s]&&-1===i.indexOf(","+s+",")||(a=null!==a),e[s]=a}return e}function W(t,e){return t.getAttribute(e)}function z(t,e,i){t.setAttribute(e,i)}function G(t,e){t.removeAttribute(e)}function X(){p.body.focus(),p.onselectstart=function(){return!1}}function Y(){p.onselectstart=function(){return!0}}function $(t){if(t&&t.getBoundingClientRect&&t.parentNode){var e=t.getBoundingClientRect(),i={};return["bottom","height","left","right","top","width"].forEach(function(t){void 0!==e[t]&&(i[t]=e[t])}),i.height||(i.height=parseFloat(A(t,"height"))),i.width||(i.width=parseFloat(A(t,"width"))),i}}function K(t){var e=void 0;if(t.getBoundingClientRect&&t.parentNode&&(e=t.getBoundingClientRect()),!e)return{left:0,top:0};var i=p.documentElement,r=p.body,n=i.clientLeft||r.clientLeft||0,s=g.pageXOffset||r.scrollLeft,a=e.left+s-n,o=i.clientTop||r.clientTop||0,u=g.pageYOffset||r.scrollTop,l=e.top+u-o;return{left:Math.round(a),top:Math.round(l)}}function Q(t,e){var i={},r=K(t),n=t.offsetWidth,s=t.offsetHeight,a=r.top,o=r.left,u=e.pageY,l=e.pageX;return e.changedTouches&&(l=e.changedTouches[0].pageX,u=e.changedTouches[0].pageY),i.y=Math.max(0,Math.min(1,(a-u+s)/s)),i.x=Math.max(0,Math.min(1,(l-o)/n)),i}function J(t){return E(t)&&3===t.nodeType}function Z(t){for(;t.firstChild;)t.removeChild(t.firstChild);return t}function tt(t){return"function"==typeof t&&(t=t()),(Array.isArray(t)?t:[t]).map(function(t){return"function"==typeof t&&(t=t()),x(t)||J(t)?t:"string"==typeof t&&/\S/.test(t)?p.createTextNode(t):void 0}).filter(function(t){return t})}function et(e,t){return tt(t).forEach(function(t){return e.appendChild(t)}),e}function it(t,e){return et(Z(t),e)}function rt(t){return void 0===t.button&&void 0===t.buttons||(0===t.button&&void 0===t.buttons||0===t.button&&1===t.buttons)}var nt=R("querySelector"),st=R("querySelectorAll"),at=Object.freeze({isReal:I,isEl:x,isInFrame:D,createEl:M,textContent:U,prependTo:N,hasClass:B,addClass:j,removeClass:F,toggleClass:H,setAttributes:V,getAttributes:q,getAttribute:W,setAttribute:z,removeAttribute:G,blockTextSelection:X,unblockTextSelection:Y,getBoundingClientRect:$,findPosition:K,getPointerPosition:Q,isTextNode:J,emptyEl:Z,normalizeContent:tt,appendContent:et,insertContent:it,isSingleLeftClick:rt,$:nt,$$:st}),ot=1;function ut(){return ot++}var lt={},ct="vdata"+(new Date).getTime();function ht(t){var e=t[ct];return e||(e=t[ct]=ut()),lt[e]||(lt[e]={}),lt[e]}function dt(t){var e=t[ct];return!!e&&!!Object.getOwnPropertyNames(lt[e]).length}function pt(e){var t=e[ct];if(t){delete lt[t];try{delete e[ct]}catch(t){e.removeAttribute?e.removeAttribute(ct):e[ct]=null}}}function ft(t,e){var i=ht(t);0===i.handlers[e].length&&(delete i.handlers[e],t.removeEventListener?t.removeEventListener(e,i.dispatcher,!1):t.detachEvent&&t.detachEvent("on"+e,i.dispatcher)),Object.getOwnPropertyNames(i.handlers).length<=0&&(delete i.handlers,delete i.dispatcher,delete i.disabled),0===Object.getOwnPropertyNames(i).length&&pt(t)}function mt(e,i,t,r){t.forEach(function(t){e(i,t,r)})}function gt(t){function e(){return!0}function i(){return!1}if(!t||!t.isPropagationStopped){var r=t||g.event;for(var n in t={},r)"layerX"!==n&&"layerY"!==n&&"keyLocation"!==n&&"webkitMovementX"!==n&&"webkitMovementY"!==n&&("returnValue"===n&&r.preventDefault||(t[n]=r[n]));if(t.target||(t.target=t.srcElement||p),t.relatedTarget||(t.relatedTarget=t.fromElement===t.target?t.toElement:t.fromElement),t.preventDefault=function(){r.preventDefault&&r.preventDefault(),t.returnValue=!1,r.returnValue=!1,t.defaultPrevented=!0},t.defaultPrevented=!1,t.stopPropagation=function(){r.stopPropagation&&r.stopPropagation(),t.cancelBubble=!0,r.cancelBubble=!0,t.isPropagationStopped=e},t.isPropagationStopped=i,t.stopImmediatePropagation=function(){r.stopImmediatePropagation&&r.stopImmediatePropagation(),t.isImmediatePropagationStopped=e,t.stopPropagation()},t.isImmediatePropagationStopped=i,null!==t.clientX&&void 0!==t.clientX){var s=p.documentElement,a=p.body;t.pageX=t.clientX+(s&&s.scrollLeft||a&&a.scrollLeft||0)-(s&&s.clientLeft||a&&a.clientLeft||0),t.pageY=t.clientY+(s&&s.scrollTop||a&&a.scrollTop||0)-(s&&s.clientTop||a&&a.clientTop||0)}t.which=t.charCode||t.keyCode,null!==t.button&&void 0!==t.button&&(t.button=1&t.button?0:4&t.button?1:2&t.button?2:0)}return t}var yt=!1;!function(){try{var t=Object.defineProperty({},"passive",{get:function(){yt=!0}});g.addEventListener("test",null,t),g.removeEventListener("test",null,t)}catch(t){}}();var vt=["touchstart","touchmove"];function _t(a,t,e){if(Array.isArray(t))return mt(_t,a,t,e);var o=ht(a);if(o.handlers||(o.handlers={}),o.handlers[t]||(o.handlers[t]=[]),e.guid||(e.guid=ut()),o.handlers[t].push(e),o.dispatcher||(o.disabled=!1,o.dispatcher=function(t,e){if(!o.disabled){t=gt(t);var i=o.handlers[t.type];if(i)for(var r=i.slice(0),n=0,s=r.length;n<s&&!t.isImmediatePropagationStopped();n++)try{r[n].call(a,t,e)}catch(t){f.error(t)}}}),1===o.handlers[t].length)if(a.addEventListener){var i=!1;yt&&-1<vt.indexOf(t)&&(i={passive:!0}),a.addEventListener(t,o.dispatcher,i)}else a.attachEvent&&a.attachEvent("on"+t,o.dispatcher)}function bt(t,e,i){if(dt(t)){var r=ht(t);if(r.handlers){if(Array.isArray(e))return mt(bt,t,e,i);var n=function(t,e){r.handlers[e]=[],ft(t,e)};if(void 0!==e){var s=r.handlers[e];if(s)if(i){if(i.guid)for(var a=0;a<s.length;a++)s[a].guid===i.guid&&s.splice(a--,1);ft(t,e)}else n(t,e)}else for(var o in r.handlers)Object.prototype.hasOwnProperty.call(r.handlers||{},o)&&n(t,o)}}}function Tt(t,e,i){var r=dt(t)?ht(t):{},n=t.parentNode||t.ownerDocument;if("string"==typeof e?e={type:e,target:t}:e.target||(e.target=t),e=gt(e),r.dispatcher&&r.dispatcher.call(t,e,i),n&&!e.isPropagationStopped()&&!0===e.bubbles)Tt.call(null,n,e,i);else if(!n&&!e.defaultPrevented){var s=ht(e.target);e.target[e.type]&&(s.disabled=!0,"function"==typeof e.target[e.type]&&e.target[e.type](),s.disabled=!1)}return!e.defaultPrevented}function St(e,i,r){if(Array.isArray(i))return mt(St,e,i,r);var t=function t(){bt(e,i,t),r.apply(this,arguments)};t.guid=r.guid=r.guid||ut(),_t(e,i,t)}var kt=Object.freeze({fixEvent:gt,on:_t,off:bt,trigger:Tt,one:St}),Ct=!1,Et=void 0,wt=function(){if(I()){var t=Array.prototype.slice.call(p.getElementsByTagName("video")),e=Array.prototype.slice.call(p.getElementsByTagName("audio")),i=Array.prototype.slice.call(p.getElementsByTagName("video-js")),r=t.concat(e,i);if(r&&0<r.length)for(var n=0,s=r.length;n<s;n++){var a=r[n];if(!a||!a.getAttribute){At(1);break}void 0===a.player&&null!==a.getAttribute("data-setup")&&Et(a)}else Ct||At(1)}};function At(t,e){e&&(Et=e),g.setTimeout(wt,t)}I()&&"complete"===p.readyState?Ct=!0:St(g,"load",function(){Ct=!0});var Lt=function(t){var e=p.createElement("style");return e.className=t,e},Pt=function(t,e){t.styleSheet?t.styleSheet.cssText=e:t.textContent=e},Ot=function(t,e,i){e.guid||(e.guid=ut());var r=function(){return e.apply(t,arguments)};return r.guid=i?i+"_"+e.guid:e.guid,r},It=function(e,i){var r=Date.now();return function(){var t=Date.now();i<=t-r&&(e.apply(void 0,arguments),r=t)}},xt=function(r,n,s){var a=3<arguments.length&&void 0!==arguments[3]?arguments[3]:g,o=void 0;return function(){var t=this,e=arguments,i=function(){i=o=null,s||r.apply(t,e)};!o&&s&&r.apply(t,e),a.clearTimeout(o),o=a.setTimeout(i,n)}},Dt=function(){};Dt.prototype.allowedEvents_={},Dt.prototype.addEventListener=Dt.prototype.on=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},_t(this,t,e),this.addEventListener=i},Dt.prototype.removeEventListener=Dt.prototype.off=function(t,e){bt(this,t,e)},Dt.prototype.one=function(t,e){var i=this.addEventListener;this.addEventListener=function(){},St(this,t,e),this.addEventListener=i},Dt.prototype.dispatchEvent=Dt.prototype.trigger=function(t){var e=t.type||t;"string"==typeof t&&(t={type:e}),t=gt(t),this.allowedEvents_[e]&&this["on"+e]&&this["on"+e](t),Tt(this,t)};var Rt=function(e){return e instanceof Dt||!!e.eventBusEl_&&["on","one","off","trigger"].every(function(t){return"function"==typeof e[t]})},Mt=function(t){return"string"==typeof t&&/\S/.test(t)||Array.isArray(t)&&!!t.length},Ut=function(t){if(!t.nodeName&&!Rt(t))throw new Error("Invalid target; must be a DOM node or evented object.")},Nt=function(t){if(!Mt(t))throw new Error("Invalid event type; must be a non-empty string or array.")},Bt=function(t){if("function"!=typeof t)throw new Error("Invalid listener; must be a function.")},jt=function(t,e){var i=e.length<3||e[0]===t||e[0]===t.eventBusEl_,r=void 0,n=void 0,s=void 0;return i?(r=t.eventBusEl_,3<=e.length&&e.shift(),n=e[0],s=e[1]):(r=e[0],n=e[1],s=e[2]),Ut(r),Nt(n),Bt(s),{isTargetingSelf:i,target:r,type:n,listener:s=Ot(t,s)}},Ft=function(t,e,i,r){Ut(t),t.nodeName?kt[e](t,i,r):t[e](i,r)},Ht={on:function(){for(var t=this,e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];var n=jt(this,i),s=n.isTargetingSelf,a=n.target,o=n.type,u=n.listener;if(Ft(a,"on",o,u),!s){var l=function(){return t.off(a,o,u)};l.guid=u.guid;var c=function(){return t.off("dispose",l)};c.guid=u.guid,Ft(this,"on","dispose",l),Ft(a,"on","dispose",c)}},one:function(){for(var n=this,t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=jt(this,e),s=r.isTargetingSelf,a=r.target,o=r.type,u=r.listener;if(s)Ft(a,"one",o,u);else{var l=function t(){for(var e=arguments.length,i=Array(e),r=0;r<e;r++)i[r]=arguments[r];n.off(a,o,t),u.apply(null,i)};l.guid=u.guid,Ft(a,"one",o,l)}},off:function(t,e,i){if(!t||Mt(t))bt(this.eventBusEl_,t,e);else{var r=t,n=e;Ut(r),Nt(n),Bt(i),i=Ot(this,i),this.off("dispose",i),r.nodeName?(bt(r,n,i),bt(r,"dispose",i)):Rt(r)&&(r.off(n,i),r.off("dispose",i))}},trigger:function(t,e){return Tt(this.eventBusEl_,t,e)}};function Vt(t){var e=(1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).eventBusKey;if(e){if(!t[e].nodeName)throw new Error('The eventBusKey "'+e+'" does not refer to an element.');t.eventBusEl_=t[e]}else t.eventBusEl_=M("span",{className:"vjs-event-bus"});return C(t,Ht),t.on("dispose",function(){t.off(),g.setTimeout(function(){t.eventBusEl_=null},0)}),t}var qt={state:{},setState:function(t){var i=this;"function"==typeof t&&(t=t());var r=void 0;return k(t,function(t,e){i.state[e]!==t&&((r=r||{})[e]={from:i.state[e],to:t}),i.state[e]=t}),r&&Rt(this)&&this.trigger({changes:r,type:"statechanged"}),r}};function Wt(t,e){return C(t,qt),t.state=C({},t.state,e),"function"==typeof t.handleStateChanged&&Rt(t)&&t.on("statechanged",t.handleStateChanged),t}function zt(t){return"string"!=typeof t?t:t.charAt(0).toUpperCase()+t.slice(1)}function Gt(){for(var i={},t=arguments.length,e=Array(t),r=0;r<t;r++)e[r]=arguments[r];return e.forEach(function(t){t&&k(t,function(t,e){w(t)?(w(i[e])||(i[e]={}),i[e]=Gt(i[e],t)):i[e]=t})}),i}var Xt=function(){function l(t,e,i){if(y(this,l),!t&&this.play?this.player_=t=this:this.player_=t,this.options_=Gt({},this.options_),e=this.options_=Gt(this.options_,e),this.id_=e.id||e.el&&e.el.id,!this.id_){var r=t&&t.id&&t.id()||"no_player";this.id_=r+"_component_"+ut()}this.name_=e.name||null,e.el?this.el_=e.el:!1!==e.createEl&&(this.el_=this.createEl()),!1!==e.evented&&Vt(this,{eventBusKey:this.el_?"el_":null}),Wt(this,this.constructor.defaultState),this.children_=[],this.childIndex_={},!(this.childNameIndex_={})!==e.initChildren&&this.initChildren(),this.ready(i),!1!==e.reportTouchActivity&&this.enableTouchActivity()}return l.prototype.dispose=function(){if(this.trigger({type:"dispose",bubbles:!1}),this.children_)for(var t=this.children_.length-1;0<=t;t--)this.children_[t].dispose&&this.children_[t].dispose();this.children_=null,this.childIndex_=null,this.childNameIndex_=null,this.el_&&(this.el_.parentNode&&this.el_.parentNode.removeChild(this.el_),pt(this.el_),this.el_=null),this.player_=null},l.prototype.player=function(){return this.player_},l.prototype.options=function(t){return f.warn("this.options() has been deprecated and will be moved to the constructor in 6.0"),t&&(this.options_=Gt(this.options_,t)),this.options_},l.prototype.el=function(){return this.el_},l.prototype.createEl=function(t,e,i){return M(t,e,i)},l.prototype.localize=function(t,n){var e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:t,i=this.player_.language&&this.player_.language(),r=this.player_.languages&&this.player_.languages(),s=r&&r[i],a=i&&i.split("-")[0],o=r&&r[a],u=e;return s&&s[t]?u=s[t]:o&&o[t]&&(u=o[t]),n&&(u=u.replace(/\{(\d+)\}/g,function(t,e){var i=n[e-1],r=i;return"undefined"==typeof i&&(r=t),r})),u},l.prototype.contentEl=function(){return this.contentEl_||this.el_},l.prototype.id=function(){return this.id_},l.prototype.name=function(){return this.name_},l.prototype.children=function(){return this.children_},l.prototype.getChildById=function(t){return this.childIndex_[t]},l.prototype.getChild=function(t){if(t)return t=zt(t),this.childNameIndex_[t]},l.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:this.children_.length,r=void 0,n=void 0;if("string"==typeof t){n=zt(t);var s=e.componentClass||n;e.name=n;var a=l.getComponent(s);if(!a)throw new Error("Component "+s+" does not exist");if("function"!=typeof a)return null;r=new a(this.player_||this,e)}else r=t;if(this.children_.splice(i,0,r),"function"==typeof r.id&&(this.childIndex_[r.id()]=r),(n=n||r.name&&zt(r.name()))&&(this.childNameIndex_[n]=r),"function"==typeof r.el&&r.el()){var o=this.contentEl().children[i]||null;this.contentEl().insertBefore(r.el(),o)}return r},l.prototype.removeChild=function(t){if("string"==typeof t&&(t=this.getChild(t)),t&&this.children_){for(var e=!1,i=this.children_.length-1;0<=i;i--)if(this.children_[i]===t){e=!0,this.children_.splice(i,1);break}if(e){this.childIndex_[t.id()]=null,this.childNameIndex_[t.name()]=null;var r=t.el();r&&r.parentNode===this.contentEl()&&this.contentEl().removeChild(t.el())}}},l.prototype.initChildren=function(){var n=this,r=this.options_.children;if(r){var s=this.options_,t=void 0,i=l.getComponent("Tech");(t=Array.isArray(r)?r:Object.keys(r)).concat(Object.keys(this.options_).filter(function(e){return!t.some(function(t){return"string"==typeof t?e===t:e===t.name})})).map(function(t){var e=void 0,i=void 0;return"string"==typeof t?i=r[e=t]||n.options_[e]||{}:(e=t.name,i=t),{name:e,opts:i}}).filter(function(t){var e=l.getComponent(t.opts.componentClass||zt(t.name));return e&&!i.isTech(e)}).forEach(function(t){var e=t.name,i=t.opts;if(void 0!==s[e]&&(i=s[e]),!1!==i){!0===i&&(i={}),i.playerOptions=n.options_.playerOptions;var r=n.addChild(e,i);r&&(n[e]=r)}})}},l.prototype.buildCSSClass=function(){return""},l.prototype.ready=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(t)return this.isReady_?void(e?t.call(this):this.setTimeout(t,1)):(this.readyQueue_=this.readyQueue_||[],void this.readyQueue_.push(t))},l.prototype.triggerReady=function(){this.isReady_=!0,this.setTimeout(function(){var t=this.readyQueue_;this.readyQueue_=[],t&&0<t.length&&t.forEach(function(t){t.call(this)},this),this.trigger("ready")},1)},l.prototype.$=function(t,e){return nt(t,e||this.contentEl())},l.prototype.$$=function(t,e){return st(t,e||this.contentEl())},l.prototype.hasClass=function(t){return B(this.el_,t)},l.prototype.addClass=function(t){j(this.el_,t)},l.prototype.removeClass=function(t){F(this.el_,t)},l.prototype.toggleClass=function(t,e){H(this.el_,t,e)},l.prototype.show=function(){this.removeClass("vjs-hidden")},l.prototype.hide=function(){this.addClass("vjs-hidden")},l.prototype.lockShowing=function(){this.addClass("vjs-lock-showing")},l.prototype.unlockShowing=function(){this.removeClass("vjs-lock-showing")},l.prototype.getAttribute=function(t){return W(this.el_,t)},l.prototype.setAttribute=function(t,e){z(this.el_,t,e)},l.prototype.removeAttribute=function(t){G(this.el_,t)},l.prototype.width=function(t,e){return this.dimension("width",t,e)},l.prototype.height=function(t,e){return this.dimension("height",t,e)},l.prototype.dimensions=function(t,e){this.width(t,!0),this.height(e)},l.prototype.dimension=function(t,e,i){if(void 0!==e)return null!==e&&e==e||(e=0),-1!==(""+e).indexOf("%")||-1!==(""+e).indexOf("px")?this.el_.style[t]=e:this.el_.style[t]="auto"===e?"":e+"px",void(i||this.trigger("componentresize"));if(!this.el_)return 0;var r=this.el_.style[t],n=r.indexOf("px");return-1!==n?parseInt(r.slice(0,n),10):parseInt(this.el_["offset"+zt(t)],10)},l.prototype.currentDimension=function(t){var e=0;if("width"!==t&&"height"!==t)throw new Error("currentDimension only accepts width or height value");if("function"==typeof g.getComputedStyle){var i=g.getComputedStyle(this.el_);e=i.getPropertyValue(t)||i[t]}if(0===(e=parseFloat(e))){var r="offset"+zt(t);e=this.el_[r]}return e},l.prototype.currentDimensions=function(){return{width:this.currentDimension("width"),height:this.currentDimension("height")}},l.prototype.currentWidth=function(){return this.currentDimension("width")},l.prototype.currentHeight=function(){return this.currentDimension("height")},l.prototype.focus=function(){this.el_.focus()},l.prototype.blur=function(){this.el_.blur()},l.prototype.emitTapEvents=function(){var e=0,r=null,n=void 0;this.on("touchstart",function(t){1===t.touches.length&&(r={pageX:t.touches[0].pageX,pageY:t.touches[0].pageY},e=(new Date).getTime(),n=!0)}),this.on("touchmove",function(t){if(1<t.touches.length)n=!1;else if(r){var e=t.touches[0].pageX-r.pageX,i=t.touches[0].pageY-r.pageY;10<Math.sqrt(e*e+i*i)&&(n=!1)}});var t=function(){n=!1};this.on("touchleave",t),this.on("touchcancel",t),this.on("touchend",function(t){!(r=null)===n&&((new Date).getTime()-e<200&&(t.preventDefault(),this.trigger("tap")))})},l.prototype.enableTouchActivity=function(){if(this.player()&&this.player().reportUserActivity){var e=Ot(this.player(),this.player().reportUserActivity),i=void 0;this.on("touchstart",function(){e(),this.clearInterval(i),i=this.setInterval(e,250)});var t=function(t){e(),this.clearInterval(i)};this.on("touchmove",e),this.on("touchend",t),this.on("touchcancel",t)}},l.prototype.setTimeout=function(t,e){var i=this;t=Ot(this,t);var r=g.setTimeout(t,e),n=function(){return i.clearTimeout(r)};return n.guid="vjs-timeout-"+r,this.on("dispose",n),r},l.prototype.clearTimeout=function(t){g.clearTimeout(t);var e=function(){};return e.guid="vjs-timeout-"+t,this.off("dispose",e),t},l.prototype.setInterval=function(t,e){var i=this;t=Ot(this,t);var r=g.setInterval(t,e),n=function(){return i.clearInterval(r)};return n.guid="vjs-interval-"+r,this.on("dispose",n),r},l.prototype.clearInterval=function(t){g.clearInterval(t);var e=function(){};return e.guid="vjs-interval-"+t,this.off("dispose",e),t},l.prototype.requestAnimationFrame=function(t){var e=this;if(this.supportsRaf_){t=Ot(this,t);var i=g.requestAnimationFrame(t),r=function(){return e.cancelAnimationFrame(i)};return r.guid="vjs-raf-"+i,this.on("dispose",r),i}return this.setTimeout(t,1e3/60)},l.prototype.cancelAnimationFrame=function(t){if(this.supportsRaf_){g.cancelAnimationFrame(t);var e=function(){};return e.guid="vjs-raf-"+t,this.off("dispose",e),t}return this.clearTimeout(t)},l.registerComponent=function(t,e){if("string"!=typeof t||!t)throw new Error('Illegal component name, "'+t+'"; must be a non-empty string.');var i=l.getComponent("Tech"),r=i&&i.isTech(e),n=l===e||l.prototype.isPrototypeOf(e.prototype);if(r||!n){var s=void 0;throw s=r?"techs must be registered using Tech.registerTech()":"must be a Component subclass",new Error('Illegal component, "'+t+'"; '+s+".")}t=zt(t),l.components_||(l.components_={});var a=l.getComponent("Player");if("Player"===t&&a&&a.players){var o=a.players,u=Object.keys(o);if(o&&0<u.length&&u.map(function(t){return o[t]}).every(Boolean))throw new Error("Can not register Player component after player has been created.")}return l.components_[t]=e},l.getComponent=function(t){if(t)return t=zt(t),l.components_&&l.components_[t]?l.components_[t]:void 0},l}();Xt.prototype.supportsRaf_="function"==typeof g.requestAnimationFrame&&"function"==typeof g.cancelAnimationFrame,Xt.registerComponent("Component",Xt);var Yt,$t,Kt,Qt,Jt=g.navigator&&g.navigator.userAgent||"",Zt=/AppleWebKit\/([\d.]+)/i.exec(Jt),te=Zt?parseFloat(Zt.pop()):null,ee=/iPad/i.test(Jt),ie=/iPhone/i.test(Jt)&&!ee,re=/iPod/i.test(Jt),ne=ie||ee||re,se=(Yt=Jt.match(/OS (\d+)_/i))&&Yt[1]?Yt[1]:null,ae=/Android/i.test(Jt),oe=function(){var t=Jt.match(/Android (\d+)(?:\.(\d+))?(?:\.(\d+))*/i);if(!t)return null;var e=t[1]&&parseFloat(t[1]),i=t[2]&&parseFloat(t[2]);return e&&i?parseFloat(t[1]+"."+t[2]):e||null}(),ue=ae&&oe<5&&te<537,le=/Firefox/i.test(Jt),ce=/Edge/i.test(Jt),he=!ce&&/Chrome/i.test(Jt),de=($t=Jt.match(/Chrome\/(\d+)/))&&$t[1]?parseFloat($t[1]):null,pe=(Kt=/MSIE\s(\d+)\.\d/.exec(Jt),!(Qt=Kt&&parseFloat(Kt[1]))&&/Trident\/7.0/i.test(Jt)&&/rv:11.0/.test(Jt)&&(Qt=11),Qt),fe=/Safari/i.test(Jt)&&!he&&!ae&&!ce,me=fe||ne,ge=I()&&("ontouchstart"in g||g.DocumentTouch&&g.document instanceof g.DocumentTouch),ye=Object.freeze({IS_IPAD:ee,IS_IPHONE:ie,IS_IPOD:re,IS_IOS:ne,IOS_VERSION:se,IS_ANDROID:ae,ANDROID_VERSION:oe,IS_NATIVE_ANDROID:ue,IS_FIREFOX:le,IS_EDGE:ce,IS_CHROME:he,CHROME_VERSION:de,IE_VERSION:pe,IS_SAFARI:fe,IS_ANY_SAFARI:me,TOUCH_ENABLED:ge});function ve(t,e,i,r){return function(t,e,i){if("number"!=typeof e||e<0||i<e)throw new Error("Failed to execute '"+t+"' on 'TimeRanges': The index provided ("+e+") is non-numeric or out of bounds (0-"+i+").")}(t,r,i.length-1),i[r][e]}function _e(t){return void 0===t||0===t.length?{length:0,start:function(){throw new Error("This TimeRanges object is empty")},end:function(){throw new Error("This TimeRanges object is empty")}}:{length:t.length,start:ve.bind(null,"start",0,t),end:ve.bind(null,"end",1,t)}}function be(t,e){return Array.isArray(t)?_e(t):void 0===t||void 0===e?_e():_e([[t,e]])}function Te(t,e){var i=0,r=void 0,n=void 0;if(!e)return 0;t&&t.length||(t=be(0,0));for(var s=0;s<t.length;s++)r=t.start(s),e<(n=t.end(s))&&(n=e),i+=n-r;return i/e}for(var Se={},ke=[["requestFullscreen","exitFullscreen","fullscreenElement","fullscreenEnabled","fullscreenchange","fullscreenerror"],["webkitRequestFullscreen","webkitExitFullscreen","webkitFullscreenElement","webkitFullscreenEnabled","webkitfullscreenchange","webkitfullscreenerror"],["webkitRequestFullScreen","webkitCancelFullScreen","webkitCurrentFullScreenElement","webkitCancelFullScreen","webkitfullscreenchange","webkitfullscreenerror"],["mozRequestFullScreen","mozCancelFullScreen","mozFullScreenElement","mozFullScreenEnabled","mozfullscreenchange","mozfullscreenerror"],["msRequestFullscreen","msExitFullscreen","msFullscreenElement","msFullscreenEnabled","MSFullscreenChange","MSFullscreenError"]],Ce=ke[0],Ee=void 0,we=0;we<ke.length;we++)if(ke[we][1]in p){Ee=ke[we];break}if(Ee)for(var Ae=0;Ae<Ee.length;Ae++)Se[Ce[Ae]]=Ee[Ae];function Le(t){if(t instanceof Le)return t;"number"==typeof t?this.code=t:"string"==typeof t?this.message=t:E(t)&&("number"==typeof t.code&&(this.code=t.code),C(this,t)),this.message||(this.message=Le.defaultMessages[this.code]||"")}Le.prototype.code=0,Le.prototype.message="",Le.prototype.status=null,Le.errorTypes=["MEDIA_ERR_CUSTOM","MEDIA_ERR_ABORTED","MEDIA_ERR_NETWORK","MEDIA_ERR_DECODE","MEDIA_ERR_SRC_NOT_SUPPORTED","MEDIA_ERR_ENCRYPTED"],Le.defaultMessages={1:"You aborted the media playback",2:"A network error caused the media download to fail part-way.",3:"The media playback was aborted due to a corruption problem or because the media used features your browser did not support.",4:"The media could not be loaded, either because the server or network failed or because the format is not supported.",5:"The media is encrypted and we do not have the keys to decrypt it."};for(var Pe=0;Pe<Le.errorTypes.length;Pe++)Le[Le.errorTypes[Pe]]=Pe,Le.prototype[Le.errorTypes[Pe]]=Pe;var Oe=function(t,e){var i,r=null;try{i=JSON.parse(t,e)}catch(t){r=t}return[r,i]};function Ie(t){return null!=t&&"function"==typeof t.then}function xe(t){Ie(t)&&t.then(null,function(t){})}var De=function(r){return["kind","label","language","id","inBandMetadataTrackDispatchType","mode","src"].reduce(function(t,e,i){return r[e]&&(t[e]=r[e]),t},{cues:r.cues&&Array.prototype.map.call(r.cues,function(t){return{startTime:t.startTime,endTime:t.endTime,text:t.text,id:t.id}})})},Re=function(t){var e=t.$$("track"),i=Array.prototype.map.call(e,function(t){return t.track});return Array.prototype.map.call(e,function(t){var e=De(t.track);return t.src&&(e.src=t.src),e}).concat(Array.prototype.filter.call(t.textTracks(),function(t){return-1===i.indexOf(t)}).map(De))},Me=function(t,i){return t.forEach(function(t){var e=i.addRemoteTextTrack(t).track;!t.src&&t.cues&&t.cues.forEach(function(t){return e.addCue(t)})}),i.textTracks()},Ue="vjs-modal-dialog",Ne=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.opened_=i.hasBeenOpened_=i.hasBeenFilled_=!1,i.closeable(!i.options_.uncloseable),i.content(i.options_.content),i.contentEl_=M("div",{className:Ue+"-content"},{role:"document"}),i.descEl_=M("p",{className:Ue+"-description vjs-control-text",id:i.el().getAttribute("aria-describedby")}),U(i.descEl_,i.description()),i.el_.appendChild(i.descEl_),i.el_.appendChild(i.contentEl_),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:this.buildCSSClass(),tabIndex:-1},{"aria-describedby":this.id()+"_description","aria-hidden":"true","aria-label":this.label(),role:"dialog"})},n.prototype.dispose=function(){this.contentEl_=null,this.descEl_=null,this.previouslyActiveEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return Ue+" vjs-hidden "+r.prototype.buildCSSClass.call(this)},n.prototype.handleKeyPress=function(t){27===t.which&&this.closeable()&&this.close()},n.prototype.label=function(){return this.localize(this.options_.label||"Modal Window")},n.prototype.description=function(){var t=this.options_.description||this.localize("This is a modal window.");return this.closeable()&&(t+=" "+this.localize("This modal can be closed by pressing the Escape key or activating the close button.")),t},n.prototype.open=function(){if(!this.opened_){var t=this.player();this.trigger("beforemodalopen"),this.opened_=!0,(this.options_.fillAlways||!this.hasBeenOpened_&&!this.hasBeenFilled_)&&this.fill(),this.wasPlaying_=!t.paused(),this.options_.pauseOnOpen&&this.wasPlaying_&&t.pause(),this.closeable()&&this.on(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_=t.controls(),t.controls(!1),this.show(),this.conditionalFocus_(),this.el().setAttribute("aria-hidden","false"),this.trigger("modalopen"),this.hasBeenOpened_=!0}},n.prototype.opened=function(t){return"boolean"==typeof t&&this[t?"open":"close"](),this.opened_},n.prototype.close=function(){if(this.opened_){var t=this.player();this.trigger("beforemodalclose"),this.opened_=!1,this.wasPlaying_&&this.options_.pauseOnOpen&&t.play(),this.closeable()&&this.off(this.el_.ownerDocument,"keydown",Ot(this,this.handleKeyPress)),this.hadControls_&&t.controls(!0),this.hide(),this.el().setAttribute("aria-hidden","true"),this.trigger("modalclose"),this.conditionalBlur_(),this.options_.temporary&&this.dispose()}},n.prototype.closeable=function(t){if("boolean"==typeof t){var e=this.closeable_=!!t,i=this.getChild("closeButton");if(e&&!i){var r=this.contentEl_;this.contentEl_=this.el_,i=this.addChild("closeButton",{controlText:"Close Modal Dialog"}),this.contentEl_=r,this.on(i,"close",this.close)}!e&&i&&(this.off(i,"close",this.close),this.removeChild(i),i.dispose())}return this.closeable_},n.prototype.fill=function(){this.fillWith(this.content())},n.prototype.fillWith=function(t){var e=this.contentEl(),i=e.parentNode,r=e.nextSibling;this.trigger("beforemodalfill"),this.hasBeenFilled_=!0,i.removeChild(e),this.empty(),it(e,t),this.trigger("modalfill"),r?i.insertBefore(e,r):i.appendChild(e);var n=this.getChild("closeButton");n&&i.appendChild(n.el_)},n.prototype.empty=function(){this.trigger("beforemodalempty"),Z(this.contentEl()),this.trigger("modalempty")},n.prototype.content=function(t){return"undefined"!=typeof t&&(this.content_=t),this.content_},n.prototype.conditionalFocus_=function(){var t=p.activeElement,e=this.player_.el_;this.previouslyActiveEl_=null,(e.contains(t)||e===t)&&(this.previouslyActiveEl_=t,this.focus(),this.on(p,"keydown",this.handleKeyDown))},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_&&(this.previouslyActiveEl_.focus(),this.previouslyActiveEl_=null),this.off(p,"keydown",this.handleKeyDown)},n.prototype.handleKeyDown=function(t){if(9===t.which){for(var e=this.focusableEls_(),i=this.el_.querySelector(":focus"),r=void 0,n=0;n<e.length;n++)if(i===e[n]){r=n;break}p.activeElement===this.el_&&(r=0),t.shiftKey&&0===r?(e[e.length-1].focus(),t.preventDefault()):t.shiftKey||r!==e.length-1||(e[0].focus(),t.preventDefault())}},n.prototype.focusableEls_=function(){var t=this.el_.querySelectorAll("*");return Array.prototype.filter.call(t,function(t){return(t instanceof g.HTMLAnchorElement||t instanceof g.HTMLAreaElement)&&t.hasAttribute("href")||(t instanceof g.HTMLInputElement||t instanceof g.HTMLSelectElement||t instanceof g.HTMLTextAreaElement||t instanceof g.HTMLButtonElement)&&!t.hasAttribute("disabled")||t instanceof g.HTMLIFrameElement||t instanceof g.HTMLObjectElement||t instanceof g.HTMLEmbedElement||t.hasAttribute("tabindex")&&-1!==t.getAttribute("tabindex")||t.hasAttribute("contenteditable")})},n}(Xt);Ne.prototype.options_={pauseOnOpen:!0,temporary:!0},Xt.registerComponent("ModalDialog",Ne);var Be=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);var e=b(this,r.call(this));e.tracks_=[],Object.defineProperty(e,"length",{get:function(){return this.tracks_.length}});for(var i=0;i<t.length;i++)e.addTrack(t[i]);return e}return _(n,r),n.prototype.addTrack=function(t){var e=this.tracks_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.tracks_[e]}}),-1===this.tracks_.indexOf(t)&&(this.tracks_.push(t),this.trigger({track:t,type:"addtrack"}))},n.prototype.removeTrack=function(t){for(var e=void 0,i=0,r=this.length;i<r;i++)if(this[i]===t){(e=this[i]).off&&e.off(),this.tracks_.splice(i,1);break}e&&this.trigger({track:e,type:"removetrack"})},n.prototype.getTrackById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},n}(Dt);for(var je in Be.prototype.allowedEvents_={change:"change",addtrack:"addtrack",removetrack:"removetrack"},Be.prototype.allowedEvents_)Be.prototype["on"+je]=null;var Fe=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].enabled=!1)},He=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].enabled){Fe(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.enabled&&Fe(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("enabledchange",function(){e.changing_||(e.changing_=!0,Fe(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),Ve=function(t,e){for(var i=0;i<t.length;i++)Object.keys(t[i]).length&&e.id!==t[i].id&&(t[i].selected=!1)},qe=function(r){function n(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,n);for(var e=t.length-1;0<=e;e--)if(t[e].selected){Ve(t,t[e]);break}var i=b(this,r.call(this,t));return i.changing_=!1,Object.defineProperty(i,"selectedIndex",{get:function(){for(var t=0;t<this.length;t++)if(this[t].selected)return t;return-1},set:function(){}}),i}return _(n,r),n.prototype.addTrack=function(t){var e=this;t.selected&&Ve(this,t),r.prototype.addTrack.call(this,t),t.addEventListener&&t.addEventListener("selectedchange",function(){e.changing_||(e.changing_=!0,Ve(e,t),e.changing_=!1,e.trigger("change"))})},n}(Be),We=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.addTrack=function(t){e.prototype.addTrack.call(this,t),t.addEventListener("modechange",Ot(this,function(){this.trigger("change")}));-1===["metadata","chapters"].indexOf(t.kind)&&t.addEventListener("modechange",Ot(this,function(){this.trigger("selectedlanguagechange")}))},t}(Be),ze=function(){function r(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];y(this,r),this.trackElements_=[],Object.defineProperty(this,"length",{get:function(){return this.trackElements_.length}});for(var e=0,i=t.length;e<i;e++)this.addTrackElement_(t[e])}return r.prototype.addTrackElement_=function(t){var e=this.trackElements_.length;""+e in this||Object.defineProperty(this,e,{get:function(){return this.trackElements_[e]}}),-1===this.trackElements_.indexOf(t)&&this.trackElements_.push(t)},r.prototype.getTrackElementByTrack_=function(t){for(var e=void 0,i=0,r=this.trackElements_.length;i<r;i++)if(t===this.trackElements_[i].track){e=this.trackElements_[i];break}return e},r.prototype.removeTrackElement_=function(t){for(var e=0,i=this.trackElements_.length;e<i;e++)if(t===this.trackElements_[e]){this.trackElements_.splice(e,1);break}},r}(),Ge=function(){function e(t){y(this,e),e.prototype.setCues_.call(this,t),Object.defineProperty(this,"length",{get:function(){return this.length_}})}return e.prototype.setCues_=function(t){var e=this.length||0,i=0,r=t.length;this.cues_=t,this.length_=t.length;var n=function(t){""+t in this||Object.defineProperty(this,""+t,{get:function(){return this.cues_[t]}})};if(e<r)for(i=e;i<r;i++)n.call(this,i)},e.prototype.getCueById=function(t){for(var e=null,i=0,r=this.length;i<r;i++){var n=this[i];if(n.id===t){e=n;break}}return e},e}(),Xe={alternative:"alternative",captions:"captions",main:"main",sign:"sign",subtitles:"subtitles",commentary:"commentary"},Ye={alternative:"alternative",descriptions:"descriptions",main:"main","main-desc":"main-desc",translation:"translation",commentary:"commentary"},$e={subtitles:"subtitles",captions:"captions",descriptions:"descriptions",chapters:"chapters",metadata:"metadata"},Ke={disabled:"disabled",hidden:"hidden",showing:"showing"},Qe=function(s){function a(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,a);var e=b(this,s.call(this)),i={id:t.id||"vjs_track_"+ut(),kind:t.kind||"",label:t.label||"",language:t.language||""},r=function(t){Object.defineProperty(e,t,{get:function(){return i[t]},set:function(){}})};for(var n in i)r(n);return e}return _(a,s),a}(Dt),Je=function(t){var e=["protocol","hostname","port","pathname","search","hash","host"],i=p.createElement("a");i.href=t;var r=""===i.host&&"file:"!==i.protocol,n=void 0;r&&((n=p.createElement("div")).innerHTML='<a href="'+t+'"></a>',i=n.firstChild,n.setAttribute("style","display:none; position:absolute;"),p.body.appendChild(n));for(var s={},a=0;a<e.length;a++)s[e[a]]=i[e[a]];return"http:"===s.protocol&&(s.host=s.host.replace(/:80$/,"")),"https:"===s.protocol&&(s.host=s.host.replace(/:443$/,"")),s.protocol||(s.protocol=g.location.protocol),r&&p.body.removeChild(n),s},Ze=function(t){if("string"==typeof t){var e=/^(\/?)([\s\S]*?)((?:\.{1,2}|[^\/]+?)(\.([^\.\/\?]+)))(?:[\/]*|[\?].*)$/i.exec(t);if(e)return e.pop().toLowerCase()}return""},ti=function(t){var e=g.location,i=Je(t);return(":"===i.protocol?e.protocol:i.protocol)+i.host!==e.protocol+e.host},ei=Object.freeze({parseUrl:Je,getAbsoluteURL:function(t){if(!t.match(/^https?:\/\//)){var e=p.createElement("div");e.innerHTML='<a href="'+t+'">x</a>',t=e.firstChild.href}return t},getFileExtension:Ze,isCrossOrigin:ti}),ii=function(t){var e=ri.call(t);return"[object Function]"===e||"function"==typeof t&&"[object RegExp]"!==e||"undefined"!=typeof window&&(t===window.setTimeout||t===window.alert||t===window.confirm||t===window.prompt)},ri=Object.prototype.toString;var ni=Object.freeze({default:ii,__moduleExports:ii}),si=e(function(t,e){(e=t.exports=function(t){return t.replace(/^\s*|\s*$/g,"")}).left=function(t){return t.replace(/^\s*/,"")},e.right=function(t){return t.replace(/\s*$/,"")}}),ai=si.left,oi=si.right,ui=Object.freeze({default:si,__moduleExports:si,left:ai,right:oi}),li=ni&&ii||ni,ci=function(t,e,i){if(!li(e))throw new TypeError("iterator must be a function");arguments.length<3&&(i=this);"[object Array]"===hi.call(t)?function(t,e,i){for(var r=0,n=t.length;r<n;r++)di.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i):"string"==typeof t?function(t,e,i){for(var r=0,n=t.length;r<n;r++)e.call(i,t.charAt(r),r,t)}(t,e,i):function(t,e,i){for(var r in t)di.call(t,r)&&e.call(i,t[r],r,t)}(t,e,i)},hi=Object.prototype.toString,di=Object.prototype.hasOwnProperty;var pi=Object.freeze({default:ci,__moduleExports:ci}),fi=ui&&si||ui,mi=pi&&ci||pi,gi=function(t){if(!t)return{};var s={};return mi(fi(t).split("\n"),function(t){var e,i=t.indexOf(":"),r=fi(t.slice(0,i)).toLowerCase(),n=fi(t.slice(i+1));"undefined"==typeof s[r]?s[r]=n:(e=s[r],"[object Array]"===Object.prototype.toString.call(e)?s[r].push(n):s[r]=[s[r],n])}),s},yi=Object.freeze({default:gi,__moduleExports:gi}),vi=function(){for(var t={},e=0;e<arguments.length;e++){var i=arguments[e];for(var r in i)_i.call(i,r)&&(t[r]=i[r])}return t},_i=Object.prototype.hasOwnProperty;var bi=Object.freeze({default:vi,__moduleExports:vi}),Ti=yi&&gi||yi,Si=bi&&vi||bi,ki=Ei;function Ci(t,e,i){var r=t;return li(e)?(i=e,"string"==typeof t&&(r={uri:t})):r=Si(e,{uri:t}),r.callback=i,r}function Ei(t,e,i){return wi(e=Ci(t,e,i))}function wi(r){if("undefined"==typeof r.callback)throw new Error("callback argument missing");var n=!1,s=function(t,e,i){n||(n=!0,r.callback(t,e,i))};function e(t){return clearTimeout(u),t instanceof Error||(t=new Error(""+(t||"Unknown XMLHttpRequest Error"))),t.statusCode=0,s(t,m)}function t(){if(!a){var t;clearTimeout(u),t=r.useXDR&&void 0===o.status?200:1223===o.status?204:o.status;var e=m,i=null;return 0!==t?(e={body:function(){var t=void 0;if(t=o.response?o.response:o.responseText||function(t){if("document"===t.responseType)return t.responseXML;var e=t.responseXML&&"parsererror"===t.responseXML.documentElement.nodeName;return""!==t.responseType||e?null:t.responseXML}(o),f)try{t=JSON.parse(t)}catch(t){}return t}(),statusCode:t,method:c,headers:{},url:l,rawRequest:o},o.getAllResponseHeaders&&(e.headers=Ti(o.getAllResponseHeaders()))):i=new Error("Internal XMLHttpRequest Error"),s(i,e,e.body)}}var i,a,o=r.xhr||null;o||(o=r.cors||r.useXDR?new Ei.XDomainRequest:new Ei.XMLHttpRequest);var u,l=o.url=r.uri||r.url,c=o.method=r.method||"GET",h=r.body||r.data,d=o.headers=r.headers||{},p=!!r.sync,f=!1,m={body:void 0,headers:{},statusCode:0,method:c,url:l,rawRequest:o};if("json"in r&&!1!==r.json&&(f=!0,d.accept||d.Accept||(d.Accept="application/json"),"GET"!==c&&"HEAD"!==c&&(d["content-type"]||d["Content-Type"]||(d["Content-Type"]="application/json"),h=JSON.stringify(!0===r.json?h:r.json))),o.onreadystatechange=function(){4===o.readyState&&setTimeout(t,0)},o.onload=t,o.onerror=e,o.onprogress=function(){},o.onabort=function(){a=!0},o.ontimeout=e,o.open(c,l,!p,r.username,r.password),p||(o.withCredentials=!!r.withCredentials),!p&&0<r.timeout&&(u=setTimeout(function(){if(!a){a=!0,o.abort("timeout");var t=new Error("XMLHttpRequest timeout");t.code="ETIMEDOUT",e(t)}},r.timeout)),o.setRequestHeader)for(i in d)d.hasOwnProperty(i)&&o.setRequestHeader(i,d[i]);else if(r.headers&&!function(t){for(var e in t)if(t.hasOwnProperty(e))return!1;return!0}(r.headers))throw new Error("Headers cannot be set on an XDomainRequest object");return"responseType"in r&&(o.responseType=r.responseType),"beforeSend"in r&&"function"==typeof r.beforeSend&&r.beforeSend(o),o.send(h||null),o}Ei.XMLHttpRequest=g.XMLHttpRequest||function(){},Ei.XDomainRequest="withCredentials"in new Ei.XMLHttpRequest?Ei.XMLHttpRequest:g.XDomainRequest,function(t,e){for(var i=0;i<t.length;i++)e(t[i])}(["get","put","post","patch","head","delete"],function(r){Ei["delete"===r?"del":r]=function(t,e,i){return(e=Ci(t,e,i)).method=r.toUpperCase(),wi(e)}});var Ai=function(t,e){var i=new g.WebVTT.Parser(g,g.vttjs,g.WebVTT.StringDecoder()),r=[];i.oncue=function(t){e.addCue(t)},i.onparsingerror=function(t){r.push(t)},i.onflush=function(){e.trigger({type:"loadeddata",target:e})},i.parse(t),0<r.length&&(g.console&&g.console.groupCollapsed&&g.console.groupCollapsed("Text Track parsing errors for "+e.src),r.forEach(function(t){return f.error(t)}),g.console&&g.console.groupEnd&&g.console.groupEnd()),i.flush()},Li=function(t,n){var e={uri:t},i=ti(t);i&&(e.cors=i),ki(e,Ot(this,function(t,e,i){if(t)return f.error(t,e);if(n.loaded_=!0,"function"!=typeof g.WebVTT){if(n.tech_){var r=function(){return Ai(i,n)};n.tech_.on("vttjsloaded",r),n.tech_.on("vttjserror",function(){f.error("vttjs failed to load, stopping trying to process "+n.src),n.tech_.off("vttjsloaded",r)})}}else Ai(i,n)}))},Pi=function(l){function c(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};if(y(this,c),!t.tech)throw new Error("A tech was not provided.");var e=Gt(t,{kind:$e[t.kind]||"subtitles",language:t.language||t.srclang||""}),i=Ke[e.mode]||"disabled",r=e.default;"metadata"!==e.kind&&"chapters"!==e.kind||(i="hidden");var n=b(this,l.call(this,e));n.tech_=e.tech,n.cues_=[],n.activeCues_=[];var s=new Ge(n.cues_),a=new Ge(n.activeCues_),o=!1,u=Ot(n,function(){this.activeCues,o&&(this.trigger("cuechange"),o=!1)});return"disabled"!==i&&n.tech_.ready(function(){n.tech_.on("timeupdate",u)},!0),Object.defineProperties(n,{default:{get:function(){return r},set:function(){}},mode:{get:function(){return i},set:function(t){var e=this;Ke[t]&&("showing"===(i=t)&&this.tech_.ready(function(){e.tech_.on("timeupdate",u)},!0),this.trigger("modechange"))}},cues:{get:function(){return this.loaded_?s:null},set:function(){}},activeCues:{get:function(){if(!this.loaded_)return null;if(0===this.cues.length)return a;for(var t=this.tech_.currentTime(),e=[],i=0,r=this.cues.length;i<r;i++){var n=this.cues[i];n.startTime<=t&&n.endTime>=t?e.push(n):n.startTime===n.endTime&&n.startTime<=t&&n.startTime+.5>=t&&e.push(n)}if(o=!1,e.length!==this.activeCues_.length)o=!0;else for(var s=0;s<e.length;s++)-1===this.activeCues_.indexOf(e[s])&&(o=!0);return this.activeCues_=e,a.setCues_(this.activeCues_),a},set:function(){}}}),e.src?(n.src=e.src,Li(e.src,n)):n.loaded_=!0,n}return _(c,l),c.prototype.addCue=function(t){var e=t;if(g.vttjs&&!(t instanceof g.vttjs.VTTCue)){for(var i in e=new g.vttjs.VTTCue(t.startTime,t.endTime,t.text),t)i in e||(e[i]=t[i]);e.id=t.id,e.originalCue_=t}for(var r=this.tech_.textTracks(),n=0;n<r.length;n++)r[n]!==this&&r[n].removeCue(e);this.cues_.push(e),this.cues.setCues_(this.cues_)},c.prototype.removeCue=function(t){for(var e=this.cues_.length;e--;){var i=this.cues_[e];if(i===t||i.originalCue_&&i.originalCue_===t){this.cues_.splice(e,1),this.cues.setCues_(this.cues_);break}}},c}(Qe);Pi.prototype.allowedEvents_={cuechange:"cuechange"};var Oi=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Ye[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"enabled",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("enabledchange"))}}),e.enabled&&(i.enabled=e.enabled),i.loaded_=!0,i}return _(s,n),s}(Qe),Ii=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=Gt(t,{kind:Xe[t.kind]||""}),i=b(this,n.call(this,e)),r=!1;return Object.defineProperty(i,"selected",{get:function(){return r},set:function(t){"boolean"==typeof t&&t!==r&&(r=t,this.trigger("selectedchange"))}}),e.selected&&(i.selected=e.selected),i}return _(s,n),s}(Qe),xi=0,Di=2,Ri=function(n){function s(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};y(this,s);var e=b(this,n.call(this)),i=void 0,r=new Pi(t);return e.kind=r.kind,e.src=r.src,e.srclang=r.language,e.label=r.label,e.default=r.default,Object.defineProperties(e,{readyState:{get:function(){return i}},track:{get:function(){return r}}}),i=xi,r.addEventListener("loadeddata",function(){i=Di,e.trigger({type:"load",target:e})}),e}return _(s,n),s}(Dt);Ri.prototype.allowedEvents_={load:"load"},Ri.NONE=xi,Ri.LOADING=1,Ri.LOADED=Di,Ri.ERROR=3;var Mi={audio:{ListClass:He,TrackClass:Oi,capitalName:"Audio"},video:{ListClass:qe,TrackClass:Ii,capitalName:"Video"},text:{ListClass:We,TrackClass:Pi,capitalName:"Text"}};Object.keys(Mi).forEach(function(t){Mi[t].getterName=t+"Tracks",Mi[t].privateName=t+"Tracks_"});var Ui={remoteText:{ListClass:We,TrackClass:Pi,capitalName:"RemoteText",getterName:"remoteTextTracks",privateName:"remoteTextTracks_"},remoteTextEl:{ListClass:ze,TrackClass:Ri,capitalName:"RemoteTextTrackEls",getterName:"remoteTextTrackEls",privateName:"remoteTextTrackEls_"}},Ni=Gt(Mi,Ui);Ui.names=Object.keys(Ui),Mi.names=Object.keys(Mi),Ni.names=[].concat(Ui.names).concat(Mi.names);var Bi=Object.create||function(){function e(){}return function(t){if(1!==arguments.length)throw new Error("Object.create shim only accepts one parameter.");return e.prototype=t,new e}}();function ji(t,e){this.name="ParsingError",this.code=t.code,this.message=e||t.message}function Fi(t){function e(t,e,i,r){return 3600*(0|t)+60*(0|e)+(0|i)+(0|r)/1e3}var i=t.match(/^(\d+):(\d{2})(:\d{2})?\.(\d{3})/);return i?i[3]?e(i[1],i[2],i[3].replace(":",""),i[4]):59<i[1]?e(i[1],i[2],0,i[4]):e(0,i[1],i[2],i[4]):null}function Hi(){this.values=Bi(null)}function Vi(t,e,i,r){var n=r?t.split(r):[t];for(var s in n)if("string"==typeof n[s]){var a=n[s].split(i);if(2===a.length)e(a[0],a[1])}}function qi(e,t,s){var i,r,a,n=e;function o(){var t=Fi(e);if(null===t)throw new ji(ji.Errors.BadTimeStamp,"Malformed timestamp: "+n);return e=e.replace(/^[^\sa-zA-Z-]+/,""),t}function u(){e=e.replace(/^\s+/,"")}if(u(),t.startTime=o(),u(),"--\x3e"!==e.substr(0,3))throw new ji(ji.Errors.BadTimeStamp,"Malformed time stamp (time stamps must be separated by '--\x3e'): "+n);e=e.substr(3),u(),t.endTime=o(),u(),i=e,r=t,a=new Hi,Vi(i,function(t,e){switch(t){case"region":for(var i=s.length-1;0<=i;i--)if(s[i].id===e){a.set(t,s[i].region);break}break;case"vertical":a.alt(t,e,["rl","lr"]);break;case"line":var r=e.split(","),n=r[0];a.integer(t,n),a.percent(t,n)&&a.set("snapToLines",!1),a.alt(t,n,["auto"]),2===r.length&&a.alt("lineAlign",r[1],["start","middle","end"]);break;case"position":r=e.split(","),a.percent(t,r[0]),2===r.length&&a.alt("positionAlign",r[1],["start","middle","end"]);break;case"size":a.percent(t,e);break;case"align":a.alt(t,e,["start","middle","end","left","right"])}},/:/,/\s/),r.region=a.get("region",null),r.vertical=a.get("vertical",""),r.line=a.get("line","auto"),r.lineAlign=a.get("lineAlign","start"),r.snapToLines=a.get("snapToLines",!0),r.size=a.get("size",100),r.align=a.get("align","middle"),r.position=a.get("position",{start:0,left:0,middle:50,end:100,right:100},r.align),r.positionAlign=a.get("positionAlign",{start:"start",left:"start",middle:"middle",end:"end",right:"end"},r.align)}((ji.prototype=Bi(Error.prototype)).constructor=ji).Errors={BadSignature:{code:0,message:"Malformed WebVTT signature."},BadTimeStamp:{code:1,message:"Malformed time stamp."}},Hi.prototype={set:function(t,e){this.get(t)||""===e||(this.values[t]=e)},get:function(t,e,i){return i?this.has(t)?this.values[t]:e[i]:this.has(t)?this.values[t]:e},has:function(t){return t in this.values},alt:function(t,e,i){for(var r=0;r<i.length;++r)if(e===i[r]){this.set(t,e);break}},integer:function(t,e){/^-?\d+$/.test(e)&&this.set(t,parseInt(e,10))},percent:function(t,e){return!!(e.match(/^([\d]{1,3})(\.[\d]*)?%$/)&&0<=(e=parseFloat(e))&&e<=100)&&(this.set(t,e),!0)}};var Wi={"&amp;":"&","&lt;":"<","&gt;":">","&lrm;":"‎","&rlm;":"‏","&nbsp;":" "},zi={c:"span",i:"i",b:"b",u:"u",ruby:"ruby",rt:"rt",v:"span",lang:"span"},Gi={v:"title",lang:"lang"},Xi={rt:"ruby"};function Yi(s,i){function t(){if(!i)return null;var t,e=i.match(/^([^<]*)(<[^>]*>?)?/);return t=e[1]?e[1]:e[2],i=i.substr(t.length),t}function e(t){return Wi[t]}function r(t){for(;f=t.match(/&(amp|lt|gt|lrm|rlm|nbsp);/);)t=t.replace(f[0],e);return t}function n(t,e){var i=zi[t];if(!i)return null;var r=s.document.createElement(i);r.localName=i;var n=Gi[t];return n&&e&&(r[n]=e.trim()),r}for(var a,o,u,l=s.document.createElement("div"),c=l,h=[];null!==(a=t());)if("<"!==a[0])c.appendChild(s.document.createTextNode(r(a)));else{if("/"===a[1]){h.length&&h[h.length-1]===a.substr(2).replace(">","")&&(h.pop(),c=c.parentNode);continue}var d,p=Fi(a.substr(1,a.length-2));if(p){d=s.document.createProcessingInstruction("timestamp",p),c.appendChild(d);continue}var f=a.match(/^<([^.\s/0-9>]+)(\.[^\s\\>]+)?([^>\\]+)?(\\?)>?$/);if(!f)continue;if(!(d=n(f[1],f[3])))continue;if(o=c,Xi[(u=d).localName]&&Xi[u.localName]!==o.localName)continue;f[2]&&(d.className=f[2].substr(1).replace("."," ")),h.push(f[1]),c.appendChild(d),c=d}return l}var $i=[[1470,1470],[1472,1472],[1475,1475],[1478,1478],[1488,1514],[1520,1524],[1544,1544],[1547,1547],[1549,1549],[1563,1563],[1566,1610],[1645,1647],[1649,1749],[1765,1766],[1774,1775],[1786,1805],[1807,1808],[1810,1839],[1869,1957],[1969,1969],[1984,2026],[2036,2037],[2042,2042],[2048,2069],[2074,2074],[2084,2084],[2088,2088],[2096,2110],[2112,2136],[2142,2142],[2208,2208],[2210,2220],[8207,8207],[64285,64285],[64287,64296],[64298,64310],[64312,64316],[64318,64318],[64320,64321],[64323,64324],[64326,64449],[64467,64829],[64848,64911],[64914,64967],[65008,65020],[65136,65140],[65142,65276],[67584,67589],[67592,67592],[67594,67637],[67639,67640],[67644,67644],[67647,67669],[67671,67679],[67840,67867],[67872,67897],[67903,67903],[67968,68023],[68030,68031],[68096,68096],[68112,68115],[68117,68119],[68121,68147],[68160,68167],[68176,68184],[68192,68223],[68352,68405],[68416,68437],[68440,68466],[68472,68479],[68608,68680],[126464,126467],[126469,126495],[126497,126498],[126500,126500],[126503,126503],[126505,126514],[126516,126519],[126521,126521],[126523,126523],[126530,126530],[126535,126535],[126537,126537],[126539,126539],[126541,126543],[126545,126546],[126548,126548],[126551,126551],[126553,126553],[126555,126555],[126557,126557],[126559,126559],[126561,126562],[126564,126564],[126567,126570],[126572,126578],[126580,126583],[126585,126588],[126590,126590],[126592,126601],[126603,126619],[126625,126627],[126629,126633],[126635,126651],[1114109,1114109]];function Ki(t){for(var e=0;e<$i.length;e++){var i=$i[e];if(t>=i[0]&&t<=i[1])return!0}return!1}function Qi(){}function Ji(t,e,i){Qi.call(this),this.cue=e,this.cueDiv=Yi(t,e.text);var r={color:"rgba(255, 255, 255, 1)",backgroundColor:"rgba(0, 0, 0, 0.8)",position:"relative",left:0,right:0,top:0,bottom:0,display:"inline",writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext"};this.applyStyles(r,this.cueDiv),this.div=t.document.createElement("div"),r={direction:function(t){var e=[],i="";if(!t||!t.childNodes)return"ltr";function n(t,e){for(var i=e.childNodes.length-1;0<=i;i--)t.push(e.childNodes[i])}function s(t){if(!t||!t.length)return null;var e=t.pop(),i=e.textContent||e.innerText;if(i){var r=i.match(/^.*(\n|\r)/);return r?r[t.length=0]:i}return"ruby"===e.tagName?s(t):e.childNodes?(n(t,e),s(t)):void 0}for(n(e,t);i=s(e);)for(var r=0;r<i.length;r++)if(Ki(i.charCodeAt(r)))return"rtl";return"ltr"}(this.cueDiv),writingMode:""===e.vertical?"horizontal-tb":"lr"===e.vertical?"vertical-lr":"vertical-rl",unicodeBidi:"plaintext",textAlign:"middle"===e.align?"center":e.align,font:i.font,whiteSpace:"pre-line",position:"absolute"},this.applyStyles(r),this.div.appendChild(this.cueDiv);var n=0;switch(e.positionAlign){case"start":n=e.position;break;case"middle":n=e.position-e.size/2;break;case"end":n=e.position-e.size}""===e.vertical?this.applyStyles({left:this.formatStyle(n,"%"),width:this.formatStyle(e.size,"%")}):this.applyStyles({top:this.formatStyle(n,"%"),height:this.formatStyle(e.size,"%")}),this.move=function(t){this.applyStyles({top:this.formatStyle(t.top,"px"),bottom:this.formatStyle(t.bottom,"px"),left:this.formatStyle(t.left,"px"),right:this.formatStyle(t.right,"px"),height:this.formatStyle(t.height,"px"),width:this.formatStyle(t.width,"px")})}}function Zi(t){var e,i,r,n;if(t.div){i=t.div.offsetHeight,r=t.div.offsetWidth,n=t.div.offsetTop;var s=(s=t.div.childNodes)&&(s=s[0])&&s.getClientRects&&s.getClientRects();t=t.div.getBoundingClientRect(),e=s?Math.max(s[0]&&s[0].height||0,t.height/s.length):0}this.left=t.left,this.right=t.right,this.top=t.top||n,this.height=t.height||i,this.bottom=t.bottom||n+(t.height||i),this.width=t.width||r,this.lineHeight=void 0!==e?e:t.lineHeight}function tr(t,e,o,u){var i=new Zi(e),r=e.cue,n=function(t){if("number"==typeof t.line&&(t.snapToLines||0<=t.line&&t.line<=100))return t.line;if(!t.track||!t.track.textTrackList||!t.track.textTrackList.mediaElement)return-1;for(var e=t.track,i=e.textTrackList,r=0,n=0;n<i.length&&i[n]!==e;n++)"showing"===i[n].mode&&r++;return-1*++r}(r),s=[];if(r.snapToLines){var a;switch(r.vertical){case"":s=["+y","-y"],a="height";break;case"rl":s=["+x","-x"],a="width";break;case"lr":s=["-x","+x"],a="width"}var l=i.lineHeight,c=l*Math.round(n),h=o[a]+l,d=s[0];Math.abs(c)>h&&(c=c<0?-1:1,c*=Math.ceil(h/l)*l),n<0&&(c+=""===r.vertical?o.height:o.width,s=s.reverse()),i.move(d,c)}else{var p=i.lineHeight/o.height*100;switch(r.lineAlign){case"middle":n-=p/2;break;case"end":n-=p}switch(r.vertical){case"":e.applyStyles({top:e.formatStyle(n,"%")});break;case"rl":e.applyStyles({left:e.formatStyle(n,"%")});break;case"lr":e.applyStyles({right:e.formatStyle(n,"%")})}s=["+y","-x","+x","-y"],i=new Zi(e)}var f=function(t,e){for(var i,r=new Zi(t),n=1,s=0;s<e.length;s++){for(;t.overlapsOppositeAxis(o,e[s])||t.within(o)&&t.overlapsAny(u);)t.move(e[s]);if(t.within(o))return t;var a=t.intersectPercentage(o);a<n&&(i=new Zi(t),n=a),t=new Zi(r)}return i||r}(i,s);e.move(f.toCSSCompatValues(o))}function er(){}Qi.prototype.applyStyles=function(t,e){for(var i in e=e||this.div,t)t.hasOwnProperty(i)&&(e.style[i]=t[i])},Qi.prototype.formatStyle=function(t,e){return 0===t?0:t+e},(Ji.prototype=Bi(Qi.prototype)).constructor=Ji,Zi.prototype.move=function(t,e){switch(e=void 0!==e?e:this.lineHeight,t){case"+x":this.left+=e,this.right+=e;break;case"-x":this.left-=e,this.right-=e;break;case"+y":this.top+=e,this.bottom+=e;break;case"-y":this.top-=e,this.bottom-=e}},Zi.prototype.overlaps=function(t){return this.left<t.right&&this.right>t.left&&this.top<t.bottom&&this.bottom>t.top},Zi.prototype.overlapsAny=function(t){for(var e=0;e<t.length;e++)if(this.overlaps(t[e]))return!0;return!1},Zi.prototype.within=function(t){return this.top>=t.top&&this.bottom<=t.bottom&&this.left>=t.left&&this.right<=t.right},Zi.prototype.overlapsOppositeAxis=function(t,e){switch(e){case"+x":return this.left<t.left;case"-x":return this.right>t.right;case"+y":return this.top<t.top;case"-y":return this.bottom>t.bottom}},Zi.prototype.intersectPercentage=function(t){return Math.max(0,Math.min(this.right,t.right)-Math.max(this.left,t.left))*Math.max(0,Math.min(this.bottom,t.bottom)-Math.max(this.top,t.top))/(this.height*this.width)},Zi.prototype.toCSSCompatValues=function(t){return{top:this.top-t.top,bottom:t.bottom-this.bottom,left:this.left-t.left,right:t.right-this.right,height:this.height,width:this.width}},Zi.getSimpleBoxPosition=function(t){var e=t.div?t.div.offsetHeight:t.tagName?t.offsetHeight:0,i=t.div?t.div.offsetWidth:t.tagName?t.offsetWidth:0,r=t.div?t.div.offsetTop:t.tagName?t.offsetTop:0;return{left:(t=t.div?t.div.getBoundingClientRect():t.tagName?t.getBoundingClientRect():t).left,right:t.right,top:t.top||r,height:t.height||e,bottom:t.bottom||r+(t.height||e),width:t.width||i}},er.StringDecoder=function(){return{decode:function(t){if(!t)return"";if("string"!=typeof t)throw new Error("Error - expected string data.");return decodeURIComponent(encodeURIComponent(t))}}},er.convertCueToDOMTree=function(t,e){return t&&e?Yi(t,e):null};er.processCues=function(r,n,t){if(!r||!n||!t)return null;for(;t.firstChild;)t.removeChild(t.firstChild);var s=r.document.createElement("div");if(s.style.position="absolute",s.style.left="0",s.style.right="0",s.style.top="0",s.style.bottom="0",s.style.margin="1.5%",t.appendChild(s),function(t){for(var e=0;e<t.length;e++)if(t[e].hasBeenReset||!t[e].displayState)return!0;return!1}(n)){var a=[],o=Zi.getSimpleBoxPosition(s),u={font:Math.round(.05*o.height*100)/100+"px sans-serif"};!function(){for(var t,e,i=0;i<n.length;i++)e=n[i],t=new Ji(r,e,u),s.appendChild(t.div),tr(0,t,o,a),e.displayState=t.div,a.push(Zi.getSimpleBoxPosition(t))}()}else for(var e=0;e<n.length;e++)s.appendChild(n[e].displayState)},(er.Parser=function(t,e,i){i||(i=e,e={}),e||(e={}),this.window=t,this.vttjs=e,this.state="INITIAL",this.buffer="",this.decoder=i||new TextDecoder("utf8"),this.regionList=[]}).prototype={reportOrThrowError:function(t){if(!(t instanceof ji))throw t;this.onparsingerror&&this.onparsingerror(t)},parse:function(t){var s=this;function e(){for(var t=s.buffer,e=0;e<t.length&&"\r"!==t[e]&&"\n"!==t[e];)++e;var i=t.substr(0,e);return"\r"===t[e]&&++e,"\n"===t[e]&&++e,s.buffer=t.substr(e),i}function i(t){t.match(/X-TIMESTAMP-MAP/)?Vi(t,function(t,e){switch(t){case"X-TIMESTAMP-MAP":i=e,r=new Hi,Vi(i,function(t,e){switch(t){case"MPEGT":r.integer(t+"S",e);break;case"LOCA":r.set(t+"L",Fi(e))}},/[^\d]:/,/,/),s.ontimestampmap&&s.ontimestampmap({MPEGTS:r.get("MPEGTS"),LOCAL:r.get("LOCAL")})}var i,r},/=/):Vi(t,function(t,e){switch(t){case"Region":!function(t){var n=new Hi;if(Vi(t,function(t,e){switch(t){case"id":n.set(t,e);break;case"width":n.percent(t,e);break;case"lines":n.integer(t,e);break;case"regionanchor":case"viewportanchor":var i=e.split(",");if(2!==i.length)break;var r=new Hi;if(r.percent("x",i[0]),r.percent("y",i[1]),!r.has("x")||!r.has("y"))break;n.set(t+"X",r.get("x")),n.set(t+"Y",r.get("y"));break;case"scroll":n.alt(t,e,["up"])}},/=/,/\s/),n.has("id")){var e=new(s.vttjs.VTTRegion||s.window.VTTRegion);e.width=n.get("width",100),e.lines=n.get("lines",3),e.regionAnchorX=n.get("regionanchorX",0),e.regionAnchorY=n.get("regionanchorY",100),e.viewportAnchorX=n.get("viewportanchorX",0),e.viewportAnchorY=n.get("viewportanchorY",100),e.scroll=n.get("scroll",""),s.onregion&&s.onregion(e),s.regionList.push({id:n.get("id"),region:e})}}(e)}},/:/)}t&&(s.buffer+=s.decoder.decode(t,{stream:!0}));try{var r;if("INITIAL"===s.state){if(!/\r\n|\n/.test(s.buffer))return this;var n=(r=e()).match(/^WEBVTT([ \t].*)?$/);if(!n||!n[0])throw new ji(ji.Errors.BadSignature);s.state="HEADER"}for(var a=!1;s.buffer;){if(!/\r\n|\n/.test(s.buffer))return this;switch(a?a=!1:r=e(),s.state){case"HEADER":/:/.test(r)?i(r):r||(s.state="ID");continue;case"NOTE":r||(s.state="ID");continue;case"ID":if(/^NOTE($|[ \t])/.test(r)){s.state="NOTE";break}if(!r)continue;if(s.cue=new(s.vttjs.VTTCue||s.window.VTTCue)(0,0,""),s.state="CUE",-1===r.indexOf("--\x3e")){s.cue.id=r;continue}case"CUE":try{qi(r,s.cue,s.regionList)}catch(t){s.reportOrThrowError(t),s.cue=null,s.state="BADCUE";continue}s.state="CUETEXT";continue;case"CUETEXT":var o=-1!==r.indexOf("--\x3e");if(!r||o&&(a=!0)){s.oncue&&s.oncue(s.cue),s.cue=null,s.state="ID";continue}s.cue.text&&(s.cue.text+="\n"),s.cue.text+=r;continue;case"BADCUE":r||(s.state="ID");continue}}}catch(t){s.reportOrThrowError(t),"CUETEXT"===s.state&&s.cue&&s.oncue&&s.oncue(s.cue),s.cue=null,s.state="INITIAL"===s.state?"BADWEBVTT":"BADCUE"}return this},flush:function(){var e=this;try{if(e.buffer+=e.decoder.decode(),(e.cue||"HEADER"===e.state)&&(e.buffer+="\n\n",e.parse()),"INITIAL"===e.state)throw new ji(ji.Errors.BadSignature)}catch(t){e.reportOrThrowError(t)}return e.onflush&&e.onflush(),this}};var ir=er,rr=Object.freeze({default:ir,__moduleExports:ir}),nr="auto",sr={"":1,lr:1,rl:1},ar={start:1,middle:1,end:1,left:1,right:1};function or(t){return"string"==typeof t&&(!!ar[t.toLowerCase()]&&t.toLowerCase())}function ur(t,e,i){this.hasBeenReset=!1;var r="",n=!1,s=t,a=e,o=i,u=null,l="",c=!0,h="auto",d="start",p=50,f="middle",m=50,g="middle";Object.defineProperties(this,{id:{enumerable:!0,get:function(){return r},set:function(t){r=""+t}},pauseOnExit:{enumerable:!0,get:function(){return n},set:function(t){n=!!t}},startTime:{enumerable:!0,get:function(){return s},set:function(t){if("number"!=typeof t)throw new TypeError("Start time must be set to a number.");s=t,this.hasBeenReset=!0}},endTime:{enumerable:!0,get:function(){return a},set:function(t){if("number"!=typeof t)throw new TypeError("End time must be set to a number.");a=t,this.hasBeenReset=!0}},text:{enumerable:!0,get:function(){return o},set:function(t){o=""+t,this.hasBeenReset=!0}},region:{enumerable:!0,get:function(){return u},set:function(t){u=t,this.hasBeenReset=!0}},vertical:{enumerable:!0,get:function(){return l},set:function(t){var e,i="string"==typeof(e=t)&&!!sr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");l=i,this.hasBeenReset=!0}},snapToLines:{enumerable:!0,get:function(){return c},set:function(t){c=!!t,this.hasBeenReset=!0}},line:{enumerable:!0,get:function(){return h},set:function(t){if("number"!=typeof t&&t!==nr)throw new SyntaxError("An invalid number or illegal string was specified.");h=t,this.hasBeenReset=!0}},lineAlign:{enumerable:!0,get:function(){return d},set:function(t){var e=or(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");d=e,this.hasBeenReset=!0}},position:{enumerable:!0,get:function(){return p},set:function(t){if(t<0||100<t)throw new Error("Position must be between 0 and 100.");p=t,this.hasBeenReset=!0}},positionAlign:{enumerable:!0,get:function(){return f},set:function(t){var e=or(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");f=e,this.hasBeenReset=!0}},size:{enumerable:!0,get:function(){return m},set:function(t){if(t<0||100<t)throw new Error("Size must be between 0 and 100.");m=t,this.hasBeenReset=!0}},align:{enumerable:!0,get:function(){return g},set:function(t){var e=or(t);if(!e)throw new SyntaxError("An invalid or illegal string was specified.");g=e,this.hasBeenReset=!0}}}),this.displayState=void 0}ur.prototype.getCueAsHTML=function(){return WebVTT.convertCueToDOMTree(window,this.text)};var lr=ur,cr=Object.freeze({default:lr,__moduleExports:lr}),hr={"":!0,up:!0};function dr(t){return"number"==typeof t&&0<=t&&t<=100}var pr=function(){var e=100,i=3,r=0,n=100,s=0,a=100,o="";Object.defineProperties(this,{width:{enumerable:!0,get:function(){return e},set:function(t){if(!dr(t))throw new Error("Width must be between 0 and 100.");e=t}},lines:{enumerable:!0,get:function(){return i},set:function(t){if("number"!=typeof t)throw new TypeError("Lines must be set to a number.");i=t}},regionAnchorY:{enumerable:!0,get:function(){return n},set:function(t){if(!dr(t))throw new Error("RegionAnchorX must be between 0 and 100.");n=t}},regionAnchorX:{enumerable:!0,get:function(){return r},set:function(t){if(!dr(t))throw new Error("RegionAnchorY must be between 0 and 100.");r=t}},viewportAnchorY:{enumerable:!0,get:function(){return a},set:function(t){if(!dr(t))throw new Error("ViewportAnchorY must be between 0 and 100.");a=t}},viewportAnchorX:{enumerable:!0,get:function(){return s},set:function(t){if(!dr(t))throw new Error("ViewportAnchorX must be between 0 and 100.");s=t}},scroll:{enumerable:!0,get:function(){return o},set:function(t){var e,i="string"==typeof(e=t)&&!!hr[e.toLowerCase()]&&e.toLowerCase();if(!1===i)throw new SyntaxError("An invalid or illegal string was specified.");o=i}}})},fr=Object.freeze({default:pr,__moduleExports:pr}),mr=rr&&ir||rr,gr=cr&&lr||cr,yr=fr&&pr||fr,vr=e(function(t){var e=t.exports={WebVTT:mr,VTTCue:gr,VTTRegion:yr};g.vttjs=e,g.WebVTT=e.WebVTT;var i=e.VTTCue,r=e.VTTRegion,n=g.VTTCue,s=g.VTTRegion;e.shim=function(){g.VTTCue=i,g.VTTRegion=r},e.restore=function(){g.VTTCue=n,g.VTTRegion=s},g.VTTCue||e.shim()});vr.WebVTT,vr.VTTCue,vr.VTTRegion;var _r=function(e){function n(){var i=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:function(){};y(this,n),i.reportTouchActivity=!1;var r=b(this,e.call(this,null,i,t));return r.hasStarted_=!1,r.on("playing",function(){this.hasStarted_=!0}),r.on("loadstart",function(){this.hasStarted_=!1}),Ni.names.forEach(function(t){var e=Ni[t];i&&i[e.getterName]&&(r[e.privateName]=i[e.getterName])}),r.featuresProgressEvents||r.manualProgressOn(),r.featuresTimeupdateEvents||r.manualTimeUpdatesOn(),["Text","Audio","Video"].forEach(function(t){!1===i["native"+t+"Tracks"]&&(r["featuresNative"+t+"Tracks"]=!1)}),!1===i.nativeCaptions||!1===i.nativeTextTracks?r.featuresNativeTextTracks=!1:!0!==i.nativeCaptions&&!0!==i.nativeTextTracks||(r.featuresNativeTextTracks=!0),r.featuresNativeTextTracks||r.emulateTextTracks(),r.autoRemoteTextTracks_=new Ni.text.ListClass,r.initTrackListeners(),i.nativeControlsForTouch||r.emitTapEvents(),r.constructor&&(r.name_=r.constructor.name||"Unknown Tech"),r}return _(n,e),n.prototype.triggerSourceset=function(t){var e=this;this.isReady_||this.one("ready",function(){return e.setTimeout(function(){return e.triggerSourceset(t)},1)}),this.trigger({src:t,type:"sourceset"})},n.prototype.manualProgressOn=function(){this.on("durationchange",this.onDurationChange),this.manualProgress=!0,this.one("ready",this.trackProgress)},n.prototype.manualProgressOff=function(){this.manualProgress=!1,this.stopTrackingProgress(),this.off("durationchange",this.onDurationChange)},n.prototype.trackProgress=function(t){this.stopTrackingProgress(),this.progressInterval=this.setInterval(Ot(this,function(){var t=this.bufferedPercent();this.bufferedPercent_!==t&&this.trigger("progress"),1===(this.bufferedPercent_=t)&&this.stopTrackingProgress()}),500)},n.prototype.onDurationChange=function(t){this.duration_=this.duration()},n.prototype.buffered=function(){return be(0,0)},n.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration_)},n.prototype.stopTrackingProgress=function(){this.clearInterval(this.progressInterval)},n.prototype.manualTimeUpdatesOn=function(){this.manualTimeUpdates=!0,this.on("play",this.trackCurrentTime),this.on("pause",this.stopTrackingCurrentTime)},n.prototype.manualTimeUpdatesOff=function(){this.manualTimeUpdates=!1,this.stopTrackingCurrentTime(),this.off("play",this.trackCurrentTime),this.off("pause",this.stopTrackingCurrentTime)},n.prototype.trackCurrentTime=function(){this.currentTimeInterval&&this.stopTrackingCurrentTime(),this.currentTimeInterval=this.setInterval(function(){this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},250)},n.prototype.stopTrackingCurrentTime=function(){this.clearInterval(this.currentTimeInterval),this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.dispose=function(){this.clearTracks(Mi.names),this.manualProgress&&this.manualProgressOff(),this.manualTimeUpdates&&this.manualTimeUpdatesOff(),e.prototype.dispose.call(this)},n.prototype.clearTracks=function(t){var n=this;(t=[].concat(t)).forEach(function(t){for(var e=n[t+"Tracks"]()||[],i=e.length;i--;){var r=e[i];"text"===t&&n.removeRemoteTextTrack(r),e.removeTrack(r)}})},n.prototype.cleanupAutoTextTracks=function(){for(var t=this.autoRemoteTextTracks_||[],e=t.length;e--;){var i=t[e];this.removeRemoteTextTrack(i)}},n.prototype.reset=function(){},n.prototype.error=function(t){return void 0!==t&&(this.error_=new Le(t),this.trigger("error")),this.error_},n.prototype.played=function(){return this.hasStarted_?be(0,0):be()},n.prototype.setCurrentTime=function(){this.manualTimeUpdates&&this.trigger({type:"timeupdate",target:this,manuallyTriggered:!0})},n.prototype.initTrackListeners=function(){var n=this;Mi.names.forEach(function(t){var e=Mi[t],i=function(){n.trigger(t+"trackchange")},r=n[e.getterName]();r.addEventListener("removetrack",i),r.addEventListener("addtrack",i),n.on("dispose",function(){r.removeEventListener("removetrack",i),r.removeEventListener("addtrack",i)})})},n.prototype.addWebVttScript_=function(){var t=this;if(!g.WebVTT)if(p.body.contains(this.el())){if(!this.options_["vtt.js"]&&w(vr)&&0<Object.keys(vr).length)return void this.trigger("vttjsloaded");var e=p.createElement("script");e.src=this.options_["vtt.js"]||"https://vjs.zencdn.net/vttjs/0.14.1/vtt.min.js",e.onload=function(){t.trigger("vttjsloaded")},e.onerror=function(){t.trigger("vttjserror")},this.on("dispose",function(){e.onload=null,e.onerror=null}),g.WebVTT=!0,this.el().parentNode.appendChild(e)}else this.ready(this.addWebVttScript_)},n.prototype.emulateTextTracks=function(){var t=this,i=this.textTracks(),e=this.remoteTextTracks(),r=function(t){return i.addTrack(t.track)},n=function(t){return i.removeTrack(t.track)};e.on("addtrack",r),e.on("removetrack",n),this.addWebVttScript_();var s=function(){return t.trigger("texttrackchange")},a=function(){s();for(var t=0;t<i.length;t++){var e=i[t];e.removeEventListener("cuechange",s),"showing"===e.mode&&e.addEventListener("cuechange",s)}};a(),i.addEventListener("change",a),i.addEventListener("addtrack",a),i.addEventListener("removetrack",a),this.on("dispose",function(){e.off("addtrack",r),e.off("removetrack",n),i.removeEventListener("change",a),i.removeEventListener("addtrack",a),i.removeEventListener("removetrack",a);for(var t=0;t<i.length;t++){i[t].removeEventListener("cuechange",s)}})},n.prototype.addTextTrack=function(t,e,i){if(!t)throw new Error("TextTrack kind is required but was not provided");return function(t,e,i,r){var n=4<arguments.length&&void 0!==arguments[4]?arguments[4]:{},s=t.textTracks();n.kind=e,i&&(n.label=i),r&&(n.language=r),n.tech=t;var a=new Ni.text.TrackClass(n);return s.addTrack(a),a}(this,t,e,i)},n.prototype.createRemoteTextTrack=function(t){var e=Gt(t,{tech:this});return new Ui.remoteTextEl.TrackClass(e)},n.prototype.addRemoteTextTrack=function(){var t=this,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=this.createRemoteTextTrack(e);return!0!==i&&!1!==i&&(f.warn('Calling addRemoteTextTrack without explicitly setting the "manualCleanup" parameter to `true` is deprecated and default to `false` in future version of video.js'),i=!0),this.remoteTextTrackEls().addTrackElement_(r),this.remoteTextTracks().addTrack(r.track),!0!==i&&this.ready(function(){return t.autoRemoteTextTracks_.addTrack(r.track)}),r},n.prototype.removeRemoteTextTrack=function(t){var e=this.remoteTextTrackEls().getTrackElementByTrack_(t);this.remoteTextTrackEls().removeTrackElement_(e),this.remoteTextTracks().removeTrack(t),this.autoRemoteTextTracks_.removeTrack(t)},n.prototype.getVideoPlaybackQuality=function(){return{}},n.prototype.setPoster=function(){},n.prototype.playsinline=function(){},n.prototype.setPlaysinline=function(){},n.prototype.overrideNativeAudioTracks=function(){},n.prototype.overrideNativeVideoTracks=function(){},n.prototype.canPlayType=function(){return""},n.canPlayType=function(){return""},n.canPlaySource=function(t,e){return n.canPlayType(t.type)},n.isTech=function(t){return t.prototype instanceof n||t instanceof n||t===n},n.registerTech=function(t,e){if(n.techs_||(n.techs_={}),!n.isTech(e))throw new Error("Tech "+t+" must be a Tech");if(!n.canPlayType)throw new Error("Techs must have a static canPlayType method on them");if(!n.canPlaySource)throw new Error("Techs must have a static canPlaySource method on them");return t=zt(t),n.techs_[t]=e,"Tech"!==t&&n.defaultTechOrder_.push(t),e},n.getTech=function(t){if(t)return t=zt(t),n.techs_&&n.techs_[t]?n.techs_[t]:g&&g.videojs&&g.videojs[t]?(f.warn("The "+t+" tech was added to the videojs object when it should be registered using videojs.registerTech(name, tech)"),g.videojs[t]):void 0},n}(Xt);Ni.names.forEach(function(t){var e=Ni[t];_r.prototype[e.getterName]=function(){return this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName]}}),_r.prototype.featuresVolumeControl=!0,_r.prototype.featuresFullscreenResize=!1,_r.prototype.featuresPlaybackRate=!1,_r.prototype.featuresProgressEvents=!1,_r.prototype.featuresSourceset=!1,_r.prototype.featuresTimeupdateEvents=!1,_r.prototype.featuresNativeTextTracks=!1,_r.withSourceHandlers=function(n){n.registerSourceHandler=function(t,e){var i=n.sourceHandlers;i||(i=n.sourceHandlers=[]),void 0===e&&(e=i.length),i.splice(e,0,t)},n.canPlayType=function(t){for(var e=n.sourceHandlers||[],i=void 0,r=0;r<e.length;r++)if(i=e[r].canPlayType(t))return i;return""},n.selectSourceHandler=function(t,e){for(var i=n.sourceHandlers||[],r=0;r<i.length;r++)if(i[r].canHandleSource(t,e))return i[r];return null},n.canPlaySource=function(t,e){var i=n.selectSourceHandler(t,e);return i?i.canHandleSource(t,e):""};["seekable","seeking","duration"].forEach(function(t){var e=this[t];"function"==typeof e&&(this[t]=function(){return this.sourceHandler_&&this.sourceHandler_[t]?this.sourceHandler_[t].apply(this.sourceHandler_,arguments):e.apply(this,arguments)})},n.prototype),n.prototype.setSource=function(t){var e=n.selectSourceHandler(t,this.options_);e||(n.nativeSourceHandler?e=n.nativeSourceHandler:f.error("No source handler found for the current source.")),this.disposeSourceHandler(),this.off("dispose",this.disposeSourceHandler),e!==n.nativeSourceHandler&&(this.currentSource_=t),this.sourceHandler_=e.handleSource(t,this,this.options_),this.on("dispose",this.disposeSourceHandler)},n.prototype.disposeSourceHandler=function(){this.currentSource_&&(this.clearTracks(["audio","video"]),this.currentSource_=null),this.cleanupAutoTextTracks(),this.sourceHandler_&&(this.sourceHandler_.dispose&&this.sourceHandler_.dispose(),this.sourceHandler_=null)}},Xt.registerComponent("Tech",_r),_r.registerTech("Tech",_r),_r.defaultTechOrder_=[];var br={},Tr={},Sr={};function kr(t,e,i){t.setTimeout(function(){return function i(){var r=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[];var n=arguments[2];var s=arguments[3];var a=4<arguments.length&&void 0!==arguments[4]?arguments[4]:[];var o=5<arguments.length&&void 0!==arguments[5]&&arguments[5];var e=t[0],u=t.slice(1);if("string"==typeof e)i(r,br[e],n,s,a,o);else if(e){var l=function(t,e){var i=Tr[t.id()],r=null;if(null==i)return r=e(t),Tr[t.id()]=[[e,r]],r;for(var n=0;n<i.length;n++){var s=i[n],a=s[0],o=s[1];a===e&&(r=o)}null===r&&(r=e(t),i.push([e,r]));return r}(s,e);l.setSource(C({},r),function(t,e){if(t)return i(r,u,n,s,a,o);a.push(l),i(e,r.type===e.type?u:br[e.type],n,s,a,o)})}else u.length?i(r,u,n,s,a,o):o?n(r,a):i(r,br["*"],n,s,a,!0)}(e,br[e.type],i,t)},1)}function Cr(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null,n="call"+zt(i),s=t.reduce(Lr(n),r),a=s===Sr,o=a?null:e[i](s);return function(t,e,i,r){for(var n=t.length-1;0<=n;n--){var s=t[n];s[e]&&s[e](r,i)}}(t,i,o,a),o}var Er={buffered:1,currentTime:1,duration:1,seekable:1,played:1,paused:1},wr={setCurrentTime:1},Ar={play:1,pause:1};function Lr(i){return function(t,e){return t===Sr?Sr:e[i]?e[i](t):t}}var Pr={opus:"video/ogg",ogv:"video/ogg",mp4:"video/mp4",mov:"video/mp4",m4v:"video/mp4",mkv:"video/x-matroska",mp3:"audio/mpeg",aac:"audio/aac",oga:"audio/ogg",m3u8:"application/x-mpegURL"};function Or(t){var e=Ze(t.src),i=Pr[e.toLowerCase()];return!t.type&&i&&(t.type=i),t}var Ir=function(l){function c(t,e,i){y(this,c);var r=Gt({createEl:!1},e),n=b(this,l.call(this,t,r,i));if(e.playerOptions.sources&&0!==e.playerOptions.sources.length)t.src(e.playerOptions.sources);else for(var s=0,a=e.playerOptions.techOrder;s<a.length;s++){var o=zt(a[s]),u=_r.getTech(o);if(o||(u=Xt.getComponent(o)),u&&u.isSupported()){t.loadTech_(o);break}}return n}return _(c,l),c}(Xt);Xt.registerComponent("MediaLoader",Ir);var xr=function(n){function r(t,e){y(this,r);var i=b(this,n.call(this,t,e));return i.emitTapEvents(),i.enable(),i}return _(r,n),r.prototype.createEl=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"div",e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass(),tabIndex:0},e),"button"===t&&f.error("Creating a ClickableComponent with an HTML element of "+t+" is not supported; use a Button instead."),i=C({role:"button","aria-live":"polite"},i),this.tabIndex_=e.tabIndex;var r=n.prototype.createEl.call(this,t,e,i);return this.createControlTextEl(r),r},r.prototype.dispose=function(){this.controlTextEl_=null,n.prototype.dispose.call(this)},r.prototype.createControlTextEl=function(t){return this.controlTextEl_=M("span",{className:"vjs-control-text"}),t&&t.appendChild(this.controlTextEl_),this.controlText(this.controlText_,t),this.controlTextEl_},r.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.el();if(void 0===t)return this.controlText_||"Need Text";var i=this.localize(t);this.controlText_=t,U(this.controlTextEl_,i),this.nonIconControl||e.setAttribute("title",i)},r.prototype.buildCSSClass=function(){return"vjs-control vjs-button "+n.prototype.buildCSSClass.call(this)},r.prototype.enable=function(){this.enabled_||(this.enabled_=!0,this.removeClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","false"),"undefined"!=typeof this.tabIndex_&&this.el_.setAttribute("tabIndex",this.tabIndex_),this.on(["tap","click"],this.handleClick),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur))},r.prototype.disable=function(){this.enabled_=!1,this.addClass("vjs-disabled"),this.el_.setAttribute("aria-disabled","true"),"undefined"!=typeof this.tabIndex_&&this.el_.removeAttribute("tabIndex"),this.off(["tap","click"],this.handleClick),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur)},r.prototype.handleClick=function(t){},r.prototype.handleFocus=function(t){_t(p,"keydown",Ot(this,this.handleKeyPress))},r.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.trigger("click")):n.prototype.handleKeyPress&&n.prototype.handleKeyPress.call(this,t)},r.prototype.handleBlur=function(t){bt(p,"keydown",Ot(this,this.handleKeyPress))},r}(Xt);Xt.registerComponent("ClickableComponent",xr);var Dr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update(),t.on("posterchange",Ot(i,i.update)),i}return _(n,r),n.prototype.dispose=function(){this.player().off("posterchange",this.update),r.prototype.dispose.call(this)},n.prototype.createEl=function(){return M("div",{className:"vjs-poster",tabIndex:-1})},n.prototype.update=function(t){var e=this.player().poster();this.setSrc(e),e?this.show():this.hide()},n.prototype.setSrc=function(t){var e="";t&&(e='url("'+t+'")'),this.el_.style.backgroundImage=e},n.prototype.handleClick=function(t){this.player_.controls()&&(this.player_.paused()?this.player_.play():this.player_.pause())},n}(xr);Xt.registerComponent("PosterImage",Dr);var Rr="#222",Mr={monospace:"monospace",sansSerif:"sans-serif",serif:"serif",monospaceSansSerif:'"Andale Mono", "Lucida Console", monospace',monospaceSerif:'"Courier New", monospace',proportionalSansSerif:"sans-serif",proportionalSerif:"serif",casual:'"Comic Sans MS", Impact, fantasy',script:'"Monotype Corsiva", cursive',smallcaps:'"Andale Mono", "Lucida Console", monospace, sans-serif'};function Ur(t,e){return"rgba("+parseInt(t[1]+t[1],16)+","+parseInt(t[2]+t[2],16)+","+parseInt(t[3]+t[3],16)+","+e+")"}function Nr(t,e,i){try{t.style[e]=i}catch(t){return}}var Br=function(n){function s(i,t,e){y(this,s);var r=b(this,n.call(this,i,t,e));return i.on("loadstart",Ot(r,r.toggleDisplay)),i.on("texttrackchange",Ot(r,r.updateDisplay)),i.on("loadstart",Ot(r,r.preselectTrack)),i.ready(Ot(r,function(){if(i.tech_&&i.tech_.featuresNativeTextTracks)this.hide();else{i.on("fullscreenchange",Ot(this,this.updateDisplay));for(var t=this.options_.playerOptions.tracks||[],e=0;e<t.length;e++)this.player_.addRemoteTextTrack(t[e],!0);this.preselectTrack()}})),r}return _(s,n),s.prototype.preselectTrack=function(){for(var t={captions:1,subtitles:1},e=this.player_.textTracks(),i=this.player_.cache_.selectedLanguage,r=void 0,n=void 0,s=void 0,a=0;a<e.length;a++){var o=e[a];i&&i.enabled&&i.language===o.language?o.kind===i.kind?s=o:s||(s=o):i&&!i.enabled?n=r=s=null:o.default&&("descriptions"!==o.kind||r?o.kind in t&&!n&&(n=o):r=o)}s?s.mode="showing":n?n.mode="showing":r&&(r.mode="showing")},s.prototype.toggleDisplay=function(){this.player_.tech_&&this.player_.tech_.featuresNativeTextTracks?this.hide():this.show()},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:"vjs-text-track-display"},{"aria-live":"off","aria-atomic":"true"})},s.prototype.clearDisplay=function(){"function"==typeof g.WebVTT&&g.WebVTT.processCues(g,[],this.el_)},s.prototype.updateDisplay=function(){var t=this.player_.textTracks();this.clearDisplay();for(var e=null,i=null,r=t.length;r--;){var n=t[r];"showing"===n.mode&&("descriptions"===n.kind?e=n:i=n)}i?("off"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","off"),this.updateForTrack(i)):e&&("assertive"!==this.getAttribute("aria-live")&&this.setAttribute("aria-live","assertive"),this.updateForTrack(e))},s.prototype.updateForTrack=function(t){if("function"==typeof g.WebVTT&&t.activeCues){for(var e=[],i=0;i<t.activeCues.length;i++)e.push(t.activeCues[i]);if(g.WebVTT.processCues(g,e,this.el_),this.player_.textTrackSettings)for(var r=this.player_.textTrackSettings.getValues(),n=e.length;n--;){var s=e[n];if(s){var a=s.displayState;if(r.color&&(a.firstChild.style.color=r.color),r.textOpacity&&Nr(a.firstChild,"color",Ur(r.color||"#fff",r.textOpacity)),r.backgroundColor&&(a.firstChild.style.backgroundColor=r.backgroundColor),r.backgroundOpacity&&Nr(a.firstChild,"backgroundColor",Ur(r.backgroundColor||"#000",r.backgroundOpacity)),r.windowColor&&(r.windowOpacity?Nr(a,"backgroundColor",Ur(r.windowColor,r.windowOpacity)):a.style.backgroundColor=r.windowColor),r.edgeStyle&&("dropshadow"===r.edgeStyle?a.firstChild.style.textShadow="2px 2px 3px #222, 2px 2px 4px #222, 2px 2px 5px "+Rr:"raised"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #222, 2px 2px #222, 3px 3px "+Rr:"depressed"===r.edgeStyle?a.firstChild.style.textShadow="1px 1px #ccc, 0 1px #ccc, -1px -1px #222, 0 -1px "+Rr:"uniform"===r.edgeStyle&&(a.firstChild.style.textShadow="0 0 4px #222, 0 0 4px #222, 0 0 4px #222, 0 0 4px "+Rr)),r.fontPercent&&1!==r.fontPercent){var o=g.parseFloat(a.style.fontSize);a.style.fontSize=o*r.fontPercent+"px",a.style.height="auto",a.style.top="auto",a.style.bottom="2px"}r.fontFamily&&"default"!==r.fontFamily&&("small-caps"===r.fontFamily?a.firstChild.style.fontVariant="small-caps":a.firstChild.style.fontFamily=Mr[r.fontFamily])}}}},s}(Xt);Xt.registerComponent("TextTrackDisplay",Br);var jr=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(){var t=this.player_.isAudio(),e=this.localize(t?"Audio Player":"Video Player"),i=M("span",{className:"vjs-control-text",innerHTML:this.localize("{1} is loading.",[e])}),r=n.prototype.createEl.call(this,"div",{className:"vjs-loading-spinner",dir:"ltr"});return r.appendChild(i),r},t}(Xt);Xt.registerComponent("LoadingSpinner",jr);var Fr=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};e=C({innerHTML:'<span aria-hidden="true" class="vjs-icon-placeholder"></span>',className:this.buildCSSClass()},e),i=C({type:"button","aria-live":"polite"},i);var r=Xt.prototype.createEl.call(this,"button",e,i);return this.createControlTextEl(r),r},t.prototype.addChild=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=this.constructor.name;return f.warn("Adding an actionable (user controllable) child to a Button ("+i+") is not supported; use a ClickableComponent instead."),Xt.prototype.addChild.call(this,t,e)},t.prototype.enable=function(){e.prototype.enable.call(this),this.el_.removeAttribute("disabled")},t.prototype.disable=function(){e.prototype.disable.call(this),this.el_.setAttribute("disabled","disabled")},t.prototype.handleKeyPress=function(t){32!==t.which&&13!==t.which&&e.prototype.handleKeyPress.call(this,t)},t}(xr);Xt.registerComponent("Button",Fr);var Hr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.mouseused_=!1,i.on("mousedown",i.handleMouseDown),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-big-play-button"},n.prototype.handleClick=function(t){var e=this.player_.play();if(!(this.mouseused_&&t.clientX&&t.clientY)){var i=this.player_.getChild("controlBar"),r=i&&i.getChild("playToggle");if(r){var n=function(){return r.focus()};Ie(e)?e.then(n,function(){}):this.setTimeout(n,1)}else this.player_.focus()}},n.prototype.handleKeyPress=function(t){this.mouseused_=!1,r.prototype.handleKeyPress.call(this,t)},n.prototype.handleMouseDown=function(t){this.mouseused_=!0},n}(Fr);Hr.prototype.controlText_="Play Video",Xt.registerComponent("BigPlayButton",Hr);var Vr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.controlText(e&&e.controlText||i.localize("Close")),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-close-button "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.trigger({type:"close",bubbles:!1})},n}(Fr);Xt.registerComponent("CloseButton",Vr);var qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"play",i.handlePlay),i.on(t,"pause",i.handlePause),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-play-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleSeeked=function(t){this.removeClass("vjs-ended"),this.player_.paused()?this.handlePause(t):this.handlePlay(t)},n.prototype.handlePlay=function(t){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.controlText("Pause")},n.prototype.handlePause=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.controlText("Play")},n.prototype.handleEnded=function(t){this.removeClass("vjs-playing"),this.addClass("vjs-ended"),this.controlText("Replay"),this.one(this.player_,"seeked",this.handleSeeked)},n}(Fr);qr.prototype.controlText_="Play",Xt.registerComponent("PlayToggle",qr);var Wr=function(t,e){t=t<0?0:t;var i=Math.floor(t%60),r=Math.floor(t/60%60),n=Math.floor(t/3600),s=Math.floor(e/60%60),a=Math.floor(e/3600);return(isNaN(t)||t===1/0)&&(n=r=i="-"),(n=0<n||0<a?n+":":"")+(r=((n||10<=s)&&r<10?"0"+r:r)+":")+(i=i<10?"0"+i:i)},zr=Wr;function Gr(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:t;return zr(t,e)}var Xr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.throttledUpdateContent=It(Ot(i,i.updateContent),25),i.on(t,"timeupdate",i.throttledUpdateContent),i}return _(n,r),n.prototype.createEl=function(t){var e=this.buildCSSClass(),i=r.prototype.createEl.call(this,"div",{className:e+" vjs-time-control vjs-control"});return this.contentEl_=M("div",{className:e+"-display"},{"aria-live":"off"},M("span",{className:"vjs-control-text",textContent:this.localize(this.controlText_)})),this.updateTextNode_(),i.appendChild(this.contentEl_),i},n.prototype.dispose=function(){this.contentEl_=null,this.textNode_=null,r.prototype.dispose.call(this)},n.prototype.updateTextNode_=function(){if(this.contentEl_){for(;this.contentEl_.firstChild;)this.contentEl_.removeChild(this.contentEl_.firstChild);this.textNode_=p.createTextNode(this.formattedTime_||this.formatTime_(0)),this.contentEl_.appendChild(this.textNode_)}},n.prototype.formatTime_=function(t){return Gr(t)},n.prototype.updateFormattedTime_=function(t){var e=this.formatTime_(t);e!==this.formattedTime_&&(this.formattedTime_=e,this.requestAnimationFrame(this.updateTextNode_))},n.prototype.updateContent=function(t){},n}(Xt);Xr.prototype.controlText_="Time",Xt.registerComponent("TimeDisplay",Xr);var Yr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-current-time"},n.prototype.updateContent=function(t){var e=this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime();this.updateFormattedTime_(e)},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(this.player_.duration())},n}(Xr);Yr.prototype.controlText_="Current Time",Xt.registerComponent("CurrentTimeDisplay",Yr);var $r=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.updateContent),i.on(t,"loadedmetadata",i.throttledUpdateContent),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-duration"},n.prototype.updateContent=function(t){var e=this.player_.duration();e&&this.duration_!==e&&(this.duration_=e,this.updateFormattedTime_(e))},n}(Xr);$r.prototype.controlText_="Duration Time",Xt.registerComponent("DurationDisplay",$r);var Kr=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-control vjs-time-divider",innerHTML:"<div><span>/</span></div>"})},e}(Xt);Xt.registerComponent("TimeDivider",Kr);var Qr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"durationchange",i.throttledUpdateContent),i.on(t,"ended",i.handleEnded),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-remaining-time"},n.prototype.formatTime_=function(t){return"-"+r.prototype.formatTime_.call(this,t)},n.prototype.updateContent=function(t){this.player_.duration()&&(this.player_.remainingTimeDisplay?this.updateFormattedTime_(this.player_.remainingTimeDisplay()):this.updateFormattedTime_(this.player_.remainingTime()))},n.prototype.handleEnded=function(t){this.player_.duration()&&this.updateFormattedTime_(0)},n}(Xr);Qr.prototype.controlText_="Remaining Time",Xt.registerComponent("RemainingTimeDisplay",Qr);var Jr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateShowing(),i.on(i.player(),"durationchange",i.updateShowing),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this,"div",{className:"vjs-live-control vjs-control"});return this.contentEl_=M("div",{className:"vjs-live-display",innerHTML:'<span class="vjs-control-text">'+this.localize("Stream Type")+"</span>"+this.localize("LIVE")},{"aria-live":"off"}),t.appendChild(this.contentEl_),t},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.updateShowing=function(t){this.player().duration()===1/0?this.show():this.hide()},n}(Xt);Xt.registerComponent("LiveDisplay",Jr);var Zr=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.bar=i.getChild(i.options_.barName),i.vertical(!!i.options_.vertical),i.enable(),i}return _(n,r),n.prototype.enabled=function(){return this.enabled_},n.prototype.enable=function(){this.enabled()||(this.on("mousedown",this.handleMouseDown),this.on("touchstart",this.handleMouseDown),this.on("focus",this.handleFocus),this.on("blur",this.handleBlur),this.on("click",this.handleClick),this.on(this.player_,"controlsvisible",this.update),this.playerEvent&&this.on(this.player_,this.playerEvent,this.update),this.removeClass("disabled"),this.setAttribute("tabindex",0),this.enabled_=!0)},n.prototype.disable=function(){if(this.enabled()){var t=this.bar.el_.ownerDocument;this.off("mousedown",this.handleMouseDown),this.off("touchstart",this.handleMouseDown),this.off("focus",this.handleFocus),this.off("blur",this.handleBlur),this.off("click",this.handleClick),this.off(this.player_,"controlsvisible",this.update),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.removeAttribute("tabindex"),this.addClass("disabled"),this.playerEvent&&this.off(this.player_,this.playerEvent,this.update),this.enabled_=!1}},n.prototype.createEl=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{};return e.className=e.className+" vjs-slider",e=C({tabIndex:0},e),i=C({role:"slider","aria-valuenow":0,"aria-valuemin":0,"aria-valuemax":100,tabIndex:0},i),r.prototype.createEl.call(this,t,e,i)},n.prototype.handleMouseDown=function(t){var e=this.bar.el_.ownerDocument;t.preventDefault(),X(),this.addClass("vjs-sliding"),this.trigger("slideractive"),this.on(e,"mousemove",this.handleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchmove",this.handleMouseMove),this.on(e,"touchend",this.handleMouseUp),this.handleMouseMove(t)},n.prototype.handleMouseMove=function(t){},n.prototype.handleMouseUp=function(){var t=this.bar.el_.ownerDocument;Y(),this.removeClass("vjs-sliding"),this.trigger("sliderinactive"),this.off(t,"mousemove",this.handleMouseMove),this.off(t,"mouseup",this.handleMouseUp),this.off(t,"touchmove",this.handleMouseMove),this.off(t,"touchend",this.handleMouseUp),this.update()},n.prototype.update=function(){if(this.el_){var t=this.getPercent(),e=this.bar;if(e){("number"!=typeof t||t!=t||t<0||t===1/0)&&(t=0);var i=(100*t).toFixed(2)+"%",r=e.el().style;return this.vertical()?r.height=i:r.width=i,t}}},n.prototype.calculateDistance=function(t){var e=Q(this.el_,t);return this.vertical()?e.y:e.x},n.prototype.handleFocus=function(){this.on(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepBack()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepForward())},n.prototype.handleBlur=function(){this.off(this.bar.el_.ownerDocument,"keydown",this.handleKeyPress)},n.prototype.handleClick=function(t){t.stopImmediatePropagation(),t.preventDefault()},n.prototype.vertical=function(t){if(void 0===t)return this.vertical_||!1;this.vertical_=!!t,this.vertical_?this.addClass("vjs-slider-vertical"):this.addClass("vjs-slider-horizontal")},n}(Xt);Xt.registerComponent("Slider",Zr);var tn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.partEls_=[],i.on(t,"progress",i.update),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-load-progress",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Loaded")+"</span>: 0%</span>"})},n.prototype.dispose=function(){this.partEls_=null,r.prototype.dispose.call(this)},n.prototype.update=function(t){var e=this.player_.buffered(),i=this.player_.duration(),r=this.player_.bufferedEnd(),n=this.partEls_,s=function(t,e){var i=t/e||0;return 100*(1<=i?1:i)+"%"};this.el_.style.width=s(r,i);for(var a=0;a<e.length;a++){var o=e.start(a),u=e.end(a),l=n[a];l||(l=this.el_.appendChild(M()),n[a]=l),l.style.left=s(o,r),l.style.width=s(u-o,r)}for(var c=n.length;c>e.length;c--)this.el_.removeChild(n[c-1]);n.length=e.length},n}(Xt);Xt.registerComponent("LoadProgressBar",tn);var en=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-time-tooltip"})},e.prototype.update=function(t,e,i){var r=$(this.el_),n=$(this.player_.el()),s=t.width*e;if(n&&r){var a=t.left-n.left+s,o=t.width-s+(n.right-t.right),u=r.width/2;a<u?u+=u-a:o<u&&(u=o),u<0?u=0:u>r.width&&(u=r.width),this.el_.style.right="-"+u+"px",U(this.el_,i)}},e}(Xt);Xt.registerComponent("TimeTooltip",en);var rn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-play-progress vjs-slider-bar",innerHTML:'<span class="vjs-control-text"><span>'+this.localize("Progress")+"</span>: 0%</span>"})},e.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=Gr(n.player_.scrubbing()?n.player_.getCache().currentTime:n.player_.currentTime(),n.player_.duration()),e=n.getChild("timeTooltip");e&&e.update(i,r,t)})},e}(Xt);rn.prototype.options_={children:[]},ne||ae||rn.prototype.options_.children.push("timeTooltip"),Xt.registerComponent("PlayProgressBar",rn);var nn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.update=It(Ot(i,i.update),25),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-mouse-display"})},n.prototype.update=function(i,r){var n=this;this.rafId_&&this.cancelAnimationFrame(this.rafId_),this.rafId_=this.requestAnimationFrame(function(){var t=n.player_.duration(),e=Gr(r*t,t);n.el_.style.left=i.width*r+"px",n.getChild("timeTooltip").update(i,r,e)})},n}(Xt);nn.prototype.options_={children:["timeTooltip"]},Xt.registerComponent("MouseTimeDisplay",nn);var sn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.setEventHandlers_(),i}return _(n,r),n.prototype.setEventHandlers_=function(){var t=this;this.update=It(Ot(this,this.update),30),this.on(this.player_,"timeupdate",this.update),this.on(this.player_,"ended",this.handleEnded),this.updateInterval=null,this.on(this.player_,["playing"],function(){t.clearInterval(t.updateInterval),t.updateInterval=t.setInterval(function(){t.requestAnimationFrame(function(){t.update()})},30)}),this.on(this.player_,["ended","pause","waiting"],function(){t.clearInterval(t.updateInterval)}),this.on(this.player_,["timeupdate","ended"],this.update)},n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-holder"},{"aria-label":this.localize("Progress Bar")})},n.prototype.update_=function(t,e){var i=this.player_.duration();this.el_.setAttribute("aria-valuenow",(100*e).toFixed(2)),this.el_.setAttribute("aria-valuetext",this.localize("progress bar timing: currentTime={1} duration={2}",[Gr(t,i),Gr(i,i)],"{1} of {2}")),this.bar.update($(this.el_),e)},n.prototype.update=function(t){var e=r.prototype.update.call(this);return this.update_(this.getCurrentTime_(),e),e},n.prototype.getCurrentTime_=function(){return this.player_.scrubbing()?this.player_.getCache().currentTime:this.player_.currentTime()},n.prototype.handleEnded=function(t){this.update_(this.player_.duration(),1)},n.prototype.getPercent=function(){var t=this.getCurrentTime_()/this.player_.duration();return 1<=t?1:t},n.prototype.handleMouseDown=function(t){rt(t)&&(t.stopPropagation(),this.player_.scrubbing(!0),this.videoWasPlaying=!this.player_.paused(),this.player_.pause(),r.prototype.handleMouseDown.call(this,t))},n.prototype.handleMouseMove=function(t){if(rt(t)){var e=this.calculateDistance(t)*this.player_.duration();e===this.player_.duration()&&(e-=.1),this.player_.currentTime(e)}},n.prototype.enable=function(){r.prototype.enable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.show()},n.prototype.disable=function(){r.prototype.disable.call(this);var t=this.getChild("mouseTimeDisplay");t&&t.hide()},n.prototype.handleMouseUp=function(t){r.prototype.handleMouseUp.call(this,t),t&&t.stopPropagation(),this.player_.scrubbing(!1),this.player_.trigger({type:"timeupdate",target:this,manuallyTriggered:!0}),this.videoWasPlaying&&xe(this.player_.play())},n.prototype.stepForward=function(){this.player_.currentTime(this.player_.currentTime()+5)},n.prototype.stepBack=function(){this.player_.currentTime(this.player_.currentTime()-5)},n.prototype.handleAction=function(t){this.player_.paused()?this.player_.play():this.player_.pause()},n.prototype.handleKeyPress=function(t){32===t.which||13===t.which?(t.preventDefault(),this.handleAction(t)):r.prototype.handleKeyPress&&r.prototype.handleKeyPress.call(this,t)},n}(Zr);sn.prototype.options_={children:["loadProgressBar","playProgressBar"],barName:"playProgressBar"},ne||ae||sn.prototype.options_.children.splice(1,0,"mouseTimeDisplay"),sn.prototype.playerEvent="timeupdate",Xt.registerComponent("SeekBar",sn);var an=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.handleMouseMove=It(Ot(i,i.handleMouseMove),25),i.throttledHandleMouseSeek=It(Ot(i,i.handleMouseSeek),25),i.enable(),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-progress-control vjs-control"})},n.prototype.handleMouseMove=function(t){var e=this.getChild("seekBar");if(e){var i=e.getChild("mouseTimeDisplay"),r=e.el(),n=$(r),s=Q(r,t).x;1<s?s=1:s<0&&(s=0),i&&i.update(n,s)}},n.prototype.handleMouseSeek=function(t){var e=this.getChild("seekBar");e&&e.handleMouseMove(t)},n.prototype.enabled=function(){return this.enabled_},n.prototype.disable=function(){this.children().forEach(function(t){return t.disable&&t.disable()}),this.enabled()&&(this.off(["mousedown","touchstart"],this.handleMouseDown),this.off(this.el_,"mousemove",this.handleMouseMove),this.handleMouseUp(),this.addClass("disabled"),this.enabled_=!1)},n.prototype.enable=function(){this.children().forEach(function(t){return t.enable&&t.enable()}),this.enabled()||(this.on(["mousedown","touchstart"],this.handleMouseDown),this.on(this.el_,"mousemove",this.handleMouseMove),this.removeClass("disabled"),this.enabled_=!0)},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseDown(t),this.on(e,"mousemove",this.throttledHandleMouseSeek),this.on(e,"touchmove",this.throttledHandleMouseSeek),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument,i=this.getChild("seekBar");i&&i.handleMouseUp(t),this.off(e,"mousemove",this.throttledHandleMouseSeek),this.off(e,"touchmove",this.throttledHandleMouseSeek),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n}(Xt);an.prototype.options_={children:["seekBar"]},Xt.registerComponent("ProgressControl",an);var on=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"fullscreenchange",i.handleFullscreenChange),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-fullscreen-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleFullscreenChange=function(t){this.player_.isFullscreen()?this.controlText("Non-Fullscreen"):this.controlText("Fullscreen")},n.prototype.handleClick=function(t){this.player_.isFullscreen()?this.player_.exitFullscreen():this.player_.requestFullscreen()},n}(Fr);on.prototype.controlText_="Fullscreen",Xt.registerComponent("FullscreenToggle",on);var un=function(t,e){e.tech_&&!e.tech_.featuresVolumeControl&&t.addClass("vjs-hidden"),t.on(e,"loadstart",function(){e.tech_.featuresVolumeControl?t.removeClass("vjs-hidden"):t.addClass("vjs-hidden")})},ln=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-volume-level",innerHTML:'<span class="vjs-control-text"></span>'})},e}(Xt);Xt.registerComponent("VolumeLevel",ln);var cn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on("slideractive",i.updateLastVolume_),i.on(t,"volumechange",i.updateARIAAttributes),t.ready(function(){return i.updateARIAAttributes()}),i}return _(n,r),n.prototype.createEl=function(){return r.prototype.createEl.call(this,"div",{className:"vjs-volume-bar vjs-slider-bar"},{"aria-label":this.localize("Volume Level"),"aria-live":"polite"})},n.prototype.handleMouseDown=function(t){rt(t)&&r.prototype.handleMouseDown.call(this,t)},n.prototype.handleMouseMove=function(t){rt(t)&&(this.checkMuted(),this.player_.volume(this.calculateDistance(t)))},n.prototype.checkMuted=function(){this.player_.muted()&&this.player_.muted(!1)},n.prototype.getPercent=function(){return this.player_.muted()?0:this.player_.volume()},n.prototype.stepForward=function(){this.checkMuted(),this.player_.volume(this.player_.volume()+.1)},n.prototype.stepBack=function(){this.checkMuted(),this.player_.volume(this.player_.volume()-.1)},n.prototype.updateARIAAttributes=function(t){var e=this.player_.muted()?0:this.volumeAsPercentage_();this.el_.setAttribute("aria-valuenow",e),this.el_.setAttribute("aria-valuetext",e+"%")},n.prototype.volumeAsPercentage_=function(){return Math.round(100*this.player_.volume())},n.prototype.updateLastVolume_=function(){var t=this,e=this.player_.volume();this.one("sliderinactive",function(){0===t.player_.volume()&&t.player_.lastVolume_(e)})},n}(Zr);cn.prototype.options_={children:["volumeLevel"],barName:"volumeLevel"},cn.prototype.playerEvent="volumechange",Xt.registerComponent("VolumeBar",cn);var hn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),e.vertical=e.vertical||!1,("undefined"==typeof e.volumeBar||w(e.volumeBar))&&(e.volumeBar=e.volumeBar||{},e.volumeBar.vertical=e.vertical);var i=b(this,r.call(this,t,e));return un(i,t),i.throttledHandleMouseMove=It(Ot(i,i.handleMouseMove),25),i.on("mousedown",i.handleMouseDown),i.on("touchstart",i.handleMouseDown),i.on(i.volumeBar,["focus","slideractive"],function(){i.volumeBar.addClass("vjs-slider-active"),i.addClass("vjs-slider-active"),i.trigger("slideractive")}),i.on(i.volumeBar,["blur","sliderinactive"],function(){i.volumeBar.removeClass("vjs-slider-active"),i.removeClass("vjs-slider-active"),i.trigger("sliderinactive")}),i}return _(n,r),n.prototype.createEl=function(){var t="vjs-volume-horizontal";return this.options_.vertical&&(t="vjs-volume-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-control vjs-control "+t})},n.prototype.handleMouseDown=function(t){var e=this.el_.ownerDocument;this.on(e,"mousemove",this.throttledHandleMouseMove),this.on(e,"touchmove",this.throttledHandleMouseMove),this.on(e,"mouseup",this.handleMouseUp),this.on(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseUp=function(t){var e=this.el_.ownerDocument;this.off(e,"mousemove",this.throttledHandleMouseMove),this.off(e,"touchmove",this.throttledHandleMouseMove),this.off(e,"mouseup",this.handleMouseUp),this.off(e,"touchend",this.handleMouseUp)},n.prototype.handleMouseMove=function(t){this.volumeBar.handleMouseMove(t)},n}(Xt);hn.prototype.options_={children:["volumeBar"]},Xt.registerComponent("VolumeControl",hn);var dn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return un(i,t),i.on(t,["loadstart","volumechange"],i.update),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-mute-control "+r.prototype.buildCSSClass.call(this)},n.prototype.handleClick=function(t){var e=this.player_.volume(),i=this.player_.lastVolume_();if(0===e){var r=i<.1?.1:i;this.player_.volume(r),this.player_.muted(!1)}else this.player_.muted(!this.player_.muted())},n.prototype.update=function(t){this.updateIcon_(),this.updateControlText_()},n.prototype.updateIcon_=function(){var t=this.player_.volume(),e=3;0===t||this.player_.muted()?e=0:t<.33?e=1:t<.67&&(e=2);for(var i=0;i<4;i++)F(this.el_,"vjs-vol-"+i);j(this.el_,"vjs-vol-"+e)},n.prototype.updateControlText_=function(){var t=this.player_.muted()||0===this.player_.volume()?"Unmute":"Mute";this.controlText()!==t&&this.controlText(t)},n}(Fr);dn.prototype.controlText_="Mute",Xt.registerComponent("MuteToggle",dn);var pn=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n),"undefined"!=typeof e.inline?e.inline=e.inline:e.inline=!0,("undefined"==typeof e.volumeControl||w(e.volumeControl))&&(e.volumeControl=e.volumeControl||{},e.volumeControl.vertical=!e.inline);var i=b(this,r.call(this,t,e));return un(i,t),i.on(i.volumeControl,["slideractive"],i.sliderActive_),i.on(i.volumeControl,["sliderinactive"],i.sliderInactive_),i}return _(n,r),n.prototype.sliderActive_=function(){this.addClass("vjs-slider-active")},n.prototype.sliderInactive_=function(){this.removeClass("vjs-slider-active")},n.prototype.createEl=function(){var t="vjs-volume-panel-horizontal";return this.options_.inline||(t="vjs-volume-panel-vertical"),r.prototype.createEl.call(this,"div",{className:"vjs-volume-panel vjs-control "+t})},n}(Xt);pn.prototype.options_={children:["muteToggle","volumeControl"]},Xt.registerComponent("VolumePanel",pn);var fn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return e&&(i.menuButton_=e.menuButton),i.focusedChild_=-1,i.on("keydown",i.handleKeyPress),i}return _(n,r),n.prototype.addItem=function(e){this.addChild(e),e.on("click",Ot(this,function(t){this.menuButton_&&(this.menuButton_.unpressButton(),"CaptionSettingsMenuItem"!==e.name()&&this.menuButton_.focus())}))},n.prototype.createEl=function(){var t=this.options_.contentElType||"ul";this.contentEl_=M(t,{className:"vjs-menu-content"}),this.contentEl_.setAttribute("role","menu");var e=r.prototype.createEl.call(this,"div",{append:this.contentEl_,className:"vjs-menu"});return e.appendChild(this.contentEl_),_t(e,"click",function(t){t.preventDefault(),t.stopImmediatePropagation()}),e},n.prototype.dispose=function(){this.contentEl_=null,r.prototype.dispose.call(this)},n.prototype.handleKeyPress=function(t){37===t.which||40===t.which?(t.preventDefault(),this.stepForward()):38!==t.which&&39!==t.which||(t.preventDefault(),this.stepBack())},n.prototype.stepForward=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_+1),this.focus(t)},n.prototype.stepBack=function(){var t=0;void 0!==this.focusedChild_&&(t=this.focusedChild_-1),this.focus(t)},n.prototype.focus=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:0,e=this.children().slice();e.length&&e[0].className&&/vjs-menu-title/.test(e[0].className)&&e.shift(),0<e.length&&(t<0?t=0:t>=e.length&&(t=e.length-1),e[this.focusedChild_=t].el_.focus())},n}(Xt);Xt.registerComponent("Menu",fn);var mn=function(n){function s(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,s);var i=b(this,n.call(this,t,e));i.menuButton_=new Fr(t,e),i.menuButton_.controlText(i.controlText_),i.menuButton_.el_.setAttribute("aria-haspopup","true");var r=Fr.prototype.buildCSSClass();return i.menuButton_.el_.className=i.buildCSSClass()+" "+r,i.menuButton_.removeClass("vjs-control"),i.addChild(i.menuButton_),i.update(),i.enabled_=!0,i.on(i.menuButton_,"tap",i.handleClick),i.on(i.menuButton_,"click",i.handleClick),i.on(i.menuButton_,"focus",i.handleFocus),i.on(i.menuButton_,"blur",i.handleBlur),i.on("keydown",i.handleSubmenuKeyPress),i}return _(s,n),s.prototype.update=function(){var t=this.createMenu();this.menu&&(this.menu.dispose(),this.removeChild(this.menu)),this.menu=t,this.addChild(t),this.buttonPressed_=!1,this.menuButton_.el_.setAttribute("aria-expanded","false"),this.items&&this.items.length<=this.hideThreshold_?this.hide():this.show()},s.prototype.createMenu=function(){var t=new fn(this.player_,{menuButton:this});if(this.hideThreshold_=0,this.options_.title){var e=M("li",{className:"vjs-menu-title",innerHTML:zt(this.options_.title),tabIndex:-1});this.hideThreshold_+=1,t.children_.unshift(e),N(e,t.contentEl())}if(this.items=this.createItems(),this.items)for(var i=0;i<this.items.length;i++)t.addItem(this.items[i]);return t},s.prototype.createItems=function(){},s.prototype.createEl=function(){return n.prototype.createEl.call(this,"div",{className:this.buildWrapperCSSClass()},{})},s.prototype.buildWrapperCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+Fr.prototype.buildCSSClass()+" "+n.prototype.buildCSSClass.call(this)},s.prototype.buildCSSClass=function(){var t="vjs-menu-button";return!0===this.options_.inline?t+="-inline":t+="-popup","vjs-menu-button "+t+" "+n.prototype.buildCSSClass.call(this)},s.prototype.controlText=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:this.menuButton_.el();return this.menuButton_.controlText(t,e)},s.prototype.handleClick=function(t){this.one(this.menu.contentEl(),"mouseleave",Ot(this,function(t){this.unpressButton(),this.el_.blur()})),this.buttonPressed_?this.unpressButton():this.pressButton()},s.prototype.focus=function(){this.menuButton_.focus()},s.prototype.blur=function(){this.menuButton_.blur()},s.prototype.handleFocus=function(){_t(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleBlur=function(){bt(p,"keydown",Ot(this,this.handleKeyPress))},s.prototype.handleKeyPress=function(t){27===t.which||9===t.which?(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus())):38!==t.which&&40!==t.which||this.buttonPressed_||(this.pressButton(),t.preventDefault())},s.prototype.handleSubmenuKeyPress=function(t){27!==t.which&&9!==t.which||(this.buttonPressed_&&this.unpressButton(),9!==t.which&&(t.preventDefault(),this.menuButton_.el_.focus()))},s.prototype.pressButton=function(){if(this.enabled_){if(this.buttonPressed_=!0,this.menu.lockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","true"),ne&&D())return;this.menu.focus()}},s.prototype.unpressButton=function(){this.enabled_&&(this.buttonPressed_=!1,this.menu.unlockShowing(),this.menuButton_.el_.setAttribute("aria-expanded","false"))},s.prototype.disable=function(){this.unpressButton(),this.enabled_=!1,this.addClass("vjs-disabled"),this.menuButton_.disable()},s.prototype.enable=function(){this.enabled_=!0,this.removeClass("vjs-disabled"),this.menuButton_.enable()},s}(Xt);Xt.registerComponent("MenuButton",mn);var gn=function(s){function a(t,e){y(this,a);var i=e.tracks,r=b(this,s.call(this,t,e));if(r.items.length<=1&&r.hide(),!i)return b(r);var n=Ot(r,r.update);return i.addEventListener("removetrack",n),i.addEventListener("addtrack",n),r.player_.on("ready",n),r.player_.on("dispose",function(){i.removeEventListener("removetrack",n),i.removeEventListener("addtrack",n)}),r}return _(a,s),a}(mn);Xt.registerComponent("TrackButton",gn);var yn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.selectable=e.selectable,i.isSelected_=e.selected||!1,i.selected(i.isSelected_),i.selectable?i.el_.setAttribute("role","menuitemcheckbox"):i.el_.setAttribute("role","menuitem"),i}return _(n,r),n.prototype.createEl=function(t,e,i){return this.nonIconControl=!0,r.prototype.createEl.call(this,"li",C({className:"vjs-menu-item",innerHTML:'<span class="vjs-menu-item-text">'+this.localize(this.options_.label)+"</span>",tabIndex:-1},e),i)},n.prototype.handleClick=function(t){this.selected(!0)},n.prototype.selected=function(t){this.selectable&&(t?(this.addClass("vjs-selected"),this.el_.setAttribute("aria-checked","true"),this.controlText(", selected"),this.isSelected_=!0):(this.removeClass("vjs-selected"),this.el_.setAttribute("aria-checked","false"),this.controlText(""),this.isSelected_=!1))},n}(xr);Xt.registerComponent("MenuItem",yn);var vn=function(u){function l(t,e){y(this,l);var i=e.track,r=t.textTracks();e.label=i.label||i.language||"Unknown",e.selected="showing"===i.mode;var n=b(this,u.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)},a=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleSelectedLanguageChange.apply(n,e)};if(t.on(["loadstart","texttrackchange"],s),r.addEventListener("change",s),r.addEventListener("selectedlanguagechange",a),n.on("dispose",function(){t.off(["loadstart","texttrackchange"],s),r.removeEventListener("change",s),r.removeEventListener("selectedlanguagechange",a)}),void 0===r.onchange){var o=void 0;n.on(["tap","click"],function(){if("object"!==v(g.Event))try{o=new g.Event("change")}catch(t){}o||(o=p.createEvent("Event")).initEvent("change",!0,!0),r.dispatchEvent(o)})}return n.handleTracksChange(),n}return _(l,u),l.prototype.handleClick=function(t){var e=this.track.kind,i=this.track.kinds,r=this.player_.textTracks();if(i||(i=[e]),u.prototype.handleClick.call(this,t),r)for(var n=0;n<r.length;n++){var s=r[n];s===this.track&&-1<i.indexOf(s.kind)?"showing"!==s.mode&&(s.mode="showing"):"disabled"!==s.mode&&(s.mode="disabled")}},l.prototype.handleTracksChange=function(t){var e="showing"===this.track.mode;e!==this.isSelected_&&this.selected(e)},l.prototype.handleSelectedLanguageChange=function(t){if("showing"===this.track.mode){var e=this.player_.cache_.selectedLanguage;if(e&&e.enabled&&e.language===this.track.language&&e.kind!==this.track.kind)return;this.player_.cache_.selectedLanguage={enabled:!0,language:this.track.language,kind:this.track.kind}}},l.prototype.dispose=function(){this.track=null,u.prototype.dispose.call(this)},l}(yn);Xt.registerComponent("TextTrackMenuItem",vn);var _n=function(i){function r(t,e){return y(this,r),e.track={player:t,kind:e.kind,kinds:e.kinds,default:!1,mode:"disabled"},e.kinds||(e.kinds=[e.kind]),e.label?e.track.label=e.label:e.track.label=e.kinds.join(" and ")+" off",e.selectable=!0,b(this,i.call(this,t,e))}return _(r,i),r.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<this.options_.kinds.indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i!==this.isSelected_&&this.selected(i)},r.prototype.handleSelectedLanguageChange=function(t){for(var e=this.player().textTracks(),i=!0,r=0,n=e.length;r<n;r++){var s=e[r];if(-1<["captions","descriptions","subtitles"].indexOf(s.kind)&&"showing"===s.mode){i=!1;break}}i&&(this.player_.cache_.selectedLanguage={enabled:!1})},r}(vn);Xt.registerComponent("OffTextTrackMenuItem",_n);var bn=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.textTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[],e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:vn,i=void 0;this.label_&&(i=this.label_+" off"),t.push(new _n(this.player_,{kinds:this.kinds_,kind:this.kind_,label:i})),this.hideThreshold_+=1;var r=this.player_.textTracks();Array.isArray(this.kinds_)||(this.kinds_=[this.kind_]);for(var n=0;n<r.length;n++){var s=r[n];if(-1<this.kinds_.indexOf(s.kind)){var a=new e(this.player_,{track:s,selectable:!0});a.addClass("vjs-"+s.kind+"-menu-item"),t.push(a)}}return t},r}(gn);Xt.registerComponent("TextTrackButton",bn);var Tn=function(a){function o(t,e){y(this,o);var i=e.track,r=e.cue,n=t.currentTime();e.selectable=!0,e.label=r.text,e.selected=r.startTime<=n&&n<r.endTime;var s=b(this,a.call(this,t,e));return s.track=i,s.cue=r,i.addEventListener("cuechange",Ot(s,s.update)),s}return _(o,a),o.prototype.handleClick=function(t){a.prototype.handleClick.call(this),this.player_.currentTime(this.cue.startTime),this.update(this.cue.startTime)},o.prototype.update=function(t){var e=this.cue,i=this.player_.currentTime();this.selected(e.startTime<=i&&i<e.endTime)},o}(yn);Xt.registerComponent("ChaptersTrackMenuItem",Tn);var Sn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-chapters-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.update=function(t){this.track_&&(!t||"addtrack"!==t.type&&"removetrack"!==t.type)||this.setTrack(this.findChaptersTrack()),r.prototype.update.call(this)},n.prototype.setTrack=function(t){if(this.track_!==t){if(this.updateHandler_||(this.updateHandler_=this.update.bind(this)),this.track_){var e=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);e&&e.removeEventListener("load",this.updateHandler_),this.track_=null}if(this.track_=t,this.track_){this.track_.mode="hidden";var i=this.player_.remoteTextTrackEls().getTrackElementByTrack_(this.track_);i&&i.addEventListener("load",this.updateHandler_)}}},n.prototype.findChaptersTrack=function(){for(var t=this.player_.textTracks()||[],e=t.length-1;0<=e;e--){var i=t[e];if(i.kind===this.kind_)return i}},n.prototype.getMenuCaption=function(){return this.track_&&this.track_.label?this.track_.label:this.localize(zt(this.kind_))},n.prototype.createMenu=function(){return this.options_.title=this.getMenuCaption(),r.prototype.createMenu.call(this)},n.prototype.createItems=function(){var t=[];if(!this.track_)return t;var e=this.track_.cues;if(!e)return t;for(var i=0,r=e.length;i<r;i++){var n=e[i],s=new Tn(this.player_,{track:this.track_,cue:n});t.push(s)}return t},n}(bn);Sn.prototype.kind_="chapters",Sn.prototype.controlText_="Chapters",Xt.registerComponent("ChaptersButton",Sn);var kn=function(a){function o(t,e,i){y(this,o);var r=b(this,a.call(this,t,e,i)),n=t.textTracks(),s=Ot(r,r.handleTracksChange);return n.addEventListener("change",s),r.on("dispose",function(){n.removeEventListener("change",s)}),r}return _(o,a),o.prototype.handleTracksChange=function(t){for(var e=this.player().textTracks(),i=!1,r=0,n=e.length;r<n;r++){var s=e[r];if(s.kind!==this.kind_&&"showing"===s.mode){i=!0;break}}i?this.disable():this.enable()},o.prototype.buildCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildCSSClass.call(this)},o.prototype.buildWrapperCSSClass=function(){return"vjs-descriptions-button "+a.prototype.buildWrapperCSSClass.call(this)},o}(bn);kn.prototype.kind_="descriptions",kn.prototype.controlText_="Descriptions",Xt.registerComponent("DescriptionsButton",kn);var Cn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subtitles-button "+r.prototype.buildWrapperCSSClass.call(this)},n}(bn);Cn.prototype.kind_="subtitles",Cn.prototype.controlText_="Subtitles",Xt.registerComponent("SubtitlesButton",Cn);var En=function(r){function n(t,e){y(this,n),e.track={player:t,kind:e.kind,label:e.kind+" settings",selectable:!1,default:!1,mode:"disabled"},e.selectable=!1,e.name="CaptionSettingsMenuItem";var i=b(this,r.call(this,t,e));return i.addClass("vjs-texttrack-settings"),i.controlText(", opens "+e.kind+" settings dialog"),i}return _(n,r),n.prototype.handleClick=function(t){this.player().getChild("textTrackSettings").open()},n}(vn);Xt.registerComponent("CaptionSettingsMenuItem",En);var wn=function(r){function n(t,e,i){return y(this,n),b(this,r.call(this,t,e,i))}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-captions-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-captions-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new En(this.player_,{kind:this.kind_})),this.hideThreshold_+=1),r.prototype.createItems.call(this,t)},n}(bn);wn.prototype.kind_="captions",wn.prototype.controlText_="Captions",Xt.registerComponent("CaptionsButton",wn);var An=function(n){function t(){return y(this,t),b(this,n.apply(this,arguments))}return _(t,n),t.prototype.createEl=function(t,e,i){var r='<span class="vjs-menu-item-text">'+this.localize(this.options_.label);return"captions"===this.options_.track.kind&&(r+='\n        <span aria-hidden="true" class="vjs-icon-placeholder"></span>\n        <span class="vjs-control-text"> '+this.localize("Captions")+"</span>\n      "),r+="</span>",n.prototype.createEl.call(this,t,C({innerHTML:r},e),i)},t}(vn);Xt.registerComponent("SubsCapsMenuItem",An);var Ln=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.label_="subtitles",-1<["en","en-us","en-ca","fr-ca"].indexOf(i.player_.language_)&&(i.label_="captions"),i.menuButton_.controlText(zt(i.label_)),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-subs-caps-button "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createItems=function(){var t=[];return this.player().tech_&&this.player().tech_.featuresNativeTextTracks||!this.player().getChild("textTrackSettings")||(t.push(new En(this.player_,{kind:this.label_})),this.hideThreshold_+=1),t=r.prototype.createItems.call(this,t,An)},n}(bn);Ln.prototype.kinds_=["captions","subtitles"],Ln.prototype.controlText_="Subtitles",Xt.registerComponent("SubsCapsButton",Ln);var Pn=function(a){function o(t,e){y(this,o);var i=e.track,r=t.audioTracks();e.label=i.label||i.language||"Unknown",e.selected=i.enabled;var n=b(this,a.call(this,t,e));n.track=i;var s=function(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];n.handleTracksChange.apply(n,e)};return r.addEventListener("change",s),n.on("dispose",function(){r.removeEventListener("change",s)}),n}return _(o,a),o.prototype.handleClick=function(t){var e=this.player_.audioTracks();a.prototype.handleClick.call(this,t);for(var i=0;i<e.length;i++){var r=e[i];r.enabled=r===this.track}},o.prototype.handleTracksChange=function(t){this.selected(this.track.enabled)},o}(yn);Xt.registerComponent("AudioTrackMenuItem",Pn);var On=function(i){function r(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return y(this,r),e.tracks=t.audioTracks(),b(this,i.call(this,t,e))}return _(r,i),r.prototype.buildCSSClass=function(){return"vjs-audio-button "+i.prototype.buildCSSClass.call(this)},r.prototype.buildWrapperCSSClass=function(){return"vjs-audio-button "+i.prototype.buildWrapperCSSClass.call(this)},r.prototype.createItems=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:[];this.hideThreshold_=1;for(var e=this.player_.audioTracks(),i=0;i<e.length;i++){var r=e[i];t.push(new Pn(this.player_,{track:r,selectable:!0}))}return t},r}(gn);On.prototype.controlText_="Audio Track",Xt.registerComponent("AudioTrackButton",On);var In=function(s){function a(t,e){y(this,a);var i=e.rate,r=parseFloat(i,10);e.label=i,e.selected=1===r,e.selectable=!0;var n=b(this,s.call(this,t,e));return n.label=i,n.rate=r,n.on(t,"ratechange",n.update),n}return _(a,s),a.prototype.handleClick=function(t){s.prototype.handleClick.call(this),this.player().playbackRate(this.rate)},a.prototype.update=function(t){this.selected(this.player().playbackRate()===this.rate)},a}(yn);In.prototype.contentElType="button",Xt.registerComponent("PlaybackRateMenuItem",In);var xn=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.updateVisibility(),i.updateLabel(),i.on(t,"loadstart",i.updateVisibility),i.on(t,"ratechange",i.updateLabel),i}return _(n,r),n.prototype.createEl=function(){var t=r.prototype.createEl.call(this);return this.labelEl_=M("div",{className:"vjs-playback-rate-value",innerHTML:"1x"}),t.appendChild(this.labelEl_),t},n.prototype.dispose=function(){this.labelEl_=null,r.prototype.dispose.call(this)},n.prototype.buildCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildCSSClass.call(this)},n.prototype.buildWrapperCSSClass=function(){return"vjs-playback-rate "+r.prototype.buildWrapperCSSClass.call(this)},n.prototype.createMenu=function(){var t=new fn(this.player()),e=this.playbackRates();if(e)for(var i=e.length-1;0<=i;i--)t.addChild(new In(this.player(),{rate:e[i]+"x"}));return t},n.prototype.updateARIAAttributes=function(){this.el().setAttribute("aria-valuenow",this.player().playbackRate())},n.prototype.handleClick=function(t){for(var e=this.player().playbackRate(),i=this.playbackRates(),r=i[0],n=0;n<i.length;n++)if(i[n]>e){r=i[n];break}this.player().playbackRate(r)},n.prototype.playbackRates=function(){return this.options_.playbackRates||this.options_.playerOptions&&this.options_.playerOptions.playbackRates},n.prototype.playbackRateSupported=function(){return this.player().tech_&&this.player().tech_.featuresPlaybackRate&&this.playbackRates()&&0<this.playbackRates().length},n.prototype.updateVisibility=function(t){this.playbackRateSupported()?this.removeClass("vjs-hidden"):this.addClass("vjs-hidden")},n.prototype.updateLabel=function(t){this.playbackRateSupported()&&(this.labelEl_.innerHTML=this.player().playbackRate()+"x")},n}(mn);xn.prototype.controlText_="Playback Rate",Xt.registerComponent("PlaybackRateMenuButton",xn);var Dn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.buildCSSClass=function(){return"vjs-spacer "+t.prototype.buildCSSClass.call(this)},e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:this.buildCSSClass()})},e}(Xt);Xt.registerComponent("Spacer",Dn);var Rn=function(e){function t(){return y(this,t),b(this,e.apply(this,arguments))}return _(t,e),t.prototype.buildCSSClass=function(){return"vjs-custom-control-spacer "+e.prototype.buildCSSClass.call(this)},t.prototype.createEl=function(){var t=e.prototype.createEl.call(this,{className:this.buildCSSClass()});return t.innerHTML=" ",t},t}(Dn);Xt.registerComponent("CustomControlSpacer",Rn);var Mn=function(t){function e(){return y(this,e),b(this,t.apply(this,arguments))}return _(e,t),e.prototype.createEl=function(){return t.prototype.createEl.call(this,"div",{className:"vjs-control-bar",dir:"ltr"},{role:"group"})},e}(Xt);Mn.prototype.options_={children:["playToggle","volumePanel","currentTimeDisplay","timeDivider","durationDisplay","progressControl","liveDisplay","remainingTimeDisplay","customControlSpacer","playbackRateMenuButton","chaptersButton","descriptionsButton","subsCapsButton","audioTrackButton","fullscreenToggle"]},Xt.registerComponent("ControlBar",Mn);var Un=function(r){function n(t,e){y(this,n);var i=b(this,r.call(this,t,e));return i.on(t,"error",i.open),i}return _(n,r),n.prototype.buildCSSClass=function(){return"vjs-error-display "+r.prototype.buildCSSClass.call(this)},n.prototype.content=function(){var t=this.player().error();return t?this.localize(t.message):""},n}(Ne);Un.prototype.options_=Gt(Ne.prototype.options_,{pauseOnOpen:!1,fillAlways:!0,temporary:!1,uncloseable:!0}),Xt.registerComponent("ErrorDisplay",Un);var Nn="vjs-text-track-settings",Bn=["#000","Black"],jn=["#00F","Blue"],Fn=["#0FF","Cyan"],Hn=["#0F0","Green"],Vn=["#F0F","Magenta"],qn=["#F00","Red"],Wn=["#FFF","White"],zn=["#FF0","Yellow"],Gn=["1","Opaque"],Xn=["0.5","Semi-Transparent"],Yn=["0","Transparent"],$n={backgroundColor:{selector:".vjs-bg-color > select",id:"captions-background-color-%s",label:"Color",options:[Bn,Wn,qn,Hn,jn,zn,Vn,Fn]},backgroundOpacity:{selector:".vjs-bg-opacity > select",id:"captions-background-opacity-%s",label:"Transparency",options:[Gn,Xn,Yn]},color:{selector:".vjs-fg-color > select",id:"captions-foreground-color-%s",label:"Color",options:[Wn,Bn,qn,Hn,jn,zn,Vn,Fn]},edgeStyle:{selector:".vjs-edge-style > select",id:"%s",label:"Text Edge Style",options:[["none","None"],["raised","Raised"],["depressed","Depressed"],["uniform","Uniform"],["dropshadow","Dropshadow"]]},fontFamily:{selector:".vjs-font-family > select",id:"captions-font-family-%s",label:"Font Family",options:[["proportionalSansSerif","Proportional Sans-Serif"],["monospaceSansSerif","Monospace Sans-Serif"],["proportionalSerif","Proportional Serif"],["monospaceSerif","Monospace Serif"],["casual","Casual"],["script","Script"],["small-caps","Small Caps"]]},fontPercent:{selector:".vjs-font-percent > select",id:"captions-font-size-%s",label:"Font Size",options:[["0.50","50%"],["0.75","75%"],["1.00","100%"],["1.25","125%"],["1.50","150%"],["1.75","175%"],["2.00","200%"],["3.00","300%"],["4.00","400%"]],default:2,parser:function(t){return"1.00"===t?null:Number(t)}},textOpacity:{selector:".vjs-text-opacity > select",id:"captions-foreground-opacity-%s",label:"Transparency",options:[Gn,Xn]},windowColor:{selector:".vjs-window-color > select",id:"captions-window-color-%s",label:"Color"},windowOpacity:{selector:".vjs-window-opacity > select",id:"captions-window-opacity-%s",label:"Transparency",options:[Yn,Xn,Gn]}};function Kn(t,e){if(e&&(t=e(t)),t&&"none"!==t)return t}$n.windowColor.options=$n.backgroundColor.options;var Qn=function(r){function n(t,e){y(this,n),e.temporary=!1;var i=b(this,r.call(this,t,e));return i.updateDisplay=Ot(i,i.updateDisplay),i.fill(),i.hasBeenOpened_=i.hasBeenFilled_=!0,i.endDialog=M("p",{className:"vjs-control-text",textContent:i.localize("End of dialog window.")}),i.el().appendChild(i.endDialog),i.setDefaults(),void 0===e.persistTextTrackSettings&&(i.options_.persistTextTrackSettings=i.options_.playerOptions.persistTextTrackSettings),i.on(i.$(".vjs-done-button"),"click",function(){i.saveSettings(),i.close()}),i.on(i.$(".vjs-default-button"),"click",function(){i.setDefaults(),i.updateDisplay()}),k($n,function(t){i.on(i.$(t.selector),"change",i.updateDisplay)}),i.options_.persistTextTrackSettings&&i.restoreSettings(),i}return _(n,r),n.prototype.dispose=function(){this.endDialog=null,r.prototype.dispose.call(this)},n.prototype.createElSelect_=function(t){var i=this,r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:"",e=2<arguments.length&&void 0!==arguments[2]?arguments[2]:"label",n=$n[t],s=n.id.replace("%s",this.id_);return["<"+e+' id="'+s+'" class="'+("label"===e?"vjs-label":"")+'">',this.localize(n.label),"</"+e+">",'<select aria-labelledby="'+(""!==r?r+" ":"")+s+'">'].concat(n.options.map(function(t){var e=s+"-"+t[1];return['<option id="'+e+'" value="'+t[0]+'" ','aria-labelledby="'+(""!==r?r+" ":"")+s+" "+e+'">',i.localize(t[1]),"</option>"].join("")})).concat("</select>").join("")},n.prototype.createElFgColor_=function(){var t="captions-text-legend-"+this.id_;return['<fieldset class="vjs-fg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Text"),"</legend>",this.createElSelect_("color",t),'<span class="vjs-text-opacity vjs-opacity">',this.createElSelect_("textOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElBgColor_=function(){var t="captions-background-"+this.id_;return['<fieldset class="vjs-bg-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Background"),"</legend>",this.createElSelect_("backgroundColor",t),'<span class="vjs-bg-opacity vjs-opacity">',this.createElSelect_("backgroundOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElWinColor_=function(){var t="captions-window-"+this.id_;return['<fieldset class="vjs-window-color vjs-track-setting">','<legend id="'+t+'">',this.localize("Window"),"</legend>",this.createElSelect_("windowColor",t),'<span class="vjs-window-opacity vjs-opacity">',this.createElSelect_("windowOpacity",t),"</span>","</fieldset>"].join("")},n.prototype.createElColors_=function(){return M("div",{className:"vjs-track-settings-colors",innerHTML:[this.createElFgColor_(),this.createElBgColor_(),this.createElWinColor_()].join("")})},n.prototype.createElFont_=function(){return M("div",{className:"vjs-track-settings-font",innerHTML:['<fieldset class="vjs-font-percent vjs-track-setting">',this.createElSelect_("fontPercent","","legend"),"</fieldset>",'<fieldset class="vjs-edge-style vjs-track-setting">',this.createElSelect_("edgeStyle","","legend"),"</fieldset>",'<fieldset class="vjs-font-family vjs-track-setting">',this.createElSelect_("fontFamily","","legend"),"</fieldset>"].join("")})},n.prototype.createElControls_=function(){var t=this.localize("restore all settings to the default values");return M("div",{className:"vjs-track-settings-controls",innerHTML:['<button class="vjs-default-button" title="'+t+'">',this.localize("Reset"),'<span class="vjs-control-text"> '+t+"</span>","</button>",'<button class="vjs-done-button">'+this.localize("Done")+"</button>"].join("")})},n.prototype.content=function(){return[this.createElColors_(),this.createElFont_(),this.createElControls_()]},n.prototype.label=function(){return this.localize("Caption Settings Dialog")},n.prototype.description=function(){return this.localize("Beginning of dialog window. Escape will cancel and close the window.")},n.prototype.buildCSSClass=function(){return r.prototype.buildCSSClass.call(this)+" vjs-text-track-settings"},n.prototype.getValues=function(){var a=this;return function(i,r){var t=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;return S(i).reduce(function(t,e){return r(t,i[e],e)},t)}($n,function(t,e,i){var r,n,s=(r=a.$(e.selector),n=e.parser,Kn(r.options[r.options.selectedIndex].value,n));return void 0!==s&&(t[i]=s),t},{})},n.prototype.setValues=function(i){var r=this;k($n,function(t,e){!function(t,e,i){if(e)for(var r=0;r<t.options.length;r++)if(Kn(t.options[r].value,i)===e){t.selectedIndex=r;break}}(r.$(t.selector),i[e],t.parser)})},n.prototype.setDefaults=function(){var i=this;k($n,function(t){var e=t.hasOwnProperty("default")?t.default:0;i.$(t.selector).selectedIndex=e})},n.prototype.restoreSettings=function(){var t=void 0;try{t=JSON.parse(g.localStorage.getItem(Nn))}catch(t){f.warn(t)}t&&this.setValues(t)},n.prototype.saveSettings=function(){if(this.options_.persistTextTrackSettings){var t=this.getValues();try{Object.keys(t).length?g.localStorage.setItem(Nn,JSON.stringify(t)):g.localStorage.removeItem(Nn)}catch(t){f.warn(t)}}},n.prototype.updateDisplay=function(){var t=this.player_.getChild("textTrackDisplay");t&&t.updateDisplay()},n.prototype.conditionalBlur_=function(){this.previouslyActiveEl_=null,this.off(p,"keydown",this.handleKeyDown);var t=this.player_.controlBar,e=t&&t.subsCapsButton,i=t&&t.captionsButton;e?e.focus():i&&i.focus()},n}(Ne);Xt.registerComponent("TextTrackSettings",Qn);var Jn=function(s){function a(t,e){y(this,a);var i=e.ResizeObserver||g.ResizeObserver;null===e.ResizeObserver&&(i=!1);var r=Gt({createEl:!i},e),n=b(this,s.call(this,t,r));return n.ResizeObserver=e.ResizeObserver||g.ResizeObserver,n.loadListener_=null,n.resizeObserver_=null,n.debouncedHandler_=xt(function(){n.resizeHandler()},100,!1,t),i?(n.resizeObserver_=new n.ResizeObserver(n.debouncedHandler_),n.resizeObserver_.observe(t.el())):(n.loadListener_=function(){n.el_.contentWindow&&_t(n.el_.contentWindow,"resize",n.debouncedHandler_),n.off("load",n.loadListener_)},n.on("load",n.loadListener_)),n}return _(a,s),a.prototype.createEl=function(){return s.prototype.createEl.call(this,"iframe",{className:"vjs-resize-manager"})},a.prototype.resizeHandler=function(){this.player_.trigger("playerresize")},a.prototype.dispose=function(){this.resizeObserver_&&(this.resizeObserver_.unobserve(this.player_.el()),this.resizeObserver_.disconnect()),this.el_&&this.el_.contentWindow&&bt(this.el_.contentWindow,"resize",this.debouncedHandler_),this.loadListener_&&this.off("load",this.loadListener_),this.ResizeObserver=null,this.resizeObserver=null,this.debouncedHandler_=null,this.loadListener_=null},a}(Xt);Xt.registerComponent("ResizeManager",Jn);var Zn=function(t){var e=t.el();if(e.src)return t.triggerSourceset(e.src),!0;var i=t.$$("source"),r=[],n="";if(!i.length)return!1;for(var s=0;s<i.length;s++){var a=i[s].src;a&&-1===r.indexOf(a)&&r.push(a)}return r.length?(1===r.length&&(n=r[0]),t.triggerSourceset(n),!0):void 0},ts=function(i){var r=i.el();if(!r.firstSourceWatch_){r.firstSourceWatch_=!0;var n,t,e,s=r.append,a=r.appendChild,o=r.insertAdjacentHTML,u=(n=r,t=g.Element.prototype,e={},Object.getOwnPropertyDescriptor(n,"innerHTML")?e=Object.getOwnPropertyDescriptor(n,"innerHTML"):Object.getOwnPropertyDescriptor(t,"innerHTML")&&(e=Object.getOwnPropertyDescriptor(t,"innerHTML")),e.get||(e.get=function(){return n.cloneNode().innerHTML}),e.set||(e.set=function(t){n.innerText="";var e=p.createElement(n.nodeName.toLowerCase());e.innerHTML=t;for(var i=p.createDocumentFragment();e.childNodes.length;)i.appendChild(e.childNodes[0]);return g.Element.prototype.appendChild.call(n,i),n.innerHTML}),"undefined"==typeof e.enumerable&&(e.enumerable=!0),e.configurable=!0,e);r.appendChild=function(){var t=a.apply(r,arguments);return Zn(i),t},s&&(r.append=function(){var t=s.apply(r,arguments);return Zn(i),t}),o&&(r.insertAdjacentHTML=function(){var t=o.apply(r,arguments);return Zn(i),t}),Object.defineProperty(r,"innerHTML",{get:u.get.bind(r),set:function(t){var e=u.set.call(r,t);return Zn(i),e},configurable:!0,enumerable:u.enumerable}),i.one("sourceset",function(t){r.firstSourceWatch_=!1,r.appendChild=a,s&&(r.append=s),o&&(r.insertAdjacentHTML=o),Object.defineProperty(r,"innerHTML",u)})}},es=function(r){if(r.featuresSourceset){var n=r.el();if(!n.setupSourceset_){n.setupSourceset_=!0;var e,i,t,s=(e=n,i=g.HTMLMediaElement.prototype,t={},Object.getOwnPropertyDescriptor(e,"src")?t=Object.getOwnPropertyDescriptor(e,"src"):Object.getOwnPropertyDescriptor(i,"src")&&(t=Gt(t,Object.getOwnPropertyDescriptor(i,"src"))),t.get||(t.get=function(){return i.getAttribute.call(e,"src")}),t.set||(t.set=function(t){return i.setAttribute.call(e,"src",t)}),"undefined"==typeof t.enumerable&&(t.enumerable=!0),t.configurable=!0,t),a=n.setAttribute,o=n.load;(n.src||n.currentSrc&&3!==n.initNetworkState_)&&(n.currentSrc?r.triggerSourceset(n.currentSrc):Zn(r)),n.src||n.currentSrc||r.$$("source").length||ts(r),Object.defineProperty(n,"src",{get:s.get.bind(n),set:function(t){var e=s.set.call(n,t);return r.triggerSourceset(n.src),e},configurable:!0,enumerable:s.enumerable}),n.setAttribute=function(t,e){var i=a.call(n,t,e);return"src"===t&&r.triggerSourceset(n.getAttribute("src")),i},n.load=function(){var t=o.call(n);return Zn(r)||ts(r),t}}}},is=h(["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."],["Text Tracks are being loaded from another origin but the crossorigin attribute isn't used.\n            This may prevent text tracks from loading."]),rs=function(c){function h(t,e){y(this,h);var i=b(this,c.call(this,t,e));t.enableSourceset&&i.setupSourcesetHandling_();var r=t.source,n=!1;if(r&&(i.el_.currentSrc!==r.src||t.tag&&3===t.tag.initNetworkState_)?i.setSource(r):i.handleLateInit_(i.el_),i.el_.hasChildNodes()){for(var s=i.el_.childNodes,a=s.length,o=[];a--;){var u=s[a];"track"===u.nodeName.toLowerCase()&&(i.featuresNativeTextTracks?(i.remoteTextTrackEls().addTrackElement_(u),i.remoteTextTracks().addTrack(u.track),i.textTracks().addTrack(u.track),n||i.el_.hasAttribute("crossorigin")||!ti(u.src)||(n=!0)):o.push(u))}for(var l=0;l<o.length;l++)i.el_.removeChild(o[l])}return i.proxyNativeTracks_(),i.featuresNativeTextTracks&&n&&f.warn(m(is)),i.restoreMetadataTracksInIOSNativePlayer_(),(ge||ie||ue)&&!0===t.nativeControlsForTouch&&i.setControls(!0),i.proxyWebkitFullscreen_(),i.triggerReady(),i}return _(h,c),h.prototype.dispose=function(){h.disposeMediaElement(this.el_),this.options_=null,c.prototype.dispose.call(this)},h.prototype.setupSourcesetHandling_=function(){es(this)},h.prototype.restoreMetadataTracksInIOSNativePlayer_=function(){var r=this.textTracks(),n=void 0,t=function(){n=[];for(var t=0;t<r.length;t++){var e=r[t];"metadata"===e.kind&&n.push({track:e,storedMode:e.mode})}};t(),r.addEventListener("change",t),this.on("dispose",function(){return r.removeEventListener("change",t)});var e=function t(){for(var e=0;e<n.length;e++){var i=n[e];"disabled"===i.track.mode&&i.track.mode!==i.storedMode&&(i.track.mode=i.storedMode)}r.removeEventListener("change",t)};this.on("webkitbeginfullscreen",function(){r.removeEventListener("change",t),r.removeEventListener("change",e),r.addEventListener("change",e)}),this.on("webkitendfullscreen",function(){r.removeEventListener("change",t),r.addEventListener("change",t),r.removeEventListener("change",e)})},h.prototype.overrideNative_=function(t,e){var i=this;if(e===this["featuresNative"+t+"Tracks"]){var r=t.toLowerCase();this[r+"TracksListeners_"]&&Object.keys(this[r+"TracksListeners_"]).forEach(function(t){i.el()[r+"Tracks"].removeEventListener(t,i[r+"TracksListeners_"][t])}),this["featuresNative"+t+"Tracks"]=!e,this[r+"TracksListeners_"]=null,this.proxyNativeTracksForType_(r)}},h.prototype.overrideNativeAudioTracks=function(t){this.overrideNative_("Audio",t)},h.prototype.overrideNativeVideoTracks=function(t){this.overrideNative_("Video",t)},h.prototype.proxyNativeTracksForType_=function(t){var r=this,e=Mi[t],n=this.el()[e.getterName],s=this[e.getterName]();if(this["featuresNative"+e.capitalName+"Tracks"]&&n&&n.addEventListener){var a={change:function(t){s.trigger({type:"change",target:s,currentTarget:s,srcElement:s})},addtrack:function(t){s.addTrack(t.track)},removetrack:function(t){s.removeTrack(t.track)}},i=function(){for(var t=[],e=0;e<s.length;e++){for(var i=!1,r=0;r<n.length;r++)if(n[r]===s[e]){i=!0;break}i||t.push(s[e])}for(;t.length;)s.removeTrack(t.shift())};this[e.getterName+"Listeners_"]=a,Object.keys(a).forEach(function(e){var i=a[e];n.addEventListener(e,i),r.on("dispose",function(t){return n.removeEventListener(e,i)})}),this.on("loadstart",i),this.on("dispose",function(t){return r.off("loadstart",i)})}},h.prototype.proxyNativeTracks_=function(){var e=this;Mi.names.forEach(function(t){e.proxyNativeTracksForType_(t)})},h.prototype.createEl=function(){var t=this.options_.tag;if(!t||!this.options_.playerElIngest&&!this.movingMediaElementInDOM){if(t){var e=t.cloneNode(!0);t.parentNode&&t.parentNode.insertBefore(e,t),h.disposeMediaElement(t),t=e}else{t=p.createElement("video");var i=Gt({},this.options_.tag&&q(this.options_.tag));ge&&!0===this.options_.nativeControlsForTouch||delete i.controls,V(t,C(i,{id:this.options_.techId,class:"vjs-tech"}))}t.playerId=this.options_.playerId}"undefined"!=typeof this.options_.preload&&z(t,"preload",this.options_.preload);for(var r=["loop","muted","playsinline","autoplay"],n=0;n<r.length;n++){var s=r[n],a=this.options_[s];"undefined"!=typeof a&&(a?z(t,s,s):G(t,s),t[s]=a)}return t},h.prototype.handleLateInit_=function(t){if(0!==t.networkState&&3!==t.networkState){if(0===t.readyState){var e=!1,i=function(){e=!0};this.on("loadstart",i);var r=function(){e||this.trigger("loadstart")};return this.on("loadedmetadata",r),void this.ready(function(){this.off("loadstart",i),this.off("loadedmetadata",r),e||this.trigger("loadstart")})}var n=["loadstart"];n.push("loadedmetadata"),2<=t.readyState&&n.push("loadeddata"),3<=t.readyState&&n.push("canplay"),4<=t.readyState&&n.push("canplaythrough"),this.ready(function(){n.forEach(function(t){this.trigger(t)},this)})}},h.prototype.setCurrentTime=function(t){try{this.el_.currentTime=t}catch(t){f(t,"Video is not ready. (Video.js)")}},h.prototype.duration=function(){var e=this;if(this.el_.duration===1/0&&ae&&he&&0===this.el_.currentTime){return this.on("timeupdate",function t(){0<e.el_.currentTime&&(e.el_.duration===1/0&&e.trigger("durationchange"),e.off("timeupdate",t))}),NaN}return this.el_.duration||NaN},h.prototype.width=function(){return this.el_.offsetWidth},h.prototype.height=function(){return this.el_.offsetHeight},h.prototype.proxyWebkitFullscreen_=function(){var t=this;if("webkitDisplayingFullscreen"in this.el_){var e=function(){this.trigger("fullscreenchange",{isFullscreen:!1})},i=function(){"webkitPresentationMode"in this.el_&&"picture-in-picture"!==this.el_.webkitPresentationMode&&(this.one("webkitendfullscreen",e),this.trigger("fullscreenchange",{isFullscreen:!0}))};this.on("webkitbeginfullscreen",i),this.on("dispose",function(){t.off("webkitbeginfullscreen",i),t.off("webkitendfullscreen",e)})}},h.prototype.supportsFullScreen=function(){if("function"==typeof this.el_.webkitEnterFullScreen){var t=g.navigator&&g.navigator.userAgent||"";if(/Android/.test(t)||!/Chrome|Mac OS X 10.5/.test(t))return!0}return!1},h.prototype.enterFullScreen=function(){var t=this.el_;t.paused&&t.networkState<=t.HAVE_METADATA?(this.el_.play(),this.setTimeout(function(){t.pause(),t.webkitEnterFullScreen()},0)):t.webkitEnterFullScreen()},h.prototype.exitFullScreen=function(){this.el_.webkitExitFullScreen()},h.prototype.src=function(t){if(void 0===t)return this.el_.src;this.setSrc(t)},h.prototype.reset=function(){h.resetMediaElement(this.el_)},h.prototype.currentSrc=function(){return this.currentSource_?this.currentSource_.src:this.el_.currentSrc},h.prototype.setControls=function(t){this.el_.controls=!!t},h.prototype.addTextTrack=function(t,e,i){return this.featuresNativeTextTracks?this.el_.addTextTrack(t,e,i):c.prototype.addTextTrack.call(this,t,e,i)},h.prototype.createRemoteTextTrack=function(t){if(!this.featuresNativeTextTracks)return c.prototype.createRemoteTextTrack.call(this,t);var e=p.createElement("track");return t.kind&&(e.kind=t.kind),t.label&&(e.label=t.label),(t.language||t.srclang)&&(e.srclang=t.language||t.srclang),t.default&&(e.default=t.default),t.id&&(e.id=t.id),t.src&&(e.src=t.src),e},h.prototype.addRemoteTextTrack=function(t,e){var i=c.prototype.addRemoteTextTrack.call(this,t,e);return this.featuresNativeTextTracks&&this.el().appendChild(i),i},h.prototype.removeRemoteTextTrack=function(t){if(c.prototype.removeRemoteTextTrack.call(this,t),this.featuresNativeTextTracks)for(var e=this.$$("track"),i=e.length;i--;)t!==e[i]&&t!==e[i].track||this.el().removeChild(e[i])},h.prototype.getVideoPlaybackQuality=function(){if("function"==typeof this.el().getVideoPlaybackQuality)return this.el().getVideoPlaybackQuality();var t={};return"undefined"!=typeof this.el().webkitDroppedFrameCount&&"undefined"!=typeof this.el().webkitDecodedFrameCount&&(t.droppedVideoFrames=this.el().webkitDroppedFrameCount,t.totalVideoFrames=this.el().webkitDecodedFrameCount),g.performance&&"function"==typeof g.performance.now?t.creationTime=g.performance.now():g.performance&&g.performance.timing&&"number"==typeof g.performance.timing.navigationStart&&(t.creationTime=g.Date.now()-g.performance.timing.navigationStart),t},h}(_r);if(I()){rs.TEST_VID=p.createElement("video");var ns=p.createElement("track");ns.kind="captions",ns.srclang="en",ns.label="English",rs.TEST_VID.appendChild(ns)}rs.isSupported=function(){try{rs.TEST_VID.volume=.5}catch(t){return!1}return!(!rs.TEST_VID||!rs.TEST_VID.canPlayType)},rs.canPlayType=function(t){return rs.TEST_VID.canPlayType(t)},rs.canPlaySource=function(t,e){return rs.canPlayType(t.type)},rs.canControlVolume=function(){try{var t=rs.TEST_VID.volume;return rs.TEST_VID.volume=t/2+.1,t!==rs.TEST_VID.volume}catch(t){return!1}},rs.canControlPlaybackRate=function(){if(ae&&he&&de<58)return!1;try{var t=rs.TEST_VID.playbackRate;return rs.TEST_VID.playbackRate=t/2+.1,t!==rs.TEST_VID.playbackRate}catch(t){return!1}},rs.canOverrideAttributes=function(){try{var t=function(){};Object.defineProperty(p.createElement("video"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"src",{get:t,set:t}),Object.defineProperty(p.createElement("video"),"innerHTML",{get:t,set:t}),Object.defineProperty(p.createElement("audio"),"innerHTML",{get:t,set:t})}catch(t){return!1}return!0},rs.supportsNativeTextTracks=function(){return me},rs.supportsNativeVideoTracks=function(){return!(!rs.TEST_VID||!rs.TEST_VID.videoTracks)},rs.supportsNativeAudioTracks=function(){return!(!rs.TEST_VID||!rs.TEST_VID.audioTracks)},rs.Events=["loadstart","suspend","abort","error","emptied","stalled","loadedmetadata","loadeddata","canplay","canplaythrough","playing","waiting","seeking","seeked","ended","durationchange","timeupdate","progress","play","pause","ratechange","resize","volumechange"],rs.prototype.featuresVolumeControl=rs.canControlVolume(),rs.prototype.featuresPlaybackRate=rs.canControlPlaybackRate(),rs.prototype.featuresSourceset=rs.canOverrideAttributes(),rs.prototype.movingMediaElementInDOM=!ne,rs.prototype.featuresFullscreenResize=!0,rs.prototype.featuresProgressEvents=!0,rs.prototype.featuresTimeupdateEvents=!0,rs.prototype.featuresNativeTextTracks=rs.supportsNativeTextTracks(),rs.prototype.featuresNativeVideoTracks=rs.supportsNativeVideoTracks(),rs.prototype.featuresNativeAudioTracks=rs.supportsNativeAudioTracks();var ss=rs.TEST_VID&&rs.TEST_VID.constructor.prototype.canPlayType,as=/^application\/(?:x-|vnd\.apple\.)mpegurl/i;rs.patchCanPlayType=function(){4<=oe&&!le&&!he&&(rs.TEST_VID.constructor.prototype.canPlayType=function(t){return t&&as.test(t)?"maybe":ss.call(this,t)})},rs.unpatchCanPlayType=function(){var t=rs.TEST_VID.constructor.prototype.canPlayType;return rs.TEST_VID.constructor.prototype.canPlayType=ss,t},rs.patchCanPlayType(),rs.disposeMediaElement=function(t){if(t){for(t.parentNode&&t.parentNode.removeChild(t);t.hasChildNodes();)t.removeChild(t.firstChild);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},rs.resetMediaElement=function(t){if(t){for(var e=t.querySelectorAll("source"),i=e.length;i--;)t.removeChild(e[i]);t.removeAttribute("src"),"function"==typeof t.load&&function(){try{t.load()}catch(t){}}()}},["muted","defaultMuted","autoplay","controls","loop","playsinline"].forEach(function(t){rs.prototype[t]=function(){return this.el_[t]||this.el_.hasAttribute(t)}}),["muted","defaultMuted","autoplay","loop","playsinline"].forEach(function(e){rs.prototype["set"+zt(e)]=function(t){(this.el_[e]=t)?this.el_.setAttribute(e,e):this.el_.removeAttribute(e)}}),["paused","currentTime","buffered","volume","poster","preload","error","seeking","seekable","ended","playbackRate","defaultPlaybackRate","played","networkState","readyState","videoWidth","videoHeight"].forEach(function(t){rs.prototype[t]=function(){return this.el_[t]}}),["volume","src","poster","preload","playbackRate","defaultPlaybackRate"].forEach(function(e){rs.prototype["set"+zt(e)]=function(t){this.el_[e]=t}}),["pause","load","play"].forEach(function(t){rs.prototype[t]=function(){return this.el_[t]()}}),_r.withSourceHandlers(rs),rs.nativeSourceHandler={},rs.nativeSourceHandler.canPlayType=function(t){try{return rs.TEST_VID.canPlayType(t)}catch(t){return""}},rs.nativeSourceHandler.canHandleSource=function(t,e){if(t.type)return rs.nativeSourceHandler.canPlayType(t.type);if(t.src){var i=Ze(t.src);return rs.nativeSourceHandler.canPlayType("video/"+i)}return""},rs.nativeSourceHandler.handleSource=function(t,e,i){e.setSrc(t.src)},rs.nativeSourceHandler.dispose=function(){},rs.registerSourceHandler(rs.nativeSourceHandler),_r.registerTech("Html5",rs);var os=h(["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "],["\n        Using the tech directly can be dangerous. I hope you know what you're doing.\n        See https://github.com/videojs/video.js/issues/2617 for more info.\n      "]),us=["progress","abort","suspend","emptied","stalled","loadedmetadata","loadeddata","timeupdate","resize","volumechange","texttrackchange"],ls={canplay:"CanPlay",canplaythrough:"CanPlayThrough",playing:"Playing",seeked:"Seeked"},cs=function(c){function h(t,e,i){if(y(this,h),t.id=t.id||e.id||"vjs_video_"+ut(),(e=C(h.getTagSettings(t),e)).initChildren=!1,e.createEl=!1,e.evented=!1,e.reportTouchActivity=!1,!e.language)if("function"==typeof t.closest){var r=t.closest("[lang]");r&&r.getAttribute&&(e.language=r.getAttribute("lang"))}else for(var n=t;n&&1===n.nodeType;){if(q(n).hasOwnProperty("lang")){e.language=n.getAttribute("lang");break}n=n.parentNode}var s=b(this,c.call(this,null,e,i));if(s.isPosterFromTech_=!1,s.queuedCallbacks_=[],s.isReady_=!1,s.hasStarted_=!1,s.userActive_=!1,!s.options_||!s.options_.techOrder||!s.options_.techOrder.length)throw new Error("No techOrder specified. Did you overwrite videojs.options instead of just changing the properties you want to override?");if(s.tag=t,s.tagAttributes=t&&q(t),s.language(s.options_.language),e.languages){var a={};Object.getOwnPropertyNames(e.languages).forEach(function(t){a[t.toLowerCase()]=e.languages[t]}),s.languages_=a}else s.languages_=h.prototype.options_.languages;s.cache_={},s.poster_=e.poster||"",s.controls_=!!e.controls,s.cache_.lastVolume=1,t.controls=!1,t.removeAttribute("controls"),s.scrubbing_=!1,s.el_=s.createEl(),s.cache_.lastPlaybackRate=s.defaultPlaybackRate(),Vt(s,{eventBusKey:"el_"});var o=Gt(s.options_);if(e.plugins){var u=e.plugins;Object.keys(u).forEach(function(t){if("function"!=typeof this[t])throw new Error('plugin "'+t+'" does not exist');this[t](u[t])},s)}s.options_.playerOptions=o,s.middleware_=[],s.initChildren(),s.isAudio("audio"===t.nodeName.toLowerCase()),s.controls()?s.addClass("vjs-controls-enabled"):s.addClass("vjs-controls-disabled"),s.el_.setAttribute("role","region"),s.isAudio()?s.el_.setAttribute("aria-label",s.localize("Audio Player")):s.el_.setAttribute("aria-label",s.localize("Video Player")),s.isAudio()&&s.addClass("vjs-audio"),s.flexNotSupported_()&&s.addClass("vjs-no-flex"),ne||s.addClass("vjs-workinghover"),h.players[s.id_]=s;var l=d.split(".")[0];return s.addClass("vjs-v"+l),s.userActive(!0),s.reportUserActivity(),s.one("play",s.listenForUserActivity_),s.on("fullscreenchange",s.handleFullscreenChange_),s.on("stageclick",s.handleStageClick_),s.changingSrc_=!1,s.playWaitingForReady_=!1,s.playOnLoadstart_=null,s}return _(h,c),h.prototype.dispose=function(){this.trigger("dispose"),this.off("dispose"),this.styleEl_&&this.styleEl_.parentNode&&(this.styleEl_.parentNode.removeChild(this.styleEl_),this.styleEl_=null),h.players[this.id_]=null,this.tag&&this.tag.player&&(this.tag.player=null),this.el_&&this.el_.player&&(this.el_.player=null),this.tech_&&(this.tech_.dispose(),this.isPosterFromTech_=!1,this.poster_=""),this.playerElIngest_&&(this.playerElIngest_=null),this.tag&&(this.tag=null),Tr[this.id()]=null,c.prototype.dispose.call(this)},h.prototype.createEl=function(){var e=this.tag,i=void 0,t=this.playerElIngest_=e.parentNode&&e.parentNode.hasAttribute&&e.parentNode.hasAttribute("data-vjs-player"),r="video-js"===this.tag.tagName.toLowerCase();t?i=this.el_=e.parentNode:r||(i=this.el_=c.prototype.createEl.call(this,"div"));var n=q(e);if(r){for(i=this.el_=e,e=this.tag=p.createElement("video");i.children.length;)e.appendChild(i.firstChild);B(i,"video-js")||j(i,"video-js"),i.appendChild(e),t=this.playerElIngest_=i}if(e.setAttribute("tabindex","-1"),e.removeAttribute("width"),e.removeAttribute("height"),Object.getOwnPropertyNames(n).forEach(function(t){i.setAttribute(t,n[t]),r&&e.setAttribute(t,n[t])}),e.playerId=e.id,e.id+="_html5_api",e.className="vjs-tech",e.player=i.player=this,this.addClass("vjs-paused"),!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){this.styleEl_=Lt("vjs-styles-dimensions");var s=nt(".vjs-styles-defaults"),a=nt("head");a.insertBefore(this.styleEl_,s?s.nextSibling:a.firstChild)}this.width(this.options_.width),this.height(this.options_.height),this.fluid(this.options_.fluid),this.aspectRatio(this.options_.aspectRatio);for(var o=e.getElementsByTagName("a"),u=0;u<o.length;u++){var l=o.item(u);j(l,"vjs-hidden"),l.setAttribute("hidden","hidden")}return e.initNetworkState_=e.networkState,e.parentNode&&!t&&e.parentNode.insertBefore(i,e),N(e,i),this.children_.unshift(e),this.el_.setAttribute("lang",this.language_),this.el_=i},h.prototype.width=function(t){return this.dimension("width",t)},h.prototype.height=function(t){return this.dimension("height",t)},h.prototype.dimension=function(t,e){var i=t+"_";if(void 0===e)return this[i]||0;if(""===e)return this[i]=void 0,void this.updateStyleEl_();var r=parseFloat(e);isNaN(r)?f.error('Improper value "'+e+'" supplied for for '+t):(this[i]=r,this.updateStyleEl_())},h.prototype.fluid=function(t){if(void 0===t)return!!this.fluid_;this.fluid_=!!t,t?this.addClass("vjs-fluid"):this.removeClass("vjs-fluid"),this.updateStyleEl_()},h.prototype.aspectRatio=function(t){if(void 0===t)return this.aspectRatio_;if(!/^\d+\:\d+$/.test(t))throw new Error("Improper value supplied for aspect ratio. The format should be width:height, for example 16:9.");this.aspectRatio_=t,this.fluid(!0),this.updateStyleEl_()},h.prototype.updateStyleEl_=function(){if(!0!==g.VIDEOJS_NO_DYNAMIC_STYLE){var t=void 0,e=void 0,i=void 0,r=(void 0!==this.aspectRatio_&&"auto"!==this.aspectRatio_?this.aspectRatio_:0<this.videoWidth()?this.videoWidth()+":"+this.videoHeight():"16:9").split(":"),n=r[1]/r[0];t=void 0!==this.width_?this.width_:void 0!==this.height_?this.height_/n:this.videoWidth()||300,e=void 0!==this.height_?this.height_:t*n,i=/^[^a-zA-Z]/.test(this.id())?"dimensions-"+this.id():this.id()+"-dimensions",this.addClass(i),Pt(this.styleEl_,"\n      ."+i+" {\n        width: "+t+"px;\n        height: "+e+"px;\n      }\n\n      ."+i+".vjs-fluid {\n        padding-top: "+100*n+"%;\n      }\n    ")}else{var s="number"==typeof this.width_?this.width_:this.options_.width,a="number"==typeof this.height_?this.height_:this.options_.height,o=this.tech_&&this.tech_.el();o&&(0<=s&&(o.width=s),0<=a&&(o.height=a))}},h.prototype.loadTech_=function(t,e){var i=this;this.tech_&&this.unloadTech_();var r=zt(t),n=t.charAt(0).toLowerCase()+t.slice(1);"Html5"!==r&&this.tag&&(_r.getTech("Html5").disposeMediaElement(this.tag),this.tag.player=null,this.tag=null),this.techName_=r,this.isReady_=!1;var s={source:e,nativeControlsForTouch:this.options_.nativeControlsForTouch,playerId:this.id(),techId:this.id()+"_"+r+"_api",autoplay:this.options_.autoplay,playsinline:this.options_.playsinline,preload:this.options_.preload,loop:this.options_.loop,muted:this.options_.muted,poster:this.poster(),language:this.language(),playerElIngest:this.playerElIngest_||!1,"vtt.js":this.options_["vtt.js"],canOverridePoster:!!this.options_.techCanOverridePoster,enableSourceset:this.options_.enableSourceset};Ni.names.forEach(function(t){var e=Ni[t];s[e.getterName]=i[e.privateName]}),C(s,this.options_[r]),C(s,this.options_[n]),C(s,this.options_[t.toLowerCase()]),this.tag&&(s.tag=this.tag),e&&e.src===this.cache_.src&&0<this.cache_.currentTime&&(s.startTime=this.cache_.currentTime);var a=_r.getTech(t);if(!a)throw new Error("No Tech named '"+r+"' exists! '"+r+"' should be registered using videojs.registerTech()'");this.tech_=new a(s),this.tech_.ready(Ot(this,this.handleTechReady_),!0),Me(this.textTracksJson_||[],this.tech_),us.forEach(function(t){i.on(i.tech_,t,i["handleTech"+zt(t)+"_"])}),Object.keys(ls).forEach(function(e){i.on(i.tech_,e,function(t){0===i.tech_.playbackRate()&&i.tech_.seeking()?i.queuedCallbacks_.push({callback:i["handleTech"+ls[e]+"_"].bind(i),event:t}):i["handleTech"+ls[e]+"_"](t)})}),this.on(this.tech_,"loadstart",this.handleTechLoadStart_),this.on(this.tech_,"sourceset",this.handleTechSourceset_),this.on(this.tech_,"waiting",this.handleTechWaiting_),this.on(this.tech_,"ended",this.handleTechEnded_),this.on(this.tech_,"seeking",this.handleTechSeeking_),this.on(this.tech_,"play",this.handleTechPlay_),this.on(this.tech_,"firstplay",this.handleTechFirstPlay_),this.on(this.tech_,"pause",this.handleTechPause_),this.on(this.tech_,"durationchange",this.handleTechDurationChange_),this.on(this.tech_,"fullscreenchange",this.handleTechFullscreenChange_),this.on(this.tech_,"error",this.handleTechError_),this.on(this.tech_,"loadedmetadata",this.updateStyleEl_),this.on(this.tech_,"posterchange",this.handleTechPosterChange_),this.on(this.tech_,"textdata",this.handleTechTextData_),this.on(this.tech_,"ratechange",this.handleTechRateChange_),this.usingNativeControls(this.techGet_("controls")),this.controls()&&!this.usingNativeControls()&&this.addTechControlsListeners_(),this.tech_.el().parentNode===this.el()||"Html5"===r&&this.tag||N(this.tech_.el(),this.el()),this.tag&&(this.tag.player=null,this.tag=null)},h.prototype.unloadTech_=function(){var i=this;Ni.names.forEach(function(t){var e=Ni[t];i[e.privateName]=i[e.getterName]()}),this.textTracksJson_=Re(this.tech_),this.isReady_=!1,this.tech_.dispose(),this.tech_=!1,this.isPosterFromTech_&&(this.poster_="",this.trigger("posterchange")),this.isPosterFromTech_=!1},h.prototype.tech=function(t){return void 0===t&&f.warn(m(os)),this.tech_},h.prototype.addTechControlsListeners_=function(){this.removeTechControlsListeners_(),this.on(this.tech_,"mousedown",this.handleTechClick_),this.on(this.tech_,"touchstart",this.handleTechTouchStart_),this.on(this.tech_,"touchmove",this.handleTechTouchMove_),this.on(this.tech_,"touchend",this.handleTechTouchEnd_),this.on(this.tech_,"tap",this.handleTechTap_)},h.prototype.removeTechControlsListeners_=function(){this.off(this.tech_,"tap",this.handleTechTap_),this.off(this.tech_,"touchstart",this.handleTechTouchStart_),this.off(this.tech_,"touchmove",this.handleTechTouchMove_),this.off(this.tech_,"touchend",this.handleTechTouchEnd_),this.off(this.tech_,"mousedown",this.handleTechClick_)},h.prototype.handleTechReady_=function(){if(this.triggerReady(),this.cache_.volume&&this.techCall_("setVolume",this.cache_.volume),this.handleTechPosterChange_(),this.handleTechDurationChange_(),(this.src()||this.currentSrc())&&this.tag&&this.options_.autoplay&&this.paused())try{delete this.tag.poster}catch(t){f("deleting tag.poster throws in some browsers",t)}},h.prototype.handleTechLoadStart_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-seeking"),this.error(null),this.paused()?(this.hasStarted(!1),this.trigger("loadstart")):(this.trigger("loadstart"),this.trigger("firstplay"))},h.prototype.handleTechSourceset_=function(t){this.trigger({src:t.src,type:"sourceset"})},h.prototype.hasStarted=function(t){if(void 0===t)return this.hasStarted_;t!==this.hasStarted_&&(this.hasStarted_=t,this.hasStarted_?(this.addClass("vjs-has-started"),this.trigger("firstplay")):this.removeClass("vjs-has-started"))},h.prototype.handleTechPlay_=function(){this.removeClass("vjs-ended"),this.removeClass("vjs-paused"),this.addClass("vjs-playing"),this.hasStarted(!0),this.trigger("play")},h.prototype.handleTechRateChange_=function(){0<this.tech_.playbackRate()&&0===this.cache_.lastPlaybackRate&&(this.queuedCallbacks_.forEach(function(t){return t.callback(t.event)}),this.queuedCallbacks_=[]),this.cache_.lastPlaybackRate=this.tech_.playbackRate(),this.trigger("ratechange")},h.prototype.handleTechWaiting_=function(){var t=this;this.addClass("vjs-waiting"),this.trigger("waiting"),this.one("timeupdate",function(){return t.removeClass("vjs-waiting")})},h.prototype.handleTechCanPlay_=function(){this.removeClass("vjs-waiting"),this.trigger("canplay")},h.prototype.handleTechCanPlayThrough_=function(){this.removeClass("vjs-waiting"),this.trigger("canplaythrough")},h.prototype.handleTechPlaying_=function(){this.removeClass("vjs-waiting"),this.trigger("playing")},h.prototype.handleTechSeeking_=function(){this.addClass("vjs-seeking"),this.trigger("seeking")},h.prototype.handleTechSeeked_=function(){this.removeClass("vjs-seeking"),this.trigger("seeked")},h.prototype.handleTechFirstPlay_=function(){this.options_.starttime&&(f.warn("Passing the `starttime` option to the player will be deprecated in 6.0"),this.currentTime(this.options_.starttime)),this.addClass("vjs-has-started"),this.trigger("firstplay")},h.prototype.handleTechPause_=function(){this.removeClass("vjs-playing"),this.addClass("vjs-paused"),this.trigger("pause")},h.prototype.handleTechEnded_=function(){this.addClass("vjs-ended"),this.options_.loop?(this.currentTime(0),this.play()):this.paused()||this.pause(),this.trigger("ended")},h.prototype.handleTechDurationChange_=function(){this.duration(this.techGet_("duration"))},h.prototype.handleTechClick_=function(t){rt(t)&&this.controls_&&(this.paused()?this.play():this.pause())},h.prototype.handleTechTap_=function(){this.userActive(!this.userActive())},h.prototype.handleTechTouchStart_=function(){this.userWasActive=this.userActive()},h.prototype.handleTechTouchMove_=function(){this.userWasActive&&this.reportUserActivity()},h.prototype.handleTechTouchEnd_=function(t){t.preventDefault()},h.prototype.handleFullscreenChange_=function(){this.isFullscreen()?this.addClass("vjs-fullscreen"):this.removeClass("vjs-fullscreen")},h.prototype.handleStageClick_=function(){this.reportUserActivity()},h.prototype.handleTechFullscreenChange_=function(t,e){e&&this.isFullscreen(e.isFullscreen),this.trigger("fullscreenchange")},h.prototype.handleTechError_=function(){var t=this.tech_.error();this.error(t)},h.prototype.handleTechTextData_=function(){var t=null;1<arguments.length&&(t=arguments[1]),this.trigger("textdata",t)},h.prototype.getCache=function(){return this.cache_},h.prototype.techCall_=function(n,s){this.ready(function(){if(n in wr)return t=this.middleware_,e=this.tech_,r=s,e[i=n](t.reduce(Lr(i),r));if(n in Ar)return Cr(this.middleware_,this.tech_,n,s);var t,e,i,r;try{this.tech_&&this.tech_[n](s)}catch(t){throw f(t),t}},!0)},h.prototype.techGet_=function(e){if(this.tech_&&this.tech_.isReady_){if(e in Er)return t=this.middleware_,i=this.tech_,r=e,t.reduceRight(Lr(r),i[r]());if(e in Ar)return Cr(this.middleware_,this.tech_,e);var t,i,r;try{return this.tech_[e]()}catch(t){if(void 0===this.tech_[e])throw f("Video.js: "+e+" method not defined for "+this.techName_+" playback technology.",t),t;if("TypeError"===t.name)throw f("Video.js: "+e+" unavailable on "+this.techName_+" playback technology element.",t),this.tech_.isReady_=!1,t;throw f(t),t}}},h.prototype.play=function(){var t=this;if(this.playOnLoadstart_&&this.off("loadstart",this.playOnLoadstart_),this.isReady_){if(!this.changingSrc_&&(this.src()||this.currentSrc()))return this.techGet_("play");this.playOnLoadstart_=function(){t.playOnLoadstart_=null,xe(t.play())},this.one("loadstart",this.playOnLoadstart_)}else{if(this.playWaitingForReady_)return;this.playWaitingForReady_=!0,this.ready(function(){t.playWaitingForReady_=!1,xe(t.play())})}},h.prototype.pause=function(){this.techCall_("pause")},h.prototype.paused=function(){return!1!==this.techGet_("paused")},h.prototype.played=function(){return this.techGet_("played")||be(0,0)},h.prototype.scrubbing=function(t){if("undefined"==typeof t)return this.scrubbing_;this.scrubbing_=!!t,t?this.addClass("vjs-scrubbing"):this.removeClass("vjs-scrubbing")},h.prototype.currentTime=function(t){return"undefined"!=typeof t?(t<0&&(t=0),void this.techCall_("setCurrentTime",t)):(this.cache_.currentTime=this.techGet_("currentTime")||0,this.cache_.currentTime)},h.prototype.duration=function(t){if(void 0===t)return void 0!==this.cache_.duration?this.cache_.duration:NaN;(t=parseFloat(t))<0&&(t=1/0),t!==this.cache_.duration&&((this.cache_.duration=t)===1/0?this.addClass("vjs-live"):this.removeClass("vjs-live"),this.trigger("durationchange"))},h.prototype.remainingTime=function(){return this.duration()-this.currentTime()},h.prototype.remainingTimeDisplay=function(){return Math.floor(this.duration())-Math.floor(this.currentTime())},h.prototype.buffered=function(){var t=this.techGet_("buffered");return t&&t.length||(t=be(0,0)),t},h.prototype.bufferedPercent=function(){return Te(this.buffered(),this.duration())},h.prototype.bufferedEnd=function(){var t=this.buffered(),e=this.duration(),i=t.end(t.length-1);return e<i&&(i=e),i},h.prototype.volume=function(t){var e=void 0;return void 0!==t?(e=Math.max(0,Math.min(1,parseFloat(t))),this.cache_.volume=e,this.techCall_("setVolume",e),void(0<e&&this.lastVolume_(e))):(e=parseFloat(this.techGet_("volume")),isNaN(e)?1:e)},h.prototype.muted=function(t){if(void 0===t)return this.techGet_("muted")||!1;this.techCall_("setMuted",t)},h.prototype.defaultMuted=function(t){return void 0!==t?this.techCall_("setDefaultMuted",t):this.techGet_("defaultMuted")||!1},h.prototype.lastVolume_=function(t){if(void 0===t||0===t)return this.cache_.lastVolume;this.cache_.lastVolume=t},h.prototype.supportsFullScreen=function(){return this.techGet_("supportsFullScreen")||!1},h.prototype.isFullscreen=function(t){if(void 0===t)return!!this.isFullscreen_;this.isFullscreen_=!!t},h.prototype.requestFullscreen=function(){var i=Se;this.isFullscreen(!0),i.requestFullscreen?(_t(p,i.fullscreenchange,Ot(this,function t(e){this.isFullscreen(p[i.fullscreenElement]),!1===this.isFullscreen()&&bt(p,i.fullscreenchange,t),this.trigger("fullscreenchange")})),this.el_[i.requestFullscreen]()):this.tech_.supportsFullScreen()?this.techCall_("enterFullScreen"):(this.enterFullWindow(),this.trigger("fullscreenchange"))},h.prototype.exitFullscreen=function(){var t=Se;this.isFullscreen(!1),t.requestFullscreen?p[t.exitFullscreen]():this.tech_.supportsFullScreen()?this.techCall_("exitFullScreen"):(this.exitFullWindow(),this.trigger("fullscreenchange"))},h.prototype.enterFullWindow=function(){this.isFullWindow=!0,this.docOrigOverflow=p.documentElement.style.overflow,_t(p,"keydown",Ot(this,this.fullWindowOnEscKey)),p.documentElement.style.overflow="hidden",j(p.body,"vjs-full-window"),this.trigger("enterFullWindow")},h.prototype.fullWindowOnEscKey=function(t){27===t.keyCode&&(!0===this.isFullscreen()?this.exitFullscreen():this.exitFullWindow())},h.prototype.exitFullWindow=function(){this.isFullWindow=!1,bt(p,"keydown",this.fullWindowOnEscKey),p.documentElement.style.overflow=this.docOrigOverflow,F(p.body,"vjs-full-window"),this.trigger("exitFullWindow")},h.prototype.canPlayType=function(t){for(var e=void 0,i=0,r=this.options_.techOrder;i<r.length;i++){var n=r[i],s=_r.getTech(n);if(s||(s=Xt.getComponent(n)),s){if(s.isSupported()&&(e=s.canPlayType(t)))return e}else f.error('The "'+n+'" tech is undefined. Skipped browser support check for that tech.')}return""},h.prototype.selectSource=function(t){var i,r=this,e=this.options_.techOrder.map(function(t){return[t,_r.getTech(t)]}).filter(function(t){var e=t[0],i=t[1];return i?i.isSupported():(f.error('The "'+e+'" tech is undefined. Skipped browser support check for that tech.'),!1)}),n=function(t,i,r){var n=void 0;return t.some(function(e){return i.some(function(t){if(n=r(e,t))return!0})}),n},s=function(t,e){var i=t[0];if(t[1].canPlaySource(e,r.options_[i.toLowerCase()]))return{source:e,tech:i}};return(this.options_.sourceOrder?n(t,e,(i=s,function(t,e){return i(e,t)})):n(e,t,s))||!1},h.prototype.src=function(t){var n=this;if("undefined"==typeof t)return this.cache_.src||"";var s=function e(t){if(Array.isArray(t)){var i=[];t.forEach(function(t){t=e(t),Array.isArray(t)?i=i.concat(t):E(t)&&i.push(t)}),t=i}else t="string"==typeof t&&t.trim()?[Or({src:t})]:E(t)&&"string"==typeof t.src&&t.src&&t.src.trim()?[Or(t)]:[];return t}(t);s.length?(this.cache_.sources=s,this.changingSrc_=!0,this.cache_.source=s[0],kr(this,s[0],function(t,e){var i,r;if(n.middleware_=e,n.src_(t))return 1<s.length?n.src(s.slice(1)):(n.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0),void n.triggerReady());n.changingSrc_=!1,n.cache_.src=t.src,i=e,r=n.tech_,i.forEach(function(t){return t.setTech&&t.setTech(r)})})):this.setTimeout(function(){this.error({code:4,message:this.localize(this.options_.notSupportedMessage)})},0)},h.prototype.src_=function(t){var e,i,r=this.selectSource([t]);return!r||(e=r.tech,i=this.techName_,zt(e)!==zt(i)?(this.changingSrc_=!0,this.loadTech_(r.tech,r.source)):this.ready(function(){this.tech_.constructor.prototype.hasOwnProperty("setSource")?this.techCall_("setSource",t):this.techCall_("src",t.src)},!0),!1)},h.prototype.load=function(){this.techCall_("load")},h.prototype.reset=function(){this.loadTech_(this.options_.techOrder[0],null),this.techCall_("reset")},h.prototype.currentSources=function(){var t=this.currentSource(),e=[];return 0!==Object.keys(t).length&&e.push(t),this.cache_.sources||e},h.prototype.currentSource=function(){return this.cache_.source||{}},h.prototype.currentSrc=function(){return this.currentSource()&&this.currentSource().src||""},h.prototype.currentType=function(){return this.currentSource()&&this.currentSource().type||""},h.prototype.preload=function(t){return void 0!==t?(this.techCall_("setPreload",t),void(this.options_.preload=t)):this.techGet_("preload")},h.prototype.autoplay=function(t){return void 0!==t?(this.techCall_("setAutoplay",t),void(this.options_.autoplay=t)):this.techGet_("autoplay",t)},h.prototype.playsinline=function(t){return void 0!==t?(this.techCall_("setPlaysinline",t),this.options_.playsinline=t,this):this.techGet_("playsinline")},h.prototype.loop=function(t){return void 0!==t?(this.techCall_("setLoop",t),void(this.options_.loop=t)):this.techGet_("loop")},h.prototype.poster=function(t){if(void 0===t)return this.poster_;t||(t=""),t!==this.poster_&&(this.poster_=t,this.techCall_("setPoster",t),this.isPosterFromTech_=!1,this.trigger("posterchange"))},h.prototype.handleTechPosterChange_=function(){if((!this.poster_||this.options_.techCanOverridePoster)&&this.tech_&&this.tech_.poster){var t=this.tech_.poster()||"";t!==this.poster_&&(this.poster_=t,this.isPosterFromTech_=!0,this.trigger("posterchange"))}},h.prototype.controls=function(t){if(void 0===t)return!!this.controls_;t=!!t,this.controls_!==t&&(this.controls_=t,this.usingNativeControls()&&this.techCall_("setControls",t),this.controls_?(this.removeClass("vjs-controls-disabled"),this.addClass("vjs-controls-enabled"),this.trigger("controlsenabled"),this.usingNativeControls()||this.addTechControlsListeners_()):(this.removeClass("vjs-controls-enabled"),this.addClass("vjs-controls-disabled"),this.trigger("controlsdisabled"),this.usingNativeControls()||this.removeTechControlsListeners_()))},h.prototype.usingNativeControls=function(t){if(void 0===t)return!!this.usingNativeControls_;t=!!t,this.usingNativeControls_!==t&&(this.usingNativeControls_=t,this.usingNativeControls_?(this.addClass("vjs-using-native-controls"),this.trigger("usingnativecontrols")):(this.removeClass("vjs-using-native-controls"),this.trigger("usingcustomcontrols")))},h.prototype.error=function(t){return void 0===t?this.error_||null:null===t?(this.error_=t,this.removeClass("vjs-error"),void(this.errorDisplay&&this.errorDisplay.close())):(this.error_=new Le(t),this.addClass("vjs-error"),f.error("(CODE:"+this.error_.code+" "+Le.errorTypes[this.error_.code]+")",this.error_.message,this.error_),void this.trigger("error"))},h.prototype.reportUserActivity=function(t){this.userActivity_=!0},h.prototype.userActive=function(t){if(void 0===t)return this.userActive_;if((t=!!t)!==this.userActive_){if(this.userActive_=t,this.userActive_)return this.userActivity_=!0,this.removeClass("vjs-user-inactive"),this.addClass("vjs-user-active"),void this.trigger("useractive");this.tech_&&this.tech_.one("mousemove",function(t){t.stopPropagation(),t.preventDefault()}),this.userActivity_=!1,this.removeClass("vjs-user-active"),this.addClass("vjs-user-inactive"),this.trigger("userinactive")}},h.prototype.listenForUserActivity_=function(){var e=void 0,i=void 0,r=void 0,n=Ot(this,this.reportUserActivity);this.on("mousedown",function(){n(),this.clearInterval(e),e=this.setInterval(n,250)}),this.on("mousemove",function(t){t.screenX===i&&t.screenY===r||(i=t.screenX,r=t.screenY,n())}),this.on("mouseup",function(t){n(),this.clearInterval(e)}),this.on("keydown",n),this.on("keyup",n);var s=void 0;this.setInterval(function(){if(this.userActivity_){this.userActivity_=!1,this.userActive(!0),this.clearTimeout(s);var t=this.options_.inactivityTimeout;t<=0||(s=this.setTimeout(function(){this.userActivity_||this.userActive(!1)},t))}},250)},h.prototype.playbackRate=function(t){if(void 0===t)return this.tech_&&this.tech_.featuresPlaybackRate?this.cache_.lastPlaybackRate||this.techGet_("playbackRate"):1;this.techCall_("setPlaybackRate",t)},h.prototype.defaultPlaybackRate=function(t){return void 0!==t?this.techCall_("setDefaultPlaybackRate",t):this.tech_&&this.tech_.featuresPlaybackRate?this.techGet_("defaultPlaybackRate"):1},h.prototype.isAudio=function(t){if(void 0===t)return!!this.isAudio_;this.isAudio_=!!t},h.prototype.addTextTrack=function(t,e,i){if(this.tech_)return this.tech_.addTextTrack(t,e,i)},h.prototype.addRemoteTextTrack=function(t,e){if(this.tech_)return this.tech_.addRemoteTextTrack(t,e)},h.prototype.removeRemoteTextTrack=function(){var t=(0<arguments.length&&void 0!==arguments[0]?arguments[0]:{}).track,e=void 0===t?arguments[0]:t;if(this.tech_)return this.tech_.removeRemoteTextTrack(e)},h.prototype.getVideoPlaybackQuality=function(){return this.techGet_("getVideoPlaybackQuality")},h.prototype.videoWidth=function(){return this.tech_&&this.tech_.videoWidth&&this.tech_.videoWidth()||0},h.prototype.videoHeight=function(){return this.tech_&&this.tech_.videoHeight&&this.tech_.videoHeight()||0},h.prototype.language=function(t){if(void 0===t)return this.language_;this.language_=String(t).toLowerCase()},h.prototype.languages=function(){return Gt(h.prototype.options_.languages,this.languages_)},h.prototype.toJSON=function(){var t=Gt(this.options_),e=t.tracks;t.tracks=[];for(var i=0;i<e.length;i++){var r=e[i];(r=Gt(r)).player=void 0,t.tracks[i]=r}return t},h.prototype.createModal=function(t,e){var i=this;(e=e||{}).content=t||"";var r=new Ne(this,e);return this.addChild(r),r.on("dispose",function(){i.removeChild(r)}),r.open(),r},h.getTagSettings=function(t){var e={sources:[],tracks:[]},i=q(t),r=i["data-setup"];if(B(t,"vjs-fluid")&&(i.fluid=!0),null!==r){var n=Oe(r||"{}"),s=n[0],a=n[1];s&&f.error(s),C(i,a)}if(C(e,i),t.hasChildNodes())for(var o=t.childNodes,u=0,l=o.length;u<l;u++){var c=o[u],h=c.nodeName.toLowerCase();"source"===h?e.sources.push(q(c)):"track"===h&&e.tracks.push(q(c))}return e},h.prototype.flexNotSupported_=function(){var t=p.createElement("i");return!("flexBasis"in t.style||"webkitFlexBasis"in t.style||"mozFlexBasis"in t.style||"msFlexBasis"in t.style||"msFlexOrder"in t.style)},h}(Xt);Ni.names.forEach(function(t){var e=Ni[t];cs.prototype[e.getterName]=function(){return this.tech_?this.tech_[e.getterName]():(this[e.privateName]=this[e.privateName]||new e.ListClass,this[e.privateName])}}),cs.players={};var hs=g.navigator;cs.prototype.options_={techOrder:_r.defaultTechOrder_,html5:{},flash:{},inactivityTimeout:2e3,playbackRates:[],children:["mediaLoader","posterImage","textTrackDisplay","loadingSpinner","bigPlayButton","controlBar","errorDisplay","textTrackSettings","resizeManager"],language:hs&&(hs.languages&&hs.languages[0]||hs.userLanguage||hs.language)||"en",languages:{},notSupportedMessage:"No compatible source was found for this media."},["ended","seeking","seekable","networkState","readyState"].forEach(function(t){cs.prototype[t]=function(){return this.techGet_(t)}}),us.forEach(function(t){cs.prototype["handleTech"+zt(t)+"_"]=function(){return this.trigger(t)}}),Xt.registerComponent("Player",cs);var ds="plugin",ps="activePlugins_",fs={},ms=function(t){return fs.hasOwnProperty(t)},gs=function(t){return ms(t)?fs[t]:void 0},ys=function(t,e){t[ps]=t[ps]||{},t[ps][e]=!0},vs=function(t,e,i){var r=(i?"before":"")+"pluginsetup";t.trigger(r,e),t.trigger(r+":"+e.name,e)},_s=function(n,s){return s.prototype.name=n,function(){vs(this,{name:n,plugin:s,instance:null},!0);for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];var r=new(Function.prototype.bind.apply(s,[null].concat([this].concat(e))));return this[n]=function(){return r},vs(this,r.getEventHash()),r}},bs=function(){function s(t){if(y(this,s),this.constructor===s)throw new Error("Plugin must be sub-classed; not directly instantiated.");this.player=t,Vt(this),delete this.trigger,Wt(this,this.constructor.defaultState),ys(t,this.name),this.dispose=Ot(this,this.dispose),t.on("dispose",this.dispose)}return s.prototype.version=function(){return this.constructor.VERSION},s.prototype.getEventHash=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};return t.name=this.name,t.plugin=this.constructor,t.instance=this,t},s.prototype.trigger=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};return Tt(this.eventBusEl_,t,this.getEventHash(e))},s.prototype.handleStateChanged=function(t){},s.prototype.dispose=function(){var t=this.name,e=this.player;this.trigger("dispose"),this.off(),e.off("dispose",this.dispose),e[ps][t]=!1,this.player=this.state=null,e[t]=_s(t,fs[t])},s.isBasic=function(t){var e="string"==typeof t?gs(t):t;return"function"==typeof e&&!s.prototype.isPrototypeOf(e.prototype)},s.registerPlugin=function(t,e){if("string"!=typeof t)throw new Error('Illegal plugin name, "'+t+'", must be a string, was '+("undefined"==typeof t?"undefined":v(t))+".");if(ms(t))f.warn('A plugin named "'+t+'" already exists. You may want to avoid re-registering plugins!');else if(cs.prototype.hasOwnProperty(t))throw new Error('Illegal plugin name, "'+t+'", cannot share a name with an existing player method!');if("function"!=typeof e)throw new Error('Illegal plugin for "'+t+'", must be a function, was '+("undefined"==typeof e?"undefined":v(e))+".");var i,r,n;return fs[t]=e,t!==ds&&(s.isBasic(e)?cs.prototype[t]=(i=t,r=e,n=function(){vs(this,{name:i,plugin:r,instance:null},!0);var t=r.apply(this,arguments);return ys(this,i),vs(this,{name:i,plugin:r,instance:t}),t},Object.keys(r).forEach(function(t){n[t]=r[t]}),n):cs.prototype[t]=_s(t,e)),e},s.deregisterPlugin=function(t){if(t===ds)throw new Error("Cannot de-register base plugin.");ms(t)&&(delete fs[t],delete cs.prototype[t])},s.getPlugins=function(){var t=0<arguments.length&&void 0!==arguments[0]?arguments[0]:Object.keys(fs),i=void 0;return t.forEach(function(t){var e=gs(t);e&&((i=i||{})[t]=e)}),i},s.getPluginVersion=function(t){var e=gs(t);return e&&e.VERSION||""},s}();bs.getPlugin=gs,bs.BASE_PLUGIN_NAME=ds,bs.registerPlugin(ds,bs),cs.prototype.usingPlugin=function(t){return!!this[ps]&&!0===this[ps][t]},cs.prototype.hasPlugin=function(t){return!!ms(t)};var Ts=function(t){return 0===t.indexOf("#")?t.slice(1):t};function Ss(t,i,e){var r=Ss.getPlayer(t);if(r)return i&&f.warn('Player "'+t+'" is already initialised. Options will not be applied.'),e&&r.ready(e),r;var n="string"==typeof t?nt("#"+Ts(t)):t;if(!x(n))throw new TypeError("The element or ID supplied is not valid. (videojs)");p.body.contains(n)||f.warn("The element supplied is not included in the DOM"),i=i||{},Ss.hooks("beforesetup").forEach(function(t){var e=t(n,Gt(i));E(e)&&!Array.isArray(e)?i=Gt(i,e):f.error("please return an object in beforesetup hooks")});var s=Xt.getComponent("Player");return r=new s(n,i,e),Ss.hooks("setup").forEach(function(t){return t(r)}),r}if(Ss.hooks_={},Ss.hooks=function(t,e){return Ss.hooks_[t]=Ss.hooks_[t]||[],e&&(Ss.hooks_[t]=Ss.hooks_[t].concat(e)),Ss.hooks_[t]},Ss.hook=function(t,e){Ss.hooks(t,e)},Ss.hookOnce=function(i,t){Ss.hooks(i,[].concat(t).map(function(e){return function t(){return Ss.removeHook(i,t),e.apply(void 0,arguments)}}))},Ss.removeHook=function(t,e){var i=Ss.hooks(t).indexOf(e);return!(i<=-1)&&(Ss.hooks_[t]=Ss.hooks_[t].slice(),Ss.hooks_[t].splice(i,1),!0)},!0!==g.VIDEOJS_NO_DYNAMIC_STYLE&&I()){var ks=nt(".vjs-styles-defaults");if(!ks){ks=Lt("vjs-styles-defaults");var Cs=nt("head");Cs&&Cs.insertBefore(ks,Cs.firstChild),Pt(ks,"\n      .video-js {\n        width: 300px;\n        height: 150px;\n      }\n\n      .vjs-fluid {\n        padding-top: 56.25%\n      }\n    ")}}At(1,Ss),Ss.VERSION=d,Ss.options=cs.prototype.options_,Ss.getPlayers=function(){return cs.players},Ss.getPlayer=function(t){var e=cs.players,i=void 0;if("string"==typeof t){var r=Ts(t),n=e[r];if(n)return n;i=nt("#"+r)}else i=t;if(x(i)){var s=i,a=s.player,o=s.playerId;if(a||e[o])return a||e[o]}},Ss.getAllPlayers=function(){return Object.keys(cs.players).map(function(t){return cs.players[t]}).filter(Boolean)},Ss.players=cs.players,Ss.getComponent=Xt.getComponent,Ss.registerComponent=function(t,e){_r.isTech(e)&&f.warn("The "+t+" tech was registered as a component. It should instead be registered using videojs.registerTech(name, tech)"),Xt.registerComponent.call(Xt,t,e)},Ss.getTech=_r.getTech,Ss.registerTech=_r.registerTech,Ss.use=function(t,e){br[t]=br[t]||[],br[t].push(e)},Object.defineProperty(Ss,"middleware",{value:{},writeable:!1,enumerable:!0}),Object.defineProperty(Ss.middleware,"TERMINATOR",{value:Sr,writeable:!1,enumerable:!0}),Ss.browser=ye,Ss.TOUCH_ENABLED=ge,Ss.extend=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=function(){t.apply(this,arguments)},r={};for(var n in"object"===("undefined"==typeof e?"undefined":v(e))?(e.constructor!==Object.prototype.constructor&&(i=e.constructor),r=e):"function"==typeof e&&(i=e),function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(t.super_=e)}(i,t),r)r.hasOwnProperty(n)&&(i.prototype[n]=r[n]);return i},Ss.mergeOptions=Gt,Ss.bind=Ot,Ss.registerPlugin=bs.registerPlugin,Ss.plugin=function(t,e){return f.warn("videojs.plugin() is deprecated; use videojs.registerPlugin() instead"),bs.registerPlugin(t,e)},Ss.getPlugins=bs.getPlugins,Ss.getPlugin=bs.getPlugin,Ss.getPluginVersion=bs.getPluginVersion,Ss.addLanguage=function(t,e){var i;return t=(""+t).toLowerCase(),Ss.options.languages=Gt(Ss.options.languages,((i={})[t]=e,i)),Ss.options.languages[t]},Ss.log=f,Ss.createTimeRange=Ss.createTimeRanges=be,Ss.formatTime=Gr,Ss.setFormatTime=function(t){zr=t},Ss.resetFormatTime=function(){zr=Wr},Ss.parseUrl=Je,Ss.isCrossOrigin=ti,Ss.EventTarget=Dt,Ss.on=_t,Ss.one=St,Ss.off=bt,Ss.trigger=Tt,Ss.xhr=ki,Ss.TextTrack=Pi,Ss.AudioTrack=Oi,Ss.VideoTrack=Ii,["isEl","isTextNode","createEl","hasClass","addClass","removeClass","toggleClass","setAttributes","getAttributes","emptyEl","appendContent","insertContent"].forEach(function(t){Ss[t]=function(){return f.warn("videojs."+t+"() is deprecated; use videojs.dom."+t+"() instead"),at[t].apply(null,arguments)}}),Ss.computedStyle=A,Ss.dom=at,Ss.url=ei;var Es=e(function(t,e){var i,c,r,n,h;i=/^((?:[a-zA-Z0-9+\-.]+:)?)(\/\/[^\/\;?#]*)?(.*?)??(;.*?)?(\?.*?)?(#.*?)?$/,c=/^([^\/;?#]*)(.*)$/,r=/(?:\/|^)\.(?=\/)/g,n=/(?:\/|^)\.\.\/(?!\.\.\/).*?(?=\/)/g,h={buildAbsoluteURL:function(t,e,i){if(i=i||{},t=t.trim(),!(e=e.trim())){if(!i.alwaysNormalize)return t;var r=h.parseURL(t);if(!r)throw new Error("Error trying to parse base URL.");return r.path=h.normalizePath(r.path),h.buildURLFromParts(r)}var n=h.parseURL(e);if(!n)throw new Error("Error trying to parse relative URL.");if(n.scheme)return i.alwaysNormalize?(n.path=h.normalizePath(n.path),h.buildURLFromParts(n)):e;var s=h.parseURL(t);if(!s)throw new Error("Error trying to parse base URL.");if(!s.netLoc&&s.path&&"/"!==s.path[0]){var a=c.exec(s.path);s.netLoc=a[1],s.path=a[2]}s.netLoc&&!s.path&&(s.path="/");var o={scheme:s.scheme,netLoc:n.netLoc,path:null,params:n.params,query:n.query,fragment:n.fragment};if(!n.netLoc&&(o.netLoc=s.netLoc,"/"!==n.path[0]))if(n.path){var u=s.path,l=u.substring(0,u.lastIndexOf("/")+1)+n.path;o.path=h.normalizePath(l)}else o.path=s.path,n.params||(o.params=s.params,n.query||(o.query=s.query));return null===o.path&&(o.path=i.alwaysNormalize?h.normalizePath(n.path):n.path),h.buildURLFromParts(o)},parseURL:function(t){var e=i.exec(t);return e?{scheme:e[1]||"",netLoc:e[2]||"",path:e[3]||"",params:e[4]||"",query:e[5]||"",fragment:e[6]||""}:null},normalizePath:function(t){for(t=t.split("").reverse().join("").replace(r,"");t.length!==(t=t.replace(n,"")).length;);return t.split("").reverse().join("")},buildURLFromParts:function(t){return t.scheme+t.netLoc+t.path+t.params+t.query+t.fragment}},t.exports=h}),ws=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},As=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var i=arguments[e];for(var r in i)Object.prototype.hasOwnProperty.call(i,r)&&(t[r]=i[r])}return t},Ls=function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)},Ps=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},Os=function(){function t(){ws(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t],i=void 0,r=void 0,n=void 0;if(e)if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else for(n=Array.prototype.slice.call(arguments,1),r=e.length,i=0;i<r;++i)e[i].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Is=function(e){function i(){ws(this,i);var t=Ps(this,e.call(this));return t.buffer="",t}return Ls(i,e),i.prototype.push=function(t){var e=void 0;for(this.buffer+=t,e=this.buffer.indexOf("\n");-1<e;e=this.buffer.indexOf("\n"))this.trigger("data",this.buffer.substring(0,e)),this.buffer=this.buffer.substring(e+1)},i}(Os),xs=function(t){for(var e=t.split(new RegExp('(?:^|,)((?:[^=]*)=(?:"[^"]*"|[^,]*))')),i={},r=e.length,n=void 0;r--;)""!==e[r]&&((n=/([^=]*)=(.*)/.exec(e[r]).slice(1))[0]=n[0].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^\s+|\s+$/g,""),n[1]=n[1].replace(/^['"](.*)['"]$/g,"$1"),i[n[0]]=n[1]);return i},Ds=function(e){function i(){ws(this,i);var t=Ps(this,e.call(this));return t.customParsers=[],t}return Ls(i,e),i.prototype.push=function(t){var e=void 0,i=void 0;if(0!==(t=t.replace(/^[\u0000\s]+|[\u0000\s]+$/g,"")).length)if("#"===t[0]){for(var r=0;r<this.customParsers.length;r++)if(this.customParsers[r].call(this,t))return;if(0===t.indexOf("#EXT"))if(t=t.replace("\r",""),e=/^#EXTM3U/.exec(t))this.trigger("data",{type:"tag",tagType:"m3u"});else{if(e=/^#EXTINF:?([0-9\.]*)?,?(.*)?$/.exec(t))return i={type:"tag",tagType:"inf"},e[1]&&(i.duration=parseFloat(e[1])),e[2]&&(i.title=e[2]),void this.trigger("data",i);if(e=/^#EXT-X-TARGETDURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"targetduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#ZEN-TOTAL-DURATION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"totalduration"},e[1]&&(i.duration=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-VERSION:?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"version"},e[1]&&(i.version=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-MEDIA-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"media-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-DISCONTINUITY-SEQUENCE:?(\-?[0-9.]*)?/.exec(t))return i={type:"tag",tagType:"discontinuity-sequence"},e[1]&&(i.number=parseInt(e[1],10)),void this.trigger("data",i);if(e=/^#EXT-X-PLAYLIST-TYPE:?(.*)?$/.exec(t))return i={type:"tag",tagType:"playlist-type"},e[1]&&(i.playlistType=e[1]),void this.trigger("data",i);if(e=/^#EXT-X-BYTERANGE:?([0-9.]*)?@?([0-9.]*)?/.exec(t))return i={type:"tag",tagType:"byterange"},e[1]&&(i.length=parseInt(e[1],10)),e[2]&&(i.offset=parseInt(e[2],10)),void this.trigger("data",i);if(e=/^#EXT-X-ALLOW-CACHE:?(YES|NO)?/.exec(t))return i={type:"tag",tagType:"allow-cache"},e[1]&&(i.allowed=!/NO/.test(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-MAP:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"map"},e[1]){var n=xs(e[1]);if(n.URI&&(i.uri=n.URI),n.BYTERANGE){var s=n.BYTERANGE.split("@"),a=s[0],o=s[1];i.byterange={},a&&(i.byterange.length=parseInt(a,10)),o&&(i.byterange.offset=parseInt(o,10))}}this.trigger("data",i)}else if(e=/^#EXT-X-STREAM-INF:?(.*)$/.exec(t)){if(i={type:"tag",tagType:"stream-inf"},e[1]){if(i.attributes=xs(e[1]),i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION.split("x"),l={};u[0]&&(l.width=parseInt(u[0],10)),u[1]&&(l.height=parseInt(u[1],10)),i.attributes.RESOLUTION=l}i.attributes.BANDWIDTH&&(i.attributes.BANDWIDTH=parseInt(i.attributes.BANDWIDTH,10)),i.attributes["PROGRAM-ID"]&&(i.attributes["PROGRAM-ID"]=parseInt(i.attributes["PROGRAM-ID"],10))}this.trigger("data",i)}else{if(e=/^#EXT-X-MEDIA:?(.*)$/.exec(t))return i={type:"tag",tagType:"media"},e[1]&&(i.attributes=xs(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-ENDLIST/.exec(t))this.trigger("data",{type:"tag",tagType:"endlist"});else if(e=/^#EXT-X-DISCONTINUITY/.exec(t))this.trigger("data",{type:"tag",tagType:"discontinuity"});else{if(e=/^#EXT-X-PROGRAM-DATE-TIME:?(.*)$/.exec(t))return i={type:"tag",tagType:"program-date-time"},e[1]&&(i.dateTimeString=e[1],i.dateTimeObject=new Date(e[1])),void this.trigger("data",i);if(e=/^#EXT-X-KEY:?(.*)$/.exec(t))return i={type:"tag",tagType:"key"},e[1]&&(i.attributes=xs(e[1]),i.attributes.IV&&("0x"===i.attributes.IV.substring(0,2).toLowerCase()&&(i.attributes.IV=i.attributes.IV.substring(2)),i.attributes.IV=i.attributes.IV.match(/.{8}/g),i.attributes.IV[0]=parseInt(i.attributes.IV[0],16),i.attributes.IV[1]=parseInt(i.attributes.IV[1],16),i.attributes.IV[2]=parseInt(i.attributes.IV[2],16),i.attributes.IV[3]=parseInt(i.attributes.IV[3],16),i.attributes.IV=new Uint32Array(i.attributes.IV))),void this.trigger("data",i);if(e=/^#EXT-X-START:?(.*)$/.exec(t))return i={type:"tag",tagType:"start"},e[1]&&(i.attributes=xs(e[1]),i.attributes["TIME-OFFSET"]=parseFloat(i.attributes["TIME-OFFSET"]),i.attributes.PRECISE=/YES/.test(i.attributes.PRECISE)),void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT-CONT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out-cont"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-OUT:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-out"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);if(e=/^#EXT-X-CUE-IN:?(.*)?$/.exec(t))return i={type:"tag",tagType:"cue-in"},e[1]?i.data=e[1]:i.data="",void this.trigger("data",i);this.trigger("data",{type:"tag",data:t.slice(4)})}}}else this.trigger("data",{type:"comment",text:t.slice(1)})}else this.trigger("data",{type:"uri",uri:t})},i.prototype.addParser=function(t){var e=this,i=t.expression,r=t.customType,n=t.dataParser,s=t.segment;"function"!=typeof n&&(n=function(t){return t}),this.customParsers.push(function(t){if(i.exec(t))return e.trigger("data",{type:"custom",data:n(t),customType:r,segment:s}),!0})},i}(Os),Rs=function(e){function i(){ws(this,i);var t=Ps(this,e.call(this));t.lineStream=new Is,t.parseStream=new Ds,t.lineStream.pipe(t.parseStream);var n=t,s=[],a={},o=void 0,u=void 0,l={AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},c=0;return t.manifest={allowCache:!0,discontinuityStarts:[],segments:[]},t.parseStream.on("data",function(e){var i=void 0,r=void 0;({tag:function(){({"allow-cache":function(){this.manifest.allowCache=e.allowed,"allowed"in e||(this.trigger("info",{message:"defaulting allowCache to YES"}),this.manifest.allowCache=!0)},byterange:function(){var t={};"length"in e&&((a.byterange=t).length=e.length,"offset"in e||(this.trigger("info",{message:"defaulting offset to zero"}),e.offset=0)),"offset"in e&&((a.byterange=t).offset=e.offset)},endlist:function(){this.manifest.endList=!0},inf:function(){"mediaSequence"in this.manifest||(this.manifest.mediaSequence=0,this.trigger("info",{message:"defaulting media sequence to zero"})),"discontinuitySequence"in this.manifest||(this.manifest.discontinuitySequence=0,this.trigger("info",{message:"defaulting discontinuity sequence to zero"})),0<e.duration&&(a.duration=e.duration),0===e.duration&&(a.duration=.01,this.trigger("info",{message:"updating zero segment duration to a small value"})),this.manifest.segments=s},key:function(){e.attributes?"NONE"!==e.attributes.METHOD?e.attributes.URI?(e.attributes.METHOD||this.trigger("warn",{message:"defaulting key method to AES-128"}),u={method:e.attributes.METHOD||"AES-128",uri:e.attributes.URI},"undefined"!=typeof e.attributes.IV&&(u.iv=e.attributes.IV)):this.trigger("warn",{message:"ignoring key declaration without URI"}):u=null:this.trigger("warn",{message:"ignoring key declaration without attribute list"})},"media-sequence":function(){isFinite(e.number)?this.manifest.mediaSequence=e.number:this.trigger("warn",{message:"ignoring invalid media sequence: "+e.number})},"discontinuity-sequence":function(){isFinite(e.number)?(this.manifest.discontinuitySequence=e.number,c=e.number):this.trigger("warn",{message:"ignoring invalid discontinuity sequence: "+e.number})},"playlist-type":function(){/VOD|EVENT/.test(e.playlistType)?this.manifest.playlistType=e.playlistType:this.trigger("warn",{message:"ignoring unknown playlist type: "+e.playlist})},map:function(){o={},e.uri&&(o.uri=e.uri),e.byterange&&(o.byterange=e.byterange)},"stream-inf":function(){this.manifest.playlists=s,this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes?(a.attributes||(a.attributes={}),As(a.attributes,e.attributes)):this.trigger("warn",{message:"ignoring empty stream-inf attributes"})},media:function(){if(this.manifest.mediaGroups=this.manifest.mediaGroups||l,e.attributes&&e.attributes.TYPE&&e.attributes["GROUP-ID"]&&e.attributes.NAME){var t=this.manifest.mediaGroups[e.attributes.TYPE];t[e.attributes["GROUP-ID"]]=t[e.attributes["GROUP-ID"]]||{},i=t[e.attributes["GROUP-ID"]],(r={default:/yes/i.test(e.attributes.DEFAULT)}).default?r.autoselect=!0:r.autoselect=/yes/i.test(e.attributes.AUTOSELECT),e.attributes.LANGUAGE&&(r.language=e.attributes.LANGUAGE),e.attributes.URI&&(r.uri=e.attributes.URI),e.attributes["INSTREAM-ID"]&&(r.instreamId=e.attributes["INSTREAM-ID"]),e.attributes.CHARACTERISTICS&&(r.characteristics=e.attributes.CHARACTERISTICS),e.attributes.FORCED&&(r.forced=/yes/i.test(e.attributes.FORCED)),i[e.attributes.NAME]=r}else this.trigger("warn",{message:"ignoring incomplete or missing media group"})},discontinuity:function(){c+=1,a.discontinuity=!0,this.manifest.discontinuityStarts.push(s.length)},"program-date-time":function(){"undefined"==typeof this.manifest.dateTimeString&&(this.manifest.dateTimeString=e.dateTimeString,this.manifest.dateTimeObject=e.dateTimeObject),a.dateTimeString=e.dateTimeString,a.dateTimeObject=e.dateTimeObject},targetduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid target duration: "+e.duration}):this.manifest.targetDuration=e.duration},totalduration:function(){!isFinite(e.duration)||e.duration<0?this.trigger("warn",{message:"ignoring invalid total duration: "+e.duration}):this.manifest.totalDuration=e.duration},start:function(){e.attributes&&!isNaN(e.attributes["TIME-OFFSET"])?this.manifest.start={timeOffset:e.attributes["TIME-OFFSET"],precise:e.attributes.PRECISE}:this.trigger("warn",{message:"ignoring start declaration without appropriate attribute list"})},"cue-out":function(){a.cueOut=e.data},"cue-out-cont":function(){a.cueOutCont=e.data},"cue-in":function(){a.cueIn=e.data}}[e.tagType]||function(){}).call(n)},uri:function(){a.uri=e.uri,s.push(a),!this.manifest.targetDuration||"duration"in a||(this.trigger("warn",{message:"defaulting segment duration to the target duration"}),a.duration=this.manifest.targetDuration),u&&(a.key=u),a.timeline=c,o&&(a.map=o),a={}},comment:function(){},custom:function(){e.segment?(a.custom=a.custom||{},a.custom[e.customType]=e.data):(this.manifest.custom=this.manifest.custom||{},this.manifest.custom[e.customType]=e.data)}})[e.type].call(n)}),t}return Ls(i,e),i.prototype.push=function(t){this.lineStream.push(t)},i.prototype.end=function(){this.lineStream.push("\n")},i.prototype.addParser=function(t){this.parseStream.addParser(t)},i}(Os),Ms=function(t){var e,i=t.attributes,r=t.segments,n={attributes:(e={NAME:i.id,AUDIO:"audio",SUBTITLES:"subs",RESOLUTION:{width:i.width,height:i.height},CODECS:i.codecs,BANDWIDTH:i.bandwidth},e["PROGRAM-ID"]=1,e),uri:"",endList:"static"===(i.type||"static"),timeline:i.periodIndex,resolvedUri:"",targetDuration:i.duration,segments:r,mediaSequence:r.length?r[0].number:1};return i.contentProtection&&(n.contentProtection=i.contentProtection),n},Us=function(t){return!!t&&"object"===("undefined"==typeof t?"undefined":v(t))},Ns=function r(){for(var t=arguments.length,e=Array(t),i=0;i<t;i++)e[i]=arguments[i];return e.reduce(function(e,i){return Object.keys(i).forEach(function(t){Array.isArray(e[t])&&Array.isArray(i[t])?e[t]=e[t].concat(i[t]):Us(e[t])&&Us(i[t])?e[t]=r(e[t],i[t]):e[t]=i[t]}),e},{})},Bs=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Es.buildAbsoluteURL(g.location.href,t)),Es.buildAbsoluteURL(t,e))},js=function(t){var e=t.baseUrl,i=void 0===e?"":e,r=t.source,n=void 0===r?"":r,s=t.range,a=void 0===s?"":s,o={uri:n,resolvedUri:Bs(i||"",n)};if(a){var u=a.split("-"),l=parseInt(u[0],10),c=parseInt(u[1],10);o.byterange={length:c-l,offset:l}}return o},Fs=function(t,e){for(var i,r,n,s,a,o,u,l,c,h,d,p,f=t.type,m=void 0===f?"static":f,g=t.minimumUpdatePeriod,y=void 0===g?0:g,v=t.media,_=void 0===v?"":v,b=t.sourceDuration,T=t.timescale,S=void 0===T?1:T,k=t.startNumber,C=void 0===k?1:k,E=t.periodIndex,w=[],A=-1,L=0;L<e.length;L++){var P=e[L],O=P.d,I=P.r||0,x=P.t||0;A<0&&(A=x),x&&A<x&&(A=x);var D=void 0;if(I<0){var R=L+1;R===e.length?"dynamic"===m&&0<y&&0<_.indexOf("$Number$")?(r=A,n=O,void 0,s=(i=t).NOW,a=i.clientOffset,o=i.availabilityStartTime,u=i.timescale,l=void 0===u?1:u,c=i.start,h=void 0===c?0:c,d=i.minimumUpdatePeriod,p=(s+a)/1e3+(void 0===d?0:d)-(o+h),D=Math.ceil((p*l-r)/n)):D=(b*S-A)/O:D=(e[R].t-A)/O}else D=I+1;for(var M=C+w.length+D,U=C+w.length;U<M;)w.push({number:U,duration:O/S,time:A,timeline:E}),A+=O,U++}return w},Hs=function(t){return t.reduce(function(t,e){return t.concat(e)},[])},Vs=function(t){if(!t.length)return[];for(var e=[],i=0;i<t.length;i++)e.push(t[i]);return e},qs={static:function(t){var e=t.duration,i=t.timescale,r=void 0===i?1:i,n=t.sourceDuration;return{start:0,end:Math.ceil(n/(e/r))}},dynamic:function(t){var e=t.NOW,i=t.clientOffset,r=t.availabilityStartTime,n=t.timescale,s=void 0===n?1:n,a=t.duration,o=t.start,u=void 0===o?0:o,l=t.minimumUpdatePeriod,c=void 0===l?0:l,h=t.timeShiftBufferDepth,d=void 0===h?1/0:h,p=(e+i)/1e3,f=r+u,m=p+c-f,g=Math.ceil(m*s/a),y=Math.floor((p-f-d)*s/a),v=Math.floor((p-f)*s/a);return{start:Math.max(0,y),end:Math.min(g,v)}}},Ws=function(t){var o,e=t.type,i=void 0===e?"static":e,r=t.duration,n=t.timescale,s=void 0===n?1:n,a=t.sourceDuration,u=qs[i](t),l=function(t,e){for(var i=[],r=t;r<e;r++)i.push(r);return i}(u.start,u.end).map((o=t,function(t,e){var i=o.duration,r=o.timescale,n=void 0===r?1:r,s=o.periodIndex,a=o.startNumber;return{number:(void 0===a?1:a)+t,duration:i/n,timeline:s,time:e*i}}));if("static"===i){var c=l.length-1;l[c].duration=a-r/s*c}return l},zs=/\$([A-z]*)(?:(%0)([0-9]+)d)?\$/g,Gs=function(t,e){return t.replace(zs,(s=e,function(t,e,i,r){if("$$"===t)return"$";if("undefined"==typeof s[e])return t;var n=""+s[e];return"RepresentationID"===e?n:(r=i?parseInt(r,10):1)<=n.length?n:""+new Array(r-n.length+1).join("0")+n}));var s},Xs=function(i,t){var e,r,n={RepresentationID:i.id,Bandwidth:i.bandwidth||0},s=i.initialization,a=void 0===s?{sourceURL:"",range:""}:s,o=js({baseUrl:i.baseUrl,source:Gs(a.sourceURL,n),range:a.range});return(r=t,(e=i).duration||r?e.duration?Ws(e):Fs(e,r):[{number:e.startNumber||1,duration:e.sourceDuration,time:0,timeline:e.periodIndex}]).map(function(t){n.Number=t.number,n.Time=t.time;var e=Gs(i.media||"",n);return{uri:e,timeline:t.timeline,duration:t.duration,resolvedUri:Bs(i.baseUrl||"",e),map:o,number:t.number}})},Ys="INVALID_NUMBER_OF_PERIOD",$s="DASH_EMPTY_MANIFEST",Ks="DASH_INVALID_XML",Qs="NO_BASE_URL",Js="SEGMENT_TIME_UNSPECIFIED",Zs="UNSUPPORTED_UTC_TIMING_SCHEME",ta=function(u,t){var e=u.duration,i=u.segmentUrls,r=void 0===i?[]:i;if(!e&&!t||e&&t)throw new Error(Js);var n=r.map(function(t){return i=t,r=(e=u).baseUrl,n=e.initialization,a=js({baseUrl:r,source:(s=void 0===n?{}:n).sourceURL,range:s.range}),(o=js({baseUrl:r,source:i.media,range:i.mediaRange})).map=a,o;var e,i,r,n,s,a,o}),s=void 0;return e&&(s=Ws(u)),t&&(s=Fs(u,t)),s.map(function(t,e){if(n[e]){var i=n[e];return i.timeline=t.timeline,i.duration=t.duration,i.number=t.number,i}}).filter(function(t){return t})},ea=function(t){var e=t.baseUrl,i=t.initialization,r=void 0===i?{}:i,n=t.sourceDuration,s=t.timescale,a=void 0===s?1:s,o=t.indexRange,u=void 0===o?"":o,l=t.duration;if(!e)throw new Error(Qs);var c=js({baseUrl:e,source:r.sourceURL,range:r.range}),h=js({baseUrl:e,source:e,range:u});if(h.map=c,l){var d=Ws(t);d.length&&(h.duration=d[0].duration,h.timeline=d[0].timeline)}else n&&(h.duration=n/a,h.timeline=0);return h.number=0,[h]},ia=function(t){var e=t.attributes,i=t.segmentInfo,r=void 0,n=void 0;if(i.template?(n=Xs,r=Ns(e,i.template)):i.base?(n=ea,r=Ns(e,i.base)):i.list&&(n=ta,r=Ns(e,i.list)),!n)return{attributes:e};var s=n(r,i.timeline);if(r.duration){var a=r,o=a.duration,u=a.timescale,l=void 0===u?1:u;r.duration=o/l}else s.length?r.duration=s.reduce(function(t,e){return Math.max(t,Math.ceil(e.duration))},0):r.duration=0;return{attributes:r,segments:s}},ra=function(t,e){return Vs(t.childNodes).filter(function(t){return t.tagName===e})},na=function(t){return t.textContent.trim()},sa=function(t){var e=/P(?:(\d*)Y)?(?:(\d*)M)?(?:(\d*)D)?(?:T(?:(\d*)H)?(?:(\d*)M)?(?:([\d.]*)S)?)?/.exec(t);if(!e)return 0;var i=e.slice(1),r=i[0],n=i[1],s=i[2],a=i[3],o=i[4],u=i[5];return 31536e3*parseFloat(r||0)+2592e3*parseFloat(n||0)+86400*parseFloat(s||0)+3600*parseFloat(a||0)+60*parseFloat(o||0)+parseFloat(u||0)},aa={mediaPresentationDuration:function(t){return sa(t)},availabilityStartTime:function(t){return/^\d+-\d+-\d+T\d+:\d+:\d+(\.\d+)?$/.test(e=t)&&(e+="Z"),Date.parse(e)/1e3;var e},minimumUpdatePeriod:function(t){return sa(t)},timeShiftBufferDepth:function(t){return sa(t)},start:function(t){return sa(t)},width:function(t){return parseInt(t,10)},height:function(t){return parseInt(t,10)},bandwidth:function(t){return parseInt(t,10)},startNumber:function(t){return parseInt(t,10)},timescale:function(t){return parseInt(t,10)},duration:function(t){var e=parseInt(t,10);return isNaN(e)?sa(t):e},d:function(t){return parseInt(t,10)},t:function(t){return parseInt(t,10)},r:function(t){return parseInt(t,10)},DEFAULT:function(t){return t}},oa=function(t){return t&&t.attributes?Vs(t.attributes).reduce(function(t,e){var i=aa[e.name]||aa.DEFAULT;return t[e.name]=i(e.value),t},{}):{}};var ua,la,ca={"urn:uuid:1077efec-c0b2-4d02-ace3-3c1e52e2fb4b":"org.w3.clearkey","urn:uuid:edef8ba9-79d6-4ace-a3c8-27dcd51d21ed":"com.widevine.alpha","urn:uuid:9a04f079-9840-4286-ab92-e65be0885f95":"com.microsoft.playready","urn:uuid:f239e769-efa3-4850-9c16-a903c6932efb":"com.adobe.primetime"},ha=function(t,i){return i.length?Hs(t.map(function(e){return i.map(function(t){return Bs(e,na(t))})})):t},da=function(t){var e=ra(t,"SegmentTemplate")[0],i=ra(t,"SegmentList")[0],r=i&&ra(i,"SegmentURL").map(function(t){return Ns({tag:"SegmentURL"},oa(t))}),n=ra(t,"SegmentBase")[0],s=i||e,a=s&&ra(s,"SegmentTimeline")[0],o=i||n||e,u=o&&ra(o,"Initialization")[0],l=e&&oa(e);l&&u?l.initialization=u&&oa(u):l&&l.initialization&&(l.initialization={sourceURL:l.initialization});var c={template:l,timeline:a&&ra(a,"S").map(function(t){return oa(t)}),list:i&&Ns(oa(i),{segmentUrls:r,initialization:oa(u)}),base:n&&Ns(oa(n),{initialization:oa(u)})};return Object.keys(c).forEach(function(t){c[t]||delete c[t]}),c},pa=function(t){return t.reduce(function(t,e){var i=oa(e),r=ca[i.schemeIdUri];if(r){t[r]={attributes:i};var n=ra(e,"cenc:pssh")[0];if(n){var s=na(n),a=s&&function(t){for(var e=g.atob(t),i=new Uint8Array(e.length),r=0;r<e.length;r++)i[r]=e.charCodeAt(r);return i}(s);t[r].pssh=a}}return t},{})},fa=function(p,f,m){return function(t){var e=oa(t),i=ha(f,ra(t,"BaseURL")),r=ra(t,"Role")[0],n={role:oa(r)},s=Ns(p,e,n),a=pa(ra(t,"ContentProtection"));Object.keys(a).length&&(s=Ns(s,{contentProtection:a}));var o,u,l,c=da(t),h=ra(t,"Representation"),d=Ns(m,c);return Hs(h.map((o=s,u=i,l=d,function(t){var e=ra(t,"BaseURL"),i=ha(u,e),r=Ns(o,oa(t)),n=da(t);return i.map(function(t){return{segmentInfo:Ns(l,n),attributes:Ns(r,{baseUrl:t})}})})))}},ma=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=e.manifestUri,r=void 0===i?"":i,n=e.NOW,s=void 0===n?Date.now():n,a=e.clientOffset,o=void 0===a?0:a,u=ra(t,"Period");if(1!==u.length)throw new Error(Ys);var l,c,h=oa(t),d=ha([r],ra(t,"BaseURL"));return h.sourceDuration=h.mediaPresentationDuration||0,h.NOW=s,h.clientOffset=o,Hs(u.map((l=h,c=d,function(t,e){var i=ha(c,ra(t,"BaseURL")),r=oa(t),n=Ns(l,r,{periodIndex:e}),s=ra(t,"AdaptationSet"),a=da(t);return Hs(s.map(fa(n,i,a)))})))},ga=function(t){if(""===t)throw new Error($s);var e=(new g.DOMParser).parseFromString(t,"application/xml"),i=e&&"MPD"===e.documentElement.tagName?e.documentElement:null;if(!i||i&&0<i.getElementsByTagName("parsererror").length)throw new Error(Ks);return i},ya=function(t,e){return function(t){var e;if(!t.length)return{};var i=t[0].attributes,r=i.sourceDuration,n=i.minimumUpdatePeriod,s=void 0===n?0:n,a=t.filter(function(t){var e=t.attributes;return"video/mp4"===e.mimeType||"video"===e.contentType}).map(Ms),o=t.filter(function(t){var e=t.attributes;return"audio/mp4"===e.mimeType||"audio"===e.contentType}),u=t.filter(function(t){var e=t.attributes;return"text/vtt"===e.mimeType||"text"===e.contentType}),l={allowCache:!0,discontinuityStarts:[],segments:[],endList:!0,mediaGroups:(e={AUDIO:{},VIDEO:{}},e["CLOSED-CAPTIONS"]={},e.SUBTITLES={},e),uri:"",duration:r,playlists:a,minimumUpdatePeriod:1e3*s};return o.length&&(l.mediaGroups.AUDIO.audio=o.reduce(function(t,e){var i,r,n,s,a,o=e.attributes.role&&e.attributes.role.value||"main",u=e.attributes.lang||"",l="main";return u&&(l=e.attributes.lang+" ("+o+")"),t[l]&&t[l].playlists[0].attributes.BANDWIDTH>e.attributes.bandwidth||(t[l]={language:u,autoselect:!0,default:"main"===o,playlists:[(i=e,n=i.attributes,s=i.segments,a={attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth,CODECS:n.codecs},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1},n.contentProtection&&(a.contentProtection=n.contentProtection),a)],uri:""}),t},{})),u.length&&(l.mediaGroups.SUBTITLES.subs=u.reduce(function(t,e){var i,r,n,s,a=e.attributes.lang||"text";return t[a]||(t[a]={language:a,default:!1,autoselect:!1,playlists:[(i=e,n=i.attributes,s=i.segments,"undefined"==typeof s&&(s=[{uri:n.baseUrl,timeline:n.periodIndex,resolvedUri:n.baseUrl||"",duration:n.sourceDuration,number:0}],n.duration=n.sourceDuration),{attributes:(r={NAME:n.id,BANDWIDTH:n.bandwidth},r["PROGRAM-ID"]=1,r),uri:"",endList:"static"===(n.type||"static"),timeline:n.periodIndex,resolvedUri:n.baseUrl||"",targetDuration:n.duration,segments:s,mediaSequence:s.length?s[0].number:1})],uri:""}),t},{})),l}(ma(ga(t),e).map(ia))},va=function(t){return function(t){var e=ra(t,"UTCTiming")[0];if(!e)return null;var i=oa(e);switch(i.schemeIdUri){case"urn:mpeg:dash:utc:http-head:2014":case"urn:mpeg:dash:utc:http-head:2012":i.method="HEAD";break;case"urn:mpeg:dash:utc:http-xsdate:2014":case"urn:mpeg:dash:utc:http-iso:2014":case"urn:mpeg:dash:utc:http-xsdate:2012":case"urn:mpeg:dash:utc:http-iso:2012":i.method="GET";break;case"urn:mpeg:dash:utc:direct:2014":case"urn:mpeg:dash:utc:direct:2012":i.method="DIRECT",i.value=Date.parse(i.value);break;case"urn:mpeg:dash:utc:http-ntp:2014":case"urn:mpeg:dash:utc:ntp:2014":case"urn:mpeg:dash:utc:sntp:2014":default:throw new Error(Zs)}return i}(ga(t))},_a={toUnsigned:function(t){return t>>>0}},ba=_a.toUnsigned,Ta=Object.freeze({default:_a,__moduleExports:_a,toUnsigned:ba}),Sa=(Ta&&_a||Ta).toUnsigned;ua=function(t,e){var i,r,n,s,a,o=[];if(!e.length)return null;for(i=0;i<t.byteLength;)r=Sa(t[i]<<24|t[i+1]<<16|t[i+2]<<8|t[i+3]),n=la(t.subarray(i+4,i+8)),s=1<r?i+r:t.byteLength,n===e[0]&&(1===e.length?o.push(t.subarray(i+8,s)):(a=ua(t.subarray(i+8,s),e.slice(1))).length&&(o=o.concat(a))),i=s;return o};la=function(t){var e="";return e+=String.fromCharCode(t[0]),e+=String.fromCharCode(t[1]),e+=String.fromCharCode(t[2]),e+=String.fromCharCode(t[3])};var ka=function(t){return ua(t,["moov","trak"]).reduce(function(t,e){var i,r,n,s,a;return(i=ua(e,["tkhd"])[0])?(r=i[0],s=Sa(i[n=0===r?12:20]<<24|i[n+1]<<16|i[n+2]<<8|i[n+3]),(a=ua(e,["mdia","mdhd"])[0])?(n=0===(r=a[0])?12:20,t[s]=Sa(a[n]<<24|a[n+1]<<16|a[n+2]<<8|a[n+3]),t):null):null},{})},Ca=function(n,t){var e,i,r;return e=ua(t,["moof","traf"]),i=[].concat.apply([],e.map(function(r){return ua(r,["tfhd"]).map(function(t){var e,i;return e=Sa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),i=n[e]||9e4,(ua(r,["tfdt"]).map(function(t){var e,i;return e=t[0],i=Sa(t[4]<<24|t[5]<<16|t[6]<<8|t[7]),1===e&&(i*=Math.pow(2,32),i+=Sa(t[8]<<24|t[9]<<16|t[10]<<8|t[11])),i})[0]||1/0)/i})})),r=Math.min.apply(null,i),isFinite(r)?r:0},Ea={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},wa=Ea.H264_STREAM_TYPE,Aa=Ea.ADTS_STREAM_TYPE,La=Ea.METADATA_STREAM_TYPE,Pa=Object.freeze({default:Ea,__moduleExports:Ea,H264_STREAM_TYPE:wa,ADTS_STREAM_TYPE:Aa,METADATA_STREAM_TYPE:La}),Oa=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};Oa.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},Oa.prototype.push=function(t){this.trigger("data",t)},Oa.prototype.flush=function(t){this.trigger("done",t)};var Ia=Oa,xa=Object.freeze({default:Ia,__moduleExports:Ia}),Da=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},Ra=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=Da(t.dts,r),t.pts=Da(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};Ra.prototype=new(xa&&Ia||xa);var Ma={TimestampRolloverStream:Ra,handleRollover:Da},Ua=Ma.TimestampRolloverStream,Na=Ma.handleRollover,Ba=Object.freeze({default:Ma,__moduleExports:Ma,TimestampRolloverStream:Ua,handleRollover:Na}),ja=Pa&&Ea||Pa,Fa=function(t){var e=31&t[1];return e<<=8,e|=t[2]},Ha=function(t){return!!(64&t[1])},Va=function(t){var e=0;return 1<(48&t[3])>>>4&&(e+=t[4]+1),e},qa=function(t){switch(t){case 5:return"slice_layer_without_partitioning_rbsp_idr";case 6:return"sei_rbsp";case 7:return"seq_parameter_set_rbsp";case 8:return"pic_parameter_set_rbsp";case 9:return"access_unit_delimiter_rbsp";default:return null}},Wa={parseType:function(t,e){var i=Fa(t);return 0===i?"pat":i===e?"pmt":e?"pes":null},parsePat:function(t){var e=Ha(t),i=4+Va(t);return e&&(i+=t[i]+1),(31&t[i+10])<<8|t[i+11]},parsePmt:function(t){var e={},i=Ha(t),r=4+Va(t);if(i&&(r+=t[r]+1),1&t[r+5]){var n;n=3+((15&t[r+1])<<8|t[r+2])-4;for(var s=12+((15&t[r+10])<<8|t[r+11]);s<n;){var a=r+s;e[(31&t[a+1])<<8|t[a+2]]=t[a],s+=5+((15&t[a+3])<<8|t[a+4])}return e}},parsePayloadUnitStartIndicator:Ha,parsePesType:function(t,e){switch(e[Fa(t)]){case ja.H264_STREAM_TYPE:return"video";case ja.ADTS_STREAM_TYPE:return"audio";case ja.METADATA_STREAM_TYPE:return"timed-metadata";default:return null}},parsePesTime:function(t){if(!Ha(t))return null;var e=4+Va(t);if(e>=t.byteLength)return null;var i,r=null;return 192&(i=t[e+7])&&((r={}).pts=(14&t[e+9])<<27|(255&t[e+10])<<20|(254&t[e+11])<<12|(255&t[e+12])<<5|(254&t[e+13])>>>3,r.pts*=4,r.pts+=(6&t[e+13])>>>1,r.dts=r.pts,64&i&&(r.dts=(14&t[e+14])<<27|(255&t[e+15])<<20|(254&t[e+16])<<12|(255&t[e+17])<<5|(254&t[e+18])>>>3,r.dts*=4,r.dts+=(6&t[e+18])>>>1)),r},videoPacketContainsKeyFrame:function(t){for(var e=4+Va(t),i=t.subarray(e),r=0,n=0,s=!1;n<i.byteLength-3;n++)if(1===i[n+2]){r=n+5;break}for(;r<i.byteLength;)switch(i[r]){case 0:if(0!==i[r-1]){r+=2;break}if(0!==i[r-2]){r++;break}for(n+3!==r-2&&"slice_layer_without_partitioning_rbsp_idr"===qa(31&i[n+3])&&(s=!0);1!==i[++r]&&r<i.length;);n=r-2,r+=3;break;case 1:if(0!==i[r-1]||0!==i[r-2]){r+=3;break}"slice_layer_without_partitioning_rbsp_idr"===qa(31&i[n+3])&&(s=!0),n=r-2,r+=3;break;default:r+=3}return i=i.subarray(n),r-=n,n=0,i&&3<i.byteLength&&"slice_layer_without_partitioning_rbsp_idr"===qa(31&i[n+3])&&(s=!0),s}},za=Wa.parseType,Ga=Wa.parsePat,Xa=Wa.parsePmt,Ya=Wa.parsePayloadUnitStartIndicator,$a=Wa.parsePesType,Ka=Wa.parsePesTime,Qa=Wa.videoPacketContainsKeyFrame,Ja=Object.freeze({default:Wa,__moduleExports:Wa,parseType:za,parsePat:Ga,parsePmt:Xa,parsePayloadUnitStartIndicator:Ya,parsePesType:$a,parsePesTime:Ka,videoPacketContainsKeyFrame:Qa}),Za=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350],to=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},eo={parseId3TagSize:function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},parseAdtsSize:function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},parseType:function(t,e){return t[e]==="I".charCodeAt(0)&&t[e+1]==="D".charCodeAt(0)&&t[e+2]==="3".charCodeAt(0)?"timed-metadata":!0&t[e]&&240==(240&t[e+1])?"audio":null},parseSampleRate:function(t){for(var e=0;e+5<t.length;){if(255===t[e]&&240==(246&t[e+1]))return Za[(60&t[e+2])>>>2];e++}return null},parseAacTimestamp:function(t){var e,i,r;e=10,64&t[5]&&(e+=4,e+=to(t.subarray(10,14)));do{if((i=to(t.subarray(e+4,e+8)))<1)return null;if("PRIV"===String.fromCharCode(t[e],t[e+1],t[e+2],t[e+3])){r=t.subarray(e+10,e+i+10);for(var n=0;n<r.byteLength;n++)if(0===r[n]){if("com.apple.streaming.transportStreamTimestamp"===unescape(function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n}(r,0,n))){var s=r.subarray(n+1),a=(1&s[3])<<30|s[4]<<22|s[5]<<14|s[6]<<6|s[7]>>>2;return a*=4,a+=3&s[7]}break}}e+=10,e+=i}while(e<t.byteLength);return null}},io=eo.parseId3TagSize,ro=eo.parseAdtsSize,no=eo.parseType,so=eo.parseSampleRate,ao=eo.parseAacTimestamp,oo=Object.freeze({default:eo,__moduleExports:eo,parseId3TagSize:io,parseAdtsSize:ro,parseType:no,parseSampleRate:so,parseAacTimestamp:ao}),uo=Ja&&Wa||Ja,lo=oo&&eo||oo,co=(Ba&&Ma||Ba).handleRollover,ho={};ho.ts=uo,ho.aac=lo;var po=188,fo=function(t,e,i){for(var r,n,s,a,o=0,u=po,l=!1;u<t.byteLength;)if(71!==t[o]||71!==t[u])o++,u++;else{switch(r=t.subarray(o,u),ho.ts.parseType(r,e.pid)){case"pes":n=ho.ts.parsePesType(r,e.table),s=ho.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=ho.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o+=po,u+=po}for(o=(u=t.byteLength)-po,l=!1;0<=o;)if(71!==t[o]||71!==t[u])o--,u--;else{switch(r=t.subarray(o,u),ho.ts.parseType(r,e.pid)){case"pes":n=ho.ts.parsePesType(r,e.table),s=ho.ts.parsePayloadUnitStartIndicator(r),"audio"===n&&s&&(a=ho.ts.parsePesTime(r))&&(a.type="audio",i.audio.push(a),l=!0)}if(l)break;o-=po,u-=po}},mo=function(t,e,i){for(var r,n,s,a,o,u,l,c=0,h=po,d=!1,p={data:[],size:0};h<t.byteLength;)if(71!==t[c]||71!==t[h])c++,h++;else{switch(r=t.subarray(c,h),ho.ts.parseType(r,e.pid)){case"pes":if(n=ho.ts.parsePesType(r,e.table),s=ho.ts.parsePayloadUnitStartIndicator(r),"video"===n&&(s&&!d&&(a=ho.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0),!i.firstKeyFrame)){if(s&&0!==p.size){for(o=new Uint8Array(p.size),u=0;p.data.length;)l=p.data.shift(),o.set(l,u),u+=l.byteLength;ho.ts.videoPacketContainsKeyFrame(o)&&(i.firstKeyFrame=ho.ts.parsePesTime(o),i.firstKeyFrame.type="video"),p.size=0}p.data.push(r),p.size+=r.byteLength}}if(d&&i.firstKeyFrame)break;c+=po,h+=po}for(c=(h=t.byteLength)-po,d=!1;0<=c;)if(71!==t[c]||71!==t[h])c--,h--;else{switch(r=t.subarray(c,h),ho.ts.parseType(r,e.pid)){case"pes":n=ho.ts.parsePesType(r,e.table),s=ho.ts.parsePayloadUnitStartIndicator(r),"video"===n&&s&&(a=ho.ts.parsePesTime(r))&&(a.type="video",i.video.push(a),d=!0)}if(d)break;c-=po,h-=po}},go=function(t){var e={pid:null,table:null},i={};for(var r in function(t,e){for(var i,r=0,n=po;n<t.byteLength;)if(71!==t[r]||71!==t[n])r++,n++;else{switch(i=t.subarray(r,n),ho.ts.parseType(i,e.pid)){case"pat":e.pid||(e.pid=ho.ts.parsePat(i));break;case"pmt":e.table||(e.table=ho.ts.parsePmt(i))}if(e.pid&&e.table)return;r+=po,n+=po}}(t,e),e.table){if(e.table.hasOwnProperty(r))switch(e.table[r]){case ja.H264_STREAM_TYPE:i.video=[],mo(t,e,i),0===i.video.length&&delete i.video;break;case ja.ADTS_STREAM_TYPE:i.audio=[],fo(t,e,i),0===i.audio.length&&delete i.audio}}return i},yo=function(t,e){var i,r;return(r=(i=t)[0]==="I".charCodeAt(0)&&i[1]==="D".charCodeAt(0)&&i[2]==="3".charCodeAt(0)?function(t){for(var e,i=!1,r=0,n=null,s=null,a=0,o=0;3<=t.length-o;){switch(ho.aac.parseType(t,o)){case"timed-metadata":if(t.length-o<10){i=!0;break}if((a=ho.aac.parseId3TagSize(t,o))>t.length){i=!0;break}null===s&&(e=t.subarray(o,o+a),s=ho.aac.parseAacTimestamp(e)),o+=a;break;case"audio":if(t.length-o<7){i=!0;break}if((a=ho.aac.parseAdtsSize(t,o))>t.length){i=!0;break}null===n&&(e=t.subarray(o,o+a),n=ho.aac.parseSampleRate(e)),r++,o+=a;break;default:o++}if(i)return null}if(null===n||null===s)return null;var u=9e4/n;return{audio:[{type:"audio",dts:s,pts:s},{type:"audio",dts:s+1024*r*u,pts:s+1024*r*u}]}}(t):go(t))&&(r.audio||r.video)?(function(t,e){if(t.audio&&t.audio.length){var i=e;"undefined"==typeof i&&(i=t.audio[0].dts),t.audio.forEach(function(t){t.dts=co(t.dts,i),t.pts=co(t.pts,i),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4})}if(t.video&&t.video.length){var r=e;if("undefined"==typeof r&&(r=t.video[0].dts),t.video.forEach(function(t){t.dts=co(t.dts,r),t.pts=co(t.pts,r),t.dtsTime=t.dts/9e4,t.ptsTime=t.pts/9e4}),t.firstKeyFrame){var n=t.firstKeyFrame;n.dts=co(n.dts,r),n.pts=co(n.pts,r),n.dtsTime=n.dts/9e4,n.ptsTime=n.dts/9e4}}}(r,e),r):null};var vo=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},_o=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),bo=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},To=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},So=null,ko=function(){function c(t){vo(this,c),So||(So=To()),this._tables=[[So[0][0].slice(),So[0][1].slice(),So[0][2].slice(),So[0][3].slice(),So[0][4].slice()],[So[1][0].slice(),So[1][1].slice(),So[1][2].slice(),So[1][3].slice(),So[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),Co=function(){function t(){vo(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),Eo=function(e){function i(){vo(this,i);var t=bo(this,e.call(this,Co));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(Co),wo=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},Ao=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new ko(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=wo(r[m]),d=wo(r[m+1]),p=wo(r[m+2]),f=wo(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=wo(a[m]^o),a[m+1]=wo(a[m+1]^u),a[m+2]=wo(a[m+2]^l),a[m+3]=wo(a[m+3]^c),o=h,u=d,l=p,c=f;return s},Lo=function(){function u(t,e,i,r){vo(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new Eo,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([wo(s[o-4]),wo(s[o-3]),wo(s[o-2]),wo(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=Ao(e,i,r);n.set(t,e.byteOffset)}},_o(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),Po=function(t,e){return/^[a-z]+:/i.test(e)?e:(/\/\//i.test(t)||(t=Es.buildAbsoluteURL(g.location.href,t)),Es.buildAbsoluteURL(t,e))},Oo=Ss.mergeOptions,Io=Ss.log,xo=function(n,s){["AUDIO","SUBTITLES"].forEach(function(t){for(var e in n.mediaGroups[t])for(var i in n.mediaGroups[t][e]){var r=n.mediaGroups[t][e][i];s(r,t,e,i)}})},Do=function(t,e){var i=Oo(t,{}),r=i.playlists[e.uri];if(!r)return null;if(r.segments&&e.segments&&r.segments.length===e.segments.length&&r.mediaSequence===e.mediaSequence)return null;var n=Oo(r,e);r.segments&&(n.segments=function(t,e,i){var r=e.slice();i=i||0;for(var n=Math.min(t.length,e.length+i),s=i;s<n;s++)r[s-i]=Oo(t[s],r[s-i]);return r}(r.segments,e.segments,e.mediaSequence-r.mediaSequence)),n.segments.forEach(function(t){var e,i;e=t,i=n.resolvedUri,e.resolvedUri||(e.resolvedUri=Po(i,e.uri)),e.key&&!e.key.resolvedUri&&(e.key.resolvedUri=Po(i,e.key.uri)),e.map&&!e.map.resolvedUri&&(e.map.resolvedUri=Po(i,e.map.uri))});for(var s=0;s<i.playlists.length;s++)i.playlists[s].uri===e.uri&&(i.playlists[s]=n);return i.playlists[e.uri]=n,i},Ro=function(t){for(var e=t.playlists.length;e--;){var i=t.playlists[e];(t.playlists[i.uri]=i).resolvedUri=Po(t.uri,i.uri),i.id=e,i.attributes||(i.attributes={},Io.warn("Invalid playlist STREAM-INF detected. Missing BANDWIDTH attribute."))}},Mo=function(e){xo(e,function(t){t.uri&&(t.resolvedUri=Po(e.uri,t.uri))})},Uo=function(t,e){var i=t.segments[t.segments.length-1];return e&&i&&i.duration?1e3*i.duration:500*(t.targetDuration||10)},No=function(n){function s(t,e,i){y(this,s);var r=b(this,n.call(this));if(r.srcUrl=t,r.hls_=e,r.withCredentials=i,!r.srcUrl)throw new Error("A non-empty playlist URL is required");return r.state="HAVE_NOTHING",r.on("mediaupdatetimeout",function(){"HAVE_METADATA"===r.state&&(r.state="HAVE_CURRENT_METADATA",r.request=r.hls_.xhr({uri:Po(r.master.uri,r.media().uri),withCredentials:r.withCredentials},function(t,e){if(r.request)return t?r.playlistRequestError(r.request,r.media().uri,"HAVE_METADATA"):void r.haveMetadata(r.request,r.media().uri)}))}),r}return _(s,n),s.prototype.playlistRequestError=function(t,e,i){this.request=null,i&&(this.state=i),this.error={playlist:this.master.playlists[e],status:t.status,message:"HLS playlist request error at URL: "+e,responseText:t.responseText,code:500<=t.status?4:2},this.trigger("error")},s.prototype.haveMetadata=function(t,e){var i=this;this.request=null,this.state="HAVE_METADATA";var r=new Rs;r.push(t.responseText),r.end(),r.manifest.uri=e,r.manifest.attributes=r.manifest.attributes||{};var n=Do(this.master,r.manifest);this.targetDuration=r.manifest.targetDuration,n?(this.master=n,this.media_=this.master.playlists[r.manifest.uri]):this.trigger("playlistunchanged"),this.media().endList||(g.clearTimeout(this.mediaUpdateTimeout),this.mediaUpdateTimeout=g.setTimeout(function(){i.trigger("mediaupdatetimeout")},Uo(this.media(),!!n))),this.trigger("loadedplaylist")},s.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},s.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},s.prototype.media=function(i){var r=this;if(!i)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var n=this.state;if("string"==typeof i){if(!this.master.playlists[i])throw new Error("Unknown playlist URI: "+i);i=this.master.playlists[i]}var t=!this.media_||i.uri!==this.media_.uri;if(this.master.playlists[i.uri].endList)return this.request&&(this.request.onreadystatechange=null,this.request.abort(),this.request=null),this.state="HAVE_METADATA",this.media_=i,void(t&&(this.trigger("mediachanging"),this.trigger("mediachange")));if(t){if(this.state="SWITCHING_MEDIA",this.request){if(Po(this.master.uri,i.uri)===this.request.url)return;this.request.onreadystatechange=null,this.request.abort(),this.request=null}this.media_&&this.trigger("mediachanging"),this.request=this.hls_.xhr({uri:Po(this.master.uri,i.uri),withCredentials:this.withCredentials},function(t,e){if(r.request){if(t)return r.playlistRequestError(r.request,i.uri,n);r.haveMetadata(e,i.uri),"HAVE_MASTER"===n?r.trigger("loadedmetadata"):r.trigger("mediachange")}})}},s.prototype.pause=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout),"HAVE_NOTHING"===this.state&&(this.started=!1),"SWITCHING_MEDIA"===this.state?this.media_?this.state="HAVE_METADATA":this.state="HAVE_MASTER":"HAVE_CURRENT_METADATA"===this.state&&(this.state="HAVE_METADATA")},s.prototype.load=function(t){var e=this;g.clearTimeout(this.mediaUpdateTimeout);var i=this.media();if(t){var r=i?i.targetDuration/2*1e3:5e3;this.mediaUpdateTimeout=g.setTimeout(function(){return e.load()},r)}else this.started?i&&!i.endList?this.trigger("mediaupdatetimeout"):this.trigger("loadedplaylist"):this.start()},s.prototype.start=function(){var r=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"HLS playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");var i=new Rs;return i.push(e.responseText),i.end(),r.state="HAVE_MASTER",i.manifest.uri=r.srcUrl,i.manifest.playlists?(r.master=i.manifest,Ro(r.master),Mo(r.master),r.trigger("loadedplaylist"),void(r.request||r.media(i.manifest.playlists[0]))):(r.master={mediaGroups:{AUDIO:{},VIDEO:{},"CLOSED-CAPTIONS":{},SUBTITLES:{}},uri:g.location.href,playlists:[{uri:r.srcUrl,id:0}]},r.master.playlists[r.srcUrl]=r.master.playlists[0],r.master.playlists[0].resolvedUri=r.srcUrl,r.master.playlists[0].attributes=r.master.playlists[0].attributes||{},r.haveMetadata(e,r.srcUrl),r.trigger("loadedmetadata"))}})},s}(Ss.EventTarget),Bo=Ss.createTimeRange,jo=function(t,e,i){var r,n;return"undefined"==typeof e&&(e=t.mediaSequence+t.segments.length),e<t.mediaSequence?0:(r=function(t,e){var i=0,r=e-t.mediaSequence,n=t.segments[r];if(n){if("undefined"!=typeof n.start)return{result:n.start,precise:!0};if("undefined"!=typeof n.end)return{result:n.end-n.duration,precise:!0}}for(;r--;){if("undefined"!=typeof(n=t.segments[r]).end)return{result:i+n.end,precise:!0};if(i+=n.duration,"undefined"!=typeof n.start)return{result:i+n.start,precise:!0}}return{result:i,precise:!1}}(t,e)).precise?r.result:(n=function(t,e){for(var i=0,r=void 0,n=e-t.mediaSequence;n<t.segments.length;n++){if("undefined"!=typeof(r=t.segments[n]).start)return{result:r.start-i,precise:!0};if(i+=r.duration,"undefined"!=typeof r.end)return{result:r.end-i,precise:!0}}return{result:-1,precise:!1}}(t,e)).precise?n.result:r.result+i},Fo=function(t,e,i){if(!t)return 0;if("number"!=typeof i&&(i=0),"undefined"==typeof e){if(t.totalDuration)return t.totalDuration;if(!t.endList)return g.Infinity}return jo(t,e,i)},Ho=function(t,e,i){var r=0;if(i<e){var n=[i,e];e=n[0],i=n[1]}if(e<0){for(var s=e;s<Math.min(0,i);s++)r+=t.targetDuration;e=0}for(var a=e;a<i;a++)r+=t.segments[a].duration;return r},Vo=function(t){if(!t.segments.length)return 0;for(var e=t.segments.length-1,i=t.segments[e].duration||t.targetDuration,r=i+2*t.targetDuration;e--&&!(r<=(i+=t.segments[e].duration)););return Math.max(0,e)},qo=function(t,e,i){if(!t||!t.segments)return null;if(t.endList)return Fo(t);if(null===e)return null;e=e||0;var r=i?Vo(t):t.segments.length;return jo(t,t.mediaSequence+r,e)},Wo=function(t){return t-Math.floor(t)==0},zo=function(t,e){if(Wo(e))return e+.1*t;for(var i=e.toString().split(".")[1].length,r=1;r<=i;r++){var n=Math.pow(10,r),s=e*n;if(Wo(s)||r===i)return(s+t)/n}},Go=zo.bind(null,1),Xo=zo.bind(null,-1),Yo=function(t){return t.excludeUntil&&t.excludeUntil>Date.now()},$o=function(t){return t.excludeUntil&&t.excludeUntil===1/0},Ko=function(t){var e=Yo(t);return!t.disabled&&!e},Qo=function(t,e){return e.attributes&&e.attributes[t]},Jo=function(t,e){if(1===t.playlists.length)return!0;var i=e.attributes.BANDWIDTH||Number.MAX_VALUE;return 0===t.playlists.filter(function(t){return!!Ko(t)&&(t.attributes.BANDWIDTH||0)<i}).length},Zo={duration:Fo,seekable:function(t,e){var i=e||0,r=qo(t,e,!0);return null===r?Bo():Bo(i,r)},safeLiveIndex:Vo,getMediaInfoForTime:function(t,e,i,r){var n=void 0,s=void 0,a=t.segments.length,o=e-r;if(o<0){if(0<i)for(n=i-1;0<=n;n--)if(s=t.segments[n],0<(o+=Xo(s.duration)))return{mediaIndex:n,startTime:r-Ho(t,i,n)};return{mediaIndex:0,startTime:e}}if(i<0){for(n=i;n<0;n++)if((o-=t.targetDuration)<0)return{mediaIndex:0,startTime:e};i=0}for(n=i;n<a;n++)if(s=t.segments[n],(o-=Go(s.duration))<0)return{mediaIndex:n,startTime:r+Ho(t,i,n)};return{mediaIndex:a-1,startTime:e}},isEnabled:Ko,isDisabled:function(t){return t.disabled},isBlacklisted:Yo,isIncompatible:$o,playlistEnd:qo,isAes:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].key)return!0;return!1},isFmp4:function(t){for(var e=0;e<t.segments.length;e++)if(t.segments[e].map)return!0;return!1},hasAttribute:Qo,estimateSegmentRequestTime:function(t,e,i){var r=3<arguments.length&&void 0!==arguments[3]?arguments[3]:0;return Qo("BANDWIDTH",i)?(t*i.attributes.BANDWIDTH-8*r)/e:NaN},isLowestEnabledRendition:Jo},tu=Ss.xhr,eu=Ss.mergeOptions,iu=function(){return function t(e,r){e=eu({timeout:45e3},e);var i=t.beforeRequest||Ss.Hls.xhr.beforeRequest;if(i&&"function"==typeof i){var n=i(e);n&&(e=n)}var s=tu(e,function(t,e){var i=s.response;!t&&i&&(s.responseTime=Date.now(),s.roundTripTime=s.responseTime-s.requestTime,s.bytesReceived=i.byteLength||i.length,s.bandwidth||(s.bandwidth=Math.floor(s.bytesReceived/s.roundTripTime*8*1e3))),e.headers&&(s.responseHeaders=e.headers),t&&"ETIMEDOUT"===t.code&&(s.timedout=!0),t||s.aborted||200===e.statusCode||206===e.statusCode||0===e.statusCode||(t=new Error("XHR Failed with a response of: "+(s&&(i||s.responseText)))),r(t,s)}),a=s.abort;return s.abort=function(){return s.aborted=!0,a.apply(s,arguments)},s.uri=e.uri,s.requestTime=Date.now(),s}},ru=function(t,e){var i=t.toString(16);return"00".substring(0,2-i.length)+i+(e%2?" ":"")},nu=function(t){return 32<=t&&t<126?String.fromCharCode(t):"."},su=function(i){var r={};return Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r},au=function(t){var e=t.byterange||{length:1/0,offset:0};return[e.length,e.offset,t.resolvedUri].join(",")},ou=function(t){for(var e=Array.prototype.slice.call(t),i="",r=0;r<e.length/16;r++)i+=e.slice(16*r,16*r+16).map(ru).join("")+" "+e.slice(16*r,16*r+16).map(nu).join("")+"\n";return i},uu=Object.freeze({createTransferableMessage:su,initSegmentId:au,hexDump:ou,tagDump:function(t){var e=t.bytes;return ou(e)},textRanges:function(t){var e,i,r="",n=void 0;for(n=0;n<t.length;n++)r+=(i=n,(e=t).start(i)+"-"+e.end(i)+" ");return r}}),lu=1/30,cu=function(t,e){var i=[],r=void 0;if(t&&t.length)for(r=0;r<t.length;r++)e(t.start(r),t.end(r))&&i.push([t.start(r),t.end(r)]);return Ss.createTimeRanges(i)},hu=function(t,i){return cu(t,function(t,e){return t-lu<=i&&i<=e+lu})},du=function(t,e){return cu(t,function(t){return e<=t-lu})},pu=function(t){var e=[];if(!t||!t.length)return"";for(var i=0;i<t.length;i++)e.push(t.start(i)+" => "+t.end(i));return e.join(", ")},fu=function(t){for(var e=[],i=0;i<t.length;i++)e.push({start:t.start(i),end:t.end(i)});return e},mu=function(t,e,i){var r=void 0,n=void 0;if(i&&i.cues)for(r=i.cues.length;r--;)(n=i.cues[r]).startTime<=e&&n.endTime>=t&&i.removeCue(n)},gu=function(t){return isNaN(t)||Math.abs(t)===1/0?Number.MAX_VALUE:t},yu=function(t,e,i){var n=g.WebKitDataCue||g.VTTCue;if(e&&e.forEach(function(t){var e=t.stream;this.inbandTextTracks_[e].addCue(new n(t.startTime+this.timestampOffset,t.endTime+this.timestampOffset,t.text))},t),i){var s=gu(t.mediaSource_.duration);if(i.forEach(function(t){var r=t.cueTime+this.timestampOffset;t.frames.forEach(function(t){var e,i=new n(r,r,t.value||t.url||t.data||"");i.frame=t,i.value=t,e=i,Object.defineProperties(e.frame,{id:{get:function(){return Ss.log.warn("cue.frame.id is deprecated. Use cue.value.key instead."),e.value.key}},value:{get:function(){return Ss.log.warn("cue.frame.value is deprecated. Use cue.value.data instead."),e.value.data}},privateData:{get:function(){return Ss.log.warn("cue.frame.privateData is deprecated. Use cue.value.data instead."),e.value.data}}}),this.metadataTrack_.addCue(i)},this)},t),t.metadataTrack_&&t.metadataTrack_.cues&&t.metadataTrack_.cues.length){for(var r=t.metadataTrack_.cues,a=[],o=0;o<r.length;o++)r[o]&&a.push(r[o]);var u=a.reduce(function(t,e){var i=t[e.startTime]||[];return i.push(e),t[e.startTime]=i,t},{}),l=Object.keys(u).sort(function(t,e){return Number(t)-Number(e)});l.forEach(function(t,e){var i=u[t],r=Number(l[e+1])||s;i.forEach(function(t){t.endTime=r})})}}},vu="undefined"!=typeof window?window:{},_u="undefined"==typeof Symbol?"__target":Symbol(),bu="application/javascript",Tu=vu.BlobBuilder||vu.WebKitBlobBuilder||vu.MozBlobBuilder||vu.MSBlobBuilder,Su=vu.URL||vu.webkitURL||Su&&Su.msURL,ku=vu.Worker;function Cu(n,s){return function(t){var e=this;if(!s)return new ku(n);if(ku&&!t){var i=Lu(s.toString().replace(/^function.+?{/,"").slice(0,-1));return this[_u]=new ku(i),function(t,e){if(!t||!e)return;var i=t.terminate;t.objURL=e,t.terminate=function(){t.objURL&&Su.revokeObjectURL(t.objURL),i.call(t)}}(this[_u],i),this[_u]}var r={postMessage:function(t){e.onmessage&&setTimeout(function(){e.onmessage({data:t,target:r})})}};s.call(r),this.postMessage=function(t){setTimeout(function(){r.onmessage({data:t,target:e})})},this.isThisThread=!0}}if(ku){var Eu,wu=Lu("self.onmessage = function () {}"),Au=new Uint8Array(1);try{(Eu=new ku(wu)).postMessage(Au,[Au.buffer])}catch(t){ku=null}finally{Su.revokeObjectURL(wu),Eu&&Eu.terminate()}}function Lu(e){try{return Su.createObjectURL(new Blob([e],{type:bu}))}catch(t){var i=new Tu;return i.append(e),Su.createObjectURL(i.getBlob(type))}}var Pu=new Cu("./transmuxer-worker.worker.js",function(ie,t){var re=this;!function(){var o,e,i,n,s,r,t,a,u,l,c,h,d,p,f,m,g,y,v,_,b,T,S,k,C,E,w,A,L,P,O,I,x,D,R,M,U,N,B,j,F="undefined"!=typeof ie?ie:"undefined"!=typeof global?global:"undefined"!=typeof re?re:{},H="undefined"!=typeof ie?ie:"undefined"!=typeof F?F:"undefined"!=typeof re?re:{},V=Math.pow(2,32)-1;!function(){var t;if(T={avc1:[],avcC:[],btrt:[],dinf:[],dref:[],esds:[],ftyp:[],hdlr:[],mdat:[],mdhd:[],mdia:[],mfhd:[],minf:[],moof:[],moov:[],mp4a:[],mvex:[],mvhd:[],sdtp:[],smhd:[],stbl:[],stco:[],stsc:[],stsd:[],stsz:[],stts:[],styp:[],tfdt:[],tfhd:[],traf:[],trak:[],trun:[],trex:[],tkhd:[],vmhd:[]},"undefined"!=typeof Uint8Array){for(t in T)T.hasOwnProperty(t)&&(T[t]=[t.charCodeAt(0),t.charCodeAt(1),t.charCodeAt(2),t.charCodeAt(3)]);S=new Uint8Array(["i".charCodeAt(0),"s".charCodeAt(0),"o".charCodeAt(0),"m".charCodeAt(0)]),C=new Uint8Array(["a".charCodeAt(0),"v".charCodeAt(0),"c".charCodeAt(0),"1".charCodeAt(0)]),k=new Uint8Array([0,0,0,1]),E=new Uint8Array([0,0,0,0,0,0,0,0,118,105,100,101,0,0,0,0,0,0,0,0,0,0,0,0,86,105,100,101,111,72,97,110,100,108,101,114,0]),w=new Uint8Array([0,0,0,0,0,0,0,0,115,111,117,110,0,0,0,0,0,0,0,0,0,0,0,0,83,111,117,110,100,72,97,110,100,108,101,114,0]),A={video:E,audio:w},O=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,12,117,114,108,32,0,0,0,1]),P=new Uint8Array([0,0,0,0,0,0,0,0]),I=new Uint8Array([0,0,0,0,0,0,0,0]),x=I,D=new Uint8Array([0,0,0,0,0,0,0,0,0,0,0,0]),R=I,L=new Uint8Array([0,0,0,1,0,0,0,0,0,0,0,0])}}(),o=function(t){var e,i,r=[],n=0;for(e=1;e<arguments.length;e++)r.push(arguments[e]);for(e=r.length;e--;)n+=r[e].byteLength;for(i=new Uint8Array(n+8),new DataView(i.buffer,i.byteOffset,i.byteLength).setUint32(0,i.byteLength),i.set(t,4),e=0,n=8;e<r.length;e++)i.set(r[e],n),n+=r[e].byteLength;return i},e=function(){return o(T.dinf,o(T.dref,O))},i=function(t){return o(T.esds,new Uint8Array([0,0,0,0,3,25,0,0,0,4,17,64,21,0,6,0,0,0,218,192,0,0,218,192,5,2,t.audioobjecttype<<3|t.samplingfrequencyindex>>>1,t.samplingfrequencyindex<<7|t.channelcount<<3,6,1,2]))},f=function(t){return o(T.hdlr,A[t])},p=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,2,0,0,0,3,0,1,95,144,t.duration>>>24&255,t.duration>>>16&255,t.duration>>>8&255,255&t.duration,85,196,0,0]);return t.samplerate&&(e[12]=t.samplerate>>>24&255,e[13]=t.samplerate>>>16&255,e[14]=t.samplerate>>>8&255,e[15]=255&t.samplerate),o(T.mdhd,e)},d=function(t){return o(T.mdia,p(t),f(t.type),r(t))},s=function(t){return o(T.mfhd,new Uint8Array([0,0,0,0,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t]))},r=function(t){return o(T.minf,"video"===t.type?o(T.vmhd,L):o(T.smhd,P),e(),g(t))},t=function(t,e){for(var i=[],r=e.length;r--;)i[r]=v(e[r]);return o.apply(null,[T.moof,s(t)].concat(i))},a=function(t){for(var e=t.length,i=[];e--;)i[e]=c(t[e]);return o.apply(null,[T.moov,l(4294967295)].concat(i).concat(u(t)))},u=function(t){for(var e=t.length,i=[];e--;)i[e]=_(t[e]);return o.apply(null,[T.mvex].concat(i))},l=function(t){var e=new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,2,0,1,95,144,(4278190080&t)>>24,(16711680&t)>>16,(65280&t)>>8,255&t,0,1,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,255,255,255,255]);return o(T.mvhd,e)},m=function(t){var e,i,r=t.samples||[],n=new Uint8Array(4+r.length);for(i=0;i<r.length;i++)e=r[i].flags,n[i+4]=e.dependsOn<<4|e.isDependedOn<<2|e.hasRedundancy;return o(T.sdtp,n)},g=function(t){return o(T.stbl,y(t),o(T.stts,R),o(T.stsc,x),o(T.stsz,D),o(T.stco,I))},y=function(t){return o(T.stsd,new Uint8Array([0,0,0,0,0,0,0,1]),"video"===t.type?M(t):U(t))},M=function(t){var e,i=t.sps||[],r=t.pps||[],n=[],s=[];for(e=0;e<i.length;e++)n.push((65280&i[e].byteLength)>>>8),n.push(255&i[e].byteLength),n=n.concat(Array.prototype.slice.call(i[e]));for(e=0;e<r.length;e++)s.push((65280&r[e].byteLength)>>>8),s.push(255&r[e].byteLength),s=s.concat(Array.prototype.slice.call(r[e]));return o(T.avc1,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,(65280&t.width)>>8,255&t.width,(65280&t.height)>>8,255&t.height,0,72,0,0,0,72,0,0,0,0,0,0,0,1,19,118,105,100,101,111,106,115,45,99,111,110,116,114,105,98,45,104,108,115,0,0,0,0,0,0,0,0,0,0,0,0,0,24,17,17]),o(T.avcC,new Uint8Array([1,t.profileIdc,t.profileCompatibility,t.levelIdc,255].concat([i.length]).concat(n).concat([r.length]).concat(s))),o(T.btrt,new Uint8Array([0,28,156,128,0,45,198,192,0,45,198,192])))},U=function(t){return o(T.mp4a,new Uint8Array([0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,(65280&t.channelcount)>>8,255&t.channelcount,(65280&t.samplesize)>>8,255&t.samplesize,0,0,0,0,(65280&t.samplerate)>>8,255&t.samplerate,0,0]),i(t))},h=function(t){var e=new Uint8Array([0,0,0,7,0,0,0,0,0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,0,(4278190080&t.duration)>>24,(16711680&t.duration)>>16,(65280&t.duration)>>8,255&t.duration,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0,0,0,64,0,0,0,(65280&t.width)>>8,255&t.width,0,0,(65280&t.height)>>8,255&t.height,0,0]);return o(T.tkhd,e)},v=function(t){var e,i,r,n,s,a;return e=o(T.tfhd,new Uint8Array([0,0,0,58,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,0])),s=Math.floor(t.baseMediaDecodeTime/(V+1)),a=Math.floor(t.baseMediaDecodeTime%(V+1)),i=o(T.tfdt,new Uint8Array([1,0,0,0,s>>>24&255,s>>>16&255,s>>>8&255,255&s,a>>>24&255,a>>>16&255,a>>>8&255,255&a])),92,"audio"===t.type?(r=b(t,92),o(T.traf,e,i,r)):(n=m(t),r=b(t,n.length+92),o(T.traf,e,i,r,n))},c=function(t){return t.duration=t.duration||4294967295,o(T.trak,h(t),d(t))},_=function(t){var e=new Uint8Array([0,0,0,0,(4278190080&t.id)>>24,(16711680&t.id)>>16,(65280&t.id)>>8,255&t.id,0,0,0,1,0,0,0,0,0,0,0,0,0,1,0,1]);return"video"!==t.type&&(e[e.length-1]=0),o(T.trex,e)},j=function(t,e){var i=0,r=0,n=0,s=0;return t.length&&(void 0!==t[0].duration&&(i=1),void 0!==t[0].size&&(r=2),void 0!==t[0].flags&&(n=4),void 0!==t[0].compositionTimeOffset&&(s=8)),[0,0,i|r|n|s,1,(4278190080&t.length)>>>24,(16711680&t.length)>>>16,(65280&t.length)>>>8,255&t.length,(4278190080&e)>>>24,(16711680&e)>>>16,(65280&e)>>>8,255&e]},B=function(t,e){var i,r,n,s;for(e+=20+16*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size,n.flags.isLeading<<2|n.flags.dependsOn,n.flags.isDependedOn<<6|n.flags.hasRedundancy<<4|n.flags.paddingValue<<1|n.flags.isNonSyncSample,61440&n.flags.degradationPriority,15&n.flags.degradationPriority,(4278190080&n.compositionTimeOffset)>>>24,(16711680&n.compositionTimeOffset)>>>16,(65280&n.compositionTimeOffset)>>>8,255&n.compositionTimeOffset]);return o(T.trun,new Uint8Array(i))},N=function(t,e){var i,r,n,s;for(e+=20+8*(r=t.samples||[]).length,i=j(r,e),s=0;s<r.length;s++)n=r[s],i=i.concat([(4278190080&n.duration)>>>24,(16711680&n.duration)>>>16,(65280&n.duration)>>>8,255&n.duration,(4278190080&n.size)>>>24,(16711680&n.size)>>>16,(65280&n.size)>>>8,255&n.size]);return o(T.trun,new Uint8Array(i))},b=function(t,e){return"audio"===t.type?N(t,e):B(t,e)};var q={ftyp:n=function(){return o(T.ftyp,S,k,S,C)},mdat:function(t){return o(T.mdat,t)},moof:t,moov:a,initSegment:function(t){var e,i=n(),r=a(t);return(e=new Uint8Array(i.byteLength+r.byteLength)).set(i),e.set(r,i.byteLength),e}},W=function(){this.init=function(){var s={};this.on=function(t,e){s[t]||(s[t]=[]),s[t]=s[t].concat(e)},this.off=function(t,e){var i;return!!s[t]&&(i=s[t].indexOf(e),s[t]=s[t].slice(),s[t].splice(i,1),-1<i)},this.trigger=function(t){var e,i,r,n;if(e=s[t])if(2===arguments.length)for(r=e.length,i=0;i<r;++i)e[i].call(this,arguments[1]);else{for(n=[],i=arguments.length,i=1;i<arguments.length;++i)n.push(arguments[i]);for(r=e.length,i=0;i<r;++i)e[i].apply(this,n)}},this.dispose=function(){s={}}}};W.prototype.pipe=function(e){return this.on("data",function(t){e.push(t)}),this.on("done",function(t){e.flush(t)}),e},W.prototype.push=function(t){this.trigger("data",t)},W.prototype.flush=function(t){this.trigger("done",t)};var z=W,G=function t(){t.prototype.init.call(this),this.captionPackets_=[],this.ccStreams_=[new Q(0,0),new Q(0,1),new Q(1,0),new Q(1,1)],this.reset(),this.ccStreams_.forEach(function(t){t.on("data",this.trigger.bind(this,"data")),t.on("done",this.trigger.bind(this,"done"))},this)};(G.prototype=new z).push=function(t){var e,i,r;if("sei_rbsp"===t.nalUnitType&&(4===(e=function(t){for(var e=0,i={payloadType:-1,payloadSize:0},r=0,n=0;e<t.byteLength&&128!==t[e];){for(;255===t[e];)r+=255,e++;for(r+=t[e++];255===t[e];)n+=255,e++;if(n+=t[e++],!i.payload&&4===r){i.payloadType=r,i.payloadSize=n,i.payload=t.subarray(e,e+n);break}e+=n,n=r=0}return i}(t.escapedRBSP)).payloadType&&(i=181!==(r=e).payload[0]?null:49!=(r.payload[1]<<8|r.payload[2])?null:"GA94"!==String.fromCharCode(r.payload[3],r.payload[4],r.payload[5],r.payload[6])?null:3!==r.payload[7]?null:r.payload.subarray(8,r.payload.length-1))))if(t.dts<this.latestDts_)this.ignoreNextEqualDts_=!0;else{if(t.dts===this.latestDts_&&this.ignoreNextEqualDts_)return this.numSameDts_--,void(this.numSameDts_||(this.ignoreNextEqualDts_=!1));this.captionPackets_=this.captionPackets_.concat(function(t,e){var i,r,n,s,a=[];if(!(64&e[0]))return a;for(r=31&e[0],i=0;i<r;i++)s={type:3&e[2+(n=3*i)],pts:t},4&e[n+2]&&(s.ccData=e[n+3]<<8|e[n+4],a.push(s));return a}(t.pts,i)),this.latestDts_!==t.dts&&(this.numSameDts_=0),this.numSameDts_++,this.latestDts_=t.dts}},G.prototype.flush=function(){this.captionPackets_.length?(this.captionPackets_.forEach(function(t,e){t.presortIndex=e}),this.captionPackets_.sort(function(t,e){return t.pts===e.pts?t.presortIndex-e.presortIndex:t.pts-e.pts}),this.captionPackets_.forEach(function(t){t.type<2&&this.dispatchCea608Packet(t)},this),this.captionPackets_.length=0,this.ccStreams_.forEach(function(t){t.flush()},this)):this.ccStreams_.forEach(function(t){t.flush()},this)},G.prototype.reset=function(){this.latestDts_=null,this.ignoreNextEqualDts_=!1,this.numSameDts_=0,this.activeCea608Channel_=[null,null],this.ccStreams_.forEach(function(t){t.reset()})},G.prototype.dispatchCea608Packet=function(t){this.setsChannel1Active(t)?this.activeCea608Channel_[t.type]=0:this.setsChannel2Active(t)&&(this.activeCea608Channel_[t.type]=1),null!==this.activeCea608Channel_[t.type]&&this.ccStreams_[(t.type<<1)+this.activeCea608Channel_[t.type]].push(t)},G.prototype.setsChannel1Active=function(t){return 4096==(30720&t.ccData)},G.prototype.setsChannel2Active=function(t){return 6144==(30720&t.ccData)};var X={42:225,92:233,94:237,95:243,96:250,123:231,124:247,125:209,126:241,127:9608,304:174,305:176,306:189,307:191,308:8482,309:162,310:163,311:9834,312:224,313:160,314:232,315:226,316:234,317:238,318:244,319:251,544:193,545:201,546:211,547:218,548:220,549:252,550:8216,551:161,552:42,553:39,554:8212,555:169,556:8480,557:8226,558:8220,559:8221,560:192,561:194,562:199,563:200,564:202,565:203,566:235,567:206,568:207,569:239,570:212,571:217,572:249,573:219,574:171,575:187,800:195,801:227,802:205,803:204,804:236,805:210,806:242,807:213,808:245,809:123,810:125,811:92,812:94,813:95,814:124,815:126,816:196,817:228,818:214,819:246,820:223,821:165,822:164,823:9474,824:197,825:229,826:216,827:248,828:9484,829:9488,830:9492,831:9496},Y=function(t){return null===t?"":(t=X[t]||t,String.fromCharCode(t))},$=[4352,4384,4608,4640,5376,5408,5632,5664,5888,5920,4096,4864,4896,5120,5152],K=function(){for(var t=[],e=15;e--;)t.push("");return t},Q=function t(e,i){t.prototype.init.call(this),this.field_=e||0,this.dataChannel_=i||0,this.name_="CC"+(1+(this.field_<<1|this.dataChannel_)),this.setConstants(),this.reset(),this.push=function(t){var e,i,r,n,s;if((e=32639&t.ccData)!==this.lastControlCode_){if(4096==(61440&e)?this.lastControlCode_=e:e!==this.PADDING_&&(this.lastControlCode_=null),r=e>>>8,n=255&e,e!==this.PADDING_)if(e===this.RESUME_CAPTION_LOADING_)this.mode_="popOn";else if(e===this.END_OF_CAPTION_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),i=this.displayed_,this.displayed_=this.nonDisplayed_,this.nonDisplayed_=i,this.startPts_=t.pts;else if(e===this.ROLL_UP_2_ROWS_)this.topRow_=13,this.mode_="rollUp";else if(e===this.ROLL_UP_3_ROWS_)this.topRow_=12,this.mode_="rollUp";else if(e===this.ROLL_UP_4_ROWS_)this.topRow_=11,this.mode_="rollUp";else if(e===this.CARRIAGE_RETURN_)this.clearFormatting(t.pts),this.flushDisplayed(t.pts),this.shiftRowsUp_(),this.startPts_=t.pts;else if(e===this.BACKSPACE_)"popOn"===this.mode_?this.nonDisplayed_[14]=this.nonDisplayed_[14].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1);else if(e===this.ERASE_DISPLAYED_MEMORY_)this.flushDisplayed(t.pts),this.displayed_=K();else if(e===this.ERASE_NON_DISPLAYED_MEMORY_)this.nonDisplayed_=K();else if(e===this.RESUME_DIRECT_CAPTIONING_)this.mode_="paintOn";else if(this.isSpecialCharacter(r,n))s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isExtCharacter(r,n))"popOn"===this.mode_?this.nonDisplayed_[this.row_]=this.nonDisplayed_[this.row_].slice(0,-1):this.displayed_[14]=this.displayed_[14].slice(0,-1),s=Y((r=(3&r)<<8)|n),this[this.mode_](t.pts,s),this.column_++;else if(this.isMidRowCode(r,n))this.clearFormatting(t.pts),this[this.mode_](t.pts," "),this.column_++,14==(14&n)&&this.addFormatting(t.pts,["i"]),1==(1&n)&&this.addFormatting(t.pts,["u"]);else if(this.isOffsetControlCode(r,n))this.column_+=3&n;else if(this.isPAC(r,n)){var a=$.indexOf(7968&e);a!==this.row_&&(this.clearFormatting(t.pts),this.row_=a),1&n&&-1===this.formatting_.indexOf("u")&&this.addFormatting(t.pts,["u"]),16==(16&e)&&(this.column_=4*((14&e)>>1)),this.isColorPAC(n)&&14==(14&n)&&this.addFormatting(t.pts,["i"])}else this.isNormalChar(r)&&(0===n&&(n=null),s=Y(r),s+=Y(n),this[this.mode_](t.pts,s),this.column_+=s.length)}else this.lastControlCode_=null}};Q.prototype=new z,Q.prototype.flushDisplayed=function(t){var e=this.displayed_.map(function(t){return t.trim()}).join("\n").replace(/^\n+|\n+$/g,"");e.length&&this.trigger("data",{startPts:this.startPts_,endPts:t,text:e,stream:this.name_})},Q.prototype.reset=function(){this.mode_="popOn",this.topRow_=0,this.startPts_=0,this.displayed_=K(),this.nonDisplayed_=K(),this.lastControlCode_=null,this.column_=0,this.row_=14,this.formatting_=[]},Q.prototype.setConstants=function(){0===this.dataChannel_?(this.BASE_=16,this.EXT_=17,this.CONTROL_=(20|this.field_)<<8,this.OFFSET_=23):1===this.dataChannel_&&(this.BASE_=24,this.EXT_=25,this.CONTROL_=(28|this.field_)<<8,this.OFFSET_=31),this.PADDING_=0,this.RESUME_CAPTION_LOADING_=32|this.CONTROL_,this.END_OF_CAPTION_=47|this.CONTROL_,this.ROLL_UP_2_ROWS_=37|this.CONTROL_,this.ROLL_UP_3_ROWS_=38|this.CONTROL_,this.ROLL_UP_4_ROWS_=39|this.CONTROL_,this.CARRIAGE_RETURN_=45|this.CONTROL_,this.RESUME_DIRECT_CAPTIONING_=41|this.CONTROL_,this.BACKSPACE_=33|this.CONTROL_,this.ERASE_DISPLAYED_MEMORY_=44|this.CONTROL_,this.ERASE_NON_DISPLAYED_MEMORY_=46|this.CONTROL_},Q.prototype.isSpecialCharacter=function(t,e){return t===this.EXT_&&48<=e&&e<=63},Q.prototype.isExtCharacter=function(t,e){return(t===this.EXT_+1||t===this.EXT_+2)&&32<=e&&e<=63},Q.prototype.isMidRowCode=function(t,e){return t===this.EXT_&&32<=e&&e<=47},Q.prototype.isOffsetControlCode=function(t,e){return t===this.OFFSET_&&33<=e&&e<=35},Q.prototype.isPAC=function(t,e){return t>=this.BASE_&&t<this.BASE_+8&&64<=e&&e<=127},Q.prototype.isColorPAC=function(t){return 64<=t&&t<=79||96<=t&&t<=127},Q.prototype.isNormalChar=function(t){return 32<=t&&t<=127},Q.prototype.addFormatting=function(t,e){this.formatting_=this.formatting_.concat(e);var i=e.reduce(function(t,e){return t+"<"+e+">"},"");this[this.mode_](t,i)},Q.prototype.clearFormatting=function(t){if(this.formatting_.length){var e=this.formatting_.reverse().reduce(function(t,e){return t+"</"+e+">"},"");this.formatting_=[],this[this.mode_](t,e)}},Q.prototype.popOn=function(t,e){var i=this.nonDisplayed_[this.row_];i+=e,this.nonDisplayed_[this.row_]=i},Q.prototype.rollUp=function(t,e){var i=this.displayed_[14];i+=e,this.displayed_[14]=i},Q.prototype.shiftRowsUp_=function(){var t;for(t=0;t<this.topRow_;t++)this.displayed_[t]="";for(t=this.topRow_;t<14;t++)this.displayed_[t]=this.displayed_[t+1];this.displayed_[14]=""},Q.prototype.paintOn=function(){};var J={CaptionStream:G,Cea608Stream:Q},Z={H264_STREAM_TYPE:27,ADTS_STREAM_TYPE:15,METADATA_STREAM_TYPE:21},tt=function(t,e){var i=1;for(e<t&&(i=-1);4294967296<Math.abs(e-t);)t+=8589934592*i;return t},et=function t(e){var i,r;t.prototype.init.call(this),this.type_=e,this.push=function(t){t.type===this.type_&&(void 0===r&&(r=t.dts),t.dts=tt(t.dts,r),t.pts=tt(t.pts,r),i=t.dts,this.trigger("data",t))},this.flush=function(){r=i,this.trigger("done")},this.discontinuity=function(){i=r=void 0}};et.prototype=new z;var it,rt=et,nt=function(t,e,i){var r,n="";for(r=e;r<i;r++)n+="%"+("00"+t[r].toString(16)).slice(-2);return n},st=function(t,e,i){return decodeURIComponent(nt(t,e,i))},at=function(t){return t[0]<<21|t[1]<<14|t[2]<<7|t[3]},ot={TXXX:function(t){var e;if(3===t.data[0]){for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.value=st(t.data,e+1,t.data.length).replace(/\0*$/,"");break}t.data=t.value}},WXXX:function(t){var e;if(3===t.data[0])for(e=1;e<t.data.length;e++)if(0===t.data[e]){t.description=st(t.data,1,e),t.url=st(t.data,e+1,t.data.length);break}},PRIV:function(t){var e,i;for(e=0;e<t.data.length;e++)if(0===t.data[e]){t.owner=(i=t.data,unescape(nt(i,0,e)));break}t.privateData=t.data.subarray(e+1),t.data=t.privateData}};(it=function(t){var e,u={debug:!(!t||!t.debug),descriptor:t&&t.descriptor},l=0,c=[],h=0;if(it.prototype.init.call(this),this.dispatchType=Z.METADATA_STREAM_TYPE.toString(16),u.descriptor)for(e=0;e<u.descriptor.length;e++)this.dispatchType+=("00"+u.descriptor[e].toString(16)).slice(-2);this.push=function(t){var e,i,r,n,s;if("timed-metadata"===t.type)if(t.dataAlignmentIndicator&&(h=0,c.length=0),0===c.length&&(t.data.length<10||t.data[0]!=="I".charCodeAt(0)||t.data[1]!=="D".charCodeAt(0)||t.data[2]!=="3".charCodeAt(0)))u.debug;else if(c.push(t),h+=t.data.byteLength,1===c.length&&(l=at(t.data.subarray(6,10)),l+=10),!(h<l)){for(e={data:new Uint8Array(l),frames:[],pts:c[0].pts,dts:c[0].dts},s=0;s<l;)e.data.set(c[0].data.subarray(0,l-s),s),s+=c[0].data.byteLength,h-=c[0].data.byteLength,c.shift();i=10,64&e.data[5]&&(i+=4,i+=at(e.data.subarray(10,14)),l-=at(e.data.subarray(16,20)));do{if((r=at(e.data.subarray(i+4,i+8)))<1)return;if((n={id:String.fromCharCode(e.data[i],e.data[i+1],e.data[i+2],e.data[i+3]),data:e.data.subarray(i+10,i+r+10)}).key=n.id,ot[n.id]&&(ot[n.id](n),"com.apple.streaming.transportStreamTimestamp"===n.owner)){var a=n.data,o=(1&a[3])<<30|a[4]<<22|a[5]<<14|a[6]<<6|a[7]>>>2;o*=4,o+=3&a[7],n.timeStamp=o,void 0===e.pts&&void 0===e.dts&&(e.pts=n.timeStamp,e.dts=n.timeStamp),this.trigger("timestamp",n)}e.frames.push(n),i+=10,i+=r}while(i<l);this.trigger("data",e)}}}).prototype=new z;var ut,lt,ct,ht=it,dt=rt;(ut=function(){var n=new Uint8Array(188),s=0;ut.prototype.init.call(this),this.push=function(t){var e,i=0,r=188;for(s?((e=new Uint8Array(t.byteLength+s)).set(n.subarray(0,s)),e.set(t,s),s=0):e=t;r<e.byteLength;)71!==e[i]||71!==e[r]?(i++,r++):(this.trigger("data",e.subarray(i,r)),i+=188,r+=188);i<e.byteLength&&(n.set(e.subarray(i),0),s=e.byteLength-i)},this.flush=function(){188===s&&71===n[0]&&(this.trigger("data",n),s=0),this.trigger("done")}}).prototype=new z,(lt=function(){var r,n,s,a;lt.prototype.init.call(this),(a=this).packetsWaitingForPmt=[],this.programMapTable=void 0,r=function(t,e){var i=0;e.payloadUnitStartIndicator&&(i+=t[i]+1),"pat"===e.type?n(t.subarray(i),e):s(t.subarray(i),e)},n=function(t,e){e.section_number=t[7],e.last_section_number=t[8],a.pmtPid=(31&t[10])<<8|t[11],e.pmtPid=a.pmtPid},s=function(t,e){var i,r;if(1&t[5]){for(a.programMapTable={video:null,audio:null,"timed-metadata":{}},i=3+((15&t[1])<<8|t[2])-4,r=12+((15&t[10])<<8|t[11]);r<i;){var n=t[r],s=(31&t[r+1])<<8|t[r+2];n===Z.H264_STREAM_TYPE&&null===a.programMapTable.video?a.programMapTable.video=s:n===Z.ADTS_STREAM_TYPE&&null===a.programMapTable.audio?a.programMapTable.audio=s:n===Z.METADATA_STREAM_TYPE&&(a.programMapTable["timed-metadata"][s]=n),r+=5+((15&t[r+3])<<8|t[r+4])}e.programMapTable=a.programMapTable}},this.push=function(t){var e={},i=4;if(e.payloadUnitStartIndicator=!!(64&t[1]),e.pid=31&t[1],e.pid<<=8,e.pid|=t[2],1<(48&t[3])>>>4&&(i+=t[i]+1),0===e.pid)e.type="pat",r(t.subarray(i),e),this.trigger("data",e);else if(e.pid===this.pmtPid)for(e.type="pmt",r(t.subarray(i),e),this.trigger("data",e);this.packetsWaitingForPmt.length;)this.processPes_.apply(this,this.packetsWaitingForPmt.shift());else void 0===this.programMapTable?this.packetsWaitingForPmt.push([t,i,e]):this.processPes_(t,i,e)},this.processPes_=function(t,e,i){i.pid===this.programMapTable.video?i.streamType=Z.H264_STREAM_TYPE:i.pid===this.programMapTable.audio?i.streamType=Z.ADTS_STREAM_TYPE:i.streamType=this.programMapTable["timed-metadata"][i.pid],i.type="pes",i.data=t.subarray(e),this.trigger("data",i)}}).prototype=new z,lt.STREAM_TYPES={h264:27,adts:15},(ct=function(){var d=this,r={data:[],size:0},n={data:[],size:0},s={data:[],size:0},a=function(t,e,i){var r,n,s=new Uint8Array(t.size),a={type:e},o=0,u=0;if(t.data.length&&!(t.size<9)){for(a.trackId=t.data[0].pid,o=0;o<t.data.length;o++)n=t.data[o],s.set(n.data,u),u+=n.data.byteLength;var l,c,h;l=s,(c=a).packetLength=6+(l[4]<<8|l[5]),c.dataAlignmentIndicator=0!=(4&l[6]),192&(h=l[7])&&(c.pts=(14&l[9])<<27|(255&l[10])<<20|(254&l[11])<<12|(255&l[12])<<5|(254&l[13])>>>3,c.pts*=4,c.pts+=(6&l[13])>>>1,c.dts=c.pts,64&h&&(c.dts=(14&l[14])<<27|(255&l[15])<<20|(254&l[16])<<12|(255&l[17])<<5|(254&l[18])>>>3,c.dts*=4,c.dts+=(6&l[18])>>>1)),c.data=l.subarray(9+l[8]),r="video"===e||a.packetLength<=t.size,(i||r)&&(t.size=0,t.data.length=0),r&&d.trigger("data",a)}};ct.prototype.init.call(this),this.push=function(i){({pat:function(){},pes:function(){var t,e;switch(i.streamType){case Z.H264_STREAM_TYPE:case Z.H264_STREAM_TYPE:t=r,e="video";break;case Z.ADTS_STREAM_TYPE:t=n,e="audio";break;case Z.METADATA_STREAM_TYPE:t=s,e="timed-metadata";break;default:return}i.payloadUnitStartIndicator&&a(t,e,!0),t.data.push(i),t.size+=i.data.byteLength},pmt:function(){var t={type:"metadata",tracks:[]},e=i.programMapTable;null!==e.video&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.video,codec:"avc",type:"video"}),null!==e.audio&&t.tracks.push({timelineStartInfo:{baseMediaDecodeTime:0},id:+e.audio,codec:"adts",type:"audio"}),d.trigger("data",t)}})[i.type]()},this.flush=function(){a(r,"video"),a(n,"audio"),a(s,"timed-metadata"),this.trigger("done")}}).prototype=new z;var pt={PAT_PID:0,MP2T_PACKET_LENGTH:188,TransportPacketStream:ut,TransportParseStream:lt,ElementaryStream:ct,TimestampRolloverStream:dt,CaptionStream:J.CaptionStream,Cea608Stream:J.Cea608Stream,MetadataStream:ht};for(var ft in Z)Z.hasOwnProperty(ft)&&(pt[ft]=Z[ft]);var mt,gt=pt,yt=[96e3,88200,64e3,48e3,44100,32e3,24e3,22050,16e3,12e3,11025,8e3,7350];(mt=function(){var l;mt.prototype.init.call(this),this.push=function(t){var e,i,r,n,s,a,o=0,u=0;if("audio"===t.type)for(l?(n=l,(l=new Uint8Array(n.byteLength+t.data.byteLength)).set(n),l.set(t.data,n.byteLength)):l=t.data;o+5<l.length;)if(255===l[o]&&240==(246&l[o+1])){if(i=2*(1&~l[o+1]),e=(3&l[o+3])<<11|l[o+4]<<3|(224&l[o+5])>>5,a=9e4*(s=1024*(1+(3&l[o+6])))/yt[(60&l[o+2])>>>2],r=o+e,l.byteLength<r)return;if(this.trigger("data",{pts:t.pts+u*a,dts:t.dts+u*a,sampleCount:s,audioobjecttype:1+(l[o+2]>>>6&3),channelcount:(1&l[o+2])<<2|(192&l[o+3])>>>6,samplerate:yt[(60&l[o+2])>>>2],samplingfrequencyindex:(60&l[o+2])>>>2,samplesize:16,data:l.subarray(o+7+i,r)}),l.byteLength===r)return void(l=void 0);u++,l=l.subarray(r)}else o++},this.flush=function(){this.trigger("done")}}).prototype=new z;var vt,_t,bt,Tt=mt,St=function(r){var n=r.byteLength,s=0,a=0;this.length=function(){return 8*n},this.bitsAvailable=function(){return 8*n+a},this.loadWord=function(){var t=r.byteLength-n,e=new Uint8Array(4),i=Math.min(4,n);if(0===i)throw new Error("no bytes available");e.set(r.subarray(t,t+i)),s=new DataView(e.buffer).getUint32(0),a=8*i,n-=i},this.skipBits=function(t){var e;t<a||(t-=a,t-=8*(e=Math.floor(t/8)),n-=e,this.loadWord()),s<<=t,a-=t},this.readBits=function(t){var e=Math.min(a,t),i=s>>>32-e;return 0<(a-=e)?s<<=e:0<n&&this.loadWord(),0<(e=t-e)?i<<e|this.readBits(e):i},this.skipLeadingZeros=function(){var t;for(t=0;t<a;++t)if(0!=(s&2147483648>>>t))return s<<=t,a-=t,t;return this.loadWord(),t+this.skipLeadingZeros()},this.skipUnsignedExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.skipExpGolomb=function(){this.skipBits(1+this.skipLeadingZeros())},this.readUnsignedExpGolomb=function(){var t=this.skipLeadingZeros();return this.readBits(t+1)-1},this.readExpGolomb=function(){var t=this.readUnsignedExpGolomb();return 1&t?1+t>>>1:-1*(t>>>1)},this.readBoolean=function(){return 1===this.readBits(1)},this.readUnsignedByte=function(){return this.readBits(8)},this.loadWord()};(_t=function(){var i,r,n=0;_t.prototype.init.call(this),this.push=function(t){var e;for(r?((e=new Uint8Array(r.byteLength+t.data.byteLength)).set(r),e.set(t.data,r.byteLength),r=e):r=t.data;n<r.byteLength-3;n++)if(1===r[n+2]){i=n+5;break}for(;i<r.byteLength;)switch(r[i]){case 0:if(0!==r[i-1]){i+=2;break}if(0!==r[i-2]){i++;break}for(n+3!==i-2&&this.trigger("data",r.subarray(n+3,i-2));1!==r[++i]&&i<r.length;);n=i-2,i+=3;break;case 1:if(0!==r[i-1]||0!==r[i-2]){i+=3;break}this.trigger("data",r.subarray(n+3,i-2)),n=i-2,i+=3;break;default:i+=3}r=r.subarray(n),i-=n,n=0},this.flush=function(){r&&3<r.byteLength&&this.trigger("data",r.subarray(n+3)),r=null,n=0,this.trigger("done")}}).prototype=new z,bt={100:!0,110:!0,122:!0,244:!0,44:!0,83:!0,86:!0,118:!0,128:!0,138:!0,139:!0,134:!0},(vt=function(){var i,r,n,s,a,o,_,e=new _t;vt.prototype.init.call(this),(i=this).push=function(t){"video"===t.type&&(r=t.trackId,n=t.pts,s=t.dts,e.push(t))},e.on("data",function(t){var e={trackId:r,pts:n,dts:s,data:t};switch(31&t[0]){case 5:e.nalUnitType="slice_layer_without_partitioning_rbsp_idr";break;case 6:e.nalUnitType="sei_rbsp",e.escapedRBSP=a(t.subarray(1));break;case 7:e.nalUnitType="seq_parameter_set_rbsp",e.escapedRBSP=a(t.subarray(1)),e.config=o(e.escapedRBSP);break;case 8:e.nalUnitType="pic_parameter_set_rbsp";break;case 9:e.nalUnitType="access_unit_delimiter_rbsp"}i.trigger("data",e)}),e.on("done",function(){i.trigger("done")}),this.flush=function(){e.flush()},_=function(t,e){var i,r=8,n=8;for(i=0;i<t;i++)0!==n&&(n=(r+e.readExpGolomb()+256)%256),r=0===n?r:n},a=function(t){for(var e,i,r=t.byteLength,n=[],s=1;s<r-2;)0===t[s]&&0===t[s+1]&&3===t[s+2]?(n.push(s+2),s+=2):s++;if(0===n.length)return t;e=r-n.length,i=new Uint8Array(e);var a=0;for(s=0;s<e;a++,s++)a===n[0]&&(a++,n.shift()),i[s]=t[a];return i},o=function(t){var e,i,r,n,s,a,o,u,l,c,h,d,p,f=0,m=0,g=0,y=0,v=1;if(i=(e=new St(t)).readUnsignedByte(),n=e.readUnsignedByte(),r=e.readUnsignedByte(),e.skipUnsignedExpGolomb(),bt[i]&&(3===(s=e.readUnsignedExpGolomb())&&e.skipBits(1),e.skipUnsignedExpGolomb(),e.skipUnsignedExpGolomb(),e.skipBits(1),e.readBoolean()))for(h=3!==s?8:12,p=0;p<h;p++)e.readBoolean()&&_(p<6?16:64,e);if(e.skipUnsignedExpGolomb(),0===(a=e.readUnsignedExpGolomb()))e.readUnsignedExpGolomb();else if(1===a)for(e.skipBits(1),e.skipExpGolomb(),e.skipExpGolomb(),o=e.readUnsignedExpGolomb(),p=0;p<o;p++)e.skipExpGolomb();if(e.skipUnsignedExpGolomb(),e.skipBits(1),u=e.readUnsignedExpGolomb(),l=e.readUnsignedExpGolomb(),0===(c=e.readBits(1))&&e.skipBits(1),e.skipBits(1),e.readBoolean()&&(f=e.readUnsignedExpGolomb(),m=e.readUnsignedExpGolomb(),g=e.readUnsignedExpGolomb(),y=e.readUnsignedExpGolomb()),e.readBoolean()&&e.readBoolean()){switch(e.readUnsignedByte()){case 1:d=[1,1];break;case 2:d=[12,11];break;case 3:d=[10,11];break;case 4:d=[16,11];break;case 5:d=[40,33];break;case 6:d=[24,11];break;case 7:d=[20,11];break;case 8:d=[32,11];break;case 9:d=[80,33];break;case 10:d=[18,11];break;case 11:d=[15,11];break;case 12:d=[64,33];break;case 13:d=[160,99];break;case 14:d=[4,3];break;case 15:d=[3,2];break;case 16:d=[2,1];break;case 255:d=[e.readUnsignedByte()<<8|e.readUnsignedByte(),e.readUnsignedByte()<<8|e.readUnsignedByte()]}d&&(v=d[0]/d[1])}return{profileIdc:i,levelIdc:r,profileCompatibility:n,width:Math.ceil((16*(u+1)-2*f-2*m)*v),height:(2-c)*(l+1)*16-2*g-2*y}}}).prototype=new z;var kt,Ct={H264Stream:vt,NalByteStream:_t};(kt=function(){var o=new Uint8Array,u=0;kt.prototype.init.call(this),this.setTimestamp=function(t){u=t},this.parseId3TagSize=function(t,e){var i=t[e+6]<<21|t[e+7]<<14|t[e+8]<<7|t[e+9];return(16&t[e+5])>>4?i+20:i+10},this.parseAdtsSize=function(t,e){var i=(224&t[e+5])>>5,r=t[e+4]<<3;return 6144&t[e+3]|r|i},this.push=function(t){var e,i,r,n,s=0,a=0;for(o.length?(n=o.length,(o=new Uint8Array(t.byteLength+n)).set(o.subarray(0,n)),o.set(t,n)):o=t;3<=o.length-a;)if(o[a]!=="I".charCodeAt(0)||o[a+1]!=="D".charCodeAt(0)||o[a+2]!=="3".charCodeAt(0))if(!0&o[a]&&240==(240&o[a+1])){if(o.length-a<7)break;if((s=this.parseAdtsSize(o,a))>o.length)break;r={type:"audio",data:o.subarray(a,a+s),pts:u,dts:u},this.trigger("data",r),a+=s}else a++;else{if(o.length-a<10)break;if((s=this.parseId3TagSize(o,a))>o.length)break;i={type:"timed-metadata",data:o.subarray(a,a+s)},this.trigger("data",i),a+=s}e=o.length-a,o=0<e?o.subarray(a):new Uint8Array}}).prototype=new z;var Et,wt,At,Lt,Pt,Ot,It,xt,Dt,Rt,Mt,Ut,Nt,Bt,jt,Ft=kt,Ht=[33,16,5,32,164,27],Vt=[33,65,108,84,1,2,4,8,168,2,4,8,17,191,252],qt=function(t){for(var e=[];t--;)e.push(0);return e},Wt={96000:[Ht,[227,64],qt(154),[56]],88200:[Ht,[231],qt(170),[56]],64000:[Ht,[248,192],qt(240),[56]],48000:[Ht,[255,192],qt(268),[55,148,128],qt(54),[112]],44100:[Ht,[255,192],qt(268),[55,163,128],qt(84),[112]],32000:[Ht,[255,192],qt(268),[55,234],qt(226),[112]],24000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,112],qt(126),[224]],16000:[Ht,[255,192],qt(268),[55,255,128],qt(268),[111,255],qt(269),[223,108],qt(195),[1,192]],12000:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,253,128],qt(259),[56]],11025:[Vt,qt(268),[3,127,248],qt(268),[6,255,240],qt(268),[13,255,224],qt(268),[27,255,192],qt(268),[55,175,128],qt(108),[112]],8000:[Vt,qt(268),[3,121,16],qt(47),[7]]},zt=(Et=Wt,Object.keys(Et).reduce(function(t,e){return t[e]=new Uint8Array(Et[e].reduce(function(t,e){return t.concat(e)},[])),t},{})),Gt=(wt=function(t){return 9e4*t},At=function(t,e){return t*e},Lt=function(t){return t/9e4},Pt=function(t,e){return t/e},function(t,e){return wt(Pt(t,e))}),Xt=function(t,e){return At(Lt(t),e)},Yt=Ct.H264Stream,$t=["audioobjecttype","channelcount","samplerate","samplingfrequencyindex","samplesize"],Kt=["width","height","profileIdc","levelIdc","profileCompatibility"];Rt=function(t){return t[0]==="I".charCodeAt(0)&&t[1]==="D".charCodeAt(0)&&t[2]==="3".charCodeAt(0)},Bt=function(t,e){var i;if(t.length!==e.length)return!1;for(i=0;i<t.length;i++)if(t[i]!==e[i])return!1;return!0},jt=function(t){var e,i=0;for(e=0;e<t.length;e++)i+=t[e].data.byteLength;return i},(It=function(n,s){var a=[],o=0,e=0,l=0,c=1/0;s=s||{},It.prototype.init.call(this),this.push=function(e){Mt(n,e),n&&$t.forEach(function(t){n[t]=e[t]}),a.push(e)},this.setEarliestDts=function(t){e=t-n.timelineStartInfo.baseMediaDecodeTime},this.setVideoBaseMediaDecodeTime=function(t){c=t},this.setAudioAppendStart=function(t){l=t},this.flush=function(){var t,e,i,r;0!==a.length&&(t=this.trimAdtsFramesByEarliestDts_(a),n.baseMediaDecodeTime=Nt(n,s.keepOriginalTimestamps),this.prefixWithSilence_(n,t),n.samples=this.generateSampleTable_(t),i=q.mdat(this.concatenateFrameData_(t)),a=[],e=q.moof(o,[n]),r=new Uint8Array(e.byteLength+i.byteLength),o++,r.set(e),r.set(i,e.byteLength),Ut(n),this.trigger("data",{track:n,boxes:r})),this.trigger("done","AudioSegmentStream")},this.prefixWithSilence_=function(t,e){var i,r,n,s,a=0,o=0,u=0;if(e.length&&(i=Gt(t.baseMediaDecodeTime,t.samplerate),r=Math.ceil(9e4/(t.samplerate/1024)),l&&c&&(a=i-Math.max(l,c),u=(o=Math.floor(a/r))*r),!(o<1||45e3<u))){for((n=zt[t.samplerate])||(n=e[0].data),s=0;s<o;s++)e.splice(s,0,{data:n});t.baseMediaDecodeTime-=Math.floor(Xt(u,t.samplerate))}},this.trimAdtsFramesByEarliestDts_=function(t){return n.minSegmentDts>=e?t:(n.minSegmentDts=1/0,t.filter(function(t){return t.dts>=e&&(n.minSegmentDts=Math.min(n.minSegmentDts,t.dts),n.minSegmentPts=n.minSegmentDts,!0)}))},this.generateSampleTable_=function(t){var e,i,r=[];for(e=0;e<t.length;e++)i=t[e],r.push({size:i.data.byteLength,duration:1024});return r},this.concatenateFrameData_=function(t){var e,i,r=0,n=new Uint8Array(jt(t));for(e=0;e<t.length;e++)i=t[e],n.set(i.data,r),r+=i.data.byteLength;return n}}).prototype=new z,(Ot=function(o,u){var e,i,l=0,c=[],h=[];u=u||{},Ot.prototype.init.call(this),delete o.minPTS,this.gopCache_=[],this.push=function(t){Mt(o,t),"seq_parameter_set_rbsp"!==t.nalUnitType||e||(e=t.config,o.sps=[t.data],Kt.forEach(function(t){o[t]=e[t]},this)),"pic_parameter_set_rbsp"!==t.nalUnitType||i||(i=t.data,o.pps=[t.data]),c.push(t)},this.flush=function(){for(var t,e,i,r,n,s;c.length&&"access_unit_delimiter_rbsp"!==c[0].nalUnitType;)c.shift();if(0===c.length)return this.resetStream_(),void this.trigger("done","VideoSegmentStream");if(t=this.groupNalsIntoFrames_(c),(i=this.groupFramesIntoGops_(t))[0][0].keyFrame||((e=this.getGopForFusion_(c[0],o))?(i.unshift(e),i.byteLength+=e.byteLength,i.nalCount+=e.nalCount,i.pts=e.pts,i.dts=e.dts,i.duration+=e.duration):i=this.extendFirstKeyFrame_(i)),h.length){var a;if(!(a=u.alignGopsAtEnd?this.alignGopsAtEnd_(i):this.alignGopsAtStart_(i)))return this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.resetStream_(),void this.trigger("done","VideoSegmentStream");Ut(o),i=a}Mt(o,i),o.samples=this.generateSampleTable_(i),n=q.mdat(this.concatenateNalData_(i)),o.baseMediaDecodeTime=Nt(o,u.keepOriginalTimestamps),this.trigger("processedGopsInfo",i.map(function(t){return{pts:t.pts,dts:t.dts,byteLength:t.byteLength}})),this.gopCache_.unshift({gop:i.pop(),pps:o.pps,sps:o.sps}),this.gopCache_.length=Math.min(6,this.gopCache_.length),c=[],this.trigger("baseMediaDecodeTime",o.baseMediaDecodeTime),this.trigger("timelineStartInfo",o.timelineStartInfo),r=q.moof(l,[o]),s=new Uint8Array(r.byteLength+n.byteLength),l++,s.set(r),s.set(n,r.byteLength),this.trigger("data",{track:o,boxes:s}),this.resetStream_(),this.trigger("done","VideoSegmentStream")},this.resetStream_=function(){Ut(o),i=e=void 0},this.getGopForFusion_=function(t){var e,i,r,n,s,a=1/0;for(s=0;s<this.gopCache_.length;s++)r=(n=this.gopCache_[s]).gop,o.pps&&Bt(o.pps[0],n.pps[0])&&o.sps&&Bt(o.sps[0],n.sps[0])&&(r.dts<o.timelineStartInfo.dts||-1e4<=(e=t.dts-r.dts-r.duration)&&e<=45e3&&(!i||e<a)&&(i=n,a=e));return i?i.gop:null},this.extendFirstKeyFrame_=function(t){var e;return!t[0][0].keyFrame&&1<t.length&&(e=t.shift(),t.byteLength-=e.byteLength,t.nalCount-=e.nalCount,t[0][0].dts=e.dts,t[0][0].pts=e.pts,t[0][0].duration+=e.duration),t},this.groupNalsIntoFrames_=function(t){var e,i,r=[],n=[];for(e=r.byteLength=0;e<t.length;e++)"access_unit_delimiter_rbsp"===(i=t[e]).nalUnitType?(r.length&&(r.duration=i.dts-r.dts,n.push(r)),(r=[i]).byteLength=i.data.byteLength,r.pts=i.pts,r.dts=i.dts):("slice_layer_without_partitioning_rbsp_idr"===i.nalUnitType&&(r.keyFrame=!0),r.duration=i.dts-r.dts,r.byteLength+=i.data.byteLength,r.push(i));return n.length&&(!r.duration||r.duration<=0)&&(r.duration=n[n.length-1].duration),n.push(r),n},this.groupFramesIntoGops_=function(t){var e,i,r=[],n=[];for(r.byteLength=0,r.nalCount=0,r.duration=0,r.pts=t[0].pts,r.dts=t[0].dts,n.byteLength=0,n.nalCount=0,n.duration=0,n.pts=t[0].pts,n.dts=t[0].dts,e=0;e<t.length;e++)(i=t[e]).keyFrame?(r.length&&(n.push(r),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration),(r=[i]).nalCount=i.length,r.byteLength=i.byteLength,r.pts=i.pts,r.dts=i.dts,r.duration=i.duration):(r.duration+=i.duration,r.nalCount+=i.length,r.byteLength+=i.byteLength,r.push(i));return n.length&&r.duration<=0&&(r.duration=n[n.length-1].duration),n.byteLength+=r.byteLength,n.nalCount+=r.nalCount,n.duration+=r.duration,n.push(r),n},this.generateSampleTable_=function(t,e){var i,r,n,s,a,o=e||0,u=[];for(i=0;i<t.length;i++)for(s=t[i],r=0;r<s.length;r++)a=s[r],(n={size:0,flags:{isLeading:0,dependsOn:1,isDependedOn:0,hasRedundancy:0,degradationPriority:0}}).dataOffset=o,n.compositionTimeOffset=a.pts-a.dts,n.duration=a.duration,n.size=4*a.length,n.size+=a.byteLength,a.keyFrame&&(n.flags.dependsOn=2),o+=n.size,u.push(n);return u},this.concatenateNalData_=function(t){var e,i,r,n,s,a,o=0,u=t.byteLength,l=t.nalCount,c=new Uint8Array(u+4*l),h=new DataView(c.buffer);for(e=0;e<t.length;e++)for(n=t[e],i=0;i<n.length;i++)for(s=n[i],r=0;r<s.length;r++)a=s[r],h.setUint32(o,a.data.byteLength),o+=4,c.set(a.data,o),o+=a.data.byteLength;return c},this.alignGopsAtStart_=function(t){var e,i,r,n,s,a,o,u;for(s=t.byteLength,a=t.nalCount,o=t.duration,e=i=0;e<h.length&&i<t.length&&(r=h[e],n=t[i],r.pts!==n.pts);)n.pts>r.pts?e++:(i++,s-=n.byteLength,a-=n.nalCount,o-=n.duration);return 0===i?t:i===t.length?null:((u=t.slice(i)).byteLength=s,u.duration=o,u.nalCount=a,u.pts=u[0].pts,u.dts=u[0].dts,u)},this.alignGopsAtEnd_=function(t){var e,i,r,n,s,a,o;for(e=h.length-1,i=t.length-1,s=null,a=!1;0<=e&&0<=i;){if(r=h[e],n=t[i],r.pts===n.pts){a=!0;break}r.pts>n.pts?e--:(e===h.length-1&&(s=i),i--)}if(!a&&null===s)return null;if(0===(o=a?i:s))return t;var u=t.slice(o),l=u.reduce(function(t,e){return t.byteLength+=e.byteLength,t.duration+=e.duration,t.nalCount+=e.nalCount,t},{byteLength:0,duration:0,nalCount:0});return u.byteLength=l.byteLength,u.duration=l.duration,u.nalCount=l.nalCount,u.pts=u[0].pts,u.dts=u[0].dts,u},this.alignGopsWith=function(t){h=t}}).prototype=new z,Mt=function(t,e){"number"==typeof e.pts&&(void 0===t.timelineStartInfo.pts&&(t.timelineStartInfo.pts=e.pts),void 0===t.minSegmentPts?t.minSegmentPts=e.pts:t.minSegmentPts=Math.min(t.minSegmentPts,e.pts),void 0===t.maxSegmentPts?t.maxSegmentPts=e.pts:t.maxSegmentPts=Math.max(t.maxSegmentPts,e.pts)),"number"==typeof e.dts&&(void 0===t.timelineStartInfo.dts&&(t.timelineStartInfo.dts=e.dts),void 0===t.minSegmentDts?t.minSegmentDts=e.dts:t.minSegmentDts=Math.min(t.minSegmentDts,e.dts),void 0===t.maxSegmentDts?t.maxSegmentDts=e.dts:t.maxSegmentDts=Math.max(t.maxSegmentDts,e.dts))},Ut=function(t){delete t.minSegmentDts,delete t.maxSegmentDts,delete t.minSegmentPts,delete t.maxSegmentPts},Nt=function(t,e){var i,r=t.minSegmentDts;return e||(r-=t.timelineStartInfo.dts),i=t.timelineStartInfo.baseMediaDecodeTime,i+=r,i=Math.max(0,i),"audio"===t.type&&(i*=t.samplerate/9e4,i=Math.floor(i)),i},(Dt=function(t,e){this.numberOfTracks=0,this.metadataStream=e,"undefined"!=typeof t.remux?this.remuxTracks=!!t.remux:this.remuxTracks=!0,this.pendingTracks=[],this.videoTrack=null,this.pendingBoxes=[],this.pendingCaptions=[],this.pendingMetadata=[],this.pendingBytes=0,this.emittedTracks=0,Dt.prototype.init.call(this),this.push=function(t){return t.text?this.pendingCaptions.push(t):t.frames?this.pendingMetadata.push(t):(this.pendingTracks.push(t.track),this.pendingBoxes.push(t.boxes),this.pendingBytes+=t.boxes.byteLength,"video"===t.track.type&&(this.videoTrack=t.track),void("audio"===t.track.type&&(this.audioTrack=t.track)))}}).prototype=new z,Dt.prototype.flush=function(t){var e,i,r,n,s=0,a={captions:[],captionStreams:{},metadata:[],info:{}},o=0;if(this.pendingTracks.length<this.numberOfTracks){if("VideoSegmentStream"!==t&&"AudioSegmentStream"!==t)return;if(this.remuxTracks)return;if(0===this.pendingTracks.length)return this.emittedTracks++,void(this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0))}for(this.videoTrack?(o=this.videoTrack.timelineStartInfo.pts,Kt.forEach(function(t){a.info[t]=this.videoTrack[t]},this)):this.audioTrack&&(o=this.audioTrack.timelineStartInfo.pts,$t.forEach(function(t){a.info[t]=this.audioTrack[t]},this)),1===this.pendingTracks.length?a.type=this.pendingTracks[0].type:a.type="combined",this.emittedTracks+=this.pendingTracks.length,r=q.initSegment(this.pendingTracks),a.initSegment=new Uint8Array(r.byteLength),a.initSegment.set(r),a.data=new Uint8Array(this.pendingBytes),n=0;n<this.pendingBoxes.length;n++)a.data.set(this.pendingBoxes[n],s),s+=this.pendingBoxes[n].byteLength;for(n=0;n<this.pendingCaptions.length;n++)(e=this.pendingCaptions[n]).startTime=e.startPts-o,e.startTime/=9e4,e.endTime=e.endPts-o,e.endTime/=9e4,a.captionStreams[e.stream]=!0,a.captions.push(e);for(n=0;n<this.pendingMetadata.length;n++)(i=this.pendingMetadata[n]).cueTime=i.pts-o,i.cueTime/=9e4,a.metadata.push(i);a.metadata.dispatchType=this.metadataStream.dispatchType,this.pendingTracks.length=0,this.videoTrack=null,this.pendingBoxes.length=0,this.pendingCaptions.length=0,this.pendingBytes=0,this.pendingMetadata.length=0,this.trigger("data",a),this.emittedTracks>=this.numberOfTracks&&(this.trigger("done"),this.emittedTracks=0)},(xt=function(r){var n,s,a=this,i=!0;xt.prototype.init.call(this),r=r||{},this.baseMediaDecodeTime=r.baseMediaDecodeTime||0,this.transmuxPipeline_={},this.setupAacPipeline=function(){var e={};(this.transmuxPipeline_=e).type="aac",e.metadataStream=new gt.MetadataStream,e.aacStream=new Ft,e.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),e.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),e.adtsStream=new Tt,e.coalesceStream=new Dt(r,e.metadataStream),e.headOfPipeline=e.aacStream,e.aacStream.pipe(e.audioTimestampRolloverStream).pipe(e.adtsStream),e.aacStream.pipe(e.timedMetadataTimestampRolloverStream).pipe(e.metadataStream).pipe(e.coalesceStream),e.metadataStream.on("timestamp",function(t){e.aacStream.setTimestamp(t.timeStamp)}),e.aacStream.on("data",function(t){"timed-metadata"!==t.type||e.audioSegmentStream||(s=s||{timelineStartInfo:{baseMediaDecodeTime:a.baseMediaDecodeTime},codec:"adts",type:"audio"},e.coalesceStream.numberOfTracks++,e.audioSegmentStream=new It(s,r),e.adtsStream.pipe(e.audioSegmentStream).pipe(e.coalesceStream))}),e.coalesceStream.on("data",this.trigger.bind(this,"data")),e.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setupTsPipeline=function(){var i={};(this.transmuxPipeline_=i).type="ts",i.metadataStream=new gt.MetadataStream,i.packetStream=new gt.TransportPacketStream,i.parseStream=new gt.TransportParseStream,i.elementaryStream=new gt.ElementaryStream,i.videoTimestampRolloverStream=new gt.TimestampRolloverStream("video"),i.audioTimestampRolloverStream=new gt.TimestampRolloverStream("audio"),i.timedMetadataTimestampRolloverStream=new gt.TimestampRolloverStream("timed-metadata"),i.adtsStream=new Tt,i.h264Stream=new Yt,i.captionStream=new gt.CaptionStream,i.coalesceStream=new Dt(r,i.metadataStream),i.headOfPipeline=i.packetStream,i.packetStream.pipe(i.parseStream).pipe(i.elementaryStream),i.elementaryStream.pipe(i.videoTimestampRolloverStream).pipe(i.h264Stream),i.elementaryStream.pipe(i.audioTimestampRolloverStream).pipe(i.adtsStream),i.elementaryStream.pipe(i.timedMetadataTimestampRolloverStream).pipe(i.metadataStream).pipe(i.coalesceStream),i.h264Stream.pipe(i.captionStream).pipe(i.coalesceStream),i.elementaryStream.on("data",function(t){var e;if("metadata"===t.type){for(e=t.tracks.length;e--;)n||"video"!==t.tracks[e].type?s||"audio"!==t.tracks[e].type||((s=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime):(n=t.tracks[e]).timelineStartInfo.baseMediaDecodeTime=a.baseMediaDecodeTime;n&&!i.videoSegmentStream&&(i.coalesceStream.numberOfTracks++,i.videoSegmentStream=new Ot(n,r),i.videoSegmentStream.on("timelineStartInfo",function(t){s&&(s.timelineStartInfo=t,i.audioSegmentStream.setEarliestDts(t.dts))}),i.videoSegmentStream.on("processedGopsInfo",a.trigger.bind(a,"gopInfo")),i.videoSegmentStream.on("baseMediaDecodeTime",function(t){s&&i.audioSegmentStream.setVideoBaseMediaDecodeTime(t)}),i.h264Stream.pipe(i.videoSegmentStream).pipe(i.coalesceStream)),s&&!i.audioSegmentStream&&(i.coalesceStream.numberOfTracks++,i.audioSegmentStream=new It(s,r),i.adtsStream.pipe(i.audioSegmentStream).pipe(i.coalesceStream))}}),i.coalesceStream.on("data",this.trigger.bind(this,"data")),i.coalesceStream.on("done",this.trigger.bind(this,"done"))},this.setBaseMediaDecodeTime=function(t){var e=this.transmuxPipeline_;this.baseMediaDecodeTime=t,s&&(s.timelineStartInfo.dts=void 0,s.timelineStartInfo.pts=void 0,Ut(s),s.timelineStartInfo.baseMediaDecodeTime=t,e.audioTimestampRolloverStream&&e.audioTimestampRolloverStream.discontinuity()),n&&(e.videoSegmentStream&&(e.videoSegmentStream.gopCache_=[],e.videoTimestampRolloverStream.discontinuity()),n.timelineStartInfo.dts=void 0,n.timelineStartInfo.pts=void 0,Ut(n),e.captionStream.reset(),n.timelineStartInfo.baseMediaDecodeTime=t),e.timedMetadataTimestampRolloverStream&&e.timedMetadataTimestampRolloverStream.discontinuity()},this.setAudioAppendStart=function(t){s&&this.transmuxPipeline_.audioSegmentStream.setAudioAppendStart(t)},this.alignGopsWith=function(t){n&&this.transmuxPipeline_.videoSegmentStream&&this.transmuxPipeline_.videoSegmentStream.alignGopsWith(t)},this.push=function(t){if(i){var e=Rt(t);e&&"aac"!==this.transmuxPipeline_.type?this.setupAacPipeline():e||"ts"===this.transmuxPipeline_.type||this.setupTsPipeline(),i=!1}this.transmuxPipeline_.headOfPipeline.push(t)},this.flush=function(){i=!0,this.transmuxPipeline_.headOfPipeline.flush()},this.resetCaptions=function(){this.transmuxPipeline_.captionStream&&this.transmuxPipeline_.captionStream.reset()}}).prototype=new z;var Qt={Transmuxer:xt,VideoSegmentStream:Ot,AudioSegmentStream:It,AUDIO_PROPERTIES:$t,VIDEO_PROPERTIES:Kt},Jt={generator:q,Transmuxer:Qt.Transmuxer,AudioSegmentStream:Qt.AudioSegmentStream,VideoSegmentStream:Qt.VideoSegmentStream},Zt=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},te=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),ee=function(){function e(t){Zt(this,e),this.options=t||{},this.init()}return te(e,[{key:"init",value:function(){var t;this.transmuxer&&this.transmuxer.dispose(),this.transmuxer=new Jt.Transmuxer(this.options),(t=this.transmuxer).on("data",function(t){var e=t.initSegment;t.initSegment={data:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength};var i=t.data;t.data=i.buffer,H.postMessage({action:"data",segment:t,byteOffset:i.byteOffset,byteLength:i.byteLength},[t.data])}),t.captionStream&&t.captionStream.on("data",function(t){H.postMessage({action:"caption",data:t})}),t.on("done",function(t){H.postMessage({action:"done"})}),t.on("gopInfo",function(t){H.postMessage({action:"gopInfo",gopInfo:t})})}},{key:"push",value:function(t){var e=new Uint8Array(t.data,t.byteOffset,t.byteLength);this.transmuxer.push(e)}},{key:"reset",value:function(){this.init()}},{key:"setTimestampOffset",value:function(t){var e=t.timestampOffset||0;this.transmuxer.setBaseMediaDecodeTime(Math.round(9e4*e))}},{key:"setAudioAppendStart",value:function(t){this.transmuxer.setAudioAppendStart(Math.ceil(9e4*t.appendStart))}},{key:"flush",value:function(t){this.transmuxer.flush()}},{key:"resetCaptions",value:function(){this.transmuxer.resetCaptions()}},{key:"alignGopsWith",value:function(t){this.transmuxer.alignGopsWith(t.gopsToAlignWith.slice())}}]),e}();new function(t){t.onmessage=function(t){"init"===t.data.action&&t.data.options?this.messageHandlers=new ee(t.data.options):(this.messageHandlers||(this.messageHandlers=new ee),t.data&&t.data.action&&"init"!==t.data.action&&this.messageHandlers[t.data.action]&&this.messageHandlers[t.data.action](t.data))}}(re)}()}),Ou=function(t){return/mp4a\.\d+.\d+/i.test(t)},Iu=function(t){return/avc1\.[\da-f]+/i.test(t)},xu=function(t){return t.map(function(t){return t.replace(/avc1\.(\d+)\.(\d+)/i,function(t,e,i){return"avc1."+("00"+Number(e).toString(16)).slice(-2)+"00"+("00"+Number(i).toString(16)).slice(-2)})})},Du=function(n){function s(t,e){y(this,s);var i=b(this,n.call(this,Ss.EventTarget));i.timestampOffset_=0,i.pendingBuffers_=[],i.bufferUpdating_=!1,i.mediaSource_=t,i.codecs_=e,i.audioCodec_=null,i.videoCodec_=null,i.audioDisabled_=!1,i.appendAudioInitSegment_=!0,i.gopBuffer_=[],i.timeMapping_=0,i.safeAppend_=11<=Ss.browser.IE_VERSION;var r={remux:!1,alignGopsAtEnd:i.safeAppend_};return i.codecs_.forEach(function(t){Ou(t)?i.audioCodec_=t:Iu(t)&&(i.videoCodec_=t)}),i.transmuxer_=new Pu,i.transmuxer_.postMessage({action:"init",options:r}),i.transmuxer_.onmessage=function(t){return"data"===t.data.action?i.data_(t):"done"===t.data.action?i.done_(t):"gopInfo"===t.data.action?i.appendGopInfo_(t):void 0},Object.defineProperty(i,"timestampOffset",{get:function(){return this.timestampOffset_},set:function(t){"number"==typeof t&&0<=t&&(this.timestampOffset_=t,this.appendAudioInitSegment_=!0,this.gopBuffer_.length=0,this.timeMapping_=0,this.transmuxer_.postMessage({action:"setTimestampOffset",timestampOffset:t}))}}),Object.defineProperty(i,"appendWindowStart",{get:function(){return(this.videoBuffer_||this.audioBuffer_).appendWindowStart},set:function(t){this.videoBuffer_&&(this.videoBuffer_.appendWindowStart=t),this.audioBuffer_&&(this.audioBuffer_.appendWindowStart=t)}}),Object.defineProperty(i,"updating",{get:function(){return!!(this.bufferUpdating_||!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.updating||this.videoBuffer_&&this.videoBuffer_.updating)}}),Object.defineProperty(i,"buffered",{get:function(){var t=null,e=null,i=0,r=[],n=[];if(!this.videoBuffer_&&!this.audioBuffer_)return Ss.createTimeRange();if(!this.videoBuffer_)return this.audioBuffer_.buffered;if(!this.audioBuffer_)return this.videoBuffer_.buffered;if(this.audioDisabled_)return this.videoBuffer_.buffered;if(0===this.videoBuffer_.buffered.length&&0===this.audioBuffer_.buffered.length)return Ss.createTimeRange();for(var s=this.videoBuffer_.buffered,a=this.audioBuffer_.buffered,o=s.length;o--;)r.push({time:s.start(o),type:"start"}),r.push({time:s.end(o),type:"end"});for(o=a.length;o--;)r.push({time:a.start(o),type:"start"}),r.push({time:a.end(o),type:"end"});for(r.sort(function(t,e){return t.time-e.time}),o=0;o<r.length;o++)"start"===r[o].type?2===++i&&(t=r[o].time):"end"===r[o].type&&1===--i&&(e=r[o].time),null!==t&&null!==e&&(n.push([t,e]),e=t=null);return Ss.createTimeRanges(n)}}),i}return _(s,n),s.prototype.data_=function(t){var e=t.data.segment;e.data=new Uint8Array(e.data,t.data.byteOffset,t.data.byteLength),e.initSegment=new Uint8Array(e.initSegment.data,e.initSegment.byteOffset,e.initSegment.byteLength),function(t,e,i){var r=e.player_;if(i.captions&&i.captions.length)for(var n in t.inbandTextTracks_||(t.inbandTextTracks_={}),i.captionStreams)if(!t.inbandTextTracks_[n]){r.tech_.trigger({type:"usage",name:"hls-608"});var s=r.textTracks().getTrackById(n);t.inbandTextTracks_[n]=s||r.addRemoteTextTrack({kind:"captions",id:n,label:n},!1).track}i.metadata&&i.metadata.length&&!t.metadataTrack_&&(t.metadataTrack_=r.addRemoteTextTrack({kind:"metadata",label:"Timed Metadata"},!1).track,t.metadataTrack_.inBandMetadataTrackDispatchType=i.metadata.dispatchType)}(this,this.mediaSource_,e),this.pendingBuffers_.push(e)},s.prototype.done_=function(t){"closed"!==this.mediaSource_.readyState?this.processPendingSegments_():this.pendingBuffers_.length=0},s.prototype.createRealSourceBuffers_=function(){var r=this,n=["audio","video"];n.forEach(function(e){if(r[e+"Codec_"]&&!r[e+"Buffer_"]){var i=null;if(r.mediaSource_[e+"Buffer_"])(i=r.mediaSource_[e+"Buffer_"]).updating=!1;else{var t=e+'/mp4;codecs="'+r[e+"Codec_"]+'"';i=function(t,e){var i=t.addSourceBuffer(e),r=Object.create(null);r.updating=!1,r.realBuffer_=i;var n=function(e){"function"==typeof i[e]?r[e]=function(){return i[e].apply(i,arguments)}:"undefined"==typeof r[e]&&Object.defineProperty(r,e,{get:function(){return i[e]},set:function(t){return i[e]=t}})};for(var s in i)n(s);return r}(r.mediaSource_.nativeMediaSource_,t),r.mediaSource_[e+"Buffer_"]=i}r[e+"Buffer_"]=i,["update","updatestart","updateend"].forEach(function(t){i.addEventListener(t,function(){if("audio"!==e||!r.audioDisabled_)return"updateend"===t&&(r[e+"Buffer_"].updating=!1),n.every(function(t){return!("audio"!==t||!r.audioDisabled_)||(e===t||!r[t+"Buffer_"]||!r[t+"Buffer_"].updating)})?r.trigger(t):void 0})})}})},s.prototype.appendBuffer=function(t){if(this.bufferUpdating_=!0,this.audioBuffer_&&this.audioBuffer_.buffered.length){var e=this.audioBuffer_.buffered;this.transmuxer_.postMessage({action:"setAudioAppendStart",appendStart:e.end(e.length-1)})}this.videoBuffer_&&this.transmuxer_.postMessage({action:"alignGopsWith",gopsToAlignWith:function(t,e,i){if(!e||!t.length)return[];var r=Math.ceil(9e4*(e.currentTime()-i+3)),n=void 0;for(n=0;n<t.length&&!(t[n].pts>r);n++);return t.slice(n)}(this.gopBuffer_,this.mediaSource_.player_,this.timeMapping_)}),this.transmuxer_.postMessage({action:"push",data:t.buffer,byteOffset:t.byteOffset,byteLength:t.byteLength},[t.buffer]),this.transmuxer_.postMessage({action:"flush"})},s.prototype.appendGopInfo_=function(t){this.gopBuffer_=function(t,e,i){if(!e.length)return t;if(i)return e.slice();for(var r=e[0].pts,n=0;n<t.length&&!(t[n].pts>=r);n++);return t.slice(0,n).concat(e)}(this.gopBuffer_,t.data.gopInfo,this.safeAppend_)},s.prototype.remove=function(t,e){if(this.videoBuffer_&&(this.videoBuffer_.updating=!0,this.videoBuffer_.remove(t,e),this.gopBuffer_=function(t,e,i,r){for(var n=Math.ceil(9e4*(e-r)),s=Math.ceil(9e4*(i-r)),a=t.slice(),o=t.length;o--&&!(t[o].pts<=s););if(-1===o)return a;for(var u=o+1;u--&&!(t[u].pts<=n););return u=Math.max(u,0),a.splice(u,o-u+1),a}(this.gopBuffer_,t,e,this.timeMapping_)),!this.audioDisabled_&&this.audioBuffer_&&(this.audioBuffer_.updating=!0,this.audioBuffer_.remove(t,e)),mu(t,e,this.metadataTrack_),this.inbandTextTracks_)for(var i in this.inbandTextTracks_)mu(t,e,this.inbandTextTracks_[i])},s.prototype.processPendingSegments_=function(){var t={video:{segments:[],bytes:0},audio:{segments:[],bytes:0},captions:[],metadata:[]};t=this.pendingBuffers_.reduce(function(t,e){var i=e.type,r=e.data,n=e.initSegment;return t[i].segments.push(r),t[i].bytes+=r.byteLength,t[i].initSegment=n,e.captions&&(t.captions=t.captions.concat(e.captions)),e.info&&(t[i].info=e.info),e.metadata&&(t.metadata=t.metadata.concat(e.metadata)),t},t),this.videoBuffer_||this.audioBuffer_||(0===t.video.bytes&&(this.videoCodec_=null),0===t.audio.bytes&&(this.audioCodec_=null),this.createRealSourceBuffers_()),t.audio.info&&this.mediaSource_.trigger({type:"audioinfo",info:t.audio.info}),t.video.info&&this.mediaSource_.trigger({type:"videoinfo",info:t.video.info}),this.appendAudioInitSegment_&&(!this.audioDisabled_&&this.audioBuffer_&&(t.audio.segments.unshift(t.audio.initSegment),t.audio.bytes+=t.audio.initSegment.byteLength),this.appendAudioInitSegment_=!1);var e=!1;this.videoBuffer_&&t.video.bytes?(t.video.segments.unshift(t.video.initSegment),t.video.bytes+=t.video.initSegment.byteLength,this.concatAndAppendSegments_(t.video,this.videoBuffer_),yu(this,t.captions,t.metadata)):!this.videoBuffer_||!this.audioDisabled_&&this.audioBuffer_||(e=!0),!this.audioDisabled_&&this.audioBuffer_&&this.concatAndAppendSegments_(t.audio,this.audioBuffer_),this.pendingBuffers_.length=0,e&&this.trigger("updateend"),this.bufferUpdating_=!1},s.prototype.concatAndAppendSegments_=function(t,e){var i=0,r=void 0;if(t.bytes){r=new Uint8Array(t.bytes),t.segments.forEach(function(t){r.set(t,i),i+=t.byteLength});try{e.updating=!0,e.appendBuffer(r)}catch(t){this.mediaSource_.player_&&this.mediaSource_.player_.error({code:-3,type:"APPEND_BUFFER_ERR",message:t.message,originalError:t})}}},s.prototype.abort=function(){this.videoBuffer_&&this.videoBuffer_.abort(),!this.audioDisabled_&&this.audioBuffer_&&this.audioBuffer_.abort(),this.transmuxer_&&this.transmuxer_.postMessage({action:"reset"}),this.pendingBuffers_.length=0,this.bufferUpdating_=!1},s}(Ss.EventTarget),Ru=function(e){function i(){y(this,i);var s=b(this,e.call(this)),t=void 0;for(t in s.nativeMediaSource_=new g.MediaSource,s.nativeMediaSource_)t in i.prototype||"function"!=typeof s.nativeMediaSource_[t]||(s[t]=s.nativeMediaSource_[t].bind(s.nativeMediaSource_));return s.duration_=NaN,Object.defineProperty(s,"duration",{get:function(){return this.duration_===1/0?this.duration_:this.nativeMediaSource_.duration},set:function(t){(this.duration_=t)===1/0||(this.nativeMediaSource_.duration=t)}}),Object.defineProperty(s,"seekable",{get:function(){return this.duration_===1/0?Ss.createTimeRanges([[0,this.nativeMediaSource_.duration]]):this.nativeMediaSource_.seekable}}),Object.defineProperty(s,"readyState",{get:function(){return this.nativeMediaSource_.readyState}}),Object.defineProperty(s,"activeSourceBuffers",{get:function(){return this.activeSourceBuffers_}}),s.sourceBuffers=[],s.activeSourceBuffers_=[],s.updateActiveSourceBuffers_=function(){if(s.activeSourceBuffers_.length=0,1===s.sourceBuffers.length){var t=s.sourceBuffers[0];return t.appendAudioInitSegment_=!0,t.audioDisabled_=!t.audioCodec_,void s.activeSourceBuffers_.push(t)}for(var i=!1,r=!0,e=0;e<s.player_.audioTracks().length;e++){var n=s.player_.audioTracks()[e];if(n.enabled&&"main"!==n.kind){r=!(i=!0);break}}s.sourceBuffers.forEach(function(t,e){if(t.appendAudioInitSegment_=!0,t.videoCodec_&&t.audioCodec_)t.audioDisabled_=i;else if(t.videoCodec_&&!t.audioCodec_)t.audioDisabled_=!0,r=!1;else if(!t.videoCodec_&&t.audioCodec_&&(t.audioDisabled_=e?r:!r,t.audioDisabled_))return;s.activeSourceBuffers_.push(t)})},s.onPlayerMediachange_=function(){s.sourceBuffers.forEach(function(t){t.appendAudioInitSegment_=!0})},s.onHlsReset_=function(){s.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.postMessage({action:"resetCaptions"})})},s.onHlsSegmentTimeMapping_=function(e){s.sourceBuffers.forEach(function(t){return t.timeMapping_=e.mapping})},["sourceopen","sourceclose","sourceended"].forEach(function(t){this.nativeMediaSource_.addEventListener(t,this.trigger.bind(this))},s),s.on("sourceopen",function(t){var e=p.querySelector('[src="'+s.url_+'"]');e&&(s.player_=Ss(e.parentNode),s.player_.tech_.on("hls-reset",s.onHlsReset_),s.player_.tech_.on("hls-segment-time-mapping",s.onHlsSegmentTimeMapping_),s.player_.audioTracks&&s.player_.audioTracks()&&(s.player_.audioTracks().on("change",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("addtrack",s.updateActiveSourceBuffers_),s.player_.audioTracks().on("removetrack",s.updateActiveSourceBuffers_)),s.player_.on("mediachange",s.onPlayerMediachange_))}),s.on("sourceended",function(t){for(var e=gu(s.duration),i=0;i<s.sourceBuffers.length;i++){var r=s.sourceBuffers[i],n=r.metadataTrack_&&r.metadataTrack_.cues;n&&n.length&&(n[n.length-1].endTime=e)}}),s.on("sourceclose",function(t){this.sourceBuffers.forEach(function(t){t.transmuxer_&&t.transmuxer_.terminate()}),this.sourceBuffers.length=0,this.player_&&(this.player_.audioTracks&&this.player_.audioTracks()&&(this.player_.audioTracks().off("change",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("addtrack",this.updateActiveSourceBuffers_),this.player_.audioTracks().off("removetrack",this.updateActiveSourceBuffers_)),this.player_.el_&&(this.player_.off("mediachange",this.onPlayerMediachange_),this.player_.tech_.off("hls-reset",this.onHlsReset_),this.player_.tech_.off("hls-segment-time-mapping",this.onHlsSegmentTimeMapping_)))}),s}return _(i,e),i.prototype.addSeekableRange_=function(t,e){var i=void 0;if(this.duration!==1/0)throw(i=new Error("MediaSource.addSeekableRange() can only be invoked when the duration is Infinity")).name="InvalidStateError",i.code=11,i;(e>this.nativeMediaSource_.duration||isNaN(this.nativeMediaSource_.duration))&&(this.nativeMediaSource_.duration=e)},i.prototype.addSourceBuffer=function(t){var n,e,i=void 0,r=(n={type:"",parameters:{}},e=t.trim().split(";"),n.type=e.shift().trim(),e.forEach(function(t){var e=t.trim().split("=");if(1<e.length){var i=e[0].replace(/"/g,"").trim(),r=e[1].replace(/"/g,"").trim();n.parameters[i]=r}}),n);if(/^(video|audio)\/mp2t$/i.test(r.type)){var s=[];r.parameters&&r.parameters.codecs&&(s=r.parameters.codecs.split(","),s=(s=xu(s)).filter(function(t){return Ou(t)||Iu(t)})),0===s.length&&(s=["avc1.4d400d","mp4a.40.2"]),i=new Du(this,s),0!==this.sourceBuffers.length&&(this.sourceBuffers[0].createRealSourceBuffers_(),i.createRealSourceBuffers_(),this.sourceBuffers[0].audioDisabled_=!0)}else i=this.nativeMediaSource_.addSourceBuffer(t);return this.sourceBuffers.push(i),i},i}(Ss.EventTarget),Mu=0;Ss.mediaSources={};var Uu=function(t,e){var i=Ss.mediaSources[t];if(!i)throw new Error("Media Source not found (Video.js)");i.trigger({type:"sourceopen",swfId:e})},Nu=function(){return!!g.MediaSource&&!!g.MediaSource.isTypeSupported&&g.MediaSource.isTypeSupported('video/mp4;codecs="avc1.4d400d,mp4a.40.2"')},Bu=function(){if(this.MediaSource={open:Uu,supportsNativeMediaSources:Nu},Nu())return new Ru;throw new Error("Cannot use create a virtual MediaSource for this video")};Bu.open=Uu,Bu.supportsNativeMediaSources=Nu;var ju={createObjectURL:function(t){var e=void 0;return t instanceof Ru?(e=g.URL.createObjectURL(t.nativeMediaSource_),t.url_=e):t instanceof Ru?(e="blob:vjs-media-source/"+Mu,Mu++,Ss.mediaSources[e]=t,e):(e=g.URL.createObjectURL(t),t.url_=e)}};Ss.MediaSource=Bu,Ss.URL=ju;var Fu=Ss.mergeOptions,Hu=function(t,e){for(var a=Fu(t,{duration:e.duration,minimumUpdatePeriod:e.minimumUpdatePeriod}),i=0;i<e.playlists.length;i++){var r=Do(a,e.playlists[i]);r&&(a=r)}return xo(e,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n=t.playlists[0].uri,s=Do(a,t.playlists[0]);s&&((a=s).mediaGroups[e][i][r].playlists[0]=a.playlists[n])}}),a},Vu=function(s){function a(t,e,i,r){y(this,a);var n=b(this,s.call(this));if(n.hls_=e,n.withCredentials=i,!t)throw new Error("A non-empty playlist URL or playlist is required");return n.on("minimumUpdatePeriod",function(){n.refreshXml_()}),n.on("mediaupdatetimeout",function(){n.refreshMedia_()}),"string"==typeof t?(n.srcUrl=t,n.state="HAVE_NOTHING",b(n)):(n.masterPlaylistLoader_=r,n.state="HAVE_METADATA",n.started=!0,n.media(t),g.setTimeout(function(){n.trigger("loadedmetadata")},0),n)}return _(a,s),a.prototype.dispose=function(){this.stopRequest(),g.clearTimeout(this.mediaUpdateTimeout)},a.prototype.stopRequest=function(){if(this.request){var t=this.request;this.request=null,t.onreadystatechange=null,t.abort()}},a.prototype.media=function(t){if(!t)return this.media_;if("HAVE_NOTHING"===this.state)throw new Error("Cannot switch media playlist from "+this.state);var e=this.state;if("string"==typeof t){if(!this.master.playlists[t])throw new Error("Unknown playlist URI: "+t);t=this.master.playlists[t]}var i=!this.media_||t.uri!==this.media_.uri;this.state="HAVE_METADATA",i&&(this.media_&&this.trigger("mediachanging"),this.media_=t,this.refreshMedia_(),"HAVE_MASTER"!==e&&this.trigger("mediachange"))},a.prototype.pause=function(){this.stopRequest(),"HAVE_NOTHING"===this.state&&(this.started=!1)},a.prototype.load=function(){this.started?this.trigger("loadedplaylist"):this.start()},a.prototype.parseMasterXml=function(){var s=ya(this.masterXml_,{manifestUri:this.srcUrl,clientOffset:this.clientOffset_});s.uri=this.srcUrl;for(var t=0;t<s.playlists.length;t++){var e="placeholder-uri-"+t;s.playlists[t].uri=e,s.playlists[e]=s.playlists[t]}return xo(s,function(t,e,i,r){if(t.playlists&&t.playlists.length){var n="placeholder-uri-"+e+"-"+i+"-"+r;t.playlists[0].uri=n,s.playlists[n]=t.playlists[0]}}),Ro(s),Mo(s),s},a.prototype.start=function(){var i=this;this.started=!0,this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(i.request){if(i.request=null,t)return i.error={status:e.status,message:"DASH playlist request error at URL: "+i.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===i.state&&(i.started=!1),i.trigger("error");i.masterXml_=e.responseText,e.responseHeaders&&e.responseHeaders.date?i.masterLoaded_=Date.parse(e.responseHeaders.date):i.masterLoaded_=Date.now(),i.syncClientServerClock_(i.onClientServerClockSync_.bind(i))}})},a.prototype.syncClientServerClock_=function(r){var n=this,s=va(this.masterXml_);return null===s?(this.clientOffset_=this.masterLoaded_-Date.now(),r()):"DIRECT"===s.method?(this.clientOffset_=s.value-Date.now(),r()):void(this.request=this.hls_.xhr({uri:Po(this.srcUrl,s.value),method:s.method,withCredentials:this.withCredentials},function(t,e){if(n.request){if(t)return n.clientOffset_=n.masterLoaded_-Date.now(),r();var i=void 0;i="HEAD"===s.method?e.responseHeaders&&e.responseHeaders.date?Date.parse(e.responseHeaders.date):n.masterLoaded_:Date.parse(e.responseText),n.clientOffset_=i-Date.now(),r()}}))},a.prototype.onClientServerClockSync_=function(){var t=this;this.master=this.parseMasterXml(),this.state="HAVE_MASTER",this.trigger("loadedplaylist"),this.media_||this.media(this.master.playlists[0]),g.setTimeout(function(){t.trigger("loadedmetadata")},0),this.master.minimumUpdatePeriod&&g.setTimeout(function(){t.trigger("minimumUpdatePeriod")},this.master.minimumUpdatePeriod)},a.prototype.refreshXml_=function(){var r=this;this.request=this.hls_.xhr({uri:this.srcUrl,withCredentials:this.withCredentials},function(t,e){if(r.request){if(r.request=null,t)return r.error={status:e.status,message:"DASH playlist request error at URL: "+r.srcUrl,responseText:e.responseText,code:2},"HAVE_NOTHING"===r.state&&(r.started=!1),r.trigger("error");r.masterXml_=e.responseText;var i=r.parseMasterXml();r.master=Hu(r.master,i),g.setTimeout(function(){r.trigger("minimumUpdatePeriod")},r.master.minimumUpdatePeriod)}})},a.prototype.refreshMedia_=function(){var t=this,e=void 0,i=void 0;this.masterPlaylistLoader_?(e=this.masterPlaylistLoader_.master,i=this.masterPlaylistLoader_.parseMasterXml()):(e=this.master,i=this.parseMasterXml());var r=Hu(e,i);r?(this.masterPlaylistLoader_?this.masterPlaylistLoader_.master=r:this.master=r,this.media_=r.playlists[this.media_.uri]):this.trigger("playlistunchanged"),this.media().endList||(this.mediaUpdateTimeout=g.setTimeout(function(){t.trigger("mediaupdatetimeout")},Uo(this.media(),!!r))),this.trigger("loadedplaylist")},a}(Ss.EventTarget),qu=function(t){return Ss.log.debug?Ss.log.debug.bind(Ss,"VHS:",t+" >"):function(){}};function Wu(){}var zu=function(){function n(t,e,i,r){y(this,n),this.callbacks_=[],this.pendingCallback_=null,this.timestampOffset_=0,this.mediaSource=t,this.processedAppend_=!1,this.type_=i,this.mimeType_=e,this.logger_=qu("SourceUpdater["+i+"]["+e+"]"),"closed"===t.readyState?t.addEventListener("sourceopen",this.createSourceBuffer_.bind(this,e,r)):this.createSourceBuffer_(e,r)}return n.prototype.createSourceBuffer_=function(t,e){var i=this;this.sourceBuffer_=this.mediaSource.addSourceBuffer(t),this.logger_("created SourceBuffer"),e&&(e.trigger("sourcebufferadded"),this.mediaSource.sourceBuffers.length<2)?e.on("sourcebufferadded",function(){i.start_()}):this.start_()},n.prototype.start_=function(){var e=this;this.started_=!0,this.onUpdateendCallback_=function(){var t=e.pendingCallback_;e.pendingCallback_=null,e.logger_("buffered ["+pu(e.buffered())+"]"),t&&t(),e.runCallback_()},this.sourceBuffer_.addEventListener("updateend",this.onUpdateendCallback_),this.runCallback_()},n.prototype.abort=function(t){var e=this;this.processedAppend_&&this.queueCallback_(function(){e.sourceBuffer_.abort()},t)},n.prototype.appendBuffer=function(t,e){var i=this;this.processedAppend_=!0,this.queueCallback_(function(){i.sourceBuffer_.appendBuffer(t)},e)},n.prototype.buffered=function(){return this.sourceBuffer_?this.sourceBuffer_.buffered:Ss.createTimeRanges()},n.prototype.remove=function(t,e){var i=this;this.processedAppend_&&this.queueCallback_(function(){i.logger_("remove ["+t+" => "+e+"]"),i.sourceBuffer_.remove(t,e)},Wu)},n.prototype.updating=function(){return!this.sourceBuffer_||this.sourceBuffer_.updating||this.pendingCallback_},n.prototype.timestampOffset=function(t){var e=this;return"undefined"!=typeof t&&(this.queueCallback_(function(){e.sourceBuffer_.timestampOffset=t}),this.timestampOffset_=t),this.timestampOffset_},n.prototype.queueCallback_=function(t,e){this.callbacks_.push([t.bind(this),e]),this.runCallback_()},n.prototype.runCallback_=function(){var t=void 0;!this.updating()&&this.callbacks_.length&&this.started_&&(t=this.callbacks_.shift(),this.pendingCallback_=t[1],t[0]())},n.prototype.dispose=function(){this.sourceBuffer_.removeEventListener("updateend",this.onUpdateendCallback_),this.sourceBuffer_&&"open"===this.mediaSource.readyState&&this.sourceBuffer_.abort()},n}(),Gu={GOAL_BUFFER_LENGTH:30,MAX_GOAL_BUFFER_LENGTH:60,GOAL_BUFFER_LENGTH_RATE:1,BANDWIDTH_VARIANCE:1.2,BUFFER_LOW_WATER_LINE:0,MAX_BUFFER_LOW_WATER_LINE:30,BUFFER_LOW_WATER_LINE_RATE:1},Xu=2,Yu=-101,$u=-102,Ku=function(t){var e,i,r={};return t.byterange&&(r.Range=(e=t.byterange,i=e.offset+e.length-1,"bytes="+e.offset+"-"+i)),r},Qu=function(t){t.forEach(function(t){t.abort()})},Ju=function(t,e){return e.timedout?{status:e.status,message:"HLS request timed-out at URL: "+e.uri,code:Yu,xhr:e}:e.aborted?{status:e.status,message:"HLS request aborted at URL: "+e.uri,code:$u,xhr:e}:t?{status:e.status,message:"HLS request errored at URL: "+e.uri,code:Xu,xhr:e}:null},Zu=function(a,o,u){var l=[],c=0;return function(t,e){if(t&&(Qu(a),l.push(t)),(c+=1)===a.length){if(e.endOfAllRequests=Date.now(),0<l.length){var i=l.reduce(function(t,e){return e.code>t.code?e:t});return u(i,e)}return e.encryptedBytes?(n=e,s=u,(r=o).addEventListener("message",function t(e){if(e.data.source===n.requestId){r.removeEventListener("message",t);var i=e.data.decrypted;return n.bytes=new Uint8Array(i.bytes,i.byteOffset,i.byteLength),s(null,n)}}),void r.postMessage(su({source:n.requestId,encrypted:n.encryptedBytes,key:n.key.bytes,iv:n.key.iv}),[n.encryptedBytes.buffer,n.key.bytes.buffer])):u(null,e)}var r,n,s}},tl=function(n,s){return function(t){var e,i,r;return n.stats=Ss.mergeOptions(n.stats,(i=(e=t).target,(r={bandwidth:1/0,bytesReceived:0,roundTripTime:Date.now()-i.requestTime||0}).bytesReceived=e.loaded,r.bandwidth=Math.floor(r.bytesReceived/r.roundTripTime*8*1e3),r)),!n.stats.firstBytesReceivedAt&&n.stats.bytesReceived&&(n.stats.firstBytesReceivedAt=Date.now()),s(t,n)}},el=function(t,e,i,r,n,s){var a,o,u,l,c=[],h=Zu(c,i,s);if(r.key){var d=t(Ss.mergeOptions(e,{uri:r.key.resolvedUri,responseType:"arraybuffer"}),(a=r,o=h,function(t,e){var i=e.response,r=Ju(t,e);if(r)return o(r,a);if(16!==i.byteLength)return o({status:e.status,message:"Invalid HLS key at URL: "+e.uri,code:Xu,xhr:e},a);var n=new DataView(i);return a.key.bytes=new Uint32Array([n.getUint32(0),n.getUint32(4),n.getUint32(8),n.getUint32(12)]),o(null,a)}));c.push(d)}if(r.map&&!r.map.bytes){var p=t(Ss.mergeOptions(e,{uri:r.map.resolvedUri,responseType:"arraybuffer",headers:Ku(r.map)}),(u=r,l=h,function(t,e){var i=e.response,r=Ju(t,e);return r?l(r,u):0===i.byteLength?l({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Xu,xhr:e},u):(u.map.bytes=new Uint8Array(e.response),l(null,u))}));c.push(p)}var f,m,g=t(Ss.mergeOptions(e,{uri:r.resolvedUri,responseType:"arraybuffer",headers:Ku(r)}),(f=r,m=h,function(t,e){var i,r=e.response,n=Ju(t,e);return n?m(n,f):0===r.byteLength?m({status:e.status,message:"Empty HLS segment content at URL: "+e.uri,code:Xu,xhr:e},f):(f.stats={bandwidth:(i=e).bandwidth,bytesReceived:i.bytesReceived||0,roundTripTime:i.roundTripTime||0},f.key?f.encryptedBytes=new Uint8Array(e.response):f.bytes=new Uint8Array(e.response),m(null,f))}));return g.addEventListener("progress",tl(r,n)),c.push(g),function(){return Qu(c)}},il={videoCodec:"avc1",videoObjectTypeIndicator:".4d400d",audioProfile:"2"},rl=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"",i={codecCount:0};return i.codecCount=e.split(",").length,i.codecCount=i.codecCount||2,(t=/(^|\s|,)+(avc[13])([^ ,]*)/i.exec(e))&&(i.videoCodec=t[2],i.videoObjectTypeIndicator=t[3]),i.audioProfile=/(^|\s|,)+mp4a.[0-9A-Fa-f]+\.([0-9A-Fa-f]+)/i.exec(e),i.audioProfile=i.audioProfile&&i.audioProfile[2],i},nl=function(t,e,i){return t+"/"+e+'; codecs="'+i.filter(function(t){return!!t}).join(", ")+'"'},sl=function(t,e){var i,r,n=(i=e).segments&&i.segments.length&&i.segments[0].map?"mp4":"mp2t",s=(r=e.attributes||{}).CODECS?rl(r.CODECS):il,a=e.attributes||{},o=!0,u=!1;if(!e)return[];if(t.mediaGroups.AUDIO&&a.AUDIO){var l=t.mediaGroups.AUDIO[a.AUDIO];if(l)for(var c in o=!(u=!0),l)if(!l[c].uri&&!l[c].playlists){o=!0;break}}u&&!s.audioProfile&&(o||(s.audioProfile=function(t,e){if(!t.mediaGroups.AUDIO||!e)return null;var i=t.mediaGroups.AUDIO[e];if(!i)return null;for(var r in i){var n=i[r];if(n.default&&n.playlists)return rl(n.playlists[0].attributes.CODECS).audioProfile}return null}(t,a.AUDIO)),s.audioProfile||(Ss.log.warn("Multiple audio tracks present but no audio codec string is specified. Attempting to use the default audio codec (mp4a.40.2)"),s.audioProfile=il.audioProfile));var h={};s.videoCodec&&(h.video=""+s.videoCodec+s.videoObjectTypeIndicator),s.audioProfile&&(h.audio="mp4a.40."+s.audioProfile);var d=nl("audio",n,[h.audio]),p=nl("video",n,[h.video]),f=nl("video",n,[h.video,h.audio]);return u?!o&&h.video?[p,d]:o||h.video?[f,d]:[d,d]:h.video?[f]:[d]},al=function(t,e){var i;return t&&(i=g.getComputedStyle(t))?i[e]:""},ol=function(t,r){var n=t.slice();t.sort(function(t,e){var i=r(t,e);return 0===i?n.indexOf(t)-n.indexOf(e):i})},ul=function(t,e){var i=void 0,r=void 0;return t.attributes.BANDWIDTH&&(i=t.attributes.BANDWIDTH),i=i||g.Number.MAX_VALUE,e.attributes.BANDWIDTH&&(r=e.attributes.BANDWIDTH),i-(r=r||g.Number.MAX_VALUE)},ll=function(t,e,i){if(!t||!e)return!1;var r=i===t.segments.length;return t.endList&&"open"===e.readyState&&r},cl=function(t){return"number"==typeof t&&isFinite(t)},hl=function(i){function r(t){y(this,r);var e=b(this,i.call(this));if(!t)throw new TypeError("Initialization settings are required");if("function"!=typeof t.currentTime)throw new TypeError("No currentTime getter specified");if(!t.mediaSource)throw new TypeError("No MediaSource specified");return e.bandwidth=t.bandwidth,e.throughput={rate:0,count:0},e.roundTrip=NaN,e.resetStats_(),e.mediaIndex=null,e.hasPlayed_=t.hasPlayed,e.currentTime_=t.currentTime,e.seekable_=t.seekable,e.seeking_=t.seeking,e.duration_=t.duration,e.mediaSource_=t.mediaSource,e.hls_=t.hls,e.loaderType_=t.loaderType,e.startingMedia_=void 0,e.segmentMetadataTrack_=t.segmentMetadataTrack,e.goalBufferLength_=t.goalBufferLength,e.sourceType_=t.sourceType,e.state_="INIT",e.checkBufferTimeout_=null,e.error_=void 0,e.currentTimeline_=-1,e.pendingSegment_=null,e.mimeType_=null,e.sourceUpdater_=null,e.xhrOptions_=null,e.activeInitSegmentId_=null,e.initSegments_={},e.decrypter_=t.decrypter,e.syncController_=t.syncController,e.syncPoint_={segmentIndex:0,time:0},e.syncController_.on("syncinfoupdate",function(){return e.trigger("syncinfoupdate")}),e.mediaSource_.addEventListener("sourceopen",function(){return e.ended_=!1}),e.fetchAtBuffer_=!1,e.logger_=qu("SegmentLoader["+e.loaderType_+"]"),Object.defineProperty(e,"state",{get:function(){return this.state_},set:function(t){t!==this.state_&&(this.logger_(this.state_+" -> "+t),this.state_=t)}}),e}return _(r,i),r.prototype.resetStats_=function(){this.mediaBytesTransferred=0,this.mediaRequests=0,this.mediaRequestsAborted=0,this.mediaRequestsTimedout=0,this.mediaRequestsErrored=0,this.mediaTransferDuration=0,this.mediaSecondsLoaded=0},r.prototype.dispose=function(){this.state="DISPOSED",this.pause(),this.abort_(),this.sourceUpdater_&&this.sourceUpdater_.dispose(),this.resetStats_()},r.prototype.abort=function(){"WAITING"===this.state?(this.abort_(),this.state="READY",this.paused()||this.monitorBuffer_()):this.pendingSegment_&&(this.pendingSegment_=null)},r.prototype.abort_=function(){this.pendingSegment_&&this.pendingSegment_.abortRequests(),this.pendingSegment_=null},r.prototype.error=function(t){return"undefined"!=typeof t&&(this.error_=t),this.pendingSegment_=null,this.error_},r.prototype.endOfStream=function(){this.ended_=!0,this.pause(),this.trigger("ended")},r.prototype.buffered_=function(){return this.sourceUpdater_?this.sourceUpdater_.buffered():Ss.createTimeRanges()},r.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=au(t),r=this.initSegments_[i];return e&&!r&&t.bytes&&(this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:t.bytes}),r||t},r.prototype.couldBeginLoading_=function(){return this.playlist_&&(this.sourceUpdater_||this.mimeType_&&"INIT"===this.state)&&!this.paused()},r.prototype.load=function(){if(this.monitorBuffer_(),this.playlist_){if(this.syncController_.setDateTimeMapping(this.playlist_),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();!this.couldBeginLoading_()||"READY"!==this.state&&"INIT"!==this.state||(this.state="READY")}},r.prototype.init_=function(){return this.state="READY",this.sourceUpdater_=new zu(this.mediaSource_,this.mimeType_,this.loaderType_,this.sourceBufferEmitter_),this.resetEverything(),this.monitorBuffer_()},r.prototype.playlist=function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};if(t){var i=this.playlist_,r=this.pendingSegment_;this.playlist_=t,this.xhrOptions_=e,this.hasPlayed_()||(t.syncInfo={mediaSequence:t.mediaSequence,time:0});var n=i?i.id:null;if(this.logger_("playlist update ["+n+" => "+t.id+"]"),this.trigger("syncinfoupdate"),"INIT"===this.state&&this.couldBeginLoading_())return this.init_();if(i&&i.uri===t.uri){var s=t.mediaSequence-i.mediaSequence;this.logger_("live window shift ["+s+"]"),null!==this.mediaIndex&&(this.mediaIndex-=s),r&&(r.mediaIndex-=s,0<=r.mediaIndex&&(r.segment=t.segments[r.mediaIndex])),this.syncController_.saveExpiredSegmentInfo(i,t)}else null!==this.mediaIndex&&this.resyncLoader()}},r.prototype.pause=function(){this.checkBufferTimeout_&&(g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=null)},r.prototype.paused=function(){return null===this.checkBufferTimeout_},r.prototype.mimeType=function(t,e){this.mimeType_||(this.mimeType_=t,this.sourceBufferEmitter_=e,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_())},r.prototype.resetEverything=function(){this.ended_=!1,this.resetLoader(),this.remove(0,this.duration_()),this.trigger("reseteverything")},r.prototype.resetLoader=function(){this.fetchAtBuffer_=!1,this.resyncLoader()},r.prototype.resyncLoader=function(){this.mediaIndex=null,this.syncPoint_=null,this.abort()},r.prototype.remove=function(t,e){this.sourceUpdater_&&this.sourceUpdater_.remove(t,e),mu(t,e,this.segmentMetadataTrack_)},r.prototype.monitorBuffer_=function(){this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),1)},r.prototype.monitorBufferTick_=function(){"READY"===this.state&&this.fillBuffer_(),this.checkBufferTimeout_&&g.clearTimeout(this.checkBufferTimeout_),this.checkBufferTimeout_=g.setTimeout(this.monitorBufferTick_.bind(this),500)},r.prototype.fillBuffer_=function(){if(!this.sourceUpdater_.updating()){this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var t=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(t)ll(this.playlist_,this.mediaSource_,t.mediaIndex)?this.endOfStream():(t.mediaIndex!==this.playlist_.segments.length-1||"ended"!==this.mediaSource_.readyState||this.seeking_())&&((t.timeline!==this.currentTimeline_||null!==t.startOfSegment&&t.startOfSegment<this.sourceUpdater_.timestampOffset())&&(this.syncController_.reset(),t.timestampOffset=t.startOfSegment),this.loadSegment_(t))}},r.prototype.checkBuffer_=function(t,e,i,r,n,s){var a=0,o=void 0;t.length&&(a=t.end(t.length-1));var u=Math.max(0,a-n);if(!e.segments.length)return null;if(u>=this.goalBufferLength_())return null;if(!r&&1<=u)return null;if(null===s)return i=this.getSyncSegmentCandidate_(e),this.generateSegmentInfo_(e,i,null,!0);if(null!==i){var l=e.segments[i];return o=l&&l.end?l.end:a,this.generateSegmentInfo_(e,i+1,o,!1)}if(this.fetchAtBuffer_){var c=Zo.getMediaInfoForTime(e,a,s.segmentIndex,s.time);i=c.mediaIndex,o=c.startTime}else{var h=Zo.getMediaInfoForTime(e,n,s.segmentIndex,s.time);i=h.mediaIndex,o=h.startTime}return this.generateSegmentInfo_(e,i,o,!1)},r.prototype.getSyncSegmentCandidate_=function(t){var e=this;if(-1===this.currentTimeline_)return 0;var i=t.segments.map(function(t,e){return{timeline:t.timeline,segmentIndex:e}}).filter(function(t){return t.timeline===e.currentTimeline_});return i.length?i[Math.min(i.length-1,1)].segmentIndex:Math.max(t.segments.length-1,0)},r.prototype.generateSegmentInfo_=function(t,e,i,r){if(e<0||e>=t.segments.length)return null;var n=t.segments[e];return{requestId:"segment-loader-"+Math.random(),uri:n.resolvedUri,mediaIndex:e,isSyncRequest:r,startOfSegment:i,playlist:t,bytes:null,encryptedBytes:null,timestampOffset:null,timeline:n.timeline,duration:n.duration,segment:n}},r.prototype.abortRequestEarly_=function(t){if(this.hls_.tech_.paused()||!this.xhrOptions_.timeout||!this.playlist_.attributes.BANDWIDTH)return!1;if(Date.now()-(t.firstBytesReceivedAt||Date.now())<1e3)return!1;var e=this.currentTime_(),i=t.bandwidth,r=this.pendingSegment_.duration,n=Zo.estimateSegmentRequestTime(r,i,this.playlist_,t.bytesReceived),s=function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:1;return((t.length?t.end(t.length-1):0)-e)/i}(this.buffered_(),e,this.hls_.tech_.playbackRate())-1;if(n<=s)return!1;var a=function(t){var e=t.master,i=t.currentTime,r=t.bandwidth,n=t.duration,s=t.segmentDuration,a=t.timeUntilRebuffer,o=t.currentTimeline,u=t.syncController,l=e.playlists.filter(function(t){return!Zo.isIncompatible(t)}),c=l.filter(Zo.isEnabled);c.length||(c=l.filter(function(t){return!Zo.isDisabled(t)}));var h=c.filter(Zo.hasAttribute.bind(null,"BANDWIDTH")).map(function(t){var e=u.getSyncPoint(t,n,o,i)?1:2;return{playlist:t,rebufferingImpact:Zo.estimateSegmentRequestTime(s,r,t)*e-a}}),d=h.filter(function(t){return t.rebufferingImpact<=0});return ol(d,function(t,e){return ul(e.playlist,t.playlist)}),d.length?d[0]:(ol(h,function(t,e){return t.rebufferingImpact-e.rebufferingImpact}),h[0]||null)}({master:this.hls_.playlists.master,currentTime:e,bandwidth:i,duration:this.duration_(),segmentDuration:r,timeUntilRebuffer:s,currentTimeline:this.currentTimeline_,syncController:this.syncController_});if(a){var o=n-s-a.rebufferingImpact,u=.5;return s<=lu&&(u=1),!a.playlist||a.playlist.uri===this.playlist_.uri||o<u?!1:(this.bandwidth=a.playlist.attributes.BANDWIDTH*Gu.BANDWIDTH_VARIANCE+1,this.abort(),this.trigger("earlyabort"),!0)}},r.prototype.handleProgress_=function(t,e){this.pendingSegment_&&e.requestId===this.pendingSegment_.requestId&&!this.abortRequestEarly_(e.stats)&&this.trigger("progress")},r.prototype.loadSegment_=function(t){this.state="WAITING",this.pendingSegment_=t,this.trimBackBuffer_(t),t.abortRequests=el(this.hls_.xhr,this.xhrOptions_,this.decrypter_,this.createSimplifiedSegmentObj_(t),this.handleProgress_.bind(this),this.segmentRequestFinished_.bind(this))},r.prototype.trimBackBuffer_=function(t){var e,i,r,n,s=(e=this.seekable_(),i=this.currentTime_(),r=this.playlist_.targetDuration||10,n=void 0,n=e.length&&0<e.start(0)&&e.start(0)<i?e.start(0):i-30,Math.min(n,i-r));0<s&&this.remove(0,s)},r.prototype.createSimplifiedSegmentObj_=function(t){var e=t.segment,i={resolvedUri:e.resolvedUri,byterange:e.byterange,requestId:t.requestId};if(e.key){var r=e.key.iv||new Uint32Array([0,0,0,t.mediaIndex+t.playlist.mediaSequence]);i.key={resolvedUri:e.key.resolvedUri,iv:r}}return e.map&&(i.map=this.initSegment(e.map)),i},r.prototype.segmentRequestFinished_=function(t,e){if(this.mediaRequests+=1,e.stats&&(this.mediaBytesTransferred+=e.stats.bytesReceived,this.mediaTransferDuration+=e.stats.roundTripTime),this.pendingSegment_){if(e.requestId===this.pendingSegment_.requestId){if(t)return this.pendingSegment_=null,this.state="READY",t.code===$u?void(this.mediaRequestsAborted+=1):(this.pause(),t.code===Yu?(this.mediaRequestsTimedout+=1,this.bandwidth=1,this.roundTrip=NaN,void this.trigger("bandwidthupdate")):(this.mediaRequestsErrored+=1,this.error(t),void this.trigger("error")));this.bandwidth=e.stats.bandwidth,this.roundTrip=e.stats.roundTripTime,e.map&&(e.map=this.initSegment(e.map,!0)),this.processSegmentResponse_(e)}}else this.mediaRequestsAborted+=1},r.prototype.processSegmentResponse_=function(t){var e=this.pendingSegment_;e.bytes=t.bytes,t.map&&(e.segment.map.bytes=t.map.bytes),e.endOfAllRequests=t.endOfAllRequests,this.handleSegment_()},r.prototype.handleSegment_=function(){var t=this;if(this.pendingSegment_){var e=this.pendingSegment_,i=e.segment,r=this.syncController_.probeSegmentInfo(e);"undefined"==typeof this.startingMedia_&&r&&(r.containsAudio||r.containsVideo)&&(this.startingMedia_={containsAudio:r.containsAudio,containsVideo:r.containsVideo});var n,s,a,o=(n=this.loaderType_,s=this.startingMedia_,a=r,"main"===n&&s&&a?a.containsAudio||a.containsVideo?s.containsVideo&&!a.containsVideo?"Only audio found in segment when we expected video. We can't switch to audio only from a stream that had video. To get rid of this message, please add codec information to the manifest.":!s.containsVideo&&a.containsVideo?"Video found in segment when we expected only audio. We can't switch to a stream with video from an audio only stream. To get rid of this message, please add codec information to the manifest.":null:"Neither audio nor video found in segment.":null);if(o)return this.error({message:o,blacklistDuration:1/0}),void this.trigger("error");if(e.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");null!==e.timestampOffset&&e.timestampOffset!==this.sourceUpdater_.timestampOffset()&&(this.sourceUpdater_.timestampOffset(e.timestampOffset),this.trigger("timestampoffset"));var u,l,c,h,d,p,f,m,g,y,v,_=this.syncController_.mappingForTimeline(e.timeline);if(null!==_&&this.trigger({type:"segmenttimemapping",mapping:_}),this.state="APPENDING",i.map){var b=au(i.map);if(!this.activeInitSegmentId_||this.activeInitSegmentId_!==b){var T=this.initSegment(i.map);this.sourceUpdater_.appendBuffer(T.bytes,function(){t.activeInitSegmentId_=b})}}e.byteLength=e.bytes.byteLength,"number"==typeof i.start&&"number"==typeof i.end?this.mediaSecondsLoaded+=i.end-i.start:this.mediaSecondsLoaded+=i.duration,this.logger_((l=(u=e).segment,c=l.start,h=l.end,d=u.playlist,p=d.mediaSequence,f=d.id,m=d.segments,g=void 0===m?[]:m,y=u.mediaIndex,v=u.timeline,["appending ["+y+"] of ["+p+", "+(p+g.length)+"] from playlist ["+f+"]","["+c+" => "+h+"] in timeline ["+v+"]"].join(" "))),this.sourceUpdater_.appendBuffer(e.bytes,this.handleUpdateEnd_.bind(this))}else this.state="READY"},r.prototype.handleUpdateEnd_=function(){if(!this.pendingSegment_)return this.state="READY",void(this.paused()||this.monitorBuffer_());var t=this.pendingSegment_,e=t.segment,i=null!==this.mediaIndex;(this.pendingSegment_=null,this.recordThroughput_(t),this.addSegmentMetadataCue_(t),this.state="READY",this.mediaIndex=t.mediaIndex,this.fetchAtBuffer_=!0,this.currentTimeline_=t.timeline,this.trigger("syncinfoupdate"),e.end&&this.currentTime_()-e.end>3*t.playlist.targetDuration)?this.resetEverything():(i&&this.trigger("bandwidthupdate"),this.trigger("progress"),ll(t.playlist,this.mediaSource_,t.mediaIndex+1)&&this.endOfStream(),this.paused()||this.monitorBuffer_())},r.prototype.recordThroughput_=function(t){var e=this.throughput.rate,i=Date.now()-t.endOfAllRequests+1,r=Math.floor(t.byteLength/i*8*1e3);this.throughput.rate+=(r-e)/++this.throughput.count},r.prototype.addSegmentMetadataCue_=function(t){if(this.segmentMetadataTrack_){var e=t.segment,i=e.start,r=e.end;if(cl(i)&&cl(r)){mu(i,r,this.segmentMetadataTrack_);var n=g.WebKitDataCue||g.VTTCue,s={bandwidth:t.playlist.attributes.BANDWIDTH,resolution:t.playlist.attributes.RESOLUTION,codecs:t.playlist.attributes.CODECS,byteLength:t.byteLength,uri:t.uri,timeline:t.timeline,playlist:t.playlist.uri,start:i,end:r},a=new n(i,r,JSON.stringify(s));a.value=s,this.segmentMetadataTrack_.addCue(a)}}},r}(Ss.EventTarget),dl=new Uint8Array("\n\n".split("").map(function(t){return t.charCodeAt(0)})),pl=function(t){return String.fromCharCode.apply(null,t)},fl=function(r){function n(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{};y(this,n);var i=b(this,r.call(this,t,e));return i.mediaSource_=null,i.subtitlesTrack_=null,i}return _(n,r),n.prototype.buffered_=function(){if(!this.subtitlesTrack_||!this.subtitlesTrack_.cues.length)return Ss.createTimeRanges();var t=this.subtitlesTrack_.cues,e=t[0].startTime,i=t[t.length-1].startTime;return Ss.createTimeRanges([[e,i]])},n.prototype.initSegment=function(t){var e=1<arguments.length&&void 0!==arguments[1]&&arguments[1];if(!t)return null;var i=au(t),r=this.initSegments_[i];if(e&&!r&&t.bytes){var n=dl.byteLength+t.bytes.byteLength,s=new Uint8Array(n);s.set(t.bytes),s.set(dl,t.bytes.byteLength),this.initSegments_[i]=r={resolvedUri:t.resolvedUri,byterange:t.byterange,bytes:s}}return r||t},n.prototype.couldBeginLoading_=function(){return this.playlist_&&this.subtitlesTrack_&&!this.paused()},n.prototype.init_=function(){return this.state="READY",this.resetEverything(),this.monitorBuffer_()},n.prototype.track=function(t){return"undefined"==typeof t||(this.subtitlesTrack_=t,"INIT"===this.state&&this.couldBeginLoading_()&&this.init_()),this.subtitlesTrack_},n.prototype.remove=function(t,e){mu(t,e,this.subtitlesTrack_)},n.prototype.fillBuffer_=function(){var t=this;this.syncPoint_||(this.syncPoint_=this.syncController_.getSyncPoint(this.playlist_,this.duration_(),this.currentTimeline_,this.currentTime_()));var e=this.checkBuffer_(this.buffered_(),this.playlist_,this.mediaIndex,this.hasPlayed_(),this.currentTime_(),this.syncPoint_);if(e=this.skipEmptySegments_(e)){if(null===this.syncController_.timestampOffsetForTimeline(e.timeline)){return this.syncController_.one("timestampoffset",function(){t.state="READY",t.paused()||t.monitorBuffer_()}),void(this.state="WAITING_ON_TIMELINE")}this.loadSegment_(e)}},n.prototype.skipEmptySegments_=function(t){for(;t&&t.segment.empty;)t=this.generateSegmentInfo_(t.playlist,t.mediaIndex+1,t.startOfSegment+t.duration,t.isSyncRequest);return t},n.prototype.handleSegment_=function(){var e=this;if(this.pendingSegment_&&this.subtitlesTrack_){this.state="APPENDING";var t=this.pendingSegment_,i=t.segment;if("function"!=typeof g.WebVTT&&this.subtitlesTrack_&&this.subtitlesTrack_.tech_){var r=function(){e.handleSegment_()};return this.state="WAITING_ON_VTTJS",this.subtitlesTrack_.tech_.one("vttjsloaded",r),void this.subtitlesTrack_.tech_.one("vttjserror",function(){e.subtitlesTrack_.tech_.off("vttjsloaded",r),e.error({message:"Error loading vtt.js"}),e.state="READY",e.pause(),e.trigger("error")})}i.requested=!0;try{this.parseVTTCues_(t)}catch(t){return this.error({message:t.message}),this.state="READY",this.pause(),this.trigger("error")}if(this.updateTimeMapping_(t,this.syncController_.timelines[t.timeline],this.playlist_),t.isSyncRequest)return this.trigger("syncinfoupdate"),this.pendingSegment_=null,void(this.state="READY");t.byteLength=t.bytes.byteLength,this.mediaSecondsLoaded+=i.duration,t.cues.length&&this.remove(t.cues[0].endTime,t.cues[t.cues.length-1].endTime),t.cues.forEach(function(t){e.subtitlesTrack_.addCue(t)}),this.handleUpdateEnd_()}else this.state="READY"},n.prototype.parseVTTCues_=function(e){var t=void 0,i=!1;"function"==typeof g.TextDecoder?t=new g.TextDecoder("utf8"):(t=g.WebVTT.StringDecoder(),i=!0);var r=new g.WebVTT.Parser(g,g.vttjs,t);if(e.cues=[],e.timestampmap={MPEGTS:0,LOCAL:0},r.oncue=e.cues.push.bind(e.cues),r.ontimestampmap=function(t){return e.timestampmap=t},r.onparsingerror=function(t){Ss.log.warn("Error encountered when parsing cues: "+t.message)},e.segment.map){var n=e.segment.map.bytes;i&&(n=pl(n)),r.parse(n)}var s=e.bytes;i&&(s=pl(s)),r.parse(s),r.flush()},n.prototype.updateTimeMapping_=function(t,e,i){var r=t.segment;if(e)if(t.cues.length){var n=t.timestampmap,s=n.MPEGTS/9e4-n.LOCAL+e.mapping;if(t.cues.forEach(function(t){t.startTime+=s,t.endTime+=s}),!i.syncInfo){var a=t.cues[0].startTime,o=t.cues[t.cues.length-1].startTime;i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:Math.min(a,o-r.duration)}}}else r.empty=!0},n}(hl),ml=function(t,e){for(var i=t.cues,r=0;r<i.length;r++){var n=i[r];if(e>=n.adStartTime&&e<=n.adEndTime)return n}return null},gl=yo,yl=[{name:"VOD",run:function(t,e,i,r,n){if(i!==1/0){return{time:0,segmentIndex:0}}return null}},{name:"ProgramDateTime",run:function(t,e,i,r,n){if(!t.datetimeToDisplayTime)return null;var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.dateTimeObject){var c=l.dateTimeObject.getTime()/1e3+t.datetimeToDisplayTime,h=Math.abs(n-c);if(null!==o&&o<h)break;o=h,a={time:c,segmentIndex:u}}}return a}},{name:"Segment",run:function(t,e,i,r,n){var s=e.segments||[],a=null,o=null;n=n||0;for(var u=0;u<s.length;u++){var l=s[u];if(l.timeline===r&&"undefined"!=typeof l.start){var c=Math.abs(n-l.start);if(null!==o&&o<c)break;(!a||null===o||c<=o)&&(o=c,a={time:l.start,segmentIndex:u})}}return a}},{name:"Discontinuity",run:function(t,e,i,r,n){var s=null;if(n=n||0,e.discontinuityStarts&&e.discontinuityStarts.length)for(var a=null,o=0;o<e.discontinuityStarts.length;o++){var u=e.discontinuityStarts[o],l=e.discontinuitySequence+o+1,c=t.discontinuities[l];if(c){var h=Math.abs(n-c.time);if(null!==a&&a<h)break;(!s||null===a||h<=a)&&(a=h,s={time:c.time,segmentIndex:u})}}return s}},{name:"Playlist",run:function(t,e,i,r,n){return e.syncInfo?{time:e.syncInfo.time,segmentIndex:e.syncInfo.mediaSequence-e.mediaSequence}:null}}],vl=function(e){function i(){y(this,i);var t=b(this,e.call(this));return t.inspectCache_=void 0,t.timelines=[],t.discontinuities=[],t.datetimeToDisplayTime=null,t.logger_=qu("SyncController"),t}return _(i,e),i.prototype.getSyncPoint=function(t,e,i,r){var n=this.runStrategies_(t,e,i,r);return n.length?this.selectSyncPoint_(n,{key:"time",value:r}):null},i.prototype.getExpiredTime=function(t,e){if(!t||!t.segments)return null;var i=this.runStrategies_(t,e,t.discontinuitySequence,0);if(!i.length)return null;var r=this.selectSyncPoint_(i,{key:"segmentIndex",value:0});return 0<r.segmentIndex&&(r.time*=-1),Math.abs(r.time+Ho(t,r.segmentIndex,0))},i.prototype.runStrategies_=function(t,e,i,r){for(var n=[],s=0;s<yl.length;s++){var a=yl[s],o=a.run(this,t,e,i,r);o&&(o.strategy=a.name,n.push({strategy:a.name,syncPoint:o}))}return n},i.prototype.selectSyncPoint_=function(t,e){for(var i=t[0].syncPoint,r=Math.abs(t[0].syncPoint[e.key]-e.value),n=t[0].strategy,s=1;s<t.length;s++){var a=Math.abs(t[s].syncPoint[e.key]-e.value);a<r&&(r=a,i=t[s].syncPoint,n=t[s].strategy)}return this.logger_("syncPoint for ["+e.key+": "+e.value+"] chosen with strategy ["+n+"]: [time:"+i.time+", segmentIndex:"+i.segmentIndex+"]"),i},i.prototype.saveExpiredSegmentInfo=function(t,e){for(var i=e.mediaSequence-t.mediaSequence-1;0<=i;i--){var r=t.segments[i];if(r&&"undefined"!=typeof r.start){e.syncInfo={mediaSequence:t.mediaSequence+i,time:r.start},this.logger_("playlist refresh sync: [time:"+e.syncInfo.time+", mediaSequence: "+e.syncInfo.mediaSequence+"]"),this.trigger("syncinfoupdate");break}}},i.prototype.setDateTimeMapping=function(t){if(!this.datetimeToDisplayTime&&t.segments&&t.segments.length&&t.segments[0].dateTimeObject){var e=t.segments[0].dateTimeObject.getTime()/1e3;this.datetimeToDisplayTime=-e}},i.prototype.reset=function(){this.inspectCache_=void 0},i.prototype.probeSegmentInfo=function(t){var e=t.segment,i=t.playlist,r=void 0;return(r=e.map?this.probeMp4Segment_(t):this.probeTsSegment_(t))&&this.calculateSegmentTimeMapping_(t,r)&&(this.saveDiscontinuitySyncInfo_(t),i.syncInfo||(i.syncInfo={mediaSequence:i.mediaSequence+t.mediaIndex,time:e.start})),r},i.prototype.probeMp4Segment_=function(t){var e=t.segment,i=ka(e.map.bytes),r=Ca(i,t.bytes);return null!==t.timestampOffset&&(t.timestampOffset-=r),{start:r,end:r+e.duration}},i.prototype.probeTsSegment_=function(t){var e=gl(t.bytes,this.inspectCache_),i=void 0,r=void 0;return e?(e.video&&2===e.video.length?(this.inspectCache_=e.video[1].dts,i=e.video[0].dtsTime,r=e.video[1].dtsTime):e.audio&&2===e.audio.length&&(this.inspectCache_=e.audio[1].dts,i=e.audio[0].dtsTime,r=e.audio[1].dtsTime),{start:i,end:r,containsVideo:e.video&&2===e.video.length,containsAudio:e.audio&&2===e.audio.length}):null},i.prototype.timestampOffsetForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].time},i.prototype.mappingForTimeline=function(t){return"undefined"==typeof this.timelines[t]?null:this.timelines[t].mapping},i.prototype.calculateSegmentTimeMapping_=function(t,e){var i=t.segment,r=this.timelines[t.timeline];if(null!==t.timestampOffset)r={time:t.startOfSegment,mapping:t.startOfSegment-e.start},this.timelines[t.timeline]=r,this.trigger("timestampoffset"),this.logger_("time mapping for timeline "+t.timeline+": [time: "+r.time+"] [mapping: "+r.mapping+"]"),i.start=t.startOfSegment,i.end=e.end+r.mapping;else{if(!r)return!1;i.start=e.start+r.mapping,i.end=e.end+r.mapping}return!0},i.prototype.saveDiscontinuitySyncInfo_=function(t){var e=t.playlist,i=t.segment;if(i.discontinuity)this.discontinuities[i.timeline]={time:i.start,accuracy:0};else if(e.discontinuityStarts&&e.discontinuityStarts.length)for(var r=0;r<e.discontinuityStarts.length;r++){var n=e.discontinuityStarts[r],s=e.discontinuitySequence+r+1,a=n-t.mediaIndex,o=Math.abs(a);if(!this.discontinuities[s]||this.discontinuities[s].accuracy>o){var u=void 0;u=a<0?i.start-Ho(e,t.mediaIndex,n):i.end+Ho(e,t.mediaIndex+1,n),this.discontinuities[s]={time:u,accuracy:o}}}},i}(Ss.EventTarget),_l=new Cu("./decrypter-worker.worker.js",function(t,e){var i,s,h,r,n,d,p,g,a,l,y,o,u=this;i="undefined"!=typeof t?t:"undefined"!=typeof global?global:"undefined"!=typeof u?u:{},s="undefined"!=typeof t?t:"undefined"!=typeof i?i:"undefined"!=typeof u?u:{},h=function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")},r=function(){function r(t,e){for(var i=0;i<e.length;i++){var r=e[i];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(t,e,i){return e&&r(t.prototype,e),i&&r(t,i),t}}(),n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!==("undefined"==typeof e?"undefined":v(e))&&"function"!=typeof e?t:e},d=function(){var t=[[[],[],[],[],[]],[[],[],[],[],[]]],e=t[0],i=t[1],r=e[4],n=i[4],s=void 0,a=void 0,o=void 0,u=[],l=[],c=void 0,h=void 0,d=void 0,p=void 0,f=void 0;for(s=0;s<256;s++)l[(u[s]=s<<1^283*(s>>7))^s]=s;for(a=o=0;!r[a];a^=c||1,o=l[o]||1)for(d=(d=o^o<<1^o<<2^o<<3^o<<4)>>8^255&d^99,f=16843009*u[h=u[c=u[n[r[a]=d]=a]]]^65537*h^257*c^16843008*a,p=257*u[d]^16843008*d,s=0;s<4;s++)e[s][a]=p=p<<24^p>>>8,i[s][d]=f=f<<24^f>>>8;for(s=0;s<5;s++)e[s]=e[s].slice(0),i[s]=i[s].slice(0);return t},p=null,g=function(){function c(t){h(this,c),p||(p=d()),this._tables=[[p[0][0].slice(),p[0][1].slice(),p[0][2].slice(),p[0][3].slice(),p[0][4].slice()],[p[1][0].slice(),p[1][1].slice(),p[1][2].slice(),p[1][3].slice(),p[1][4].slice()]];var e=void 0,i=void 0,r=void 0,n=void 0,s=void 0,a=this._tables[0][4],o=this._tables[1],u=t.length,l=1;if(4!==u&&6!==u&&8!==u)throw new Error("Invalid aes key size");for(n=t.slice(0),s=[],this._key=[n,s],e=u;e<4*u+28;e++)r=n[e-1],(e%u==0||8===u&&e%u==4)&&(r=a[r>>>24]<<24^a[r>>16&255]<<16^a[r>>8&255]<<8^a[255&r],e%u==0&&(r=r<<8^r>>>24^l<<24,l=l<<1^283*(l>>7))),n[e]=n[e-u]^r;for(i=0;e;i++,e--)r=n[3&i?e:e-4],s[i]=e<=4||i<4?r:o[0][a[r>>>24]]^o[1][a[r>>16&255]]^o[2][a[r>>8&255]]^o[3][a[255&r]]}return c.prototype.decrypt=function(t,e,i,r,n,s){var a=this._key[1],o=t^a[0],u=r^a[1],l=i^a[2],c=e^a[3],h=void 0,d=void 0,p=void 0,f=a.length/4-2,m=void 0,g=4,y=this._tables[1],v=y[0],_=y[1],b=y[2],T=y[3],S=y[4];for(m=0;m<f;m++)h=v[o>>>24]^_[u>>16&255]^b[l>>8&255]^T[255&c]^a[g],d=v[u>>>24]^_[l>>16&255]^b[c>>8&255]^T[255&o]^a[g+1],p=v[l>>>24]^_[c>>16&255]^b[o>>8&255]^T[255&u]^a[g+2],c=v[c>>>24]^_[o>>16&255]^b[u>>8&255]^T[255&l]^a[g+3],g+=4,o=h,u=d,l=p;for(m=0;m<4;m++)n[(3&-m)+s]=S[o>>>24]<<24^S[u>>16&255]<<16^S[l>>8&255]<<8^S[255&c]^a[g++],h=o,o=u,u=l,l=c,c=h},c}(),a=function(){function t(){h(this,t),this.listeners={}}return t.prototype.on=function(t,e){this.listeners[t]||(this.listeners[t]=[]),this.listeners[t].push(e)},t.prototype.off=function(t,e){if(!this.listeners[t])return!1;var i=this.listeners[t].indexOf(e);return this.listeners[t].splice(i,1),-1<i},t.prototype.trigger=function(t){var e=this.listeners[t];if(e)if(2===arguments.length)for(var i=e.length,r=0;r<i;++r)e[r].call(this,arguments[1]);else for(var n=Array.prototype.slice.call(arguments,1),s=e.length,a=0;a<s;++a)e[a].apply(this,n)},t.prototype.dispose=function(){this.listeners={}},t.prototype.pipe=function(e){this.on("data",function(t){e.push(t)})},t}(),l=function(e){function i(){h(this,i);var t=n(this,e.call(this,a));return t.jobs=[],t.delay=1,t.timeout_=null,t}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+("undefined"==typeof e?"undefined":v(e)));t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(i,e),i.prototype.processJob_=function(){this.jobs.shift()(),this.jobs.length?this.timeout_=setTimeout(this.processJob_.bind(this),this.delay):this.timeout_=null},i.prototype.push=function(t){this.jobs.push(t),this.timeout_||(this.timeout_=setTimeout(this.processJob_.bind(this),this.delay))},i}(a),y=function(t){return t<<24|(65280&t)<<8|(16711680&t)>>8|t>>>24},o=function(){function u(t,e,i,r){h(this,u);var n=u.STEP,s=new Int32Array(t.buffer),a=new Uint8Array(t.byteLength),o=0;for(this.asyncStream_=new l,this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a)),o=n;o<s.length;o+=n)i=new Uint32Array([y(s[o-4]),y(s[o-3]),y(s[o-2]),y(s[o-1])]),this.asyncStream_.push(this.decryptChunk_(s.subarray(o,o+n),e,i,a));this.asyncStream_.push(function(){var t;r(null,(t=a).subarray(0,t.byteLength-t[t.byteLength-1]))})}return u.prototype.decryptChunk_=function(e,i,r,n){return function(){var t=function(t,e,i){var r=new Int32Array(t.buffer,t.byteOffset,t.byteLength>>2),n=new g(Array.prototype.slice.call(e)),s=new Uint8Array(t.byteLength),a=new Int32Array(s.buffer),o=void 0,u=void 0,l=void 0,c=void 0,h=void 0,d=void 0,p=void 0,f=void 0,m=void 0;for(o=i[0],u=i[1],l=i[2],c=i[3],m=0;m<r.length;m+=4)h=y(r[m]),d=y(r[m+1]),p=y(r[m+2]),f=y(r[m+3]),n.decrypt(h,d,p,f,a,m),a[m]=y(a[m]^o),a[m+1]=y(a[m+1]^u),a[m+2]=y(a[m+2]^l),a[m+3]=y(a[m+3]^c),o=h,u=d,l=p,c=f;return s}(e,i,r);n.set(t,e.byteOffset)}},r(u,null,[{key:"STEP",get:function(){return 32e3}}]),u}(),new function(t){t.onmessage=function(t){var n=t.data,e=new Uint8Array(n.encrypted.bytes,n.encrypted.byteOffset,n.encrypted.byteLength),i=new Uint32Array(n.key.bytes,n.key.byteOffset,n.key.byteLength/4),r=new Uint32Array(n.iv.bytes,n.iv.byteOffset,n.iv.byteLength/4);new o(e,i,r,function(t,e){var i,r;s.postMessage((i={source:n.source,decrypted:e},r={},Object.keys(i).forEach(function(t){var e=i[t];ArrayBuffer.isView(e)?r[t]={bytes:e.buffer,byteOffset:e.byteOffset,byteLength:e.byteLength}:r[t]=e}),r),[e.buffer])})}}(u)}),bl=function(t,e){t.abort(),t.pause(),e&&e.activePlaylistLoader&&(e.activePlaylistLoader.pause(),e.activePlaylistLoader=null)},Tl=function(t,e){(e.activePlaylistLoader=t).load()},Sl={AUDIO:function(u,l){return function(){var t=l.segmentLoaders[u],e=l.mediaTypes[u],i=l.blacklistCurrentPlaylist;bl(t,e);var r=e.activeTrack(),n=e.activeGroup(),s=(n.filter(function(t){return t.default})[0]||n[0]).id,a=e.tracks[s];if(r!==a){for(var o in Ss.log.warn("Problem encountered loading the alternate audio track.Switching back to default."),e.tracks)e.tracks[o].enabled=e.tracks[o]===a;e.onTrackChanged()}else i({message:"Problem encountered loading the default audio track."})}},SUBTITLES:function(r,n){return function(){var t=n.segmentLoaders[r],e=n.mediaTypes[r];Ss.log.warn("Problem encountered loading the subtitle track.Disabling subtitle track."),bl(t,e);var i=e.activeTrack();i&&(i.mode="disabled"),e.onTrackChanged()}}},kl={AUDIO:function(t,e,i){if(e){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Sl[t](t,i))}},SUBTITLES:function(t,e,i){var r=i.tech,n=i.requestOptions,s=i.segmentLoaders[t],a=i.mediaTypes[t];e.on("loadedmetadata",function(){var t=e.media();s.playlist(t,n),s.track(a.activeTrack()),(!r.paused()||t.endList&&"none"!==r.preload())&&s.load()}),e.on("loadedplaylist",function(){s.playlist(e.media(),n),r.paused()||s.load()}),e.on("error",Sl[t](t,i))}},Cl=function(e,i){return function(t){return t.attributes[e]===i}},El=function(e){return function(t){return t.resolvedUri===e}},wl={AUDIO:function(t,e){var i,r,n=e.hls,s=e.sourceType,a=e.segmentLoaders[t],o=e.requestOptions.withCredentials,u=e.master,l=u.mediaGroups,c=u.playlists,h=e.mediaTypes[t],d=h.groups,p=h.tracks,f=e.masterPlaylistLoader;for(var m in l[t]&&0!==Object.keys(l[t]).length||(l[t]={main:{default:{default:!0}}}),l[t]){d[m]||(d[m]=[]);var g=c.filter(Cl(t,m));for(var y in l[t][m]){var v=l[t][m][y];g.filter(El(v.resolvedUri)).length&&delete v.resolvedUri;var _=void 0;if(_=v.resolvedUri?new No(v.resolvedUri,n,o):v.playlists&&"dash"===s?new Vu(v.playlists[0],n,o,f):null,v=Ss.mergeOptions({id:y,playlistLoader:_},v),kl[t](t,v.playlistLoader,e),d[m].push(v),"undefined"==typeof p[y]){var b=new Ss.AudioTrack({id:y,kind:(i=v,r=void 0,r=i.default?"main":"alternative",i.characteristics&&0<=i.characteristics.indexOf("public.accessibility.describes-video")&&(r="main-desc"),r),enabled:!1,language:v.language,default:v.default,label:y});p[y]=b}}}a.on("error",Sl[t](t,e))},SUBTITLES:function(t,e){var i=e.tech,r=e.hls,n=e.sourceType,s=e.segmentLoaders[t],a=e.requestOptions.withCredentials,o=e.master.mediaGroups,u=e.mediaTypes[t],l=u.groups,c=u.tracks,h=e.masterPlaylistLoader;for(var d in o[t])for(var p in l[d]||(l[d]=[]),o[t][d])if(!o[t][d][p].forced){var f=o[t][d][p],m=void 0;if("hls"===n?m=new No(f.resolvedUri,r,a):"dash"===n&&(m=new Vu(f.playlists[0],r,a,h)),f=Ss.mergeOptions({id:p,playlistLoader:m},f),kl[t](t,f.playlistLoader,e),l[d].push(f),"undefined"==typeof c[p]){var g=i.addRemoteTextTrack({id:p,kind:"subtitles",enabled:!1,language:f.language,label:p},!1).track;c[p]=g}}s.on("error",Sl[t](t,e))},"CLOSED-CAPTIONS":function(t,e){var i=e.tech,r=e.master.mediaGroups,n=e.mediaTypes[t],s=n.groups,a=n.tracks;for(var o in r[t])for(var u in s[o]||(s[o]=[]),r[t][o]){var l=r[t][o][u];if(l.instreamId.match(/CC\d/)&&(s[o].push(Ss.mergeOptions({id:u},l)),"undefined"==typeof a[u])){var c=i.addRemoteTextTrack({id:l.instreamId,kind:"captions",enabled:!1,language:l.language,label:u},!1).track;a[u]=c}}}},Al={AUDIO:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if(t[e].enabled)return t[e];return null}},SUBTITLES:function(i,r){return function(){var t=r.mediaTypes[i].tracks;for(var e in t)if("showing"===t[e].mode)return t[e];return null}}},Ll=function(e){["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){wl[t](t,e)});var i=e.mediaTypes,t=e.masterPlaylistLoader,r=e.tech,n=e.hls;["AUDIO","SUBTITLES"].forEach(function(t){var s,a,o,u,l,c;i[t].activeGroup=(s=t,a=e,function(e){var t=a.masterPlaylistLoader,i=a.mediaTypes[s].groups,r=t.media();if(!r)return null;var n=null;return r.attributes[s]&&(n=i[r.attributes[s]]),n=n||i.main,"undefined"==typeof e?n:null===e?null:n.filter(function(t){return t.id===e.id})[0]||null}),i[t].activeTrack=Al[t](t,e),i[t].onGroupChanged=(o=t,u=e,function(){var t=u.segmentLoaders,e=t[o],i=t.main,r=u.mediaTypes[o],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;bl(e,r),s&&(s.playlistLoader?(e.resyncLoader(),Tl(s.playlistLoader,r)):a&&i.resetEverything())}),i[t].onTrackChanged=(l=t,c=e,function(){var t=c.segmentLoaders,e=t[l],i=t.main,r=c.mediaTypes[l],n=r.activeTrack(),s=r.activeGroup(n),a=r.activePlaylistLoader;bl(e,r),s&&(s.playlistLoader?(a!==s.playlistLoader&&(e.track&&e.track(n),e.resetEverything()),Tl(s.playlistLoader,r)):i.resetEverything())})});var s=i.AUDIO.activeGroup(),a=(s.filter(function(t){return t.default})[0]||s[0]).id;i.AUDIO.tracks[a].enabled=!0,i.AUDIO.onTrackChanged(),t.on("mediachange",function(){["AUDIO","SUBTITLES"].forEach(function(t){return i[t].onGroupChanged()})});var o=function(){i.AUDIO.onTrackChanged(),r.trigger({type:"usage",name:"hls-audio-change"})};for(var u in r.audioTracks().addEventListener("change",o),r.remoteTextTracks().addEventListener("change",i.SUBTITLES.onTrackChanged),n.on("dispose",function(){r.audioTracks().removeEventListener("change",o),r.remoteTextTracks().removeEventListener("change",i.SUBTITLES.onTrackChanged)}),r.clearTracks("audio"),i.AUDIO.tracks)r.audioTracks().addTrack(i.AUDIO.tracks[u])},Pl=function(){var e={};return["AUDIO","SUBTITLES","CLOSED-CAPTIONS"].forEach(function(t){e[t]={groups:{},tracks:{},activePlaylistLoader:null,activeGroup:Wu,activeTrack:Wu,onGroupChanged:Wu,onTrackChanged:Wu}}),e},Ol=void 0,Il=["mediaRequests","mediaRequestsAborted","mediaRequestsTimedout","mediaRequestsErrored","mediaTransferDuration","mediaBytesTransferred"],xl=function(t){return this.audioSegmentLoader_[t]+this.mainSegmentLoader_[t]},Dl=function(d){function p(t){y(this,p);var e=b(this,d.call(this)),i=t.url,r=t.withCredentials,n=t.tech,s=t.bandwidth,a=t.externHls,o=t.useCueTags,u=t.blacklistDuration,l=t.enableLowInitialPlaylist,c=t.sourceType;if(!i)throw new Error("A non-empty playlist URL is required");Ol=a,e.withCredentials=r,e.tech_=n,e.hls_=n.hls,e.sourceType_=c,e.useCueTags_=o,e.blacklistDuration=u,e.enableLowInitialPlaylist=l,e.useCueTags_&&(e.cueTagsTrack_=e.tech_.addTextTrack("metadata","ad-cues"),e.cueTagsTrack_.inBandMetadataTrackDispatchType=""),e.requestOptions_={withCredentials:e.withCredentials,timeout:null},e.mediaTypes_=Pl(),e.mediaSource=new Ss.MediaSource,e.mediaSource.addEventListener("sourceopen",e.handleSourceOpen_.bind(e)),e.seekable_=Ss.createTimeRanges(),e.hasPlayed_=function(){return!1},e.syncController_=new vl(t),e.segmentMetadataTrack_=n.addRemoteTextTrack({kind:"metadata",label:"segment-metadata"},!1).track,e.decrypter_=new _l;var h={hls:e.hls_,mediaSource:e.mediaSource,currentTime:e.tech_.currentTime.bind(e.tech_),seekable:function(){return e.seekable()},seeking:function(){return e.tech_.seeking()},duration:function(){return e.mediaSource.duration},hasPlayed:function(){return e.hasPlayed_()},goalBufferLength:function(){return e.goalBufferLength()},bandwidth:s,syncController:e.syncController_,decrypter:e.decrypter_,sourceType:e.sourceType_};return e.masterPlaylistLoader_="dash"===e.sourceType_?new Vu(i,e.hls_,e.withCredentials):new No(i,e.hls_,e.withCredentials),e.setupMasterPlaylistLoaderListeners_(),e.mainSegmentLoader_=new hl(Ss.mergeOptions(h,{segmentMetadataTrack:e.segmentMetadataTrack_,loaderType:"main"}),t),e.audioSegmentLoader_=new hl(Ss.mergeOptions(h,{loaderType:"audio"}),t),e.subtitleSegmentLoader_=new fl(Ss.mergeOptions(h,{loaderType:"vtt"}),t),e.setupSegmentLoaderListeners_(),Il.forEach(function(t){e[t+"_"]=xl.bind(e,t)}),e.logger_=qu("MPC"),e.masterPlaylistLoader_.load(),e}return _(p,d),p.prototype.setupMasterPlaylistLoaderListeners_=function(){var r=this;this.masterPlaylistLoader_.on("loadedmetadata",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;Jo(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,t.endList&&"none"!==r.tech_.preload()&&(r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load()),Ll({sourceType:r.sourceType_,segmentLoaders:{AUDIO:r.audioSegmentLoader_,SUBTITLES:r.subtitleSegmentLoader_,main:r.mainSegmentLoader_},tech:r.tech_,requestOptions:r.requestOptions_,masterPlaylistLoader:r.masterPlaylistLoader_,hls:r.hls_,master:r.master(),mediaTypes:r.mediaTypes_,blacklistCurrentPlaylist:r.blacklistCurrentPlaylist.bind(r)}),r.triggerPresenceUsage_(r.master(),t);try{r.setupSourceBuffers_()}catch(t){return Ss.log.warn("Failed to create SourceBuffers",t),r.mediaSource.endOfStream("decode")}r.setupFirstPlay(),r.trigger("selectedinitialmedia")}),this.masterPlaylistLoader_.on("loadedplaylist",function(){var t=r.masterPlaylistLoader_.media();if(!t){r.excludeUnsupportedVariants_();var e=void 0;return r.enableLowInitialPlaylist&&(e=r.selectInitialPlaylist()),e||(e=r.selectPlaylist()),r.initialMedia_=e,void r.masterPlaylistLoader_.media(r.initialMedia_)}if(r.useCueTags_&&r.updateAdCues_(t),r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.updateDuration(),r.tech_.paused()||r.mainSegmentLoader_.load(),!t.endList){var i=function(){var t=r.seekable();0!==t.length&&r.mediaSource.addSeekableRange_(t.start(0),t.end(0))};if(r.duration()!==1/0){r.tech_.one("durationchange",function t(){r.duration()===1/0?i():r.tech_.one("durationchange",t)})}else i()}}),this.masterPlaylistLoader_.on("error",function(){r.blacklistCurrentPlaylist(r.masterPlaylistLoader_.error)}),this.masterPlaylistLoader_.on("mediachanging",function(){r.mainSegmentLoader_.abort(),r.mainSegmentLoader_.pause()}),this.masterPlaylistLoader_.on("mediachange",function(){var t=r.masterPlaylistLoader_.media(),e=1.5*r.masterPlaylistLoader_.targetDuration*1e3;Jo(r.masterPlaylistLoader_.master,r.masterPlaylistLoader_.media())?r.requestOptions_.timeout=0:r.requestOptions_.timeout=e,r.mainSegmentLoader_.playlist(t,r.requestOptions_),r.mainSegmentLoader_.load(),r.tech_.trigger({type:"mediachange",bubbles:!0})}),this.masterPlaylistLoader_.on("playlistunchanged",function(){var t=r.masterPlaylistLoader_.media();r.stuckAtPlaylistEnd_(t)&&(r.blacklistCurrentPlaylist({message:"Playlist no longer updating."}),r.tech_.trigger("playliststuck"))}),this.masterPlaylistLoader_.on("renditiondisabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-disabled"})}),this.masterPlaylistLoader_.on("renditionenabled",function(){r.tech_.trigger({type:"usage",name:"hls-rendition-enabled"})})},p.prototype.triggerPresenceUsage_=function(t,e){var i=t.mediaGroups||{},r=!0,n=Object.keys(i.AUDIO);for(var s in i.AUDIO)for(var a in i.AUDIO[s]){i.AUDIO[s][a].uri||(r=!1)}r&&this.tech_.trigger({type:"usage",name:"hls-demuxed"}),Object.keys(i.SUBTITLES).length&&this.tech_.trigger({type:"usage",name:"hls-webvtt"}),Ol.Playlist.isAes(e)&&this.tech_.trigger({type:"usage",name:"hls-aes"}),Ol.Playlist.isFmp4(e)&&this.tech_.trigger({type:"usage",name:"hls-fmp4"}),n.length&&1<Object.keys(i.AUDIO[n[0]]).length&&this.tech_.trigger({type:"usage",name:"hls-alternate-audio"}),this.useCueTags_&&this.tech_.trigger({type:"usage",name:"hls-playlist-cue-tags"})},p.prototype.setupSegmentLoaderListeners_=function(){var s=this;this.mainSegmentLoader_.on("bandwidthupdate",function(){var t=s.selectPlaylist(),e=s.masterPlaylistLoader_.media(),i=s.tech_.buffered(),r=i.length?i.end(i.length-1)-s.tech_.currentTime():0,n=s.bufferLowWaterLine();(!e.endList||s.duration()<Gu.MAX_BUFFER_LOW_WATER_LINE||t.attributes.BANDWIDTH<e.attributes.BANDWIDTH||n<=r)&&s.masterPlaylistLoader_.media(t),s.tech_.trigger("bandwidthupdate")}),this.mainSegmentLoader_.on("progress",function(){s.trigger("progress")}),this.mainSegmentLoader_.on("error",function(){s.blacklistCurrentPlaylist(s.mainSegmentLoader_.error())}),this.mainSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("timestampoffset",function(){s.tech_.trigger({type:"usage",name:"hls-timestamp-offset"})}),this.audioSegmentLoader_.on("syncinfoupdate",function(){s.onSyncInfoUpdate_()}),this.mainSegmentLoader_.on("ended",function(){s.onEndOfStream()}),this.mainSegmentLoader_.on("earlyabort",function(){s.blacklistCurrentPlaylist({message:"Aborted early because there isn't enough bandwidth to complete the request without rebuffering."},120)}),this.mainSegmentLoader_.on("reseteverything",function(){s.tech_.trigger("hls-reset")}),this.mainSegmentLoader_.on("segmenttimemapping",function(t){s.tech_.trigger({type:"hls-segment-time-mapping",mapping:t.mapping})}),this.audioSegmentLoader_.on("ended",function(){s.onEndOfStream()})},p.prototype.mediaSecondsLoaded_=function(){return Math.max(this.audioSegmentLoader_.mediaSecondsLoaded+this.mainSegmentLoader_.mediaSecondsLoaded)},p.prototype.load=function(){this.mainSegmentLoader_.load(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.load(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.load()},p.prototype.fastQualityChange_=function(){var t=this.selectPlaylist();t!==this.masterPlaylistLoader_.media()&&(this.masterPlaylistLoader_.media(t),this.mainSegmentLoader_.resetLoader())},p.prototype.play=function(){if(!this.setupFirstPlay()){this.tech_.ended()&&this.tech_.setCurrentTime(0),this.hasPlayed_()&&this.load();var t=this.tech_.seekable();return this.tech_.duration()===1/0&&this.tech_.currentTime()<t.start(0)?this.tech_.setCurrentTime(t.end(t.length-1)):void 0}},p.prototype.setupFirstPlay=function(){var t=this,e=this.masterPlaylistLoader_.media();if(!e||this.tech_.paused()||this.hasPlayed_())return!1;if(!e.endList){var i=this.seekable();if(!i.length)return!1;if(Ss.browser.IE_VERSION&&0===this.tech_.readyState())return this.tech_.one("loadedmetadata",function(){t.trigger("firstplay"),t.tech_.setCurrentTime(i.end(0)),t.hasPlayed_=function(){return!0}}),!1;this.trigger("firstplay"),this.tech_.setCurrentTime(i.end(0))}return this.hasPlayed_=function(){return!0},this.load(),!0},p.prototype.handleSourceOpen_=function(){try{this.setupSourceBuffers_()}catch(t){return Ss.log.warn("Failed to create Source Buffers",t),this.mediaSource.endOfStream("decode")}if(this.tech_.autoplay()){var t=this.tech_.play();"undefined"!=typeof t&&"function"==typeof t.then&&t.then(null,function(t){})}this.trigger("sourceopen")},p.prototype.onEndOfStream=function(){var t=this.mainSegmentLoader_.ended_;this.mediaTypes_.AUDIO.activePlaylistLoader&&(t=!this.mainSegmentLoader_.startingMedia_||this.mainSegmentLoader_.startingMedia_.containsVideo?t&&this.audioSegmentLoader_.ended_:this.audioSegmentLoader_.ended_),t&&this.mediaSource.endOfStream()},p.prototype.stuckAtPlaylistEnd_=function(t){if(!this.seekable().length)return!1;var e=this.syncController_.getExpiredTime(t,this.mediaSource.duration);if(null===e)return!1;var i=Ol.Playlist.playlistEnd(t,e),r=this.tech_.currentTime(),n=this.tech_.buffered();if(!n.length)return i-r<=.1;var s=n.end(n.length-1);return s-r<=.1&&i-s<=.1},p.prototype.blacklistCurrentPlaylist=function(){var t,e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},i=arguments[1],r=void 0;if(r=e.playlist||this.masterPlaylistLoader_.media(),i=i||e.blacklistDuration||this.blacklistDuration,!r){this.error=e;try{return this.mediaSource.endOfStream("network")}catch(t){return this.trigger("error")}}var n=1===this.masterPlaylistLoader_.master.playlists.filter(Ko).length;return n?(Ss.log.warn("Problem encountered with the current HLS playlist. Trying again since it is the final playlist."),this.tech_.trigger("retryplaylist"),this.masterPlaylistLoader_.load(n)):(r.excludeUntil=Date.now()+1e3*i,this.tech_.trigger("blacklistplaylist"),this.tech_.trigger({type:"usage",name:"hls-rendition-blacklisted"}),t=this.selectPlaylist(),Ss.log.warn("Problem encountered with the current HLS playlist."+(e.message?" "+e.message:"")+" Switching to another playlist."),this.masterPlaylistLoader_.media(t))},p.prototype.pauseLoading=function(){this.mainSegmentLoader_.pause(),this.mediaTypes_.AUDIO.activePlaylistLoader&&this.audioSegmentLoader_.pause(),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&this.subtitleSegmentLoader_.pause()},p.prototype.setCurrentTime=function(t){var e=hu(this.tech_.buffered(),t);return this.masterPlaylistLoader_&&this.masterPlaylistLoader_.media()&&this.masterPlaylistLoader_.media().segments?e&&e.length?t:(this.mainSegmentLoader_.resetEverything(),this.mainSegmentLoader_.abort(),this.mediaTypes_.AUDIO.activePlaylistLoader&&(this.audioSegmentLoader_.resetEverything(),this.audioSegmentLoader_.abort()),this.mediaTypes_.SUBTITLES.activePlaylistLoader&&(this.subtitleSegmentLoader_.resetEverything(),this.subtitleSegmentLoader_.abort()),void this.load()):0},p.prototype.duration=function(){return this.masterPlaylistLoader_?this.mediaSource?this.mediaSource.duration:Ol.Playlist.duration(this.masterPlaylistLoader_.media()):0},p.prototype.seekable=function(){return this.seekable_},p.prototype.onSyncInfoUpdate_=function(){var t=void 0,e=void 0;if(this.masterPlaylistLoader_){var i=this.masterPlaylistLoader_.media();if(i){var r=this.syncController_.getExpiredTime(i,this.mediaSource.duration);if(null!==r&&0!==(t=Ol.Playlist.seekable(i,r)).length){if(this.mediaTypes_.AUDIO.activePlaylistLoader){if(i=this.mediaTypes_.AUDIO.activePlaylistLoader.media(),null===(r=this.syncController_.getExpiredTime(i,this.mediaSource.duration)))return;if(0===(e=Ol.Playlist.seekable(i,r)).length)return}e?e.start(0)>t.end(0)||t.start(0)>e.end(0)?this.seekable_=t:this.seekable_=Ss.createTimeRanges([[e.start(0)>t.start(0)?e.start(0):t.start(0),e.end(0)<t.end(0)?e.end(0):t.end(0)]]):this.seekable_=t,this.logger_("seekable updated ["+pu(this.seekable_)+"]"),this.tech_.trigger("seekablechanged")}}}},p.prototype.updateDuration=function(){var e=this,t=this.mediaSource.duration,i=Ol.Playlist.duration(this.masterPlaylistLoader_.media()),r=this.tech_.buffered(),n=function t(){e.mediaSource.duration=i,e.tech_.trigger("durationchange"),e.mediaSource.removeEventListener("sourceopen",t)};0<r.length&&(i=Math.max(i,r.end(r.length-1))),t!==i&&("open"!==this.mediaSource.readyState?this.mediaSource.addEventListener("sourceopen",n):n())},p.prototype.dispose=function(){var r=this;this.decrypter_.terminate(),this.masterPlaylistLoader_.dispose(),this.mainSegmentLoader_.dispose(),["AUDIO","SUBTITLES"].forEach(function(t){var e=r.mediaTypes_[t].groups;for(var i in e)e[i].forEach(function(t){t.playlistLoader&&t.playlistLoader.dispose()})}),this.audioSegmentLoader_.dispose(),this.subtitleSegmentLoader_.dispose()},p.prototype.master=function(){return this.masterPlaylistLoader_.master},p.prototype.media=function(){return this.masterPlaylistLoader_.media()||this.initialMedia_},p.prototype.setupSourceBuffers_=function(){var t,e=this.masterPlaylistLoader_.media();if(e&&"open"===this.mediaSource.readyState){if((t=sl(this.masterPlaylistLoader_.master,e)).length<1)return this.error="No compatible SourceBuffer configuration for the variant stream:"+e.resolvedUri,this.mediaSource.endOfStream("decode");this.configureLoaderMimeTypes_(t),this.excludeIncompatibleVariants_(e)}},p.prototype.configureLoaderMimeTypes_=function(t){var e=1<t.length&&-1===t[0].indexOf(",")&&t[0]!==t[1]?new Ss.EventTarget:null;this.mainSegmentLoader_.mimeType(t[0],e),t[1]&&this.audioSegmentLoader_.mimeType(t[1],e)},p.prototype.excludeUnsupportedVariants_=function(){this.master().playlists.forEach(function(t){t.attributes.CODECS&&g.MediaSource&&g.MediaSource.isTypeSupported&&!g.MediaSource.isTypeSupported('video/mp4; codecs="'+t.attributes.CODECS.replace(/avc1\.(\d+)\.(\d+)/i,function(t){return xu([t])[0]})+'"')&&(t.excludeUntil=1/0)})},p.prototype.excludeIncompatibleVariants_=function(t){var i=2,r=null,e=void 0;t.attributes.CODECS&&(e=rl(t.attributes.CODECS),r=e.videoCodec,i=e.codecCount),this.master().playlists.forEach(function(t){var e={codecCount:2,videoCodec:null};t.attributes.CODECS&&(e=rl(t.attributes.CODECS)),e.codecCount!==i&&(t.excludeUntil=1/0),e.videoCodec!==r&&(t.excludeUntil=1/0)})},p.prototype.updateAdCues_=function(t){var e=0,i=this.seekable();i.length&&(e=i.start(0)),function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:0;if(t.segments)for(var r=i,n=void 0,s=0;s<t.segments.length;s++){var a=t.segments[s];if(n||(n=ml(e,r+a.duration/2)),n){if("cueIn"in a){n.endTime=r,n.adEndTime=r,r+=a.duration,n=null;continue}if(r<n.endTime){r+=a.duration;continue}n.endTime+=a.duration}else if("cueOut"in a&&((n=new g.VTTCue(r,r+a.duration,a.cueOut)).adStartTime=r,n.adEndTime=r+parseFloat(a.cueOut),e.addCue(n)),"cueOutCont"in a){var o,u,l=a.cueOutCont.split("/").map(parseFloat);o=l[0],u=l[1],(n=new g.VTTCue(r,r+a.duration,"")).adStartTime=r-o,n.adEndTime=n.adStartTime+u,e.addCue(n)}r+=a.duration}}(t,this.cueTagsTrack_,e)},p.prototype.goalBufferLength=function(){var t=this.tech_.currentTime(),e=Gu.GOAL_BUFFER_LENGTH,i=Gu.GOAL_BUFFER_LENGTH_RATE,r=Math.max(e,Gu.MAX_GOAL_BUFFER_LENGTH);return Math.min(e+t*i,r)},p.prototype.bufferLowWaterLine=function(){var t=this.tech_.currentTime(),e=Gu.BUFFER_LOW_WATER_LINE,i=Gu.BUFFER_LOW_WATER_LINE_RATE,r=Math.max(e,Gu.MAX_BUFFER_LOW_WATER_LINE);return Math.min(e+t*i,r)},p}(Ss.EventTarget),Rl=function t(e,i,r){y(this,t);var n,s,a,o=e.masterPlaylistController_.fastQualityChange_.bind(e.masterPlaylistController_);if(i.attributes.RESOLUTION){var u=i.attributes.RESOLUTION;this.width=u.width,this.height=u.height}this.bandwidth=i.attributes.BANDWIDTH,this.id=r,this.enabled=(n=e.playlists,s=i.uri,a=o,function(t){var e=n.master.playlists[s],i=$o(e),r=Ko(e);return"undefined"==typeof t?r:(t?delete e.disabled:e.disabled=!0,t===r||i||(a(),t?n.trigger("renditionenabled"):n.trigger("renditiondisabled")),t)})},Ml=["seeking","seeked","pause","playing","error"],Ul=function(){function a(t){var e=this;y(this,a),this.tech_=t.tech,this.seekable=t.seekable,this.consecutiveUpdates=0,this.lastRecordedTime=null,this.timer_=null,this.checkCurrentTimeTimeout_=null,this.logger_=qu("PlaybackWatcher"),this.logger_("initialize");var i=function(){return e.monitorCurrentTime_()},r=function(){return e.techWaiting_()},n=function(){return e.cancelTimer_()},s=function(){return e.fixesBadSeeks_()};this.tech_.on("seekablechanged",s),this.tech_.on("waiting",r),this.tech_.on(Ml,n),this.tech_.on("canplay",i),this.dispose=function(){e.logger_("dispose"),e.tech_.off("seekablechanged",s),e.tech_.off("waiting",r),e.tech_.off(Ml,n),e.tech_.off("canplay",i),e.checkCurrentTimeTimeout_&&g.clearTimeout(e.checkCurrentTimeTimeout_),e.cancelTimer_()}}return a.prototype.monitorCurrentTime_=function(){this.checkCurrentTime_(),this.checkCurrentTimeTimeout_&&g.clearTimeout(this.checkCurrentTimeTimeout_),this.checkCurrentTimeTimeout_=g.setTimeout(this.monitorCurrentTime_.bind(this),250)},a.prototype.checkCurrentTime_=function(){if(this.tech_.seeking()&&this.fixesBadSeeks_())return this.consecutiveUpdates=0,void(this.lastRecordedTime=this.tech_.currentTime());if(!this.tech_.paused()&&!this.tech_.seeking()){var t=this.tech_.currentTime(),e=this.tech_.buffered();if(this.lastRecordedTime===t&&(!e.length||t+.1>=e.end(e.length-1)))return this.techWaiting_();5<=this.consecutiveUpdates&&t===this.lastRecordedTime?(this.consecutiveUpdates++,this.waiting_()):t===this.lastRecordedTime?this.consecutiveUpdates++:(this.consecutiveUpdates=0,this.lastRecordedTime=t)}},a.prototype.cancelTimer_=function(){this.consecutiveUpdates=0,this.timer_&&(this.logger_("cancelTimer_"),clearTimeout(this.timer_)),this.timer_=null},a.prototype.fixesBadSeeks_=function(){var t=this.tech_.seeking(),e=this.seekable(),i=this.tech_.currentTime(),r=void 0;t&&this.afterSeekableWindow_(e,i)&&(r=e.end(e.length-1));t&&this.beforeSeekableWindow_(e,i)&&(r=e.start(0)+.1);return"undefined"!=typeof r&&(this.logger_("Trying to seek outside of seekable at time "+i+" with seekable range "+pu(e)+". Seeking to "+r+"."),this.tech_.setCurrentTime(r),!0)},a.prototype.waiting_=function(){if(!this.techWaiting_()){var t=this.tech_.currentTime(),e=this.tech_.buffered(),i=hu(e,t);return i.length&&t+3<=i.end(0)?(this.cancelTimer_(),this.tech_.setCurrentTime(t),this.logger_("Stopped at "+t+" while inside a buffered region ["+i.start(0)+" -> "+i.end(0)+"]. Attempting to resume playback by seeking to the current time."),void this.tech_.trigger({type:"usage",name:"hls-unknown-waiting"})):void 0}},a.prototype.techWaiting_=function(){var t=this.seekable(),e=this.tech_.currentTime();if(this.tech_.seeking()&&this.fixesBadSeeks_())return!0;if(this.tech_.seeking()||null!==this.timer_)return!0;if(this.beforeSeekableWindow_(t,e)){var i=t.end(t.length-1);return this.logger_("Fell out of live window at time "+e+". Seeking to live point (seekable end) "+i),this.cancelTimer_(),this.tech_.setCurrentTime(i),this.tech_.trigger({type:"usage",name:"hls-live-resync"}),!0}var r=this.tech_.buffered(),n=du(r,e);if(this.videoUnderflow_(n,r,e))return this.cancelTimer_(),this.tech_.setCurrentTime(e),this.tech_.trigger({type:"usage",name:"hls-video-underflow"}),!0;if(0<n.length){var s=n.start(0)-e;return this.logger_("Stopped at "+e+", setting timer for "+s+", seeking to "+n.start(0)),this.timer_=setTimeout(this.skipTheGap_.bind(this),1e3*s,e),!0}return!1},a.prototype.afterSeekableWindow_=function(t,e){return!!t.length&&e>t.end(t.length-1)+.1},a.prototype.beforeSeekableWindow_=function(t,e){return!!(t.length&&0<t.start(0)&&e<t.start(0)-.1)},a.prototype.videoUnderflow_=function(t,e,i){if(0===t.length){var r=this.gapFromVideoUnderflow_(e,i);if(r)return this.logger_("Encountered a gap in video from "+r.start+" to "+r.end+". Seeking to current time "+i),!0}return!1},a.prototype.skipTheGap_=function(t){var e=this.tech_.buffered(),i=this.tech_.currentTime(),r=du(e,i);this.cancelTimer_(),0!==r.length&&i===t&&(this.logger_("skipTheGap_:","currentTime:",i,"scheduled currentTime:",t,"nextRange start:",r.start(0)),this.tech_.setCurrentTime(r.start(0)+lu),this.tech_.trigger({type:"usage",name:"hls-gap-skip"}))},a.prototype.gapFromVideoUnderflow_=function(t,e){for(var i=function(t){if(t.length<2)return Ss.createTimeRanges();for(var e=[],i=1;i<t.length;i++){var r=t.end(i-1),n=t.start(i);e.push([r,n])}return Ss.createTimeRanges(e)}(t),r=0;r<i.length;r++){var n=i.start(r),s=i.end(r);if(e-n<4&&2<e-n)return{start:n,end:s}}return null},a}(),Nl={errorInterval:30,getSource:function(t){return t(this.tech({IWillNotUseThisInPlugins:!0}).currentSource_)}},Bl=function(t){!function e(i,t){var r=0,n=0,s=Ss.mergeOptions(Nl,t);i.ready(function(){i.trigger({type:"usage",name:"hls-error-reload-initialized"})});var a=function(){n&&i.currentTime(n)},o=function(t){null!=t&&(n=i.duration()!==1/0&&i.currentTime()||0,i.one("loadedmetadata",a),i.src(t),i.trigger({type:"usage",name:"hls-error-reload"}),i.play())},u=function(){if(Date.now()-r<1e3*s.errorInterval)i.trigger({type:"usage",name:"hls-error-reload-canceled"});else{if(s.getSource&&"function"==typeof s.getSource)return r=Date.now(),s.getSource.call(i,o);Ss.log.error("ERROR: reloadSourceOnError - The option getSource must be a function!")}},l=function t(){i.off("loadedmetadata",a),i.off("error",u),i.off("dispose",t)};i.on("error",u),i.on("dispose",l),i.reloadSourceOnError=function(t){l(),e(i,t)}}(this,t)},jl={PlaylistLoader:No,Playlist:Zo,Decrypter:Lo,AsyncStream:Eo,decrypt:Ao,utils:uu,STANDARD_PLAYLIST_SELECTOR:function(){return function(t,e,i,r){var n=t.playlists.map(function(t){var e,i;return e=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width,i=t.attributes.RESOLUTION&&t.attributes.RESOLUTION.height,{bandwidth:t.attributes.BANDWIDTH||g.Number.MAX_VALUE,width:e,height:i,playlist:t}});ol(n,function(t,e){return t.bandwidth-e.bandwidth});var s=(n=n.filter(function(t){return!Zo.isIncompatible(t.playlist)})).filter(function(t){return Zo.isEnabled(t.playlist)});s.length||(s=n.filter(function(t){return!Zo.isDisabled(t.playlist)}));var a=s.filter(function(t){return t.bandwidth*Gu.BANDWIDTH_VARIANCE<e}),o=a[a.length-1],u=a.filter(function(t){return t.bandwidth===o.bandwidth})[0],l=a.filter(function(t){return t.width&&t.height});ol(l,function(t,e){return t.width-e.width});var c=l.filter(function(t){return t.width===i&&t.height===r});o=c[c.length-1];var h=c.filter(function(t){return t.bandwidth===o.bandwidth})[0],d=void 0,p=void 0,f=void 0;h||(p=(d=l.filter(function(t){return t.width>i||t.height>r})).filter(function(t){return t.width===d[0].width&&t.height===d[0].height}),o=p[p.length-1],f=p.filter(function(t){return t.bandwidth===o.bandwidth})[0]);var m=f||h||u||s[0]||n[0];return m?m.playlist:null}(this.playlists.master,this.systemBandwidth,parseInt(al(this.tech_.el(),"width"),10),parseInt(al(this.tech_.el(),"height"),10))},INITIAL_PLAYLIST_SELECTOR:function(){var t=this.playlists.master.playlists.filter(Zo.isEnabled);return ol(t,function(t,e){return ul(t,e)}),t.filter(function(t){return rl(t.attributes.CODECS).videoCodec})[0]||null},comparePlaylistBandwidth:ul,comparePlaylistResolution:function(t,e){var i=void 0,r=void 0;return t.attributes.RESOLUTION&&t.attributes.RESOLUTION.width&&(i=t.attributes.RESOLUTION.width),i=i||g.Number.MAX_VALUE,e.attributes.RESOLUTION&&e.attributes.RESOLUTION.width&&(r=e.attributes.RESOLUTION.width),i===(r=r||g.Number.MAX_VALUE)&&t.attributes.BANDWIDTH&&e.attributes.BANDWIDTH?t.attributes.BANDWIDTH-e.attributes.BANDWIDTH:i-r},xhr:iu()};["GOAL_BUFFER_LENGTH","MAX_GOAL_BUFFER_LENGTH","GOAL_BUFFER_LENGTH_RATE","BUFFER_LOW_WATER_LINE","MAX_BUFFER_LOW_WATER_LINE","BUFFER_LOW_WATER_LINE_RATE","BANDWIDTH_VARIANCE"].forEach(function(e){Object.defineProperty(jl,e,{get:function(){return Ss.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),Gu[e]},set:function(t){Ss.log.warn("using Hls."+e+" is UNSAFE be sure you know what you are doing"),"number"!=typeof t||t<0?Ss.log.warn("value of Hls."+e+" must be greater than or equal to 0"):Gu[e]=t}})});var Fl=function(t){if(/^(audio|video|application)\/(x-|vnd\.apple\.)?mpegurl/i.test(t))return"hls";return/^application\/dash\+xml/i.test(t)?"dash":null},Hl=function(t,e){for(var i=e.media(),r=-1,n=0;n<t.length;n++)if(t[n].id===i.uri){r=n;break}t.selectedIndex_=r,t.trigger({selectedIndex:r,type:"change"})};jl.canPlaySource=function(){return Ss.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var Vl=function(t){if("dash"===t.options_.sourceType){var e=Ss.players[t.tech_.options_.playerId];if(e.eme){var i=function(t,e,i){if(!t)return t;var r={};for(var n in t)r[n]={audioContentType:'audio/mp4; codecs="'+i.attributes.CODECS+'"',videoContentType:'video/mp4; codecs="'+e.attributes.CODECS+'"'},e.contentProtection&&e.contentProtection[n]&&e.contentProtection[n].pssh&&(r[n].pssh=e.contentProtection[n].pssh),"string"==typeof t[n]&&(r[n].url=t[n]);return Ss.mergeOptions(t,r)}(t.source_.keySystems,t.playlists.media(),t.masterPlaylistController_.mediaTypes_.AUDIO.activePlaylistLoader.media());i&&(e.currentSource().keySystems=i)}}};jl.supportsNativeHls=function(){var e=p.createElement("video");if(!Ss.getTech("Html5").isSupported())return!1;return["application/vnd.apple.mpegurl","audio/mpegurl","audio/x-mpegurl","application/x-mpegurl","video/x-mpegurl","video/mpegurl","application/mpegurl"].some(function(t){return/maybe|probably/i.test(e.canPlayType(t))})}(),jl.supportsNativeDash=!!Ss.getTech("Html5").isSupported()&&/maybe|probably/i.test(p.createElement("video").canPlayType("application/dash+xml")),jl.supportsTypeNatively=function(t){return"hls"===t?jl.supportsNativeHls:"dash"===t&&jl.supportsNativeDash},jl.isSupported=function(){return Ss.log.warn("HLS is no longer a tech. Please remove it from your player's techOrder.")};var ql=function(s){function a(t,e,i){y(this,a);var r=b(this,s.call(this,e,i.hls));if(e.options_&&e.options_.playerId){var n=Ss(e.options_.playerId);n.hasOwnProperty("hls")||Object.defineProperty(n,"hls",{get:function(){return Ss.log.warn("player.hls is deprecated. Use player.tech_.hls instead."),e.trigger({type:"usage",name:"hls-player-access"}),r}}),n.vhs=r,n.dash=r}if(r.tech_=e,r.source_=t,r.stats={},r.ignoreNextSeekingEvent_=!1,r.setOptions_(),r.options_.overrideNative&&(e.featuresNativeVideoTracks||e.featuresNativeAudioTracks))throw new Error("Overriding native HLS requires emulated tracks. See https://git.io/vMpjB");return r.on(p,["fullscreenchange","webkitfullscreenchange","mozfullscreenchange","MSFullscreenChange"],function(t){var e=p.fullscreenElement||p.webkitFullscreenElement||p.mozFullScreenElement||p.msFullscreenElement;e&&e.contains(r.tech_.el())&&r.masterPlaylistController_.fastQualityChange_()}),r.on(r.tech_,"seeking",function(){this.ignoreNextSeekingEvent_?this.ignoreNextSeekingEvent_=!1:this.setCurrentTime(this.tech_.currentTime())}),r.on(r.tech_,"error",function(){this.masterPlaylistController_&&this.masterPlaylistController_.pauseLoading()}),r.on(r.tech_,"play",r.play),r}return _(a,s),a.prototype.setOptions_=function(){var e=this;this.options_.withCredentials=this.options_.withCredentials||!1,"number"!=typeof this.options_.blacklistDuration&&(this.options_.blacklistDuration=300),"number"!=typeof this.options_.bandwidth&&(this.options_.bandwidth=4194304),this.options_.enableLowInitialPlaylist=this.options_.enableLowInitialPlaylist&&4194304===this.options_.bandwidth,["withCredentials","bandwidth"].forEach(function(t){"undefined"!=typeof e.source_[t]&&(e.options_[t]=e.source_[t])}),this.bandwidth=this.options_.bandwidth},a.prototype.src=function(t,e){var r=this;t&&(this.setOptions_(),this.options_.url=this.source_.src,this.options_.tech=this.tech_,this.options_.externHls=jl,this.options_.sourceType=Fl(e),this.masterPlaylistController_=new Dl(this.options_),this.playbackWatcher_=new Ul(Ss.mergeOptions(this.options_,{seekable:function(){return r.seekable()}})),this.masterPlaylistController_.on("error",function(){Ss.players[r.tech_.options_.playerId].error(r.masterPlaylistController_.error)}),this.masterPlaylistController_.selectPlaylist=this.selectPlaylist?this.selectPlaylist.bind(this):jl.STANDARD_PLAYLIST_SELECTOR.bind(this),this.masterPlaylistController_.selectInitialPlaylist=jl.INITIAL_PLAYLIST_SELECTOR.bind(this),this.playlists=this.masterPlaylistController_.masterPlaylistLoader_,this.mediaSource=this.masterPlaylistController_.mediaSource,Object.defineProperties(this,{selectPlaylist:{get:function(){return this.masterPlaylistController_.selectPlaylist},set:function(t){this.masterPlaylistController_.selectPlaylist=t.bind(this)}},throughput:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.throughput.rate},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.throughput.rate=t,this.masterPlaylistController_.mainSegmentLoader_.throughput.count=1}},bandwidth:{get:function(){return this.masterPlaylistController_.mainSegmentLoader_.bandwidth},set:function(t){this.masterPlaylistController_.mainSegmentLoader_.bandwidth=t,this.masterPlaylistController_.mainSegmentLoader_.throughput={rate:0,count:0}}},systemBandwidth:{get:function(){var t=1/(this.bandwidth||1),e=void 0;return e=0<this.throughput?1/this.throughput:0,Math.floor(1/(t+e))},set:function(){Ss.log.error('The "systemBandwidth" property is read-only')}}}),Object.defineProperties(this.stats,{bandwidth:{get:function(){return r.bandwidth||0},enumerable:!0},mediaRequests:{get:function(){return r.masterPlaylistController_.mediaRequests_()||0},enumerable:!0},mediaRequestsAborted:{get:function(){return r.masterPlaylistController_.mediaRequestsAborted_()||0},enumerable:!0},mediaRequestsTimedout:{get:function(){return r.masterPlaylistController_.mediaRequestsTimedout_()||0},enumerable:!0},mediaRequestsErrored:{get:function(){return r.masterPlaylistController_.mediaRequestsErrored_()||0},enumerable:!0},mediaTransferDuration:{get:function(){return r.masterPlaylistController_.mediaTransferDuration_()||0},enumerable:!0},mediaBytesTransferred:{get:function(){return r.masterPlaylistController_.mediaBytesTransferred_()||0},enumerable:!0},mediaSecondsLoaded:{get:function(){return r.masterPlaylistController_.mediaSecondsLoaded_()||0},enumerable:!0},buffered:{get:function(){return fu(r.tech_.buffered())},enumerable:!0},currentTime:{get:function(){return r.tech_.currentTime()},enumerable:!0},currentSource:{get:function(){return r.tech_.currentSource_},enumerable:!0},currentTech:{get:function(){return r.tech_.name_},enumerable:!0},duration:{get:function(){return r.tech_.duration()},enumerable:!0},master:{get:function(){return r.playlists.master},enumerable:!0},playerDimensions:{get:function(){return r.tech_.currentDimensions()},enumerable:!0},seekable:{get:function(){return fu(r.tech_.seekable())},enumerable:!0},timestamp:{get:function(){return Date.now()},enumerable:!0},videoPlaybackQuality:{get:function(){return r.tech_.getVideoPlaybackQuality()},enumerable:!0}}),this.tech_.one("canplay",this.masterPlaylistController_.setupFirstPlay.bind(this.masterPlaylistController_)),this.masterPlaylistController_.on("selectedinitialmedia",function(){var i,t;t=(i=r).playlists,i.representations=function(){return t.master.playlists.filter(function(t){return!$o(t)}).map(function(t,e){return new Rl(i,t,t.uri)})},Vl(r)}),this.on(this.masterPlaylistController_,"progress",function(){this.tech_.trigger("progress")}),this.on(this.masterPlaylistController_,"firstplay",function(){this.ignoreNextSeekingEvent_=!0}),this.tech_.ready(function(){return r.setupQualityLevels_()}),this.tech_.el()&&this.tech_.src(Ss.URL.createObjectURL(this.masterPlaylistController_.mediaSource)))},a.prototype.setupQualityLevels_=function(){var i=this,t=Ss.players[this.tech_.options_.playerId];t&&t.qualityLevels&&(this.qualityLevels_=t.qualityLevels(),this.masterPlaylistController_.on("selectedinitialmedia",function(){var e,t;e=i.qualityLevels_,(t=i).representations().forEach(function(t){e.addQualityLevel(t)}),Hl(e,t.playlists)}),this.playlists.on("mediachange",function(){Hl(i.qualityLevels_,i.playlists)}))},a.prototype.play=function(){this.masterPlaylistController_.play()},a.prototype.setCurrentTime=function(t){this.masterPlaylistController_.setCurrentTime(t)},a.prototype.duration=function(){return this.masterPlaylistController_.duration()},a.prototype.seekable=function(){return this.masterPlaylistController_.seekable()},a.prototype.dispose=function(){this.playbackWatcher_&&this.playbackWatcher_.dispose(),this.masterPlaylistController_&&this.masterPlaylistController_.dispose(),this.qualityLevels_&&this.qualityLevels_.dispose(),s.prototype.dispose.call(this)},a}(Ss.getComponent("Component")),Wl={name:"videojs-http-streaming",VERSION:"1.0.0",canHandleSource:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=Ss.mergeOptions(Ss.options,e);return Wl.canPlayType(t.type,i)},handleSource:function(t,e){var i=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=Ss.mergeOptions(Ss.options,i);return e.hls=new ql(t,e,r),e.hls.xhr=iu(),e.hls.src(t.src,t.type),e.hls},canPlayType:function(t){var e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{},i=Ss.mergeOptions(Ss.options,e).hls.overrideNative,r=Fl(t);return r&&(!jl.supportsTypeNatively(r)||i)?"maybe":""}};return"undefined"!=typeof Ss.MediaSource&&"undefined"!=typeof Ss.URL||(Ss.MediaSource=Bu,Ss.URL=ju),Bu.supportsNativeMediaSources()&&Ss.getTech("Html5").registerSourceHandler(Wl,0),Ss.HlsHandler=ql,Ss.HlsSourceHandler=Wl,Ss.Hls=jl,Ss.use||Ss.registerComponent("Hls",jl),Ss.options.hls=Ss.options.hls||{},Ss.registerPlugin?Ss.registerPlugin("reloadSourceOnError",Bl):Ss.plugin("reloadSourceOnError",Bl),Ss});
;(function(root,factory){if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=factory(require("video.js"))}else if(typeof define==="function"&&define.amd){define(["videojs"],function(videojs){return root.Youtube=factory(videojs)})}else{root.Youtube=factory(root.videojs)}})(this,function(videojs){"use strict";var _isOnMobile=videojs.browser.IS_IOS||videojs.browser.IS_ANDROID;var Tech=videojs.getTech("Tech");var Youtube=videojs.extend(Tech,{constructor:function(options,ready){Tech.call(this,options,ready);this.setPoster(options.poster);this.setSrc(this.options_.source,true);this.setTimeout(function(){if(this.el_){this.el_.parentNode.className+=" vjs-youtube";if(_isOnMobile){this.el_.parentNode.className+=" vjs-youtube-mobile"}if(Youtube.isApiReady){this.initYTPlayer()}else{Youtube.apiReadyQueue.push(this)}}}.bind(this))},dispose:function(){if(this.ytPlayer){if(this.ytPlayer.stopVideo){this.ytPlayer.stopVideo()}if(this.ytPlayer.destroy){this.ytPlayer.destroy()}}else{var index=Youtube.apiReadyQueue.indexOf(this);if(index!==-1){Youtube.apiReadyQueue.splice(index,1)}}this.ytPlayer=null;this.el_.parentNode.className=this.el_.parentNode.className.replace(" vjs-youtube","").replace(" vjs-youtube-mobile","");this.el_.parentNode.removeChild(this.el_);Tech.prototype.dispose.call(this)},createEl:function(){var div=document.createElement("div");div.setAttribute("id",this.options_.techId);div.setAttribute("style","width:100%;height:100%;top:0;left:0;position:absolute");div.setAttribute("class","vjs-tech");var divWrapper=document.createElement("div");divWrapper.appendChild(div);if(!_isOnMobile&&!this.options_.ytControls){var divBlocker=document.createElement("div");divBlocker.setAttribute("class","vjs-iframe-blocker");divBlocker.setAttribute("style","position:absolute;top:0;left:0;width:100%;height:100%");divBlocker.onclick=function(){this.pause()}.bind(this);divWrapper.appendChild(divBlocker)}return divWrapper},initYTPlayer:function(){var playerVars={controls:0,modestbranding:1,rel:0,showinfo:0,loop:this.options_.loop?1:0};if(typeof this.options_.autohide!=="undefined"){playerVars.autohide=this.options_.autohide}if(typeof this.options_["cc_load_policy"]!=="undefined"){playerVars["cc_load_policy"]=this.options_["cc_load_policy"]}if(typeof this.options_.ytControls!=="undefined"){playerVars.controls=this.options_.ytControls}if(typeof this.options_.disablekb!=="undefined"){playerVars.disablekb=this.options_.disablekb}if(typeof this.options_.end!=="undefined"){playerVars.end=this.options_.end}if(typeof this.options_.color!=="undefined"){playerVars.color=this.options_.color}if(!playerVars.controls){playerVars.fs=0}else if(typeof this.options_.fs!=="undefined"){playerVars.fs=this.options_.fs}if(typeof this.options_.end!=="undefined"){playerVars.end=this.options_.end}if(typeof this.options_.hl!=="undefined"){playerVars.hl=this.options_.hl}else if(typeof this.options_.language!=="undefined"){playerVars.hl=this.options_.language.substr(0,2)}if(typeof this.options_["iv_load_policy"]!=="undefined"){playerVars["iv_load_policy"]=this.options_["iv_load_policy"]}if(typeof this.options_.list!=="undefined"){playerVars.list=this.options_.list}else if(this.url&&typeof this.url.listId!=="undefined"){playerVars.list=this.url.listId}if(typeof this.options_.listType!=="undefined"){playerVars.listType=this.options_.listType}if(typeof this.options_.modestbranding!=="undefined"){playerVars.modestbranding=this.options_.modestbranding}if(typeof this.options_.playlist!=="undefined"){playerVars.playlist=this.options_.playlist}if(typeof this.options_.playsinline!=="undefined"){playerVars.playsinline=this.options_.playsinline}if(typeof this.options_.rel!=="undefined"){playerVars.rel=this.options_.rel}if(typeof this.options_.showinfo!=="undefined"){playerVars.showinfo=this.options_.showinfo}if(typeof this.options_.start!=="undefined"){playerVars.start=this.options_.start}if(typeof this.options_.theme!=="undefined"){playerVars.theme=this.options_.theme}if(typeof this.options_.customVars!=="undefined"){var customVars=this.options_.customVars;Object.keys(customVars).forEach(function(key){playerVars[key]=customVars[key]})}this.activeVideoId=this.url?this.url.videoId:null;this.activeList=playerVars.list;this.ytPlayer=new YT.Player(this.options_.techId,{videoId:this.activeVideoId,playerVars:playerVars,events:{onReady:this.onPlayerReady.bind(this),onPlaybackQualityChange:this.onPlayerPlaybackQualityChange.bind(this),onPlaybackRateChange:this.onPlayerPlaybackRateChange.bind(this),onStateChange:this.onPlayerStateChange.bind(this),onVolumeChange:this.onPlayerVolumeChange.bind(this),onError:this.onPlayerError.bind(this)}})},onPlayerReady:function(){if(this.options_.muted){this.ytPlayer.mute()}var playbackRates=this.ytPlayer.getAvailablePlaybackRates();if(playbackRates.length>1){this.featuresPlaybackRate=true}this.playerReady_=true;this.triggerReady();if(this.playOnReady){this.play()}else if(this.cueOnReady){this.cueVideoById_(this.url.videoId);this.activeVideoId=this.url.videoId}},onPlayerPlaybackQualityChange:function(){},onPlayerPlaybackRateChange:function(){this.trigger("ratechange")},onPlayerStateChange:function(e){var state=e.data;if(state===this.lastState||this.errorNumber){return}this.lastState=state;switch(state){case-1:this.trigger("loadstart");this.trigger("loadedmetadata");this.trigger("durationchange");this.trigger("ratechange");break;case YT.PlayerState.ENDED:this.trigger("ended");break;case YT.PlayerState.PLAYING:this.trigger("timeupdate");this.trigger("durationchange");this.trigger("playing");this.trigger("play");if(this.isSeeking){this.onSeeked()}break;case YT.PlayerState.PAUSED:this.trigger("canplay");if(this.isSeeking){this.onSeeked()}else{this.trigger("pause")}break;case YT.PlayerState.BUFFERING:this.player_.trigger("timeupdate");this.player_.trigger("waiting");break}},onPlayerVolumeChange:function(){this.trigger("volumechange")},onPlayerError:function(e){this.errorNumber=e.data;this.trigger("pause");this.trigger("error")},error:function(){var code=1e3+this.errorNumber;switch(this.errorNumber){case 5:return{code:code,message:"Error while trying to play the video"};case 2:case 100:return{code:code,message:"Unable to find the video"};case 101:case 150:return{code:code,message:"Playback on other Websites has been disabled by the video owner."}}return{code:code,message:"YouTube unknown error ("+this.errorNumber+")"}},loadVideoById_:function(id){var options={videoId:id};if(this.options_.start){options.startSeconds=this.options_.start}if(this.options_.end){options.endEnd=this.options_.end}this.ytPlayer.loadVideoById(options)},cueVideoById_:function(id){var options={videoId:id};if(this.options_.start){options.startSeconds=this.options_.start}if(this.options_.end){options.endEnd=this.options_.end}this.ytPlayer.cueVideoById(options)},src:function(src){if(src){this.setSrc({src:src})}return this.source},poster:function(){if(_isOnMobile){return null}return this.poster_},setPoster:function(poster){this.poster_=poster},setSrc:function(source){if(!source||!source.src){return}delete this.errorNumber;this.source=source;this.url=Youtube.parseUrl(source.src);if(!this.options_.poster){if(this.url.videoId){this.poster_="https://img.youtube.com/vi/"+this.url.videoId+"/0.jpg";this.trigger("posterchange");this.checkHighResPoster()}}if(this.options_.autoplay&&!_isOnMobile){if(this.isReady_){this.play()}else{this.playOnReady=true}}else if(this.activeVideoId!==this.url.videoId){if(this.isReady_){this.cueVideoById_(this.url.videoId);this.activeVideoId=this.url.videoId}else{this.cueOnReady=true}}},autoplay:function(){return this.options_.autoplay},setAutoplay:function(val){this.options_.autoplay=val},loop:function(){return this.options_.loop},setLoop:function(val){this.options_.loop=val},play:function(){if(!this.url||!this.url.videoId){return}this.wasPausedBeforeSeek=false;if(this.isReady_){if(this.url.listId){if(this.activeList===this.url.listId){this.ytPlayer.playVideo()}else{this.ytPlayer.loadPlaylist(this.url.listId);this.activeList=this.url.listId}}if(this.activeVideoId===this.url.videoId){this.ytPlayer.playVideo()}else{this.loadVideoById_(this.url.videoId);this.activeVideoId=this.url.videoId}}else{this.trigger("waiting");this.playOnReady=true}},pause:function(){if(this.ytPlayer){this.ytPlayer.pauseVideo()}},paused:function(){return this.ytPlayer?this.lastState!==YT.PlayerState.PLAYING&&this.lastState!==YT.PlayerState.BUFFERING:true},currentTime:function(){return this.ytPlayer?this.ytPlayer.getCurrentTime():0},setCurrentTime:function(seconds){if(this.lastState===YT.PlayerState.PAUSED){this.timeBeforeSeek=this.currentTime()}if(!this.isSeeking){this.wasPausedBeforeSeek=this.paused()}this.ytPlayer.seekTo(seconds,true);this.trigger("timeupdate");this.trigger("seeking");this.isSeeking=true;if(this.lastState===YT.PlayerState.PAUSED&&this.timeBeforeSeek!==seconds){clearInterval(this.checkSeekedInPauseInterval);this.checkSeekedInPauseInterval=setInterval(function(){if(this.lastState!==YT.PlayerState.PAUSED||!this.isSeeking){clearInterval(this.checkSeekedInPauseInterval)}else if(this.currentTime()!==this.timeBeforeSeek){this.trigger("timeupdate");this.onSeeked()}}.bind(this),250)}},seeking:function(){return this.isSeeking},seekable:function(){if(!this.ytPlayer){return videojs.createTimeRange()}return videojs.createTimeRange(0,this.ytPlayer.getDuration())},onSeeked:function(){clearInterval(this.checkSeekedInPauseInterval);this.isSeeking=false;if(this.wasPausedBeforeSeek){this.pause()}this.trigger("seeked")},playbackRate:function(){return this.ytPlayer?this.ytPlayer.getPlaybackRate():1},setPlaybackRate:function(suggestedRate){if(!this.ytPlayer){return}this.ytPlayer.setPlaybackRate(suggestedRate)},duration:function(){return this.ytPlayer?this.ytPlayer.getDuration():0},currentSrc:function(){return this.source&&this.source.src},ended:function(){return this.ytPlayer?this.lastState===YT.PlayerState.ENDED:false},volume:function(){return this.ytPlayer?this.ytPlayer.getVolume()/100:1},setVolume:function(percentAsDecimal){if(!this.ytPlayer){return}this.ytPlayer.setVolume(percentAsDecimal*100)},muted:function(){return this.ytPlayer?this.ytPlayer.isMuted():false},setMuted:function(mute){if(!this.ytPlayer){return}else{this.muted(true)}if(mute){this.ytPlayer.mute()}else{this.ytPlayer.unMute()}this.setTimeout(function(){this.trigger("volumechange")},50)},buffered:function(){if(!this.ytPlayer||!this.ytPlayer.getVideoLoadedFraction){return videojs.createTimeRange()}var bufferedEnd=this.ytPlayer.getVideoLoadedFraction()*this.ytPlayer.getDuration();return videojs.createTimeRange(0,bufferedEnd)},preload:function(){},load:function(){},reset:function(){},supportsFullScreen:function(){return true},checkHighResPoster:function(){var uri="https://img.youtube.com/vi/"+this.url.videoId+"/maxresdefault.jpg";try{var image=new Image;image.onload=function(){if("naturalHeight"in image){if(image.naturalHeight<=90||image.naturalWidth<=120){return}}else if(image.height<=90||image.width<=120){return}this.poster_=uri;this.trigger("posterchange")}.bind(this);image.onerror=function(){};image.src=uri}catch(e){}}});Youtube.isSupported=function(){return true};Youtube.canPlaySource=function(e){return Youtube.canPlayType(e.type)};Youtube.canPlayType=function(e){return e==="video/youtube"};Youtube.parseUrl=function(url){var result={videoId:null};var regex=/^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|\&v=)([^#\&\?]*).*/;var match=url.match(regex);if(match&&match[2].length===11){result.videoId=match[2]}var regPlaylist=/[?&]list=([^#\&\?]+)/;match=url.match(regPlaylist);if(match&&match[1]){result.listId=match[1]}return result};function apiLoaded(){YT.ready(function(){Youtube.isApiReady=true;for(var i=0;i<Youtube.apiReadyQueue.length;++i){Youtube.apiReadyQueue[i].initYTPlayer()}})}function loadScript(src,callback){var loaded=false;var tag=document.createElement("script");var firstScriptTag=document.getElementsByTagName("script")[0];firstScriptTag.parentNode.insertBefore(tag,firstScriptTag);tag.onload=function(){if(!loaded){loaded=true;callback()}};tag.onreadystatechange=function(){if(!loaded&&(this.readyState==="complete"||this.readyState==="loaded")){loaded=true;callback()}};tag.src=src}function injectCss(){var css=".vjs-youtube .vjs-iframe-blocker { display: none; }"+".vjs-youtube.vjs-user-inactive .vjs-iframe-blocker { display: block; }"+".vjs-youtube .vjs-poster { background-size: cover; }"+".vjs-youtube-mobile .vjs-big-play-button { display: none; }";var head=document.head||document.getElementsByTagName("head")[0];var style=document.createElement("style");style.type="text/css";if(style.styleSheet){style.styleSheet.cssText=css}else{style.appendChild(document.createTextNode(css))}head.appendChild(style)}Youtube.apiReadyQueue=[];if(typeof document!=="undefined"){loadScript("https://www.youtube.com/iframe_api",apiLoaded);injectCss()}if(typeof videojs.registerTech!=="undefined"){videojs.registerTech("Youtube",Youtube)}else{videojs.registerComponent("Youtube",Youtube)}});
;/*! (C) Andrea Giammarchi - @WebReflection - ISC Style License */
!function(e,t){"use strict";function n(){var e=A.splice(0,A.length);for(Ye=0;e.length;)e.shift().call(null,e.shift())}function r(e,t){for(var n=0,r=e.length;n<r;n++)T(e[n],t)}function o(e){for(var t,n=0,r=e.length;n<r;n++)t=e[n],V(t,le[a(t)])}function l(e){return function(t){_e(t)&&(T(t,e),ae.length&&r(t.querySelectorAll(ae),e))}}function a(e){var t=Ze.call(e,"is"),n=e.nodeName.toUpperCase(),r=ue.call(oe,t?te+t.toUpperCase():ee+n);return t&&-1<r&&!i(n,t)?-1:r}function i(e,t){return-1<ae.indexOf(e+'[is="'+t+'"]')}function u(e){var t=e.currentTarget,n=e.attrChange,r=e.attrName,o=e.target,l=e[$]||2,a=e[Q]||3;!ot||o&&o!==t||!t[Z]||"style"===r||e.prevValue===e.newValue&&(""!==e.newValue||n!==l&&n!==a)||t[Z](r,n===l?null:e.prevValue,n===a?null:e.newValue)}function c(e){var t=l(e);return function(e){A.push(t,e.target),Ye&&clearTimeout(Ye),Ye=setTimeout(n,1)}}function s(e){rt&&(rt=!1,e.currentTarget.removeEventListener(Y,s)),ae.length&&r((e.target||y).querySelectorAll(ae),e.detail===q?q:k),Re&&d()}function m(e,t){var n=this;ze.call(n,e,t),O.call(n,{target:n})}function f(e,t,n){var r=t.apply(e,n),l=a(r);return-1<l&&V(r,le[l]),n.pop()&&ae.length&&o(r.querySelectorAll(ae)),r}function p(e,t){Fe(e,t),I?I.observe(e,Qe):(nt&&(e.setAttribute=m,e[U]=D(e),e[_](J,O)),e[_](W,u)),e[K]&&ot&&(e.created=!0,e[K](),e.created=!1)}function d(){for(var e,t=0,n=ke.length;t<n;t++)e=ke[t],ie.contains(e)||(n--,ke.splice(t--,1),T(e,q))}function h(e){throw new Error("A "+e+" type is already registered")}function T(e,t){var n,r,o=a(e);-1<o&&(S(e,le[o]),o=0,t!==k||e[k]?t!==q||e[q]||(e[k]=!1,e[q]=!0,r="disconnected",o=1):(e[q]=!1,e[k]=!0,r="connected",o=1,Re&&ue.call(ke,e)<0&&ke.push(e)),o&&(n=e[t+x]||e[r+x])&&n.call(e))}function L(){}function M(e,t,n){var r=n&&n[B]||"",o=t.prototype,l=Ie(o),a=t.observedAttributes||pe,i={prototype:l};Ue(l,K,{value:function(){if(we)we=!1;else if(!this[ve]){this[ve]=!0,new t(this),o[K]&&o[K].call(this);var e=Ae[Ne.get(t)];(!ge||e.create.length>1)&&H(this)}}}),Ue(l,Z,{value:function(e){-1<ue.call(a,e)&&o[Z]&&o[Z].apply(this,arguments)}}),o[G]&&Ue(l,j,{value:o[G]}),o[z]&&Ue(l,X,{value:o[z]}),r&&(i[B]=r),e=e.toUpperCase(),Ae[e]={constructor:t,create:r?[r,De(e)]:[e]},Ne.set(t,e),y[R](e.toLowerCase(),i),g(e),Oe[e].r()}function E(e){var t=Ae[e.toUpperCase()];return t&&t.constructor}function v(e){return"string"==typeof e?e:e&&e.is||""}function H(e){for(var t,n=e[Z],r=n?e.attributes:pe,o=r.length;o--;)t=r[o],n.call(e,t.name||t.nodeName,null,t.value||t.nodeValue)}function g(e){return e=e.toUpperCase(),e in Oe||(Oe[e]={},Oe[e].p=new Ce(function(t){Oe[e].r=t})),Oe[e].p}function b(){He&&delete e.customElements,fe(e,"customElements",{configurable:!0,value:new L}),fe(e,"CustomElementRegistry",{configurable:!0,value:L});for(var t=w.get(/^HTML[A-Z]*[a-z]/),n=t.length;n--;function(t){var n=e[t];if(n){e[t]=function(e){var t,r;return e||(e=this),e[ve]||(we=!0,t=Ae[Ne.get(e.constructor)],r=ge&&1===t.create.length,e=r?Reflect.construct(n,pe,t.constructor):y.createElement.apply(y,t.create),e[ve]=!0,we=!1,r||H(e)),e},e[t].prototype=n.prototype;try{n.prototype.constructor=e[t]}catch(r){Ee=!0,fe(n,ve,{value:e[t]})}}}(t[n]));y.createElement=function(e,t){var n=v(t);return n?$e.call(this,e,De(n)):$e.call(this,e)},Je||(tt=!0,y[R](""))}var y=e.document,C=e.Object,w=function(e){var t,n,r,o,l=/^[A-Z]+[a-z]/,a=function(e){var t,n=[];for(t in u)e.test(t)&&n.push(t);return n},i=function(e,t){(t=t.toLowerCase())in u||(u[e]=(u[e]||[]).concat(t),u[t]=u[t.toUpperCase()]=e)},u=(C.create||C)(null),c={};for(n in e)for(o in e[n])for(r=e[n][o],u[o]=r,t=0;t<r.length;t++)u[r[t].toLowerCase()]=u[r[t].toUpperCase()]=o;return c.get=function(e){return"string"==typeof e?u[e]||(l.test(e)?[]:""):a(e)},c.set=function(e,t){return l.test(e)?i(e,t):i(t,e),c},c}({collections:{HTMLAllCollection:["all"],HTMLCollection:["forms"],HTMLFormControlsCollection:["elements"],HTMLOptionsCollection:["options"]},elements:{Element:["element"],HTMLAnchorElement:["a"],HTMLAppletElement:["applet"],HTMLAreaElement:["area"],HTMLAttachmentElement:["attachment"],HTMLAudioElement:["audio"],HTMLBRElement:["br"],HTMLBaseElement:["base"],HTMLBodyElement:["body"],HTMLButtonElement:["button"],HTMLCanvasElement:["canvas"],HTMLContentElement:["content"],HTMLDListElement:["dl"],HTMLDataElement:["data"],HTMLDataListElement:["datalist"],HTMLDetailsElement:["details"],HTMLDialogElement:["dialog"],HTMLDirectoryElement:["dir"],HTMLDivElement:["div"],HTMLDocument:["document"],HTMLElement:["element","abbr","address","article","aside","b","bdi","bdo","cite","code","command","dd","dfn","dt","em","figcaption","figure","footer","header","i","kbd","mark","nav","noscript","rp","rt","ruby","s","samp","section","small","strong","sub","summary","sup","u","var","wbr"],HTMLEmbedElement:["embed"],HTMLFieldSetElement:["fieldset"],HTMLFontElement:["font"],HTMLFormElement:["form"],HTMLFrameElement:["frame"],HTMLFrameSetElement:["frameset"],HTMLHRElement:["hr"],HTMLHeadElement:["head"],HTMLHeadingElement:["h1","h2","h3","h4","h5","h6"],HTMLHtmlElement:["html"],HTMLIFrameElement:["iframe"],HTMLImageElement:["img"],HTMLInputElement:["input"],HTMLKeygenElement:["keygen"],HTMLLIElement:["li"],HTMLLabelElement:["label"],HTMLLegendElement:["legend"],HTMLLinkElement:["link"],HTMLMapElement:["map"],HTMLMarqueeElement:["marquee"],HTMLMediaElement:["media"],HTMLMenuElement:["menu"],HTMLMenuItemElement:["menuitem"],HTMLMetaElement:["meta"],HTMLMeterElement:["meter"],HTMLModElement:["del","ins"],HTMLOListElement:["ol"],HTMLObjectElement:["object"],HTMLOptGroupElement:["optgroup"],HTMLOptionElement:["option"],HTMLOutputElement:["output"],HTMLParagraphElement:["p"],HTMLParamElement:["param"],HTMLPictureElement:["picture"],HTMLPreElement:["pre"],HTMLProgressElement:["progress"],HTMLQuoteElement:["blockquote","q","quote"],HTMLScriptElement:["script"],HTMLSelectElement:["select"],HTMLShadowElement:["shadow"],HTMLSlotElement:["slot"],HTMLSourceElement:["source"],HTMLSpanElement:["span"],HTMLStyleElement:["style"],HTMLTableCaptionElement:["caption"],HTMLTableCellElement:["td","th"],HTMLTableColElement:["col","colgroup"],HTMLTableElement:["table"],HTMLTableRowElement:["tr"],HTMLTableSectionElement:["thead","tbody","tfoot"],HTMLTemplateElement:["template"],HTMLTextAreaElement:["textarea"],HTMLTimeElement:["time"],HTMLTitleElement:["title"],HTMLTrackElement:["track"],HTMLUListElement:["ul"],HTMLUnknownElement:["unknown","vhgroupv","vkeygen"],HTMLVideoElement:["video"]},nodes:{Attr:["node"],Audio:["audio"],CDATASection:["node"],CharacterData:["node"],Comment:["#comment"],Document:["#document"],DocumentFragment:["#document-fragment"],DocumentType:["node"],HTMLDocument:["#document"],Image:["img"],Option:["option"],ProcessingInstruction:["node"],ShadowRoot:["#shadow-root"],Text:["#text"],XMLDocument:["xml"]}});"object"!=typeof t&&(t={type:t||"auto"});var A,O,N,D,I,F,S,V,P,R="registerElement",U="__"+R+(1e5*e.Math.random()>>0),_="addEventListener",k="attached",x="Callback",q="detached",B="extends",Z="attributeChanged"+x,j=k+x,G="connected"+x,z="disconnected"+x,K="created"+x,X=q+x,$="ADDITION",Q="REMOVAL",W="DOMAttrModified",Y="DOMContentLoaded",J="DOMSubtreeModified",ee="<",te="=",ne=/^[A-Z][._A-Z0-9]*-[-._A-Z0-9]*$/,re=["ANNOTATION-XML","COLOR-PROFILE","FONT-FACE","FONT-FACE-SRC","FONT-FACE-URI","FONT-FACE-FORMAT","FONT-FACE-NAME","MISSING-GLYPH"],oe=[],le=[],ae="",ie=y.documentElement,ue=oe.indexOf||function(e){for(var t=this.length;t--&&this[t]!==e;);return t},ce=C.prototype,se=ce.hasOwnProperty,me=ce.isPrototypeOf,fe=C.defineProperty,pe=[],de=C.getOwnPropertyDescriptor,he=C.getOwnPropertyNames,Te=C.getPrototypeOf,Le=C.setPrototypeOf,Me=!!C.__proto__,Ee=!1,ve="__dreCEv1",He=e.customElements,ge=!/^force/.test(t.type)&&!!(He&&He.define&&He.get&&He.whenDefined),be=C.create||C,ye=e.Map||function(){var e,t=[],n=[];return{get:function(e){return n[ue.call(t,e)]},set:function(r,o){e=ue.call(t,r),e<0?n[t.push(r)-1]=o:n[e]=o}}},Ce=e.Promise||function(e){function t(e){for(r=!0;n.length;)n.shift()(e)}var n=[],r=!1,o={"catch":function(){return o},then:function(e){return n.push(e),r&&setTimeout(t,1),o}};return e(t),o},we=!1,Ae=be(null),Oe=be(null),Ne=new ye,De=function(e){return e.toLowerCase()},Ie=C.create||function it(e){return e?(it.prototype=e,new it):this},Fe=Le||(Me?function(e,t){return e.__proto__=t,e}:he&&de?function(){function e(e,t){for(var n,r=he(t),o=0,l=r.length;o<l;o++)n=r[o],se.call(e,n)||fe(e,n,de(t,n))}return function(t,n){do{e(t,n)}while((n=Te(n))&&!me.call(n,t));return t}}():function(e,t){for(var n in t)e[n]=t[n];return e}),Se=e.MutationObserver||e.WebKitMutationObserver,Ve=e.HTMLAnchorElement,Pe=(e.HTMLElement||e.Element||e.Node).prototype,Re=!me.call(Pe,ie),Ue=Re?function(e,t,n){return e[t]=n.value,e}:fe,_e=Re?function(e){return 1===e.nodeType}:function(e){return me.call(Pe,e)},ke=Re&&[],xe=Pe.attachShadow,qe=Pe.cloneNode,Be=Pe.dispatchEvent,Ze=Pe.getAttribute,je=Pe.hasAttribute,Ge=Pe.removeAttribute,ze=Pe.setAttribute,Ke=y.createElement,Xe=y.importNode,$e=Ke,Qe=Se&&{attributes:!0,characterData:!0,attributeOldValue:!0},We=Se||function(e){nt=!1,ie.removeEventListener(W,We)},Ye=0,Je=R in y&&!/^force-all/.test(t.type),et=!0,tt=!1,nt=!0,rt=!0,ot=!0;if(Se&&(P=y.createElement("div"),P.innerHTML="<div><div></div></div>",new Se(function(e,t){if(e[0]&&"childList"==e[0].type&&!e[0].removedNodes[0].childNodes.length){P=de(Pe,"innerHTML");var n=P&&P.set;n&&fe(Pe,"innerHTML",{set:function(e){for(;this.lastChild;)this.removeChild(this.lastChild);n.call(this,e)}})}t.disconnect(),P=null}).observe(P,{childList:!0,subtree:!0}),P.innerHTML=""),Je||(Le||Me?(S=function(e,t){me.call(t,e)||p(e,t)},V=p):(S=function(e,t){e[U]||(e[U]=C(!0),p(e,t))},V=S),Re?(nt=!1,function(){var e=de(Pe,_),t=e.value,n=function(e){var t=new CustomEvent(W,{bubbles:!0});t.attrName=e,t.prevValue=Ze.call(this,e),t.newValue=null,t[Q]=t.attrChange=2,Ge.call(this,e),Be.call(this,t)},r=function(e,t){var n=je.call(this,e),r=n&&Ze.call(this,e),o=new CustomEvent(W,{bubbles:!0});ze.call(this,e,t),o.attrName=e,o.prevValue=n?r:null,o.newValue=t,n?o.MODIFICATION=o.attrChange=1:o[$]=o.attrChange=0,Be.call(this,o)},o=function(e){var t,n=e.currentTarget,r=n[U],o=e.propertyName;r.hasOwnProperty(o)&&(r=r[o],t=new CustomEvent(W,{bubbles:!0}),t.attrName=r.name,t.prevValue=r.value||null,t.newValue=r.value=n[o]||null,null==t.prevValue?t[$]=t.attrChange=0:t.MODIFICATION=t.attrChange=1,Be.call(n,t))};e.value=function(e,l,a){e===W&&this[Z]&&this.setAttribute!==r&&(this[U]={className:{name:"class",value:this.className}},this.setAttribute=r,this.removeAttribute=n,t.call(this,"propertychange",o)),t.call(this,e,l,a)},fe(Pe,_,e)}()):Se||(ie[_](W,We),ie.setAttribute(U,1),ie.removeAttribute(U),nt&&(O=function(e){var t,n,r,o=this;if(o===e.target){t=o[U],o[U]=n=D(o);for(r in n){if(!(r in t))return N(0,o,r,t[r],n[r],$);if(n[r]!==t[r])return N(1,o,r,t[r],n[r],"MODIFICATION")}for(r in t)if(!(r in n))return N(2,o,r,t[r],n[r],Q)}},N=function(e,t,n,r,o,l){var a={attrChange:e,currentTarget:t,attrName:n,prevValue:r,newValue:o};a[l]=e,u(a)},D=function(e){for(var t,n,r={},o=e.attributes,l=0,a=o.length;l<a;l++)t=o[l],"setAttribute"!==(n=t.name)&&(r[n]=t.value);return r})),y[R]=function(e,t){if(n=e.toUpperCase(),et&&(et=!1,Se?(I=function(e,t){function n(e,t){for(var n=0,r=e.length;n<r;t(e[n++]));}return new Se(function(r){for(var o,l,a,i=0,u=r.length;i<u;i++)o=r[i],"childList"===o.type?(n(o.addedNodes,e),n(o.removedNodes,t)):(l=o.target,ot&&l[Z]&&"style"!==o.attributeName&&(a=Ze.call(l,o.attributeName))!==o.oldValue&&l[Z](o.attributeName,o.oldValue,a))})}(l(k),l(q)),F=function(e){return I.observe(e,{childList:!0,subtree:!0}),e},F(y),xe&&(Pe.attachShadow=function(){return F(xe.apply(this,arguments))})):(A=[],y[_]("DOMNodeInserted",c(k)),y[_]("DOMNodeRemoved",c(q))),y[_](Y,s),y[_]("readystatechange",s),y.importNode=function(e,t){switch(e.nodeType){case 1:return f(y,Xe,[e,!!t]);case 11:for(var n=y.createDocumentFragment(),r=e.childNodes,o=r.length,l=0;l<o;l++)n.appendChild(y.importNode(r[l],!!t));return n;default:return qe.call(e,!!t)}},Pe.cloneNode=function(e){return f(this,qe,[!!e])}),tt)return tt=!1;if(-2<ue.call(oe,te+n)+ue.call(oe,ee+n)&&h(e),!ne.test(n)||-1<ue.call(re,n))throw new Error("The type "+e+" is invalid");var n,o,a=function(){return u?y.createElement(m,n):y.createElement(m)},i=t||ce,u=se.call(i,B),m=u?t[B].toUpperCase():n;return u&&-1<ue.call(oe,ee+m)&&h(m),o=oe.push((u?te:ee)+n)-1,ae=ae.concat(ae.length?",":"",u?m+'[is="'+e.toLowerCase()+'"]':m),a.prototype=le[o]=se.call(i,"prototype")?i.prototype:Ie(Pe),ae.length&&r(y.querySelectorAll(ae),k),a},y.createElement=$e=function(e,t){var n=v(t),r=n?Ke.call(y,e,De(n)):Ke.call(y,e),o=""+e,l=ue.call(oe,(n?te:ee)+(n||o).toUpperCase()),a=-1<l;return n&&(r.setAttribute("is",n=n.toLowerCase()),a&&(a=i(o.toUpperCase(),n))),ot=!y.createElement.innerHTMLHelper,a&&V(r,le[l]),r}),L.prototype={constructor:L,define:ge?function(e,t,n){if(n)M(e,t,n);else{var r=e.toUpperCase();Ae[r]={constructor:t,create:[r]},Ne.set(t,r),He.define(e,t)}}:M,get:ge?function(e){return He.get(e)||E(e)}:E,whenDefined:ge?function(e){return Ce.race([He.whenDefined(e),g(e)])}:g},!He||/^force/.test(t.type))b();else if(!t.noBuiltIn)try{!function(t,n,r){var o=new RegExp("^<a\\s+is=('|\")"+r+"\\1></a>$");if(n[B]="a",t.prototype=Ie(Ve.prototype),t.prototype.constructor=t,e.customElements.define(r,t,n),!o.test(y.createElement("a",{is:r}).outerHTML)||!o.test((new t).outerHTML))throw n}(function ut(){return Reflect.construct(Ve,[],ut)},{},"document-register-element-a")}catch(lt){b()}if(!t.noBuiltIn)try{if(Ke.call(y,"a","a").outerHTML.indexOf("is")<0)throw{}}catch(at){De=function(e){return{is:e.toLowerCase()}}}}(window);

;
//# sourceMappingURL=scripts.js.map