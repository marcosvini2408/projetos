
function setup() {
  createCanvas(400,400);
  background(50);
  box = createSprite(200,200,30,30);

}

function draw() 
{
  
  if (keyIsDown(RIGTH_ARROW))
  {
    background("red");
  }
   
  
  if (keyIsDown(LEFT_ARROW)) 
  {
    background("blue");
    
  }
 
    if (keyIsDown(UP_ARROW)) 
  {
    background("yellow");
   
  }

  if (keyIsDown(DOWN_ARROW)) 
  {
    background("green");
  }


  
  drawSprites();
}

