var event = require("./event2");

var Event = new event();

Event.on("test", function() {
  console.log("here");
});

Event.on("test", function() {
  console.log("here2");
});

Event.emit("test");
