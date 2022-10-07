$(document).ready(function(){
 $('.partner_slider').slick({
    arrows:false,
    dots:false,
    autoplay:true,
    slidesToShow:6,
    slidesToScroll:1,
    speed:1000,
       
 });
 $(function() {
   $('.testimonial-slider').on('init', function(event, slick) {
     $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
     $('.current').text(slick.currentSlide + 1);
     $('.total').text(slick.slideCount);
   })
   .slick({
      arrows:false,
      dots:true,
      autoplay:true,
      slidesToShow:1,
      slidesToScroll:1,
      speed:1000,
   })
   .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
     $('.current').text(nextSlide + 1);
   });
 });

 $(".offering-slider").slick({
  arrows:true,
  autoplay:true,
  slidesToShow:2,
  slidesToScroll:1,
  speed:1000,
  
 })
});
