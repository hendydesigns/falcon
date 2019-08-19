window.onload = function() {
  $(".text").addClass("active");
};



window.onscroll = function () {
  var wScroll = $(window).scrollTop();
  if (wScroll < $(window).height()) {
    $(".text").css({"transform": "translate(-" + wScroll/2 + "px, 0)"});
  }
  $('.info').each(function(i) {
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > top_of_object) {
      $(this).addClass("reveal");
    }
  });
};
