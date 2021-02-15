// Bird Class child of BaseClass
class Bird extends BaseClass {
    constructor(x, y) {
     super(x, y, 50, 50); // constructor of base/parent class
     this.image = loadImage("sprites/bird.png");
    };
    display(){
      super.display();
     
    };
  };
  