parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"KIzB":[function(require,module,exports) {
"use strict";function e(e){if("undefined"==typeof Symbol||null==e[Symbol.iterator]){if(Array.isArray(e)||(e=t(e))){var r=0,n=function(){};return{s:n,n:function(){return r>=e.length?{done:!0}:{done:!1,value:e[r++]}},e:function(e){throw e},f:n}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,l,i=!0,a=!1;return{s:function(){o=e[Symbol.iterator]()},n:function(){var e=o.next();return i=e.done,e},e:function(e){a=!0,l=e},f:function(){try{i||null==o.return||o.return()}finally{if(a)throw l}}}}function t(e,t){if(e){if("string"==typeof e)return r(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return"Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(e,t):void 0}}function r(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var n=document.querySelector(".field").tBodies[0],o=document.querySelector(".append-row"),l=document.querySelector(".remove-row"),i=document.querySelector(".append-column"),a=document.querySelector(".remove-column"),c=10,d=2,u=n.querySelectorAll("tr").length,f=n.querySelector("tr").querySelectorAll("td").length;function s(){var e="\n  <tr>\n    ".concat("<td></td>".repeat(f),"\n  </tr>\n  ");n.insertAdjacentHTML("beforeend",e),l.disabled=!1,++u===c&&(o.disabled=!0)}function y(){n.lastElementChild.remove(),o.disabled=!1,--u===d&&(l.disabled=!0)}function m(){var t,r=e(n.querySelectorAll("tr"));try{for(r.s();!(t=r.n()).done;){t.value.insertAdjacentHTML("beforeend","<td></td>")}}catch(o){r.e(o)}finally{r.f()}a.disabled=!1,++f===c&&(i.disabled=!0)}function v(){var t,r=e(n.querySelectorAll("tr"));try{for(r.s();!(t=r.n()).done;){t.value.lastElementChild.remove()}}catch(o){r.e(o)}finally{r.f()}i.disabled=!1,--f===d&&(a.disabled=!0)}o.addEventListener("click",s),l.addEventListener("click",y),i.addEventListener("click",m),a.addEventListener("click",v);
},{}]},{},["KIzB"], null)
//# sourceMappingURL=main.9005b150.js.map