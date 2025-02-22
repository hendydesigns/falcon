window.onload = function() {
  $(".text").addClass("active");
};

window.onscroll = function() {
  var wScroll = $(window).scrollTop();
  if (wScroll < $(window).height()) {
    $(".text").css({ transform: "translate(-" + wScroll / 2 + "px, 0)" });
  }
  $(".ladder-text").each(function(i) {
    var top_of_object = $(this).offset().top;
    var bottom_of_window = $(window).scrollTop() + $(window).height();
    if (bottom_of_window > top_of_object) {
      $(this).addClass("reveal");
    }
  });
};

//Reveal Hidden Elements Initial

$(".ladder-text").each(function(i) {
  var top_of_object = $(this).offset().top;
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  if (bottom_of_window > top_of_object) {
    $(this).addClass("reveal");
  }
});


var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  loop: true,
  slidesPerView: 1,
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-arrow-next",
    prevEl: ".swiper-arrow-prev"
  }
});
