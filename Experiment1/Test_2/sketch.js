// Global Variables
var pos = 0;
var ourObjects = [];
var capture, curpyr, prevpyr, pointCount, pointStatus, prevxy, curxy;
var w = 500,
    h = 500;
var maxPoints = 1;

function setup() {
  createCanvas(1000,500);
  // Create 5 Objects and add them to ourObjects list
  for (var i = 0; i < 5; i++) {
    // Give each object a random x and y postion with 100px width and height
    var x = random(500,width);
    var y = random(height);
    var w = 50;
    var h = 50;
    ourObjects.push(new ourObject(x, y, w, h));
  }
  initializeCapture();
}

function draw() {
  background(220);
  // Draw all the objects from ourObjects list
  for (var i = 0; i < ourObjects.length; i++) {
    ourObjects[i].move(pos);
    ourObjects[i].display();
  }
  
  pointerTracking();
  pos = curxy[1];
  console.log(pos);
}

// This runs everytime mouse is pressed
function mousePressed() {
	addPoint(mouseX, mouseY);
}
function changeColor() {
	for (var i = 0; i < ourObjects.length; i++) {
		var newColor = color(random(0,255),random(0,255),random(0,255));
		ourObjects[i].touched(newColor);
	}
}

function initializeCapture() {
	capture = createCapture({
        audio: false,
        video: {
            width: w,
            height: h
        }
    }, function() {
        console.log('capture ready.')
    });
	capture.hide();
    capture.elt.setAttribute('playsinline', '');

    curpyr = new jsfeat.pyramid_t(3);
    prevpyr = new jsfeat.pyramid_t(3);
    curpyr.allocate(w, h, jsfeat.U8C1_t);
    prevpyr.allocate(w, h, jsfeat.U8C1_t);

    pointCount = 0;
    pointStatus = new Uint8Array(maxPoints);
    prevxy = new Float32Array(maxPoints * 2);
    curxy = new Float32Array(maxPoints * 2);
}
function addPoint(x, y) {
    if (pointCount < maxPoints) {
        var pointIndex = pointCount * 2;
        curxy[pointIndex] = x;
        curxy[pointIndex + 1] = y;
        pointCount++;
    }
}
function prunePoints() {
    var outputPoint = 0;
    for (var inputPoint = 0; inputPoint < pointCount; inputPoint++) {
        if (pointStatus[inputPoint] == 1) {
            if (outputPoint < inputPoint) {
                var inputIndex = inputPoint * 2;
                var outputIndex = outputPoint * 2;
                curxy[outputIndex] = curxy[inputIndex];
                curxy[outputIndex + 1] = curxy[inputIndex + 1];
            }
            outputPoint++;
        }
    }
    pointCount = outputPoint;
}
function pointerTracking() {
	image(capture, 0, 0, w, h);
	capture.loadPixels();
	if (capture.pixels.length > 0) {
	  var xyswap = prevxy;
	  prevxy = curxy;
      curxy = xyswap;
      var pyrswap = prevpyr;
      prevpyr = curpyr;
      curpyr = pyrswap;

      // these are options worth breaking out and exploring
      var winSize = 20;
      var maxIterations = 30;
      var epsilon = 0.01;
      var minEigen = 0.001;

      jsfeat.imgproc.grayscale(capture.pixels, w, h, curpyr.data[0]);
      curpyr.build(curpyr.data[0], true);
      jsfeat.optical_flow_lk.track(
      prevpyr, curpyr,
      prevxy, curxy,
      pointCount,
      winSize, maxIterations,
      pointStatus,
      epsilon, minEigen);
      prunePoints();

      for (var i = 0; i < pointCount; i++) {
          var pointOffset = i * 2;
          ellipse(curxy[pointOffset], curxy[pointOffset + 1], 8, 8);
      }
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