// const x = '1'
// const y = '2'
// console.log(x, y)
// %s format variable into string
// %d format variable into number
// %i format variable into integer
// %o format variable into object
// console.log(" I am %s adn my age is %d ", "Dipesh", 25)
// // console.clear()
// console.count("I am dipesh")
// console.count("I am dipesh")
// console.count("I am hashim")
// console.countReset("I am dipesh")
// console.count("I am dipesh")
// const function1 = () => console.trace()
// const function2 = () => function1()
// function2()
// const sum=()=>console.log(`the sum of 2 and 3 is : ${2+3}`)
// const multiply = () => console.log(`the sum of 2 and 3 is : ${2 * 3}`)
// const measureTime = () => {
// 	console.time("sum()")
// 	sum()
// 	console.timeEnd("sum()")
// 	console.time("multiply()")
// 	multiply()
// 	console.timeEnd("multiply()")

// }
// measureTime()

const chalk=require('chalk')
const ProgressBar = require('progress')
const bar = new ProgressBar('downloading [:bar] :rate/bps :percent :etas', {
	total:20
})
const timer = setInterval(() => {
	bar.tick()
	if (bar.complete) {
		clearInterval(timer)
	}
}, 100)
console.log(chalk.green("This is nodejs tutorial"))