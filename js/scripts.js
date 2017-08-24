function drawTree(row) {
	for (var i = 1; i <= row; i++) {
		var star = '';
		for (var j = 0; j < i; j++) {
			star += '*';
		}
		console.log(star);
	}
}

drawTree(10);