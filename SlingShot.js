class SlingShot{
    //constructor - we define and initialize properties of object in it
    constructor(bird, point){
       var options = {
        bodyA: bird,
        pointB: point,
        stiffness: 0.01,
        length: 2
        }
        this.sling = Matter.Constraint.create(options);
        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){
        //take the position of bird body only when it is attached to the sling
        if(this.sling.bodyA){
            push();
            stroke ("brown");
            strokeWeight(4);
            //line(startPoint.x, startPoint.y, endPoint.x , endPoint.y)
            line (this.sling.bodyA.position.x, this.sling.bodyA.position.y, this.sling.pointB.x, this.sling.pointB.y);
            pop()
        }
       
    }
}