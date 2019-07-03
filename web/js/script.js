(function (window, google) {

    var opt = {
        zoom: 18,
        center: {lat: 32.87519, lng: 13.18746},
    };
    var map = new google.maps.Map(document.getElementById('map'), opt);
    /* var marker = new google.maps.Marker({
     position: {lat: 32.87519, lng: 13.18746},
     draggable: true,
     map: map
     });*/
    google.maps.event.addListener(map, 'click', function (event) {
        placeMarker(map, event.latLng);
    });

    function placeMarker(map, location) {
        var marker = new google.maps.Marker({
            position: location,
            map: map
        });
        var infowindow = new google.maps.InfoWindow({
            content: 'Latitude: ' + location.lat() +
                    '<br>Longitude: ' + location.lng()
        });
        infowindow.open(map, marker);
    }

}(window, google));
