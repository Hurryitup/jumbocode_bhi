var gtfs = require('./node_modules/gtfs/');
gtfs.getRoutesByAgency("BOHA", function(err, agencies) {
        console.log(agencies);
        console.log("\nDONE WITH AGENCIES\n")
})
gtfs.getTimetablesByAgency("BOHA", function(err, timetables) {
        console.log(timetables);
})