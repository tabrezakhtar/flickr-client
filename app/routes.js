module.exports = function(app) {

	app.get('/api/hello', function(req, res) {
	    res.send('hello');
	});


	// app.get('*', function(req, res) {
	// 	console.log(appDir);
	// 	res.sendFile('index.html', { root: appDir + '/public/' });
	// });
};
