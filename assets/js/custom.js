

var tpj=jQuery;
			
			var revapi1078;
			tpj(document).ready(function() {
				if(tpj("#rev_slider_1078_1").revolution == undefined){
					revslider_showDoubleJqueryError("#rev_slider_1078_1");
				}else{
					revapi1078 = tpj("#rev_slider_1078_1").show().revolution({
						sliderType:"standard",
jsFileLocation:"revolution/js/",
						sliderLayout:"auto",
						dottedOverlay:"none",
						delay:9000,
						navigation: {
							keyboardNavigation:"off",
							keyboard_direction: "horizontal",
							mouseScrollNavigation:"off",
 							mouseScrollReverse:"default",
							onHoverStop:"off",
							touch:{
								touchenabled:"on",
								swipe_threshold: 75,
								swipe_min_touches: 1,
								swipe_direction: "horizontal",
								drag_block_vertical: false
							}
							,
							arrows: {
								style:"zeus",
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								tmp:'<div class="tp-title-wrap">  	<div class="tp-arr-imgholder"></div> </div>',
								left: {
									h_align:"left",
									v_align:"center",
									h_offset:30,
									v_offset:0
								},
								right: {
									h_align:"right",
									v_align:"center",
									h_offset:30,
									v_offset:0
								}
							}
							,
							bullets: {
								enable:true,
								hide_onmobile:true,
								hide_under:600,
								style:"metis",
								hide_onleave:true,
								hide_delay:200,
								hide_delay_mobile:1200,
								direction:"horizontal",
								h_align:"center",
								v_align:"bottom",
								h_offset:0,
								v_offset:30,
								space:5,
								tmp:'<span class="tp-bullet-img-wrap">  <span class="tp-bullet-image"></span></span><span class="tp-bullet-title">{{title}}</span>'
							}
						},
						viewPort: {
							enable:true,
							outof:"pause",
							visible_area:"80%",
							presize:false
						},
						responsiveLevels:[1240,1024,778,480],
						visibilityLevels:[1240,1024,778,480],
						gridwidth:[1240,1024,778,480],
						gridheight:[600,600,500,400],
						lazyType:"none",
						parallax: {
							type:"mouse",
							origo:"slidercenter",
							speed:2000,
							levels:[2,3,4,5,6,7,12,16,10,50,46,47,48,49,50,55],
							type:"mouse",
						},
						shadow:0,
						spinner:"off",
						stopLoop:"off",
						stopAfterLoops:-1,
						stopAtSlide:-1,
						shuffle:"off",
						autoHeight:"off",
						hideThumbsOnMobile:"off",
						hideSliderAtLimit:0,
						hideCaptionAtLimit:0,
						hideAllCaptionAtLilmit:0,
						debugMode:false,
						fallbacks: {
							simplifyAll:"off",
							nextSlideOnWindowFocus:"off",
							disableFocusListener:false,
						}
					});
				}
			});
			
			
// pregress js //			
window.onload=function(){
			$('.circleGraphic1').circleGraphic({'color':'#fff'});
			$('.circleGraphic2').circleGraphic({'color':'#fff'});
			$('.circleGraphic3').circleGraphic({'color':'#fff'});
			
			$('.circleGraphic4').circleGraphic({'color':'#fff'});
			
			$('#preloader').fadeOut('slow',function(){$(this).remove();});
		}
// mysonry js //	
var $grid = $('.grid').isotope({
  itemSelector: '.grid-item',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.grid-sizer'
  }
})
// mysonry-button js //
$('.filter-button-group').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});
// blog js //
$('.blog-content').isotope({
  itemSelector: '.blog-single',
  percentPosition: true,
  masonry: {
    // use outer width of grid-sizer for columnWidth
    columnWidth: '.blog-sizer'
  }
})
// parallaxie js //
$('.parallaxie').parallaxie();


$(".reply-button1").click(function(){
	$(".post-media-1").slideToggle(1000);
})
$(".reply-button2").click(function(){
	$(".post-media-2").slideToggle(1000);
})
$(".reply-button3").click(function(){
	$(".post-media-3").slideToggle(1000);
})



$(".media-hidden").slice(0, 2).show();   
    $("#loadMore").on('click', function (e) {
      e.preventDefault();
      $(".media-hidden:hidden").slice(0, 1).slideDown();
      if ($(".media-hidden:hidden").length == 0) {
        $("#loadMore").fadeOut('slow');
      }
    });

	
function scrollToSection(event) {
    event.preventDefault();
    var $section = $($(this).attr('href')); 
    $('html, body').animate({
      scrollTop: $section.offset().top
    }, 500);
  }
  $('[data-scroll]').on('click', scrollToSection);

  
  
  $(window).scroll(function(){
  	var scroll = $(window).scrollTop();
	  if (scroll > 400) {
	    $(".navbar").css({"background-color": "#ffd452", "transition": ".7s"});
	  }

	  else{
		  $(".navbar").css("background" , "transparent");  	
	  } 
	  if (scroll > 400) {
	    $(".blog-single-navbar").css({"background-color": "#ffd452", "transition": ".7s"});
	  }

	  else{
		  $(".blog-single-navbar").css("background" , "transparent");  	
	  }
  })
  
$(document).ready(function () {
		"use strict";
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.scrollup').fadeIn();
        } else {
            $('.scrollup').fadeOut();
        }
    });

    $('.scrollup').click(function () {
        $("html, body").animate({
            scrollTop: 0
        }, 600);
        return false;
    });

});