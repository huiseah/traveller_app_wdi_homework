  var map;
  var canvas;
  var willywoo = 'custom_style';
  var google;



  var display_map = function (lat, long, zoom) {
    canvas = $('#map_canvas')[0];

    if (! canvas)
      return; // I QUIT

    function initialize() {
       var featureOpts = [
        {
          stylers: [
            { hue: '#ffaa00' },
            { weight: 3.8 }
          ]
        },{
          elementType: "labels.icon",
          stylers: [
            { visibility: "on" },
            { invert_lightness: true },
            { color: "#f90580" }
          ]
        },{
          elementType: "labels.text.fill",
          stylers: [
            { "color": "#002f80" }
          ]
        },{
        }
      ];


      var mapOptions = {
      center: new google.maps.LatLng(lat, long),
      zoom: zoom,
      mapTypeControlOptions: {
      mapTypeId: [google.maps.MapTypeId.ROADMAP, willywoo]
       },

       mapTypeId: willywoo
     };

//fucking around w/ styling
  map = new google.maps.Map(canvas, mapOptions);


      var styledMapOptions = {
        name: 'Custom Style'
      };


  var customMapType = new google.maps.StyledMapType(featureOpts, styledMapOptions);

  map.mapTypes.set(MY_MAPTYPE_ID, customMapType);


  };
};

  google.maps.event.addDomListener(window, 'load', initialize);



  var add_marker = function (lat, long, name, icon) {

    var latlng = new google.maps.LatLng(lat, long);
    var marker = new google.maps.Marker({position: latlng, icon: image, map: map, name: name});
    var image = 'images/coffee.png';


  };


$(document).ready(function () {
  display_map(-33.8942659, 151.2654561, 15);

});






