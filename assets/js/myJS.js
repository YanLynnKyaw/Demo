window.onscroll = function() {myFunction()};

var header = document.getElementById("myHeader");
var sticky = header.offsetTop;

function myFunction() {
  if (window.pageYOffset > sticky) {
    header.classList.add("sticky");
  } else {
    header.classList.remove("sticky");
  }
}


// document.querySelectorAll('.scroll-link').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     window.scrollTo({
//       top: target.offsetTop,
//       behavior: 'smooth'
//     });
//   });
// });

// document.querySelectorAll('.scroll-link').forEach(anchor => {
//   anchor.addEventListener('click', function(e) {
//     e.preventDefault();
//     const target = document.querySelector(this.getAttribute('href'));
//     const duration = 1000; // Duration in milliseconds

//     const start = window.pageYOffset;
//     const end = target.getBoundingClientRect().top + window.pageYOffset;
//     const distance = end - start;
//     let startTime = null;

//     function animation(currentTime) {
//       if (startTime === null) startTime = currentTime;
//       const timeElapsed = currentTime - startTime;
//       const run = ease(timeElapsed, start, distance, duration);
//       window.scrollTo(0, run);
//       if (timeElapsed < duration) requestAnimationFrame(animation);
//     }

//     function ease(t, b, c, d) {
//       t /= d / 2;
//       if (t < 1) return c / 2 * t * t + b;
//       t--;
//       return -c / 2 * (t * (t - 2) - 1) + b;
//     }

//     requestAnimationFrame(animation);
//   });
// });