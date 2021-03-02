class Rope{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX, y:this.offsetY},
            //stiffness: 0.02,
            //length: 10
        }
        //this.bodyA = bodyA;
        //this.bodyB = bodyB;
        this.rope = Constraint.create(options);
        //this.bodyB=bodyB;
        World.add(world, this.rope);
    }
    //fly(){
    //    this.sling.bodyA=null;
    //}
    display(){
        //if(this.sling.bodyA){
        //pointA is bob and pointB is roof
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        strokeWeight(3);
        //fill(255);
        var bobX = pointA.x;
        var bobY = pointA.y;
        var roofX = pointB.x+this.offsetX;
        var roofY = pointB.y+this.offsetY;
        
        line(bobX, bobY, roofX, roofY);
        //}
    }
    
}