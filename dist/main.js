(()=>{"use strict";(t=>{const e=document.getElementById("timer-hours"),n=document.getElementById("timer-minutes"),o=document.getElementById("timer-seconds");let s;const m=()=>{let t=(t=>{let e=(new Date("31 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:e,hours:Math.floor(e/60/60),minutes:Math.floor(e/60%60),seconds:Math.floor(e%60)}})();e.textContent=t.hours,n.textContent=t.minutes,o.textContent=t.seconds,t.timeRemaining>0?s=setInterval((()=>{m()}),1e3):t.timeRemaining<0&&(e.textContent="00",n.textContent="00",o.textContent="00",clearInterval(s)),t.hours<10?e.textContent="0"+t.hours:t.minutes<10?n.textContent="0"+t.minutes:t.seconds<10&&(o.textContent="0"+t.seconds)};m()})()})();