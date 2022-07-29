let trex ,trex_running;
let ground;ground_image;

function preload(){
  trex_running = loadAnimation('trex1.png','trex3.png','trex4.png')
  ground_image = loadImage('ground2.png')
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50)
  trex.addAnimation('runner',trex_running)
  trex.scale = 0.5
  //trex.velocityX = 6

  
  //create a ground sprite
  ground = createSprite(300,180,600,20)
  ground.velocityX = -6
  ground.addImage(ground_image)
}

function draw(){
  background("white")

  //make the trex jump on space key press
  if(keyDown('space')){
    trex.velocityY = -10
  }

  // add gravity
  trex.velocityY = trex.velocityY + 0.5

  console.log(ground.x)

  if(ground.x <0){
    ground.x = 300
  }

  trex.collide(ground)
  drawSprites()
}
