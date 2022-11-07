$(document).ready(function(){
 $('.partner_slider').slick({
    arrows:false,
    dots:false,
    autoplay:true,
    slidesToShow:6,
    slidesToScroll:1,
    speed:1000,
    responsive:[
      {
        breakpoint:1034,
          settings:{
           slidesToShow:4,
           slidesToScroll:1,
             
          },
        }, 
      {
        breakpoint:778,
          settings:{
           slidesToShow:2,
           slidesToScroll:1,
             
          },
        }
      
    ]
       
 });
 $(function() {
   $('.testimonial-slider').on('init', function(event, slick) {
     $(this).append('<div class="slick-counter"><span class="current"></span> / <span class="total"></span></div>');
     $('.current').text(slick.currentSlide + 1);
     $('.total').text(slick.slideCount);
   })

   .slick({
      arrows:true,
      dots:false,
      autoplay:true,
      slidesToShow:1,
      slidesToScroll:1,
      speed:1000,
   })
   .on('beforeChange', function(event, slick, currentSlide, nextSlide) {
     $('.current').text(nextSlide + 1);
   })
   $(".testimonial-slider .slick-prev").addClass("active-arrow")
   $(".testimonial-slider .slick-next").click(
    function(){
      $(".testimonial-slider .slick-prev").removeClass("active-arrow")
      $(".testimonial-slider .slick-next").addClass("active-arrow")
    }
   )
   $(".testimonial-slider .slick-prev").click(function(){
    
    $(".testimonial-slider .slick-next").removeClass('active-arrow')
    $(".testimonial-slider .slick-prev").addClass('active-arrow')
   })
 });

 $(".offering-slider").slick({
  arrows:true,
  autoplay:true,
  slidesToShow:2,
  slidesToScroll:1,
  speed:1000,
  responsive:[
    {
      breakpoint:768,
        settings:{
         slidesToShow:1,
         slidesToScroll:1,
           
        },
      }
    
  ]
  
 })

$("#applay").click(function(){
  $(".aplication-form").css("display", "block"),
  $(".aplication-form_background").css("display", "block"),
  $(".aplication-form__form").css("display", "block"),
  $('body').css("overflow","hidden")
  
})

$(".aplication-form_background").click(function(){
  $(".aplication-form_background").css("display", "none"),
  $(".aplication-form__form").css("display", "none"),
  location.reload(true)
})
});
$('#aplication-file').on('change' , function(){
  
  let i =$(this).prev('label').clone();
  let file = $('#aplication-file')[0].files[0].name 
   $(this).prev('label').text( file) 
})
$('#file1').on('change' , function(){
  
  let i =$(this).prev('label').clone();
  let file = $('#file1')[0].files[0].name 
   $(this).prev('label').text( file) 
})
$('#file2').on('change' , function(){
  
  let i =$(this).prev('label').clone();
  let file = $('#file2')[0].files[0].name 
   $(this).prev('label').text( file) 
})

$('.burger-icon').click(function(){
  $('.burger').toggleClass("active-menu");
  $('.span2').toggleClass('span-x2')
  $('.span1').toggleClass('span-x1')
  $('.span3').toggleClass('span-x3')

})