        document.addEventListener("DOMContentLoaded",()=>{let e=!1;const t=e=>{e.classList.contains("loaded")||(e.src=e.dataset.src,e.removeAttribute("data-src"),e.dataset.srcset&&(e.srcset=e.dataset.srcset,e.removeAttribute("data-srcset")),e.classList.add("loaded"))},s=e=>{e.dataset.src=e.src,e.dataset.src&&(e.dataset.srcset=e.srcset,e.removeAttribute("srcset")),e.src="https://t1.daumcdn.net/tistory/4614459/skin/images/1x1.png"};if("IntersectionObserver"in window){const e=new IntersectionObserver((e,s)=>{e.forEach(e=>{if(!e.isIntersecting)return;const r=e.target;t(r),s.unobserve(r)})},{root:null,rootMargin:"200px"});document.querySelectorAll(".imageblock img,.imagegridblock img").forEach(t=>{s(t),e.observe(t),t.classList.add("observing")})}else{const r=()=>{const{scrollY:e}=window;document.querySelectorAll(".imageblock img,.imagegridblock img").forEach(s=>{if(s.classList.contains("loaded"))return;const r=s.parentNode.offsetTop;r+s.offsetHeight>e&&e+window.innerHeight>r&&t(s)})};document.querySelectorAll(".imageblock img,.imagegridblock img").forEach(o=>{s(o),r(),window.addEventListener("scroll",()=>{e||(window.requestAnimationFrame(()=>{t(),e=!1}),e=!0)},{passive:!0})})}});