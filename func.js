window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById("home");
    image.style.transform = "rotate(" + window.scrollY/2 + "deg)";
}
// JavaScript function to toggle the navigation menu
function openNavbar() {
	const navMenu = document.getElementById("nav-menu");
	navMenu.classList.toggle("active");
}
function classToggle() {
    const navs = document.querySelectorAll('.Navbar__Items')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.Navbar__Link-toggle')
    .addEventListener('click', classToggle);