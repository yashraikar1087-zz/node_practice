var greet1 = require("./greet1");
greet1();

var greet = require("./greet3");
greet.greet();

var greet4 = require("./greet4");
var grtr = new greet4();
grtr.greet();

var greet2 = require("./greet2").greet;
greet2();

var greet5 = require("./greet5");
greet5.greet();
