$(document).ready(function(){
	$('#navbarNav .nav-link').each(function(){
		if($(this).hasClass('active')) {
			$('body').removeClass().addClass($(this).attr("id"));
		}
	});		
	
	$('[data-spy="scroll"]').on('activate.bs.scrollspy', function () {
		$('#navbarNav .nav-link').each(function(){
			if($(this).hasClass('active')) {
				$('body').removeClass().addClass($(this).attr("id"));
			}
		});		
	});
});

/* START Carousel */
	$(function () {
		$(document).ready(function(){
			$(".carousel").on('slide.bs.carousel', function(evt) {
				var _this = $(this);
				var step = $(evt.relatedTarget).index();
				if(step == 0) {
					_this.find('.carousel-control-prev').fadeOut('3000');
				} else {
					_this.find('.carousel-control-prev').fadeIn('3000');
				}
				if(step == 4) {
					$('#carouselGallery .carousel-control-next').fadeOut('3000');
				} else if(step == 5) {
					$('#carouselInclusions .carousel-control-next').fadeOut('3000');
				} else {
					_this.find('.carousel-control-next').fadeIn('3000');
				}
			});
			$('.carousel .carousel-control-prev').fadeOut('fast');

			$("#carouselGallery").on('slide.bs.carousel', function(evt) {
				var step = $(evt.relatedTarget).index();
				$('#gallery_captions .carousel-caption:not(#captionGallery-'+step+')').fadeOut('fast', function() {
					$('#captionGallery-'+step).fadeIn('6000');
				});
			});

			$("#carouselInclusions").on('slide.bs.carousel', function(evt) {
				var step = $(evt.relatedTarget).index();
				$('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
					$('#caption-'+step).fadeIn('6000');
				});
			});

			$('#carouselGallery').carousel({ interval: false });
			$('#carouselInclusions').carousel({ interval: false });	
		});
	});
/* END Carousel */

/* START Sidebar-Popup */
	$(function () {
		$(document).ready(function(){
			$('[data-toggle="offcanvas"]').click(function () {
				$('#sideBarToggle').toggleClass('toggled');
			}); 
			$('[data-toggle="offContact"]').click(function () {
				$('#contact').toggleClass('toggled');
			});  
			$('[data-toggle="offRegister"]').click(function () {
				$('#register').toggleClass('toggled');
			});   
			$('[data-toggle="offPolicy"]').click(function () {
				$('#policy').toggleClass('toggled');
			});
		});
	});
/* END Sidebar-Popup */

/* START Tooltip */
	$(function () {
		$(document).ready(function(){
			$('[data-toggle="tooltip"]').tooltip();
		});
	});
/* END Tooltip */	

/* START Custom Scroll */
	(function($){
		$(window).on("load",function(){
			$(".mCustomScrollbar").mCustomScrollbar();
		});
	})(jQuery);
/* START Custom Scroll */

/* START Animation */
	$(function () {
		$(document).ready(function(){
			var $animation_elements = $('.animation-element');
			var $window = $(window);

			function check_if_in_view() {
			  var window_height = $window.height();
			  var window_top_position = $window.scrollTop();
			  var window_bottom_position = (window_top_position + window_height);
			 
			  $.each($animation_elements, function() {
			    var $element = $(this);
			    var element_height = $element.outerHeight();
			    var element_top_position = $element.offset().top;
			    var element_bottom_position = (element_top_position + element_height);
			 
			    //check to see if this current container is within viewport
			    if ((element_bottom_position >= window_top_position) && (element_top_position <= window_bottom_position)) {
			      	$element.addClass('in-view');
			    }
			  });
			}

			$window.on('scroll resize', check_if_in_view);
			$('.js-loop').on('scroll resize', check_if_in_view);
			$window.trigger('scroll');
		});
	});
/* END Animation */