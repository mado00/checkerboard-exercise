// Your JS goes here

// function checkerBoard() {
// 	// creating div
// 	var mainDiv = document.createElement("div");
// 	document.body.appendChild(mainDiv);
// 	for(var i = 0; i < 9; i++) {
// 		for(var j = 0; j < 9; j++) {
// 			var div = document.createElement("div");
// 			div.style.width = "11.1%";
// 			div.style.paddingBottom = "11.1%";
// 			div.style.float = "left";
// 			// when even number: red, odd number : black
// 			//div.style.backgroundColor = (j+i) % 2 ? "red" : "black";
// var canvas = document.getElementById("canvas");
// var ctx = canvas.getContext("2d");

// var gradient = ctx.createLinearGradient(0,0,200,0);
// gradient.addColorStop(0,"green");
// gradient.addColorStop(1,"white");
// ctx.fillStyle = gradient;
// ctx.fillRect(10,10,200,100)



// function changeBack()
// {
//     document.getElementsByTagName("body").style.background="-webkit-linear-gradient(top, #fff, #000)";
//     document.body.style.background="-webkit-linear-gradient(top, #fff, #000)";
// }


// 			mainDiv.appendChild(div);
// 		}
// 		var clearDiv = document.createElement("div");
// 		clearDiv.style.clear = "both";
// 		mainDiv.appendChild(clearDiv);
// 	}
// }

function checkerBoard() {
	// creating div
	var mainDiv = document.createElement("div");
	document.body.appendChild(mainDiv);
	for(var i = 0; i < 9; i++) {
		var color = "rgb(255,255," + i + ")";
		for(var j = 0; j < 9; j++) {
			var div = document.createElement("div");
			div.style.width = "11.1%";
			div.style.paddingBottom = "11.1%";
			div.style.float = "left";
			// when even number: red, odd number : black
			div.style.backgroundColor =  color;
			mainDiv.appendChild(div);
		}

	}
}

checkerBoard();
