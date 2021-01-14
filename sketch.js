var fixedRec, movingRec;

function setup() {
  createCanvas(1200,800);
  fixedRec = createSprite(600,400,50,80);
  fixedRec.debug = true;
  fixedRec.shapeColor = "green";

  movingRec = createSprite(400,200,80,30);
  movingRec.debug = true;
  movingRec.shapeColor = "green";
}

function draw() {
  background(255,255,255);  
  movingRec.x = mouseX;
  movingRec.y = mouseY;
  
  if (movingRec.x - fixedRec.x < fixedRec.width/2 + movingRec.width/2 &&
    fixedRec.x - movingRec.x < movingRec.width/2 + fixedRec.width/2 &&
    movingRec.y - fixedRec.y < movingRec.height/2 + fixedRec.height/2 &&
    fixedRec.y - movingRec.y < movingRec.height/2 + fixedRec.height/2){
    fixedRec.shapeColor = "yellow";
    movingRec.shapeColor = "yellow"; 
  }
  else{
    fixedRec.shapeColor = "green";
    movingRec.shapeColor = "green";
  }

  drawSprites();
}