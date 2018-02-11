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
  cohort1 = new Cohort("E17", new Date(2017, 09, 30), teachers);
  cohort2 = new Cohort("E18", new Date(2017, 10, 20));
  cohort3 = new Cohort("E19", new Date(2018, 0, 29));
});

it('should count the week numbers since starting', function() {
  assert.equal(cohort1.week, 14);
  assert.equal(cohort2.week, 11);
  assert.equal(cohort3.week, 2);
});
