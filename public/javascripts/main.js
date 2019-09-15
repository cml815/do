/* overflow test */

function isOverflown(element) {
  return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
}

/* Sticky navigation */

/*
const nav = document.querySelector('#menu');
const navTop = nav.offsetTop;

function stickyNavigation() {
  console.log('navTop = ' + navTop);
  console.log('scrollY = ' + window.scrollY);

  if (window.scrollY >= navTop) {
    // nav offsetHeight = height of nav
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = 0;
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', stickyNavigation);

*/

// Overlay menu //

/* Open */
function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

/* Close */
function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}

/* Shrink navigation */

// When the user scrolls down 80px from the top of the document, resize the navbar's padding and the logo's font size

/*
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    document.getElementById("navbar").style.padding = "30px 10px";
    document.getElementById("logo").style.fontSize = "25px";
  } else {
    document.getElementById("navbar").style.padding = "80px 10px";
    document.getElementById("logo").style.fontSize = "35px";
  }
}

*/

/* 
setInterval(function () { 
  document.getElementById("colorful").style.background= '#'+Math.floor(Math.random()*16777215).toString(16); 
}, 1000);

*/

/* Nav toggle

let mainNav = document.getElementById('js-menu');
let navBarToggle = document.getElementById('js-navbar-toggle');

navBarToggle.addEventListener('click', function () {
  mainNav.classList.toggle('active');
});

*/

/* Hide logo on scroll 

function scrollFunction() {
     document.getElementById("logoHide").style.visibility = "hidden";  
}

window.onscroll = scrollFunction;


window.onscroll = function() {
  resizeLogo()
};

function resizeLogo() {
  var Logo = document.getElementById("logo")
  if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
    Logo.style.width = '20px';
  } else {
    Logo.style.width = '50px';
  }
}
*/


/* Fade in animation */

var animateHTML = function() {
  var elems;
  var windowHeight;
  function init() {
    elems = document.querySelectorAll('.hidden');
    windowHeight = window.innerHeight;
    addEventHandlers();
    checkPosition();
  }
  function addEventHandlers() {
    window.addEventListener('scroll', checkPosition);
    window.addEventListener('resize', init);
  }
  function checkPosition() {
    for (var i = 0; i < elems.length; i++) {
      var positionFromTop = elems[i].getBoundingClientRect().top;
      if (positionFromTop - windowHeight <= 0) {
        elems[i].className = elems[i].className.replace(
          'hidden',
          'fade-in-element'
        );
      }
    }
  }
  return {
    init: init
  };
};
animateHTML().init();



/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}

/* Animated background */

/* 

var canvas = document.getElementById("canvas"),
		ctx = canvas.getContext("2d");

// Now setting the width and height of the canvas
var W = 350,
		H = 450;

// Applying these to the canvas element
canvas.height = H; canvas.width = W;

*/

/* Ball experiment */

/* 
const colors = ["#3CC157", "#2AA7FF", "#1B1B1B", "#FCBC0F", "#F85F36"];

const numBalls = 15;
const balls = [];

for (let i = 0; i < numBalls; i++) {
  let ball = document.createElement("div");
  ball.classList.add("ball");
  ball.style.background = colors[Math.floor(Math.random() * colors.length)];
  ball.style.left = `${Math.floor(Math.random() * 100)}vw`;
  ball.style.top = `${Math.floor(Math.random() * 100)}vh`;
  ball.style.transform = `scale(${Math.random()})`;
  ball.style.width = `${Math.random()}em`;
  ball.style.height = ball.style.width;
  
  balls.push(ball);
  document.body.append(ball);
}

// Keyframes
balls.forEach((el, i, ra) => {
  let to = {
    x: Math.random() * (i % 2 === 0 ? -11 : 11),
    y: Math.random() * 12
  };

  let anim = el.animate(
    [
      { transform: "translate(0, 0)" },
      { transform: `translate(${to.x}rem, ${to.y}rem)` }
    ],
    {
      duration: (Math.random() + 1) * 2000, // random duration
      direction: "alternate",
      fill: "both",
      iterations: Infinity,
      easing: "ease-in-out"
    }
  );
});

*/

/* Slideshow */

var slideshow = document.querySelector('.slide-wrap');

if (slideshow != null ) { //make sure we don't run this script if the slideshow is not present

  var slides = document.querySelectorAll('.slide-entry'),
slideCount = slides.length,
currentSlide = 0,
slideHeight = null,
initialHeight = slides[0].clientHeight;

slides[0].classList.add('active'); //on load, activate the first slide

function moveToSlide(n) { // set up our slide navigation functionality
  slides[currentSlide].className = 'slide-entry';
  currentSlide = (n+slideCount)%slideCount;
  slides[currentSlide].className = 'slide-entry active';
  slideHeight = slides[currentSlide].clientHeight;
  slideshow.style.height = slideHeight + 'px';
  window.addEventListener('resize', function(){
    resizedSlideHeight = slides[currentSlide].clientHeight;
    slideshow.style.height = resizedSlideHeight + 'px';
  });
}

function nextSlide(e){
  moveToSlide(currentSlide+1);
  var code = e.keyCode;
  if( code == 39 ) {
    moveToSlide(currentSlide+1);
  }
};
function prevSlide(e){
  moveToSlide(currentSlide+-1);
  var code = e.keyCode;
  if( code == 37 ) {
    moveToSlide(currentSlide+-1);
  }
};

var slideHandlers = {
  nextSlide: function(element){
    document.querySelector(element).addEventListener('click',nextSlide);
    document.body.addEventListener('keydown',nextSlide, false);
  },
  prevSlide: function(element){
    document.querySelector(element).addEventListener('click',prevSlide);
    document.body.addEventListener('keydown',prevSlide, false);
  }
}

slideHandlers.nextSlide('#next-slide');
slideHandlers.prevSlide('#prev-slide');

// Dynamic slideshow height

  slideshow.style.height = initialHeight + 'px'; //on load, set the height of the slider to the first active slide

window.addEventListener('resize', function(){ // adjust the height of the slidehow as the browser is resized
  var resizedHeight = slides[0].clientHeight;
  slideshow.style.height = resizedHeight + 'px';
});

// Detect swipe events for touch devices, credit to Kirupa @ https://www.kirupa.com/html5/detecting_touch_swipe_gestures.htm
var initialX = null;
var initialY = null;
function startTouch(e) {
  initialX = e.touches[0].clientX;
  initialY = e.touches[0].clientY;
};
function moveTouch(e) {
  if (initialX === null) {
    return;
  }
  if (initialY === null) {
    return;
  }
  var currentX = e.touches[0].clientX;
  var currentY = e.touches[0].clientY;
  var diffX = initialX - currentX;
  var diffY = initialY - currentY;
  if (Math.abs(diffX) > Math.abs(diffY)) {
    if (diffX > 0) {
// swiped left
moveToSlide(currentSlide+1);
} else {
// swiped right
moveToSlide(currentSlide+-1);
}
}
initialX = null;
initialY = null;
e.preventDefault();
};

slideshow.addEventListener("touchstart", startTouch, false);
slideshow.addEventListener("touchmove", moveTouch, false);  

// optional autoplay function  
  setInterval(function(){
    nextSlide();
  },8000); 

} //end slideshow

