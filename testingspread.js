// var test = function(...a){ //spread operator will accept everything you dump into it
// 	console.log(a); //returns an array of all arguments
// 	console.log(...a); //returns eveything and not as an array
// 	console.log(typeof(a))
// 	for (let i = 0; i < a.length; i++){ //spread ...a does not work it here
// 		console.log(i)
// 	}
// }
var test = (...a)=>{ //spread operator will accept everything you dump into it
	console.log(a); //returns an array of all arguments
	console.log(...a); //returns eveything and not as an array
	for (let i = 0; i < a.length; i++){ //spread ...a does not work it here
		console.log(i)
		console.log(a[i])
	}
}


test('a', 'b', 'c', 'd')


// return (name) ? ("Hello, " + name + "!") : ("Hello, World");
