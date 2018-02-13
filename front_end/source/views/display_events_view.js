const MapWrapper = require('../services/mapWrapper.js');


const DisplayEvents = function(){

}



DisplayEvents.prototype.renderInternal = function (events) {
  const target = document.querySelector('.internalinfo');
  target.innerText = "";
  var table = document.createElement('table');
  var tabletitles =document.createElement('tr');
  var tabletitle1 = document.createElement('th');
  tabletitle1.innerText = "Day";
  var tabletitle2 = document.createElement('th');
  tabletitle2.innerText = "Event";
  var tabletitle3 = document.createElement('th');
  tabletitle3.innerText = "Organiser";
  var tabletitle4 = document.createElement('th');
  tabletitle4.innerText = "Time";

  tabletitles.appendChild(tabletitle1);
  tabletitles.appendChild(tabletitle2);
  tabletitles.appendChild(tabletitle3);
  tabletitles.appendChild(tabletitle4);
  table.appendChild(tabletitles);


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
};

DisplayEvents.prototype.render = function (info) {
  const target = document.querySelector('.techinfo');
  target.innerText = "";
  var table = document.createElement('table');
  var tabletitles =document.createElement('tr');
  var tabletitle1 = document.createElement('th');
  tabletitle1.innerText = "Day";
  var tabletitle2 = document.createElement('th');
  tabletitle2.innerText = "Event";
  var tabletitle3 = document.createElement('th');
  tabletitle3.innerText = "Venue";
  var tabletitle4 = document.createElement('th');
  tabletitle4.innerText = "Time";
  tabletitles.appendChild(tabletitle1);
  tabletitles.appendChild(tabletitle2);
  tabletitles.appendChild(tabletitle3);
  tabletitles.appendChild(tabletitle4);
  table.appendChild(tabletitles);

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
      // var dateday = date + " " + daysub;
      var name = info.data[counter].summaryDisplay;
      var namesub = name.substring(0, namechop(name));
      var venue ="TBA";
      var venuelat = null;
      var venuelng = null;

      try{
        var venueFullName =info.data[counter].venue.title
        venue = venueFullName.substring(0, venuechop(venueFullName));
        venuelat = info.data[counter].venue.lat;
        venuelng = info.data[counter].venue.lng;
      }
      catch(e){
      }

      var timestart = info.data[counter].start.hourtimezone + ":" + info.data[counter].start.minutetimezone;
      var timeend = info.data[counter].end.hourtimezone + ":" + info.data[counter].end.minutetimezone;
      var totaltime = `${timestart} - ${timeend}`;

      const venueButton = document.createElement('button');
      venueButton.id = "table_button";
      venueButton.innerText = venue;
      venueButton.addEventListener('click', VenuePopUp);
      venueButton.value = [venuelat, venuelng];


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

};

var VenuePopUp = function(){
  var mapPopupDiv = document.querySelector("#mappopup_bg");
  mapPopupDiv.style.display = 'block';
  var mapDiv = document.querySelector('#mapPopUpMain');
  var incomingString = this.value;
  if (incomingString == ",") {
    mapDiv.innerText = "This event does not have a venue yet :(" }
  else {
  var lat = incomingString.substring(0, venuechop(incomingString));
  var lng = incomingString.substring(venuechop(incomingString)+1 , incomingString.length);
  var latNum = Number(lat);
  var lngNum = Number(lng);
  var center = { lat: latNum, lng: lngNum };
  var mainMap = new MapWrapper(mapDiv, center, 16);
  mainMap.addMarker(center);
}

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


module.exports = DisplayEvents;
