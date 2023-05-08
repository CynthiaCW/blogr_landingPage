/**
 * Création d'un menu responsive
 */

const burger = document.getElementById('burger');

burger.addEventListener('click', function() {
  burger.classList.toggle('opened');
//   document.querySelector('.navigation').classList.toggle('nav-open');
  document.getElementById('nav-sticky').classList.toggle('nav-open');
});