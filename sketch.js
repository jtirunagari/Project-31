const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles = [];
var plinkos = [];
var divisions = [];
var divisionHeight = 300;
var score=0

function setup() {
  myEngine = Engine.create();
  myWorld = myEngine.world;
  createCanvas(800,480);
  createSprite(400, 200, 50, 50);
  ground=new Ground(400,480,800,50)

  for (var k = 0; k <=width; k = k + 80){
    divisions.push(new Division(k, height-divisionHeight/2,10, divisionHeight))
  }
 
  for (var j = 75; j <=width; j=j+50){
    plinkos.push(new Plinko(j,75))
  }
    for (var j = 50; j <=width-10 ; j=j+50){
     plinkos.push(new Plinko(j,175))
   }
 
   for (var j = 75; j <=width; j=j+50){
     plinkos.push(new Plinko(j,275))
   }
 
   for (var j = 50; j <=width-10; j=j+50){
     plinkos.push(new Plinko(j,375))
   }
   
}

function draw() {
  background("black"); 
  Engine.update(myEngine)
  for (var i = 0; i<divisions.length; i++){
    divisions[i].display();
  }

  for (var i = 0; i<plinkos.length; i++){
    plinkos[i].display();
  }

  if (frameCount% 60 === 0){
    particles.push(new Particle(random(width/2 -30,width/2 +30),10,10))
    score++;
  }

  for (var i = 0; i<particles.length; i++){
    particles[i].display();
  } 
  ground.display()
  drawSprites();
}