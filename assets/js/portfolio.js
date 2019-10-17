// Portfolio swiper code

var swiper = new Swiper(".swiper-container", {
  // Optional parameters
  loop: false,
  slidesPerView: "auto",
  centeredSlides: true,
  effect: "coverflow",
  coverflowEffect: {
    rotate: 0,
    stretch: 0,
    depth: 150,
    modifier: 1,
    slideShadows: true
  },

  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev"
  }
});


// Open and close gallerys
$(".swiper-slide").each(function(index) {
    $(this).on("click", function(){
      $(".Gallery-wrapper").addClass("open");

      $(".photo").remove();

      //AJAX
      var folder = "../..//portfolio/project-" + (index+1) + "/";


      $(document).ready(function () {
        $.ajax({
          url : folder,
          success: function (data) {
              $(data).find("a").attr("href", function (i, val) {
                  if( val.match(/\.(jpe?g|png|JPG)$/) ) {
                      $(".photos-container").append( "<img class='photo' src='"+ folder + val +"'>" );
                  }
              });
          }
        });
      });
      //End add file


    });
});


$(".close").click(function() {
  $(".Gallery-wrapper").removeClass("open");
  $(".photos-container").animate({
        scrollTop: 0
  }, 'slow');
});
