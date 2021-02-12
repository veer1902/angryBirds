// PascalCase
// parent class
class Baseclass{
   constructor(x,y,width, height, angle){
   var options = {
      'density':1.0,
      'friction':1.0,
      'restitution':0.8
   };
    this.body = Bodies.rectangle(x,y,width,height);
    this.width = width;
    this.heigth = height;
    this.image = loadImage("sprites/base.png");
    World.add(world,this.body);
   }

   display(){
   var pos = this.body.position;
   var angle= this.body.angle;
   
    push ();
    translate(pos.x,pos.y);
    rotate (angle);
    imageMode(CENTER);
    //imageVariable(loadImage), x, y, width, height
    //image() function to display image
    image (this.image, 0,0, this.width, this.height)
    pop ();
    };
}