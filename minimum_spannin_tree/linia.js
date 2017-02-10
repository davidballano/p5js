function Linia(x1,y1,x2,y2,color=255,width=1) {
//object line
  this.x1 = x1;
  this.y1 = y1;
  this.x2 = x2;
  this.y2 = y2;
  this.color = color;
  this.width = width;
  this.display = function() {
    stroke(this.color);
    strokeWeight(this.width);
    line(this.x1,this.y1,this.x2,this.y2);
  };
}
