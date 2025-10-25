/* global $ */

let tick = 0;
let timer;
let button_state = 'start';

function update_page_on_timer() {
	tick = tick + 1;
	if (tick > 600) {
		window.clearInterval(timer);
	}
	// ============== ATTEMPT 3 AT DURATION COUNTDOWN ==============
	const time_per_block = 30; //setting blocks of 30 sec
	let current_block = Math.floor(tick / time_per_block); //rounding down to block (starts at 0)
	let time_in_block = tick % time_per_block; //dividing for remainder to derive current time in block

	// get timer bar for the current_block + set percentage
	let block_percentage;
	if (current_block % 2 == 0) {
		// currently on exercise
		block_percentage = 100 - (time_in_block / 30 * 100);
		$(".bar-" + current_block).width('100%');
	}
	else {
		// currently on rest
		block_percentage = (time_in_block / 30 * 100);
		$(".bar-" + current_block).width('0');
	}

	$(".bar-" + (current_block + 1)).width(block_percentage + '%');
	
	
	//SETTING AUTO SCROLL
	if (tick == 1) {
		let target_y = $('#target-start').offset().top;

		target_y = target_y - 130;

		// scroll to it
		$("html").animate({
			scrollTop: target_y + "px"
		}, 500);
	}

	if (tick == 60) {
		let target_y = $('#target-2').offset().top;

		target_y = target_y - 130;

		// scroll to it
		$("html").animate({
			scrollTop: target_y + "px"
		}, 500);
	}

	if (tick == 120) {
		let target_y = $('#target-3').offset().top;

		target_y = target_y - 130;

		// scroll to it
		$("html").animate({
			scrollTop: target_y + "px"
		}, 500);
	}

	if (tick == 180) {
		let target_y = $('#target-4').offset().top;

		target_y = target_y - 130;

		// scroll to it
		$("html").animate({
			scrollTop: target_y + "px"
		}, 500);
	}


	if (tick == 240) {
		let target_y = $('#target-5').offset().top;

		target_y = target_y - 130;

		// scroll to it
		$("html").animate({
			scrollTop: target_y + "px"
		}, 500);
	}
}

function toggle_button_state() {
	if (button_state == 'start') {
		$('#btn_start') //jquery calling ID
			.html("Pause") //edit html content
			.addClass('pause'); //add css class
		if (timer) { //checks if var timer exists
			window.clearInterval(timer); //clears timer but not tick count
		}
		timer = window.setInterval(update_page_on_timer, 1000); //counts 1 second before adding a tick
		button_state = 'pause';
	}
	else if (button_state == 'pause') {
		$('#btn_start')
			.html("Start") //edit html content
			.removeClass('pause'); //remove css class
		button_state = 'start';

		if (timer) {
			window.clearInterval(timer); //clears timer but not tick count
		}
	}
}




//when document is ready
$(document).ready(() => {

	let btn_object = $('#btn_start')
	btn_object.on('click', false)
	btn_object.on('click', () => {
		// toggle start/pause button state
		toggle_button_state()
		

	});


	//REFRESH BUTTON
	$("#refresh").click(function() {
		document.location.reload(true);
	    $('html').animate({scrollTop:0}, 1);
	    $('body').animate({scrollTop:0}, 1);
	});

	// ALL DONE BUTTON
	$("#btn_popup").click(function() {
		$("#popup").removeClass("popupOff").addClass("popupOn");
		$("#popup_deadarea").removeClass("popupOff").addClass("popupOn");
	});

	// All done: Closing Popup
	$("#popup_deadarea").click(function() {
		$("#popup, #popup_deadarea").removeClass("popupOn").addClass("popupOff");
	});

	$(".popupClose").click(function() {
		$("#popup, #popup_deadarea").removeClass("popupOn").addClass("popupOff");
	});

// FIXING THE START BUTTON ON SCROLL	
	
	function move_button() {
		let window_position = $('html').scrollTop();
		if (window_position > 200) {
			$("#start_container").addClass("fix_button");
			$("#ph_button").addClass("popupOn");
		}
		if (window_position < 200) {
			$("#start_container").removeClass("fix_button");
			$("#ph_button").removeClass("popupOn");
		}
	}

	move_button();
	setInterval(move_button, 10);

});
