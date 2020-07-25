const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var table;
var player1image, player1;
var sky;
var player2, computerimage;
var ball;
var form, player, game;
var score = 0;
var score2 = 0;
var sound1;
var computerHit;
var sound2;
//textSize(500);
//var textFont("Arial");
var gameState = "serve";
//var player = new System.Media.SoundPlayer("c:sound.mp3");
//player.Play();

function preload(){
  player1image = loadImage("racket.png");
  tableImage = loadImage("table2.png");
  skyimage = loadImage("bg3.jpg");
  computerimage = loadImage("tt2copy.png");
  computerHit = loadImage("tt2.png");
  ballimage = loadImage("ball.png");
  sound1 = loadSound("sound.mp3");
  sound2 = loadSound('croudCheering.mp3');
  //player2image2 = loadImage("tt.png")
}

function setup() {
  createCanvas(800,600);
  /*game = new Game();
  game.getState();
  game.start();*/
  if(keyDown === 32){
    ball.velocityY = -5; 
    gameState = "play";
    }

 /* sky = createSprite(400,250,800,50)
  sky.addImage("skyImage", skyimage);
  sky.scale = 2;*/
  
  player2 = createSprite(400,160);
  player2.addImage("player2Image", computerimage);
  player2.scale = 0.8;

  table = createSprite(400,500);
  table.addImage("table1Image", tableImage);
  table.scale = 1.2;

  ball = createSprite(400,400);
  ball.addImage("ballImage", ballimage);
  ball.scale = 0.05;
  //ball.velocityY = 1;

  player1 = createSprite(300,600);
  player1.addImage("playerImage", player1image);
  player1.scale = 0.4;
  ball.velocityY = 3;

}

function draw() {
  background(skyimage); 
  console.log(player1.y);

  if(gameState === "serve"){
    text("Press Space Key to play!",350,100);
  }

  player1.position.x = mouseX;
  player1.position.y = mouseY; 

  // ball.x = player1.x;

 /* if (ball.y < 400){
    player2.x = ball.x;
  }*/

  /*- 20*/;

  player2.position.x = ball.position.x;

  if (ball.velocityY = 0){
   player1.y = ball.y;
  }

  ball.velocityY = -5;




 if(player1.position.x === 400 && player1.position.y === 300){
   ball.velocityY = 1;
   }

   if (ball.y <= 100){
    // isTouching2(ball,player2);
     ball.velocityY = ball.velocityY*(-1);
   }

   if(ball.y < 0){
   reset();
   gameState = "serve";
   score = score + 1;
   ball.x = 400;
   ball.y = 400;
   }

   if(ball.y > 600){
    gameState = "serve";
    score2 = score2 + 1;
    ball.x = 400;
    ball.y = 400;
   // gameState = "serve";
    }

   if (score === 5 || score2 === 5){
    gameState = "over";
    text("Game Over! Press 'R' to restart!" , 350, 100);
    ball.velocityY = 0;
    ball.velocityX = 0;
    ball.position.y = 500;
    ball.position.x = 400;
   }

   if(keyDown === 'r' && gameState === "over"){
     reset();
     gameState = "serve";
     ball.velocityY = 0;
     ball.velocityX = 0;
     ball.position.x = 400;
     ball.position.y = 400;
   }

   if(gameState === "over"){
    ball.velocityY = 0;
    ball.velocityX = 0;
   }

  isTouching(ball,player1);
  isTouching2(ball,player2);
  
  /*if(ball.x > 200 && ball.x < 400 && ball.y < 170){
     ball.velocityY = 200;
     ball.velocityX = 500;
   }*/

    
  if(ball.x > 400 && ball.x < 600 && ball.y <= 200){
    ball.velocityY = 300;
    ball.velocityX = 10;
  }

/*  if(player1.x < 400 && ball.y < 180){
    ball.velocityY = 300;
    ball.velocityX = 100;
    ball.position.x = 500;
    ball.position.y = 400;
  }*/
        
  if(ball.x > 100 && ball.x < 399 && ball.y === 170){
    ball.velocityY = 300;
    ball.velocityX = -10;
    sound2.play();
   // ball.velocityY = -200;
   // gameState = "play";
   // player2.addImage("computer2image", computerHit);
   // sound1.play(); 
  }

 /* if(gameState === "play"){
    sound2.play();
  }

 /* if(ball.x <= 290){
    ball.velocityX = 0;
    ball.velocityY = 300;
  }*/

 /* if (ball.x === 450){
    ball.velocityX = 0;
    ball.velocityY = -500;
    ball.x = 451;
    player2.x = 451;
  }*/
 /* if (ball.x === 320 && ball.y < 210){
    ball.velocityX = 0;
    ball.velocityY = 300;
    ball.x = 400;
   // player2.x = 451;
  }*/
  if (player1.x < 400 && ball.y < 400){
    ball.velocityY = -6;
    ball.velocityX = -4;
  }

  if(ball.y <= 170){
    ball.velocityY = 300;
  }

  if (ball.x > 55 && ball.y <= 170){
    ball.velocityY = 300;
  }
  /*if (ball.y <= 300){
    ball.veloictyY = -5;
  }*/

  //sound1.play(); 

  text ("Player's Score =" + score, 100, 20);
  text ("Computer's Score =" + score2, 630, 20);

drawSprites();
}

