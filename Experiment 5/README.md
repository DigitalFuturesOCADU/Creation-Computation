# Experiment 5: Networking 
Things you will need for this experiment:
* Arduino Nano IOT 33 
* Download the Arduino WifiNINA library
* Create a PubNub Account

## In this section there are 4 networking examples 
* [Physical to Physical](Physical%20to%20Physical)
* [Physical to Web](Web%20to%20Physical)
* [Web to Web](Web%20to%20Web)  
* [Web to Physical](Web%20to%20Physical)

## What is PubNub?
PuNub is a cloud-based server that receives and sends "messages" in real time. By using the PubNub API, users can subscribe (receive) and publish (send) data instantly.

Each account can have up to 1,000,000 messages a month. 

The API works with both Arduino & JavaScript, making it easy to use an Arduino to talk to a Webpage or vice versa. 

## To Get Started
1. [Create a PubNub Account](https://dashboard.pubnub.com/signup) 
2. Create an "App" in PubNub 
3. Find the Subscribe & Publish Keys 
 - These keys are unique to every "App". If others want to be able to subscribe or publish messages to your "App", you must share your keys.
4. In the sample code, place your Publish Key in the text where it says "Your publish key here", and your Subscribe key where it says "Your subscribe key here"
 
