var wall,thickness;
var bullet,speed,weight;
var bulletRightEdge,wallLeftEdge;

function setup() {
  createCanvas(1600,400);

  bullet = createSprite(60, 200, 100, 40);

  wall = createSprite(1500,200,thickness,height/2);

  speed = random(150,300);
  weight = random(30,52);

  thickness = random(22,83);

}

function draw() {
  background(0);  

  bullet.velocityX = 20;
  
   if(hasCollided(bullet,wall)){

   	bullet.velocityX = 0;
   	var damage = 0.5 * width * speed * speed/(thickness*thickness*thickness);

   	if(damage > 10){
   		wall.shapeColor =  color(255,0,0);
   	}
   	if(damage < 10){
   		wall.shapeColor = color(0,255,0);
   	}
   }

  drawSprites();
}

function hasCollided(lbullet,lwall){

bulletRightEdge = lbullet.x + lbullet.width;
wallLfetEdge = lwall.x;

if(bulletRightEdge >= wallLeftEdge){

	return true;

}else{

  return false;
}

}