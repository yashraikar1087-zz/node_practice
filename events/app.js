var Emitter = require("./emitter");

var emtr = new Emitter();

emtr.on("greet", function() {
  console.log("somewehere some said hellog");
});

emtr.on("greet", function() {
  console.log("A Greeting occured");
});

console.log("hello");
emtr.emit("greet");
