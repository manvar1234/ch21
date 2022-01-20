var fixedRect, movingRect;
var rect1, rect2, rect3, rect4

function setup() {
  createCanvas(1200,800);
  fixedRect = createSprite(600, 400, 50, 80);
  fixedRect.shapeColor = "green";
 // fixedRect.debug = true;
  movingRect = createSprite(400,200,80,50);
  movingRect.shapeColor = "green";
 // movingRect.debug = true;
 
  rect1=createSprite(100,100,50,80)
  rect1.shapeColor = "green"
  
  rect2=createSprite(200,100,50,80)
  rect2.shapeColor = "green"

  rect3=createSprite(300,100,50,80)
  rect3.shapeColor = "green"

  rect4=createSprite(400,100,50,80)
  rect4.shapeColor = "green"
}

function draw() {
  background(0,0,0);  
  movingRect.x = World.mouseX;
  movingRect.y = World.mouseY;

 if(istouching(movingRect,rect1)){
    movingRect.shapeColor = "red";
    rect1.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "green";
    rect1.shapeColor = "green";
  }

  if(istouching(movingRect,rect2)){
    movingRect.shapeColor = "red";
    rect2.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "green";
    rect2.shapeColor = "green";
  }

  if(istouching(movingRect,rect3)){
    movingRect.shapeColor = "red";
    rect3.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "green";
    rect3.shapeColor = "green";
  }

  if(istouching(movingRect,rect4)){
    movingRect.shapeColor = "red";
    rect4.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "green";
    rect4.shapeColor = "green";
  }
  
  if(istouching(movingRect,fixedRect)){
    movingRect.shapeColor = "red";
    fixedRect.shapeColor = "red";
 }
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor = "green";
  }
   
  drawSprites();
}

function istouching(object1,object2){ 
  if (object1.x - object2.x < object2.width/2 + object1.width/2
    && object2.x - object1.x < object2.width/2 + object1.width/2
    && object1.y - object2.y < object2.height/2 + object1.height/2
    && object2.y - object1.y < object2.height/2 + object1.height/2) {
 return true;
    }
    else{
      return false ;
    }
}