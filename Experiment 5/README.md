# Experiment 5: Networking 
Things you will need for this experiment:
* Create a PubNub Account
* Download the Arduino WifiNINA library
* Download the Arduino JSON library
* Download the Arduino PubNub Library

## In this section there are 4 networking examples 
* [Physical to Physical](Physical%20to%20Physical)
* [Physical to Web](Web%20to%20Physical)
* [Web to Web](Web%20to%20Web)  
* [Web to Physical](Web%20to%20Physical)

## What is PubNub?
PuNub is a cloud-based server that receives and sends "messages" in real time. By using the PubNub API, users can subscribe (receive) and publish (send) data instantly.

Each account can have up to 1,000,000 messages a month. 

The API works with both Arduino & JavaScript, making it easy to use an Arduino to talk to a Webpage or vice versa. 

PubNub Keys

PubNub Channels 

## What is JSON? 

JSON stands for **J**ava**S**cript **O**bject **N**otation

JSON uses a concept of "Key:Value" of storing data. 

In this example, the Key is message, and the Value is "Hello World"

```
let obj = { 
    message: "Hello World"
}
```
If you were to print "obj" this is what you would receive in the console:

```
print(obj);

....
console:
{message: "Hello World"}
```

If you wanted to explicity retreive the "Value" of message, you can call the specific value: 

```
print(obj.message);

....
console:
Hello World
```

Each JSON object can hold multiple Key:Value pairs

Example:
```
let obj = {
    message: "Hello World",
    user: "DF Student", 
    location: "Toronto"
}
```

To retrieve any of the individual values you can call them explicitly: 

```
print(obj.message);
print(obj.user);
print(obj.location); 

....
console:
Hello World
DF Student
Toronto
```

JSON values can be assigned to other variables. In this example the variable sender is assigned the value of obj.user. It is then printed out in the console. 

```
let obj = {
    message: "Hello World",
    user: "DF Student", 
    location: "Toronto"
}

let sender = obj.user;

print(sender);

....
console: 
DF Student
```

JSON Values can also be variables, not just Strings. In this example, the JSON values are variables, rather than Strings. 

``` 
let myMessage = "Digital Futures"
let myName = "Student";
let myCity = "Warsaw";
let myGradYear = 2022; 

let obj = {message: myMessage,
    user: MyName, 
    location: myCity, 
    year: myGradYear
}
           
print(obj.message);
print(obj.user);
print(obj.location);
print(obj.year); 

....
console:
Digital Futures
Student
Warsaw
2022
```

## To Get Started
1. [Create a PubNub Account](https://dashboard.pubnub.com/signup) 
2. Create an "App" in PubNub 
3. Find the Subscribe & Publish Keys 
 - These keys are unique to every "App". If others want to be able to subscribe or publish messages to your "App", you must share your keys.
4. In the sample code, place your Publish Key in the text where it says "Your publish key here", and your Subscribe key where it says "Your subscribe key here"
 - In Arduino:
 - In a p5 Sketch:

## Web to Web 
### Example 1: Circles 
*Everytime a mouse is clicked by a user, a message with the x & y position of the cursor is published. A circle is drawn at that x & y location and filled with a random RGB colour.*
- This example can be used in a group, or by yourself.

### Example 2: Who is Here
*This sketch draws out the names of all the unique users who have clicked on the webpage. Each name is sized according to how many times the user has clicked (i.e. if the user clicked 10 times, the font size drawn is size 10, clicked 123 times, the font size of that particular name is 123 etc.) The name is drawn at the x & y position the user first clicked*
- You can test this example by yourself, or in a group. 

## Web to Physical 
*Web to Physical Computing example using the Web page to publish JSON to an Arduino Nano. When the user clicks on the page, the value of 0 or 255 is published. The Arduino receives the value. If the value is 255, the LED turns on. If the value is 0, the LED turns off* 
- This example can be tested by yourself. 
 - If testing this example with a partner, ensure that you are using the **same publish & subscribe keys**, and that the **channel name is the same**. 
 
 // add in connection diagram 
 
## Physical to Web 
*An Arduino Nano is publishing the value of a potiometer from between 0-1024. This sketch subscribes to the channel the nano is publishing to, and receives that value. The value is mapped to the height of the screen. Every in coming value is drawn on the screen as a vertical and creates graph.* 

// add in connection diagram 

## Physical to Physical 
*This example publishes the value of your potentiometer to a channel. The potentiometer controls the brightness of one LED on your circuit. On another channel, you are subscribed to receive the value of another person's potentiometer. This value controls the brightness of the other LED on your circuit.* 

*This example requires **two different channel names** but uses the **same Publish and Subscribe keys**.* 

// add in connection diagram 

 




 
