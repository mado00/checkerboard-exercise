// Your JS goes here

function checkerBoard() {
	// creating div
	var mainDiv = document.createElement("div");
	document.body.appendChild(mainDiv);
	for(var i = 0; i < 9; i++) {
		for(var j = 0; j < 9; j++) {
			var div = document.createElement("div");
			div.style.width = "11.1%";
			div.style.paddingBottom = "11.1%";
			div.style.float = "left";
			// when even number: red, odd number : black
			//div.style.backgroundColor = (j+i) % 2 ? "red" : "black";
			//random color
			div.style.backgroundColor = Math.floor(Math.random()*256).toString(16);
			mainDiv.appendChild(div);
		}
		var clearDiv = document.createElement("div");
		clearDiv.style.clear = "both";
		mainDiv.appendChild(clearDiv);
	}
}
checkerBoard();