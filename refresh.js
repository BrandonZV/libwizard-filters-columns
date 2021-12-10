function refresh() {
	setInterval( function() {
		var button = document.getElementsByClassName("btn btn-secondary margin30 btn-sm");
		if (button.length == 1) {
			document.getElementsByClassName("btn btn-secondary margin30 btn-sm")[0].click();
		}
	}, 10000);
	
	
}

refresh();