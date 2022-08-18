var numofsquares = 6;
var colors = generaterandomcolors(numofsquares);

var squares = document.querySelectorAll(".square");
var pickedcolor = colorpicker();
var colordisplay = document.getElementById("colordisplay")
var messagedisplay = document.querySelector("#message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var easybtn = document.querySelector("#easybtn");
var hardbtn = document.querySelector("#hardbtn");

easybtn.addEventListener("click", function(){
	hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numofsquares = 3;
	colors = generaterandomcolors(numofsquares);
	pickedcolor = colorpicker();
	colordisplay.textContent = pickedcolor;
	for(var i=0; i<squares.length; i++){
		if(colors[i]){
			squares[i].style.background = colors[i];
		} else{
			squares[i].style.background = "none";
		}
	}
})

hardbtn.addEventListener("click", function(){
	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected"); 
	numofsquares = 6;
	colors = generaterandomcolors(numofsquares);
	pickedcolor = colorpicker();
	
	colordisplay.textContent = pickedcolor;
	console.log(squares.length)
	for(var i=0; i<squares.length; i++){
			squares[i].style.background = colors[i];
			// squares[i].style.background = "none";
	}
})

resetbutton.addEventListener("click", function(){

	colors = generaterandomcolors(numofsquares );

	console.log(colors)

	pickedcolor = colorpicker();

	colordisplay.textContent = pickedcolor;

	for(var i=0; i<squares.length; i++){
		squares[i].style.background = colors[i];
	}

	h1.style.background = "steelblue";

})

//h1.innerText = colors[colorpicker()]
colordisplay.textContent = pickedcolor;

for(var i=0; i<squares.length; i++){
	//add initinal colors to squares		
	squares[i].style.background = colors[i];

	//add click listner to squares
	squares[i].addEventListener("click", function() {
		//compare the picked color
		var clickedcolor = this.style.background;

		if(clickedcolor == pickedcolor){
			console.log("entered into right one");
			messagedisplay.textContent = "correct";
			resetbutton.textContent = "Play again?";
			changecolors(clickedcolor);
			h1.style.background = pickedcolor;

		} else{
		  	this.style.background = "#232323";
		  	messagedisplay.textContent = "try again";
		}
	});

}

function changecolors(color) {
	for(var i=0; i<squares.length; i++){
		squares[i].style.background = color;
	}
}

 
function colorpicker() {
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
} 

function generaterandomcolors(num){
	var arr = [];
	for(var i=0; i<num; i++){
		arr.push(randomcolor());
	}
	return arr;
}

function randomcolor(){
	var r = Math.floor(Math.random() * 256);
	var g = Math.floor(Math.random() * 256);
	var b = Math.floor(Math.random() * 256);

	return "rgb(" + r + ", " + g + ", " + b + ")";
}