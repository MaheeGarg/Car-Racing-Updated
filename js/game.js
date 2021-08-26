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
  
    async start(){
      if(gameState === 0){
        player = new Player();
        var playerCountRef = await database.ref('playerCount').once("value");
        if(playerCountRef.exists()){
          playerCount = playerCountRef.val();
          player.getCount();
        }
        form = new Form()
        form.display();
      }
    }

    play(){
      form.hide()
      textSize(30)
      text("Game Started", 150,200)
    
      if(keyIsDown (UP_ARROW) && player.index !== null){
      player.distance= player.distance +100;
      player.update();

      var ypos = 170;
      for(var dummy in allPlayers){
        ypos = ypos +30;
        textSize (15);
        text(allPlayers[dummy].name + "="+ allPlayers[dummy].distance, 170,ypos );

      }

    }
  }
  
  
  }
  