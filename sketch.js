var bg,bgimg;
var gamebg,gamebgimg;
var zombie1img,zombie1group;
var zombie2img,zombie2group;
var zombie3img,zombie3group;
var zombie4img,zombie4group;
var zombie5img,zombie5group;
var z1,z2,z3,z4,z5,z6,z7,z8,z9,z10;

var gameState = "start";
var plant1,plant1img;
var plant2,plant2img;
var plant3,plant3img;
var plant4,plant4img;
var plant5,plant5img;
var score = 0;
var wining,winingimg;
var bullet1group,bullet2group,bullet3group,bullet4group,bullet5group;

var b1img,b2img,b3img,b4img;
var go,goimg;

var sound1,sound2;

function preload(){
bgimg = loadImage("Images/BG.jpg");
gamebgimg = loadImage("Images/BG2.png");
nightimg = loadImage("Images/night.png");
zombie1img = loadImage("Images/Zombie1.png");
zombie2img = loadImage("Images/Zombie2.png");
zombie3img = loadImage("Images/Zombie3.png");
zombie4img = loadImage("Images/Zombie4.png");
zombie5img = loadImage("Images/Zombie5.png");

plant1img = loadImage("Images/Plant1.png");
plant2img = loadImage("Images/Plant2.png");
plant3img = loadImage("Images/Plant3.png");
plant4img = loadImage("Images/Plant4.png");
plant5img = loadImage("Images/Plant8.png");

b1img = loadImage("Images/Pea2.png");
b2img = loadImage("Images/Pea1.png");
b3img = loadImage("Images/Pea3.png");
b4img = loadImage("Images/Pea5.png");
b5img = loadImage("Images/Pea4.png");

goimg = loadImage("Images/gameover.jpg");
winingimg = loadImage("Images/winner.jpg");

z1 = loadImage("Images/zombie6.png");
z2 = loadImage("Images/zombie7.png");
z3 = loadImage("Images/zombie8.png");
z4 = loadImage("Images/zombie9.png");
z5 = loadImage("Images/zombie10.png");
z6 = loadImage("Images/zombie11.png");
z7 = loadImage("Images/zombie12.png");
z8 = loadImage("Images/zombie13.png");
z9 = loadImage("Images/zombie14.png");
z10 = loadImage("Images/zombie15.png");

sound1 = loadSound("sound/2.mp3");
sound2 = loadSound("sound/1.mp3");

}

function setup() {
  createCanvas(windowWidth,windowHeight);
  go = createSprite(700,300,1400,1500);
 go.addImage("go",goimg);
 go.visible = false;
 bg = createSprite(700,400,1400,1000);
 bg.addImage("bg",bgimg);
 bg.scale = 0.7;
 gamebg = createSprite(700,300,1400,1500);
 gamebg.addImage("gamebg",gamebgimg);
 gamebg.scale = 1.2;
 gamebg.visible = false;
 wining = createSprite(700,300,1400,1500);
 wining.addImage("wining",winingimg);
 wining.visible = false;
 plant1 = createSprite(430,50);
 plant1.addImage("plant1",plant1img);
 plant1.scale =0.2;
 plant2 = createSprite(430,180);
 plant2.addImage("plant2",plant2img);
 plant2.scale = 0.2;
 plant3 = createSprite(430,250);
 plant3.addImage("plant3",plant3img);
 plant3.scale = 0.2;
 plant4 = createSprite(430,420);
 plant4.addImage("plant4",plant4img);
 plant4.scale = 0.3;
 plant5 = createSprite(430,520);
 plant5.addImage("plant5",plant5img);
 plant5.scale = 0.4;

 plant1.visible = false;
 plant2.visible = false;
 plant3.visible = false;
 plant4.visible = false;
 plant5.visible = false;

 zombie1group = new Group();
 zombie2group = new Group();
 zombie3group = new Group();
 zombie4group = new Group();
 zombie5group = new Group();

 bullet1group = new Group();
 bullet2group = new Group();
 bullet3group = new Group();
 bullet4group = new Group();
 bullet5group = new Group();


}

