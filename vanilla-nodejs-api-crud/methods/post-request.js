const crypto = require('crypto');
const requestBodyParser = require('../utils/body-parser')
const writeToFile=require('../utils/write-to-file')
module.exports = async (req, res) => {
	if (req.url === '/api/movies') {
		try {
			let body = await requestBodyParser(req)
			// console.log("Request Body : ", body)
			body.id = crypto.randomUUID();
			req.movies.push(body);
			writeToFile(req.movies)
			res.writeHead(201, { "Content-Type": "application/json" })
			res.end()
		} catch (error) {
			console.log("🚀 ~ file: post-request.js:14 ~ module.exports= ~ error:", error)
			res.writeHead(400, { "Content-type": "application/json" })
			res.end(JSON.stringify({ title: "Validation Failed", message: "Request body is Not Valid" }))

		}
	} else {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "NOT FOUND", message: "Route not found" }))
	}
};
