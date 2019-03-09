function Person(firstname, lastname) {
  this.firstname = firstname;
  this.lastname = lastname;
}

var john = new Person("John", "Doe");

console.log(john.firstname);

var name = "test";

function changename() {
  name = "changes";
  console.log(name);
}
changename();

console.log(name);

(function(lastname) {
  var firstname = "john";
  console.log(firstname);
  console.log(lastname);
})("Doe");
