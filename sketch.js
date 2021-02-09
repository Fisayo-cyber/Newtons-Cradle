
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint

var roof
var bob1
var bob2
var bob3
var bob4
var bob5
var chain1
var chain2
var chain3
var chain4
var chain5
function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	

	Engine.run(engine);
	roof = new Roof(400, 200, 450, 20)
	bob1 = new Bob(300, 600, 60)
	bob2 = new Bob(330, 600, 60)
	bob3 = new Bob(390, 600, 60)
	bob4 = new Bob(420, 600, 60)
	bob5 = new Bob(450, 600, 60,)
	chain1 = new Chain(bob1.body, roof.body,  0, 0)
	chain2 = new Chain(bob2.body, roof.body, +100, 0)
	chain3 = new Chain(bob3.body, roof.body, +200, 0)
	chain4 = new Chain(bob4.body, roof.body, -100, 0)
	chain5 = new Chain(bob5.body, roof.body, 0, 0)
}


function draw() {
  rectMode(CENTER);
  background(225);
  
	roof.display()
	bob1.display()
	bob2.display()
	bob3.display()
	bob4.display()
	bob5.display()
	chain1.display()
	chain2.display()
	chain3.display()
	chain4.display()
	chain5.display()
	drawSprites();
	
 
}



