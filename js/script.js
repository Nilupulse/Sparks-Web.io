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

		$('.carousel-item', '.show-neighbors').each(function () {
			var next = $(this).next();
			if (!next.length) {
				next = $(this).siblings(':first');
			}
			next.children(':first-child').clone().appendTo($(this));
		}).each(function () {
			var prev = $(this).prev();
			if (!prev.length) {
				prev = $(this).siblings(':last');
			}
			prev.children(':nth-last-child(2)').clone().prependTo($(this));
		});
		$('#carouselGallery').carousel({ interval: false });

		$("#carouselInclusions").on('slide.bs.carousel', function(evt) {
			var step = $(evt.relatedTarget).index();
			$('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('3000', function() {
				$('#caption-'+step).fadeIn('3000');
			});
			if(step == 0) {
				$('#carouselInclusions .carousel-control-prev').fadeOut('3000');
			} else {
				$('#carouselInclusions .carousel-control-prev').fadeIn('3000');
			}
			if(step == 5) {
				$('#carouselInclusions .carousel-control-next').fadeOut('3000');
			} else {
				$('#carouselInclusions .carousel-control-next').fadeIn('3000');
			}
		});
		$('#carouselInclusions .carousel-control-prev').fadeOut('fast');
		$('#carouselInclusions').carousel({ interval: false });

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