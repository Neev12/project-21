var fixedRect, movingRect;
var gameobg1, gameob2;

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
  fixedRect.debug = true;
  movingRect = createSprite(600,200,80,30);
  movingRect.shapeColor = "green";
  movingRect.debug = true;

gameobg1= createSprite(100, 100, 50, 80);
  gameobg1.shapeColor = "green";
  gameobg1.debug = true;

 gameobg2= createSprite(200, 100, 50, 80);
 gameobg2.shapeColor = "green";
 gameobg2.debug = true;
 movingRect.velocityY=5;
fixedRect.velocityY=-5;
}

function draw() {
  background(0,0,0);  
  //movingRect.x = World.mouseX;
  //movingRect.y = World.mouseY;
  console.log(movingRect.x - fixedRect.x);

  bounceoff(movingRect,fixedRect);
if(isTouching(movingRect,gameobg1)){
  movingRect.shapeColor = "red" ;
  gameobg1.shapeColor = "red";

}
else{
  movingRect.shapeColor = "green";
  gameobg1.shapeColor = "green";
}
  
  drawSprites();
}
