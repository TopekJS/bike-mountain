let navbars = document.getElementById('navbarClick'),
    curug = document.querySelector('#imgSlide');

navbars.addEventListener('click', seeNavbar)
function seeNavbar() {
   let listMenu = document.querySelector('ul');
   listMenu.classList.toggle('See');
};

console.log(curug.getAttribute('src'));