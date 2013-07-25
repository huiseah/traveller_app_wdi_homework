var map;
  var canvas;

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

  var display_map = function (lat, long, zoom) {
      canvas = $('#map_canvas')[0];

      if (!canvas)
          return; // I QUIT

      var mapOptions = {
          center: new google.maps.LatLng(lat, long),
          zoom: zoom,
          styles: styles,
          mapTypeId: google.maps.MapTypeId.ROADMAP
      };

      map = new google.maps.Map(canvas, mapOptions);
  };


  var add_marker = function (lat, long, name, icon) {
      var image = '/images/coffee.png';
      var latlng = new google.maps.LatLng(lat, long);
      var marker = new google.maps.Marker({
          position: latlng,
          icon: image,
          map: map,
          name: name
      });

  };

  //INFO WINDOW===

  // var coffee_pop =


  //   '<div id="content">' +
  //     '<div id="siteNotice">' +
  //     '</div>' +
  //     '<h1 id="firstHeading" class="firstHeading">


  //     // INSERT COFFEE NAME HERE

  //     </h1>' +
  //     '<div id="bodyContent">' +
  //     '<p>

  //     // INSERT COFFEE ADDRESS HERE

  //     </p>' +
  //     '</div>' +
  //     '</div>';

  // var infowindow = new google.maps.InfoWindow({
  //     content: coffee_pop,
  //     maxWidth: 200
  // });





  $(document).ready(function () {

      display_map(-33.8942659, 151.2654561, 15);
      add_marker();
      // infowindow();
  });





