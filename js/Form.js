class Form {
  constructor() {
   paperImg = loadImage("paper.png");
   cwImage = loadAnimation("cursed witch/cw0.png", "cursed witch/cw1.png", "cursed witch/cw2.png", "cursed witch/cw3.png", "cursed witch/cw4.png");
   roadImg = loadImage("road.png");
   chest = loadImage("chest.png");
  }

  display(){
   
    var title = createElement('h2')
    title.html("The Shadows Of The Enchanted Jungle");
    title.position(550, 0);
   
    
    var input = createInput("Name");
    var button = createButton('Play');
    var next = createButton('Next');
    var play = createButton('PlayGame');
    next.position(200, 230);
    play.position(200, 300);

    input.position(675, 320);
    button.position(740, 400);

    reset = createButton('reset');
    reset.position(100, 200);
   /* var choose1=createButton('1');
    var choose2=createButton('2');
    var choose3=createButton('3');
    var choose4=createButton('4');*/
   
    /*input.mousePressed(function(){
      input=createInput(" ");
    });*/
   
  
    button.mousePressed(function(){
      input.hide();
      button.hide();
      title.hide();
      background (39,154,39);

      //background(paperImg);
      imageMode (CENTER);
      image (paperImg, 757.5, 357.5,1515, 715);
      var name = input.value();
      
      playerCount+=1;
      player.update(name);
      player.updateCount(playerCount);
      var greeting = createElement('h3');
      //greeting.html("Hello " + name )
      greeting.position(260, 320)
      animation(cwImage, 250, 350);
      
      
      next.position(1250,600);
      textSize(25);
      fill ("purple");
      text ("Now that you are here, I am the only one that can help you escape", 500, 200);
      text("this enchanted jungle but I must say it will come at a price.", 500, 250);
      text("You are my slave and will be if you don't get me the enchanted", 500, 300);
      text("jewel that helps lift my curse.", 500, 350);
      text("But this task isn't easy, you will face a lot of difficulties, complete it to be free",500,400);
      text("or be my slave forever.", 500, 450);
      text("-The Cursed Witch", 1000, 525);

    
      
     
      
    });

   

    next.mousePressed(function(){
      //background(paperImg);
      imageMode (CENTER);
      image (paperImg, 757.5, 357.5,1515, 715);
      image (chest, 1150, 150);
      fill ("purple");
      animation(cwImage, 250, 350);
      next.hide();

      play.position (1250,600);
      text("Things to remember:-",500, 200)
     text("- Using the arrow keys will help you move.", 500, 250)
     text("- Collecting gems will increase your speed.", 500, 300)
     text("- Getting hit by obstacles will decrease your speed.", 500, 350);
     text("- You have 3 lives, getting hit by a monster will make you lose a life.", 500, 400)
     text("- After all the lives are exhausted, it's game over for you.",500, 450)
     text("- To win reach the treasure box which contains the jewel first.", 500, 500);
     
    })
  


play.mousePressed(function(){
 gameState = 1;
 play.hide();

})
   /*choose.mousePressed(function(){
     choose.hide();
     background("white");
    image(c1c, 300, 200, 400, 200);
    text("A",300, 300);
    image(c2c, 600, 200, 400, 200);
    text("B",600, 300);
    image(c3c, 900, 200, 400, 200);
    choose3.position(900, 300);
    image(c4c, 1200, 200, 400, 200);
    choose4.position(1200, 300);
    
    
     
     
   })

   choose1.mousePressed(()=>{
    animations+=1;
    game.updateAnimations(animations);
    //player.updateAni(1);

    if(playerCount===4 && animations===4){
      choose1.hide();
      choose2.hide();
      choose3.hide();
      choose4.hide();
      game.update(2);

      }else{
      fill("purple");
      textSize(100);
      text("Waiting for other players", 230, 500);
      game.update(1);
      }
   })

   choose2.mousePressed(()=>{
    animations+=1;
    game.updateAnimations(animations);
    
    //player.updateAni(2);
   
    if(playerCount===4 && animations===4){
      
      choose1.hide();
      choose2.hide();
      choose3.hide();
      choose4.hide();
      game.update(2);
      }else{
      fill("purple");
      textSize(100);
      text("Waiting for other players", 230, 500);
      game.update(1);
      }
   })

   choose3.mousePressed(()=>{
    animations+=1;
  game.updateAnimations(animations);
   // player.updateAni(3);
    if(playerCount===4 && animations===4){
     
      choose1.hide();
      choose2.hide();
      choose3.hide();
      choose4.hide();
      game.update(2);
      }else{
      fill("purple");
      textSize(100);
      text("Waiting for other players", 230, 500);
      game.update(1);
      }
   })

   choose4.mousePressed(()=>{
    animations+=1;
    game.updateAnimations(animations);
   // player.updateAni(4);
    if(playerCount===4 && animations===4){
     
      choose1.hide();
      choose2.hide();
      choose3.hide();
      choose4.hide();
      game.update(2);
      }else{
      fill("purple");
      textSize(100);
      text("Waiting for other players", 230, 500);
      game.update(1);
      }
   })*/

   /*imagefun() { 
    var Image_Id = document.getElementById('getImage'); 
    if (Image_Id.src.match("c1/c1.0.png")) { 
      Image_Id.src = "c1/c1.1.png; 
     } else { 
       Image_Id.src = "c1/c1.0.png"; 
     } } */
    
reset.mousePressed(()=>{
  player.updateCount(0);
  game.update(0);
  playersAtTheEnd.update(0);
  player.update("");
})
   drawSprites();
}

}
