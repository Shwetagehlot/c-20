var fx,mv;
function setup() {
  createCanvas(800,400);
  
fx=createSprite(200, 200, 50, 50);
fx.shapeColor="green";
mv=createSprite(400, 200, 80, 30);
mv.shapeColor="green";
}


function draw() {
  background(255,255,255);  
  mv.x=World.mouseX;
  mv.y=World.mouseY;
  if(mv.x-fx.x<fx.width/2+mv.width/2 &&
     fx.x-mv.x<fx.width/2+mv.width/2 &&
     mv.y-fx.y<fx.width/2+mv.width/2 &&
     fx.y-mv.y<fx.width/2+mv.width/2 )
  {
    mv.shapeColor="red";
    fx.shapeColor="red";
    
  }
  else{
  mv.shapeColor="green";
  fx.shapeColor="green";
  }
  drawSprites();
}