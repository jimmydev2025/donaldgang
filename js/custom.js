$(document).ready(function(){
  $('.faq-que').on("click", function() {
    $(this).next().slideToggle(500).siblings('.faq-ans').slideUp();
    $(this).toggleClass("active-faq").siblings('.faq-que').removeClass("active-faq");
  });
jQuery('.pepe-slider-inner').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  variableWidth: true, 
  autoplay:true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear'
 });
jQuery('.pepe-slider-inner-rtl').slick({
  infinite: true,
  slidesToShow: 1,
  arrows: false,
  variableWidth: true, 
  autoplay:true,
  autoplaySpeed: 0,
  speed: 3000,
  pauseOnHover: false,
  cssEase: 'linear',
  rtl: true,
 });
 $(".copy-add-btn").click(function(){
  var copyText = $(".text-to-copy");
  copyText.select();
  document.execCommand("copy");
});

});


$(window).on('load', function() {
  $('.loader').fadeOut();
});
