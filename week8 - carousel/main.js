//*****************************************************************************//
//*****************************************************************************//
//***************************bio background color******************************//
//*****************************************************************************//
//*****************************************************************************//
var bio = document.querySelector("#intro h1");
var body = document.getElementById("gradient");

function updateBg() {
	var r = Math.floor(Math.random()*255);
	var g = Math.floor(Math.random()*255);
	var	b = Math.floor(Math.random()*255);

	bio.style.color="rgb("+r+","+g+","+b+")"+document.bgColor;
}
setInterval(updateBg, Math.floor(Math.random()*200+60));

//*****************************************************************************//
//*****************************************************************************//
//***************************body background gradient**************************//
//*****************************************************************************//
//*****************************************************************************//

var c1_1 = 0;
var c1_2 = 0;
var c1_3 = 0;
var c2_1 = 255;
var c2_2 = 255;
var c2_3 = 255;
var color1 = 'rgb('+c1_1+','+c1_2+','+c1_3+')';
var color2 = 'rgb('+c2_1+','+c2_2+','+c2_3+')';
var style = document.createElement('style');
style.type = 'text/css';
var counter = 0;

style.innerHTML = '.cssClass'+counter+'{ background-image: linear-gradient('+color1+','+color2+'); transition: all 0.45s; }';
document.getElementsByTagName('head')[0].appendChild(style);


body.className = 'cssClass'+counter;

function swapBg(){
	counter++;

	c1_1 = Math.floor(Math.random()*255);
	c1_2 = Math.floor(Math.random()*255);
	c1_3 = Math.floor(Math.random()*255);
	c2_1 = Math.floor(Math.random()*255);
	c2_2 = Math.floor(Math.random()*255);
	c2_3 = Math.floor(Math.random()*255);

	color1 = 'rgb('+c1_1+','+c1_2+','+c1_3+')';
	color2 = 'rgb('+c2_1+','+c2_2+','+c2_3+')';

	style.innerHTML = '.cssClass'+counter+' { background-image: linear-gradient(to bottom right,'+color1+','+color2+');}';
	document.getElementsByTagName('head')[0].appendChild(style);
	body.className = 'cssClass'+counter;
}
setInterval(swapBg, 1000); //1000 milisecond is 1 second

//*****************************************************************************//
//*****************************************************************************//
//***************************carousel******************************************//
//*****************************************************************************//
//*****************************************************************************//
// Used to add a numeric id on slide creation to let us target the element later
var slideIndex = 0;
// Tells us which slide we are on
var currentSlideIndex = 0;
// An Array to hold all the slides
var slideArray = [];


// define class for creating a custom Slide object
function Slide(title, subtitle, background, link ) {
	this.title = title;
	this.subtitle = subtitle;
	this.background = background;
	this.link = link;
	// we need an id to target later using getElementById
	this.id = "slide" + slideIndex;
	// Add one to the index for the next slide number
	slideIndex++;
	// Add this Slide to our array
	slideArray.push(this);
}

// Creating our slide objects, you can make as many as you want
var walkingDead = new Slide(
	"No Love Lost",
	"July 7, The Sleepcenter",
	"https://static1.squarespace.com/static/59e53712f6576eb982bec744/59ee786ae5dd5b689c85a20b/5ae7a93c575d1f30834a22d1/1525131587863/glitchart.jpg?format=2500w",
	"http://www.amc.com/shows/the-walking-dead"
);

var bigBang = new Slide(
	"Ars Electronica",
	"Dec 3, Linz Austria",
	"https://i2.wp.com/digital-photography-school.com/wp-content/uploads/2016/12/glitch-art-photography-15.jpg?resize=750%2C500&ssl=1",
	"http://www.cbs.com/shows/big_bang_theory/"
);

var LastMan = new Slide(
	"Everything Is Going To Be Ok",
	"Dec 23, Time Square, NYC",
	"https://static1.squarespace.com/static/56e33409d210b8a4c7e973c9/t/5b3b3b49352f537595014595/1530608459041/IMG_8433.JPG",
	"http://www.fox.com/the-last-man-on-earth"
);


/*-----------------------------------------------------------------
-------------------------------------------------------------------
----------------------- build slider content ----------------------
-------------------------------------------------------------------
-----------------------------------------------------------------*/
function buildSlider(){
	// A variable to hold our HTML
	var myHTML;

	// Go through the Array and add the code to our HTML
	for(var i = 0; i < slideArray.length; i++) {
		myHTML += "<div id='" + slideArray[i].id +
		"' class='singleSlide' style='background-image:url(" + slideArray[i].background + ");'>" +
		"<div class='slideOverlay'>" +
		"<h2>" + slideArray[i].title + "</h1>" +
		"<h4>" + slideArray[i].subtitle + "</h4>" +
		"<a href='" + slideArray[i].link + "' target='_blank'>Open Link</a>" +
		"</div>" +
		"</div>";
	}

	// Print our HTML to the web page
	document.getElementById("mySlider").innerHTML = myHTML;

	// Display the first slide
	document.getElementById("slide" + currentSlideIndex).style.left = 0;
}

// Create our slider
buildSlider();


// Navigates to the previous slide in the list
function prevSlide(){
	// Figure out what the previous slide is
	var nextSlideIndex;
	// If we are at zero go to the last slide in the list
	if (currentSlideIndex === 0 ) {
		nextSlideIndex = slideArray.length - 1;
	} else {
		// Otherwise the next one is this slide minus 1
		nextSlideIndex = currentSlideIndex - 1;
	}

	// Setup the next slide and current slide for animations
	document.getElementById("slide" + nextSlideIndex).style.left = "-100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

	// Add the appropriate animation class to the slide
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInLeft");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutRight");

	// Set current slide to the new current slide
	currentSlideIndex = nextSlideIndex;
}


// Navigates to the next slide in the list
function nextSlide(){
	// Figure out what the next slide is
	var nextSlideIndex;
	// If we are at the last slide the next one is the first (zero based)
	if (currentSlideIndex === (slideArray.length - 1) ) {
		nextSlideIndex = 0;
	} else {
		// Otherwise the next slide is the current one plus 1
		nextSlideIndex = currentSlideIndex + 1;
	}

	// Setup the next slide and current slide for animations
	document.getElementById("slide" + nextSlideIndex).style.left = "100%";
	document.getElementById("slide" + currentSlideIndex).style.left = 0;

	// Add the appropriate animation class to the slide
	document.getElementById("slide" + nextSlideIndex).setAttribute("class", "singleSlide slideInRight");
	document.getElementById("slide" + currentSlideIndex).setAttribute("class", "singleSlide slideOutLeft");

	// Set current slide to the new current slide
	currentSlideIndex = nextSlideIndex;
}
