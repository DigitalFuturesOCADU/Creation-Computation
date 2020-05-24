// Global Variables
var pos = 0;
var ourObjects = [];

function setup() {
  createCanvas(500, windowHeight);
  // Create 5 Objects and add them to ourObjects list
  for (var i = 0; i < 5; i++) {
    // Give each object a random x and y postion with 100px width and height
    var x = random(width);
    var y = random(height);
    var w = 100;
    var h = 100;
    ourObjects.push(new ourObject(x, y, w, h));
  }
}

function draw() {
  background(220);
  // Draw all the objects from ourObjects list
  for (var i = 0; i < ourObjects.length; i++) {
    ourObjects[i].move(pos);
    ourObjects[i].display();
  }
}

// This runs everytime you scroll through the page
// It logs how much you have scrolled in variable "pos"
function mouseWheel() {
  pos += event.delta;
  if (pos <= 0) {
    pos = 0;
  }
  console.log(pos);
}

// This runs everytime mouse is pressed
// It creates a random new color and calls the obejcts that has been
// pressed to change its colour
function mousePressed() {
  for (var i = 0; i < ourObjects.length; i++) {
    var newColor = color(random(0, 255), random(0, 255), random(0, 255));
    ourObjects[i].clicked(newColor);
  }
}

// ourObject Class
function ourObject(x, y, w, h) {
  this.x = x;
  this.y = y;
  this.w = w;
  this.h = h;
  this.col = 0;

  this.display = function() {
    // Draw the objects
    stroke(255);
    fill(this.col);
    rect(this.x, this.y, this.w, this.h);
  }

  this.move = function(moveBy) {
    //  change its y position
    this.y = y + moveBy;
  }

  this.clicked = function(newColor) {
    // check if the mousepress was on the object
    if ((mouseX >= this.x && mouseX <= this.x + this.w) &&
      (mouseY >= this.y && mouseY <= this.y + this.h)) {
      this.col = newColor;
    }
  }
}