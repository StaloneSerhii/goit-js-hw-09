var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},n={},o={},t=e.parcelRequired7c6;null==t&&((t=function(e){if(e in n)return n[e].exports;if(e in o){var t=o[e];delete o[e];var r={id:e,exports:{}};return n[e]=r,t.call(r.exports,r,r.exports),r.exports}var l=new Error("Cannot find module '"+e+"'");throw l.code="MODULE_NOT_FOUND",l}).register=function(e,n){o[e]=n},e.parcelRequired7c6=t),t("eWCmQ");const r=document.querySelector(".form"),l=document.querySelector("button");console.log(l),r.addEventListener("input",(function(e){i[e.target.name]=e.target.value})),l.addEventListener("click",(function(e){e.preventDefault();for(let e=0;e<i.amount;e++)console.log(e)}));const i={};
//# sourceMappingURL=03-promises.d0731c04.js.map
