const syllabusView = require('./views/syllabus_view');
// syllabusView = new SyllabusView()

const FullSyllabus = require('./views/full_syllabus_view')
const fullSyllabus = new FullSyllabus();

const Request = require('./services/request');
const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');



const test = function(returned_info){
  var select = document.querySelector('.Mon1');
  returned_info.forEach(function(week){
    if (week.week_number == 2){
      select.innerText = week.day2;
    }
  })
  returned_info.week_
};

const syllabusButtonClicked = function(){
  console.log("button clicked");
  var popupDiv = document.querySelector("#popup_bg");
  popupDiv.style.display = 'block';
}

const closePopup = function(){
  var popupDiv = document.querySelector("#popup_bg");
  popupDiv.style.display = 'none';
}

const app = function() {
  const syllabusButton = document.querySelector('#full-details');
  syllabusButton.addEventListener('click', syllabusButtonClicked);
  const closeSyllabusClicked = document.querySelector("#close_popup");
  closeSyllabusClicked.addEventListener('click', closePopup);

  syllabusRequest.get(getFullSyllabusComplete)

  console.log("what is syllabusRequest", syllabusRequest);

  syllabusRequest.get(test);
  console.log('blah');
};

const getFullSyllabusComplete = function(allSyllabus){
  allSyllabus.forEach(function(week){
    fullSyllabus.render(week);
  })
}

document.addEventListener("DOMContentLoaded", app);
