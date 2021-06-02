class Player {
  constructor(){
 this.index=null;
 this.distance=0;
 this.rank=null;
  }
  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
      playerCount = data.val();
    })
  }

  updateCount(count){
    database.ref('/').update({
      playerCount: count
    });
  }

  update(name){
    var playerIndex = "player" + playerCount;
    database.ref(playerIndex).set({
      name:name
    });
  }

  

 /* getAni(){
    var playerIndexA = "player" + playerCount;
    playerIndexA.on("value",function(data){
     aRead = data.val();
    })
  }
  
  updateAni(number){
    database.ref('/').update({
      aRead: number
    });
  }*/

  updatePlayer(){
    var playerIndexA = "players/player"+this.index;
    database.ref(playerIndexA).set({
      distance:this.distance
    });
  }

  static getPlayerInfo(){
    var playerInfoRef = database.ref('players');
    playerInfoRef.on("value",(data)=>{
      allPlayer = data.val();
    })
  }
  
getPlayersAtTheEnd(){
  database.ref('playersAtTheEnd').on("value",(data)=>{
    this.rank = data.val();
  })
}
  static updatePlayersAtTheEnd(rank){
    database.ref('/').update({
      playerCount:count
    });
  }
  
}
