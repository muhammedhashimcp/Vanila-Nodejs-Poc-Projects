module.exports = (req, res) => {
	let baseUrl = req.url.substring(0, req.url.lastIndexOf("/" + 1))
	let id = req.url.split("/")[3]
	console.log("🚀 ~ file: get-request.js:4 ~ id:", id)
	// const regexV4=new RegExp()
	const regexV4 = true
	// const regexV4 = false
	if (req.url === "/api/movies") {
		res.statusCode = 200;
		res.setHeader("Content-type", "application/json");
		res.write(JSON.stringify(req.movies))
		res.end()
	} else if (!regexV4) {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "Validation Failed", message: "UUID Not Valid" }))
	} else if (regexV4) {
		console.log("🚀 ~ file: get-request.js:17 ~ regexV4:", regexV4)
		res.setHeader("Content-type", "application/json");
		let filteredMovie = req.movies.filter((movie) => {
			return movie.id===id
		})
		if (filteredMovie.length > 0) { 
			res.statusCode = 200;
			res.write(JSON.stringify(filteredMovie))
			res.end()
		} else {
			res.statusCode = 404;
			res.write(JSON.stringify({ title: "Not Found", message: "Movie Not Valid" }))
			res.end()
		}

	}else {
		res.writeHead(400, { "Content-type": "application/json" })
		res.end(JSON.stringify({ title: "NOT FOUND", message: "Route not found" }))
	}
};