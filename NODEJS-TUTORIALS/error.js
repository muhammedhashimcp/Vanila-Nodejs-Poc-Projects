// const error = new Error("something went wrong")
// console.log(error)
// console.log(error.stack)
// console.log(error.message)
// throw new Error("I am error object")
// const { CustomError } = require("./CustomError")
// throw new CustomError("This is a custom error object")
// try {
// 	doSomething()
// } catch (error) {
// 	console.log(error)
// }
function doSomething() {
	const data=fetch("http://localhost:3000")
	// console.log(" I am from doSomething function")
}
// process.on("uncaughtException", (err) => {
// 	console.log("There was an uncaught exception")
// 	process.exit(1)
// })
doSomething()
// using promise
// async await