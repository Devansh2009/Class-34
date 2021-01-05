const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine,world;
var ground,ball

function preload() {

}

function setup(){
    createCanvas(1200,750)
    engine = Engine.create()
    world = engine.world

    ground = new Ground(0,740,2000,10)
    
    box1 = new Box(900,100,70,70)
    box2 = new Box(900,100,70,70)
    box3 = new Box(900,100,70,70)
    box4 = new Box(900,100,70,70)
    box5 = new Box(900,100,70,70)

    box6 = new Box(800,100,70,70)
    box7 = new Box(800,100,70,70)
    box8 = new Box(800,100,70,70)

    box9 = new Box(700,100,70,70)
    box10 = new Box(700,100,70,70)
    box11 = new Box(700,100,70,70)
    box12 = new Box(700,100,70,70)
    box13 = new Box(700,100,70,70)
    box14 = new Box(700,100,70,70)
    box15 = new Box(700,100,70,70)
    box16 = new Box(700,100,70,70)

    ball = new Ball(300,300,50)

    chain = new Chain(ball.body,{x:500, y:200})
}

function draw(){
    background("green")
    Engine.update(engine)
    ground.display()

    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()

    box6.display()
    box7.display()
    box8.display()

    box9.display()
    box10.display()
    box11.display()
    box12.display()
    box13.display()
    box14.display()
    box15.display()
    box16.display()

    ball.display()

    chain.display()
}

function mouseDragged() {
    Matter.Body.setPosition(ball.body,{x:mouseX, y:mouseY})
}

