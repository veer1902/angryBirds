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

        this.sling1 = loadImage('sprites/sling1.png');
        this.sling2 = loadImage('sprites/sling2.png');
        this.sling3 = loadImage('sprites/sling3.png');

        World.add(world, this.sling);
    }

    fly(){
        this.sling.bodyA = null;
    }

    display(){

        image (this.sling1, 200, 20);
        image( this.sling2, 170, 20);
        //take the position of bird body only when it is attached to the sling
        if(this.sling.bodyA){
            push();
            var pointA = this.sling.bodyA.position;
            var pointB = this.sling.pointB;

            stroke ("#301608");
            strokeWeight(4);
            //line(startPoint.x, startPoint.y, endPoint.x , endPoint.y)
            line(pointA.x - 20, pointA.y, pointB.x -10, pointB.y);
            line(pointA.x - 20, pointA.y, pointB.x + 30, pointB.y - 3);
            image(this.sling3,pointA.x -30, pointA.y -10,15,30);
            pop()
        }
       
    }
}