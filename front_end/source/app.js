const syllabusView = require('./views/syllabus_view');
// syllabusView = new SyllabusView()
const FullSyllabus = require('./views/full_syllabus_view')
const fullSyllabus = new FullSyllabus();
const Request = require('./services/request');
const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');
const ColumnConstruct = require('./models/columns.js')
const columnConstruct = new ColumnConstruct();
const DisplayEvents = require('./views/display_events_view.js')
const externalEventsRequest = new Request('https://opentechcalendar.co.uk/api1/area/62/events.json');
const displayEvents = new DisplayEvents();

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


  syllabusRequest.get(getFullSyllabusComplete);
  syllabusRequest.get(allColumnsConstructed);
  externalEventsRequest.get(displayEventsTech);
};


const allColumnsConstructed = function(wholeSyllabus){
  var cohort1week = 13;
  columnConstruct.renderColumn1(cohort1week, wholeSyllabus);
  var cohort2week = 10;
  columnConstruct.renderColumn2(cohort2week, wholeSyllabus);
  var cohort3week = 2;
  columnConstruct.renderColumn3(cohort3week, wholeSyllabus);
};

const getFullSyllabusComplete = function(allSyllabus){
  allSyllabus.forEach(function(week){
    fullSyllabus.render(week);
  })
};


const displayEventsTech = function(info){
  console.log(info);
  displayEvents.render(info);
  console.log(info);
  // var date =
  // DisplayEvents.render(events, date)
};

document.addEventListener("DOMContentLoaded", app);
