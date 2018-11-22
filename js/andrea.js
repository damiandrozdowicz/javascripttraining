

let myPlayer = {
  playerName: "Andrea",
  playerColor: "green",
  playerInitiative: 3,
  isActive: true,
  harbours: [],
  vicotoryPoints: 4,
  resources : {
      wood: 0,
      sheep: 0,
      grain: 0,
      clay: 0,
      ore: 0
  },
  availableStructures : {
      cities: 4,
      roads: 15,
      settlements: 5
  },
  specialCards : {
      longestRoadCard: false,
      largestArmyCard: false
  },
  constructions : {
      cities:  0,
      roads: 0,
      settlements:0

  },
  developmentCards : {
      card : {
          cardType: "",
          cardQty: 5,
          usedCards: []
 
      }
  }

}

let NewResources = {
  wood: 10,
  sheep: 10,
  grain: 10,
  clay: 10,
  ore: 10
};



function addResources(player, resources){    
  player.resources.wood = player.resources.wood + resources.wood;          
  console.log(player.resources.wood,player.resources.wood , resources.wood)
  player.resources.sheep = player.resources.sheep + resources.sheep;
  player.resources.grain = player.resources.grain + resources.grain;
  player.resources.clay = player.resources.clay + resources.clay;
  player.resources.ore = player.resources.ore + resources.ore;

                         
  /*return player   */
                
};




addResources(myPlayer, NewResources);        // definicia, ze addresources vrati hodnoty myPlayer
console.log(1,myPlayer)     
addResources(myPlayer, NewResources);
console.log(2,myPlayer)     
addResources(myPlayer, NewResources);
console.log(3,myPlayer)     
addResources(myPlayer, NewResources);
console.log(4,myPlayer)     