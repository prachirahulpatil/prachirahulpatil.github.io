
$(document).ready(function(){
	"use strict";

	var window_width 	 = $(window).width(),
	window_height 		 = window.innerHeight,
	header_height 		 = $(".default-header").height(),
	header_height_static = $(".site-header.static").outerHeight(),
	fitscreen 			 = window_height - header_height;


	$(".fullscreen").css("height", window_height)
	$(".fitscreen").css("height", fitscreen);

  //-------- Active Sticky Js ----------//
  $(".default-header").sticky({topSpacing:0});

     if(document.getElementById("default-select")){
          $('select').niceSelect();
    };

    $('.img-pop-up').magnificPopup({
        type: 'image',
        gallery:{
        enabled:true
        }
    });


  // $('.navbar-nav>li>a').on('click', function(){
  //     $('.navbar-collapse').collapse('hide');
  // });



    $('.active-works-carousel').owlCarousel({
        items:1,
        loop:true,
        margin: 100,
        dots: true,
        autoplay:true,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 1,
            }
        }
    });

    $('.active-testimonial').owlCarousel({
        items:2,
        loop:true,
        margin: 20,
        dots: true,
        autoplay:true,
        nav:true,
        navText: ["<span class='lnr lnr-arrow-up'></span>","<span class='lnr lnr-arrow-down'></span>"],        
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 1,
            },
            768: {
                items: 2,
            }
        }
    });





  // Select all links with hashes
  $('.navbar-nav a[href*="#"]')
  // Remove links that don't actually link to anything
  .not('[href="#"]')
  .not('[href="#0"]')
  .on('click',function(event) {
  // On-page links
  if (
    location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
    && 
    location.hostname == this.hostname
  ) {
    // Figure out element to scroll to
    var target = $(this.hash);
    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
    // Does a scroll target exist?
    if (target.length) {
      // Only prevent default if animation is actually gonna happen
      event.preventDefault();
      $('html, body').animate({
        scrollTop: target.offset().top-50
      }, 1000, function() {
        // Callback after animation
        // Must change focus!
        var $target = $(target);
        $target.focus();
        if ($target.is(":focus")) { // Checking if the target was focused
          return false;
        } else {
          $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
          $target.focus(); // Set focus again
        };
      });
    }
  }
  });


    $(".skill1").DonutWidget({

      // these are default options
      max: 100, 
      value: 75, 
      text: "", 
      rotate: 0, 
      caption: "", 
      template: [
        '<div class="donut-hole"><span class="donut-filling"></div>', 
        '<div class="donut-bite" data-segment-index="0"></div>', 
        '<div class="donut-bite" data-segment-index="1"></div>', 
        '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
      ].join(''), 
      colors: {
        primary: "#8490ff",
        background: "#eee"
      },
      size: "large"
      
    });

      $(".skill2").DonutWidget({

        // these are default options
        max: 100, 
        value: 95, 
        text: "", 
        rotate: 0, 
        caption: "", 
        template: [
          '<div class="donut-hole"><span class="donut-filling"></div>', 
          '<div class="donut-bite" data-segment-index="0"></div>', 
          '<div class="donut-bite" data-segment-index="1"></div>', 
          '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
        ].join(''), 
        colors: {
          primary: "#8490ff",
          background: "#eee"
        },
        size: "large"
        
      });

      $(".skill3").DonutWidget({

        // these are default options
        max: 100, 
        value: 85, 
        text: "", 
        rotate: 0, 
        caption: "", 
        template: [
          '<div class="donut-hole"><span class="donut-filling"></div>', 
          '<div class="donut-bite" data-segment-index="0"></div>', 
          '<div class="donut-bite" data-segment-index="1"></div>', 
          '<div class="donut-caption-wrapper"><span class="donut-caption"></span></div>'
        ].join(''), 
        colors: {
          primary: "#8490ff",
          background: "#eee"
        },
        size: "large"
        
      });
	  
	 $(window).scroll(function() {
			if ($(this).scrollTop() >= 50) {
				$('#return-to-top').fadeIn(200);   
			} else {
				$('#return-to-top').fadeOut(200);   
			}
	 });

	 $('#return-to-top').click(function() {
			$('body,html').animate({
				scrollTop : 0                       
			}, 500);
	 });

      $(document).ready(function() {
          $('#mc_embed_signup').find('form').ajaxChimp();
      }); 
	  

    $('document').ready(function () {
        $('#google_translate_element').on("click", function () {
    
            // Change font family and color
            $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
                .css({
                    'color': '#544F4B',
                    'font-family': 'Roboto',
    				'width':'50%'
                });
            // Change menu's padding
            $("iframe").contents().find('.goog-te-menu2-item-selected').css ('display', 'none');
    			
    				// Change menu's padding
            $("iframe").contents().find('.goog-te-menu2').css ('padding', '0px');
          
            // Change the padding of the languages
            $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');
          
            // Change the width of the languages
            $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
            $("iframe").contents().find('td').css('width', '100%');
          
            // Change hover effects
            $("iframe").contents().find(".goog-te-menu2-item div").hover(function () {
                $(this).css('background-color', '#4385F5').find('span.text').css('color', 'white');
            }, function () {
                $(this).css('background-color', 'white').find('span.text').css('color', '#544F4B');
            });
    
            // Change Google's default blue border
            $("iframe").contents().find('.goog-te-menu2').css('border', 'none');
    
            // Change the iframe's box shadow
            $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');
            
          
          
            // Change the iframe's size and position?
            $(".goog-te-menu-frame").css({
                'height': '100%',
                'width': '100%',
                'top': '0px'
            });
            // Change iframes's size
            $("iframe").contents().find('.goog-te-menu2').css({
                'height': '100%',
                'width': '100%'
            });
        });
    });
 });
        