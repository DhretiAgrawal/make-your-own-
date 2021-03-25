class Ball{
    constructor(x,y){
        var options = {
         restitution:0.8,
         density:0.3,
         friction:0.6
         //isStatic:true
        }
        this.body= Bodies.circle(x, y, 60, options);
        World.add(world, this.body);
        this.radius=70;
        //this.image =loadImage("images/pin1.png");

    
    }
    display(){
        push();
        translate(this.body.position.x,this.body.position.y);
        rotate(this.body.angle);
        ellipseMode(CENTER);
        ellipse(0,0,this.radius,this.radius);
        pop();
      
    }

    direction(xMouse){
        console.log("xMouse: " + xMouse);
        if(xMouse < 615 & xMouse >=580){
            Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
        }
       if (xMouse < 580 & xMouse >=540){ 
            Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
      }
      if(xMouse<540 & xMouse >= 500){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
     
     if(xMouse<500 & xMouse >=460 ){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
     if(xMouse<615 & xMouse >= 660){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
     if(xMouse<660 & xMouse >= 700){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
     if(xMouse<700 & xMouse >= 740){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
     if(xMouse<740 & xMouse >= 770){
        Matter.Body.applyForce(this.body,this.body.position,{x:-3,y:-150})
     }
    }
}