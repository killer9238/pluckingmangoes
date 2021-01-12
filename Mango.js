class Mango{
    constructor(x,y,radius){
        var option={
            isStatic:true,
            restitution:0,
            friction:1
        }
        this.body=Bodies.circle(x,y,radius,option);
        this.radius=radius
        this.image=loadImage("mango.png")
        World.add(world,this.body)
    }
    
    display(){
        push()
        translate(this.body.position.x,this.body.position.y)
        rotate(this.body.angle)
        imageMode(CENTER)
        image(this.image,0,0,this.radius+40,this.radius+40)
        pop();
    }
}