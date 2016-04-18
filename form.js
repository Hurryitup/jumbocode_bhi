function form_addElement() {
        // alert('a');
        var tripDiv = document.getElementById("trip")

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
                dPicker.id = "datepicker";
                dPicker.className = "datepick hasdatepicker";
                $(dPicker).datepicker();
                container2_5.appendChild(dPicker);
                container2.appendChild(container2_5);
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
        tripDiv.innerHTML += "<br/ >"
        $($dPicker).datepicker();
}