const crypto = require('crypto');
const requestBodyParser = require('../utils/body-parser')
const writeToFile = require('../utils/write-to-file')
const url=require('url')
module.exports = async (req, res) => {
	const parsedUrl = url.parse(req.url);
	const baseUrl = parsedUrl.pathname.substring(0, parsedUrl.pathname.lastIndexOf("/") + 1);
	let id = req.url.split("/")[3]
	const regexV4 = true
	if (!regexV4) {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "Validation Failed", message: "UUID Not Valid" }))
	} else if (baseUrl === "/api/movies/" && regexV4) {
		
		try {
			let body=await requestBodyParser(req)
			const index = req.movies.findIndex((movie) => {
				return movie.id === id
			})

			if (index === -1) {
				res.statusCode = 404;
				res.write(JSON.stringify({ title: "Not Found", message: "Movie Not Valid" }))
				res.end()
			} else {
				req.movies[index]={id,...body}
				writeToFile(req.movies)
				res.writeHead(204, { "Content-type": "application/json" })
				res.end(JSON.stringify(req.movies[index]))
			}
		} catch (error) {
			console.log("🚀 ~ file: put-request.js:17 ~ module.exports= ~ error:", error)
			
		}

	} else {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "NOT FOUND", message: "Route not found" }))
	}
};