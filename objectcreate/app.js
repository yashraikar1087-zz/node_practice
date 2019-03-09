var person = {
  firstname: "",
  lastname: "",
  greet: function() {
    return this.firstname + " " + this.lastname;
  }
};

var john = Object.create(person);
john.firstname = "John";
john.lastname = "doe";

var test = Object.create(person);
test.firstname = "John";
test.lastname = "doe";

console.log(john.greet());

console.log(test.greet());
