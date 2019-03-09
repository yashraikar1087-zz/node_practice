"use strict";

var EventEmitter = require("events");

class Greetr extends EventEmitter {
  constructor() {
    super();
    this.greeting = "Hello world!";
  }

  greet(data) {
    console.log(`${this.greeting} : ${data}`);
    this.emit("greet", data);
  }
}

var greeter1 = new Greetr();

greeter1.on("greet", function(data) {
  console.log("someone greeted!: " + data);
});
