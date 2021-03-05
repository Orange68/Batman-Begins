const Engine=Matter.Engine
const Bodies=Matter.Bodies
const World=Matter.World

var lightning1, lightning2, lightning3, lightning4, light, umbrellaOBJ;

function preload(){
umbrellaOBJ=loadAnimation("images/walking_1.png,images/walking_2.png,images/walking_3.png,images/walking_4.png,images/walking_5.png,images/walking_6.png,images/walking_7.png,images/walking_8.png");
lightning1=loadImage("images/1.png");
lightning2=loadImage("images/2.png");
lightning3=loadImage("images/3.png");
lightning4=loadImage("images/4.png");
}

function setup(){
createCanvas(700,1000);
var umbrellaOBJ=createSprite(350,100);
    
}

function draw(){

if(this.drop.position.y>height){
Matter.Body.setPosition(this.drop,{x:random(0,400), y:random(0,400)})
}

if(World.frameCount%60==0){
var maxDrops=100;
for(var i=0; i<maxDrops; i++){
    drops.push(new createDrop(random(0,400),random(0,400)));
}
}

var xy=4;
var light=createSprite(700,random(0,700));
switch(xy)
{
    case 1: light.addImage(lightning1);
    break;
    case 2: light.addImage(lightning2)
    break;
    case 3: light.addImage(lightning3)
    break;
    case 4: light.addImage(lightning4)
    break;
    default:
    break;
}

umbrellaOBJ.display();
umbrella.display();
drop.display();

drawSprites();
}   

