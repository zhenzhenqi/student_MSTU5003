/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////Add New DOM element///////////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

const FEATURED = document.querySelector(".featured-image");
const THEIMAGE = FEATURED.querySelector("img");

var altText = THEIMAGE.getAttribute("alt");
var captionElement = document.createElement("figcaption");
var captionText = document.createTextNode(altText);
captionElement.appendChild(captionText);

console.log(captionElement);

FEATURED.appendChild(captionElement);
THEIMAGE.setAttribute("alt", "");

/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////
///////////////////Add inline css to element/////////////////////
/////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////

//look up inline style
document.querySelector(".cta a").style

document.querySelector(".cta a").style.color = "green";

document.querySelector(".cta a").style.backgroundColor= "blue";

document.querySelector(".cta a").style.cssText = "padding: 1em; color: white; background-color: red;"

document.querySelector(".cta a").setAttribute("style", "padding: 2em");

document.querySelector(".cta a").setAttribute("style", "padding: 2em; color: green; background-color: orange;");
//Always target class. If fails, then try inline CSS
