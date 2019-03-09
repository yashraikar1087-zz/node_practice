var a = 1;
var b = 2;
var c = a + b;

console.log(c);

//function statement
function greet() {
  console.log("hi");
}
//function are first class
greet();

function logGreeting(fn) {
  fn();
}

logGreeting(greet);

//function expression
