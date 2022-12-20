// Loading will be end after page il loaded

const preloader = document.querySelector(".preload");

window.addEventListener("load", function(){
    preloader.classList.add("loaded");
})