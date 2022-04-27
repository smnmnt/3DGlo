(()=>{"use strict";(e=>{const t=document.getElementById("timer-hours"),o=document.getElementById("timer-minutes"),c=document.getElementById("timer-seconds");let r;const n=()=>{let e=(e=>{let t=(new Date("31 april 2022").getTime()-(new Date).getTime())/1e3;return{timeRemaining:t,hours:Math.floor(t/60/60),minutes:Math.floor(t/60%60),seconds:Math.floor(t%60)}})();t.textContent=e.hours,o.textContent=e.minutes,c.textContent=e.seconds,e.timeRemaining>0?r=setInterval((()=>{n()}),1e3):e.timeRemaining<0&&(t.textContent="00",o.textContent="00",c.textContent="00",clearInterval(r)),e.hours<10?t.textContent="0"+e.hours:e.minutes<10?o.textContent="0"+e.minutes:e.seconds<10&&(c.textContent="0"+e.seconds)};n()})(),(()=>{const e=document.querySelector("menu"),t=document.querySelector(".menu"),o=e.querySelector(".close-btn"),c=e.querySelectorAll("ul>li>a"),r=()=>{e.classList.toggle("active-menu")};t.addEventListener("click",r),o.addEventListener("click",r),c.forEach((e=>e.addEventListener("click",r)))})(),(()=>{const e=document.querySelector(".popup"),t=document.querySelector(".popup-content"),o=document.querySelectorAll(".popup-btn"),c=e.querySelector(".popup-close");let r,n=-38;t.style.left=`${n}%`;const l=e=>{t.style.left=`${e}%`},a=()=>{n+=4,l(n),n>=40&&clearInterval(r)},s=()=>{n-=4,l(n),n<=-38&&(clearInterval(r),e.style.display="",n=-38)};o.forEach((o=>{o.addEventListener("click",(()=>{window.innerWidth<=768?(t.style.left="",e.style.display="block"):(e.style.display="block",r=setInterval(a,10))}))})),c.addEventListener("click",(()=>{window.innerWidth>768?r=setInterval(s,10):e.style.display=""}))})(),(()=>{const e=document.querySelector(".portfolio-content"),t=document.querySelectorAll(".portfolio-item"),o=document.querySelectorAll(".dot");let c,r=0;const n=(e,t,o)=>{e[t].classList.remove(o)},l=(e,t,o)=>{e[t].classList.add(o)},a=()=>{n(t,r,"portfolio-item-active"),n(o,r,"dot-active"),r++,r>=t.length&&(r=0),l(t,r,"portfolio-item-active"),l(o,r,"dot-active")},s=(e=2e3)=>{c=setInterval(a,e)};e.addEventListener("click",(e=>{e.preventDefault(),e.target.matches(".dot, .portfolio-btn")&&(n(t,r,"portfolio-item-active"),n(o,r,"dot-active"),e.target.matches("#arrow-right")?r++:e.target.matches("#arrow-left")?r--:e.target.classList.contains("dot")&&o.forEach(((t,o)=>{e.target===t&&(r=o)})),r>=t.length&&(r=0),r<0&&(r=t.length-1),l(t,r,"portfolio-item-active"),l(o,r,"dot-active"))})),e.addEventListener("mouseenter",(e=>{e.target.matches(".dot, .portfolio-item-active")&&clearInterval(c)}),!0),e.addEventListener("mouseleave",(e=>{e.target.matches(".dot, .portfolio-item-active")&&s(3500)}),!0),s(3500)})(),(()=>{const e=document.querySelector('[href="#service-block"]'),t=document.getElementById("service-block");e.addEventListener("click",(e=>{e.preventDefault(),t.scrollIntoView({block:"start",behavior:"smooth"})}))})(),(()=>{const e=document.querySelectorAll('[name="user_name"]'),t=document.querySelectorAll("[type=email]"),o=document.querySelectorAll("[type=tel]"),c=document.querySelector('[placeholder="Ваше сообщение"]');e.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\-\s]/g,"")})))),t.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^a-zA-z@\-\.\!\~\*\']/g,"")})))),o.forEach((e=>e.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^0-9\(\)\-]/g,"")})))),c.addEventListener("input",(e=>{e.target.value=e.target.value.replace(/[^а-яА-Я\-\s]/g,"")}))})(),(()=>{const e=document.querySelector(".calc-square"),t=document.querySelector(".calc-count"),o=document.querySelector(".calc-day"),c=e=>{e.target.value=e.target.value.replace(/\D+/,"")};e.addEventListener("input",c),t.addEventListener("input",c),o.addEventListener("input",c)})(),((e=100)=>{const t=document.querySelector(".calc-block"),o=document.querySelector(".calc-type"),c=document.querySelector(".calc-square"),r=document.querySelector(".calc-count"),n=document.querySelector(".calc-day"),l=document.getElementById("total");t.addEventListener("input",(t=>{t.target!==o&&t.target!==c&&t.target!==r&&t.target!==n||(()=>{const t=+o.options[o.selectedIndex].value,a=c.value;let s=0,i=1,u=1;r.value>1&&(i+=+r.value/10),n.value&&n.value<5?u=2:n.value&&n.value<10&&(u=1.5),s=o.value&&c.value?e*t*a*i*u:0,l.textContent=s})()}))})(100),(()=>{const e=document.querySelector(".service-header"),t=document.querySelectorAll(".service-header-tab"),o=document.querySelectorAll(".service-tab");e.addEventListener("click",(e=>{if(e.target.closest(".service-header-tab")){const c=e.target.closest(".service-header-tab");t.forEach(((e,t)=>{e===c?(e.classList.add("active"),o[t].classList.remove("d-none")):(e.classList.remove("active"),o[t].classList.add("d-none"))}))}}))})()})();