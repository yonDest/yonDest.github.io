var text = 'Widget World';
const tl = new TimelineMax()
var textElements = text.split("").map(function(c) {
  return $('<span id="' + c + '">' + c + '</span>');
});
tl.fromTo(".type-me", 5, {
  width: "0",
}, {
  width: "870px", /* same as text-description width*/
}, 0);
var el = $('#letters');
var delay = 50; // Tune this for different letter delays.
textElements.forEach(function(e, i) {
  el.append(e);
  e.hide();
  setTimeout(function() {
    e.fadeIn(300)
  }, 100 + i * delay)
})
