//This creates a function named "figt"
var playerName = window.prompt("what is your robot's name?");
var playerHealth = 100 ;
var playerAttack = 10 ;
//You can also log multiple values at once like this 
console.log(playerName, playerAttack, playerHealth);

var enemyName = "Roborto";
var enemyHealth = 50;
var enemyAttack =  12;

var fight = function(){
    window.alert("Welcome to Robot Gladiatiors!");
    //Subtract the value of `playerAttack` from the value of `enemyHealth` and use that result to update the value in the `enemyHealth` variable
    enemyHealth = enemyHealth - playerAttack;

  // Log a resulting message to the console so we know that it worked.
    console.log(playerName + " attacked " + enemyName + " . " + enemyName + " now has " + enemyHealth + " health remaingin.");
  // Subtract the value of `enemyAttack` from the value of `playerHealth` and use that result to update the value in the `playerHealth` variable.
    playerHealth = playerHealth - enemyAttack;

  // Log a resulting message to the console so we know that it worked.
    console.log( enemyName + " attacked " + playerName + ". " + playerName + " now has "+ playerHealth + " health remaining.");



};

fight();
