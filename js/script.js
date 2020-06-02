(function($){
	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});
})(jQuery);


$(function () {
	$(document).ready(function(){
		$('#carouselGallery').carousel({ interval: false });

		$("#carouselInclusions").on('slide.bs.carousel', function(evt) {
			var step = $(evt.relatedTarget).index();
			$('#slider_captions .carousel-caption:not(#caption-'+step+')').fadeOut('fast', function() {
				$('#caption-'+step).fadeIn('6000');
			});
		});
		$('#carouselInclusions').carousel({ interval: false });

		$('[data-toggle="tooltip"]').tooltip();
	});
});