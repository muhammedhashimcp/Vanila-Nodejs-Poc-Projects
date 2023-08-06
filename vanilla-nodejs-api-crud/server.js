const http = require('http');
require("dotenv").config()
const PORT = process.env.PORT || 5000
const movies=require('./data/movies.json')
const getReq=require('./methods/get-request')
const postReq=require('./methods/post-request')
const putReq=require('./methods/put-request')
const deleteReq=require('./methods/delete-request')

const server = http.createServer((req, res) => {
	console.log("🚀 ~ file: server.js:7 ~ server ~ req.method:", req.method)
	req.movies = movies;
	switch (req.method) {
		case 'GET':
			getReq(req, res);
			break;
		case 'POST':
			postReq(req, res);
			break;
		case 'PUT':
			putReq(req, res);
			break;
		case 'DELETE':
			deleteReq(req, res);
			break; 
		default:
			res.statusCode = 200;
			res.setHeader("Content-type", "application/json");
			res.write(JSON.stringify({ title: "NOT FOUND", message: "Route not found" }))
			res.end()
	}

})
server.listen(PORT, () => {
	console.log("server started on port :" + PORT)
})