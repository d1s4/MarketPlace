$(function() {
  $(".menu__search-btn").click(function() {
    $(".menu__search-box").toggleClass("opened");
  });

  $('.featured__slider').slick({
    slidesToShow: 1,
    prevArrow: '<button type="button" class="slick-prev slick-arrow"></button>',
    nextArrow: '<button type="button" class="slick-next slick-arrow"></button>',
  });
  $(".rate-yo").rateYo({
    starWidth: "15px",
    rating: 4.2,
    readOnly: true,
  });
});
