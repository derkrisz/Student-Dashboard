const Request = require('../services/request');
const Cohort = require('cohorts.js');



var cohorts = [];

var teachers1 = ["Keith", "Sandy", "Sian", "Upul"];
var teachers2 =["Craig", "Zsolt", "John"];
var teachers3 = ["Darren", "Finn", "Jarrod"];

cohort1 = new Cohort("E17", new Date(2017, 09, 30), teachers1, true);
cohort2 = new Cohort("E18", new Date(2017, 10, 20), teachers2, true);
cohort3 = new Cohort("E19", new Date(2018, 0, 29), teachers3, false);

cohorts.push(cohort1);
cohorts.push(cohort2);
cohorts.push(cohort3);

module.exports = cohorts;
