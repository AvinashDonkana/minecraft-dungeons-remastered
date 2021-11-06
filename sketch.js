var WAIT = 0;
var PLAY = 1;
var END = 2;
var gameState = WAIT;
var bgImg;
var alex,steve;
var alexImg,steveImg;
var zombie1,zombie2,zombie3,zombie4;
var zombie1Img,zombie2Img,zombie3Img,zombie4Img;


function preload(){
bgImg = loadImage("edited photos/background.jpg");
alexImg = loadImage("edited photos/alex.png");
steveImg= loadImage("edited photos/steve.png");
zombie1Img= loadImage("edited photos/zombie1.png");
zombie2Img=loadImage("edited photos/zombie2.png");
zombie3Img=loadImage("edited photos/zombie3.png");
zombie4Img= loadImage("edited photos/zombie4.png");
}

function setup(){
createCanvas(900,600);

alex= createSprite(150,500,30,80);
alex.addImage(alexImg);
alex.scale=0.5;
alex.visible = false;

steve= createSprite(120,300,30,80);
steve.addImage(steveImg);
steve.scale=0.7;
steve.visible=false;

zombie1= createSprite(120,300,30,80);
zombie1.addImage(zombie1Img);
zombie1.scale=0.7;
zombie1.visible=false;

zombie2= createSprite(120,300,30,80);
steve.addImage(zombie2Img);
steve.scale=0.7;
steve.visible=false;

steve= createSprite(120,300,30,80);
steve.addImage(steveImg);
steve.scale=0.7;
steve.visible=false;

steve= createSprite(120,300,30,80);
steve.addImage(steveImg);
steve.scale=0.7;
steve.visible=false;
}

function draw(){
background("lightblue");

textSize(20);
fill("red");
text("Press A to choose Alex ", width/2, height /2 -200);
text("Press S to choose Steve", width/2, height/2- 150);

drawSprites();
}