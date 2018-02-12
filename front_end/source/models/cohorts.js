const Cohort = require('./cohort.js');

const Cohorts = function(){
  this.cohortsArray = [];
}

Cohorts.prototype.populate = function () {

    var teachers1 = ["Keith", "Sandy", "Sian", "Upul"];
    var teachers2 =["Craig", "Zsolt", "John"];
    var teachers3 = ["Darren", "Finn", "Jarrod"];

    cohort1 = new Cohort("E17", new Date(2017, 9, 30), teachers1, true);
    cohort2 = new Cohort("E18", new Date(2017, 10, 20), teachers2, true);
    cohort3 = new Cohort("E19", new Date(2018, 0, 29), teachers3, false);
    cohort4 = new Cohort("E20", new Date(2018, 2, 5), teachers1, false);
    cohort5 = new Cohort("E16", new Date(2017, 9, 1), teachers1, true);

    this.cohortsArray.push(cohort4);
    this.cohortsArray.push(cohort2);
    this.cohortsArray.push(cohort3);
    this.cohortsArray.push(cohort1);
    this.cohortsArray.push(cohort5);

    this.checkAge();
    this.sortByWeek();
    console.log(this.cohortsArray);

    return this.cohortsArray;
};

Cohorts.prototype.sortByWeek = function () {
  return this.cohortsArray.sort(function(a, b){
    return b.week - a.week;
  })
};

Cohorts.prototype.checkAge = function () {
  var updatedArray = []
  this.cohortsArray.forEach(function(cohort){
    if(cohort.week > 0 && cohort.week < 17){
      updatedArray.push(cohort);
    }
  })
  this.cohortsArray = updatedArray;
  return this.cohortsArray;
};


module.exports = Cohorts;
