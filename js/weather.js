const http = require("https");

const options = {
	"method": "GET",
	"hostname": "community-open-weather-map.p.rapidapi.com",
	"port": null,
	"path": "/weather?q=Kiskunhalas&lat=0&lon=0&callback=test&id=2172797&lang=null&units=imperial&mode=html",
	"headers": {
		"X-RapidAPI-Host": "community-open-weather-map.p.rapidapi.com",
		"X-RapidAPI-Key": "ae10b07a34msh846fc93c66c2251p1f1470jsnc17ff9688192",
		"useQueryString": true
	}
};

const req = http.request(options, function (res) {
	const chunks = [];

	res.on("data", function (chunk) {
		chunks.push(chunk);
	});

	res.on("end", function () {
		const body = Buffer.concat(chunks);
		console.log(body.toString());
	});
});

req.end();