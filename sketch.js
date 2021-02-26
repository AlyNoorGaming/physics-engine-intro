const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies

var engine, world;
var ground;
var ball;


function setup() {
  createCanvas(800,400);
  engine = Engine.create();// to create engine for our objects
  world = engine.world; // to create world around our objects

  // additional properties to our objects
  var option ={
 isStatic : true
  }

  ground = Bodies.rectangle(400, 380, 400, 10, option); // creating the shape of your object
 World.add(world,ground); // to add our object to physics world

 var boption = {
   restitution : 1
 }
  
  ball = Bodies.circle(400,100,20,boption);
  World.add(world,ball);
}

function draw() {
  background("blue");  
  Engine.update(engine);
  rectMode(CENTER);
  rect(ground.position.x, ground.position.y, 400, 10); // shape to engine

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20,20);
}