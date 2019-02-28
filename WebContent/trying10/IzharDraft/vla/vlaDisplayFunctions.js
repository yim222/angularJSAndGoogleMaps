/**
 * Functions for showing the VLA in Pure js
 */

var newElement = '<div><p id="foo">This is some dynamically added HTML from 2. Yay!</p>'
+'<p>hhh</p>'
+'<svg height = "200" width = "700">'

+'<circle cx = "50" cy= "80" r= "40" stroke="blue" stroke-width="5"/>'
 +'<line x1="50" y1="120"   x2="50" y2="200" stroke="orange" stroke-width="5"/>'
+'</svg></div>';
var test1Element = document.getElementById("test1");
//alert(test1Element.innerHTML);
test1Element.innerHTML += newElement;