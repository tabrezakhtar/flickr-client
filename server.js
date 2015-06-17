var express  = require('express');
var app      = express();
var port = 3333;

require('./app/routes.js')(app);

app.use(express.static(__dirname + '/public'));

app.use('*', function(req, res){
  res.sendFile(__dirname + '/public/flickr-viewer.html');
});

app.listen(port);
console.log("App listening on port " + port);