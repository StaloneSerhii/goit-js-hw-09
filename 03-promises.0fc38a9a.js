!function(){function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("iU1Pc"),c=document.querySelector(".form"),a=document.querySelector("button");console.log(a),c.addEventListener("input",(function(e){l[e.target.name]=e.target.value})),a.addEventListener("click",(function(o){var n=function(o){console.log(u),setTimeout((function(){var n,t,i;(n=Number(o),t=u,i=Math.random()>.3,new Promise((function(e,o){i?e({position:n,delay:t}):o({position:n,delay:t})}))).then((function(o){var n=o.position,t=o.delay;console.log("✅ Fulfilled promise ".concat(n," in ").concat(t," ms")),e(r).Notify.success("✅ Fulfilled promise ".concat(n," in ").concat(t," ms"))})).catch((function(o){var n=o.position,t=o.delay;console.log("❌ Rejected promise ".concat(n," in ").concat(t," ms")),e(r).Notify.failure("❌ Rejected promise ".concat(n," in ").concat(t," ms"))}))}),u),u+=Number(l.step)};o.preventDefault(),u=Number(l.delay);for(var t=1;t<Number(l.amount)+1;t++)n(t)}));var l={};var u=0}();
//# sourceMappingURL=03-promises.0fc38a9a.js.map
