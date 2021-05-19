var SpaceKnight = SpaceKnight || {};

SpaceKnight.UI = {};



  SpaceKnight.UI.refreshStats = function() {
    //modify the dom
    document.getElementById('stat-fuel').innerHTML = Math.ceil(this.ship.fuel);
    document.getElementById('stat-morale').innerHTML = Math.floor(this.ship.morale);
    document.getElementById('stat-crew').innerHTML = this.ship.crew;
    document.getElementById('stat-oxygen').innerHTML = this.ship.oxygen;
    document.getElementById('stat-money').innerHTML = this.ship.money;
    document.getElementById('stat-torpedoes').innerHTML = this.ship.torpedoes;
    document.getElementById('stat-hull').innerHTML = this.ship.hull;

  
    document.getElementById('stat-sword').innerHTML = this.ship.fuel;
    document.getElementById('stat-morale').innerHTML = this.ship.morale;
    document.getElementById('stat-crew').innerHTML = this.ship.crew;
    document.getElementById('stat-oxygen').innerHTML = this.ship.oxygen;
    document.getElementById('stat-money').innerHTML = this.ship.money;
    document.getElementById('stat-torpedoes').innerHTML = this.ship.torpedoes;
    document.getElementById('stat-hull').innerHTML = this.ship.hull;
  };
  