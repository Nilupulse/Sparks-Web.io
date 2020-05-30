(function($){
	$(window).on("load",function(){
		$(".mCustomScrollbar").mCustomScrollbar();
	});
})(jQuery);

$('#carouselGallery').carousel({ interval: false });

$('#carouselGallery').on('slide.bs.carousel', function () {
	$('.carousel-caption').addClass('show');
})

$('.multi-item-carousel .carousel-item').each(function(){
  var next = $(this).next();
  if (!next.length) next = $(this).siblings(':first');
  next.children(':first-child').clone().appendTo($(this));
});
$('.multi-item-carousel .carousel-item').each(function(){
  var prev = $(this).prev();
  if (!prev.length) prev = $(this).siblings(':last');
  prev.children(':nth-last-child(2)').clone().prependTo($(this));
});