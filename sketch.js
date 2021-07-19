var box;
function setup() {
  createCanvas(400,400);
  box = createSprite(200,200, 50,30);
}

function draw() 
{
  
  background(30);
  if(keyDown(RIGHT_ARROW)){
    //box.velocityX = 4;
    box.position.x += 4;
    //box.position.x = box.position.x+4
  }
  if(keyDown(LEFT_ARROW)){
    box.position.x -= 4;
  }
drawSprites();
}




