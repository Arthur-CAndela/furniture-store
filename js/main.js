$(function(){
  $('.categories__slider').slick({
    arrows: false,
    infinite: false,
    slidesToShow: 3,
    variableWidth: true
  });

  $('.categories__banners').slick({
    arrows: false,
    slidesToShow: 1,
    dots: true,
    autoplay: true,
    fade: true
  });

  $('.rooms__slider').slick({
    arrows: false,
    infinite: false,
    variableWidth: true,
    slidesToShow: 3
  });

  $('.favorites').on('click', function(){
    $(this).toggleClass('favorites--active')
    console.log(23456789)
    return false
  })

});
