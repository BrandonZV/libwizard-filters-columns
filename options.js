function saveConfig(){
	var temp = document.getElementById("college");
	var collegeOption = temp.value;
	chrome.storage.local.set({"collegeOption": collegeOption});
	
	var checklist = [
						'checkbox-select',
						'checkbox-submitted',
						'checkbox-location',
						'checkbox-arrival-date',
						'checkbox-arrival-date-mf',
						'checkbox-arrival-date-ms',
						'checkbox-arrival-time-mt',
						'checkbox-arrival-time-f',
						'checkbox-arrival-time-s',
						'checkbox-fname',
						'checkbox-lname',
						'checkbox-studentid',
						'checkbox-college-email',
						'checkbox-alt-email',
						'checkbox-lecture-lab',
						'checkbox-phone-number',
						'checkbox-paper-comp-test',
						'checkbox-course-name-number',
						'checkbox-section-number',
						'checkbox-instructor',
						'checkbox-test-number',
						'checkbox-staff-queue-number',
						'checkbox-staff-test-number',
						'checkbox-staff-seat-number',
						'checkbox-staff-scratch-paper',
						'checkbox-staff-graph-paper',
						'checkbox-staff-calculator',
						'checkbox-staff-permitted-items',
						'checkbox-staff-start-time',
						'checkbox-staff-end-time',
						'checkbox-staff-session-ended',
						'checkbox-academic-dishonesty',
						'checkbox-additional-comments'
					];
	
	var checklist2 = {};
	
	for (i in checklist) {
		// console.log(checklist[i]);
		var tester = document.getElementById(checklist[0]).checked;
		
		// console.log(tester);
		checklist2[checklist[i]] = document.getElementById(checklist[i]).checked;
		
	}
	// console.log(checklist2);
	
	chrome.storage.local.set({checklist2});

	// var testl = ['a','b','c'];

	// chrome.storage.local.get("checkbox-select", function(obj) {
		// console.log(obj)
	// });
	
	// var autoColumns = document.getElementById("auto-apply-columns").checked;
	// chrome.storage.local.set({"autoApplyColumns": autoColumns});
	
}
function constructor(){
	// console.log("constructor");
	
	var checklist5 = ['checkbox-select', 'checkbox-submitted', 'checkbox-location', 'checkbox-arrival',
						'checkbox-fname', 'checkbox-lname', 'checkbox-studentid', 'checkbox-college-email',
						'checkbox-alt-email', 'checkbox-paper-comp-test', 'checkbox-course-name-number',
						'checkbox-section-number', 'checkbox-instructor', 'checkbox-test-number',
						'checkbox-lecture-lab', 'checkbox-staff-queue-number', 'checkbox-staff-test-number',
						'checkbox-staff-seat-number', 'checkbox-staff-scratch-paper', 'checkbox-staff-graph-paper',
						'checkbox-staff-calculator', 'checkbox-staff-permitted-items', 'checkbox-staff-start-time',
						'checkbox-staff-end-time', 'checkbox-staff-session-ended', 'checkbox-academic-dishonesty',
						'checkbox-additional-comments'
					];
	
	// console.log(checklist5);
	var checklist2 = '';
	chrome.storage.local.get({checklist2}, function(obj) {
		// console.log(obj);
		// console.log(obj.checklist2);
		var list = obj.checklist2;
		// console.log(list);
		for (var i in list) {
			// console.log(i);
			// console.log(list[i]);
			document.getElementById(i).checked = list[i];
		}
			
	});
	
	chrome.storage.local.get("collegeOption", function(obj) {
		// console.log(obj["collegeOption"]);
		document.getElementById("college").value = obj["collegeOption"];
	});
	
	// chrome.storage.local.get("autoApplyColumns", function(obj) {
		// console.log(obj["collegeOption"]);
		// document.getElementById("auto-apply-columns").checked = obj["autoApplyColumns"];
	// });
	

	 // TODO make this spretty, I'm just not skilled enough
		// for (let j = 0; j <checklist5.length; j++) {
			// var t = checklist5[j];
			// console.log('t is: ' + t);
			// chrome.storage.local.get({[t]: true}, function(obj) {
				// console.log(j);
				// console.log(t);
				// console.log(obj);
				// document.getElementById(object.keys(obj)[0]).checked = obj[object.keys(obj)[0]];
			// });
		// }

	//chrome.storage.local.get({checklist5}, function(obj) {
	//	console.log('inside get');
	//	console.log(obj);
	//	for (var i in obj) {
	//		console.log(i);
	//		console.log(obj[i]);
	//		console.log(checklist5[i]);
	//		document.getElementById(checklist5[i]).checked = obj[i];
	//	}
	//});
}

document.getElementById('saveSettings').addEventListener('click', saveConfig);
constructor();