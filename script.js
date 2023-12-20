document.addEventListener('DOMContentLoaded', function () {
    var headerTop = document.querySelector('.header-top');
    var headerTopOffset = headerTop.offsetTop;
  
    // Function to add or remove the 'fixed' class based on scroll position
    function handleScroll() {
        if (window.pageYOffset > headerTopOffset) {
            headerTop.classList.add('fixed');
        } else {
            headerTop.classList.remove('fixed');
        }
    }
  
    // Listen for scroll events
    window.addEventListener('scroll', handleScroll);
  });
  
  document.addEventListener('DOMContentLoaded', function () {
  var backToTopButton = document.getElementById('back-to-top');
  
  // Show the button when scrolling down
  window.addEventListener('scroll', function () {
      if (window.pageYOffset > 100) {
          backToTopButton.style.display = 'block';
      } else {
          backToTopButton.style.display = 'none';
      }
  });
  
  // Scroll to the top when the button is clicked
  backToTopButton.addEventListener('click', function () {
      window.scrollTo({
          top: 0,
          behavior: 'smooth'
      });
  });
  });