var url = "vast-anchorage-34434.herokuapp.com"
function getInput() {
  start = "LOWH";
  end = "GEIS";
  getShape(start, end);
}

function getShape(start, end) {
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



$(document).ready(function() {

 var myCounter = 1;
 $(".myDate").datepicker();
 
 $("#moreDates").click(function(){

  // var dPicker = document.createElement("input");
  //               dPicker.type = "text";
  //               // dPicker.name = "inputDate" + datepickcount;
  //               // dPicker.id = "datepicker";
  //               dPicker.className = "myDate";
  //               document.body.appendChild(dPicker);
  
  $('.additionalDate input[name=inputDate]').each(function(index) {
   $(this).addClass("myDate");
   $(this).attr("name",$(this).attr("name") + myCounter);
  });

  jQuery(document).ready(function($){
  //you can now use $ as your jQuery object.
        var dat = $( '.myDate' );
        if(!dat.data('datepicker')) {
       dat.removeClass("hasDatepicker");
       dat.datepicker();
       // dat.datepicker("show");
      }
      /* TODO: read in data here */
  });
  
  // $(".myDate").on('focus', function(){
  //     var $this = $(this);
  //     if(!$this.data('datepicker')) {
  //      $this.removeClass("hasDatepicker");
  //      $this.datepicker();
  //      $this.datepicker("show");
  //     }
  // });
  
 });
 
});

function form_addElement() {
        // alert('a');
        var tripDiv = document.getElementById("trip");

        var container = document.createElement("div");
        container.className = "container";

        // create island button
        var container1 = document.createElement("div");
                container1.className = "col-xs-1 btn-group2";
        var islandButton = document.createElement("button");
                var dtoggle = document.createAttribute("data-toggle");
                dtoggle.value = "dropdown";
                islandButton.setAttributeNode(dtoggle);
                islandButton.className = "btn dropdown-toggle";
                islandButton.innerHTML = "Island<span class='caret'></span>";
        container1.appendChild(islandButton);
        var isList = document.createElement("ul");
                isList.className="dropdown-menu";
        var litem0 = document.createElement("li");
                litem0.innerHTML="<a class='hc' href='#'>Georges Island</a>";
                isList.appendChild(litem0);
        var litem1 = document.createElement("li");
                litem1.innerHTML="<a class='hc' href='#'>Spectacle Island</a>";
                isList.appendChild(litem1);
        var litem2 = document.createElement("li");
                litem2.innerHTML="<a class='hc' href='#'>Peddocks Island</a>";
                isList.appendChild(litem2);
        container1.appendChild(isList);


        // TODO: GET DATEPICKER TO WORK
        var container2 = document.createElement("div");
                container2.className = "col-xs-2";
        var container2_5 = document.createElement("div");
                container2_5.className = "btn-group3";
        var dEle = document.createElement("element");
                dEle.id = "date"
                dEle.innerHTML = "Date: ";
                container2_5.appendChild(dEle);
        var dPicker = document.createElement("input");
                dPicker.type = "text";
                // dPicker.name = "inputDate" + datepickcount;
                // dPicker.id = "datepicker";
                dPicker.className = "datepick myDate";
                container2_5.appendChild(dPicker);
                container2.appendChild(container2_5);
                // $(dPicker).datepicker();
                // container2.appendChild(dPicker);



        var container3 = document.createElement("div");
                container3.className = "col-xs-1 btn-group4";
        var timeButton = document.createElement("button");
                var dtoggle = document.createAttribute("data-toggle");
                dtoggle.value = "dropdown";
                timeButton.setAttributeNode(dtoggle);
                timeButton.className = "btn dropdown-toggle";
                timeButton.innerHTML = "Time<span class='caret'></span>";
                container3.appendChild(timeButton);
        var tiList = document.createElement("ul");
                tiList.className="dropdown-menu";
        var litem0 = document.createElement("li");
                litem0.innerHTML="<a class='hc' href='#'>10:30</a>";
                tiList.appendChild(litem0);
        var litem1 = document.createElement("li");
                litem1.innerHTML="<a class='hc' href='#'>12:30</a>";
                tiList.appendChild(litem1);
        container3.appendChild(tiList);

        // var addButton = document.getElementById("form_addbutton")
        
        // var newLine = document.createElement("div");

        // var remButton = document.createElement("button");
        // remButton.classList.add('btn');
        // remButton.classList.add('btn-default');
        // remButton.innerText = "–";

        // var btng2 = document.createElement("div");
        // btng2.classList.add('btn-group2');
        // btng2.appendChild(remButton);

        container.appendChild(container1);
        container.appendChild(container2);
        container.appendChild(container3);

        // newLine.appendChild(btng2);
        // tripDiv.appendChild(container);
        tripDiv.appendChild(container);
        // tripDiv.appendChild(document.createElement("br"));
        // tripDiv.innerHTML += "<br/>";

        // $(".datepick").each(function () {
        //         $(this).datepicker();
        //         alert(this.id);
        // });



// $(".datepick").on('focus', function(){
//         alert('a');
//       var $this = $(this);
//       if(!$this.data('datepicker')) {
//        $this.removeClass("hasDatepicker");
//        $this.datepicker();
//        $this.datepicker("show");
//       }
//   });

}