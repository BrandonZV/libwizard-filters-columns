function setColumns() {
	//var remove = document.getElementById("currentFiltersLabel").getElementsByClassName("btn empty")[0];
	//remove.click();
	
	var mapping = {
		'checkbox-select': 'mat-checkbox-1-input',
		'checkbox-submitted': 'mat-checkbox-2-input',
		'checkbox-location': 'mat-checkbox-3-input',
		'checkbox-arrival': 'mat-checkbox-4-input',
		'checkbox-fname': 'mat-checkbox-5-input',
		'checkbox-lname': 'mat-checkbox-6-input',
		'checkbox-studentid': 'mat-checkbox-7-input',
		'checkbox-college-email': 'mat-checkbox-8-input',
		'checkbox-alt-email': 'mat-checkbox-9-input',
		'checkbox-paper-comp-test': 'mat-checkbox-10-input',
		'checkbox-course-name-number': 'mat-checkbox-11-input',
		'checkbox-section-number': 'mat-checkbox-12-input',
		'checkbox-instructor': 'mat-checkbox-13-input',
		'checkbox-test-number': 'mat-checkbox-14-input',
		'checkbox-lecture-lab': 'mat-checkbox-15-input',
		'checkbox-staff-queue-number': 'mat-checkbox-16-input',
		'checkbox-staff-test-number': 'mat-checkbox-17-input',
		'checkbox-staff-seat-number': 'mat-checkbox-18-input',
		'checkbox-staff-scratch-paper': 'mat-checkbox-19-input',
		'checkbox-staff-graph-paper': 'mat-checkbox-20-input',
		'checkbox-staff-calculator': 'mat-checkbox-21-input',
		'checkbox-staff-permitted-items': 'mat-checkbox-22-input',
		'checkbox-staff-start-time': 'mat-checkbox-23-input',
		'checkbox-staff-end-time': 'mat-checkbox-24-input',
		'checkbox-staff-session-ended': 'mat-checkbox-25-input',
		'checkbox-academic-dishonesty': 'mat-checkbox-26-input',
		'checkbox-additional-comments': 'mat-checkbox-27-input'
	}
	
	//document.getElementById("mat-checkbox-2-input").ariaChecked = false;
	// var test = document.getElementById("mat-checkbox-2-input").ariaChecked;
	// console.log(test);
	// document.getElementById("mat-checkbox-2-input").click();
	
	var checklist2 = '';
	chrome.storage.local.get({checklist2}, function(obj) {
		var list = obj.checklist2;
		for (var i in list) {
			var map = mapping[i];
			var testChecked = document.getElementById(map).ariaChecked;
			// console.log(map);
			// console.log(testChecked);
			// console.log(typeof testChecked);
			// console.log(list[i]);
			// console.log(typeof list[i]);
			
			if (testChecked == "true") {
				tempBoolean = true;
			} else {
				tempBoolean = false;
			}
			
			if (tempBoolean != list[i]) {
				document.getElementById(map).click();
			}
		}
			
	});
	
	// var remove = document.getElementsByClassName("btn btn-secondary margin-left-default")[0];
	// if (remove) {
		// remove.click();
	// }
}
setColumns();