const syllabusView = require('./views/syllabus_view');
const Request = require('./services/request');
// syllabusView = new SyllabusView()

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

  console.log("what is syllabusRequest", syllabusRequest);

  syllabusRequest.get(test);
  console.log('blah');
};

document.addEventListener("DOMContentLoaded", app);
