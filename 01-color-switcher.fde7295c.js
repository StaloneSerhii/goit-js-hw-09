const e=document.querySelector("body"),t=document.querySelector("button[data-start]"),o=document.querySelector("button[data-stop]");let d=null;o.disabled=!0,t.addEventListener("click",(function(){t.disabled=!0,o.disabled=!1,d=setInterval((()=>{e.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),o.addEventListener("click",(function(){t.disabled=!1,o.disabled=!0,clearInterval(d)})),console.log("work...");
//# sourceMappingURL=01-color-switcher.fde7295c.js.map