function isTouching(object1,object2){
  if(player1.x  === ball.x && ball.y > 170 || ball.x > 200 || player1.x - 5 === ball.x || player1.x -4 === ball.x  || player1.x - 3 === ball.x || player1.x - 2 === ball.x || player1.x - 1 === ball.x || player1.x + 1 === ball.x || player1.x + 2 === ball.x || player1.x + 3 === ball.x || player1.x + 4 === ball.x | player1.x + 5 === ball.x  || player1.x - 10 === ball.x || player1.x - 9 === ball.x  || player1.x - 8 === ball.x || player1.x - 7 === ball.x || player1.x - 6 === ball.x || player1.x + 6 === ball.x || player1.x + 7 === ball.x || player1.x + 8 === ball.x || player1.x + 9 === ball.x | player1.x + 10 === ball.x || player1.x - 15 === ball.x || player1.x - 14 === ball.x  || player1.x - 13 === ball.x || player1.x - 12 === ball.x || player1.x - 11 === ball.x || player1.x + 11 === ball.x || player1.x + 12 === ball.x || player1.x + 13 === ball.x || player1.x + 14 === ball.x | player1.x + 15 === ball.x  || player1.x - 16 === ball.x || player1.x - 17 === ball.x  || player1.x - 18 === ball.x || player1.x - 19 === ball.x || player1.x - 20 === ball.x || player1.x + 16 === ball.x || player1.x + 17 === ball.x || player1.x + 18 === ball.x || player1.x + 19 === ball.x | player1.x + 20 === ball.x || player1.x + 21 === ball.x || player1.x + 22 === ball.x  || player1.x + 23 === ball.x || player1.x + 24 === ball.x || player1.x + 25 === ball.x /*player1.y === ball.y*/ /*|| player1.y - 5 === ball.y || player1.y - 4 === ball.y || player1.y - 3 === ball.y || player1.y - 2 === ball.y || player1.y - 1 === ball.y || player1.y + 1 === ball.y || player1.y + 2 === ball.y || player1.y + 3 === ball.y || player1.y +4 === ball.y || player1.y +5 === ball.y*/ ){
     ball.velocityY = -6;
     ball.velocityX = 4;
     gameState = "play";
    // sound1.play(); 
    // player.play();
  }
}

function isTouching2(object1,object4){
  if(player2.x === ball.x && ball.x <= 171){
    ball.velocityY = 5;
    ball.velocityX = -3;
  }
}

function reset(){
  ball.x = 400;
  ball.y = 400;
  ball.velocityY = 0;
  ball.velocityX = 0;
  score = 0;
  score2 = 0;
 // gameState = "serve";
}
