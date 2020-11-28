const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

let Divison = [];
var Plinko = [];
var Particles = [];

var DivisonHeight = 300;

var margin1,margin2,margin3,margin4;
var particle;

function setup() {
  createCanvas(567,windowHeight);
  
  engine = Engine.create();
  world = engine.world;
  
  for(var i = 10; i <= width; i = i+77.6){
    Divison.push(new Divisons(i,DivisonHeight*1.9,10,DivisonHeight));
  }

  ground = new Ground(243.9,711,700,10);

  margin1 = new Ground(245,3,724,7);
  margin2 = new Ground(3,362,7,724);
  margin3 = new Ground(245,719,724,7);
  margin4 = new Ground(564,362,7,724);

  for(var a = 60; a <= width-50; a=a+39){
    Plinko.push(new Plinkos(a,70));
  }

  for(var b = 35; b <= width-35; b=b+39){
    Plinko.push(new Plinkos(b,110));
  }

  for(var c = 60; c <= width-50; c=c+39){
    Plinko.push(new Plinkos(c,160));
  }

  for(var d = 35; d <= width-35; d=d+39){
    Plinko.push(new Plinkos(d,210));
  }

  for(var e = 60; e <= width-50; e=e+39){
    Plinko.push(new Plinkos(e,260));
  }

  for(var f = 35; f <= width-35;f =f+39){
    Plinko.push(new Plinkos(f,310));
  }

  for(var g = 60; g <= width-50; g=g+39){
    Plinko.push(new Plinkos(g,360));
  }
}

function draw() {
  background(0);
  Engine.update(engine);

  for(var i = 0; i < Divison.length; i++){
    Divison[i].display();
  }

  ground.display("White");

  margin1.display("brown");
  margin2.display("brown");
  margin3.display("brown");
  margin4.display("brown");

  for(var i = 0; i < Plinko.length; i++){
    Plinko[i].display();
  }
  


  drawSprites();

  textSize(32);
  fill("red");
  text("500",255,470)
  text("250",335,470)
  text("250",175,470)
  text("100",95,470)
  text("100",415,470)
  text("50",30,470)
  text("50",495,470)
}

function mousePressed() {
  particle = new particles(mouseX, 30);
}