const FullSyllabus = require('./views/full_syllabus_view');
const ColumnConstruct = require('./models/columns.js');
const Request = require('./services/request');
const MapWrapper = require('./services/mapWrapper.js');
const DateView = require('./views/date_view');
const DisplayEvents = require('./views/display_events_view.js');
const Cohorts = require('./models/cohorts.js');

const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');
const externalEventsRequest = new Request('http://localhost:3000/api/events');
const fullSyllabus = new FullSyllabus();
const displayEvents = new DisplayEvents();
const columnConstruct = new ColumnConstruct();
const dateView = new DateView();
const cohorts = new Cohorts();


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
  mapInitialize();
  dateView.dynamicDate();

};

const allColumnsConstructed = function(wholeSyllabus){
  cohorts.populate();
  columnConstruct.renderColumn(cohorts, wholeSyllabus);
};

const getFullSyllabusComplete = function(allSyllabus){
  allSyllabus.forEach(function(week){
    fullSyllabus.render(week);
  })
};

const displayEventsTech = function(info){
  displayEvents.render(info);
};

const mapInitialize = function(){
  var mapDiv = document.querySelector('.internalinfo');

  var center = { lat: 55.9470, lng: -3.2020 };
  var mainMap = new MapWrapper(mapDiv, center, 16);
  mainMap.addMarker(center);

}

document.addEventListener("DOMContentLoaded", app);
