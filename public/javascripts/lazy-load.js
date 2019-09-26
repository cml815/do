document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages;    
  
    if ("IntersectionObserver" in window) {
      lazyloadImages = document.querySelectorAll(".lazy");
      var imageObserver = new IntersectionObserver(function(entries, observer) {
        entries.forEach(function(entry) {
          if (entry.isIntersecting) {
            var image = entry.target;
            image.src = image.dataset.src;
            image.classList.remove("lazy");
            imageObserver.unobserve(image);
          }
        });
      });
  
      lazyloadImages.forEach(function(image) {
        imageObserver.observe(image);
      });
    } else {  
      var lazyloadThrottleTimeout;
      lazyloadImages = document.querySelectorAll(".lazy");
      
      function lazyload () {
        if(lazyloadThrottleTimeout) {
          clearTimeout(lazyloadThrottleTimeout);
        }    
  
        lazyloadThrottleTimeout = setTimeout(function() {
          var scrollTop = window.pageYOffset;
          lazyloadImages.forEach(function(img) {
              if(img.offsetTop < (window.innerHeight + scrollTop)) {
                img.src = img.dataset.src;
                img.classList.remove('lazy');
              }
          });
          if(lazyloadImages.length == 0) { 
            document.removeEventListener("scroll", lazyload);
            window.removeEventListener("resize", lazyload);
            window.removeEventListener("orientationChange", lazyload);
          }
        }, 20);
      }
  
      document.addEventListener("scroll", lazyload);
      window.addEventListener("resize", lazyload);
      window.addEventListener("orientationChange", lazyload);
    }
  })
  
  



/* const targets = document.querySelectorAll('img');

const lazyLoad = target => {
  const io = new IntersectionObserver((entries, observer) => {
    console.log(entries)
    entries.forEach(entry => {
      console.log('😍');

      if (entry.isIntersecting) {
        const img = entry.target;
        const src = img.getAttribute('js-lazy');

        img.setAttribute('src', src);
        img.classList.add('fade');

        observer.disconnect();
      }
    });
  });

  io.observe(target)
};

targets.forEach(lazyLoad);

*/
/* let images = [...document.querySelectorAll('.js-lazy')]

const interactSettings = {
  root: document.querySelector('.center'),
  rootMargin: '0px 0px 200px 0px'
}

function onIntersection(imageEntites) {
  imageEntites.forEach(image => {
    if (image.isIntersecting) {
      observer.unobserve(image.target)
      image.target.src = image.target.dataset.src
      image.target.onload = () => image.target.classList.add('loaded')
    }
  })
}

let observer = new IntersectionObserver(onIntersection, interactSettings)

images.forEach(image => observer.observe(image))

*/






/* https://www.robinosborne.co.uk/2016/05/16/lazy-loading-images-dont-rely-on-javascript/ */


/* Run after the HTML document has finished loading
document.addEventListener("DOMContentLoaded", function() {
    // Get our lazy-loaded images
    var lazyImages = [].slice.call(document.querySelectorAll("img.js-lazy"));
  
    // Do this only if IntersectionObserver is supported
    if ("IntersectionObserver" in window) {
        // Create new observer object
        let lazyImageObserver = new IntersectionObserver(function(entries, observer) {
            // Loop through IntersectionObserverEntry objects
            entries.forEach(function(entry) {
              // Do these if the target intersects with the root
              if (entry.isIntersecting) {
                let lazyImage = entry.target;
                lazyImage.src = lazyImage.dataset.src;
                lazyImage.classList.remove("js-lazy");
                lazyImageObserver.unobserve(lazyImage);
              }
            });
        });

          // Loop through and observe each image
  lazyImages.forEach(function(lazyImage) {
    lazyImageObserver.observe(lazyImage);
  });
}

*/