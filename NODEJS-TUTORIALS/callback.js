console.log("Task start")
function asyncTask(cb) {
	console.log("Task running")
	setTimeout(cb(), 100);
}
// asyncTask(() => console.log("Dipesh"))
asyncTask(() => console.log(name))
console.log("Task end")
const name = "Dipesh";
const makeApiCall = () => {
	setTimeout(() => {
		console.log("This is async task execution")
	}, 0)
}
makeApiCall(() => {
	makeApiCall(() => {
		makeApiCall(() => {
			makeApiCall(() => {
				makeApiCall(() => {
					makeApiCall(() => {
						makeApiCall(() => {

						})
					})
				})
			})
		})
	})
})