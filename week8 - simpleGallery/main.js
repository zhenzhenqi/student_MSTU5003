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


/* Looping through 5 images */
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
btn.onclick = function() {
  var btnClass = btn.getAttribute('class');
  if(btnClass === 'dark') {
    btn.setAttribute('class','light');
    btn.textContent = 'Lighten';
    overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
  } else {
    btn.setAttribute('class','dark');
    btn.textContent = 'Darken';
    overlay.style.backgroundColor = 'rgba(0,0,0,0)';
  }
}
