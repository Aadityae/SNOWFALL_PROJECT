const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world

var background_img
var snowfall = []

function preload()
{

  background_img=loadImage("snow2.jpg")
  
}

function setup() 
{
  
  engine = Engine.create()
  world = engine.world;
  createCanvas(600,400);
  

  for(var i=0; i<50; i++)
    {
      snowfall.push(new Snow(random(0,600),random(0,400)));
    }
   
  
    
}

function draw() {
  
  Engine.update(engine);
  background(background_img)
  
  for (var i=0; i <50; i++) {
    snowfall[i].display();   
  }

  

  drawSprites();

  
}