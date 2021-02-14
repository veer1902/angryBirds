class SlingShot{
    //constructor - we define and initialize properties of object in it
    constructor(bird, log6){
       var options = {
        bodyA: bird,
        bodyB: log6,
        stiffness: 0.2,
        length: 2
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        stroke ("brown");
        strokeWeight(4);
        line (this.sling.bodyA.x, this.sling.bodyA.y, this.sling.bodyB.x, this.sling.bodyB.y)
    }
}