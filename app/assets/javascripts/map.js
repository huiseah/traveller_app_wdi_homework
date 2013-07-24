  var map;
  var canvas;

  var display_map = function (lat, long, zoom) {
    canvas = $('#map_canvas')[0];

    if (! canvas)
      return; // I QUIT

      var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: zoom,
      mapTypeId: google.maps.MapTypeId.ROADMAP
    };

      map = new google.maps.Map(canvas, mapOptions);
    };

  var add_marker = function (lat, long, name, icon) {
    var latlng = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({position: latlng, map: map, name: name, icon: image});
    // var image = 'images/coffee.png';
  };


$(document).ready(function () {
  display_map(-33.8942659, 151.2654561, 15);

});






