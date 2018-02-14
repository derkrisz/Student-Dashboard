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
};

MapPopUp.prototype.calculateRoute = function() {
  var directionsDisplay = new google.maps.DirectionsRenderer({
    suppressMarkers: true
  });
  var directionsService = new google.maps.DirectionsService();

  var mapDiv = document.querySelector('#mapPopUpMain');
  var center = { lat: 55.946613, lng: -3.203017 };
  var codeclan = { lat: 55.947149, lng: -3.201958 };
  var pub = { lat: 55.9458, lng: -3.2036 };
  var mainMap = new MapWrapper(mapDiv, center, 17);
  var pub1 = mainMap.addMarker(pub);
  var codeclan1 = mainMap.addMarker(codeclan);
  mainMap.addInfoBubble(pub1, "The Chanter");
  mainMap.addInfoBubble(codeclan1, "CodeClan");

  directionsDisplay.setMap(mainMap.googleMap);

  var journey = {
    origin: codeclan,
    destination: pub,
    travelMode: 'WALKING'
  };

  directionsService.route(journey, function(result, status) {
    if (status === "OK") {
      directionsDisplay.setDirections(result);
    }
  });
};

module.exports = MapPopUp;
