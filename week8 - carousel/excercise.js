// review of functions

// simple function that do a bunch of things
function myRed(){
	var red = "red";
}

//prepare to use the result of this function as the starting point for the next
function myRedReturn(){
	var red = "red";
	return red;
}
var prepingForTheNextThing = myRedReturn;

//a function can do something by taking into account of
function myColorReturn( _myColor){
	var myColor = _myColor;
	return myColor;
}

var person = {};
console.log(person);

var person = {
  name: ['Bob', 'Smith'],
  age: 32,
  gender: 'male',
  interests: ['music', 'skiing'],
  bio: function() {
    alert(this.name[0] + ' ' + this.name[1] + ' is ' + this.age + ' years old. He likes ' + this.interests[0] + ' and ' + this.interests[1] + '.');
  },
  greeting: function() {
    alert('Hi! I\'m ' + this.name[0] + '.');
  }
};

//define a person
function createNewPerson(name) {
  var obj = {};
  obj.name = name;
  obj.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
  return obj;
}

// var salva = createNewPerson('Salva');
// console.log(salva.name);
// console.log(salva.greeting());


//define a person the lazy way
function Person(name) {
  this.name = name;
  this.greeting = function() {
    alert('Hi! I\'m ' + this.name + '.');
  };
}
var person1 = new Person('Bob');
var person2 = new Person('Sarah');

// person1.name
// person1.greeting()
// person2.name
// person2.greeting()

//object prototype is automatically inherited when creating custom objects
var myString = 'This is my string.';
