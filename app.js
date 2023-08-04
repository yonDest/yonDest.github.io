var text = 'Widget World';

var textElements = text.split("").map(function(c) {
  return $('<span id="' + c + '">' + c + '</span>');
});

var el = $('#letters');
var delay = 50; // Tune this for different letter delays.
textElements.forEach(function(e, i) {
  el.append(e);
  e.hide();
  setTimeout(function() {
    e.fadeIn(300)
  }, 100 + i * delay)
})
