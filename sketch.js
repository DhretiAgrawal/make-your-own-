const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine , world, world2;
var pin1 , pin2,pin3,pin4,pin5,pin6,pin7;
var ball,ground,pinground;
function preload(){
   

}
function setup(){
    createCanvas(displayWidth-40,displayHeight-150);
    engine=Engine.create();
    world=engine.world;
    //world2 = engine.world;

    ground=new Ground(width/2,height-30,width,20);
    ball=new Ball(width/2,height-50);

    /* var options={
      isStatic:true,
    } */
    pinground=new Ground(width/2,150,width,15);
    //pinground = Bodies.rectangle(width/2,150,width,15,options)
    //World.add(world2,pinground);

    pin1=new Pin(width/2,100,120,150);
    pin2=new Pin(width/2-40,100,115,140);
    pin3=new Pin(width/2+40,100,115,140);
    pin4=new Pin(width/2-80,100,110,130);
    pin5=new Pin(width/2+80,100,110,130);
    pin6=new Pin(width/2-120,100,105,120);
    pin7=new Pin(width/2+120,100,105,120);
    pin8=new Pin(width/2-155,100,100,110);
    pin9=new Pin(width/2+155,100,100,110);
    //pin10=new Pin(1000,height-90);
    console.log(pin1.body);


  
    
    
    //console.log(pins1);
    /*
    pins1=createSprite(50,50);
    pins1.addImage(pin1);
    */
}

function draw(){
  background(0);
  Engine.update(engine);
  ground.display();
  pin9.display();
  pin8.display();
  pin7.display();
  pin6.display();
  pin5.display();
  pin4.display();
  pin3.display(); 
  pin2.display();
  pin1.display();
  ball.display();
  pinground.display();
  //rect(pinground.position.x,pinground.position.y,width,15);

  touch(ball,pin1);

  fill("white")

  rectMode(CENTER);
  //rect(ground.position.x, ground.position.y, width, 20);
}

function mousePressed(){

  ball.direction(mouseX);
}

function touch(ob1,ob2){
  var distance = dist(ob1.body.position.x,ob1.body.position.y,ob2.body.position.x,ob2.body.position.y);
  //console.log(distance);
  if(distance<=80){ //bug to solve when image added
    Matter.Body.setStatic(ob2.body,false);
  }
}