class Bob
{
    constructor (x,y)
    {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0,
            density:7.8
        }
        this.body=Bodies.circle (x, y, 25, options);
        //this.width=25;

        World.add(world,this.body);
    }

    display()
    {
        var pos =this.body.position;        
        var angle = this.body.angle;
        push();
        //rotate(angle);
        fill("red");
        ellipseMode(RADIUS);
        ellipse(pos.x, pos.y ,25, 25);
        pop();
    }
};