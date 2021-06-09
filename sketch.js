var vb,bb;

function setup() {
  createCanvas(800,400);
  bb=createSprite(400, 200, 50, 50);
  bb.shapeColor="red"
  bb.velocityX=4;

  vb=createSprite(800, 200, 50, 50);
  vb.shapeColor="yellow"
  vb.velocityX=-4;
}

function draw() {
  background("turquoise");  

  //isTouching
  // vb.x=mouseX;
  // vb.y=mouseY;

  // if(vb.x-bb.x<vb.width/2+bb.width/2
  //   &&bb.x-vb.x<vb.width/2+bb.width/2
  //   &&vb.y-bb.y<vb.height/2+bb.height/2
  //   &&bb.y-vb.y<vb.height/2+bb.height/2){
  //     vb.shapeColor="green"
  //     bb.shapeColor="green"
  // }
  // else{
  //    vb.shapeColor="yellow"
  //    bb.shapeColor="red"}

  if(vb.x-bb.x<vb.width/2+bb.width/2
  &&bb.x-vb.x<vb.width/2+bb.width/2){
    vb.velocityX=vb.velocityX*(-1)
    bb.velocityX=bb.velocityX*(-1)
  }

  if(vb.y-bb.y<vb.height/2+bb.height/2
    &&bb.y-vb.y<vb.height/2+bb.height/2){
      vb.velocityY=vb.velocityY*(-1)
      bb.velocityY=bb.velocityY*(-1)
    }
  drawSprites();
}