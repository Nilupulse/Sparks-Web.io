(function($){
	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});
})(jQuery);


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

		$('[data-spy="scroll"]').on('activate.bs.scrollspy', function (evt) {
			var step = $(evt.relatedTarget).index();
			console.log(step);
		})

		/* START Initialize Carousel */
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
					$('#carouselInclusions .carousel-control-next').fadeOuts('3000');
				} else {
					_this.find('.carousel-control-next').fadeIn('3000');
				}
			});
			$('.carousel .carousel-control-prev').fadeOut('fast');


			$("#carouselInclusions").on('slide.bs.carousel', function(evt) {
				var step = $(evt.relatedTarget).index();
				$('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
					$('#caption-'+step).fadeIn('6000');
				});
			});

			$('#carouselGallery').carousel({ interval: false });
			$('#carouselInclusions').carousel({ interval: false });
		/* END Initialize Sliders */

		$('[data-toggle="tooltip"]').tooltip();

	});
});

$(document).ready(function () {
 
});

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