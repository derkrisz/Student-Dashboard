const MapWrapper = require('../services/mapWrapper.js');

const DisplayEvents = function(){

}

DisplayEvents.prototype.renderInternal = function (incomingEvents) {
  var events = removeEventsBeforeToday(incomingEvents);
  this.createInternalEventsTable(events);
};

DisplayEvents.prototype.renderExternal = function (incomingApiInfo) {
  var info = incomingApiInfo;
  this.createExternalEventsTable(info);
};

DisplayEvents.prototype.createTable = function(col1, col2, col3, col4){
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


DisplayEvents.prototype.createInternalEventsTable = function(events){
  const target = document.querySelector('.internalinfo');
  let table = this.createTable("Day", "Event", "Organiser", "Time")
  table = this.populateInternalTable(table, events);
  target.appendChild(table);
}


DisplayEvents.prototype.populateInternalTable = function(table, events){
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
    return table;
}

DisplayEvents.prototype.createExternalEventsTable = function(info){
  const target = document.querySelector('.techinfo');

  let table = this.createTable("Day", "Event", "Venue", "Time")

  for (counter = 0; counter < 8; counter++){
    let tr = document.createElement('tr');
    let td1 = document.createElement('td');
    let td2 = document.createElement('td');
    let td3 = document.createElement('td');
    let td4 = document.createElement('td');
    let a = document.createElement('a');

    let totalTime = this.formatTime(info)

    let date = info.data[counter].start.rfc2882local;
    let choppedDate = date.substring(0, 12);

    let title = info.data[counter].summaryDisplay;
    let choppedTitle = title.substring(0, titleChop(title));

    let venueInfo = this.getVenueInfo(info);

    const venueButton = document.createElement('button');
    venueButton.id = "table_button"
    venueButton.innerText = venueInfo.location;
    venueButton.addEventListener('click', this.venuePopUp);

    if (venueInfo.location === "TBA"){
      venueButton.disabled = 'true';
    }
    // venueButton.value = [venueInfo.latitude, venueInfo.longitude];
    venueButton.valuevenue= venueInfo.location;
    venueButton.valueLat =venueInfo.latitude;
    venueButton.valueLng =venueInfo.longitude;

    a.href = info.data[counter].siteurl;
    a.target = "_blank"
    a.innerHTML = choppedTitle;

    td1.innerText = choppedDate;
    td2.appendChild(a);
    td3.appendChild(venueButton);
    td4.innerText = totalTime;
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    table.appendChild(tr);
  }

  target.appendChild(table);
}

DisplayEvents.prototype.getVenueInfo = function(info){
  let venue;
  let venuelat;
  let venuelng;

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

  return venueDetails = { location: venue, latitude: venuelat, longitude: venuelng};
}

DisplayEvents.prototype.formatTime = function(info){
  let timestart = info.data[counter].start.hourtimezone + ":" + info.data[counter].start.minutetimezone;
  let timeend = info.data[counter].end.hourtimezone + ":" + info.data[counter].end.minutetimezone;
  let totaltime = `${timestart} - ${timeend}`;
  return totaltime;
}


DisplayEvents.prototype.venuePopUp = function(){
  let mapPopupDiv = document.querySelector("#mappopup_bg");
  let mapDiv = document.querySelector('#mapPopUpMain');
  mapPopupDiv.style.display = 'block';
  let incomingVenue = this.valuevenue;
  let incomingLat = this.valueLat;
  let incomingLng = this.valueLng;


  mapDiv.innerText = "This event does not have a venue yet :("
  let latNum = Number(incomingLat);
  let lngNum = Number(incomingLng);
  let center = { lat: latNum, lng: lngNum };
  let mainMap = new MapWrapper(mapDiv, center, 16);
  let bubble =mainMap.addMarker(center);
  mainMap.addInfoBubble(bubble, incomingVenue);

}


  var titleChop = function(string){
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
