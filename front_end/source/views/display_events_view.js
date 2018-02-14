const MapWrapper = require('../services/mapWrapper.js');

const DisplayEvents = function(){

}


DisplayEvents.prototype.renderInternal = function (incomingEvents) {
  var events = removeEventsBeforeToday(incomingEvents);
  createInternalEventsTable(events);
};

DisplayEvents.prototype.renderExternal = function (incomingApiInfo) {
  var info = incomingApiInfo;
  createExternalEventsTable(info);
};

const createTable = function(col1, col2, col3, col4){
  const table = document.createElement('table');
  let tabletitles =document.createElement('tr');
  let tabletitle1 = document.createElement('th');
  var tabletitle2 = document.createElement('th');
  var tabletitle3 = document.createElement('th');
  var tabletitle4 = document.createElement('th');
  tabletitle1.innerText = col1;
  tabletitle2.innerText = col2;
  tabletitle3.innerText = col3;
  tabletitle4.innerText = col4;

  tabletitles.appendChild(tabletitle1);
  tabletitles.appendChild(tabletitle2);
  tabletitles.appendChild(tabletitle3);
  tabletitles.appendChild(tabletitle4);
  table.appendChild(tabletitles);
  return table;
}

const createInternalEventsTable = function(events){
  const target = document.querySelector('.internalinfo');
  target.innerText = "";
  let table =createTable("Day", "Event", "Organiser", "Time")


  events.forEach(function(event){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var a = document.createElement('a');
    var a1 = document.createElement('a');
    a.href = event.title_url;
    a.target = "_blank"
    a.innerHTML = `${event.title_type} : ${event.title}`;
    td2.appendChild(a);
    td1.innerText = event.day
    a1.href = event.organiser_email;
    a1.innerHTML = `${event.organiser}`;
    td3.appendChild(a1);

    td4.innerText = event.total_time;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  });

  target.appendChild(table);
}

const createExternalEventsTable = function(info){
  const target = document.querySelector('.techinfo');
  target.innerText = "";

  let table = createTable("Day", "Event", "Venue", "Time")



  for (counter = 0; counter < 8; counter++){
    var tr = document.createElement('tr');
    var td1 = document.createElement('td');
    var td2 = document.createElement('td');
    var td3 = document.createElement('td');
    var td4 = document.createElement('td');
    var a = document.createElement('a');
    var day = info.data[counter].start.rfc2882local;
    var daysub = day.substring(0, 12);
    var date = info.data[counter].start.daylocal;
    var name = info.data[counter].summaryDisplay;
    var namesub = name.substring(0, namechop(name));
    var venue;
    var venuelat;
    var venuelng;

    try{
      const venueFullName =info.data[counter].venue.title
      venue = venueFullName.substring(0, venuechop(venueFullName));
      venuelat = info.data[counter].venue.lat;
      venuelng = info.data[counter].venue.lng;
    }
    catch(e){
      venue ="TBA";
      venuelat = null;
      venuelng = null;
    }

    var timestart = info.data[counter].start.hourtimezone + ":" + info.data[counter].start.minutetimezone;
    var timeend = info.data[counter].end.hourtimezone + ":" + info.data[counter].end.minutetimezone;
    var totaltime = `${timestart} - ${timeend}`;

    const venueButton = document.createElement('button');
    venueButton.id = "table_button"
    venueButton.innerText = venue;



    venueButton.addEventListener('click', venuePopUp);
    if (venue === "TBA"){venueButton.disabled = 'true';

    }
    venueButton.value = [venuelat, venuelng];
    venueButton.valuevenue= venue;
    venueButton.valueLat =venuelat;
    venueButton.valueLng =venuelng;
    a.href = info.data[counter].siteurl;
    a.target = "_blank"
    a.innerHTML = namesub;




    td1.innerText = daysub;
    td2.appendChild(a);
    td3.appendChild(venueButton);
    td4.innerText = totaltime;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  }
  target.appendChild(table);
}


var venuePopUp = function(){
  var mapPopupDiv = document.querySelector("#mappopup_bg");
  var mapDiv = document.querySelector('#mapPopUpMain');
  mapPopupDiv.style.display = 'block';
  var incomingVenue = this.valuevenue;
  var incomingLat = this.valueLat;
  var incomingLng = this.valueLng;


  mapDiv.innerText = "This event does not have a venue yet :("
  var latNum = Number(incomingLat);
  var lngNum = Number(incomingLng);
  var center = { lat: latNum, lng: lngNum };
  var mainMap = new MapWrapper(mapDiv, center, 16);
  var bubble =mainMap.addMarker(center);
  mainMap.addInfoBubble(bubble, incomingVenue);

}


  var namechop = function(string){
    if (string.indexOf(":") == -1) {
      return string.length}
      else {
        return string.indexOf(":");
      }
    };

  var venuechop = function(string){
      if (string.indexOf(",") == -1) {
        return string.length}
        else {
          return string.indexOf(",");
        }
      };

  var removeEventsBeforeToday = function(events){
        var returnedEvents = [];
        var now = new Date();
        events.forEach(function(event){
          if (event.end_time > now){
            returnedEvents.push(event)
          }
        })
        return returnedEvents;
      }

  module.exports = DisplayEvents;
