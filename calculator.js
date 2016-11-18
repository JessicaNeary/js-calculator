var stream = '';

function calculate(){
  var result = eval(stream);
  stream = '';
  document.getElementById('display').innerHTML = result;
  console.log(result);
}

function c(){
  stream = "";
  document.getElementById('display').innerHTML = stream;
}

function number(a){
    stream += ''+a;
    document.getElementById('display').innerHTML = stream;
}

var times = function(){
  stream += '*';
    document.getElementById('display').innerHTML = stream;
}

var divide = function(){
  stream += '/';
    document.getElementById('display').innerHTML = stream;
}

var add = function(){
  stream += '+';
    document.getElementById('display').innerHTML = stream;
}

var subtract = function(){
  stream += '-';
    document.getElementById('display').innerHTML = stream;
}

function isNumber(a){
  if(a == NaN){
    return false;
  }
  else{return true;}
}

//When button is pushed
  //if number
    //add number to stream
  //if operation
    //add function to stream
  //if enter
    //run functions
