function injectTheScript_filters() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		chrome.scripting.executeScript(
		{
			target: {tabId: tabs[0].id},
			files: ["set_filters.js"],
		},
		() => { });
    });
}

function injectTheScript_columns() {
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        //and inject the script in it
		
		chrome.scripting.executeScript(
		{
			target: {tabId: tabs[0].id},
			files: ["set_columns.js"],
		},
		() => { });
    });
}

// function injectTheScript_refresh() {
    // chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
        // query the active tab, which will be only one tab
        // and inject the script in it
		
		// chrome.scripting.executeScript(
		// {
			// target: {tabId: tabs[0].id},
			// files: ["refresh.js"],
		// },
		// () => { });
    // });
// }

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

// document.getElementById('refresh').addEventListener('click', injectTheScript_refresh);

// chrome.storage.local.get("autoApplyColumns", function(obj) {
	// console.log(obj["autoApplyColumns"]);
		// if (obj["autoApplyColumns"] == true) {
			// chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
			  // if (changeInfo.status == 'complete' && tab.active) {

				// injectTheScript_columns();

			  // }
			// })
		// }
	// });
