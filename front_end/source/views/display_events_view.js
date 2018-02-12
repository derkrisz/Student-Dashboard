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
    a.href = event.title_url;
    a.target = "_blank"
    a.innerHTML = `${event.title_type} : ${event.title}`;
    td2.appendChild(a);
    td1.innerText = event.day
    td3.innerText = event.organiser;
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
  console.log(info.data[1].venue.title);
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

      var day = info.data[counter].start.displaylocal;
      var daysub = day.substring(0, 3);
      var name = info.data[counter].summaryDisplay;
      var namesub = name.substring(0, namechop(name));
      var venue ="TBA";

      try{
        var venueFullName =info.data[counter].venue.title
        venue = venueFullName.substring(0, venuechop(venueFullName));
      }
      catch(e){
      }

      var venuelat = info.data[1].venue.lat;
      var venuelng = info.data[1].venue.lng;
      var timestart = info.data[counter].start.hourtimezone + ":" + info.data[counter].start.minutetimezone;
      var timeend = info.data[counter].end.hourtimezone + ":" + info.data[counter].end.minutetimezone;
      var totaltime = `${timestart} - ${timeend}`;
      console.log(venuelat);
      console.log(venuelng);
      const venueButton = document.createElement('button');
      venueButton.innerText =venue;
      venueButton.addEventListener('click', VenuePopUp(venuelat, venuelng));

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

var VenuePopUp = function(lat1, lng1){
//   var mapPopupDiv = document.querySelector("#mappopup_bg");
//   mapPopupDiv.style.display = 'block';
//   console.log("Inside function"+ lat1);
//   var mapDiv = document.querySelector('#mapPopUpMain');
//   // var center = { lat: 55.9470, lng: -3.2020 };
//   var center = { lat: `${lat1}`, lng: `${lng1}` };
//   var mainMap = new MapWrapper(mapDiv, center, 16);
//   mainMap.addMarker(center);
//   mapDiv.appendChild(mainMap);

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
