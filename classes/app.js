"use strict";

function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

Person.prototype.greet = function() {
  console.log("hello, " + this.firstname + " " + this.lastname);
};
var john = new Person("john", "doe");
