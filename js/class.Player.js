let _currentMaxPlayerID = 0;

class Player {
  /**
   * @param {string} name Player name
   * @param {object{value : string, label : string}} color Player color
   */
  constructor(name, color){
    this.id = ++_currentMaxPlayerID;
    this.name = name;
    this.color = color;
  }
}