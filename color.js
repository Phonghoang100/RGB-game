var numSquares = 6;
var colors= generateRandomColors(numSquares);
var h1 = document.querySelector("h1");
var squares= document.querySelectorAll(".square");
var pickedColor= pickColor();
var colorDisplay= document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var resetButton = document.querySelector("#reset");
var easyBtn = document.querySelector("#easyBtn");
var hardBtn = document.querySelector("#hardBtn");
var modeButton = document.querySelectorAll(".mode");

// for (var i= 0; i < modeButton.length; i++) {
// 	modeButton[i].addEventListener("click", function(){
// 		modeButton[0].classList.remove("selected");
// 		modeButton[1].classList.remove("selected");
// 		this.classList.add("selected");
// 		this.textContent ==="Easy" ? numSquares= 3: numSquares = 6;
// 		reset();
// 	});
// 	}

// 	function reset(){
// 		colors = generateRandomColors(numSquares);
// 	// pick a new random color
// 	pickedColor = pickColor();
// 	// change colorDisplay to match picked Color
// 	colorDisplay.textContent = pickedColor;
// 	resetButton.textContent = "New Color";
// 	messageDisplay.textContent = "";
// 	// change colors to squares
// 	for(var i = 0; i < squares.length; i++){
// 			if(color[i]){
// 				squares[i].style.background = "block";
// 				squares[i].style.backgroundColor = colors[i];
// 			} else {
// 				squares[i].style.display = "none";
// 			}
// 	}	
// 	h1.style.background ="steelblue"; 
// 	}

easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected");
	hardBtn.classList.remove("selected");
	numSquares = 3;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
		if (colors [i]){
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = "none";
		}
	}
})

hardBtn.addEventListener("click", function(){
	easyBtn.classList.remove("selected");
	hardBtn.classList.add("selected");
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	for (var i = 0; i < squares.length; i++) {
	
			squares[i].style.background = colors[i];
	
			squares[i].style.display = "block";
		}
	}
)


resetButton.addEventListener("click", function(){
	// generate new colors
	colors = generateRandomColors(numSquares);
	// pick a new random color
	pickedColor = pickColor();
	// change colorDisplay to match picked Color
	colorDisplay.textContent = pickedColor;
	this.textContent = "New Color";
	messageDisplay.textContent = "";
	// change colors to squares
	for (var i = 0; i < squares.length; i++){
		squares[i].style.backgroundColor= colors[i];
	}
	h1.style.background ="steelblue"; 

})

colorDisplay.textContent= pickedColor;
for (var i = 0; i < squares.length; i++) {
	squares[i].style.backgroundColor= colors[i];
	// add click listerns to square
	squares[i].addEventListener("click", function(){
		// grb color of clicked square
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor===pickedColor){
			messageDisplay.textContent="Correct";
			resetButton.textContent = "Play Again";
			changeColors(clickedColor);
			h1.style.background=clickedColor;

		}
		else{
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	})
}

function changeColors(color){
	// loop through all squares 
for (var i = 0; i < squares.length; i++) {
	squares[i].style.background= color;
	}
}

function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColors(num){
	// make an array
	var arr = []
	// repear num times
	for (var i=0; i<num; i++){
		// get random color and push into arr
		arr.push(randomColor())
	}
	// return that array
	return arr;

}

function randomColor(){
	// pick a "red" from 0-255
	var r = Math.floor(Math.random()*256); 
	// pick a "green" from 0-255
	var g = Math.floor(Math.random()*256); 
	// pick a "blue" from 0-255
	var b = Math.floor(Math.random()*256); 
	return "rgb(" + r + ", " + g + ", " + b + ")";
}