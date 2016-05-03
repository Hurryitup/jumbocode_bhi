var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

var gtfs = require("gtfs");

app.set('port', (process.env.PORT || 5000));
app.use('/', express.static(__dirname + '/'));


// views is directory for all template files
app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');

var mongoUri = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://heroku_n5jwt1d7:29u6v15133fq496t32k4la78er@ds021010.mlab.com:21010/heroku_n5jwt1d7';
var MongoClient = require('mongodb').MongoClient, format = require('util').format;
var db = MongoClient.connect(mongoUri, function(error, databaseConnection) {
	db = databaseConnection;
});

app.get('/getTimes', function(request, response) {
	// var route = request.query.route;
	gtfs.getStopTimes(function (something) {//ByStop("localAgency", "NPS_BOHA__R1", "NPS_BOHA__GEIS", 0, function(err, routes) {
		// console.log(routes);
		// console.log(err);
		console.log(something);
	});
});

/*
example input: curl "localhost:5000/getShapes?start=GEIS&end=PEPO&start=PEPO&end=GEIS"
*/
app.get('/getShapes', function(request, response) {
	var starts = request.query.start;
	var ends = request.query.end;
	db.collection('shapes', function(error, coll) {
		var lastIndex = Math.min(starts.length, ends.length);
		var mongoQuery = [];

		for (var i = 0; i < lastIndex; i++) {
			var searchTerm = starts[i] + "__" + ends[i];
			mongoQuery.push({"shape_id": searchTerm});
		}

		coll.find({$or: mongoQuery}).toArray(function (error, cursor) {
			response.send(cursor);
		});
	});
});

app.listen(app.get('port'), function() {
	console.log("Node app is running at localhost:" + app.get('port'));
});