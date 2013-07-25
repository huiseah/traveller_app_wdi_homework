// var initialize = function(lat, long, zoom) {

//   var myLatlng = new google.maps.LatLng(-25.363882,131.044922);

//   var mapOptions = {
//           center: new google.maps.LatLng(lat, long),
//           zoom: zoom,
//           styles: styles,
//           mapTypeId: google.maps.MapTypeId.ROADMAP
//       };

//     canvas = $('#map_canvas')[0];

//       if (!canvas)
//           return; // I QUIT

//       map = new google.maps.Map(canvas, mapOptions);



//   var contentString = '<div id="content">'+
//       '<div id="siteNotice">'+
//       '</div>'+
//       '<h1 id="firstHeading" class="firstHeading">COFFESHOP NAME</h1>'+
//       '<div id="bodyContent">'+
//       '<p>COFFEESHOP ADDRESS</p>'+
//       '</div>'+
//       '</div>';

//   var infowindow = new google.maps.InfoWindow({
//       content: contentString,
//       maxWidth: 200
//   });
//   var image = '/images/coffee.png';
//   var latlng = new google.maps.LatLng(lat, long);
//   var marker = new google.maps.Marker({
//           position: latlng,
//           icon: image,
//           map: map,
//           title: name
//         });


//   google.maps.event.addListener(marker, 'click', function() {
//     infowindow.open(map,marker);
//   });
// };


// var add_marker = function (lat, long, name) {
//       var image = '/images/coffee.png';
//       var latlng = new google.maps.LatLng(lat, long);
//       var marker = new google.maps.Marker({
//           position: latlng,
//           icon: image,
//           map: map,
//           title: name
//         });
// };


//   $(document).ready(function () {
//       initialize(-33.8942659, 151.2654561, 15);
//   });










