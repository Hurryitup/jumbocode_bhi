$(function() {
    $( "#datepicker" ).datepicker();
    $("#datepicker").change(function () {
        dates[num_islands] = $(this).datepicker("getDate");
    });
});

var start = null;
var finish = null;
var stops = [];
var dates = [];
var time = [];
var currentDate;
$(document).ready(function(){
    $("#start_Boston").click(function(){ 
        start = "LOWH";
        document.getElementById("start_title").innerHTML = "Boston";
    });
    $("#start_Hull").click(function(){ 
        start = "PEPO";
        document.getElementById("start_title").innerHTML = "Hull";         
    });
    $("#start_Hingham").click(function(){ 
        start = "HECO"; 
        document.getElementById("start_title").innerHTML = "Hingham";
    });
    $(document.body).on("click","#Georges", function(){ 
        var stop_no = $(this).data("value");
        var parent_id = "#island" + stop_no;
        stops[stop_no] = "GEIS";
        $(document.body).find(parent_id).html("Georges");
        process_shapes(start, finish, stops);    
    });
    $(document.body).on("click","#Spectacle", function(){
        var stop_no = $(this).data("value");
        var parent_id = "#island" + stop_no;
        stops[stop_no] = "SPIS";
        $(document.body).find(parent_id).html("Spectacle");
        process_shapes(start, finish, stops); 
    });
    $(document.body).on("click","#Peddocks", function(){
        var stop_no = $(this).data("value");
        var parent_id = "#island" + stop_no;
        stops[stop_no] = "PEIS";
        $(document.body).find(parent_id).html("Peddocks");
        process_shapes(start, finish, stops); 
    });
    $(document.body).on("click","#1030", function(){
        var stop_no = $(this).data("value");
        var parent_id = "#time" + stop_no;
        curr_time = "10:30"
        time[stop_no] = curr_time;
        $(document.body).find(parent_id).html(curr_time);
    });
    $(document.body).on("click","#1230", function(){
        var stop_no = $(this).data("value");
        var parent_id = "#time" + stop_no;
        curr_time = "12:30"
        time[stop_no] = curr_time;
        $(document.body).find(parent_id).html(curr_time);    
    });
    $("#end_Boston").click(function(){ 
        finish = "LOWH"; 
        document.getElementById("finish_title").innerHTML = "Boston";
        process_shapes(start, finish, stops); 
    });
    $("#end_Hull").click(function(){ 
        finish = "PEPO"; 
        document.getElementById("finish_title").innerHTML = "Hull";
        process_shapes(start, finish, stops); 
    });
    $("#end_Hingham").click(function(){ 
        finish = "HECO"; 
        document.getElementById("finish_title").innerHTML = "Hingham";
        process_shapes(start, finish, stops); 
    });
});