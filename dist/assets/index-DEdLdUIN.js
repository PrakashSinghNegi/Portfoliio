(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const n of r.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&o(n)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const c=()=>{const l=document.querySelectorAll("#theme-toggle"),t=localStorage.getItem("theme");t&&document.body.classList.add(t);const s=()=>{document.body.classList.toggle("light-mode"),document.body.classList.contains("light-mode")?localStorage.setItem("theme","light-mode"):(localStorage.removeItem("theme"),document.body.removeAttribute("class"))};l.forEach(o=>{o.addEventListener("click",s)})},i=()=>{const l=document.querySelectorAll(".lazy"),t=new IntersectionObserver((s,o)=>{s.forEach(e=>{e.isIntersecting&&(console.log(e.target),e.target.classList.remove("loading"),e.target.classList.add("loaded"),o.unobserve(e.target))})});l.forEach(s=>{t.observe(s)})},d=()=>{const l=document.querySelector(".header__bars"),t=document.querySelector(".mobile-nav"),s=document.querySelectorAll(".mobile-nav__link");let o=!1;l.addEventListener("click",()=>{o=!o,o?(t.style.display="flex",document.body.style.overflow="hidden"):(t.style.display="none",document.body.style.overflowY="auto")}),s.forEach(e=>{e.addEventListener("click",()=>{o=!1,t.style.display="none",document.body.style.overflowY="auto"})})};console.log("lekt");d();c();i();
