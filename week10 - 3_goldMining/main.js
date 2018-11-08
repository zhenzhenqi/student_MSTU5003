// setup canvas
var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');

var width = canvas.width = window.innerWidth;
var height = canvas.height = window.innerHeight;

var background = new Image();
background.src = "images/spiritedAway.jpg";

background.onload = function(){
    ctx.drawImage(background,0,0);
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
  this.velX = 10;
  this.velY = 10;
  var img = new Image();
  img.src = 'images/potOfGold.png';
  this.img = img;

}

// define ball draw method
Gold.prototype.draw = function() {
  ctx.drawImage(this.img,10,10);
};

Gold.prototype.reset = function() {
    this.x = random(0, width);
    this.y = random(0, height);
};

Gold.prototype.update = function() {
  if((this.x + this.size) >= width) {
    this.velX = -(this.velX);
  }

  if((this.x - this.size) <= 0) {
    this.velX = -(this.velX);
  }

  if((this.y + this.size) >= height) {
    this.velY = -(this.velY);
  }

  if((this.y - this.size) <= 0) {
    this.velY = -(this.velY);
  }

  this.x += this.velX;
  this.y += this.velY;
};

// define ball collision detection

Gold.prototype.collisionDetect = function(_ghost) {
      var ghost = _ghost;
      var dx = this.x - balls[j].x;
      var dy = this.y - balls[j].y;
      var distance = Math.sqrt(dx * dx + dy * dy);

      if (distance < this.size + ghost.size) {
        this.reset();
      }
}


// define array to store balls

var myGold = new Gold();

// define loop that keeps drawing the scene constantly
function loop() {
    myGold.draw();
    myGold.update();
    //myGol.collisionDetect();
  //call for a new animation frame to be drawn on the screen
  requestAnimationFrame(loop);
}


loop();
