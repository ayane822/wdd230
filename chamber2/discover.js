document.addEventListener("DOMContentLoaded", function() {
    var lazyloadImages = document.querySelectorAll("img.lazy");    
    var lazyloadThrottleTimeout;
    
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
  });



if(!localStorage.getItem('lastvisit')) {
  localStorage.setItem('lastvisit', Date.now());
  document.getElementById('discover_page_date').textContent = 'This is your 1st visit';
} else {
  setStyles();
}

function setStyles() {
  let preDate = localStorage.getItem('lastvisit');
  let todayDate = Date.now();
  
  let difference = todayDate - preDate;
      console.log(difference);
      let daysDifference = Math.floor(difference/1000/60/60/24);

  document.getElementById('discover_page_date').textContent = daysDifference;

  localStorage.setItem('lastvisit', Date.now());

}
