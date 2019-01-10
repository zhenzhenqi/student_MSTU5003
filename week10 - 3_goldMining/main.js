// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var background = new Image();
background.src = "images/spiritedAway.jpg";

var mouseX = width/2;
var mouseY = height*0.2;

function moveGhost(e){
    mouseX = e.clientX;
    mouseY = e.clientY;
}
// function to generate random number
function random(min,max) {
  var num = Math.floor(Math.random()*(max-min)) + min;
  return num;
}

// define Ball constructor
function Gold() {
  this.x = random(0, width);
  this.y = random(0, width);
  this.velX = random(-3, 3);
  this.velY = random(-3, 3);
  var img = new Image();
  img.src = 'images/potOfGold.png';
  this.img = img;
  this.sizeX = img.naturalWidth*0.8;
  this.sizeY = img.naturalHeight*0.8;
}

// define ball draw method
Gold.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
};

Gold.prototype.reset = function() {
    this.x = random(this.sizeX, width-this.sizeX);
    this.y = random(this.sizeY, height-this.sizeY);
};

Gold.prototype.update = function() {
  if((this.x + this.sizeX) >= width) {
    this.x = this.sizeX;
  }

  if((this.x - this.sizeX) <= 0) {
    this.x = width-this.sizeX;
  }

  if((this.y + this.sizeY) >= height) {
    this.y = this.sizeY;
  }

  if((this.y - this.sizeY) <= 0) {
    this.y = height-this.sizeY;
  }

  this.x += random(-10, 10);
  this.y += random(-10, 10);
};



function Ghost() {
  var img = new Image();
  img.src = 'images/ghost.png';
  this.img = img;
  this.sizeX = img.naturalWidth*0.8;
  this.sizeY = img.naturalHeight*0.8;
  this.x = mouseX-this.sizeX;
  this.y = mouseY-this.sizeY;
}

Ghost.prototype.draw = function() {
  ctx.drawImage(this.img, this.x, this.y, this.sizeX, this.sizeY);
};


Ghost.prototype.collide = function( _target) {
      var target = _target;
      var dx = target.x - this.x;
      var dy = target.y - this.y;

      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.sizeX/2 + target.sizeX/2) {
        target.reset();
      }
}

Ghost.prototype.update = function(){
    var dx = mouseX - (this.x+this.sizeX/2);
    var dy = mouseY - (this.y+this.sizeY/2);
    console.log(mouseX);

    this.x += dx*0.01;
    this.y += dy*0.01;
}

var myGold = new Gold();
var myGhost = new Ghost();

// define loop that keeps drawing the scene constantly
function loop() {
    ctx.drawImage(background,0,0);

    myGold.draw();
    myGold.update();

    myGhost.draw();
    myGhost.update();
    myGhost.collide(myGold);
    //console.log(myGhost.x);
  //call for a new animation frame to be drawn on the screen
  requestAnimationFrame(loop);
}

loop();
