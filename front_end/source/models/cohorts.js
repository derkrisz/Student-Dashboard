const Cohort = require('./cohort.js');

const Cohorts = function(){
  var cohortsArray = [];

  var teachers1 = ["Keith", "Sandy", "Sian", "Upul"];
  var teachers2 =["Craig", "Zsolt", "John"];
  var teachers3 = ["Darren", "Finn", "Jarrod"];

  cohort1 = new Cohort("E17", new Date(2017, 9, 30), teachers1, true);
  cohort2 = new Cohort("E18", new Date(2017, 10, 20), teachers2, true);
  cohort3 = new Cohort("E19", new Date(2018, 0, 29), teachers3, false);

  cohortsArray.push(cohort1);
  cohortsArray.push(cohort2);
  cohortsArray.push(cohort3);

  return cohortsArray;
}


module.exports = Cohorts;
