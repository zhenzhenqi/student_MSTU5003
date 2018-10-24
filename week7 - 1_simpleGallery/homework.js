console.log("hello");

document.onclick=function(e){
  console.log(e.clientX);
};



var displayedImage = document.querySelector('.displayed-img');
//1.1:
//console.log(displayedImage);
//1.2:
//google html element img
//1.3:
//console.log("img property: "+displayedImage.src);

var thumbBar = document.querySelector('.thumb-bar');
var btn = document.querySelector('button');
var overlay = document.querySelector('.overlay');


/* Looping through images */
for(var i = 1; i <= 5; i++) {
  var newImage = document.createElement('img');
  newImage.setAttribute('src', 'images/pic' + i + '.jpg');
  thumbBar.appendChild(newImage);

  newImage.onclick = function(e) {
    //2.1
    //console.log("e :"+e);
    //2.2
    //google html event object
    //2.3
    //console.log("e.timestamp :"+e.timeStamp);
    //2.3
    //console.log(e.target);

    var imgSrc = e.target.getAttribute('src');
    displayImage(imgSrc);
  }
}

function displayImage(imgSrc) {
  displayedImage.setAttribute('src', imgSrc);
}


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
