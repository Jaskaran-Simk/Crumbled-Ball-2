
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


var dustbin;
var ground,paper;
var bingreen;

function preload(){

}

function setup() {
  createCanvas(900, 500);

  engine = Engine.create();
  
	world = engine.world;

	ground1 = new Ground(600,468,1200,20);
	dustbin1 = new Dustbin(670.3,370,20,180);
  dustbin2 = new Dustbin(750,450,140,20);
  dustbin3 = new Dustbin(829,370,20,180);	
  
  paper = new Paper(100,150,20)
  bingreen = new garbage(750,360)
  


}

function draw() {
  rectMode(CENTER);
  background("white");
  Engine.update(engine)
  dustbin1.display();
  dustbin2.display();
  dustbin3.display();
  ground1.display();
  paper.display();
  bingreen.display();
  
  
  
  
  drawSprites();
}

function keyPressed(){

  if (keyCode === UP_ARROW) {
    
    Matter.Body.applyForce(paper.body,paper.body.position,{x:60,y:-60});
   
  }
}

