// 0. use console.log to check the file has been successfully linked to html
//open your terminal to verify it's successfully printed
console.log("hello");

//1. use query selector to target various elements
var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');




/* Looping through images */
  var newImage = document.createElement('img');
  newImage.setAttribute('src', xxx);
  thumbBar.appendChild(newImage);


/* Wiring up the Darken/Lighten button */
// 1. bind onclick html event to the button html element
// 2. inside the onclick function, create a new variable and get btn's class attribute
// 3. create an empty if/else structure
// 4. set condition for if: if button's class is equal to string dark
// 5. set response one inside the if clause: change image's background color half transparent
// 6. set response two inside the if clause: change button value to ligten
// 7. set response three inside the if clause: change button attribute to light
// 8. repeat step 5, 6, 7 for response inside the else clause, with opposite result
//tip: if need further guidance, google "js change button text" and try to click code snippet example sites like jsfiddle or stackoverflow
