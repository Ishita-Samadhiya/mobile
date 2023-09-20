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
