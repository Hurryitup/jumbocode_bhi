$(function() {
        $( "#datepicker" ).datepicker();
        $("#datepicker").change(function () {
            dates[num_islands] = $(this).datepicker("getDate");
                });
});

var start;
var finish;
var stops = [];
var dates = [];
var time = [];
var num_islands = 0;
var currentDate;
$(document).ready(function(){
    $("#start_man").keyup(function (e) {
        if (e.which == 13) {
            start = $("#start_man").val();
            document.getElementById("start_title").innerHTML = start;
        }
        });
        $("#start_Boston").click(function(){ 
                start = "Boston";
                document.getElementById("start_title").innerHTML = start;
        });
        $("#start_Hull").click(function(){ 
                start = "Hull";
                document.getElementById("start_title").innerHTML = start;                
        });
        $("#start_Hingham").click(function(){ 
                start = "Hingham"; 
                document.getElementById("start_title").innerHTML = start;
        });
        $("#Georges").click(function(){ 
                stops[num_islands] = "Georges Island"; 
                document.getElementById("island_title").innerHTML = "Georges";          
        });
        $("#Spectacle").click(function(){ 
                stops[num_islands] = "Spectacle Island"; 
                document.getElementById("island_title").innerHTML = "Spectacle";
        });
        $("#Peddocks").click(function(){ 
                stops[num_islands] = "Peddocks";
                document.getElementById("island_title").innerHTML = "Peddocks"; 
        });
        $("#1030").click(function(){ 
                time[num_islands] = "10:30"; 
                document.getElementById("time_title").innerHTML = time[num_islands];
        });
        $("#1200").click(function(){ 
                time[num_islands] = "12:00"; 
                document.getElementById("time_title").innerHTML = time[num_islands];            
        });
        $("#finish_man").keyup(function (e) {
                if (e.which == 13) {
                finish = $("#finish_man").val();
                document.getElementById("finish_title").innerHTML = finish;
                }
    });
    $("#end_Boston").click(function(){ 
        finish = "Boston"; 
        document.getElementById("finish_title").innerHTML = finish;
    });
    $("#end_Hull").click(function(){ 
        finish = "Hull"; 
        document.getElementById("finish_title").innerHTML = finish;
    });
    $("#end_Hingham").click(function(){ 
        finish = "Hingham"; 
        document.getElementById("finish_title").innerHTML = finish;
    });
});
