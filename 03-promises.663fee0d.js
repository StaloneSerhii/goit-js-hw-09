!function(){function e(e){return e&&e.__esModule?e.default:e}var n="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},o={},t={},i=n.parcelRequired7c6;null==i&&((i=function(e){if(e in o)return o[e].exports;if(e in t){var n=t[e];delete t[e];var i={id:e,exports:{}};return o[e]=i,n.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,n){t[e]=n},n.parcelRequired7c6=i);var r=i("iU1Pc"),l=null,c=null,u=null,a=document.querySelector(".form");function s(e,n){return new Promise((function(o,t){setTimeout((function(){Math.random()>.3?o({position:e,delay:n}):t({position:e,delay:n})}),n)}))}a.addEventListener("submit",(function(n){var o=n.currentTarget.elements,t=o.delay,i=o.step,f=o.amount;l=Number(t.value),c=Number(i.value),u=Number(f.value),n.preventDefault();for(var d=1;d<=u;d++)s(d,l).then((function(n){var o=n.position,t=n.delay;console.log("✅ Fulfilled promise ".concat(o," in ").concat(t," ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(o," in ").concat(t," ms"))})).catch((function(n){var o=n.position,t=n.delay;console.log("❌ Rejected promise ".concat(o," in ").concat(t," ms")),e(r).Notify.failure("❌ Rejected promise ".concat(o," in ").concat(t," ms"))})),l+=c;a.reset()})),console.log("fs")}();
//# sourceMappingURL=03-promises.663fee0d.js.map
