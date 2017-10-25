function startFunc(tipo) {
	switch(tipo){
		case "led":
			startLed();
			break;
		case "sensor":
			startSensor();
			break;
		default:
			break;
	}
}

function startLed() {
	var five = require("johnny-five");
	var board = new five.Board();

	var display = document.getElementById("select_display").innerHTML;

	board.on("ready", function() {

	  // Create a standard `led` component instance
	  var led = new five.Led(display);

	  // "blink" the led in 500ms
	  // on-off phase periods
	  led.blink(500);
	});
}

function startSensor() {
	var five = require("johnny-five");

	five.Board().on("ready", function() {
	  var temperature = new five.Thermometer({
	    controller: "LM35",
	    pin: "A0"
	  });

	  temperature.on("change", function() {
	    console.log(this.celsius + "°C", this.fahrenheit + "°F");
	  });
	});
}