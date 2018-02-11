const Request = require('../services/request');


const Cohort = function(name, start_date, teachers, week){
  this.name = name;
  this.start_date = start_date;
  this.teachers = teachers;
  this.syllabus= "";
  this.week = week;
}

// not currently taking the 2 week holiday into account?
const getNoOfWeeks = function(){
  var oneWeek = 7*24*60*60*1000; // hours*minutes*seconds*milliseconds
  var firstDate = new Date(2018,01,08);
  var secondDate = new Date(2018,02,12); // can you use todays date here?
  var diffWeeks = Math.round(Math.abs((firstDate.getTime() - secondDate.getTime())/(oneWeek)));
  return diffWeeks;
}

console.log(getNoOfWeeks());

module.exports = Cohort;
