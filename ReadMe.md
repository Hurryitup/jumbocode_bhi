#Boston Harbor Islands Ferry Scheduling App
Created by Tufts Jumbocode, Boston Harbor Islands team, Spring 2016

##GTFS Feeds:
### General information:
GTFS is the industry standard for this type of transport/scheduling data. The
data is open source and certified. All the information exisits in csv files, 
which link to each other based on the column/key that specific data is organized
under. 

### Important information for the usage of the GTFS csvs:
-   "Feed end date" and "Service end date" are different, but the feed doesn't
    end, the service does.
-   The calendar.txt file has the service end dates
-   Exceptions in calendar days:
--  Exceptions are things like public holidays which might change scedules 
    on specific random days
-   The specific latitudes and longitudes of stops are in stops.txt
-   Shape ids:
--  Show the actual shape of ferry trips, giving the ability of showing more than
    just straight polylines in between stops.

### Converting the csv files to json objects:
<p> Each individual file can be converted to its corresponding json file using
csv_to_json.js, found in the parent folder of this repository. Right now, each
file must be done manually - soon to be expanded so that one call can do all 
the conversions at once. </p>