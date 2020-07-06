# Experiment 5: Networking 
Things you will need for this experiment:
* Arduino Nano IOT 33 
* Download the Arduino WifiNINA library
* Create a PubNub Account

## In this section there are 4 networking examples 
* [Web to Web](Web%20to%20Web)  
* [Web to Physical]
* [Physical to Web]
* [Physical to Physical]

## What is PubNub?
PuNub is a cloud-based server that receives and sends "messages" in real time. By using the PubNub API, users can subscribe (receive) and publish (send) data instantly.

Each account can have up to 1,000,000 messages a month. 

The API works with both Arduino & JavaScript, making it easy to use an Arduino to talk to a Webpage or vice versa. 

## To Get Started
1. Create a PubNub Account 
- Click the Log-in button on the top right of the page. You will then have the option to sign-up for an account.
2. Create an "App" in PubNub 
 - Name it whatever you want, you can change this later. 
3. Find the Subscribe & Publish Keys 
 - These keys are unique to every "App". If others want to be able to subscribe or publish messages to your "App", you must share your keys.
4. In the sample code, place your Publish Key in the text where it says "Your publish key here", and your Subscribe key where it says "Your subscribe key here"
 
