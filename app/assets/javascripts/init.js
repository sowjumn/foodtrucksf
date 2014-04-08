$(document).ready(function() {
  initialize();
  function initialize() {
    var mapOptions = {
          center: new google.maps.LatLng(37.7749, -122.419415),
          zoom: 12
    };
    
    var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
  }
});