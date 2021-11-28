

//This creates a function named "figt"
var fight = function(enemy){
  console.log(enemy);
  // generate random damage value based on player's attack power
  var damage = randomNumber(enemy.attack - 3, enemy.attack);

  playerInfo.health = Math.max(0, playerInfo.health - damage);


  while(playerInfo.health > 0 && enemy.health > 0){  
    //ask player if choses to fight or not
    var promptFight = window.prompt("Would you like to FIGHT or SKIP this battle? Enter 'FIGHT' or 'SKIP' to choose.");

       // if player choses to skip
       if (promptFight === "skip" || promptFight === "SKIP") {
        var confirmSkip = window.confirm("Are you sure you'd like to quit?");
          // if yes (true), leave fight
          if (confirmSkip) {
            
            window.alert(playerInfo.name + " has decided to skip this fight. Goodbye!");
            // subtract money from playerInfo.money for skipping
            playerInfo.money = Math.max(0, playerInfo.money - 10);
            console.log("playerInfo.money", playerInfo.money);
            break;
          }
       }
      
        // remove enemy's health by subtracting the amount set in the playerInfo.attack variable
        enemy.health = Math.max(0, enemy.health - playerInfo.attack);
        console.log(
          playerInfo.name + " attacked " + enemy.name + ". " + enemy.name + " now has " + enemy.health + " health remaining."
        );
      
        // check enemy's health
        if (enemy.health <= 0) {
          window.alert(enemy.name + " has died!");
          playerInfo.money = playerInfo.money + 20;
          break;
        } else {
          window.alert(enemy.name + " still has " + enemy.health + " health left.");
        }
      
        // remove player's health by subtracting the amount set in the enemy.attack variable
        playerInfo.health =  Math.max(0, playerInfo.health - enemy.attack);;
        console.log(
          enemy.name + " attacked " + playerInfo.name + ". " + playerInfo.name + " now has " + playerInfo.health + " health remaining."
        );
      
        // check player's health
        if (playerInfo.health <= 0) {
          window.alert(playerInfo.name + " has died!");
          break;
        } else {
          window.alert(playerInfo.name + " still has " + playerInfo.health + " health left.");
        };
       
      
    
  };


};

// function to generate a random numeric value
var randomNumber = function(min, max) {
  var value = Math.floor(Math.random() * (max - min + 1) + min);
  return value;
};

var getplayerName = function(){
  var name ="";
  // ****************************************** 
  // ADD LOOP HERE WHITH PROMPT AND CONDITION
  // ****************************************

  while (name === "" || name === null) {
    name = prompt("What is your robot's name?");
  }
  console.log("Your robot's name is" + name);
  return name;
};


var playerInfo = {
  name: getplayerName(),
  health: 100,
  attack: 10,
  money: 10,
  reset: function(){
    this.health = 100;
    this.money = 10;
    this.attack =10;
  },
  refillHealth: function(){
    if(this.money >=7){
      window.alert("Refilling player's health by 20 for 7 dollars.");
      this.health += 20;
      this.money -=7;
    }
    else {
      window.alert("You don't have enough money!");
    }
  },
  upgradeAttack: function(){
    if (this.money >= 7) {
      window.alert("Upgrading player's attack by 6 for 7 dollars.");
      this.attack += 6;
      this.money -= 7;
    } 
    else {
      window.alert("You don't have enough money!");
    }
  }
};
//You can also log multiple values at once like this 
 console.log(playerInfo.name, playerInfo.attack, playerInfo.health);


var enemyInfo = [
  {
    name: "Roborto",
    attack: randomNumber(10,14)
  },
  {
    name: "Amy Android",
    attack: randomNumber(10,14)
  },
  {
    name: "Robo Trumble",
    attack: randomNumber(10,14)
  }
];


//function to start a new game
var startGame =  function(){
  //reset player stats
  playerInfo.reset();

  for(var i = 0; i < enemyInfo.length; i++) {

    if (playerInfo.health > 0){
      // let player know what round they are in, remember that arrays start at 0 so it needs to have 1 added to it
      window.alert("Welcome to Robot Gladiators! Round " + (i+1));
     // debugger;
      
        // pick new enemy to fight based on the index of the enemy.names array
      var pickedEnemyObj = enemyInfo[i];
      //reset enemy.health before starting new fight
      enemyInfo.health = randomNumber(40,60);
      // use debugger to pause script from runnin and check whats going on at the moment in the code
    // debugger;
      //pass the pickedEnemyName variables value into the fight fuction, where it will assume the value of the enemy.name parameter
      fight(pickedEnemyObj);
      // if we're not at the last enemy in the array
      if(playerInfo.health > 0 && i < enemyInfo.length -1){
          // ask if player wants to use the store before next round
          var storeConfirm = window.confirm("The fight is over, visit the store before the next round?");
         // if yes, take them to the store() function
          if (storeConfirm) {
            shop();
          }
      }
    }
    else{
      window.alert("You have lost your robot in battle! Game Over!");
      break;
    }

    
  }
  // after the loop ends, player is either out of health or enemies to fight, so run the endGame function
  endGame();
  //play again
  //startGame();
};

// function to end the entire game
var endGame = function() {
  if (playerInfo.health > 0){
    window.alert("The game has now ended. Let's see how you did!");
  }
  else{
    window.alert("You've lost your robot in battle.")
  }
  var playAgainConfirm = window.confirm ("would you like to play again?");
  if(playAgainConfirm){
    //restart the game
    startGame();
  }
  else{
    window.alert("Thank you for playing Robot Gladiators! Come back soon!");
  }
  
};

var shop  = function(){
  // generate random damage value based on player's attack power
  var damage = randomNumber(playerInfo.attack - 3, playerInfo.attack);

  enemyInfo.health = Math.max(0, enemyInfo.health - d);  

  // ask player what they'd like to do
  var shopOptionPrompt = window.prompt("Would you like to REFILL your health, UPGRADE your attack, or LEAVE the store? Please enter one: 'REFILL', 'UPGRADE', or 'LEAVE' to make a choice." );
  //USe switch to carry out action
  switch (shopOptionPrompt){
    case "refill":
    case "REFILL": //New case
      playerInfo.refillHealth();
      break;
    case "upgrade": 
    case "UPGRADE": //NEW CASE
      playerInfo.upgradeAttack();
      break;
    case "leave":
    case "LEAVE": //NEw case
      
        window.alert("Leaving the store.");

        // do nothing, so function will end
        break;
      
        default:
        window.alert("You did not pick a valid option. Try again.");

        // call shop() again to force player to pick a valid option
        shop();
        break;
      



  };


};



//Start the game when the page loads
startGame();