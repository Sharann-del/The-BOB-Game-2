const Engine = Matter.Engine; 
const World = Matter.World; 
const Bodies = Matter.Bodies; 
const Constraint = Matter.Constraint;

var ball;
var engine;
var start;
var spike1_img;
var bg;

function preLoad(){
}

function setup() {
  createCanvas(1000, 500);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ball = new Ball(55,390,50,50);
  start = new Start(50,400,130,20);
  end = new End(2000,400,130,20);
  spike1 = new Spikes(end.body.position.x/2, 10, end.body.position.x+end.width/2+70, 20);
  spike2 = new Spikes(end.body.position.x+250+end.width/2, 250, 500, 500);
  spike3 = new Spikes(end.body.position.x/2, 490, end.body.position.x+end.width/2+65, 20);
  spike4 = new Spikes(7,250,20,500);
}

function draw() {
  background("gold");
  strokeWeight(3);
  stroke("black");
  fill("turquoise");
  start.display();
  end.display();
  fill("red");
  spike1.display();
  spike2.display();
  spike3.display();
  spike4.display();
  fill("red");
  ball.display();
  drawSprites();
}

function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:0, y:-6});
  }
  if(keyCode === LEFT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:-1.5,y:0});
  }
  if(keyCode === RIGHT_ARROW){
    Matter.Body.applyForce(ball.body, ball.body.position, {x:1.5,y:0});
    ball.distance += 10;
  }
  if(keyCode === RIGHT_ARROW && ball.body.position.x >= displayWidth/2){
    camera.position.x = ball.body.position.x;
  }
  if(ball.radius+spike3.width/2 <= ball.body.position.y+5+end.body.position.y+5){
    setup();
  }
  console.log(ball.distance);
}
