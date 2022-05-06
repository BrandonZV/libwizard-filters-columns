function setFilters() {
	//var remove = document.getElementById("currentFiltersLabel").getElementsByClassName("btn empty")[0];
	//remove.click();
	
	var remove = document.getElementsByClassName("btn btn-secondary margin-left-default")[0];
	if (remove) {
		remove.click();
	}
	var v1 = "collegeOption";
	var collegeOption = "";
	chrome.storage.local.get({[v1]:"North Lake"}, function(obj) {
		collegeOption = obj;
		// console.log(collegeOption["collegeOption"]);
		// Set to specific College
		document.getElementById("filterOptions").value = "0: Object";
		document.getElementById("filterOptions").dispatchEvent(new Event('change'));
		document.getElementById("filterConditions").value = "equals";
		document.getElementById("filterConditions").dispatchEvent(new Event('change'));
		document.getElementById("filterValue").value = collegeOption["collegeOption"];
		document.getElementById("filterValue").dispatchEvent(new Event('change'));
		document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();
	});

	// var testl = ['a','b','c'];

	// chrome.storage.local.get(testl, function(obj) {
		// console.log(obj)
	// });

	var today = new Date();
	const currDate = today.toDateString().split(" ");
	today = currDate[1] + ' ' + currDate[2] + ', ' + currDate[3];
	// Set to todays date
	document.getElementById("filterOptions").value = "1: Object";
	document.getElementById("filterOptions").dispatchEvent(new Event('change'));
	document.getElementById("filterConditions").value = "=";
	document.getElementById("filterConditions").dispatchEvent(new Event('change'));
	document.getElementById("filterDate").value = today;
	document.getElementById("filterDate").dispatchEvent(new Event('change'));
	document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();

	// Set session not ended
	document.getElementById("filterOptions").value = "28: Object";
	document.getElementById("filterOptions").dispatchEvent(new Event('change'));
	document.getElementById("filterConditions").value = "not contains";
	document.getElementById("filterConditions").dispatchEvent(new Event('change'));
	document.getElementById("filterValue").value = "Yes";
	document.getElementById("filterValue").dispatchEvent(new Event('change'));
	document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();

	document.getElementsByTagName("mat-expansion-panel-header")[0].click();
	//document.getElementById("mat-expansion-panel-header-0").click();

	//var objSelect = document.getElementById("filterOptions");
	//setSelectedValue(objSelect, "Location");
	//var objSelect = document.getElementById("filterConditions");
	//setSelectedValue(objSelect, "equals");
	//var objSelect = document.getElementById("filterValue");
	//setSelectedValue(objSelect, "North Lake");
	//document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();

	//document.getElementById("filterOptions").selectedIndexvalue = 0;
	//document.getElementById("filterConditions").selectedIndex = 0;
	//document.getElementById("filterValue").selectedIndex = 5;
	//document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();
	
	//document.getElementById("filterOptions").value = "Student ID";
	//document.getElementById("filterConditions").value = ">";
	//document.getElementsByClassName("form-control ng-pristine ng-valid ng-touched").value = "1";
	//document.getElementsByClassName("btn btn-primary btn-block addFilter-button")[0].click();
	
	chrome.storage.local.get("fullscreen_option", function(obj) {
		if (obj["fullscreen_option"]){
			document.getElementById('report').style.width = "100%";
			if (document.getElementById('report').classList[0] == 'page-container') {
				document.getElementById('report').classList.toggle('page-container');
			}
		}
	});
}

function setSelectedValue(selectObj, valueToSet) {
    for (var i = 0; i < selectObj.options.length; i++) {
        if (selectObj.options[i].text== valueToSet) {
            selectObj.options[i].selected = true;
            return;
        }
    }
}
setFilters();