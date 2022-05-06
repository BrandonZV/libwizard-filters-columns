// define a handler
function checkout(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.ctrlKey && e.shiftKey && e.code === "KeyZ") {
        // call your function to do the thing
		// console.log("keybind worked");
		const current_date = Date.now();
		// console.log(current_date)
		const current_date_obj = new Date(current_date);
		// console.log(current_date_obj);
		const current_time = current_date_obj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
		// console.log(current_time);
		var initials_text = '';
		var initials = '';
		chrome.storage.local.get({initials_text}, function(obj) {
			initials = obj.initials_text;
			var current_time_initials = current_time + ' ' + initials;
			// console.log(current_time_initials);
			var endTime = document.getElementById('3902625');
			// console.log(endTime);
			document.getElementById('3902625').value = current_time_initials;
			// console.log(endTime);
			document.getElementById('3902625').dispatchEvent(new Event('input', {}));
			var sessionEnd = document.getElementsByName("3902626-Yes-check")[0];
			if (sessionEnd.ariaChecked == "false") {
				sessionEnd.click();
			}
			document.getElementsByName("submit")[0].click();
		});
    }
};
function incr_scratch(digit) {
	var scratch = document.getElementById("3902619");
	var v = 0;
	if (!!scratch.value) {
		v = parseInt(scratch.value);
	}
	v = v + digit;
	scratch.value = toString(v);
	
	scratch.dispatchEvent(new Event('input', {}));
	
	document.getElementsByName("submit")[0].click();
};

function clear_scratch_submit() {
	document.getElementById("3902619").value = '';
	scratch.dispatchEvent(new Event('input', {}));
	
	// call your function to do the thing
	// console.log("keybind worked");
	const current_date = Date.now();
	// console.log(current_date)
	const current_date_obj = new Date(current_date);
	// console.log(current_date_obj);
	const current_time = current_date_obj.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' });
	// console.log(current_time);
	var initials_text = '';
	var initials = '';
	chrome.storage.local.get({initials_text}, function(obj) {
		initials = obj.initials_text;
		var current_time_initials = current_time + ' ' + initials;
		// console.log(current_time_initials);
		var endTime = document.getElementById('3902625');
		// console.log(endTime);
		document.getElementById('3902625').value = current_time_initials;
		// console.log(endTime);
		document.getElementById('3902625').dispatchEvent(new Event('input', {}));
		var sessionEnd = document.getElementsByName("3902626-Yes-check")[0];
		if (sessionEnd.ariaChecked == "false") {
			sessionEnd.click();
		}
		document.getElementsByName("submit")[0].click();
	});
};

function num_choice(e) {

    // this would test for whichever key is 40 (down arrow) and the ctrl key at the same time
    if (e.ctrlKey && e.shiftKey && e.code === "Digit1") {
        incr_scratch(1);
    } else if (e.ctrlKey && e.shiftKey && e.code === "Digit2") {
		incr_scratch(2);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit3") {
		incr_scratch(3);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit4") {
		incr_scratch(4);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit5") {
		incr_scratch(5);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit6") {
		incr_scratch(6);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit7") {
		incr_scratch(7);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit8") {
		incr_scratch(8);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit9") {
		incr_scratch(9);
	} else if (e.ctrlKey && e.shiftKey && e.code === "Digit0") {
		clear_scratch_submit();
	
};

// register the handler 
document.addEventListener('keydown', checkout, false);
document.addEventListener('keydown', num_choice, false);
// document.onkeyup = function(e) {
	// if (e.which == 17 && e.which == 16 && e.which == 90) {
		// console.log("keybind worked");
	// }
// };
// console.log("it got injected");

// https://stackoverflow.com/questions/2511388/how-can-i-add-a-javascript-keyboard-shortcut-to-an-existing-javascript-function
// https://www.freecodecamp.org/news/javascript-keycode-list-keypress-event-key-codes/
// https://keycode.info/