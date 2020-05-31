(function($){
	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});
})(jQuery);


$(function () {
	$(document).ready(function(){
		$('#carouselGallery').carousel({ interval: false });
		$('#carouselInclusions').carousel({ interval: false });
		$('[data-toggle="tooltip"]').tooltip();
	});
});

