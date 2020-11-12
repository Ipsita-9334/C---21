var rect1, rect2, rect3;


function setup() {
  createCanvas(800,400);
  rect1 = createSprite(400, 100, 50, 50);
  rect2 = createSprite(400,350,50,50);
  rect3 = createSprite(400,150);
  rect1.debug = true;
  rect2.debug = true;
  rect3.debug = true;

  rect3.velocityY = 4;
  rect2.velocityY = -4;
}

function draw() {
  background(255,255,255);  

  

    //bounceOff(rect3,rect2);
    if(isTouching(rect1,rect2)){
       rect1.shapeColor = "red";
       rect2.shapeColor = "blue";
    } else{
      rect1.shapeColor = "green";
      rect2.shapeColor = "yellow";
    }

  drawSprites();
}

