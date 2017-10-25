var div = document.getElementById("div_principal");

var p = document.getElementById("titulo_botao");
p.appendChild(document.createTextNode("Escolha o display: "));

var select_display = document.getElementById("select_display");
select_display.setAttribute("type", "button");

for (var i = 0; i <= 12; i++) {
	select_display.options[i] = new Option(i+2, i+2);
}

var button = document.getElementById("button_start");
button.setAttribute("onclick", "startFunc(\"led\")");
button.appendChild(document.createTextNode("Iniciar"));
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
	
}