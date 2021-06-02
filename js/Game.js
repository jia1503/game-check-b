class Game {
  constructor(){}
  
  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }
  
  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  getAnimations(){
    var animationsRef = database.ref('animations');
    animationsRef.on("value",function(data){
      animations = data.val();
    })
  }

  updateAnimations(no){
    database.ref('/').update({
      animations: no
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    
    }
    c1 = createSprite(200,200);
    c1.addAnimation(c1Img);
    c2 = createSprite(200,200);
    c2.addAnimation(c2Img);
    c3 = createSprite(200,200);
    c3.addAnimation(c3Img);
    c4 = createSprite(200,200);
    c4.addAnimation(c4Img);
    
    players = [c1, c2, c3, c4];
   
    
  }

  /*wait(){
    if(gameState === 1){
      if(playerCount===4 && animations===4){
        choose1.hide();
        choose2.hide();
        choose3.hide();
        choose4.hide();
        game.update(2);
      }
    }
  }*/


  play(){
    if(gameState===1){
      imageMode(CENTER);
      image(roadImg, 757.5, 357.5, 1500, 1500);
    }
   if(allPlayers!=undefined){
     var index = 0;
     var x = 200;
     var y;

     for(var plr in allPlayers){
       index = index + 1;
       x = x+200;
       y = 715 - allPlayers[plr].distance;
       players[index-1].x = x;
       players[index-1].y = y;

       if(index === player.index){
         players[index-1].shapeColor = "red";
         camera.position.x = 1515/2;
         camera.position.y = players[index-1].y
       }
     }

   }
   
   if(keyIsDown(UP_ARROW)&& player.index!=null){
     player.distance+=10;
     player.updatePlayer();
   }

   if(player.distance>3900){
     gameState=2;
     player.rank+=1;
     Player.updatePlayersAtTheEnd(player.rank);
   }
   
  }
  
}
