
var map;
  var canvas;
  var infowindow;

  var styles = [{

      stylers: [{
          hue: '#ffaa00'
      }, {
          weight: 3.8
      }]
  }, {
      elementType: "labels.icon",
      stylers: [{
          visibility: "on"
      }, {
          invert_lightness: true
      }, {
          color: "#f90580"
      }]
  }, {
      elementType: "labels.text.fill",
      stylers: [{
          color: "#002f80"
      }]
  }, {}];

var initialize = function(lat, long, zoom) {


  var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

  var mapOptions = {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          styles: styles,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

    canvas = $('#map_canvas')[0];

      if (!canvas)
          return; // I QUIT

      map = new google.maps.Map(canvas, mapOptions);


  var image = '/images/coffee.png';
  var latlng = new google.maps.LatLng(lat, long);
  var marker = new google.maps.Marker({
          position: latlng,
          icon: image,
          map: map,
          title: name
        });

};


var add_marker = function (lat, long, name, address) {
      var image = '/images/coffee.png';
      var latlng = new google.maps.LatLng(lat, long);
      var marker = new google.maps.Marker({
          position: latlng,
          icon: image,
          map: map,
          title: name
        });

        contentString =
        "<div class='popup'>" +
        "<h1>" + name + "</h1>"
        + "<h5>" + address + "</h5>" + "</div>";

      var infowindow = new google.maps.InfoWindow({
      content: contentString,
      maxWidth: 220,
      styles: popup
       });

       google.maps.event.addListener(marker, 'click', function() {
        infowindow.open(map,marker);
        });

};


  $(document).ready(function () {
      initialize(-33.8942659, 151.2654561, 15);
  });
