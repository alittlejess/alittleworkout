/* global $ */

// ============== ALL: HEADER ==============


let i = 1;

function header_logo_colourful() {
	if (i <= 5) {
		$("#header_logo").addClass("bg-" + "" + i);
		i++;
	}

	else if (i > 5) {
		i = 1;
		$("#header_logo").removeClass("bg-5 bg-4 bg-3 bg-2");
	}
}

window.setInterval(header_logo_colourful, 600);

let header_logo_state = 1;

function header_logo_txt_change() {
	if (header_logo_state == 1) {
		$("#header_logo").html("don't give up!");
		header_logo_state = 2;
	}
	else if (header_logo_state == 2) {
		$("#header_logo").html("you can do it!");
		header_logo_state = 1;
	}
}
window.setInterval(header_logo_txt_change, 5000);



