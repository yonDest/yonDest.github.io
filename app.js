// Text animation code (unchanged)
var text = 'Widget World';
var textElements = text.split("").map(function(c) {
  return $('<span id="' + c + '">' + c + '</span>');
});

// Navbar scroll effect
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.navbar');
    
    window.onscroll = function() {
        var top = window.scrollY;
        if(top >= 100) {
            header.classList.add('navbarDark');
        } else {
            header.classList.remove('navbarDark');
        }
    }
});

// Text animation continuation (unchanged)
var el = $('#letters');
var delay = 50; // Tune this for different letter delays.
textElements.forEach(function(e, i) {
  el.append(e);
  e.hide();
  setTimeout(function() {
    e.fadeIn(300)
  }, 100 + i * delay)
})
