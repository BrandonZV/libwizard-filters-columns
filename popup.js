function injectTheScript_filters() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		chrome.scripting.executeScript(tabs[0].id, {file: "set_filters.js"});
    });
}

function injectTheScript_columns() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		
		chrome.scripting.executeScript(tabs[0].id, {file: "set_columns.js"});
    });
}

// async function getCurrentTab() {
	// let queryOptions = { active: true, currentWindow: true };
	// let [tab] = await chrome.tabs.query(queryOptions);
	// return tab;
// }

// function load(){
	// window.addEventListener('load', function () {
		// injectTheScript();
	// });
// }

function linkLibWizard() {
    chrome.tabs.create({
      url: 'https://dcccd.libwizard.com/forms/reports/1f6ee9b57ba80b87122a49a7ac56273d'
    });
	//let tab = getCurrentTab();
	
	//chrome.scripting.executeScript(tab[0].id, {code: "load"});
	
}

// var test = {a:1, b:'c'};

// chrome.storage.local.set({test});

document.getElementById('filters').addEventListener('click', injectTheScript_filters);

document.getElementById('goLibWizard').addEventListener('click', linkLibWizard);

document.getElementById('columns').addEventListener('click', injectTheScript_columns);
