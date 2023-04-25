const Park = function (name, ticketPrice) {
    this.name = name;
    this.ticketPrice = ticketPrice;
    this.collectionOfDinosaurs = [];
  }

  Park.prototype.addDinosaur = function (dinosaur) {
    this.collectionOfDinosaurs.push(dinosaur);
  };
  
  Park.prototype.removeDinosaur = function (dinosaur) {
    const indexOfDinosaur = this.collectionOfDinosaurs.indexOf(dinosaur);
    this.collectionOfDinosaurs.splice(indexOfDinosaur, 1);
  };

  Park.prototype.mostVisitedDinosaur = function () {
    let dinosaur = this.collectionOfDinosaurs[0];
    for (const dino of this.collectionOfDinosaurs) {
        if (dino.guestsAttractedPerDay > dinosaur.guestsAttractedPerDay) {
            dinosaur = dino
        }
    }
    return dinosaur;
  };
  
  module.exports = Park;