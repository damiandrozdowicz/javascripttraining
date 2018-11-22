/* let playerAge;
let playerName;

if(prompt("Greetings! What is your age?") > 18){
    alert("Oh, glad to hear that! So you can handle this sword. Take it and folow me.");

    playerName = prompt("Here, sign in and I will show you your stash where you cat store all your gear.");

    alert("Welcome " + playerName + "! A great adventure is about to start. Take a rest, and I will tell you more in the next lesson of JS training.")
} */

//Simulates 2 Dice Rolls, result between 2 - 12
function getDicesRoll() {

  //1. dice
  let firstDiceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
  console.log("First Dice Roll: " + firstDiceRoll);

  //2. dice
  let secondDiceRoll = Math.floor(Math.random() * Math.floor(6)) + 1;
  console.log("Second Dice Roll: " + secondDiceRoll);

  return firstDiceRoll + secondDiceRoll;

}

//getDicesRoll();


/* console.log(`
-----------------
Round: ${currentRound}
Current Player: ${currentPlayer}
You have: ${playerResources_lumber} x lumber, ${playerResources_brick} x brick, ${playerResources_wool} x wool, ${playerResources_ore} x ore
Your tokens: ${playerTokens_city} x city(s) ${playerTokens_settlement} x settlements and ${playerTokens_road} x road(s) 
Victory points: ${playerVictoryPoints}
`);
 */

let player = {
  playerName: "John Smith",
  playerColor: "red",
  playerInitiative: 0,
  isActive: false,
  harbours: [],
  victoryPoints: 0,
  availableStructures: {
    cities: 4,
    settlements: 5,
    roads: 15
  },
  constructions: {
    cities: 0,
    settlements: 0,
    roads:0
  },
  specialCards: {
    longestRoadCard: false,
    largestArmyCard: false
  },
  resources: {
    wood: 10,
    sheep: 10,
    grain: 10,
    clay: 10,
    ore: 10
  },
  buildStructure: function() { console.log('to do...')},
  trade: function() { console.log('to do...')},
  acceptDeal: function() { console.log('to do...')},
  createOffer: function() { console.log('to do...')},
  useDevelopmentCard: function() { console.log('to do...')},
  rollDices: function() { console.log('to do...')},
  finishRound: function() { console.log('to do...')}
}

let testResources = {
  wood: 5,
  sheep: 5,
  grain: 5,
  clay: 5,
  ore: 5
}

addResources(player, testResources)

function addResources(player, resources) {
  player.resources.wood = player.resources.wood + resources.wood;
  player.resources.sheep = player.resources.sheep + resources.sheep;
  player.resources.grain = player.resources.grain + resources.grain;
  player.resources.clay = player.resources.clay + resources.clay;
  player.resources.ore = player.resources.ore + resources.ore;
}

/* function addResources(player, newResources) {
  for (resource in player.resources) {
    player.resources[resource] += newResources[resource]
  }
} */



//console.log("ADD RESOURCES", player)

let takeResources = {
  wood: 2,
  sheep: 2,
  grain: 2,
  clay: 2,
  ore: 2
}

function removeResources(player, newResources) {
  for (resource in player.resources) {
    player.resources[resource] = (player.resources[resource] >= newResources[resource]) ? player.resources[resource] - newResources[resource] : 0;
  }
}

/* function removeResources(player, newResources) {
  if ( player.resources.wood >= newResources.wood ) {
    player.resources.wood = player.resources.wood - newResources.wood;
  } else {
    player.resources.wood = 0;
  }

  if ( player.resources.sheep >= newResources.sheep ) {
    player.resources.sheep = player.resources.sheep - newResources.sheep;
  } else {
    player.resources.sheep = 0;
  }

  if ( player.resources.grain >= newResources.grain ) {
    player.resources.grain = player.resources.grain - newResources.grain;
  } else {
    player.resources.grain = 0;
  }

  if ( player.resources.clay >= newResources.clay ) {
    player.resources.clay = player.resources.clay - newResources.clay;
  } else {
    player.resources.clay = 0;
  }

  if ( player.resources.ore >= newResources.ore ) {
    player.resources.ore = player.resources.ore - newResources.ore;
  } else {
    player.resources.ore = 0;
  }
}
 */

removeResources(player, takeResources)

console.log("REMOVE RESOURCES", player)


// Lesson

const board = {
  tiles: {
    forest: 1,
    pasture: 1,
    mountain: 1,
    hill: 1,
    desert: 1
  },
  players: [
    {
      playerName: "",
      colour: "",
      isActive: false
    }
  ],
  createBoard: function() { console.log('to do...')},
  distributeGoods: function() { console.log('to do...')},
  nextPlayer: function() { console.log('to do...')}
}

const game = {
  isFinished: false
}


function addPlayer () {
  let elTable = document.getElementById('table');

  elTable.innerHTML = `
  <tr>
    <th scope="row">1</th>
    <td>Red</td>
    <td>Otto</td>
    <td><a href="#" class="removeItem">X</a></td>
  </tr>` + `
  <tr>
    <th scope="row">1</th>
    <td>Red</td>
    <td>Otto</td>
    <td><a href="#" class="removeItem">X</a></td>
  </tr>`;
}

addPlayer ()
