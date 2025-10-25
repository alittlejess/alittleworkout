
$('document').ready(() => {
	$('#steps')
		.on('click', false) // disable default action
		.on('click', () => {
			// find the top of the target element
			let target_y = $('#target-steps').offset().top;
			
			target_y = target_y - 66;

			// scroll to it
			$("html").animate({
				scrollTop: target_y + "px"
			}, 500);
		});
		
		
	$('#resources')
		.on('click', false) // disable default action
		.on('click', () => {
			// find the top of the target element
			let target_y = $('#target-resources').offset().top;
			
			target_y = target_y - 66;

			// scroll to it
			$("html").animate({
				scrollTop: target_y + "px"
			}, 500);
		});
		
		
		
		
});