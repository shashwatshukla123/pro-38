
  var monkey , monkey_running ;
  var banana ,bananaImage, obstacle, obstacleImage;

  var FoodGroup, obstacleGroup;
  var score;

  var city ,cityImage ;
  var ground ;

  var PLAY = 1;
  var END  = 0;
  var gameState = 1;

  var i;

  function preload(){


    monkey_running = loadAnimation ("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")

    bananaImage = loadImage("banana.png");
    obstaceImage = loadImage("obstacle.png");
    
    cityImage = loadImage("jungle.png");
    obstacleImage = loadImage("download (4).png");
    
  }



  function setup() {
    
     createCanvas (600,500);

    score = 0 ;

    city = createSprite(300,200,10,10);
    city.addImage("city",cityImage);
    city.x = city.width /2;
    city.visible = false;
    

    monkey = createSprite(300,200,10,10);
    monkey.addAnimation("monkey_running",monkey_running);
    monkey.scale = 0.17
    monkey.velocityY = 4;
    
    monkey.velocityY = monkey.velocityY + 1;
    
    ground = createSprite(300,460,600,14);
    ground.visible = false

    FoodGroup = createGroup();
    obstacleGroup = createGroup();

  }


  function draw() {
  background ("grey");

   citye();

       for( i=0; i < 10000; i=i+750){
        image(cityImage,i,-60);

        }
        console.log(i);
 
    monkey.collide(ground);

      
    if (keyDown("space")&& monkey.y>270){
      
      monkey.velocityY = -22;
    }
      
    if (FoodGroup.isTouching(monkey)){
             
      banana.destroy();
      score = score+1;}
    
    if (obstacleGroup.isTouching(monkey)){
      
      score = 0;
      monkey.scale = monkey.scale - 0.01;
    }
      
    monkey.velocityY =  monkey.velocityY +0.9;
    monkey.velocityX = 2;
    ground.velocityX = 2;
    

    camera.position.x = monkey.x;

      
    food();
    rock();
      
    switch(score){
        
        case 1:monkey.scale = 0.18;
             break;
        case 2:monkey.scale = 0.19;
             break; 
        case 3:monkey.scale = 0.2;
             break;
        case 4:monkey.scale = 0.22; 
             break;
        case 5:monkey.scale = 0.24; 
             break;
        case 6:monkey.scale = 0.26; 
             break;
        case 7:obstacleGroup.velocityY = 2; 
             break;
        default:break;
        
    }
      
    

    drawSprites();
    
    textSize(20);
    stroke(rgb(153, 255, 102));
    strokeWeight(3);
    fill ("indigo")
    text("Score : "+score,monkey.x+200,100);



  }



  function food(){

    if (frameCount % 100==0){

      var y = Math.round(random(80,200));
      banana = createSprite(monkey.x+Math.round(100,200),200,101,10);
      banana.addImage(bananaImage);
      banana.velocityX =-3;
      banana.scale= 0.1
      banana.y = y;
      banana.setCollider("rectangle",0,0,1,5);
      banana.debug = false;
      banana.lifetime = 600/3;
      FoodGroup.add(banana);
    }

  }

  function rock(){

    if (frameCount % 100 == 0 ){

    obstacle = createSprite(monkey.x+300,400,100,10);
    obstacle.addImage("running",obstacleImage);
    obstacle.scale = 0.35;
    obstacle.velocityX= -8;
    obstacle.depth = 1;
    obstacle.setCollider("rectangle",0,0,20,20);
    obstacle.debug = false;
    obstacle.lifetime = 200;
    obstacleGroup.add(obstacle);

    }
  }

  function citye(){


          


  }
