var div_pai = document.getElementById("div_pai");

var p = document.getElementsByClassName("titulo_botao");
var a = document.getElementsByClassName("link_teste");
var b = document.getElementsByClassName("button_div");

p[0].appendChild(document.createTextNode("Teste LED!"));
p[1].appendChild(document.createTextNode("Teste sensor!"));

a[0].setAttribute('href','/teste/led/');
a[1].setAttribute('href','/teste/sensor/');

b[0].setAttribute('type','button');
b[1].setAttribute('type','button');

b[0].appendChild(document.createTextNode("Testar"));
b[1].appendChild(document.createTextNode("Testar"));