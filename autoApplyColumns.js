function checkLoad() {
	console.log('checkLoad');
	var a = !!document.getElementsByName('select')[0];
	if (a) {
		setColumns();
	} else {
		setTimeout(checkLoad, 1000);
	}
}

function setColumns() {
	//var remove = document.getElementById("currentFiltersLabel").getElementsByClassName("btn empty")[0];
	//remove.click();
	
	console.log("Inside Function");
	
	var mappingId = {
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
	
	var mappingName = {
		'checkbox-select': 'select',
		'checkbox-submitted': 'submitted',
		'checkbox-location': '3894175',
		'checkbox-arrival-date': '3916844',
		'checkbox-arrival-date-mf': '4157653',
		'checkbox-arrival-date-ms': '4157655',
		'checkbox-arrival-time-mt': '4157802',
		'checkbox-arrival-time-f': '4157804',
		'checkbox-arrival-time-s': '4157818',
		'checkbox-fname': '3894171',
		'checkbox-lname': '3894172',
		'checkbox-studentid': '3894234',
		'checkbox-college-email': '3894173',
		'checkbox-alt-email': '3894242',
		'checkbox-lecture-lab': '3898088',
		'checkbox-phone-number': '4162718',
		'checkbox-paper-comp-test': '3930754',
		'checkbox-course-name-number': '3894174',
		'checkbox-section-number': '3920767',
		'checkbox-instructor': '3894177',
		'checkbox-test-number': '3898085',
		'checkbox-staff-queue-number': '3917156',
		'checkbox-staff-test-number': '3902617',
		'checkbox-staff-seat-number': '3902618',
		'checkbox-staff-scratch-paper': '3902619',
		'checkbox-staff-graph-paper': '3902620',
		'checkbox-staff-calculator': '3902621',
		'checkbox-staff-permitted-items': '3902622',
		'checkbox-staff-start-time': '3902624',
		'checkbox-staff-end-time': '3902625',
		'checkbox-staff-session-ended': '3902626',
		'checkbox-academic-dishonesty': '3917251',
		'checkbox-additional-comments': '3917254'
	}
	
	//document.getElementById("mat-checkbox-2-input").ariaChecked = false;
	// var test = document.getElementById("mat-checkbox-2-input").ariaChecked;
	// console.log(test);
	// document.getElementById("mat-checkbox-2-input").click();
	
	var checklist2 = '';
	chrome.storage.local.get({checklist2}, function(obj) {
		var list = obj.checklist2;
		for (var i in list) {
			// console.log(i);
			var map = mappingName[i];
			var tag = document.getElementsByTagName("mat-checkbox");
			//console.log(tag);
			console.log(map);
			var tagName = document.getElementsByName(map)[0];
			// console.log(tagName);
			if (tagName == null) {
				console.log('NULL value');
				continue;
			}
			var testChecked = tagName.ariaChecked;
			//var testChecked = document.getElementById(map).ariaChecked;
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
				document.getElementsByName(map)[0].click();
			}
		}
			
	});
	
	// var remove = document.getElementsByClassName("btn btn-secondary margin-left-default")[0];
	// if (remove) {
		// remove.click();
	// }
}

// chrome.storage.local.get("autoApplyColumns", function(obj) {
	// console.log(obj["autoApplyColumns"]);
	// if (obj["autoApplyColumns"] == true) {
		// setTimeout(3000);
		// // if ( !document.getElementsByName("select").ariaChecked ) {
			// // console.log( "It worked.");
		// // }
		// console.log("True and injected");
		// setColumns();
		// //setColumns();
		// //document.addEventListener("DOMContentLoaded", setColumns());
	// }
	// });

chrome.storage.local.get("autoApplyColumns", function(obj) {
	console.log(obj["autoApplyColumns"]);
	if (obj["autoApplyColumns"] == true) {
		window.addEventListener('popstate', (event) => {
			console.log('popstate triggered');
			checkLoad();
		});
		setTimeout(checkLoad, 1000);
		// document.addEventListener("load", setColumns());
	}
	});
	
// https://stackoverflow.com/questions/53939205/how-to-avoid-extension-context-invalidated-errors-when-messaging-after-an-exte