module.exports = function(app) {

	app.get('/api/photo/list', function(req, res) {
	    var photoList = 
		[{
		  "id": 1,
	      "title": "Smells Like Teen Spirit",
	      "artist": "Nirvana",
	      "genre": "Grunge",
	      "duration": 5.01,
	      "rating": 3,
	      "isVisible": true
	    },
	    {
	      "id": 2,
	      "title": "Thunderstruck",
	      "artist": "AC/DC",
	      "genre": "Rock",
	      "duration": 4.52,
	      "rating": 4,
	      "isVisible": true
	    },
	    {
	      "id": 3,
	      "title": "Sweet Child O' Mine",
	      "artist": "Guns N' Roses",
	      "genre": "Hard Rock",
	      "duration": 5.56,
	      "rating": 4,
	      "isVisible": true
	    },
	    {
	      "id": 4,
	      "title": "Livin' On A Prayer",
	      "artist": "Bon Jovi",
	      "genre": "Rock",
	      "duration": 4.09,
	      "rating": 3.5,
	      "isVisible": true
	    },
	    {
	      "id": 5,
	      "title": "Open Fire",
	      "artist": "The Darkness",
	      "genre": "Pop",
	      "duration": 4.01,
	      "rating": 2,
	      "isVisible": true
	    },
	    {
	      "id": 6,
	      "title": "Handsome",
	      "artist": "The Vaccines",
	      "genre": "Indie",
	      "duration": 2.20,
	      "rating": 2,
	      "isVisible": true
	    },
	    {
	      "id": 7,
	      "title": "Stairway To Heaven",
	      "artist": "Led Zeppelin",
	      "genre": "Classic Rock",
	      "duration": 7.58,
	      "rating": 4.5,
	      "isVisible": true
	    },
	    {
	      "id": 8,
	      "title": "Go",
	      "artist": "The Chemical Brothers",
	      "genre": "Electronic",
	      "duration": 3.20,
	      "rating": 1,
	      "isVisible": true
	    },
	    {
	      "id": 9,
	      "title": "Titanium",
	      "artist": "David Guetta",
	      "genre": "Dance",
	      "duration": 2.50,
	      "rating": 1,
	      "isVisible": true
	    },
	    {
	      "id": 10,
	      "title": "Kernkraft 400",
	      "artist": "Zombie Nation",
	      "genre": "Techno",
	      "duration": 3.33,
	      "rating": 2.5,
	      "isVisible": true
	    }];

    	res.json(photoList);
	});

};
