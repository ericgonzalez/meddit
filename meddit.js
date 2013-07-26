var restler = require('restler');
var express = require("express");
var app = express();
app.use(express.logger());

app.all('/', function(request, response) {
	restler.get('http://reddit.com/.json').on('complete', function(reddit) {
		var titles = "<Response>";
		for(var i = 0; i < 5; i++) {
			titles += "<Sms> Title: " + reddit.data.children[i].data.title + " Thumb: " + reddit.data.children[i].data.url +"</Sms>";
		}
		titles +="</Response>";
		response.send(titles);
	});
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});