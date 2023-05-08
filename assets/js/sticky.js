
/**
 * Création d'une navBar fixée au scroll
 */
const navLimit = document.getElementById("nav-sticky");
const header =  document.getElementById("header");

const section = document.querySelector('.section');


if (navLimit) {
    window.onscroll = function() {
      navbarFixed();
      console.log("ok");
    };

    const sticky = navLimit.offsetTop;

    function navbarFixed() {
      if (window.pageYOffset > sticky) {
        header.classList.add("nav-sticky");
      } else {
        header.classList.remove("nav-sticky");
      }
    }
}



