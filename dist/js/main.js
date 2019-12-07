$(function() {
  $(".menu__search-btn").click(function() {
    $(".menu__search-box").toggleClass("opened");
  });

  $(".featured__slider").slick({
    slidesToShow: 1,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow slick-arrow__purple"></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow slick-arrow__purple"></button>'
  });
  $(".feed-slider__inner").slick({
    slidesToShow: 3,
    slidesToScroll: 3,
    prevArrow:
      '<button type="button" class="slick-prev slick-arrow slick-arrow__blue"></button>',
    nextArrow:
      '<button type="button" class="slick-next slick-arrow slick-arrow__blue"></button>'
  });
  //TODO: add special star/ downloaded already
  $(".rate-yo").rateYo({
    starWidth: "15px",
    rating: 4.5,
    readOnly: true,
    normalFill: "transparent"
  });
  $(".rate-yo__mini").rateYo({
    starWidth: "12px",
    rating: 4.5,
    readOnly: true,
    normalFill: "transparent"
  });

  var mixer = mixitup(".newest__inner", {});

  // ! all about title + filter for mixitup
  $(".newest__btn-box").click(function() {
    $(".newest__filter-panel").toggleClass("active");
  });
  $(".newest__btn-box").click(function() {
    $(".newest__title").toggleClass("active");
  });
});
