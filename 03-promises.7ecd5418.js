function e(e){return e&&e.__esModule?e.default:e}var o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},t={},i=o.parcelRequired7c6;null==i&&((i=function(e){if(e in n)return n[e].exports;if(e in t){var o=t[e];delete t[e];var i={id:e,exports:{}};return n[e]=i,o.call(i.exports,i,i.exports),i.exports}var r=new Error("Cannot find module '"+e+"'");throw r.code="MODULE_NOT_FOUND",r}).register=function(e,o){t[e]=o},o.parcelRequired7c6=i);var r=i("eWCmQ");const l=document.querySelector(".form"),s=document.querySelector("button");console.log(s),l.addEventListener("input",(function(e){u[e.target.name]=e.target.value})),s.addEventListener("click",(function(o){o.preventDefault(),d=Number(u.delay);for(let o=1;o<Number(u.amount)+1;o++)console.log(d),setTimeout((()=>{a(Number(o),d).then((({position:o,delay:n})=>{console.log(`✅ Fulfilled promise ${o} in ${n} ms`),e(r).Notify.success(`✅ Fulfilled promise ${o} in ${n} ms`)})).catch((({position:o,delay:n})=>{console.log(`❌ Rejected promise ${o} in ${n} ms`),e(r).Notify.failure(`❌ Rejected promise ${o} in ${n} ms`)}))}),d),d+=Number(u.step)}));const u={};let d=0;function a(e,o){const n=Math.random()>.3;return new Promise(((t,i)=>{n?t({position:e,delay:o}):i({position:e,delay:o})}))}
//# sourceMappingURL=03-promises.7ecd5418.js.map