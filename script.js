// Your JS goes here

//gradient

function checkerBoard() {
	// get mainDiv with id 'main'
	var main = document.getElementById("div");
	if(main) {
		div.innerHTML = "";
	} else {
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
				var color = "rgb(255," + (j%2 ? 255 : 0) + ","+ (i*28) + ")";
				console.log(color);
				div.style.backgroundColor = color;
				mainDiv.appendChild(div);
			}
			var clearDiv = document.createElement("div");
			clearDiv.style.clear = "both";
	 		mainDiv.appendChild(clearDiv);
		}
	}
}

checkerBoard();


function flashing() {
	randInterval = window.setInterval(checkerBoard, 2000);
}

flashing();
