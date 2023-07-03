// Slick Slider Part End 
// Sub_menu 1 part Start 
$(function(){
  $('.sub_menu').hide()
  $('#a_nav_link').click(function(){
  $('.sub_menu').toggle();
  });
});
// Sub_menu 1 part end


// Sub_menu 2 part Start 

$(function(){
  $('.sub_menu_two').hide()
  $('.sub_menu_one').click(function(){
  $('.sub_menu_two').toggle();
  });
});

// Sub_menu 2 part End



// Slick Slider Part End 

$(function(){
    $('.partners_logo').slick({
        slidesToShow: 6,
        slidesToScroll: 3,
        autoplay: false,
        autoplaySpeed: 2000,
        arrows: true,
        prevArrow:'<i class="fa-solid fa-caret-left prev"></i>',
        nextArrow:'<i class="fa-solid fa-caret-right next"></i>',
      });
});

// Slick Slider Part End 
// Veno Box Part Start 
$(function(){
  new VenoBox({
      selector: '.my-video-links',
  });
});
// Veno Box Part End 