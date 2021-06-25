const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1;
var box2;
var ground;
var pig1;
var log1;

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(475,300,100,100);
    box2 = new Box(725,300,100,100);
    box3 = new Box(475,200,100,100);
    box4 = new Box(725,200,100,100);


    ground = new Ground(600,height,1200,20);

    pig1 = new Pig(600,310);
    pig2 = new Pig(600,190);
    pig3 = new Pig(600,90);

    log1 = new Log(600,250,350,PI/2); 
    log2 = new Log(600,140,350,PI/2);

}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    ground.display();
    pig1.display();
    pig2.display();
    pig3.display();
    log1.display();
    log2.display();
    log3.display();
}