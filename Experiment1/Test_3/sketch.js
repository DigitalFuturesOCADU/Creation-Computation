// Global Variables
var pos = 0;
var ourObjects = [];
let video;
let poseNet;
let poses = [];

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
  
  image(video, 0, 0, 500, 500);
  
  // We can call both functions to draw all keypoints and the skeletons
  drawKeypoints();
  drawSkeleton();
  
  changeColor();
}

function initializeCapture() {
	//createCanvas(500, 500);
	video = createCapture(VIDEO);
	video.size(500, 500);

	// Create a new poseNet method with a single detection
	poseNet = ml5.poseNet(video, modelReady);
	// This sets up an event that fills the global variable "poses"
	// with an array every time new poses are detected
	poseNet.on('pose', function(results) {
	  poses = results;
	});
	// Hide the video element, and just show the canvas
	video.hide();
}
function modelReady() {
  select('#status').html('Model Loaded');
}
// A function to draw ellipses over the detected keypoints
function drawKeypoints()  {
  // Loop through all the poses detected
  for (let i = 0; i < poses.length; i++) {
    // For each pose detected, loop through all the keypoints
    let pose = poses[i].pose;
    for (let j = 0; j < pose.keypoints.length; j++) {
      // A keypoint is an object describing a body part (like rightArm or leftShoulder)
      let keypoint = pose.keypoints[j];
      // Only draw an ellipse is the pose probability is bigger than 0.2
      if (keypoint.score > 0.2) {
        fill(255, 0, 0);
        noStroke();
        ellipse(keypoint.position.x, keypoint.position.y, 10, 10);
      }
    }
  }
}
// A function to draw the skeletons
function drawSkeleton() {
  // Loop through all the skeletons detected
  for (let i = 0; i < poses.length; i++) {
    let skeleton = poses[i].skeleton;
    // For every skeleton, loop through all body connections
    for (let j = 0; j < skeleton.length; j++) {
      let partA = skeleton[j][0];
      let partB = skeleton[j][1];
      stroke(255, 0, 0);
      line(partA.position.x, partA.position.y, partB.position.x, partB.position.y);
    }
  }
}
function changeColor() {
	
	// Loop through all the poses detected
	for (let i = 0; i < poses.length; i++) {
		// For each pose detected, loop through all the keypoints
		let pose = poses[i].pose;
		let leftHand = pose.keypoints[9];
		let rightHand = pose.keypoints[10];
		
		// Only draw an ellipse is the pose probability is bigger than 0.2
		if (leftHand.score > 0.2 && rightHand.score > 0.2) {
			if (leftHand.position.x >= rightHand.position.x - 25 && 
			leftHand.position.x <= rightHand.position.x + 25 &&
			leftHand.position.y >= rightHand.position.y - 25 && 
			leftHand.position.y <= rightHand.position.y + 25) {
				for (var j = 0; j < ourObjects.length; j++) {
					var newCol = color(random(0,255),random(0,255),random(0,255));
					ourObjects[j].colorChange(newCol);
					console.log("YES");
				}
			}
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
  this.colorChange = function(newColor){
	  this.col = newColor;
  }
}