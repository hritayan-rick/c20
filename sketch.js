var car ,  wall;
var speed, weight;
function setup() {
 createCanvas(800,400);


 car1=createSprite(200, 200 , 15, 5);
 
 
 car2=createSprite(199, 290 , 15, 5);

 car3=createSprite(199, 50 , 15, 5);

 car4=createSprite(198, 120 , 15, 5);
  
 car1 .collidewall1;
 debug = true;



 wall1=createSprite(700, 200, 12, 56)
 wall1.shapeColor = (80 , 80 , 80);

 wall2=createSprite(702, 280, 12, 56)
 wall2.shapeColor = (80 , 80 , 80);

 wall3=createSprite(700, 50, 12, 56)
 wall3.shapeColor = (80 , 80 , 80);

 wall4=createSprite(700, 130, 12, 56)
 wall4.shapeColor = (80 , 80 , 80);


 car1.velocityX = 5;
 car1.speed=2;
 weight=random(401, 1501)

 car2.velocityX = 5;
 car1.speed=2;
 weight=random(401, 1501)
  
 car3.velocityX = 5;
 car1.speed=2;
 weight=random(401, 1501)

 car4.velocityX = 5;
 car1.speed=2;
 weight=random(401, 1501)

}

function draw() {
  background(0 , 255 ,0);  
  drawSprites();
}