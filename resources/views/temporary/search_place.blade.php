<!DOCTYPE html>
<html>
<head>
    <title>Place Searches</title>
    <meta name="viewport" content="initial-scale=1.0, user-scalable=no">
    <meta charset="utf-8">
    <style>
        /* Always set the map height explicitly to define the size of the div
         * element that contains the map. */
        #map {
            height: 100%;
        }
        /* Optional: Makes the sample page fill the window. */
        html, body {
            height: 100%;
            margin: 0;
            padding: 0;
        }
    </style>
    <script>
        // This example requires the Places library. Include the libraries=places
        // parameter when you first load the API. For example:
        // <script src="https://maps.googleapis.com/maps/api/js?key=YOUR_API_KEY&libraries=places">

        var map;
        var service;
        var infowindow;

        function initMap() {
            var sydney = new google.maps.LatLng(-33.867, 151.195);

            infowindow = new google.maps.InfoWindow();

            map = new google.maps.Map(
                document.getElementById('map'), {center: sydney, zoom: 15});

            var request = {
                query: 'Bogalake, bandarban',
                fields: ['name', 'geometry'],
            };

            service = new google.maps.places.PlacesService(map);

            service.findPlaceFromQuery(request, function(results, status) {
                if (status === google.maps.places.PlacesServiceStatus.OK) {
                    for (var i = 0; i < results.length; i++) {
                        createMarker(results[i]);
                    }

                    map.setCenter(results[0].geometry.location);
                }
            });
        }

        function createMarker(place) {
            var marker = new google.maps.Marker({
                map: map,
                position: place.geometry.location
            });

            google.maps.event.addListener(marker, 'click', function() {
                infowindow.setContent(place.name);
                infowindow.open(map, this);
            });
        }
    </script>
</head>
<body>
<div id="map"></div>
<script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyC4e6jXPH_4LxjSqdzdYQLDS7YArUAHlCg&libraries=places&callback=initMap" async defer></script>
</body>
</html>

