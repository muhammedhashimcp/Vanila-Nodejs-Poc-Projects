const fs = require("fs");
const path = require('path');
module.exports = (data) => {
	console.log("🚀 ~ file: write-to-file.js:4 ~ data:", data)
	try {
		fs.writeFileSync(path.join(__dirname, "..", "data", "movies.json"), JSON.stringify(data), "utf-8")

	} catch (error) {
		console.log("🚀 ~ file: write-to-file.js:7 ~ error:", error)

	}
}