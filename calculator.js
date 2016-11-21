//hold the current unsolved calculation
var stream = '';
//hold the result of the last calculation
var result = 0;

//Runs specified function and updates display
function x(y){
	y;
	display(stream);
}

//updates the display
function display(x){
	document.getElementById('display').innerHTML = x.toString().substr(0,10);
}

//Adds given operation to the stream
function operat(x){
	checkStream();
	add(x);
}

//when an operation is pressed, checks if there are any numbers in the stream, otherwise uses latest result
function checkStream(){
	if(stream === ''){
		stream = result;
	}
}

//Adds argument to the stream
function add(a){
  stream += a;
}

//clears stream
function c(){
  stream = '';
}

//calculates and displays result of calculation
function calculate(){
	result = eval(stream);
	display(result);
	c();
}
