var SpaceKnight = SpaceKnight || {};

SpaceKnight.ShipObject = {};

SpaceKnight.ShipObject.init = function(stats){
  this.hull = stats.hull;
  this.crew = stats.crew;
  this.torpedoes = stats.torpedoes;
  this.fuel = stats.fuel;
  this.oxygen = stats.oxygen;
  this.money = stats.money;
  this.morale = stats.morale;
};


SpaceKnight.Inventory = {};

SpaceKnight.Inventory.init = function(stats){
    this.sword = stats.sword;
    this.map = stats.map;
    this.laserGun = stats.laserGun;
    this.key = stats.key;
    this.unsentLetter = stats.unsentLetter;
    this.ammo = stats.ammo;
  };
  