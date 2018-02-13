const FullSyllabus = require('./views/full_syllabus_view');
const ColumnView = require('./views/columns_view.js');
const Request = require('./services/request');
const MapWrapper = require('./services/mapWrapper.js');
const DateView = require('./views/date_view');
const DisplayEvents = require('./views/display_events_view.js');
const Cohorts = require('./models/cohorts.js');
const Event = require('./models/event.js');
const Events = require('./models/events.js');

const syllabusRequest = new Request('http://localhost:5000/api/syllabus/');
const externalEventsRequest = new Request('http://localhost:3000/api/events');
const fullSyllabus = new FullSyllabus();
const displayEvents = new DisplayEvents();
const columnConstruct = new ColumnView();
const dateView = new DateView();
const cohorts = new Cohorts();
const events = new Events();
events.populate();


const syllabusButtonClicked = function(){
  console.log("button clicked");
  var popupDiv = document.querySelector("#popup_bg");
  popupDiv.style.display = 'block';
}

const pdaButtonClicked = function(){
  window.open("https://github.com/codeclan/pda");
}

const closePopup = function(){
  var popupDiv = document.querySelector("#popup_bg");
  popupDiv.style.display = 'none';
}

const closeMap = function(){
  var mapPopUp = document.querySelector("#mappopup_bg");
  mapPopUp.style.display = 'none';
}

const pubMapPopup = function(){
  console.log("pubs clicked");
  var pubPopup = document.querySelector('#mappopup_bg');
  pubPopup.style.display = 'block';
  var mapDiv = document.querySelector('#mapPopUpMain');
  var center = { lat: 55.946613, lng: -3.203017 };
  var codeclan = { lat: 55.946962, lng: -3.201958 };
  var pub = { lat: 55.9458, lng: -3.2036 };
  var mainMap = new MapWrapper(mapDiv, center, 17);
  var pub1 = mainMap.addMarker(pub);
  var codeclan1 = mainMap.addMarker(codeclan);
  mainMap.addInfoBubble(pub1, "The Chanter");
  mainMap.addInfoBubble(codeclan1, "CodeClan");
  infoWindowPub.open(mainMap, codeclan);
  infoWindowCodeclan.open(mainMap, pub);
}

const app = function() {
  const syllabusButton = document.querySelector('#full-details');
  const closeSyllabusClicked = document.querySelector("#close_popup");
  const closeMapClicked = document.querySelector("#close_mappopup");
  const pdaButton = document.querySelector('#PDA');
  const pubsButtonClicked = document.querySelector('#pubs');

  pdaButton.addEventListener('click', pdaButtonClicked);
  syllabusButton.addEventListener('click', syllabusButtonClicked);
  closeSyllabusClicked.addEventListener('click', closePopup);
  closeMapClicked.addEventListener('click', closeMap);
  pubsButtonClicked.addEventListener('click', pubMapPopup);

  syllabusRequest.get(getFullSyllabusComplete);
  syllabusRequest.get(allColumnsConstructed);
  externalEventsRequest.get(displayEventsTech);
  dateView.dynamicDate();
  displayEventsInternal(events.events);


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

const displayEventsInternal = function(events){
  displayEvents.renderInternal(events);
}


document.addEventListener("DOMContentLoaded", app);
