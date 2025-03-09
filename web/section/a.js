window.addEventListener('scroll', function() {
    var scrollPosition = window.scrollY || window.pageYOffset;
    var triggerPosition = window.innerHeight;
    
    if (scrollPosition >= triggerPosition) {
        document.querySelector('.upp').classList.add('show');
    } else {
        document.querySelector('.upp').classList.remove('show');
    }
  });