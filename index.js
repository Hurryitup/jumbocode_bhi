
var start;
var finish;
var stops = [];
var dates = [];
var time = [];
var num_islands = 0;
var currentDate;

$(function() {
        $( "#datepicker" ).datepicker();
        $("#datepicker").change(function () {
            dates[num_islands] = $(this).datepicker("getDate");
		});
});

$(document).ready(function(){
    $("#start_man").keyup(function (e) {
        if (e.which == 13) {
            start = $("#start_man").val();
        }
	});
	$("#start_Boston").click(function(){ start = "Boston"; });
	$("#start_Hull").click(function(){ start = "Hull"; });
	$("#start_Hingham").click(function(){ start = "Hingham"; });
	$("#Georges").click(function(){ stops[num_islands] = "Georges Island"; });
	$("#Spectacle").click(function(){ stops[num_islands] = "Spectacle Island"; });
	$("#Peddocks").click(function(){ stops[num_islands] = "Peddocks"; });
	$("#1030").click(function(){ time[num_islands] = "10:30"; });
	$("#1200").click(function(){ time[num_islands] = "12:00"; });
	$("#finish_man").keyup(function (e) {
		if (e.which == 13) {
    		start = $("#finish_man").val();
		}
    });
    $("#end_Boston").click(function(){ finish = "Boston"; });
    $("#end_Hull").click(function(){ finish = "Hull"; });
    $("#end_Hingham").click(function(){ finish = "Hingham"; });
});
