//declare objects
var numSquares = 6;
var colors = generateRandomColors(numSquares);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.querySelector("#rgbColor");
var messageDisplay= document.querySelector("#message");
var h1= document.querySelector('h1');
var resetButton = document.querySelector('#reset')
var easyBtn = document.querySelector("easyBTN")
var hardBtn = document.querySelector("hardBtn")

//functionality of easy mode button
easyBtn.addEventListener('click', function() {
	easyBtn.classList.add('selected')
	hardBtn.classList.remove('selected')
	numSquares = 3;
	colors = generateRandomColors(numSquares)
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	for(var i=0; i< squares.length; i++)
	{
		if(colors[i]) {
			squares[i].style.background = colors[i];
		}
		else {
			squares[i].style.display = 'none';
		}
	}
});

//functionality of hard mode button
hardBtn.addEventListener('click', function() {
	hardBtn.classList.add('selected');
	easyBtn.classList.remove('selected');
	numSquares = 6;
	colors = generateRandomColors(numSquares);
	pickedColor = pickColor();
	colorDisplay.textContent = pickedColor;
	messageDisplay.textContent = '';
	for(var i=0; i< squares.length;i++) {
		squares[i].style.background = colors[i];
		squares[i].style.display = 'block';
	}
});

//reset button
resetButton.addEventListener('click', function() {
	colors = generateRandomColors(numSquares); //generate all new colors
	pickedColor = pickedColor(); //pick random color
	colorDisplay.textContent = pickedColor //change background to picked color
	this.textContent = 'New Colors';

	//change colors of all the squares
	for(var i=0; i< squares.length;i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = '#e91e63';
	messageDisplay.textContent = '';
})

colorDisplay.textContent = pickedColor;

//original layout 
for(var i=0;  i< squares.length; i++) {
	squares[i].style.background = colors[i]; //add initial colors
	squares[i].addEventListener('click', function(){
		var clickedColor = this.style.background;
		if(clickedColor == pickedColor) {
			messageDisplay.textContent = 'correct';
			resetButton.textContent = 'Play Again';
			changeColors(clickedColor);
			h1.style.background = clickedColor;
		}
		else {
			this.style.background =  '#e91e63';
			messageDisplay.textContent = "try again";
		}
	});
}

//function for changing color of all the squares upon choosing correct choice
function changeColors() {
	for(var i=0; i< colors.length; i++) {
		squares[i].display.background = color;
	}
}

//function for randomly picking a color
function pickColor() {
	var random = Math.floor(Math.random() * colors.length)
	return colors[random];
}

//function for generating random colors
function generateRandomColors(num) {
	var arr = []
	for(var i=0; i< num; i++) {
		arr.push(randomColor());
	}
	return arr;
}

//function for randomyl generating a color for each r,g,b value
function randomColor() {
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", "+ g + ", "+ b + ")";
}

