const btn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');

btn.addEventListener ('clic',()=>{
    nav.classList.toogle('menu-open');
});