
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ground,tree,treeImage;
var boy,boyImage;
var mango1,mango2,mango3,mango4,mango5,mango6,mango7,mango8,mango9,mango10;
var stone,attach;
function preload()
{
	treeImage=loadImage("tree.png")
	boyImage=loadImage("boy.png")
}

function setup() {
	createCanvas(1000, 650);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ground=new Ground()
	stone=new Stone(100,460,50)
	mango1=new Mango(600,290,10)
	mango2=new Mango(855,325,10)
	mango3=new Mango(670,260,10)
	mango4=new Mango(730,200,10)
	mango5=new Mango(710,320,10)
	mango6=new Mango(780,250,10)
	mango7=new Mango(825,170,10)
	mango8=new Mango(880,260,10)
	mango9=new Mango(940,220,10)
  mango10=new Mango(980,305,10) 
  sling = new Throw(stone.body,{x:100,y:465}); 
 
	
	tree=createSprite(780,368)
	tree.addImage(treeImage)
  tree.scale=0.4;
  
  boy=createSprite(150,500,20,20)
  boy.addImage(boyImage)
  boy.scale=0.1
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  Engine.update(engine)

  detectCollision(stone,mango1);
  detectCollision(stone,mango2);
  detectCollision(stone,mango3);
  detectCollision(stone,mango4);
  detectCollision(stone,mango5);
  detectCollision(stone,mango6);
  detectCollision(stone,mango7);
  detectCollision(stone,mango8);
  detectCollision(stone,mango9);
  detectCollision(stone,mango10);
  
  drawSprites();
  stone.display()
  ground.display()
  mango1.display()
  mango2.display()
  mango3.display()
  mango4.display();
  mango5.display()
  mango6.display()
  mango7.display()
  mango8.display()
  mango9.display()
  mango10.display();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
   sling.fly();
}

function detectCollision(lstone,lmango){
  mangobodyposition=lmango.body.position
  stonebodyposition=lstone.body.position
  
  var distance=dist(stonebodyposition.x,stonebodyposition.y,mangobodyposition.x,mangobodyposition.y)
  
  if(distance<=lmango.radius+lstone.diameter){
    console.log(distance)
    Matter.Body.setStatic(lmango.body,false)
    
  }
     }

       
  