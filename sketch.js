var bg;
var sleep;
var brush;
var gym;
var eat;
var drink;
var move;
var bath;
var astronaut;
var edges;

function preload(){
  bg= loadImage("Images/Images/iss.png")
  sleep= loadAnimation("Images/Images/sleep.png")
  brush= loadAnimation("Images/Images/brush.png")
  gym= loadAnimation("Images/Images/gym1.png","Images/Images/gym2.png","Images/Images/gym11.png","Images/Images/gym12.png")
  eat= loadAnimation("Images/Images/eat1.png","Images/Images/eat2.png")
  drink= loadAnimation("Images/Images/drink1.png","Images/Images/drink2.png")
  move= loadAnimation("Images/Images/move.png")
bath= loadAnimation("Images/Images/bath1.png","Images/Images/bath2.png")
}


function setup() {
  createCanvas(800,600);
 astronaut= createSprite(300, 230);
 astronaut.addAnimation("Sleeping",sleep)
 astronaut.scale= 0.1;

}

function draw() {
  background(bg); 

  textSize(20)
  fill("white")
  text("Instruction:",20,35)
  
  textSize(15)
  text("Up arrow= brushing",20,55)
  text("Down arrow= gyming",20,70)
  text("Left arrow= Eating",20,85)
  text("Right arrow= bathing",20,100)
  text("m key = moving",20,115)
  text("d key = drinking",20,130)

  edges= createEdgeSprites();
  astronaut.bounceOff(edges)

  if(keyDown("UP_ARROW")){
    astronaut.addAnimation("Brushing",brush)
    astronaut.changeAnimation("Brushing")
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("DOWN_ARROW")){
    astronaut.addAnimation("Gyming",gym)
    astronaut.changeAnimation("Gyming")
    astronaut.y= 350;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("LEFT_ARROW")){
    astronaut.addAnimation("Eating",eat)
    astronaut.changeAnimation("Eating")
    astronaut.y= 350;
    astronaut.x= 150;
    astronaut.velocityX= 0.5;
    astronaut.velocityY= 0.5;
  }

  if(keyDown("RIGHT_ARROW")){
    astronaut.addAnimation("Bathing",bath)
    astronaut.changeAnimation("Bathing")
    astronaut.x= 300;
    astronaut.velocityX= 0;
    astronaut.velocityY= 0;
  }

  if(keyDown("m")){
    astronaut.addAnimation("Moving",move);
    astronaut.changeAnimation("Moving");
    astronaut.velocityX= 1;
    astronaut.velocityY= 1;
  }

  if(keyDown("d")){
    astronaut.addAnimation("Drinking",drink);
    astronaut.changeAnimation("Drinking");
    astronaut.y= 350;
    astronaut.x= 150;
    astronaut.velocityX= 0.5;
    astronaut.velocityY= 0.5;
  }

  drawSprites();
}