///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////Variables///////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
var a = 5;
var b = 4;
var sum = a + b;
var negInteger = -3.14159265359;
var escQuote = "Quotes can also be \"escaped\".";
var theSunIsWarm = true;
var emptyInside = null;
var justAnotherVariable;
// console.log(typeof insertVariableName);


var a = 5;
var b = 5;
var theNumbersMatch

if ( a == b ) {
    theNumbersMatch = true;
} else {
    theNumbersMatch = false;
}
//console.log(theNumbersMatch);


var pens;
pens = ["red", "blue", "green", "orange"];

//console.log("Before: ", pens);

// PROPERTIES:
// Get a property of an object by name:
console.log("Array length: ", pens.length);

// METHODS:
// Reverse the array:
pens.reverse();

// Remove the first value of the array:
pens.shift();

// Add comma-separated list of values to the front of the array:
pens.unshift("purple", "black");

// Remove the last value of the array:
pens.pop();

// Add comma-separated list of values to the end of the array:
pens.push("pink", "prussian blue");

// Find the specified position (pos) and remove n number of items from the array. Arguments: pens.splice(pos,n):
// pens.splice(pos, n) // Starts at the seccond item and removes two items.

console.log("After: ", pens);

// Create a copy of an array. Typically assigned to a new variable:
var newPens = pens.slice();
console.log("New pens: ", newPens);

// Return the first element that matches the search parameter after the specified index position. Defaults to index position 0. Arguments: pens.indexOf(search, index):
var result = pens.indexOf(search, index);
console.log("The search result index is: ", result);

// Return the items in an array as a comma separated string. The separator argument can be used to change the comma to something else. Arguments: pens.join(separator):
var arrayString = pens.join(separator);
console.log("String from array: ", arrayString);

// MDN documentation for Array:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array




///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////functions///////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
// Regular function, called explicitly by name:
function multiply() {
    var result = 3 * 4;
    console.log("3 multiplied by 4 is ", result);
}
multiply();

// Anonymous function stored in variable.
// Invoked by calling the variable as a function:
var divided = function() {
    var result = 3 / 4;
    console.log("3 divided by 4 is ", result);
}
divided();

// Immediately Invoked Function Expression.
// Runs as soon as the browser finds it:
(function() {
    var result = 12 / 0.75;
    console.log("12 divided by 0.75 is ", result);
}())


//passing parameters into functions
function myFunction(x, y) {
    if (y === undefined) {
        y = 0;
    }
    return x * y;
}


function findBiggestFraction() {
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var a = 3/4;
var b = 5/7;

findBiggestFraction();

function findBiggestFraction(a,b) {
  //JavaScript also contains a conditional operator that assigns a value to a variable based on some condition.
    a>b ? console.log("a: ", a) : console.log("b: ", b);
}

var firstFraction = 3/4;
var secondFraction = 5/7;

findBiggestFraction(firstFraction,secondFraction);


function findBiggestFraction(a,b) {
    var result;
    a>b ? result = ["firstFraction", a] : result = ["secondFraction", b];
    return result;
}

var firstFraction = 3/4;
var secondFraction = 5/7;

var fractionResult = findBiggestFraction(firstFraction,secondFraction);

console.log("First fraction result: ", firstFraction);
console.log("Second fraction result: ", secondFraction);
console.log("Fraction " + fractionResult[0] + " with a value of " + fractionResult[1] + " is the biggest!");





///////////////////////////////////////////////
///////////////////////////////////////////////
///////////////////objects/////////////////////
///////////////////////////////////////////////
///////////////////////////////////////////////
var course = new Object();

var course = {
    title: "Interactive Media",
    instructor: "Jin Kuwata",
    level: 1,
    published: true,
    views: 0,
    updateViews: function() {
        return ++course.views;
    }
}
console.log(course);

function doSomeMath() {
	var a = 5;
	var b = 4;
	var sum = a + b;

	return sum;
}

var theResult = doSomeMath();
console.log("The result: ", theResult);
