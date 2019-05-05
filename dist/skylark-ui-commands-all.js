/**
 * skylark-ui-commands - A dom plugin for  editing  the content of html element.
 * @author Hudaokeji Co.,Ltd
 * @version v0.9.0
 * @link www.skylarkjs.org
 * @license MIT
 */
!function(t,n){var r=n.define,e=n.require,i="function"==typeof r&&r.amd,o=!i&&"undefined"!=typeof exports;if(!i&&!r){var u={};r=n.define=function(t,n,r){"function"==typeof r?(u[t]={factory:r,deps:n.map(function(n){return function(t,n){if("."!==t[0])return t;var r=n.split("/"),e=t.split("/");r.pop();for(var i=0;i<e.length;i++)"."!=e[i]&&(".."==e[i]?r.pop():r.push(e[i]));return r.join("/")}(n,t)}),resolved:!1,exports:null},e(t)):u[t]={factory:null,resolved:!0,exports:r}},e=n.require=function(t){if(!u.hasOwnProperty(t))throw new Error("Module "+t+" has not been defined");var r=u[t];if(!r.resolved){var i=[];r.deps.forEach(function(t){i.push(e(t))}),r.exports=r.factory.apply(n,i)||null,r.resolved=!0}return r.exports}}if(!r)throw new Error("The module utility (ex: requirejs or skylark-utils) is not loaded!");if(function(t,n){t("skylark-langx/_attach",[],function(){return function(t,n,r){"string"==typeof n&&(n=n.split("."));for(var e=n.length,i=t,o=0,u=n[o++];o<e;)i=i[u]=i[u]||{},u=n[o++];return i[u]=r}}),t("skylark-langx/skylark",["./_attach"],function(t){var n={attach:function(r,e){return t(n,r,e)}};return n}),t("skylark-ui-commands/commands",["skylark-langx/skylark"],function(t){return t.attach("ui.commands",{})}),t("skylark-langx/types",[],function(){var t,n={}.toString,r=(t={},"Boolean Number String Function Array Date RegExp Object Error Symbol".split(" ").forEach(function(n){t["[object "+n+"]"]=n.toLowerCase()}),function(r){return null==r?String(r):t[n.call(r)]||"object"});function e(t){var n;for(n in t)if(null!==t[n])return!1;return!0}function i(t){return"function"==r(t)}function o(t){return t&&t instanceof Node}function u(t){return"number"==typeof t}function a(t){return"object"==r(t)}function s(t){return"string"==typeof t}function c(t){return t&&t==t.window}return{isArray:function(t){return t&&t.constructor===Array},isArrayLike:function(t){return!s(t)&&!o(t)&&"number"==typeof t.length&&!i(t)},isBoolean:function(t){return"boolean"==typeof t},isDefined:function(t){return void 0!==t},isDocument:function(t){return null!=t&&t.nodeType==t.DOCUMENT_NODE},isEmpty:e,isEmptyObject:e,isFunction:i,isHtmlNode:o,isNull:function(t){return"null"===r(t)},isNumber:u,isNumeric:u,isObject:a,isPlainObject:function(t){return a(t)&&!c(t)&&Object.getPrototypeOf(t)==Object.prototype},isString:s,isSameOrigin:function(t){if(t){var n=location.protocol+"//"+location.hostname;return location.port&&(n+=":"+location.port),t.startsWith(n)}},isSymbol:function(t){return"symbol"==typeof t||isObjectLike(t)&&objectToString.call(t)==symbolTag},isUndefined:function(t){return void 0===t},isWindow:c,type:r}}),t("skylark-langx/arrays",["./types"],function(t,n){var r=Array.prototype.filter,e=t.isArrayLike;function i(t,n,r,e){for(var i=t.length,o=r+(e?1:-1);e?o--:++o<i;)if(n(t[o],o,t))return o;return-1}function o(t){return t!=t}function u(t){if(e(t)){for(var n=[],r=0;r<t.length;r++){var i=t[r];if(e(i))for(var o=0;o<i.length;o++)n.push(i[o]);else n.push(i)}return n}return t}return{baseFindIndex:i,baseIndexOf:function(t,n,r){if(n!=n)return i(t,o,r);var e=r-1,u=t.length;for(;++e<u;)if(t[e]===n)return e;return-1},compact:function(t){return r.call(t,function(t){return null!=t})},first:function(t,n){return n?t.slice(0,n):t[0]},flatten:u,inArray:function(t,n){if(!n)return-1;var r;if(n.indexOf)return n.indexOf(t);r=n.length;for(;r--;)if(n[r]===t)return r;return-1},makeArray:function(t,n,r){if(e(t))return(r||[]).concat(Array.prototype.slice.call(t,n||0));return[t]},merge:function(t,n){var r=n.length,e=t.length,i=0;if("number"==typeof r)for(;i<r;i++)t[e++]=n[i];else for(;void 0!==n[i];)t[e++]=n[i++];return t.length=e,t},forEach:function(t,n){if(t.forEach)return t.forEach(n);for(var r=0;r<t.length;r++)n(t[r],r)},map:function(t,n){var r,i,o,a=[];if(e(t))for(i=0;i<t.length;i++)null!=(r=n.call(t[i],t[i],i))&&a.push(r);else for(o in t)null!=(r=n.call(t[o],t[o],o))&&a.push(r);return u(a)},uniq:function(t){return r.call(t,function(n,r){return t.indexOf(n)==r})}}}),t("skylark-langx/numbers",["./types"],function(t){var n=t.isObject,r=t.isSymbol,e=1/0,i=1.7976931348623157e308,o=NaN,u=/^\s+|\s+$/g,a=/^[-+]0x[0-9a-f]+$/i,s=/^0b[01]+$/i,c=/^0o[0-7]+$/i,f=parseInt;function l(t){if(!t)return 0===t?t:0;if((t=h(t))===e||t===-e){var n=t<0?-1:1;return n*i}return t==t?t:0}function h(t){if("number"==typeof t)return t;if(r(t))return o;if(n(t)){var e="function"==typeof t.valueOf?t.valueOf():t;t=n(e)?e+"":e}if("string"!=typeof t)return 0===t?t:+t;t=t.replace(u,"");var i=s.test(t);return i||c.test(t)?f(t.slice(2),i?2:8):a.test(t)?o:+t}return{toFinite:l,toNumber:h,toInteger:function(t){var n=l(t),r=n%1;return n==n?r?n-r:n:0}}}),t("skylark-langx/objects",["./_attach","./types","./numbers"],function(t,n,r){var e,i,o=Object.prototype.hasOwnProperty,u=Array.prototype.slice,a=n.isBoolean,s=n.isFunction,c=n.isObject,f=n.isPlainObject,l=n.isArray,h=n.isArrayLike,p=n.isString,v=r.toInteger;var y,d,g="undefined"!=typeof Symbol?Symbol.prototype:null;function m(t){if(!c(t))return[];var n=[];for(var r in t)n.push(r);return n}function b(t,n){if(!l(n))return null!=t&&o.call(t,n);for(var r=n.length,e=0;e<r;e++){var i=n[e];if(null==t||!o.call(t,i))return!1;t=t[i]}return!!r}function k(t,n,r,e){for(var i in n)e&&void 0!==t[i]||(r&&(f(n[i])||l(n[i]))?(f(n[i])&&!f(t[i])&&(t[i]={}),l(n[i])&&!l(t[i])&&(t[i]=[]),k(t[i],n[i],r,e)):void 0!==n[i]&&(t[i]=n[i]));return t}function j(t){var n=u.call(arguments,0),r=n.shift(),e=!1;return a(n[n.length-1])&&(e=n.pop()),{target:r,sources:n,deep:e}}function x(){var t=j.apply(this,arguments);return t.sources.forEach(function(n){k(t.target,n,t.deep,!1)}),t.target}function O(t){for(var n=_.keys(t),r=n.length,e=Array(r),i=0;i<r;i++)e[i]=t[n[i]];return e}return e=function(t,n,r,e){if(t===n)return 0!==t||1/t==1/n;if(null==t||null==n)return!1;if(t!=t)return n!=n;var o=typeof t;return("function"===o||"object"===o||"object"==typeof n)&&i(t,n,r,e)},i=function(t,n,r,i){var o=toString.call(t);if(o!==toString.call(n))return!1;switch(o){case"[object RegExp]":case"[object String]":return""+t==""+n;case"[object Number]":return+t!=+t?+n!=+n:0==+t?1/+t==1/n:+t==+n;case"[object Date]":case"[object Boolean]":return+t==+n;case"[object Symbol]":return g.valueOf.call(t)===g.valueOf.call(n)}var u="[object Array]"===o;if(!u){if("object"!=typeof t||"object"!=typeof n)return!1;var a=t.constructor,c=n.constructor;if(a!==c&&!(s(a)&&a instanceof a&&s(c)&&c instanceof c)&&"constructor"in t&&"constructor"in n)return!1}r=r||[],i=i||[];for(var f=r.length;f--;)if(r[f]===t)return i[f]===n;if(r.push(t),i.push(n),u){if((f=t.length)!==n.length)return!1;for(;f--;)if(!e(t[f],n[f],r,i))return!1}else{var l,h=Object.keys(t);if(f=h.length,Object.keys(n).length!==f)return!1;for(;f--;)if(l=h[f],void 0===n[l]||!e(t[l],n[l],r,i))return!1}return r.pop(),i.pop(),!0},{allKeys:m,attach:t,clone:function t(n,r){var e;if(void 0===n||null===n)e=n;else if(r&&n.clone)e=n.clone();else if(l(n)){e=[];for(var i=0;i<n.length;i++)e.push(t(n[i]))}else if(f(n))for(var o in e={},n)e[o]=t(n[o]);else e=n;return e},defaults:(y=m,d=!0,function(t){var n=arguments.length;if(d&&(t=Object(t)),n<2||null==t)return t;for(var r=1;r<n;r++)for(var e=arguments[r],i=y(e),o=i.length,u=0;u<o;u++){var a=i[u];d&&void 0!==t[a]||(t[a]=e[a])}return t}),each:function(t,n){var r,e,i,o;if(t)if(void 0===(r=t.length)){for(e in t)if(t.hasOwnProperty(e)&&(o=t[e],!1===n.call(o,e,o)))break}else for(i=0;i<r&&(o=t[i],!1!==n.call(o,i,o));i++);return this},extend:function(t){var n,r=u.call(arguments,1);"boolean"==typeof t&&(n=t,t=r.shift());0==r.length&&(r=[t],t=this);return r.forEach(function(r){x(t,r,n)}),t},has:b,isEqual:function(t,n){return e(t,n)},includes:function(t,n,r,e){t=h(t)?t:O(t),r=r&&!e?v(r):0;var i=t.length;r<0&&(r=nativeMax(i+r,0));return p(t)?r<=i&&t.indexOf(n,r)>-1:!!i&&baseIndexOf(t,n,r)>-1},isMatch:function(t,n){var r=r(n),e=r.length;if(null==t)return!e;for(var i=Object(t),o=0;o<e;o++){var u=r[o];if(n[u]!==i[u]||!(u in i))return!1}return!0},keys:function(t){if(c(t))return[];var n=[];for(var r in t)b(t,r)&&n.push(r);return n},mixin:x,removeItem:function(t,n){if(l(t)){var r=t.indexOf(n);-1!=r&&t.splice(r,1)}else if(f(t))for(var e in t)if(t[e]==n){delete t[e];break}return this},result:function(t,n,r){l(n)||(n=n.split("."));var e=n.length;if(!e)return s(r)?r.call(t):r;for(var i=0;i<e;i++){var o=null==t?void 0:t[n[i]];void 0===o&&(o=r,i=e),t=s(o)?o.call(t):o}return t},safeMixin:function(){var t=j.apply(this,arguments);return t.sources.forEach(function(n){k(t.target,n,t.deep,!0)}),t.target},values:O}}),t("skylark-langx/klass",["./arrays","./objects","./types"],function(t,n,r){var e=t.uniq,i=n.has,o=n.mixin,u=r.isArray,a=r.isDefined;var s=function(){function t(){return this._construct?this._construct.apply(this,arguments):this.init?this.init.apply(this,arguments):void 0}return function n(s,c,f,l){u(c)&&(l=f,f=c,c=null),c=c||Object,a(f)&&!u(f)&&(l=f,f=!1);var h=c;f&&(f=function(t,n){var r=[];return n.forEach(function(t){if(i(t,"__mixins__"))throw new Error("nested mixins");for(var n=[];t;)n.unshift(t),t=t.superclass;r=r.concat(n)}),(r=(r=e(r)).filter(function(n){for(var r=t;r;){if(n===r)return!1;if(i(r,"__mixins__"))for(var e=r.__mixins__,o=0;o<e.length;o++)if(e[o]===n)return!1;r=r.superclass}return!0})).length>0&&r}(h,f)),f&&(h=function(t,n){for(var r=t,e=0;e<n.length;e++){var i=new Function;i.prototype=Object.create(r.prototype),i.__proto__=r,i.superclass=null,o(i.prototype,n[e].prototype),i.prototype.__mixin__=n[e],r=i}return r}(h,f));var p=s.klassName||"",v=new Function("return function "+p+"() {var inst = this, ctor = arguments.callee;if (!(inst instanceof ctor)) {inst = Object.create(ctor.prototype);}return ctor._constructor.apply(inst, arguments) || inst;}")();return v.prototype=Object.create(h.prototype),v.prototype.constructor=v,v.superclass=c,v.__proto__=h,v._constructor||(v._constructor=t),f&&(v.__mixins__=f),v.partial||(v.partial=function(t,n){return function(t,n,e){var i=t.prototype,o=t.superclass.prototype,u=e&&e.noOverrided;e&&e.overrides;for(var a in n)if("constructor"!==a){var s=n[a];"function"==typeof n[a]?i[a]=s._constructor||u||"function"!=typeof o[a]?s:function(t,n,r){return function(){var t=this.overrided;this.overrided=r;var e=n.apply(this,arguments);return this.overrided=t,e}}(0,s,o[a]):r.isPlainObject(s)&&null!==s&&s.get?Object.defineProperty(i,a,s):i[a]=s}return t}(this,t,n)}),v.inherit||(v.inherit=function(t,r,e){return n(t,this,r,e)}),v.partial(s,l),v}}();return s}),t("skylark-langx/Evented",["./klass","./arrays","./objects","./types"],function(t,n,r,e){var i=Array.prototype.slice,o=n.compact,u=e.isDefined,a=e.isPlainObject,s=e.isFunction,c=e.isString,f=e.isEmptyObject,l=r.mixin;function h(t){var n=(""+t).split(".");return{name:n[0],ns:n.slice(1).join(" ")}}var p=t({on:function(t,n,r,e,i,o){var u=this,f=this._hub||(this._hub={});return a(t)?(i=e,each(t,function(t,e){u.on(t,n,r,e,i,o)}),this):(c(n)||s(e)||(i=e,e=r,r=n,n=void 0),s(r)&&(i=e,e=r,r=null),c(t)&&(t=t.split(/\s/)),t.forEach(function(t){var u=h(t),a=u.name,s=u.ns;(f[a]||(f[a]=[])).push({fn:e,selector:n,data:r,ctx:i,ns:s,one:o})}),this)},one:function(t,n,r,e,i){return this.on(t,n,r,e,i,1)},trigger:function(t){if(!this._hub)return this;var n=this;c(t)&&(t=new CustomEvent(t)),Object.defineProperty(t,"target",{value:this});var r=i.call(arguments,1);return r=u(r)?[t].concat(r):[t],[t.type||t.name,"all"].forEach(function(e){var i=n._hub[e];if(i){for(var u=i.length,a=!1,s=0;s<u;s++){var c=i[s];t.data?c.data&&(t.data=l({},c.data,t.data)):t.data=c.data||null,c.fn.apply(c.ctx,r),c.one&&(i[s]=null,a=!0)}a&&(n._hub[e]=o(i))}}),this},listened:function(t){var n=(this._hub||(this._events={}))[t]||[];return n.length>0},listenTo:function(t,n,r,e){if(!t)return this;c(r)&&(r=this[r]),e?t.one(n,r,this):t.on(n,r,this);for(var i,o=this._listeningTo||(this._listeningTo=[]),u=0;u<o.length;u++)if(o[u].obj==t){i=o[u];break}i||o.push(i={obj:t,events:{}});var a=i.events,s=a[n]=a[n]||[];return-1==s.indexOf(r)&&s.push(r),this},listenToOnce:function(t,n,r){return this.listenTo(t,n,r,1)},off:function(t,n){var r=this._hub||(this._hub={});return c(t)&&(t=t.split(/\s/)),t.forEach(function(t){var e=h(t),i=e.name,o=e.ns,u=r[i];if(u){var a=[];if(n||o)for(var s=0,c=u.length;s<c;s++)n&&u[s].fn!==n&&u[s].fn._!==n?a.push(u[s]):!o||u[s].ns&&0==u[s].ns.indexOf(o)||a.push(u[s]);a.length?r[i]=a:delete r[i]}}),this},unlistenTo:function(t,n,r){var e=this._listeningTo;if(!e)return this;for(var i=0;i<e.length;i++){var u=e[i];if(!t||t==u.obj){var a=u.events;for(var s in a)if(!n||n==s){for(var c=a[s],l=0;l<c.length;l++)r&&r!=c[i]||(u.obj.off(s,c[i],this),c[i]=null);c=a[s]=o(c),f(c)&&(a[s]=null)}f(a)&&(e[i]=null)}}return e=this._listeningTo=o(e),f(e)&&(this._listeningTo=null),this}});return p}),t("skylark-ui-commands/Command",["skylark-langx/Evented","./commands"],function(t,n){var r=t.inherit({klassName:"Command",category:{get:function(){return this._options.category}},checked:{get:function(){return this._options.checked}},icon:{get:function(){return this._options.icon}},label:{get:function(){return this._options.label}},name:{get:function(){return this._name}},shortcut:{get:function(){return this._options.shortCut}},tooltip:{get:function(){return this._options.tooltip}},execute:function(){this.trigger("executed")},isEnabled:function(t){var n=this.trigger("checkingDisabled");return!n||!n.result},shouldShow:function(t){var n=this.trigger("checkingHidden");return!n||!n.result},init:function(t,n){this._name=t,this._options=n||{}}});return n.Command=r}),t("skylark-ui-commands/Manager",["skylark-langx/Evented"],function(t){var n=t.inherit({klassName:"Manager",addAction:function(t,n,r,e){},executeAction:function(){},removeAction:function(t,n){}});return n}),t("skylark-ui-commands/main",["./commands","./Command","./Manager"],function(t){return t}),t("skylark-ui-commands",["skylark-ui-commands/main"],function(t){return t})}(r),!i){var a=e("skylark-langx/skylark");o?module.exports=a:n.skylarkjs=a}}(0,this);
//# sourceMappingURL=sourcemaps/skylark-ui-commands-all.js.map