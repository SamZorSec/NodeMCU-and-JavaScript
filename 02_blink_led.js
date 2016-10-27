var led      = NodeMCU.D4;  // built-in LED
var state    = true;        // LED switched on by default
var duration = 500;         // blink the LED every 500 ms

setInterval(function() {
  digitalWrite(led, state);
  state = !state;           // toggle LED state
}, duration);