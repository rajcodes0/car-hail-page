const navbar = document.getElementById("nav");
window.addEventListener("scroll",()=>
navbar.classList.toggle("sticky",window.scrolly > 0));

const menu =  document.querySelector(".menu");
const togglemenu = () =>menu.classList.toggle("active");

document.querySelector(".menu-btn").addEventListener("click",togglemenu);
document.querySelector(".close-btn").addEventListener("click",togglemenu);

document.querySelector(".menu a")
.forEach((link) => link.addEventListener("click",toggleMenu));