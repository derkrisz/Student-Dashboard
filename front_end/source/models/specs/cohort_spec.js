var Cohort = require('../cohort');
var assert = require('assert');

describe ('Cohort', function () {
  var cohort1;
  var cohort2;
  var cohort3;
  var teachers;
});

beforeEach(function () {
  teachers = ["Keith", "Sandy", "Sian", "Upul"];
  cohort1 = new Cohort("E17", new Date(2017, 09, 30), teachers, 13);
  cohort2 = new Cohort("E18", new Date(2017,10,20), 10);
  cohort3 = new Cohort("E19", new Date(2018,00,25), 2);
});

it('should count the week numbers since starting', function() {
  assert.equal(cohort1.getNoOfWeeks(), 13)
  assert.equal(cohort2.getNoOfWeeks(), 10)
  assert.equal(cohort3.getNoOfWeeks(), 1)
});
