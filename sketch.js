const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var ground;
var dustbin;
var paper;

function preload(){
}

function setup(){
	createCanvas(1400, 700);
	engine = Engine.create();
	world = engine.world;
	//Create the Bodies Here.
	ground = new Ground(width/2, 650, width, 20);
	dustbin = new Dustbin(850, 620);
	paper = new Paper(200, 450, 70);

	var render = Render.create({
		element : document.body,
		engine : engine,
		options : {
			width : 1200,
			height : 700,
			wireframes : false
		}
	});
	Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background(255); 
	paper.display();
	ground.display();
	dustbin.display();
}

function keyPressed(){
	if(keyCode === UP_ARROW){
		Matter.Body.applyForce(paper.body, paper.body.position, {x : 130, y : -145});
	}
}
