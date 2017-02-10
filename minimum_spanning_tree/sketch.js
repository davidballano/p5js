var circles = [];
var button;
var cbutton;
var reached = [];
var unreached = [];
var linias = [];
var released = false;

//circles and vertices should be the same thing, and constructor you can create objects from.

function setup() {
  var canvas = createCanvas(600, 600);
  for (var i = 0; i < 10; i++) {
    circles[i] = new Circle(floor(random(width)), floor(random(height)));
  }
  button = createButton('process');
}

function mouseDragged(){
  for (var i = 0; i < circles.length; i++) {
    if (mouseX > circles[i].x - (16/2) && mouseX < circles[i].x + (16/2) && mouseY > circles[i].y - (16/2) && mouseY < circles[i].y + (16/2)){
        circles[i].x = mouseX;
        circles[i].y = mouseY;
    }
  }
}

function compute(){
  reached = [];
  unreached = [];
  linias = [];
  for (var i = 0; i < circles.length; i++) {
    unreached.push(circles[i]);
  }

  reached.push(unreached[0]);
  unreached.splice(0, 1);

  while (unreached.length > 0) {
    var record = 100000;
    var rIndex;
    var uIndex;
    for (var i = 0; i < reached.length; i++) {
      for (var j = 0; j < unreached.length; j++) {
        var v1 = reached[i];
        var v2 = unreached[j];
        var d = dist(v1.x, v1.y, v2.x, v2.y);
        if (d < record) {
          record = d;
          rIndex = i; //reached circle
          uIndex = j; //unreached circle
        }
      }
    }
    var l = new Linia(reached[rIndex].x, reached[rIndex].y, unreached[uIndex].x, unreached[uIndex].y);
    linias.push(l);
    //moving unreach cicle to reached
    reached.push(unreached[uIndex]);
    //taking the unreached circle from unreached
    unreached.splice(uIndex, 1);
  }
}

function draw() {
  background(51);
  for (var i = 0; i < circles.length; i++) {
    circles[i].display();
  }
  compute();

  for (var i = 0; i < linias.length; i++) {
    linias[i].display();
  }
}
