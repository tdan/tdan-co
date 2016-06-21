$(document).ready(function() {
	var animationEnd = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend';

	var carousel = $('.scrolling-content').slick({
		vertical: true,
		infinite: false,
		dots: true,
		arrows: false,
		mobileFirst: true,
		draggable: false,
		responsive: [
			{ 
				breakpoint: 600,
				settings: "unslick"
			}
		]
	});

	if ($(window).width() > 800 ) {
		$('.scrolling-content').bind('mousewheel', function(e) {
			if(e.originalEvent.wheelDelta > 0) {
				e.preventDefault();
				$('.scrolling-content').slick('slickPrev');
			} else {
				e.preventDefault();
				$('.scrolling-content').slick('slickNext');
			}
		});
	}
	
	$('#work-education h2').prepend('<i class="fa fa-pencil" aria-hidden="true"></i>');
	$('#skills h2').prepend('<i class="fa fa-laptop" aria-hidden="true"></i>');
	$('#projects h2').prepend('<i class="fa fa-cogs" aria-hidden="true"></i>');
	
	$('.slick-dots li').addClass('tooltip');
	$('.slick-dots li#slick-slide00').append('<span class="tooltiptext">About</span>');
	$('.slick-dots li#slick-slide01').append('<span class="tooltiptext">Experience</span>');
	$('.slick-dots li#slick-slide02').append('<span class="tooltiptext">Skills</span>');
	$('.slick-dots li#slick-slide03').append('<span class="tooltiptext">Projects</span>');
});
