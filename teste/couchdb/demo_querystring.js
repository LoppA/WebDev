"use strict"

//http://localhost:8080/?year=2017&month=July

let http = require('http');
let url = require('url');

http.createServer((req, res) => {
	res.writeHead(200, {'Content-Type': 'text/html'});
	let q = url.parse(req.url, true).query;
	let txt = q.year + " " + q.month;
	res.write(txt);
	res.end();
}).listen(8080);
