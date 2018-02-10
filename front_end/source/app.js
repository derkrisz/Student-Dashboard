const syllabusView = require('./views/syllabus_view');
const Request = require('./services/request');
// syllabusView = new SyllabusView()
const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');


const test = function(returned_info){
  var select = document.querySelector('.Mon1');
  returned_info.forEach(function(week){
    if (week.week_number== 2){
      select.innerText = week.day2;
    }
  })
  returned_info.week_
};

const app = function() {
  console.log("what is syllabusRequest", syllabusRequest);

  syllabusRequest.get(test);
  console.log('blah');
};

document.addEventListener("DOMContentLoaded", app);
