var stream = '';
var result = 0;

function calculate(){
  result = eval(stream);
  display(result);
	stream = '';
}

function decimal(){
	stream += '.';
  display(stream);
}

function c(){
  stream = "";
  display(stream);
}

function number(a){
  stream += ''+a;
  display(stream);
}

var times = function(){
	checkStream();
  stream += '*';
  display(stream);
}

var divide = function(){
	checkStream();
  stream += '/';
  display(stream);
}

var add = function(){
	checkStream();
  stream += '+';
  display(stream);
}

var subtract = function(){
	checkStream();
  stream += '-';
	display(stream);
}

function display(x){
	document.getElementById('display').innerHTML = x;
}

function checkStream(){
	if(stream === ''){
		stream = result;
	}
}
