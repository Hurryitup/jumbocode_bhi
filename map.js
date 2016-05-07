var map;
function initMap() {
        var mapOptions =  {
                        zoom: 11,
                        center: {lat: 42.3117, lng: -70.9864},
                        mapTypeControl: true,
                        mapTypeControlOptions: {
                                style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
                                position: google.maps.ControlPosition.TOP_CENTER
                        },
                        zoomControl: true,
                        zoomControlOptions: {
                                position: google.maps.ControlPosition.LEFT_CENTER
                        },
                        scaleControl: true,
                        streetViewControl: true,
                        streetViewControlOptions: {
                                position: google.maps.ControlPosition.LEFT_TOP
                        },
                        fullscreenControl: true
                }
        map = new google.maps.Map(document.getElementById('map'), mapOptions);
}