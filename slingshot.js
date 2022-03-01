class Slingshot{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB = pointB;
        this.bodyA = bodyA;
        this.Slingshot = Constraint.create(options);
        World.add(world, this.Slingshot);
    }

    //attach(body) {
      //  this.slingShot.bodyA=body;
    //}

    //fly() {
      //  this.slingShot.bodyA = null;
    //}

    display(){
        if (this.Slingshot.bodyA) {
        var pointA = this.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
}