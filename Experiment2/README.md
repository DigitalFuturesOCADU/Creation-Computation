<h1>Experiment 2</h1>
<h2>For this experiment, we will use:</h2>
  <h3>Inputs</h3> <p>1. Photo Resistors (Light Sensors)</p>
<h3>Output</h3> <p>1. LEDs</p> <p>2. Servos</p>

<br>

<h3>Circuit #1</h3>
<h4>Light sensor + Arduino (Analog Read)</h4>

<h6>The Arduino will receive the voltage reading from the photo resistor. When light decreases, the sensor reading is also decreased and received by pin A0 on Arduino Uno.</h6> 

<br>

<h5>Circuit Layout</h5>

![Circuit#1](https://user-images.githubusercontent.com/43145138/83700474-f1680f80-a5d4-11ea-8290-664215fb973b.png)

<br>

<h5>TinkerCad Simulation</h5>

![arduino-photo-resistor-analog-read](https://user-images.githubusercontent.com/43145138/82398041-dd8eac00-9a1f-11ea-9c4f-df649609d6ec.gif)

<br>

<h5>Experiment replicated on Arduino Uno</h5>

![Uno-PhotoResistor](https://user-images.githubusercontent.com/43145138/83698018-6257f900-a5ce-11ea-9999-b01630a7166e.gif)

<br>

<h5>Experiment replicated on Arduino Nano 33 IoT</h5>

![Nano-PhotoResistor](https://user-images.githubusercontent.com/43145138/83693721-9e865c00-a5c4-11ea-9a15-b3bbd7e56a1e.gif)

<br><br>


<h3>Circuit #2.1</h3>
<h4>LED + Arduino (digitalWrite)</h4>

<h6>Blink the LED with delay function. This program will blink the LED for 1 second every second.</h6>

<br>

<h5>Circuit Layout</h5>

![Circuit #2](https://user-images.githubusercontent.com/43145138/83700481-f4fb9680-a5d4-11ea-814d-6603fbc1f5ce.png)

<br>


<h5>TinkerCad Simulation</h5>

![arduino-led-blink-delay](https://user-images.githubusercontent.com/43145138/82398346-acfb4200-9a20-11ea-9128-5c9f08bcd24c.gif)
thub

<br>


<h5>Experiment replicated on Arduino Uno.</h5>

![Uno-LED-Blink-Delay](https://user-images.githubusercontent.com/43145138/83693251-bf01e680-a5c3-11ea-93b9-3e2535077ede.gif)

<br>


<h5>Experiment replicated on Arduino Nano 33 IoT</h5>

![Nano-LED-Blink-Delay](https://user-images.githubusercontent.com/43145138/83693745-aa721e00-a5c4-11ea-8e2b-5d3e969a98fd.gif)


<br><br>


<h3>Circuit #2.2</h3>
<h4>LED + Arduino (digitalWrite)</h4>


<h6>Blink LED with a timer. This program will blink the LED for 1 second every second. </h6>


<h5>TinkerCad Simulation</h5>

![arduino-led-blink-timer](https://user-images.githubusercontent.com/43145138/82398385-bdabb800-9a20-11ea-95e2-077c077e2b4c.gif)


<br>


<h5>Experiment replicated on Arduino Uno.</h5>

![Uno-LED-Blink-Timer](https://user-images.githubusercontent.com/43145138/83693302-d5a83d80-a5c3-11ea-9d28-387f641a6034.gif)

<br>

<h5>Experiment replicared on Arduino Nano 33 IoT.</h5>

![Nano-LED-Blink-Timer](https://user-images.githubusercontent.com/43145138/83693754-ae05a500-a5c4-11ea-9b56-882854d7f81a.gif)


<br><br>


<h3>Circuit #2.3</h3>
<h4>LED + Arduino (digitalWrite + timer)</h4>


<h6>Fade LED with timer. This program will fade the LED from 255 to 0 and then back to 255 brightness.</h6>

<h5>TinkerCad Simulation</h5>

![arduino-led-fade-timer](https://user-images.githubusercontent.com/43145138/82398417-ca301080-9a20-11ea-8326-2e4595bc1d7f.gif)


<br>


<h5>Experiment replicared on Arduino Uno.</h5>

![Uno-LED-Fade-Timer](https://user-images.githubusercontent.com/43145138/83693319-dd67e200-a5c3-11ea-97b3-9d28b890a12e.gif)


<br>


<h5>Experiment replicated on Arduino Nano 33 IoT.</h5>

![Nano-LED-Fade-Timer](https://user-images.githubusercontent.com/43145138/83693763-b362ef80-a5c4-11ea-9f62-d5062cc88dd6.gif)


<br><br>


<h3>Circuit #3.1</h3>
<h4> PhotoResistor + LED + Arduino</h4>


<h6>Turn on LED as the ambient light decreases. This program will turn the LED ON when the room becomes too dark.</h6>

<br>

<h5>Circuit Layout</h5>

![Circuit #3-1](https://user-images.githubusercontent.com/43145138/83700488-f88f1d80-a5d4-11ea-917e-901bc1192006.png)

<br>


<h5>TinkerCad Simulation</h5>

![arduino-photo-resistor-led](https://user-images.githubusercontent.com/43145138/82398147-1dee2a00-9a20-11ea-957c-f7c9f2909ec1.gif)

<br>

<h5>Experiment replicated on Arduino Uno.</h5>

![Uno-PhotoResistor-LED](https://user-images.githubusercontent.com/43145138/83693394-025c5500-a5c4-11ea-81e5-9b49895c373e.gif)

<br>

<h5>Experiment replicated on Arduino Nano 33 IoT.</h5>

![Nano-PhotoResistor-LED](https://user-images.githubusercontent.com/43145138/83693861-e6a57e80-a5c4-11ea-8f45-3a5ba3a46181.gif)


<br><br>


<h3>Circuit #3.2</h3>
<h4>Two Photo Resistors + Two LEDs + Arduino</h4>


<h6>Read and compare between two sensors and perform an output. This program will compare between the readings of sensor A and sensor B, and then turn the respective LED on.</h6>

<br>

<h5>Circuit Layout</h5>

![Circuit #3-2](https://user-images.githubusercontent.com/43145138/83700494-fb8a0e00-a5d4-11ea-8d9d-44b284eab70c.png)

<br>

<h5>TinkerCad Simulation</h5>

![arduino-photo-resistor-led-comparison](https://user-images.githubusercontent.com/43145138/82398214-44ac6080-9a20-11ea-8488-ce91c8a1c80a.gif)


<br>


<h5>Experiment replicated on Arduino Uno.</h5>

![Uno-TwoResistors-TwoLEDs-Compare](https://user-images.githubusercontent.com/43145138/83693469-20c25080-a5c4-11ea-9f3a-89aac1941689.gif)


<br>


<h5>Experiment replicated on Arduino Nano 33 IoT.</h5>

![Nano-TwoResistorsTwoLEDs-Compare](https://user-images.githubusercontent.com/43145138/83693890-fb821200-a5c4-11ea-9c68-1e2cb4f07349.gif)


<br><br>



<h3>Circuit #4</h3>
<h4>Servo + Arduino</h4>


<h6>Output a sweep function on the servo with a timer. This program will move the servo from 0º to 180º and back.</h6>

<br>

<h5>Circuit Layout</h5>

![Circuit #4](https://user-images.githubusercontent.com/43145138/83700507-fe84fe80-a5d4-11ea-96a6-2a3697ec38ab.png)

<br>


<h5>TinkerCad Simulation</h5>

![arduino-servo-sweep-timer](https://user-images.githubusercontent.com/43145138/82398480-f055b080-9a20-11ea-8bd1-cb1875648514.gif)


<br>


<h5>Experiment replicated on Arduino Uno.</h5>

![Uno-Servo-Sweep](https://user-images.githubusercontent.com/43145138/83693515-3df71f00-a5c4-11ea-97cf-b27546c0cc7b.gif)

<br>

<h5>Experiment replicated on Arduino Nano 33 IoT.</h5>

![Nano-Servo_sweep](https://user-images.githubusercontent.com/43145138/83693918-0b015b00-a5c5-11ea-9e18-96718ef2b78e.gif)