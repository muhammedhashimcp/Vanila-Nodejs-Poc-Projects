// REPL
// Number.
// global.
const repl = require("repl")
const local = repl.start("The node console started")
local.on('exit', () => {
	console.log("exiting REPL")
	process.exit()
})