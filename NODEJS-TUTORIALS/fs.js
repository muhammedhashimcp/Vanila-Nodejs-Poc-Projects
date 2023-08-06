// file system
const fs = require('fs');
const fsPromise = require('fs').promises;
const path = require('path');
// const filePath = "F:/FULLSTACK/NODEJS-EXPRESS/NODEJS-TUTORIALS/files/sample.txt"

// Reding from a file -Async
// fs.readFile(filePath, (err, data) => {
// 	if (err) throw new Error("something went wrong");
// 	console.log(data.toString())
// })
// try {
// 	const data = fs.readFileSync(path.join(__dirname, "files", "sample.txt"),"utf-8")
// 	console.log("🚀 ~ file: fs.js:12 ~ data:", data)
// } catch (error) {
// 	console.log("🚀 ~ file: fs.js:15 ~ error:", error)
// }
// const fileReading = async () => {
// 	try {
// 		const data=await fsPromise.readFile(filePath,{encoding: "utf8"})
// 		console.log("🚀 ~ file: fs.js:21 ~ fileReading ~ data:", data)
// 	} catch (error) {
// 		console.log("🚀 ~ file: fs.js:21 ~ fileReading ~ error:", error)
		
// 	}
// }
// fileReading()
// writing into file

const filePath = "F:/FULLSTACK/NODEJS-EXPRESS/NODEJS-TUTORIALS/files/text.txt"
const content="I love this nodejs samples"
// fs.writeFile(filePath, content, (err, data) => {
// 	if (err) throw new Error("Something went wrong!");
// 	// console.log(data)
// 	console.log("write Operation completed successfully")
// })
const writingInFile =async () => {
	try {
		await fsPromise.writeFile(filePath, content);
		await fsPromise.appendFile(filePath, "\n this is file appended data")
		await fsPromise.rename(filePath,path.join(__dirname,"files","newtxt.txt"))
	} catch (error) {
		console.log("🚀 ~ file: fs.js:41 ~ writingInFile ~ error:", error)
		
	}
}
writingInFile()