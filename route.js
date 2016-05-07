var boatPath = null;

function process_shapes(st, fin, stops) {
    if (boatPath != null) {
      boatPath.setMap(null);
    }
    if (st == null || stops.length == 0) {
      alert("Looks like you are missing some stops!");
      return;
    }
    getShape(st, stops[0]);
    for(var i = 0; i < stops.length - 1; i++) {
      getShape(stops[i], stops[i+1])
    }
    if (fin != null) {
      getShape(stops[stops.length - 1], fin);
    }
}

function getShape(st, fin) {
      var arr = [];
      var http = new XMLHttpRequest();
      var url = "http://vast-anchorage-34434.herokuapp.com/getShapes?starts=" + st + "&ends=" + fin;
      http.open("GET", url, true);
      http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
      http.onreadystatechange = function() {
          if (http.readyState == 4 && http.status == 200) {
            arr = JSON.parse(http.responseText);
            getPath(arr, map);
          }
      };
      http.send(null);
}

function getPath(routeArr) {
    routeArr.sort(compare);
    var pathArr = [];
    for (var i = 0; i < routeArr.length; i++) {
        var pointObj = {
            lat: Number(routeArr[i].shape_pt_lat),
            lng: Number(routeArr[i].shape_pt_lon),
        };
        pathArr.push(pointObj);
    }
    renderShape(pathArr, map);
}

function renderShape(boatPathCoords) {
    
    boatPath = new google.maps.Polyline({
        path: boatPathCoords,
        geodesic: true,
        strokeColor: '#FF0000',
        strokeOpacity: 1.0,
        strokeWeight: 2
    });
    boatPath.setMap(map);
}

function compare(a, b) {
    if (a.shape_pt_sequence < b.shape_pt_sequence) {
        return -1;
    }
    if (a.shape_pt_sequence > b.shape_pt_sequence) {
        return 1;
    }
    return 0;
}

