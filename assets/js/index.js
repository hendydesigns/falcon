var swiper = new Swiper(".swiper-container", {
  centeredSlides: true,
  slidesPerView: "auto",
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar"
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});

swiper.on('slideChange', function () {

  if(swiper.activeIndex == 0) {
    $(".background").removeClass("active");
    $(".one").addClass("active");
  }

  if(swiper.activeIndex == 1) {
    $(".background").removeClass("active");
    $(".two").addClass("active");
  }

  if(swiper.activeIndex == 2) {
    $(".background").removeClass("active");
    $(".three").addClass("active");
  }
});

window.onload = function() {
  $(".featured").addClass("active");
  $(".one").addClass("active");
  $(".title").addClass("active");
}


$(".button-container").click(function() {
  $(".button-container").toggleClass("active");
  $(".menu").toggleClass("active");
});
