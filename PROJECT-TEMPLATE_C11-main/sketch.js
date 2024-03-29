var navio, navio_navegando;
var mar, marImg;

function preload(){
navio_navegando = loadAnimation ("ship-1.png", "ship-2.png", "ship-3.png", "ship-4.png");
marImg = loadImage ("sea.png");
}

function setup(){
  createCanvas(windowWidth, 740);
  
  mar = createSprite(700, 200, 5, 5);
  mar.addImage(marImg);
  mar.scale=0.75;
  mar.velocityX=-1;

  navio = createSprite (100, 350, 50, 50);
  navio.addAnimation("running", navio_navegando);
  navio.scale=0.2;
}

function draw() {
  background("blue");
  
  if(mar.x < 0){
    mar.x= 700;
  }
  if(navio.y < 300){
    navio.y = 304;
  }

  if(keyDown("d") || keyDown("right")){
    navio.x=navio.x+5;
  }
  if(keyDown("a") || keyDown("left")){
    navio.x=navio.x-5;
  }
  if(keyDown("w") || keyDown("up")){
    navio.y=navio.y-4;
  }
  if(keyDown("s") || keyDown("down")){
    navio.y=navio.y+4;
  }

  drawSprites();

 
}
