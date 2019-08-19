

$(document).ready(function(){
  /*! Fades in whole page on load */
  $('body').fadeIn(500);
});

$('a').click(function(e) {
  e.preventDefault();
  newLocation = this.href;
  $('body').fadeOut('slow', newpage);
});

function newpage() {
  window.location = newLocation;
}


$(".button-container").click(function() {
  $(".button-container").toggleClass("active");
  $(".menu").toggleClass("active");
});
