// const promise = new Promise((resolve, reject) => {
// 	console.log("Async task excecution");
// 	if (true) {
// 		// if (false) {
// 		const person = { name: "Dipesh" }
// 		resolve(person)
// 	} else {
// 		const error = { errCode: "1001" }
// 		reject(error)
// 	}
// })
// // promise.then((val) => {
// // 	console.log(val);

// // }, (err) => {
// // 	console.log(err)
// // }).catch(() => console.log("failed from catch!"));
// promise.then((val) => {
// 	console.log(val);

// }).catch(() => console.log("failed from catch!")).finally(() => {
// 	console.log("log from finally")
// })
// function asyncTask() {
// 	return Promise.resolve();

// }
// asyncTask().then(() => console.log(name));
// const name="Dipesh"
// const p = Promise.reject("failed")
// const p = Promise.resolve("success")
// p.then((val) => {
// 	console.log(val);
// 	return "done2"
// }).then((val) => {
// 	console.log(val);
// 	return "done3"
// }).then((val) => {
// 	console.log(val)
// }).catch((val)=>console.log(val))
const makeApiCall = (time) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve("This Api executed in :"+time)
		},time)
	})
}
// makeApiCall(1000).then((val)=>console.log(val))
const multiCallApi = [makeApiCall(1000), makeApiCall(2000), makeApiCall(3000)]
Promise.all(multiCallApi).then((values) => {
	console.log(values)
})
Promise.race(multiCallApi).then((value) => {
	console.log(value)
})
Promise.any(multiCallApi).then((value) => {
	console.log(value)
})