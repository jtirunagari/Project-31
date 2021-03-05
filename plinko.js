class Plinko{
    constructor(x,y){
        var options = {
            restitution: 1,
            friction: 0,
            isStatic:true

        }
        this.r = 10;
        this.body = Bodies.circle(x,y,this.r,options);
        World.add(myWorld,this.body);

    }
    display(){
push()
translate(this.body.position.x,this.body.position.y);
rotate(this.body.angle);
ellipseMode(CENTER);
fill("white");
ellipse(0,0,this.r,this.r);
pop()
    }
}