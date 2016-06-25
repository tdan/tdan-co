$(document).ready(function() {
	$('#fullPage').fullpage({
		navigation: true,
		navigationPosition: 'right',
		navigationTooltips: ['About', 'Experience', 'Skills', 'Projects'],
		scrollOverflow: true,
		scrollOverflowOptions: {
			scrollbars: true,
			mouseWheel: true,
			hideScrollbars: false,
			fadeScrollbars: false,
			disableMouse: true
		}
	});

	$('#experience h2').prepend('<i class="fa fa-pencil" aria-hidden="true"></i>');
	$('#skills h2').prepend('<i class="fa fa-laptop" aria-hidden="true"></i>');
	$('#projects h2').prepend('<i class="fa fa-cogs" aria-hidden="true"></i>');

});