function draw() {
  background(4,4,14); 
  if (mousePressedOver(bg)) {
    gameState = "play";
  }
  if (gameState==="play"){
    bg.visible = false;
    gamebg.visible = true;

 plant1.visible = true;
 plant2.visible = true;
 plant3.visible = true;
 plant4.visible = true;
 plant5.visible = true;

    spawnZombie1();
    spawnZombie2();
    spawnZombie3();
    spawnZombie4();
    spawnZombie5();

   if(keyDown("1")){
     spawnbullet1();
     sound1.play();
   }
   if(keyDown("2")){
    spawnbullet2();
    sound1.play();
  }

  if(keyDown("3")){
    spawnbullet3();
    sound1.play();
  }

  if(keyDown("4")){
    spawnbullet4();
    sound1.play();
  }

  if(keyDown("5")){
    spawnbullet5();
    sound1.play();
  }

if(bullet1group.isTouching(zombie1group)){
  zombie1group.destroyEach();
  bullet1group.destroyEach();
  sound2.play();
  score = score+10 ;
}

if(bullet2group.isTouching(zombie2group)){
  zombie2group.destroyEach();
  bullet2group.destroyEach();
  sound2.play();
  score = score+10 ;
}

if(bullet3group.isTouching(zombie3group)){
  zombie3group.destroyEach();
  bullet3group.destroyEach();
  sound2.play();
  score = score+10 ;
}

if(bullet4group.isTouching(zombie4group)){
  zombie4group.destroyEach();
  bullet4group.destroyEach();
  sound2.play();
  score = score+10 ;
}

if(bullet5group.isTouching(zombie5group)){
  zombie5group.destroyEach();
  bullet5group.destroyEach();
  sound2.play();
  score = score+10 ;
}
 if(score>=500){
   gameState = "win";
 }
 if(gameState==="win"){
   wining.visible = true;
   background("black");
   sound3.play();
   bg.visible = false;
   gamebg.visible = false;
   zombie1group.destroyEach();
   zombie2group.destroyEach();
   zombie3group.destroyEach();
   zombie4group.destroyEach();
   zombie5group.destroyEach();

   plant1.destroy();
   plant2.destroy();
   plant3.destroy();
   plant4.destroy();
   plant5.destroy();
   
   bullet1group.destroyEach();
   bullet2group.destroyEach();
   bullet3group.destroyEach();
   bullet4group.destroyEach();
   bullet5group.destroyEach();
 }
 if(plant1.isTouching(zombie1group)|| plant2.isTouching(zombie2group) || plant3.isTouching(zombie3group) || plant4.isTouching(zombie4group) || plant5.isTouching(zombie5group)){
   gameState = "end"
 }
 if(gameState==="end"){
 bg.visible = false;
 gamebg.visible = false;
 go.visible = true;
 zombie1group.destroyEach();
 zombie2group.destroyEach();
 zombie3group.destroyEach();
 zombie4group.destroyEach();
 zombie5group.destroyEach();

 plant1.destroy();
 plant2.destroy();
 plant3.destroy();
 plant4.destroy();
 plant5.destroy();
 
 }

}
  
  drawSprites();
  fill ("Black");
  textSize(30);
  text("SCORE : "+score,450,650);
}


function spawnZombie1(){
  if(frameCount % 70===0){
    var zombie1 = createSprite(1300,50);
    zombie1.scale = 0.1;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:zombie1.addImage(zombie1img);
      break;
      case 2:zombie1.addImage(z1);
      break;
      case 3:zombie1.addImage(z2);
      break;
      default:break;
    }
    zombie1.velocityX = -1;
    zombie1.lifetime = 220;
    zombie1group.add(zombie1);

  }
}

function spawnZombie2(){
  if(frameCount % 50===0){
    var zombie2 = createSprite(1300,165);
    zombie2.scale = 0.1;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:zombie2.addImage(zombie2img);
      break;
      case 2:zombie2.addImage(z3);
      break;
      case 3:zombie2.addImage(z4);
      break;
      default:break;
    }
    zombie2.velocityX = -2;
    zombie2group.add(zombie2);

  }
}

function spawnZombie3(){
  if(frameCount % 70===0){
    var zombie3 = createSprite(1300,270);
    zombie3.scale = 0.1;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:zombie3.addImage(zombie3img);
      break;
      case 2:zombie3.addImage(z5);
      break;
      case 3:zombie3.addImage(z6);
      break;
      default:break;
    }
    zombie3.velocityX = -1;
    zombie3group.add(zombie3);

  }
}

function spawnZombie4(){
  if(frameCount % 50===0){
    var zombie4 = createSprite(1300,410);
    zombie4.scale = 0.2;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:zombie4.addImage(zombie4img);
      break;
      case 2:zombie4.addImage(z7);
      break;
      case 3:zombie4.addImage(z7);
      break;
      default:break;
    }
    zombie4.velocityX = -2;
    zombie4group.add(zombie4);

  }
}

function spawnZombie5(){
  if(frameCount % 70===0){
    var zombie5 = createSprite(1300,510);
    zombie5.scale = 0.1;
    var rand = Math.round(random(1,3));
    switch(rand){
      case 1:zombie5.addImage(zombie5img);
      break;
      case 2:zombie5.addImage(z9);
      break;
      case 3:zombie5.addImage(z10);
      break;
      default:break;
    }
    zombie5.velocityX = -1;
    zombie5group.add(zombie5);

  }
}
function spawnbullet1(){
   var bullet1 = createSprite(430,30);
    bullet1.scale = 0.1;
    bullet1.addImage("bullet1",b1img);
    bullet1.velocityX = 2;
    bullet1group.add(bullet1);

}

function spawnbullet2(){
  var bullet2 = createSprite(430,160);
   bullet2.scale = 0.1;
   bullet2.addImage("bullet2",b2img);
   bullet2.velocityX = 2;
   bullet2group.add(bullet2);

}

function spawnbullet3(){
  var bullet3 = createSprite(430,260);
   bullet3.scale = 0.1;
   bullet3.addImage("bullet3",b3img);
   bullet3.velocityX = 2;
   bullet3group.add(bullet3);

}

function spawnbullet4(){
  var bullet4 = createSprite(430,400);
   bullet4.scale = 0.1;
   bullet4.addImage("bullet4",b4img);
   bullet4.velocityX = 2;
   bullet4group.add(bullet4);

}

function spawnbullet5(){
  var bullet5 = createSprite(430,500);
   bullet5.scale = 0.1;
   bullet5.addImage("bullet5",b5img);
   bullet5.velocityX = 2;
   bullet5group.add(bullet5);

}
