/* Sticky navigation */

const nav = document.querySelector('#main');
const topOfNav = nav.offsetTop;

function fixedNav() {
  console.log(topOfNav, window.scrollY);
}

window.addEventListener("scroll", fixedNav);

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

