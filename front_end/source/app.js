const syllabusView = require('./views/syllabus_view');
const FullSyllabus = require('./views/full_syllabus_view');
const ColumnConstruct = require('./models/columns.js');
const Request = require('./services/request');
const MapWrapper = require('./services/mapWrapper.js');
const DateView = require('./views/date_view');
const DisplayEvents = require('./views/display_events_view.js');
const Event = require('./models/event.js');

const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');
const externalEventsRequest = new Request('http://localhost:3000/api/events');
const fullSyllabus = new FullSyllabus();
const displayEvents = new DisplayEvents();
const columnConstruct = new ColumnConstruct();
const dateView = new DateView();
;
// syllabusView = new SyllabusView()

const events1 = [];
const event1start = new Date(2018, 1, 9, 12 , 0);
const event1end = new Date(2018, 1, 9, 13 , 0);
const event2start = new Date(2018, 1, 16, 10 , 0);
const event2end = new Date(2018, 1, 16, 14 , 0);
var event1 = new Event("Float", "Lunch Time Talk", 'https://floatapp.com/', "Emily", 'emily.milne@codeclan.com', event1start, event1end, "Fri");
var event2 = new Event("E17", "Speed Networking", 'https://codeclan.com/', "Kim", 'kim.watson@codeclan.com', event2start, event2end, "Fri");
events1.push(event1);
events1.push(event2);


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
  const closeSyllabusClicked = document.querySelector("#close_popup");
  syllabusButton.addEventListener('click', syllabusButtonClicked);
  closeSyllabusClicked.addEventListener('click', closePopup);

  syllabusRequest.get(getFullSyllabusComplete);
  syllabusRequest.get(allColumnsConstructed);
  externalEventsRequest.get(displayEventsTech);
  // mapInitialize();
  dateView.dynamicDate();
  displayEventsInternal(events1);


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
  displayEvents.render(info);
};

const displayEventsInternal = function(events){
  displayEvents.renderInternal(events);
}







const mapInitialize = function(){
  var mapDiv = document.querySelector('.internalinfo');

  var center = { lat: 55.9470, lng: -3.2020 };
  var mainMap = new MapWrapper(mapDiv, center, 16);
  mainMap.addMarker(center);

}

document.addEventListener("DOMContentLoaded", app);
