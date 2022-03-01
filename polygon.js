class Polygon{
    constructor(x,y){
        var options={
            isStatic:false,
            restitution:0,
            friction:1,
            density:1.2
        }
        this.body=Bodies.rectangle(x, y, 50, 50, options);
        this.width = 50;
        this.height = 50;
        this.image=loadImage("polygon.png");
        World.add(world, this.body);

    }
    display(){
        var polygonpos=this.body.position;        
        push()
        translate(polygonpos.x, polygonpos.y);
        //rectMode(CENTER)
        //rotate(this.body.angle)
        //fill(255,0,255)
        imageMode(CENTER);
        image(polygon_img ,polygonpos.x,polygonpos.y,40,40);
        pop()
    }
}
