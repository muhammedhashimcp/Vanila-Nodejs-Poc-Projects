const writeToFile = require("../utils/write-to-file");
const url = require('url');
module.exports = (req, res) => {
	// let baseUrl = req.url.substring(0, req.url.lastIndexOf("/" + 1))
	const parsedUrl = url.parse(req.url);
	const baseUrl = parsedUrl.pathname.substring(0, parsedUrl.pathname.lastIndexOf("/") + 1);
	console.log("🚀 ~ file: delete-request.js:5 ~ baseUrl:", baseUrl)
	let id = req.url.split("/")[3]
	console.log("🚀 ~ file: get-request.js:4 ~ id:", id)
	// const regexV4=new RegExp()
	const regexV4 = true
	// const regexV4 = false

	if (!regexV4) {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "Validation Failed", message: "UUID is Not Valid" }))
	} else if (baseUrl === "/api/movies/" && regexV4) {
		console.log("🚀 ~ file: delete-request.js:15 ~ regexV4:", regexV4)
		const index = req.movies.findIndex((movie) => {
			return movie.id === id
		})
		console.log("🚀 ~ file: delete-request.js:18 ~ index ~ index:", index)

		if (index === -1) {
			res.statusCode = 404;
			res.write(JSON.stringify({ title: "Not Found", message: "Movie Not Valid" }))
			res.end()
		} else {
			req.movies.splice(index, 1);
			writeToFile(req.movies)
			res.writeHead(204, { "Content-type": "application/json" })
			res.end(JSON.stringify(req.movies))
		}

	} else {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "NOT FOUND", message: "Route not found" }))
	}
};