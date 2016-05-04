function renderShape(map) {
    var boatPathCoords = getPath();
    var boatPath = new google.maps.Polyline({
        path: boatPathCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    boatPath.setMap(map)
}

function getPath() {
    var routeArr = getShape();
    var pathArr = [];
    for (var i = 0; i < routeArr.length; i++) {
        var pointObj = {
            lat: Number(routeArr[i].shape_pt_lat),
            lng: Number(routeArr[i].shape_pt_lon),
        };
        pathArr.push(pointObj);
    }
    return(pathArr);
}

function getShape() {
    start = "LOWH";
    end = "GEIS";
    var http = new XMLHttpRequest();
    var url = "http://vast-anchorage-34434.herokuapp.com/getShapes?starts=" + start + "&ends=" + end;
    http.open("GET", url, true);
    http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    http.onreadystatechange = function() {
        if (http.readyState == 4 && http.status == 200) {
          var arr = JSON.parse(http.responseText);
        }
    };
    http.send(null);
    return arr;
}