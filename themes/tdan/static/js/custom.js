$(document).ready(function() {
	var carousel = $('.scrolling-content').slick({
		vertical: true,
		infinite: false,
		dots: true,
		arrows: false,
		draggable: false
	});

	$('.scrolling-content').bind('mousewheel', function(e) {
		if(e.originalEvent.wheelDelta / 120 > 0) {
			e.preventDefault();
			$('.scrolling-content').slick('slickPrev');
		} else {
			e.preventDefault();
			$('.scrolling-content').slick('slickNext');
		}
	});
});
