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


// footer
// const updateDate = document.getElementById('last-update');
// updateDate.innerHTML = "Last Modification: " + document.lastModified;


// let documentItem = document.getElementById('discover_page_date')

// if (localStorage.getItem('lastVisit')){
//   let previousItem = localStorage.getItem('lastVisit')
//   let thisDate = Date.now();
//   let subtractValue = thisDate - previousItem;
//   let editSubtract = subtractValue/1000/60/60/24;
//   document.innerHTML = Math.round(editSubtract);
// }
// else {
//   localStorage.setItem('lastVisit',Date.now());
//   let todaysDate = localStorage.getItem('lastVisit');
//   documentItem.innerHTML = todaysDate;
// }

let documentItem = document.getElementById('discover_page_date')

if(localStorage.getItem('lastVisit')) {
    // Get value from Local Storage
    let previousItem = localStorage.getItem('lastVisit')
    // Get Todays Date
    let thisDate = Date.now();
    // Subtract the variables
    let subtractValue = thisDate - previousItem;
    let editSubtract = subtractValue/1000/60/60/24;
    documentItem.innerHTML = Math.round(editSubtract);


}

else {
    localStorage.setItem('lastVisit',Date.now());
    let todaysDate = localStorage.getItem('lastVisit');
    documentItem.innerHTML = todaysDate;

}