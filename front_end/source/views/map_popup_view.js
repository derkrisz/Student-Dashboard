const MapWrapper = require('../services/mapWrapper.js');

const MapPopUp = function(){

}

MapPopUp.prototype.populateView = function () {
  var mapDiv = document.querySelector('#mapPopUpMain');
  var center = { lat: 55.946613, lng: -3.203017 };
  var codeclan = { lat: 55.946962, lng: -3.201958 };
  var pub = { lat: 55.9458, lng: -3.2036 };
  var mainMap = new MapWrapper(mapDiv, center, 17);
  var pub1 = mainMap.addMarker(pub);
  var codeclan1 = mainMap.addMarker(codeclan);
  mainMap.addInfoBubble(pub1, "The Chanter");
  mainMap.addInfoBubble(codeclan1, "CodeClan");
  // mainMap.route({origin: pub, destination: codeclan, travelMode: 'WALKING' })
};

MapPopUp.prototype.calculateRoute = function() {
  var directionsDisplay = new google.maps.DirectionsRenderer();
  var directionsService = new google.maps.DirectionsService();

  var mapDiv = document.querySelector('#mapPopUpMain');
  var center = { lat: 55.946613, lng: -3.203017 };
  var codeclan = { lat: 55.946962, lng: -3.201958 };
  var pub = { lat: 55.9458, lng: -3.2036 };
  mainMap = new google.maps.Map(mapDiv, {
    center: center,
    zoom: 17
  });
  // var pub1 = mainMap.addMarker(pub);
  // var codeclan1 = mainMap.addMarker(codeclan);
  // mainMap.addInfoBubble(pub1, "The Chanter");
  // mainMap.addInfoBubble(codeclan1, "CodeClan");

  directionsDisplay.setMap(mainMap);
  console.log(mainMap);

  var whatnot = {
    origin: codeclan,
    destination: pub,
    travelMode: 'WALKING'
  };

  directionsService.route(whatnot, function(result, status) {
    if (status === "OK") {
      directionsDisplay.setDirections(result);
    }
  })
}

module.exports = MapPopUp;
