
var bullet, wall;
var speed, weight;
var thickness;





function setup() {
  createCanvas(1600,400);
  bullet = createSprite(50, 200, 10, 10);
  bullet.shapeColor(white);
  speed=random(223,321);
  weight=random(30,52)
  thickness=random(22,83);
  wall=createSprite(1200,200, thickness, height/2);
  wall.shapeColor=(80,80,80);
  bullet.velocityX = speed;
}
function draw() {
if(hasCollieded(bullet,wall))
{
    bullet.velocityX=0;
    var damage=0.5 * weight * speed* speed/(thickness* thickness* thickness):

    if(damage>10)
    {
        wall.shapeColor=color(255,0,0);
    }
    if(damage<10);
    {
        wall.shapeColor=color(0,255,0);
    }
}
  drawSprites();
}
function hasCollided(bullet, wall)
{
    bulletRightEdge=bullet.x +bullet.width;
    wallLeftEdge=wall.x;
    if(bulletRigthEdge>=wallLeftEdge)
    {
        return true
    }
    return false;
}