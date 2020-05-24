/* -------------------- Variables -------------------- */
// PubNub variables
var dataServer;
var pubKey = 'pub-c-demo';
var subKey = 'sub-c-demo';
var channelName = "sampleChannel";
var pubnubData;

// Serial Connection variables
var serial;       						// Serial port object
var serialPortName = "COM7_SAMPLE";		// Serial port name
var ardSend = {};						// JSON variable
var arduinoData;

// Variables
var sampleAudio;
var samplePicture;

/* -------------------- Functions -------------------- */
function preload(){
	// Preload sound files
	// sampleAudio = loadSound("audios/SAMPLESOUND.wav");
}

function setup() 
{
	getAudioContext().resume();
	createCanvas(windowWidth, windowHeight);
	background(0);
	
	/* 
	 * samplePicture = createImg("images/SAMPLEPICTURE.png");
	 * samplePicture.size(windowWidth, windowHeight);
	 * samplePicture.position(0,0);
	 */
}

function draw() 
{
	if (mouseIsPressed) {
		fill(0);
	}
	else {
		fill(255);
	}
	
	ellipse(mouseX, mouseY, 80, 80);
}

function windowResized() 
{
	resizeCanvas(windowWidth, windowHeight);
	background(0);
}

/* -------------------- PubNub -------------------- */
function initializePubnub()
{
	// Initialize pubnub
    dataServer = new PubNub(
    {
        publish_key   : pubKey,
        subscribe_key : subKey,  
        ssl: true
    });
    
    // Attach callbacks to the pubnub object to handle messages and connections
    dataServer.addListener({message: readIncoming})
    dataServer.subscribe({channels: [channelName]});
}
// Send data to pubnub
function sendTheMessage(outMessage)
{
	dataServer.publish(
	{
		channel: channelName,
		message: 
		{
			who: "AUTHORNAME",
			theMessage: outMessage,
		}
	});
}

// Read data from pubnub
function readIncoming(inMessage) 
{
	// Check the channel name
    if(inMessage.channel == channelName)
    {
		// Check who the author of the message is
		if ( inMessage.message.who == "AUTHORNAME" )
		{
			// Collect the data
			pubnubData = inMessage.message.theMessage;
		}
    }
}

/* -------------------- Arduino -------------------- */
// Send data to Arduino
function initializeArduino()
{
	// Setting up the serial port
    serial = new p5.SerialPort();		// Create the serial port object
    serial.open(serialPortName);		// Open the serialport
    serial.on('open',ardCon);			// Open the socket connection
}

function ardCon()
{
    console.log("connected to the Arduino Micro! Let's Go");
}

function sendDataToArduino()
{	
    ardSend.ARDUINODATA = arduinoData;							// Add the value to the ARDUINODATA parameter on the json object

	var sendString = JSON.stringify(ardSend);   				// Convert the json to a string  
    //console.log(sendString)
	
	serial.write(sendString);                  					// Send it over the serial port    
    serial.write('\n');                           				// Write a new line character	
}

