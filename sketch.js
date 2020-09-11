var fixedRect, movingRect;

function setup() {
  createCanvas(800,400);
  fixedRect = createSprite(200, 0, 50, 50);
  fixedRect.shapeColor = "green";
  fixedRect.velocityY=2;
  movingRect = createSprite(200,400,80,50);
  movingRect.shapeColor = "blue";
  movingRect.velocityY=-2;
}

function draw() {
  background(0);  

  

  if(fixedRect.x-movingRect.x<fixedRect.width/2 + movingRect.width/2
    && movingRect.x-fixedRect.x<fixedRect.width/2 + movingRect.width/2){
      movingRect.velocityX = -(movingRect.velocityX);
      fixedRect.velocityX = -(fixedRect.velocityX);
    }


  if(movingRect.y-fixedRect.y<fixedRect.height/2 + movingRect.height/2
    && fixedRect.y-movingRect.y<fixedRect.height/2 + movingRect.height/2){
    movingRect.velocityY=-(movingRect.velocityY);
    fixedRect.velocityY=-(fixedRect.velocityY);

  }

  drawSprites();
}