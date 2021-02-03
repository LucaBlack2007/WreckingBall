const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var world, engine;
var ground;
var box0, box1, box2, box3, box4;
var box0_side2, box1_side2, box2_side2, box3_side2;
var ball;
var rope;

function preload() {

}

function setup() {
    createCanvas(1200, 800);

    engine = Engine.create();
    world = engine.world;

    box0 = new Box(600, 700, 40, 20);
    box1 = new Box(600, 650, 40, 20);
    box2 = new Box(600, 600, 40, 20);
    box3 = new Box(600, 550, 40, 20);
    box4 = new Box(600, 500, 40, 20);

    box0_side2 = new Box(550, 700, 40, 20);
    box1_side2 = new Box(550, 650, 40, 20);
    box2_side2 = new Box(550, 600, 40, 20);
    box3_side2 = new Box(550, 550, 40, 20);

    ground = new Ground(600, 780, 1200, 30);

    ball = new WreckingBall(200, 200, 30, 30);

    rope = new Rope(ball.body, {x: 200, y: 20});
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body, {x: mouseX, y: mouseY});
}

function draw() {
    background('black');
    Engine.update(engine);
    ground.display();

    box4.display();
    box3.display();
    box2.display();
    box1.display();
    box0.display();
    box3_side2.display();
    box2_side2.display();
    box1_side2.display();
    box0_side2.display();
    ball.display();
    
    rope.display();
}
