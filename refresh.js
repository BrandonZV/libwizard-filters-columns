function refresh(minutes) {
	console.log(minutes);
	setInterval( function() {
		if (!!document.getElementsByClassName("btn btn-secondary margin30 btn-sm")[0]) {
			document.getElementsByClassName("btn btn-secondary margin30 btn-sm")[0].click();
		}
	}, minutes);

}
chrome.storage.local.get("refreshPage", function(obj) {
	// console.log(obj["autoApplyColumns"]);
	if (obj["refreshPage"] == true) {
		chrome.storage.local.get("quantity", function(obj) {
			var minutes = obj["quantity"];
			console.log(minutes);
			minutes = minutes * 60000
			console.log(minutes);
			refresh(minutes);
		});
	}
});