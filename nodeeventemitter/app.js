var Emitter = require("events");
var eventConfig = require("./config").events;

var emtr = new Emitter();

emtr.on(eventConfig.GREET, function() {
  console.log("hello 1");
});

emtr.on(eventConfig.GREET, function() {
  console.log("hello 2");
});

console.log("hello");
emtr.emit("greet");
