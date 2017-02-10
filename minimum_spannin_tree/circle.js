function Circle(x,y,diameter=16,r=255,g=255,b=255) {
  this.x = x;
  this.y = y;
  this.diameter = diameter;
  this.r = r;
  this.g = g;
  this.b = b;
  this.display = function() {
    noStroke();
    fill(this.r,this.g,this.b);
    ellipse(this.x, this.y, this.diameter, this.diameter);
  }
}
